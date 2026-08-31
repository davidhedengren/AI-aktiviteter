/* strukturmato1.js — Matematik – fortsättning nivå 1b och 1c.
   1c-strukturen följer den uppladdade lärobokens kapitelordning (tidigare Matematik 3c).
   Nivå 1b delar kapitel 1–3 med 1c men har i kapitel 4 det spårspecifika innehållet
   linjär optimering och geometriska summor enligt ämnesplanen. */

window.KAPNAMNMATO1 = {
  "1": "Algebra och funktioner",
  "2": "Derivata",
  "3": "Kurvor, derivator och integraler",
  "4": "Trigonometri"
};

window.KAPNAMNMATO1SPAR = {
  "1b": {
    "1": "Algebra och funktioner",
    "2": "Derivata",
    "3": "Kurvor, derivator och integraler",
    "4": "Linjär optimering och geometriska summor"
  },
  "1c": {
    "1": "Algebra och funktioner",
    "2": "Derivata",
    "3": "Kurvor, derivator och integraler",
    "4": "Trigonometri"
  }
};

window.OMRMATO1 = {
  "1": {
    "polynom_begrepp": "Polynom – begrepp och grad",
    "polynom_berakningar": "Beräkningar med polynom",
    "faktorisera_polynom": "Faktorisera polynom",
    "polynomekvationer": "Polynomekvationer",
    "programmering_intervallhalvering": "Programmering: intervallhalveringsmetoden",
    "absolutbelopp": "Absolutbelopp",
    "funktionsbegreppet": "Funktionsbegreppet – repetition",
    "polynomfunktioner": "Polynomfunktioner",
    "rationella_uttryck_begrepp": "Rationella uttryck – begrepp och definitionsmängd",
    "forkorta_rationella_uttryck": "Förkorta rationella uttryck",
    "rationella_ekvationer": "Ekvationer med rationella uttryck",
    "rationella_uttryck_operationer": "Multiplicera och dividera rationella uttryck",
    "tangent_sekant": "Tangent och sekant",
    "gransvarde": "Gränsvärde",
    "kontinuitet": "Kontinuerliga funktioner"
  },
  "2": {
    "andringskvot": "Ändringskvoter",
    "derivata_begrepp": "Begreppet derivata",
    "numerisk_derivering": "Numerisk derivering",
    "derivering_digitala_verktyg": "Derivering med digitala verktyg",
    "programmering_derivering": "Programmering: derivering",
    "derivatans_definition": "Derivatans definition",
    "derivata_polynom": "Derivatan av polynomfunktioner",
    "derivata_potens": "Derivatan av potensfunktioner",
    "tangent_derivata": "Tangenter och derivata",
    "exponentialfunktioner_repetition": "Exponentialfunktioner – repetition",
    "talet_e": "Talet e",
    "naturlig_logaritm": "Naturliga logaritmer",
    "derivata_exponentialfunktioner": "Derivatan av exponentialfunktioner",
    "exponential_derivata_tillampningar": "Tillämpningar med exponentialfunktioners derivata"
  },
  "3": {
    "vaxande_avtagande": "Växande och avtagande funktioner",
    "extrempunkter": "Extrempunkter och terrasspunkter",
    "andraderivata": "Andraderivatan",
    "graf_och_derivator": "Funktionens graf och derivatornas grafer",
    "storsta_minsta_varde": "Största och minsta värde",
    "extremvardesproblem_polynom": "Extremvärdesproblem med polynomfunktioner",
    "extremvardesproblem_modellering": "Extremvärdesproblem med modellering",
    "flera_extremvarden": "Flera extremvärden",
    "blandade_derivataproblem": "Blandade problem med derivata",
    "deriverbarhet": "Deriverbarhet",
    "primitiva_funktioner": "Primitiva funktioner",
    "primitiva_funktioner_villkor": "Primitiva funktioner med villkor",
    "integral_area": "Integral och area",
    "integral_primitiv": "Integralberäkning med primitiv funktion",
    "integral_digital": "Integraler med digitala verktyg",
    "integraler_tillampningar": "Tillämpningar och problemlösning med integraler"
  },
  "4": {
    "ratvinklig_trigonometri": "Trigonometri i rätvinkliga trianglar – repetition",
    "exakta_trig_varden": "Några exakta trigonometriska värden",
    "enhetscirkeln": "Enhetscirkeln",
    "trigonometriska_ekvationer": "Trigonometriska ekvationer",
    "areasatsen": "Areasatsen",
    "sinussatsen": "Sinussatsen",
    "sinussatsen_tva_fall": "Sinussatsen – två möjliga trianglar",
    "cosinussatsen": "Cosinussatsen",
    "trigonometri_tillampningar": "Tillämpningar och problemlösning med trigonometri",
    "bevis_trig_satser": "Bevis av sinus-, cosinus- och areasatsen",
    "linjar_optimering": "Linjär optimering",
    "linjar_optimering_modellering": "Linjär optimering – modellering och tillämpningar",
    "geometrisk_summa": "Geometriska summor",
    "geometrisk_summa_tillampningar": "Tillämpningar med geometriska summor"
  }
};

