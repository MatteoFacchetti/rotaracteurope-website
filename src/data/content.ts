export const board = [
  {
    role: "President",
    name: "Elise Nassif",
    country: "United Kingdom",
    assistants: [
      ["Ana Metelko", "Croatia"],
      ["Moreno Weilenmann", "Netherlands"],
    ],
  },
  {
    role: "Vice-President",
    name: "Pedro Summavielle",
    country: "Portugal",
    assistants: [
      ["Jonas Kaučikas", "Lithuania"],
      ["Nikola Jelenkovic", "Serbia"],
    ],
  },
  {
    role: "Secretary",
    name: "Renatas Kandrotas",
    country: "Lithuania",
    assistants: [
      ["Martyna Meskauskaite", "Lithuania"],
      ["Irma De Rosa", "Italy"],
    ],
  },
  {
    role: "Treasurer",
    name: "Antonio De Cataldo",
    country: "Luxembourg",
    assistants: [
      ["Florindo Lauriello", "Italy"],
      ["Jade el youssef", "Luxembourg"],
    ],
  },
  {
    role: "Social Services Officer",
    name: "Ezgi Batu",
    country: "Turkey",
    assistants: [
      ["Océane J. Ravel", "France"],
      ["Yuliia Lynnyk", "Ukraine"],
    ],
  },
  {
    role: "Marketing and Communication Officer",
    name: "Gaia Sciancalepore",
    country: "Italy",
    assistants: [
      ["Anastasia Biondo", "Italy"],
      ["Marina Gruban", "Croatia"],
    ],
  },
  {
    role: "Information Technology Officer",
    name: "Hermine Patay",
    country: "France",
    assistants: [
      ["Natalia Baranova", "Portugal"],
      ["Lucas Niklison", "Spain"],
    ],
  },
  {
    role: "Past President",
    name: "Matteo Facchetti",
    country: "Luxembourg",
    assistants: [],
  },
];

export const committees = [
  {
    name: "Events",
    summary:
      "Supports host committees planning REM and EUCO: logistics, timelines, budgets, and the shape of the programme.",
    members: ["Pedro Summavielle", "Marko Paloski", "Monika Kern", "Belen Turgut", "Veronika Botsova", "Davit Grigoryan"],
  },
  {
    name: "Legal",
    summary:
      "Keeps the statute, bylaws, and procedures aligned with Luxembourg law, EU law, and the Rotary International Code of Policies.",
    members: ["Renatas Kandrotas", "Ana Metelko", "Osman Tuna Kısaoğlu", "Victoria Anna Templin", "Hedzer Spaans", "Bárbara Cristina Alves Raimundo Duarte Saraiva"],
  },
  {
    name: "Belonging",
    summary:
      "Works on diversity, equity, and inclusion, and on a clear way to raise and handle harassment concerns.",
    members: ["Pedro Summavielle", "Matteo Facchetti", "Rula Chalamani", "Roua Al-Toma", "Kristina Zejak", "Alexandru Costineanu", "Fabio Sergio Linares Carranza Brois"],
  },
  {
    name: "Marketing",
    summary:
      "Runs social channels, newsletters, and the visual materials clubs see from Rotaract Europe.",
    members: ["Gaia Sciancalepore", "Anastasia Biondo", "Marina Gruban", "Ana Ambrož", "Roua Al-Toma", "Maria del Rocio Gil Rodriguez", "Alessandra Barrile", "Alara Serdar"],
  },
  {
    name: "Social Services",
    summary:
      "Helps clubs share service projects, prepares the E.R.I.C. Awards, and supports service activities at REM and EUCO.",
    members: ["Ezgi Batu", "Océane J. Ravel", "Yuliia Lynnyk", "Vincenzo Brancaccio", "Lisa Reudelsterz", "Katherine Moreno", "Ieva Jankūnaitė", "Neslihan Selçuk"],
  },
  {
    name: "Partnerships and community outreach",
    summary:
      "Gives clubs pitch decks, templates, and a route to partners, both for a single project and for longer institutional support.",
    members: ["Antonio De Cataldo", "Rula Chalamani", "Alessandra Barrile", "Ludmila Andreea Toporcean", "Efe Can Toker", "Erika Palomba"],
  },
  {
    name: "Information technology",
    summary:
      "Looks after the website, the shared tools, and the digital workflow the board and country representatives use.",
    members: ["Hermine Patay", "Natalia Baranova", "Lucas Niklison", "Matteo Facchetti"],
  },
];

