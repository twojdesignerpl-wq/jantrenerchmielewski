export interface CityData {
  slug: string;
  name: string;
  nameDeclension: string; // dopełniacz (z Torunia, z Warszawy)
  region: string;
  isLocal: boolean; // czy w zasięgu treningów personalnych
}

export const cities: CityData[] = [
  { slug: "chelmza", name: "Chełmża", nameDeclension: "Chełmży", region: "kujawsko-pomorskie", isLocal: true },
  { slug: "torun", name: "Toruń", nameDeclension: "Torunia", region: "kujawsko-pomorskie", isLocal: true },
  { slug: "bydgoszcz", name: "Bydgoszcz", nameDeclension: "Bydgoszczy", region: "kujawsko-pomorskie", isLocal: false },
  { slug: "warszawa", name: "Warszawa", nameDeclension: "Warszawy", region: "mazowieckie", isLocal: false },
  { slug: "krakow", name: "Kraków", nameDeclension: "Krakowa", region: "małopolskie", isLocal: false },
  { slug: "gdansk", name: "Gdańsk", nameDeclension: "Gdańska", region: "pomorskie", isLocal: false },
  { slug: "wroclaw", name: "Wrocław", nameDeclension: "Wrocławia", region: "dolnośląskie", isLocal: false },
  { slug: "poznan", name: "Poznań", nameDeclension: "Poznania", region: "wielkopolskie", isLocal: false },
  { slug: "lodz", name: "Łódź", nameDeclension: "Łodzi", region: "łódzkie", isLocal: false },
  { slug: "katowice", name: "Katowice", nameDeclension: "Katowic", region: "śląskie", isLocal: false },
  { slug: "szczecin", name: "Szczecin", nameDeclension: "Szczecina", region: "zachodniopomorskie", isLocal: false },
  { slug: "lublin", name: "Lublin", nameDeclension: "Lublina", region: "lubelskie", isLocal: false },
  { slug: "bialystok", name: "Białystok", nameDeclension: "Białegostoku", region: "podlaskie", isLocal: false },
  { slug: "czestochowa", name: "Częstochowa", nameDeclension: "Częstochowy", region: "śląskie", isLocal: false },
  { slug: "radom", name: "Radom", nameDeclension: "Radomia", region: "mazowieckie", isLocal: false },
  { slug: "kielce", name: "Kielce", nameDeclension: "Kielc", region: "świętokrzyskie", isLocal: false },
  { slug: "olsztyn", name: "Olsztyn", nameDeclension: "Olsztyna", region: "warmińsko-mazurskie", isLocal: false },
  { slug: "rzeszow", name: "Rzeszów", nameDeclension: "Rzeszowa", region: "podkarpackie", isLocal: false },
  { slug: "opole", name: "Opole", nameDeclension: "Opola", region: "opolskie", isLocal: false },
  { slug: "gorzow-wielkopolski", name: "Gorzów Wielkopolski", nameDeclension: "Gorzowa Wielkopolskiego", region: "lubuskie", isLocal: false },
  { slug: "zielona-gora", name: "Zielona Góra", nameDeclension: "Zielonej Góry", region: "lubuskie", isLocal: false },
  { slug: "plock", name: "Płock", nameDeclension: "Płocka", region: "mazowieckie", isLocal: false },
  { slug: "wloclawek", name: "Włocławek", nameDeclension: "Włocławka", region: "kujawsko-pomorskie", isLocal: false },
  { slug: "grudziadz", name: "Grudziądz", nameDeclension: "Grudziądza", region: "kujawsko-pomorskie", isLocal: false },
  { slug: "inowroclaw", name: "Inowrocław", nameDeclension: "Inowrocławia", region: "kujawsko-pomorskie", isLocal: false },
  { slug: "brodnica", name: "Brodnica", nameDeclension: "Brodnicy", region: "kujawsko-pomorskie", isLocal: false },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export const services = [
  {
    slugPrefix: "trener-personalny",
    title: "Trener Personalny",
    titleGenitive: "Trenera Personalnego",
    description: "Profesjonalny trening personalny online i stacjonarny",
    href: "/kontakt",
  },
  {
    slugPrefix: "dietetyk-online",
    title: "Dietetyk Online",
    titleGenitive: "Dietetyka Online",
    description: "Indywidualne plany żywieniowe online",
    href: "/dieta-online",
  },
  {
    slugPrefix: "plan-treningowy-online",
    title: "Plan Treningowy Online",
    titleGenitive: "Planu Treningowego Online",
    description: "Spersonalizowane programy treningowe",
    href: "/plan-treningowy",
  },
  {
    slugPrefix: "dieta-online",
    title: "Dieta Online",
    titleGenitive: "Diety Online",
    description: "Indywidualne diety online dopasowane do celów",
    href: "/dieta-online",
  },
] as const;
