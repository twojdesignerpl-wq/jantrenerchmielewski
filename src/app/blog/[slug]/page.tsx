import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { CTAButton } from "@/components/shared/CTAButton"
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
  PersonSchema,
} from "@/components/seo/JsonLd"
import { getPostBySlug, getAllPosts } from "@/lib/data/blog-posts"

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter((p) => p.content !== "")
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Artykuł nie znaleziony" }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: "Jan Chmielewski" }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Jan Chmielewski"],
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `https://jantrenerchmielewski.pl/blog/${post.slug}`,
    },
  }
}

// Security note: post.content is static, author-written HTML from blog-posts.ts — not user input.
// It contains no external data and is sanitized by design (no scripts, no event handlers).
function ArticleBody({ html }: { html: string }) {
  // eslint-disable-next-line react/no-danger
  return (
    <div
      className="article-content prose prose-invert prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post || post.content === "") {
    notFound()
  }

  const formattedDate = new Date(post.datePublished).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <LenisProvider>
      {/* Schema markup */}
      <ArticleSchema
        headline={post.title}
        description={post.metaDescription}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        image="https://jantrenerchmielewski.pl/images/jan-hero.png"
        authorName="Jan Chmielewski"
      />
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      {post.faq && post.faq.length > 0 && <FAQSchema questions={post.faq} />}

      <Navbar />

      <main>
        {/* Article header */}
        <header className="relative pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            {/* Breadcrumb nav */}
            <nav aria-label="Nawigacja okruszkowa" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Strona główna
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none">/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none">/</li>
                <li className="line-clamp-1 max-w-[200px] text-foreground/60" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <ScrollReveal>
              {/* Category + meta */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: "oklch(0.65 0.18 210 / 12%)",
                    color: "var(--cyan, oklch(0.65 0.18 210))",
                    border: "1px solid oklch(0.65 0.18 210 / 20%)",
                  }}
                >
                  {post.category}
                </span>
                <time
                  dateTime={post.datePublished}
                  className="text-xs text-muted-foreground"
                >
                  {formattedDate}
                </time>
                <span className="text-xs text-muted-foreground" aria-label={`Czas czytania: ${post.readingTime}`}>
                  · {post.readingTime} czytania
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>
            </ScrollReveal>
          </div>
        </header>

        {/* Article body */}
        <div className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <ScrollReveal>
              <ArticleBody html={post.content} />
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ section */}
        {post.faq && post.faq.length > 0 && (
          <section
            aria-label="Często zadawane pytania"
            className="border-t border-border py-16 md:py-24"
          >
            <div className="container mx-auto max-w-3xl px-4 md:px-6">
              <ScrollReveal>
                <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Często zadawane pytania
                </h2>
              </ScrollReveal>
              <div className="flex flex-col gap-6">
                {post.faq.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.06}>
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h3 className="mb-3 font-semibold text-foreground">{item.question}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Author box */}
        <section
          aria-label="O autorze"
          className="border-t border-border py-16 md:py-24"
        >
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-8 md:p-8">
                {/* Photo */}
                <div className="relative size-20 shrink-0 overflow-hidden rounded-full border-2 border-border sm:size-24">
                  <Image
                    src="/images/jan-hero.png"
                    alt="Jan Chmielewski — Trener Personalny"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--cyan)" }}
                  >
                    Autor artykułu
                  </p>
                  <h3 className="font-heading text-xl font-bold text-foreground">Jan Chmielewski</h3>
                  <p className="text-sm text-muted-foreground">
                    Magister Fizjoterapii, Finalista Mistrzostw Polski w kulturystyce. Trener personalny
                    i dietetyk z 8-letnim doświadczeniem i 200+ zadowolonymi klientami. Specjalizuje się
                    w indywidualnych planach treningowych, dietach online i kompleksowym prowadzeniu online.
                  </p>
                  <Link
                    href="/o-mnie"
                    className="mt-2 w-fit text-sm font-medium underline underline-offset-4 transition-colors hover:text-primary"
                    style={{ color: "var(--cyan)" }}
                  >
                    Dowiedz się więcej o mnie →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related services CTA */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <ScrollReveal>
              <div className="mb-8 text-center">
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--cyan)" }}
                >
                  Gotowy na zmianę?
                </p>
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Zacznij pracować z trenerem
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Artykuły dają wiedzę — ale prawdziwe efekty przynosi indywidualne wsparcie.
                  Sprawdź, które usługi najlepiej odpowiadają Twoim celom.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    href: "/dieta-online",
                    label: "Dieta Online",
                    price: "199 zł",
                    desc: "4-tygodniowy spersonalizowany jadłospis",
                  },
                  {
                    href: "/plan-treningowy",
                    label: "Plan Treningowy",
                    price: "149 zł",
                    desc: "8-tygodniowy program z periodyzacją",
                  },
                  {
                    href: "/prowadzenie-online",
                    label: "Prowadzenie Online",
                    price: "od 399 zł",
                    desc: "Kompleksowa opieka trenerska",
                  },
                ].map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_oklch(0.65_0.18_210/8%)]"
                  >
                    <span className="text-sm font-semibold text-foreground">{service.label}</span>
                    <span className="text-lg font-bold" style={{ color: "var(--cyan)" }}>
                      {service.price}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{service.desc}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CTAButton href="/kontakt" variant="primary" size="lg">
                  Skontaktuj się ze mną
                </CTAButton>
                <CTAButton href="/cennik" variant="secondary">
                  Zobacz pełny cennik
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