export const countries: { name: string; districts: string; cr: string }[] = [
  { name: "Albania", districts: "2485", cr: "Judit Jakova" },
  { name: "Andorra", districts: "1700 (shared with France)", cr: "No appointed CR" },
  { name: "Armenia", districts: "2452 (shared with Cyprus)", cr: "Sylvie Soghomonyan" },
  { name: "Austria", districts: "1910 (shared with Bosnia and Herzegovina), 1920", cr: "No appointed CR" },
  { name: "Azerbaijan", districts: "2430 (shared with Turkey)", cr: "No appointed CR" },
  { name: "Belgium", districts: "2130, 2140, 2150, 2160 (shared with Luxembourg)", cr: "Aster Deneyer" },
  { name: "Bosnia and Herzegovina", districts: "1910 (shared with Austria)", cr: "No appointed CR" },
  { name: "Bulgaria", districts: "2482", cr: "Anna Atanasova" },
  { name: "Croatia", districts: "1913", cr: "Marina Gruban" },
  { name: "Cyprus", districts: "2452 (shared with Armenia and Georgia)", cr: "Duane Renzo Seballos" },
  { name: "Czech Republic", districts: "2240 (shared with Slovakia)", cr: "Alexia Klie Tojal de Almeida" },
  { name: "Denmark", districts: "1440, 1450, 1461, 1470, 1480", cr: "Laura Bertel Andersen" },
  { name: "Estonia", districts: "1430 (shared with Finland)", cr: "Karen Kaarlep" },
  { name: "Finland", districts: "1380, 1390, 1400, 1410, 1420, 1430 (shared with Estonia)", cr: "No appointed CR" },
  { name: "France", districts: "1510, 1520, 1640, 1650, 1660, 1670, 1680, 1690, 1700 (shared with Andorra), 1710, 1720, 1730 (shared with Monaco), 1740, 1750, 1760, 1770, 1780, 1790", cr: "Faustine Delebarre" },
  { name: "Germany", districts: "1800, 1810, 1820, 1830, 1841, 1842, 1850, 1860, 1870, 1880, 1890, 1900, 1930, 1940, 1950", cr: "Tim Rieger, Alisia Walter" },
  { name: "Greece", districts: "2475", cr: "Evdoxia Chaldaiou" },
  { name: "Hungary", districts: "1911", cr: "Gréta Kiss" },
  { name: "Iceland", districts: "1360", cr: "No appointed CR" },
  { name: "Ireland", districts: "1160 (shared with the United Kingdom)", cr: "Micheal Mordecai" },
  { name: "Italy", districts: "2031, 2032, 2041, 2042, 2050, 2060, 2071, 2072 (shared with San Marino), 2080, 2090, 2101, 2102, 2110 (shared with Malta), 2120", cr: "Letizia Ricci Maccarini" },
  { name: "Kosovo", districts: "2485 (shared with Albania)", cr: "Era Demiri" },
  { name: "Latvia", districts: "2410 (shared with Sweden)", cr: "No appointed CR" },
  { name: "Liechtenstein", districts: "2000 (shared with Switzerland)", cr: "Pietro Moro" },
  { name: "Lithuania", districts: "1462", cr: "Justinas Brazaitis" },
  { name: "Luxembourg", districts: "2160 (shared with Belgium)", cr: "Mélissa Christine" },
  { name: "Malta", districts: "2110 (shared with Italy)", cr: "Letizia Ricci Maccarini" },
  { name: "Moldova", districts: "2241 (shared with Romania)", cr: "Dan Zagnat" },
  { name: "Monaco", districts: "1730 (shared with France)", cr: "Faustine Delebarre" },
  { name: "Montenegro", districts: "2483 (shared with Serbia)", cr: "Milica Matovic" },
  { name: "Netherlands", districts: "1550, 1560, 1570, 1580, 1590, 1600, 1610", cr: "Gijs van Doorn" },
  { name: "North Macedonia", districts: "1912 (shared with Slovenia)", cr: "Stefan Mitrovski" },
  { name: "Norway", districts: "2310", cr: "Vinod Kumar Ameti" },
  { name: "Poland", districts: "2231", cr: "Fabian Jarząb" },
  { name: "Portugal", districts: "1960, 1970", cr: "Maria Inês Lobato Almeida" },
  { name: "Romania", districts: "2241 (shared with Moldova)", cr: "Beatrix Popoviciu" },
  { name: "Russia", districts: "2223", cr: "No appointed CR" },
  { name: "San Marino", districts: "2072 (shared with Italy)", cr: "Letizia Ricci Maccarini" },
  { name: "Serbia", districts: "2483 (shared with Montenegro)", cr: "Jovana Vanovac" },
  { name: "Slovakia", districts: "2240 (shared with the Czech Republic)", cr: "Alexia Klie Tojal de Almeida" },
  { name: "Slovenia", districts: "1912 (shared with North Macedonia)", cr: "Franja Bučar" },
  { name: "Spain", districts: "2201, 2202, 2203", cr: "Victor Mora" },
  { name: "Sweden", districts: "2320, 2350, 2360, 2380, 2390, 2400, 2410 (shared with Latvia)", cr: "No appointed CR" },
  { name: "Switzerland", districts: "1980, 1990, 2000 (shared with Liechtenstein)", cr: "Pietro Moro" },
  { name: "Turkey", districts: "2420, 2430 (shared with Azerbaijan), 2440", cr: "Çağan Güler" },
  { name: "Ukraine", districts: "2232", cr: "Sofiia Shayda" },
  { name: "United Kingdom", districts: "1010, 1030, 1040, 1070, 1080, 1090, 1110, 1120, 1130, 1145, 1160 (shared with Ireland), 1180, 1200, 1210, 1220, 1285", cr: "Micheal Mordecai" },
];

