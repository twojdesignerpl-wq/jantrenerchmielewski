export interface ServiceFeature {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TargetAudience {
  title: string;
  description: string;
}

export interface ServiceContentData {
  features: ServiceFeature[];
  faqItems: FAQItem[];
  processSteps: ProcessStep[];
  targetAudience: TargetAudience[];
  methodology: string;
  resultsTimeline: string;
  price: string;
  priceLabel?: string;
  servicePageHref: string;
}

export const serviceContent: Record<string, ServiceContentData> = {
  "trener-personalny": {
    price: "od 199 zł",
    priceLabel: "/ sesja",
    servicePageHref: "/trening-personalny-chelmza",

    features: [
      {
        title: "Analiza biomechaniki ruchu",
        description:
          "Jako magister fizjoterapii oceniam wzorce ruchowe, postawę ciała i zakresy stawowe przed ułożeniem pierwszego ćwiczenia. Trening od razu jest bezpieczny i efektywny.",
      },
      {
        title: "Korekta techniki w czasie rzeczywistym",
        description:
          "Każde powtórzenie liczy się podwójnie — prawidłowe obciąża właściwy mięsień i chroni stawy. Na każdej sesji koryguję technikę, nim błędy zdążą stać się nawykiem.",
      },
      {
        title: "Periodyzacja obciążeń",
        description:
          "Opracowuję cykl treningowy z fazami akumulacji, intensyfikacji i superkompensacji. Twoje ciało stale otrzymuje właściwy bodziec — ani za słaby, ani powodujący przetrenowanie.",
      },
      {
        title: "Trening z uwzględnieniem kontuzji",
        description:
          "Doświadczenie kliniczne w fizjoterapii pozwala mi modyfikować ćwiczenia przy bólu kręgosłupa, kolanach, barkach czy nadgarstkach. Ćwiczysz bezpiecznie, nie przerywając postępów.",
      },
      {
        title: "Motywacja i rozliczalność",
        description:
          "Wiem, kiedy powiedzieć «jedno powtórzenie więcej», a kiedy odpuścić. Buduję środowisko, w którym nie można się migać, lecz chce się wracać — sesja za sesją.",
      },
      {
        title: "Integracja treningu ze stylem życia",
        description:
          "Układam harmonogram treningów wokół Twoich obowiązków zawodowych, rodziny i poziomu regeneracji. Trening personalny ma wpisać się w Twoje życie, nie je wywrócić.",
      },
    ],

    faqItems: [
      {
        question: "Ile kosztuje trener personalny online w Polsce?",
        answer:
          "Cena sesji z trenerem personalnym online wynosi od 149 zł. W ramach stawki otrzymujesz pełne prowadzenie: indywidualny plan, korektę techniki (przez nagranie lub wideorozmowę), cotygodniowy raport postępów i bieżący kontakt. W porównaniu do trenera stacjonarnego oszczędzasz czas dojazdu i możesz ćwiczyć z dowolnego miejsca.",
      },
      {
        question: "Czy trener personalny online jest skuteczny?",
        answer:
          "Tak — przy odpowiednim systemie pracy wyniki są porównywalne z treningiem stacjonarnym. Kluczem jest szczegółowe wideo z wykonania ćwiczeń, precyzyjna korekta techniki przez trenera i regularne raportowanie. Moi klienci online osiągają zamierzone cele średnio w ciągu 12–16 tygodni intensywnej współpracy.",
      },
      {
        question: "Jak wygląda pierwsza sesja z trenerem personalnym?",
        answer:
          "Pierwszą sesję poświęcam na wywiad zdrowotny, ocenę wzorców ruchowych i ustalenie celów. Omawiam historię treningową, ewentualne dolegliwości ortopedyczne i preferencje. Na koniec zarysowuję plan działania. To sesja organizacyjna — nie martw się, że «zmarnujesz» ją na ćwiczenia.",
      },
      {
        question: "Jak szybko widać efekty treningów personalnych?",
        answer:
          "Pierwsze odczuwalne zmiany (większa energia, lepszy sen, poprawa siły) pojawiają się już po 3–4 tygodniach regularnego treningu. Widoczne zmiany sylwetki następują zazwyczaj po 8–12 tygodniach. Tempo zależy od częstotliwości treningów, diety i indywidualnych predyspozycji.",
      },
      {
        question: "Czy mogę trenować z trenerem personalnym mając kontuzję?",
        answer:
          "Posiadam tytuł Magistra Fizjoterapii, dlatego praca z klientami po urazach lub z przewlekłymi dolegliwościami to moja specjalność. Modyfikuję ćwiczenia tak, by omijać bolesne zakresy ruchu, jednocześnie wzmacniając struktury stabilizujące. Wielu klientów przychodzi do mnie właśnie z powodu bólu kręgosłupa, kolan czy barków.",
      },
      {
        question: "Ile razy w tygodniu powinienem trenować z trenerem personalnym?",
        answer:
          "Dla większości celów optymalna częstotliwość to 2–3 sesje tygodniowo z trenerem oraz 1–2 treningi samodzielne. Przy silnej motywacji i dobrym śnie można ćwiczyć 4 razy. Mniej niż 2 razy tygodniowo znacznie spowalnia postępy — bodziec treningowy nie jest wystarczająco częsty.",
      },
      {
        question: "Czy trener personalny układa też dietę?",
        answer:
          "Jako trener personalny daję ogólne wskazówki żywieniowe. Jeśli zależy Ci na precyzyjnym planie żywieniowym z makroskładnikami i listą zakupów, polecam skorzystanie z mojej usługi diety online lub prowadzenia online, gdzie łączę trening z dietą w jednym pakiecie.",
      },
      {
        question: "Jak wygląda trening personalny zdalny — czego potrzebuję?",
        answer:
          "Do treningu online potrzebujesz miejsca z kilkoma metrami kwadratowymi wolnej przestrzeni, maty i ewentualnie zestawu gum oporowych lub lekkich hantli. Wszystko dopasowuję do Twojego wyposażenia — plany mogą opierać się na siłowni, ćwiczeniach z własną masą lub treningu w domu z minimalnym sprzętem.",
      },
    ],

    processSteps: [
      {
        step: 1,
        title: "Bezpłatna konsultacja wstępna",
        description:
          "Uzgadniamy Twoje cele, historię treningową i stan zdrowia. Oceniam wzorce ruchowe i ustalam priorytety. Konsultacja trwa ok. 30 minut i jest bezpłatna — bez zobowiązań.",
      },
      {
        step: 2,
        title: "Indywidualny plan + sesja startowa",
        description:
          "Przygotowuję spersonalizowany program treningowy z opisami ćwiczeń i wideo referencyjnymi. Na pierwszej płatnej sesji przechodzimy przez plan krok po kroku i korygujemy technikę.",
      },
      {
        step: 3,
        title: "Regularne sesje i optymalizacja",
        description:
          "Co tydzień analizuję Twoje postępy i dostosowuję obciążenia. Masz stały dostęp do mnie przez komunikator — pytania, wątpliwości i korekty na bieżąco przez cały czas trwania współpracy.",
      },
    ],

    targetAudience: [
      {
        title: "Osoby po długiej przerwie od sportu",
        description:
          "Bezpieczny powrót do aktywności z uwzględnieniem utraconej kondycji i ewentualnych kontuzji. Buduję fundamenty ruchowe od zera, by uniknąć przeciążeń.",
      },
      {
        title: "Aktywni z plateau treningowym",
        description:
          "Jeśli od miesięcy Twoje wyniki stoją w miejscu, brakuje Ci periodyzacji i świeżego spojrzenia. Zmieniam bodziec treningowy i przełamuję stagnację.",
      },
      {
        title: "Osoby z bólem i kontuzjami",
        description:
          "Wykształcenie fizjoterapeutyczne pozwala mi łączyć rehabilitację z treningiem siłowym. Pracujesz nad sylwetką, jednocześnie zmniejszając ból i ryzyko nawrotu urazu.",
      },
      {
        title: "Zapracowani profesjonaliści",
        description:
          "Układam trening dopasowany do napiętego grafiku — krótkie, efektywne sesje z maksymalnym efektem. Ćwiczysz mniej czasu, ale mądrzej niż większość osób na siłowni.",
      },
    ],

    methodology: `Moje podejście do treningu personalnego wynika bezpośrednio z wykształcenia fizjoterapeutycznego i wieloletnich startów w kulturystyce na poziomie Mistrzostw Polski. Zanim ułożę pierwszy plan, przeprowadzam szczegółową ocenę funkcjonalną — analizuję postawę ciała, symetrię mięśniową, zakresy ruchomości w stawach biodrowych, barkowych i kręgosłupie. Dopiero na tej podstawie dobieram ćwiczenia, które są nie tylko skuteczne, ale przede wszystkim bezpieczne dla Twojego układu mięśniowo-szkieletowego.

Programuję trening zgodnie z zasadami periodyzacji blokowej — każde cztery do sześciu tygodni wchodzimy w nową fazę z innym akcentem (hipertrofia, siła maksymalna, wytrzymałość siłowa lub regeneracja aktywna). Taki cykl zapewnia ciągłą adaptację organizmu bez ryzyka przetrenowania. Kładę ogromny nacisk na jakość każdego powtórzenia: lepsze wyniki osiągniesz przez prawidłową technikę przy umiarkowanym ciężarze niż przez bezmyślne dokładanie kilogramów z błędami ruchowymi.

Ważnym elementem mojej metody jest komunikacja między sesjami. Nie znikam po zakończeniu sesji — odpowiadam na pytania, analizuję przesłane nagrania i koryguje technikę zdalnie. Wierzę, że trener personalny to partner w procesie, a nie jednorazowa usługa.`,

    resultsTimeline: `Realistyczne oczekiwania są kluczem do wytrwałości. W pierwszych 3–4 tygodniach klienci zauważają poprawę energii, lepszy sen i wzrost siły na podstawowych ćwiczeniach — to efekt adaptacji nerwowo-mięśniowej. Widoczne zmiany sylwetki (redukcja tkanki tłuszczowej lub wyraźniejsza muskulatura) pojawiają się między 8. a 12. tygodniem systematycznej pracy. Transformacje, które widzisz w internecie, zajmują zwykle 16–24 tygodnie codziennej dyscypliny w treningu i żywieniu — uczciwie informuję o tym każdego klienta, bo trwałe efekty wymagają czasu.`,
  },

  "dietetyk-online": {
    price: "199 zł",
    priceLabel: "/ mies.",
    servicePageHref: "/dieta-online",

    features: [
      {
        title: "Wywiad żywieniowy 360°",
        description:
          "Analizuję Twoje dotychczasowe nawyki, preferencje smakowe, alergie, nietolerancje i rytm dnia. Dieta musi pasować do Twojego życia — nie odwrotnie.",
      },
      {
        title: "Precyzyjne makro- i mikroskładniki",
        description:
          "Kalkuluję zapotrzebowanie kaloryczne, optymalne proporcje białka, tłuszczy i węglowodanów oraz kluczowe mikroelementy (witamina D, żelazo, magnez). Eliminuję przypadkowe żywienie.",
      },
      {
        title: "Jadłospis z listą zakupów",
        description:
          "Dostajesz gotowy tygodniowy jadłospis z przepisami, czasem przygotowania i listą zakupów. Wiesz dokładnie, co zjeść — każdego dnia, każdego posiłku.",
      },
      {
        title: "Monitorowanie składu ciała",
        description:
          "Śledzę zmiany masy ciała, obwodów i — jeśli masz dostęp do wagi impedancyjnej — składu ciała. Dane tygodniowe pozwalają mi reagować na plateau lub nadmierny deficyt.",
      },
      {
        title: "Elastyczne zamienniki posiłków",
        description:
          "Każdy posiłek ma listę zamienników tej samej wartości odżywczej. Wyjeżdżasz w delegację? Nie lubisz kurczaka w danym tygodniu? Masz pełen wachlarz opcji bez wychodzenia poza plan.",
      },
      {
        title: "Suplementacja oparta na badaniach",
        description:
          "Nie sprzedaję suplementów. Rekomenduję wyłącznie to, co ma solidne oparcie w meta-analizach — kreatyna, witamina D, kwasy omega-3 — i tylko jeśli Twoje badania krwi to uzasadniają.",
      },
    ],

    faqItems: [
      {
        question: "Ile kosztuje dietetyk online w Polsce?",
        answer:
          "Miesięczna współpraca z dietetykiem online wynosi u mnie 199 zł. Obejmuje wywiad żywieniowy, pełny jadłospis z przepisami i listą zakupów, cotygodniowe monitorowanie wyników oraz modyfikacje planu w razie potrzeby. To znacznie mniej niż wizyta stacjonarna u klinicznego dietetyka z porównywalnym doświadczeniem.",
      },
      {
        question: "Czy dieta online jest tak samo skuteczna jak wizyta stacjonarna?",
        answer:
          "Tak, a nawet skuteczniejsza — bo monitorowanie przebiega na bieżąco przez cały miesiąc, a nie tylko podczas jednorazowej wizyty. Przesyłasz mi cotygodniowe dane (masa, obwody, zdjęcia), a ja reaguję modyfikacjami planu zanim problem zdąży się utrwalić.",
      },
      {
        question: "Jak długo trwa współpraca z dietetykiem online?",
        answer:
          "Minimalny czas, który widzę u klientów realną transformację metaboliczną, to 3 miesiące. Pierwsze efekty widać wcześniej, ale trwała zmiana nawyków żywieniowych wymaga czasu. Większość klientów kontynuuje współpracę 4–6 miesięcy.",
      },
      {
        question: "Czy dietetyk online układa dietę dla wegan i wegetarian?",
        answer:
          "Tak, specjalizuję się w układaniu diet roślinnych z pełnym profilem aminokwasów, właściwą podażą żelaza niehemowego, wapnia, witaminy B12 i omega-3. Dieta wegańska prawidłowo zbilansowana jest równie efektywna dla redukcji i budowy masy mięśniowej.",
      },
      {
        question: "Czy dietetyk online może pomóc przy chorobach metabolicznych?",
        answer:
          "Układam diety wspierające leczenie insulinooporności, hipercholesterolemii, niedoczynności tarczycy (Hashimoto) i zespołu jelita drażliwego. Ważne: dieta jest uzupełnieniem leczenia farmakologicznego, nie jego zamiennikiem. Zawsze współpracuję z lekarzem prowadzącym klienta.",
      },
      {
        question: "Jak wygląda dieta online — czy muszę gotować skomplikowane dania?",
        answer:
          "Buduję jadłospisy z prostych, łatwo dostępnych produktów. Większość posiłków zajmuje 15–25 minut przygotowania. Na prośbę klienta mogę uprościć jadłospis do kilku rotacyjnych posiłków lub odwrotnie — zaproponować bardziej urozmaicone przepisy dla osób lubiących gotować.",
      },
      {
        question: "Czy dieta online wymaga liczenia kalorii każdego dnia?",
        answer:
          "Na początku współpracy zalecam śledzenie kaloryczności przez 2–3 tygodnie, by klient poznał wartości odżywcze typowych posiłków. Potem większość osób potrafi już intuicyjnie utrzymywać właściwe proporcje bez codziennego ważenia. Nie jestem zwolennikiem dożywotniego liczenia kalorii — to narzędzie edukacyjne, nie cel sam w sobie.",
      },
      {
        question: "Czy dieta online obejmuje konsultacje telefoniczne?",
        answer:
          "W ramach miesięcznej współpracy kontaktujemy się przez komunikator (WhatsApp lub e-mail) — odpowiadam na pytania zwykle w ciągu kilku godzin. Raz w miesiącu odbywa się wideokonsultacja podsumowująca, na której omawiamy wyniki i planujemy kolejny etap.",
      },
    ],

    processSteps: [
      {
        step: 1,
        title: "Szczegółowy wywiad żywieniowy",
        description:
          "Wypełniasz ankietę o stylu życia, preferencjach smakowych, alergiach, harmonogramie dnia i celach. Analizuję 3-dniowy dziennik żywieniowy, który przesyłasz — widzę dokładnie, co i jak jesz teraz.",
      },
      {
        step: 2,
        title: "Opracowanie i wdrożenie jadłospisu",
        description:
          "W ciągu 48 godzin od wywiadu dostajesz gotowy, tygodniowy jadłospis z przepisami, listą zakupów i wykazem zamienników. Omawiamy plan podczas krótkiej wideokonsultacji i odpowiadam na wszystkie pytania.",
      },
      {
        step: 3,
        title: "Tygodniowy monitoring i modyfikacje",
        description:
          "Co tydzień przesyłasz mi raport (masa, obwody, samopoczucie, ewentualne problemy z adherencją). Analizuję dane i modyfikuję plan — zwiększam lub redukuję kalorie, zmieniam proporcje makroskładników, wprowadzam nowe produkty.",
      },
    ],

    targetAudience: [
      {
        title: "Osoby z niezrównoważoną dietą odchudzającą",
        description:
          "Próbowałeś kilku diet, ale żadna nie przyniosła trwałych efektów? Prawdopodobnie brakowało precyzyjnego bilansu kalorycznego i makroskładników. Układam dietę, która działa — i uczy Cię zasad zdrowego żywienia na całe życie.",
      },
      {
        title: "Sportowcy i osoby trenujące siłowo",
        description:
          "Odpowiednia podaż białka, timing węglowodanów wokół treningu i właściwa regeneracja żywieniowa mogą podwoić tempo budowania masy mięśniowej. Łączę wiedzę dietetyczną z doświadczeniem kulturysty-finalisty Mistrzostw Polski.",
      },
      {
        title: "Osoby z insulinoopornością lub Hashimoto",
        description:
          "Zaburzenia metaboliczne wymagają sprecyzowanego podejścia do węglowodanów, tłuszczy i mikroskładników. Układam diety przeciwzapalne i stabilizujące poziom insuliny, które wspierają farmakoterapię.",
      },
      {
        title: "Zabiegani rodzice i profesjonaliści",
        description:
          "Nie masz czasu na gotowanie wielodaniowych potraw? Buduję plan oparty na szybkich, wartościowych posiłkach i prosto dostępnych produktach. Zdrowe jedzenie nie musi zajmować godzin dziennie.",
      },
    ],

    methodology: `Jako dietetyk online łączę dwa światy rzadko spotykane w jednej osobie: wiedzę kliniczną magistra fizjoterapii i praktyczne doświadczenie sportowca startującego na Mistrzostwach Polski w kulturystyce. Fizjoterapia nauczyła mnie patrzeć na organizm całościowo — metabolizm, hormony, układ nerwowy i mięśniowo-szkieletowy są nierozłącznie powiązane. Dlatego wywiad żywieniowy, który przeprowadzam, obejmuje nie tylko kaloryczność i makroskładniki, ale również jakość snu, poziom stresu, wyniki badań krwi i historię zdrowotną.

Moja filozofia żywieniowa opiera się na tzw. elastycznej diecie (Flexible Dieting) — wyznaczam cele kaloryczne i makroskładnikowe, ale nie zakazuję żadnych grup produktów. Klienci, którym daję swobodę wyboru produktów w ramach limitów makro, wykazują znacznie wyższą adherencję niż ci zmuszeni do rygorystycznych list zakazanych potraw. Jednocześnie stawiam na edukację — chcę, byś po kilku miesiącach współpracy potrafił samodzielnie komponować zbilansowane posiłki, a nie był wiecznie uzależniony od diety z zewnątrz.

Każdy jadłospis przechodzi u mnie weryfikację pod kątem gęstości odżywczej — nie chodzi tylko o kalorie, ale o to, czy dostarczasz organizmowi wystarczającą ilość żelaza, wapnia, witaminy D, potasu i innych kluczowych mikroelementów. Deficyty mikroskładnikowe to jeden z głównych, a zarazem najczęściej pomijanych powodów stagnacji wyników.`,

    resultsTimeline: `Pierwsze efekty diety online — lepsza energia, mniejsze wahania nastroju i poprawa jakości snu — klienci zauważają zwykle między 7. a 14. dniem stosowania zbilansowanego jadłospisu. Widoczna redukcja masy ciała (przy diecie odchudzającej) wynosi zazwyczaj 0,5–1 kg tygodniowo w optymalnym deficycie — to tempo bezpieczne metabolicznie i umożliwiające zachowanie masy mięśniowej. Po 3 miesiącach regularnej współpracy klienci redukują przeciętnie 6–12 kg tkanki tłuszczowej, jednocześnie zwiększając masę mięśniową lub ją zachowując. Wyniki przy budowaniu masy wymagają 4–6 miesięcy systematycznej nadwyżki kalorycznej z właściwą podażą białka.`,
  },

  "plan-treningowy-online": {
    price: "149 zł",
    servicePageHref: "/plan-treningowy",

    features: [
      {
        title: "Pełna analiza celu i możliwości",
        description:
          "Przed opracowaniem planu przeprowadzam wywiad treningowy — oceniam historię ćwiczeń, dostępny sprzęt, czas na trening, cel (redukcja/masa/siła/kondycja) i ewentualne ograniczenia zdrowotne.",
      },
      {
        title: "Periodyzacja na 8–12 tygodni",
        description:
          "Plan nie jest listą ćwiczeń — to zaplanowany cykl z progresją obciążeń, zmienną objętością i zaplanowanymi tygodniami deload. Każdy tydzień jest inny i prowadzi do konkretnego celu.",
      },
      {
        title: "Szczegółowe instrukcje do każdego ćwiczenia",
        description:
          "Przy każdym ćwiczeniu znajdziesz opis techniki, wskazówki kinezjologiczne (które mięśnie angażować), liczbę serii, powtórzeń, czas odpoczynku i tempo ruchu (tempo notation).",
      },
      {
        title: "Zamienniki ćwiczeń bez sprzętu",
        description:
          "Brakuje maszyny lub wolisz trening w domu? Każde ćwiczenie siłowniane ma odpowiednik do wykonania z hantlami, gumami lub własną masą ciała — bez utraty efektu treningowego.",
      },
      {
        title: "Tabelka progresji obciążeń",
        description:
          "Dostajesz arkusz do śledzenia wyników tygodniowo: ciężary, ilość powtórzeń, RIR (reps in reserve). Widzisz postępy liczbowo, nie tylko «wydaje mi się, że jestem silniejszy».",
      },
      {
        title: "Aktualizacja planu po zakończeniu cyklu",
        description:
          "Po 8–12 tygodniach analizuję Twoje wyniki i opracowuję kolejny cykl — trudniejszy, ale w odpowiedni sposób. Progresja jest planowana, nie losowa.",
      },
    ],

    faqItems: [
      {
        question: "Ile kosztuje plan treningowy online?",
        answer:
          "Plan treningowy online u mnie kosztuje 149 zł jednorazowo za pełny cykl 8–12 tygodni. Cena obejmuje szczegółowy program z opisami ćwiczeń, tabelkę progresji obciążeń, zamienniki ćwiczeń i jeden tygodniowy e-mail z odpowiedziami na pytania dotyczące wdrożenia planu.",
      },
      {
        question: "Czym różni się plan treningowy online od prowadzenia online?",
        answer:
          "Plan treningowy to gotowy program do samodzielnej realizacji — otrzymujesz dokument i ćwiczysz według niego. Prowadzenie online to aktywna współpraca: cotygodniowy monitoring, korekty planu, analiza nagrań techniki i bieżący kontakt z trenerem. Plan treningowy jest tańszy; prowadzenie daje szybsze i bezpieczniejsze wyniki.",
      },
      {
        question: "Czy plan treningowy online uwzględnia dostępny sprzęt?",
        answer:
          "Tak, to jeden z pierwszych elementów wywiadu. Plany układam pod pełną siłownię, domową siłownię z hantlami i sztangą, siłownię z tylko wolnymi ciężarami, a także trening z własną masą ciała. Każda wersja jest równie efektywna — dobrana do Twojego wyposażenia.",
      },
      {
        question: "Jak długo trwa plan treningowy online i co po jego zakończeniu?",
        answer:
          "Standardowy cykl trwa 8–12 tygodni — tyle potrzeba na pełną fazę adaptacji i superkompensacji. Po zakończeniu cyklu możesz zamówić kolejny plan (uwzględniający osiągnięte wyniki) lub przejść na prowadzenie online z aktywnym monitoringiem postępów.",
      },
      {
        question: "Czy plan treningowy online jest odpowiedni dla początkujących?",
        answer:
          "Tak, układam plany dla każdego poziomu zaawansowania — od osób, które nigdy nie trenowały siłowo, po zaawansowanych kulturystów. Dla początkujących planuję prostsze wzorce ruchowe (squaty, hinges, push/pull), niższe objętości treningowe i więcej czasu na naukę techniki.",
      },
      {
        question: "Czy mogę trenować według planu treningowego online 5 dni w tygodniu?",
        answer:
          "Mogę ułożyć plan na 3, 4, 5 lub 6 dni treningowych w tygodniu — zależy to od Twojego czasu, poziomu zaawansowania i zdolności regeneracyjnych. Dla większości osób optymalny kompromis to 4 dni: wystarczająca objętość treningowa i czas na pełną regenerację.",
      },
      {
        question: "Jak szybko dostanę plan treningowy online po zamówieniu?",
        answer:
          "Po zebraniu wszystkich informacji przez formularz wywiadu treningowego dostarczam gotowy plan w ciągu 48–72 godzin roboczych. Plan przesyłam w formacie PDF oraz arkuszu Google Sheets z interaktywną tabelą progresji obciążeń.",
      },
      {
        question: "Czy plan treningowy online uwzględnia kontuzje i ograniczenia zdrowotne?",
        answer:
          "Posiadam tytuł Magistra Fizjoterapii — oceniam ograniczenia ruchowe i dobiera ćwiczenia omijające bolesne zakresy ruchu. Przy poważnych urazach (np. po operacji więzadeł lub dyskopatii) zalecam jednak najpierw konsultację fizjoterapeutyczną, a następnie trening wzmacniający według mojego planu.",
      },
    ],

    processSteps: [
      {
        step: 1,
        title: "Wywiad treningowy i określenie celu",
        description:
          "Wypełniasz szczegółowy formularz: obecny poziom zaawansowania, dostępny sprzęt, ilość dni na trening, cel główny (redukcja, masa, siła, wytrzymałość), ewentualne kontuzje i preferencje ćwiczeniowe.",
      },
      {
        step: 2,
        title: "Opracowanie spersonalizowanego programu",
        description:
          "W ciągu 48–72 godzin tworzę pełny cykl treningowy z periodyzacją, opisami technicznymi, tabelką progresji i wariantami ćwiczeń. Dostarczam PDF + interaktywny arkusz Google Sheets.",
      },
      {
        step: 3,
        title: "Wdrożenie i wsparcie startowe",
        description:
          "W pierwszym tygodniu odpowiadam na pytania dotyczące planu mailowo — wyjaśniam wątpliwości dotyczące techniki, kolejności ćwiczeń i progresji. Po zakończeniu cyklu przygotowuję kolejny etap.",
      },
    ],

    targetAudience: [
      {
        title: "Osoby trenujące bez planu",
        description:
          "Chodzisz na siłownię, ale nie wiesz co ćwiczyć i w jakiej kolejności? Losowe treningi dają losowe efekty. Dostajesz gotową mapę drogową — co, kiedy, ile i jak ciężko.",
      },
      {
        title: "Samodzielni trenujący z plateau",
        description:
          "Twoje obecne ćwiczenia przestały przynosić efekty? Prawdopodobnie brakuje Ci periodyzacji i świeżego bodźca. Nowy cykl z profesjonalną progresją przełamie stagnację.",
      },
      {
        title: "Osoby z ograniczonym dostępem do siłowni",
        description:
          "Treningi w domu, na siłowni bez maszyn lub z minimalnym sprzętem — układam programy efektywne niezależnie od miejsca i wyposażenia.",
      },
      {
        title: "Sportowcy przygotowujący się do zawodów",
        description:
          "Kulturystyka, fitness, zawody strength sports — buduję periodyzację pod konkretną datę startu z fazą peaking i tapering. Moje doświadczenie finalisty Mistrzostw Polski to nie tylko teoria.",
      },
    ],

    methodology: `Plan treningowy online, który tworzę, nie jest przypadkowym zestawem ćwiczeń — to starannie zaplanowany cykl oparty na zasadach periodyzacji blokowej, którą stosowałem w przygotowaniach do Mistrzostw Polski w kulturystyce. Zaczynam od dogłębnego wywiadu treningowego: analizuję dotychczasowe wyniki siłowe, słabe ogniwa (mięśnie lagging), dostępny sprzęt i ograniczenia czasowe. Na tej podstawie definiuję akcent każdego bloku treningowego i szczegółowo zaplanowuję progresję obciążeń tydzień po tygodniu.

Wykształcenie fizjoterapeutyczne pozwala mi budować plany, które są jednocześnie efektywne i bezpieczne. Każde ćwiczenie dobiera się z uwzględnieniem biomechaniki stawów, kształtu łuków kręgosłupa i symetrii siłowej lewej-prawej. Dobór ćwiczeń nie jest przypadkowy — kieruję się badaniami dotyczącymi aktywacji mięśni (EMG studies), mechanicznego napięcia i uszkodzenia mięśniowego, by maksymalizować bodziec hipertroficzny bez przeciążania tkanek łącznych.`,

    resultsTimeline: `W pierwszych 4 tygodniach poprawia się głównie koordynacja nerwowo-mięśniowa — siła rośnie wyraźnie, bo mózg uczy się efektywniej rekrutować jednostki motoryczne. Prawdziwa hipertrofia (wzrost przekroju mięśnia) staje się mierzalna po 6–8 tygodniach regularnego treningu z właściwym odżywianiem. Po pełnym 12-tygodniowym cyklu klienci ćwiczący 3–4 razy tygodniowo raportują średni wzrost siły na głównych ćwiczeniach o 15–25% i zauważalne zmiany sylwetki widoczne na zdjęciach postępowych. Tempo zależy od częstotliwości treningów, snu i — przede wszystkim — od diety.`,
  },

  "dieta-online": {
    price: "199 zł",
    priceLabel: "/ mies.",
    servicePageHref: "/prowadzenie-online",

    features: [
      {
        title: "Kompleksowe prowadzenie: dieta + trening w jednym",
        description:
          "Dieta online to pełny pakiet: indywidualny jadłospis, plan treningowy i cotygodniowy monitoring — wszystko koordynowane przez jedną osobę, która widzi cały obraz Twoich postępów.",
      },
      {
        title: "Indywidualny jadłospis z przepisami",
        description:
          "Otrzymujesz tygodniowy jadłospis dobrany do Twoich preferencji smakowych, rytmu dnia i celów kalorycznych — z przepisami, listą zakupów i wariantami dla dni aktywnych i odpoczynku.",
      },
      {
        title: "Synchronizacja diety z treningiem",
        description:
          "Węglowodany rozkładam strategicznie wokół jednostek treningowych (carb timing), a w dni bez treningu dostosowuję kaloryczność i makro. To niweluje katabolizm i przyspiesza regenerację.",
      },
      {
        title: "Cotygodniowa analiza postępów",
        description:
          "Każdy tydzień przesyłasz mi masę ciała, obwody i opcjonalnie zdjęcia. Na podstawie danych modyfikuję kaloryczność i makroskładniki — reaguję na zmiany zanim efekty plateau zdążą się umocnić.",
      },
      {
        title: "Nieograniczony kontakt przez komunikator",
        description:
          "Masz wątpliwość w środę wieczorem przed treningiem? Piszesz — odpowiadam. Stały kontakt to element prowadzenia, który odróżnia je od gotowego planu bez wsparcia.",
      },
      {
        title: "Miesięczna wideokonsultacja podsumowująca",
        description:
          "Raz w miesiącu spotykamy się online na wideorozmowę, by omówić wyniki, dostosować cele i zaplanować kolejny etap. Widzę Cię — nie tylko liczby w arkuszu.",
      },
    ],

    faqItems: [
      {
        question: "Czym różni się dieta online od prowadzenia online?",
        answer:
          "Dieta online (prowadzenie) to kompleksowy pakiet łączący indywidualny jadłospis z cotygodniowym monitoringiem, korektami i bieżącym kontaktem. Sam jadłospis bez monitoringu to usługa jednorazowa. W prowadzeniu online jestem aktywnie zaangażowany przez cały czas — widzę Twoje wyniki i reaguję na bieżąco, a nie czekam na kolejną wizytę.",
      },
      {
        question: "Ile kosztuje dieta online z prowadzeniem w Polsce?",
        answer:
          "Miesięczna dieta online z pełnym prowadzeniem kosztuje 199 zł. Cena obejmuje indywidualny jadłospis, cotygodniowe analizy postępów, modyfikacje planu, nieograniczony kontakt przez komunikator i miesięczną wideokonsultację. Biorąc pod uwagę zakres wsparcia, to znacznie mniej niż seria wizyt u dietetyka stacjonarnego.",
      },
      {
        question: "Czy dieta online jest odpowiednia do redukcji tkanki tłuszczowej?",
        answer:
          "Redukcja tkanki tłuszczowej to moja specjalność — mam doświadczenie zarówno kliniczne, jak i sportowe z fazy cuttingu przed Mistrzostwami Polski w kulturystyce. Buduję deficyt kaloryczny w tempie umożliwiającym zachowanie masy mięśniowej: 0,5–1% masy ciała tygodniowo, z właściwą podażą białka i periodyzacją dni treningowych.",
      },
      {
        question: "Czy dieta online działa przy budowaniu masy mięśniowej?",
        answer:
          "Tak, prowadzę klientów zarówno na redukcji, jak i na masie. Prawidłowy bulk wymaga precyzyjnej nadwyżki kalorycznej (200–400 kcal powyżej TDEE), optymalnej podaży białka (1,8–2,2 g/kg) i właściwego timingu węglowodanów wokół treningu. Zbyt duża nadwyżka powoduje nadmierny przyrost tłuszczu — monitoruję to co tydzień.",
      },
      {
        question: "Jak szybko można schudnąć dzięki diecie online?",
        answer:
          "Bezpieczne i trwałe tempo redukcji to 0,5–1 kg tygodniowo, czyli ok. 2–4 kg miesięcznie. Szybsza redukcja jest możliwa, ale zwiększa ryzyko utraty masy mięśniowej, zaburzeń hormonalnych i efektu jojo. W ciągu 3 miesięcy prowadzenia klienci redukują przeciętnie 6–10 kg tkanki tłuszczowej przy zachowaniu muskulatury.",
      },
      {
        question: "Czy dieta online uwzględnia alergie i nietolerancje pokarmowe?",
        answer:
          "Tak, przed opracowaniem jadłospisu zbieram pełny wywiad alergologiczny i żywieniowy. Układam diety bez glutenu, laktozy, orzechów i innych alergenów. Nietolerancje pokarmowe nie są przeszkodą w zbilansowanym żywieniu — wymagają jedynie przemyślanego doboru zamienników.",
      },
      {
        question: "Czy mogę łączyć dietę online z treningiem personalnym?",
        answer:
          "Prowadzenie online (dieta + trening w jednym pakiecie) to najskuteczniejsza opcja, bo synchronizuję kaloryczność i makroskładniki bezpośrednio z planem treningowym. Osobna dieta i oddzielny trener mogą dawać sprzeczne zalecenia — u mnie wszystko pochodzi z jednego, spójnego planu.",
      },
      {
        question: "Jak wygląda dieta online dla osoby bez doświadczenia w zdrowym odżywianiu?",
        answer:
          "Dla osób zaczynających od podstaw buduję jadłospisy proste, oparte na 5–7 rotacyjnych posiłkach, które łatwo przyrządzić. Edukuję stopniowo — tłumaczę, dlaczego dany produkt jest w planie i co robi w organizmie. Cel to nie tylko wynik na wadze, ale trwała zmiana nawyków żywieniowych.",
      },
    ],

    processSteps: [
      {
        step: 1,
        title: "Wywiad zdrowotny, żywieniowy i treningowy",
        description:
          "Wypełniasz obszerny formularz obejmujący cele, historię diety, wyniki badań (jeśli masz), preferencje smakowe, alergie, harmonogram dnia i aktualną aktywność fizyczną. Im więcej wiem, tym precyzyjniejszy plan układam.",
      },
      {
        step: 2,
        title: "Opracowanie planu i wideokonsultacja startowa",
        description:
          "W ciągu 48 godzin dostajesz pełny jadłospis z przepisami i listą zakupów. Omawiamy plan podczas wideokonsultacji startowej — tłumaczę założenia, odpowiadam na pytania i ustawiamy aplikację do monitorowania.",
      },
      {
        step: 3,
        title: "Cotygodniowy monitoring i adaptacje",
        description:
          "Każdy tydzień — analiza danych (masa, obwody, samopoczucie, jakość snu), modyfikacje jadłospisu i kontakt przez komunikator. Raz w miesiącu wideokonsultacja podsumowująca z omówieniem wyników i planowaniem kolejnego etapu.",
      },
    ],

    targetAudience: [
      {
        title: "Osoby po nieudanych próbach samodzielnej diety",
        description:
          "Liczyłeś kalorie, jadłeś «zdrowo», ale waga nie drgnęła — albo wróciła szybciej niż opadła? Bez indywidualnie skalkulowanego bilansu i cotygodniowych korekt trudno o trwałe efekty. Prowadzenie online naprawia dokładnie ten problem.",
      },
      {
        title: "Aktywni fizycznie bez efektów żywieniowych",
        description:
          "Trenujesz regularnie, ale dieta to słaby punkt? Synchronizacja makroskładników z treningiem może podwoić tempo budowania masy i znacząco przyspieszyć redukcję. Właściwa dieta to 70% sukcesu — reszta to trening.",
      },
      {
        title: "Osoby z przewlekłymi problemami metabolicznymi",
        description:
          "Insulinooporność, niedoczynność tarczycy, PCOS — zaburzenia metaboliczne utrudniają standardowe podejście kaloryczne. Dostosowuję jadłospis do specyfiki Twojego metabolizmu, wspierając jednocześnie leczenie farmakologiczne.",
      },
      {
        title: "Osoby chcące trwale zmienić nawyki żywieniowe",
        description:
          "Nie szukasz diety na 4 tygodnie — chcesz nauczyć się jeść dobrze na stałe? W trakcie prowadzenia edukuję Cię stopniowo, byś po kilku miesiącach był niezależny. Trwała zmiana nawyków jest ważniejsza niż jakikolwiek plan diety.",
      },
    ],

    methodology: `Prowadzenie online (dieta online) to moja najbardziej kompleksowa usługa, łącząca indywidualny jadłospis z cotygodniowym monitoringiem — i to ona daje najszybsze, najtrwalsze efekty. Podejście, które stosuję, wywodzi się z lat własnych przygotowań do Mistrzostw Polski w kulturystyce, gdzie precyzja żywienia decyduje o wyniku zawodów. Każda kaloria, każdy gram białka ma znaczenie — ale nie dlatego, że jestem obsesyjny, lecz dlatego, że znam różnicę między dietą, która działa, a taką, która tylko wygląda poprawnie na papierze.

Podstawą mojej metody jest dostosowanie kaloryczności i rozkładu makroskładników do indywidualnego zapotrzebowania energetycznego — obliczonego nie ze standardowych tabel TDEE, ale na podstawie rzeczywistych danych z pierwszych 2–3 tygodni monitorowania. Każda osoba ma inny metabolizm spoczynkowy, inną termogenezę adaptacyjną i inną efektywność wchłaniania składników odżywczych. Dlatego nie używam gotowych wzorów — kalibруję plan na bieżąco na podstawie Twoich wyników.

Kluczowym elementem prowadzenia online jest dla mnie ciągłość kontaktu. Nie czekam na cotygodniowy raport biernie — jeśli widzę, że masa ciała spada zbyt szybko lub stoi w miejscu, reaguję korektą kaloryczności lub makro jeszcze w ciągu tygodnia. Takie proaktywne podejście skraca czas potrzebny do osiągnięcia celu o 30–40% w porównaniu z samodzielnym stosowaniem gotowej diety.`,

    resultsTimeline: `Pierwsze zauważalne efekty diety online z prowadzeniem pojawiają się już w pierwszych 2 tygodniach: lepsza jakość snu, stabilniejsza energia w ciągu dnia i zmniejszenie wzdęć (efekt wyeliminowania przetworzonej żywności). Wyraźna zmiana masy ciała (przy celu redukcji) staje się widoczna po 3–4 tygodniach regularnego stosowania jadłospisu — przeciętnie 1,5–3 kg w pierwszym miesiącu, w tym część to woda i glikogen. Po 3 miesiącach pełnego prowadzenia klienci redukują 7–12 kg tkanki tłuszczowej lub budują 2–4 kg suchej masy mięśniowej (w zależności od celu). Tempo jest zawsze dostosowane do Twojego metabolizmu — priorytetem jest utrzymanie wyników po zakończeniu współpracy, nie rekordowa szybkość spadku na wadze.`,
  },
};
