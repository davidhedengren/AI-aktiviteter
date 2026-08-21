/* uppgifter2.js — uppgiftsbanken för Fysik 2.
   Samma format som uppgifter.js, men globalen heter BANK2.

   Varje uppgift har fälten
     id     unikt, formen "kapitel.nummer", t.ex. "1.1"
     kap    kapitelnummer, ska finnas i KAPNAMN2 i struktur2.js
     omr    områdesnyckel, ska finnas under samma kapitel i OMR2
     niva   "E", "C" eller "A"
     typ    kort beskrivning av uppgiftstypen, används för dubblettkontroll
     poang  "(E/C/A)", t.ex. "(2/1/0)"
     t      uppgiftstexten som HTML
     s      facit som HTML, en <p> per steg

   Nedan ligger en enda exempeluppgift så att sidan har något att visa.
   Ta bort den när de riktiga uppgifterna är på plats. */

window.BANK2 = [
 {
  "id": "1.1",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "beräkna kastvidd och falltid vid vågrätt utkast, ur text, sökt tid och sträcka",
  "poang": "(2/1/0)",
  "t": "<p>En boll rullar av ett bord med den vågräta farten 3,0 m/s. Bordet är 1,2 m högt. Luftmotståndet försummas.</p>\n<ol><li>Hur lång tid tar fallet?</li><li>Hur långt från bordskanten landar bollen?</li><li>Vilken lodrät fart har bollen när den landar?</li></ol>",
  "s": "<p>a) Den lodräta rörelsen är ett fritt fall från vila:</p>\n<p>h = gt²/2 ger t = √(2h/g) = √(2 · 1,2/9,82) = <strong>0,49 s</strong></p>\n<p>b) Den vågräta farten är konstant under hela fallet:</p>\n<p>s = vt = 3,0 · 0,4944 = <strong>1,5 m</strong></p>\n<p>c) v = gt = 9,82 · 0,4944 = <strong>4,9 m/s</strong></p>\n<p>De två rörelserna är oberoende av varandra. Bollen faller lika fort som om den hade släppts rakt ned.</p>"
 }
];
