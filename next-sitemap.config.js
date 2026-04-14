/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jantrenerchmielewski.pl",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/admin/*"],
  additionalPaths: async () => {
    const localCities = ["chelmza", "torun"];
    const topCities = [
      "warszawa", "krakow", "gdansk", "wroclaw", "poznan",
      "lodz", "katowice", "szczecin", "lublin", "bydgoszcz",
    ];
    const otherCities = [
      "bialystok", "czestochowa", "radom", "kielce",
      "olsztyn", "rzeszow", "opole", "gorzow-wielkopolski",
      "zielona-gora", "plock", "wloclawek", "grudziadz",
      "inowroclaw", "brodnica",
      // nowe miasta — batch 2
      "elblag", "tarnow", "kalisz", "legnica", "nowy-sacz",
      "tychy", "ruda-slaska", "sosnowiec", "gliwice", "zabrze",
      "bytom", "stalowa-wola", "ostrow-wielkopolski",
      "piotrkow-trybunalski", "siedlce",
    ];

    const services = [
      "trener-personalny",
      "dietetyk-online",
      "plan-treningowy-online",
      "dieta-online",
    ];

    const paths = [];

    // Service pillar pages — highest priority
    const pillarPages = [
      "/dieta-online",
      "/plan-treningowy",
      "/prowadzenie-online",
      "/trening-personalny-chelmza",
    ];
    for (const loc of pillarPages) {
      paths.push({
        loc,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    }

    // Local city pages — high priority
    for (const city of localCities) {
      for (const service of services) {
        paths.push({
          loc: `/${service}-${city}`,
          changefreq: "weekly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      }
    }

    // Top-10 cities — medium-high priority
    for (const city of topCities) {
      for (const service of services) {
        paths.push({
          loc: `/${service}-${city}`,
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        });
      }
    }

    // Remaining cities — standard priority
    for (const city of otherCities) {
      for (const service of services) {
        paths.push({
          loc: `/${service}-${city}`,
          changefreq: "monthly",
          priority: 0.6,
          lastmod: new Date().toISOString(),
        });
      }
    }

    // Static content pages
    const staticPages = [
      { loc: "/blog", priority: 0.8, changefreq: "weekly" },
      { loc: "/faq", priority: 0.7, changefreq: "monthly" },
      { loc: "/jak-to-dziala", priority: 0.7, changefreq: "monthly" },
      { loc: "/efekty", priority: 0.8, changefreq: "weekly" },
      { loc: "/mapa-strony", priority: 0.3, changefreq: "monthly" },
      {
        loc: "/dieta-online-vs-prowadzenie-online",
        priority: 0.7,
        changefreq: "monthly",
      },
      {
        loc: "/plan-treningowy-vs-dieta-online",
        priority: 0.7,
        changefreq: "monthly",
      },
    ];
    for (const page of staticPages) {
      paths.push({ ...page, lastmod: new Date().toISOString() });
    }

    // Blog article paths
    const blogArticles = [
      "/blog/dieta-online-kompletny-przewodnik",
      "/blog/plan-treningowy-online-przewodnik",
      "/blog/prowadzenie-online-co-to-jest",
      "/blog/trener-personalny-chelmza-dlaczego-warto",
      "/blog/ile-kosztuje-dieta-online-ceny",
      "/blog/ile-kosztuje-trener-personalny",
      "/blog/dieta-na-mase-jak-zbudowac-mase",
      "/blog/dieta-na-redukcje-jak-schudnac",
      "/blog/cwiczenia-na-brzuch-przewodnik",
      "/blog/prowadzenie-online-vs-plan-treningowy",
    ];
    for (const loc of blogArticles) {
      paths.push({
        loc,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    return paths;
  },
};
