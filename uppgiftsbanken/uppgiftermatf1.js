/* uppgiftermatf1.js — Matematik – fördjupning nivå 1.
   Första utbyggda versionen. Uppgifterna är bearbetade från uppladdade övningsblad
   och kompletterade med nyskapade uppgifter i samma stil och nivå.
   Grafteori ingår inte eftersom det inte längre hör till den aktuella ämnesplanen. */

window.BANKMATF1 = [
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "skriva mängd med mängdbyggarnotation",
    "poang": "1/0/0",
    "t": "<p>Skriv med mängdsymboler mängden av alla reella tal som är mindre än 100.</p>",
    "s": "<p>En möjlig skrivning är <strong>\\(A=\\{x\\in\\mathbb R\\mid x<100\\}\\)</strong>.</p>",
    "id": "1.01"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "bestämma element ur mängdbyggarnotation",
    "poang": "1/0/0",
    "t": "<p>Bestäm elementen i mängden \\(A=\\{n\\in\\mathbb Z\\mid |n|<4\\}\\).</p>",
    "s": "<p>Heltalen med absolutbelopp mindre än 4 är <strong>\\(A=\\{-3,-2,-1,0,1,2,3\\}\\)</strong>.</p>",
    "id": "1.02"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "skriva mängder på listform",
    "poang": "3/0/0",
    "t": "<p>Skriv följande mängder på listform.</p><ol type=\"a\"><li>Veckans dagar.</li><li>Heltalen strikt mellan 1 och 2.</li><li>De naturliga talen från 1 till och med 3.</li></ol>",
    "s": "<ol type=\"a\"><li>\\(\\{\\text{måndag},\\ldots,\\text{söndag}\\}\\).</li><li><strong>\\(\\varnothing\\)</strong>, eftersom inget heltal ligger strikt mellan 1 och 2.</li><li><strong>\\(\\{1,2,3\\}\\)</strong>.</li></ol>",
    "id": "1.03"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "snitt och union av ändliga mängder",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,3,4,5,6,8\\}\\) och \\(B=\\{3,4,5,6,7,8,9\\}\\).</p><ol type=\"a\"><li>Bestäm \\(A\\cap B\\).</li><li>Bestäm \\(A\\cup B\\).</li></ol>",
    "s": "<ol type=\"a\"><li>Gemensamma element är 3, 4, 5, 6 och 8, alltså <strong>\\(A\\cap B=\\{3,4,5,6,8\\}\\)</strong>.</li><li>Alla element som finns i minst en av mängderna ger <strong>\\(A\\cup B=\\{1,3,4,5,6,7,8,9\\}\\)</strong>.</li></ol>",
    "id": "1.04"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "tolka antal i Venn-diagram",
    "poang": "3/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder A, B och C\">\n<rect width=\"420\" height=\"270\" fill=\"white\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"255\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"210\" cy=\"185\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"112\" y=\"50\" font-size=\"16\">A</text><text x=\"296\" y=\"50\" font-size=\"16\">B</text><text x=\"210\" y=\"258\" font-size=\"16\">C</text>\n<text x=\"125\" y=\"115\" font-size=\"15\">10</text><text x=\"285\" y=\"115\" font-size=\"15\">1</text><text x=\"205\" y=\"220\" font-size=\"15\">9</text>\n<text x=\"205\" y=\"90\" font-size=\"15\">10</text><text x=\"160\" y=\"175\" font-size=\"15\">6</text><text x=\"258\" y=\"175\" font-size=\"15\">2</text>\n<text x=\"207\" y=\"148\" font-size=\"15\" font-weight=\"700\">2</text>\n</svg></span><p>I diagrammet är \\(A\\), \\(B\\) och \\(C\\) tre elevgrupper.</p><ol type=\"a\"><li>Bestäm \\(|A\\cap B|\\).</li><li>Bestäm \\(|A\\cup C|\\).</li><li>Beskriv med ord mängden \\(A\\setminus B\\).</li></ol>",
    "s": "<ol type=\"a\"><li>I \\(A\\cap B\\) ingår områdena med 10 och 2: <strong>12</strong>.</li><li>Alla områden som ligger i \\(A\\) eller \\(C\\): \\(10+10+6+2+2+9=39\\). <strong>39</strong>.</li><li><strong>De som tillhör \\(A\\) men inte \\(B\\)</strong>.</li></ol>",
    "id": "1.05"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "räkna med union, snitt och tom mängd",
    "poang": "4/0/0",
    "t": "<p>Låt \\(A=\\{1,2,3,4,5,6,7\\}\\), \\(B=\\{1,3,5,7\\}\\) och \\(C=\\varnothing\\). Bestäm</p><ol type=\"a\"><li>\\(A\\cup B\\)</li><li>\\(B\\cap C\\)</li><li>\\(C\\cup A\\)</li><li>\\(B\\cap(A\\cup C)\\).</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(A\\)</strong>, eftersom \\(B\\subseteq A\\).</li><li><strong>\\(\\varnothing\\)</strong>.</li><li><strong>\\(A\\)</strong>.</li><li>\\(A\\cup C=A\\), och därför <strong>\\(B\\cap A=B\\)</strong>.</li></ol>",
    "id": "1.06"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "markera mängder i Venn-diagram",
    "poang": "4/0/0",
    "t": "<p>Rita ett Venn-diagram med tre mängder \\(A\\), \\(B\\) och \\(C\\). Markera följande områden.</p><ol type=\"a\"><li>\\(A\\cup B\\)</li><li>\\(A\\cap(B\\cup C)\\)</li><li>\\(A^c\\cup B\\)</li><li>\\((B\\cup C)\\setminus A\\)</li></ol>",
    "s": "<p>Kontrollera markeringarna genom att översätta symbolerna steg för steg:</p><ol type=\"a\"><li>allt som ligger i \\(A\\) eller \\(B\\),</li><li>den del av \\(A\\) som samtidigt ligger i \\(B\\) eller \\(C\\),</li><li>allt utanför \\(A\\), tillsammans med hela \\(B\\),</li><li>de delar av \\(B\\) eller \\(C\\) som ligger utanför \\(A\\).</li></ol>",
    "id": "1.07"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "komplement och differens i ändliga mängder",
    "poang": "5/0/0",
    "t": "<p>Låt grundmängden vara \\(G=\\{0,1,2,\\ldots,20\\}\\), \\(A=\\{0,1,5,8,13,20\\}\\) och \\(M=\\{0,3,7,11,14\\}\\). Bestäm</p><ol type=\"a\"><li>\\(A\\cap M\\)</li><li>\\(M^c\\)</li><li>\\(M\\cup A^c\\)</li><li>\\(M\\setminus A\\).</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(\\{0\\}\\)</strong>.</li><li><strong>\\(\\{1,2,4,5,6,8,9,10,12,13,15,16,17,18,19,20\\}\\)</strong>.</li><li>Eftersom \\(A^c=G\\setminus A\\) fås <strong>\\(\\{0,2,3,4,6,7,9,10,11,12,14,15,16,17,18,19\\}\\)</strong>.</li><li><strong>\\(\\{3,7,11,14\\}\\)</strong>.</li></ol>",
    "id": "1.08"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "beskriva skuggat Venn-område med symboler",
    "poang": "2/1/0",
    "t": "<p>Ett område i ett Venn-diagram består av de element som ligger i både \\(A\\), \\(B\\) och \\(C\\). Beskriv området med mängdsymboler.</p>",
    "s": "<p>Elementen ska tillhöra samtliga tre mängder. Området är därför <strong>\\(A\\cap B\\cap C\\)</strong>.</p>",
    "id": "1.09"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "C",
    "typ": "symmetrisk differens med union och snitt",
    "poang": "2/1/0",
    "t": "<p>Låt \\(A=\\{2,3,4,5,6,7\\}\\) och \\(B=\\{2,4,6,8,10\\}\\). Bestäm</p><p>\\[C=(A\\cup B)\\setminus(A\\cap B).\\]</p>",
    "s": "<p>\\(A\\cup B=\\{2,3,4,5,6,7,8,10\\}\\) och \\(A\\cap B=\\{2,4,6\\}\\). När snittet tas bort återstår <strong>\\(C=\\{3,5,7,8,10\\}\\)</strong>.</p>",
    "id": "1.10"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "C",
    "typ": "beskriva samma mängd på flera sätt",
    "poang": "2/1/0",
    "t": "<p>Mängden \\(P=\\{2,4,6,8,10\\}\\) ska beskrivas på tre olika sätt: med ord, på listform och med mängdbyggarnotation.</p>",
    "s": "<p>Exempel:</p><p>Med ord: de positiva jämna heltalen mindre än 12.</p><p>Listform: \\(P=\\{2,4,6,8,10\\}\\).</p><p>Mängdbyggarnotation: <strong>\\(P=\\{2n\\mid n\\in\\mathbb Z,\\ 1\\le n\\le5\\}\\)</strong>.</p>",
    "id": "1.11"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "översätta områdesbeskrivning till mängdsymboler",
    "poang": "1/1/0",
    "t": "<p>Beskriv följande två områden med mängdsymboler.</p><ol type=\"a\"><li>De element som ligger i \\(B\\) men inte i \\(A\\).</li><li>De element i grundmängden som ligger varken i \\(A\\) eller \\(B\\).</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(B\\setminus A\\)</strong>.</li><li><strong>\\((A\\cup B)^c\\)</strong>.</li></ol>",
    "id": "1.12"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tre mängder med villkor",
    "poang": "1/1/0",
    "t": "<p>Beskriv med mängdsymboler de element som ligger i både \\(B\\) och \\(C\\), men inte i \\(A\\).</p>",
    "s": "<p>Vi tar först \\(B\\cap C\\) och tar sedan bort \\(A\\): <strong>\\((B\\cap C)\\setminus A\\)</strong>, ekvivalent med \\(B\\cap C\\cap A^c\\).</p>",
    "id": "1.13"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tolka sektorer i Venn-diagram",
    "poang": "1/1/0",
    "t": "<p>I ett Venn-diagram med två mängder är sektor 1 lika med \\(A\\cap B\\). Beskriv med mängdsymboler</p><ol type=\"a\"><li>den del av \\(A\\) som ligger utanför \\(B\\),</li><li>området utanför både \\(A\\) och \\(B\\).</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(A\\setminus B\\)</strong>.</li><li><strong>\\((A\\cup B)^c\\)</strong>.</li></ol>",
    "id": "1.14"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "skillnad mellan delmängd och element",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,\\{2\\},3\\}\\). Avgör om påståendena är sanna eller falska.</p><ol type=\"a\"><li>\\(2\\in A\\)</li><li>\\(\\{2\\}\\in A\\)</li></ol>",
    "s": "<ol type=\"a\"><li><strong>Falskt.</strong> Talet 2 är inte ett element i \\(A\\).</li><li><strong>Sant.</strong> Mängden \\(\\{2\\}\\) är ett element i \\(A\\).</li></ol>",
    "id": "1.15"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "C",
    "typ": "De Morgans lag i konkret mängd",
    "poang": "0/2/0",
    "t": "<p>Låt grundmängden vara \\(G=\\{1,2,\\ldots,12\\}\\), \\(A\\) mängden jämna tal och \\(B\\) mängden tal delbara med 3. Bestäm \\((A\\cup B)^c\\) på två sätt och kontrollera De Morgans lag.</p>",
    "s": "<p>\\(A\\cup B=\\{2,3,4,6,8,9,10,12\\}\\), så <strong>\\((A\\cup B)^c=\\{1,5,7,11\\}\\)</strong>.</p><p>Vidare är \\(A^c=\\{1,3,5,7,9,11\\}\\) och \\(B^c=\\{1,2,4,5,7,8,10,11\\}\\). Snittet blir samma mängd. Alltså verifieras \\((A\\cup B)^c=A^c\\cap B^c\\).</p>",
    "id": "1.16"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "C",
    "typ": "inklusion-exklusion för två mängder",
    "poang": "0/2/0",
    "t": "<p>På en skola läser 82 elever fysik, 67 elever programmering och 31 elever båda kurserna. Hur många elever läser minst en av kurserna?</p>",
    "s": "<p>De 31 som läser båda har räknats två gånger i \\(82+67\\). Därför</p><p>\\[|F\\cup P|=82+67-31=\\mathbf{118}.\\]</p>",
    "id": "1.17"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "A",
    "typ": "inklusion-exklusion med tre mängder och parameter",
    "poang": "0/0/3",
    "t": "<p>I en grupp deltar \\(x\\) personer i alla tre aktiviteterna \\(A,B,C\\). Man vet att \\(|A|=38\\), \\(|B|=34\\), \\(|C|=29\\), \\(|A\\cap B|=16\\), \\(|A\\cap C|=12\\), \\(|B\\cap C|=11\\) och att 7 personer inte deltar i någon aktivitet. Totalt finns \\(y\\) personer i gruppen.</p><p>Bestäm ett samband mellan \\(x\\) och \\(y\\), och ange vilka heltalsvärden på \\(x\\) som är möjliga.</p>",
    "s": "<p>Inklusion-exklusion ger</p><p>\\[|A\\cup B\\cup C|=38+34+29-16-12-11+x=62+x.\\]</p><p>Med de 7 utanför blir <strong>\\(y=69+x\\)</strong>.</p><p>För att alla delområden ska ha icke-negativa antal måste bland annat \\(|B\\cap C\\setminus A|=11-x\\ge0\\), så \\(x\\le11\\). Vidare måste t.ex. endast-\\(C\\): \\(29-12-11+x=6+x\\ge0\\), vilket inte ger en skarpare nedre gräns än \\(x\\ge0\\). Alltså <strong>\\(x\\in\\{0,1,\\ldots,11\\}\\)</strong>.</p>",
    "id": "1.18"
  },
  {
    "kap": 1,
    "omr": "duvslagsprincipen",
    "niva": "E",
    "typ": "duvslagsprincipen",
    "poang": "1/0/0",
    "t": "<p>Till en nordisk skolkonferens kommer 31 elever från fem länder. Förklara varför minst ett land måste representeras av minst 7 elever.</p>",
    "s": "<p>Om varje land hade högst 6 elever skulle det finnas högst \\(5\\cdot6=30\\) elever. Men det finns 31. Alltså måste minst ett land ha <strong>minst 7 elever</strong>.</p>",
    "id": "1.19"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "välja och ordna utan återläggning",
    "poang": "1/0/0",
    "t": "<p>Ett fotbollslag har 16 spelare. Fem ska utses till straffläggare och ordningen ska bestämmas. Vilket uttryck ger antalet möjliga straffläggarlistor?</p><p>A) \\(P(16,5)\\) &nbsp; B) \\(\\binom{16}{5}\\) &nbsp; C) \\(16!\\) &nbsp; D) \\(11!\\)</p>",
    "s": "<p>Fem olika personer väljs och <em>ordningen spelar roll</em>. Därför är rätt uttryck <strong>\\(P(16,5)=16\\cdot15\\cdot14\\cdot13\\cdot12\\)</strong>.</p>",
    "id": "1.20"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja grupp utan ordning",
    "poang": "1/0/0",
    "t": "<p>Ur en trupp med 23 spelare ska fem väljas till en grupp. Ordningen saknar betydelse. Hur många olika grupper kan väljas?</p>",
    "s": "<p>Det är en kombination:</p><p>\\[\\binom{23}{5}=\\mathbf{33\\,649}.\\]</p>",
    "id": "1.21"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "bestämma binomialkoefficient",
    "poang": "1/0/0",
    "t": "<p>Bestäm koefficienten framför \\(a^4\\) i utvecklingen av \\((a+1)^5\\).</p>",
    "s": "<p>Termen med \\(a^4\\) fås när en av de fem faktorerna bidrar med 1. Koefficienten är <strong>\\(\\binom51=5\\)</strong>.</p>",
    "id": "1.22"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "produktprincipen med kortlek",
    "poang": "1/0/0",
    "t": "<p>På hur många sätt kan man välja ett hjärterkort och ett ruterkort ur en vanlig kortlek? Det finns 13 kort av varje färg.</p>",
    "s": "<p>För varje hjärterkort finns 13 möjliga ruterkort. Produktprincipen ger <strong>\\(13\\cdot13=169\\)</strong>.</p>",
    "id": "1.23"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "pinkod med återläggning",
    "poang": "2/0/0",
    "t": "<p>Hur många olika fyrsiffriga pinkoder finns om varje position kan vara någon av siffrorna 0–9 och siffror får upprepas?</p>",
    "s": "<p>Varje position har 10 val, oberoende av de andra: <strong>\\(10^4=10\\,000\\)</strong>.</p>",
    "id": "1.24"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "produktprincipen i klädval",
    "poang": "2/0/0",
    "t": "<p>En person har 5 par byxor, 10 par strumpor, 6 skjortor och 7 par skor. På hur många sätt kan en outfit med ett val ur varje kategori sättas ihop?</p>",
    "s": "<p>Produktprincipen ger</p><p>\\[5\\cdot10\\cdot6\\cdot7=\\mathbf{2100}.\\]</p>",
    "id": "1.25"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "ordna grupper i block",
    "poang": "2/0/0",
    "t": "<p>I en bokhylla ska 6 geografiböcker, 4 religionsböcker och 3 romaner ställas så att böcker av samma kategori står tillsammans. Alla böcker är olika. Hur många ordningar finns?</p>",
    "s": "<p>De tre kategoriblocken kan ordnas på \\(3!\\) sätt. Inom blocken finns \\(6!\\), \\(4!\\) respektive \\(3!\\) ordningar. Totalt</p><p>\\[3!\\cdot6!\\cdot4!\\cdot3!=\\mathbf{622\\,080}.\\]</p>",
    "id": "1.26"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "antal pokerhänder",
    "poang": "2/0/0",
    "t": "<p>En pokerhand består av 5 kort ur en kortlek med 52 kort. Hur många olika händer finns?</p>",
    "s": "<p>Ordningen spelar ingen roll:</p><p>\\[\\binom{52}{5}=\\mathbf{2\\,598\\,960}.\\]</p>",
    "id": "1.27"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "tolka och använda kombinationsformel",
    "poang": "2/0/0",
    "t": "<p>Förklara med ord vad \\(\\binom nk\\) betyder och skriv formeln med fakulteter.</p>",
    "s": "<p>\\(\\binom nk\\) är antalet sätt att välja \\(k\\) objekt bland \\(n\\) när ordningen inte spelar roll. Formeln är</p><p><strong>\\[\\binom nk=\\frac{n!}{k!(n-k)!}.\\]</strong></p>",
    "id": "1.28"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "beräkna kombinationstal",
    "poang": "3/0/0",
    "t": "<p>Beräkna \\(\\binom{11}{4}\\), \\(\\binom{20}{5}\\) och \\(\\binom{17}{13}\\).</p>",
    "s": "<p><strong>\\(\\binom{11}{4}=330\\)</strong>, <strong>\\(\\binom{20}{5}=15\\,504\\)</strong> och <strong>\\(\\binom{17}{13}=\\binom{17}{4}=2380\\)</strong>.</p>",
    "id": "1.29"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "utveckla binom med binomialsatsen",
    "poang": "3/0/0",
    "t": "<p>Utveckla \\(\\left(2x+\\frac12y\\right)^4\\).</p>",
    "s": "<p>Med binomialsatsen:</p><p><strong>\\[16x^4+16x^3y+6x^2y^2+xy^3+\\frac1{16}y^4.\\]</strong></p>",
    "id": "1.30"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "utveckla binom",
    "poang": "3/0/0",
    "t": "<p>Utveckla \\((3x+2)^4\\).</p>",
    "s": "<p>\\[\\binom40(3x)^4+\\binom41(3x)^3(2)+\\binom42(3x)^2(2^2)+\\binom43(3x)(2^3)+2^4\\]</p><p><strong>\\(=81x^4+216x^3+216x^2+96x+16\\)</strong>.</p>",
    "id": "1.31"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "jämföra ordnade och oordnade urval",
    "poang": "4/0/0",
    "t": "<p>Av 33 elever ska 9 delta i en aktivitet.</p><ol type=\"a\"><li>Hur många olika köordningar kan 9 av eleverna bilda?</li><li>Hur många olika grupper om 9 elever kan väljas om ordningen inte spelar roll?</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(P(33,9)=\\frac{33!}{24!}\\)</strong>.</li><li><strong>\\(\\binom{33}{9}\\)</strong>.</li></ol>",
    "id": "1.32"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "stora kombinationstal och symmetri",
    "poang": "6/0/0",
    "t": "<p>Beräkna \\(\\binom98\\), \\(\\binom{20}{18}\\) och \\(\\binom{105}{102}\\).</p>",
    "s": "<p>Använd gärna symmetrin \\(\\binom nk=\\binom n{n-k}\\):</p><p><strong>\\(\\binom98=9\\)</strong>, <strong>\\(\\binom{20}{18}=\\binom{20}{2}=190\\)</strong>, <strong>\\(\\binom{105}{102}=\\binom{105}{3}=187\\,460\\)</strong>.</p>",
    "id": "1.33"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "utveckla algebraiska binom",
    "poang": "2/2/0",
    "t": "<p>Utveckla.</p><ol type=\"a\"><li>\\((2x+x^2)^5\\)</li><li>\\((2x-y)^5\\)</li></ol>",
    "s": "<ol type=\"a\"><li>Faktorisera gärna \\(x\\): \\((x(2+x))^5=x^5(2+x)^5\\). Det ger <strong>\\(32x^5+80x^6+80x^7+40x^8+10x^9+x^{10}\\)</strong>.</li><li><strong>\\(32x^5-80x^4y+80x^3y^2-40x^2y^3+10xy^4-y^5\\)</strong>.</li></ol>",
    "id": "1.34"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "hypergeometrisk sannolikhet i lotteri",
    "poang": "2/2/0",
    "t": "<p>I ett lotteri väljer man 5 olika nummer av 25. Därefter dras 5 vinnarnummer.</p><ol type=\"a\"><li>Bestäm sannolikheten att få alla 5 rätt.</li><li>Bestäm sannolikheten att få minst 3 rätt.</li></ol>",
    "s": "<p>Antalet möjliga femmängder är \\(\\binom{25}{5}=53\\,130\\).</p><ol type=\"a\"><li>Endast en rad ger fem rätt: <strong>\\(1/53\\,130\\approx0,00188\\%\\)</strong>.</li><li>För exakt \\(r\\) rätt väljs \\(r\\) av de 5 egna numren och \\(5-r\\) av de 20 andra. Därför</li></ol><p>\\[\\frac{\\binom53\\binom{20}2+\\binom54\\binom{20}1+\\binom55}{\\binom{25}5}=\\frac{2001}{53130}\\approx\\mathbf{3,77\\%}.\\]</p>",
    "id": "1.35"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "koefficient i binomialutveckling",
    "poang": "2/2/0",
    "t": "<p>Bestäm koefficienten framför</p><ol type=\"a\"><li>\\(x^7y^4\\) i \\((x+y)^{11}\\),</li><li>\\(x^5y^8\\) i \\((2x+y^2)^9\\).</li></ol>",
    "s": "<ol type=\"a\"><li>Koefficienten är <strong>\\(\\binom{11}{4}=330\\)</strong>.</li><li>För \\(y^8\\) behövs fyra faktorer \\(y^2\\), alltså fem faktorer \\(2x\\). Koefficienten blir <strong>\\(\\binom94 2^5=4032\\)</strong>.</li></ol>",
    "id": "1.36"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "C",
    "typ": "räkna nya registreringskombinationer",
    "poang": "1/2/0",
    "t": "<p>Ett registreringssystem använder tre bokstäver följda av tre symboler. I den äldre versionen var de tre sista symbolerna siffror. I en utökad version får den sista symbolen även vara en av 23 bokstäver. De tre första bokstäverna väljs också bland 23 bokstäver.</p><p>Hur många <em>ytterligare</em> registreringsnummer blir möjliga genom att den sista symbolen får vara en bokstav?</p>",
    "s": "<p>De nya kombinationerna är precis de där sista symbolen är en bokstav. Då finns</p><p>\\[23^3\\cdot10^2\\cdot23=\\mathbf{27\\,984\\,100}\\]</p><p>ytterligare registreringsnummer.</p>",
    "id": "1.37"
  },
  {
    "kap": 1,
    "omr": "duvslagsprincipen",
    "niva": "E",
    "typ": "duvslagsprincipen månader",
    "poang": "1/0/0",
    "t": "<p>Hur många personer behövs minst i ett rum för att man med säkerhet ska kunna säga att minst tre fyller år i samma månad?</p>",
    "s": "<p>Med högst två personer per månad ryms \\(12\\cdot2=24\\) personer. Person nummer 25 tvingar fram en månad med minst tre. <strong>25 personer</strong>.</p>",
    "id": "1.38"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "koder med villkor",
    "poang": "2/0/0",
    "t": "<p>En kod består av två bokstäver följda av tre siffror. Bokstäverna väljs bland 26 bokstäver och får upprepas, men den första siffran får inte vara 0. Hur många koder finns?</p>",
    "s": "<p>\\(26\\cdot26\\cdot9\\cdot10\\cdot10=\\mathbf{608\\,400}\\).</p>",
    "id": "1.39"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "permutationer med upprepade objekt",
    "poang": "0/2/0",
    "t": "<p>Hur många olika bokstavsordningar kan bildas av bokstäverna i ordet MATEMATIK?</p>",
    "s": "<p>Ordet har 9 bokstäver. A, M och T förekommer vardera två gånger. Därför blir antalet</p><p>\\[\\frac{9!}{2!2!2!}=\\mathbf{45\\,360}.\\]</p>",
    "id": "1.40"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "gruppval med minst-villkor",
    "poang": "0/2/0",
    "t": "<p>En arbetsgrupp på 5 personer ska väljas bland 7 kvinnor och 4 män. Gruppen ska innehålla minst 3 kvinnor. Hur många grupper är möjliga?</p>",
    "s": "<p>Räkna fallen 3, 4 respektive 5 kvinnor:</p><p>\\[\\binom73\\binom42+\\binom74\\binom41+\\binom75\\binom40=210+140+21=\\mathbf{371}.\\]</p>",
    "id": "1.41"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "fördela personer i olika grupper",
    "poang": "0/2/0",
    "t": "<p>12 personer ska fördelas i tre namngivna bilar som tar 3, 4 respektive 5 personer. Platserna inne i bilarna spelar ingen roll. På hur många sätt kan fördelningen göras?</p>",
    "s": "<p>Välj först 3 till första bilen och sedan 4 av de återstående 9 till den andra. Resten går i tredje:</p><p>\\[\\binom{12}{3}\\binom94=\\mathbf{27\\,720}.\\]</p>",
    "id": "1.42"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "A",
    "typ": "kombinatoriskt bevis",
    "poang": "0/0/3",
    "t": "<p>Visa kombinatoriskt att</p><p>\\[\\binom n2+\\binom n1=\\binom{n+1}{2}.\\]</p>",
    "s": "<p>Tänk en grupp med \\(n+1\\) personer där en särskild person heter P. Antalet par är \\(\\binom{n+1}{2}\\). Dela paren i två typer: par utan P, \\(\\binom n2\\), och par med P, där den andra personen kan väljas på \\(\\binom n1=n\\) sätt. Därför måste <strong>\\(\\binom n2+\\binom n1=\\binom{n+1}{2}\\)</strong>.</p>",
    "id": "1.43"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "A",
    "typ": "parameter i binomialkoefficient",
    "poang": "0/0/3",
    "t": "<p>I utvecklingen av \\((1+ax)^8\\) är koefficienten framför \\(x^3\\) fyra gånger så stor som koefficienten framför \\(x^2\\). Bestäm det icke-nollskilda värdet på \\(a\\).</p>",
    "s": "<p>Koefficienterna är \\(\\binom83a^3=56a^3\\) och \\(\\binom82a^2=28a^2\\). Villkoret ger \\(56a^3=4\\cdot28a^2\\). För \\(a\\ne0\\): \\(56a=112\\), alltså <strong>\\(a=2\\)</strong>.</p>",
    "id": "1.44"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "A",
    "typ": "villkorad kombinatorisk sannolikhet",
    "poang": "0/1/2",
    "t": "<p>Ur en grupp med 8 kvinnor och 6 män väljs slumpmässigt 5 personer. Givet att gruppen innehåller minst 3 kvinnor, bestäm sannolikheten att den innehåller exakt 4 kvinnor.</p>",
    "s": "<p>Villkoret begränsar utfallsrummet till grupper med 3, 4 eller 5 kvinnor.</p><p>\\[P=\\frac{\\binom84\\binom61}{\\binom83\\binom62+\\binom84\\binom61+\\binom85\\binom60}=\\frac{420}{840+420+56}=\\frac{105}{329}\\approx\\mathbf{0,319}.\\]</p>",
    "id": "1.45"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "identifiera geometrisk talföljd",
    "poang": "2/0/0",
    "t": "<p>Beskriv vad som kännetecknar en geometrisk talföljd. Vilka av följande är geometriska?</p><p>A) \\(2,4,6,8,\\ldots\\)<br>B) \\(1,4,9,16,\\ldots\\)<br>C) \\(1,2,4,8,\\ldots\\)<br>D) \\(3,-9,27,-81,\\ldots\\)</p>",
    "s": "<p>I en geometrisk talföljd fås varje ny term genom multiplikation med samma kvot \\(q\\). <strong>C</strong> har \\(q=2\\) och <strong>D</strong> har \\(q=-3\\). A och B är inte geometriska.</p>",
    "id": "2.01"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "skriva ut och beräkna sigma-summa",
    "poang": "2/0/0",
    "t": "<p>Skriv ut termerna och beräkna \\(\\displaystyle\\sum_{k=1}^{4}2k^2\\).</p>",
    "s": "<p>\\[2\\cdot1^2+2\\cdot2^2+2\\cdot3^2+2\\cdot4^2=2+8+18+32=\\mathbf{60}.\\]</p>",
    "id": "2.02"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "identifiera geometriska följder inklusive negativ kvot",
    "poang": "2/0/0",
    "t": "<p>Vilka av följande talföljder är geometriska?</p><p>1) \\(1,4,16,64,\\ldots\\)<br>2) \\(-1,1,-1,1,\\ldots\\)<br>3) \\(\\frac12,\\frac13,\\frac29,\\frac4{27},\\ldots\\)<br>4) \\(1,\\frac12,\\frac14,\\frac1{16},\\ldots\\)</p>",
    "s": "<p><strong>1, 2 och 3</strong> är geometriska med kvoterna \\(4\\), \\(-1\\) respektive \\(2/3\\). Följd 4 byter kvot från \\(1/2\\) till \\(1/4\\) mellan de två sista visade termerna.</p>",
    "id": "2.03"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "tolka geometrisk sigma-summa",
    "poang": "2/0/0",
    "t": "<p>Vilka termer ingår i \\(\\displaystyle\\sum_{k=1}^{4}3\\cdot0,6^k\\)? Beräkna summan.</p>",
    "s": "<p>Termerna är \\(1,8\\), \\(1,08\\), \\(0,648\\) och \\(0,3888\\). Summan är <strong>\\(3,9168\\)</strong>.</p>",
    "id": "2.04"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "explicit formel och geometrisk summa",
    "poang": "2/0/0",
    "t": "<p>Talföljden \\(1,3,9,\\ldots,19683\\) innehåller 10 termer.</p><ol type=\"a\"><li>Ange en formel för den \\(n\\):te termen.</li><li>Beräkna summan av de 10 termerna.</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(a_n=3^{n-1}\\)</strong>.</li><li>\\(S_{10}=\\frac{3^{10}-1}{3-1}=\\mathbf{29\\,524}\\).</li></ol>",
    "id": "2.05"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "upprepade insättningar och geometrisk summa",
    "poang": "2/0/0",
    "t": "<p>Varje födelsedag från 1-årsdagen till och med 20-årsdagen sätts 1000 kr in på ett konto. Årsräntan är 5,2 %. Hur mycket finns på kontot direkt efter insättningen på 20-årsdagen? Anta att räntan läggs till en gång per år.</p>",
    "s": "<p>Den första insättningen har vuxit i 19 år och den sista i 0 år:</p><p>\\[1000(1+1,052+\\cdots+1,052^{19})=1000\\frac{1,052^{20}-1}{0,052}\\approx\\mathbf{33\\,774\\text{ kr}}.\\]</p>",
    "id": "2.06"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "sista termer och aritmetisk summa",
    "poang": "2/0/0",
    "t": "<p>En aritmetisk talföljd har 10 termer. De två första är 4 och 11.</p><ol type=\"a\"><li>Bestäm de två sista termerna.</li><li>Bestäm summan av alla termer.</li></ol>",
    "s": "<p>Differensen är \\(d=7\\). Då är \\(a_9=4+8\\cdot7=60\\) och \\(a_{10}=67\\). Summan blir</p><p>\\[S_{10}=\\frac{10(4+67)}2=\\mathbf{355}.\\]</p>",
    "id": "2.07"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "typ": "skriva rekursiv formel",
    "poang": "3/0/0",
    "t": "<p>Skriv en rekursiv formel för talföljden \\(2,4,8,16,32,\\ldots\\).</p>",
    "s": "<p>Varje term är dubbelt så stor som föregående: <strong>\\(a_1=2,\\ a_{n+1}=2a_n\\)</strong>.</p>",
    "id": "2.08"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "klassificera aritmetisk och geometrisk talföljd",
    "poang": "3/0/0",
    "t": "<p>Studera följderna.</p><p>A) \\(2,4,6,8,\\ldots\\)<br>B) \\(1,4,9,16,\\ldots\\)<br>C) \\(1,2,4,8,\\ldots\\)<br>D) \\(3,-9,27,-81,\\ldots\\)</p><ol type=\"a\"><li>Vilka är aritmetiska?</li><li>Vilka är geometriska?</li></ol>",
    "s": "<ol type=\"a\"><li><strong>A</strong>, med differensen 2.</li><li><strong>C och D</strong>, med kvoterna 2 respektive −3.</li></ol>",
    "id": "2.09"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "rekursiv och explicit formel samt lång summa",
    "poang": "3/0/0",
    "t": "<p>Talföljden är \\(11,18,25,32,39,\\ldots\\).</p><ol type=\"a\"><li>Skriv en rekursiv formel.</li><li>Skriv en explicit formel för \\(a_n\\).</li><li>Beräkna \\(\\sum_{i=1}^{100}a_i\\).</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(a_1=11,\\ a_{n+1}=a_n+7\\)</strong>.</li><li><strong>\\(a_n=11+7(n-1)=7n+4\\)</strong>.</li><li>\\(a_{100}=704\\), alltså \\(S_{100}=\\frac{100(11+704)}2=\\mathbf{35\\,750}\\).</li></ol>",
    "id": "2.10"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "C",
    "typ": "geometrisk summa med bråkkvot",
    "poang": "1/1/0",
    "t": "<p>Beräkna summan av en geometrisk talföljd med fem termer, första termen 1 och kvoten \\(1/3\\).</p>",
    "s": "<p>\\[S_5=\\frac{1-(1/3)^5}{1-1/3}=\\frac{121}{81}\\approx\\mathbf{1,494}.\\]</p>",
    "id": "2.11"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "C",
    "typ": "beskriva induktionsbevisets struktur",
    "poang": "1/1/0",
    "t": "<p>Beskriv huvudstegen i ett induktionsbevis och förklara varför de tillsammans räcker för att visa ett påstående för alla heltal \\(n\\ge n_0\\).</p>",
    "s": "<p>1. <strong>Bassteg:</strong> kontrollera påståendet för \\(n=n_0\\). 2. <strong>Induktionsantagande:</strong> anta att påståendet gäller för ett godtyckligt \\(n=k\\). 3. <strong>Induktionssteg:</strong> visa med hjälp av antagandet att det då också gäller för \\(n=k+1\\). 4. <strong>Slutsats:</strong> eftersom kedjan startar i \\(n_0\\) och varje sant fall tvingar fram nästa, gäller påståendet för alla \\(n\\ge n_0\\).</p>",
    "id": "2.12"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "C",
    "typ": "bestämma antal termer från sista term",
    "poang": "0/2/0",
    "t": "<p>En läktare har 7 platser på första raden och 3 fler platser på varje följande rad. Sista raden har 124 platser. Hur många platser finns totalt?</p>",
    "s": "<p>\\(124=7+3(n-1)\\) ger \\(n=40\\). Summan är</p><p>\\[S_{40}=\\frac{40(7+124)}2=\\mathbf{2620}.\\]</p>",
    "id": "2.13"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "C",
    "typ": "skriva rekursion från växande differenser",
    "poang": "0/2/0",
    "t": "<p>Talföljden \\(0,2,5,9,14,20,\\ldots\\) har successiva differenser \\(2,3,4,5,6,\\ldots\\). Skriv en rekursiv formel för följden.</p>",
    "s": "<p>Om \\(a_1=0\\), så ökar steget från 2 med 1 varje gång. Från \\(a_n\\) till \\(a_{n+1}\\) adderas \\(n+1\\). Alltså <strong>\\(a_1=0,\\ a_{n+1}=a_n+n+1\\)</strong>.</p>",
    "id": "2.14"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "A",
    "typ": "sluten formel för linjär rekursion med konstant tillskott",
    "poang": "0/0/2",
    "t": "<p>En population beskrivs rekursivt av \\(a_0=12000\\) och \\(a_{n+1}=0,78a_n+2400\\). Bestäm en explicit formel för \\(a_n\\) och populationens gränsvärde.</p>",
    "s": "<p>Jämviktsvärdet \\(L\\) uppfyller \\(L=0,78L+2400\\), så \\(L=2400/0,22=\\frac{120000}{11}\\). Sätt \\(b_n=a_n-L\\). Då \\(b_{n+1}=0,78b_n\\), så</p><p><strong>\\[a_n=L+(12000-L)0,78^n.\\]</strong></p><p>Alltså \\(a_n\\to L\\approx\\mathbf{10\\,909}\\).</p>",
    "id": "2.15"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "C",
    "typ": "omskriva sigma-summa till sluten form",
    "poang": "0/2/0",
    "t": "<p>Bestäm en sluten form för \\(\\displaystyle\\sum_{k=1}^{n}(5k-2)\\).</p>",
    "s": "<p>\\[\\sum_{k=1}^{n}(5k-2)=5\\frac{n(n+1)}2-2n=\\frac{5n^2+n}{2}.\\]</p><p><strong>\\(\\frac{n(5n+1)}2\\)</strong>.</p>",
    "id": "2.16"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "C",
    "typ": "upprepad medicindos som geometrisk summa",
    "poang": "0/2/0",
    "t": "<p>En patient får 6 mg av en substans varje timme. Under varje timme bryts 18 % av den mängd som finns i kroppen ned. Hur mycket finns i kroppen direkt efter den åttonde dosen?</p>",
    "s": "<p>Efter varje timme återstår faktorn \\(0,82\\). Direkt efter åttonde dosen finns</p><p>\\[6(1+0,82+\\cdots+0,82^7)=6\\frac{1-0,82^8}{1-0,82}\\approx\\mathbf{26,5\\text{ mg}}.\\]</p>",
    "id": "2.17"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "A",
    "typ": "bestämma dos från målvärde",
    "poang": "0/1/2",
    "t": "<p>En substans bryts ned med 22 % varje timme. Tolv lika stora doser ges med en timmes mellanrum. Hur stor ska varje dos vara för att mängden direkt efter den tolfte dosen ska vara 900 mg?</p>",
    "s": "<p>Om dosen är \\(d\\) mg får vi</p><p>\\[900=d(1+0,78+\\cdots+0,78^{11})=d\\frac{1-0,78^{12}}{1-0,78}.\\]</p><p>Därför <strong>\\(d=900\\frac{0,22}{1-0,78^{12}}\\approx208,6\\text{ mg}\\)</strong>.</p>",
    "id": "2.18"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "bestämma restklass",
    "poang": "1/0/0",
    "t": "<p>Bestäm \\(n\\) om \\(29\\equiv n\\pmod5\\) och \\(0\\le n<5\\).</p>",
    "s": "<p>\\(29=5\\cdot5+4\\), alltså <strong>\\(n=4\\)</strong>.</p>",
    "id": "2.19"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "förenkla produkt modulo",
    "poang": "1/0/0",
    "t": "<p>Förenkla \\(21\\cdot102\\pmod4\\).</p>",
    "s": "<p>\\(21\\equiv1\\pmod4\\) och \\(102\\equiv2\\pmod4\\). Produkten är därför <strong>\\(2\\pmod4\\)</strong>.</p>",
    "id": "2.20"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "ge exempel på kongruenta tal",
    "poang": "1/0/0",
    "t": "<p>Ge två olika heltal som är kongruenta med 7 modulo 9. Motivera.</p>",
    "s": "<p>Exempel: <strong>16 och 25</strong>. Skillnaderna \\(16-7=9\\) och \\(25-7=18\\) är delbara med 9.</p>",
    "id": "2.21"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "multiplikation modulo",
    "poang": "1/0/0",
    "t": "<p>Beräkna \\(18\\cdot33\\pmod{16}\\).</p>",
    "s": "<p>\\(18\\equiv2\\) och \\(33\\equiv1\\pmod{16}\\), så produkten är <strong>\\(2\\pmod{16}\\)</strong>.</p>",
    "id": "2.22"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "rest vid division",
    "poang": "1/0/0",
    "t": "<p>Beräkna \\(21\\pmod2\\).</p>",
    "s": "<p>21 är udda, alltså är resten <strong>1</strong>.</p>",
    "id": "2.23"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "E",
    "typ": "veckodag med modulo 7",
    "poang": "1/0/0",
    "t": "<p>Idag är det tisdag. Vilken veckodag är det om 209 dagar?</p>",
    "s": "<p>\\(209\\equiv6\\pmod7\\). Sex dagar efter tisdag är <strong>måndag</strong>.</p>",
    "id": "2.24"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "tolka kongruensnotation",
    "poang": "2/0/0",
    "t": "<p>Förklara med ord vad följande betyder.</p><ol type=\"a\"><li>\\(38\\equiv3\\pmod5\\)</li><li>\\(17\\equiv23\\pmod3\\)</li></ol>",
    "s": "<ol type=\"a\"><li>38 och 3 ger samma rest vid division med 5; ekvivalent är \\(38-3\\) delbart med 5.</li><li>17 och 23 ger samma rest vid division med 3; \\(17-23=-6\\) är delbart med 3.</li></ol>",
    "id": "2.25"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "E",
    "typ": "klockaritmetik",
    "poang": "2/0/0",
    "t": "<p>Klockan är 9. Vad pekar timvisaren på om 110 timmar?</p>",
    "s": "<p>Vi räknar modulo 12: \\(110\\equiv2\\pmod{12}\\). Två timmar efter 9 är <strong>11</strong>.</p>",
    "id": "2.26"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "blandad kongruensberäkning",
    "poang": "2/1/0",
    "t": "<p>Förenkla \\(23+39\\cdot12\\pmod5\\) så långt som möjligt.</p>",
    "s": "<p>\\(23\\equiv3\\), \\(39\\equiv4\\) och \\(12\\equiv2\\pmod5\\). Därför</p><p>\\[3+4\\cdot2=11\\equiv\\mathbf1\\pmod5.\\]</p>",
    "id": "2.27"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "bestämma möjliga moduler från differens",
    "poang": "1/1/0",
    "t": "<p>För vilka positiva heltal \\(n\\) gäller \\(37\\equiv2\\pmod n\\)?</p>",
    "s": "<p>Villkoret betyder att \\(n\\mid(37-2)=35\\). De positiva delarna till 35 är <strong>\\(n=1,5,7,35\\)</strong>.</p>",
    "id": "2.28"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "flera modularitetsberäkningar med potenser",
    "poang": "2/2/0",
    "t": "<p>Förenkla.</p><ol type=\"a\"><li>\\(21+15+38\\pmod5\\)</li><li>\\(13\\cdot11\\pmod5\\)</li><li>\\(2^{30}\\pmod3\\)</li><li>\\(2^{30}\\pmod5\\)</li></ol>",
    "s": "<ol type=\"a\"><li>\\(1+0+3\\equiv\\mathbf4\\pmod5\\).</li><li>\\(3\\cdot1\\equiv\\mathbf3\\pmod5\\).</li><li>\\(2\\equiv-1\\pmod3\\), så \\((-1)^{30}=\\mathbf1\\).</li><li>\\(2^4\\equiv1\\pmod5\\), och \\(30=7\\cdot4+2\\), så \\(2^{30}\\equiv2^2=\\mathbf4\\pmod5\\).</li></ol>",
    "id": "2.29"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "bestämma slutsiffra med modularitet",
    "poang": "0/2/0",
    "t": "<p>Bestäm slutsiffran i \\(7^{2026}\\).</p>",
    "s": "<p>Potenser av 7 modulo 10 går i cykeln \\(7,9,3,1\\) med period 4. Eftersom \\(2026\\equiv2\\pmod4\\) är slutsiffran samma som för \\(7^2\\): <strong>9</strong>.</p>",
    "id": "2.30"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "C",
    "typ": "stor veckodagsberäkning modulo 7",
    "poang": "0/2/0",
    "t": "<p>Idag är det fredag. Vilken veckodag är det om \\(3^{20}+5\\cdot10^4\\) dagar?</p>",
    "s": "<p>Modulo 7: \\(3^6\\equiv1\\), så \\(3^{20}=3^{18}3^2\\equiv9\\equiv2\\). Dessutom \\(10\\equiv3\\), så \\(10^4\\equiv3^4=81\\equiv4\\). Då är \\(5\\cdot10^4\\equiv20\\equiv6\\). Totalt \\(2+6=8\\equiv1\\pmod7\\). En dag efter fredag är <strong>lördag</strong>.</p>",
    "id": "2.31"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "A",
    "typ": "lösa simultana kongruenser",
    "poang": "0/1/2",
    "t": "<p>Bestäm det minsta positiva heltalet \\(x\\) som uppfyller</p><p>\\[x\\equiv2\\pmod5,\\qquad x\\equiv4\\pmod7.\\]</p>",
    "s": "<p>Skriv \\(x=5k+2\\). Kravet modulo 7 ger \\(5k+2\\equiv4\\), alltså \\(5k\\equiv2\\pmod7\\). Inversen till 5 modulo 7 är 3, så \\(k\\equiv6\\pmod7\\). Minsta \\(k=6\\) ger <strong>\\(x=32\\)</strong>.</p>",
    "id": "2.32"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "A",
    "typ": "bevisa delbarhet med kongruens",
    "poang": "0/1/2",
    "t": "<p>Visa att \\(11^{2n}-1\\) är delbart med 120 för varje positivt heltal \\(n\\).</p>",
    "s": "<p>Eftersom \\(11^2=121\\equiv1\\pmod{120}\\) gäller \\(11^{2n}=(11^2)^n\\equiv1^n\\equiv1\\pmod{120}\\). Alltså <strong>\\(11^{2n}-1\\equiv0\\pmod{120}\\)</strong>, vilket visar delbarheten.</p>",
    "id": "2.33"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "omvandla från bas 10 till annan bas",
    "poang": "2/0/0",
    "t": "<p>Skriv talet \\(91_{10}\\) i bas 4.</p>",
    "s": "<p>\\(91=1\\cdot4^3+1\\cdot4^2+2\\cdot4+3\\). Alltså <strong>\\((1123)_4\\)</strong>.</p>",
    "id": "2.34"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "största gemensamma delare i kontext",
    "poang": "0/2/0",
    "t": "<p>462 enkronor, 105 tvåkronor och 182 femkronor ska fördelas lika mellan så många kassor som möjligt, utan att några mynt blir över. Hur många kassor kan användas?</p>",
    "s": "<p>Antalet kassor måste dela alla tre talen. \\(\\gcd(462,105)=21\\) och \\(\\gcd(21,182)=7\\). Alltså kan man använda <strong>7 kassor</strong>.</p>",
    "id": "2.35"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för geometrisk summa",
    "poang": "1/1/1",
    "t": "<p>Visa med induktion att</p><p>\\[a+ak+ak^2+\\cdots+ak^{n-1}=a\\frac{k^n-1}{k-1}\\]</p><p>för \\(n\\ge1\\) och \\(k\\ne1\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(n=1\\): vänsterledet är \\(a\\), högerledet \\(a(k-1)/(k-1)=a\\).</p><p><strong>Antagande:</strong> formeln gäller för \\(n=p\\).</p><p><strong>Steg:</strong></p><p>\\[S_{p+1}=S_p+ak^p=a\\frac{k^p-1}{k-1}+ak^p=a\\frac{k^{p+1}-1}{k-1}.\\]</p><p>Alltså gäller formeln även för \\(p+1\\), och därmed för alla \\(n\\ge1\\).</p>",
    "id": "2.36"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis av delbarhet",
    "poang": "1/1/1",
    "t": "<p>Visa med induktion att \\(3\\mid(n^3+2n)\\) för alla positiva heltal \\(n\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(n=1\\) ger 3.</p><p>Anta att \\(k^3+2k\\) är delbart med 3. Då</p><p>\\[(k+1)^3+2(k+1)=k^3+2k+3(k^2+k+1).\\]</p><p>Första delen är delbar med 3 enligt antagandet och den andra har faktor 3. Alltså gäller påståendet för \\(k+1\\), och därmed för alla positiva \\(n\\).</p>",
    "id": "2.37"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för aritmetisk summa",
    "poang": "1/1/1",
    "t": "<p>Bevisa med induktion att</p><p>\\[\\sum_{n=1}^{k}(6n-1)=k(3k+2).\\]</p>",
    "s": "<p><strong>Bas:</strong> \\(k=1\\): \\(5=1(3+2)\\).</p><p>Anta \\(S_k=k(3k+2)\\). Då</p><p>\\[S_{k+1}=k(3k+2)+(6(k+1)-1)=3k^2+8k+5.\\]</p><p>\\[(k+1)(3(k+1)+2)=(k+1)(3k+5)=3k^2+8k+5.\\]</p><p>Alltså gäller formeln för \\(k+1\\).</p>",
    "id": "2.38"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för udda aritmetisk serie",
    "poang": "1/1/1",
    "t": "<p>Bevisa med induktion att</p><p>\\[1+5+9+\\cdots+(4n-3)=n(2n-1)\\]</p><p>för alla \\(n\\ge1\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(n=1\\): \\(1=1(2-1)\\).</p><p>Anta att summan till term \\(k\\) är \\(k(2k-1)\\). Nästa term är \\(4(k+1)-3=4k+1\\). Då</p><p>\\[k(2k-1)+(4k+1)=2k^2+3k+1=(k+1)(2k+1),\\]</p><p>vilket är formeln med \\(n=k+1\\).</p>",
    "id": "2.39"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för summan 1 till n",
    "poang": "1/1/1",
    "t": "<p>Visa med induktion att \\(1+2+\\cdots+n=\\frac{n(n+1)}2\\) för alla positiva heltal \\(n\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(n=1\\): \\(1=1\\cdot2/2\\).</p><p>Anta \\(1+\\cdots+k=k(k+1)/2\\). Då</p><p>\\[1+\\cdots+k+(k+1)=\\frac{k(k+1)}2+(k+1)=\\frac{(k+1)(k+2)}2.\\]</p><p>Det är formeln för \\(k+1\\).</p>",
    "id": "2.40"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för sigmaformel",
    "poang": "1/1/1",
    "t": "<p>Bevisa med induktion att</p><p>\\[\\sum_{n=1}^{k}(12n-9)=k(6k-3).\\]</p>",
    "s": "<p><strong>Bas:</strong> \\(k=1\\): \\(3=3\\).</p><p>Anta formeln för \\(k\\). Lägg till nästa term \\(12(k+1)-9=12k+3\\):</p><p>\\[k(6k-3)+12k+3=6k^2+9k+3=(k+1)(6k+3).\\]</p><p>Eftersom \\((k+1)(6(k+1)-3)=(k+1)(6k+3)\\) är steget visat.</p>",
    "id": "2.41"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "C",
    "typ": "förklara induktionsbevis",
    "poang": "0/1/1",
    "t": "<p>En elev säger: ”I ett induktionsbevis räcker det att kontrollera \\(n=1\\) och sedan prova några fler värden.” Förklara varför detta inte räcker och vad som måste visas i stället.</p>",
    "s": "<p>Ändligt många kontroller visar inte ett påstående för alla heltal. Efter bassteget måste man anta att påståendet gäller för ett <em>godtyckligt</em> \\(n=k\\) och därefter visa att detta medför att det gäller för \\(k+1\\). Det är just denna generella övergång som gör beviset giltigt för alla efterföljande heltal.</p>",
    "id": "2.42"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för explicit form av rekursiv följd",
    "poang": "0/1/2",
    "t": "<p>Följden definieras av \\(a_0=0\\), \\(a_1=1\\) och \\(a_{n+1}=5a_n-6a_{n-1}\\) för \\(n\\ge1\\). Visa med induktion att \\(a_n=3^n-2^n\\).</p>",
    "s": "<p>Eftersom rekursionen använder två föregående termer kontrolleras två basfall: \\(a_0=0=1-1\\) och \\(a_1=1=3-2\\). Anta sedan att formlerna gäller för \\(a_k\\) och \\(a_{k-1}\\). Då</p><p>\\[a_{k+1}=5(3^k-2^k)-6(3^{k-1}-2^{k-1})=3^{k+1}-2^{k+1}.\\]</p><p>Alltså gäller formeln för alla \\(n\\ge0\\).</p>",
    "id": "2.43"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis av exponentialdelbarhet",
    "poang": "0/1/2",
    "t": "<p>Visa med induktion att \\(8^n-5^n\\) är delbart med 3 för alla heltal \\(n\\ge0\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(n=0\\): \\(1-1=0\\).</p><p>Anta \\(8^k-5^k=3m\\). Då</p><p>\\[8^{k+1}-5^{k+1}=8(8^k-5^k)+3\\cdot5^k=3(8m+5^k),\\]</p><p>som är delbart med 3.</p>",
    "id": "2.44"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för kubsumma",
    "poang": "1/1/3",
    "t": "<p>Visa med induktion att</p><p>\\[\\sum_{k=1}^{n}k^3=\\frac{n^2(n+1)^2}{4}\\]</p><p>för alla positiva heltal \\(n\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(n=1\\) ger 1 i båda led.</p><p>Anta formeln för \\(n=p\\). Då</p><p>\\[S_{p+1}=\\frac{p^2(p+1)^2}{4}+(p+1)^3=(p+1)^2\\left(\\frac{p^2}{4}+p+1\\right)\\]</p><p>\\[=(p+1)^2\\frac{(p+2)^2}{4}=\\frac{(p+1)^2((p+1)+1)^2}{4}.\\]</p><p>Det är precis formeln för \\(p+1\\).</p>",
    "id": "2.45"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis för Fibonacci-summa",
    "poang": "0/1/3",
    "t": "<p>Fibonacciföljden definieras av \\(F_1=F_2=1\\) och \\(F_{n+2}=F_{n+1}+F_n\\). Visa att</p><p>\\[\\sum_{n=1}^{k}F_n=F_{k+2}-1\\]</p><p>för alla \\(k\\ge1\\).</p>",
    "s": "<p><strong>Bas:</strong> \\(k=1\\): \\(F_1=1=F_3-1=2-1\\).</p><p>Anta \\(\\sum_{n=1}^{k}F_n=F_{k+2}-1\\). Då</p><p>\\[\\sum_{n=1}^{k+1}F_n=F_{k+2}-1+F_{k+1}=F_{k+3}-1\\]</p><p>genom Fibonaccis rekursion. Alltså gäller formeln för \\(k+1\\).</p>",
    "id": "2.46"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "C",
    "typ": "induktionsbevis för linjär summa",
    "poang": "0/2/0",
    "t": "<p>Visa med induktion att \\(2+5+8+\\cdots+(3n-1)=\\frac{n(3n+1)}2\\).</p>",
    "s": "<p>Basfallet \\(n=1\\) ger 2 i båda led. Anta formeln för \\(n=k\\). Nästa term är \\(3(k+1)-1=3k+2\\):</p><p>\\[\\frac{k(3k+1)}2+3k+2=\\frac{3k^2+7k+4}{2}=\\frac{(k+1)(3k+4)}2,\\]</p><p>vilket är formeln med \\(n=k+1\\).</p>",
    "id": "2.47"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis av olikhet",
    "poang": "0/1/2",
    "t": "<p>Visa med induktion att \\(2^n\\ge n+1\\) för alla heltal \\(n\\ge0\\).</p>",
    "s": "<p>Bas \\(n=0\\): \\(1\\ge1\\). Anta \\(2^k\\ge k+1\\). Då \\(2^{k+1}=2\\cdot2^k\\ge2(k+1)=2k+2\\ge k+2\\) för \\(k\\ge0\\). Därmed gäller olikheten för \\(k+1\\).</p>",
    "id": "2.48"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis av delbarhet med faktoruppdelning",
    "poang": "0/1/2",
    "t": "<p>Visa med induktion att \\(7^n-1\\) är delbart med 6 för alla positiva heltal \\(n\\).</p>",
    "s": "<p>Bas \\(n=1\\): \\(7-1=6\\). Anta \\(7^k-1=6m\\). Då</p><p>\\[7^{k+1}-1=7(7^k-1)+6=6(7m+1),\\]</p><p>så även nästa fall är delbart med 6.</p>",
    "id": "2.49"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "hitta fel i induktionsbevis",
    "poang": "0/0/3",
    "t": "<p>En elev försöker bevisa att alla positiva heltal är lika genom induktion och säger: ”Anta att alla tal från 1 till \\(k\\) är lika. Då överlappar mängderna \\(\\{1,\\ldots,k\\}\\) och \\(\\{2,\\ldots,k+1\\}\\), så även \\(k+1\\) måste vara lika med de andra.” Var brister argumentet?</p>",
    "s": "<p>Överlappningsargumentet fungerar bara om de två mängderna faktiskt har ett gemensamt element. I steget från \\(k=1\\) till \\(k=2\\) är mängderna \\(\\{1\\}\\) och \\(\\{2\\}\\) disjunkta. Därför kan man inte koppla ihop de två påståendena. <strong>Induktionssteget gäller alltså inte för basövergången.</strong></p>",
    "id": "2.50"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "C",
    "typ": "motsägelsebevis av irrationalitet",
    "poang": "0/2/0",
    "t": "<p>Visa med motsägelsebevis att \\(\\sqrt2\\) är irrationellt.</p>",
    "s": "<p>Anta motsatsen: \\(\\sqrt2=p/q\\) i förkortad form. Då \\(p^2=2q^2\\), så \\(p^2\\) och därmed \\(p\\) är jämnt. Sätt \\(p=2r\\). Då \\(4r^2=2q^2\\), alltså \\(q^2=2r^2\\), så även \\(q\\) är jämnt. Då har \\(p\\) och \\(q\\) gemensam faktor 2, i strid med att bråket var förkortat. Alltså är <strong>\\(\\sqrt2\\) irrationellt</strong>.</p>",
    "id": "2.51"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "A",
    "typ": "motsägelsebevis om oändligt många primtal",
    "poang": "0/1/2",
    "t": "<p>Visa med ett motsägelsebevis att det finns oändligt många primtal.</p>",
    "s": "<p>Anta att det bara finns ändligt många primtal \\(p_1,\\ldots,p_n\\). Betrakta \\(N=p_1p_2\\cdots p_n+1\\). Talet \\(N>1\\) har en primtalsdelare \\(p\\). Men inget \\(p_i\\) delar \\(N\\), eftersom division med \\(p_i\\) ger resten 1. Därmed finns ett primtal som inte finns i listan, en motsägelse. Alltså finns <strong>oändligt många primtal</strong>.</p>",
    "id": "2.52"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "partiell integration två gånger",
    "poang": "0/2/1",
    "t": "<p>Beräkna \\(\\displaystyle\\int x^2e^{-2x}\\,dx\\).</p>",
    "s": "<p>Partiell integration två gånger ger</p><p>\\[\\int x^2e^{-2x}dx=-\\frac12x^2e^{-2x}+\\int xe^{-2x}dx\\]</p><p>\\[=-\\frac12x^2e^{-2x}-\\frac12xe^{-2x}-\\frac14e^{-2x}+C.\\]</p><p>Alltså <strong>\\(-e^{-2x}(\\frac12x^2+\\frac12x+\\frac14)+C\\)</strong>.</p>",
    "id": "3.01"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration av x e^x",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\displaystyle\\int xe^x\\,dx\\).</p>",
    "s": "<p>Välj \\(u=x\\), \\(dv=e^x dx\\). Då \\(du=dx\\), \\(v=e^x\\): <strong>\\(xe^x-e^x+C=e^x(x-1)+C\\)</strong>.</p>",
    "id": "3.02"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "partiell integration logaritm",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(\\displaystyle\\int \\ln x\\,dx\\), \\(x>0\\).</p>",
    "s": "<p>Skriv \\(\\ln x=1\\cdot\\ln x\\). Med \\(u=\\ln x\\), \\(dv=dx\\) fås \\(du=dx/x\\), \\(v=x\\):</p><p><strong>\\(x\\ln x-x+C\\)</strong>.</p>",
    "id": "3.03"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "konvergens p-integral",
    "poang": "0/1/2",
    "t": "<p>För vilka värden på parametern \\(p\\) konvergerar den generaliserade integralen \\(\\displaystyle\\int_1^\\infty x^{-p}\\,dx\\)?</p>",
    "s": "<p>För \\(p\\ne1\\): \\(\\int_1^R x^{-p}dx=\\frac{R^{1-p}-1}{1-p}\\). Gränsvärdet är ändligt exakt när \\(1-p<0\\), alltså <strong>\\(p>1\\)</strong>. För \\(p=1\\) fås \\(\\ln R\\to\\infty\\).</p>",
    "id": "3.04"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "beräkna konvergent generaliserad integral",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(\\displaystyle\\int_0^\\infty e^{-3x}\\,dx\\).</p>",
    "s": "<p>\\[\\lim_{R\\to\\infty}\\left[-\\frac13e^{-3x}\\right]_0^R=\\frac13.\\] <strong>Integralen är \\(1/3\\)</strong>.</p>",
    "id": "3.05"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "A",
    "typ": "parameter och konvergens nära noll",
    "poang": "0/1/2",
    "t": "<p>För vilka reella \\(a\\) konvergerar \\(\\displaystyle\\int_0^1 x^a\\,dx\\)?</p>",
    "s": "<p>För \\(a\\ne-1\\): \\(\\int_\\varepsilon^1x^a dx=\\frac{1-\\varepsilon^{a+1}}{a+1}\\). När \\(\\varepsilon\\to0^+\\) är gränsvärdet ändligt exakt om \\(a+1>0\\). För \\(a=-1\\) divergerar logaritmen. Alltså <strong>\\(a>-1\\)</strong>.</p>",
    "id": "3.06"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "C",
    "typ": "linjär approximation kring punkt",
    "poang": "1/1/0",
    "t": "<p>Bestäm en linjär approximation till \\(f(x)=\\sqrt{x}\\) kring \\(x=9\\), och använd den för att uppskatta \\(\\sqrt{9,2}\\).</p>",
    "s": "<p>\\(f(9)=3\\) och \\(f'(x)=1/(2\\sqrt{x})\\), så \\(f'(9)=1/6\\). Linjäriseringen är</p><p>\\[L(x)=3+\\frac16(x-9).\\]</p><p>Därför \\(\\sqrt{9,2}\\approx L(9,2)=3+0,2/6=\\mathbf{3,0333}.\\)</p>",
    "id": "3.07"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "A",
    "typ": "felbedömning för linjär approximation",
    "poang": "0/1/2",
    "t": "<p>Funktionen \\(f(x)=\\ln x\\) approximeras linjärt kring \\(x=1\\). Använd approximationen för att uppskatta \\(\\ln(1,04)\\), och avgör utan räknare om approximationen är för stor eller för liten.</p>",
    "s": "<p>\\(f(1)=0\\), \\(f'(1)=1\\), så \\(L(x)=x-1\\). Därför \\(\\ln(1,04)\\approx\\mathbf{0,04}\\). Eftersom \\(f''(x)=-1/x^2<0\\) är \\(\\ln x\\) konkav och tangenten ligger ovanför grafen. Approximationen är alltså <strong>för stor</strong>.</p>",
    "id": "3.08"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "relaterade förändringshastigheter två fordon",
    "poang": "0/3/0",
    "t": "<p>Två raka vägar korsar varandra vinkelrätt. Bil A är 300 m norr om korsningen och kör söderut med 90 km/h. Bil B är 400 m öster om korsningen och kör österut. I detta ögonblick ökar avståndet mellan bilarna med 18 km/h. Bestäm bil B:s hastighet.</p>",
    "s": "<p>Använd km: \\(x=0,4\\), \\(y=0,3\\), \\(s=0,5\\). Eftersom A närmar sig korsningen är \\(y'=-90\\). B har \\(x'=v\\), och \\(s'=18\\). Derivera \\(s^2=x^2+y^2\\):</p><p>\\[ss'=xx'+yy'.\\]</p><p>\\[0,5\\cdot18=0,4v+0,3(-90).\\]</p><p>\\(9=0,4v-27\\), så <strong>\\(v=90\\text{ km/h}\\)</strong>.</p>",
    "id": "3.09"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "relaterade förändringshastigheter ballong",
    "poang": "0/2/1",
    "t": "<p>En ballong stiger lodrätt med 1,5 m/s. När den är 18 m över marken passerar en cyklist rakt under den och fortsätter horisontellt med 6,0 m/s. Hur snabbt ökar avståndet mellan dem 4,0 s senare?</p>",
    "s": "<p>Efter 4 s är höjden \\(y=24\\) m och den horisontella sträckan \\(x=24\\) m. Avståndet är \\(s=24\\sqrt2\\). Derivering av \\(s^2=x^2+y^2\\) ger</p><p>\\[s'=\frac{xx'+yy'}s=\\frac{24\\cdot6+24\\cdot1,5}{24\\sqrt2}=\\frac{7,5}{\\sqrt2}\\approx\\mathbf{5,30\\text{ m/s}}.\\]</p>",
    "id": "3.10"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "A",
    "typ": "relaterade förändringshastigheter konisk tank",
    "poang": "0/2/1",
    "t": "<p>En upp-och-nedvänd konisk tank har höjden 3,0 m och toppradien 1,5 m. Vatten pumpas in med 50 liter/min. Hur snabbt stiger vattennivån när djupet är 2,0 m?</p>",
    "s": "<p>Likformighet ger \\(r/h=1,5/3=1/2\\), alltså \\(r=h/2\\). Volymen är</p><p>\\[V=\\frac13\\pi r^2h=\\frac{\\pi}{12}h^3.\\]</p><p>Därför \\(V'=\\frac\\pi4h^2h'\\). Med \\(V'=0,050\\,\\text{m}^3/\\text{min}\\) och \\(h=2\\):</p><p>\\[h'=\\frac{0,050}{\\pi}\\approx\\mathbf{0,0159\\text{ m/min}}\\] (cirka 1,59 cm/min).</p>",
    "id": "3.11"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "optimering med integralvillkor",
    "poang": "0/2/0",
    "t": "<p>För \\(a>0\\) ges \\(f(x)=ax-x^2\\). Bestäm \\(a\\) så att arean mellan grafen och \\(x\\)-axeln mellan funktionens nollställen är \\(9/2\\).</p>",
    "s": "<p>Nollställena är 0 och \\(a\\). Arean är</p><p>\\[\\int_0^a(ax-x^2)dx=\\left[\\frac a2x^2-\\frac13x^3\\right]_0^a=\\frac{a^3}{6}.\\]</p><p>Kravet \\(a^3/6=9/2\\) ger \\(a^3=27\\), alltså <strong>\\(a=3\\)</strong>.</p>",
    "id": "3.12"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "C",
    "typ": "värdera CAS-resultat för generaliserad integral",
    "poang": "0/2/0",
    "t": "<p>Ett CAS ger värdet \\(-1\\) för en primitiv funktion när du undersöker \\(\\int_1^\\infty \\frac1{x^{1/2}}\\,dx\\). Förklara varför man inte kan acceptera detta som integralens värde och avgör om integralen konvergerar.</p>",
    "s": "<p>En generaliserad integral måste behandlas som ett gränsvärde:</p><p>\\[\\int_1^R x^{-1/2}dx=2\\sqrt R-2.\\]</p><p>När \\(R\\to\\infty\\) går uttrycket mot \\(\\infty\\). Integralen <strong>divergerar</strong>. Ett CAS-uttryck för en primitiv funktion ersätter inte konvergensprövningen.</p>",
    "id": "3.13"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "andra ordningens homogen med begynnelsevillkor",
    "poang": "1/0/0",
    "t": "<p>Bestäm den lösning till \\(y''+4y'-5y=0\\) som uppfyller \\(y(0)=0\\) och \\(y'(0)=6\\).</p>",
    "s": "<p>Karakteristiska ekvationen \\(r^2+4r-5=0\\) har rötterna \\(r=1\\) och \\(r=-5\\). Alltså \\(y=Ae^x+Be^{-5x}\\). Villkoren ger \\(A+B=0\\) och \\(A-5B=6\\), alltså \\(A=1\\), \\(B=-1\\). <strong>\\(y=e^x-e^{-5x}\\)</strong>.</p>",
    "id": "4.01"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "bestäm funktion från andra ordningens begynnelsevärde",
    "poang": "1/0/0",
    "t": "<p>Funktionen \\(y=f(x)\\) löser \\(y''+7y'+10y=0\\) och uppfyller \\(y(0)=0\\), \\(y'(0)=3\\). Bestäm \\(y\\).</p>",
    "s": "<p>Rötterna är \\(-2\\) och \\(-5\\), så \\(y=Ae^{-2x}+Be^{-5x}\\). Villkoren ger \\(A+B=0\\), \\(-2A-5B=3\\), alltså \\(A=1\\), \\(B=-1\\). <strong>\\(y=e^{-2x}-e^{-5x}\\)</strong>.</p>",
    "id": "4.02"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "allmän lösning separabel linjär differentialekvation",
    "poang": "1/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y'=3y\\).</p>",
    "s": "<p>En funktion vars derivata är tre gånger funktionen har formen <strong>\\(y=Ce^{3x}\\)</strong>.</p>",
    "id": "4.03"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "andra ordningens homogen med två reella rötter",
    "poang": "2/0/0",
    "t": "<p>Lös differentialekvationen \\(y''-12y'+32y=0\\).</p>",
    "s": "<p>\\(r^2-12r+32=0=(r-4)(r-8)\\). Alltså <strong>\\(y=Ae^{4x}+Be^{8x}\\)</strong>.</p>",
    "id": "4.04"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "ange en partikulär lösning till homogen differentialekvation",
    "poang": "2/0/0",
    "t": "<p>Differentialekvationen \\(y''+8y'-9y=0\\) har många lösningar. Bestäm en enda icke-nollskild lösning.</p>",
    "s": "<p>Karakteristiska ekvationen har rötterna 1 och −9. Därför är till exempel <strong>\\(y=e^x\\)</strong> en lösning.</p>",
    "id": "4.05"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "andra ordningens begynnelsevärdesproblem",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+6y'+8y=0\\) med \\(y(0)=1\\) och \\(y'(0)=0\\).</p>",
    "s": "<p>Rötterna är −2 och −4: \\(y=Ae^{-2x}+Be^{-4x}\\). Villkoren ger \\(A+B=1\\) och \\(-2A-4B=0\\). Därav \\(A=2\\), \\(B=-1\\). <strong>\\(y=2e^{-2x}-e^{-4x}\\)</strong>.</p>",
    "id": "4.06"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "andra ordningens begynnelsevärde med positiva rötter",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''-8y'+12y=0\\) med \\(y(0)=1\\) och \\(y'(0)=0\\).</p>",
    "s": "<p>Rötterna är 2 och 6: \\(y=Ae^{2x}+Be^{6x}\\). \\(A+B=1\\) och \\(2A+6B=0\\), vilket ger \\(A=3/2\\), \\(B=-1/2\\). <strong>\\(y=\\frac32e^{2x}-\\frac12e^{6x}\\)</strong>.</p>",
    "id": "4.07"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "linjär inhomogen första ordningens differentialekvation",
    "poang": "2/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y'=2y+6x\\).</p>",
    "s": "<p>Skriv \\(y'-2y=6x\\). Den homogena lösningen är \\(Ce^{2x}\\). Sök en partikulär lösning \\(y_p=ax+b\\). Då \\(a-2(ax+b)=6x\\), vilket ger \\(a=-3\\), \\(b=-3/2\\). Alltså <strong>\\(y=Ce^{2x}-3x-\\frac32\\)</strong>.</p>",
    "id": "4.08"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "linjär inhomogen första ordningens differentialekvation med polynom",
    "poang": "3/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y'=3y-x\\).</p>",
    "s": "<p>\\(y'-3y=-x\\). Homogen lösning: \\(Ce^{3x}\\). Sök \\(y_p=ax+b\\): \\(a-3(ax+b)=-x\\), så \\(a=1/3\\), \\(b=1/9\\). <strong>\\(y=Ce^{3x}+\\frac{x}{3}+\\frac19\\)</strong>.</p>",
    "id": "4.09"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "E",
    "typ": "andra ordningens homogen med dubbelrot",
    "poang": "3/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''+4y'+4y=0\\).</p>",
    "s": "<p>Karakteristiska ekvationen \\((r+2)^2=0\\) har dubbelroten \\(-2\\). Därför <strong>\\(y=(A+Bx)e^{-2x}\\)</strong>.</p>",
    "id": "4.10"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "E",
    "typ": "radioaktivt sönderfall som differentialekvation",
    "poang": "4/0/0",
    "t": "<p>I ett arkeologiskt prov sönderfaller kol-14 med en hastighet som är 0,012 % av den mängd som finns kvar per år. I provet återstår 52 % av mängden i levande material.</p><ol type=\"a\"><li>Ställ upp en differentialekvation för mängden \\(C(t)\\).</li><li>Beräkna ungefär hur gammalt provet är.</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(C'=-0,00012C\\)</strong>.</li><li>\\(C(t)=C_0e^{-0,00012t}\\). Villkoret \\(C/C_0=0,52\\) ger \\(e^{-0,00012t}=0,52\\). Därför \\(t=-\\ln(0,52)/0,00012\\approx\\mathbf{5450\\text{ år}}\\).</li></ol>",
    "id": "4.11"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "C",
    "typ": "komplexa rötter i karakteristisk ekvation",
    "poang": "2/2/0",
    "t": "<p>Lös differentialekvationerna.</p><ol type=\"a\"><li>\\(y'-8y=0\\) med \\(y(0)=10\\).</li><li>\\(y''+4y'+13y=0\\).</li></ol>",
    "s": "<ol type=\"a\"><li><strong>\\(y=10e^{8x}\\)</strong>.</li><li>Karakteristiska ekvationen ger \\(r=-2\\pm3i\\). Därför <strong>\\(y=e^{-2x}(A\\cos3x+B\\sin3x)\\)</strong>.</li></ol>",
    "id": "4.12"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "A",
    "typ": "allmän lösning med komplexa rötter",
    "poang": "1/1/1",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''+4y'+13y=0\\) och kontrollera genom insättning vilken differentialekvation lösningen uppfyller.</p>",
    "s": "<p>Rötterna till \\(r^2+4r+13=0\\) är \\(-2\\pm3i\\). Därför</p><p><strong>\\[y=e^{-2x}(A\\cos3x+B\\sin3x).\\]</strong></p><p>Deriverar man två gånger och bildar \\(y''+4y'+13y\\) tar både cosinus- och sinustermerna ut varandra, vilket ger 0.</p>",
    "id": "4.13"
  },
  {
    "kap": 4,
    "omr": "verifiera_losningar",
    "niva": "E",
    "typ": "verifiera given lösning",
    "poang": "2/0/0",
    "t": "<p>Visa att \\(y=4e^{-2x}\\) är en lösning till \\(y'+2y=0\\).</p>",
    "s": "<p>\\(y'=-8e^{-2x}\\). Då \\(y'+2y=-8e^{-2x}+8e^{-2x}=0\\). Alltså är funktionen <strong>en lösning</strong>.</p>",
    "id": "4.14"
  },
  {
    "kap": 4,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "typ": "ordning och homogenitet",
    "poang": "2/0/0",
    "t": "<p>Bestäm differentialekvationens ordning och avgör om den är homogen eller inhomogen:</p><p>\\[y''-5y'+6y=4e^x.\\]</p>",
    "s": "<p>Högsta derivatan är \\(y''\\), så ekvationen är av <strong>andra ordningen</strong>. Högerledet är inte noll, så den är <strong>inhomogen</strong>.</p>",
    "id": "4.15"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "C",
    "typ": "tolka tecken i Newtons avsvalningslag",
    "poang": "0/2/0",
    "t": "<p>En temperaturmodell skrivs \\(T'=k(T-180)\\). Ett föremål som från början är 20 °C värms i en ugn på 180 °C. Vilket tecken måste \\(k\\) ha? Motivera.</p>",
    "s": "<p>När \\(T<180\\) är \\(T-180<0\\), samtidigt måste \\(T'>0\\) eftersom föremålet värms. Produkten \\(k(T-180)\\) ska alltså vara positiv. Därför måste <strong>\\(k<0\\)</strong>.</p>",
    "id": "4.16"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "C",
    "typ": "Newtons avsvalningslag från mätdata",
    "poang": "0/2/1",
    "t": "<p>Kaffe har temperaturen 82 °C när det ställs i ett rum som håller 21 °C. Efter 6 minuter är temperaturen 67 °C. Anta Newtons avsvalningslag.</p><p>Bestäm kaffets temperatur efter 20 minuter.</p>",
    "s": "<p>Modellen är \\(T=21+61e^{-kt}\\). Villkoret \\(T(6)=67\\) ger \\(46=61e^{-6k}\\), alltså \\(k=-\\ln(46/61)/6\\approx0,0470\\). Då</p><p>\\[T(20)=21+61e^{-0,0470\\cdot20}\\approx\\mathbf{44,8\\,^{\\circ}C}.\\]</p>",
    "id": "4.17"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "A",
    "typ": "blandningsproblem med differentialekvation",
    "poang": "1/1/1",
    "t": "<p>En tank innehåller 200 liter saltlösning med 1000 g salt. Lösning med salthalten 2,0 g/liter rinner in med 6,0 l/min, och väl blandad lösning rinner ut med samma flöde.</p><ol type=\"a\"><li>Ställ upp en differentialekvation för saltmängden \\(y(t)\\) i gram.</li><li>Bestäm saltmängden efter 15 minuter.</li></ol>",
    "s": "<ol type=\"a\"><li>Inflödet salt är \\(2,0\\cdot6,0=12\\) g/min. Utflödet är \\((y/200)\\cdot6=0,03y\\). Alltså <strong>\\(y'=12-0,03y,\\ y(0)=1000\\)</strong>.</li><li>Jämviktsvärdet är 400 g, så \\(y=400+600e^{-0,03t}\\). Därför \\(y(15)=400+600e^{-0,45}\\approx\\mathbf{783\\text{ g}}\\).</li></ol>",
    "id": "4.18"
  },
  {
    "kap": 4,
    "omr": "eulers_stegmetod",
    "niva": "E",
    "typ": "Eulersteg flera steg",
    "poang": "2/0/0",
    "t": "<p>Använd Eulers stegmetod med steglängden \\(h=0,5\\) för att approximera \\(y(1)\\) om \\(y'=x+y\\) och \\(y(0)=1\\).</p>",
    "s": "<p>Start \\((0,1)\\). Första steg: \\(y_1=1+0,5(0+1)=1,5\\) vid \\(x=0,5\\). Andra steg: \\(y_2=1,5+0,5(0,5+1,5)=2,5\\). <strong>\\(y(1)\\approx2,5\\)</strong>.</p>",
    "id": "4.19"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "C",
    "typ": "tolka lutningar i riktningsfält utan figur",
    "poang": "0/2/0",
    "t": "<p>För differentialekvationen \\(y'=x-y\\), bestäm riktningsfältets lutning i punkterna \\((0,0)\\), \\((2,1)\\) och \\((1,3)\\). Förklara också på vilken linje fältet har horisontella riktningsstreck.</p>",
    "s": "<p>Lutningen är \\(x-y\\). Den blir <strong>0, 1 och −2</strong> i de tre punkterna. Horisontella streck fås när \\(x-y=0\\), alltså längs <strong>linjen \\(y=x\\)</strong>.</p>",
    "id": "4.20"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "C",
    "typ": "inhomogen första ordningens differentialekvation med exponentialterm",
    "poang": "1/2/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y'-2y=e^{3x}\\).</p>",
    "s": "<p>Homogen lösning: \\(y_h=Ce^{2x}\\). Sök en partikulär lösning \\(y_p=Ae^{3x}\\). Då \\(3Ae^{3x}-2Ae^{3x}=e^{3x}\\), så \\(A=1\\). <strong>\\(y=Ce^{2x}+e^{3x}\\)</strong>.</p>",
    "id": "4.21"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "C",
    "typ": "begynnelsevillkor vid dubbelrot",
    "poang": "1/2/0",
    "t": "<p>Lös \\(y''-6y'+9y=0\\) med \\(y(0)=2\\) och \\(y'(0)=1\\).</p>",
    "s": "<p>Dubbelroten är \\(r=3\\), så \\(y=(A+Bx)e^{3x}\\). \\(y(0)=A=2\\). Vidare \\(y'=e^{3x}[B+3(A+Bx)]\\), så \\(y'(0)=B+3A=1\\), vilket ger \\(B=-5\\). <strong>\\(y=(2-5x)e^{3x}\\)</strong>.</p>",
    "id": "4.22"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "A",
    "typ": "begynnelsevillkor med komplexa rötter",
    "poang": "0/2/2",
    "t": "<p>Lös \\(y''+2y'+10y=0\\) med \\(y(0)=3\\) och \\(y'(0)=0\\).</p>",
    "s": "<p>Rötterna är \\(-1\\pm3i\\), så \\(y=e^{-x}(A\\cos3x+B\\sin3x)\\). Av \\(y(0)=3\\) fås \\(A=3\\). Derivatan vid 0 är \\(-A+3B=0\\), så \\(B=1\\). <strong>\\(y=e^{-x}(3\\cos3x+\\sin3x)\\)</strong>.</p>",
    "id": "4.23"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "A",
    "typ": "terminalhastighet med linjär luftmotståndsmodell",
    "poang": "0/2/2",
    "t": "<p>Ett fallande föremål modelleras av \\(v'=9,82-0,40v\\), där \\(v\\) mäts i m/s och \\(t\\) i s. Föremålet släpps från vila.</p><ol type=\"a\"><li>Bestäm \\(v(t)\\).</li><li>Bestäm sträckan föremålet fallit efter 2,0 s.</li></ol>",
    "s": "<p>Jämviktsfarten är \\(9,82/0,40=24,55\\). Med \\(v(0)=0\\): <strong>\\(v(t)=24,55(1-e^{-0,40t})\\)</strong>.</p><p>Sträckan är integralen av hastigheten:</p><p>\\[s(t)=24,55t-\\frac{24,55}{0,40}(1-e^{-0,40t}).\\]</p><p>Vid \\(t=2\\): <strong>\\(s(2)\\approx15,3\\text{ m}\\)</strong>.</p>",
    "id": "4.24"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "C",
    "typ": "kontrollera digital lösning till differentialekvation",
    "poang": "0/2/0",
    "t": "<p>Ett digitalt verktyg påstår att lösningen till \\(y'=2y-x\\), \\(y(0)=1\\), är \\(y=\\frac{x}{2}+\\frac14+\\frac34e^{2x}\\). Kontrollera resultatet utan att lösa differentialekvationen från början.</p>",
    "s": "<p>Derivera: \\(y'=\\frac12+\\frac32e^{2x}\\). Högerledet blir</p><p>\\[2y-x=x+\\frac12+\\frac32e^{2x}-x=\\frac12+\\frac32e^{2x}=y'.\\]</p><p>Dessutom \\(y(0)=1/4+3/4=1\\). Resultatet är alltså <strong>korrekt</strong>.</p>",
    "id": "4.25"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "A",
    "typ": "jämföra Eulerapproximation med exakt lösning",
    "poang": "0/1/2",
    "t": "<p>För begynnelsevärdesproblemet \\(y'=y\\), \\(y(0)=1\\), används Eulers metod på intervallet \\([0,1]\\).</p><ol type=\"a\"><li>Bestäm approximationen av \\(y(1)\\) med \\(h=0,5\\).</li><li>Bestäm approximationen med \\(h=0,25\\).</li><li>Jämför med exakt värde och kommentera hur steglängden påverkar felet.</li></ol>",
    "s": "<ol type=\"a\"><li>Två steg: \\(1\\to1,5\\to2,25\\), alltså <strong>2,25</strong>.</li><li>Fyra steg multiplicerar varje gång med \\(1,25\\): \\(1,25^4=\\mathbf{2,4414}\\).</li><li>Exakt är \\(e\\approx2,7183\\). Felen är cirka 0,4683 respektive 0,2769. <strong>Mindre steglängd ger här bättre approximation</strong>, men kräver fler steg.</li></ol>",
    "id": "4.26"
  }
];
