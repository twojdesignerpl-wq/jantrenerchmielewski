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

    return paths;
  },
};
