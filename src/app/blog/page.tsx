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
    "Ekspertowa wiedza o treningu siłowym, diecie i prowadzeniu online. Artykuły pisane przez magistra fizjoterapii i finalistę Mistrzostw Polski w kulturystyce — Jana Chmielowskiego.",
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
  const stubPosts = posts.filter((p) => p.content === "")

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
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <ScrollReveal>
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--cyan)" }}>
                Wiedza eksperta
              </div>
              <SectionHeading
                title="Blog"
                description="Ekspertowe artykuły o treningu siłowym, diecie i coaching online. Pisane z perspektywy magistra fizjoterapii i finalisty Mistrzostw Polski w kulturystyce."
                align="left"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Published articles */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            {publishedPosts.length > 0 ? (
              <>
                <ScrollReveal>
                  <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Najnowsze artykuły
                  </h2>
                </ScrollReveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {publishedPosts.map((post, index) => (
                    <ScrollReveal key={post.slug} delay={index * 0.08}>
                      <BlogCard
                        title={post.title}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        date={post.datePublished}
                        readingTime={post.readingTime}
                        category={post.category}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </>
            ) : null}

            {/* Upcoming articles */}
            {stubPosts.length > 0 && (
              <div className="mt-16">
                <ScrollReveal>
                  <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Wkrótce
                  </h2>
                </ScrollReveal>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {stubPosts.map((post, index) => (
                    <ScrollReveal key={post.slug} delay={index * 0.06}>
                      <div
                        className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card/40 p-5 opacity-60"
                        aria-label={`Artykuł wkrótce: ${post.title}`}
                      >
                        <span
                          className="inline-block w-fit rounded-full px-2.5 py-1 text-xs font-medium"
                          style={{
                            backgroundColor: "oklch(0.14 0.025 232 / 60%)",
                            color: "var(--cyan)",
                            border: "1px solid oklch(0.65 0.18 210 / 15%)",
                          }}
                        >
                          {post.category}
                        </span>
                        <p className="font-heading text-base font-semibold leading-snug text-foreground/70">
                          {post.title}
                        </p>
                        <p className="text-xs text-muted-foreground/60">{post.readingTime} czytania</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Categories overview */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-wrap gap-3">
                {blogCategories.slice(1).map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SEO paragraph with internal links */}
        <section className="border-t border-border py-16">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <ScrollReveal>
              <div className="prose prose-invert prose-sm max-w-none text-muted-foreground">
                <p>
                  Na tym blogu znajdziesz eksperckie artykuły z zakresu treningu siłowego, dietetyki sportowej
                  i coachingu online — pisane przez Jana Chmielowskiego, magistra fizjoterapii i finalistę
                  Mistrzostw Polski w kulturystyce z 8-letnim doświadczeniem.
                </p>
                <p>
                  Jeśli szukasz indywidualnego wsparcia, sprawdź dostępne usługi:{" "}
                  <Link href="/dieta-online" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                    dieta online (199 zł)
                  </Link>
                  ,{" "}
                  <Link href="/plan-treningowy" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                    plan treningowy online (149 zł)
                  </Link>
                  ,{" "}
                  <Link href="/prowadzenie-online" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                    prowadzenie online od 399 zł
                  </Link>{" "}
                  i{" "}
                  <Link href="/trening-personalny-chelmza" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                    trening personalny w Chełmży (149 zł/sesja)
                  </Link>
                  . Masz pytania? Skontaktuj się przez{" "}
                  <Link href="/kontakt" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
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