window.SPARMATO1 = {
  "1": {
    "polynom_begrepp": ["1b","1c"],
    "polynom_berakningar": ["1b","1c"],
    "faktorisera_polynom": ["1b","1c"],
    "polynomekvationer": ["1b","1c"],
    "programmering_intervallhalvering": ["1b","1c"],
    "absolutbelopp": ["1c"],
    "funktionsbegreppet": ["1b","1c"],
    "polynomfunktioner": ["1b","1c"],
    "rationella_uttryck_begrepp": ["1b","1c"],
    "forkorta_rationella_uttryck": ["1b","1c"],
    "rationella_ekvationer": ["1b","1c"],
    "rationella_uttryck_operationer": ["1b","1c"],
    "tangent_sekant": ["1b","1c"],
    "gransvarde": ["1b","1c"],
    "kontinuitet": ["1b","1c"]
  },
  "2": {
    "andringskvot": ["1b","1c"],
    "derivata_begrepp": ["1b","1c"],
    "numerisk_derivering": ["1b","1c"],
    "derivering_digitala_verktyg": ["1b","1c"],
    "programmering_derivering": ["1b","1c"],
    "derivatans_definition": ["1b","1c"],
    "derivata_polynom": ["1b","1c"],
    "derivata_potens": ["1b","1c"],
    "tangent_derivata": ["1b","1c"],
    "exponentialfunktioner_repetition": ["1b","1c"],
    "talet_e": ["1b","1c"],
    "naturlig_logaritm": ["1b","1c"],
    "derivata_exponentialfunktioner": ["1b","1c"],
    "exponential_derivata_tillampningar": ["1b","1c"]
  },
  "3": {
    "vaxande_avtagande": ["1b","1c"],
    "extrempunkter": ["1b","1c"],
    "andraderivata": ["1b","1c"],
    "graf_och_derivator": ["1b","1c"],
    "storsta_minsta_varde": ["1b","1c"],
    "extremvardesproblem_polynom": ["1b","1c"],
    "extremvardesproblem_modellering": ["1b","1c"],
    "flera_extremvarden": ["1b","1c"],
    "blandade_derivataproblem": ["1b","1c"],
    "deriverbarhet": ["1b","1c"],
    "primitiva_funktioner": ["1b","1c"],
    "primitiva_funktioner_villkor": ["1b","1c"],
    "integral_area": ["1b","1c"],
    "integral_primitiv": ["1b","1c"],
    "integral_digital": ["1b","1c"],
    "integraler_tillampningar": ["1b","1c"]
  },
  "4": {
    "ratvinklig_trigonometri": ["1c"],
    "exakta_trig_varden": ["1c"],
    "enhetscirkeln": ["1c"],
    "trigonometriska_ekvationer": ["1c"],
    "areasatsen": ["1c"],
    "sinussatsen": ["1c"],
    "sinussatsen_tva_fall": ["1c"],
    "cosinussatsen": ["1c"],
    "trigonometri_tillampningar": ["1c"],
    "bevis_trig_satser": ["1c"],
    "linjar_optimering": ["1b"],
    "linjar_optimering_modellering": ["1b"],
    "geometrisk_summa": ["1b"],
    "geometrisk_summa_tillampningar": ["1b"]
  }
};

window.GRUPPMATO1 = {
  "1": [
    {"id":"alg_polynom","namn":"1.1 Algebra och polynom","omr":["polynom_begrepp","polynom_berakningar","faktorisera_polynom","polynomekvationer","programmering_intervallhalvering","absolutbelopp"]},
    {"id":"funktioner","namn":"1.2 Funktioner","omr":["funktionsbegreppet","polynomfunktioner"]},
    {"id":"rationella","namn":"1.3 Rationella uttryck","omr":["rationella_uttryck_begrepp","forkorta_rationella_uttryck","rationella_ekvationer","rationella_uttryck_operationer"]},
    {"id":"grans","namn":"1.4 Tangent, sekant och gränsvärde","omr":["tangent_sekant","gransvarde","kontinuitet"]}
  ],
  "2": [
    {"id":"andring_derivata","namn":"2.1 Ändringskvoter och derivata","omr":["andringskvot","derivata_begrepp","numerisk_derivering","derivering_digitala_verktyg","programmering_derivering","derivatans_definition"]},
    {"id":"deriveringsregler","namn":"2.2 Deriveringsregler","omr":["derivata_polynom","derivata_potens","tangent_derivata"]},
    {"id":"expderivata","namn":"2.3 Derivatan av exponentialfunktioner","omr":["exponentialfunktioner_repetition","talet_e","naturlig_logaritm","derivata_exponentialfunktioner","exponential_derivata_tillampningar"]}
  ],
  "3": [
    {"id":"grafderivata","namn":"3.1 Vad säger derivatan om funktionens graf?","omr":["vaxande_avtagande","extrempunkter","andraderivata","graf_och_derivator","storsta_minsta_varde"]},
    {"id":"problemderivata","namn":"3.2 Problemlösning med derivata","omr":["extremvardesproblem_polynom","extremvardesproblem_modellering","flera_extremvarden","blandade_derivataproblem","deriverbarhet"]},
    {"id":"franderivata","namn":"3.3 Från derivata till funktion","omr":["primitiva_funktioner","primitiva_funktioner_villkor","integral_area","integral_primitiv","integral_digital","integraler_tillampningar"]}
  ],
  "1c": {
    "4": [
      {"id":"ratvinklig","namn":"4.1 Trigonometri i rätvinkliga trianglar","omr":["ratvinklig_trigonometri","exakta_trig_varden"]},
      {"id":"enhetscirkel","namn":"4.2 Trigonometri och enhetscirkeln","omr":["enhetscirkeln","trigonometriska_ekvationer"]},
      {"id":"godtycklig","namn":"4.3 Trigonometri för godtyckliga trianglar","omr":["areasatsen","sinussatsen","sinussatsen_tva_fall","cosinussatsen","trigonometri_tillampningar","bevis_trig_satser"]}
    ]
  },
  "1b": {
    "4": [
      {"id":"linopt","namn":"4.1 Linjär optimering","omr":["linjar_optimering","linjar_optimering_modellering"]},
      {"id":"geosumma","namn":"4.2 Geometriska summor","omr":["geometrisk_summa","geometrisk_summa_tillampningar"]}
    ]
  }
};
