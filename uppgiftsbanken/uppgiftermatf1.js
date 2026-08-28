/* uppgiftermatf1.js — startuppgifter: en uppgift per delområde för att göra strukturen synlig.
   Dessa är avsiktligt enkla demonstrationsuppgifter medan kursbanken byggs ut. */
window.BANKMATF1 = [
  {
    "id": "1.01",
    "kap": 1,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilken av ekvationerna \\(y'=3y\\) och \\(y=3x+1\\) är en differentialekvation?</p>",
    "s": "<p><strong>\\(y'=3y\\)</strong>, eftersom den innehåller en derivata av den sökta funktionen.</p>"
  },
  {
    "id": "1.02",
    "kap": 1,
    "omr": "verifiera_losningar",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Visa att \\(y=e^{2x}\\) är en lösning till \\(y'=2y\\).</p>",
    "s": "<p>\\(y'=2e^{2x}\\) och \\(2y=2e^{2x}\\). Uttrycken är lika, alltså är <strong>funktionen en lösning</strong>.</p>"
  },
  {
    "id": "1.03",
    "kap": 1,
    "omr": "stalla_upp_differentialekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En population \\(P\\) växer med en hastighet som är proportionell mot populationen. Skriv en differentialekvation.</p>",
    "s": "<p><strong>\\(P'=kP\\)</strong>, där \\(k\\) är proportionalitetskonstanten.</p>"
  },
  {
    "id": "1.04",
    "kap": 1,
    "omr": "tolka_differentialekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Tolka \\(T'=-0,2(T-20)\\) med ord.</p>",
    "s": "<p>Temperaturens förändringshastighet är <strong>proportionell mot skillnaden mellan \\(T\\) och 20</strong> och riktad mot 20.</p>"
  },
  {
    "id": "1.05",
    "kap": 1,
    "omr": "digitala_metoder_differentialekvationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilken information behövs utöver differentialekvationen för att ett digitalt verktyg ska kunna bestämma en unik lösningskurva till ett första ordningens begynnelsevärdesproblem?</p>",
    "s": "<p>Ett <strong>begynnelsevillkor</strong>, till exempel \\(y(0)=2\\).</p>"
  },
  {
    "id": "1.06",
    "kap": 1,
    "omr": "linjara_diffekv_forsta_ordningen",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös den enkla differentialekvationen \\(y'=3\\) med villkoret \\(y(0)=2\\).</p>",
    "s": "<p>Integrering ger \\(y=3x+C\\). Villkoret ger \\(C=2\\). <strong>\\(y=3x+2\\)</strong>.</p>"
  },
  {
    "id": "1.07",
    "kap": 1,
    "omr": "linjara_diffekv_andra_ordningen",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Kontrollera att \\(y=\\cos x\\) löser \\(y''+y=0\\).</p>",
    "s": "<p>\\(y''=-\\cos x\\), så \\(y''+y=-\\cos x+\\cos x=0\\). <strong>Ja.</strong></p>"
  },
  {
    "id": "2.01",
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilket första steg är typiskt i ett motsägelsebevis?</p>",
    "s": "<p>Man <strong>antar motsatsen</strong> till det man vill bevisa och visar att antagandet leder till en motsägelse.</p>"
  },
  {
    "id": "2.02",
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilka två huvudsteg ingår i ett induktionsbevis?</p>",
    "s": "<p><strong>Bassteg</strong> och <strong>induktionssteg</strong>.</p>"
  },
  {
    "id": "2.03",
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Skriv \\((1011)_2\\) i bas 10.</p>",
    "s": "<p>\\(1\\cdot8+0\\cdot4+1\\cdot2+1=11\\). <strong>11</strong>.</p>"
  },
  {
    "id": "2.04",
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Är \\(17\\equiv2\\pmod5\\)?</p>",
    "s": "<p><strong>Ja.</strong> Skillnaden \\(17-2=15\\) är delbar med 5.</p>"
  },
  {
    "id": "2.05",
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna resten när \\(8+9\\) divideras med 5 med kongruensräkning.</p>",
    "s": "<p>\\(8+9=17\\equiv2\\pmod5\\). <strong>Resten är 2.</strong></p>"
  },
  {
    "id": "2.06",
    "kap": 2,
    "omr": "permutationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>På hur många sätt kan tre olika böcker ordnas i en rad?</p>",
    "s": "<p>\\(3!=6\\). <strong>6 sätt</strong>.</p>"
  },
  {
    "id": "2.07",
    "kap": 2,
    "omr": "kombinationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>På hur många sätt kan 2 personer väljas ur en grupp på 5?</p>",
    "s": "<p>\\(\\binom52=10\\). <strong>10 sätt</strong>.</p>"
  },
  {
    "id": "2.08",
    "kap": 2,
    "omr": "rekursion",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En talföljd ges av \\(a_1=2\\) och \\(a_{n+1}=a_n+3\\). Bestäm \\(a_4\\).</p>",
    "s": "<p>Följden är 2, 5, 8, 11. <strong>\\(a_4=11\\)</strong>.</p>"
  },
  {
    "id": "2.09",
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Fibonacciföljden ges av \\(F_{n+2}=F_{n+1}+F_n\\), \\(F_1=F_2=1\\). Bestäm \\(F_6\\).</p>",
    "s": "<p>Följden börjar 1, 1, 2, 3, 5, 8. <strong>\\(F_6=8\\)</strong>.</p>"
  },
  {
    "id": "2.10",
    "kap": 2,
    "omr": "mangder",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,2,3\\}\\). Är \\(2\\in A\\)?</p>",
    "s": "<p><strong>Ja.</strong> Talet 2 är ett element i mängden \\(A\\).</p>"
  },
  {
    "id": "2.11",
    "kap": 2,
    "omr": "mangdoperationer",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,2,3\\}\\) och \\(B=\\{3,4\\}\\). Bestäm \\(A\\cap B\\).</p>",
    "s": "<p><strong>\\(\\{3\\}\\)</strong>.</p>"
  },
  {
    "id": "3.01",
    "kap": 3,
    "omr": "symbolhanterande_verktyg",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett CAS ger en lösning till en differentialekvation. Vad bör du göra för att kontrollera resultatet?</p>",
    "s": "<p><strong>Derivera lösningen och sätt in den i differentialekvationen</strong> samt kontrollera eventuella villkor.</p>"
  },
  {
    "id": "3.02",
    "kap": 3,
    "omr": "programmering",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilken programmeringsstruktur är naturlig för att generera de första 20 termerna i en rekursiv talföljd?</p>",
    "s": "<p>En <strong>loop</strong> som sparar tidigare term eller termer och beräknar nästa.</p>"
  },
  {
    "id": "3.03",
    "kap": 3,
    "omr": "numeriska_metoder",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Eulersteg för \\(y'=f(x,y)\\) med steglängd \\(h\\) skrivs \\(y_{n+1}=y_n+h f(x_n,y_n)\\). Beräkna nästa värde om \\(y_n=2\\), \\(h=0,1\\) och \\(f=3\\).</p>",
    "s": "<p>\\(2+0,1\\cdot3=2,3\\). <strong>\\(y_{n+1}=2,3\\)</strong>.</p>"
  },
  {
    "id": "4.01",
    "kap": 4,
    "omr": "problemlosning",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Ett lösenord består av tre olika bokstäver valda bland A, B, C och D. Hur många sådana lösenord finns?</p>",
    "s": "<p>Ordningen spelar roll: \\(4\\cdot3\\cdot2=24\\). <strong>24</strong>.</p>"
  },
  {
    "id": "4.02",
    "kap": 4,
    "omr": "omfangsrika_problem",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En modell består av flera delsteg: formulera antaganden, skapa en matematisk modell, beräkna och värdera resultatet. Vilket steg bör göras sist?</p>",
    "s": "<p><strong>Värdera resultatet och modellens rimlighet/begränsningar.</strong></p>"
  },
  {
    "id": "4.03",
    "kap": 4,
    "omr": "fordjupning_integraler_derivata",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(a\\) så att \\(f(x)=x^2+ax\\) har en stationär punkt vid \\(x=2\\).</p>",
    "s": "<p>\\(f'(x)=2x+a\\). Kravet \\(f'(2)=0\\) ger \\(4+a=0\\). <strong>\\(a=-4\\)</strong>.</p>"
  },
  {
    "id": "4.04",
    "kap": 4,
    "omr": "modellering",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En avsvalning följer \\(T'=-k(T-20)\\). Vad representerar talet 20?</p>",
    "s": "<p><strong>Omgivningens jämviktstemperatur</strong>, som modellen låter \\(T\\) närma sig.</p>"
  },
  {
    "id": "4.05",
    "kap": 4,
    "omr": "modellers_begransningar",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Euler-metoden använder steglängden \\(h\\). Vad händer normalt med noggrannheten om \\(h\\) görs mindre?</p>",
    "s": "<p>Noggrannheten blir normalt <strong>bättre</strong>, men fler beräkningssteg krävs.</p>"
  },
  {
    "id": "4.06",
    "kap": 4,
    "omr": "matematikens_historia",
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilken klassisk fråga bidrog till utvecklingen av kombinatorik och sannolikhetslära på 1600-talet?</p>",
    "s": "<p>Problem kring <strong>spel och hur vinster skulle fördelas</strong> var viktiga drivkrafter.</p>"
  }
];
