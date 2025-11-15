let questions = [
  {
    "question": "Wie heißt die Hauptstadt von Frankreich?",
    "answer_1": "Lyon",
    "answer_2": "Paris",
    "answer_3": "Marseille",
    "answer_4": "Toulouse",
    "right_answer": 2
  },
  // {
  //   "question": "Wie heißt die Hauptstadt von Spanien?",
  //   "answer_1": "Barcelona",
  //   "answer_2": "Madrid",
  //   "answer_3": "Valencia",
  //   "answer_4": "Sevilla",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Deutschland?",
  //   "answer_1": "Hamburg",
  //   "answer_2": "Berlin",
  //   "answer_3": "München",
  //   "answer_4": "Köln",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Italien?",
  //   "answer_1": "Rom",
  //   "answer_2": "Mailand",
  //   "answer_3": "Turin",
  //   "answer_4": "Neapel",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Portugal?",
  //   "answer_1": "Porto",
  //   "answer_2": "Braga",
  //   "answer_3": "Lissabon",
  //   "answer_4": "Coimbra",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Niederlande?",
  //   "answer_1": "Den Haag",
  //   "answer_2": "Rotterdam",
  //   "answer_3": "Amsterdam",
  //   "answer_4": "Utrecht",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Belgien?",
  //   "answer_1": "Lüttich",
  //   "answer_2": "Brüssel",
  //   "answer_3": "Gent",
  //   "answer_4": "Antwerpen",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Österreich?",
  //   "answer_1": "Wien",
  //   "answer_2": "Graz",
  //   "answer_3": "Salzburg",
  //   "answer_4": "Innsbruck",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Schweiz?",
  //   "answer_1": "Zürich",
  //   "answer_2": "Genf",
  //   "answer_3": "Basel",
  //   "answer_4": "Bern",
  //   "right_answer": 4
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Dänemark?",
  //   "answer_1": "Aarhus",
  //   "answer_2": "Kopenhagen",
  //   "answer_3": "Odense",
  //   "answer_4": "Aalborg",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Norwegen?",
  //   "answer_1": "Oslo",
  //   "answer_2": "Bergen",
  //   "answer_3": "Stavanger",
  //   "answer_4": "Trondheim",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Schweden?",
  //   "answer_1": "Göteborg",
  //   "answer_2": "Uppsala",
  //   "answer_3": "Stockholm",
  //   "answer_4": "Malmö",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Finnland?",
  //   "answer_1": "Helsinki",
  //   "answer_2": "Tampere",
  //   "answer_3": "Oulu",
  //   "answer_4": "Turku",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Island?",
  //   "answer_1": "Reykjavík",
  //   "answer_2": "Akureyri",
  //   "answer_3": "Keflavík",
  //   "answer_4": "Selfoss",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Irland?",
  //   "answer_1": "Galway",
  //   "answer_2": "Dublin",
  //   "answer_3": "Cork",
  //   "answer_4": "Limerick",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Polen?",
  //   "answer_1": "Krakau",
  //   "answer_2": "Warschau",
  //   "answer_3": "Danzig",
  //   "answer_4": "Posen",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Tschechien?",
  //   "answer_1": "Brünn",
  //   "answer_2": "Prag",
  //   "answer_3": "Ostrava",
  //   "answer_4": "Pilsen",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Slowakei?",
  //   "answer_1": "Kosice",
  //   "answer_2": "Trnava",
  //   "answer_3": "Bratislava",
  //   "answer_4": "Zilina",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Ungarn?",
  //   "answer_1": "Szeged",
  //   "answer_2": "Budapest",
  //   "answer_3": "Debrecen",
  //   "answer_4": "Pecs",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Rumänien?",
  //   "answer_1": "Cluj",
  //   "answer_2": "Timisoara",
  //   "answer_3": "Bukarest",
  //   "answer_4": "Constanta",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Bulgarien?",
  //   "answer_1": "Varna",
  //   "answer_2": "Plowdiw",
  //   "answer_3": "Sofia",
  //   "answer_4": "Burgas",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Griechenland?",
  //   "answer_1": "Athen",
  //   "answer_2": "Thessaloniki",
  //   "answer_3": "Patras",
  //   "answer_4": "Heraklion",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Türkei?",
  //   "answer_1": "Istanbul",
  //   "answer_2": "Ankara",
  //   "answer_3": "Izmir",
  //   "answer_4": "Adana",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Kroatien?",
  //   "answer_1": "Split",
  //   "answer_2": "Rijeka",
  //   "answer_3": "Zadar",
  //   "answer_4": "Zagreb",
  //   "right_answer": 4
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Serbien?",
  //   "answer_1": "Novi Sad",
  //   "answer_2": "Belgrad",
  //   "answer_3": "Nis",
  //   "answer_4": "Kragujevac",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Bosnien und Herzegowina?",
  //   "answer_1": "Tuzla",
  //   "answer_2": "Banja Luka",
  //   "answer_3": "Sarajevo",
  //   "answer_4": "Mostar",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Slowenien?",
  //   "answer_1": "Maribor",
  //   "answer_2": "Koper",
  //   "answer_3": "Ljubljana",
  //   "answer_4": "Nova Gorica",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Albanien?",
  //   "answer_1": "Durres",
  //   "answer_2": "Tirana",
  //   "answer_3": "Vlora",
  //   "answer_4": "Shkodra",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Montenegro?",
  //   "answer_1": "Budva",
  //   "answer_2": "Podgorica",
  //   "answer_3": "Bar",
  //   "answer_4": "Ulcinj",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Kosovo?",
  //   "answer_1": "Pristina",
  //   "answer_2": "Prizren",
  //   "answer_3": "Gjakova",
  //   "answer_4": "Mitrovica",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Nordmazedonien?",
  //   "answer_1": "Bitola",
  //   "answer_2": "Tetovo",
  //   "answer_3": "Skopje",
  //   "answer_4": "Ohrid",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Weißrussland?",
  //   "answer_1": "Gomel",
  //   "answer_2": "Minsk",
  //   "answer_3": "Brest",
  //   "answer_4": "Witebsk",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Ukraine?",
  //   "answer_1": "Charkiw",
  //   "answer_2": "Kiew",
  //   "answer_3": "Lwiw",
  //   "answer_4": "Odessa",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Litauen?",
  //   "answer_1": "Kowno",
  //   "answer_2": "Wilna",
  //   "answer_3": "Klaipeda",
  //   "answer_4": "Šiauliai",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Lettland?",
  //   "answer_1": "Tallinn",
  //   "answer_2": "Riga",
  //   "answer_3": "Wilna",
  //   "answer_4": "Daugavpils",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Estland?",
  //   "answer_1": "Tallinn",
  //   "answer_2": "Tartu",
  //   "answer_3": "Narva",
  //   "answer_4": "Pärnu",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Zypern?",
  //   "answer_1": "Larnaka",
  //   "answer_2": "Limassol",
  //   "answer_3": "Nikosia",
  //   "answer_4": "Paphos",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Luxemburg?",
  //   "answer_1": "Esch",
  //   "answer_2": "Wiltz",
  //   "answer_3": "Luxemburg",
  //   "answer_4": "Diekirch",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Malta?",
  //   "answer_1": "Sliema",
  //   "answer_2": "Valletta",
  //   "answer_3": "Mdina",
  //   "answer_4": "St. Julian’s",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Vereinigtes Königreich?",
  //   "answer_1": "Manchester",
  //   "answer_2": "London",
  //   "answer_3": "Birmingham",
  //   "answer_4": "Liverpool",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Schottland?",
  //   "answer_1": "Glasgow",
  //   "answer_2": "Aberdeen",
  //   "answer_3": "Edinburgh",
  //   "answer_4": "Inverness",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Wales?",
  //   "answer_1": "Swansea",
  //   "answer_2": "Cardiff",
  //   "answer_3": "Newport",
  //   "answer_4": "Wrexham",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Nordirland?",
  //   "answer_1": "Derry",
  //   "answer_2": "Belfast",
  //   "answer_3": "Armagh",
  //   "answer_4": "Lisburn",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Kanada?",
  //   "answer_1": "Toronto",
  //   "answer_2": "Montreal",
  //   "answer_3": "Ottawa",
  //   "answer_4": "Vancouver",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von USA?",
  //   "answer_1": "Washington, D.C.",
  //   "answer_2": "New York",
  //   "answer_3": "Chicago",
  //   "answer_4": "Philadelphia",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Australien?",
  //   "answer_1": "Sydney",
  //   "answer_2": "Melbourne",
  //   "answer_3": "Brisbane",
  //   "answer_4": "Canberra",
  //   "right_answer": 4
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Neuseeland?",
  //   "answer_1": "Auckland",
  //   "answer_2": "Wellington",
  //   "answer_3": "Christchurch",
  //   "answer_4": "Hamilton",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von Japan?",
  //   "answer_1": "Osaka",
  //   "answer_2": "Tokio",
  //   "answer_3": "Kyoto",
  //   "answer_4": "Nagoya",
  //   "right_answer": 2
  // },
  // {
  //   "question": "Wie heißt die Hauptstadt von China?",
  //   "answer_1": "Shanghai",
  //   "answer_2": "Peking",
  //   "answer_3": "Shenzhen",
  //   "answer_4": "Guangzhou",
  //   "right_answer": 2
  // },
  {
    "question": "Wie heißt die Hauptstadt von Indien?",
    "answer_1": "Mumbai",
    "answer_2": "Neu-Delhi",
    "answer_3": "Bangalore",
    "answer_4": "Chennai",
    "right_answer": 2
  }
];
