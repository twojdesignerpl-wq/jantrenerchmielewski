import type { Metadata } from "next"
import Link from "next/link"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { BlogCard } from "@/components/blog/BlogCard"
import { BreadcrumbSchema, ItemListSchema } from "@/components/seo/JsonLd"
import { getAllPosts, blogCategories } from "@/lib/data/blog-posts"

export const metadata: Metadata = {
  title: "Blog — Trening, Dieta i Coaching Online",
  description:
    "Ekspertowa wiedza o treningu siłowym, diecie i prowadzeniu online. Artykuły pisane przez magistra fizjoterapii i finalistę Mistrzostw Polski w kulturystyce — Jana Chmielewskiego.",
  keywords: [
    "blog fitness",
    "trening siłowy artykuły",
    "dieta online poradnik",
    "prowadzenie online trener",
    "plan treningowy blog",
    "dieta sportowa",
    "Jan Chmielewski blog",
  ],
  openGraph: {
    title: "Blog — Trening, Dieta i Coaching Online | Jan Chmielewski",
    description:
      "Ekspertowa wiedza o treningu siłowym, diecie i prowadzeniu online od magistra fizjoterapii.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Blog Jan Chmielewski" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://jantrenerchmielewski.pl/blog" },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const publishedPosts = posts.filter((p) => p.content !== "")
  const [featuredPost, ...restPosts] = publishedPosts

  const itemListItems = publishedPosts.map((post, index) => ({
    name: post.title,
    url: `https://jantrenerchmielewski.pl/blog/${post.slug}`,
    position: index + 1,
  }))

  return (
    <LenisProvider>
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <ItemListSchema items={itemListItems} />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="section-glow relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <ScrollReveal>
              <div
                className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest"
                style={{ color: "var(--cyan)" }}
              >
                Wiedza eksperta
              </div>
              <SectionHeading
                title="Blog"
                description="Ekspertowe artykuły o treningu siłowym, diecie i coaching online. Pisane z perspektywy magistra fizjoterapii i finalisty Mistrzostw Polski w kulturystyce."
                align="left"
              />
            </ScrollReveal>

            {/* Gradient divider */}
            <div
              className="mt-10 h-px"
              style={{
                background:
                  "linear-gradient(to right, oklch(0.65 0.18 210 / 30%), transparent 60%)",
              }}
              aria-hidden="true"
            />
          </div>
        </section>

        {/* Featured post */}
        {featuredPost && (
          <section className="pb-8 md:pb-12">
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
              <ScrollReveal>
                <BlogCard
                  title={featuredPost.title}
                  slug={featuredPost.slug}
                  excerpt={featuredPost.excerpt}
                  date={featuredPost.datePublished}
                  readingTime={featuredPost.readingTime}
                  category={featuredPost.category}
                  imageSrc={featuredPost.imageSrc}
                  featured
                />
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Regular posts grid */}
        {restPosts.length > 0 && (
          <section className="pb-16 md:pb-24">
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
              <ScrollReveal>
                <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Więcej artykułów
                </h2>
              </ScrollReveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {restPosts.map((post, index) => (
                  <ScrollReveal key={post.slug} delay={index * 0.08}>
                    <BlogCard
                      title={post.title}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      date={post.datePublished}
                      readingTime={post.readingTime}
                      category={post.category}
                      imageSrc={post.imageSrc}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <ScrollReveal>
              <h2 className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Kategorie
              </h2>
              <div className="flex flex-wrap gap-3">
                {blogCategories.slice(1).map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SEO paragraph */}
        <section className="section-glow-bottom border-t border-border py-16">
          <div className="container mx-auto max-w-3xl px-6 md:px-8">
            <ScrollReveal>
              <div className="max-w-none text-base leading-relaxed text-muted-foreground">
                <p className="mb-4">
                  Na tym blogu znajdziesz eksperckie artykuły z zakresu treningu siłowego, żywienia sportowego
                  i coachingu online — pisane przez Jana Chmielewskiego, magistra fizjoterapii i finalistę
                  Mistrzostw Polski w kulturystyce z 8-letnim doświadczeniem.
                </p>
                <p>
                  Jeśli szukasz indywidualnego wsparcia, sprawdź dostępne usługi:{" "}
                  <Link href="/dieta-online" className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
                    dieta online (199 zł)
                  </Link>
                  ,{" "}
                  <Link href="/plan-treningowy" className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
                    plan treningowy online (149 zł)
                  </Link>
                  ,{" "}
                  <Link href="/prowadzenie-online" className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
                    prowadzenie online od 399 zł
                  </Link>{" "}
                  i{" "}
                  <Link href="/trening-personalny-chelmza" className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
                    trening personalny w Chełmży (149 zł/sesja)
                  </Link>
                  . Masz pytania? Skontaktuj się przez{" "}
                  <Link href="/kontakt" className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
                    formularz kontaktowy
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  )
}
