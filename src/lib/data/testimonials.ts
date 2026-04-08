export interface Testimonial {
  name: string;
  city: string;
  service: string;
  result: string;
  quote: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marta K.",
    city: "Toruń",
    service: "Prowadzenie Online",
    result: "-12 kg w 4 miesiące",
    quote:
      "Jan to jedyny trener, który naprawdę zrozumiał moje potrzeby. Jako mama dwójki dzieci nie miałam czasu na siłownię — dzięki prowadzeniu online ćwiczę w domu, a dieta jest dopasowana do całej rodziny. Efekty przeszły moje oczekiwania.",
    rating: 5,
    date: "2025-11-15",
  },
  {
    name: "Kamil W.",
    city: "Warszawa",
    service: "Plan Treningowy",
    result: "+6 kg masy mięśniowej w 8 tygodni",
    quote:
      "Plan treningowy od Jana to zupełnie inny poziom niż to, co znajdziesz w internecie. Progresja tydzień po tygodniu, jasne instrukcje, notacja ćwiczeń — w końcu przestałem stać w miejscu.",
    rating: 5,
    date: "2025-10-22",
  },
  {
    name: "Anna S.",
    city: "Kraków",
    service: "Dieta Online",
    result: "-8 kg, poprawa wyników krwi",
    quote:
      "Miałam insulinooporność i bałam się kolejnej diety, która nic nie da. Jan ułożył plan uwzględniający moje wyniki badań. Po 4 tygodniach schudłam 8 kg i moje wyniki krwi się poprawiły. Lekarz był zaskoczony.",
    rating: 5,
    date: "2025-09-10",
  },
  {
    name: "Piotr M.",
    city: "Chełmża",
    service: "Trening Personalny",
    result: "Powrót do formy po kontuzji kolana",
    quote:
      "Po kontuzji ACL bałem się wrócić na siłownię. Jako fizjoterapeuta, Jan dokładnie wiedział, które ćwiczenia są bezpieczne, a które muszą poczekać. Po 3 miesiącach treningów personalnych wróciłem do pełnej sprawności.",
    rating: 5,
    date: "2025-12-03",
  },
  {
    name: "Katarzyna L.",
    city: "Gdańsk",
    service: "Prowadzenie Online",
    result: "-15 kg w 6 miesięcy",
    quote:
      "Cotygodniowe raporty i stały kontakt z Janem sprawiły, że nigdy nie czułam się sama w tym procesie. Każdy tydzień przynosił korekty diety i treningu — to nie był gotowy plan, ale żywe prowadzenie.",
    rating: 5,
    date: "2025-08-20",
  },
  {
    name: "Tomasz B.",
    city: "Wrocław",
    service: "Plan Treningowy",
    result: "Przebicie plateau po 2 latach stagnacji",
    quote:
      "Przez 2 lata ćwiczyłem sam i nie widziałem postępów. Plan od Jana z progresją i periodyzacją zmienił wszystko. W 8 tygodni pobiłem rekordy we wszystkich podnosach.",
    rating: 5,
    date: "2026-01-14",
  },
  {
    name: "Agnieszka R.",
    city: "Poznań",
    service: "Dieta Online",
    result: "Poprawa energii i snu",
    quote:
      "Nie chodziło mi o wagę, a o samopoczucie. Jan ułożył dietę z naciskiem na jakość odżywiania, timing posiłków i odpowiednie nawodnienie. Efekt? Więcej energii, lepszy sen i zero problemów trawiennych.",
    rating: 5,
    date: "2026-02-01",
  },
  {
    name: "Łukasz D.",
    city: "Toruń",
    service: "Trening Personalny",
    result: "Przygotowanie do pierwszych zawodów",
    quote:
      "Jan sam jest finalistą Mistrzostw Polski — kto lepiej przygotuje do zawodów? Pod jego okiem przeszedłem pełną dietę i trening przygotowawczy. Zająłem 3. miejsce na regionalnych zawodach w kulturystyce.",
    rating: 5,
    date: "2025-07-18",
  },
];

export const aggregateStats = {
  ratingValue: "4.9",
  reviewCount: String(testimonials.length),
  totalClients: "200+",
  avgFatLoss: "8-12 kg",
  avgMuscleGain: "3-5 kg",
  retentionRate: "95%",
};
