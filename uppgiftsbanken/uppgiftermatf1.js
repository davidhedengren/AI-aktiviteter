/* uppgiftermatf1.js — Matematik – fördjupning nivå 1.
   Banken bygger på uppladdade övningsblad, kursprov och bedömningsmaterial,
   med den aktuella ämnesplanen som gräns för vilket innehåll som ingår.
   SVG-figurer används i uppgifter när de tillför matematisk information.
   I facit används SVG endast när figuren tillför ny lösningsinformation,
   t.ex. markeringar, hjälplinjer eller andra visuella steg.
   Grafteori ingår inte eftersom det inte längre hör till den aktuella ämnesplanen. */

window.BANKMATF1 = [
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "skriva mängd med mängdbyggarnotation",
    "poang": "1/0/0",
    "t": "<p>Skriv med mängdsymboler mängden av alla reella tal som är mindre än 100.</p>",
    "s": "<p><strong>Idé:</strong> Mängdbyggarnotation beskriver både vilket talområde elementen kommer från och vilket villkor de ska uppfylla.</p><p>Här ska elementen vara reella tal och villkoret är att talet ska vara mindre än 100. En möjlig skrivning är därför</p><p><strong>\\(A=\\{x\\in\\mathbb R\\mid x&lt;100\\}\\)</strong>.</p>",
    "id": "1.01"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "bestämma element ur mängdbyggarnotation",
    "poang": "1/0/0",
    "t": "<p>Bestäm elementen i mängden \\(A=\\{n\\in\\mathbb Z\\mid |n|&lt;4\\}\\).</p>",
    "s": "<p><strong>Idé:</strong> Villkoret \\(|n|&lt;4\\) betyder att heltalet \\(n\\) ligger mindre än 4 enheter från 0.</p><p>De heltal som uppfyller detta är</p><p><strong>\\(A=\\{-3,-2,-1,0,1,2,3\\}\\)</strong>.</p>",
    "id": "1.02"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "skriva mängder på listform",
    "poang": "3/0/0",
    "t": "<p>Skriv följande mängder på listform.</p><ol type=\"a\"><li>Veckans dagar.</li><li>Heltalen strikt mellan 1 och 2.</li><li>De naturliga talen från 1 till och med 3.</li></ol>",
    "s": "<ol type=\"a\"><li>På listform skriver vi ut alla element: <strong>\\(\\{\\text{måndag, tisdag, onsdag, torsdag, fredag, lördag, söndag}\\}\\)</strong>.</li><li>Det finns inget heltal som är större än 1 och samtidigt mindre än 2. Mängden är därför <strong>\\(\\varnothing\\)</strong>.</li><li>De naturliga talen från 1 till och med 3 är <strong>\\(\\{1,2,3\\}\\)</strong>.</li></ol>",
    "id": "1.03"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "snitt och union av ändliga mängder",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,3,4,5,6,8\\}\\) och \\(B=\\{3,4,5,6,7,8,9\\}\\).</p><ol type=\"a\"><li>Bestäm \\(A\\cap B\\).</li><li>Bestäm \\(A\\cup B\\).</li></ol>",
    "s": "<p><strong>Metod:</strong> Översätt först operationen: union betyder ”i minst en”, snitt betyder ”i båda” och differens betyder ”i den första men inte i den andra”.</p><ol type=\"a\"><li>Gemensamma element är 3, 4, 5, 6 och 8, alltså <strong>\\(A\\cap B=\\{3,4,5,6,8\\}\\)</strong>.</li><li>Alla element som finns i minst en av mängderna ger <strong>\\(A\\cup B=\\{1,3,4,5,6,7,8,9\\}\\)</strong>.</li></ol>",
    "id": "1.04"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "tolka antal i Venn-diagram",
    "poang": "3/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder A, B och C\">\n<rect width=\"420\" height=\"270\" fill=\"white\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"255\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"210\" cy=\"185\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"112\" y=\"50\" font-size=\"16\">A</text><text x=\"296\" y=\"50\" font-size=\"16\">B</text><text x=\"210\" y=\"258\" font-size=\"16\">C</text>\n<text x=\"125\" y=\"115\" font-size=\"15\">10</text><text x=\"285\" y=\"115\" font-size=\"15\">1</text><text x=\"205\" y=\"220\" font-size=\"15\">9</text>\n<text x=\"205\" y=\"90\" font-size=\"15\">10</text><text x=\"160\" y=\"175\" font-size=\"15\">6</text><text x=\"258\" y=\"175\" font-size=\"15\">2</text>\n<text x=\"207\" y=\"148\" font-size=\"15\" font-weight=\"700\">2</text>\n</svg></span><p>I diagrammet är \\(A\\), \\(B\\) och \\(C\\) tre elevgrupper.</p><ol type=\"a\"><li>Bestäm \\(|A\\cap B|\\).</li><li>Bestäm \\(|A\\cup C|\\).</li><li>Beskriv med ord mängden \\(A\\setminus B\\).</li></ol>",
    "s": "<p><strong>Metod:</strong> Koppla symbolerna till rätt områden i diagrammet innan du skriver svaret.</p><ol type=\"a\"><li>I \\(A\\cap B\\) ingår områdena med 10 och 2: <strong>12</strong>.</li><li>Alla områden som ligger i \\(A\\) eller \\(C\\): \\(10+10+6+2+2+9=39\\). <strong>39</strong>.</li><li><strong>De som tillhör \\(A\\) men inte \\(B\\)</strong>.</li></ol>",
    "id": "1.05"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "räkna med union, snitt och tom mängd",
    "poang": "4/0/0",
    "t": "<p>Låt \\(A=\\{1,2,3,4,5,6,7\\}\\), \\(B=\\{1,3,5,7\\}\\) och \\(C=\\varnothing\\). Bestäm</p><ol type=\"a\"><li>\\(A\\cup B\\)</li><li>\\(B\\cap C\\)</li><li>\\(C\\cup A\\)</li><li>\\(B\\cap(A\\cup C)\\).</li></ol>",
    "s": "<p><strong>Metod:</strong> Översätt först operationen: union betyder ”i minst en”, snitt betyder ”i båda” och differens betyder ”i den första men inte i den andra”.</p><ol type=\"a\"><li><strong>\\(A\\)</strong>, eftersom \\(B\\subseteq A\\).</li><li><strong>\\(\\varnothing\\)</strong>.</li><li><strong>\\(A\\)</strong>.</li><li>\\(A\\cup C=A\\), och därför <strong>\\(B\\cap A=B\\)</strong>.</li></ol>",
    "id": "1.06"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "markera mängder i Venn-diagram",
    "poang": "4/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder A, B och C\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Rita ett Venn-diagram med tre mängder \\(A\\), \\(B\\) och \\(C\\). Markera följande områden.</p><ol type=\"a\"><li>\\(A\\cup B\\)</li><li>\\(A\\cap(B\\cup C)\\)</li><li>\\(A^c\\cup B\\)</li><li>\\((B\\cup C)\\setminus A\\)</li></ol>",
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
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder A, B och C\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Ett område i ett Venn-diagram består av de element som ligger i både \\(A\\), \\(B\\) och \\(C\\). Beskriv området med mängdsymboler.</p>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där snittet av alla tre mängder är markerat\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"v3A\"><circle cx=\"165\" cy=\"118\" r=\"82\"/></clipPath>\n  <clipPath id=\"v3B\"><circle cx=\"265\" cy=\"118\" r=\"82\"/></clipPath>\n  <clipPath id=\"v3C\"><circle cx=\"215\" cy=\"190\" r=\"76\"/></clipPath>\n</defs>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#CC7A3B\" fill-opacity=\".5\" clip-path=\"url(#v3B)\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#CC7A3B\" fill-opacity=\".7\" clip-path=\"url(#v3C)\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"none\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p><strong>Metod:</strong> Området ska ligga i alla tre mängder samtidigt.</p><p>Det markerade området är därför <strong>\\(A\\cap B\\cap C\\)</strong>.</p>",
    "id": "1.09"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "C",
    "typ": "symmetrisk differens med union och snitt",
    "poang": "2/1/0",
    "t": "<p>Låt \\(A=\\{2,3,4,5,6,7\\}\\) och \\(B=\\{2,4,6,8,10\\}\\). Bestäm</p><p>\\[C=(A\\cup B)\\setminus(A\\cap B).\\]</p>",
    "s": "<p><strong>Metod:</strong> Översätt först operationen: union betyder ”i minst en”, snitt betyder ”i båda” och differens betyder ”i den första men inte i den andra”.</p><p>\\(A\\cup B=\\{2,3,4,5,6,7,8,10\\}\\) och \\(A\\cap B=\\{2,4,6\\}\\). När snittet tas bort återstår <strong>\\(C=\\{3,5,7,8,10\\}\\)</strong>.</p>",
    "id": "1.10"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "C",
    "typ": "beskriva samma mängd på flera sätt",
    "poang": "2/1/0",
    "t": "<p>Mängden \\(P=\\{2,4,6,8,10\\}\\) ska beskrivas på tre olika sätt: med ord, på listform och med mängdbyggarnotation.</p>",
    "s": "<p><strong>Metod:</strong> Läs villkoret som ett filter: vilka objekt får ingå och vilket talområde tillhör de?</p><p>Exempel:</p><p>Med ord: de positiva jämna heltalen mindre än 12.</p><p>Listform: \\(P=\\{2,4,6,8,10\\}\\).</p><p>Mängdbyggarnotation: <strong>\\(P=\\{2n\\mid n\\in\\mathbb Z,\\ 1\\le n\\le5\\}\\)</strong>.</p>",
    "id": "1.11"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "skriva mängd med mängdbyggare",
    "poang": "2/0/0",
    "id": "1.111",
    "t": "<p>Skriv mängden av alla jämna heltal mellan 2 och 20 med mängdbyggare.</p>",
    "s": "<p>Vi söker heltal som är jämna och ligger mellan 2 och 20. Ett tydligt sätt är att skriva</p><p><strong>\\(A=\\{x\\mid x\\in\\mathbb{Z},\\ 2\\le x\\le 20\\ \\text{och}\\ x\\ \\text{är jämnt}\\}\\)</strong>.</p><p>Man kan också skriva \\(A=\\{2n\\mid n\\in\\mathbb{Z},\\ 1\\le n\\le 10\\}\\).</p>"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "bestämma element i given mängd",
    "poang": "2/0/0",
    "id": "1.112",
    "t": "<p>Vilka element ingår i mängden</p><p>\\[B=\\{n\\mid n\\in\\mathbb{Z},\\ -3\\le n\\lt 4\\}?\\]</p>",
    "s": "<p>Mängden består av alla heltal från \\(-3\\) upp till men inte med 4.</p><p>Därför är</p><p><strong>\\(B=\\{-3,-2,-1,0,1,2,3\\}\\)</strong>.</p>"
  },
  {
    "kap": 1,
    "omr": "mangder_notation",
    "niva": "E",
    "typ": "mängdbyggare för intervall",
    "poang": "2/0/0",
    "t": "<p>Skriv mängden av alla heltal \\(x\\) som uppfyller \\(-2\\le x\\le5\\) med mängdbyggare.</p>",
    "s": "<p><strong>\\(\\{x\\mid x\\in\\mathbb Z,\\ -2\\le x\\le5\\}\\)</strong>.</p>",
    "id": "1.145"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "översätta områdesbeskrivning till mängdsymboler",
    "poang": "1/1/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med två mängder A och B\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>Beskriv följande två områden med mängdsymboler.</p><ol type=\"a\"><li>De element som ligger i \\(B\\) men inte i \\(A\\).</li><li>De element i grundmängden som ligger varken i \\(A\\) eller \\(B\\).</li></ol>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området B men inte A är markerat\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#5FA772\" fill-opacity=\".45\" mask=\"url(#mBonly)\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p><strong>a)</strong> ”I \\(B\\) men inte i \\(A\\)” betyder att vi tar bort den del av \\(B\\) som också ligger i \\(A\\). Det markerade området är därför <strong>\\(B\\setminus A\\)</strong>.</p><span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området utanför både A och B är markerat\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"#999\" fill-opacity=\".18\" mask=\"url(#mOutside)\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p><strong>b)</strong> ”Varken i \\(A\\) eller \\(B\\)” betyder att elementet ligger utanför hela unionen. Om grundmängden är given blir området <strong>\\((A\\cup B)^c\\)</strong>.</p>",
    "id": "1.12"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tre mängder med villkor",
    "poang": "1/1/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder A, B och C\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Beskriv med mängdsymboler de element som ligger i både \\(B\\) och \\(C\\), men inte i \\(A\\).</p>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området i B och C men inte i A är markerat\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"vb\"><circle cx=\"265\" cy=\"118\" r=\"82\"/></clipPath>\n  <clipPath id=\"vc\"><circle cx=\"215\" cy=\"190\" r=\"76\"/></clipPath>\n  <mask id=\"minusA\"><rect width=\"430\" height=\"280\" fill=\"white\"/><circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"black\"/></mask>\n</defs>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#CC7A3B\" fill-opacity=\".55\" clip-path=\"url(#vc)\" mask=\"url(#minusA)\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"none\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Vi tar först snittet \\(B\\cap C\\) och tar sedan bort den del som ligger i \\(A\\). Det markerade området är därför <strong>\\((B\\cap C)\\setminus A\\)</strong>, ekvivalent med \\(B\\cap C\\cap A^c\\).</p>",
    "id": "1.13"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tolka sektorer i Venn-diagram",
    "poang": "1/1/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med två mängder A och B\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>I ett Venn-diagram med två mängder är sektor 1 lika med \\(A\\cap B\\). Beskriv med mängdsymboler</p><ol type=\"a\"><li>den del av \\(A\\) som ligger utanför \\(B\\),</li><li>området utanför både \\(A\\) och \\(B\\).</li></ol>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området A men inte B är markerat\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#4F82C2\" fill-opacity=\".45\" mask=\"url(#mAonly)\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p><strong>a)</strong> Den del av \\(A\\) som ligger utanför \\(B\\) är <strong>\\(A\\setminus B\\)</strong>.</p><span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området utanför både A och B är markerat\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"#999\" fill-opacity=\".18\" mask=\"url(#mOutside)\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p><strong>b)</strong> Området utanför både \\(A\\) och \\(B\\) är komplementet till unionen: <strong>\\((A\\cup B)^c\\)</strong>.</p>",
    "id": "1.14"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tolka markerat område i Venn-diagram",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder där delen i B och C men inte A är markerad\">\n<rect width=\"430\" height=\"285\" fill=\"white\"/>\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" rx=\"4\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"clipB_146\"><circle cx=\"265\" cy=\"118\" r=\"82\"/></clipPath>\n  <mask id=\"excludeA_146\"><rect width=\"430\" height=\"285\" fill=\"white\"/><circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"black\"/></mask>\n</defs>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"78\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"78\" fill=\"#777\" fill-opacity=\".45\" clip-path=\"url(#clipB_146)\" mask=\"url(#excludeA_146)\"/>\n<text x=\"112\" y=\"62\" font-size=\"18\">A</text><text x=\"310\" y=\"62\" font-size=\"18\">B</text><text x=\"212\" y=\"258\" font-size=\"18\">C</text>\n</svg></span><p>Det grå området är markerat i diagrammet. Beskriv området med mängdsymboler.</p>",
    "s": "<p>Området ligger samtidigt i \\(B\\) och \\(C\\), men den del som också ligger i \\(A\\) är borttagen. Därför är området</p><p><strong>\\((B\\cap C)\\setminus A\\)</strong>, vilket också kan skrivas \\(B\\cap C\\cap A^c\\).</p>",
    "id": "1.46"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "avläsa antal i Venn-diagram",
    "poang": "2/0/0",
    "id": "1.115",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med två mängder A och B med antal i de olika områdena\">\n<rect x=\"15\" y=\"15\" width=\"390\" height=\"255\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"145\" r=\"85\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.2\"/>\n<circle cx=\"255\" cy=\"145\" r=\"85\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.2\"/>\n<text x=\"125\" y=\"77\" font-size=\"18\">A</text>\n<text x=\"290\" y=\"77\" font-size=\"18\">B</text>\n<text x=\"118\" y=\"150\" font-size=\"22\">14</text>\n<text x=\"205\" y=\"150\" font-size=\"22\">9</text>\n<text x=\"295\" y=\"150\" font-size=\"22\">11</text>\n<text x=\"55\" y=\"240\" font-size=\"18\">U = 40</text>\n</svg></span><p>Diagrammet visar hur 40 elever fördelar sig i mängderna \\(A\\) och \\(B\\).</p><ol type=\"a\"><li>Hur många tillhör \\(A\\cap B\\)?</li><li>Hur många tillhör \\(A\\cup B\\)?</li><li>Hur många tillhör ingen av mängderna?</li></ol>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 420 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där snittet A och B är markerat\">\n<rect x=\"15\" y=\"15\" width=\"390\" height=\"255\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs><clipPath id=\"clipB_sol\"><circle cx=\"255\" cy=\"145\" r=\"85\"/></clipPath></defs>\n<circle cx=\"165\" cy=\"145\" r=\"85\" fill=\"#888\" fill-opacity=\"0.35\" clip-path=\"url(#clipB_sol)\"/>\n<circle cx=\"165\" cy=\"145\" r=\"85\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.2\"/>\n<circle cx=\"255\" cy=\"145\" r=\"85\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.2\"/>\n<text x=\"125\" y=\"77\" font-size=\"18\">A</text><text x=\"290\" y=\"77\" font-size=\"18\">B</text>\n<text x=\"205\" y=\"150\" font-size=\"22\">9</text>\n</svg></span><p>I snittet \\(A\\cap B\\) ligger de som tillhör båda mängderna. Där står talet 9.</p><p><strong>a)</strong> \\(A\\cap B=9\\).</p><p><strong>b)</strong> Unionen \\(A\\cup B\\) består av alla som ligger i \\(A\\), i \\(B\\) eller i båda:</p><p>\\[14+9+11=34.\\]</p><p><strong>c)</strong> Ingen av mängderna betyder att eleven ligger utanför båda cirklarna. Då blir antalet</p><p>\\[40-34=6.\\]</p>"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tre mängder med inklusion-exklusion",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram för tre språk\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>I en grupp på 80 personer talar 42 engelska, 31 spanska och 24 tyska. 15 talar engelska och spanska, 11 engelska och tyska, 8 spanska och tyska och 5 alla tre. Hur många talar minst ett av språken?</p>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram för tre språk\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Vi använder additionsprincipen för tre mängder:</p><p>\\[|E\\cup S\\cup T|=|E|+|S|+|T|-|E\\cap S|-|E\\cap T|-|S\\cap T|+|E\\cap S\\cap T|.\\]</p><p>Insättning ger</p><p>\\[42+31+24-15-11-8+5=68.\\]</p><p><strong>68 personer talar minst ett av språken.</strong></p>",
    "id": "1.147"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "avläsa element i Venn-diagram",
    "poang": "2/0/0",
    "id": "1.161",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med två mängder och utplacerade tal\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n<text x=\"120\" y=\"130\" font-size=\"16\">1</text>\n<text x=\"150\" y=\"165\" font-size=\"16\">3</text>\n<text x=\"206\" y=\"132\" font-size=\"16\">5</text>\n<text x=\"238\" y=\"168\" font-size=\"16\">7</text>\n<text x=\"287\" y=\"130\" font-size=\"16\">9</text>\n<text x=\"330\" y=\"208\" font-size=\"16\">11</text>\n</svg></span><p>I diagrammet är elementen i grundmängden utplacerade i mängderna \\(A\\) och \\(B\\).</p><ol type=\"a\"><li>Skriv mängden \\(A\\cap B\\).</li><li>Skriv mängden \\(A\\setminus B\\).</li><li>Skriv mängden \\((A\\cup B)^c\\).</li></ol>",
    "s": "<p><strong>a)</strong> I snittet ligger de element som finns i båda mängderna. Det ger <strong>\\(A\\cap B=\\{5,7\\}\\)</strong>.</p><p><strong>b)</strong> I \\(A\\setminus B\\) ligger de element som finns i \\(A\\) men inte i \\(B\\). Det ger <strong>\\(A\\setminus B=\\{1,3\\}\\)</strong>.</p><p><strong>c)</strong> Elementet utanför båda cirklarna är 11, alltså <strong>\\((A\\cup B)^c=\\{11\\}\\)</strong>.</p>"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "E",
    "typ": "tolka markerat område i Venn-diagram",
    "poang": "2/0/0",
    "id": "1.162",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området i B men inte i A är markerat\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#5FA772\" fill-opacity=\".45\" mask=\"url(#mBonly)\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>Beskriv det markerade området med mängdsymboler.</p>",
    "s": "<p>Det markerade området ligger i \\(B\\), men inte i \\(A\\). Därför skrivs området som <strong>\\(B\\setminus A\\)</strong>.</p>"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "tolka markerat område i Venn-diagram med tre mängder",
    "poang": "0/2/0",
    "id": "1.163",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där området i B och C men inte i A är markerat\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"vb\"><circle cx=\"265\" cy=\"118\" r=\"82\"/></clipPath>\n  <clipPath id=\"vc\"><circle cx=\"215\" cy=\"190\" r=\"76\"/></clipPath>\n  <mask id=\"minusA\"><rect width=\"430\" height=\"280\" fill=\"white\"/><circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"black\"/></mask>\n</defs>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#CC7A3B\" fill-opacity=\".55\" clip-path=\"url(#vc)\" mask=\"url(#minusA)\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"none\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Beskriv det markerade området med mängdsymboler på två likvärdiga sätt.</p>",
    "s": "<p>Området ligger i både \\(B\\) och \\(C\\), men inte i \\(A\\). Därför kan det skrivas som <strong>\\((B\\cap C)\\setminus A\\)</strong>.</p><p>En likvärdig skrivning är <strong>\\(B\\cap C\\cap A^c\\)</strong>.</p>"
  },
  {
    "kap": 1,
    "omr": "venndiagram",
    "niva": "C",
    "typ": "rita och tolka område med tre mängder",
    "poang": "0/2/0",
    "id": "1.165",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Beskriv med mängdsymboler den del av \\(C\\) som ligger utanför både \\(A\\) och \\(B\\).</p>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram där den del av C som ligger utanför A och B är markerad\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <mask id=\"mConly\"><rect width=\"430\" height=\"280\" fill=\"white\"/><circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"black\"/><circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"black\"/></mask>\n</defs>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#CC7A3B\" fill-opacity=\".45\" mask=\"url(#mConly)\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"none\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text><text x=\"302\" y=\"56\" font-size=\"17\">B</text><text x=\"215\" y=\"253\" font-size=\"17\">C</text><text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>Vi söker de element som ligger i \\(C\\), men inte i \\(A\\) och inte i \\(B\\). Det kan skrivas som <strong>\\(C\\setminus (A\\cup B)\\)</strong>.</p><p>En likvärdig skrivning är <strong>\\(C\\cap A^c\\cap B^c\\)</strong>.</p>"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "skillnad mellan delmängd och element",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,\\{2\\},3\\}\\). Avgör om påståendena är sanna eller falska.</p><ol type=\"a\"><li>\\(2\\in A\\)</li><li>\\(\\{2\\}\\in A\\)</li></ol>",
    "s": "<p><strong>Metod:</strong> Översätt först operationen: union betyder ”i minst en”, snitt betyder ”i båda” och differens betyder ”i den första men inte i den andra”.</p><ol type=\"a\"><li><strong>Falskt.</strong> Talet 2 är inte ett element i \\(A\\).</li><li><strong>Sant.</strong> Mängden \\(\\{2\\}\\) är ett element i \\(A\\).</li></ol>",
    "id": "1.15"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "C",
    "typ": "De Morgans lag i konkret mängd",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram för mängderna A och B i grundmängden G\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>Låt grundmängden vara \\(G=\\{1,2,\\ldots,12\\}\\), \\(A\\) mängden jämna tal och \\(B\\) mängden tal delbara med 3. Bestäm \\((A\\cup B)^c\\) på två sätt och kontrollera De Morgans lag.</p>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram som visar komplementet till A union B\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"#999\" fill-opacity=\".18\" mask=\"url(#mOutside)\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>Först bestämmer vi unionen. \\(A\\) är de jämna talen och \\(B\\) är talen delbara med 3 i grundmängden \\(G=\\{1,2,\\ldots,12\\}\\).</p><p>\\(A\\cup B=\\{2,3,4,6,8,9,10,12\\}\\), så <strong>\\((A\\cup B)^c=\\{1,5,7,11\\}</strong>.</p><p>Vidare är \\(A^c=\\{1,3,5,7,9,11\\}\\) och \\(B^c=\\{1,2,4,5,7,8,10,11\\}\\). Snittet blir samma mängd:</p><p><strong>\\(A^c\\cap B^c=\\{1,5,7,11\\}\\)</strong>.</p><p>Alltså verifieras De Morgans lag: <strong>\\((A\\cup B)^c=A^c\\cap B^c\\)</strong>.</p>",
    "id": "1.16"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "union och snitt av två mängder",
    "poang": "2/0/0",
    "id": "1.113",
    "t": "<p>Låt \\(A=\\{1,3,5,7,9\\}\\) och \\(B=\\{3,4,5,6\\}\\). Bestäm</p><ol type=\"a\"><li>\\(A\\cup B\\)</li><li>\\(A\\cap B\\)</li></ol>",
    "s": "<p><strong>a)</strong> Unionen innehåller alla element som finns i minst en av mängderna:</p><p>\\[A\\cup B=\\{1,3,4,5,6,7,9\\}.\\]</p><p><strong>b)</strong> Snittet innehåller de element som finns i båda mängderna:</p><p>\\[A\\cap B=\\{3,5\\}.\\]</p>"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "differens och komplement",
    "poang": "2/0/0",
    "id": "1.114",
    "t": "<p>Grundmängden är \\(U=\\{1,2,3,4,5,6,7,8\\}\\) och \\(A=\\{2,4,6,8\\}\\).</p><ol type=\"a\"><li>Bestäm \\(U\\setminus A\\).</li><li>Bestäm komplementet \\(A^c\\).</li></ol>",
    "s": "<p>Eftersom komplementet tas i förhållande till grundmängden \\(U\\), är \\(A^c\\) samma mängd som \\(U\\setminus A\\).</p><p>Vi tar alltså bort \\(2,4,6,8\\) ur \\(U\\):</p><p>\\[U\\setminus A=A^c=\\{1,3,5,7\\}.\\]</p>"
  },
  {
    "kap": 1,
    "omr": "mangdoperationer",
    "niva": "E",
    "typ": "symmetrisk differens via operationer",
    "poang": "2/0/0",
    "t": "<p>Låt \\(A=\\{1,2,3,4\\}\\) och \\(B=\\{3,4,5,6\\}\\). Bestäm \\((A\\cup B)\\setminus(A\\cap B)\\).</p>",
    "s": "<p>\\(A\\cup B=\\{1,2,3,4,5,6\\}\\) och \\(A\\cap B=\\{3,4\\}\\). Tar vi bort snittet återstår</p><p><strong>\\(\\{1,2,5,6\\}\\)</strong>.</p>",
    "id": "1.146"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "C",
    "typ": "inklusion-exklusion för två mängder",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram för två kursmängder\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>På en skola läser 82 elever fysik, 67 elever programmering och 31 elever båda kurserna. Hur många elever läser minst en av kurserna?</p>",
    "s": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Skiss över unionen av de två kursmängderna\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<defs>\n  <clipPath id=\"cpA\"><circle cx=\"170\" cy=\"130\" r=\"75\"/></clipPath>\n  <clipPath id=\"cpB\"><circle cx=\"250\" cy=\"130\" r=\"75\"/></clipPath>\n  <mask id=\"mAonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mBonly\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n  <mask id=\"mOutside\"><rect width=\"420\" height=\"260\" fill=\"white\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"black\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"black\"/></mask>\n</defs><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#4F82C2\" fill-opacity=\".35\"/><circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#5FA772\" fill-opacity=\".35\"/><circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text>\n<text x=\"284\" y=\"70\" font-size=\"18\">B</text>\n<text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n</svg></span><p>Om vi bara adderar 82 och 67 räknas de 31 elever som läser båda kurserna två gånger. Därför använder vi additionsprincipen:</p><p>\\[|F\\cup P|=|F|+|P|-|F\\cap P|=82+67-31=118.\\]</p><p><strong>118 elever läser minst en av kurserna.</strong></p>",
    "id": "1.17"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "A",
    "typ": "inklusion-exklusion med tre mängder och parameter",
    "poang": "0/0/3",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram för tre aktiviteter\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U</text>\n</svg></span><p>I en grupp deltar \\(x\\) personer i alla tre aktiviteterna \\(A,B,C\\). Man vet att \\(|A|=38\\), \\(|B|=34\\), \\(|C|=29\\), \\(|A\\cap B|=16\\), \\(|A\\cap C|=12\\), \\(|B\\cap C|=11\\) och att 7 personer inte deltar i någon aktivitet. Totalt finns \\(y\\) personer i gruppen.</p><p>Bestäm ett samband mellan \\(x\\) och \\(y\\), och ange vilka heltalsvärden på \\(x\\) som är möjliga.</p>",
    "s": "<p>Inklusion-exklusion ger</p><p>\\[|A\\cup B\\cup C|=38+34+29-16-12-11+x=62+x.\\]</p><p>Med de 7 utanför blir <strong>\\(y=69+x\\)</strong>.</p><p>För att alla delområden ska ha icke-negativa antal måste bland annat \\(|B\\cap C\\setminus A|=11-x\\ge0\\), så \\(x\\le11\\). Vidare måste t.ex. endast-\\(C\\): \\(29-12-11+x=6+x\\ge0\\), vilket inte ger en skarpare nedre gräns än \\(x\\ge0\\). Alltså <strong>\\(x\\in\\{0,1,\\ldots,11\\}\\)</strong>.</p>",
    "id": "1.18"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "C",
    "typ": "inklusion-exklusion för tre mängder",
    "poang": "0/3/0",
    "t": "<p>På en skola deltar 74 elever i programmering, 61 i fysik och 48 i kemi. Av dessa deltar 28 i både programmering och fysik, 19 i både programmering och kemi och 17 i både fysik och kemi. 9 elever deltar i alla tre.</p><p>Hur många elever deltar i minst en av aktiviteterna?</p>",
    "s": "<p>För tre mängder används inklusion–exklusion:</p><p>\\[|P\\cup F\\cup K|=74+61+48-28-19-17+9.\\]</p><p>De parvisa snitten dras bort eftersom de annars räknats två gånger, men de 9 som ligger i alla tre har då dragits bort en gång för mycket och läggs därför tillbaka.</p><p><strong>\\(|P\\cup F\\cup K|=128\\)</strong>.</p>",
    "id": "1.47"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "C",
    "typ": "exakt en av två aktiviteter",
    "poang": "0/2/0",
    "t": "<p>På en teknikdag deltar 68 elever i programmering, 54 i robotik och 29 i båda aktiviteterna.</p><p>Hur många elever deltar i <em>exakt en</em> av de två aktiviteterna?</p>",
    "s": "<p><strong>Idé:</strong> De 29 som deltar i båda ska inte räknas med alls. Ta därför bort dem från båda grupperna.</p><p>Endast programmering: \\(68-29=39\\).<br>Endast robotik: \\(54-29=25\\).</p><p>\\[39+25=\\mathbf{64}.\\]</p>",
    "id": "1.56"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "C",
    "typ": "exakt två av tre mängder",
    "poang": "0/3/0",
    "t": "<p>I en undersökning gäller \\(|A\\cap B|=24\\), \\(|A\\cap C|=19\\), \\(|B\\cap C|=17\\) och \\(|A\\cap B\\cap C|=8\\).</p><p>Hur många personer tillhör <em>exakt två</em> av mängderna?</p>",
    "s": "<p><strong>Idé:</strong> Varje parsnitt innehåller även de 8 personer som ligger i alla tre mängderna. De måste tas bort från varje parsnitt.</p><p>Exakt \\(A\\) och \\(B\\): \\(24-8=16\\).<br>Exakt \\(A\\) och \\(C\\): \\(19-8=11\\).<br>Exakt \\(B\\) och \\(C\\): \\(17-8=9\\).</p><p>\\[16+11+9=\\mathbf{36}.\\]</p>",
    "id": "1.57"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "E",
    "typ": "additionsprincipen med två mängder",
    "poang": "2/0/0",
    "id": "1.116",
    "t": "<p>På en skola spelar 18 elever fotboll, 15 spelar basket och 7 spelar både fotboll och basket.</p><p>Hur många elever spelar minst en av sporterna?</p>",
    "s": "<p>Om vi bara adderar 18 och 15 räknas de 7 elever som spelar båda sporterna två gånger. Därför använder vi additionsprincipen:</p><p>\\[|F\\cup B|=|F|+|B|-|F\\cap B|=18+15-7=26.\\]</p><p><strong>26 elever</strong> spelar minst en av sporterna.</p>"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "E",
    "typ": "två mängder med angivna antal i diagram",
    "poang": "2/0/0",
    "id": "1.164",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med två mängder och antal i varje område\">\n<rect x=\"18\" y=\"18\" width=\"384\" height=\"224\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"170\" cy=\"130\" r=\"75\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2.2\"/>\n<circle cx=\"250\" cy=\"130\" r=\"75\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2.2\"/>\n<text x=\"126\" y=\"70\" font-size=\"18\">A</text><text x=\"284\" y=\"70\" font-size=\"18\">B</text><text x=\"34\" y=\"40\" font-size=\"16\">U</text>\n<text x=\"123\" y=\"136\" font-size=\"18\">18</text><text x=\"206\" y=\"136\" font-size=\"18\">7</text><text x=\"292\" y=\"136\" font-size=\"18\">11</text><text x=\"340\" y=\"214\" font-size=\"18\">4</text>\n</svg></span><p>Diagrammet visar hur elever fördelar sig i mängderna \\(A\\) och \\(B\\).</p><ol type=\"a\"><li>Hur många tillhör \\(A\\cup B\\)?</li><li>Hur många tillhör exakt en av mängderna?</li></ol>",
    "s": "<p><strong>a)</strong> I unionen ingår alla tre områden inne i cirklarna: \\(18+7+11=36\\). Alltså är <strong>\\(|A\\cup B|=36\\)</strong>.</p><p><strong>b)</strong> Exakt en av mängderna betyder att eleven ligger i \\(A\\setminus B\\) eller i \\(B\\setminus A\\). Då blir antalet \\(18+11=29\\).</p><p><strong>Svaret är 29.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "additionsprincipen_mangder",
    "niva": "C",
    "typ": "tre mängder med antal i diagram",
    "poang": "0/2/0",
    "id": "1.166",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Venn-diagram med tre mängder och angivna antal i varje del\">\n<rect x=\"15\" y=\"15\" width=\"400\" height=\"250\" fill=\"white\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<circle cx=\"165\" cy=\"118\" r=\"82\" fill=\"#2C62A8\" fill-opacity=\".08\" stroke=\"#2C62A8\" stroke-width=\"2\"/>\n<circle cx=\"265\" cy=\"118\" r=\"82\" fill=\"#2E7D52\" fill-opacity=\".08\" stroke=\"#2E7D52\" stroke-width=\"2\"/>\n<circle cx=\"215\" cy=\"190\" r=\"76\" fill=\"#E3B52B\" fill-opacity=\".10\" stroke=\"#B48A18\" stroke-width=\"2\"/>\n<text x=\"118\" y=\"56\" font-size=\"17\">A</text>\n<text x=\"302\" y=\"56\" font-size=\"17\">B</text>\n<text x=\"215\" y=\"253\" font-size=\"17\">C</text>\n<text x=\"28\" y=\"35\" font-size=\"15\">U = 60</text>\n<text x=\"122\" y=\"116\" font-size=\"16\">12</text>\n<text x=\"286\" y=\"116\" font-size=\"16\">8</text>\n<text x=\"214\" y=\"222\" font-size=\"16\">10</text>\n<text x=\"209\" y=\"92\" font-size=\"16\">5</text>\n<text x=\"168\" y=\"170\" font-size=\"16\">6</text>\n<text x=\"255\" y=\"170\" font-size=\"16\">4</text>\n<text x=\"210\" y=\"142\" font-size=\"16\" font-weight=\"700\">3</text>\n</svg></span><p>Diagrammet visar hur 60 personer fördelar sig i mängderna \\(A\\), \\(B\\) och \\(C\\).</p><ol type=\"a\"><li>Hur många tillhör exakt två av mängderna?</li><li>Hur många tillhör ingen av mängderna?</li></ol>",
    "s": "<p><strong>a)</strong> Exakt två av mängderna motsvarar de tre parvisa överlappen utan mittenområdet. Dessa innehåller \\(5\\), \\(6\\) och \\(4\\) personer.</p><p>Alltså blir antalet <strong>\\(5+6+4=15\\)</strong>.</p><p><strong>b)</strong> Först summerar vi alla som ligger i någon mängd:</p><p>\\[12+8+10+5+6+4+3=48.\\]</p><p>Utanför alla mängder ligger då <strong>\\(60-48=12\\)</strong> personer.</p>"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen",
    "poang": "1/0/0",
    "t": "<p>Till en nordisk skolkonferens kommer 31 elever från fem länder. Förklara varför minst ett land måste representeras av minst 7 elever.</p>",
    "s": "<p><strong>Lådprincipen:</strong> Tänk de fem länderna som fem lådor och de 31 eleverna som föremål som placeras i lådorna.</p><p>Om varje land hade högst 6 elever skulle det totalt kunna finnas högst</p><p>\\[5\\cdot6=30\\]</p><p>elever. Men det finns 31 elever. Antagandet är alltså omöjligt. Därför måste minst ett land representeras av <strong>minst 7 elever</strong>.</p>",
    "id": "1.19"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "välja och ordna utan återläggning",
    "poang": "1/0/0",
    "t": "<p>Ett fotbollslag har 16 spelare. Fem ska utses till straffläggare och ordningen ska bestämmas. Vilket uttryck ger antalet möjliga straffläggarlistor?</p><p>A) \\(P(16,5)\\) &nbsp; B) \\(\\binom{16}{5}\\) &nbsp; C) \\(16!\\) &nbsp; D) \\(11!\\)</p>",
    "s": "<p><strong>Idé:</strong> Här väljer vi både <em>vilka</em> fem spelare som ska slå och <em>i vilken ordning</em> de ska slå. När ordningen spelar roll använder vi permutationer.</p><p>För första straffen finns 16 val, därefter 15, 14, 13 och 12:</p><p>\\[P(16,5)=16\\cdot15\\cdot14\\cdot13\\cdot12.\\]</p><p>Rätt alternativ är alltså <strong>A</strong>.</p>",
    "id": "1.20"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja grupp utan ordning",
    "poang": "1/0/0",
    "t": "<p>Ur en trupp med 23 spelare ska fem väljas till en grupp. Ordningen saknar betydelse. Hur många olika grupper kan väljas?</p>",
    "s": "<p><strong>Idé:</strong> Vi ska bara välja vilka fem spelare som ingår. Det spelar ingen roll i vilken ordning de väljs, så vi använder en kombination.</p><p>\\[\\binom{23}{5}=\\frac{23!}{5!18!}=\\mathbf{33\\,649}.\\]</p><p>Det finns alltså <strong>33 649 olika grupper</strong>.</p>",
    "id": "1.21"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "bestämma binomialkoefficient",
    "poang": "1/0/0",
    "t": "<p>Bestäm koefficienten framför \\(a^4\\) i utvecklingen av \\((a+1)^5\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera vilken term i binomialutvecklingen som kan ge den efterfrågade potensen och bestäm sedan koefficienten.</p><p>Termen med \\(a^4\\) fås när en av de fem faktorerna bidrar med 1. Koefficienten är <strong>\\(\\binom51=5\\)</strong>.</p>",
    "id": "1.22"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "produktprincipen med kortlek",
    "poang": "1/0/0",
    "t": "<p>På hur många sätt kan man välja ett hjärterkort och ett ruterkort ur en vanlig kortlek? Det finns 13 kort av varje färg.</p>",
    "s": "<p><strong>Idé:</strong> Valet görs i två steg: först ett hjärterkort och sedan ett ruterkort. Varje val i det första steget kan kombineras med varje val i det andra.</p><p>\\[13\\cdot13=\\mathbf{169}.\\]</p><p>Det finns alltså <strong>169 olika par</strong>.</p>",
    "id": "1.23"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "pinkod med återläggning",
    "poang": "2/0/0",
    "t": "<p>Hur många olika fyrsiffriga pinkoder finns om varje position kan vara någon av siffrorna 0–9 och siffror får upprepas?</p>",
    "s": "<p><strong>Idé:</strong> En pinkod har fyra positioner och varje position har 10 möjliga siffror. Eftersom siffror får upprepas påverkar ett val inte nästa.</p><p>Multiplikationsprincipen ger</p><p>\\[10\\cdot10\\cdot10\\cdot10=10^4=\\mathbf{10\\,000}.\\]</p>",
    "id": "1.24"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "produktprincipen i klädval",
    "poang": "2/0/0",
    "t": "<p>En person har 5 par byxor, 10 par strumpor, 6 skjortor och 7 par skor. På hur många sätt kan en outfit med ett val ur varje kategori sättas ihop?</p>",
    "s": "<p><strong>Idé:</strong> En outfit byggs genom ett val ur varje kategori. Varje val i en kategori kan kombineras med alla val i de andra.</p><p>\\[5\\cdot10\\cdot6\\cdot7=\\mathbf{2100}.\\]</p><p>Det finns alltså <strong>2100 olika outfits</strong>.</p>",
    "id": "1.25"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "ordna grupper i block",
    "poang": "2/0/0",
    "t": "<p>I en bokhylla ska 6 geografiböcker, 4 religionsböcker och 3 romaner ställas så att böcker av samma kategori står tillsammans. Alla böcker är olika. Hur många ordningar finns?</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. Här gör den det, vilket är signalen för permutationer.</p><p>De tre kategoriblocken kan ordnas på \\(3!\\) sätt. Inom blocken finns \\(6!\\), \\(4!\\) respektive \\(3!\\) ordningar. Totalt</p><p>\\[3!\\cdot6!\\cdot4!\\cdot3!=\\mathbf{622\\,080}.\\]</p>",
    "id": "1.26"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "antal pokerhänder",
    "poang": "2/0/0",
    "t": "<p>En pokerhand består av 5 kort ur en kortlek med 52 kort. Hur många olika händer finns?</p>",
    "s": "<p><strong>Idé:</strong> En pokerhand bestäms av vilka fem kort som ingår; kortens ordning spelar ingen roll. Därför använder vi kombinationer.</p><p>\\[\\binom{52}{5}=\\frac{52!}{5!47!}=\\mathbf{2\\,598\\,960}.\\]</p>",
    "id": "1.27"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "tolka och använda kombinationsformel",
    "poang": "2/0/0",
    "t": "<p>Förklara med ord vad \\(\\binom nk\\) betyder och skriv formeln med fakulteter.</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. När bara vilka objekt som väljs är viktigt används kombinationer.</p><p>\\(\\binom nk\\) är antalet sätt att välja \\(k\\) objekt bland \\(n\\) när ordningen inte spelar roll. Formeln är</p><p><strong>\\[\\binom nk=\\frac{n!}{k!(n-k)!}.\\]</strong></p>",
    "id": "1.28"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "beräkna kombinationstal",
    "poang": "3/0/0",
    "t": "<p>Beräkna \\(\\binom{11}{4}\\), \\(\\binom{20}{5}\\) och \\(\\binom{17}{13}\\).</p>",
    "s": "<p><strong>Idé:</strong> Använd \\(\\binom nk=\\frac{n!}{k!(n-k)!}\\). I den sista beräkningen är symmetrin \\(\\binom nk=\\binom n{n-k}\\) särskilt praktisk.</p><p>\\[\\binom{11}{4}=330,\\qquad \\binom{20}{5}=15\\,504.\\]</p><p>\\[\\binom{17}{13}=\\binom{17}{4}=2380.\\]</p>",
    "id": "1.29"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "utveckla binom med binomialsatsen",
    "poang": "3/0/0",
    "t": "<p>Utveckla \\(\\left(2x+\\frac{1}{2}y\\right)^4\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera vilken term i binomialutvecklingen som kan ge den efterfrågade potensen och bestäm sedan koefficienten.</p><p>Med binomialsatsen:</p><p><strong>\\[16x^4+16x^3y+6x^2y^2+xy^3+\\frac{1}{16}y^4.\\]</strong></p>",
    "id": "1.30"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "utveckla binom",
    "poang": "3/0/0",
    "t": "<p>Utveckla \\((3x+2)^4\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera vilken term i binomialutvecklingen som kan ge den efterfrågade potensen och bestäm sedan koefficienten.</p><p>\\[\\binom40(3x)^4+\\binom41(3x)^3(2)+\\binom42(3x)^2(2^2)+\\binom43(3x)(2^3)+2^4\\]</p><p><strong>\\(=81x^4+216x^3+216x^2+96x+16\\)</strong>.</p>",
    "id": "1.31"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "jämföra ordnade och oordnade urval",
    "poang": "4/0/0",
    "t": "<p>Av 33 elever ska 9 delta i en aktivitet.</p><ol type=\"a\"><li>Hur många olika köordningar kan 9 av eleverna bilda?</li><li>Hur många olika grupper om 9 elever kan väljas om ordningen inte spelar roll?</li></ol>",
    "s": "<ol type=\"a\"><li>Här spelar ordningen roll, så vi använder permutationer: \\[P(33,9)=\\frac{33!}{24!}=\\mathbf{13\\,995\\,229\\,248\\,000}.\\]</li><li>Här spelar ordningen inte roll, så vi använder kombinationer: \\[\\binom{33}{9}=\\mathbf{38\\,567\\,100}.\\]</li></ol>",
    "id": "1.32"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "stora kombinationstal och symmetri",
    "poang": "6/0/0",
    "t": "<p>Beräkna \\(\\binom98\\), \\(\\binom{20}{18}\\) och \\(\\binom{105}{102}\\).</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. När bara vilka objekt som väljs är viktigt används kombinationer.</p><p>Använd gärna symmetrin \\(\\binom nk=\\binom n{n-k}\\):</p><p><strong>\\(\\binom98=9\\)</strong>, <strong>\\(\\binom{20}{18}=\\binom{20}{2}=190\\)</strong>, <strong>\\(\\binom{105}{102}=\\binom{105}{3}=187\\,460\\)</strong>.</p>",
    "id": "1.33"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "utveckla algebraiska binom",
    "poang": "2/2/0",
    "t": "<p>Utveckla.</p><ol type=\"a\"><li>\\((2x+x^2)^5\\)</li><li>\\((2x-y)^5\\)</li></ol>",
    "s": "<p><strong>Metod:</strong> Identifiera vilken term i binomialutvecklingen som kan ge den efterfrågade potensen och bestäm sedan koefficienten.</p><ol type=\"a\"><li>Faktorisera gärna \\(x\\): \\((x(2+x))^5=x^5(2+x)^5\\). Det ger <strong>\\(32x^5+80x^6+80x^7+40x^8+10x^9+x^{10}\\)</strong>.</li><li><strong>\\(32x^5-80x^4y+80x^3y^2-40x^2y^3+10xy^4-y^5\\)</strong>.</li></ol>",
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
    "s": "<p><strong>Metod:</strong> Identifiera vilken term i binomialutvecklingen som kan ge den efterfrågade potensen och bestäm sedan koefficienten.</p><ol type=\"a\"><li>Koefficienten är <strong>\\(\\binom{11}{4}=330\\)</strong>.</li><li>För \\(y^8\\) behövs fyra faktorer \\(y^2\\), alltså fem faktorer \\(2x\\). Koefficienten blir <strong>\\(\\binom94 2^5=4032\\)</strong>.</li></ol>",
    "id": "1.36"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "C",
    "typ": "räkna nya registreringskombinationer",
    "poang": "1/2/0",
    "t": "<p>Ett registreringssystem använder tre bokstäver följda av tre symboler. I den äldre versionen var de tre sista symbolerna siffror. I en utökad version får den sista symbolen även vara en av 23 bokstäver. De tre första bokstäverna väljs också bland 23 bokstäver.</p><p>Hur många <em>ytterligare</em> registreringsnummer blir möjliga genom att den sista symbolen får vara en bokstav?</p>",
    "s": "<p><strong>Metod:</strong> När valet sker i flera steg och varje val kan kombineras med valen i nästa steg multipliceras antalet möjligheter.</p><p>De nya kombinationerna är precis de där sista symbolen är en bokstav. Då finns</p><p>\\[23^3\\cdot10^2\\cdot23=\\mathbf{27\\,984\\,100}\\]</p><p>ytterligare registreringsnummer.</p>",
    "id": "1.37"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen månader",
    "poang": "1/0/0",
    "t": "<p>Hur många personer behövs minst i ett rum för att man med säkerhet ska kunna säga att minst tre fyller år i samma månad?</p>",
    "s": "<p><strong>Lådprincipen:</strong> De 12 månaderna är lådorna.</p><p>För att undvika att tre personer fyller år i samma månad kan vi ha högst två personer i varje månad. Då ryms högst</p><p>\\[12\\cdot2=24\\]</p><p>personer. När person nummer 25 kommer in måste någon månad innehålla minst tre personer. Minsta antal är därför <strong>25</strong>.</p>",
    "id": "1.38"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "lådprincipen med parindelning",
    "poang": "0/2/0",
    "t": "<p>Man väljer 73 olika heltal ur mängden \\(\\{1,2,3,\\ldots,144\\}\\).</p><p>Visa att det bland de valda talen alltid finns två på varandra följande heltal.</p>",
    "s": "<p>Dela in talen i 72 par:</p><p>\\[(1,2),(3,4),\\ldots,(143,144).\\]</p><p>Om man väljer 73 tal men bara har 72 par måste minst ett par innehålla två valda tal, enligt lådprincipen. Talen i detta par är på varandra följande. Alltså finns det alltid <strong>två valda heltal som skiljer 1</strong>.</p>",
    "id": "1.51"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "samma begynnelsebokstav",
    "poang": "1/0/0",
    "t": "<p>En lista innehåller 27 svenska ord. Visa att minst två av orden måste börja på samma bokstav.</p>",
    "s": "<p><strong>Lådprincipen:</strong> De 26 bokstäverna är lådorna och de 27 orden placeras efter sin första bokstav.</p><p>Om varje bokstav fick högst ett ord skulle listan kunna innehålla högst 26 ord. Eftersom listan innehåller 27 ord måste någon bokstav få minst två ord.</p>",
    "id": "1.58"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "strumpor och färger",
    "poang": "1/0/0",
    "t": "<p>En låda innehåller strumpor i 8 olika färger. Hur många strumpor måste man minst ta upp för att vara säker på att få minst 3 strumpor av samma färg?</p>",
    "s": "<p><strong>Lådprincipen:</strong> Färgerna är de 8 lådorna.</p><p>För att undvika tre av samma färg kan man ta högst 2 av varje färg, alltså \\(8\\cdot2=16\\) strumpor. Nästa strumpa tvingar fram en tredje av någon färg.</p><p>Minsta antal är <strong>17</strong>.</p>",
    "id": "1.59"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "födelsemånader",
    "poang": "1/0/0",
    "t": "<p>I en grupp finns 37 personer. Visa att minst fyra av dem fyller år i samma månad.</p>",
    "s": "<p><strong>Lådprincipen:</strong> De 12 månaderna är lådorna.</p><p>Om varje månad hade högst 3 personer skulle gruppen kunna innehålla högst \\(12\\cdot3=36\\) personer. Eftersom det finns 37 måste någon månad innehålla minst <strong>4 personer</strong>.</p>",
    "id": "1.60"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "samma rest modulo",
    "poang": "0/2/0",
    "t": "<p>Visa att bland vilka 10 heltal som helst finns två som ger samma rest vid division med 9.</p>",
    "s": "<p><strong>Lådprincipen:</strong> Vid division med 9 kan resten bara vara \\(0,1,2,\\ldots,8\\), alltså 9 olika rester. Restklasserna är lådorna.</p><p>Om 10 heltal fördelas på 9 restklasser måste minst två hamna i samma klass. De två talen har därför <strong>samma rest modulo 9</strong>.</p>",
    "id": "1.61"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "avrundade mätvärden",
    "poang": "0/2/0",
    "t": "<p>51 mätvärden avrundas till heltal och samtliga avrundade värden ligger mellan 150 och 159, inklusive ändpunkterna.</p><p>Visa att minst 6 mätvärden får samma avrundade värde.</p>",
    "s": "<p>Det finns 10 möjliga avrundade heltal: 150, 151, ..., 159. De är lådorna.</p><p>Om varje värde förekom högst 5 gånger skulle det finnas högst \\(10\\cdot5=50\\) mätvärden. Men det finns 51.</p><p>Alltså måste något heltal förekomma <strong>minst 6 gånger</strong>.</p>",
    "id": "1.62"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "komplementära talpar",
    "poang": "0/2/0",
    "t": "<p>Man väljer 7 olika heltal ur mängden \\(\\{1,2,\\ldots,12\\}\\). Visa att det alltid finns två valda tal vars summa är 13.</p>",
    "s": "<p><strong>Nyckelidé:</strong> Para ihop talen efter vilka som summerar till 13:</p><p>\\[(1,12),(2,11),(3,10),(4,9),(5,8),(6,7).\\]</p><p>Det finns 6 par. Om 7 olika tal väljs måste två av dem komma från samma par. De två talen i det paret har summan <strong>13</strong>.</p>",
    "id": "1.63"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "två på varandra följande tal",
    "poang": "0/2/0",
    "t": "<p>Man väljer 6 olika heltal ur mängden \\(\\{1,2,\\ldots,10\\}\\). Visa att två av de valda talen måste vara på varandra följande.</p>",
    "s": "<p>Dela mängden i fem par: \\[(1,2),(3,4),(5,6),(7,8),(9,10).\\]</p><p>Paren är lådorna. Om 6 olika tal väljs och bara 5 par finns måste två valda tal hamna i samma par. Talen i varje par är på varandra följande.</p>",
    "id": "1.64"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "workshopfördelning",
    "poang": "0/2/0",
    "t": "<p>13 elever väljer var sin av fyra workshops. Visa att minst fyra elever måste ha valt samma workshop.</p>",
    "s": "<p>De fyra workshopparna är lådorna. Om varje workshop hade högst 3 elever skulle totalt högst \\(4\\cdot3=12\\) elever kunna fördelas.</p><p>Eftersom 13 elever ska placeras måste någon workshop få minst <strong>4 elever</strong>.</p>",
    "id": "1.65"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "A",
    "typ": "geometrisk lådprincip",
    "poang": "0/1/2",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 380 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Enhetskvadrat indelad i fyra mindre kvadrater\"><rect width=\"380\" height=\"300\" fill=\"white\"/><rect x=\"70\" y=\"35\" width=\"230\" height=\"230\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.5\"/><line x1=\"185\" y1=\"35\" x2=\"185\" y2=\"265\" stroke=\"#777\" stroke-width=\"1.8\" stroke-dasharray=\"5 5\"/><line x1=\"70\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#777\" stroke-width=\"1.8\" stroke-dasharray=\"5 5\"/><text x=\"175\" y=\"286\" font-size=\"15\">1</text><text x=\"45\" y=\"155\" font-size=\"15\">1</text></svg></span><p>Fem punkter placeras godtyckligt i eller på en kvadrat med sidan 1.</p><p>Visa att det alltid finns två av punkterna vars avstånd är högst \\(\\frac{\\sqrt2}{2}\\).</p>",
    "s": "<p><strong>Idé:</strong> Dela den stora kvadraten i fyra lika stora kvadrater med sidan \\(1/2\\). De fyra delarna är lådorna. Punkter som ligger på en delningslinje kan tilldelas någon av de angränsande delarna; varje punkt tillhör då exakt en låda.</p><p>Fem punkter placeras i fyra lådor, så enligt lådprincipen ligger minst två punkter i samma lilla kvadrat.</p><p>Det största möjliga avståndet mellan två punkter i en sådan kvadrat är dess diagonal:</p><p>\\[\\sqrt{(1/2)^2+(1/2)^2}=\\frac{\\sqrt2}{2}.\\]</p><p>Alltså finns alltid två punkter vars avstånd är högst <strong>\\(\\frac{\\sqrt2}{2}\\)</strong>.</p>",
    "id": "1.66"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "A",
    "typ": "generellt bevis med restklasser",
    "poang": "0/1/2",
    "t": "<p>Visa att bland vilka \\(n+1\\) heltal som helst finns två tal vars differens är delbar med \\(n\\), där \\(n\\ge1\\).</p>",
    "s": "<p><strong>Idé:</strong> Använd restklasser modulo \\(n\\) som lådor.</p><p>Varje heltal ger exakt en av resterna \\(0,1,\\ldots,n-1\\), så det finns \\(n\\) lådor. Vi har \\(n+1\\) heltal, alltså måste två av dem, säg \\(a\\) och \\(b\\), ge samma rest.</p><p>Då gäller \\(a\\equiv b\\pmod n\\), vilket betyder \\(n\\mid(a-b)\\). Alltså är differensen delbar med \\(n\\).</p>",
    "id": "1.67"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "filer i mappar",
    "poang": "0/2/0",
    "t": "<p>En dator sorterar 73 filer i 12 mappar efter filtyp. Visa att minst en mapp innehåller minst 7 filer.</p>",
    "s": "<p>Mapparna är de 12 lådorna. Om varje mapp innehöll högst 6 filer skulle totalt högst \\(12\\cdot6=72\\) filer få plats.</p><p>Eftersom 73 filer ska sorteras måste någon mapp innehålla <strong>minst 7 filer</strong>.</p>",
    "id": "1.68"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen med månader",
    "poang": "2/0/0",
    "id": "1.119",
    "t": "<p>I en grupp finns 13 personer.</p><p>Visa med lådprincipen att minst två av dem måste vara födda samma månad.</p>",
    "s": "<p>Här är månaderna lådorna, alltså 12 lådor. Personerna är objekten som placeras i lådorna.</p><p>Om 13 personer fördelas på 12 månader måste någon månad innehålla minst två personer enligt <strong>lådprincipen</strong>.</p><p>Alltså måste minst två personer vara födda samma månad.</p>"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen med strumpor",
    "poang": "2/0/0",
    "id": "1.120",
    "t": "<p>I en låda ligger svarta, vita och blå strumpor. Hur många strumpor måste man ta upp i mörker för att vara säker på att få två strumpor av samma färg?</p>",
    "s": "<p>Färgerna är lådorna: svart, vit och blå, alltså 3 lådor.</p><p>I värsta fall kan man först få en svart, en vit och en blå strumpa, alltså tre strumpor utan att ha ett par i samma färg. Nästa strumpa måste då ge samma färg som någon av de tidigare.</p><p><strong>Man måste ta upp 4 strumpor.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen med veckodagar",
    "poang": "2/0/0",
    "t": "<p>Hur många personer behövs minst för att man säkert ska ha två personer som är födda på samma veckodag?</p>",
    "s": "<p>Veckodagarna är 7 lådor. Med 7 personer kan en person ligga i varje låda. Person nummer 8 måste hamna i en redan använd låda.</p><p><strong>8 personer</strong>.</p>",
    "id": "1.133"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen med rester",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 375 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"5 lådor för lådprincipen\">\n<rect width=\"375\" height=\"190\" fill=\"white\"/><rect x=\"40\" y=\"70\" width=\"55\" height=\"70\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/><text x=\"62.5\" y=\"112\" font-size=\"16\">1</text><rect x=\"103\" y=\"70\" width=\"55\" height=\"70\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/><text x=\"125.5\" y=\"112\" font-size=\"16\">2</text><rect x=\"166\" y=\"70\" width=\"55\" height=\"70\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/><text x=\"188.5\" y=\"112\" font-size=\"16\">3</text><rect x=\"229\" y=\"70\" width=\"55\" height=\"70\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/><text x=\"251.5\" y=\"112\" font-size=\"16\">4</text><rect x=\"292\" y=\"70\" width=\"55\" height=\"70\" fill=\"none\" stroke=\"#444\" stroke-width=\"2\"/><text x=\"314.5\" y=\"112\" font-size=\"16\">5</text>\n<text x=\"40\" y=\"45\" font-size=\"16\">Lådor / kategorier</text>\n</svg></span><p>Sex heltal väljs. Visa att minst två av dem ger samma rest vid division med 5.</p>",
    "s": "<p>De möjliga resterna är 0, 1, 2, 3 och 4, alltså fem lådor. Sex heltal fördelas på fem restklasser. Enligt lådprincipen måste minst två heltal hamna i samma restklass.</p>",
    "id": "1.134"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "lådprincipen med minsta garanterade antal",
    "poang": "0/2/0",
    "t": "<p>En skola har 10 klasser. Hur många elever måste skolan ha för att man med säkerhet ska veta att någon klass har minst 31 elever?</p>",
    "s": "<p>För att undvika 31 elever i någon klass kan varje klass ha högst 30 elever. Då ryms</p><p>\\[10\\cdot30=300\\]</p><p>elever. Nästa elev tvingar fram minst 31 i någon klass.</p><p><strong>301 elever</strong>.</p>",
    "id": "1.135"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "E",
    "typ": "lådprincipen färger",
    "poang": "2/0/0",
    "t": "<p>En påse innehåller pennor i fyra färger. Hur många pennor måste man ta för att säkert få minst tre av samma färg?</p>",
    "s": "<p>Med högst två av varje färg kan man ta \\(4\\cdot2=8\\) pennor utan att få tre lika. Nästa penna tvingar fram en tredje av någon färg.</p><p><strong>9 pennor</strong>.</p>",
    "id": "1.150"
  },
  {
    "kap": 1,
    "omr": "ladprincipen",
    "niva": "C",
    "typ": "lådprincipen heltal inom intervall",
    "poang": "0/2/0",
    "t": "<p>Elva heltal väljs ur mängden \\(\\{1,2,\\ldots,20\\}\\). Visa att minst två av de valda talen skiljer högst 1.</p>",
    "s": "<p>Dela talen i 10 lådor:</p><p>\\[(1,2),(3,4),\\ldots,(19,20).\\]</p><p>Elva valda tal fördelas på tio par. Lådprincipen ger att något par innehåller två valda tal. Talen i det paret skiljer 1.</p>",
    "id": "1.151"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "koder med villkor",
    "poang": "2/0/0",
    "t": "<p>En kod består av två bokstäver följda av tre siffror. Bokstäverna väljs bland 26 bokstäver och får upprepas, men den första siffran får inte vara 0. Hur många koder finns?</p>",
    "s": "<p><strong>Idé:</strong> Räkna antalet val position för position.</p><p>De två bokstäverna har 26 val vardera. Den första siffran har 9 val eftersom 0 inte är tillåtet där. De två sista siffrorna har 10 val vardera.</p><p>\\[26\\cdot26\\cdot9\\cdot10\\cdot10=\\mathbf{608\\,400}.\\]</p>",
    "id": "1.39"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "kod med flera val",
    "poang": "2/0/0",
    "t": "<p>Ett konferensmärke får en kod med två <em>olika</em> bokstäver följda av två siffror. Bokstäverna väljs bland 24 möjliga bokstäver. Siffrorna 0–9 får upprepas.</p><p>Hur många olika koder kan bildas?</p>",
    "s": "<p><strong>Idé:</strong> Räkna antalet val position för position. Eftersom bokstäverna måste vara olika minskar antalet bokstavsval efter första positionen.</p><p>Första bokstaven: 24 val.<br>Andra bokstaven: 23 val.<br>Första siffran: 10 val.<br>Andra siffran: 10 val.</p><p>\\[24\\cdot23\\cdot10\\cdot10=\\mathbf{55\\,200}.\\]</p>",
    "id": "1.52"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "produktprincip i spelkontext",
    "poang": "2/0/0",
    "t": "<p>I ett spel väljer en spelare 6 frisyrer, 4 jackor, 5 par skor och 3 bakgrunder till sin avatar. Ett val görs ur varje kategori.</p><p>Hur många olika avatarer kan skapas?</p>",
    "s": "<p><strong>Idé:</strong> Varje frisyr kan kombineras med varje jacka, varje par skor och varje bakgrund.</p><p>\\[6\\cdot4\\cdot5\\cdot3=\\mathbf{360}.\\]</p><p>Det finns alltså <strong>360 olika avatarer</strong>.</p>",
    "id": "1.53"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "C",
    "typ": "produktprincip med förbjudna kombinationer",
    "poang": "0/2/0",
    "t": "<p>En dessert byggs av en botten, en topping och en sås. Det finns 4 bottnar, 6 toppings och 3 såser. En av bottnarna är choklad. Chokladbotten får inte kombineras med två av frukttoppingarna.</p><p>Hur många tillåtna desserter finns?</p>",
    "s": "<p><strong>Idé:</strong> Räkna först alla kombinationer och ta sedan bort de förbjudna.</p><p>Utan begränsningen finns \\(4\\cdot6\\cdot3=72\\) desserter.</p><p>De förbjudna har chokladbotten, en av 2 frukttoppings och valfri sås: \\(1\\cdot2\\cdot3=6\\).</p><p>Alltså finns <strong>\\(72-6=66\\)</strong> tillåtna desserter.</p>",
    "id": "1.54"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "C",
    "typ": "färgning med närliggande villkor",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Flagga med fyra lodräta fält\"><rect width=\"420\" height=\"250\" fill=\"white\"/><rect x=\"80\" y=\"45\" width=\"260\" height=\"160\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.5\"/><line x1=\"145\" y1=\"45\" x2=\"145\" y2=\"205\" stroke=\"#555\" stroke-width=\"2\"/><line x1=\"210\" y1=\"45\" x2=\"210\" y2=\"205\" stroke=\"#555\" stroke-width=\"2\"/><line x1=\"275\" y1=\"45\" x2=\"275\" y2=\"205\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"105\" y=\"130\" font-size=\"24\">1</text><text x=\"170\" y=\"130\" font-size=\"24\">2</text><text x=\"235\" y=\"130\" font-size=\"24\">3</text><text x=\"300\" y=\"130\" font-size=\"24\">4</text></svg></span><p>En flagga består av fyra lodräta fält. Varje fält ska färgas med en av 5 färger. Två fält som ligger bredvid varandra får inte ha samma färg.</p><p>Hur många olika flaggor kan skapas?</p>",
    "s": "<p><strong>Idé:</strong> Första fältet är fritt, men varje följande fält får inte använda färgen direkt till vänster.</p><p>Fält 1: 5 val.<br>Fält 2: 4 val.<br>Fält 3: 4 val.<br>Fält 4: 4 val.</p><p>\\[5\\cdot4^3=\\mathbf{320}.\\]</p>",
    "id": "1.55"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "antal val med multiplikationsprincipen",
    "poang": "2/0/0",
    "id": "1.117",
    "t": "<p>I en glasskiosk väljer man 1 bägare bland 3 sorter, 1 glassmak bland 6 sorter och 1 topping bland 4 sorter.</p><p>På hur många olika sätt kan man välja sin glass?</p>",
    "s": "<p>Först görs ett val av bägare, sedan ett oberoende val av smak och till sist ett oberoende val av topping. Då används multiplikationsprincipen:</p><p>\\[3\\cdot 6\\cdot 4=72.\\]</p><p><strong>Det finns 72 olika val.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "kod med villkor",
    "poang": "2/0/0",
    "id": "1.118",
    "t": "<p>En kod består av två bokstäver följda av tre siffror. Bokstäverna får väljas bland de 26 vanliga versalerna och siffrorna bland 0–9.</p><p>Hur många olika koder finns det?</p>",
    "s": "<p>För första bokstaven finns 26 val och för andra bokstaven också 26 val. För varje sifferplats finns 10 val.</p><p>\\[26\\cdot 26\\cdot 10\\cdot 10\\cdot 10=676\\,000.\\]</p><p><strong>Antalet koder är 676 000.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "val i flera steg",
    "poang": "2/0/0",
    "t": "<p>En lunch består av en av 4 huvudrätter och en av 3 drycker. Hur många olika luncher kan väljas?</p>",
    "s": "<p>Valet av huvudrätt och dryck görs oberoende. Multiplikationsprincipen ger</p><p>\\[4\\cdot3=12.\\]</p><p><strong>12 luncher</strong>.</p>",
    "id": "1.130"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "registreringskod med begränsad första position",
    "poang": "2/0/0",
    "t": "<p>En kod består av en bokstav följd av fyra siffror. Bokstaven väljs bland 20 bokstäver. Den första siffran får inte vara 0, övriga siffror får vara 0–9. Hur många koder finns?</p>",
    "s": "<p>Det finns 20 val för bokstaven, 9 val för första siffran och 10 val för var och en av de tre sista siffrorna:</p><p>\\[20\\cdot9\\cdot10^3=180\\,000.\\]</p><p><strong>180 000 koder</strong>.</p>",
    "id": "1.131"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "C",
    "typ": "kombinera additions- och multiplikationsprincipen",
    "poang": "0/2/0",
    "t": "<p>En biograf säljer paket med antingen <em>popcorn + dryck</em> eller <em>godis + dryck</em>. Det finns 5 sorters popcorn, 7 sorters godis och 4 sorters dryck. Hur många olika paket finns?</p>",
    "s": "<p>Popcornpaket: \\(5\\cdot4=20\\) val. Godispaket: \\(7\\cdot4=28\\) val. Pakettyperna är olika fall, så additionsprincipen ger</p><p>\\[20+28=48.\\]</p><p><strong>48 paket</strong>.</p>",
    "id": "1.132"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "E",
    "typ": "flaggor med färgval",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Flagga med tre lodräta fält\">\n<rect width=\"420\" height=\"230\" fill=\"white\"/>\n<rect x=\"65\" y=\"45\" width=\"290\" height=\"140\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.5\"/>\n<line x1=\"161.7\" y1=\"45\" x2=\"161.7\" y2=\"185\" stroke=\"#555\" stroke-width=\"2\"/>\n<line x1=\"258.3\" y1=\"45\" x2=\"258.3\" y2=\"185\" stroke=\"#555\" stroke-width=\"2\"/>\n<text x=\"102\" y=\"122\" font-size=\"20\">fält 1</text><text x=\"194\" y=\"122\" font-size=\"20\">fält 2</text><text x=\"291\" y=\"122\" font-size=\"20\">fält 3</text>\n</svg></span><p>En flagga har tre lodräta fält. Varje fält ska färgas med en av 5 färger och samma färg får användas flera gånger. Hur många flaggor finns?</p>",
    "s": "<p>Varje fält har 5 oberoende val:</p><p>\\[5^3=125.\\]</p><p><strong>125 flaggor</strong>.</p>",
    "id": "1.148"
  },
  {
    "kap": 1,
    "omr": "multiplikationsprincipen",
    "niva": "C",
    "typ": "koder utan upprepning",
    "poang": "0/2/0",
    "t": "<p>En säkerhetskod består av 3 olika bokstäver följda av 2 olika siffror. Bokstäver väljs bland 8 bokstäver och siffror bland 0–9. Hur många koder finns?</p>",
    "s": "<p>Bokstäver: \\(8\\cdot7\\cdot6\\). Siffror: \\(10\\cdot9\\). Multiplikationsprincipen ger</p><p>\\[8\\cdot7\\cdot6\\cdot10\\cdot9=30\\,240.\\]</p>",
    "id": "1.149"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "permutationer med upprepade objekt",
    "poang": "0/2/0",
    "t": "<p>Hur många olika bokstavsordningar kan bildas av bokstäverna i ordet MATEMATIK?</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. Här gör den det, vilket är signalen för permutationer.</p><p>Ordet har 9 bokstäver. A, M och T förekommer vardera två gånger. Därför blir antalet</p><p>\\[\\frac{9!}{2!2!2!}=\\mathbf{45\\,360}.\\]</p>",
    "id": "1.40"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "prispall",
    "poang": "1/0/0",
    "t": "<p>Åtta finalister tävlar i ett lopp. På hur många sätt kan guld, silver och brons fördelas?</p>",
    "s": "<p><strong>Idé:</strong> Vi väljer tre personer men platserna guld, silver och brons är olika. Därför spelar ordningen roll och vi använder permutationer.</p><p>För guldet finns 8 val, för silvret 7 återstående val och för bronset 6:</p><p>\\[P(8,3)=8\\cdot7\\cdot6=\\mathbf{336}.\\]</p>",
    "id": "1.69"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "spellista",
    "poang": "1/0/0",
    "t": "<p>Sju olika låtar ska placeras i en spellista. På hur många olika sätt kan hela spellistan ordnas?</p>",
    "s": "<p><strong>Idé:</strong> Alla sju låtar används och varje ny ordning ger en ny spellista. Det är därför en permutation av 7 olika objekt.</p><p>\\[7!=7\\cdot6\\cdot5\\cdot4\\cdot3\\cdot2\\cdot1=\\mathbf{5040}.\\]</p>",
    "id": "1.70"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "ordningsvillkor före",
    "poang": "0/2/0",
    "t": "<p>Åtta olika presentationer ska hållas under en dag. Presentation A måste ligga före presentation B, men i övrigt finns inga begränsningar.</p><p>Hur många ordningar är möjliga?</p>",
    "s": "<p><strong>Idé:</strong> Utan villkor finns \\(8!\\) ordningar. För varje ordning där A ligger före B finns en motsvarande ordning där A och B byter plats.</p><p>Exakt hälften uppfyller därför villkoret:</p><p>\\[\\frac{8!}{2}=\\mathbf{20\\,160}.\\]</p>",
    "id": "1.71"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "två objekt intill",
    "poang": "0/2/0",
    "t": "<p>Nio olika böcker ska ställas på en hylla. Två bestämda böcker ska stå bredvid varandra.</p><p>På hur många sätt kan böckerna ordnas?</p>",
    "s": "<p><strong>Idé:</strong> Betrakta de två bestämda böckerna som ett block. Då har vi blocket plus sju andra böcker, alltså 8 objekt att ordna.</p><p>De 8 objekten kan ordnas på \\(8!\\) sätt. Inuti blocket kan böckerna ligga i 2 ordningar.</p><p>\\[2\\cdot8!=\\mathbf{80\\,640}.\\]</p>",
    "id": "1.72"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "upprepade bokstäver",
    "poang": "0/2/0",
    "t": "<p>Hur många olika bokstavsordningar kan bildas av bokstäverna i ordet <strong>STATISTIK</strong>?</p>",
    "s": "<p>Ordet har 9 bokstäver. T förekommer 3 gånger, S 2 gånger och I 2 gånger. Om alla bokstäver vore olika skulle vi ha \\(9!\\) ordningar, men byten mellan identiska bokstäver ger inga nya ord.</p><p>\\[\\frac{9!}{3!2!2!}=\\mathbf{15\\,120}.\\]</p>",
    "id": "1.73"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "inte bredvid varandra",
    "poang": "0/2/0",
    "t": "<p>Tio personer ska ställa sig på led. Två bestämda personer, A och B, vill inte stå bredvid varandra.</p><p>Hur många ordningar är möjliga?</p>",
    "s": "<p><strong>Idé:</strong> Räkna alla ordningar och ta bort dem där A och B står bredvid varandra.</p><p>Alla ordningar: \\(10!\\). Om A och B står ihop behandlas de som ett block. Då ordnas 9 objekt på \\(9!\\) sätt och blocket kan vara AB eller BA.</p><p>\\[10!-2\\cdot9!=3\\,628\\,800-725\\,760=\\mathbf{2\\,903\\,040}.\\]</p>",
    "id": "1.74"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "personer på ändplatser",
    "poang": "0/2/0",
    "t": "<p>Sju personer ska stå på led. Två bestämda lärare ska stå på de två yttersta platserna.</p><p>På hur många sätt kan ledet ordnas?</p>",
    "s": "<p>Lärarna kan byta plats med varandra på \\(2!\\) sätt. De fem övriga personerna kan ordnas på mittplatserna på \\(5!\\) sätt.</p><p>\\[2!\\cdot5!=\\mathbf{240}.\\]</p>",
    "id": "1.75"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "A",
    "typ": "inga särskilda böcker intill",
    "poang": "0/1/2",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 520 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fem övriga böcker med sex möjliga luckor för tre matematikböcker\">\n<rect width=\"520\" height=\"260\" fill=\"white\"/>\n<line x1=\"45\" y1=\"170\" x2=\"475\" y2=\"170\" stroke=\"#333\" stroke-width=\"5\"/>\n<g font-size=\"15\" text-anchor=\"middle\">\n<rect x=\"95\" y=\"72\" width=\"42\" height=\"98\" fill=\"#ddd\" stroke=\"#333\"/><text x=\"116\" y=\"126\">V</text>\n<rect x=\"165\" y=\"60\" width=\"42\" height=\"110\" fill=\"#ddd\" stroke=\"#333\"/><text x=\"186\" y=\"121\">V</text>\n<rect x=\"235\" y=\"80\" width=\"42\" height=\"90\" fill=\"#ddd\" stroke=\"#333\"/><text x=\"256\" y=\"130\">V</text>\n<rect x=\"305\" y=\"66\" width=\"42\" height=\"104\" fill=\"#ddd\" stroke=\"#333\"/><text x=\"326\" y=\"124\">V</text>\n<rect x=\"375\" y=\"76\" width=\"42\" height=\"94\" fill=\"#ddd\" stroke=\"#333\"/><text x=\"396\" y=\"129\">V</text>\n</g>\n<g fill=\"#555\">\n<circle cx=\"75\" cy=\"150\" r=\"5\"/><circle cx=\"151\" cy=\"150\" r=\"5\"/><circle cx=\"221\" cy=\"150\" r=\"5\"/><circle cx=\"291\" cy=\"150\" r=\"5\"/><circle cx=\"361\" cy=\"150\" r=\"5\"/><circle cx=\"437\" cy=\"150\" r=\"5\"/>\n</g>\n<text x=\"260\" y=\"205\" font-size=\"15\" text-anchor=\"middle\">6 möjliga luckor</text>\n<g font-size=\"13\" text-anchor=\"middle\">\n<rect x=\"190\" y=\"218\" width=\"30\" height=\"34\" fill=\"#bbb\" stroke=\"#333\"/><text x=\"205\" y=\"241\">M</text>\n<rect x=\"245\" y=\"218\" width=\"30\" height=\"34\" fill=\"#bbb\" stroke=\"#333\"/><text x=\"260\" y=\"241\">M</text>\n<rect x=\"300\" y=\"218\" width=\"30\" height=\"34\" fill=\"#bbb\" stroke=\"#333\"/><text x=\"315\" y=\"241\">M</text>\n</g>\n</svg></span><p>Åtta olika böcker ska ställas på en hylla. Tre av böckerna är matematikböcker. Ingen av matematikböckerna får stå bredvid en annan matematikbok.</p><p>På hur många sätt kan böckerna ordnas?</p>",
    "s": "<p><strong>Nyckelidé:</strong> Placera först de fem övriga böckerna. De kan ordnas på \\(5!\\) sätt.</p><p>När de står på hyllan finns 6 luckor där matematikböcker kan placeras utan att hamna bredvid varandra. Välj 3 av de 6 luckorna och ordna sedan de tre olika matematikböckerna:</p><p>\\[5!\\binom63 3!=120\\cdot20\\cdot6=\\mathbf{14\\,400}.\\]</p>",
    "id": "1.76"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "två föredrag i bestämd följd",
    "poang": "0/2/0",
    "t": "<p>Sex olika föredrag ska ordnas under en konferens. Föredrag A ska hållas direkt före föredrag B.</p><p>Hur många scheman är möjliga?</p>",
    "s": "<p>Eftersom A måste ligga direkt före B behandlas ”AB” som ett enda block. Tillsammans med de fyra andra föredragen har vi då 5 objekt att ordna.</p><p>\\[5!=\\mathbf{120}.\\]</p><p>Vi multiplicerar inte med 2 eftersom ordningen inom blocket är bestämd.</p>",
    "id": "1.77"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "kod utan upprepning och nollrestriktion",
    "poang": "0/2/0",
    "t": "<p>En kod består av fem olika siffror. Första siffran får inte vara 0.</p><p>Hur många sådana koder finns?</p>",
    "s": "<p><strong>Idé:</strong> Koden kan inte börja med 0 och ingen siffra får återanvändas. Därför måste antalet val uppdateras efter varje vald siffra.</p><p>Första positionen: 9 val (1–9). Därefter återstår 9 möjliga siffror, inklusive 0, sedan 8, 7 och 6.</p><p>\\[9\\cdot9\\cdot8\\cdot7\\cdot6=\\mathbf{27\\,216}.\\]</p><p>Det finns alltså <strong>27 216 koder</strong>.</p>",
    "id": "1.78"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "permutation av olika bokstäver",
    "poang": "2/0/0",
    "id": "1.121",
    "t": "<p>Hur många olika ord kan bildas av bokstäverna i ordet <em>SOLAR</em> om alla bokstäver används?</p>",
    "s": "<p>Ordet har 5 olika bokstäver. Antalet ord fås därför som antalet permutationer av 5 objekt:</p><p>\\[5!=120.\\]</p><p><strong>Det går att bilda 120 olika ord.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "A",
    "typ": "lexikografisk ordning av permutationer",
    "poang": "0/1/2",
    "id": "1.122",
    "t": "<p>Bokstäverna i ordet <em>AFKNOT</em> ska ordnas på alla möjliga sätt.</p><ol type=\"a\"><li>Hur många olika ord kan bildas?</li><li>Om alla orden ordnas i bokstavsordning, vilket nummer får ordet <em>KNOTAF</em>?</li></ol>",
    "s": "<p><strong>a)</strong> Alla 6 bokstäver är olika, så antalet ord är</p><p>\\[6!=720.\\]</p><p><strong>b)</strong> Vi räknar hur många ord som kommer före <em>KNOTAF</em> i lexikografisk ordning.</p><p>Första bokstaven är K. Före K finns A och F.</p><p>Med A först finns \\(5!=120\\) ord och med F först finns också \\(5!=120\\) ord. Alltså 240 ord före.</p><p>Bland ord som börjar på K är andra bokstaven N. Före N finns A, F och O? Nej, efter att K valts bort återstår A, F, N, O, T. Före N kommer A och F, alltså \\(2\\cdot 4!=48\\) ord.</p><p>Nu är vi på 288.</p><p>Tredje bokstaven är O. Efter K och N återstår A, F, O, T. Före O kommer A och F, alltså \\(2\\cdot 3!=12\\) ord. Nu 300.</p><p>Fjärde bokstaven är T. Efter K, N, O återstår A, F, T. Före T kommer A och F, alltså \\(2\\cdot 2!=4\\) ord. Nu 304.</p><p>Femte bokstaven är A. Efter K, N, O, T återstår A och F. Ingen bokstav kommer före A, alltså 0 nya ord.</p><p>Alltså finns 304 ord före <em>KNOTAF</em>. Därför får ordet nummer <strong>305</strong>.</p>"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "A",
    "typ": "permutationer med grannvillkor",
    "poang": "0/1/2",
    "id": "1.123",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Bokhylla med sex platser i rad\">\n<rect width=\"430\" height=\"180\" fill=\"white\"/>\n<rect x=\"35\" y=\"45\" width=\"360\" height=\"90\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n<line x1=\"95\" y1=\"45\" x2=\"95\" y2=\"135\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<line x1=\"155\" y1=\"45\" x2=\"155\" y2=\"135\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<line x1=\"215\" y1=\"45\" x2=\"215\" y2=\"135\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<line x1=\"275\" y1=\"45\" x2=\"275\" y2=\"135\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<line x1=\"335\" y1=\"45\" x2=\"335\" y2=\"135\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<text x=\"58\" y=\"98\" font-size=\"16\">1</text><text x=\"118\" y=\"98\" font-size=\"16\">2</text><text x=\"178\" y=\"98\" font-size=\"16\">3</text><text x=\"238\" y=\"98\" font-size=\"16\">4</text><text x=\"298\" y=\"98\" font-size=\"16\">5</text><text x=\"358\" y=\"98\" font-size=\"16\">6</text>\n</svg></span><p>Tolv olika kemiska ämnen ska placeras på en hylla. Ämne A och ämne B får inte stå bredvid varandra eftersom de kan reagera med varandra.</p><p>På hur många sätt kan ämnena placeras?</p>",
    "s": "<p>Vi räknar först alla möjliga ordningar och drar sedan bort de förbjudna.</p><p>Totalt antal ordningar av 12 olika ämnen är</p><p>\\[12!.\\]</p><p>Om A och B står bredvid varandra kan de ses som ett block. Då har vi blocket \\(AB\\) eller \\(BA\\) samt de övriga 10 ämnena, alltså totalt 11 objekt att ordna.</p><p>Det ger</p><p>\\[2\\cdot 11!\\]</p><p>förbjudna ordningar.</p><p>Alltså blir antalet tillåtna ordningar</p><p>\\[12!-2\\cdot 11!=11!(12-2)=10\\cdot 11!.\\]</p><p><strong>Svaret är \\(399\\,168\\,000\\).</strong></p>"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "ordna personer i rad",
    "poang": "2/0/0",
    "t": "<p>Sex olika personer ställer sig i en kö. På hur många sätt kan de stå?</p>",
    "s": "<p>Alla sex personer är olika och alla platser används. Antalet permutationer är</p><p>\\[6!=720.\\]</p><p><strong>720 sätt</strong>.</p>",
    "id": "1.136"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "permutation med upprepade bokstäver",
    "poang": "2/0/0",
    "t": "<p>Hur många olika bokstavsordningar kan bildas av bokstäverna i ordet ANANAS?</p>",
    "s": "<p>Det finns 6 bokstäver: A förekommer 3 gånger, N 2 gånger och S 1 gång. Därför är antalet olika ordningar</p><p>\\[\\frac{6!}{3!2!}=60.\\]</p><p><strong>60 ordningar</strong>.</p>",
    "id": "1.137"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "två personer ska stå tillsammans",
    "poang": "0/2/0",
    "t": "<p>Åtta elever ska stå på rad. Alva och Bo vill stå bredvid varandra. På hur många sätt kan raden ordnas?</p>",
    "s": "<p>Betrakta Alva och Bo som ett block. Då ska 7 objekt ordnas: blocket plus 6 andra elever. Det kan göras på \\(7!\\) sätt. Inne i blocket kan Alva och Bo byta plats på 2 sätt.</p><p>\\[2\\cdot7!=10\\,080.\\]</p><p><strong>10 080 sätt</strong>.</p>",
    "id": "1.138"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "E",
    "typ": "cirkulär placering introduktion",
    "poang": "2/0/0",
    "t": "<p>Sex personer sitter runt ett runt bord. Rotationer av samma placering räknas som samma. På hur många sätt kan de placeras?</p>",
    "s": "<p>Fixera en person för att ta bort rotationerna. De övriga 5 kan ordnas på</p><p>\\[5!=120\\]</p><p>sätt.</p>",
    "id": "1.152"
  },
  {
    "kap": 1,
    "omr": "permutationer",
    "niva": "C",
    "typ": "ordna med två block",
    "poang": "0/2/0",
    "t": "<p>Nio böcker står på en hylla. Tre fysikböcker ska stå tillsammans och två historieböcker ska också stå tillsammans. Alla böcker är olika. På hur många sätt kan böckerna ordnas?</p>",
    "s": "<p>Betrakta fysikböckerna som ett block och historieböckerna som ett block. Tillsammans med de 4 övriga böckerna blir det 6 objekt att ordna: \\(6!\\) sätt. Inom fysikblocket finns \\(3!\\) ordningar och inom historieblocket \\(2!\\).</p><p>\\[6!3!2!=8640.\\]</p>",
    "id": "1.153"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "gruppval med minst-villkor",
    "poang": "0/2/0",
    "t": "<p>En arbetsgrupp på 5 personer ska väljas bland 7 kvinnor och 4 män. Gruppen ska innehålla minst 3 kvinnor. Hur många grupper är möjliga?</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. När bara vilka objekt som väljs är viktigt används kombinationer.</p><p>Räkna fallen 3, 4 respektive 5 kvinnor:</p><p>\\[\\binom73\\binom42+\\binom74\\binom41+\\binom75\\binom40=210+140+21=\\mathbf{371}.\\]</p>",
    "id": "1.41"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "fördela personer i olika grupper",
    "poang": "0/2/0",
    "t": "<p>12 personer ska fördelas i tre namngivna bilar som tar 3, 4 respektive 5 personer. Platserna inne i bilarna spelar ingen roll. På hur många sätt kan fördelningen göras?</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. När bara vilka objekt som väljs är viktigt används kombinationer.</p><p>Välj först 3 till första bilen och sedan 4 av de återstående 9 till den andra. Resten går i tredje:</p><p>\\[\\binom{12}{3}\\binom94=\\mathbf{27\\,720}.\\]</p>",
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
    "omr": "kombinationer",
    "niva": "C",
    "typ": "kombinationer med minst-villkor",
    "poang": "0/2/0",
    "t": "<p>En arbetsgrupp med 5 personer ska väljas bland 7 elever från NA och 6 elever från TE. Gruppen ska innehålla minst 2 elever från varje program.</p><p>På hur många sätt kan gruppen väljas?</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera först om ordningen spelar roll. När bara vilka objekt som väljs är viktigt används kombinationer.</p><p>Eftersom gruppen har 5 personer är de möjliga fördelningarna \\(2+3\\) eller \\(3+2\\).</p><p>\\[\\binom72\\binom63+\\binom73\\binom62=21\\cdot20+35\\cdot15=945.\\]</p><p><strong>945 grupper</strong>.</p>",
    "id": "1.48"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja sensorer",
    "poang": "1/0/0",
    "t": "<p>Fyra sensorer ska väljas ur en uppsättning med 12 olika sensorer. Ordningen spelar ingen roll.</p><p>Hur många urval finns?</p>",
    "s": "<p><strong>Idé:</strong> Vi väljer vilka 4 sensorer som ska ingå. Sensorernas inbördes ordning spelar ingen roll, så vi använder en kombination.</p><p>\\[\\binom{12}{4}=\\frac{12!}{4!8!}=\\mathbf{495}.\\]</p>",
    "id": "1.79"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja toppings",
    "poang": "1/0/0",
    "t": "<p>En pizza ska få exakt 3 olika toppings från en lista med 9 toppings.</p><p>Hur många olika pizzor kan skapas om ordningen på toppingarna inte spelar roll?</p>",
    "s": "<p><strong>Idé:</strong> En pizza bestäms av vilka tre toppings som väljs, inte av i vilken ordning vi nämner dem. Därför använder vi kombinationer.</p><p>\\[\\binom93=\\frac{9!}{3!6!}=\\mathbf{84}.\\]</p>",
    "id": "1.80"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "kommitté med minstvillkor",
    "poang": "0/3/0",
    "t": "<p>En kommitté med 6 personer ska väljas bland 8 elever från grupp A och 7 elever från grupp B. Kommittén ska innehålla minst 2 personer från varje grupp.</p><p>Hur många kommittéer är möjliga?</p>",
    "s": "<p><strong>Idé:</strong> Eftersom kommittén har 6 personer och minst 2 ska komma från varje grupp finns tre möjliga fördelningar: \\((2,4),(3,3),(4,2)\\).</p><p>\\[\\binom{8}{2}\\binom74+\\binom83\\binom73+\\binom84\\binom72\\]</p><p>\\[=28\\cdot35+56\\cdot35+70\\cdot21=\\mathbf{4410}.\\]</p>",
    "id": "1.81"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "lag med positionskategori",
    "poang": "0/2/0",
    "t": "<p>En tränare ska välja 5 spelare till en övning. Det finns 3 målvakter och 12 utespelare. Exakt en av de fem ska vara målvakt.</p><p>Hur många lag kan väljas?</p>",
    "s": "<p><strong>Idé:</strong> Kravet ”exakt en målvakt” delar urvalet i två oberoende val: en målvakt och fyra utespelare.</p><p>Välj målvakten på \\(\\binom{3}{1}=3\\) sätt och utespelarna på \\(\\binom{12}{4}=495\\) sätt.</p><p>\\[\\binom{3}{1}\\binom{12}{4}=3\\cdot495=\\mathbf{1485}.\\]</p>",
    "id": "1.82"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "minst en från varje kategori",
    "poang": "0/2/0",
    "t": "<p>Ett övningsprov ska innehålla 5 uppgifter. Läraren har 8 algebrauppgifter och 6 kombinatorikuppgifter. Provet ska innehålla minst en uppgift från varje område.</p><p>Hur många olika prov kan skapas om uppgifternas ordning inte spelar roll?</p>",
    "s": "<p><strong>Komplementmetod:</strong> Börja med alla sätt att välja 5 av 14 och ta bort proven som bara innehåller ett område.</p><p>\\[\\binom{14}{5}-\\binom85-\\binom65=2002-56-6=\\mathbf{1940}.\\]</p>",
    "id": "1.83"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "minst en av två specialister",
    "poang": "0/2/0",
    "t": "<p>Ett projektteam med 5 personer ska väljas bland 12 personer. Två av personerna är specialister A och B. Teamet måste innehålla minst en av specialisterna.</p><p>Hur många team är möjliga?</p>",
    "s": "<p><strong>Komplementmetod:</strong> Räkna alla team och ta bort dem som inte innehåller någon av specialisterna.</p><p>\\[\\binom{12}{5}-\\binom{10}{5}=792-252=\\mathbf{540}.\\]</p>",
    "id": "1.84"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "oförenligt par",
    "poang": "0/2/0",
    "t": "<p>Fyra forskningsidéer ska väljas bland 10 olika idéer. Två bestämda idéer, A och B, får inte båda väljas.</p><p>Hur många urval är möjliga?</p>",
    "s": "<p>Räkna alla fyrgrupper och ta bort dem som innehåller både A och B.</p><p>\\[\\binom{10}{4}-\\binom{8}{2}=210-28=\\mathbf{182}.\\]</p><p>I den andra termen är A och B redan valda, så endast två platser återstår.</p>",
    "id": "1.85"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "A",
    "typ": "flera kategorier med minstvillkor",
    "poang": "0/1/2",
    "t": "<p>Sex uppgifter ska väljas från en bank med 4 analysuppgifter, 5 kombinatorikuppgifter och 3 talteoriuppgifter. Minst en uppgift från varje område måste ingå.</p><p>Hur många olika sexuppgiftsprov kan skapas?</p>",
    "s": "<p><strong>Idé:</strong> Använd komplement och inklusion–exklusion.</p><p>Totalt finns \\(\\binom{12}{6}=924\\) urval.</p><p>Utan analys: \\(\\binom86=28\\). Utan kombinatorik: \\(\\binom76=7\\). Utan talteori: \\(\\binom96=84\\).</p><p>Det går inte att välja 6 uppgifter från bara ett av de tre områdena, så inga dubbelborttagna fall behöver läggas tillbaka.</p><p>\\[924-28-7-84=\\mathbf{805}.\\]</p>",
    "id": "1.86"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja två representanter",
    "poang": "1/0/0",
    "t": "<p>Två representanter ska väljas bland 9 elever. Roller eller ordning spelar ingen roll.</p><p>Hur många par kan väljas?</p>",
    "s": "<p><strong>Idé:</strong> Roller saknas, så paret \\(\\{A,B\\}\\) är samma urval som \\(\\{B,A\\}\\). Ordningen spelar alltså inte roll.</p><p>\\[\\binom92=\\frac{9\\cdot8}{2}=\\mathbf{36}.\\]</p>",
    "id": "1.87"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "exakt antal erfarna",
    "poang": "0/2/0",
    "t": "<p>En grupp på 5 personer ska väljas bland 4 erfarna och 8 nya deltagare. Gruppen ska innehålla exakt 2 erfarna.</p><p>Hur många grupper är möjliga?</p>",
    "s": "<p><strong>Idé:</strong> Kravet ”exakt 2 erfarna” betyder att de övriga 3 personerna måste vara nya. Valen görs oberoende inom de två kategorierna.</p><p>\\[\\binom42\\binom83=6\\cdot56=\\mathbf{336}.\\]</p>",
    "id": "1.88"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "högst en från kategori",
    "poang": "0/2/0",
    "t": "<p>Fem laboratorieprover ska väljas bland 7 jordprover och 5 vattenprover. Högst ett vattenprov får väljas.</p><p>Hur många urval finns?</p>",
    "s": "<p><strong>Idé:</strong> ”Högst ett” betyder två fall: 0 eller 1 vattenprov.</p><p>0 vattenprov: \\(\\binom75=21\\).</p><p>1 vattenprov: \\(\\binom51\\binom74=5\\cdot35=175\\).</p><p>Totalt \\(21+175=\\mathbf{196}\\).</p>",
    "id": "1.89"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "lika många från två kategorier",
    "poang": "0/2/0",
    "t": "<p>Sex fotografier ska väljas till en utställning bland 10 landskapsbilder och 8 porträtt. Exakt lika många bilder av varje typ ska väljas.</p><p>Hur många urval finns?</p>",
    "s": "<p><strong>Idé:</strong> Eftersom totalt 6 bilder ska väljas och antalet av de två typerna ska vara lika, måste urvalet bestå av 3 landskapsbilder och 3 porträtt.</p><p>Landskapsbilderna kan väljas på \\(\\binom{10}{3}\\) sätt och porträtten på \\(\\binom83\\) sätt. Valen kan kombineras fritt:</p><p>\\[\\binom{10}{3}\\binom83=120\\cdot56=\\mathbf{6720}.\\]</p>",
    "id": "1.90"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "A",
    "typ": "laguttagning med tre positionstyper",
    "poang": "0/1/2",
    "t": "<p>Ett sexmannalag ska väljas bland 5 försvarare, 5 mittfältare och 4 anfallare. Laget ska innehålla minst en spelare från varje positionstyp och minst 2 försvarare.</p><p>Hur många lag kan väljas?</p>",
    "s": "<p><strong>Idé:</strong> Dela upp efter antalet försvarare.</p><p><strong>2 försvarare:</strong> fördelningarna för mittfältare/anfallare är \\((1,3),(2,2),(3,1)\\):</p><p>\\[\\binom{5}{2}\\left(\\binom51\\binom43+\\binom{5}{2}\\binom42+\\binom53\\binom41\\right)=1200.\\]</p><p><strong>3 försvarare:</strong> \\((1,2),(2,1)\\):</p><p>\\[\\binom53\\left(\\binom51\\binom42+\\binom{5}{2}\\binom41\\right)=700.\\]</p><p><strong>4 försvarare:</strong> en mittfältare och en anfallare:</p><p>\\[\\binom54\\binom51\\binom41=100.\\]</p><p>Totalt <strong>\\(1200+700+100=2000\\)</strong> lag.</p>",
    "id": "1.91"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "exakt en av två personer",
    "poang": "0/2/0",
    "t": "<p>En kommitté med 5 personer ska väljas bland 12 personer. Exakt en av två bestämda personer, A och B, ska ingå.</p><p>Hur många kommittéer är möjliga?</p>",
    "s": "<p><strong>Idé:</strong> Kravet ”exakt en av A och B” innebär två symmetriska fall: A är med och B är inte med, eller B är med och A är inte med.</p><p>Välj först vilken av A och B som ska ingå: 2 möjligheter. När den personen är vald återstår 4 platser, och de väljs bland de 10 personer som varken är A eller B:</p><p>\\[2\\binom{10}{4}=2\\cdot210=\\mathbf{420}.\\]</p>",
    "id": "1.92"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "kortaste vägar i rutnät",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 470 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rutnät från A till B med fem steg åt höger och tre steg upp\"><rect width=\"470\" height=\"340\" fill=\"white\"/><g stroke=\"#bbb\" stroke-width=\"1.2\"><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"235\"/><line x1=\"130\" y1=\"55\" x2=\"130\" y2=\"235\"/><line x1=\"190\" y1=\"55\" x2=\"190\" y2=\"235\"/><line x1=\"250\" y1=\"55\" x2=\"250\" y2=\"235\"/><line x1=\"310\" y1=\"55\" x2=\"310\" y2=\"235\"/><line x1=\"370\" y1=\"55\" x2=\"370\" y2=\"235\"/><line x1=\"70\" y1=\"55\" x2=\"370\" y2=\"55\"/><line x1=\"70\" y1=\"115\" x2=\"370\" y2=\"115\"/><line x1=\"70\" y1=\"175\" x2=\"370\" y2=\"175\"/><line x1=\"70\" y1=\"235\" x2=\"370\" y2=\"235\"/></g><circle cx=\"70\" cy=\"235\" r=\"5\" fill=\"#222\"/><circle cx=\"370\" cy=\"55\" r=\"5\" fill=\"#222\"/><text x=\"48\" y=\"258\" font-size=\"18\">A</text><text x=\"382\" y=\"52\" font-size=\"18\">B</text><text x=\"125\" y=\"280\" font-size=\"15\">endast höger eller upp</text></svg></span><p>En robot ska gå från A till B längs rutnätets linjer. Den får bara gå åt höger eller upp och ska ta en kortaste väg.</p><p>Hur många olika kortaste vägar finns?</p>",
    "s": "<p>Varje kortaste väg består av exakt 5 steg åt höger och 3 steg upp, totalt 8 steg.</p><p>En väg bestäms av vilka 3 av de 8 stegen som är uppsteg. Därför är antalet</p><p>\\[\\binom83=\\mathbf{56}.\\]</p>",
    "id": "1.93"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "obligatoriska uppgifter",
    "poang": "0/2/0",
    "t": "<p>Ett prov ska bestå av 5 uppgifter valda bland 8. Två bestämda uppgifter måste vara med.</p><p>Hur många olika prov kan skapas om ordningen inte spelar roll?</p>",
    "s": "<p><strong>Idé:</strong> De två obligatoriska uppgifterna är redan bestämda och behöver inte väljas igen. Av provets fem platser återstår därför tre.</p><p>Dessa tre uppgifter väljs bland de 6 uppgifter som inte är obligatoriska:</p><p>\\[\\binom63=\\mathbf{20}.\\]</p>",
    "id": "1.94"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja grupp utan ordning",
    "poang": "2/0/0",
    "id": "1.124",
    "t": "<p>En klass har 11 elever. Tre av dem ska väljas till elevrådet.</p><p>På hur många sätt kan valet göras?</p>",
    "s": "<p>Här spelar ordningen ingen roll. Vi ska alltså välja 3 elever av 11, vilket är en kombination:</p><p>\\[\\binom{11}{3}=\\frac{11!}{3!\\,8!}=165.\\]</p><p><strong>Det finns 165 möjliga elevråd.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "A",
    "typ": "kombinationer med upprepning och villkor",
    "poang": "0/1/2",
    "id": "1.125",
    "t": "<p>David ska köpa 12 burkar energidryck. Det finns 4 olika smaker att välja mellan.</p><ol type=\"a\"><li>På hur många sätt kan han välja 12 burkar om bara antalet av varje smak spelar roll?</li><li>På hur många sätt kan han välja burkarna om han vill ha minst en av varje smak?</li></ol>",
    "s": "<p><strong>a)</strong> Låt \\(x_1,x_2,x_3,x_4\\) vara antal burkar av de fyra smakerna. Då söker vi antalet icke-negativa heltalslösningar till</p><p>\\[x_1+x_2+x_3+x_4=12.\\]</p><p>Med separatorer (stjärnor och streck) motsvarar detta att placera 3 streck bland 15 positioner:</p><p>\\[\\binom{15}{3}=455.\\]</p><p><strong>b)</strong> Om minst en av varje smak ska väljas sätter vi \\(y_i=x_i-1\\). Då är \\(y_i\\ge 0\\) och</p><p>\\[y_1+y_2+y_3+y_4=8.\\]</p><p>Antalet lösningar blir då</p><p>\\[\\binom{11}{3}=165.\\]</p><p><strong>Svar:</strong> a) 455 sätt, b) 165 sätt.</p>"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja arbetsgrupp",
    "poang": "2/0/0",
    "t": "<p>Fyra elever ska väljas ur en grupp med 13 elever. På hur många sätt kan gruppen väljas?</p>",
    "s": "<p>Ordningen spelar ingen roll, alltså används kombinationer:</p><p>\\[\\binom{13}{4}=715.\\]</p><p><strong>715 grupper</strong>.</p>",
    "id": "1.139"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja glasskulor utan ordning",
    "poang": "2/0/0",
    "t": "<p>En glassbar har 9 smaker. Du väljer 3 olika smaker till en bägare. På hur många sätt kan valet göras?</p>",
    "s": "<p>Vi väljer 3 av 9 smaker utan hänsyn till ordning:</p><p>\\[\\binom93=84.\\]</p><p><strong>84 val</strong>.</p>",
    "id": "1.140"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "grupp med exakt fördelning",
    "poang": "0/2/0",
    "t": "<p>En projektgrupp på 6 personer ska väljas bland 8 elever från klass A och 7 från klass B. Gruppen ska innehålla exakt 4 från klass A. Hur många grupper finns?</p>",
    "s": "<p>Välj 4 av de 8 från A och 2 av de 7 från B:</p><p>\\[\\binom84\\binom72=70\\cdot21=1470.\\]</p><p><strong>1470 grupper</strong>.</p>",
    "id": "1.141"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "grupp med minst-villkor",
    "poang": "0/2/0",
    "t": "<p>En kommitté på 5 personer väljs bland 6 tekniker och 5 ekonomer. Minst 2 ekonomer ska vara med. Hur många kommittéer är möjliga?</p>",
    "s": "<p>Räkna fallen med 2, 3, 4 eller 5 ekonomer:</p><p>\\[\\binom52\\binom63+\\binom53\\binom62+\\binom54\\binom61+\\binom55\\binom60\\]</p><p>\\[=10\\cdot20+10\\cdot15+5\\cdot6+1=381.\\]</p><p><strong>381 kommittéer</strong>.</p>",
    "id": "1.142"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "kortval",
    "poang": "2/0/0",
    "t": "<p>Hur många femkortshänder kan väljas ur en kortlek med 52 olika kort?</p>",
    "s": "<p>Ordningen spelar ingen roll:</p><p>\\[\\binom{52}{5}=2\\,598\\,960.\\]</p>",
    "id": "1.154"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "E",
    "typ": "välja två representanter",
    "poang": "2/0/0",
    "t": "<p>Två representanter ska väljas bland 14 elever. Hur många par är möjliga?</p>",
    "s": "<p>\\[\\binom{14}{2}=91.\\]</p>",
    "id": "1.155"
  },
  {
    "kap": 1,
    "omr": "kombinationer",
    "niva": "C",
    "typ": "val med förbjudet par",
    "poang": "0/2/0",
    "t": "<p>Fem personer ska väljas bland 12. Två särskilda personer, A och B, får inte båda ingå samtidigt. Hur många grupper är möjliga?</p>",
    "s": "<p>Totalt finns \\(\\binom{12}{5}\\) grupper. Förbjudna grupper innehåller både A och B; då väljs de övriga 3 bland 10 personer:</p><p>\\[\\binom{12}{5}-\\binom{10}{3}=792-120=672.\\]</p>",
    "id": "1.156"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "A",
    "typ": "parameter i binomialkoefficient",
    "poang": "0/0/3",
    "t": "<p>I utvecklingen av \\((1+ax)^8\\) är koefficienten framför \\(x^3\\) fyra gånger så stor som koefficienten framför \\(x^2\\). Bestäm det icke-nollskilda värdet på \\(a\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera vilken term i binomialutvecklingen som kan ge den efterfrågade potensen och bestäm sedan koefficienten.</p><p>Koefficienterna är \\(\\binom83a^3=56a^3\\) och \\(\\binom{8}{2}a^2=28a^2\\). Villkoret ger \\(56a^3=4\\cdot28a^2\\). För \\(a\\ne0\\): \\(56a=112\\), alltså <strong>\\(a=2\\)</strong>.</p>",
    "id": "1.44"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "bestämma koefficient i binomialutveckling",
    "poang": "0/2/0",
    "t": "<p>Bestäm koefficienten framför \\(x^5\\) i utvecklingen av \\((2x-3)^8\\).</p>",
    "s": "<p>En allmän term är \\(\\binom8k(2x)^{8-k}(-3)^k\\). För att få \\(x^5\\) måste \\(8-k=5\\), alltså \\(k=3\\).</p><p>Koefficienten blir</p><p>\\[\\binom83 2^5(-3)^3=56\\cdot32\\cdot(-27)=\\mathbf{-48\\,384}.\\]</p>",
    "id": "1.49"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "koefficient i enkel binomialutveckling",
    "poang": "1/0/0",
    "t": "<p>Bestäm koefficienten framför \\(x^3\\) i utvecklingen av \\((1+2x)^5\\).</p>",
    "s": "<p>För att få \\(x^3\\) väljs termen \\(2x\\) från exakt 3 av de 5 faktorerna. Det kan göras på \\(\\binom53\\) sätt.</p><p>\\[\\binom53 2^3=10\\cdot8=\\mathbf{80}.\\]</p>",
    "id": "1.95"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "konstant term med negativa exponenter",
    "poang": "0/2/0",
    "t": "<p>Bestäm den konstanta termen i utvecklingen av \\[\\left(x^2+\\frac3x\\right)^6.\\]</p>",
    "s": "<p>Om \\(\\frac3x\\) väljs från \\(k\\) faktorer blir termen \\[\\binom{6}{k}(x^2)^{6-k}\\left(\\frac3x\\right)^k.\\]</p><p>Exponent på \\(x\\) är \\(2(6-k)-k=12-3k\\). För en konstant term ska exponenten vara 0, alltså \\(k=4\\).</p><p>\\[\\binom{6}{4} 3^4=15\\cdot81=\\mathbf{1215}.\\]</p>",
    "id": "1.96"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "tecken i binomialkoefficient",
    "poang": "0/2/0",
    "t": "<p>Bestäm koefficienten framför \\(x^4\\) i utvecklingen av \\((2-x)^7\\).</p>",
    "s": "<p><strong>Idé:</strong> För att få \\(x^4\\) måste termen \\(-x\\) väljas från exakt 4 av de 7 faktorerna. De övriga 3 faktorerna bidrar med talet 2.</p><p>Termen blir</p><p>\\[\\binom74 2^3(-x)^4.\\]</p><p>Eftersom \\((-1)^4=1\\) är koefficienten</p><p>\\[\\binom74 2^3=35\\cdot8=\\mathbf{280}.\\]</p>",
    "id": "1.97"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "bestäm parameter från koefficient",
    "poang": "0/2/0",
    "t": "<p>I utvecklingen av \\((1+ax)^6\\) är koefficienten framför \\(x^2\\) lika med 60.</p><p>Bestäm alla reella värden på \\(a\\).</p>",
    "s": "<p><strong>Idé:</strong> I binomialutvecklingen fås \\(x^2\\)-termen genom att välja \\(ax\\) från exakt två av de sex faktorerna.</p><p>Koefficienten är därför</p><p>\\[\\binom62 a^2=15a^2.\\]</p><p>Villkoret säger att denna koefficient är 60:</p><p>\\[15a^2=60\\Rightarrow a^2=4.\\]</p><p>Eftersom frågan gäller alla reella värden får vi <strong>\\(a=2\\) eller \\(a=-2\\)</strong>.</p>",
    "id": "1.98"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "A",
    "typ": "konstant term avancerad",
    "poang": "0/1/2",
    "t": "<p>Bestäm den konstanta termen i utvecklingen av \\[\\left(x+\\frac{2}{x^2}\\right)^9.\\]</p>",
    "s": "<p>Om \\(\\frac{2}{x^2}\\) väljs från \\(k\\) faktorer blir exponenten på \\(x\\)</p><p>\\[(9-k)-2k=9-3k.\\]</p><p>För en konstant term krävs \\(9-3k=0\\), alltså \\(k=3\\).</p><p>Den konstanta termen är \\[\\binom93 2^3=84\\cdot8=\\mathbf{672}.\\]</p>",
    "id": "1.99"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "binomial identitet",
    "poang": "0/2/0",
    "t": "<p>Visa med binomialsatsen att \\[\\binom n0+\\binom n1+\\cdots+\\binom nn=2^n.\\]</p>",
    "s": "<p>Utgå från binomialsatsen \\[(a+b)^n=\\sum_{k=0}^n\\binom nk a^{n-k}b^k.\\]</p><p>Sätt \\(a=1\\) och \\(b=1\\). Då blir vänsterledet \\(2^n\\) och alla potenser av 1 i högerledet blir 1:</p><p>\\[2^n=\\sum_{k=0}^n\\binom nk.\\]</p>",
    "id": "1.100"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "bestäm exponent från koefficient",
    "poang": "0/2/0",
    "t": "<p>Koefficienten framför \\(x^2\\) i utvecklingen av \\((1+x)^n\\) är 45. Bestäm det positiva heltalet \\(n\\).</p>",
    "s": "<p>Koefficienten framför \\(x^2\\) är \\(\\binom n2\\). Därför</p><p>\\[\\frac{n(n-1)}2=45\\Rightarrow n(n-1)=90.\\]</p><p>Två på varandra följande positiva heltal med produkten 90 är 9 och 10, alltså <strong>\\(n=10\\)</strong>.</p>",
    "id": "1.101"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "bestämma koefficient med binomialsatsen",
    "poang": "2/0/0",
    "id": "1.126",
    "t": "<p>Bestäm koefficienten framför \\(x^3\\) i utvecklingen av \\((x+2)^5\\).</p>",
    "s": "<p>En allmän term i utvecklingen av \\((x+2)^5\\) är \\(\\binom{5}{k}x^{5-k}2^k\\).</p><p>För att få \\(x^3\\) måste \\(5-k=3\\), alltså \\(k=2\\).</p><p>Koefficienten blir därför</p><p>\\[\\binom{5}{2}\\cdot 2^2=10\\cdot4=40.\\]</p><p><strong>Koefficienten är 40.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "A",
    "typ": "konstant term i binomialutveckling",
    "poang": "0/2/1",
    "id": "1.127",
    "t": "<p>Bestäm den konstanta termen i utvecklingen av</p><p>\\[\\left(2x^2+\\frac{1}{x}\right)^6.\\]</p>",
    "s": "<p>En allmän term är</p><p>\\[\\binom{6}{k}(2x^2)^{6-k}\\left(\\frac{1}{x}\right)^k=\\binom{6}{k} 2^{6-k}x^{12-3k}.\\]</p><p>Den konstanta termen fås när exponenten på \\(x\\) är 0:</p><p>\\[12-3k=0\\quad\\Rightarrow\\quad k=4.\\]</p><p>Då blir termen</p><p>\\[\\binom{6}{4} 2^{2}=15\\cdot 4=60.\\]</p><p><strong>Den konstanta termen är 60.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "utveckla binom",
    "poang": "2/0/0",
    "t": "<p>Utveckla \\((x+3)^4\\).</p>",
    "s": "<p>Binomialkoefficienterna är 1, 4, 6, 4, 1:</p><p>\\[(x+3)^4=x^4+12x^3+54x^2+108x+81.\\]</p>",
    "id": "1.143"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "bestämma viss term",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Flagga med tre lodräta fält\">\n<rect width=\"420\" height=\"230\" fill=\"white\"/>\n<rect x=\"65\" y=\"45\" width=\"290\" height=\"140\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.5\"/>\n<line x1=\"161.7\" y1=\"45\" x2=\"161.7\" y2=\"185\" stroke=\"#555\" stroke-width=\"2\"/>\n<line x1=\"258.3\" y1=\"45\" x2=\"258.3\" y2=\"185\" stroke=\"#555\" stroke-width=\"2\"/>\n<text x=\"102\" y=\"122\" font-size=\"20\">fält 1</text><text x=\"194\" y=\"122\" font-size=\"20\">fält 2</text><text x=\"291\" y=\"122\" font-size=\"20\">fält 3</text>\n</svg></span><p>Bestäm termen som innehåller \\(x^4\\) i utvecklingen av \\((2x-1)^7\\).</p>",
    "s": "<p>En allmän term är</p><p>\\[\\binom7k(2x)^{7-k}(-1)^k.\\]</p><p>För \\(x^4\\) krävs \\(7-k=4\\), alltså \\(k=3\\). Termen blir</p><p>\\[\\binom73(2x)^4(-1)^3=-35\\cdot16x^4=-560x^4.\\]</p><p><strong>Termen är \\(-560x^4\\)</strong>.</p>",
    "id": "1.144"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "E",
    "typ": "koefficient i enkelt binom",
    "poang": "2/0/0",
    "t": "<p>Bestäm koefficienten framför \\(x^2\\) i \\((1+2x)^6\\).</p>",
    "s": "<p>Termen med \\(x^2\\) fås när två av de sex faktorerna bidrar med \\(2x\\):</p><p>\\[\\binom62 2^2=15\\cdot4=60.\\]</p>",
    "id": "1.157"
  },
  {
    "kap": 1,
    "omr": "binomialsatsen",
    "niva": "C",
    "typ": "bestäm parameter från koefficient",
    "poang": "0/2/0",
    "t": "<p>I utvecklingen av \\((1+ax)^5\\) är koefficienten framför \\(x^2\\) lika med 90. Bestäm positiva \\(a\\).</p>",
    "s": "<p>Koefficienten framför \\(x^2\\) är</p><p>\\[\\binom52a^2=10a^2.\\]</p><p>\\[10a^2=90\\Rightarrow a^2=9.\\]</p><p>Eftersom \\(a\\) är positivt är <strong>\\(a=3\\)</strong>.</p>",
    "id": "1.158"
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
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "A",
    "typ": "kombinatorisk sannolikhet med flera villkor",
    "poang": "0/1/2",
    "t": "<p>En låda innehåller 8 röda, 6 blå och 4 gröna kulor. Fem kulor dras samtidigt utan återläggning.</p><p>Bestäm sannolikheten att exakt två av kulorna är röda och att minst en av de övriga tre är grön.</p>",
    "s": "<p>Totalt finns \\(\\binom{18}{5}\\) möjliga femgrupper.</p><p>Välj först exakt två röda: \\(\\binom{8}{2}\\). Bland de tre återstående ska minst en vara grön. Från de 10 icke-röda kulorna finns totalt \\(\\binom{10}{3}\\) val, men \\(\\binom63\\) av dem innehåller bara blå kulor.</p><p>\\[P=\\frac{\\binom{8}{2}\\left(\\binom{10}{3}-\\binom63\\right)}{\\binom{18}{5}}=\\frac{28(120-20)}{8568}=\\frac{350}{1071}\\approx\\mathbf{0,327}.\\]</p>",
    "id": "1.50"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "E",
    "typ": "två särskilda personer i slumpmässigt lag",
    "poang": "1/0/0",
    "t": "<p>Fyra personer väljs slumpmässigt ur en grupp med 10 personer. Hur stor är sannolikheten att två bestämda personer, A och B, båda blir valda?</p>",
    "s": "<p>Alla fyrgrupper är lika sannolika. Totalt finns \\(\\binom{10}{4}=210\\) grupper.</p><p>Om A och B måste vara med återstår två platser bland de övriga 8: \\(\\binom{8}{2}=28\\).</p><p>\\[P=\\frac{28}{210}=\\mathbf{\\frac{2}{15}}\\approx0,133.\\]</p>",
    "id": "1.102"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "defekta komponenter i stickprov",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Låda med tolv komponenter varav tre markerade som defekta\">\n<rect width=\"430\" height=\"235\" fill=\"white\"/>\n<rect x=\"55\" y=\"30\" width=\"320\" height=\"165\" rx=\"8\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.5\"/>\n<g stroke=\"#333\" stroke-width=\"1.8\">\n<circle cx=\"100\" cy=\"70\" r=\"15\" fill=\"#aaa\"/><circle cx=\"175\" cy=\"70\" r=\"15\" fill=\"#aaa\"/><circle cx=\"250\" cy=\"70\" r=\"15\" fill=\"#aaa\"/><circle cx=\"325\" cy=\"70\" r=\"15\" fill=\"white\"/>\n<circle cx=\"100\" cy=\"120\" r=\"15\" fill=\"white\"/><circle cx=\"175\" cy=\"120\" r=\"15\" fill=\"white\"/><circle cx=\"250\" cy=\"120\" r=\"15\" fill=\"white\"/><circle cx=\"325\" cy=\"120\" r=\"15\" fill=\"white\"/>\n<circle cx=\"100\" cy=\"170\" r=\"15\" fill=\"white\"/><circle cx=\"175\" cy=\"170\" r=\"15\" fill=\"white\"/><circle cx=\"250\" cy=\"170\" r=\"15\" fill=\"white\"/><circle cx=\"325\" cy=\"170\" r=\"15\" fill=\"white\"/>\n</g>\n<text x=\"80\" y=\"220\" font-size=\"14\">3 markerade komponenter är defekta</text>\n</svg></span><p>En låda innehåller 12 komponenter, varav 3 är defekta. Fyra komponenter väljs slumpmässigt utan återläggning.</p><p>Bestäm sannolikheten att exakt en av de valda komponenterna är defekt.</p>",
    "s": "<p>Totalt finns \\(\\binom{12}{4}\\) lika sannolika fyrgrupper.</p><p>För ett gynnsamt urval väljs 1 av de 3 defekta och 3 av de 9 fungerande:</p><p>\\[P=\\frac{\\binom{3}{1}\\binom93}{\\binom{12}{4}}=\\frac{3\\cdot84}{495}=\\mathbf{\\frac{28}{55}}\\approx0,509.\\]</p>",
    "id": "1.103"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "slumpmässig jury",
    "poang": "0/2/0",
    "t": "<p>En jury med 7 personer väljs slumpmässigt bland 9 vuxna och 5 ungdomar. Bestäm sannolikheten att juryn innehåller exakt 2 ungdomar.</p>",
    "s": "<p>Totalt finns \\(\\binom{14}{7}\\) juryer. För exakt 2 ungdomar väljs 2 av de 5 ungdomarna och 5 av de 9 vuxna:</p><p>\\[P=\\frac{\\binom{5}{2}\\binom95}{\\binom{14}{7}}=\\frac{1260}{3432}=\\mathbf{\\frac{105}{286}}\\approx0,367.\\]</p>",
    "id": "1.104"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "kortlek exakt två hjärter",
    "poang": "0/2/0",
    "t": "<p>Fem kort dras slumpmässigt ur en vanlig kortlek med 52 kort. Bestäm sannolikheten att exakt två av korten är hjärter.</p>",
    "s": "<p>Totalt finns \\(\\binom{52}{5}\\) femkortshänder.</p><p>För exakt två hjärter väljs 2 av de 13 hjärterkorten och 3 av de 39 övriga:</p><p>\\[P=\\frac{\\binom{13}{2}\\binom{39}{3}}{\\binom{52}{5}}\\approx\\mathbf{0,274}.\\]</p><p>Det är ungefär <strong>27,4 %</strong>.</p>",
    "id": "1.105"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "A",
    "typ": "villkorad sannolikhet i lagurval",
    "poang": "0/1/2",
    "t": "<p>Fem personer väljs slumpmässigt bland 7 personer från grupp A och 6 från grupp B. Givet att den valda gruppen innehåller minst 2 personer från grupp B, bestäm sannolikheten att den innehåller exakt 3 personer från grupp B.</p>",
    "s": "<p><strong>Viktigt:</strong> Eftersom sannolikheten är villkorad ska nämnaren bara innehålla grupper som uppfyller villkoret ”minst 2 från B”.</p><p>Exakt 3 från B: \\[\\binom63\\binom72=420.\\]</p><p>Villkoret tillåter 2, 3, 4 eller 5 från B:</p><p>\\[N=\\binom62\\binom73+\\binom63\\binom72+\\binom{6}{4}\\binom71+\\binom65\\binom70=1056.\\]</p><p>\\[P=\\frac{420}{1056}=\\mathbf{\\frac{35}{88}}\\approx0,398.\\]</p>",
    "id": "1.106"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "minst en av viss typ",
    "poang": "0/2/0",
    "t": "<p>Fem uppgifter väljs slumpmässigt ur 8 algebrauppgifter och 6 kombinatorikuppgifter. Bestäm sannolikheten att minst en kombinatorikuppgift väljs.</p>",
    "s": "<p><strong>Komplementmetod:</strong> Räkna sannolikheten för motsatsen: att alla fem är algebrauppgifter.</p><p>\\[P=1-\\frac{\\binom85}{\\binom{14}{5}}=1-\\frac{56}{2002}=\\mathbf{\\frac{973}{1001}}\\approx0,972.\\]</p>",
    "id": "1.107"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "två personer bredvid varandra i slumpmässigt led",
    "poang": "0/2/0",
    "t": "<p>Åtta personer ställer sig slumpmässigt på led. Bestäm sannolikheten att två bestämda personer, A och B, hamnar bredvid varandra.</p>",
    "s": "<p>Totalt finns \\(8!\\) ordningar.</p><p>Om A och B står bredvid varandra behandlas de som ett block: \\(7!\\) ordningar av blocket och de sex andra, och 2 ordningar inom blocket.</p><p>\\[P=\\frac{2\\cdot7!}{8!}=\\mathbf{\\frac14}.\\]</p>",
    "id": "1.108"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "lotteri exakt fyra rätt",
    "poang": "0/2/0",
    "t": "<p>I ett lotteri väljer en spelare 6 olika nummer av 30. Sex vinnarnummer dras slumpmässigt. Bestäm sannolikheten att spelaren får exakt 4 rätt.</p>",
    "s": "<p>Totalt finns \\(\\binom{30}{6}\\) möjliga vinnarrader.</p><p>För exakt 4 rätt väljs 4 av spelarens 6 nummer och 2 av de 24 nummer spelaren inte valde:</p><p>\\[P=\\frac{\\binom{6}{4}\\binom{24}{2}}{\\binom{30}{6}}\\approx\\mathbf{0,00697}.\\]</p><p>Det motsvarar ungefär <strong>0,697 %</strong>.</p>",
    "id": "1.109"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "minst två premiumobjekt",
    "poang": "0/2/0",
    "t": "<p>Fem produkter väljs slumpmässigt ur ett parti med 15 produkter, varav 4 är premiumprodukter. Bestäm sannolikheten att minst 2 premiumprodukter väljs.</p>",
    "s": "<p>Totalt finns \\(\\binom{15}{5}\\) femgrupper.</p><p>”Minst 2” innebär 2, 3 eller 4 premiumprodukter:</p><p>\\[N=\\binom42\\binom{11}{3}+\\binom43\\binom{11}{2}+\\binom44\\binom{11}{1}=1221.\\]</p><p>\\[P=\\frac{1221}{\\binom{15}{5}}=\\frac{1221}{3003}\\approx\\mathbf{0,407}.\\]</p>",
    "id": "1.110"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "E",
    "typ": "sannolikhet med kombinationer",
    "poang": "2/0/0",
    "id": "1.128",
    "t": "<p>I en låda finns 5 röda och 3 blå kulor. Två kulor dras samtidigt.</p><p>Bestäm sannolikheten att båda är röda.</p>",
    "s": "<p>Totalt antal sätt att välja 2 kulor av 8 är</p><p>\\[\\binom{8}{2}=28.\\]</p><p>Gynnsamma val är att välja 2 av de 5 röda:</p><p>\\[\\binom{5}{2}=10.\\]</p><p>Sannolikheten blir</p><p>\\[P=\\frac{10}{28}=\\frac{5}{14}.\\]</p><p><strong>Sannolikheten är \\(5/14\\).</strong></p>"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "vägar i rutnät",
    "poang": "0/2/0",
    "id": "1.129",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 340 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rutnät från A till B med tre steg åt höger och två steg uppåt\">\n<rect width=\"340\" height=\"260\" fill=\"white\"/>\n<g stroke=\"#444\" stroke-width=\"1.5\">\n<line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"200\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"200\"/><line x1=\"180\" y1=\"40\" x2=\"180\" y2=\"200\"/><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"200\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"200\"/>\n<line x1=\"60\" y1=\"40\" x2=\"300\" y2=\"40\"/><line x1=\"60\" y1=\"120\" x2=\"300\" y2=\"120\"/><line x1=\"60\" y1=\"200\" x2=\"300\" y2=\"200\"/>\n</g>\n<circle cx=\"60\" cy=\"200\" r=\"4\" fill=\"#222\"/><circle cx=\"240\" cy=\"40\" r=\"4\" fill=\"#222\"/>\n<text x=\"42\" y=\"214\" font-size=\"16\">A</text><text x=\"248\" y=\"36\" font-size=\"16\">B</text>\n</svg></span><p>Man går från punkt A till punkt B i rutnätet genom att bara gå åt höger eller uppåt.</p><ol type=\"a\"><li>Hur många kortaste vägar finns det?</li><li>Hur många av dessa vägar passerar genom punkten mitt i rutnätet, alltså punkten som ligger 2 steg åt höger och 1 steg upp från A?</li></ol>",
    "s": "<p>Från A till B krävs totalt 3 steg åt höger och 2 steg upp, alltså 5 steg.</p><p><strong>a)</strong> Antalet kortaste vägar är antalet sätt att välja vilka 2 av de 5 stegen som ska vara uppsteg:</p><p>\\[\\binom{5}{2}=10.\\]</p><p><strong>b)</strong> Till mittpunkten krävs 2 höger och 1 upp, alltså \\(\\binom{3}{1}=3\\) vägar. Från mittpunkten till B krävs 1 höger och 1 upp, alltså \\(\\binom{2}{1}=2\\) vägar.</p><p>Multiplikationsprincipen ger</p><p>\\[3\\cdot 2=6.\\]</p><p><strong>Det finns 6 sådana vägar.</strong></p>"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "E",
    "typ": "hypergeometrisk exakt en",
    "poang": "2/0/0",
    "t": "<p>En låda innehåller 6 vita och 4 svarta kulor. Tre kulor dras samtidigt. Bestäm sannolikheten att exakt en är svart.</p>",
    "s": "<p>Gynnsamma val: välj 1 svart av 4 och 2 vita av 6. Totalt väljs 3 av 10:</p><p>\\[P=\\frac{\\binom41\\binom62}{\\binom{10}{3}}=\\frac{60}{120}=\\frac12.\\]</p>",
    "id": "1.159"
  },
  {
    "kap": 1,
    "omr": "kombinatorik_sannolikhet",
    "niva": "C",
    "typ": "minst en med komplement",
    "poang": "0/2/0",
    "t": "<p>Fyra kort dras ur en vanlig kortlek. Bestäm sannolikheten att minst ett kort är ett ess.</p>",
    "s": "<p>Det är enklare att använda komplementet: inga ess. Det finns 48 icke-ess.</p><p>\\[P(\\text{minst ett ess})=1-\\frac{\\binom{48}{4}}{\\binom{52}{4}}\\approx0,281.\\]</p>",
    "id": "1.160"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "identifiera geometrisk talföljd",
    "poang": "2/0/0",
    "t": "<p>Beskriv vad som kännetecknar en geometrisk talföljd. Vilka av följande är geometriska?</p><p>A) \\(2,4,6,8,\\ldots\\)<br>B) \\(1,4,9,16,\\ldots\\)<br>C) \\(1,2,4,8,\\ldots\\)<br>D) \\(3,-9,27,-81,\\ldots\\)</p>",
    "s": "<p><strong>Metod:</strong> Undersök om differensen eller kvoten mellan följande termer är konstant.</p><p>I en geometrisk talföljd fås varje ny term genom multiplikation med samma kvot \\(q\\). <strong>C</strong> har \\(q=2\\) och <strong>D</strong> har \\(q=-3\\). A och B är inte geometriska.</p>",
    "id": "2.01"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "skriva ut och beräkna sigma-summa",
    "poang": "2/0/0",
    "t": "<p>Skriv ut termerna och beräkna \\(\\displaystyle\\sum_{k=1}^{4}2k^2\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in indexvärdena ett i taget och kontrollera vilka termer som faktiskt ingår.</p><p>\\[2\\cdot1^2+2\\cdot2^2+2\\cdot3^2+2\\cdot4^2=2+8+18+32=\\mathbf{60}.\\]</p>",
    "id": "2.02"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "identifiera geometriska följder inklusive negativ kvot",
    "poang": "2/0/0",
    "t": "<p>Vilka av följande talföljder är geometriska?</p><p>1) \\(1,4,16,64,\\ldots\\)<br>2) \\(-1,1,-1,1,\\ldots\\)<br>3) \\(\\frac{1}{2},\\frac13,\\frac29,\\frac4{27},\\ldots\\)<br>4) \\(1,\\frac{1}{2},\\frac14,\\frac{1}{16},\\ldots\\)</p>",
    "s": "<p><strong>Metod:</strong> För en geometrisk talföljd är kvoten mellan två följande termer konstant.</p><p><strong>1, 2 och 3</strong> är geometriska med kvoterna \\(4\\), \\(-1\\) respektive \\(2/3\\). Följd 4 byter kvot från \\(1/2\\) till \\(1/4\\) mellan de två sista visade termerna.</p>",
    "id": "2.03"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "tolka geometrisk sigma-summa",
    "poang": "2/0/0",
    "t": "<p>Vilka termer ingår i \\(\\displaystyle\\sum_{k=1}^{4}3\\cdot0,6^k\\)? Beräkna summan.</p>",
    "s": "<p><strong>Metod:</strong> Sätt in indexvärdena ett i taget och kontrollera vilka termer som faktiskt ingår.</p><p>Termerna är \\(1,8\\), \\(1,08\\), \\(0,648\\) och \\(0,3888\\). Summan är <strong>\\(3,9168\\)</strong>.</p>",
    "id": "2.04"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "explicit formel och geometrisk summa",
    "poang": "2/0/0",
    "t": "<p>Talföljden \\(1,3,9,\\ldots,19683\\) innehåller 10 termer.</p><ol type=\"a\"><li>Ange en formel för den \\(n\\):te termen.</li><li>Beräkna summan av de 10 termerna.</li></ol>",
    "s": "<p><strong>Metod:</strong> För en geometrisk talföljd är kvoten mellan två följande termer konstant.</p><ol type=\"a\"><li><strong>\\(a_n=3^{n-1}\\)</strong>.</li><li>\\(S_{10}=\\frac{3^{10}-1}{3-1}=\\mathbf{29\\,524}\\).</li></ol>",
    "id": "2.05"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "upprepade insättningar och geometrisk summa",
    "poang": "2/0/0",
    "t": "<p>Varje födelsedag från 1-årsdagen till och med 20-årsdagen sätts 1000 kr in på ett konto. Årsräntan är 5,2 %. Hur mycket finns på kontot direkt efter insättningen på 20-årsdagen? Anta att räntan läggs till en gång per år.</p>",
    "s": "<p><strong>Metod:</strong> För en geometrisk talföljd är kvoten mellan två följande termer konstant.</p><p>Den första insättningen har vuxit i 19 år och den sista i 0 år:</p><p>\\[1000(1+1,052+\\cdots+1,052^{19})=1000\\frac{1,052^{20}-1}{0,052}\\approx\\mathbf{33\\,774\\text{ kr}}.\\]</p>",
    "id": "2.06"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "sista termer och aritmetisk summa",
    "poang": "2/0/0",
    "t": "<p>En aritmetisk talföljd har 10 termer. De två första är 4 och 11.</p><ol type=\"a\"><li>Bestäm de två sista termerna.</li><li>Bestäm summan av alla termer.</li></ol>",
    "s": "<p><strong>Metod:</strong> För en aritmetisk talföljd är differensen mellan två följande termer konstant.</p><p>Differensen är \\(d=7\\). Då är \\(a_9=4+8\\cdot7=60\\) och \\(a_{10}=67\\). Summan blir</p><p>\\[S_{10}=\\frac{10(4+67)}2=\\mathbf{355}.\\]</p>",
    "id": "2.07"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "typ": "skriva rekursiv formel",
    "poang": "3/0/0",
    "t": "<p>Skriv en rekursiv formel för talföljden \\(2,4,8,16,32,\\ldots\\).</p>",
    "s": "<p><strong>Metod:</strong> En rekursiv formel behöver både startvärde och en regel för hur nästa term fås.</p><p>Varje term är dubbelt så stor som föregående: <strong>\\(a_1=2,\\ a_{n+1}=2a_n\\)</strong>.</p>",
    "id": "2.08"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "klassificera aritmetisk och geometrisk talföljd",
    "poang": "3/0/0",
    "t": "<p>Studera följderna.</p><p>A) \\(2,4,6,8,\\ldots\\)<br>B) \\(1,4,9,16,\\ldots\\)<br>C) \\(1,2,4,8,\\ldots\\)<br>D) \\(3,-9,27,-81,\\ldots\\)</p><ol type=\"a\"><li>Vilka är aritmetiska?</li><li>Vilka är geometriska?</li></ol>",
    "s": "<p><strong>Metod:</strong> Undersök om differensen eller kvoten mellan följande termer är konstant.</p><ol type=\"a\"><li><strong>A</strong>, med differensen 2.</li><li><strong>C och D</strong>, med kvoterna 2 respektive −3.</li></ol>",
    "id": "2.09"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "C",
    "typ": "hitta explicit formel ur differensmönster",
    "poang": "0/2/0",
    "t": "<p>Talföljden börjar</p><p>\\[2,\\ 5,\\ 10,\\ 17,\\ 26,\\ldots\\]</p><ol type=\"a\"><li>Bestäm en explicit formel för \\(a_n\\).</li><li>Bestäm \\(a_{20}\\).</li></ol>",
    "s": "<p>Differenserna är \\(3,5,7,9,\\ldots\\), alltså de udda talen från 3 och framåt. Det stämmer med följden \\(n^2+1\\):</p><p>\\[1^2+1=2,\\quad 2^2+1=5,\\quad 3^2+1=10.\\]</p><p>Alltså <strong>\\(a_n=n^2+1\\)</strong> och <strong>\\(a_{20}=401\\)</strong>.</p>",
    "id": "2.55"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "bestäm nästa termer",
    "poang": "2/0/0",
    "id": "2.67",
    "t": "<p>Talföljden börjar \\(7,11,15,19,\\ldots\\).</p><ol type=\"a\"><li>Skriv de tre nästa termerna.</li><li>Vilken typ av talföljd är detta?</li></ol>",
    "s": "<p>Varje gång ökar talföljden med 4.</p><p><strong>a)</strong> De tre nästa termerna är \\(23,27,31\\).</p><p><strong>b)</strong> Eftersom differensen är konstant är det en <strong>aritmetisk talföljd</strong>.</p>"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "identifiera aritmetisk eller geometrisk",
    "poang": "2/0/0",
    "t": "<p>Avgör om talföljden \\(5,15,45,135,\\ldots\\) är aritmetisk eller geometrisk. Ange i så fall differens eller kvot.</p>",
    "s": "<p>Kvoten mellan två på varandra följande termer är konstant:</p><p>\\[15/5=45/15=135/45=3.\\]</p><p>Följden är <strong>geometrisk med kvoten 3</strong>.</p>",
    "id": "2.96"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "bestäm följande termer från mönster",
    "poang": "2/0/0",
    "t": "<p>Talföljden är \\(1,4,9,16,25,\\ldots\\). Skriv de tre nästa termerna och beskriv mönstret.</p>",
    "s": "<p>Termerna är kvadraterna \\(1^2,2^2,3^2,\\ldots\\). Nästa termer är</p><p><strong>\\(36,49,64\\)</strong>.</p>",
    "id": "2.97"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "C",
    "typ": "explicit formel från andradifferenser",
    "poang": "0/2/0",
    "t": "<p>Talföljden är \\(3,8,15,24,35,\\ldots\\). Bestäm en explicit formel för \\(a_n\\).</p>",
    "s": "<p>Differenserna är \\(5,7,9,11,\\ldots\\), alltså udda tal som ökar med 2. Det tyder på en kvadratisk formel. Testa \\(n^2+2n\\):</p><p>\\[1^2+2=3,\\quad2^2+4=8,\\quad3^2+6=15.\\]</p><p>Alltså <strong>\\(a_n=n^2+2n\\)</strong>.</p>",
    "id": "2.98"
  },
  {
    "kap": 2,
    "omr": "talfoljder_begrepp",
    "niva": "E",
    "typ": "explicit formel enkel",
    "poang": "2/0/0",
    "t": "<p>Bestäm en explicit formel för talföljden \\(4,7,10,13,\\ldots\\).</p>",
    "s": "<p>Det är en aritmetisk följd med \\(a_1=4\\), \\(d=3\\):</p><p>\\[a_n=4+3(n-1)=3n+1.\\]</p>",
    "id": "2.123"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "rekursiv och explicit formel samt lång summa",
    "poang": "3/0/0",
    "t": "<p>Talföljden är \\(11,18,25,32,39,\\ldots\\).</p><ol type=\"a\"><li>Skriv en rekursiv formel.</li><li>Skriv en explicit formel för \\(a_n\\).</li><li>Beräkna \\(\\sum_{i=1}^{100}a_i\\).</li></ol>",
    "s": "<p><strong>Metod:</strong> För en aritmetisk talföljd är differensen mellan två följande termer konstant.</p><ol type=\"a\"><li><strong>\\(a_1=11,\\ a_{n+1}=a_n+7\\)</strong>.</li><li><strong>\\(a_n=11+7(n-1)=7n+4\\)</strong>.</li><li>\\(a_{100}=704\\), alltså \\(S_{100}=\\frac{100(11+704)}2=\\mathbf{35\\,750}\\).</li></ol>",
    "id": "2.10"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "C",
    "typ": "geometrisk summa med bråkkvot",
    "poang": "1/1/0",
    "t": "<p>Beräkna summan av en geometrisk talföljd med fem termer, första termen 1 och kvoten \\(1/3\\).</p>",
    "s": "<p><strong>Metod:</strong> För en geometrisk talföljd är kvoten mellan två följande termer konstant.</p><p>\\[S_5=\\frac{1-(1/3)^5}{1-1/3}=\\frac{121}{81}\\approx\\mathbf{1,494}.\\]</p>",
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
    "s": "<p><strong>Metod:</strong> För en aritmetisk talföljd är differensen mellan två följande termer konstant.</p><p>\\(124=7+3(n-1)\\) ger \\(n=40\\). Summan är</p><p>\\[S_{40}=\\frac{40(7+124)}2=\\mathbf{2620}.\\]</p>",
    "id": "2.13"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "beräkna n:te termen",
    "poang": "2/0/0",
    "id": "2.68",
    "t": "<p>En aritmetisk talföljd har första termen 5 och differensen 3.</p><p>Bestäm den 20:e termen.</p>",
    "s": "<p>Formeln för en aritmetisk talföljd är \\(a_n=a_1+(n-1)d\\).</p><p>Här är \\(a_1=5\\), \\(d=3\\) och \\(n=20\\):</p><p>\\[a_{20}=5+19\\cdot 3=5+57=62.\\]</p><p><strong>Den 20:e termen är 62.</strong></p>"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "summa av aritmetisk talföljd",
    "poang": "2/0/0",
    "id": "2.69",
    "t": "<p>Beräkna summan</p><p>\\[4+7+10+\\ldots+46.\\]</p>",
    "s": "<p>Detta är en aritmetisk talföljd med första termen 4, sista termen 46 och differensen 3.</p><p>Antal termer fås av</p><p>\\[4+(n-1)\\cdot 3=46\\Rightarrow (n-1)\\cdot 3=42\\Rightarrow n=15.\\]</p><p>Summan blir</p><p>\\[S_{15}=\\frac{15(4+46)}{2}=\\frac{15\\cdot 50}{2}=375.\\]</p><p><strong>Summan är 375.</strong></p>"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "n:te term",
    "poang": "2/0/0",
    "t": "<p>En aritmetisk talföljd börjar \\(12,17,22,\\ldots\\). Bestäm \\(a_{30}\\).</p>",
    "s": "<p>Här är \\(a_1=12\\) och \\(d=5\\). Då</p><p>\\[a_{30}=12+29\\cdot5=157.\\]</p>",
    "id": "2.99"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "summa n termer",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 480 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rader på en läktare med ökande antal platser\">\n<rect width=\"480\" height=\"250\" fill=\"white\"/>\n<path d=\"M55 205 H155 V175 H235 V145 H315 V115 H395\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n<g font-size=\"15\"><text x=\"70\" y=\"225\">rad 1</text><text x=\"165\" y=\"195\">rad 2</text><text x=\"245\" y=\"165\">rad 3</text><text x=\"325\" y=\"135\">rad 4</text></g>\n<circle cx=\"80\" cy=\"190\" r=\"4\"/><circle cx=\"102\" cy=\"190\" r=\"4\"/><circle cx=\"124\" cy=\"190\" r=\"4\"/>\n<circle cx=\"175\" cy=\"160\" r=\"4\"/><circle cx=\"197\" cy=\"160\" r=\"4\"/><circle cx=\"219\" cy=\"160\" r=\"4\"/><circle cx=\"241\" cy=\"160\" r=\"4\"/>\n</svg></span><p>En läktare har 18 platser på första raden och 2 fler platser på varje ny rad. Hur många platser finns på de första 12 raderna?</p>",
    "s": "<p>Det är en aritmetisk följd med \\(a_1=18\\), \\(d=2\\). Sista termen är</p><p>\\[a_{12}=18+11\\cdot2=40.\\]</p><p>Summan blir</p><p>\\[S_{12}=\\frac{12(18+40)}2=348.\\]</p><p><strong>348 platser</strong>.</p>",
    "id": "2.100"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "C",
    "typ": "bestäm antal termer från summa",
    "poang": "0/2/0",
    "t": "<p>En aritmetisk talföljd har första termen 7 och differensen 4. Summan av de första \\(n\\) termerna är 462. Bestäm \\(n\\).</p>",
    "s": "<p>Formeln för summan är</p><p>\\[S_n=\\frac n2\\bigl(2a_1+(n-1)d\\bigr).\\]</p><p>Med \\(a_1=7\\), \\(d=4\\) och \\(S_n=462\\) får vi</p><p>\\[462=\\frac n2(14+4n-4)=n(2n+5).\\]</p><p>Alltså</p><p>\\[2n^2+5n-462=0=(n-14)(2n+33).\\]</p><p>Antalet termer måste vara positivt, så <strong>\\(n=14\\)</strong>.</p>",
    "id": "2.101"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "bestäm första term från senare term",
    "poang": "2/0/0",
    "t": "<p>I en aritmetisk talföljd är \\(a_{10}=47\\) och differensen är 5. Bestäm \\(a_1\\).</p>",
    "s": "<p>\\[47=a_1+9\\cdot5\\Rightarrow a_1=2.\\]</p>",
    "id": "2.124"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "C",
    "typ": "två okända från två termer",
    "poang": "0/2/0",
    "t": "<p>I en aritmetisk talföljd är \\(a_5=18\\) och \\(a_{12}=46\\). Bestäm första termen och differensen.</p>",
    "s": "<p>\\[a_1+4d=18,\\qquad a_1+11d=46.\\]</p><p>Subtraktion ger \\(7d=28\\Rightarrow d=4\\). Då \\(a_1=18-16=2\\).</p>",
    "id": "2.125"
  },
  {
    "kap": 2,
    "omr": "aritmetiska_talfoljder",
    "niva": "E",
    "typ": "bestäm senare term från två termer",
    "poang": "2/0/0",
    "t": "<p>I en aritmetisk talföljd är \\(a_3=11\\) och \\(a_7=27\\). Bestäm \\(a_{15}\\).</p>",
    "s": "<p>Från \\(a_7-a_3=4d\\) fås \\(16=4d\\Rightarrow d=4\\). Då \\(a_1=11-2\\cdot4=3\\) och</p><p>\\[a_{15}=3+14\\cdot4=59.\\]</p>",
    "id": "2.140"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "C",
    "typ": "skriva rekursion från växande differenser",
    "poang": "0/2/0",
    "t": "<p>Talföljden \\(0,2,5,9,14,20,\\ldots\\) har successiva differenser \\(2,3,4,5,6,\\ldots\\). Skriv en rekursiv formel för följden.</p>",
    "s": "<p><strong>Metod:</strong> En rekursiv formel behöver både startvärde och en regel för hur nästa term fås.</p><p>Om \\(a_1=0\\), så ökar steget från 2 med 1 varje gång. Från \\(a_n\\) till \\(a_{n+1}\\) adderas \\(n+1\\). Alltså <strong>\\(a_1=0,\\ a_{n+1}=a_n+n+1\\)</strong>.</p>",
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
    "omr": "rekursiva_talfoljder",
    "niva": "C",
    "typ": "från rekursiv till explicit formel",
    "poang": "0/2/0",
    "t": "<p>En talföljd definieras av \\(a_1=3\\) och</p><p>\\[a_{n+1}=2a_n+1.\\]</p><p>Bestäm en explicit formel för \\(a_n\\).</p>",
    "s": "<p>Beräkna några termer: \\(3,7,15,31,\\ldots\\). Om vi adderar 1 får vi \\(4,8,16,32,\\ldots\\), alltså potenser av 2.</p><p>\\[a_n+1=2^{n+1}\\]</p><p>och därmed <strong>\\(a_n=2^{n+1}-1\\)</strong>.</p><p>Kontroll i rekursionen: \\(2(2^{n+1}-1)+1=2^{n+2}-1=a_{n+1}\\).</p>",
    "id": "2.56"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "typ": "beräkna nästa termer ur rekursion",
    "poang": "2/0/0",
    "id": "2.74",
    "t": "<p>En talföljd definieras av \\(a_1=2\\) och \\(a_{n+1}=a_n+5\\).</p><p>Bestäm \\(a_2\\), \\(a_3\\) och \\(a_4\\).</p>",
    "s": "<p>Vi använder rekursionsformeln steg för steg:</p><p>\\[a_2=a_1+5=2+5=7,\\]</p><p>\\[a_3=a_2+5=7+5=12,\\]</p><p>\\[a_4=a_3+5=12+5=17.\\]</p><p><strong>Alltså är \\(a_2=7\\), \\(a_3=12\\) och \\(a_4=17\\).</strong></p>"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "typ": "beräkna rekursivt",
    "poang": "2/0/0",
    "t": "<p>En talföljd ges av \\(a_1=5\\) och \\(a_{n+1}=2a_n-1\\). Bestäm \\(a_2,a_3,a_4\\).</p>",
    "s": "<p>\\[a_2=2\\cdot5-1=9,\\quad a_3=2\\cdot9-1=17,\\quad a_4=2\\cdot17-1=33.\\]</p>",
    "id": "2.108"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "typ": "skriva rekursion för aritmetisk följd",
    "poang": "2/0/0",
    "t": "<p>Skriv en rekursionsformel för talföljden \\(11,15,19,23,\\ldots\\).</p>",
    "s": "<p>Första termen är 11 och varje ny term fås genom att addera 4:</p><p><strong>\\(a_1=11,\\quad a_{n+1}=a_n+4\\)</strong>.</p>",
    "id": "2.109"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "C",
    "typ": "rekursiv modell med procent och tillskott",
    "poang": "0/2/0",
    "t": "<p>Ett konto innehåller från början 10 000 kr. I slutet av varje år läggs först 3 % ränta till och därefter sätts 2 000 kr in. Skriv en rekursionsformel för saldot \\(a_n\\) efter \\(n\\) år och beräkna \\(a_3\\).</p>",
    "s": "<p>Sätt \\(a_0=10000\\). Varje år multipliceras saldot med 1,03 och sedan adderas 2000:</p><p>\\[a_{n+1}=1,03a_n+2000.\\]</p><p>\\[a_1=12300,\\quad a_2=14669,\\quad a_3=17109,07.\\]</p><p><strong>Efter tre år är saldot cirka 17 109 kr.</strong></p>",
    "id": "2.110"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "E",
    "typ": "Fibonacci-liknande rekursion",
    "poang": "2/0/0",
    "t": "<p>En talföljd ges av \\(a_1=2\\), \\(a_2=3\\) och \\(a_{n+2}=a_{n+1}+a_n\\). Bestäm \\(a_3,a_4,a_5\\).</p>",
    "s": "<p>\\[a_3=3+2=5,\\quad a_4=5+3=8,\\quad a_5=8+5=13.\\]</p>",
    "id": "2.130"
  },
  {
    "kap": 2,
    "omr": "rekursiva_talfoljder",
    "niva": "C",
    "typ": "explicit formel från linjär rekursion",
    "poang": "0/2/0",
    "t": "<p>En talföljd uppfyller \\(a_1=4\\) och \\(a_{n+1}=3a_n\\). Skriv en explicit formel och bestäm \\(a_7\\).</p>",
    "s": "<p>Varje term fås genom multiplikation med 3. Följden är geometrisk:</p><p>\\[a_n=4\\cdot3^{n-1}.\\]</p><p>\\[a_7=4\\cdot3^6=2916.\\]</p>",
    "id": "2.131"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "C",
    "typ": "omskriva sigma-summa till sluten form",
    "poang": "0/2/0",
    "t": "<p>Bestäm en sluten form för \\(\\displaystyle\\sum_{k=1}^{n}(5k-2)\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in indexvärdena ett i taget och kontrollera vilka termer som faktiskt ingår.</p><p>\\[\\sum_{k=1}^{n}(5k-2)=5\\frac{n(n+1)}2-2n=\\frac{5n^2+n}{2}.\\]</p><p><strong>\\(\\frac{n(5n+1)}2\\)</strong>.</p>",
    "id": "2.16"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "skriva ut sigma-summa",
    "poang": "2/0/0",
    "id": "2.72",
    "t": "<p>Skriv ut termerna i summan och beräkna värdet:</p><p>\\[\\sum_{k=1}^{5}(2k+1).\\]</p>",
    "s": "<p>Vi sätter in \\(k=1,2,3,4,5\\):</p><p>\\[(2\\cdot1+1)+(2\\cdot2+1)+(2\\cdot3+1)+(2\\cdot4+1)+(2\\cdot5+1)\\]</p><p>\\[=3+5+7+9+11=35.\\]</p><p><strong>Summan är 35.</strong></p>"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "skriva summa med sigma-notation",
    "poang": "2/0/0",
    "id": "2.73",
    "t": "<p>Skriv summan \\(4+8+12+16+20\\) med sigma-notation.</p>",
    "s": "<p>Termerna är multiplar av 4: \\(4\\cdot1,4\\cdot2,\\ldots,4\\cdot5\\).</p><p>Därför kan summan skrivas</p><p><strong>\\(\\displaystyle \\sum_{k=1}^{5}4k\\)</strong>.</p>"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "skriva ut sigma",
    "poang": "2/0/0",
    "t": "<p>Skriv ut termerna och beräkna</p><p>\\[\\sum_{k=0}^{4}3\\cdot2^k.\\]</p>",
    "s": "<p>Termerna är \\(3,6,12,24,48\\). Summan blir</p><p>\\[3+6+12+24+48=93.\\]</p>",
    "id": "2.105"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "skriva med sigma",
    "poang": "2/0/0",
    "t": "<p>Skriv summan \\(2+5+8+11+14\\) med sigma-notation.</p>",
    "s": "<p>Term nummer \\(k\\) kan skrivas \\(3k-1\\) för \\(k=1,\\ldots,5\\). Alltså</p><p><strong>\\(\\displaystyle\\sum_{k=1}^{5}(3k-1)\\)</strong>.</p>",
    "id": "2.106"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "C",
    "typ": "dela upp och beräkna sigma",
    "poang": "0/2/0",
    "t": "<p>Beräkna</p><p>\\[\\sum_{k=1}^{20}(4k-3).\\]</p>",
    "s": "<p>Dela upp summan:</p><p>\\[4\\sum_{k=1}^{20}k-3\\sum_{k=1}^{20}1=4\\cdot\\frac{20\\cdot21}{2}-3\\cdot20.\\]</p><p>\\[=840-60=780.\\]</p><p><strong>780</strong>.</p>",
    "id": "2.107"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "E",
    "typ": "ändra index",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\sum_{k=3}^{7}k\\).</p>",
    "s": "<p>\\[3+4+5+6+7=25.\\]</p>",
    "id": "2.128"
  },
  {
    "kap": 2,
    "omr": "summor_sigma",
    "niva": "C",
    "typ": "geometrisk summa med sigma",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(\\sum_{k=0}^{8}5\\cdot0,8^k\\).</p>",
    "s": "<p>Det är en geometrisk summa med 9 termer:</p><p>\\[5\\frac{1-0,8^9}{1-0,8}\\approx21,64.\\]</p>",
    "id": "2.129"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "C",
    "typ": "upprepad medicindos som geometrisk summa",
    "poang": "0/2/0",
    "t": "<p>En patient får 6 mg av en substans varje timme. Under varje timme bryts 18 % av den mängd som finns i kroppen ned. Hur mycket finns i kroppen direkt efter den åttonde dosen?</p>",
    "s": "<p><strong>Metod:</strong> För en geometrisk talföljd är kvoten mellan två följande termer konstant.</p><p>Efter varje timme återstår faktorn \\(0,82\\). Direkt efter åttonde dosen finns</p><p>\\[6(1+0,82+\\cdots+0,82^7)=6\\frac{1-0,82^8}{1-0,82}\\approx\\mathbf{26,5\\text{ mg}}.\\]</p>",
    "id": "2.17"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "A",
    "typ": "bestämma dos från målvärde",
    "poang": "0/1/2",
    "t": "<p>En substans bryts ned med 22 % varje timme. Tolv lika stora doser ges med en timmes mellanrum. Hur stor ska varje dos vara för att mängden direkt efter den tolfte dosen ska vara 900 mg?</p>",
    "s": "<p><strong>Metod:</strong> För en geometrisk talföljd är kvoten mellan två följande termer konstant.</p><p>Om dosen är \\(d\\) mg får vi</p><p>\\[900=d(1+0,78+\\cdots+0,78^{11})=d\\frac{1-0,78^{12}}{1-0,78}.\\]</p><p>Därför <strong>\\(d=900\\frac{0,22}{1-0,78^{12}}\\approx208,6\\text{ mg}\\)</strong>.</p>",
    "id": "2.18"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "bestämma n:te term i geometrisk talföljd",
    "poang": "2/0/0",
    "id": "2.70",
    "t": "<p>En geometrisk talföljd har första termen 3 och kvoten 2.</p><p>Bestäm den 8:e termen.</p>",
    "s": "<p>Formeln är \\(a_n=a_1\\cdot k^{n-1}\\).</p><p>\\[a_8=3\\cdot 2^{7}=3\\cdot 128=384.\\]</p><p><strong>Den 8:e termen är 384.</strong></p>"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "summa av geometrisk talföljd",
    "poang": "2/0/0",
    "id": "2.71",
    "t": "<p>Beräkna summan av de sex första termerna i den geometriska talföljden</p><p>\\[2,6,18,\\ldots\\]</p>",
    "s": "<p>Här är första termen \\(a_1=2\\) och kvoten \\(k=3\\).</p><p>Summan av de sex första termerna blir</p><p>\\[S_6=\\frac{a_1(k^6-1)}{k-1}=\\frac{2(3^6-1)}{3-1}=3^6-1=729-1=728.\\]</p><p><strong>Summan är 728.</strong></p>"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "n:te term geometrisk",
    "poang": "2/0/0",
    "t": "<p>En geometrisk talföljd börjar \\(160,80,40,\\ldots\\). Bestäm den åttonde termen.</p>",
    "s": "<p>Första termen är 160 och kvoten \\(k=0,5\\). Då</p><p>\\[a_8=160\\cdot0,5^7=1,25.\\]</p><p><strong>\\(a_8=1,25\\)</strong>.</p>",
    "id": "2.102"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "geometrisk summa",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(5+10+20+40+80\\).</p>",
    "s": "<p>Det är en geometrisk summa med \\(a_1=5\\), \\(k=2\\) och 5 termer:</p><p>\\[S_5=5\\frac{2^5-1}{2-1}=5\\cdot31=155.\\]</p>",
    "id": "2.103"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "C",
    "typ": "upprepad procentuell minskning",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Staplar som minskar geometriskt\">\n<rect width=\"430\" height=\"250\" fill=\"white\"/>\n<line x1=\"45\" y1=\"210\" x2=\"395\" y2=\"210\" stroke=\"#333\" stroke-width=\"2\"/>\n<rect x=\"65\" y=\"50\" width=\"45\" height=\"160\" fill=\"#888\" fill-opacity=\".22\" stroke=\"#444\"/>\n<rect x=\"135\" y=\"82\" width=\"45\" height=\"128\" fill=\"#888\" fill-opacity=\".22\" stroke=\"#444\"/>\n<rect x=\"205\" y=\"108\" width=\"45\" height=\"102\" fill=\"#888\" fill-opacity=\".22\" stroke=\"#444\"/>\n<rect x=\"275\" y=\"128\" width=\"45\" height=\"82\" fill=\"#888\" fill-opacity=\".22\" stroke=\"#444\"/>\n<text x=\"70\" y=\"230\" font-size=\"14\">0</text><text x=\"140\" y=\"230\" font-size=\"14\">1</text><text x=\"210\" y=\"230\" font-size=\"14\">2</text><text x=\"280\" y=\"230\" font-size=\"14\">3</text>\n<text x=\"335\" y=\"35\" font-size=\"15\">faktor k</text>\n</svg></span><p>En maskin är värd 240 000 kr. Värdet minskar med 18 % per år. Efter hur många hela år är värdet för första gången under 100 000 kr?</p>",
    "s": "<p>Efter \\(n\\) år är värdet</p><p>\\[V_n=240000\\cdot0,82^n.\\]</p><p>Vi söker minsta heltal \\(n\\) som uppfyller</p><p>\\[240000\\cdot0,82^n\\lt100000.\\]</p><p>Logaritmer ger \\(n\\gt4,42\\). Minsta hela antal år är därför <strong>5 år</strong>.</p>",
    "id": "2.104"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "bestäm kvot",
    "poang": "2/0/0",
    "t": "<p>I en geometrisk talföljd är \\(a_1=5\\) och \\(a_4=135\\). Bestäm den positiva kvoten.</p>",
    "s": "<p>\\[135=5k^3\\Rightarrow k^3=27\\Rightarrow k=3.\\]</p>",
    "id": "2.126"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "C",
    "typ": "summa till oändlighet",
    "poang": "0/2/0",
    "t": "<p>En geometrisk serie har första termen 12 och kvoten 0,25. Bestäm summan till oändlighet.</p>",
    "s": "<p>Eftersom \\(|k|\\lt1\\) konvergerar serien:</p><p>\\[S=\\frac{a_1}{1-k}=\\frac{12}{0,75}=16.\\]</p>",
    "id": "2.127"
  },
  {
    "kap": 2,
    "omr": "geometriska_talfoljder",
    "niva": "E",
    "typ": "bestäm tidigare term",
    "poang": "2/0/0",
    "t": "<p>I en geometrisk talföljd är \\(a_4=54\\) och kvoten är 3. Bestäm \\(a_1\\).</p>",
    "s": "<p>\\[54=a_1\\cdot3^3=27a_1\\Rightarrow a_1=2.\\]</p>",
    "id": "2.139"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "bestämma restklass",
    "poang": "1/0/0",
    "t": "<p>Bestäm \\(n\\) om \\(29\\equiv n\\pmod5\\) och \\(0\\le n&lt;5\\).</p>",
    "s": "<p><strong>Metod:</strong> Kongruens beskriver resten vid division med modulen.</p><p>Att bestämma \\(n\\) här betyder att hitta resten när 29 divideras med 5.</p><p>\\[29=5\\cdot5+4.\\]</p><p>Resten är 4, alltså <strong>\\(n=4\\)</strong>.</p>",
    "id": "2.19"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "förenkla produkt modulo",
    "poang": "1/0/0",
    "t": "<p>Förenkla \\(21\\cdot102\\pmod4\\).</p>",
    "s": "<p><strong>Idé:</strong> Reducera faktorerna modulo 4 innan du multiplicerar.</p><p>\\[21\\equiv1\\pmod4,\\qquad102\\equiv2\\pmod4.\\]</p><p>Därför</p><p>\\[21\\cdot102\\equiv1\\cdot2\\equiv\\mathbf2\\pmod4.\\]</p>",
    "id": "2.20"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "ge exempel på kongruenta tal",
    "poang": "1/0/0",
    "t": "<p>Ge två olika heltal som är kongruenta med 7 modulo 9. Motivera.</p>",
    "s": "<p><strong>Metod:</strong> Kongruens beskriver resten vid division med modulen.</p><p>Exempel: <strong>16 och 25</strong>. Skillnaderna \\(16-7=9\\) och \\(25-7=18\\) är delbara med 9.</p>",
    "id": "2.21"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "multiplikation modulo",
    "poang": "1/0/0",
    "t": "<p>Beräkna \\(18\\cdot33\\pmod{16}\\).</p>",
    "s": "<p><strong>Metod:</strong> Reducera talen modulo modulen innan du räknar vidare.</p><p>Reducera först varje faktor modulo 16:</p><p>\\[18\\equiv2\\pmod{16},\\qquad33\\equiv1\\pmod{16}.\\]</p><p>Alltså</p><p>\\[18\\cdot33\\equiv2\\cdot1\\equiv\\mathbf2\\pmod{16}.\\]</p>",
    "id": "2.22"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "rest vid division",
    "poang": "1/0/0",
    "t": "<p>Beräkna \\(21\\pmod2\\).</p>",
    "s": "<p><strong>Metod:</strong> Kongruens beskriver resten vid division med modulen.</p><p>Modulo 2 finns bara resterna 0 och 1. Eftersom 21 är udda kan det skrivas \\(21=2\\cdot10+1\\).</p><p>Alltså är <strong>\\(21\\equiv1\\pmod2\\)</strong>.</p>",
    "id": "2.23"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "E",
    "typ": "veckodag med modulo 7",
    "poang": "1/0/0",
    "t": "<p>Idag är det tisdag. Vilken veckodag är det om 209 dagar?</p>",
    "s": "<p><strong>Metod:</strong> Situationen upprepas periodiskt och kan därför beskrivas med kongruensräkning.</p><p>Veckodagar upprepas med period 7, så vi räknar modulo 7:</p><p>\\[209=7\\cdot29+6\\quad\\Rightarrow\\quad209\\equiv6\\pmod7.\\]</p><p>Sex dagar efter tisdag är <strong>måndag</strong>.</p>",
    "id": "2.24"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "tolka kongruensnotation",
    "poang": "2/0/0",
    "t": "<p>Förklara med ord vad följande betyder.</p><ol type=\"a\"><li>\\(38\\equiv3\\pmod5\\)</li><li>\\(17\\equiv23\\pmod3\\)</li></ol>",
    "s": "<p><strong>Metod:</strong> Kongruens beskriver resten vid division med modulen.</p><ol type=\"a\"><li>38 och 3 ger samma rest vid division med 5; ekvivalent är \\(38-3\\) delbart med 5.</li><li>17 och 23 ger samma rest vid division med 3; \\(17-23=-6\\) är delbart med 3.</li></ol>",
    "id": "2.25"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "enkel kongruens",
    "poang": "2/0/0",
    "id": "2.64",
    "t": "<p>Bestäm resten då 58 divideras med 7 och skriv sedan en kongruens.</p>",
    "s": "<p>\\(58=56+2=8\\cdot 7+2\\).</p><p>Resten är alltså 2. Med kongruensnotation skrivs detta</p><p><strong>\\(58\\equiv 2\\pmod 7\\)</strong>.</p>"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "bestäm restklass",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(n\\) om \\(83\\equiv n\\pmod 6\\) och \\(0\\le n\\lt6\\).</p>",
    "s": "<p>\\(83=13\\cdot6+5\\), alltså <strong>\\(n=5\\)</strong>.</p>",
    "id": "2.87"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "kongruenta eller inte",
    "poang": "2/0/0",
    "t": "<p>Är 41 och 17 kongruenta modulo 8? Motivera.</p>",
    "s": "<p>Skillnaden är \\(41-17=24\\), som är delbar med 8. Därför</p><p><strong>\\(41\\equiv17\\pmod8\\)</strong>.</p>",
    "id": "2.88"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "ge representant i restklass",
    "poang": "2/0/0",
    "t": "<p>Ge ett negativt heltal som är kongruent med 4 modulo 7.</p>",
    "s": "<p>Vi kan subtrahera 7 från 4: \\(4-7=-3\\). Alltså är exempelvis <strong>\\(-3\\)</strong> kongruent med 4 modulo 7.</p>",
    "id": "2.89"
  },
  {
    "kap": 2,
    "omr": "kongruens",
    "niva": "E",
    "typ": "skriva flera representanter",
    "poang": "2/0/0",
    "t": "<p>Skriv tre heltal som är kongruenta med 2 modulo 6.</p>",
    "s": "<p>Vi kan addera eller subtrahera multiplar av 6. Exempel:</p><p><strong>\\(-4,2,8\\)</strong>.</p>",
    "id": "2.118"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "E",
    "typ": "klockaritmetik",
    "poang": "2/0/0",
    "t": "<p>Klockan är 9. Vad pekar timvisaren på om 110 timmar?</p>",
    "s": "<p>Klockans timvisare upprepar sig efter 12 timmar, så vi räknar modulo 12:</p><p>\\[110=12\\cdot9+2\\quad\\Rightarrow\\quad110\\equiv2\\pmod{12}.\\]</p><p>Två timmar efter 9 pekar timvisaren på <strong>11</strong>.</p>",
    "id": "2.26"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "blandad kongruensberäkning",
    "poang": "2/1/0",
    "t": "<p>Förenkla \\(23+39\\cdot12\\pmod5\\) så långt som möjligt.</p>",
    "s": "<p><strong>Metod:</strong> Reducera talen modulo modulen innan du räknar vidare.</p><p>\\(23\\equiv3\\), \\(39\\equiv4\\) och \\(12\\equiv2\\pmod5\\). Därför</p><p>\\[3+4\\cdot2=11\\equiv\\mathbf1\\pmod5.\\]</p>",
    "id": "2.27"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "bestämma möjliga moduler från differens",
    "poang": "1/1/0",
    "t": "<p>För vilka positiva heltal \\(n\\) gäller \\(37\\equiv2\\pmod n\\)?</p>",
    "s": "<p><strong>Metod:</strong> Översätt villkoret till en delbarhetsfråga innan du bestämmer möjliga heltal.</p><p>Villkoret betyder att \\(n\\mid(37-2)=35\\). De positiva delarna till 35 är <strong>\\(n=1,5,7,35\\)</strong>.</p>",
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
    "s": "<p><strong>Metod:</strong> Reducera talen modulo modulen innan du räknar vidare.</p><p>Potenser av 7 modulo 10 går i cykeln \\(7,9,3,1\\) med period 4. Eftersom \\(2026\\equiv2\\pmod4\\) är slutsiffran samma som för \\(7^2\\): <strong>9</strong>.</p>",
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
    "omr": "kongruens_tillampningar",
    "niva": "C",
    "typ": "veckodag med stor exponent",
    "poang": "0/2/0",
    "t": "<p>Anta att den 1 januari är en måndag. Vilken veckodag är det \\(10^{100}\\) dagar senare?</p>",
    "s": "<p>Vi behöver \\(10^{100}\\pmod7\\). Eftersom \\(10\\equiv3\\pmod7\\) och \\(3^6\\equiv1\\pmod7\\), medan \\(100\\equiv4\\pmod6\\), får vi</p><p>\\[10^{100}\\equiv3^4=81\\equiv4\\pmod7.\\]</p><p>Fyra dagar efter måndag är <strong>fredag</strong>.</p>",
    "id": "2.58"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "A",
    "typ": "kongruenser med flera villkor",
    "poang": "0/1/2",
    "id": "2.66",
    "t": "<p>På ett företag ska de anställda delas in i grupper. Företaget har mellan 500 och 800 anställda, men 10 personer deltar inte i gruppindelningen.</p><p>Antalet deltagare ger resten 1 vid indelning i grupper om 4 eller 8, men saknar 1 person för att gå jämnt upp vid indelning i grupper om 3, 6 eller 9.</p><p>Om deltagarna delas in i grupper om 5 går det jämnt upp. Hur många anställda har företaget?</p>",
    "s": "<p>Låt \\(N\\) vara antalet deltagare. Då gäller</p><p>\\[N\\equiv 1\\pmod 4,\\quad N\\equiv 1\\pmod 8,\\quad N\\equiv -1\\pmod 3,\\quad N\\equiv -1\\pmod 6,\\quad N\\equiv -1\\pmod 9,\\quad N\\equiv 0\\pmod 5.\\]</p><p>Villkoren med 4 och 8 ger tillsammans \\(N\\equiv 1\\pmod 8\\). Villkoren med 3, 6 och 9 ger tillsammans \\(N\\equiv -1\\pmod 18\\), alltså \\(N\\equiv 17\\pmod{18}\\).</p><p>Vi söker alltså tal mellan 490 och 790 som är delbara med 5 och uppfyller dessa kongruenser. Multiplar av 5 som är \\(1\\pmod 8\\) är exempelvis 25, 65, 105, \\dots</p><p>Testar vi tal i intervallet får vi</p><p>\\[N=505\\]</p><p>som ger \\(505\\equiv 1\\pmod 8\\) och \\(505\\equiv 1\\pmod{18}\\)? Nej, då fungerar det inte. Nästa som uppfyller delbarhet med 5 och \\(1\\pmod 8\\) är 545, och \\(545\\equiv 5\\pmod{18}\\). Vid fortsatt kontroll fås</p><p>\\[N=585\\]</p><p>och då gäller \\(585\\equiv 1\\pmod 8\\), \\(585\\equiv 9\\pmod{18}\\), alltså inte heller. Nästa lämpliga är</p><p>\\[N=625, 665, 705, 745, 785.\\]</p><p>Av dessa är \\(665\\equiv 17\\pmod{18}\\), så detta är rätt deltagarantal.</p><p>Totalt antal anställda blir då</p><p>\\[665+10=\\mathbf{675}.\\]</p>"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "E",
    "typ": "klocka modulo 12",
    "poang": "2/0/0",
    "t": "<p>Klockan är 8. Vad visar timvisaren 53 timmar senare?</p>",
    "s": "<p>\\(53\\equiv5\\pmod{12}\\). Fem timmar efter 8 är <strong>1</strong>.</p>",
    "id": "2.94"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "C",
    "typ": "veckodag med exponent",
    "poang": "0/2/0",
    "t": "<p>En måndag inträffar en händelse. Vilken veckodag är det \\(2^{20}\\) dagar senare?</p>",
    "s": "<p>Vi behöver \\(2^{20}\\pmod7\\). Potenser av 2 modulo 7 har period 3 eftersom \\(2^3=8\\equiv1\\pmod7\\). Eftersom \\(20\\equiv2\\pmod3\\):</p><p>\\[2^{20}\\equiv2^2=4\\pmod7.\\]</p><p>Fyra dagar efter måndag är <strong>fredag</strong>.</p>",
    "id": "2.95"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "E",
    "typ": "slutsiffra",
    "poang": "2/0/0",
    "t": "<p>Bestäm slutsiffran i \\(6^{2026}\\).</p>",
    "s": "<p>Alla positiva potenser av 6 slutar på 6. Slutsiffran är <strong>6</strong>.</p>",
    "id": "2.121"
  },
  {
    "kap": 2,
    "omr": "kongruens_tillampningar",
    "niva": "C",
    "typ": "två restvillkor",
    "poang": "0/2/0",
    "t": "<p>Bestäm det minsta positiva heltalet \\(n\\) som uppfyller \\(n\\equiv2\\pmod5\\) och \\(n\\equiv1\\pmod3\\).</p>",
    "s": "<p>Tal som är \\(2\\pmod5\\) är \\(2,7,12,17,\\ldots\\). Av dessa är 7 det första som ger resten 1 vid division med 3. Alltså <strong>\\(n=7\\)</strong>.</p>",
    "id": "2.122"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "A",
    "typ": "lösa simultana kongruenser",
    "poang": "0/1/2",
    "t": "<p>Bestäm det minsta positiva heltalet \\(x\\) som uppfyller</p><p>\\[x\\equiv2\\pmod5,\\qquad x\\equiv4\\pmod7.\\]</p>",
    "s": "<p><strong>Metod:</strong> Reducera talen modulo modulen innan du räknar vidare.</p><p>Skriv \\(x=5k+2\\). Kravet modulo 7 ger \\(5k+2\\equiv4\\), alltså \\(5k\\equiv2\\pmod7\\). Inversen till 5 modulo 7 är 3, så \\(k\\equiv6\\pmod7\\). Minsta \\(k=6\\) ger <strong>\\(x=32\\)</strong>.</p>",
    "id": "2.32"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "stor exponent modulo",
    "poang": "0/2/0",
    "t": "<p>Bestäm resten när \\(3^{2026}+5^{2026}\\) divideras med 7.</p>",
    "s": "<p>För potenser modulo 7 kan exponenten reduceras med period 6. Eftersom \\(2026\\equiv4\\pmod6\\) får vi</p><p>\\[3^{2026}\\equiv3^4=81\\equiv4\\pmod7\\]</p><p>och</p><p>\\[5^{2026}\\equiv5^4=625\\equiv2\\pmod7.\\]</p><p>Summan är \\(4+2=6\\). Resten är alltså <strong>6</strong>.</p>",
    "id": "2.57"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "förenkla modulouttryck",
    "poang": "2/0/0",
    "id": "2.65",
    "t": "<p>Förenkla \\(17\\cdot 23\\pmod 5\\).</p>",
    "s": "<p>Vi reducerar faktorerna modulo 5:</p><p>\\[17\\equiv 2\\pmod 5,\\qquad 23\\equiv 3\\pmod 5.\\]</p><p>Då blir</p><p>\\[17\\cdot 23\\equiv 2\\cdot 3=6\\equiv 1\\pmod 5.\\]</p><p><strong>Svaret är \\(1\\pmod 5\\).</strong></p>"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "summa modulo",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\((37+58)\\pmod 9\\).</p>",
    "s": "<p>\\(37\\equiv1\\pmod9\\) och \\(58\\equiv4\\pmod9\\). Alltså</p><p>\\[37+58\\equiv1+4=5\\pmod9.\\]</p><p><strong>Resten är 5.</strong></p>",
    "id": "2.90"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "potens modulo med kort period",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(2^{10}\\pmod3\\).</p>",
    "s": "<p>\\(2\\equiv-1\\pmod3\\). Då</p><p>\\[2^{10}\\equiv(-1)^{10}=1\\pmod3.\\]</p><p><strong>Resten är 1.</strong></p>",
    "id": "2.91"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "produkt modulo",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(46\\cdot29\\pmod7\\).</p>",
    "s": "<p>\\(46\\equiv4\\pmod7\\) och \\(29\\equiv1\\pmod7\\). Produkten är därför</p><p>\\[4\\cdot1=4\\pmod7.\\]</p>",
    "id": "2.92"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "stor exponent med cykel",
    "poang": "0/2/0",
    "t": "<p>Bestäm resten när \\(7^{2027}\\) divideras med 10.</p>",
    "s": "<p>Sista siffrorna för potenser av 7 följer cykeln \\(7,9,3,1\\) med period 4. Eftersom</p><p>\\[2027\\equiv3\\pmod4\\]</p><p>får \\(7^{2027}\\) samma slutsiffra som \\(7^3\\), alltså <strong>3</strong>.</p>",
    "id": "2.93"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "subtraktion modulo",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\((18-47)\\pmod5\\).</p>",
    "s": "<p>\\(18\\equiv3\\) och \\(47\\equiv2\\pmod5\\). Skillnaden är \\(3-2=1\\). <strong>Resten är 1.</strong></p>",
    "id": "2.119"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "C",
    "typ": "potenssumma modulo",
    "poang": "0/2/0",
    "t": "<p>Bestäm resten när \\(3^{50}+4^{50}\\) divideras med 5.</p>",
    "s": "<p>\\(3^4\\equiv1\\pmod5\\) och \\(50\\equiv2\\pmod4\\), så \\(3^{50}\\equiv3^2=9\\equiv4\\). Vidare \\(4\\equiv-1\\), så \\(4^{50}\\equiv1\\). Summan är \\(4+1=5\\equiv0\\). <strong>Resten är 0.</strong></p>",
    "id": "2.120"
  },
  {
    "kap": 2,
    "omr": "kongruensrakning",
    "niva": "E",
    "typ": "negativa tal modulo",
    "poang": "2/0/0",
    "t": "<p>Bestäm den minsta icke-negativa resten till \\(-23\\pmod7\\).</p>",
    "s": "<p>\\(-23+28=5\\). Alltså \\(-23\\equiv5\\pmod7\\). <strong>Resten är 5.</strong></p>",
    "id": "2.137"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "A",
    "typ": "bevisa delbarhet med kongruens",
    "poang": "0/1/2",
    "t": "<p>Visa att \\(11^{2n}-1\\) är delbart med 120 för varje positivt heltal \\(n\\).</p>",
    "s": "<p><strong>Metod:</strong> Översätt villkoret till en delbarhetsfråga innan du bestämmer möjliga heltal.</p><p>Eftersom \\(11^2=121\\equiv1\\pmod{120}\\) gäller \\(11^{2n}=(11^2)^n\\equiv1^n\\equiv1\\pmod{120}\\). Alltså <strong>\\(11^{2n}-1\\equiv0\\pmod{120}\\)</strong>, vilket visar delbarheten.</p>",
    "id": "2.33"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "omvandla från bas 10 till annan bas",
    "poang": "2/0/0",
    "t": "<p>Skriv talet \\(91_{10}\\) i bas 4.</p>",
    "s": "<p><strong>Idé:</strong> Skriv 91 som en summa av potenser av 4.</p><p>\\[91=1\\cdot4^3+1\\cdot4^2+2\\cdot4+3.\\]</p><p>Koefficienterna framför \\(4^3,4^2,4^1,4^0\\) är alltså 1, 1, 2 och 3. Därför är <strong>\\(91_{10}=1123_4\\)</strong>.</p>",
    "id": "2.34"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "omvandla från annan talbas till bas tio",
    "poang": "2/0/0",
    "t": "<p>Omvandla \\(3241_5\\) till ett tal i bas tio.</p>",
    "s": "<p><strong>Metod:</strong> Använd platsvärdena i den aktuella basen och skriv talet som en summa av baspotenser.</p><p>Platsvärdena är \\(5^3,5^2,5^1,5^0\\):</p><p>\\[3241_5=3\\cdot125+2\\cdot25+4\\cdot5+1=\\mathbf{446}_{10}.\\]</p>",
    "id": "2.53"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "C",
    "typ": "omvandla från bas tio till bas tre",
    "poang": "0/2/0",
    "t": "<p>Omvandla \\(242_{10}\\) till bas tre.</p>",
    "s": "<p>Den största trepotensen som behövs är \\(3^4=81\\). Eftersom</p><p>\\[242=2\\cdot81+2\\cdot27+2\\cdot9+2\\cdot3+2,\\]</p><p>blir svaret <strong>\\(22222_3\\)</strong>.</p><p>Kontroll: \\(2(81+27+9+3+1)=2\\cdot121=242\\).</p>",
    "id": "2.54"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "omvandla från bas två",
    "poang": "2/0/0",
    "id": "2.63",
    "t": "<p>Omvandla \\(101101_2\\) till bas tio.</p>",
    "s": "<p>Vi använder platsvärdena i bas 2:</p><p>\\[101101_2=1\\cdot 2^5+0\\cdot 2^4+1\\cdot 2^3+1\\cdot 2^2+0\\cdot 2^1+1\\cdot 2^0.\\]</p><p>\\[=32+8+4+1=45.\\]</p><p><strong>Svaret är \\(45_{10}\\).</strong></p>"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "bas fyra till bas tio",
    "poang": "2/0/0",
    "t": "<p>Omvandla \\(2312_4\\) till bas tio.</p>",
    "s": "<p>\\[2312_4=2\\cdot4^3+3\\cdot4^2+1\\cdot4+2=128+48+4+2=182.\\]</p><p><strong>\\(182_{10}\\)</strong>.</p>",
    "id": "2.83"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "bas tio till bas två",
    "poang": "2/0/0",
    "t": "<p>Omvandla \\(53_{10}\\) till bas två.</p>",
    "s": "<p>\\(53=32+16+4+1=2^5+2^4+2^2+2^0\\). Därför blir siffrorna på platserna \\(2^5,2^4,\\ldots,2^0\\):</p><p><strong>\\(110101_2\\)</strong>.</p>",
    "id": "2.84"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "bas åtta till bas tio",
    "poang": "2/0/0",
    "t": "<p>Omvandla \\(745_8\\) till bas tio.</p>",
    "s": "<p>\\[745_8=7\\cdot8^2+4\\cdot8+5=448+32+5=485.\\]</p><p><strong>\\(485_{10}\\)</strong>.</p>",
    "id": "2.85"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "C",
    "typ": "addition i bas fem",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(243_5+132_5\\) och skriv svaret i bas fem.</p>",
    "s": "<p>Vi kan räkna i bas tio och omvandla tillbaka:</p><p>\\[243_5=2\\cdot25+4\\cdot5+3=73,\\qquad132_5=42.\\]</p><p>Summan är 115. Eftersom \\(115=4\\cdot25+3\\cdot5+0\\) blir</p><p><strong>\\(430_5\\)</strong>.</p>",
    "id": "2.86"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "bas sex till bas tio",
    "poang": "2/0/0",
    "t": "<p>Omvandla \\(351_6\\) till bas tio.</p>",
    "s": "<p>\\[351_6=3\\cdot36+5\\cdot6+1=139.\\]</p>",
    "id": "2.116"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "C",
    "typ": "hitta okänd siffra i talbas",
    "poang": "0/2/0",
    "t": "<p>Talet \\(2a3_5\\) är lika med \\(68_{10}\\). Bestäm siffran \\(a\\).</p>",
    "s": "<p>\\[2a3_5=2\\cdot25+5a+3=53+5a.\\]</p><p>\\[53+5a=68\\Rightarrow a=3.\\]</p><p><strong>\\(a=3\\)</strong>.</p>",
    "id": "2.117"
  },
  {
    "kap": 2,
    "omr": "talbaser",
    "niva": "E",
    "typ": "bas tio till bas fem",
    "poang": "2/0/0",
    "t": "<p>Omvandla \\(94_{10}\\) till bas fem.</p>",
    "s": "<p>\\(94=3\\cdot25+3\\cdot5+4\\). Därför <strong>\\(334_5\\)</strong>.</p>",
    "id": "2.138"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "största gemensamma delare i kontext",
    "poang": "0/2/0",
    "t": "<p>462 enkronor, 105 tvåkronor och 182 femkronor ska fördelas lika mellan så många kassor som möjligt, utan att några mynt blir över. Hur många kassor kan användas?</p>",
    "s": "<p><strong>Metod:</strong> Översätt villkoret till en delbarhetsfråga innan du bestämmer möjliga heltal.</p><p>Antalet kassor måste dela alla tre talen. \\(\\gcd(462,105)=21\\) och \\(\\gcd(21,182)=7\\). Alltså kan man använda <strong>7 kassor</strong>.</p>",
    "id": "2.35"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "E",
    "typ": "största gemensamma delare",
    "poang": "2/0/0",
    "id": "2.61",
    "t": "<p>Bestäm \\(\\mathrm{sgd}(84,126)\\).</p>",
    "s": "<p>Primtalsfaktorisera båda talen:</p><p>\\[84=2^2\\cdot 3\\cdot 7,\\qquad 126=2\\cdot 3^2\\cdot 7.\\]</p><p>Gemensamma faktorer med minsta exponent är \\(2\\), \\(3\\) och \\(7\\).</p><p>\\[\\mathrm{sgd}(84,126)=2\\cdot 3\\cdot 7=42.\\]</p>"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "E",
    "typ": "delbarhetskontroll",
    "poang": "2/0/0",
    "id": "2.62",
    "t": "<p>Avgör om 693 är delbart med 3, 9 och 11.</p>",
    "s": "<p>Summan av siffrorna är \\(6+9+3=18\\).</p><p>Därför är 693 delbart med 3 och också med 9.</p><p>För 11 kan vi använda regeln med växlande summa:</p><p>\\[(6+3)-9=0.\\]</p><p>Eftersom resultatet är delbart med 11 är även 693 delbart med 11.</p><p><strong>Alltså är 693 delbart med 3, 9 och 11.</strong></p>"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "E",
    "typ": "primtalsfaktorisering",
    "poang": "2/0/0",
    "t": "<p>Primtalsfaktorisera 360.</p>",
    "s": "<p>\\[360=36\\cdot10=(2^2\\cdot3^2)(2\\cdot5)=\\mathbf{2^3\\cdot3^2\\cdot5}.\\]</p>",
    "id": "2.79"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "E",
    "typ": "största gemensamma delare",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(\\mathrm{sgd}(168,252)\\).</p>",
    "s": "<p>\\(168=2^3\\cdot3\\cdot7\\) och \\(252=2^2\\cdot3^2\\cdot7\\). Gemensamma faktorer med lägsta exponent ger</p><p>\\[\\mathrm{sgd}=2^2\\cdot3\\cdot7=84.\\]</p>",
    "id": "2.80"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "E",
    "typ": "minsta gemensamma multipel",
    "poang": "2/0/0",
    "t": "<p>Bestäm minsta positiva tal som är delbart med både 18 och 24.</p>",
    "s": "<p>\\(18=2\\cdot3^2\\) och \\(24=2^3\\cdot3\\). För minsta gemensamma multipel tar vi högsta exponenten av varje primfaktor:</p><p>\\[2^3\\cdot3^2=72.\\]</p><p><strong>72</strong>.</p>",
    "id": "2.81"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "fördela lika stora paket med sgd",
    "poang": "0/2/0",
    "t": "<p>En förening har 144 vattenflaskor och 216 energibars. Man vill göra så många identiska paket som möjligt utan att något blir över. Hur många paket kan göras och vad innehåller varje paket?</p>",
    "s": "<p>Antalet paket måste dela både 144 och 216. Det största möjliga antalet är</p><p>\\[\\mathrm{sgd}(144,216)=72.\\]</p><p>Varje paket får då \\(144/72=2\\) flaskor och \\(216/72=3\\) bars.</p><p><strong>72 paket med 2 flaskor och 3 bars i varje.</strong></p>",
    "id": "2.82"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "E",
    "typ": "Euklides algoritm",
    "poang": "2/0/0",
    "t": "<p>Använd Euklides algoritm för att bestämma \\(\\mathrm{sgd}(391,299)\\).</p>",
    "s": "<p>\\[391=1\\cdot299+92\\]</p><p>\\[299=3\\cdot92+23\\]</p><p>\\[92=4\\cdot23+0.\\]</p><p>Alltså <strong>\\(\\mathrm{sgd}(391,299)=23\\)</strong>.</p>",
    "id": "2.114"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "linjär kombination av sgd",
    "poang": "0/2/0",
    "t": "<p>Visa att \\(\\mathrm{sgd}(84,30)=6\\) och skriv 6 som en heltalskombination av 84 och 30.</p>",
    "s": "<p>Euklides algoritm:</p><p>\\[84=2\\cdot30+24,\\qquad30=1\\cdot24+6.\\]</p><p>Alltså sgd = 6. Bakåtsubstitution:</p><p>\\[6=30-24=30-(84-2\\cdot30)=3\\cdot30-84.\\]</p>",
    "id": "2.115"
  },
  {
    "kap": 2,
    "omr": "delbarhet",
    "niva": "C",
    "typ": "delbarhet med algebra",
    "poang": "0/2/0",
    "t": "<p>Visa att produkten av tre på varandra följande heltal alltid är delbar med 6.</p>",
    "s": "<p>Bland tre på varandra följande heltal finns alltid ett jämnt tal, alltså en faktor 2. Dessutom finns alltid ett tal delbart med 3, alltså en faktor 3. Produkten innehåller därför faktorn \\(2\\cdot3=6\\) och är delbar med 6.</p>",
    "id": "2.136"
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
    "s": "<p><strong>Basfall:</strong> För \\(k=1\\) är vänsterledet \\(5\\) och högerledet \\(1(3\\cdot1+2)=5\\). Formeln stämmer alltså för \\(k=1\\).</p><p><strong>Induktionsantagande:</strong> Anta att formeln gäller för \\(k=p\\):</p><p>\\[\\sum_{n=1}^{p}(6n-1)=p(3p+2).\\]</p><p><strong>Induktionssteg:</strong> Lägg till nästa term \\(6(p+1)-1=6p+5\\):</p><p>\\[\\sum_{n=1}^{p+1}(6n-1)=p(3p+2)+6p+5=3p^2+8p+5.\\]</p><p>Högerledet för \\(p+1\\) är</p><p>\\[(p+1)(3(p+1)+2)=(p+1)(3p+5)=3p^2+8p+5.\\]</p><p>Uttrycken är lika. Därför gäller formeln för \\(p+1\\), och enligt induktionsprincipen för alla positiva heltal \\(k\\).</p>",
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
    "s": "<p><strong>Basfall:</strong> För \\(n=1\\): \\(1=\\frac{1\\cdot2}{2}\\).</p><p><strong>Induktionsantagande:</strong> Anta att</p><p>\\[1+2+\\cdots+k=\\frac{k(k+1)}2.\\]</p><p><strong>Induktionssteg:</strong> För \\(k+1\\) får vi</p><p>\\[1+2+\\cdots+k+(k+1)=\\frac{k(k+1)}2+(k+1).\\]</p><p>Faktorisera \\(k+1\\):</p><p>\\[=(k+1)\\left(\\frac{k}{2}+1\\right)=\\frac{(k+1)(k+2)}2.\\]</p><p>Det är exakt formeln med \\(n=k+1\\). Alltså gäller formeln för alla positiva heltal \\(n\\).</p>",
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
    "s": "<p><strong>Basfall:</strong> För \\(n=0\\) är \\(8^0-5^0=1-1=0\\), som är delbart med 3.</p><p><strong>Induktionsantagande:</strong> Anta att \\(8^k-5^k\\) är delbart med 3. Då finns ett heltal \\(m\\) sådant att</p><p>\\[8^k-5^k=3m.\\]</p><p><strong>Induktionssteg:</strong></p><p>\\[\\begin{aligned}8^{k+1}-5^{k+1}&=8\\cdot8^k-5\\cdot5^k\\\\&=8(8^k-5^k)+(8-5)5^k\\\\&=8\\cdot3m+3\\cdot5^k\\\\&=3(8m+5^k).\\end{aligned}\\]</p><p>Uttrycket har alltså faktor 3. Därmed gäller påståendet för \\(k+1\\), och enligt induktionsprincipen för alla \\(n\\ge0\\).</p>",
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
    "s": "<p><strong>Basfall:</strong> För \\(n=0\\) är \\(2^0=1\\) och \\(0+1=1\\), så olikheten gäller.</p><p><strong>Induktionsantagande:</strong> Anta att \\(2^k\\ge k+1\\).</p><p><strong>Induktionssteg:</strong></p><p>\\[2^{k+1}=2\\cdot2^k\\ge2(k+1)=2k+2.\\]</p><p>För \\(k\\ge0\\) gäller \\(2k+2\\ge k+2\\). Alltså</p><p>\\[2^{k+1}\\ge k+2=(k+1)+1.\\]</p><p>Därmed gäller olikheten för \\(k+1\\), och alltså för alla heltal \\(n\\ge0\\).</p>",
    "id": "2.48"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktionsbevis av delbarhet med faktoruppdelning",
    "poang": "0/1/2",
    "t": "<p>Visa med induktion att \\(7^n-1\\) är delbart med 6 för alla positiva heltal \\(n\\).</p>",
    "s": "<p><strong>Basfall:</strong> För \\(n=1\\) är \\(7^1-1=6\\), som är delbart med 6.</p><p><strong>Induktionsantagande:</strong> Anta att \\(7^k-1\\) är delbart med 6, alltså att \\(7^k-1=6m\\) för något heltal \\(m\\).</p><p><strong>Induktionssteg:</strong></p><p>\\[7^{k+1}-1=7(7^k-1)+6=7\\cdot6m+6=6(7m+1).\\]</p><p>Uttrycket är därför delbart med 6. Alltså gäller påståendet för \\(k+1\\) och därmed för alla positiva heltal \\(n\\).</p>",
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
    "omr": "induktionsbevis",
    "niva": "C",
    "typ": "induktionsbevis av delbarhet",
    "poang": "0/2/0",
    "t": "<p>Visa med induktion att \\(5^{2n}-1\\) är delbart med 24 för alla heltal \\(n\\ge1\\).</p>",
    "s": "<p><strong>Basfall:</strong> För \\(n=1\\) är \\(5^2-1=24\\), alltså delbart med 24.</p><p><strong>Induktionsantagande:</strong> Anta att \\(5^{2k}-1=24m\\) för något heltal \\(m\\).</p><p><strong>Induktionssteg:</strong></p><p>\\[5^{2(k+1)}-1=25\\cdot5^{2k}-1=25(5^{2k}-1)+24.\\]</p><p>Med antagandet blir detta \\(25\\cdot24m+24=24(25m+1)\\), som är delbart med 24. Därmed gäller påståendet för alla \\(n\\ge1\\).</p>",
    "id": "2.60"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "E",
    "typ": "enkel induktion med tydlig struktur",
    "poang": "2/0/0",
    "id": "2.75",
    "t": "<p>Visa med induktion att</p><p>\\[1+3+5+\\ldots +(2n-1)=n^2\\]</p><p>för alla heltal \\(n\\ge 1\\).</p>",
    "s": "<p><strong>Basfall:</strong> För \\(n=1\\) är vänsterledet \\(1\\) och högerledet \\(1^2=1\\). Påståendet stämmer.</p><p><strong>Induktionsantagande:</strong> Anta att</p><p>\\[1+3+5+\\ldots +(2k-1)=k^2.\\]</p><p><strong>Induktionssteg:</strong> För \\(n=k+1\\) får vi</p><p>\\[1+3+\\ldots +(2k-1)+(2(k+1)-1).\\]</p><p>Med induktionsantagandet blir detta</p><p>\\[k^2+(2k+1)=(k+1)^2.\\]</p><p>Därmed gäller formeln också för \\(k+1\\). Alltså är påståendet sant för alla \\(n\\ge 1\\).</p>"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "A",
    "typ": "induktion med delbarhet",
    "poang": "0/1/2",
    "id": "2.76",
    "t": "<p>Visa med induktion att</p><p>\\[7^{2n}-1\\]</p><p>är delbart med 48 för alla heltal \\(n\\ge 1\\).</p>",
    "s": "<p><strong>Basfall:</strong> För \\(n=1\\) är \\(7^2-1=49-1=48\\), alltså delbart med 48.</p><p><strong>Induktionsantagande:</strong> Anta att \\(7^{2k}-1\\) är delbart med 48, alltså att</p><p>\\[7^{2k}-1=48m\\]</p><p>för något heltal \\(m\\).</p><p><strong>Induktionssteg:</strong></p><p>\\[7^{2(k+1)}-1=49\\cdot 7^{2k}-1=48\\cdot 7^{2k}+(7^{2k}-1).\\]</p><p>Den första termen är uppenbart delbar med 48. Den andra termen, \\(7^{2k}-1\\), är delbar med 48 enligt induktionsantagandet. Summan är därför också delbar med 48.</p><p>Alltså gäller påståendet för alla \\(n\\ge 1\\).</p>"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "E",
    "typ": "induktion för aritmetisk summa",
    "poang": "2/0/0",
    "t": "<p>Visa med induktion att</p><p>\\[2+4+6+\\cdots+2n=n(n+1)\\]</p><p>för alla \\(n\\ge1\\).</p>",
    "s": "<p><strong>Basfall:</strong> \\(n=1\\): \\(2=1\\cdot2\\).</p><p><strong>Antagande:</strong> anta \\(2+4+\\cdots+2k=k(k+1)\\).</p><p><strong>Steg:</strong></p><p>\\[2+4+\\cdots+2k+2(k+1)=k(k+1)+2(k+1)=(k+1)(k+2).\\]</p><p>Detta är formeln för \\(n=k+1\\). Alltså gäller påståendet för alla \\(n\\ge1\\).</p>",
    "id": "2.111"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "C",
    "typ": "induktion för delbarhet",
    "poang": "0/2/0",
    "t": "<p>Visa med induktion att \\(4^n-1\\) är delbart med 3 för alla heltal \\(n\\ge1\\).</p>",
    "s": "<p><strong>Basfall:</strong> \\(4^1-1=3\\).</p><p><strong>Antagande:</strong> anta \\(4^k-1=3m\\).</p><p><strong>Steg:</strong></p><p>\\[4^{k+1}-1=4(4^k-1)+3.\\]</p><p>Med antagandet blir detta \\(4\\cdot3m+3=3(4m+1)\\), alltså delbart med 3.</p>",
    "id": "2.112"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "E",
    "typ": "induktion kvadratsumma enkel identitet",
    "poang": "2/0/0",
    "t": "<p>Visa med induktion att \\(1+2+\\cdots+n=\\frac{n(n+1)}2\\).</p>",
    "s": "<p><strong>Basfall:</strong> \\(1=1\\cdot2/2\\).</p><p><strong>Antagande:</strong> anta summan till \\(k\\) är \\(k(k+1)/2\\).</p><p><strong>Steg:</strong></p><p>\\[\\frac{k(k+1)}2+(k+1)=\\frac{(k+1)(k+2)}2.\\]</p><p>Alltså gäller formeln för \\(k+1\\).</p>",
    "id": "2.132"
  },
  {
    "kap": 2,
    "omr": "induktionsbevis",
    "niva": "C",
    "typ": "induktion geometrisk summa",
    "poang": "0/2/0",
    "t": "<p>Visa med induktion att \\(1+2+4+\\cdots+2^n=2^{n+1}-1\\) för \\(n\\ge0\\).</p>",
    "s": "<p><strong>Basfall \\(n=0\\):</strong> \\(1=2^1-1\\).</p><p><strong>Antagande:</strong> anta summan till \\(2^k\\) är \\(2^{k+1}-1\\).</p><p><strong>Steg:</strong></p><p>\\[(2^{k+1}-1)+2^{k+1}=2^{k+2}-1.\\]</p>",
    "id": "2.133"
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
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "A",
    "typ": "Euklides bevis för oändligt många primtal",
    "poang": "0/1/3",
    "t": "<p>Visa med ett motsägelsebevis att det finns oändligt många primtal.</p>",
    "s": "<p>Anta motsatsen: att det bara finns ändligt många primtal \\(p_1,p_2,\\ldots,p_n\\).</p><p>Bilda talet</p><p>\\[N=p_1p_2\\cdots p_n+1.\\]</p><p>För varje primtal \\(p_i\\) ger division av \\(N\\) med \\(p_i\\) resten 1. Alltså är \\(N\\) inte delbart med något av de primtal som enligt antagandet skulle vara alla primtal.</p><p>Men varje heltal större än 1 är antingen ett primtal eller har en primtalsfaktor. Därför måste \\(N\\) ha en primtalsfaktor som inte finns i listan. Det motsäger antagandet. Alltså finns <strong>oändligt många primtal</strong>.</p>",
    "id": "2.59"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "C",
    "typ": "irrationalitetsbevis",
    "poang": "0/2/0",
    "id": "2.77",
    "t": "<p>Visa med ett motsägelsebevis att \\(\\sqrt{12}\\) är irrationellt.</p>",
    "s": "<p>Anta motsatsen: att \\(\\sqrt{12}\\) är rationellt. Då kan det skrivas</p><p>\\[\\sqrt{12}=\\frac{a}{b}\\]</p><p>där \\(a\\) och \\(b\\) är heltal utan gemensamma faktorer och \\(b\\ne 0\\).</p><p>Kvadrera:</p><p>\\[12=\\frac{a^2}{b^2}\\Rightarrow a^2=12b^2.\\]</p><p>Då är \\(a^2\\) delbart med 3, alltså är \\(a\\) delbart med 3. Skriv \\(a=3k\\).</p><p>Insättning ger</p><p>\\[9k^2=12b^2\\Rightarrow 3k^2=4b^2.\\]</p><p>Då är \\(b^2\\) delbart med 3, alltså är \\(b\\) också delbart med 3.</p><p>Men då har \\(a\\) och \\(b\\) en gemensam faktor 3, i strid med antagandet att bråket är förkortat. Motsägelse. Alltså är <strong>\\(\\sqrt{12}\\) irrationellt</strong>.</p>"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "E",
    "typ": "klassisk irrationalitetsbevis",
    "poang": "2/0/0",
    "id": "2.78",
    "t": "<p>Visa med ett motsägelsebevis att \\(\\sqrt{2}\\) är irrationellt.</p>",
    "s": "<p>Anta motsatsen: att \\(\\sqrt{2}\\) är rationellt. Då kan det skrivas</p><p>\\[\\sqrt{2}=\\frac{a}{b}\\]</p><p>där \\(a\\) och \\(b\\) är heltal utan gemensamma faktorer och \\(b\\ne 0\\).</p><p>Kvadrera båda leden:</p><p>\\[2=\\frac{a^2}{b^2}\\Rightarrow a^2=2b^2.\\]</p><p>Alltså är \\(a^2\\) jämnt, och då måste även \\(a\\) vara jämnt. Skriv därför \\(a=2k\\).</p><p>Insättning ger</p><p>\\[4k^2=2b^2\\Rightarrow b^2=2k^2.\\]</p><p>Då är även \\(b^2\\) jämnt, alltså är också \\(b\\) jämnt.</p><p>Men då är både \\(a\\) och \\(b\\) jämna, så de har minst faktorn 2 gemensam. Det strider mot att bråket \\(a/b\\) skulle vara förkortat. Detta är en motsägelse.</p><p>Alltså är <strong>\\(\\sqrt{2}\\) irrationellt</strong>.</p>"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "C",
    "typ": "motsägelsebevis om jämn/udda",
    "poang": "0/2/0",
    "t": "<p>Visa med motsägelsebevis att om \\(n^2\\) är udda så är \\(n\\) udda.</p>",
    "s": "<p>Anta motsatsen: \\(n^2\\) är udda men \\(n\\) är jämnt. Då finns ett heltal \\(k\\) så att \\(n=2k\\). Då</p><p>\\[n^2=4k^2=2(2k^2),\\]</p><p>vilket är jämnt. Det motsäger att \\(n^2\\) är udda. Alltså måste \\(n\\) vara udda.</p>",
    "id": "2.113"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "E",
    "typ": "motsägelse om minsta rationella positiva tal",
    "poang": "2/0/0",
    "t": "<p>Visa med motsägelse att det inte finns något minsta positivt rationellt tal.</p>",
    "s": "<p>Anta att \\(r\\gt0\\) är det minsta positiva rationella talet. Då är \\(r/2\\) också positivt och rationellt, men \\(r/2\\lt r\\). Det motsäger att \\(r\\) var minst. Alltså finns inget minsta positivt rationellt tal.</p>",
    "id": "2.134"
  },
  {
    "kap": 2,
    "omr": "motsagelsebevis",
    "niva": "C",
    "typ": "irrationalitet roten ur 5",
    "poang": "0/2/0",
    "t": "<p>Visa med motsägelsebevis att \\(\\sqrt5\\) är irrationellt.</p>",
    "s": "<p>Anta \\(\\sqrt5=a/b\\) i förkortad form. Då \\(a^2=5b^2\\), så \\(a\\) är delbart med 5. Sätt \\(a=5k\\). Då \\(25k^2=5b^2\\Rightarrow b^2=5k^2\\), så även \\(b\\) är delbart med 5. Det motsäger att \\(a/b\\) var förkortat.</p>",
    "id": "2.135"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "partiell integration två gånger",
    "poang": "0/2/1",
    "t": "<p>Beräkna \\(\\displaystyle\\int x^2e^{-2x}\\,dx\\).</p>",
    "s": "<p>Partiell integration två gånger ger</p><p>\\[\\int x^2e^{-2x}dx=-\\frac{1}{2}x^2e^{-2x}+\\int xe^{-2x}dx\\]</p><p>\\[=-\\frac{1}{2}x^2e^{-2x}-\\frac{1}{2}xe^{-2x}-\\frac14e^{-2x}+C.\\]</p><p>Alltså <strong>\\(-e^{-2x}(\\frac{1}{2}x^2+\\frac{1}{2}x+\\frac14)+C\\)</strong>.</p>",
    "id": "3.01"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration av x e^x",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\displaystyle\\int xe^x\\,dx\\).</p>",
    "s": "<p><strong>Metod:</strong> Välj delarna så att den ena faktorn blir enklare när den deriveras och den andra är lätt att integrera.</p><p>Välj \\(u=x\\), \\(dv=e^x dx\\). Då \\(du=dx\\), \\(v=e^x\\): <strong>\\(xe^x-e^x+C=e^x(x-1)+C\\)</strong>.</p>",
    "id": "3.02"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "partiell integration logaritm",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(\\displaystyle\\int \\ln x\\,dx\\), \\(x>0\\).</p>",
    "s": "<p><strong>Metod:</strong> Välj delarna så att den ena faktorn blir enklare när den deriveras och den andra är lätt att integrera.</p><p>Skriv \\(\\ln x=1\\cdot\\ln x\\). Med \\(u=\\ln x\\), \\(dv=dx\\) fås \\(du=dx/x\\), \\(v=x\\):</p><p><strong>\\(x\\ln x-x+C\\)</strong>.</p>",
    "id": "3.03"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration trigonometrisk funktion",
    "poang": "2/0/0",
    "t": "<p>Bestäm</p><p>\\[\\int x\\cos x\\,dx.\\]</p>",
    "s": "<p><strong>Metod:</strong> Välj delarna så att den ena faktorn blir enklare när den deriveras och den andra är lätt att integrera.</p><p>Välj \\(u=x\\) och \\(dv=\\cos x\\,dx\\). Då är \\(du=dx\\) och \\(v=\\sin x\\).</p><p>\\[\\int x\\cos x\\,dx=x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+C.\\]</p>",
    "id": "3.14"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "partiell integration med logaritm",
    "poang": "0/2/0",
    "t": "<p>Bestäm</p><p>\\[\\int x^2\\ln x\\,dx,\\qquad x>0.\\]</p>",
    "s": "<p>Välj \\(u=\\ln x\\) och \\(dv=x^2dx\\). Då är \\(du=dx/x\\) och \\(v=x^3/3\\).</p><p>\\[\\int x^2\\ln x\\,dx=\\frac{x^3}{3}\\ln x-\\frac13\\int x^2dx\\]</p><p>\\[=\\frac{x^3}{3}\\ln x-\\frac{x^3}{9}+C.\\]</p>",
    "id": "3.15"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration med exponentialfunktion",
    "poang": "2/0/0",
    "id": "3.24",
    "t": "<p>Bestäm</p><p>\\[\\int xe^x\\,dx.\\]</p>",
    "s": "<p>Välj \\(u=x\\) och \\(dv=e^x\\,dx\\). Då är \\(du=dx\\) och \\(v=e^x\\).</p><p>Med partiell integration får vi</p><p>\\[\\int xe^x\\,dx=xe^x-\\int e^x\\,dx=xe^x-e^x+C.\\]</p><p><strong>Svaret är \\((x-1)e^x+C\\).</strong></p>"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration x gånger exponential",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(\\int xe^{2x}\\,dx\\).</p>",
    "s": "<p>Välj \\(u=x\\), \\(dv=e^{2x}dx\\). Då \\(du=dx\\) och \\(v=\\frac12e^{2x}\\).</p><p>\\[\\int xe^{2x}dx=\\frac{x}{2}e^{2x}-\\frac12\\int e^{2x}dx=\\frac{x}{2}e^{2x}-\\frac14e^{2x}+C.\\]</p>",
    "id": "3.30"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration x sin",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(\\int x\\sin x\\,dx\\).</p>",
    "s": "<p>Välj \\(u=x\\), \\(dv=\\sin x\\,dx\\). Då \\(v=-\\cos x\\):</p><p>\\[\\int x\\sin x\\,dx=-x\\cos x+\\int\\cos x\\,dx=-x\\cos x+\\sin x+C.\\]</p>",
    "id": "3.31"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "partiell integration ln x",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(\\int \\ln x\\,dx\\), \\(x\\gt0\\).</p>",
    "s": "<p>Skriv integranden som \\(1\\cdot\\ln x\\). Välj \\(u=\\ln x\\), \\(dv=dx\\). Då \\(du=dx/x\\), \\(v=x\\):</p><p>\\[\\int\\ln x\\,dx=x\\ln x-\\int1\\,dx=x\\ln x-x+C.\\]</p>",
    "id": "3.32"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "bestämd integral med partiell integration",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\int_0^1 xe^x\\,dx\\).</p>",
    "s": "<p>En primitiv funktion är \\((x-1)e^x\\). Därför</p><p>\\[\\int_0^1xe^x\\,dx=[(x-1)e^x]_0^1=0-(-1)=1.\\]</p>",
    "id": "3.33"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "två steg partiell integration",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(\\int x^2e^x\\,dx\\).</p>",
    "s": "<p>Första partiella integreringen med \\(u=x^2\\), \\(dv=e^xdx\\) ger</p><p>\\[x^2e^x-\\int2xe^xdx.\\]</p><p>Integrera den återstående integralen partiellt igen:</p><p>\\[\\int2xe^xdx=2(xe^x-e^x).\\]</p><p>Alltså</p><p>\\[\\int x^2e^xdx=e^x(x^2-2x+2)+C.\\]</p>",
    "id": "3.34"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "x cos 2x",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(\\int x\\cos(2x)\\,dx\\).</p>",
    "s": "<p>Välj \\(u=x\\), \\(dv=\\cos(2x)dx\\), så \\(v=\\frac12\\sin2x\\):</p><p>\\[\\int x\\cos2x dx=\\frac{x}{2}\\sin2x+\\frac14\\cos2x+C.\\]</p>",
    "id": "3.55"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "x e minus x",
    "poang": "2/0/0",
    "t": "<p>Bestäm \\(\\int xe^{-x}\\,dx\\).</p>",
    "s": "<p>Välj \\(u=x\\), \\(dv=e^{-x}dx\\), \\(v=-e^{-x}\\):</p><p>\\[\\int xe^{-x}dx=-xe^{-x}-e^{-x}+C=-(x+1)e^{-x}+C.\\]</p>",
    "id": "3.56"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "x ln x bestämd",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(\\int_1^e x\\ln x\\,dx\\).</p>",
    "s": "<p>Partiell integration ger</p><p>\\[\\int x\\ln x dx=\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}.\\]</p><p>Därför</p><p>\\[\\left[\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}\\right]_1^e=\\frac{e^2}{4}+\\frac14=\\frac{e^2+1}{4}.\\]</p>",
    "id": "3.57"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "C",
    "typ": "x2 sin x",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(\\int x^2\\sin x\\,dx\\).</p>",
    "s": "<p>Integrera partiellt två gånger:</p><p>\\[\\int x^2\\sin xdx=-x^2\\cos x+\\int2x\\cos xdx.\\]</p><p>\\[\\int2x\\cos xdx=2x\\sin x+2\\cos x.\\]</p><p>Alltså</p><p><strong>\\(-x^2\\cos x+2x\\sin x+2\\cos x+C\\)</strong>.</p>",
    "id": "3.58"
  },
  {
    "kap": 3,
    "omr": "partiell_integration",
    "niva": "E",
    "typ": "x cos x bestämd",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\int_0^{\\pi}x\\cos x\\,dx\\).</p>",
    "s": "<p>Primitiv funktion är \\(x\\sin x+\\cos x\\). Därför</p><p>\\[[x\\sin x+\\cos x]_0^{\\pi}=(-1)-(1)=-2.\\]</p>",
    "id": "3.76"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "konvergens p-integral",
    "poang": "0/1/2",
    "t": "<p>För vilka värden på parametern \\(p\\) konvergerar den generaliserade integralen \\(\\displaystyle\\int_1^\\infty x^{-p}\\,dx\\)?</p>",
    "s": "<p>Skriv integralen med en övre gräns \\(R\\):</p><p>\\[\\int_1^R x^{-p}\\,dx=\\frac{R^{1-p}-1}{1-p}\\qquad(p\\ne1).\\]</p><p>När \\(R\\to\\infty\\) blir gränsvärdet ändligt exakt när exponenten \\(1-p&lt;0\\), det vill säga när <strong>\\(p&gt;1\\)</strong>.</p><p>För \\(p=1\\) får vi \\(\\int_1^R\\frac{1}{x}\\,dx=\\ln R\\), som går mot oändligheten. Alltså konvergerar integralen exakt för <strong>\\(p&gt;1\\)</strong>.</p>",
    "id": "3.04"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "beräkna konvergent generaliserad integral",
    "poang": "0/2/0",
    "t": "<p>Beräkna \\(\\displaystyle\\int_0^\\infty e^{-3x}\\,dx\\).</p>",
    "s": "<p>Eftersom intervallet är obegränsat skriver vi integralen som ett gränsvärde:</p><p>\\[\\int_0^\\infty e^{-3x}\\,dx=\\lim_{R\\to\\infty}\\int_0^R e^{-3x}\\,dx.\\]</p><p>\\[=\\lim_{R\\to\\infty}\\left[-\\frac13e^{-3x}\\right]_0^R=\\lim_{R\\to\\infty}\\left(\\frac13-\\frac13e^{-3R}\\right)=\\mathbf{\\frac13}.\\]</p>",
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
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "tolka och beräkna generaliserad integral med graf",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 390 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Grafen y lika med 1 genom x kvadrat och det oändliga området från x lika med 1\">\n<rect width=\"390\" height=\"260\" fill=\"white\"/>\n<line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"225\" stroke=\"#e2e2e2\"/><text x=\"76\" y=\"242\" font-size=\"13\">1</text><line x1=\"142\" y1=\"35\" x2=\"142\" y2=\"225\" stroke=\"#e2e2e2\"/><text x=\"138\" y=\"242\" font-size=\"13\">2</text><line x1=\"204\" y1=\"35\" x2=\"204\" y2=\"225\" stroke=\"#e2e2e2\"/><text x=\"200\" y=\"242\" font-size=\"13\">3</text><line x1=\"266\" y1=\"35\" x2=\"266\" y2=\"225\" stroke=\"#e2e2e2\"/><text x=\"262\" y=\"242\" font-size=\"13\">4</text><line x1=\"328\" y1=\"35\" x2=\"328\" y2=\"225\" stroke=\"#e2e2e2\"/><text x=\"324\" y=\"242\" font-size=\"13\">5</text><line x1=\"60\" y1=\"215.0\" x2=\"350\" y2=\"215.0\" stroke=\"#e2e2e2\"/><line x1=\"60\" y1=\"178.75\" x2=\"350\" y2=\"178.75\" stroke=\"#e2e2e2\"/><line x1=\"60\" y1=\"142.5\" x2=\"350\" y2=\"142.5\" stroke=\"#e2e2e2\"/><line x1=\"60\" y1=\"106.25\" x2=\"350\" y2=\"106.25\" stroke=\"#e2e2e2\"/><line x1=\"60\" y1=\"70.0\" x2=\"350\" y2=\"70.0\" stroke=\"#e2e2e2\"/>\n<line x1=\"55\" y1=\"215\" x2=\"355\" y2=\"215\" stroke=\"#222\" stroke-width=\"2\"/>\n<line x1=\"80\" y1=\"230\" x2=\"80\" y2=\"25\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M 80,215 L 80.0,70.0 L 83.1,83.5 L 86.2,95.2 L 89.3,105.4 L 92.4,114.3 L 95.5,122.2 L 98.6,129.2 L 101.7,135.4 L 104.8,141.0 L 107.9,146.0 L 111.0,150.6 L 114.1,154.6 L 117.2,158.4 L 120.3,161.7 L 123.4,164.8 L 126.5,167.7 L 129.6,170.2 L 132.7,172.6 L 135.8,174.8 L 138.9,176.9 L 142.0,178.8 L 145.1,180.5 L 148.2,182.1 L 151.3,183.6 L 154.4,185.0 L 157.5,186.4 L 160.6,187.6 L 163.7,188.7 L 166.8,189.8 L 169.9,190.8 L 173.0,191.8 L 176.1,192.7 L 179.2,193.6 L 182.3,194.4 L 185.4,195.1 L 188.5,195.8 L 191.6,196.5 L 194.7,197.1 L 197.8,197.8 L 200.9,198.3 L 204.0,198.9 L 207.1,199.4 L 210.2,199.9 L 213.3,200.4 L 216.4,200.8 L 219.5,201.3 L 222.6,201.7 L 225.7,202.1 L 228.8,202.5 L 231.9,202.8 L 235.0,203.2 L 238.1,203.5 L 241.2,203.8 L 244.3,204.1 L 247.4,204.4 L 250.5,204.7 L 253.6,205.0 L 256.7,205.2 L 259.8,205.5 L 262.9,205.7 L 266.0,205.9 L 269.1,206.2 L 272.2,206.4 L 275.3,206.6 L 278.4,206.8 L 281.5,207.0 L 284.6,207.2 L 287.7,207.3 L 290.8,207.5 L 293.9,207.7 L 297.0,207.8 L 300.1,208.0 L 303.2,208.1 L 306.3,208.3 L 309.4,208.4 L 312.5,208.6 L 315.6,208.7 L 318.7,208.8 L 321.8,209.0 L 324.9,209.1 L 328.0,209.2 L 328,215 Z\" fill=\"#999\" fill-opacity=\".25\"/>\n<path d=\"M 80.0,70.0 L 83.1,83.5 L 86.2,95.2 L 89.3,105.4 L 92.4,114.3 L 95.5,122.2 L 98.6,129.2 L 101.7,135.4 L 104.8,141.0 L 107.9,146.0 L 111.0,150.6 L 114.1,154.6 L 117.2,158.4 L 120.3,161.7 L 123.4,164.8 L 126.5,167.7 L 129.6,170.2 L 132.7,172.6 L 135.8,174.8 L 138.9,176.9 L 142.0,178.8 L 145.1,180.5 L 148.2,182.1 L 151.3,183.6 L 154.4,185.0 L 157.5,186.4 L 160.6,187.6 L 163.7,188.7 L 166.8,189.8 L 169.9,190.8 L 173.0,191.8 L 176.1,192.7 L 179.2,193.6 L 182.3,194.4 L 185.4,195.1 L 188.5,195.8 L 191.6,196.5 L 194.7,197.1 L 197.8,197.8 L 200.9,198.3 L 204.0,198.9 L 207.1,199.4 L 210.2,199.9 L 213.3,200.4 L 216.4,200.8 L 219.5,201.3 L 222.6,201.7 L 225.7,202.1 L 228.8,202.5 L 231.9,202.8 L 235.0,203.2 L 238.1,203.5 L 241.2,203.8 L 244.3,204.1 L 247.4,204.4 L 250.5,204.7 L 253.6,205.0 L 256.7,205.2 L 259.8,205.5 L 262.9,205.7 L 266.0,205.9 L 269.1,206.2 L 272.2,206.4 L 275.3,206.6 L 278.4,206.8 L 281.5,207.0 L 284.6,207.2 L 287.7,207.3 L 290.8,207.5 L 293.9,207.7 L 297.0,207.8 L 300.1,208.0 L 303.2,208.1 L 306.3,208.3 L 309.4,208.4 L 312.5,208.6 L 315.6,208.7 L 318.7,208.8 L 321.8,209.0 L 324.9,209.1 L 328.0,209.2\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.4\"/>\n<text x=\"250\" y=\"92\" font-size=\"16\">y = 1/x²</text>\n<text x=\"350\" y=\"207\" font-size=\"15\">x</text><text x=\"88\" y=\"32\" font-size=\"15\">y</text>\n</svg></span><p>Grafen visar \\(f(x)=1/x^2\\). Bestäm arean av det obegränsade området mellan grafen, \\(x\\)-axeln och linjen \\(x=1\\).</p>",
    "s": "<p>Arean skrivs som den generaliserade integralen</p><p>\\[\\int_1^\\infty \\frac{1}{x^2}\\,dx=\\lim_{b\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^b.\\]</p><p>\\[\\lim_{b\\to\\infty}\\left(1-\\frac1b\\right)=\\mathbf{1}.\\]</p><p>Integralen konvergerar alltså trots att området sträcker sig oändligt långt åt höger.</p>",
    "id": "3.16"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "A",
    "typ": "parameter i generaliserad integral vid singularitet",
    "poang": "0/1/2",
    "t": "<p>För vilka reella värden på \\(p>0\\) konvergerar integralen</p><p>\\[\\int_0^2 \\frac{1}{(2-x)^p}\\,dx?\\]</p>",
    "s": "<p>Problemet finns vid \\(x=2\\). Sätt \\(u=2-x\\). Då får vi samma konvergensfråga som för</p><p>\\[\\int_0^2 u^{-p}\\,du.\\]</p><p>För \\(p\\ne1\\) är en primitiv funktion \\(u^{1-p}/(1-p)\\). När \\(u\\to0^+\\) går \\(u^{1-p}\\to0\\) exakt när \\(1-p>0\\), alltså när \\(p&lt;1\\).</p><p>För \\(p=1\\) uppstår \\(\\ln u\\), som divergerar. Eftersom \\(p>0\\) är svaret <strong>\\(0<p&lt;1\\)</strong>.</p>",
    "id": "3.17"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "generaliserad integral med oändlig övre gräns",
    "poang": "2/0/0",
    "id": "3.25",
    "t": "<p>Avgör om integralen konvergerar och bestäm i så fall dess värde:</p><p>\\[\\int_1^{\\infty}\\frac{1}{x^3}\\,dx.\\]</p>",
    "s": "<p>Vi skriver integralen som ett gränsvärde:</p><p>\\[\\int_1^{\\infty}\\frac{1}{x^3}\\,dx=\\lim_{b\\to\\infty}\\int_1^b x^{-3}\\,dx.\\]</p><p>En primitiv funktion är \\(-\\frac{1}{2x^2}\\). Alltså</p><p>\\[\\lim_{b\\to\\infty}\\left[-\\frac{1}{2x^2}\right]_1^b=\\lim_{b\\to\\infty}\\left(-\\frac{1}{2b^2}+\\frac{1}{2}\right)=\\frac{1}{2}.\\]</p><p>Integralen <strong>konvergerar</strong> och värdet är <strong>\\(1/2\\)</strong>.</p>"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "p-integral",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Avtagande graf med oändligt område från x lika med 1\">\n<rect width=\"430\" height=\"260\" fill=\"white\"/><line x1=\"45\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"83.0\" y1=\"225\" x2=\"83.0\" y2=\"30\" stroke=\"#ddd\"/>\n<path d=\"M 83.0,210 L 83.0,85.0 L 85.6,94.4 L 88.2,102.8 L 90.8,110.4 L 93.4,117.1 L 96.0,123.2 L 98.6,128.7 L 101.2,133.7 L 103.8,138.3 L 106.4,142.4 L 109.0,146.2 L 111.6,149.7 L 114.2,152.9 L 116.8,155.9 L 119.4,158.6 L 122.0,161.2 L 124.6,163.5 L 127.2,165.7 L 129.8,167.7 L 132.4,169.6 L 135.0,171.4 L 137.6,173.1 L 140.2,174.6 L 142.8,176.1 L 145.4,177.5 L 148.0,178.8 L 150.6,180.0 L 153.2,181.1 L 155.8,182.2 L 158.4,183.2 L 161.0,184.2 L 163.6,185.1 L 166.2,186.0 L 168.8,186.8 L 171.4,187.6 L 174.0,188.3 L 176.6,189.0 L 179.2,189.7 L 181.8,190.3 L 184.4,190.9 L 187.0,191.5 L 189.6,192.1 L 192.2,192.6 L 194.8,193.1 L 197.4,193.6 L 200.0,194.1 L 202.6,194.5 L 205.2,194.9 L 207.8,195.3 L 210.4,195.7 L 213.0,196.1 L 215.6,196.5 L 218.2,196.8 L 220.8,197.2 L 223.4,197.5 L 226.0,197.8 L 228.6,198.1 L 231.2,198.4 L 233.8,198.7 L 236.4,198.9 L 239.0,199.2 L 241.6,199.4 L 244.2,199.7 L 246.8,199.9 L 249.4,200.1 L 252.0,200.4 L 254.6,200.6 L 257.2,200.8 L 259.8,201.0 L 262.4,201.2 L 265.0,201.3 L 267.6,201.5 L 270.2,201.7 L 272.8,201.9 L 275.4,202.0 L 278.0,202.2 L 280.6,202.3 L 283.2,202.5 L 285.8,202.6 L 288.4,202.8 L 291.0,202.9 L 293.6,203.0 L 296.2,203.2 L 298.8,203.3 L 301.4,203.4 L 304.0,203.5 L 306.6,203.7 L 309.2,203.8 L 311.8,203.9 L 314.4,204.0 L 317.0,204.1 L 319.6,204.2 L 322.2,204.3 L 324.8,204.4 L 327.4,204.5 L 330.0,204.6 L 332.6,204.7 L 335.2,204.8 L 337.8,204.8 L 340.4,204.9 L 343.0,205.0 L 343.0,210 Z\" fill=\"#888\" fill-opacity=\".20\"/><path d=\"M 70.0,14.7 L 72.6,32.8 L 75.2,48.6 L 77.8,62.3 L 80.4,74.4 L 83.0,85.0 L 85.6,94.4 L 88.2,102.8 L 90.8,110.4 L 93.4,117.1 L 96.0,123.2 L 98.6,128.7 L 101.2,133.7 L 103.8,138.3 L 106.4,142.4 L 109.0,146.2 L 111.6,149.7 L 114.2,152.9 L 116.8,155.9 L 119.4,158.6 L 122.0,161.2 L 124.6,163.5 L 127.2,165.7 L 129.8,167.7 L 132.4,169.6 L 135.0,171.4 L 137.6,173.1 L 140.2,174.6 L 142.8,176.1 L 145.4,177.5 L 148.0,178.8 L 150.6,180.0 L 153.2,181.1 L 155.8,182.2 L 158.4,183.2 L 161.0,184.2 L 163.6,185.1 L 166.2,186.0 L 168.8,186.8 L 171.4,187.6 L 174.0,188.3 L 176.6,189.0 L 179.2,189.7 L 181.8,190.3 L 184.4,190.9 L 187.0,191.5 L 189.6,192.1 L 192.2,192.6 L 194.8,193.1 L 197.4,193.6 L 200.0,194.1 L 202.6,194.5 L 205.2,194.9 L 207.8,195.3 L 210.4,195.7 L 213.0,196.1 L 215.6,196.5 L 218.2,196.8 L 220.8,197.2 L 223.4,197.5 L 226.0,197.8 L 228.6,198.1 L 231.2,198.4 L 233.8,198.7 L 236.4,198.9 L 239.0,199.2 L 241.6,199.4 L 244.2,199.7 L 246.8,199.9 L 249.4,200.1 L 252.0,200.4 L 254.6,200.6 L 257.2,200.8 L 259.8,201.0 L 262.4,201.2 L 265.0,201.3 L 267.6,201.5 L 270.2,201.7 L 272.8,201.9 L 275.4,202.0 L 278.0,202.2 L 280.6,202.3 L 283.2,202.5 L 285.8,202.6 L 288.4,202.8 L 291.0,202.9 L 293.6,203.0 L 296.2,203.2 L 298.8,203.3 L 301.4,203.4 L 304.0,203.5 L 306.6,203.7 L 309.2,203.8 L 311.8,203.9 L 314.4,204.0 L 317.0,204.1 L 319.6,204.2 L 322.2,204.3 L 324.8,204.4 L 327.4,204.5 L 330.0,204.6 L 332.6,204.7 L 335.2,204.8 L 337.8,204.8 L 340.4,204.9 L 343.0,205.0 L 345.6,205.1 L 348.2,205.2 L 350.8,205.2 L 353.4,205.3 L 356.0,205.4\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.4\"/>\n<text x=\"260\" y=\"65\" font-size=\"16\">y = 1/x²</text><text x=\"78.0\" y=\"230\" font-size=\"13\">1</text>\n</svg></span><p>Beräkna \\(\\int_2^{\\infty}\\frac1{x^2}\\,dx\\).</p>",
    "s": "<p>\\[\\int_2^{\\infty}\\frac1{x^2}dx=\\lim_{b\\to\\infty}\\left[-\\frac1x\\right]_2^b=\\lim_{b\\to\\infty}\\left(\\frac12-\\frac1b\\right)=\\frac12.\\]</p>",
    "id": "3.35"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "exponentialintegral till oändligheten",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Avtagande graf med oändligt område från x lika med 1\">\n<rect width=\"430\" height=\"260\" fill=\"white\"/><line x1=\"45\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"83.0\" y1=\"225\" x2=\"83.0\" y2=\"30\" stroke=\"#ddd\"/>\n<path d=\"M 83.0,210 L 83.0,164.0 L 85.6,165.8 L 88.2,167.6 L 90.8,169.2 L 93.4,170.8 L 96.0,172.4 L 98.6,173.8 L 101.2,175.2 L 103.8,176.6 L 106.4,177.9 L 109.0,179.2 L 111.6,180.4 L 114.2,181.5 L 116.8,182.7 L 119.4,183.7 L 122.0,184.8 L 124.6,185.8 L 127.2,186.7 L 129.8,187.6 L 132.4,188.5 L 135.0,189.3 L 137.6,190.1 L 140.2,190.9 L 142.8,191.7 L 145.4,192.4 L 148.0,193.1 L 150.6,193.7 L 153.2,194.4 L 155.8,195.0 L 158.4,195.6 L 161.0,196.1 L 163.6,196.7 L 166.2,197.2 L 168.8,197.7 L 171.4,198.2 L 174.0,198.7 L 176.6,199.1 L 179.2,199.5 L 181.8,199.9 L 184.4,200.3 L 187.0,200.7 L 189.6,201.1 L 192.2,201.4 L 194.8,201.8 L 197.4,202.1 L 200.0,202.4 L 202.6,202.7 L 205.2,203.0 L 207.8,203.3 L 210.4,203.5 L 213.0,203.8 L 215.6,204.0 L 218.2,204.3 L 220.8,204.5 L 223.4,204.7 L 226.0,204.9 L 228.6,205.1 L 231.2,205.3 L 233.8,205.5 L 236.4,205.7 L 239.0,205.8 L 241.6,206.0 L 244.2,206.1 L 246.8,206.3 L 249.4,206.4 L 252.0,206.6 L 254.6,206.7 L 257.2,206.8 L 259.8,207.0 L 262.4,207.1 L 265.0,207.2 L 267.6,207.3 L 270.2,207.4 L 272.8,207.5 L 275.4,207.6 L 278.0,207.7 L 280.6,207.8 L 283.2,207.9 L 285.8,208.0 L 288.4,208.0 L 291.0,208.1 L 293.6,208.2 L 296.2,208.3 L 298.8,208.3 L 301.4,208.4 L 304.0,208.5 L 306.6,208.5 L 309.2,208.6 L 311.8,208.6 L 314.4,208.7 L 317.0,208.7 L 319.6,208.8 L 322.2,208.8 L 324.8,208.9 L 327.4,208.9 L 330.0,209.0 L 332.6,209.0 L 335.2,209.1 L 337.8,209.1 L 340.4,209.1 L 343.0,209.2 L 343.0,210 Z\" fill=\"#888\" fill-opacity=\".20\"/><path d=\"M 70.0,153.8 L 72.6,156.0 L 75.2,158.2 L 77.8,160.2 L 80.4,162.1 L 83.0,164.0 L 85.6,165.8 L 88.2,167.6 L 90.8,169.2 L 93.4,170.8 L 96.0,172.4 L 98.6,173.8 L 101.2,175.2 L 103.8,176.6 L 106.4,177.9 L 109.0,179.2 L 111.6,180.4 L 114.2,181.5 L 116.8,182.7 L 119.4,183.7 L 122.0,184.8 L 124.6,185.8 L 127.2,186.7 L 129.8,187.6 L 132.4,188.5 L 135.0,189.3 L 137.6,190.1 L 140.2,190.9 L 142.8,191.7 L 145.4,192.4 L 148.0,193.1 L 150.6,193.7 L 153.2,194.4 L 155.8,195.0 L 158.4,195.6 L 161.0,196.1 L 163.6,196.7 L 166.2,197.2 L 168.8,197.7 L 171.4,198.2 L 174.0,198.7 L 176.6,199.1 L 179.2,199.5 L 181.8,199.9 L 184.4,200.3 L 187.0,200.7 L 189.6,201.1 L 192.2,201.4 L 194.8,201.8 L 197.4,202.1 L 200.0,202.4 L 202.6,202.7 L 205.2,203.0 L 207.8,203.3 L 210.4,203.5 L 213.0,203.8 L 215.6,204.0 L 218.2,204.3 L 220.8,204.5 L 223.4,204.7 L 226.0,204.9 L 228.6,205.1 L 231.2,205.3 L 233.8,205.5 L 236.4,205.7 L 239.0,205.8 L 241.6,206.0 L 244.2,206.1 L 246.8,206.3 L 249.4,206.4 L 252.0,206.6 L 254.6,206.7 L 257.2,206.8 L 259.8,207.0 L 262.4,207.1 L 265.0,207.2 L 267.6,207.3 L 270.2,207.4 L 272.8,207.5 L 275.4,207.6 L 278.0,207.7 L 280.6,207.8 L 283.2,207.9 L 285.8,208.0 L 288.4,208.0 L 291.0,208.1 L 293.6,208.2 L 296.2,208.3 L 298.8,208.3 L 301.4,208.4 L 304.0,208.5 L 306.6,208.5 L 309.2,208.6 L 311.8,208.6 L 314.4,208.7 L 317.0,208.7 L 319.6,208.8 L 322.2,208.8 L 324.8,208.9 L 327.4,208.9 L 330.0,209.0 L 332.6,209.0 L 335.2,209.1 L 337.8,209.1 L 340.4,209.1 L 343.0,209.2 L 345.6,209.2 L 348.2,209.2 L 350.8,209.3 L 353.4,209.3 L 356.0,209.3\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.4\"/>\n<text x=\"260\" y=\"65\" font-size=\"16\">y = e⁻ˣ</text><text x=\"78.0\" y=\"230\" font-size=\"13\">1</text>\n</svg></span><p>Beräkna \\(\\int_0^{\\infty}e^{-2x}\\,dx\\).</p>",
    "s": "<p>\\[\\int_0^{\\infty}e^{-2x}dx=\\lim_{b\\to\\infty}\\left[-\\frac12e^{-2x}\\right]_0^b=\\frac12.\\]</p>",
    "id": "3.36"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "avgöra divergens p=1",
    "poang": "2/0/0",
    "t": "<p>Avgör om \\(\\int_1^{\\infty}\\frac1x\\,dx\\) konvergerar.</p>",
    "s": "<p>\\[\\int_1^b\\frac1x dx=\\ln b.\\]</p><p>När \\(b\\to\\infty\\) växer \\(\\ln b\\) utan gräns. Integralen <strong>divergerar</strong>.</p>",
    "id": "3.37"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "singularitet vid noll",
    "poang": "0/2/0",
    "t": "<p>Avgör om \\(\\int_0^1\\frac1{\\sqrt{x}}\\,dx\\) konvergerar och bestäm i så fall värdet.</p>",
    "s": "<p>Integranden är obegränsad vid \\(x=0\\), så</p><p>\\[\\int_0^1x^{-1/2}dx=\\lim_{a\\to0^+}[2\\sqrt{x}]_a^1=2.\\]</p><p>Integralen <strong>konvergerar till 2</strong>.</p>",
    "id": "3.38"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "jämföra två p-integraler",
    "poang": "0/2/0",
    "t": "<p>För vilka av \\(p=0,8\\), \\(p=1\\) och \\(p=1,4\\) konvergerar \\(\\int_1^{\\infty}x^{-p}\\,dx\\)?</p>",
    "s": "<p>En p-integral \\(\\int_1^{\\infty}x^{-p}dx\\) konvergerar exakt när \\(p\\gt1\\). Därför divergerar fallen \\(p=0,8\\) och \\(p=1\\), medan <strong>\\(p=1,4\\)</strong> konvergerar.</p>",
    "id": "3.39"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "p-integral från 3",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\int_3^{\\infty}x^{-2}\\,dx\\).</p>",
    "s": "<p>\\[\\lim_{b\\to\\infty}\\left[-\\frac1x\\right]_3^b=\\frac13.\\]</p>",
    "id": "3.59"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "divergent exponential åt plus",
    "poang": "2/0/0",
    "t": "<p>Avgör om \\(\\int_0^{\\infty}e^x\\,dx\\) konvergerar.</p>",
    "s": "<p>\\[\\int_0^b e^x dx=e^b-1.\\]</p><p>När \\(b\\to\\infty\\) går detta mot oändligheten. Integralen <strong>divergerar</strong>.</p>",
    "id": "3.60"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "singularitet båda sidor",
    "poang": "0/2/0",
    "t": "<p>Avgör om \\(\\int_{-1}^{1}\\frac1{x^2}\\,dx\\) konvergerar.</p>",
    "s": "<p>Integranden har en singularitet vid \\(x=0\\), så integralen måste delas i två. Redan</p><p>\\[\\int_0^1x^{-2}dx=\\lim_{a\\to0^+}\\left[-\\frac1x\\right]_a^1=\\infty.\\]</p><p>Alltså <strong>divergerar integralen</strong>.</p>",
    "id": "3.61"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "C",
    "typ": "parameter p vid noll",
    "poang": "0/2/0",
    "t": "<p>För vilka \\(p\\gt0\\) konvergerar \\(\\int_0^1 x^{-p}\\,dx\\)?</p>",
    "s": "<p>För \\(p\\ne1\\):</p><p>\\[\\int_a^1x^{-p}dx=\\left[\\frac{x^{1-p}}{1-p}\\right]_a^1.\\]</p><p>Gränsvärdet vid \\(a\\to0^+\\) är ändligt exakt när \\(1-p\\gt0\\), alltså <strong>\\(0\\lt p\\lt1\\)</strong>.</p>",
    "id": "3.62"
  },
  {
    "kap": 3,
    "omr": "generaliserade_integraler",
    "niva": "E",
    "typ": "1 över x4",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\int_1^{\\infty}\\frac1{x^4}\\,dx\\).</p>",
    "s": "<p>\\[\\left[-\\frac1{3x^3}\\right]_1^{\\infty}=\\frac13.\\]</p>",
    "id": "3.77"
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
    "s": "<p>För \\(f(x)=\\ln x\\) är \\(f(1)=0\\) och \\(f'(1)=1\\). Tangentlinjen kring \\(x=1\\) blir därför</p><p>\\[L(x)=0+1(x-1)=x-1.\\]</p><p>Alltså</p><p>\\[\\ln(1,04)\\approx L(1,04)=\\mathbf{0,04}.\\]</p><p>Eftersom \\(f''(x)=-1/x^2&lt;0\\) för \\(x&gt;0\\) är grafen konkav. En tangent till en konkav funktion ligger lokalt ovanför grafen, så approximationen är <strong>för stor</strong>.</p>",
    "id": "3.08"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "linjär approximation nära känt värde",
    "poang": "2/0/0",
    "t": "<p>Använd en linjär approximation kring \\(x=16\\) för att uppskatta \\(\\sqrt{15,8}\\).</p>",
    "s": "<p>Låt \\(f(x)=\\sqrt{x}\\). Då är \\(f(16)=4\\) och \\(f'(16)=1/(2\\sqrt{16})=1/8\\).</p><p>Den linjära approximationen är</p><p>\\[L(x)=4+\\frac{1}{8}(x-16).\\]</p><p>För \\(x=15,8\\):</p><p>\\[L(15,8)=4+\\frac{1}{8}(-0,2)=\\mathbf{3,975}.\\]</p>",
    "id": "3.18"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "linjär approximation med figur",
    "poang": "2/0/0",
    "id": "3.26",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 390 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Grafen till y lika med roten ur x och tangentlinjen vid x lika med 16\">\n<rect width=\"390\" height=\"270\" fill=\"white\"/>\n<line x1=\"40.0\" y1=\"30\" x2=\"40.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"34.0\" y=\"257\" font-size=\"12\">12</text><line x1=\"95.0\" y1=\"30\" x2=\"95.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"89.0\" y=\"257\" font-size=\"12\">13</text><line x1=\"150.0\" y1=\"30\" x2=\"150.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"144.0\" y=\"257\" font-size=\"12\">14</text><line x1=\"205.0\" y1=\"30\" x2=\"205.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"199.0\" y=\"257\" font-size=\"12\">15</text><line x1=\"260.0\" y1=\"30\" x2=\"260.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"254.0\" y=\"257\" font-size=\"12\">16</text><line x1=\"315.0\" y1=\"30\" x2=\"315.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"309.0\" y=\"257\" font-size=\"12\">17</text><line x1=\"370.0\" y1=\"30\" x2=\"370.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"364.0\" y=\"257\" font-size=\"12\">18</text><line x1=\"425.0\" y1=\"30\" x2=\"425.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"419.0\" y=\"257\" font-size=\"12\">19</text><line x1=\"480.0\" y1=\"30\" x2=\"480.0\" y2=\"240\" stroke=\"#e6e6e6\"/><text x=\"474.0\" y=\"257\" font-size=\"12\">20</text><line x1=\"35\" y1=\"226.0\" x2=\"370\" y2=\"226.0\" stroke=\"#e6e6e6\"/><line x1=\"35\" y1=\"181.0\" x2=\"370\" y2=\"181.0\" stroke=\"#e6e6e6\"/><line x1=\"35\" y1=\"136.0\" x2=\"370\" y2=\"136.0\" stroke=\"#e6e6e6\"/>\n<line x1=\"35\" y1=\"235\" x2=\"375\" y2=\"235\" stroke=\"#222\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"245\" x2=\"40\" y2=\"25\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M 40.0,229.2 L 43.7,228.4 L 47.3,227.5 L 51.0,226.6 L 54.7,225.8 L 58.3,224.9 L 62.0,224.1 L 65.7,223.2 L 69.3,222.4 L 73.0,221.5 L 76.7,220.7 L 80.3,219.8 L 84.0,219.0 L 87.7,218.2 L 91.3,217.3 L 95.0,216.5 L 98.7,215.7 L 102.3,214.8 L 106.0,214.0 L 109.7,213.2 L 113.3,212.4 L 117.0,211.5 L 120.7,210.7 L 124.3,209.9 L 128.0,209.1 L 131.7,208.3 L 135.3,207.5 L 139.0,206.7 L 142.7,205.9 L 146.3,205.1 L 150.0,204.3 L 153.7,203.5 L 157.3,202.7 L 161.0,201.9 L 164.7,201.1 L 168.3,200.3 L 172.0,199.5 L 175.7,198.7 L 179.3,197.9 L 183.0,197.1 L 186.7,196.3 L 190.3,195.5 L 194.0,194.8 L 197.7,194.0 L 201.3,193.2 L 205.0,192.4 L 208.7,191.7 L 212.3,190.9 L 216.0,190.1 L 219.7,189.3 L 223.3,188.6 L 227.0,187.8 L 230.7,187.1 L 234.3,186.3 L 238.0,185.5 L 241.7,184.8 L 245.3,184.0 L 249.0,183.3 L 252.7,182.5 L 256.3,181.8 L 260.0,181.0 L 263.7,180.3 L 267.3,179.5 L 271.0,178.8 L 274.7,178.0 L 278.3,177.3 L 282.0,176.5 L 285.7,175.8 L 289.3,175.0 L 293.0,174.3 L 296.7,173.6 L 300.3,172.8 L 304.0,172.1 L 307.7,171.4 L 311.3,170.6 L 315.0,169.9 L 318.7,169.2 L 322.3,168.5 L 326.0,167.7 L 329.7,167.0 L 333.3,166.3 L 337.0,165.6 L 340.7,164.9 L 344.3,164.1 L 348.0,163.4 L 351.7,162.7 L 355.3,162.0 L 359.0,161.3 L 362.7,160.6 L 366.3,159.9 L 370.0,159.2 L 373.7,158.5 L 377.3,157.8 L 381.0,157.0 L 384.7,156.3 L 388.3,155.6 L 392.0,154.9 L 395.7,154.2 L 399.3,153.5 L 403.0,152.9 L 406.7,152.2 L 410.3,151.5 L 414.0,150.8 L 417.7,150.1 L 421.3,149.4 L 425.0,148.7 L 428.7,148.0 L 432.3,147.3 L 436.0,146.6 L 439.7,146.0 L 443.3,145.3 L 447.0,144.6 L 450.7,143.9 L 454.3,143.2 L 458.0,142.6 L 461.7,141.9 L 465.3,141.2 L 469.0,140.5 L 472.7,139.9 L 476.3,139.2 L 480.0,138.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.6\"/>\n<path d=\"M 40.0,226.0 L 43.7,225.2 L 47.3,224.5 L 51.0,223.8 L 54.7,223.0 L 58.3,222.2 L 62.0,221.5 L 65.7,220.7 L 69.3,220.0 L 73.0,219.2 L 76.7,218.5 L 80.3,217.7 L 84.0,217.0 L 87.7,216.2 L 91.3,215.5 L 95.0,214.8 L 98.7,214.0 L 102.3,213.2 L 106.0,212.5 L 109.7,211.8 L 113.3,211.0 L 117.0,210.2 L 120.7,209.5 L 124.3,208.8 L 128.0,208.0 L 131.7,207.3 L 135.3,206.5 L 139.0,205.8 L 142.7,205.0 L 146.3,204.2 L 150.0,203.5 L 153.7,202.8 L 157.3,202.0 L 161.0,201.2 L 164.7,200.5 L 168.3,199.7 L 172.0,199.0 L 175.7,198.2 L 179.3,197.5 L 183.0,196.7 L 186.7,196.0 L 190.3,195.2 L 194.0,194.5 L 197.7,193.8 L 201.3,193.0 L 205.0,192.2 L 208.7,191.5 L 212.3,190.8 L 216.0,190.0 L 219.7,189.2 L 223.3,188.5 L 227.0,187.8 L 230.7,187.0 L 234.3,186.2 L 238.0,185.5 L 241.7,184.8 L 245.3,184.0 L 249.0,183.2 L 252.7,182.5 L 256.3,181.8 L 260.0,181.0 L 263.7,180.3 L 267.3,179.5 L 271.0,178.7 L 274.7,178.0 L 278.3,177.3 L 282.0,176.5 L 285.7,175.7 L 289.3,175.0 L 293.0,174.2 L 296.7,173.5 L 300.3,172.7 L 304.0,172.0 L 307.7,171.2 L 311.3,170.5 L 315.0,169.8 L 318.7,169.0 L 322.3,168.2 L 326.0,167.5 L 329.7,166.8 L 333.3,166.0 L 337.0,165.2 L 340.7,164.5 L 344.3,163.8 L 348.0,163.0 L 351.7,162.2 L 355.3,161.5 L 359.0,160.8 L 362.7,160.0 L 366.3,159.2 L 370.0,158.5 L 373.7,157.8 L 377.3,157.0 L 381.0,156.2 L 384.7,155.5 L 388.3,154.8 L 392.0,154.0 L 395.7,153.2 L 399.3,152.5 L 403.0,151.7 L 406.7,151.0 L 410.3,150.2 L 414.0,149.5 L 417.7,148.8 L 421.3,148.0 L 425.0,147.2 L 428.7,146.5 L 432.3,145.8 L 436.0,145.0 L 439.7,144.2 L 443.3,143.5 L 447.0,142.8 L 450.7,142.0 L 454.3,141.2 L 458.0,140.5 L 461.7,139.7 L 465.3,139.0 L 469.0,138.3 L 472.7,137.5 L 476.3,136.7 L 480.0,136.0\" fill=\"none\" stroke=\"#777\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/>\n<circle cx=\"260.0\" cy=\"181.0\" r=\"4\" fill=\"#222\"/>\n<text x=\"160\" y=\"55\" font-size=\"14\">y = √x</text>\n<text x=\"210\" y=\"148\" font-size=\"14\">tangent</text>\n</svg></span><p>Använd tangentlinjen i \\(x=16\\) för att uppskatta \\(\\sqrt{16,3}\\).</p>",
    "s": "<p>Låt \\(f(x)=\\sqrt{x}\\). Då är \\(f(16)=4\\) och</p><p>\\[f'(x)=\\frac{1}{2\\sqrt{x}}\\Rightarrow f'(16)=\\frac{1}{8}.\\]</p><p>Tangentlinjen i \\(x=16\\) blir därför</p><p>\\[L(x)=4+\\frac{1}{8}(x-16).\\]</p><p>För \\(x=16,3\\) får vi</p><p>\\[L(16,3)=4+\\frac{1}{8}\\cdot 0,3=4+0,0375=4,0375.\\]</p><p><strong>Uppskattningen blir \\(\\sqrt{16,3}\\approx 4,0375\\).</strong></p>"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "linjär approximation av kvadratrot",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 440 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Kurva och tangent för linjär approximation\">\n<rect width=\"440\" height=\"270\" fill=\"white\"/><line x1=\"40\" y1=\"230\" x2=\"420\" y2=\"230\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"50\" y1=\"245\" x2=\"50\" y2=\"25\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M 77.5,180.5 L 80.2,178.1 L 83.0,175.8 L 85.8,173.6 L 88.5,171.4 L 91.2,169.4 L 94.0,167.4 L 96.8,165.5 L 99.5,163.6 L 102.2,161.8 L 105.0,160.0 L 107.8,158.3 L 110.5,156.6 L 113.2,154.9 L 116.0,153.3 L 118.8,151.7 L 121.5,150.2 L 124.2,148.7 L 127.0,147.2 L 129.8,145.7 L 132.5,144.3 L 135.2,142.9 L 138.0,141.5 L 140.8,140.1 L 143.5,138.7 L 146.2,137.4 L 149.0,136.1 L 151.8,134.8 L 154.5,133.5 L 157.2,132.3 L 160.0,131.0 L 162.8,129.8 L 165.5,128.6 L 168.2,127.4 L 171.0,126.2 L 173.8,125.0 L 176.5,123.8 L 179.2,122.7 L 182.0,121.6 L 184.8,120.4 L 187.5,119.3 L 190.2,118.2 L 193.0,117.1 L 195.8,116.0 L 198.5,115.0 L 201.2,113.9 L 204.0,112.9 L 206.8,111.8 L 209.5,110.8 L 212.2,109.8 L 215.0,108.8 L 217.8,107.8 L 220.5,106.8 L 223.2,105.8 L 226.0,104.8 L 228.8,103.8 L 231.5,102.8 L 234.2,101.9 L 237.0,100.9 L 239.8,100.0 L 242.5,99.0 L 245.2,98.1 L 248.0,97.2 L 250.8,96.3 L 253.5,95.4 L 256.2,94.4 L 259.0,93.5 L 261.8,92.7 L 264.5,91.8 L 267.2,90.9 L 270.0,90.0 L 272.8,89.1 L 275.5,88.3 L 278.2,87.4 L 281.0,86.5 L 283.8,85.7 L 286.5,84.8 L 289.2,84.0 L 292.0,83.2 L 294.8,82.3 L 297.5,81.5 L 300.2,80.7 L 303.0,79.9 L 305.8,79.1 L 308.5,78.2 L 311.2,77.4 L 314.0,76.6 L 316.8,75.8 L 319.5,75.0 L 322.2,74.3 L 325.0,73.5 L 327.8,72.7 L 330.5,71.9 L 333.2,71.1 L 336.0,70.4 L 338.8,69.6 L 341.5,68.8 L 344.2,68.1 L 347.0,67.3 L 349.8,66.6 L 352.5,65.8 L 355.2,65.1 L 358.0,64.3 L 360.8,63.6 L 363.5,62.9 L 366.2,62.1 L 369.0,61.4 L 371.8,60.7 L 374.5,60.0 L 377.2,59.3 L 380.0,58.5 L 382.8,57.8 L 385.5,57.1 L 388.2,56.4 L 391.0,55.7 L 393.8,55.0 L 396.5,54.3 L 399.2,53.6 L 402.0,52.9 L 404.8,52.2 L 407.5,51.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.4\"/><path d=\"M 77.5,151.2 L 80.2,150.4 L 83.0,149.5 L 85.8,148.6 L 88.5,147.8 L 91.2,146.9 L 94.0,146.0 L 96.8,145.1 L 99.5,144.2 L 102.2,143.4 L 105.0,142.5 L 107.8,141.6 L 110.5,140.8 L 113.2,139.9 L 116.0,139.0 L 118.8,138.1 L 121.5,137.2 L 124.2,136.4 L 127.0,135.5 L 129.8,134.6 L 132.5,133.8 L 135.2,132.9 L 138.0,132.0 L 140.8,131.1 L 143.5,130.2 L 146.2,129.4 L 149.0,128.5 L 151.8,127.6 L 154.5,126.8 L 157.2,125.9 L 160.0,125.0 L 162.8,124.1 L 165.5,123.2 L 168.2,122.4 L 171.0,121.5 L 173.8,120.6 L 176.5,119.8 L 179.2,118.9 L 182.0,118.0 L 184.8,117.1 L 187.5,116.2 L 190.2,115.4 L 193.0,114.5 L 195.8,113.6 L 198.5,112.8 L 201.2,111.9 L 204.0,111.0 L 206.8,110.1 L 209.5,109.2 L 212.2,108.4 L 215.0,107.5 L 217.8,106.6 L 220.5,105.8 L 223.2,104.9 L 226.0,104.0 L 228.8,103.1 L 231.5,102.2 L 234.2,101.4 L 237.0,100.5 L 239.8,99.6 L 242.5,98.8 L 245.2,97.9 L 248.0,97.0 L 250.8,96.1 L 253.5,95.2 L 256.2,94.4 L 259.0,93.5 L 261.8,92.6 L 264.5,91.8 L 267.2,90.9 L 270.0,90.0 L 272.8,89.1 L 275.5,88.2 L 278.2,87.4 L 281.0,86.5 L 283.8,85.6 L 286.5,84.8 L 289.2,83.9 L 292.0,83.0 L 294.8,82.1 L 297.5,81.2 L 300.2,80.4 L 303.0,79.5 L 305.8,78.6 L 308.5,77.8 L 311.2,76.9 L 314.0,76.0 L 316.8,75.1 L 319.5,74.2 L 322.2,73.4 L 325.0,72.5 L 327.8,71.6 L 330.5,70.8 L 333.2,69.9 L 336.0,69.0 L 338.8,68.1 L 341.5,67.2 L 344.2,66.4 L 347.0,65.5 L 349.8,64.6 L 352.5,63.8 L 355.2,62.9 L 358.0,62.0 L 360.8,61.1 L 363.5,60.2 L 366.2,59.4 L 369.0,58.5 L 371.8,57.6 L 374.5,56.8 L 377.2,55.9 L 380.0,55.0 L 382.8,54.1 L 385.5,53.2 L 388.2,52.4 L 391.0,51.5 L 393.8,50.6 L 396.5,49.8 L 399.2,48.9 L 402.0,48.0 L 404.8,47.1 L 407.5,46.2\" fill=\"none\" stroke=\"#777\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<circle cx=\"270.0\" cy=\"90.0\" r=\"4\" fill=\"#222\"/><text x=\"270\" y=\"60\" font-size=\"15\">y=√x</text><text x=\"250\" y=\"145\" font-size=\"15\">tangent</text>\n</svg></span><p>Använd linjär approximation kring \\(x=4\\) för att uppskatta \\(\\sqrt{4,1}\\).</p>",
    "s": "<p>För \\(f(x)=\\sqrt{x}\\) är \\(f(4)=2\\) och \\(f'(4)=1/4\\). Därför</p><p>\\[L(x)=2+\\frac14(x-4).\\]</p><p>\\[L(4,1)=2+0,025=\\mathbf{2,025}.\\]</p>",
    "id": "3.40"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "linjär approximation av invers",
    "poang": "2/0/0",
    "t": "<p>Använd linjär approximation kring \\(x=2\\) för att uppskatta \\(1/2,04\\).</p>",
    "s": "<p>Låt \\(f(x)=1/x\\). Då \\(f(2)=0,5\\) och \\(f'(2)=-1/4\\). Alltså</p><p>\\[L(2,04)=0,5-\\frac14\\cdot0,04=0,49.\\]</p><p><strong>\\(1/2,04\\approx0,49\\)</strong>.</p>",
    "id": "3.41"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "linjär approximation av kubikrot",
    "poang": "2/0/0",
    "t": "<p>Använd linjär approximation kring \\(x=27\\) för att uppskatta \\(\\sqrt[3]{27,3}\\).</p>",
    "s": "<p>\\(f(x)=x^{1/3}\\), \\(f(27)=3\\) och \\(f'(27)=1/(3\\cdot27^{2/3})=1/27\\). Därför</p><p>\\[L(27,3)=3+\\frac{0,3}{27}\\approx3,0111.\\]</p>",
    "id": "3.42"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "C",
    "typ": "bedöma över- eller underskattning",
    "poang": "0/2/0",
    "t": "<p>En elev använder tangentlinjen till \\(f(x)=\\sqrt{x}\\) vid \\(x=9\\) för att uppskatta \\(\\sqrt{9,4}\\). Kommer approximationen att bli något för stor eller något för liten? Motivera.</p>",
    "s": "<p>För \\(x\\gt0\\) är</p><p>\\[f''(x)=-\\frac{1}{4x^{3/2}}\\lt0.\\]</p><p>Grafen är alltså konkav nedåt. En tangent till en konkav nedåt-kurva ligger ovanför grafen nära tangentpunkten. Approximationen blir därför <strong>något för stor</strong>.</p>",
    "id": "3.43"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "approximation sin nära noll",
    "poang": "2/0/0",
    "t": "<p>Använd linjär approximation kring \\(x=0\\) för att uppskatta \\(\\sin(0,06)\\), där vinkeln mäts i radianer.</p>",
    "s": "<p>För \\(f(x)=\\sin x\\): \\(f(0)=0\\), \\(f'(0)=1\\). Tangenten är \\(L(x)=x\\). Därför</p><p><strong>\\(\\sin0,06\\approx0,06\\)</strong>.</p>",
    "id": "3.63"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "approximation e^x",
    "poang": "2/0/0",
    "t": "<p>Använd linjär approximation kring \\(x=0\\) för att uppskatta \\(e^{0,03}\\).</p>",
    "s": "<p>För \\(f(x)=e^x\\) är \\(f(0)=1\\) och \\(f'(0)=1\\). Därför \\(L(x)=1+x\\) och</p><p><strong>\\(e^{0,03}\\approx1,03\\)</strong>.</p>",
    "id": "3.64"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "C",
    "typ": "bestäm tangentapproximation symboliskt",
    "poang": "0/2/0",
    "t": "<p>Bestäm den linjära approximationen till \\(f(x)=\\ln x\\) kring \\(x=1\\) och använd den för att uppskatta \\(\\ln1,08\\).</p>",
    "s": "<p>\\(f(1)=0\\), \\(f'(1)=1\\). Alltså</p><p>\\[L(x)=x-1.\\]</p><p>\\[\\ln1,08\\approx L(1,08)=0,08.\\]</p>",
    "id": "3.65"
  },
  {
    "kap": 3,
    "omr": "linjar_approximation",
    "niva": "E",
    "typ": "approximation cos nära noll",
    "poang": "2/0/0",
    "t": "<p>Bestäm den linjära approximationen till \\(\\cos x\\) kring \\(x=0\\).</p>",
    "s": "<p>\\(f(0)=1\\) och \\(f'(0)=0\\). Därför är den linjära approximationen <strong>\\(L(x)=1\\)</strong>.</p>",
    "id": "3.78"
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
    "s": "<p>Efter 4 s är höjden \\(y=24\\) m och den horisontella sträckan \\(x=24\\) m. Avståndet är \\(s=24\\sqrt2\\). Derivering av \\(s^2=x^2+y^2\\) ger</p><p>\\[s'=\\frac{xx'+yy'}s=\\frac{24\\cdot6+24\\cdot1,5}{24\\sqrt2}=\\frac{7,5}{\\sqrt2}\\approx\\mathbf{5,30\\text{ m/s}}.\\]</p>",
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
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "relaterade förändringshastigheter stege",
    "poang": "0/3/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 275\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fem meter lång stege mot en vägg\">\n<rect width=\"430\" height=\"275\" fill=\"white\"/>\n<line x1=\"90\" y1=\"35\" x2=\"90\" y2=\"235\" stroke=\"#444\" stroke-width=\"5\"/>\n<line x1=\"75\" y1=\"235\" x2=\"380\" y2=\"235\" stroke=\"#444\" stroke-width=\"5\"/>\n<line x1=\"90\" y1=\"75\" x2=\"310\" y2=\"235\" stroke=\"#222\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<text x=\"202\" y=\"142\" font-size=\"17\" transform=\"rotate(36 202 142)\">5,0 m</text>\n<line x1=\"98\" y1=\"213\" x2=\"298\" y2=\"213\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<path d=\"M298 208 l12 5 -12 5\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<text x=\"195\" y=\"207\" font-size=\"16\">x</text>\n<line x1=\"112\" y1=\"82\" x2=\"112\" y2=\"225\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<path d=\"M107 94 l5 -12 5 12\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"157\" font-size=\"16\">y</text>\n<path d=\"M315 225 l18 0\" stroke=\"#222\" stroke-width=\"2\"/><path d=\"M325 218 l10 7 -10 7\" fill=\"none\" stroke=\"#222\" stroke-width=\"2\"/>\n<text x=\"305\" y=\"205\" font-size=\"15\">0,80 m/s</text>\n</svg></span><p>En 5,0 m lång stege står mot en lodrät vägg. Stegens fot glider bort från väggen med hastigheten 0,80 m/s.</p><p>Hur snabbt rör sig stegens övre ände nedåt när foten är 3,0 m från väggen?</p>",
    "s": "<p>Låt \\(x\\) vara avståndet från väggen och \\(y\\) höjden. Stegens längd ger</p><p>\\[x^2+y^2=25.\\]</p><p>När \\(x=3\\) är \\(y=4\\). Derivera med avseende på tiden:</p><p>\\[2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0.\\]</p><p>\\[\\frac{dy}{dt}=-\\frac{x}{y}\\frac{dx}{dt}=-\\frac34\\cdot0,80=\\mathbf{-0,60\\text{ m/s}}.\\]</p><p>Minustecknet betyder att änden rör sig nedåt; farten är 0,60 m/s.</p>",
    "id": "3.19"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "relaterade förändringshastigheter växande cirkel",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 380 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cirkelformad fläck med växande radie\">\n<rect width=\"380\" height=\"260\" fill=\"white\"/>\n<circle cx=\"180\" cy=\"132\" r=\"82\" fill=\"#999\" fill-opacity=\".16\" stroke=\"#333\" stroke-width=\"2\"/>\n<circle cx=\"180\" cy=\"132\" r=\"3\" fill=\"#222\"/>\n<line x1=\"180\" y1=\"132\" x2=\"262\" y2=\"132\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M250 126 l12 6 -12 6\" fill=\"none\" stroke=\"#222\" stroke-width=\"2\"/>\n<text x=\"194\" y=\"113\" font-size=\"16\">r = 6,0 cm</text>\n<path d=\"M268 115 q20 17 2 35\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\"/>\n<path d=\"M271 142 l-1 8 8-3\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"72\" font-size=\"15\">dr/dt = 0,40 cm/s</text>\n</svg></span><p>En cirkelformad fläck växer så att radien ökar med 0,40 cm/s. Hur snabbt ökar fläckens area när radien är 6,0 cm?</p>",
    "s": "<p>Arean är \\(A=\\pi r^2\\). Derivering med avseende på tiden ger</p><p>\\[\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}.\\]</p><p>Vid \\(r=6,0\\) och \\(dr/dt=0,40\\):</p><p>\\[\\frac{dA}{dt}=2\\pi\\cdot6\\cdot0,40=\\mathbf{4,8\\pi\\approx15,1\\text{ cm}^2/\\text{s}}.\\]</p>",
    "id": "3.20"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "A",
    "typ": "relaterade förändringshastigheter konisk tank",
    "poang": "0/1/2",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Upp och nedvänd konisk tank med vatten\">\n<rect width=\"430\" height=\"320\" fill=\"white\"/>\n<path d=\"M95 55 L215 285 L335 55 Z\" fill=\"none\" stroke=\"#333\" stroke-width=\"2.5\"/>\n<line x1=\"95\" y1=\"55\" x2=\"335\" y2=\"55\" stroke=\"#333\" stroke-width=\"2.5\"/>\n<path d=\"M175 205 L215 285 L255 205 Z\" fill=\"#999\" fill-opacity=\".22\"/>\n<line x1=\"175\" y1=\"205\" x2=\"255\" y2=\"205\" stroke=\"#444\" stroke-width=\"2\"/>\n<line x1=\"350\" y1=\"55\" x2=\"350\" y2=\"285\" stroke=\"#777\" stroke-width=\"1.4\"/>\n<path d=\"M345 67 l5-12 5 12 M345 273 l5 12 5-12\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.4\"/>\n<text x=\"360\" y=\"175\" font-size=\"16\">6,0 m</text>\n<line x1=\"215\" y1=\"38\" x2=\"335\" y2=\"38\" stroke=\"#777\" stroke-width=\"1.4\"/>\n<text x=\"255\" y=\"28\" font-size=\"16\">3,0 m</text>\n<line x1=\"270\" y1=\"205\" x2=\"270\" y2=\"285\" stroke=\"#777\" stroke-width=\"1.4\"/>\n<text x=\"280\" y=\"250\" font-size=\"16\">h</text>\n<line x1=\"215\" y1=\"192\" x2=\"255\" y2=\"192\" stroke=\"#777\" stroke-width=\"1.4\"/>\n<text x=\"232\" y=\"181\" font-size=\"16\">r</text>\n<path d=\"M215 5 L215 45\" stroke=\"#222\" stroke-width=\"3\"/><path d=\"M208 34 l7 11 7-11\" fill=\"none\" stroke=\"#222\" stroke-width=\"2\"/>\n<text x=\"225\" y=\"18\" font-size=\"15\">0,050 m³/min</text>\n</svg></span><p>En upp-och-nedvänd konisk tank är 6,0 m hög och har toppradien 3,0 m. Vatten rinner in med \\(0,050\\,\\text{m}^3/\\text{min}\\).</p><p>Hur snabbt stiger vattenytan när vattendjupet är 2,0 m?</p>",
    "s": "<p>Likformighet ger \\(r/h=3/6=1/2\\), alltså \\(r=h/2\\).</p><p>Vattenvolymen är</p><p>\\[V=\\frac13\\pi r^2h=\\frac13\\pi\\left(\\frac h2\\right)^2h=\\frac{\\pi h^3}{12}.\\]</p><p>Derivera med avseende på tiden:</p><p>\\[\\frac{dV}{dt}=\\frac{\\pi h^2}{4}\\frac{dh}{dt}.\\]</p><p>Vid \\(h=2,0\\) och \\(dV/dt=0,050\\):</p><p>\\[0,050=\\pi\\frac{dh}{dt}\\]</p><p>så <strong>\\(dh/dt=0,050/\\pi\\approx0,0159\\text{ m/min}\\)</strong>.</p>",
    "id": "3.21"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "relaterade förändringshastigheter för kvadrat",
    "poang": "2/0/0",
    "id": "3.27",
    "t": "<p>Sidan \\(s\\) i en kvadrat ökar med hastigheten \\(0,6\\ \\text{cm/s}\\).</p><p>Hur snabbt ökar kvadratens area när \\(s=5,0\\ \\text{cm}\\)?</p>",
    "s": "<p>Arean är \\(A=s^2\\). Derivera med avseende på tiden:</p><p>\\[\\frac{dA}{dt}=2s\\frac{ds}{dt}.\\]</p><p>Sätt in \\(s=5,0\\) och \\(ds/dt=0,6\\):</p><p>\\[\\frac{dA}{dt}=2\\cdot 5,0\\cdot 0,6=6,0.\\]</p><p><strong>Arean ökar med \\(6,0\\ \\text{cm}^2/\\text{s}\\).</strong></p>"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "cirkelns area",
    "poang": "2/0/0",
    "t": "<p>Radien i en cirkel ökar med 0,30 cm/s. Hur snabbt ökar arean när radien är 8,0 cm?</p>",
    "s": "<p>\\(A=\\pi r^2\\), så</p><p>\\[\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}=2\\pi\\cdot8\\cdot0,30=4,8\\pi\\approx15,1.\\]</p><p><strong>15,1 cm²/s</strong>.</p>",
    "id": "3.44"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "sfärens volym",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sfär med radie r som växer\">\n<rect width=\"400\" height=\"250\" fill=\"white\"/><circle cx=\"180\" cy=\"130\" r=\"80\" fill=\"#888\" fill-opacity=\".12\" stroke=\"#333\" stroke-width=\"2.3\"/>\n<ellipse cx=\"180\" cy=\"130\" rx=\"80\" ry=\"23\" fill=\"none\" stroke=\"#999\" stroke-dasharray=\"5 4\"/>\n<line x1=\"180\" y1=\"130\" x2=\"260\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/><path d=\"M248 124 l12 6 -12 6\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n<text x=\"210\" y=\"117\" font-size=\"16\">r</text><text x=\"275\" y=\"95\" font-size=\"15\">dr/dt</text>\n</svg></span><p>Radien i en sfär ökar med 0,20 cm/s. Hur snabbt ökar volymen när radien är 5,0 cm?</p>",
    "s": "<p>\\(V=\\frac43\\pi r^3\\). Derivera:</p><p>\\[\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}=4\\pi\\cdot25\\cdot0,20=20\\pi.\\]</p><p><strong>\\(20\\pi\\approx62,8\\) cm³/s</strong>.</p>",
    "id": "3.45"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "kubens volym",
    "poang": "2/0/0",
    "t": "<p>Kantlängden \\(a\\) i en kub ökar med 0,10 cm/s. Hur snabbt ökar kubens volym när \\(a=6,0\\) cm?</p>",
    "s": "<p>\\(V=a^3\\), därför</p><p>\\[\\frac{dV}{dt}=3a^2\\frac{da}{dt}=3\\cdot36\\cdot0,10=10,8.\\]</p><p><strong>10,8 cm³/s</strong>.</p>",
    "id": "3.46"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "stege mot vägg",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Stege mot vägg med x och y\">\n<rect width=\"430\" height=\"280\" fill=\"white\"/><line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"235\" stroke=\"#444\" stroke-width=\"5\"/><line x1=\"65\" y1=\"235\" x2=\"380\" y2=\"235\" stroke=\"#444\" stroke-width=\"5\"/>\n<line x1=\"80\" y1=\"65\" x2=\"315\" y2=\"235\" stroke=\"#222\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<line x1=\"90\" y1=\"215\" x2=\"305\" y2=\"215\" stroke=\"#888\"/><text x=\"192\" y=\"207\" font-size=\"16\">x</text><line x1=\"102\" y1=\"75\" x2=\"102\" y2=\"225\" stroke=\"#888\"/><text x=\"112\" y=\"155\" font-size=\"16\">y</text>\n</svg></span><p>En 10 m lång stege står mot en vägg. Foten glider bort från väggen med 0,50 m/s. Hur snabbt rör sig stegens överände nedåt när foten är 6,0 m från väggen?</p>",
    "s": "<p>\\(x^2+y^2=100\\). När \\(x=6\\) är \\(y=8\\). Derivera:</p><p>\\[2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0.\\]</p><p>\\[\\frac{dy}{dt}=-\\frac{x}{y}\\frac{dx}{dt}=-\\frac68\\cdot0,50=-0,375.\\]</p><p>Överänden rör sig <strong>nedåt med 0,375 m/s</strong>.</p>",
    "id": "3.47"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "kon med likformighet",
    "poang": "0/2/0",
    "t": "<p>Vatten fylls i en konisk behållare. För vattenytan gäller hela tiden \\(r=h/3\\). Vattenvolymen ökar med 2,0 dm³/s. Bestäm \\(dh/dt\\) när \\(h=6\\) dm.</p>",
    "s": "<p>\\[V=\\frac13\\pi r^2h=\\frac13\\pi\\left(\\frac h3\\right)^2h=\\frac{\\pi h^3}{27}.\\]</p><p>Derivering ger</p><p>\\[\\frac{dV}{dt}=\\frac{\\pi h^2}{9}\\frac{dh}{dt}.\\]</p><p>Vid \\(h=6\\):</p><p>\\[2=4\\pi\\frac{dh}{dt}\\Rightarrow \\frac{dh}{dt}=\\frac1{2\\pi}\\approx0,159\\text{ dm/s}.\\]</p>",
    "id": "3.48"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "rektangel area",
    "poang": "2/0/0",
    "t": "<p>En rektangels längd ökar med 2 cm/s och bredden ökar med 1 cm/s. Hur snabbt ökar arean när längden är 8 cm och bredden 5 cm?</p>",
    "s": "<p>\\(A=lb\\). Produktregeln ger</p><p>\\[A'=l'b+lb'=2\\cdot5+8\\cdot1=18.\\]</p><p><strong>18 cm²/s</strong>.</p>",
    "id": "3.66"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "cylinder volym",
    "poang": "2/0/0",
    "t": "<p>En cylindrisk behållare har konstant radie 3 dm. Vattenhöjden ökar med 0,4 dm/min. Hur snabbt ökar volymen?</p>",
    "s": "<p>\\(V=\\pi r^2h=9\\pi h\\). Därför</p><p>\\[V'=9\\pi h'=9\\pi\\cdot0,4=3,6\\pi\\text{ dm}^3/\\text{min}.\\]</p>",
    "id": "3.67"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "skugga likformiga trianglar",
    "poang": "0/2/0",
    "t": "<p>En 1,8 m lång person går bort från en 6,0 m hög gatlykta med 1,5 m/s. Hur snabbt växer personens skugga?</p>",
    "s": "<p>Låt \\(x\\) vara avståndet från lampan till personen och \\(s\\) skuggans längd. Likformighet ger</p><p>\\[\\frac6{x+s}=\\frac{1,8}{s}.\\]</p><p>\\[6s=1,8x+1,8s\\Rightarrow4,2s=1,8x\\Rightarrow s=\\frac37x.\\]</p><p>Derivera: \\(s'=\\frac37x'=\\frac37\\cdot1,5\\approx0,643\\) m/s.</p>",
    "id": "3.68"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "C",
    "typ": "sfär area mot volym",
    "poang": "0/2/0",
    "t": "<p>Volymen av en sfär ökar med 12 cm³/s. Hur snabbt ökar radien när \\(r=3\\) cm?</p>",
    "s": "<p>\\[V=\\frac43\\pi r^3\\Rightarrow V'=4\\pi r^2r'.\\]</p><p>\\[12=4\\pi\\cdot9\\,r'\\Rightarrow r'=\\frac1{3\\pi}\\approx0,106\\text{ cm/s}.\\]</p>",
    "id": "3.69"
  },
  {
    "kap": 3,
    "omr": "forandringshastigheter",
    "niva": "E",
    "typ": "omkrets cirkel",
    "poang": "2/0/0",
    "t": "<p>Radien i en cirkel minskar med 0,12 m/s. Hur snabbt förändras omkretsen?</p>",
    "s": "<p>\\(O=2\\pi r\\), alltså</p><p>\\[O'=2\\pi r'=2\\pi(-0,12)=-0,24\\pi\\approx-0,754\\text{ m/s}.\\]</p>",
    "id": "3.79"
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
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "area mellan kurva och x-axel med graf",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 390 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Parabeln y lika med x kvadrat minus 4x plus 3 med området mellan x lika med 1 och 3 markerat\">\n<rect width=\"390\" height=\"270\" fill=\"white\"/>\n<line x1=\"55\" y1=\"35\" x2=\"55\" y2=\"245\" stroke=\"#e4e4e4\"/><text x=\"51\" y=\"210\" font-size=\"12\">0</text><line x1=\"127\" y1=\"35\" x2=\"127\" y2=\"245\" stroke=\"#e4e4e4\"/><text x=\"123\" y=\"210\" font-size=\"12\">1</text><line x1=\"199\" y1=\"35\" x2=\"199\" y2=\"245\" stroke=\"#e4e4e4\"/><text x=\"195\" y=\"210\" font-size=\"12\">2</text><line x1=\"271\" y1=\"35\" x2=\"271\" y2=\"245\" stroke=\"#e4e4e4\"/><text x=\"267\" y=\"210\" font-size=\"12\">3</text><line x1=\"343\" y1=\"35\" x2=\"343\" y2=\"245\" stroke=\"#e4e4e4\"/><text x=\"339\" y=\"210\" font-size=\"12\">4</text><line x1=\"45\" y1=\"235\" x2=\"355\" y2=\"235\" stroke=\"#e4e4e4\"/><line x1=\"45\" y1=\"190\" x2=\"355\" y2=\"190\" stroke=\"#e4e4e4\"/><line x1=\"45\" y1=\"145\" x2=\"355\" y2=\"145\" stroke=\"#e4e4e4\"/><line x1=\"45\" y1=\"100\" x2=\"355\" y2=\"100\" stroke=\"#e4e4e4\"/><line x1=\"45\" y1=\"55\" x2=\"355\" y2=\"55\" stroke=\"#e4e4e4\"/>\n<line x1=\"45\" y1=\"190\" x2=\"360\" y2=\"190\" stroke=\"#222\" stroke-width=\"2\"/>\n<line x1=\"55\" y1=\"245\" x2=\"55\" y2=\"30\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M 127,190 L 127.0,190.0 L 129.4,193.0 L 131.8,195.8 L 134.2,198.6 L 136.6,201.2 L 139.0,203.8 L 141.4,206.2 L 143.8,208.6 L 146.2,210.8 L 148.6,212.9 L 151.0,215.0 L 153.4,216.9 L 155.8,218.8 L 158.2,220.6 L 160.6,222.2 L 163.0,223.8 L 165.4,225.2 L 167.8,226.6 L 170.2,227.8 L 172.6,228.9 L 175.0,230.0 L 177.4,230.9 L 179.8,231.8 L 182.2,232.6 L 184.6,233.2 L 187.0,233.8 L 189.4,234.2 L 191.8,234.6 L 194.2,234.8 L 196.6,234.9 L 199.0,235.0 L 201.4,234.9 L 203.8,234.8 L 206.2,234.6 L 208.6,234.2 L 211.0,233.8 L 213.4,233.2 L 215.8,232.6 L 218.2,231.8 L 220.6,230.9 L 223.0,230.0 L 225.4,228.9 L 227.8,227.8 L 230.2,226.5 L 232.6,225.2 L 235.0,223.8 L 237.4,222.2 L 239.8,220.6 L 242.2,218.8 L 244.6,216.9 L 247.0,215.0 L 249.4,212.9 L 251.8,210.8 L 254.2,208.6 L 256.6,206.2 L 259.0,203.8 L 261.4,201.2 L 263.8,198.6 L 266.2,195.8 L 268.6,192.9 L 271.0,190.0 L 271,190 Z\" fill=\"#888\" fill-opacity=\".28\"/>\n<path d=\"M 55.0,55.0 L 57.4,60.9 L 59.8,66.8 L 62.2,72.6 L 64.6,78.2 L 67.0,83.8 L 69.4,89.2 L 71.8,94.6 L 74.2,99.8 L 76.6,105.0 L 79.0,110.0 L 81.4,115.0 L 83.8,119.8 L 86.2,124.6 L 88.6,129.2 L 91.0,133.8 L 93.4,138.2 L 95.8,142.6 L 98.2,146.8 L 100.6,150.9 L 103.0,155.0 L 105.4,158.9 L 107.8,162.8 L 110.2,166.6 L 112.6,170.2 L 115.0,173.8 L 117.4,177.2 L 119.8,180.6 L 122.2,183.8 L 124.6,186.9 L 127.0,190.0 L 129.4,193.0 L 131.8,195.8 L 134.2,198.6 L 136.6,201.2 L 139.0,203.8 L 141.4,206.2 L 143.8,208.6 L 146.2,210.8 L 148.6,212.9 L 151.0,215.0 L 153.4,216.9 L 155.8,218.8 L 158.2,220.6 L 160.6,222.2 L 163.0,223.8 L 165.4,225.2 L 167.8,226.6 L 170.2,227.8 L 172.6,228.9 L 175.0,230.0 L 177.4,230.9 L 179.8,231.8 L 182.2,232.6 L 184.6,233.2 L 187.0,233.8 L 189.4,234.2 L 191.8,234.6 L 194.2,234.8 L 196.6,234.9 L 199.0,235.0 L 201.4,234.9 L 203.8,234.8 L 206.2,234.6 L 208.6,234.2 L 211.0,233.8 L 213.4,233.2 L 215.8,232.6 L 218.2,231.8 L 220.6,230.9 L 223.0,230.0 L 225.4,228.9 L 227.8,227.8 L 230.2,226.6 L 232.6,225.2 L 235.0,223.8 L 237.4,222.2 L 239.8,220.5 L 242.2,218.8 L 244.6,216.9 L 247.0,215.0 L 249.4,212.9 L 251.8,210.8 L 254.2,208.6 L 256.6,206.2 L 259.0,203.8 L 261.4,201.2 L 263.8,198.6 L 266.2,195.8 L 268.6,192.9 L 271.0,190.0 L 273.4,187.0 L 275.8,183.8 L 278.2,180.5 L 280.6,177.2 L 283.0,173.8 L 285.4,170.2 L 287.8,166.5 L 290.2,162.8 L 292.6,159.0 L 295.0,155.0 L 297.4,150.9 L 299.8,146.8 L 302.2,142.6 L 304.6,138.2 L 307.0,133.8 L 309.4,129.2 L 311.8,124.5 L 314.2,119.8 L 316.6,115.0 L 319.0,110.0 L 321.4,104.9 L 323.8,99.8 L 326.2,94.6 L 328.6,89.2 L 331.0,83.7 L 333.4,78.2 L 335.8,72.6 L 338.2,66.8 L 340.6,60.9 L 343.0,55.0\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.4\"/>\n<text x=\"225\" y=\"57\" font-size=\"15\">y = x² - 4x + 3</text>\n</svg></span><p>Bestäm exakt arean av det markerade området mellan grafen \\(y=x^2-4x+3\\) och \\(x\\)-axeln.</p>",
    "s": "<p>Nollställena är \\(x=1\\) och \\(x=3\\). Mellan dem ligger grafen under \\(x\\)-axeln, så arean är</p><p>\\[A=-\\int_1^3(x^2-4x+3)\\,dx.\\]</p><p>\\[A=-\\left[\\frac{x^3}{3}-2x^2+3x\\right]_1^3=\\mathbf{\\frac43}.\\]</p>",
    "id": "3.22"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "E",
    "typ": "area mellan graf och x-axel",
    "poang": "2/0/0",
    "id": "3.28",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 400 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Grafen y lika med 4 minus x och ett markerat område mellan x lika med 1 och 3\">\n<rect width=\"400\" height=\"260\" fill=\"white\"/>\n<g stroke=\"#e6e6e6\">\n<line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"220\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"220\"/><line x1=\"180\" y1=\"40\" x2=\"180\" y2=\"220\"/><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"220\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"220\"/>\n<line x1=\"45\" y1=\"220\" x2=\"340\" y2=\"220\"/><line x1=\"45\" y1=\"175\" x2=\"340\" y2=\"175\"/><line x1=\"45\" y1=\"130\" x2=\"340\" y2=\"130\"/><line x1=\"45\" y1=\"85\" x2=\"340\" y2=\"85\"/><line x1=\"45\" y1=\"40\" x2=\"340\" y2=\"40\"/>\n</g>\n<line x1=\"45\" y1=\"220\" x2=\"350\" y2=\"220\" stroke=\"#222\" stroke-width=\"2\"/>\n<line x1=\"60\" y1=\"235\" x2=\"60\" y2=\"30\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M60 40 L300 175\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.6\"/>\n<path d=\"M120 85 L240 130 L240 220 L120 220 Z\" fill=\"#888\" fill-opacity=\"0.28\"/>\n<text x=\"252\" y=\"110\" font-size=\"14\">y = 4 - x</text>\n<text x=\"116\" y=\"238\" font-size=\"12\">1</text><text x=\"236\" y=\"238\" font-size=\"12\">3</text>\n</svg></span><p>Bestäm arean av det markerade området mellan grafen \\(y=4-x\\), \\(x\\)-axeln och linjerna \\(x=1\\) och \\(x=3\\).</p>",
    "s": "<p>Arean ges av integralen</p><p>\\[A=\\int_1^3 (4-x)\\,dx.\\]</p><p>En primitiv funktion är \\(4x-\\frac{x^2}{2}\\). Då får vi</p><p>\\[A=\\left[4x-\\frac{x^2}{2}\right]_1^3=(12-4,5)-(4-0,5)=7,5-3,5=4.\\]</p><p><strong>Arean är 4 areaenheter.</strong></p>"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "E",
    "typ": "area under parabel",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 410 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Parabeln y lika med 4 minus x kvadrat med området mellan x lika med minus 2 och 2 markerat\">\n<rect width=\"410\" height=\"270\" fill=\"white\"/>\n<line x1=\"35\" y1=\"195.5\" x2=\"390\" y2=\"195.5\" stroke=\"#222\" stroke-width=\"2\"/>\n<line x1=\"208.0\" y1=\"245\" x2=\"208.0\" y2=\"25\" stroke=\"#222\" stroke-width=\"2\"/>\n<path d=\"M 80.0,195.5 L 80.0,195.5 L 82.1,190.9 L 84.3,186.4 L 86.4,182.0 L 88.5,177.6 L 90.7,173.4 L 92.8,169.2 L 94.9,165.1 L 97.1,161.1 L 99.2,157.1 L 101.3,153.2 L 103.5,149.4 L 105.6,145.7 L 107.7,142.1 L 109.9,138.5 L 112.0,135.0 L 114.1,131.6 L 116.3,128.2 L 118.4,125.0 L 120.5,121.8 L 122.7,118.7 L 124.8,115.7 L 126.9,112.7 L 129.1,109.8 L 131.2,107.0 L 133.3,104.3 L 135.5,101.6 L 137.6,99.1 L 139.7,96.6 L 141.9,94.2 L 144.0,91.8 L 146.1,89.6 L 148.3,87.4 L 150.4,85.3 L 152.5,83.2 L 154.7,81.3 L 156.8,79.4 L 158.9,77.6 L 161.1,75.9 L 163.2,74.2 L 165.3,72.6 L 167.5,71.1 L 169.6,69.7 L 171.7,68.4 L 173.9,67.1 L 176.0,65.9 L 178.1,64.8 L 180.3,63.8 L 182.4,62.8 L 184.5,61.9 L 186.7,61.1 L 188.8,60.4 L 190.9,59.7 L 193.1,59.2 L 195.2,58.7 L 197.3,58.2 L 199.5,57.9 L 201.6,57.6 L 203.7,57.4 L 205.9,57.3 L 208.0,57.3 L 210.1,57.3 L 212.3,57.4 L 214.4,57.6 L 216.5,57.9 L 218.7,58.2 L 220.8,58.7 L 222.9,59.2 L 225.1,59.7 L 227.2,60.4 L 229.3,61.1 L 231.5,61.9 L 233.6,62.8 L 235.7,63.8 L 237.9,64.8 L 240.0,65.9 L 242.1,67.1 L 244.3,68.4 L 246.4,69.7 L 248.5,71.1 L 250.7,72.6 L 252.8,74.2 L 254.9,75.9 L 257.1,77.6 L 259.2,79.4 L 261.3,81.3 L 263.5,83.2 L 265.6,85.3 L 267.7,87.4 L 269.9,89.6 L 272.0,91.8 L 274.1,94.2 L 276.3,96.6 L 278.4,99.1 L 280.5,101.6 L 282.7,104.3 L 284.8,107.0 L 286.9,109.8 L 289.1,112.7 L 291.2,115.7 L 293.3,118.7 L 295.5,121.8 L 297.6,125.0 L 299.7,128.2 L 301.9,131.6 L 304.0,135.0 L 306.1,138.5 L 308.3,142.1 L 310.4,145.7 L 312.5,149.4 L 314.7,153.2 L 316.8,157.1 L 318.9,161.1 L 321.1,165.1 L 323.2,169.2 L 325.3,173.4 L 327.5,177.6 L 329.6,182.0 L 331.7,186.4 L 333.9,190.9 L 336.0,195.5 L 336.0,195.5 Z\" fill=\"#888\" fill-opacity=\".22\"/>\n<path d=\"M 48.0,273.2 L 50.0,267.8 L 52.0,262.5 L 54.0,257.3 L 56.0,252.1 L 58.0,247.0 L 60.0,242.0 L 62.0,237.1 L 64.0,232.2 L 66.0,227.3 L 68.0,222.6 L 70.0,217.9 L 72.0,213.3 L 74.0,208.7 L 76.0,204.2 L 78.0,199.8 L 80.0,195.5 L 82.0,191.2 L 84.0,187.0 L 86.0,182.8 L 88.0,178.7 L 90.0,174.7 L 92.0,170.8 L 94.0,166.9 L 96.0,163.1 L 98.0,159.3 L 100.0,155.6 L 102.0,152.0 L 104.0,148.5 L 106.0,145.0 L 108.0,141.6 L 110.0,138.3 L 112.0,135.0 L 114.0,131.8 L 116.0,128.7 L 118.0,125.6 L 120.0,122.6 L 122.0,119.7 L 124.0,116.8 L 126.0,114.0 L 128.0,111.2 L 130.0,108.6 L 132.0,106.0 L 134.0,103.5 L 136.0,101.0 L 138.0,98.6 L 140.0,96.3 L 142.0,94.0 L 144.0,91.8 L 146.0,89.7 L 148.0,87.6 L 150.0,85.6 L 152.0,83.7 L 154.0,81.9 L 156.0,80.1 L 158.0,78.4 L 160.0,76.7 L 162.0,75.1 L 164.0,73.6 L 166.0,72.2 L 168.0,70.8 L 170.0,69.5 L 172.0,68.2 L 174.0,67.0 L 176.0,65.9 L 178.0,64.9 L 180.0,63.9 L 182.0,63.0 L 184.0,62.1 L 186.0,61.4 L 188.0,60.6 L 190.0,60.0 L 192.0,59.4 L 194.0,58.9 L 196.0,58.5 L 198.0,58.1 L 200.0,57.8 L 202.0,57.6 L 204.0,57.4 L 206.0,57.3 L 208.0,57.3 L 210.0,57.3 L 212.0,57.4 L 214.0,57.6 L 216.0,57.8 L 218.0,58.1 L 220.0,58.5 L 222.0,58.9 L 224.0,59.4 L 226.0,60.0 L 228.0,60.6 L 230.0,61.4 L 232.0,62.1 L 234.0,63.0 L 236.0,63.9 L 238.0,64.9 L 240.0,65.9 L 242.0,67.0 L 244.0,68.2 L 246.0,69.5 L 248.0,70.8 L 250.0,72.2 L 252.0,73.6 L 254.0,75.1 L 256.0,76.7 L 258.0,78.4 L 260.0,80.1 L 262.0,81.9 L 264.0,83.7 L 266.0,85.6 L 268.0,87.6 L 270.0,89.7 L 272.0,91.8 L 274.0,94.0 L 276.0,96.3 L 278.0,98.6 L 280.0,101.0 L 282.0,103.5 L 284.0,106.0 L 286.0,108.6 L 288.0,111.2 L 290.0,114.0 L 292.0,116.8 L 294.0,119.7 L 296.0,122.6 L 298.0,125.6 L 300.0,128.7 L 302.0,131.8 L 304.0,135.0 L 306.0,138.3 L 308.0,141.6 L 310.0,145.0 L 312.0,148.5 L 314.0,152.0 L 316.0,155.6 L 318.0,159.3 L 320.0,163.1 L 322.0,166.9 L 324.0,170.8 L 326.0,174.7 L 328.0,178.7 L 330.0,182.8 L 332.0,187.0 L 334.0,191.2 L 336.0,195.5 L 338.0,199.8 L 340.0,204.2 L 342.0,208.7 L 344.0,213.3 L 346.0,217.9 L 348.0,222.6 L 350.0,227.3 L 352.0,232.2 L 354.0,237.1 L 356.0,242.0 L 358.0,247.0 L 360.0,252.1 L 362.0,257.3 L 364.0,262.5 L 366.0,267.8 L 368.0,273.2\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.5\"/>\n<text x=\"270\" y=\"58\" font-size=\"15\">y = 4 - x²</text>\n<text x=\"73.0\" y=\"213.5\" font-size=\"13\">-2</text>\n<text x=\"332.0\" y=\"213.5\" font-size=\"13\">2</text>\n</svg></span><p>Bestäm arean mellan grafen \\(y=4-x^2\\) och \\(x\\)-axeln.</p>",
    "s": "<p>Nollställena är \\(x=-2\\) och \\(x=2\\). Mellan nollställena ligger grafen ovanför \\(x\\)-axeln, så arean är</p><p>\\[A=\\int_{-2}^{2}(4-x^2)\\,dx.\\]</p><p>\\[A=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\mathbf{\\frac{32}{3}}.\\]</p>",
    "id": "3.49"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "E",
    "typ": "medelvärde av funktion",
    "poang": "2/0/0",
    "t": "<p>Bestäm medelvärdet av \\(f(x)=x^2\\) på intervallet \\([0,3]\\).</p>",
    "s": "<p>Medelvärdet är</p><p>\\[\\frac{1}{3-0}\\int_0^3x^2dx=\\frac13\\left[\\frac{x^3}{3}\\right]_0^3=\\frac13\\cdot9=3.\\]</p>",
    "id": "3.50"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "area mellan två kurvor",
    "poang": "0/2/0",
    "t": "<p>Bestäm arean mellan graferna \\(y=x+2\\) och \\(y=x^2\\) mellan deras skärningspunkter.</p>",
    "s": "<p>Skärningar: \\(x^2=x+2\\Rightarrow(x-2)(x+1)=0\\), alltså \\(x=-1,2\\). Linjen ligger över parabeln mellan skärningarna:</p><p>\\[A=\\int_{-1}^{2}(x+2-x^2)dx=\\frac92.\\]</p>",
    "id": "3.51"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "optimering med integralanknytning",
    "poang": "0/2/0",
    "t": "<p>En rektangel har hörn på \\(x\\)-axeln och de övre hörnen på parabeln \\(y=9-x^2\\), symmetriskt kring \\(y\\)-axeln. Bestäm största möjliga area.</p>",
    "s": "<p>Låt högra hörnets x-koordinat vara \\(x\\). Bredden är \\(2x\\) och höjden \\(9-x^2\\), så</p><p>\\[A(x)=2x(9-x^2)=18x-2x^3.\\]</p><p>\\[A'(x)=18-6x^2=0\\Rightarrow x=\\sqrt3.\\]</p><p>\\[A_{\\max}=2\\sqrt3(9-3)=12\\sqrt3.\\]</p>",
    "id": "3.52"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "E",
    "typ": "bestäm area mellan linje och axel",
    "poang": "2/0/0",
    "t": "<p>Bestäm arean mellan \\(y=6-2x\\), \\(x\\)-axeln och \\(y\\)-axeln.</p>",
    "s": "<p>Nollstället är \\(x=3\\). Arean kan beräknas med integral:</p><p>\\[\\int_0^3(6-2x)dx=[6x-x^2]_0^3=9.\\]</p>",
    "id": "3.70"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "E",
    "typ": "bestämd integral symmetri",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\(\\int_{-2}^{2}(x^3+4)dx\\).</p>",
    "s": "<p>\\(x^3\\) är udda och integralen över ett symmetriskt intervall är 0. Den konstanta delen ger \\(4\\cdot4=16\\). Alltså <strong>16</strong>.</p>",
    "id": "3.71"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "parameter bestämd från area",
    "poang": "0/2/0",
    "t": "<p>För \\(m\\gt0\\) begränsar grafen \\(y=mx-x^2\\) tillsammans med \\(x\\)-axeln ett område mellan \\(x=0\\) och \\(x=m\\). Bestäm \\(m\\) om områdets area är \\(9/2\\).</p>",
    "s": "<p>Eftersom \\(y=x(m-x)\\) är funktionen positiv mellan nollställena \\(0\\) och \\(m\\). Arean är därför</p><p>\\[A=\\int_0^m(mx-x^2)\\,dx=\\left[\\frac{mx^2}{2}-\\frac{x^3}{3}\\right]_0^m.\\]</p><p>\\[A=\\frac{m^3}{2}-\\frac{m^3}{3}=\\frac{m^3}{6}.\\]</p><p>Villkoret \\(A=9/2\\) ger</p><p>\\[\\frac{m^3}{6}=\\frac92\\Rightarrow m^3=27.\\]</p><p>Eftersom \\(m\\gt0\\) får vi <strong>\\(m=3\\)</strong>.</p>",
    "id": "3.72"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "bestäm parameter från integral",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\gt0\\) så att \\(\\int_0^a 2x\\,dx=25\\).</p>",
    "s": "<p>\\[\\int_0^a2x dx=[x^2]_0^a=a^2.\\]</p><p>\\[a^2=25\\Rightarrow a=5\\] eftersom \\(a\\gt0\\).</p>",
    "id": "3.73"
  },
  {
    "kap": 3,
    "omr": "fordjupad_analys",
    "niva": "C",
    "typ": "area med absolutvärde",
    "poang": "0/2/0",
    "t": "<p>Bestäm arean mellan grafen \\(y=x^2-1\\) och \\(x\\)-axeln på intervallet \\([-2,2]\\).</p>",
    "s": "<p>Nollställena är \\(x=\\pm1\\). Funktionen är positiv på \\([-2,-1]\\) och \\([1,2]\\), men negativ på \\([-1,1]\\). För area måste den negativa delen därför byta tecken:</p><p>\\[A=2\\int_1^2(x^2-1)\\,dx-\\int_{-1}^{1}(x^2-1)\\,dx.\\]</p><p>De yttre delarna ger tillsammans \\(8/3\\) och mittdelen ger \\(4/3\\). Alltså</p><p>\\[A=\\frac83+\\frac43=\\mathbf{4}.\\]</p>",
    "id": "3.80"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "C",
    "typ": "värdera CAS-resultat för generaliserad integral",
    "poang": "0/2/0",
    "t": "<p>Ett CAS ger värdet \\(-1\\) för en primitiv funktion när du undersöker \\(\\int_1^\\infty \\frac{1}{x^{1/2}}\\,dx\\). Förklara varför man inte kan acceptera detta som integralens värde och avgör om integralen konvergerar.</p>",
    "s": "<p>En generaliserad integral måste behandlas som ett gränsvärde:</p><p>\\[\\int_1^R x^{-1/2}dx=2\\sqrt R-2.\\]</p><p>När \\(R\\to\\infty\\) går uttrycket mot \\(\\infty\\). Integralen <strong>divergerar</strong>. Ett CAS-uttryck för en primitiv funktion ersätter inte konvergensprövningen.</p>",
    "id": "3.13"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "C",
    "typ": "granska felaktigt CAS-resultat för generaliserad integral",
    "poang": "0/2/0",
    "t": "<p>Ett CAS ger resultatet</p><p>\\[\\int_0^2\\frac{1}{(x-1)^2}\\,dx=-2.\\]</p><p>Förklara varför resultatet inte kan användas som värde på den generaliserade integralen och avgör om integralen konvergerar.</p>",
    "s": "<p>Integranden har en singularitet vid \\(x=1\\). Integralen måste därför delas upp:</p><p>\\[\\int_0^1\\frac{dx}{(x-1)^2}+\\int_1^2\\frac{dx}{(x-1)^2}.\\]</p><p>Redan den första delen divergerar eftersom en primitiv funktion är \\(-1/(x-1)\\), som går mot \\(+\\infty\\) när \\(x\\to1^-\\). Även den andra delen divergerar.</p><p>Integralen är alltså <strong>divergent</strong>. CAS-resultatet kommer av att man formellt satt in ändpunkterna utan att hantera singulariteten.</p>",
    "id": "3.23"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "E",
    "typ": "tolka derivata från CAS-utdata",
    "poang": "2/0/0",
    "id": "3.29",
    "t": "<p>Ett CAS ger att derivatan av \\(f(x)=x^3-6x\\) är \\(f'(x)=3x^2-6\\).</p><ol type=\"a\"><li>Bestäm de kritiska punkterna.</li><li>Ange i vilka intervall funktionen är växande.</li></ol>",
    "s": "<p><strong>a)</strong> Kritiska punkter fås när derivatan är 0:</p><p>\\[3x^2-6=0\\Rightarrow x^2=2\\Rightarrow x=\\pm \\sqrt2.\\]</p><p><strong>b)</strong> Funktionen är växande när \\(f'(x)>0\\):</p><p>\\[3x^2-6>0\\Rightarrow x^2>2\\Rightarrow x\\lt -\\sqrt2\\ \\text{eller}\\ x>\\sqrt2.\\]</p><p><strong>Funktionen är alltså växande för \\(( -\\infty,-\\sqrt2)\\) och \\((\\sqrt2,\\infty)\\).</strong></p>"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "E",
    "typ": "tolka numeriskt integralvärde",
    "poang": "2/0/0",
    "t": "<p>Ett digitalt verktyg ger \\(\\int_0^2 e^{-x^2}dx\\approx0,8821\\). Vad betyder talet geometriskt?</p>",
    "s": "<p>Eftersom \\(e^{-x^2}\\gt0\\) på intervallet är integralvärdet arean mellan grafen \\(y=e^{-x^2}\\), \\(x\\)-axeln och linjerna \\(x=0\\) och \\(x=2\\). Arean är ungefär <strong>0,8821 areaenheter</strong>.</p>",
    "id": "3.53"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "C",
    "typ": "granska CAS-antagande",
    "poang": "0/2/0",
    "t": "<p>Ett CAS ger lösningarna \\(x=\\pm2\\) till ekvationen \\(\\sqrt{x^2}=2\\). En elev påstår därför att \\(\\sqrt{x^2}=x\\) för alla reella \\(x\\). Förklara felet.</p>",
    "s": "<p>För reella \\(x\\) gäller \\(\\sqrt{x^2}=|x|\\), inte alltid \\(x\\). Om \\(x\\lt0\\) är \\(|x|=-x\\). CAS-svaret \\(x=\\pm2\\) visar just att båda tecknen är möjliga. Elevens generalisering är därför fel.</p>",
    "id": "3.54"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "E",
    "typ": "numerisk nollpunkt från verktyg",
    "poang": "2/0/0",
    "t": "<p>Ett digitalt verktyg ger nollpunkten \\(x\\approx1,521\\) till \\(x^3-x-2=0\\). Förklara hur du kan kontrollera att värdet är rimligt utan att lösa ekvationen exakt.</p>",
    "s": "<p>Sätt in värdet ungefärligt: \\(1,521^3-1,521-2\\approx0\\). Man kan också kontrollera teckenbyte: \\(f(1)=-2\\) och \\(f(2)=4\\), så en nollpunkt mellan 1 och 2 är rimlig.</p>",
    "id": "3.74"
  },
  {
    "kap": 3,
    "omr": "digitala_verktyg_analys",
    "niva": "C",
    "typ": "numerisk derivata och tolkning",
    "poang": "0/2/0",
    "t": "<p>Ett verktyg ger \\(f'(2)\\approx-3,7\\) för en mätdataanpassad funktion \\(f(t)\\), där \\(f\\) mäts i °C och \\(t\\) i minuter. Tolka värdet.</p>",
    "s": "<p>Vid \\(t=2\\) minuter minskar temperaturen momentant med ungefär <strong>3,7 °C per minut</strong>. Minustecknet anger minskning.</p>",
    "id": "3.75"
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
    "s": "<p><strong>Metod:</strong> Sätt upp den karakteristiska ekvationen och låt dess rötter bestämma lösningsformen.</p><p>Rötterna är \\(-2\\) och \\(-5\\), så \\(y=Ae^{-2x}+Be^{-5x}\\). Villkoren ger \\(A+B=0\\), \\(-2A-5B=3\\), alltså \\(A=1\\), \\(B=-1\\). <strong>\\(y=e^{-2x}-e^{-5x}\\)</strong>.</p>",
    "id": "4.02"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "allmän lösning separabel linjär differentialekvation",
    "poang": "1/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y'=3y\\).</p>",
    "s": "<p>För ekvationen \\(y'=3y\\) söker vi en exponentialfunktion, eftersom derivatan av \\(e^{kx}\\) är proportionell mot funktionen själv.</p><p>Den allmänna lösningen är <strong>\\(y=Ce^{3x}\\)</strong>, där \\(C\\) är en godtycklig konstant.</p>",
    "id": "4.03"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "lösa enkel homogen differentialekvation",
    "poang": "2/0/0",
    "id": "4.49",
    "t": "<p>Lös differentialekvationen</p><p>\\[y'=3y.\\]</p>",
    "s": "<p>För en differentialekvation av typen \\(y'=ky\\) är den allmänna lösningen \\(y=Ce^{kx}\\).</p><p>Här är \\(k=3\\), alltså</p><p><strong>\\(y=Ce^{3x}\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "begynnelsevärde till homogen differentialekvation",
    "poang": "2/0/0",
    "id": "4.50",
    "t": "<p>Lös begynnelsevärdesproblemet</p><p>\\[y'=-0,5y,\\qquad y(0)=12.\\]</p>",
    "s": "<p>Den allmänna lösningen är \\(y=Ce^{-0,5x}\\).</p><p>Begynnelsevillkoret ger</p><p>\\[12=y(0)=Ce^0=C.\\]</p><p>Alltså är <strong>\\(y=12e^{-0,5x}\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "lösa y prim lika med ky",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y'=-4y\\).</p>",
    "s": "<p>För \\(y'=ky\\) är lösningen \\(y=Ce^{kx}\\). Här är \\(k=-4\\):</p><p><strong>\\(y=Ce^{-4x}\\)</strong>.</p>",
    "id": "4.67"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "begynnelsevärde exponential",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y'=0,3y\\), \\(y(0)=7\\).</p>",
    "s": "<p>\\(y=Ce^{0,3x}\\). Begynnelsevillkoret ger \\(C=7\\). Alltså</p><p><strong>\\(y=7e^{0,3x}\\)</strong>.</p>",
    "id": "4.68"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "C",
    "typ": "bestäm parameter från två värden",
    "poang": "0/2/0",
    "t": "<p>En lösning till \\(y'=ky\\) uppfyller \\(y(0)=12\\) och \\(y(5)=18\\). Bestäm \\(k\\).</p>",
    "s": "<p>\\(y=12e^{kx}\\). Sätt \\(x=5\\):</p><p>\\[18=12e^{5k}\\Rightarrow e^{5k}=1,5\\Rightarrow k=\\frac{\\ln1,5}{5}\\approx0,0811.\\]</p>",
    "id": "4.69"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "halveringstid från k",
    "poang": "2/0/0",
    "t": "<p>En mängd följer \\(y'=-0,2y\\). Hur stor andel återstår efter 5 tidsenheter?</p>",
    "s": "<p>\\(y=y_0e^{-0,2t}\\). Efter 5 enheter är andelen</p><p>\\[e^{-1}\\approx0,368.\\]</p><p><strong>Cirka 36,8 % återstår.</strong></p>",
    "id": "4.92"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "C",
    "typ": "bestäm halveringstid",
    "poang": "0/2/0",
    "t": "<p>En radioaktiv mängd följer \\(N'=-0,035N\\). Bestäm halveringstiden.</p>",
    "s": "<p>\\(N=N_0e^{-0,035t}\\). Vid halvering:</p><p>\\[\\frac12=e^{-0,035t}\\Rightarrow t=\\frac{\\ln2}{0,035}\\approx19,8.\\]</p>",
    "id": "4.93"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_homogena",
    "niva": "E",
    "typ": "bestäm konstant C",
    "poang": "2/0/0",
    "t": "<p>En lösning till \\(y'=2y\\) är \\(y=Ce^{2x}\\). Bestäm \\(C\\) om \\(y(1)=10\\).</p>",
    "s": "<p>\\[10=Ce^2\\Rightarrow C=10e^{-2}.\\]</p>",
    "id": "4.120"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "andra ordningens homogen med två reella rötter",
    "poang": "2/0/0",
    "t": "<p>Lös differentialekvationen \\(y''-12y'+32y=0\\).</p>",
    "s": "<p><strong>Metod:</strong> För en homogen linjär differentialekvation med konstanta koefficienter använder vi den karakteristiska ekvationen.</p><p>\\[r^2-12r+32=0=(r-4)(r-8).\\]</p><p>Rötterna är \\(r=4\\) och \\(r=8\\). Två olika reella rötter ger <strong>\\(y=Ae^{4x}+Be^{8x}\\)</strong>.</p>",
    "id": "4.04"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "ange en partikulär lösning till homogen differentialekvation",
    "poang": "2/0/0",
    "t": "<p>Differentialekvationen \\(y''+8y'-9y=0\\) har många lösningar. Bestäm en enda icke-nollskild lösning.</p>",
    "s": "<p>Den karakteristiska ekvationen är \\[r^2+8r-9=0=(r-1)(r+9).\\]</p><p>Rötterna är \\(r=1\\) och \\(r=-9\\). Därför är både \\(e^x\\) och \\(e^{-9x}\\) lösningar. En möjlig icke-nollskild lösning är exempelvis <strong>\\(y=e^x\\)</strong>.</p>",
    "id": "4.05"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "andra ordningens homogen med reella rötter",
    "poang": "2/0/0",
    "id": "4.53",
    "t": "<p>Lös differentialekvationen</p><p>\\[y''-5y'+6y=0.\\]</p>",
    "s": "<p>Karakteristiska ekvationen är</p><p>\\[r^2-5r+6=0=(r-2)(r-3).\\]</p><p>Rötterna är \\(r=2\\) och \\(r=3\\). Därför blir den allmänna lösningen</p><p><strong>\\(y=C_1e^{2x}+C_2e^{3x}\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "karakteristisk ekvation med två rötter",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+y'-6y=0\\).</p>",
    "s": "<p>Karakteristiska ekvationen är \\(r^2+r-6=0=(r-2)(r+3)\\). Rötterna är 2 och -3:</p><p><strong>\\(y=C_1e^{2x}+C_2e^{-3x}\\)</strong>.</p>",
    "id": "4.73"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "andra ordningen reella negativa rötter",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+5y'+6y=0\\).</p>",
    "s": "<p>\\[r^2+5r+6=(r+2)(r+3)=0.\\]</p><p>Alltså <strong>\\(y=C_1e^{-2x}+C_2e^{-3x}\\)</strong>.</p>",
    "id": "4.74"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "E",
    "typ": "reella rötter 1 och -4",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+3y'-4y=0\\).</p>",
    "s": "<p>\\[r^2+3r-4=(r-1)(r+4)=0.\\]</p><p><strong>\\(y=C_1e^x+C_2e^{-4x}\\)</strong>.</p>",
    "id": "4.97"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_reella",
    "niva": "C",
    "typ": "begynnelsevillkor reella rötter",
    "poang": "0/2/0",
    "t": "<p>Lös \\(y''-3y'+2y=0\\), \\(y(0)=4\\), \\(y'(0)=5\\).</p>",
    "s": "<p>Allmän lösning \\(y=C_1e^x+C_2e^{2x}\\). Villkoren ger</p><p>\\[C_1+C_2=4,\\qquad C_1+2C_2=5.\\]</p><p>Därför \\(C_2=1\\), \\(C_1=3\\):</p><p><strong>\\(y=3e^x+e^{2x}\\)</strong>.</p>",
    "id": "4.98"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "andra ordningens begynnelsevärdesproblem",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+6y'+8y=0\\) med \\(y(0)=1\\) och \\(y'(0)=0\\).</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först den allmänna lösningen och använd sedan villkoren för att bestämma konstanterna.</p><p>Rötterna är −2 och −4: \\(y=Ae^{-2x}+Be^{-4x}\\). Villkoren ger \\(A+B=1\\) och \\(-2A-4B=0\\). Därav \\(A=2\\), \\(B=-1\\). <strong>\\(y=2e^{-2x}-e^{-4x}\\)</strong>.</p>",
    "id": "4.06"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "andra ordningens begynnelsevärde med positiva rötter",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''-8y'+12y=0\\) med \\(y(0)=1\\) och \\(y'(0)=0\\).</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först den allmänna lösningen och använd sedan villkoren för att bestämma konstanterna.</p><p>Rötterna är 2 och 6: \\(y=Ae^{2x}+Be^{6x}\\). \\(A+B=1\\) och \\(2A+6B=0\\), vilket ger \\(A=3/2\\), \\(B=-1/2\\). <strong>\\(y=\\frac32e^{2x}-\\frac{1}{2}e^{6x}\\)</strong>.</p>",
    "id": "4.07"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "bestämma konstanter i lösning",
    "poang": "2/0/0",
    "id": "4.56",
    "t": "<p>Bestäm lösningen till differentialekvationen \\(y''-y=0\\) som uppfyller \\(y(0)=2\\) och \\(y'(0)=0\\).</p>",
    "s": "<p>Den allmänna lösningen till \\(y''-y=0\\) är</p><p>\\[y=C_1e^x+C_2e^{-x}.\\]</p><p>Då är</p><p>\\[y(0)=C_1+C_2=2\\]</p><p>och</p><p>\\[y'=C_1e^x-C_2e^{-x}\\Rightarrow y'(0)=C_1-C_2=0.\\]</p><p>Systemet ger \\(C_1=C_2=1\\).</p><p><strong>Alltså är \\(y=e^x+e^{-x}\\).</strong></p>"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "bestäm konstanter andra ordningen",
    "poang": "2/0/0",
    "t": "<p>Bestäm lösningen till \\(y''-4y=0\\) med \\(y(0)=3\\) och \\(y'(0)=0\\).</p>",
    "s": "<p>\\(y=C_1e^{2x}+C_2e^{-2x}\\). Villkoren ger</p><p>\\[C_1+C_2=3,\\qquad2C_1-2C_2=0.\\]</p><p>Därför \\(C_1=C_2=1,5\\) och</p><p><strong>\\(y=1,5e^{2x}+1,5e^{-2x}\\)</strong>.</p>",
    "id": "4.82"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "C",
    "typ": "begynnelsevillkor komplex lösning",
    "poang": "0/2/0",
    "t": "<p>Lös \\(y''+4y=0\\), \\(y(0)=2\\), \\(y'(0)=-4\\).</p>",
    "s": "<p>\\(y=C_1\\cos2x+C_2\\sin2x\\). Från \\(y(0)=2\\) fås \\(C_1=2\\). Derivatan är \\(y'=-2C_1\\sin2x+2C_2\\cos2x\\). Då \\(y'(0)=2C_2=-4\\), så \\(C_2=-2\\).</p><p><strong>\\(y=2\\cos2x-2\\sin2x\\)</strong>.</p>",
    "id": "4.83"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "E",
    "typ": "initialvillkor inhomogen första ordningen",
    "poang": "2/0/0",
    "t": "<p>Bestäm den lösning till \\(y'+y=4\\) som uppfyller \\(y(0)=10\\).</p>",
    "s": "<p>Allmän lösning \\(y=4+Ce^{-x}\\). Villkoret ger \\(10=4+C\\Rightarrow C=6\\). Alltså</p><p><strong>\\(y=4+6e^{-x}\\)</strong>.</p>",
    "id": "4.107"
  },
  {
    "kap": 4,
    "omr": "begynnelsevillkor",
    "niva": "C",
    "typ": "initialvillkor andra inhomogen",
    "poang": "0/2/0",
    "t": "<p>Lös \\(y''+y=2\\), \\(y(0)=0\\), \\(y'(0)=1\\).</p>",
    "s": "<p>Homogent \\(y_h=C_1\\cos x+C_2\\sin x\\). Partikulärt \\(y_p=2\\). Alltså \\(y=C_1\\cos x+C_2\\sin x+2\\).</p><p>\\(y(0)=0\\Rightarrow C_1=-2\\). \\(y'(0)=C_2=1\\).</p><p><strong>\\(y=-2\\cos x+\\sin x+2\\)</strong>.</p>",
    "id": "4.108"
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
    "s": "<p><strong>Metod:</strong> Bygg lösningen som homogen lösning plus en partikulärlösning.</p><p>\\(y'-3y=-x\\). Homogen lösning: \\(Ce^{3x}\\). Sök \\(y_p=ax+b\\): \\(a-3(ax+b)=-x\\), så \\(a=1/3\\), \\(b=1/9\\). <strong>\\(y=Ce^{3x}+\\frac{x}{3}+\\frac19\\)</strong>.</p>",
    "id": "4.09"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "E",
    "typ": "andra ordningens homogen med dubbelrot",
    "poang": "3/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''+4y'+4y=0\\).</p>",
    "s": "<p>Den karakteristiska ekvationen är \\[r^2+4r+4=(r+2)^2=0.\\]</p><p>Vi får dubbelroten \\(r=-2\\). Vid en dubbelrot behövs två linjärt oberoende lösningar, \\(e^{-2x}\\) och \\(xe^{-2x}\\). Därför är <strong>\\(y=(A+Bx)e^{-2x}\\)</strong>.</p>",
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
    "s": "<p><strong>Metod:</strong> Komplexa rötter \\(a\\pm bi\\) ger lösningar av formen \\(e^{ax}(C\\cos bx+D\\sin bx)\\).</p><ol type=\"a\"><li><strong>\\(y=10e^{8x}\\)</strong>.</li><li>Karakteristiska ekvationen ger \\(r=-2\\pm3i\\). Därför <strong>\\(y=e^{-2x}(A\\cos3x+B\\sin3x)\\)</strong>.</li></ol>",
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
    "s": "<p>För att verifiera en föreslagen lösning deriverar vi och sätter in i differentialekvationen.</p><p>För \\(y=4e^{-2x}\\) är \\(y'=-8e^{-2x}\\). Då blir</p><p>\\[y'+2y=-8e^{-2x}+8e^{-2x}=0.\\]</p><p>Vänsterledet blir alltså exakt högerledet, så funktionen <strong>är en lösning</strong>.</p>",
    "id": "4.14"
  },
  {
    "kap": 4,
    "omr": "verifiera_losningar",
    "niva": "E",
    "typ": "verifiera lösning till inhomogen differentialekvation",
    "poang": "2/0/0",
    "t": "<p>Visa att \\(y=2e^x+3\\) är en lösning till</p><p>\\[y''-y=-3.\\]</p>",
    "s": "<p><strong>Metod:</strong> Derivera den föreslagna funktionen och kontrollera att insättning ger rätt högerled.</p><p>Derivera: \\(y'=2e^x\\) och \\(y''=2e^x\\). Då</p><p>\\[y''-y=2e^x-(2e^x+3)=-3.\\]</p><p>Alltså uppfyller funktionen differentialekvationen.</p>",
    "id": "4.36"
  },
  {
    "kap": 4,
    "omr": "verifiera_losningar",
    "niva": "E",
    "typ": "verifiera lösning genom insättning",
    "poang": "2/0/0",
    "id": "4.47",
    "t": "<p>Visa att \\(y=4e^{-2x}\\) är en lösning till differentialekvationen \\(y'+2y=0\\).</p>",
    "s": "<p>Derivera först funktionen:</p><p>\\[y'=-8e^{-2x}.\\]</p><p>Sätt in i vänsterledet:</p><p>\\[y'+2y=-8e^{-2x}+2\\cdot 4e^{-2x}=-8e^{-2x}+8e^{-2x}=0.\\]</p><p>Eftersom vänsterledet blir 0 uppfyller funktionen differentialekvationen.</p>"
  },
  {
    "kap": 4,
    "omr": "verifiera_losningar",
    "niva": "E",
    "typ": "verifiera exponentiallösning",
    "poang": "2/0/0",
    "t": "<p>Visa att \\(y=3e^{2x}\\) löser \\(y'-2y=0\\).</p>",
    "s": "<p>\\(y'=6e^{2x}\\). Då</p><p>\\[y'-2y=6e^{2x}-6e^{2x}=0.\\]</p><p>Alltså är funktionen en lösning.</p>",
    "id": "4.63"
  },
  {
    "kap": 4,
    "omr": "verifiera_losningar",
    "niva": "E",
    "typ": "verifiera trigonometrisk lösning",
    "poang": "2/0/0",
    "t": "<p>Visa att \\(y=\\sin3x\\) löser \\(y''+9y=0\\).</p>",
    "s": "<p>\\(y'=3\\cos3x\\), \\(y''=-9\\sin3x\\). Då</p><p>\\[y''+9y=-9\\sin3x+9\\sin3x=0.\\]</p>",
    "id": "4.64"
  },
  {
    "kap": 4,
    "omr": "verifiera_losningar",
    "niva": "E",
    "typ": "verifiera konstant plus exponential",
    "poang": "2/0/0",
    "t": "<p>Visa att \\(y=4+2e^{-3x}\\) löser \\(y'+3y=12\\).</p>",
    "s": "<p>\\(y'=-6e^{-3x}\\). Då</p><p>\\[y'+3y=-6e^{-3x}+12+6e^{-3x}=12.\\]</p>",
    "id": "4.89"
  },
  {
    "kap": 4,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "typ": "ordning och homogenitet",
    "poang": "2/0/0",
    "t": "<p>Bestäm differentialekvationens ordning och avgör om den är homogen eller inhomogen:</p><p>\\[y''-5y'+6y=4e^x.\\]</p>",
    "s": "<p><strong>Ordning:</strong> Den högsta derivatan som förekommer är \\(y''\\). Differentialekvationen är därför av <strong>andra ordningen</strong>.</p><p><strong>Homogen eller inhomogen:</strong> En linjär differentialekvation är homogen när högerledet är 0. Här är högerledet \\(4e^x\\neq0\\), så ekvationen är <strong>inhomogen</strong>.</p>",
    "id": "4.15"
  },
  {
    "kap": 4,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "typ": "identifiera differentialekvation",
    "poang": "2/0/0",
    "id": "4.46",
    "t": "<p>Vilka av följande är differentialekvationer?</p><p>a) \\(y'=3y\\) &nbsp;&nbsp; b) \\(2x+5=11\\) &nbsp;&nbsp; c) \\(y''+y=0\\) &nbsp;&nbsp; d) \\(f(x)=x^2\\)</p>",
    "s": "<p>En differentialekvation innehåller en okänd funktion och någon av dess derivator.</p><p>a) \\(y'=3y\\) är en differentialekvation.</p><p>b) \\(2x+5=11\\) är bara en vanlig ekvation.</p><p>c) \\(y''+y=0\\) är en differentialekvation.</p><p>d) \\(f(x)=x^2\\) beskriver en funktion men är ingen differentialekvation.</p><p><strong>Rätt svar är a) och c).</strong></p>"
  },
  {
    "kap": 4,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "typ": "ordning hos differentialekvation",
    "poang": "2/0/0",
    "t": "<p>Ange ordningen på differentialekvationen \\(y''+3y'-2y=x\\).</p>",
    "s": "<p>Den högsta derivatan som förekommer är \\(y''\\), alltså är det en differentialekvation av <strong>andra ordningen</strong>.</p>",
    "id": "4.61"
  },
  {
    "kap": 4,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "typ": "homogen eller inhomogen",
    "poang": "2/0/0",
    "t": "<p>Avgör om \\(y''-4y'+4y=7e^x\\) är homogen eller inhomogen.</p>",
    "s": "<p>Högerledet är inte noll. Ekvationen är därför <strong>inhomogen</strong>.</p>",
    "id": "4.62"
  },
  {
    "kap": 4,
    "omr": "differentialekvation_begrepp",
    "niva": "E",
    "typ": "identifiera beroende variabel",
    "poang": "2/0/0",
    "t": "<p>I differentialekvationen \\(T'=-0,2(T-20)\\), vilken storhet är den beroende variabeln?</p>",
    "s": "<p>Den beroende variabeln är <strong>\\(T\\)</strong>, eftersom dess förändring beskrivs som funktion av den oberoende variabeln (ofta tiden).</p>",
    "id": "4.88"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "C",
    "typ": "tolka tecken i Newtons avsvalningslag",
    "poang": "0/2/0",
    "t": "<p>En temperaturmodell skrivs \\(T'=k(T-180)\\). Ett föremål som från början är 20 °C värms i en ugn på 180 °C. Vilket tecken måste \\(k\\) ha? Motivera.</p>",
    "s": "<p>När föremålet är kallare än ugnen gäller \\(T&lt;180\\), alltså är \\(T-180&lt;0\\). Samtidigt värms föremålet, så temperaturen ökar och därför är \\(T'&gt;0\\).</p><p>I modellen \\[T'=k(T-180)\\] måste produkten på höger sida alltså vara positiv trots att \\(T-180\\) är negativ. Därför måste <strong>\\(k&lt;0\\)</strong>.</p>",
    "id": "4.16"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "C",
    "typ": "jämföra homogen och inhomogen ekvation",
    "poang": "0/2/0",
    "t": "<p>Förklara skillnaden mellan lösningarna till</p><p>\\[y''+4y=0\\]</p><p>och</p><p>\\[y''+4y=8\\cos x.\\]</p><p>Fokusera på vad högerledet gör och hur den allmänna lösningen byggs upp.</p>",
    "s": "<p>I den homogena ekvationen är högerledet noll och alla lösningar består bara av den homogena delen:</p><p>\\[y_h=C_1\\cos2x+C_2\\sin2x.\\]</p><p>I den inhomogena ekvationen finns dessutom en yttre term \\(8\\cos x\\). Den allmänna lösningen byggs därför som</p><p>\\[y=y_h+y_p,\\]</p><p>där \\(y_p\\) är <em>en</em> partikulärlösning som återskapar högerledet. Här kan \\(y_p=\\frac83\\cos x\\). Skillnaden är alltså att högerledet tillför en bestämd påtvingad del till hela familjen av homogena lösningar.</p>",
    "id": "4.44"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "E",
    "typ": "tolka lösningsfamilj",
    "poang": "2/0/0",
    "id": "4.48",
    "t": "<p>Till differentialekvationen \\(y'=2y\\) hör lösningsfamiljen \\(y=Ce^{2x}\\).</p><p>Vilken lösning fås om \\(y(0)=5\\)?</p>",
    "s": "<p>Vi använder begynnelsevillkoret i lösningsfamiljen:</p><p>\\[y(0)=Ce^{0}=C.\\]</p><p>Eftersom \\(y(0)=5\\) blir \\(C=5\\).</p><p><strong>Lösningen är \\(y=5e^{2x}\\).</strong></p>"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "E",
    "typ": "jämviktslösning",
    "poang": "2/0/0",
    "t": "<p>För \\(y'=4-y\\), bestäm den konstanta jämviktslösningen.</p>",
    "s": "<p>Vid en konstant lösning är \\(y'=0\\). Därför</p><p>\\[0=4-y\\Rightarrow y=4.\\]</p><p><strong>Jämviktslösningen är \\(y=4\\).</strong></p>",
    "id": "4.65"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "C",
    "typ": "tolka tecken på derivata",
    "poang": "0/2/0",
    "t": "<p>En population modelleras av \\(P'=0,02P(500-P)\\). För vilka positiva populationsstorlekar växer respektive minskar populationen?</p>",
    "s": "<p>För \\(0\\lt P\\lt500\\) är både \\(P\\) och \\(500-P\\) positiva, så \\(P'\\gt0\\): populationen växer. För \\(P\\gt500\\) är \\(500-P\\lt0\\), så \\(P'\\lt0\\): populationen minskar. \\(P=500\\) är en jämvikt.</p>",
    "id": "4.66"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "E",
    "typ": "tecken på tillväxt",
    "poang": "2/0/0",
    "t": "<p>För \\(y'=y(10-y)\\), avgör tecknet på \\(y'\\) när \\(y=4\\) respektive \\(y=12\\).</p>",
    "s": "<p>Vid \\(y=4\\): \\(y'=4\\cdot6\\gt0\\), alltså växer lösningen. Vid \\(y=12\\): \\(y'=12\\cdot(-2)\\lt0\\), alltså minskar den.</p>",
    "id": "4.90"
  },
  {
    "kap": 4,
    "omr": "tolka_diffekv",
    "niva": "C",
    "typ": "jämviktspunkter logistisk modell",
    "poang": "0/2/0",
    "t": "<p>Bestäm jämviktspunkterna för \\(y'=0,01y(200-y)\\) och klassificera dem som stabila eller instabila.</p>",
    "s": "<p>Jämvikt när \\(y'=0\\): \\(y=0\\) eller \\(y=200\\). För små positiva \\(y\\) är \\(y'\\gt0\\), så lösningar rör sig bort från 0: <strong>0 är instabil</strong>. Kring 200 är derivatan positiv under och negativ över: <strong>200 är stabil</strong>.</p>",
    "id": "4.91"
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
    "s": "<p><strong>Metod:</strong> Eulers metod följer riktningsfältet stegvis med \\(y_{n+1}=y_n+h f(x_n,y_n)\\).</p><p>Start \\((0,1)\\). Första steg: \\(y_1=1+0,5(0+1)=1,5\\) vid \\(x=0,5\\). Andra steg: \\(y_2=1,5+0,5(0,5+1,5)=2,5\\). <strong>\\(y(1)\\approx2,5\\)</strong>.</p>",
    "id": "4.19"
  },
  {
    "kap": 4,
    "omr": "eulers_stegmetod",
    "niva": "C",
    "typ": "Eulersteg och jämförelse med riktningsfält",
    "poang": "0/2/0",
    "t": "<p>För differentialekvationen \\(y'=x-y\\) gäller \\(y(0)=1\\). Använd Eulers stegmetod med steglängden \\(h=0,25\\) för att uppskatta \\(y(0,50)\\).</p>",
    "s": "<p>Eulerformeln är \\(y_{n+1}=y_n+h(x_n-y_n)\\).</p><p>Första steget:</p><p>\\[y_1=1+0,25(0-1)=0,75.\\]</p><p>Nu är \\((x_1,y_1)=(0,25,0,75)\\). Andra steget:</p><p>\\[y_2=0,75+0,25(0,25-0,75)=0,625.\\]</p><p>Alltså <strong>\\(y(0,50)\\approx0,625\\)</strong>.</p>",
    "id": "4.39"
  },
  {
    "kap": 4,
    "omr": "eulers_stegmetod",
    "niva": "E",
    "typ": "ett Eulersteg med figur",
    "poang": "2/0/0",
    "id": "4.58",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 420 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf med punkten noll komma ett och Eulersteg mot noll komma fem\">\n<rect width=\"420\" height=\"285\" fill=\"white\"/>\n<g stroke=\"#e6e6e6\">\n<line x1=\"50\" y1=\"30\" x2=\"50\" y2=\"245\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"245\"/><line x1=\"210\" y1=\"30\" x2=\"210\" y2=\"245\"/><line x1=\"290\" y1=\"30\" x2=\"290\" y2=\"245\"/><line x1=\"370\" y1=\"30\" x2=\"370\" y2=\"245\"/>\n<line x1=\"40\" y1=\"245\" x2=\"390\" y2=\"245\"/><line x1=\"40\" y1=\"190\" x2=\"390\" y2=\"190\"/><line x1=\"40\" y1=\"135\" x2=\"390\" y2=\"135\"/><line x1=\"40\" y1=\"80\" x2=\"390\" y2=\"80\"/>\n</g>\n<line x1=\"40\" y1=\"245\" x2=\"395\" y2=\"245\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"50\" y1=\"255\" x2=\"50\" y2=\"25\" stroke=\"#222\" stroke-width=\"2\"/>\n<circle cx=\"50\" cy=\"135\" r=\"4\" fill=\"#222\"/><text x=\"58\" y=\"128\" font-size=\"13\">(0, 1)</text>\n<line x1=\"50\" y1=\"135\" x2=\"130\" y2=\"190\" stroke=\"#777\" stroke-width=\"2.2\"/>\n<circle cx=\"130\" cy=\"190\" r=\"4\" fill=\"#777\"/>\n<text x=\"138\" y=\"184\" font-size=\"13\">första steg</text>\n</svg></span><p>Använd ett Eulersteg med steglängden \\(h=0,5\\) för att approximera \\(y(0,5)\\) om \\(y'=x-y\\) och \\(y(0)=1\\).</p>",
    "s": "<p>Vid startpunkten \\((0,1)\\) är lutningen</p><p>\\[y'=x-y=0-1=-1.\\]</p><p>Eulerformeln är \\(y_{1}=y_0+h\\,f(x_0,y_0)\\).</p><p>Alltså</p><p>\\[y(0,5)\\approx 1+0,5\\cdot(-1)=0,5.\\]</p><p><strong>Approximationen blir \\(y(0,5)\\approx 0,5\\).</strong></p>"
  },
  {
    "kap": 4,
    "omr": "eulers_stegmetod",
    "niva": "E",
    "typ": "två Eulersteg",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 275\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två Eulersteg som linjesegment\">\n<rect width=\"430\" height=\"275\" fill=\"white\"/><g stroke=\"#e3e3e3\"><line x1=\"60\" y1=\"35\" x2=\"60\" y2=\"235\"/><line x1=\"150\" y1=\"35\" x2=\"150\" y2=\"235\"/><line x1=\"240\" y1=\"35\" x2=\"240\" y2=\"235\"/><line x1=\"330\" y1=\"35\" x2=\"330\" y2=\"235\"/><line x1=\"45\" y1=\"215\" x2=\"390\" y2=\"215\"/><line x1=\"45\" y1=\"160\" x2=\"390\" y2=\"160\"/><line x1=\"45\" y1=\"105\" x2=\"390\" y2=\"105\"/></g>\n<line x1=\"45\" y1=\"215\" x2=\"395\" y2=\"215\" stroke=\"#222\"/><line x1=\"60\" y1=\"240\" x2=\"60\" y2=\"25\" stroke=\"#222\"/>\n<circle cx=\"60\" cy=\"105\" r=\"4\"/><line x1=\"60\" y1=\"105\" x2=\"150\" y2=\"132\" stroke=\"#555\" stroke-width=\"2.5\"/><circle cx=\"150\" cy=\"132\" r=\"4\"/><line x1=\"150\" y1=\"132\" x2=\"240\" y2=\"151\" stroke=\"#555\" stroke-width=\"2.5\"/><circle cx=\"240\" cy=\"151\" r=\"4\"/>\n<text x=\"68\" y=\"95\" font-size=\"14\">start</text><text x=\"250\" y=\"150\" font-size=\"14\">Euler</text>\n</svg></span><p>Använd Eulers metod med \\(h=0,5\\) för \\(y'=2-y\\), \\(y(0)=1\\). Bestäm en approximation av \\(y(1)\\).</p>",
    "s": "<p>Start: \\(x_0=0,y_0=1\\).</p><p>Steg 1: \\(y_1=1+0,5(2-1)=1,5\\).</p><p>Steg 2: \\(y_2=1,5+0,5(2-1,5)=1,75\\).</p><p><strong>\\(y(1)\\approx1,75\\)</strong>.</p>",
    "id": "4.85"
  },
  {
    "kap": 4,
    "omr": "eulers_stegmetod",
    "niva": "E",
    "typ": "tre Eulersteg",
    "poang": "2/0/0",
    "t": "<p>Använd Eulers metod med \\(h=0,2\\) för \\(y'=y\\), \\(y(0)=1\\). Bestäm \\(y(0,6)\\) approximativt.</p>",
    "s": "<p>Euler: \\(y_{n+1}=y_n+0,2y_n=1,2y_n\\).</p><p>\\[y_1=1,2,\\quad y_2=1,44,\\quad y_3=1,728.\\]</p><p><strong>\\(y(0,6)\\approx1,728\\)</strong>.</p>",
    "id": "4.111"
  },
  {
    "kap": 4,
    "omr": "eulers_stegmetod",
    "niva": "C",
    "typ": "jämföra steglängder",
    "poang": "0/2/0",
    "t": "<p>För \\(y'=y\\), \\(y(0)=1\\), ger Euler med \\(h=1\\) approximationen \\(y(1)\\approx2\\). Med \\(h=0,5\\) fås \\(y(1)\\approx2,25\\). Det exakta värdet är \\(e\\approx2,718\\). Vad visar jämförelsen?</p>",
    "s": "<p>Den mindre steglängden ger här ett värde närmare det exakta. Euler bygger på lokala linjära steg; mindre steg följer den krökta lösningskurvan bättre. Jämförelsen visar därför att <strong>mindre steglängd normalt ger bättre noggrannhet</strong>, på bekostnad av fler steg.</p>",
    "id": "4.112"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "C",
    "typ": "tolka lutningar i riktningsfält utan figur",
    "poang": "0/2/0",
    "t": "<p>För differentialekvationen \\(y'=x-y\\), bestäm riktningsfältets lutning i punkterna \\((0,0)\\), \\((2,1)\\) och \\((1,3)\\). Förklara också på vilken linje fältet har horisontella riktningsstreck.</p>",
    "s": "<p><strong>Metod:</strong> Lutningen i en punkt fås genom att sätta punktens koordinater i differentialekvationens högerled.</p><p>Lutningen är \\(x-y\\). Den blir <strong>0, 1 och −2</strong> i de tre punkterna. Horisontella streck fås när \\(x-y=0\\), alltså längs <strong>linjen \\(y=x\\)</strong>.</p>",
    "id": "4.20"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "E",
    "typ": "identifiera differentialekvation från riktningsfält",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Riktningsfält för differentialekvationen y prim lika med x minus y\">\n<rect width=\"430\" height=\"300\" fill=\"white\"/>\n<line x1=\"79.0\" y1=\"35\" x2=\"79.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"233.0\" x2=\"395\" y2=\"233.0\" stroke=\"#e1e1e1\"/><text x=\"74.0\" y=\"162.0\" font-size=\"11\">-2</text><text x=\"222.0\" y=\"237.0\" font-size=\"11\">-2</text><line x1=\"147.0\" y1=\"35\" x2=\"147.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"189.0\" x2=\"395\" y2=\"189.0\" stroke=\"#e1e1e1\"/><text x=\"142.0\" y=\"162.0\" font-size=\"11\">-1</text><text x=\"222.0\" y=\"193.0\" font-size=\"11\">-1</text><line x1=\"215.0\" y1=\"35\" x2=\"215.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"145.0\" x2=\"395\" y2=\"145.0\" stroke=\"#e1e1e1\"/><line x1=\"283.0\" y1=\"35\" x2=\"283.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"101.0\" x2=\"395\" y2=\"101.0\" stroke=\"#e1e1e1\"/><text x=\"278.0\" y=\"162.0\" font-size=\"11\">1</text><text x=\"222.0\" y=\"105.0\" font-size=\"11\">1</text><line x1=\"351.0\" y1=\"35\" x2=\"351.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"57.0\" x2=\"395\" y2=\"57.0\" stroke=\"#e1e1e1\"/><text x=\"346.0\" y=\"162.0\" font-size=\"11\">2</text><text x=\"222.0\" y=\"61.0\" font-size=\"11\">2</text>\n<line x1=\"35\" y1=\"145.0\" x2=\"400\" y2=\"145.0\" stroke=\"#222\" stroke-width=\"1.8\"/>\n<line x1=\"215.0\" y1=\"270\" x2=\"215.0\" y2=\"25\" stroke=\"#222\" stroke-width=\"1.8\"/>\n<line x1=\"67.0\" y1=\"233.0\" x2=\"91.0\" y2=\"233.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"70.5\" y1=\"180.5\" x2=\"87.5\" y2=\"197.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"73.6\" y1=\"134.3\" x2=\"84.4\" y2=\"155.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"75.2\" y1=\"89.6\" x2=\"82.8\" y2=\"112.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"76.1\" y1=\"45.4\" x2=\"81.9\" y2=\"68.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"138.5\" y1=\"241.5\" x2=\"155.5\" y2=\"224.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"135.0\" y1=\"189.0\" x2=\"159.0\" y2=\"189.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"138.5\" y1=\"136.5\" x2=\"155.5\" y2=\"153.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"141.6\" y1=\"90.3\" x2=\"152.4\" y2=\"111.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"143.2\" y1=\"45.6\" x2=\"150.8\" y2=\"68.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"209.6\" y1=\"243.7\" x2=\"220.4\" y2=\"222.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"206.5\" y1=\"197.5\" x2=\"223.5\" y2=\"180.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"203.0\" y1=\"145.0\" x2=\"227.0\" y2=\"145.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"206.5\" y1=\"92.5\" x2=\"223.5\" y2=\"109.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"209.6\" y1=\"46.3\" x2=\"220.4\" y2=\"67.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"279.2\" y1=\"244.4\" x2=\"286.8\" y2=\"221.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"277.6\" y1=\"199.7\" x2=\"288.4\" y2=\"178.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"274.5\" y1=\"153.5\" x2=\"291.5\" y2=\"136.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"271.0\" y1=\"101.0\" x2=\"295.0\" y2=\"101.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"274.5\" y1=\"48.5\" x2=\"291.5\" y2=\"65.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"348.1\" y1=\"244.6\" x2=\"353.9\" y2=\"221.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"347.2\" y1=\"200.4\" x2=\"354.8\" y2=\"177.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"345.6\" y1=\"155.7\" x2=\"356.4\" y2=\"134.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"342.5\" y1=\"109.5\" x2=\"359.5\" y2=\"92.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"339.0\" y1=\"57.0\" x2=\"363.0\" y2=\"57.0\" stroke=\"#666\" stroke-width=\"1.7\"/>\n\n<text x=\"400\" y=\"139.0\" font-size=\"13\">x</text><text x=\"222.0\" y=\"28\" font-size=\"13\">y</text>\n</svg></span><p>Riktningsfältet hör till en av differentialekvationerna nedan. Vilken?</p><p>A) \\(y'=x-y\\) &nbsp;&nbsp; B) \\(y'=x+y\\) &nbsp;&nbsp; C) \\(y'=xy\\) &nbsp;&nbsp; D) \\(y'=y-x\\)</p>",
    "s": "<p>På linjen \\(y=x\\) är de små linjestyckena horisontella, vilket betyder \\(y'=0\\). Det stämmer med \\(x-y=0\\).</p><p>Dessutom är lutningen positiv under linjen \\(y=x\\) och negativ ovanför den. Rätt svar är därför <strong>A: \\(y'=x-y\\)</strong>.</p>",
    "id": "4.37"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "C",
    "typ": "bestämma lösningskurva ur riktningsfält och allmän lösning",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Riktningsfält för differentialekvationen y prim lika med x minus y med en lösningskurva\">\n<rect width=\"430\" height=\"300\" fill=\"white\"/>\n<line x1=\"79.0\" y1=\"35\" x2=\"79.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"233.0\" x2=\"395\" y2=\"233.0\" stroke=\"#e1e1e1\"/><text x=\"74.0\" y=\"162.0\" font-size=\"11\">-2</text><text x=\"222.0\" y=\"237.0\" font-size=\"11\">-2</text><line x1=\"147.0\" y1=\"35\" x2=\"147.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"189.0\" x2=\"395\" y2=\"189.0\" stroke=\"#e1e1e1\"/><text x=\"142.0\" y=\"162.0\" font-size=\"11\">-1</text><text x=\"222.0\" y=\"193.0\" font-size=\"11\">-1</text><line x1=\"215.0\" y1=\"35\" x2=\"215.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"145.0\" x2=\"395\" y2=\"145.0\" stroke=\"#e1e1e1\"/><line x1=\"283.0\" y1=\"35\" x2=\"283.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"101.0\" x2=\"395\" y2=\"101.0\" stroke=\"#e1e1e1\"/><text x=\"278.0\" y=\"162.0\" font-size=\"11\">1</text><text x=\"222.0\" y=\"105.0\" font-size=\"11\">1</text><line x1=\"351.0\" y1=\"35\" x2=\"351.0\" y2=\"265\" stroke=\"#e1e1e1\"/><line x1=\"35\" y1=\"57.0\" x2=\"395\" y2=\"57.0\" stroke=\"#e1e1e1\"/><text x=\"346.0\" y=\"162.0\" font-size=\"11\">2</text><text x=\"222.0\" y=\"61.0\" font-size=\"11\">2</text>\n<line x1=\"35\" y1=\"145.0\" x2=\"400\" y2=\"145.0\" stroke=\"#222\" stroke-width=\"1.8\"/>\n<line x1=\"215.0\" y1=\"270\" x2=\"215.0\" y2=\"25\" stroke=\"#222\" stroke-width=\"1.8\"/>\n<line x1=\"67.0\" y1=\"233.0\" x2=\"91.0\" y2=\"233.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"70.5\" y1=\"180.5\" x2=\"87.5\" y2=\"197.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"73.6\" y1=\"134.3\" x2=\"84.4\" y2=\"155.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"75.2\" y1=\"89.6\" x2=\"82.8\" y2=\"112.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"76.1\" y1=\"45.4\" x2=\"81.9\" y2=\"68.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"138.5\" y1=\"241.5\" x2=\"155.5\" y2=\"224.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"135.0\" y1=\"189.0\" x2=\"159.0\" y2=\"189.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"138.5\" y1=\"136.5\" x2=\"155.5\" y2=\"153.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"141.6\" y1=\"90.3\" x2=\"152.4\" y2=\"111.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"143.2\" y1=\"45.6\" x2=\"150.8\" y2=\"68.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"209.6\" y1=\"243.7\" x2=\"220.4\" y2=\"222.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"206.5\" y1=\"197.5\" x2=\"223.5\" y2=\"180.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"203.0\" y1=\"145.0\" x2=\"227.0\" y2=\"145.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"206.5\" y1=\"92.5\" x2=\"223.5\" y2=\"109.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"209.6\" y1=\"46.3\" x2=\"220.4\" y2=\"67.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"279.2\" y1=\"244.4\" x2=\"286.8\" y2=\"221.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"277.6\" y1=\"199.7\" x2=\"288.4\" y2=\"178.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"274.5\" y1=\"153.5\" x2=\"291.5\" y2=\"136.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"271.0\" y1=\"101.0\" x2=\"295.0\" y2=\"101.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"274.5\" y1=\"48.5\" x2=\"291.5\" y2=\"65.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"348.1\" y1=\"244.6\" x2=\"353.9\" y2=\"221.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"347.2\" y1=\"200.4\" x2=\"354.8\" y2=\"177.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"345.6\" y1=\"155.7\" x2=\"356.4\" y2=\"134.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"342.5\" y1=\"109.5\" x2=\"359.5\" y2=\"92.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"339.0\" y1=\"57.0\" x2=\"363.0\" y2=\"57.0\" stroke=\"#666\" stroke-width=\"1.7\"/>\n<path d=\"M 163.8,35.2 L 165.6,39.0 L 167.4,42.6 L 169.2,46.1 L 171.0,49.4 L 172.8,52.7 L 174.7,55.8 L 176.5,58.8 L 178.3,61.8 L 180.1,64.6 L 181.9,67.2 L 183.7,69.8 L 185.5,72.3 L 187.3,74.7 L 189.2,77.0 L 191.0,79.3 L 192.8,81.4 L 194.6,83.4 L 196.4,85.4 L 198.2,87.2 L 200.0,89.0 L 201.9,90.7 L 203.7,92.4 L 205.5,93.9 L 207.3,95.4 L 209.1,96.8 L 210.9,98.2 L 212.7,99.5 L 214.5,100.7 L 216.4,101.9 L 218.2,103.0 L 220.0,104.0 L 221.8,105.0 L 223.6,105.9 L 225.4,106.8 L 227.2,107.6 L 229.1,108.3 L 230.9,109.0 L 232.7,109.7 L 234.5,110.3 L 236.3,110.9 L 238.1,111.4 L 239.9,111.9 L 241.7,112.3 L 243.6,112.7 L 245.4,113.0 L 247.2,113.4 L 249.0,113.6 L 250.8,113.9 L 252.6,114.1 L 254.4,114.2 L 256.3,114.3 L 258.1,114.4 L 259.9,114.5 L 261.7,114.5 L 263.5,114.5 L 265.3,114.5 L 267.1,114.4 L 268.9,114.3 L 270.8,114.2 L 272.6,114.0 L 274.4,113.8 L 276.2,113.6 L 278.0,113.4 L 279.8,113.1 L 281.6,112.9 L 283.5,112.5 L 285.3,112.2 L 287.1,111.9 L 288.9,111.5 L 290.7,111.1 L 292.5,110.7 L 294.3,110.3 L 296.1,109.8 L 298.0,109.3 L 299.8,108.9 L 301.6,108.3 L 303.4,107.8 L 305.2,107.3 L 307.0,106.7 L 308.8,106.1 L 310.7,105.6 L 312.5,104.9 L 314.3,104.3 L 316.1,103.7 L 317.9,103.0 L 319.7,102.4 L 321.5,101.7 L 323.3,101.0 L 325.2,100.3 L 327.0,99.6 L 328.8,98.9 L 330.6,98.1 L 332.4,97.4 L 334.2,96.6 L 336.0,95.8 L 337.9,95.1 L 339.7,94.3 L 341.5,93.5 L 343.3,92.6 L 345.1,91.8 L 346.9,91.0 L 348.7,90.2 L 350.5,89.3 L 352.4,88.4 L 354.2,87.6 L 356.0,86.7 L 357.8,85.8 L 359.6,84.9 L 361.4,84.0 L 363.2,83.1 L 365.1,82.2 L 366.9,81.3 L 368.7,80.4 L 370.5,79.4 L 372.3,78.5 L 374.1,77.6 L 375.9,76.6 L 377.7,75.7 L 379.6,74.7 L 381.4,73.7 L 383.2,72.8 L 385.0,71.8\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.8\"/><circle cx=\"215.0\" cy=\"101.0\" r=\"4\" fill=\"#222\"/><text x=\"223.0\" y=\"94.0\" font-size=\"13\">(0, 1)</text>\n<text x=\"400\" y=\"139.0\" font-size=\"13\">x</text><text x=\"222.0\" y=\"28\" font-size=\"13\">y</text>\n</svg></span><p>Riktningsfältet till \\(y'=x-y\\) visas tillsammans med en lösningskurva som går genom punkten \\((0,1)\\).</p><p>Den allmänna lösningen är \\(y=x-1+Ce^{-x}\\). Bestäm den ritade lösningskurvans ekvation.</p>",
    "s": "<p><strong>Metod:</strong> Lutningen i en punkt fås genom att sätta punktens koordinater i differentialekvationens högerled.</p><p>Punkten \\((0,1)\\) ger</p><p>\\[1=0-1+C e^0=-1+C,\\]</p><p>så \\(C=2\\). Lösningskurvan är därför</p><p><strong>\\(y=x-1+2e^{-x}\\)</strong>.</p>",
    "id": "4.38"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "E",
    "typ": "avläsa lutning i riktningsfält",
    "poang": "2/0/0",
    "id": "4.57",
    "t": "<p>För differentialekvationen \\(y'=x+y\\), vilken lutning har lösningskurvan i punkten \\((1,2)\\)?</p>",
    "s": "<p>Lutningen i en punkt fås genom att sätta in punktens koordinater i högerledet:</p><p>\\[y'=x+y=1+2=3.\\]</p><p><strong>Lösningskurvans lutning är 3.</strong></p>"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "C",
    "typ": "tolka stabil jämvikt ur riktningsfält",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Riktningsfält\">\n<rect width=\"430\" height=\"290\" fill=\"white\"/><line x1=\"35\" y1=\"203.0\" x2=\"400\" y2=\"203.0\" stroke=\"#222\"/><line x1=\"113.0\" y1=\"260\" x2=\"113.0\" y2=\"25\" stroke=\"#222\"/><line x1=\"107.6\" y1=\"213.7\" x2=\"118.4\" y2=\"192.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"104.5\" y1=\"169.5\" x2=\"121.5\" y2=\"152.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"101.0\" y1=\"119.0\" x2=\"125.0\" y2=\"119.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"104.5\" y1=\"68.5\" x2=\"121.5\" y2=\"85.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"175.6\" y1=\"213.7\" x2=\"186.4\" y2=\"192.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"172.5\" y1=\"169.5\" x2=\"189.5\" y2=\"152.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"169.0\" y1=\"119.0\" x2=\"193.0\" y2=\"119.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"172.5\" y1=\"68.5\" x2=\"189.5\" y2=\"85.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"243.6\" y1=\"213.7\" x2=\"254.4\" y2=\"192.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"240.5\" y1=\"169.5\" x2=\"257.5\" y2=\"152.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"237.0\" y1=\"119.0\" x2=\"261.0\" y2=\"119.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"240.5\" y1=\"68.5\" x2=\"257.5\" y2=\"85.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"311.6\" y1=\"213.7\" x2=\"322.4\" y2=\"192.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"308.5\" y1=\"169.5\" x2=\"325.5\" y2=\"152.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"305.0\" y1=\"119.0\" x2=\"329.0\" y2=\"119.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"308.5\" y1=\"68.5\" x2=\"325.5\" y2=\"85.5\" stroke=\"#666\" stroke-width=\"1.7\"/>\n<text x=\"398\" y=\"197.0\" font-size=\"13\">x</text><text x=\"121.0\" y=\"28\" font-size=\"13\">y</text>\n</svg></span><p>Riktningsfältet motsvarar \\(y'=2-y\\). Beskriv vad som händer med lösningar som startar med \\(y(0)\\gt2\\) respektive \\(y(0)\\lt2\\).</p>",
    "s": "<p>Om \\(y\\gt2\\) är \\(2-y\\lt0\\), så lösningen minskar. Om \\(y\\lt2\\) är \\(2-y\\gt0\\), så lösningen ökar. Båda typerna rör sig mot <strong>jämvikten \\(y=2\\)</strong>, som därför är stabil.</p>",
    "id": "4.84"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "E",
    "typ": "identifiera jämviktslinje",
    "poang": "2/0/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Riktningsfält\">\n<rect width=\"430\" height=\"290\" fill=\"white\"/><line x1=\"35\" y1=\"203.0\" x2=\"400\" y2=\"203.0\" stroke=\"#222\"/><line x1=\"113.0\" y1=\"260\" x2=\"113.0\" y2=\"25\" stroke=\"#222\"/><line x1=\"101.0\" y1=\"203.0\" x2=\"125.0\" y2=\"203.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"107.6\" y1=\"171.7\" x2=\"118.4\" y2=\"150.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"107.6\" y1=\"129.7\" x2=\"118.4\" y2=\"108.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"101.0\" y1=\"77.0\" x2=\"125.0\" y2=\"77.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"169.0\" y1=\"203.0\" x2=\"193.0\" y2=\"203.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"175.6\" y1=\"171.7\" x2=\"186.4\" y2=\"150.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"175.6\" y1=\"129.7\" x2=\"186.4\" y2=\"108.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"169.0\" y1=\"77.0\" x2=\"193.0\" y2=\"77.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"237.0\" y1=\"203.0\" x2=\"261.0\" y2=\"203.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"243.6\" y1=\"171.7\" x2=\"254.4\" y2=\"150.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"243.6\" y1=\"129.7\" x2=\"254.4\" y2=\"108.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"237.0\" y1=\"77.0\" x2=\"261.0\" y2=\"77.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"305.0\" y1=\"203.0\" x2=\"329.0\" y2=\"203.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"311.6\" y1=\"171.7\" x2=\"322.4\" y2=\"150.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"311.6\" y1=\"129.7\" x2=\"322.4\" y2=\"108.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"305.0\" y1=\"77.0\" x2=\"329.0\" y2=\"77.0\" stroke=\"#666\" stroke-width=\"1.7\"/>\n<text x=\"398\" y=\"197.0\" font-size=\"13\">x</text><text x=\"121.0\" y=\"28\" font-size=\"13\">y</text>\n</svg></span><p>Riktningsfältet kommer från \\(y'=y(3-y)\\). Vilka horisontella jämviktslösningar finns?</p>",
    "s": "<p>Jämvikt fås när högerledet är 0:</p><p>\\[y(3-y)=0\\Rightarrow y=0\\text{ eller }y=3.\\]</p><p><strong>Jämviktslösningarna är \\(y=0\\) och \\(y=3\\).</strong></p>",
    "id": "4.109"
  },
  {
    "kap": 4,
    "omr": "riktningsfalt",
    "niva": "C",
    "typ": "skissa kvalitativ lösning",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Riktningsfält\">\n<rect width=\"430\" height=\"290\" fill=\"white\"/><line x1=\"35\" y1=\"203.0\" x2=\"400\" y2=\"203.0\" stroke=\"#222\"/><line x1=\"113.0\" y1=\"260\" x2=\"113.0\" y2=\"25\" stroke=\"#222\"/><line x1=\"101.0\" y1=\"203.0\" x2=\"125.0\" y2=\"203.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"104.5\" y1=\"152.5\" x2=\"121.5\" y2=\"169.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"107.6\" y1=\"108.3\" x2=\"118.4\" y2=\"129.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"109.2\" y1=\"65.6\" x2=\"116.8\" y2=\"88.4\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"172.5\" y1=\"211.5\" x2=\"189.5\" y2=\"194.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"169.0\" y1=\"161.0\" x2=\"193.0\" y2=\"161.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"172.5\" y1=\"110.5\" x2=\"189.5\" y2=\"127.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"175.6\" y1=\"66.3\" x2=\"186.4\" y2=\"87.7\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"243.6\" y1=\"213.7\" x2=\"254.4\" y2=\"192.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"240.5\" y1=\"169.5\" x2=\"257.5\" y2=\"152.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"237.0\" y1=\"119.0\" x2=\"261.0\" y2=\"119.0\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"240.5\" y1=\"68.5\" x2=\"257.5\" y2=\"85.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"313.2\" y1=\"214.4\" x2=\"320.8\" y2=\"191.6\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"311.6\" y1=\"171.7\" x2=\"322.4\" y2=\"150.3\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"308.5\" y1=\"127.5\" x2=\"325.5\" y2=\"110.5\" stroke=\"#666\" stroke-width=\"1.7\"/><line x1=\"305.0\" y1=\"77.0\" x2=\"329.0\" y2=\"77.0\" stroke=\"#666\" stroke-width=\"1.7\"/>\n<text x=\"398\" y=\"197.0\" font-size=\"13\">x</text><text x=\"121.0\" y=\"28\" font-size=\"13\">y</text>\n</svg></span><p>Riktningsfältet hör till \\(y'=x-y\\). En lösning startar i \\((0,3)\\). Beskriv först om den stiger eller sjunker och vad som händer när den närmar sig linjen \\(y=x\\).</p>",
    "s": "<p>I startpunkten är \\(y'=0-3=-3\\), så lösningen sjunker. På linjen \\(y=x\\) är lutningen 0. Ovanför linjen gäller \\(x-y\\lt0\\), under den \\(x-y\\gt0\\). Lösningen böjer därför av när den närmar sig noll-lutningslinjen och följer sedan fältets riktning.</p>",
    "id": "4.110"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "C",
    "typ": "inhomogen första ordningens differentialekvation med exponentialterm",
    "poang": "1/2/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y'-2y=e^{3x}\\).</p>",
    "s": "<p><strong>Metod:</strong> Bygg lösningen som homogen lösning plus en partikulärlösning.</p><p>Homogen lösning: \\(y_h=Ce^{2x}\\). Sök en partikulär lösning \\(y_p=Ae^{3x}\\). Då \\(3Ae^{3x}-2Ae^{3x}=e^{3x}\\), så \\(A=1\\). <strong>\\(y=Ce^{2x}+e^{3x}\\)</strong>.</p>",
    "id": "4.21"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "första ordningens inhomogen differentialekvation",
    "poang": "3/0/0",
    "id": "4.51",
    "t": "<p>Bestäm den allmänna lösningen till</p><p>\\[y'+2y=6.\\]</p>",
    "s": "<p>Vi löser först den homogena ekvationen \\(y'+2y=0\\), som ger</p><p>\\[y_h=Ce^{-2x}.\\]</p><p>Därefter söker vi en konstant partikulärlösning \\(y_p=A\\). Insättning ger</p><p>\\[0+2A=6\\Rightarrow A=3.\\]</p><p>Den allmänna lösningen blir då</p><p><strong>\\(y=Ce^{-2x}+3\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "A",
    "typ": "temperaturmodell med Newtons avsvalningslag",
    "poang": "0/1/3",
    "id": "4.52",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 470 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Kopp kaffe som svalnar i ett rum\">\n<rect width=\"470\" height=\"260\" fill=\"white\"/>\n<ellipse cx=\"190\" cy=\"95\" rx=\"75\" ry=\"18\" fill=\"#ddd\" stroke=\"#444\" stroke-width=\"2\"/>\n<path d=\"M115 95 L125 190 Q130 220 190 220 Q250 220 255 190 L265 95\" fill=\"#f8f8f8\" stroke=\"#444\" stroke-width=\"2\"/>\n<path d=\"M265 110 Q320 105 320 145 Q320 185 270 175\" fill=\"none\" stroke=\"#444\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<path d=\"M160 60 Q152 40 165 25 M190 55 Q182 35 196 20 M220 60 Q214 43 228 27\" fill=\"none\" stroke=\"#888\" stroke-width=\"3\"/>\n<text x=\"332\" y=\"95\" font-size=\"16\">Rum: 20 °C</text>\n<text x=\"330\" y=\"125\" font-size=\"16\">Kaffe: T(t)</text>\n<text x=\"330\" y=\"155\" font-size=\"16\">T(0) = 80 °C</text>\n</svg></span><p>En kopp kaffe har temperaturen 80 °C när den ställs i ett rum som håller 20 °C. Temperaturen \\(T(t)\\) i kaffet följer modellen</p><p>\\[T'(t)=k(20-T(t)),\\qquad k=0,10.\\]</p><ol type=\"a\"><li>Bestäm \\(T(t)\\).</li><li>När har kaffet svalnat till 50 °C?</li></ol>",
    "s": "<p>Differentialekvationen kan skrivas</p><p>\\[T'+0,10T=2.\\]</p><p>Den homogena lösningen är \\(T_h=Ce^{-0,10t}\\). En konstant partikulärlösning fås av \\(T_p=A\\):</p><p>\\[0,10A=2\\Rightarrow A=20.\\]</p><p>Alltså</p><p>\\[T(t)=Ce^{-0,10t}+20.\\]</p><p>Begynnelsevillkoret \\(T(0)=80\\) ger \\(C=60\\), så</p><p>\\[T(t)=60e^{-0,10t}+20.\\]</p><p>För \\(T=50\\) får vi</p><p>\\[60e^{-0,10t}+20=50\\Rightarrow 60e^{-0,10t}=30\\Rightarrow e^{-0,10t}=\\frac{1}{2}.\\]</p><p>\\[-0,10t=\\ln\\left(\\frac{1}{2}\right)=-\\ln 2\\Rightarrow t=10\\ln 2\\approx 6,93.\\]</p><p><strong>Kaffet når 50 °C efter ungefär 6,9 minuter.</strong></p>"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "konstant högerled",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y'+3y=12\\).</p>",
    "s": "<p>Homogent: \\(y_h=Ce^{-3x}\\). Konstant partikulärlösning \\(y_p=A\\) ger \\(3A=12\\Rightarrow A=4\\). Alltså</p><p><strong>\\(y=Ce^{-3x}+4\\)</strong>.</p>",
    "id": "4.70"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "begynnelsevillkor inhomogen",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y'+2y=10\\), \\(y(0)=1\\).</p>",
    "s": "<p>Allmän lösning: \\(y=Ce^{-2x}+5\\). Begynnelsevillkoret ger \\(1=C+5\\Rightarrow C=-4\\). Därför</p><p><strong>\\(y=5-4e^{-2x}\\)</strong>.</p>",
    "id": "4.71"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "C",
    "typ": "bestäm ekvation från lösningsfamilj",
    "poang": "0/2/0",
    "t": "<p>En differentialekvation har allmän lösning \\(y=Ce^{-5x}+3\\). Ställ upp en differentialekvation av formen \\(y'=ay+b\\) som har denna lösningsfamilj.</p>",
    "s": "<p>Derivera:</p><p>\\[y'=-5Ce^{-5x}.\\]</p><p>Eftersom \\(Ce^{-5x}=y-3\\) får vi</p><p>\\[y'=-5(y-3)=-5y+15.\\]</p><p><strong>\\(y'=-5y+15\\)</strong>.</p>",
    "id": "4.72"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "lös med jämviktsvärde",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y'=8-2y\\).</p>",
    "s": "<p>Skriv \\(y'+2y=8\\). Homogen lösning \\(Ce^{-2x}\\), jämviktsvärde \\(y=4\\). Alltså</p><p><strong>\\(y=4+Ce^{-2x}\\)</strong>.</p>",
    "id": "4.94"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "E",
    "typ": "initialvärde mot jämvikt",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y'=6-3y\\), \\(y(0)=5\\).</p>",
    "s": "<p>Allmän lösning \\(y=2+Ce^{-3x}\\). Villkoret \\(5=2+C\\) ger \\(C=3\\). Alltså</p><p><strong>\\(y=2+3e^{-3x}\\)</strong>.</p>",
    "id": "4.95"
  },
  {
    "kap": 4,
    "omr": "forsta_ordningen_inhomogena",
    "niva": "C",
    "typ": "bestäm tid till nivå",
    "poang": "0/2/0",
    "t": "<p>En temperaturmodell är \\(T(t)=20+60e^{-0,15t}\\). När är temperaturen 35 °C?</p>",
    "s": "<p>\\[35=20+60e^{-0,15t}\\Rightarrow e^{-0,15t}=\\frac14.\\]</p><p>\\[t=\\frac{\\ln4}{0,15}\\approx9,24.\\]</p><p><strong>Efter cirka 9,2 tidsenheter.</strong></p>",
    "id": "4.96"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "C",
    "typ": "begynnelsevillkor vid dubbelrot",
    "poang": "1/2/0",
    "t": "<p>Lös \\(y''-6y'+9y=0\\) med \\(y(0)=2\\) och \\(y'(0)=1\\).</p>",
    "s": "<p><strong>Metod:</strong> Vid dubbelrot behövs både \\(e^{rx}\\) och \\(xe^{rx}\\) för två oberoende lösningar.</p><p>Dubbelroten är \\(r=3\\), så \\(y=(A+Bx)e^{3x}\\). \\(y(0)=A=2\\). Vidare \\(y'=e^{3x}[B+3(A+Bx)]\\), så \\(y'(0)=B+3A=1\\), vilket ger \\(B=-5\\). <strong>\\(y=(2-5x)e^{3x}\\)</strong>.</p>",
    "id": "4.22"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "C",
    "typ": "tolka lösningsform vid dubbelrot",
    "poang": "0/2/0",
    "t": "<p>En homogen differentialekvation av andra ordningen har den allmänna lösningen</p><p>\\[y=(C_1+C_2x)e^{-3x}.\\]</p><ol type=\"a\"><li>Bestäm den karakteristiska ekvationen.</li><li>Skriv en differentialekvation som har denna allmänna lösning.</li></ol>",
    "s": "<p>Faktorn \\(e^{-3x}\\) tillsammans med \\(x e^{-3x}\\) visar att \\(r=-3\\) är en dubbelrot.</p><p>Karakteristiska ekvationen är</p><p>\\[(r+3)^2=r^2+6r+9=0.\\]</p><p>En motsvarande differentialekvation är därför <strong>\\(y''+6y'+9y=0\\)</strong>.</p>",
    "id": "4.43"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "E",
    "typ": "dubbelrot",
    "poang": "2/0/0",
    "id": "4.54",
    "t": "<p>Lös differentialekvationen</p><p>\\[y''-4y'+4y=0.\\]</p>",
    "s": "<p>Karakteristiska ekvationen är</p><p>\\[r^2-4r+4=0=(r-2)^2.\\]</p><p>Roten \\(r=2\\) är en dubbelrot. Då får lösningen formen</p><p><strong>\\(y=(C_1+C_2x)e^{2x}\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "E",
    "typ": "homogen med dubbelrot",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+6y'+9y=0\\).</p>",
    "s": "<p>\\[(r+3)^2=0\\] ger dubbelroten \\(r=-3\\). Därför</p><p><strong>\\(y=(C_1+C_2x)e^{-3x}\\)</strong>.</p>",
    "id": "4.75"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "C",
    "typ": "bestäm differentialekvation från lösning",
    "poang": "0/2/0",
    "t": "<p>Ställ upp en homogen differentialekvation med konstantkoefficienter som har lösningsfamiljen \\(y=(C_1+C_2x)e^{4x}\\).</p>",
    "s": "<p>Faktorn \\(x e^{4x}\\) visar att \\(r=4\\) är dubbelrot. Karakteristiska polynomet är</p><p>\\[(r-4)^2=r^2-8r+16.\\]</p><p>Alltså exempelvis <strong>\\(y''-8y'+16y=0\\)</strong>.</p>",
    "id": "4.76"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "E",
    "typ": "dubbelrot negativ",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+8y'+16y=0\\).</p>",
    "s": "<p>\\[(r+4)^2=0\\]. Därför</p><p><strong>\\(y=(C_1+C_2x)e^{-4x}\\)</strong>.</p>",
    "id": "4.99"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_dubbelrot",
    "niva": "C",
    "typ": "begynnelsevillkor dubbelrot",
    "poang": "0/2/0",
    "t": "<p>Lös \\(y''-2y'+y=0\\), \\(y(0)=1\\), \\(y'(0)=0\\).</p>",
    "s": "<p>Dubbelroten är \\(r=1\\), så \\(y=(C_1+C_2x)e^x\\). \\(y(0)=1\\Rightarrow C_1=1\\). Derivatan är \\((C_1+C_2+C_2x)e^x\\), så \\(y'(0)=C_1+C_2=0\\Rightarrow C_2=-1\\).</p><p><strong>\\(y=(1-x)e^x\\)</strong>.</p>",
    "id": "4.100"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "A",
    "typ": "begynnelsevillkor med komplexa rötter",
    "poang": "0/2/2",
    "t": "<p>Lös \\(y''+2y'+10y=0\\) med \\(y(0)=3\\) och \\(y'(0)=0\\).</p>",
    "s": "<p><strong>Metod:</strong> Komplexa rötter \\(a\\pm bi\\) ger lösningar av formen \\(e^{ax}(C\\cos bx+D\\sin bx)\\).</p><p>Rötterna är \\(-1\\pm3i\\), så \\(y=e^{-x}(A\\cos3x+B\\sin3x)\\). Av \\(y(0)=3\\) fås \\(A=3\\). Derivatan vid 0 är \\(-A+3B=0\\), så \\(B=1\\). <strong>\\(y=e^{-x}(3\\cos3x+\\sin3x)\\)</strong>.</p>",
    "id": "4.23"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "E",
    "typ": "komplexa rötter",
    "poang": "2/0/0",
    "id": "4.55",
    "t": "<p>Lös differentialekvationen</p><p>\\[y''+9y=0.\\]</p>",
    "s": "<p>Karakteristiska ekvationen är \\(r^2+9=0\\), vilket ger rötterna \\(r=\\pm 3i\\).</p><p>Vid rötter av typen \\(\\alpha\\pm \\beta i\\) blir lösningen</p><p>\\[y=e^{\\alpha x}(C_1\\cos \\beta x + C_2\\sin \\beta x).\\]</p><p>Här är \\(\\alpha=0\\) och \\(\\beta=3\\), alltså</p><p><strong>\\(y=C_1\\cos 3x+C_2\\sin 3x\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "E",
    "typ": "komplexa rötter med dämpning",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+2y'+5y=0\\).</p>",
    "s": "<p>\\[r^2+2r+5=0\\Rightarrow r=-1\\pm2i.\\]</p><p>Därför</p><p><strong>\\(y=e^{-x}(C_1\\cos2x+C_2\\sin2x)\\)</strong>.</p>",
    "id": "4.77"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "C",
    "typ": "bestäm ekvation från sinuslösning",
    "poang": "0/2/0",
    "t": "<p>Ställ upp en homogen differentialekvation med konstantkoefficienter vars allmänna lösning är \\(y=e^{2x}(C_1\\cos3x+C_2\\sin3x)\\).</p>",
    "s": "<p>Rötterna är \\(2\\pm3i\\). Det karakteristiska polynomet är</p><p>\\[(r-(2+3i))(r-(2-3i))=(r-2)^2+9=r^2-4r+13.\\]</p><p>Alltså <strong>\\(y''-4y'+13y=0\\)</strong>.</p>",
    "id": "4.78"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "E",
    "typ": "ren harmonisk svängning",
    "poang": "2/0/0",
    "t": "<p>Lös \\(y''+16y=0\\).</p>",
    "s": "<p>Rötterna är \\(r=\\pm4i\\). Därför</p><p><strong>\\(y=C_1\\cos4x+C_2\\sin4x\\)</strong>.</p>",
    "id": "4.101"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_komplexa",
    "niva": "C",
    "typ": "begynnelsevillkor dämpad svängning",
    "poang": "0/2/0",
    "t": "<p>Lös \\(y''+4y'+13y=0\\), \\(y(0)=2\\), \\(y'(0)=0\\).</p>",
    "s": "<p>Rötterna är \\(-2\\pm3i\\). Alltså</p><p>\\[y=e^{-2x}(C_1\\cos3x+C_2\\sin3x).\\]</p><p>\\(C_1=2\\). Derivering vid 0 ger \\(-2C_1+3C_2=0\\Rightarrow C_2=4/3\\).</p>",
    "id": "4.102"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "andra ordningens inhomogen med konstant högerled",
    "poang": "2/0/0",
    "t": "<p>Bestäm den allmänna lösningen till</p><p>\\[y''-3y'+2y=6.\\]</p>",
    "s": "<p>Den homogena ekvationen har karakteristiska ekvationen</p><p>\\[r^2-3r+2=0\\quad\\Rightarrow\\quad r=1,2.\\]</p><p>Alltså \\(y_h=C_1e^x+C_2e^{2x}\\).</p><p>Eftersom högerledet är konstant söker vi en partikulär lösning \\(y_p=A\\). Insättning ger \\(2A=6\\), alltså \\(A=3\\).</p><p><strong>\\(y=C_1e^x+C_2e^{2x}+3\\)</strong>.</p>",
    "id": "4.27"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "andra ordningens inhomogen med linjärt polynom",
    "poang": "3/0/0",
    "t": "<p>Bestäm den allmänna lösningen till</p><p>\\[y''+y'-2y=4x.\\]</p>",
    "s": "<p>Homogena delen: \\(r^2+r-2=(r-1)(r+2)=0\\), så</p><p>\\[y_h=C_1e^x+C_2e^{-2x}.\\]</p><p>Sök \\(y_p=ax+b\\). Då \\(y_p'=a\\) och \\(y_p''=0\\). Insättning ger</p><p>\\[a-2(ax+b)=4x.\\]</p><p>Jämför koefficienter: \\(-2a=4\\Rightarrow a=-2\\) och \\(a-2b=0\\Rightarrow b=-1\\).</p><p><strong>\\(y=C_1e^x+C_2e^{-2x}-2x-1\\)</strong>.</p>",
    "id": "4.28"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "andra ordningens inhomogen med exponentialterm",
    "poang": "1/2/0",
    "t": "<p>Bestäm den allmänna lösningen till</p><p>\\[y''-5y'+6y=3e^x.\\]</p>",
    "s": "<p>Karakteristiska ekvationen \\(r^2-5r+6=0\\) har rötterna 2 och 3:</p><p>\\[y_h=C_1e^{2x}+C_2e^{3x}.\\]</p><p>Eftersom \\(e^x\\) inte ingår i den homogena lösningen söker vi \\(y_p=Ae^x\\). Då</p><p>\\[Ae^x-5Ae^x+6Ae^x=2Ae^x=3e^x,\\]</p><p>så \\(A=3/2\\).</p><p><strong>\\(y=C_1e^{2x}+C_2e^{3x}+\\frac32e^x\\)</strong>.</p>",
    "id": "4.29"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "resonans med exponentialterm",
    "poang": "0/3/0",
    "t": "<p>Bestäm den allmänna lösningen till</p><p>\\[y''-3y'+2y=e^x.\\]</p>",
    "s": "<p>Den homogena ekvationen har rötterna 1 och 2, så \\(y_h=C_1e^x+C_2e^{2x}\\).</p><p>En vanlig ansats \\(Ae^x\\) fungerar inte eftersom \\(e^x\\) redan är en homogen lösning. Vi multiplicerar därför med \\(x\\) och söker</p><p>\\[y_p=Axe^x.\\]</p><p>Då \\(y_p'=A(1+x)e^x\\) och \\(y_p''=A(x+2)e^x\\). Insättning ger</p><p>\\[A[(x+2)-3(x+1)+2x]e^x=-Ae^x=e^x,\\]</p><p>så \\(A=-1\\).</p><p><strong>\\(y=C_1e^x+C_2e^{2x}-xe^x\\)</strong>.</p>",
    "id": "4.30"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "andra ordningens inhomogen med trigonometriskt högerled",
    "poang": "0/2/0",
    "t": "<p>Bestäm den allmänna lösningen till</p><p>\\[y''+4y=8\\cos x.\\]</p>",
    "s": "<p>Homogena lösningen är</p><p>\\[y_h=C_1\\cos2x+C_2\\sin2x.\\]</p><p>Sök \\(y_p=A\\cos x+B\\sin x\\). Då är \\(y_p''=-A\\cos x-B\\sin x\\), så</p><p>\\[y_p''+4y_p=3A\\cos x+3B\\sin x.\\]</p><p>Jämförelse med \\(8\\cos x\\) ger \\(A=8/3\\), \\(B=0\\).</p><p><strong>\\(y=C_1\\cos2x+C_2\\sin2x+\\frac83\\cos x\\)</strong>.</p>",
    "id": "4.31"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "välja ansats vid dubbel resonans",
    "poang": "0/2/0",
    "t": "<p>För differentialekvationen</p><p>\\[y''-4y'+4y=e^{2x}\\]</p><p>förklarar en elev att ansatsen \\(y_p=Ae^{2x}\\) inte fungerar.</p><ol type=\"a\"><li>Förklara varför.</li><li>Ange en lämplig ansats för en partikulärlösning.</li></ol>",
    "s": "<p>Den homogena karakteristiska ekvationen är \\((r-2)^2=0\\). Därför innehåller den homogena lösningen både \\(e^{2x}\\) och \\(xe^{2x}\\).</p><p>Ansatsen \\(Ae^{2x}\\) ligger alltså redan i den homogena lösningsrymden. Eftersom roten 2 är en <strong>dubbelrot</strong> måste ansatsen multipliceras med \\(x^2\\).</p><p>En lämplig ansats är <strong>\\(y_p=Ax^2e^{2x}\\)</strong>.</p>",
    "id": "4.32"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "A",
    "typ": "inhomogent begynnelsevärdesproblem med polynom",
    "poang": "0/1/2",
    "t": "<p>Lös begynnelsevärdesproblemet</p><p>\\[y''-y=2x+1,\\qquad y(0)=0,\\qquad y'(0)=0.\\]</p>",
    "s": "<p>Homogena lösningen är \\(y_h=C_1e^{-x}+C_2e^x\\).</p><p>Sök \\(y_p=ax+b\\). Då \\(0-(ax+b)=2x+1\\), vilket ger \\(a=-2\\), \\(b=-1\\).</p><p>Alltså</p><p>\\[y=C_1e^{-x}+C_2e^x-2x-1.\\]</p><p>Villkoret \\(y(0)=0\\) ger \\(C_1+C_2=1\\). Derivatan är</p><p>\\[y'=-C_1e^{-x}+C_2e^x-2,\\]</p><p>och \\(y'(0)=0\\) ger \\(-C_1+C_2=2\\). Lösning av systemet ger \\(C_1=-1/2\\), \\(C_2=3/2\\).</p><p><strong>\\(y=-\\frac{1}{2}e^{-x}+\\frac32e^x-2x-1\\)</strong>.</p>",
    "id": "4.33"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "A",
    "typ": "resonans vid periodisk kraft och begynnelsevillkor",
    "poang": "0/1/3",
    "t": "<p>Lös</p><p>\\[y''+4y=6\\cos(2x),\\qquad y(0)=0,\\qquad y'(0)=0.\\]</p><p>Beskriv också vad som är speciellt med lösningens amplitud.</p>",
    "s": "<p>Homogena lösningen är \\(y_h=C_1\\cos2x+C_2\\sin2x\\). Eftersom högerledets \\(\\cos2x\\) redan ingår i den homogena lösningen uppstår resonans.</p><p>En lämplig ansats är \\(y_p=Ax\\sin2x\\). Insättning ger \\(4A\\cos2x=6\\cos2x\\), alltså \\(A=3/2\\).</p><p>Den allmänna lösningen är</p><p>\\[y=C_1\\cos2x+C_2\\sin2x+\\frac32x\\sin2x.\\]</p><p>Begynnelsevillkoren ger \\(C_1=0\\) och \\(C_2=0\\). Alltså</p><p><strong>\\(y=\\frac32x\\sin2x\\)</strong>.</p><p>Faktorn \\(x\\) gör att svängningarnas omslutande amplitud växer linjärt. Lösningen är därför inte begränsad trots att den yttre kraften har konstant amplitud.</p>",
    "id": "4.34"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "bestämma högerled från partikulärlösning",
    "poang": "0/2/0",
    "t": "<p>En partikulärlösning till differentialekvationen</p><p>\\[y''-2y'+y=g(x)\\]</p><p>är \\(y_p=x^2\\). Bestäm \\(g(x)\\).</p>",
    "s": "<p><strong>Idé:</strong> Eftersom \\(y_p=x^2\\) ska vara en partikulärlösning måste vänsterledet, efter insättning av \\(y_p\\), bli exakt \\(g(x)\\).</p><p>\\[y_p'=2x,\\qquad y_p''=2.\\]</p><p>Sätt in:</p><p>\\[g(x)=y_p''-2y_p'+y_p=2-4x+x^2.\\]</p><p>Alltså <strong>\\(g(x)=x^2-4x+2\\)</strong>.</p>",
    "id": "4.35"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "konstant partikulärlösning",
    "poang": "2/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''+y'-2y=8\\).</p>",
    "s": "<p>Homogent: \\(r^2+r-2=(r-1)(r+2)\\), så \\(y_h=C_1e^x+C_2e^{-2x}\\). Sök \\(y_p=A\\): \\(-2A=8\\Rightarrow A=-4\\).</p><p><strong>\\(y=C_1e^x+C_2e^{-2x}-4\\)</strong>.</p>",
    "id": "4.79"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "polynom som högerled",
    "poang": "2/0/0",
    "t": "<p>Bestäm en partikulärlösning till \\(y''-y=6x\\).</p>",
    "s": "<p>Sök \\(y_p=ax+b\\). Då \\(y_p''=0\\), så</p><p>\\[-(ax+b)=6x.\\]</p><p>Jämförelse ger \\(a=-6\\), \\(b=0\\). En partikulärlösning är <strong>\\(y_p=-6x\\)</strong>.</p>",
    "id": "4.80"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "resonans med sinus",
    "poang": "0/2/0",
    "t": "<p>Bestäm lämplig ansats för en partikulärlösning till \\(y''+4y=\\sin2x\\). Motivera.</p>",
    "s": "<p>Den homogena lösningen innehåller \\(\\cos2x\\) och \\(\\sin2x\\). Ansatsen \\(A\\cos2x+B\\sin2x\\) skulle därför ligga i den homogena lösningen. Vid resonans multipliceras med \\(x\\):</p><p><strong>\\(y_p=x(A\\cos2x+B\\sin2x)\\)</strong>.</p>",
    "id": "4.81"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "exponential utan resonans",
    "poang": "2/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''-y=4e^{2x}\\).</p>",
    "s": "<p>Homogent: \\(y_h=C_1e^x+C_2e^{-x}\\). Sök \\(y_p=Ae^{2x}\\):</p><p>\\[4Ae^{2x}-Ae^{2x}=3Ae^{2x}=4e^{2x}\\Rightarrow A=4/3.\\]</p><p><strong>\\(y=C_1e^x+C_2e^{-x}+\\frac43e^{2x}\\)</strong>.</p>",
    "id": "4.103"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "cosinus utan resonans",
    "poang": "2/0/0",
    "t": "<p>Bestäm en partikulärlösning till \\(y''+9y=8\\cos2x\\).</p>",
    "s": "<p>Sök \\(y_p=A\\cos2x+B\\sin2x\\). Då \\(y_p''=-4A\\cos2x-4B\\sin2x\\). Vänsterled blir \\(5A\\cos2x+5B\\sin2x\\). Därför \\(A=8/5\\), \\(B=0\\).</p><p><strong>\\(y_p=\\frac85\\cos2x\\)</strong>.</p>",
    "id": "4.104"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "linjärt polynom partikulär",
    "poang": "0/2/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''+y=3x-2\\).</p>",
    "s": "<p>Homogent: \\(y_h=C_1\\cos x+C_2\\sin x\\). Sök \\(y_p=ax+b\\). Då \\(y_p''=0\\), så \\(ax+b=3x-2\\). Därför \\(a=3,b=-2\\).</p><p><strong>\\(y=C_1\\cos x+C_2\\sin x+3x-2\\)</strong>.</p>",
    "id": "4.105"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "C",
    "typ": "resonans exponential",
    "poang": "0/2/0",
    "t": "<p>Bestäm en partikulärlösning till \\(y''-4y'+4y=e^{2x}\\).</p>",
    "s": "<p>Den homogena ekvationen har dubbelroten \\(r=2\\), så både \\(e^{2x}\\) och \\(xe^{2x}\\) ingår i den homogena lösningen. Därför behövs ansatsen \\(y_p=Ax^2e^{2x}\\). Insättning ger \\(2Ae^{2x}=e^{2x}\\), så \\(A=1/2\\).</p><p><strong>\\(y_p=\\frac12x^2e^{2x}\\)</strong>.</p>",
    "id": "4.106"
  },
  {
    "kap": 4,
    "omr": "andra_ordningen_inhomogena",
    "niva": "E",
    "typ": "konstant högerled dubbelrot",
    "poang": "2/0/0",
    "t": "<p>Bestäm den allmänna lösningen till \\(y''-2y'+y=5\\).</p>",
    "s": "<p>Homogent: dubbelrot \\(r=1\\), så \\(y_h=(C_1+C_2x)e^x\\). Sök konstant \\(y_p=A\\): \\(A=5\\). Alltså</p><p><strong>\\(y=(C_1+C_2x)e^x+5\\)</strong>.</p>",
    "id": "4.119"
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
    "omr": "modellering_diffekv",
    "niva": "C",
    "typ": "blandningsproblem med figur",
    "poang": "0/3/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 470 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Blandningstank med in- och utflöde\">\n<rect width=\"470\" height=\"300\" fill=\"white\"/>\n<path d=\"M120 75 L120 240 Q120 260 140 260 L330 260 Q350 260 350 240 L350 75\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n<path d=\"M125 135 L345 135 L345 240 Q345 255 330 255 L140 255 Q125 255 125 240 Z\" fill=\"#999\" fill-opacity=\".18\"/>\n<line x1=\"35\" y1=\"70\" x2=\"175\" y2=\"70\" stroke=\"#222\" stroke-width=\"4\"/>\n<path d=\"M162 62 l14 8 -14 8\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.5\"/>\n<text x=\"35\" y=\"48\" font-size=\"15\">3,0 L/min</text>\n<text x=\"35\" y=\"103\" font-size=\"15\">0,40 g/L</text>\n<line x1=\"300\" y1=\"255\" x2=\"430\" y2=\"255\" stroke=\"#222\" stroke-width=\"4\"/>\n<path d=\"M416 247 l14 8 -14 8\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.5\"/>\n<text x=\"345\" y=\"235\" font-size=\"15\">3,0 L/min</text>\n<text x=\"182\" y=\"182\" font-size=\"17\">120 L</text>\n<text x=\"165\" y=\"210\" font-size=\"15\">väl blandad lösning</text>\n</svg></span><p>En tank innehåller 120 L lösning och från början 20 g av ett löst ämne. Lösning med koncentrationen 0,40 g/L rinner in med 3,0 L/min. Samma mängd väl blandad lösning rinner ut per minut.</p><ol type=\"a\"><li>Ställ upp en differentialekvation för mängden \\(S(t)\\) gram.</li><li>Bestäm mängden efter 30 minuter.</li></ol>",
    "s": "<p>Inflödet av ämnet är \\(3,0\\cdot0,40=1,20\\) g/min. Eftersom volymen är konstant 120 L är koncentrationen i tanken \\(S/120\\) g/L, så utflödet av ämnet är \\(3S/120=0,025S\\) g/min.</p><p>Alltså</p><p>\\[\\boxed{S'=1,20-0,025S},\\qquad S(0)=20.\\]</p><p>Jämviktsvärdet är \\(1,20/0,025=48\\), så</p><p>\\[S(t)=48+Ce^{-0,025t}.\\]</p><p>Av \\(S(0)=20\\) fås \\(C=-28\\). Därför</p><p>\\[S(30)=48-28e^{-0,75}\\approx\\mathbf{34,8\\text{ g}}.\\]</p>",
    "id": "4.40"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "A",
    "typ": "massa-fjäder med periodisk kraft",
    "poang": "0/1/2",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 500 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Massa på fjäder med yttre periodisk kraft\">\n<rect width=\"500\" height=\"270\" fill=\"white\"/>\n<rect x=\"25\" y=\"35\" width=\"25\" height=\"200\" fill=\"#777\"/>\n<path d=\"M50 125 L75 125 L90 100 L115 150 L140 100 L165 150 L190 100 L215 150 L235 125 L255 125\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n<rect x=\"255\" y=\"85\" width=\"105\" height=\"80\" rx=\"5\" fill=\"#999\" fill-opacity=\".22\" stroke=\"#333\" stroke-width=\"2.5\"/>\n<text x=\"296\" y=\"132\" font-size=\"18\">m</text>\n<line x1=\"360\" y1=\"125\" x2=\"450\" y2=\"125\" stroke=\"#222\" stroke-width=\"3\"/>\n<path d=\"M435 117 l15 8 -15 8\" fill=\"none\" stroke=\"#222\" stroke-width=\"2.5\"/>\n<text x=\"370\" y=\"102\" font-size=\"16\">F(t)</text>\n<line x1=\"307\" y1=\"185\" x2=\"307\" y2=\"225\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<line x1=\"250\" y1=\"215\" x2=\"365\" y2=\"215\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<path d=\"M352 207 l13 8 -13 8\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.5\"/>\n<text x=\"372\" y=\"220\" font-size=\"15\">y</text>\n<text x=\"105\" y=\"75\" font-size=\"15\">fjäder</text>\n</svg></span><p>En massa på 1,0 kg sitter i en ideal fjäder med fjäderkonstanten 9,0 N/m. Förskjutningen \\(y(t)\\) mäts från jämviktsläget. En yttre kraft \\(F(t)=6\\cos(2t)\\) N verkar på massan. Friktion försummas.</p><p>Massan släpps från jämviktsläget utan begynnelsehastighet.</p><ol type=\"a\"><li>Ställ upp differentialekvationen med begynnelsevillkor.</li><li>Bestäm \\(y(t)\\).</li></ol>",
    "s": "<p>Newtons andra lag ger \\(my''=F(t)-ky\\). Med \\(m=1\\) och \\(k=9\\):</p><p>\\[y''+9y=6\\cos2t,\\qquad y(0)=0,\\quad y'(0)=0.\\]</p><p>Homogena lösningen är \\(C_1\\cos3t+C_2\\sin3t\\). Sök \\(y_p=A\\cos2t\\). Då</p><p>\\[(-4A+9A)\\cos2t=6\\cos2t\\Rightarrow A=\\frac65.\\]</p><p>Alltså \\(y=C_1\\cos3t+C_2\\sin3t+\\frac65\\cos2t\\).</p><p>Villkoren ger \\(C_1=-6/5\\) och \\(C_2=0\\). Därmed</p><p><strong>\\(y(t)=\\frac65(\\cos2t-\\cos3t)\\)</strong>.</p>",
    "id": "4.41"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "A",
    "typ": "dämpat system med konstant yttre kraft",
    "poang": "0/1/2",
    "t": "<p>En modell för ett dämpat mekaniskt system är</p><p>\\[y''+2y'+5y=10,\\qquad y(0)=0,\\qquad y'(0)=0.\\]</p><ol type=\"a\"><li>Bestäm \\(y(t)\\).</li><li>Bestäm det värde som \\(y(t)\\) närmar sig när \\(t\\to\\infty\\) och förklara varför detta är rimligt utifrån differentialekvationen.</li></ol>",
    "s": "<p>Den homogena ekvationen har rötterna \\(-1\\pm2i\\):</p><p>\\[y_h=e^{-t}(C_1\\cos2t+C_2\\sin2t).\\]</p><p>En konstant partikulärlösning \\(y_p=A\\) ger \\(5A=10\\), alltså \\(A=2\\).</p><p>\\[y=2+e^{-t}(C_1\\cos2t+C_2\\sin2t).\\]</p><p>Av \\(y(0)=0\\) fås \\(C_1=-2\\). Derivering och \\(y'(0)=0\\) ger \\(C_2=-1\\). Alltså</p><p><strong>\\(y=2-e^{-t}(2\\cos2t+\\sin2t)\\)</strong>.</p><p>När \\(t\\to\\infty\\) går exponentialfaktorn mot 0, så \\(y\\to2\\). Det är också systemets jämviktsläge: om rörelsen har stannat är \\(y'=y''=0\\), och ekvationen ger \\(5y=10\\Rightarrow y=2\\).</p>",
    "id": "4.42"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "A",
    "typ": "saltblandning och maxvärde",
    "poang": "0/1/3",
    "id": "4.59",
    "t": "<p>I en tank finns från början 47,5 liter vatten och 2,5 kg salt väl blandat. En saltlösning tillförs med hastigheten 2,5 liter/minut. Den inkommande lösningen har koncentrationen 0,20 kg/L. Samtidigt rinner 5,0 liter/minut ut ur tanken.</p><p>Bestäm hur mycket salt tanken innehåller som mest och när detta sker.</p>",
    "s": "<p>Låt \\(S(t)\\) vara mängden salt i kg och \\(V(t)\\) volymen i liter.</p><p>Eftersom 2,5 L/min rinner in och 5,0 L/min rinner ut får vi</p><p>\\[V(t)=47,5-2,5t,\\qquad 0\\le t\\lt 19.\\]</p><p>Inflödet av salt är \\(2,5\\cdot 0,20=0,5\\) kg/min. Utflödet av salt är koncentrationen i tanken gånger utflödet:</p><p>\\[5,0\\cdot\\frac{S}{47,5-2,5t}.\\]</p><p>Därför gäller</p><p>\\[S'=0,5-\\frac{5S}{47,5-2,5t}=0,5-\\frac{2S}{19-t}.\\]</p><p>För att hitta när mängden är som störst sätter vi \\(S'=0\\):</p><p>\\[0,5=\\frac{2S}{19-t}\\Rightarrow S=\\frac{19-t}{4}.\\]</p><p>Vi bestämmer nu \\(S(t)\\). Ekvationen är linjär:</p><p>\\[S'+\\frac{2}{19-t}S=0,5.\\]</p><p>En integrerande faktor är \\((19-t)^{-2}\\). Lösning ger</p><p>\\[S(t)=\\frac{19-t}{2}+C(19-t)^2.\\]</p><p>Begynnelsevillkoret \\(S(0)=2,5\\) ger</p><p>\\[2,5=9,5+361C\\Rightarrow C=-\\frac{7}{361}.\\]</p><p>Alltså</p><p>\\[S(t)=\\frac{19-t}{2}-\\frac{7}{361}(19-t)^2.\\]</p><p>Sätt detta lika med \\((19-t)/4\\):</p><p>\\[\\frac{19-t}{2}-\\frac{7}{361}(19-t)^2=\\frac{19-t}{4}.\\]</p><p>För \\(19-t>0\\) fås</p><p>\\[\\frac14=\\frac{7}{361}(19-t)\\Rightarrow 19-t=\\frac{361}{28}.\\]</p><p>Alltså</p><p>\\[t=19-\\frac{361}{28}=\\frac{171}{28}\\approx 6,11\\ \\text{min}.\\]</p><p>Då blir</p><p>\\[S_{\\max}=\\frac{19-t}{4}=\\frac{361}{112}\\approx 3,22\\ \\text{kg}.\\]</p><p><strong>Tankens maximala saltmängd är ungefär 3,22 kg och detta sker efter cirka 6,1 minuter.</strong></p>"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "C",
    "typ": "Newtonsk avsvalning enkel modell",
    "poang": "0/2/0",
    "t": "<p>Ett föremål med temperaturen 90 °C placeras i ett rum med 20 °C. Avsvalningshastigheten antas vara proportionell mot temperaturskillnaden. Ställ upp en differentialekvation med begynnelsevillkor för temperaturen \\(T(t)\\).</p>",
    "s": "<p>Temperaturskillnaden mot omgivningen är \\(T-20\\). När föremålet är varmare ska temperaturen minska, därför sätts ett minustecken:</p><p><strong>\\(T'=-k(T-20),\\quad T(0)=90,\\quad k\\gt0\\)</strong>.</p>",
    "id": "4.86"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "E",
    "typ": "formulera enkel tillväxtmodell",
    "poang": "2/0/0",
    "t": "<p>En bakteriepopulation växer med en hastighet som är proportionell mot populationens storlek. Skriv en differentialekvation för populationen \\(P(t)\\).</p>",
    "s": "<p>\"Proportionell mot populationens storlek\" betyder</p><p><strong>\\(P'=kP\\)</strong>, där \\(k\\gt0\\) är proportionalitetskonstanten.</p>",
    "id": "4.113"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "C",
    "typ": "medicin kontinuerlig elimination",
    "poang": "0/2/0",
    "t": "<p>En medicinmängd \\(M(t)\\) bryts ned med en hastighet som är proportionell mot mängden. Samtidigt tillförs 20 mg per timme kontinuerligt. Skriv en differentialekvation och bestäm jämviktsmängden om nedbrytningskonstanten är 0,08 h\\(^{-1}\\).</p>",
    "s": "<p>Nedbrytningen är \\(-0,08M\\) och tillförseln +20:</p><p>\\[M'=20-0,08M.\\]</p><p>Jämvikt när \\(M'=0\\):</p><p>\\[20-0,08M=0\\Rightarrow M=250.\\]</p><p><strong>Jämviktsmängden är 250 mg.</strong></p>",
    "id": "4.114"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "C",
    "typ": "blandning med konstant volym",
    "poang": "0/2/0",
    "t": "<span class=\"fig\"><svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tank med inflöde och utflöde\">\n<rect width=\"480\" height=\"300\" fill=\"white\"/><path d=\"M125 75 L125 245 Q125 260 145 260 H335 Q355 260 355 245 V75\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n<path d=\"M130 145 H350 V245 Q350 255 335 255 H145 Q130 255 130 245 Z\" fill=\"#888\" fill-opacity=\".16\"/>\n<line x1=\"35\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#222\" stroke-width=\"4\"/><path d=\"M165 62 l15 8 -15 8\" fill=\"none\" stroke=\"#222\" stroke-width=\"2\"/>\n<line x1=\"305\" y1=\"255\" x2=\"445\" y2=\"255\" stroke=\"#222\" stroke-width=\"4\"/><path d=\"M430 247 l15 8 -15 8\" fill=\"none\" stroke=\"#222\" stroke-width=\"2\"/>\n<text x=\"50\" y=\"48\" font-size=\"15\">inflöde</text><text x=\"365\" y=\"232\" font-size=\"15\">utflöde</text><text x=\"205\" y=\"190\" font-size=\"16\">V liter</text>\n</svg></span><p>En tank innehåller 100 L lösning med 5 kg salt. Saltlösning med koncentration 0,08 kg/L rinner in med 4 L/min och lika mycket blandning rinner ut. Ställ upp differentialekvationen för saltmängden \\(S(t)\\).</p>",
    "s": "<p>Inflöde av salt:</p><p>\\[4\\cdot0,08=0,32\\text{ kg/min}.\\]</p><p>Koncentrationen i tanken är \\(S/100\\) kg/L, så utflödet av salt är</p><p>\\[4\\cdot\\frac{S}{100}=0,04S.\\]</p><p>Alltså</p><p><strong>\\(S'=0,32-0,04S,\\quad S(0)=5\\)</strong>.</p>",
    "id": "4.115"
  },
  {
    "kap": 4,
    "omr": "modellering_diffekv",
    "niva": "C",
    "typ": "temperatur från två mätningar",
    "poang": "0/2/0",
    "t": "<p>Ett föremål svalnar enligt \\(T(t)=20+Ce^{-kt}\\). Vid \\(t=0\\) är temperaturen 80 °C och efter 10 min är den 50 °C. Bestäm \\(C\\) och \\(k\\).</p>",
    "s": "<p>Från \\(T(0)=80\\): \\(80=20+C\\Rightarrow C=60\\).</p><p>Vid 10 min:</p><p>\\[50=20+60e^{-10k}\\Rightarrow e^{-10k}=\\frac12.\\]</p><p>\\[k=\\frac{\\ln2}{10}\\approx0,0693.\\]</p>",
    "id": "4.116"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "C",
    "typ": "kontrollera digital lösning till differentialekvation",
    "poang": "0/2/0",
    "t": "<p>Ett digitalt verktyg påstår att lösningen till \\(y'=2y-x\\), \\(y(0)=1\\), är \\(y=\\frac{x}{2}+\\frac14+\\frac34e^{2x}\\). Kontrollera resultatet utan att lösa differentialekvationen från början.</p>",
    "s": "<p>Derivera: \\(y'=\\frac{1}{2}+\\frac32e^{2x}\\). Högerledet blir</p><p>\\[2y-x=x+\\frac{1}{2}+\\frac32e^{2x}-x=\\frac{1}{2}+\\frac32e^{2x}=y'.\\]</p><p>Dessutom \\(y(0)=1/4+3/4=1\\). Resultatet är alltså <strong>korrekt</strong>.</p>",
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
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "C",
    "typ": "kontroll av digital lösning till inhomogen andra ordningens ekvation",
    "poang": "0/2/0",
    "t": "<p>Ett digitalt verktyg ger lösningen</p><p>\\[y=C_1e^x+C_2e^{2x}-xe^x\\]</p><p>till differentialekvationen \\(y''-3y'+2y=e^x\\).</p><p>Kontrollera lösningen genom insättning och förklara varför de två första termerna försvinner i vänsterledet.</p>",
    "s": "<p>Operatorn är \\(L[y]=y''-3y'+2y\\). Termerna \\(e^x\\) och \\(e^{2x}\\) motsvarar rötterna 1 och 2 till den karakteristiska ekvationen, så</p><p>\\[L[C_1e^x+C_2e^{2x}]=0.\\]</p><p>Det räcker därför att kontrollera \\(y_p=-xe^x\\). Vi får</p><p>\\[y_p'=-(x+1)e^x,\\qquad y_p''=-(x+2)e^x.\\]</p><p>Då</p><p>\\[L[y_p]=[-(x+2)+3(x+1)-2x]e^x=e^x.\\]</p><p>Verktygets lösning är alltså korrekt.</p>",
    "id": "4.45"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "E",
    "typ": "tolka CAS-lösning till differentialekvation",
    "poang": "2/0/0",
    "id": "4.60",
    "t": "<p>Ett CAS ger lösningen \\(y=Ce^{4x}\\) till differentialekvationen \\(y'=4y\\).</p><p>Bestäm den lösning som uppfyller \\(y(1)=6\\).</p>",
    "s": "<p>Sätt in \\(x=1\\) i lösningsfamiljen:</p><p>\\[6=Ce^4.\\]</p><p>Därför är</p><p>\\[C=6e^{-4}.\\]</p><p>Lösningen blir då</p><p><strong>\\(y=6e^{-4}e^{4x}=6e^{4x-4}\\)</strong>.</p>"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "E",
    "typ": "kontrollera numerisk lösning",
    "poang": "2/0/0",
    "t": "<p>Ett digitalt verktyg ger \\(y=5-3e^{-2x}\\) som lösning till \\(y'+2y=10\\). Kontrollera snabbt genom insättning.</p>",
    "s": "<p>\\(y'=6e^{-2x}\\). Då</p><p>\\[y'+2y=6e^{-2x}+10-6e^{-2x}=10.\\]</p><p>Verktygets lösning är korrekt.</p>",
    "id": "4.87"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "E",
    "typ": "tolka numerisk lösning",
    "poang": "2/0/0",
    "t": "<p>Ett verktyg ger \\(y(5)\\approx3,84\\) för ett begynnelsevärdesproblem. Vad betyder detta om \\(y(t)\\) är mängden vätska i liter och \\(t\\) mäts i minuter?</p>",
    "s": "<p>Modellen förutsäger att det finns ungefär <strong>3,84 liter efter 5 minuter</strong>.</p>",
    "id": "4.117"
  },
  {
    "kap": 4,
    "omr": "digitala_verktyg_diffekv",
    "niva": "C",
    "typ": "jämföra numerisk och analytisk lösning",
    "poang": "0/2/0",
    "t": "<p>För \\(y'=-y\\), \\(y(0)=1\\), ger Euler med \\(h=0,5\\) värdet \\(y(1)\\approx0,25\\). Den analytiska lösningen ger \\(e^{-1}\\approx0,368\\). Beräkna det absoluta felet och kommentera.</p>",
    "s": "<p>Det absoluta felet är</p><p>\\[|0,25-0,368|=0,118.\\]</p><p>Felet är relativt stort eftersom steglängden 0,5 är grov. Mindre \\(h\\) skulle normalt förbättra approximationen.</p>",
    "id": "4.118"
  }
];
