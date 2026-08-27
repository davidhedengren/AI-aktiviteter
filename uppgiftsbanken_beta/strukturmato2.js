/* strukturmato2.js — Matematik – fortsättning nivå 2. I uppgiftsbanken visas spåret som 2c. */

window.KAPNAMNMATO2 = {
  "1": "Komplexa tal och polynom",
  "2": "Funktioner och derivata",
  "3": "Integraler",
  "4": "Trigonometri",
  "5": "Digitala verktyg, problemlösning och modellering"
};

window.OMRMATO2 = {
  "1": {
    "imaginara_enheten": "Imaginära enheten",
    "komplexa_tal": "Komplexa tal",
    "komplexa_talplanet": "Komplexa talplanet",
    "rektangular_form": "Rektangulär form",
    "polar_form": "Polär form",
    "rakning_komplexa_tal": "Beräkningar med komplexa tal",
    "komplex_konjugat": "Konjugat av komplexa tal",
    "komplex_absolutbelopp": "Absolutbelopp av komplexa tal",
    "faktorisera_polynom": "Faktorisera polynom",
    "faktorsatsen": "Faktorsatsen",
    "komplexa_losningar": "Komplexa lösningar till ekvationer"
  },
  "2": {
    "sammansatta_funktioner": "Sammansatta funktioner",
    "logaritmfunktioner": "Logaritmfunktioner",
    "linjara_asymptoter": "Linjära asymptoter",
    "grafskissning": "Skissa funktionsgrafer för hand",
    "derivata_logaritmfunktioner": "Derivata av logaritmfunktioner",
    "kedjeregeln": "Kedjeregeln",
    "produktregeln": "Produktregeln",
    "kvotregeln": "Kvotregeln"
  },
  "3": {
    "integraler_komplexa_sammanhang": "Integraler i mer komplexa sammanhang",
    "tathetsfunktioner": "Täthetsfunktioner",
    "sannolikhetsfordelning": "Sannolikhetsfördelningar med integraler",
    "rotationsvolymer": "Rotationsvolymer",
    "integral_berakna_storheter": "Beräkna storheter med integraler"
  },
  "4": {
    "trigonometriska_uttryck": "Trigonometriska uttryck",
    "trigonometriska_identiteter": "Trigonometriska identiteter",
    "trigonometriska_ettan": "Trigonometriska ettan",
    "additionsformler": "Additionsformler",
    "trigonometriska_funktioner": "Trigonometriska funktioner",
    "period_amplitud_fas": "Period, amplitud och fasförskjutning",
    "bestamma_trig_funktion": "Bestämma trigonometriska funktioner",
    "trigonometriska_ekvationer": "Trigonometriska ekvationer",
    "radianer": "Radianer",
    "derivata_sin_cos_tan": "Derivata av sinus, cosinus och tangens",
    "integral_sin_cos": "Integraler av sinus och cosinus"
  },
  "5": {
    "symbolhanterande_verktyg": "Symbolhanterande digitala verktyg",
    "programmering": "Programmering som matematiskt verktyg",
    "problemlosning": "Problemlösning",
    "modellering": "Matematisk modellering",
    "modellers_begransningar": "Modellers egenskaper och begränsningar",
    "hallbar_utveckling": "Hållbar utveckling",
    "kritisk_granskning": "Kritisk granskning av fakta och påståenden",
    "matematikens_historia": "Matematikens historia"
  }
};

window.SPARMATO2 = Object.fromEntries(Object.entries(window.OMRMATO2).map(([k,v])=>[
  k,Object.fromEntries(Object.keys(v).map(o=>[o,["2c"]]))
]));
