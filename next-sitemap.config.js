/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jantrenerchmielewski.pl",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/admin/*"],
  additionalPaths: async () => {
    const cities = [
      "torun", "bydgoszcz", "warszawa", "krakow", "gdansk",
      "wroclaw", "poznan", "lodz", "katowice", "szczecin",
      "lublin", "bialystok", "czestochowa", "radom", "kielce",
      "olsztyn", "rzeszow", "opole", "gorzow-wielkopolski",
      "zielona-gora", "plock", "wloclawek", "grudziadz",
      "inowroclaw", "brodnica", "chelmza",
    ];

    const services = [
      "trener-personalny",
      "dietetyk-online",
      "plan-treningowy-online",
      "dieta-online",
    ];

    const paths = [];

    for (const city of cities) {
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
