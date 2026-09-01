/* strukturmato2.js — Matematik – fortsättning nivå 2.
   Strukturen följer i första hand bokens kapitelordning och underrubriker,
   men är filtrerad mot centralt innehåll i aktuell ämnesplan.
   I uppgiftsbanken visas spåret som 2c. */

window.KAPNAMNMATO2 = {
  "1": "Trigonometri",
  "2": "Derivata",
  "3": "Integraler",
  "4": "Komplexa tal"
};

window.OMRMATO2 = {
  "1": {
    "enhetscirkeln": "Enhetscirkeln och trigonometriska värden",
    "trig_ekvationer_grunder": "Trigonometriska ekvationer – grunder",
    "symmetrier_enhetscirkeln": "Symmetrier i enhetscirkeln",
    "trig_ettan": "Trigonometriska ettan",
    "additionsformler": "Additions- och subtraktionsformler",
    "dubbla_vinkeln": "Formler för dubbla vinkeln",
    "trig_identiteter": "Trigonometriska identiteter och bevis",
    "sinus_cosinusfunktioner": "Sinus- och cosinusfunktioner",
    "trig_ekvationer": "Trigonometriska ekvationer",
    "bestamma_trig_funktion": "Bestämma trigonometriska funktioner",
    "fasforskjutning": "Fasförskjutning och graftransformationer",
    "sinus_cosinus_kombination": "Uttryck av typen a sin x + b cos x",
    "tangensfunktionen": "Tangensfunktionen",
    "radianer": "Radianer",
    "trig_modeller": "Trigonometriska modeller och tillämpningar"
  },
  "2": {
    "deriveringsregler_repetition": "Repetition av deriveringsregler",
    "sammansatta_funktioner": "Sammansatta funktioner",
    "logaritmfunktioner": "Logaritmfunktioner",
    "derivata_sin_cos": "Derivatan av sinus, cosinus och tangens",
    "kedjeregeln": "Kedjeregeln",
    "produktregeln": "Produktregeln",
    "kvotregeln": "Kvotregeln",
    "derivata_exp_log": "Derivatan av exponential- och logaritmfunktioner",
    "derivata_grafer": "Derivata och grafer",
    "tillampningar_derivata": "Tillämpningar av deriveringsregler",
    "grafskissning": "Skissa grafer med derivata",
    "asymptoter": "Asymptoter och dominerande termer"
  },
  "3": {
    "primitiva_funktioner": "Primitiva funktioner",
    "integralberakning": "Integralberäkningar",
    "area_integraler": "Integraler och area",
    "area_mellan_kurvor": "Area mellan kurvor",
    "integraler_storheter": "Integraler och beräkning av storheter",
    "tathetsfunktioner": "Täthetsfunktioner",
    "sannolikhetsfordelning": "Sannolikhetsfördelningar med integraler",
    "rotationsvolymer": "Rotationsvolymer",
    "integral_modellering": "Integraler i modellering och problemlösning"
  },
  "4": {
    "imaginara_enheten": "Den imaginära enheten",
    "rakning_komplexa": "Räkning med komplexa tal",
    "konjugat_absolutbelopp": "Konjugat och absolutbelopp",
    "komplexa_talplanet": "Det komplexa talplanet",
    "polar_form": "Polär form",
    "rakning_polar_form": "Multiplikation och division i polär form",
    "de_moivre": "de Moivres formel",
    "potensekvationer_komplexa": "Potensekvationer med komplexa tal",
    "eulers_formel": "Eulers formel",
    "polynomdivision": "Polynomdivision",
    "faktorsatsen": "Faktorsatsen",
    "polynomekvationer": "Polynomekvationer",
    "komplexa_losningar": "Komplexa lösningar till ekvationer"
  }
};

window.SPARMATO2 = Object.fromEntries(
  Object.entries(window.OMRMATO2).map(([kap, omr]) => [
    kap,
    Object.fromEntries(Object.keys(omr).map(key => [key, ["2c"]]))
  ])
);