export const meetings = [
  { name: "Pre-REM Satu Mare", when: "Ahead of REM Cluj", where: "Satu Mare, Romania", href: "https://rotaracteurope.eu/event/pre-rem-satu-mare/" },
  { name: "REM Cluj-Napoca", when: "REM year, host site REMSYLVANIA", where: "Cluj-Napoca, Romania", href: "https://remcluj2027.com/" },
  { name: "Post-REM Sibiu", when: "After REM Cluj", where: "Sibiu, Romania", href: "https://rotaracteurope.eu/event/post-rem-sibiu/" },
  { name: "EUCO Napoli", when: "12 April 2027", where: "Naples, Italy", href: "https://www.euconapoli2027.it/" },
  { name: "REM Karlsruhe", when: "10 September 2026", where: "Karlsruhe, Germany", href: "https://www.remkarlsruhe.com/" },
];

export const news = [
  {
    date: "October 2026",
    title: "Steps for Hope: Eradicate Polio",
    body: "Clubs are invited to run, walk, or ride during End Polio Awareness Month, with World Polio Day on 24 October as the main date. Rotaract Europe is doing this with Rotary International and Strava. Distance is tracked on Strava, and clubs register their activity on the current site.",
  },
  {
    date: "September 2026",
    title: "First Social Services Impact Report",
    body: "The first report collects service projects from clubs and districts across Europe. The full PDF still lives on the current WordPress site and will move into this repository with the archive.",
  },
  {
    date: "August 2026",
    title: "Rotaracting for Peace design sprint",
    body: "An online cohort with Rotary Peace Fellow Patricia Shafer and NewGen Peacebuilders. Onboarding is mid-November 2026. Sessions run from January to May 2027. Information sessions were scheduled through 16 October 2026.",
  },
  {
    date: "June 2026",
    title: "End of the Rotaract year",
    body: "Past President Matteo Facchetti closed the year with a letter to clubs: the work of the year was to bring Rotaract Europe closer to its districts, to other multi-district organisations, and to Rotary International.",
  },
  {
    date: "June 2026",
    title: "Pick It Up Europe 2026",
    body: "Clubs took part in a shared clean-up and a push on plastic pollution.",
  },
];

export const faqs = [
  {
    q: "What is in place to keep official events safe?",
    a: "Official events use an events code of conduct and a harassment prevention policy. Each event has a harassment report form. Reports go to the board and are handled case by case. Questions during an event can go to a board member or to board@rotaracteurope.eu.",
  },
  {
    q: "Where do I find the MyRotary ID required for REM and EUCO?",
    a: "Sign in at my.rotary.org, open My Profile, and read the ID under your name. Bylaws article 4.1.3.1 limits EUCO and REM registration to Rotary or Rotaract members, their partners, and people applying to join.",
  },
  {
    q: "How does a twin club agreement get recognised?",
    a: "Two clubs in different countries sign the official twinning certificate and submit it to Rotary International in Switzerland. Ask board@rotaracteurope.eu for the certificate. A joint service project is a sensible first step. Mega twin agreements of four or more clubs use social@rotaracteurope.eu.",
  },
  {
    q: "What is the sustainability commitment?",
    a: "E.R.I.C. works with the Environmental Sustainability Rotary Action Group and the Become Sustainable project. Every host committee completes the Sustainable Event Checklist. Clubs that want to join write to board@rotaracteurope.eu.",
  },
  {
    q: "Can a Rotaract club apply for a Global Grant?",
    a: "Yes, with a qualified Rotary club as sponsor. The pair needs a community assessment, a project plan, and an application in the Rotary Grant Center. Global grants start at a budget of 30,000 US dollars and are usually finished within 12 to 24 months.",
  },
];
