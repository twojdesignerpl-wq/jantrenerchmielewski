export interface CityData {
  slug: string;
  name: string;
  nameDeclension: string; // dopełniacz (z Torunia, z Warszawy)
  nameLocative: string; // miejscownik (w Toruniu, w Warszawie)
  region: string;
  voivodeship: string; // pełna nazwa województwa
  population: string; // przybliżona liczba mieszkańców
  fitnessContext: string; // unikalne zdania o scenie fitness/zdrowie w tym mieście
  isLocal: boolean; // czy w zasięgu treningów personalnych
  distanceFromChelmza?: string; // tylko dla pobliskich miast
}

export const cities: CityData[] = [
  {
    slug: "chelmza",
    name: "Chełmża",
    nameDeclension: "Chełmży",
    nameLocative: "w Chełmży",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~14 000",
    fitnessContext:
      "Chełmża, z ponad 14 000 mieszkańców, to dynamicznie rozwijające się miasto w sercu Kujaw. Jako baza Jana Chmielewskiego oferuje możliwość treningów personalnych stacjonarnych oraz pełne prowadzenie online.",
    isLocal: true,
  },
  {
    slug: "torun",
    name: "Toruń",
    nameDeclension: "Torunia",
    nameLocative: "w Toruniu",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~200 000",
    fitnessContext:
      "Toruń, z ponad 200 000 mieszkańców i bogatą sceną sportową, jest naturalnym zapleczem dla profesjonalnych treningów. Bliskość Chełmży (18 km) umożliwia zarówno sesje stacjonarne, jak i wygodne prowadzenie online.",
    isLocal: true,
    distanceFromChelmza: "18 km (~20 min)",
  },
  {
    slug: "bydgoszcz",
    name: "Bydgoszcz",
    nameDeclension: "Bydgoszczy",
    nameLocative: "w Bydgoszczy",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~350 000",
    fitnessContext:
      "Bydgoszcz to największe miasto województwa kujawsko-pomorskiego z prężnie rozwijającą się kulturą sportową i licznymi klubami fitness. Odległość od Chełmży pozwala na elastyczne łączenie treningów stacjonarnych z prowadzeniem online.",
    isLocal: false,
    distanceFromChelmza: "~45 km (~40 min)",
  },
  {
    slug: "warszawa",
    name: "Warszawa",
    nameDeclension: "Warszawy",
    nameLocative: "w Warszawie",
    region: "mazowieckie",
    voivodeship: "województwo mazowieckie",
    population: "~1 850 000",
    fitnessContext:
      "Warszawa to największy rynek usług fitness w Polsce, z setkami siłowni i rosnącą świadomością zdrowotną. Prowadzenie online eliminuje koszty stołecznych trenerów przy zachowaniu najwyższej jakości.",
    isLocal: false,
  },
  {
    slug: "krakow",
    name: "Kraków",
    nameDeclension: "Krakowa",
    nameLocative: "w Krakowie",
    region: "małopolskie",
    voivodeship: "województwo małopolskie",
    population: "~800 000",
    fitnessContext:
      "Kraków łączy akademicką energię z rosnącym zainteresowaniem zdrowym stylem życia — to miasto, gdzie trening online doskonale wpisuje się w zabiegany rytm studentów i profesjonalistów. Lokalna scena fitness jest aktywna, ale koszty trenerów należą do najwyższych poza Warszawą.",
    isLocal: false,
  },
  {
    slug: "gdansk",
    name: "Gdańsk",
    nameDeclension: "Gdańska",
    nameLocative: "w Gdańsku",
    region: "pomorskie",
    voivodeship: "województwo pomorskie",
    population: "~490 000",
    fitnessContext:
      "Gdańsk, miasto portowe z aktywnym trójmiejskim trybem życia, cechuje się wysoką kulturą sportu i rekreacji nad Bałtykiem. Mieszkańcy Trójmiasta coraz częściej sięgają po prowadzenie online jako elastyczną alternatywę dla stacjonarnych siłowni.",
    isLocal: false,
  },
  {
    slug: "wroclaw",
    name: "Wrocław",
    nameDeclension: "Wrocławia",
    nameLocative: "we Wrocławiu",
    region: "dolnośląskie",
    voivodeship: "województwo dolnośląskie",
    population: "~650 000",
    fitnessContext:
      "Wrocław to jedno z najbardziej dynamicznych miast w Polsce pod względem kultury fitness — z gęstą siecią siłowni, biegaczy wzdłuż Odry i aktywnych społeczności sportowych. Online coaching pozwala mieszkańcom korzystać z doświadczenia trenera niezależnie od dzielnicy.",
    isLocal: false,
  },
  {
    slug: "poznan",
    name: "Poznań",
    nameDeclension: "Poznania",
    nameLocative: "w Poznaniu",
    region: "wielkopolskie",
    voivodeship: "województwo wielkopolskie",
    population: "~550 000",
    fitnessContext:
      "Poznań słynie z przedsiębiorczości i dbałości o zdrowie — mieszkańcy Wielkopolski chętnie inwestują w swój rozwój fizyczny i regularnie korzystają z usług trenerskich. Trening online jest tu naturalnym wyborem dla zapracowanych specjalistów ceniących efektywność.",
    isLocal: false,
  },
  {
    slug: "lodz",
    name: "Łódź",
    nameDeclension: "Łodzi",
    nameLocative: "w Łodzi",
    region: "łódzkie",
    voivodeship: "województwo łódzkie",
    population: "~680 000",
    fitnessContext:
      "Łódź przechodzi dynamiczną transformację — wraz z rewitalizacją centrum rośnie świadomość zdrowotna mieszkańców i popyt na profesjonalne prowadzenie treningowe. Online coaching stanowi tu dostępną cenowo odpowiedź na potrzeby aktywnych łodzian.",
    isLocal: false,
  },
  {
    slug: "katowice",
    name: "Katowice",
    nameDeclension: "Katowic",
    nameLocative: "w Katowicach",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~290 000",
    fitnessContext:
      "Katowice i cała aglomeracja śląska to jeden z największych rynków fitness w Polsce — aktywność fizyczna jest tu głęboko zakorzeniona w kulturze pracy i regeneracji. Prowadzenie online sprawdza się idealnie w górnośląskim tempie życia, łącząc elastyczność z profesjonalizmem.",
    isLocal: false,
  },
  {
    slug: "szczecin",
    name: "Szczecin",
    nameDeclension: "Szczecina",
    nameLocative: "w Szczecinie",
    region: "zachodniopomorskie",
    voivodeship: "województwo zachodniopomorskie",
    population: "~400 000",
    fitnessContext:
      "Szczecin, z bliskim dostępem do jezior i lasów, promuje aktywny styl życia na świeżym powietrzu. Trening online jest idealnym uzupełnieniem dla szczecinian łączących outdoor z regularnym planem treningowym.",
    isLocal: false,
  },
  {
    slug: "lublin",
    name: "Lublin",
    nameDeclension: "Lublina",
    nameLocative: "w Lublinie",
    region: "lubelskie",
    voivodeship: "województwo lubelskie",
    population: "~340 000",
    fitnessContext:
      "Lublin to dynamiczne centrum akademickie Wschodniej Polski, gdzie kultura zdrowia i sportu systematycznie się rozwija. Studenci i pracownicy lubelskich uczelni coraz chętniej korzystają z online coachingu jako elastycznego i efektywnego rozwiązania.",
    isLocal: false,
  },
  {
    slug: "bialystok",
    name: "Białystok",
    nameDeclension: "Białegostoku",
    nameLocative: "w Białymstoku",
    region: "podlaskie",
    voivodeship: "województwo podlaskie",
    population: "~300 000",
    fitnessContext:
      "Białystok, stolica Podlasia, charakteryzuje się aktywną społecznością sportową i rosnącą liczbą siłowni oraz studiów fitness. Bliskość przyrody Podlasia sprzyja połączeniu treningów na świeżym powietrzu z profesjonalnym planem online.",
    isLocal: false,
  },
  {
    slug: "czestochowa",
    name: "Częstochowa",
    nameDeclension: "Częstochowy",
    nameLocative: "w Częstochowie",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~220 000",
    fitnessContext:
      "Częstochowa to miasto o silnej tożsamości lokalnej, gdzie rośnie zainteresowanie zdrowym trybem życia i aktywnym wypoczynkiem. Online coaching pozwala mieszkańcom korzystać z profesjonalnego prowadzenia bez konieczności dojazdów do większych ośrodków.",
    isLocal: false,
  },
  {
    slug: "radom",
    name: "Radom",
    nameDeclension: "Radomia",
    nameLocative: "w Radomiu",
    region: "mazowieckie",
    voivodeship: "województwo mazowieckie",
    population: "~210 000",
    fitnessContext:
      "Radom to jedno z większych miast Mazowsza, gdzie świadomość zdrowotna systematycznie wzrasta, a lokalne siłownie przeżywają rozkwit. Trening online daje radomianom dostęp do ekspertyzy na poziomie warszawskim w przystępnej cenie.",
    isLocal: false,
  },
  {
    slug: "kielce",
    name: "Kielce",
    nameDeclension: "Kielc",
    nameLocative: "w Kielcach",
    region: "świętokrzyskie",
    voivodeship: "województwo świętokrzyskie",
    population: "~195 000",
    fitnessContext:
      "Kielce, otoczone Górami Świętokrzyskimi, to miasto aktywnych mieszkańców z pasją do górskich wędrówek i sportu. Profesjonalny plan treningowy online idealnie uzupełnia aktywność na szlakach i w lokalnych klubach fitness.",
    isLocal: false,
  },
  {
    slug: "olsztyn",
    name: "Olsztyn",
    nameDeclension: "Olsztyna",
    nameLocative: "w Olsztynie",
    region: "warmińsko-mazurskie",
    voivodeship: "województwo warmińsko-mazurskie",
    population: "~175 000",
    fitnessContext:
      "Olsztyn, stolica Warmii i Mazur, słynie z aktywnego trybu życia wśród jezior i lasów Mazur. Mieszkańcy chętnie łączą aktywność na świeżym powietrzu z profesjonalnym prowadzeniem treningowym online przez cały rok.",
    isLocal: false,
  },
  {
    slug: "rzeszow",
    name: "Rzeszów",
    nameDeclension: "Rzeszowa",
    nameLocative: "w Rzeszowie",
    region: "podkarpackie",
    voivodeship: "województwo podkarpackie",
    population: "~200 000",
    fitnessContext:
      "Rzeszów to jedno z najszybciej rozwijających się miast w Polsce z dynamicznie rosnącą sceną fitness i sportu. Młoda, ambitna społeczność Rzeszowa chętnie korzysta z online coachingu, by osiągać cele sylwetkowe na europejskim poziomie.",
    isLocal: false,
  },
  {
    slug: "opole",
    name: "Opole",
    nameDeclension: "Opola",
    nameLocative: "w Opolu",
    region: "opolskie",
    voivodeship: "województwo opolskie",
    population: "~130 000",
    fitnessContext:
      "Opole, kameralna stolica Opolszczyzny, oferuje dobrze rozwiniętą infrastrukturę sportową jak na swój rozmiar. Mieszkańcy doceniają indywidualne podejście w treningu online, które jest tu cenną alternatywą dla oferty lokalnych klubów.",
    isLocal: false,
  },
  {
    slug: "gorzow-wielkopolski",
    name: "Gorzów Wielkopolski",
    nameDeclension: "Gorzowa Wielkopolskiego",
    nameLocative: "w Gorzowie Wielkopolskim",
    region: "lubuskie",
    voivodeship: "województwo lubuskie",
    population: "~125 000",
    fitnessContext:
      "Gorzów Wielkopolski to aktywne miasto nad Wartą z silną tradycją sportową — siedziba słynnej drużyny żużlowej i prężnym klubem sportowym. Trening online doskonale uzupełnia lokalną infrastrukturę, oferując spersonalizowane podejście dla każdego mieszkańca.",
    isLocal: false,
  },
  {
    slug: "zielona-gora",
    name: "Zielona Góra",
    nameDeclension: "Zielonej Góry",
    nameLocative: "w Zielonej Górze",
    region: "lubuskie",
    voivodeship: "województwo lubuskie",
    population: "~140 000",
    fitnessContext:
      "Zielona Góra, otoczona winnicami i lasami Ziemi Lubuskiej, sprzyja aktywnemu wypoczynkowi i zdrowemu stylowi życia. Online coaching jest tu naturalnym wyborem dla mieszkańców ceniących elastyczność i profesjonalizm w jednym.",
    isLocal: false,
  },
  {
    slug: "plock",
    name: "Płock",
    nameDeclension: "Płocka",
    nameLocative: "w Płocku",
    region: "mazowieckie",
    voivodeship: "województwo mazowieckie",
    population: "~120 000",
    fitnessContext:
      "Płock to przemysłowe miasto nad Wisłą z rosnącą świadomością zdrowotną i aktywną społecznością sportową. Prowadzenie online daje płocczanom dostęp do wiedzy i metod niedostępnych lokalnie, przy zachowaniu wygody treningów w domu lub na miejscowej siłowni.",
    isLocal: false,
  },
  {
    slug: "wloclawek",
    name: "Włocławek",
    nameDeclension: "Włocławka",
    nameLocative: "we Włocławku",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~110 000",
    fitnessContext:
      "Włocławek, ważne centrum regionu kujawskiego, dysponuje rozwijającą się bazą sportową i rosnącym zainteresowaniem zdrowym stylem życia. Jako miasto w tym samym województwie co Chełmża, Włocławek jest naturalnym obszarem zasięgu zarówno dla prowadzenia online, jak i okazjonalnych spotkań stacjonarnych.",
    isLocal: false,
    distanceFromChelmza: "~75 km (~1 godz.)",
  },
  {
    slug: "grudziadz",
    name: "Grudziądz",
    nameDeclension: "Grudziądza",
    nameLocative: "w Grudziądzu",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~95 000",
    fitnessContext:
      "Grudziądz, historyczne miasto nad Wisłą, ma aktywną społeczność sportową i dobre warunki do uprawiania różnych dyscyplin. Bliskość Chełmży sprawia, że mieszkańcy Grudziądza mogą korzystać zarówno z treningów online, jak i okresowych sesji stacjonarnych z Janem Chmielewskim.",
    isLocal: false,
    distanceFromChelmza: "~35 km (~30 min)",
  },
  {
    slug: "inowroclaw",
    name: "Inowrocław",
    nameDeclension: "Inowrocławia",
    nameLocative: "w Inowrocławiu",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~75 000",
    fitnessContext:
      "Inowrocław, znany z solanek i tradycji uzdrowiskowych, to miasto, gdzie dbałość o zdrowie i kondycję ma długą historię. Ta prozdrowotna kultura sprawia, że mieszkańcy Inowrocławia są wdzięczną grupą dla profesjonalnego prowadzenia treningowego online.",
    isLocal: false,
    distanceFromChelmza: "~60 km (~50 min)",
  },
  {
    slug: "brodnica",
    name: "Brodnica",
    nameDeclension: "Brodnicy",
    nameLocative: "w Brodnicy",
    region: "kujawsko-pomorskie",
    voivodeship: "województwo kujawsko-pomorskie",
    population: "~28 000",
    fitnessContext:
      "Brodnica, malownicze miasto nad Drwęcą z dostępem do jezior Pojezierza Brodnickiego, przyciąga miłośników aktywnego wypoczynku. Mieszkańcy Brodnicy i okolic mogą liczyć na profesjonalne prowadzenie online oraz możliwość spotkań stacjonarnych dzięki relatywnie krótkiej odległości od Chełmży.",
    isLocal: false,
    distanceFromChelmza: "~40 km (~35 min)",
  },
  {
    slug: "elblag",
    name: "Elbląg",
    nameDeclension: "Elbląga",
    nameLocative: "w Elblągu",
    region: "warmińsko-mazurskie",
    voivodeship: "województwo warmińsko-mazurskie",
    population: "~120 000",
    fitnessContext:
      "Elbląg, drugie co do wielkości miasto Warmii i Mazur, dynamicznie rozbudowuje infrastrukturę sportową i rekreacyjną nad Zalewem Wiślanym. Mieszkańcy Elbląga coraz chętniej sięgają po prowadzenie online, by korzystać z eksperckich planów treningowych bez konieczności dojazdów do większych ośrodków. Trening online to idealne rozwiązanie dla aktywnych elblążan szukających profesjonalnego podejścia w kameralnym mieście.",
    isLocal: false,
  },
  {
    slug: "tarnow",
    name: "Tarnów",
    nameDeclension: "Tarnowa",
    nameLocative: "w Tarnowie",
    region: "małopolskie",
    voivodeship: "województwo małopolskie",
    population: "~110 000",
    fitnessContext:
      "Tarnów, jedno z ważniejszych miast Małopolski, charakteryzuje się rosnącą kulturą fitness i silną tożsamością lokalnej społeczności sportowej. Mieszkańcy Tarnowa cenią indywidualne podejście, które online coaching zapewnia bez konieczności ponoszenia kosztów krakowskich trenerów. Profesjonalne prowadzenie online to naturalny wybór dla tarnowian pragnących realnych efektów.",
    isLocal: false,
  },
  {
    slug: "kalisz",
    name: "Kalisz",
    nameDeclension: "Kalisza",
    nameLocative: "w Kaliszu",
    region: "wielkopolskie",
    voivodeship: "województwo wielkopolskie",
    population: "~100 000",
    fitnessContext:
      "Kalisz — jedno z najstarszych miast Polski — prężnie rozwija się pod względem sportowym, z aktywną sceną biegową i rosnącą liczbą siłowni. Mieszkańcy Kalisza doceniają elastyczność prowadzenia online, które pozwala trenować w oparciu o profesjonalny plan bez względu na lokalną dostępność trenerów. To idealne rozwiązanie dla kaliszan łączących pracę z regularnymi treningami.",
    isLocal: false,
  },
  {
    slug: "legnica",
    name: "Legnica",
    nameDeclension: "Legnicy",
    nameLocative: "w Legnicy",
    region: "dolnośląskie",
    voivodeship: "województwo dolnośląskie",
    population: "~100 000",
    fitnessContext:
      "Legnica, ważne centrum dolnośląskie z dynamicznie rozwijającą się infrastrukturą sportową, jest miastem o rosnącej świadomości zdrowotnej mieszkańców. Prowadzenie online eliminuje bariery dostępu do wykwalifikowanych specjalistów, oferując legniczanom wiedzę i metody na poziomie wrocławskim. Indywidualny plan treningowy i dietetyczny to inwestycja, którą coraz chętniej wybierają mieszkańcy Legnicy.",
    isLocal: false,
  },
  {
    slug: "nowy-sacz",
    name: "Nowy Sącz",
    nameDeclension: "Nowego Sącza",
    nameLocative: "w Nowym Sączu",
    region: "małopolskie",
    voivodeship: "województwo małopolskie",
    population: "~80 000",
    fitnessContext:
      "Nowy Sącz, otoczony pasmami Beskidu Sądeckiego, to miasto aktywnych mieszkańców z pasją do górskich wędrówek, biegania i sportu całorocznego. Profesjonalny plan treningowy online znakomicie uzupełnia tutejszy aktywny tryb życia, dostarczając metodycznej struktury i progresji. Trening online dla nowosądeczan to wygodna droga do realnych wyników bez rezygnacji z ulubionych aktywności.",
    isLocal: false,
  },
  {
    slug: "tychy",
    name: "Tychy",
    nameDeclension: "Tychów",
    nameLocative: "w Tychach",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~130 000",
    fitnessContext:
      "Tychy to jedno z najprężniej rozwijających się miast aglomeracji śląskiej, z dobrze rozwiniętą bazą sportową i aktywną społecznością fitness. Mieszkańcy Tychów korzystają z bliskości całej śląskiej infrastruktury rekreacyjnej, a prowadzenie online uzupełnia ją o indywidualne podejście eksperta. Online coaching to tu wybór świadomych tyskich, którzy stawiają na skuteczność i efekty.",
    isLocal: false,
  },
  {
    slug: "ruda-slaska",
    name: "Ruda Śląska",
    nameDeclension: "Rudy Śląskiej",
    nameLocative: "w Rudzie Śląskiej",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~140 000",
    fitnessContext:
      "Ruda Śląska, część Górnośląskiego Zagłębia Węglowego, to miasto o silnych tradycjach aktywności fizycznej i rosnącym rynku fitness. Mieszkańcy Rudy Śląskiej mają dostęp do rozbudowanej infrastruktury sportowej całej aglomeracji, a profesjonalny trener online dostarcza brakującego elementu — spersonalizowanego planu i indywidualnej diety. Prowadzenie online to tu wygodna alternatywa dla lokalnych usług.",
    isLocal: false,
  },
  {
    slug: "sosnowiec",
    name: "Sosnowiec",
    nameDeclension: "Sosnowca",
    nameLocative: "w Sosnowcu",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~200 000",
    fitnessContext:
      "Sosnowiec, jedno z największych miast Zagłębia Dąbrowskiego, cechuje się aktywną społecznością sportową i rosnącą liczbą klubów fitness. Mieszkańcy Sosnowca chętnie korzystają z prowadzenia online jako efektywnej alternatywy dla lokalnych usług — bez kompromisów w jakości i z pełną elastycznością godzin treningowych. Online coaching z doświadczonym specjalistą to tu inwestycja, która szybko przynosi wymierne efekty.",
    isLocal: false,
  },
  {
    slug: "gliwice",
    name: "Gliwice",
    nameDeclension: "Gliwic",
    nameLocative: "w Gliwicach",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~180 000",
    fitnessContext:
      "Gliwice, miasto akademickie i technologiczne centrum Śląska, mają prężną scenę sportową i wiele aktywnych fizycznie mieszkańców związanych z Politechniką Śląską. Studenci i pracownicy gliwickich firm technologicznych coraz chętniej wybierają online coaching jako wygodne rozwiązanie dopasowane do intensywnego rytmu życia. Profesjonalne prowadzenie online eliminuje problem ograniczonej dostępności specjalistów w konkretnych dzielnicach.",
    isLocal: false,
  },
  {
    slug: "zabrze",
    name: "Zabrze",
    nameDeclension: "Zabrza",
    nameLocative: "w Zabrzu",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~170 000",
    fitnessContext:
      "Zabrze to miasto z bogatą historią przemysłową i silną tożsamością sportową — siedziba legendarnego Górnika Zabrze. Mieszkańcy Zabrza aktywnie uczestniczą w kulturze fitness aglomeracji śląskiej, a prowadzenie online uzupełnia lokalną ofertę o indywidualną opiekę eksperta z zakresu treningu i żywienia. To skuteczny wybór dla zabrzanów pragnących realnej zmiany sylwetki i kondycji.",
    isLocal: false,
  },
  {
    slug: "bytom",
    name: "Bytom",
    nameDeclension: "Bytomia",
    nameLocative: "w Bytomiu",
    region: "śląskie",
    voivodeship: "województwo śląskie",
    population: "~160 000",
    fitnessContext:
      "Bytom, historyczne miasto aglomeracji górnośląskiej, intensywnie rozwija się w obszarze sportu i rekreacji — z rewitalizowaną infrastrukturą i rosnącą liczbą aktywnych mieszkańców. Prowadzenie online z profesjonalnym trenerem to dostępna cenowo i wygodna odpowiedź na rosnące potrzeby bytomian w zakresie zdrowia i sylwetki. Online coaching pozwala korzystać z eksperckich metod bez ograniczeń geograficznych.",
    isLocal: false,
  },
  {
    slug: "stalowa-wola",
    name: "Stalowa Wola",
    nameDeclension: "Stalowej Woli",
    nameLocative: "w Stalowej Woli",
    region: "podkarpackie",
    voivodeship: "województwo podkarpackie",
    population: "~60 000",
    fitnessContext:
      "Stalowa Wola, dynamiczne miasto przemysłowe Podkarpacia, dysponuje rozwijającą się sceną sportową i coraz bardziej aktywną społecznością fitness. Mieszkańcy Stalowej Woli cenią dostęp do profesjonalnego prowadzenia online, które wyrównuje szanse z mieszkańcami dużych ośrodków bez konieczności dojazdu. Trening online to tu realna i skuteczna inwestycja w zdrowie i sylwetkę.",
    isLocal: false,
  },
  {
    slug: "ostrow-wielkopolski",
    name: "Ostrów Wielkopolski",
    nameDeclension: "Ostrowa Wielkopolskiego",
    nameLocative: "w Ostrowie Wielkopolskim",
    region: "wielkopolskie",
    voivodeship: "województwo wielkopolskie",
    population: "~70 000",
    fitnessContext:
      "Ostrów Wielkopolski, ważne centrum południowej Wielkopolski, charakteryzuje się rosnącą kulturą fitness i aktywnością sportową mieszkańców. Prowadzenie online z doświadczonym trenerem dostarcza ostrowianom indywidualnych planów i diety dopasowanych do konkretnych celów — bez wyjazdu do Poznania czy Wrocławia. To wygodne i efektywne rozwiązanie dla mieszkańców tego prężnego wielkopolskiego miasta.",
    isLocal: false,
  },
  {
    slug: "piotrkow-trybunalski",
    name: "Piotrków Trybunalski",
    nameDeclension: "Piotrkowa Trybunalskiego",
    nameLocative: "w Piotrkowie Trybunalskim",
    region: "łódzkie",
    voivodeship: "województwo łódzkie",
    population: "~75 000",
    fitnessContext:
      "Piotrków Trybunalski, historyczne miasto województwa łódzkiego, prężnie rozwija się pod względem sportowym z aktywną społecznością biegową i siłownianą. Mieszkańcy Piotrkowa Trybunalskiego mają dostęp do lokalnych klubów fitness, a prowadzenie online uzupełnia go o profesjonalne, indywidualne prowadzenie z zakresu treningu i dietetyki. Online coaching to tu efektywna inwestycja w zdrowie dla pracowitych piotrkownian.",
    isLocal: false,
  },
  {
    slug: "siedlce",
    name: "Siedlce",
    nameDeclension: "Siedlec",
    nameLocative: "w Siedlcach",
    region: "mazowieckie",
    voivodeship: "województwo mazowieckie",
    population: "~80 000",
    fitnessContext:
      "Siedlce, ważny ośrodek akademicki i administracyjny wschodniej części Mazowsza, mają aktywną społeczność sportową i rozwijającą się scenę fitness. Mieszkańcy Siedlec doceniają dostęp do profesjonalnego prowadzenia online, które oferuje jakość niedostępną lokalnie w tej cenie. Trening online z magistrem fizjoterapii to dla siedlczan wygodna droga do długotrwałych efektów sylwetkowych i zdrowotnych.",
    isLocal: false,
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export interface ServiceData {
  slugPrefix: string;
  title: string;
  titleGenitive: string;
  description: string;
  price: string;
  priceLabel?: string;
  href: string;
}

export const services: ServiceData[] = [
  {
    slugPrefix: "trener-personalny",
    title: "Trener Personalny",
    titleGenitive: "Trenera Personalnego",
    description: "Profesjonalny trening personalny online i stacjonarny",
    price: "od 199 zł",
    priceLabel: "/ sesja",
    href: "/kontakt",
  },
  {
    slugPrefix: "dietetyk-online",
    title: "Dietetyk Online",
    titleGenitive: "Dietetyka Online",
    description: "Indywidualne plany żywieniowe online",
    price: "199 zł",
    href: "/dieta-online",
  },
  {
    slugPrefix: "plan-treningowy-online",
    title: "Plan Treningowy Online",
    titleGenitive: "Planu Treningowego Online",
    description: "Spersonalizowane programy treningowe",
    price: "149 zł",
    href: "/plan-treningowy",
  },
  {
    slugPrefix: "dieta-online",
    title: "Dieta Online",
    titleGenitive: "Diety Online",
    description: "Indywidualne diety online dopasowane do celów",
    price: "199 zł",
    href: "/dieta-online",
  },
];
