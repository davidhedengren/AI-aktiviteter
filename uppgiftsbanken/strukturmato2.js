/* strukturmato2.js — Matematik – fortsättning nivå 2.
   Förenklad struktur med färre, bredare områden.
   Kapitelordningen följer boken och innehållet är filtrerat mot aktuell ämnesplan.
   Mer detaljerade uppgiftstyper finns kvar i familj-taggarna. */

window.KAPNAMNMATO2 = {
  "1": "Trigonometri",
  "2": "Derivata",
  "3": "Integraler",
  "4": "Komplexa tal"
};

window.OMRMATO2 = {
  "1": {
    "enhetscirkeln": "Enhetscirkeln",
    "trig_formler": "Trigonometriska formler",
    "trig_ekvationer": "Trigonometriska ekvationer",
    "trig_funktioner": "Trigonometriska funktioner",
    "radianer": "Radianer",
    "trig_modeller": "Tillämpningar och modeller"
  },
  "2": {
    "deriveringsregler": "Deriveringsregler",
    "kedjeregel_sammansatta": "Sammansatta funktioner och kedjeregeln",
    "derivator_specialfunktioner": "Derivata av exponential-, logaritm- och trigonometriska funktioner",
    "tillampningar_derivata": "Tillämpningar av derivata",
    "grafer_asymptoter": "Grafer och asymptoter"
  },
  "3": {
    "integralberakning": "Primitiva funktioner och integralberäkningar",
    "area_integraler": "Area med integraler",
    "integral_tillampningar": "Integraler i tillämpningar",
    "sannolikhetsintegraler": "Täthetsfunktioner och normalfördelning",
    "rotationsvolymer": "Rotationsvolymer"
  },
  "4": {
    "komplex_aritmetik": "Räkning med komplexa tal",
    "komplexa_talplanet": "Det komplexa talplanet",
    "polar_exponentiell": "Polär och exponentiell form",
    "potenser_rotter": "Potenser och rötter",
    "polynom_komplexa": "Polynom, polynomdivision och komplexa rötter"
  }
};

window.SPARMATO2 = Object.fromEntries(
  Object.entries(window.OMRMATO2).map(([kap, omr]) => [
    kap,
    Object.fromEntries(Object.keys(omr).map(key => [key, ["2c"]]))
  ])
);
