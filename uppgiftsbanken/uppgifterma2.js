/* uppgifterma2.js — Matematik nivå 2.
   Kapitel 1 är ombyggt och kvalitetssäkrat mot NP/provreferenser.
   Övriga kapitel är tills vidare den tidigare startbanken. */
window.BANKMA2 = [
  {
    "id": "1.01",
    "kap": 1,
    "omr": "negativa_tal_prioritering",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna utan digitala hjälpmedel.</p><p>a) \\(-4+3(2-7)\\)<br>b) \\(18/(-3)-2(-4)\\)<br>c) \\(-2^2+(-2)^2\\)</p>",
    "s": "<p>a) Parentesen först: \\(2-7=-5\\). Då blir \\(-4+3\\cdot(-5)=-19\\).</p><p>b) \\(18/(-3)=-6\\) och \\(-2(-4)=8\\). Summan blir \\(2\\).</p><p>c) \\(-2^2=-(2^2)=-4\\), medan \\((-2)^2=4\\). Summan blir \\(0\\).</p><p><strong>Svar: a) −19, b) 2, c) 0.</strong></p>",
    "familj": "prioritering_negativa_flera_steg"
  },
  {
    "id": "1.02",
    "kap": 1,
    "omr": "negativa_tal_prioritering",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Mira beräknar \\(-3^2+2(-4)\\) och får svaret 1. Hon har räknat \\(-3^2\\) som 9.</p><p>Förklara vad som är fel och beräkna uttrycket korrekt.</p>",
    "s": "<p>Potensen beräknas före minustecknet: \\(-3^2=-(3^2)=-9\\).</p><p>Därför är \\(-3^2+2(-4)=-9-8=-17\\).</p><p><strong>Miras fel är att hon behandlar \\(-3^2\\) som \\((-3)^2\\). Rätt svar är −17.</strong></p>",
    "familj": "prioritering_negativ_potens_felanalys"
  },
  {
    "id": "1.03",
    "kap": 1,
    "omr": "brakraking",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna och svara i förkortad form.</p><p>a) \\(\\frac56-\\frac38\\)<br>b) \\(-\\frac35\\cdot\\frac{10}{9}\\)<br>c) \\(\\frac7{12}\\div\\frac{14}{9}\\)</p>",
    "s": "<p>a) \\(\\frac56-\\frac38=\\frac{20}{24}-\\frac9{24}=\\frac{11}{24}\\).</p><p>b) \\(-\\frac35\\cdot\\frac{10}{9}=-\\frac{30}{45}=-\\frac23\\).</p><p>c) \\(\\frac7{12}\\cdot\\frac9{14}=\\frac38\\).</p><p><strong>Svar: a) \\(\\frac{11}{24}\\), b) \\(-\\frac23\\), c) \\(\\frac38\\).</strong></p>",
    "familj": "brak_flera_raknesatt"
  },
  {
    "id": "1.04",
    "kap": 1,
    "omr": "brakraking",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En tank är fylld till \\(\\frac35\\) av sin volym. Därefter används \\(\\frac14\\) av vattnet som finns i tanken. Då återstår 18 liter.</p><p>Hur stor är tankens hela volym?</p>",
    "s": "<p>Efter att en fjärdedel har använts återstår \\(\\frac34\\) av vattnet som fanns i tanken.</p><p>Om \\(\\frac34\\) motsvarar 18 liter, fanns det \\(18\\cdot\\frac43=24\\) liter före användningen.</p><p>Dessa 24 liter är \\(\\frac35\\) av tankens volym.</p><p>\\(V=24\\cdot\\frac53=40\\).</p><p><strong>Tankens volym är 40 liter.</strong></p>",
    "familj": "brak_baklanges_volym"
  },
  {
    "id": "1.05",
    "kap": 1,
    "omr": "algebraiska_uttryck",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla så långt som möjligt.</p><p>\\(3(2x-y)-2(x+3y)+4\\)</p>",
    "s": "<p>Multiplicera in i parenteserna:</p><p>\\(6x-3y-2x-6y+4\\).</p><p>Samla termer av samma sort:</p><p><strong>\\(4x-9y+4\\)</strong>.</p>",
    "familj": "algebra_uttryck_tva_variabler_parenteser"
  },
  {
    "id": "1.06",
    "kap": 1,
    "omr": "algebraiska_uttryck",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Uttrycket är</p><p>\\(A(x)=3(2x-a)-2(x+4)+bx\\).</p><p>Bestäm \\(b\\) så att värdet av \\(A(x)\\) inte beror på \\(x\\). Bestäm sedan värdet av uttrycket när \\(a=-1\\).</p>",
    "s": "<p>Förenkla:</p><p>\\(A(x)=6x-3a-2x-8+bx=(4+b)x-3a-8\\).</p><p>För att uttrycket inte ska bero på \\(x\\) måste koefficienten framför \\(x\\) vara 0:</p><p>\\(4+b=0\\Rightarrow b=-4\\).</p><p>När \\(a=-1\\) blir värdet \\(-3(-1)-8=-5\\).</p><p><strong>\\(b=-4\\) och uttryckets värde är −5.</strong></p>",
    "familj": "algebra_parameter_oberoende_av_x"
  },
  {
    "id": "1.07",
    "kap": 1,
    "omr": "ekvationer",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Lös ekvationerna.</p><p>a) \\(4(2x-3)=3x+13\\)<br>b) \\(\\frac{x-2}{3}+\\frac{x+1}{2}=5\\)</p>",
    "s": "<p>a) \\(8x-12=3x+13\\Rightarrow5x=25\\Rightarrow x=5\\).</p><p>b) Multiplicera med 6: \\(2(x-2)+3(x+1)=30\\). Då \\(5x-1=30\\), alltså \\(x=\\frac{31}{5}\\).</p><p><strong>Svar: a) \\(x=5\\), b) \\(x=\\frac{31}{5}\\).</strong></p>",
    "familj": "ekvationer_parentes_och_brak"
  },
  {
    "id": "1.08",
    "kap": 1,
    "omr": "ekvationer",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ekvationen</p><p>\\((a-2)x+6=4x+a\\)</p><p>ska vara sann för alla värden på \\(x\\). Bestäm \\(a\\).</p>",
    "s": "<p>För att ekvationen ska vara sann för alla \\(x\\) måste både koefficienterna framför \\(x\\) och de konstanta termerna vara lika.</p><p>\\(a-2=4\\Rightarrow a=6\\).</p><p>Konstanterna ger samtidigt \\(6=a\\), vilket också ger \\(a=6\\).</p><p><strong>\\(a=6\\).</strong></p>",
    "familj": "ekvation_parameter_identitet"
  },
  {
    "id": "1.09",
    "kap": 1,
    "omr": "ekvationer_digitala_verktyg",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Använd ett digitalt verktyg för att lösa ekvationen</p><p>\\(\\frac{18}{x+2}=4,6\\).</p><p>Svara med två decimaler.</p>",
    "s": "<p>En digital lösning ger \\(x\\approx1,913\\).</p><p><strong>\\(x\\approx1,91\\).</strong></p>",
    "familj": "digital_ekvation_brak"
  },
  {
    "id": "1.10",
    "kap": 1,
    "omr": "rata_linjens_ekvation",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Grafen visar en rät linje \\(L\\).</p><span class=\"fig smal\"><svg width=\"430\" height=\"390\" viewBox=\"0 0 430 390\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"388\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"350.00\" x2=\"48.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"83.80\" y1=\"350.00\" x2=\"83.80\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"119.60\" y1=\"350.00\" x2=\"119.60\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"155.40\" y1=\"350.00\" x2=\"155.40\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"191.20\" y1=\"350.00\" x2=\"191.20\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"227.00\" y1=\"350.00\" x2=\"227.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"262.80\" y1=\"350.00\" x2=\"262.80\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"298.60\" y1=\"350.00\" x2=\"298.60\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"334.40\" y1=\"350.00\" x2=\"334.40\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"370.20\" y1=\"350.00\" x2=\"370.20\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"406.00\" y1=\"350.00\" x2=\"406.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"350.00\" x2=\"406.00\" y2=\"350.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"322.50\" x2=\"406.00\" y2=\"322.50\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"295.00\" x2=\"406.00\" y2=\"295.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"267.50\" x2=\"406.00\" y2=\"267.50\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"240.00\" x2=\"406.00\" y2=\"240.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"212.50\" x2=\"406.00\" y2=\"212.50\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"185.00\" x2=\"406.00\" y2=\"185.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"157.50\" x2=\"406.00\" y2=\"157.50\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"130.00\" x2=\"406.00\" y2=\"130.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"102.50\" x2=\"406.00\" y2=\"102.50\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"75.00\" x2=\"406.00\" y2=\"75.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"47.50\" x2=\"406.00\" y2=\"47.50\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"20.00\" x2=\"406.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"240.00\" x2=\"416.00\" y2=\"240.00\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 416.00 240.00 l -8 -4 l 0 8 z\" fill=\"#2B2527\"/><line x1=\"191.20\" y1=\"350.00\" x2=\"191.20\" y2=\"10.00\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 191.20 10.00 l -4 8 l 8 0 z\" fill=\"#2B2527\"/><line x1=\"48.00\" y1=\"236.00\" x2=\"48.00\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"48.00\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"83.80\" y1=\"236.00\" x2=\"83.80\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"83.80\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"119.60\" y1=\"236.00\" x2=\"119.60\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"119.60\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"155.40\" y1=\"236.00\" x2=\"155.40\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"155.40\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"227.00\" y1=\"236.00\" x2=\"227.00\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"227.00\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"262.80\" y1=\"236.00\" x2=\"262.80\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"262.80\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"298.60\" y1=\"236.00\" x2=\"298.60\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"298.60\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"334.40\" y1=\"236.00\" x2=\"334.40\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"334.40\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"370.20\" y1=\"236.00\" x2=\"370.20\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"370.20\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"406.00\" y1=\"236.00\" x2=\"406.00\" y2=\"244.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"406.00\" y=\"257.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"187.20\" y1=\"350.00\" x2=\"195.20\" y2=\"350.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"353.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"187.20\" y1=\"322.50\" x2=\"195.20\" y2=\"322.50\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"326.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"187.20\" y1=\"295.00\" x2=\"195.20\" y2=\"295.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"298.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"187.20\" y1=\"267.50\" x2=\"195.20\" y2=\"267.50\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"271.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"187.20\" y1=\"212.50\" x2=\"195.20\" y2=\"212.50\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"216.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"187.20\" y1=\"185.00\" x2=\"195.20\" y2=\"185.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"188.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"187.20\" y1=\"157.50\" x2=\"195.20\" y2=\"157.50\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"161.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"187.20\" y1=\"130.00\" x2=\"195.20\" y2=\"130.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"133.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"187.20\" y1=\"102.50\" x2=\"195.20\" y2=\"102.50\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"106.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"187.20\" y1=\"75.00\" x2=\"195.20\" y2=\"75.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"78.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"187.20\" y1=\"47.50\" x2=\"195.20\" y2=\"47.50\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"51.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><line x1=\"187.20\" y1=\"20.00\" x2=\"195.20\" y2=\"20.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"182.20\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">8</text><text x=\"183.20\" y=\"256.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"119.60\" y1=\"20.00\" x2=\"334.40\" y2=\"350.00\" stroke=\"#B43123\" stroke-width=\"2.7\" stroke-linecap=\"round\"/><text x=\"133.92\" y=\"42.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#B43123\">L</text><text x=\"419.00\" y=\"244.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">x</text><text x=\"198.20\" y=\"8.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">y</text></svg></span><p>a) Bestäm linjens riktningskoefficient \\(k\\).<br>b) Bestäm \\(m\\).<br>c) Bestäm linjens nollställe.</p>",
    "s": "<p>Linjen går till exempel genom \\((0,4)\\) och \\((1,2)\\).</p><p>\\(k=\\frac{2-4}{1-0}=-2\\) och skärningen med \\(y\\)-axeln är \\(m=4\\).</p><p>För nollstället sätts \\(y=0\\): \\(0=-2x+4\\Rightarrow x=2\\).</p><p><strong>\\(k=-2\\), \\(m=4\\), nollstället är \\(x=2\\).</strong></p>",
    "familj": "rat_linjen_graf_avlas_k_m_nollstalle"
  },
  {
    "id": "1.11",
    "kap": 1,
    "omr": "bestamma_linjara_funktioner",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En rät linje går genom punkterna \\((-3,5)\\) och \\((2,-5)\\).</p><p>Bestäm linjens ekvation.</p>",
    "s": "<p>\\(k=\\frac{-5-5}{2-(-3)}=\\frac{-10}{5}=-2\\).</p><p>Sätt in \\((-3,5)\\): \\(5=-2(-3)+m\\Rightarrow m=-1\\).</p><p><strong>Linjen är \\(y=-2x-1\\).</strong></p>",
    "familj": "rat_linjen_tva_punkter"
  },
  {
    "id": "1.12",
    "kap": 1,
    "omr": "linjara_representationer",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Tabellen visar värden för en linjär funktion \\(f\\).</p><table class='data'><tr><th>x</th><th>−2</th><th>0</th><th>3</th><th>5</th></tr><tr><th>f(x)</th><td>9</td><td>5</td><td>−1</td><td>−5</td></tr></table><p>a) Bestäm funktionen \\(f(x)\\).<br>b) Bestäm \\(f(8)\\).</p>",
    "s": "<p>När \\(x\\) ökar med 2 från −2 till 0 minskar \\(f(x)\\) med 4. Därför är \\(k=-2\\).</p><p>Tabellen visar att \\(f(0)=5\\), alltså \\(m=5\\).</p><p>\\(f(x)=-2x+5\\) och \\(f(8)=-16+5=-11\\).</p><p><strong>\\(f(x)=-2x+5\\) och \\(f(8)=-11\\).</strong></p>",
    "familj": "linjar_tabell_till_formel"
  },
  {
    "id": "1.13",
    "kap": 1,
    "omr": "linjara_representationer",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Tabellen ska visa en linjär funktion, men ett värde är fel.</p><table class='data'><tr><th>x</th><th>−4</th><th>−1</th><th>2</th><th>5</th></tr><tr><th>f(x)</th><td>13</td><td>7</td><td>2</td><td>−5</td></tr></table><p>Hitta det felaktiga värdet, bestäm vad det ska vara och ange funktionens formel. Motivera.</p>",
    "s": "<p>\\(x\\) ökar med 3 i varje steg. Från 13 till 7 minskar funktionsvärdet med 6, vilket ger \\(k=-2\\).</p><p>Då ska värdena minska med 6 varje gång: \\(13,7,1,-5\\).</p><p>Värdet 2 är alltså fel och ska vara 1.</p><p>Med \\((-1,7)\\): \\(7=-2(-1)+m\\Rightarrow m=5\\).</p><p><strong>Det felaktiga värdet är 2; det ska vara 1. Funktionen är \\(f(x)=-2x+5\\).</strong></p>",
    "familj": "linjar_tabell_felanalys"
  },
  {
    "id": "1.14",
    "kap": 1,
    "omr": "bestamma_linjara_funktioner",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För den linjära funktionen \\(f(x)=kx+m\\) gäller</p><p>\\(f(a)=7\\), \\(f(a+3)=-2\\) och \\(f(0)=13\\).</p><p>Bestäm \\(a\\).</p>",
    "s": "<p>När \\(x\\) ökar från \\(a\\) till \\(a+3\\) minskar funktionsvärdet från 7 till −2, alltså med 9.</p><p>Därför är \\(k=\\frac{-9}{3}=-3\\).</p><p>Eftersom \\(f(0)=13\\) är \\(m=13\\). Alltså \\(f(x)=-3x+13\\).</p><p>\\(f(a)=7\\Rightarrow -3a+13=7\\Rightarrow a=2\\).</p><p><strong>\\(a=2\\).</strong></p>",
    "familj": "linjar_parameter_fa_faplus"
  },
  {
    "id": "1.15",
    "kap": 1,
    "omr": "linjara_representationer",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En tank innehåller 850 liter vatten. Vatten tappas ut med 32 liter per minut.</p><p>a) Skriv en linjär funktion \\(V(t)\\) för mängden vatten efter \\(t\\) minuter.<br>b) Efter hur många minuter återstår 530 liter?</p>",
    "s": "<p>Startvärdet är 850 och förändringen är −32 liter per minut:</p><p>\\(V(t)=850-32t\\).</p><p>\\(850-32t=530\\Rightarrow32t=320\\Rightarrow t=10\\).</p><p><strong>\\(V(t)=850-32t\\) och 530 liter återstår efter 10 minuter.</strong></p>",
    "familj": "linjar_kontext_tank"
  },
  {
    "id": "1.16",
    "kap": 1,
    "omr": "bestamma_linjara_funktioner",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två mobilabonnemang har följande månadskostnader:</p><p>\\(A(x)=129+1,20x\\)<br>\\(B(x)=249+0,60x\\)</p><p>där \\(x\\) är antalet samtalsminuter.</p><p>a) Vid hur många minuter kostar abonnemangen lika mycket?<br>b) Vilket abonnemang är billigast om man ringer mer än så? Motivera.</p>",
    "s": "<p>Sätt kostnaderna lika:</p><p>\\(129+1,20x=249+0,60x\\Rightarrow0,60x=120\\Rightarrow x=200\\).</p><p>Abonnemang B har mindre kostnadsökning per minut, 0,60 kr jämfört med 1,20 kr. Därför blir B billigare efter skärningspunkten.</p><p><strong>De kostar lika vid 200 minuter. Vid fler minuter är B billigast.</strong></p>",
    "familj": "linjar_jamfora_tva_modeller"
  },
  {
    "id": "1.17",
    "kap": 1,
    "omr": "rata_linjens_ekvation",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Linjen \\(L\\) går genom origo och har ekvationen \\(y=kx\\).</p><p>Linjen \\(L\\) skär linjen \\(y=1,4x-6\\) i en punkt där \\(x\\)-koordinaten är större än 40.</p><p>Bestäm alla möjliga värden på \\(k\\). Motivera.</p>",
    "s": "<p>I skärningspunkten gäller \\(kx=1,4x-6\\).</p><p>\\((1,4-k)x=6\\Rightarrow x=\\frac6{1,4-k}\\).</p><p>För att \\(x\\) ska vara positiv måste \\(k<1,4\\). Kravet \\(x>40\\) ger</p><p>\\(\\frac6{1,4-k}>40\\Rightarrow6>56-40k\\Rightarrow k>1,25\\).</p><p><strong>Alla värden \\(1,25&lt;k&lt;1,4\\) fungerar.</strong></p>",
    "familj": "linjar_parameter_skarning_intervall"
  },
  {
    "id": "1.18",
    "kap": 1,
    "omr": "rata_linjens_ekvation",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En rät linje skär \\(x\\)-axeln i \\((6,0)\\) och \\(y\\)-axeln i \\((0,-3)\\).</p><p>Bestäm linjens ekvation.</p>",
    "s": "<p>\\(k=\\frac{0-(-3)}{6-0}=\\frac36=0,5\\).</p><p>Skärningen med \\(y\\)-axeln ger \\(m=-3\\).</p><p><strong>\\(y=0,5x-3\\).</strong></p>",
    "familj": "rat_linjen_axelskarningar"
  },
  {
    "id": "1.19",
    "kap": 1,
    "omr": "bestamma_linjara_funktioner",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En linjär funktion \\(f(x)=kx+m\\) uppfyller \\(f(p)=q\\) och \\(f(q)=p\\), där \\(p\\ne q\\).</p><p>Visa att \\(k=-1\\). Bestäm sedan \\(f\\!\\left(\\frac{p+q}{2}\\right)\\).</p>",
    "s": "<p>Villkoren ger \\(kp+m=q\\) och \\(kq+m=p\\).</p><p>Subtrahera ekvationerna:</p><p>\\(k(p-q)=q-p=-(p-q)\\).</p><p>Eftersom \\(p\\ne q\\) kan vi dividera med \\(p-q\\), vilket ger \\(k=-1\\).</p><p>Sätt in i till exempel första ekvationen: \\(-p+m=q\\Rightarrow m=p+q\\).</p><p>Därför är \\(f(x)=-x+p+q\\).</p><p>\\(f\\!\\left(\\frac{p+q}{2}\\right)=-\\frac{p+q}{2}+p+q=\\frac{p+q}{2}\\).</p><p><strong>\\(k=-1\\) och \\(f((p+q)/2)=(p+q)/2\\).</strong></p>",
    "familj": "linjar_generell_byter_plats_pa_tal"
  },
  {
    "id": "1.20",
    "kap": 1,
    "omr": "linjar_regression",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En linjär regression ger modellen</p><p>\\(y=1,8x+42\\)</p><p>där \\(x\\) är antal träningspass och \\(y\\) är resultatet på ett test.</p><p>a) Tolka talet 1,8 i modellen.<br>b) Vilket resultat förutsäger modellen efter 10 träningspass?</p>",
    "s": "<p>a) Modellen säger att testresultatet ökar med ungefär 1,8 enheter för varje extra träningspass.</p><p>b) \\(y=1,8\\cdot10+42=60\\).</p><p><strong>Ökning cirka 1,8 enheter per pass; modellen ger resultatet 60 efter 10 pass.</strong></p>",
    "familj": "regression_tolka_lutning_och_prognos"
  },
  {
    "id": "1.21",
    "kap": 1,
    "omr": "korrelation_koefficient",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Spridningsdiagrammet visar ett samband mellan två variabler.</p><span class=\"fig smal\"><svg width=\"410\" height=\"370\" viewBox=\"0 0 410 370\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"408\" height=\"368\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"330.00\" x2=\"48.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"85.56\" y1=\"330.00\" x2=\"85.56\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"123.11\" y1=\"330.00\" x2=\"123.11\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"160.67\" y1=\"330.00\" x2=\"160.67\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"198.22\" y1=\"330.00\" x2=\"198.22\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"235.78\" y1=\"330.00\" x2=\"235.78\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"273.33\" y1=\"330.00\" x2=\"273.33\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"310.89\" y1=\"330.00\" x2=\"310.89\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"348.44\" y1=\"330.00\" x2=\"348.44\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"386.00\" y1=\"330.00\" x2=\"386.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"330.00\" x2=\"386.00\" y2=\"330.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"295.56\" x2=\"386.00\" y2=\"295.56\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"261.11\" x2=\"386.00\" y2=\"261.11\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"226.67\" x2=\"386.00\" y2=\"226.67\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"192.22\" x2=\"386.00\" y2=\"192.22\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"157.78\" x2=\"386.00\" y2=\"157.78\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"123.33\" x2=\"386.00\" y2=\"123.33\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"88.89\" x2=\"386.00\" y2=\"88.89\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"54.44\" x2=\"386.00\" y2=\"54.44\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"20.00\" x2=\"386.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"330.00\" x2=\"396.00\" y2=\"330.00\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 396.00 330.00 l -8 -4 l 0 8 z\" fill=\"#2B2527\"/><line x1=\"48.00\" y1=\"330.00\" x2=\"48.00\" y2=\"10.00\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 48.00 10.00 l -4 8 l 8 0 z\" fill=\"#2B2527\"/><line x1=\"85.56\" y1=\"326.00\" x2=\"85.56\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"85.56\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"123.11\" y1=\"326.00\" x2=\"123.11\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"123.11\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"160.67\" y1=\"326.00\" x2=\"160.67\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"160.67\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"198.22\" y1=\"326.00\" x2=\"198.22\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"198.22\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"235.78\" y1=\"326.00\" x2=\"235.78\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"235.78\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"273.33\" y1=\"326.00\" x2=\"273.33\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"273.33\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"310.89\" y1=\"326.00\" x2=\"310.89\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"310.89\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><line x1=\"348.44\" y1=\"326.00\" x2=\"348.44\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"348.44\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">8</text><line x1=\"386.00\" y1=\"326.00\" x2=\"386.00\" y2=\"334.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"386.00\" y=\"347.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">9</text><line x1=\"44.00\" y1=\"295.56\" x2=\"52.00\" y2=\"295.56\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"299.06\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"44.00\" y1=\"261.11\" x2=\"52.00\" y2=\"261.11\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"264.61\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"44.00\" y1=\"226.67\" x2=\"52.00\" y2=\"226.67\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"230.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"44.00\" y1=\"192.22\" x2=\"52.00\" y2=\"192.22\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"195.72\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"44.00\" y1=\"157.78\" x2=\"52.00\" y2=\"157.78\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"161.28\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"44.00\" y1=\"123.33\" x2=\"52.00\" y2=\"123.33\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"126.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"44.00\" y1=\"88.89\" x2=\"52.00\" y2=\"88.89\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"92.39\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><line x1=\"44.00\" y1=\"54.44\" x2=\"52.00\" y2=\"54.44\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"57.94\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">8</text><line x1=\"44.00\" y1=\"20.00\" x2=\"52.00\" y2=\"20.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"39.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">9</text><text x=\"40.00\" y=\"346.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10\" fill=\"#5C575E\">0</text><circle cx=\"85.56\" cy=\"54.44\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"123.11\" cy=\"95.78\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"160.67\" cy=\"82.00\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"198.22\" cy=\"147.44\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"235.78\" cy=\"161.22\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"273.33\" cy=\"223.22\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"310.89\" cy=\"199.11\" r=\"4.5\" fill=\"#2A5D9E\"/><circle cx=\"348.44\" cy=\"268.00\" r=\"4.5\" fill=\"#2A5D9E\"/><text x=\"399.00\" y=\"334.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">x</text><text x=\"55.00\" y=\"8.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">y</text></svg></span><p>Vilket värde ligger närmast korrelationskoefficienten?</p><p>A) \\(-0,95\\) &nbsp; B) \\(-0,50\\) &nbsp; C) \\(0\\) &nbsp; D) \\(0,50\\) &nbsp; E) \\(0,95\\)</p>",
    "s": "<p>Punkterna ligger nära en fallande rät linje. Sambandet är därför starkt negativt.</p><p><strong>A) \\(r\\approx-0,95\\).</strong></p>",
    "familj": "korrelation_spridningsdiagram_valj_r"
  },
  {
    "id": "1.22",
    "kap": 1,
    "omr": "linjar_regression",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Tabellen visar antal timmars träning \\(x\\) och ett resultat \\(y\\).</p><table class='data'><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><th>y</th><td>48</td><td>54</td><td>61</td><td>67</td><td>70</td></tr></table><p>a) Bestäm en linjär regressionsmodell med ett digitalt verktyg.<br>b) Använd modellen för att uppskatta \\(y\\) när \\(x=8\\).<br>c) Förklara varför uppskattningen bör användas försiktigt.</p>",
    "s": "<p>a) Regressionen ger ungefär \\(y=5,7x+42,9\\).</p><p>b) \\(y(8)=5,7\\cdot8+42,9=88,5\\).</p><p>c) Mätvärdena ligger endast mellan \\(x=1\\) och \\(x=5\\). Värdet vid \\(x=8\\) är en extrapolation, så vi vet inte om det linjära sambandet fortsätter så långt.</p><p><strong>Modell: \\(y\\approx5,7x+42,9\\), prognos \\(88,5\\), men prognosen är osäker eftersom den ligger utanför dataintervallet.</strong></p>",
    "familj": "regression_data_extrapolation"
  },
  {
    "id": "1.23",
    "kap": 1,
    "omr": "korrelation_koefficient",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Under åtta sommarveckor finns ett tydligt positivt samband mellan försäljningen av glass och antalet personer som behöver hjälp vid badplatser. Korrelationskoefficienten är \\(r=0,88\\).</p><p>Kan man därför säga att ökad glassförsäljning orsakar fler räddningsinsatser? Förklara och ge en möjlig annan förklaring till sambandet.</p>",
    "s": "<p>Nej. En hög korrelation visar att variablerna samvarierar, men den visar inte att den ena orsakar den andra.</p><p>En möjlig bakomliggande variabel är temperaturen. Varma dagar kan både öka glassförsäljningen och göra att fler personer badar.</p><p><strong>Korrelation innebär inte automatiskt orsakssamband.</strong></p>",
    "familj": "korrelation_kausalitet_tredje_variabel"
  },
  {
    "id": "1.24",
    "kap": 1,
    "omr": "linjar_regression",
    "kurs": [
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/2",
    "t": "<p>Ett företag undersöker sambandet mellan antal utbildningstimmar \\(x\\) och antal producerade enheter \\(y\\). För 14 anställda, där \\(2\\le x\\le8\\), får man</p><p>\\(y=3,2x+48\\) och \\(r=0,96\\).</p><p>Chefen säger:</p><p>1. ”En person med 30 utbildningstimmar kommer att producera 144 enheter.”<br>2. ”Eftersom \\(r\\) är så högt visar undersökningen att fler utbildningstimmar orsakar högre produktion.”</p><p>Bedöm båda påståendena och motivera.</p>",
    "s": "<p>Modellen ger visserligen \\(3,2\\cdot30+48=144\\), men \\(x=30\\) ligger långt utanför mätområdet 2–8. Det är en stor extrapolation och därför finns det inget bra stöd för att använda modellen så långt.</p><p>Det höga värdet på \\(r\\) visar ett starkt linjärt samband i datamaterialet, men inte ett orsakssamband. Andra faktorer kan påverka både utbildningstid och produktion.</p><p><strong>Inget av påståendena är tillräckligt motiverat av undersökningen.</strong></p>",
    "familj": "regression_modellkritik_extrapolation_kausalitet"
  },
  {
    "id": "1.25",
    "kap": 1,
    "omr": "linjara_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationssystemet algebraiskt.</p><p>\\(\\begin{cases}2x+y=11\\\\x-y=1\\end{cases}\\)</p>",
    "s": "<p>Addera ekvationerna: \\(3x=12\\Rightarrow x=4\\).</p><p>Sätt in i \\(x-y=1\\): \\(4-y=1\\Rightarrow y=3\\).</p><p><strong>\\((x,y)=(4,3)\\).</strong></p>",
    "familj": "ekvationssystem_direkt_addition"
  },
  {
    "id": "1.26",
    "kap": 1,
    "omr": "substitutionsmetoden",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationssystemet med substitutionsmetoden.</p><p>\\(\\begin{cases}y=3x-4\\\\2x+y=16\\end{cases}\\)</p>",
    "s": "<p>Sätt in \\(y=3x-4\\) i den andra ekvationen:</p><p>\\(2x+3x-4=16\\Rightarrow5x=20\\Rightarrow x=4\\).</p><p>\\(y=3\\cdot4-4=8\\).</p><p><strong>\\((x,y)=(4,8)\\).</strong></p>",
    "familj": "substitution_fardig_y"
  },
  {
    "id": "1.27",
    "kap": 1,
    "omr": "additionsmetoden",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationssystemet med additionsmetoden.</p><p>\\(\\begin{cases}3x+2y=14\\\\2x-y=0\\end{cases}\\)</p>",
    "s": "<p>Multiplicera den andra ekvationen med 2:</p><p>\\(4x-2y=0\\).</p><p>Addera med den första: \\(7x=14\\Rightarrow x=2\\).</p><p>\\(2\\cdot2-y=0\\Rightarrow y=4\\).</p><p><strong>\\((x,y)=(2,4)\\).</strong></p>",
    "familj": "addition_multiplicera_en_ekvation"
  },
  {
    "id": "1.28",
    "kap": 1,
    "omr": "grafisk_losning_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Graferna till två räta linjer visas i koordinatsystemet.</p><span class=\"fig smal\"><svg width=\"430\" height=\"390\" viewBox=\"0 0 430 390\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"388\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"350.00\" x2=\"48.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"87.78\" y1=\"350.00\" x2=\"87.78\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"127.56\" y1=\"350.00\" x2=\"127.56\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"167.33\" y1=\"350.00\" x2=\"167.33\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"207.11\" y1=\"350.00\" x2=\"207.11\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"246.89\" y1=\"350.00\" x2=\"246.89\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"286.67\" y1=\"350.00\" x2=\"286.67\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"326.44\" y1=\"350.00\" x2=\"326.44\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"366.22\" y1=\"350.00\" x2=\"366.22\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"406.00\" y1=\"350.00\" x2=\"406.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"350.00\" x2=\"406.00\" y2=\"350.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"320.00\" x2=\"406.00\" y2=\"320.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"290.00\" x2=\"406.00\" y2=\"290.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"260.00\" x2=\"406.00\" y2=\"260.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"230.00\" x2=\"406.00\" y2=\"230.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"200.00\" x2=\"406.00\" y2=\"200.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"170.00\" x2=\"406.00\" y2=\"170.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"140.00\" x2=\"406.00\" y2=\"140.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"110.00\" x2=\"406.00\" y2=\"110.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"80.00\" x2=\"406.00\" y2=\"80.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"50.00\" x2=\"406.00\" y2=\"50.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"20.00\" x2=\"406.00\" y2=\"20.00\" stroke=\"#E4E3E6\" stroke-width=\"1\"/><line x1=\"48.00\" y1=\"260.00\" x2=\"416.00\" y2=\"260.00\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 416.00 260.00 l -8 -4 l 0 8 z\" fill=\"#2B2527\"/><line x1=\"167.33\" y1=\"350.00\" x2=\"167.33\" y2=\"10.00\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 167.33 10.00 l -4 8 l 8 0 z\" fill=\"#2B2527\"/><line x1=\"48.00\" y1=\"256.00\" x2=\"48.00\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"48.00\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"87.78\" y1=\"256.00\" x2=\"87.78\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"87.78\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"127.56\" y1=\"256.00\" x2=\"127.56\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"127.56\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"207.11\" y1=\"256.00\" x2=\"207.11\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"207.11\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"246.89\" y1=\"256.00\" x2=\"246.89\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"246.89\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"286.67\" y1=\"256.00\" x2=\"286.67\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"286.67\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"326.44\" y1=\"256.00\" x2=\"326.44\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"326.44\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"366.22\" y1=\"256.00\" x2=\"366.22\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"366.22\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"406.00\" y1=\"256.00\" x2=\"406.00\" y2=\"264.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"406.00\" y=\"277.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"163.33\" y1=\"350.00\" x2=\"171.33\" y2=\"350.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"353.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"163.33\" y1=\"320.00\" x2=\"171.33\" y2=\"320.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"323.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"163.33\" y1=\"290.00\" x2=\"171.33\" y2=\"290.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"293.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"163.33\" y1=\"230.00\" x2=\"171.33\" y2=\"230.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"233.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"163.33\" y1=\"200.00\" x2=\"171.33\" y2=\"200.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"203.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"163.33\" y1=\"170.00\" x2=\"171.33\" y2=\"170.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"173.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"163.33\" y1=\"140.00\" x2=\"171.33\" y2=\"140.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"143.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"163.33\" y1=\"110.00\" x2=\"171.33\" y2=\"110.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"113.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"163.33\" y1=\"80.00\" x2=\"171.33\" y2=\"80.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"83.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"163.33\" y1=\"50.00\" x2=\"171.33\" y2=\"50.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"53.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><line x1=\"163.33\" y1=\"20.00\" x2=\"171.33\" y2=\"20.00\" stroke=\"#2B2527\" stroke-width=\"1.2\"/><text x=\"158.33\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">8</text><text x=\"159.33\" y=\"276.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"48.00\" y1=\"320.00\" x2=\"406.00\" y2=\"50.00\" stroke=\"#B43123\" stroke-width=\"2.7\" stroke-linecap=\"round\"/><text x=\"358.27\" y=\"62.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#B43123\">L₁</text><line x1=\"147.44\" y1=\"20.00\" x2=\"366.22\" y2=\"350.00\" stroke=\"#2A5D9E\" stroke-width=\"2.7\" stroke-linecap=\"round\"/><text x=\"163.36\" y=\"50.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2A5D9E\">L₂</text><circle cx=\"246.89\" cy=\"170.00\" r=\"4.3\" fill=\"#2B2527\"/><text x=\"419.00\" y=\"264.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">x</text><text x=\"174.33\" y=\"8.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">y</text></svg></span><p>a) Bestäm ekvationssystemets lösning.<br>b) Förklara kort varför skärningspunkten är lösningen.</p>",
    "s": "<p>Linjerna skär varandra i punkten \\((2,3)\\).</p><p>I skärningspunkten har båda linjerna samma \\(x\\)-värde och samma \\(y\\)-värde. Punkten uppfyller därför båda ekvationerna samtidigt.</p><p><strong>Lösningen är \\((2,3)\\).</strong></p>",
    "familj": "ekvationssystem_grafisk_skarning"
  },
  {
    "id": "1.29",
    "kap": 1,
    "omr": "linjara_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Samir löser ekvationssystemet</p><p>\\(\\begin{cases}4x-3y=5\\\\2x+y=7\\end{cases}\\)</p><p>och skriver att lösningen är \\((2,3)\\).</p><p>Visa att hans svar är fel och bestäm den korrekta lösningen.</p>",
    "s": "<p>Kontroll av \\((2,3)\\): den andra ekvationen ger \\(2\\cdot2+3=7\\), men den första ger \\(8-9=-1\\ne5\\). Svaret är alltså fel.</p><p>Ur den andra ekvationen: \\(y=7-2x\\).</p><p>Sätt in i den första: \\(4x-3(7-2x)=5\\Rightarrow10x=26\\Rightarrow x=\\frac{13}{5}\\).</p><p>\\(y=7-\\frac{26}{5}=\\frac95\\).</p><p><strong>\\((x,y)=(\\frac{13}{5},\\frac95)\\).</strong></p>",
    "familj": "ekvationssystem_felanalys_kontroll"
  },
  {
    "id": "1.30",
    "kap": 1,
    "omr": "linjara_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ekvationssystemet</p><p>\\(\\begin{cases}(a+1)x+2y=10\\\\3x-y=4\\end{cases}\\)</p><p>har en lösning där \\(x=y\\). Bestäm \\(a\\).</p>",
    "s": "<p>Eftersom \\(x=y\\) kan den andra ekvationen skrivas \\(3x-x=4\\), alltså \\(x=2\\). Då är också \\(y=2\\).</p><p>Sätt in i den första ekvationen:</p><p>\\(2(a+1)+4=10\\Rightarrow2a+6=10\\Rightarrow a=2\\).</p><p><strong>\\(a=2\\).</strong></p>",
    "familj": "ekvationssystem_parameter_losning_x_lika_y"
  },
  {
    "id": "1.31",
    "kap": 1,
    "omr": "speciella_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Den ena ekvationen i ett ekvationssystem är</p><p>\\(3x+2y=12\\).</p><p>Ge ett exempel på en andra linjär ekvation så att systemet</p><p>a) saknar lösning,<br>b) har oändligt många lösningar,<br>c) har exakt lösningen \\((2,3)\\).</p><p>Motivera dina val.</p>",
    "s": "<p>a) En parallell, annan linje fungerar, till exempel \\(6x+4y=30\\). Vänsterledet har samma proportion som den första ekvationen men konstanten stämmer inte.</p><p>b) En ekvivalent ekvation fungerar, till exempel \\(6x+4y=24\\).</p><p>c) Punkten \\((2,3)\\) ligger på den givna linjen eftersom \\(3\\cdot2+2\\cdot3=12\\). Välj en annan linje genom punkten som inte är parallell, till exempel \\(x+y=5\\).</p><p><strong>Ett möjligt svar är a) \\(6x+4y=30\\), b) \\(6x+4y=24\\), c) \\(x+y=5\\).</strong></p>",
    "familj": "ekvationssystem_oppet_konstruera_antal_losningar"
  },
  {
    "id": "1.32",
    "kap": 1,
    "omr": "ekvationssystem_tre_obekanta",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Lös ekvationssystemet.</p><p>\\(\\begin{cases}x+y+z=12\\\\x+y=7\\\\y+z=9\\end{cases}\\)</p>",
    "s": "<p>Jämför de två första ekvationerna: \\(z=12-7=5\\).</p><p>Då ger \\(y+z=9\\) att \\(y=4\\).</p><p>Slutligen ger \\(x+y=7\\) att \\(x=3\\).</p><p><strong>\\((x,y,z)=(3,4,5)\\).</strong></p>",
    "familj": "tre_obekanta_enkel_elimination"
  },
  {
    "id": "1.33",
    "kap": 1,
    "omr": "ekvationssystem_tre_obekanta",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>På en föreställning säljs vuxenbiljetter för 140 kr, ungdomsbiljetter för 90 kr och barnbiljetter för 60 kr.</p><p>Totalt säljs 120 biljetter för 12 900 kr. Antalet vuxenbiljetter är dubbelt så stort som antalet barnbiljetter.</p><p>Hur många biljetter av varje sort säljs?</p>",
    "s": "<p>Låt \\(v,u,b\\) vara antal vuxen-, ungdoms- och barnbiljetter.</p><p>\\(v+u+b=120\\), \\(140v+90u+60b=12900\\) och \\(v=2b\\).</p><p>Sätt \\(v=2b\\). Då är \\(u=120-3b\\).</p><p>\\(280b+90(120-3b)+60b=12900\\).</p><p>\\(70b+10800=12900\\Rightarrow b=30\\).</p><p>Då \\(v=60\\) och \\(u=30\\).</p><p><strong>60 vuxenbiljetter, 30 ungdomsbiljetter och 30 barnbiljetter.</strong></p>",
    "familj": "tre_obekanta_biljetter_kontext"
  },
  {
    "id": "1.34",
    "kap": 1,
    "omr": "speciella_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm om varje ekvationssystem har en lösning, ingen lösning eller oändligt många lösningar.</p><p>a) \\(y=2x+3\\) och \\(2y=4x+6\\)<br>b) \\(y=-x+4\\) och \\(y=-x-1\\)<br>c) \\(x+y=5\\) och \\(2x-y=1\\)</p>",
    "s": "<p>a) Den andra ekvationen förenklas till \\(y=2x+3\\). Linjerna är samma: <strong>oändligt många lösningar</strong>.</p><p>b) Linjerna har samma lutning men olika skärning med \\(y\\)-axeln: <strong>ingen lösning</strong>.</p><p>c) Linjerna har olika lutning och skär varandra en gång: <strong>en lösning</strong>.</p>",
    "familj": "speciella_system_klassificera"
  },
  {
    "id": "1.35",
    "kap": 1,
    "omr": "speciella_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Betrakta ekvationssystemet</p><p>\\(\\begin{cases}(a-1)x+2y=6\\\\4x+4y=12\\end{cases}\\).</p><p>a) Bestäm \\(a\\) så att systemet har oändligt många lösningar.<br>b) Förklara varför inget värde på \\(a\\) gör att systemet saknar lösning.</p>",
    "s": "<p>Den andra ekvationen kan delas med 2: \\(2x+2y=6\\).</p><p>För oändligt många lösningar måste den första ekvationen bli samma ekvation. Då krävs \\(a-1=2\\), alltså \\(a=3\\).</p><p>Om \\(a\\ne3\\) har ekvationerna olika koefficient framför \\(x\\), medan koefficienten framför \\(y\\) och högerledet redan är samma. Linjerna får då olika lutning och skär varandra en gång. Därför uppstår aldrig två parallella, skilda linjer.</p><p><strong>a) \\(a=3\\). b) Det finns inget sådant värde.</strong></p>",
    "familj": "speciella_system_parameter_oandligt_ingen"
  },
  {
    "id": "1.36",
    "kap": 1,
    "omr": "speciella_ekvationssystem",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Antalet lösningar till ekvationssystemet beror på parametern \\(a\\):</p><p>\\(\\begin{cases}(a+1)x+2y=4\\\\2x+(a+1)y=4\\end{cases}\\)</p><p>Bestäm för vilka värden på \\(a\\) systemet har</p><p>a) exakt en lösning,<br>b) oändligt många lösningar,<br>c) ingen lösning.</p><p>Motivera.</p>",
    "s": "<p>Systemet kan bara få något annat än exakt en lösning när linjernas koefficienter är proportionella.</p><p>Då måste \\(\\frac{a+1}{2}=\\frac{2}{a+1}\\), alltså \\((a+1)^2=4\\).</p><p>Det ger \\(a=1\\) eller \\(a=-3\\).</p><p>Om \\(a=1\\) blir båda ekvationerna \\(2x+2y=4\\): oändligt många lösningar.</p><p>Om \\(a=-3\\) blir ekvationerna \\(-2x+2y=4\\) och \\(2x-2y=4\\). Multipliceras den första med −1 fås \\(2x-2y=-4\\), vilket motsäger den andra: ingen lösning.</p><p>För alla andra värden på \\(a\\) är linjerna inte parallella och skär därför varandra i exakt en punkt.</p><p><strong>a) \\(a\\ne1,-3\\), b) \\(a=1\\), c) \\(a=-3\\).</strong></p>",
    "familj": "speciella_system_parameter_full_klassificering"
  },
  {
    "id": "1.37",
    "kap": 1,
    "omr": "ekvationssystem_tillampningar",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>På en bio säljs 23 biljetter. En vuxenbiljett kostar 130 kr och en barnbiljett 80 kr. Totalt blir intäkten 2 440 kr.</p><p>Hur många vuxenbiljetter och barnbiljetter säljs?</p>",
    "s": "<p>Låt \\(v\\) vara antal vuxenbiljetter och \\(b\\) antal barnbiljetter.</p><p>\\(v+b=23\\) och \\(130v+80b=2440\\).</p><p>Sätt \\(b=23-v\\):</p><p>\\(130v+80(23-v)=2440\\Rightarrow50v=600\\Rightarrow v=12\\).</p><p>Då \\(b=11\\).</p><p><strong>12 vuxenbiljetter och 11 barnbiljetter.</strong></p>",
    "familj": "ekvationssystem_biljettantal_standard"
  },
  {
    "id": "1.38",
    "kap": 1,
    "omr": "ekvationssystem_tillampningar",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En laboration behöver 12 liter saltlösning med salthalten 30 %. Man har en lösning med 20 % salt och en med 50 % salt.</p><p>Hur många liter av varje lösning ska blandas?</p>",
    "s": "<p>Låt \\(x\\) vara liter 20-procentig lösning och \\(y\\) liter 50-procentig.</p><p>\\(x+y=12\\).</p><p>Mängden salt ska vara \\(0,30\\cdot12=3,6\\) liter, alltså \\(0,20x+0,50y=3,6\\).</p><p>Med \\(x=12-y\\): \\(0,20(12-y)+0,50y=3,6\\Rightarrow0,30y=1,2\\Rightarrow y=4\\).</p><p>Då \\(x=8\\).</p><p><strong>8 liter av 20 %-lösningen och 4 liter av 50 %-lösningen.</strong></p>",
    "familj": "ekvationssystem_blandning_procent"
  },
  {
    "id": "1.39",
    "kap": 1,
    "omr": "ekvationssystem_tillampningar",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>På en konsert kommer 300 personer in. Vuxenbiljetten kostar 180 kr och ungdomsbiljetten 120 kr. Några personer har fribiljett.</p><p>Antalet fribiljetter är hälften av antalet ungdomsbiljetter. De betalande biljetterna ger totalt 43 200 kr.</p><p>Bestäm hur många vuxenbiljetter, ungdomsbiljetter och fribiljetter som används.</p>",
    "s": "<p>Låt \\(v\\) vara antal vuxenbiljetter, \\(u\\) antal ungdomsbiljetter och \\(f\\) antal fribiljetter.</p><p>\\(v+u+f=300\\), \\(180v+120u=43200\\) och \\(f=\\frac u2\\).</p><p>Sätt in \\(f=\\frac u2\\): \\(v+1,5u=300\\).</p><p>Intäktsekvationen kan delas med 60: \\(3v+2u=720\\).</p><p>Multiplicera den första med 3: \\(3v+4,5u=900\\). Subtraktion ger \\(2,5u=180\\), alltså \\(u=72\\).</p><p>Då \\(f=36\\) och \\(v=300-72-36=192\\).</p><p><strong>192 vuxenbiljetter, 72 ungdomsbiljetter och 36 fribiljetter.</strong></p>",
    "familj": "ekvationssystem_dold_modell_tre_biljettyper"
  },
  {
    "id": "1.40",
    "kap": 1,
    "omr": "programmering_numerisk_ekvationslosning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Följande algoritm används för att ringa in lösningen till ekvationen \\(2x+1=12\\).</p><pre style='font-family:IBM Plex Mono,monospace;font-size:12px;background:#EDEEF1;padding:10px;border-radius:8px'>a = 0\nb = 10\nupprepa 3 gånger:\n    m = (a+b)/2\n    om 2m+1 &lt; 12:\n        a = m\n    annars:\n        b = m</pre><p>Vilket intervall \\([a,b]\\) finns lösningen i efter tre varv? Visa hur intervallet ändras.</p>",
    "s": "<p>Start: \\([0,10]\\).</p><p>Varv 1: \\(m=5\\). Då \\(2\\cdot5+1=11&lt;12\\), så intervallet blir \\([5,10]\\).</p><p>Varv 2: \\(m=7,5\\). Då är vänsterledet 16, så intervallet blir \\([5,7,5]\\).</p><p>Varv 3: \\(m=6,25\\). Då är vänsterledet 13,5, så intervallet blir \\([5,6,25]\\).</p><p><strong>Efter tre varv ligger lösningen i intervallet \\([5,6,25]\\).</strong></p>",
    "familj": "programmering_intervallhalvering_linjar_ekvation"
  },
  {
    "id": "1.41",
    "kap": 1,
    "omr": "multiplicera_parenteser",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Utveckla och förenkla.</p><p>\\((2x-3)(x+5)\\)</p>",
    "s": "<p>\\(2x^2+10x-3x-15=\\)<strong>\\(2x^2+7x-15\\)</strong>.</p>",
    "familj": "parentesmultiplikation_tva_binom"
  },
  {
    "id": "1.42",
    "kap": 1,
    "omr": "konjugatregeln",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla med konjugatregeln.</p><p>\\((3x+4)(3x-4)\\)</p>",
    "s": "<p>\\((a+b)(a-b)=a^2-b^2\\).</p><p><strong>\\(9x^2-16\\)</strong>.</p>",
    "familj": "konjugat_direkt"
  },
  {
    "id": "1.43",
    "kap": 1,
    "omr": "kvadreringsreglerna",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Utveckla och förenkla.</p><p>\\((2x-5)^2\\)</p>",
    "s": "<p>\\((a-b)^2=a^2-2ab+b^2\\).</p><p>\\((2x)^2-2\\cdot2x\\cdot5+5^2=\\)<strong>\\(4x^2-20x+25\\)</strong>.</p>",
    "familj": "kvadreringsregel_minus"
  },
  {
    "id": "1.44",
    "kap": 1,
    "omr": "faktorisering",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Faktorisera så långt som möjligt.</p><p>a) \\(12x^2-18x\\)<br>b) \\(9x^2-25\\)</p>",
    "s": "<p>a) Bryt ut \\(6x\\): <strong>\\(6x(2x-3)\\)</strong>.</p><p>b) Använd konjugatregeln baklänges: <strong>\\((3x-5)(3x+5)\\)</strong>.</p>",
    "familj": "faktorisering_gemensam_faktor_och_konjugat"
  },
  {
    "id": "1.45",
    "kap": 1,
    "omr": "konjugatregeln",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Lös ekvationen utan att först utveckla båda kvadraterna.</p><p>\\((x+4)^2-(x-4)^2=96\\)</p>",
    "s": "<p>Se vänsterledet som en differens av två kvadrater:</p><p>\\([(x+4)-(x-4)]\\,[(x+4)+(x-4)]=96\\).</p><p>\\(8\\cdot2x=96\\Rightarrow16x=96\\Rightarrow x=6\\).</p><p><strong>\\(x=6\\).</strong></p>",
    "familj": "konjugat_dold_differens_kvadrater_ekvation"
  },
  {
    "id": "1.46",
    "kap": 1,
    "omr": "kvadreringsreglerna",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Uttrycket \\(x^2+px+49\\) kan skrivas som en perfekt kvadrat \\((x+a)^2\\).</p><p>Bestäm alla möjliga värden på \\(p\\).</p>",
    "s": "<p>Eftersom konstanten är 49 måste \\(a=7\\) eller \\(a=-7\\).</p><p>\\((x+7)^2=x^2+14x+49\\) och \\((x-7)^2=x^2-14x+49\\).</p><p><strong>\\(p=14\\) eller \\(p=-14\\).</strong></p>",
    "familj": "kvadreringsregel_baklanges_parameter"
  },
  {
    "id": "1.47",
    "kap": 1,
    "omr": "faktorisering",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två på varandra följande udda heltal betecknas med \\(n\\) och \\(n+2\\).</p><p>Visa att skillnaden mellan deras kvadrater alltid är delbar med 8.</p>",
    "s": "<p>Skillnaden är</p><p>\\((n+2)^2-n^2=n^2+4n+4-n^2=4(n+1)\\).</p><p>Eftersom \\(n\\) är udda är \\(n+1\\) jämnt. Skriv \\(n+1=2k\\).</p><p>Då blir skillnaden \\(4\\cdot2k=8k\\).</p><p><strong>Skillnaden är alltså alltid delbar med 8.</strong></p>",
    "familj": "algebraiskt_bevis_udda_kvadrater_delbarhet"
  },
  {
    "id": "1.48",
    "kap": 1,
    "omr": "kvadreringsreglerna",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/2",
    "t": "<p>Bestäm alla reella tal \\(a\\) och \\(b\\) så att likheten</p><p>\\((x+a)^2-(x-b)^2=10x+15\\)</p><p>gäller för alla reella \\(x\\).</p>",
    "s": "<p>Utveckla vänsterledet:</p><p>\\(x^2+2ax+a^2-(x^2-2bx+b^2)=2(a+b)x+a^2-b^2\\).</p><p>För att likheten ska gälla för alla \\(x\\) måste</p><p>\\(2(a+b)=10\\Rightarrow a+b=5\\)</p><p>och \\(a^2-b^2=15\\).</p><p>Men \\(a^2-b^2=(a-b)(a+b)\\). Eftersom \\(a+b=5\\) fås \\(5(a-b)=15\\Rightarrow a-b=3\\).</p><p>Lös systemet \\(a+b=5\\), \\(a-b=3\\): \\(a=4\\), \\(b=1\\).</p><p><strong>\\(a=4\\) och \\(b=1\\).</strong></p>",
    "familj": "identitet_parameter_matcha_koefficienter"
  },
  {
    "id": "2.01",
    "kap": 2,
    "omr": "enkla_andragradsekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös \\(x^2=49\\).</p>",
    "s": "<p><strong>\\(x=7\\)</strong> eller <strong>\\(x=-7\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.02",
    "kap": 2,
    "omr": "kvadratkomplettering",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Skriv \\(x^2+6x\\) som en kvadrat minus en konstant.</p>",
    "s": "<p>\\(x^2+6x=(x+3)^2-9\\). <strong>\\((x+3)^2-9\\)</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "2.03",
    "kap": 2,
    "omr": "losningsformel_andragrad",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös \\(x^2-5x+6=0\\).</p>",
    "s": "<p>Faktorisering ger \\((x-2)(x-3)=0\\). <strong>\\(x=2\\)</strong> eller <strong>\\(x=3\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.04",
    "kap": 2,
    "omr": "mer_om_andragradsekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös \\(2x^2-8=0\\).</p>",
    "s": "<p>\\(2x^2=8\\Rightarrow x^2=4\\). <strong>\\(x=\\pm2\\)</strong>.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "2.05",
    "kap": 2,
    "omr": "samband_roter_koefficienter",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ekvationen \\(x^2-7x+12=0\\) har rötterna 3 och 4. Jämför rötternas summa med koefficienten framför \\(x\\).</p>",
    "s": "<p>\\(3+4=7\\), vilket är motsatt tecken till \\(-7\\). <strong>Rotsumman är 7.</strong></p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.06",
    "kap": 2,
    "omr": "andragradsekvationer_tillampningar",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En rektangel har sidorna \\(x\\) och \\(x+2\\) och arean 48. Bestäm \\(x\\).</p>",
    "s": "<p>\\(x(x+2)=48\\Rightarrow x^2+2x-48=0\\). Den positiva lösningen är <strong>\\(x=6\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.07",
    "kap": 2,
    "omr": "programmering_andragrad",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett program använder diskriminanten \\(D=b^2-4ac\\). Beräkna \\(D\\) för \\(x^2-6x+5=0\\).</p>",
    "s": "<p>\\(D=(-6)^2-4\\cdot1\\cdot5=36-20=\\)<strong>16</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "2.08",
    "kap": 2,
    "omr": "rotekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös \\(\\sqrt{x+1}=4\\).</p>",
    "s": "<p>Kvadrera: \\(x+1=16\\). <strong>\\(x=15\\)</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "2.09",
    "kap": 2,
    "omr": "funktionsskrivsatt_rep",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Om \\(f(x)=2x+3\\), beräkna \\(f(4)\\).</p>",
    "s": "<p>\\(f(4)=2\\cdot4+3=\\)<strong>11</strong>.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.10",
    "kap": 2,
    "omr": "andragradsfunktioner",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Är \\(f(x)=3x^2-2x+1\\) en andragradsfunktion? Motivera kort.</p>",
    "s": "<p><strong>Ja.</strong> Högsta exponenten på \\(x\\) är 2 och koefficienten framför \\(x^2\\) är inte noll.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.11",
    "kap": 2,
    "omr": "andragradsfunktion_graf",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>För \\(f(x)=x^2\\), ange punkten på grafen när \\(x=-3\\).</p>",
    "s": "<p>\\(f(-3)=9\\). Punkten är <strong>\\((-3,9)\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.12",
    "kap": 2,
    "omr": "symmetrilinje_extrempunkt",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm symmetrilinjen för \\(f(x)=(x-2)^2+5\\).</p>",
    "s": "<p><strong>\\(x=2\\)</strong>. Funktionens minimipunkt är \\((2,5)\\).</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.13",
    "kap": 2,
    "omr": "fran_graf_till_formel",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En parabel har nollställena \\(x=1\\) och \\(x=4\\) och går genom \\((0,4)\\). Bestäm en formel.</p>",
    "s": "<p>\\(f(x)=a(x-1)(x-4)\\). Vid \\(x=0\\): \\(4=4a\\Rightarrow a=1\\). <strong>\\(f(x)=(x-1)(x-4)\\)</strong>.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.14",
    "kap": 2,
    "omr": "andragradsfunktioner_tillampningar",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Höjden ges av \\(h(t)=-5t^2+20t\\). När är höjden som störst?</p>",
    "s": "<p>Symmetrilinjen är \\(t=-b/(2a)=-20/(2\\cdot-5)=\\)<strong>2 s</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.15",
    "kap": 2,
    "omr": "potensregler",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla \\(x^3\\cdot x^5\\).</p>",
    "s": "<p><strong>\\(x^8\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "2.16",
    "kap": 2,
    "omr": "potensfunktioner",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(f(3)\\) för \\(f(x)=2x^2\\).</p>",
    "s": "<p>\\(2\\cdot3^2=\\)<strong>18</strong>.</p>",
    "kurs": [
      "2a"
    ]
  },
  {
    "id": "2.17",
    "kap": 2,
    "omr": "potensekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös \\(x^3=64\\).</p>",
    "s": "<p><strong>\\(x=4\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.18",
    "kap": 2,
    "omr": "exponentialfunktioner",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(f(3)\\) för \\(f(x)=5\\cdot2^x\\).</p>",
    "s": "<p>\\(5\\cdot2^3=\\)<strong>40</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.19",
    "kap": 2,
    "omr": "exponentialgraf",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Funktionen \\(f(x)=2^x\\). Vilken punkt skär grafen \\(y\\)-axeln i?</p>",
    "s": "<p>Vid \\(x=0\\) är \\(f(0)=1\\). <strong>\\((0,1)\\)</strong>.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.20",
    "kap": 2,
    "omr": "logaritmbegreppet",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\log_{10}(1000)\\).</p>",
    "s": "<p><strong>3</strong>, eftersom \\(10^3=1000\\).</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.21",
    "kap": 2,
    "omr": "logaritmlagar",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla \\(\\log a+\\log b\\).</p>",
    "s": "<p><strong>\\(\\log(ab)\\)</strong>.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.22",
    "kap": 2,
    "omr": "exponentialekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös \\(2^x=32\\).</p>",
    "s": "<p><strong>\\(x=5\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.23",
    "kap": 2,
    "omr": "jamfora_exponential_potens",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilken är en potensekvation: \\(x^3=27\\) eller \\(3^x=27\\)?</p>",
    "s": "<p><strong>\\(x^3=27\\)</strong> är potensekvationen. \\(3^x=27\\) är en exponentialekvation.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.24",
    "kap": 2,
    "omr": "regressionsanalys_olika_modeller",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Data växer med ungefär samma procent varje år. Vilken modelltyp är oftast lämplig: linjär eller exponentiell?</p>",
    "s": "<p><strong>Exponentiell modell</strong>, eftersom en ungefär konstant procentuell förändring motsvarar en konstant förändringsfaktor.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "2.25",
    "kap": 2,
    "omr": "modellval_regression",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En regressionsmodell har \\(R^2=0{,}98\\). En annan har \\(R^2=0{,}61\\). Vilken passar datan bäst enligt \\(R^2\\)?</p>",
    "s": "<p><strong>Modellen med \\(R^2=0{,}98\\)</strong>.</p>",
    "kurs": [
      "2b",
      "2c"
    ]
  },
  {
    "id": "4.01",
    "kap": 4,
    "omr": "lagesmatt",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm medelvärdet av 4, 6, 6 och 8.</p>",
    "s": "<p>\\((4+6+6+8)/4=\\)<strong>6</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "4.02",
    "kap": 4,
    "omr": "kvartiler_percentiler",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I ett sorterat material ligger 25 % av observationerna under första kvartilen. Vilken percentil motsvarar första kvartilen?</p>",
    "s": "<p><strong>25:e percentilen.</strong></p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "4.03",
    "kap": 4,
    "omr": "ladagram",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I ett lådagram är medianen 12 och övre kvartilen 17. Hur stor är sträckan mellan medianen och övre kvartilen?</p>",
    "s": "<p><strong>5</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "4.04",
    "kap": 4,
    "omr": "standardavvikelse",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två grupper har samma medelvärde. Grupp A har standardavvikelsen 2 och grupp B 7. Vilken grupp har störst spridning?</p>",
    "s": "<p><strong>Grupp B</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "4.05",
    "kap": 4,
    "omr": "normalfordelat_material",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett normalfördelat material har medelvärdet 100. Var ligger fördelningens symmetriaxel?</p>",
    "s": "<p>Vid <strong>100</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "4.06",
    "kap": 4,
    "omr": "normalfordelning_digitala_verktyg",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett normalfördelat material har \\(\\mu=50\\) och \\(\\sigma=5\\). Ange intervallet \\(\\mu\\pm\\sigma\\).</p>",
    "s": "<p><strong>45 till 55</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "3.01",
    "kap": 3,
    "omr": "geometriska_begrepp_definitioner",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vad kallas två vinklar vars summa är \\(180^\\circ\\)?</p>",
    "s": "<p><strong>Supplementvinklar.</strong></p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.02",
    "kap": 3,
    "omr": "sats_bevis",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vad är skillnaden mellan en matematisk sats och ett bevis?</p>",
    "s": "<p>En <strong>sats</strong> är ett påstående; ett <strong>bevis</strong> visar logiskt varför satsen är sann.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.03",
    "kap": 3,
    "omr": "implikation_ekvivalens",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Är påståendet ”om \\(x=2\\), så är \\(x^2=4\\)” en implikation eller en ekvivalens?</p>",
    "s": "<p>Det är en <strong>implikation</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.04",
    "kap": 3,
    "omr": "yttervinkelsatsen",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två motstående inre vinklar i en triangel är \\(45^\\circ\\) och \\(70^\\circ\\). Bestäm yttervinkeln vid den tredje hörnpunkten.</p>",
    "s": "<p>Yttervinkeln är summan av de två motstående inre vinklarna: <strong>\\(115^\\circ\\)</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.05",
    "kap": 3,
    "omr": "randvinkel_medelpunkt",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En medelpunktsvinkel över en båge är \\(100^\\circ\\). Hur stor är en randvinkel över samma båge?</p>",
    "s": "<p><strong>\\(50^\\circ\\)</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.06",
    "kap": 3,
    "omr": "pythagoras",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En rätvinklig triangel har kateterna 6 cm och 8 cm. Bestäm hypotenusan.</p>",
    "s": "<p>\\(c=\\sqrt{6^2+8^2}=\\sqrt{100}=\\)<strong>10 cm</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.07",
    "kap": 3,
    "omr": "likformighet",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två likformiga trianglar har skalfaktorn 3. En sida i den mindre triangeln är 4 cm. Hur lång är motsvarande sida i den större?</p>",
    "s": "<p><strong>12 cm</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.08",
    "kap": 3,
    "omr": "topptriangel_transversal",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En linje är parallell med en sida i en triangel och skär de två andra sidorna. Vilken viktig egenskap får den mindre triangeln?</p>",
    "s": "<p>Den mindre triangeln är <strong>likformig</strong> med den stora.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.09",
    "kap": 3,
    "omr": "bevis_likformighet",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två trianglar har två par lika stora vinklar. Vad kan du dra för slutsats?</p>",
    "s": "<p>Trianglarna är <strong>likformiga</strong> enligt vinkel–vinkel.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.10",
    "kap": 3,
    "omr": "kordasatsen_biskarningssatsen",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två kordor skär varandra. Den ena delas i längderna 2 och 6, den andra i 3 och \\(x\\). Bestäm \\(x\\).</p>",
    "s": "<p>\\(2\\cdot6=3x\\Rightarrow\\) <strong>\\(x=4\\)</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.11",
    "kap": 3,
    "omr": "avstandsformeln_mittpunktsformeln",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm mittpunkten mellan \\((2,4)\\) och \\((8,10)\\).</p>",
    "s": "<p>\\(((2+8)/2,(4+10)/2)=\\)<strong>\\((5,7)\\)</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.12",
    "kap": 3,
    "omr": "koordinatgeometri_problemlosning",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm avståndet mellan \\((0,0)\\) och \\((3,4)\\).</p>",
    "s": "<p>\\(\\sqrt{3^2+4^2}=\\)<strong>5</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.13",
    "kap": 3,
    "omr": "programmering_avstandsformeln",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett program beräknar \\(\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\). Vad blir resultatet för punkterna \\((1,1)\\) och \\((4,5)\\)?</p>",
    "s": "<p>\\(\\sqrt{3^2+4^2}=\\)<strong>5</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "3.14",
    "kap": 3,
    "omr": "geometriska_begrepp_definitioner",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vad kallas två vinklar vars summa är \\(180^\\circ\\)?</p>",
    "s": "<p><strong>Supplementvinklar.</strong></p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.15",
    "kap": 3,
    "omr": "sats_bevis",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vad är skillnaden mellan en matematisk sats och ett bevis?</p>",
    "s": "<p>En <strong>sats</strong> är ett påstående; ett <strong>bevis</strong> visar logiskt varför satsen är sann.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.16",
    "kap": 3,
    "omr": "implikation_ekvivalens",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Är påståendet ”om \\(x=2\\), så är \\(x^2=4\\)” en implikation eller en ekvivalens?</p>",
    "s": "<p>Det är en <strong>implikation</strong>.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.17",
    "kap": 3,
    "omr": "yttervinkelsatsen",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två motstående inre vinklar i en triangel är \\(45^\\circ\\) och \\(70^\\circ\\). Bestäm yttervinkeln vid den tredje hörnpunkten.</p>",
    "s": "<p>Yttervinkeln är summan av de två motstående inre vinklarna: <strong>\\(115^\\circ\\)</strong>.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.18",
    "kap": 3,
    "omr": "randvinkel_medelpunkt",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En medelpunktsvinkel över en båge är \\(100^\\circ\\). Hur stor är en randvinkel över samma båge?</p>",
    "s": "<p><strong>\\(50^\\circ\\)</strong>.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.19",
    "kap": 3,
    "omr": "pythagoras",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En rätvinklig triangel har kateterna 6 cm och 8 cm. Bestäm hypotenusan.</p>",
    "s": "<p>\\(c=\\sqrt{6^2+8^2}=\\sqrt{100}=\\)<strong>10 cm</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "3.20",
    "kap": 3,
    "omr": "likformighet",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två likformiga trianglar har skalfaktorn 3. En sida i den mindre triangeln är 4 cm. Hur lång är motsvarande sida i den större?</p>",
    "s": "<p><strong>12 cm</strong>.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.21",
    "kap": 3,
    "omr": "topptriangel_transversal",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En linje är parallell med en sida i en triangel och skär de två andra sidorna. Vilken viktig egenskap får den mindre triangeln?</p>",
    "s": "<p>Den mindre triangeln är <strong>likformig</strong> med den stora.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.22",
    "kap": 3,
    "omr": "bevis_likformighet",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två trianglar har två par lika stora vinklar. Vad kan du dra för slutsats?</p>",
    "s": "<p>Trianglarna är <strong>likformiga</strong> enligt vinkel–vinkel.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.23",
    "kap": 3,
    "omr": "kordasatsen_biskarningssatsen",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två kordor skär varandra. Den ena delas i längderna 2 och 6, den andra i 3 och \\(x\\). Bestäm \\(x\\).</p>",
    "s": "<p>\\(2\\cdot6=3x\\Rightarrow\\) <strong>\\(x=4\\)</strong>.</p>",
    "kurs": [
      "2b"
    ]
  },
  {
    "id": "3.24",
    "kap": 3,
    "omr": "avstandsformeln_mittpunktsformeln",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm mittpunkten mellan \\((2,4)\\) och \\((8,10)\\).</p>",
    "s": "<p>\\(((2+8)/2,(4+10)/2)=\\)<strong>\\((5,7)\\)</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "3.25",
    "kap": 3,
    "omr": "koordinatgeometri_problemlosning",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm avståndet mellan \\((0,0)\\) och \\((3,4)\\).</p>",
    "s": "<p>\\(\\sqrt{3^2+4^2}=\\)<strong>5</strong>.</p>",
    "kurs": [
      "2a",
      "2b"
    ]
  },
  {
    "id": "4.07",
    "kap": 4,
    "omr": "lagesmatt",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm medelvärdet av 4, 6, 6 och 8.</p>",
    "s": "<p>\\((4+6+6+8)/4=\\)<strong>6</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "4.08",
    "kap": 4,
    "omr": "kvartiler_percentiler",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I ett sorterat material ligger 25 % av observationerna under första kvartilen. Vilken percentil motsvarar första kvartilen?</p>",
    "s": "<p><strong>25:e percentilen.</strong></p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "4.09",
    "kap": 4,
    "omr": "ladagram",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I ett lådagram är medianen 12 och övre kvartilen 17. Hur stor är sträckan mellan medianen och övre kvartilen?</p>",
    "s": "<p><strong>5</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "4.10",
    "kap": 4,
    "omr": "standardavvikelse",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Två grupper har samma medelvärde. Grupp A har standardavvikelsen 2 och grupp B 7. Vilken grupp har störst spridning?</p>",
    "s": "<p><strong>Grupp B</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "4.11",
    "kap": 4,
    "omr": "programmering_medelvarde",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Listan är [2, 4, 6]. Ett program ökar varje tal med 3. Vad blir det nya medelvärdet?</p>",
    "s": "<p>Den nya listan är [5, 7, 9] och medelvärdet blir <strong>7</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "4.12",
    "kap": 4,
    "omr": "normalfordelat_material",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett normalfördelat material har medelvärdet 100. Var ligger fördelningens symmetriaxel?</p>",
    "s": "<p>Vid <strong>100</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "4.13",
    "kap": 4,
    "omr": "normalfordelning_digitala_verktyg",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett normalfördelat material har \\(\\mu=50\\) och \\(\\sigma=5\\). Ange intervallet \\(\\mu\\pm\\sigma\\).</p>",
    "s": "<p><strong>45 till 55</strong>.</p>",
    "kurs": [
      "2c"
    ]
  },
  {
    "id": "5.01",
    "kap": 5,
    "omr": "yrkesspecifika_begrepp_metoder",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En ritning har skalan 1:50. En sträcka är 8 cm på ritningen. Hur lång är den i verkligheten?</p>",
    "s": "<p>\\(8\\cdot50=400\\) cm = <strong>4,0 m</strong>.</p>",
    "kurs": [
      "2a"
    ]
  },
  {
    "id": "5.02",
    "kap": 5,
    "omr": "verktyg_arbetslivet",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett kalkylblad innehåller värdena 12, 15 och 18. Vilken formeltyp använder du för att beräkna deras medelvärde?</p>",
    "s": "<p>Använd en <strong>medelvärdesfunktion</strong>, till exempel MEDEL/AVERAGE.</p>",
    "kurs": [
      "2a"
    ]
  }
];
