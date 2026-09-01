/* uppgiftermato2.js — Matematik – fortsättning nivå 2.
   Kvalitetsgranskad version: tydligare språk och utförligare facit. */

window.BANKMATO2 = [
  {
    "id": "1.01",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För funktionen \\(f(x)=-5\\cos(4x)+2\\), där \\(x\\) mäts i radianer, bestäm</p><p>a) amplitud<br>b) period<br>c) medellinje<br>d) största och minsta värde.</p>",
    "s": "<p><strong>Metod:</strong> Läs av amplitud och medellinje direkt. Perioden fås från faktorn framför \\(x\\).</p><p>a) <strong>5</strong>.</p><p>b) \\(T=2\\pi/4=\\)<strong>\\(\\pi/2\\)</strong>.</p><p>c) <strong>\\(y=2\\)</strong>.</p><p>d) Värdemängden är \\([2-5,2+5]\\), alltså <strong>min −3 och max 7</strong>.</p>",
    "familj": "cos_egenskaper_e2"
  },
  {
    "id": "1.02",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Ett pariserhjuls gondolhöjd kan modelleras med</p>\n<p>\\[\nh(t)=22+18\\sin\\left(\\frac{\\pi}{20}t-\\frac{\\pi}{2}\\right),\n\\]</p>\n<p>där \\(h\\) mäts i meter och \\(t\\) i minuter efter att gondolen startar i sitt lägsta läge.</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pariserhjul med diameter 36 meter och nav 22 meter över marken\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n\n<line x1=\"55\" y1=\"225\" x2=\"360\" y2=\"225\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<circle cx=\"180\" cy=\"135\" r=\"82\" fill=\"#F4F8F9\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<circle cx=\"180\" cy=\"135\" r=\"5\" fill=\"#2B2527\"/>\n<line x1=\"180\" y1=\"135\" x2=\"247.2\" y2=\"88.0\" stroke=\"#268FA3\" stroke-width=\"2\"/>\n<rect x=\"236.2\" y=\"80.0\" width=\"22\" height=\"16\" rx=\"4\" fill=\"#fff\" stroke=\"#268FA3\" stroke-width=\"2\"/>\n<line x1=\"180\" y1=\"217\" x2=\"138\" y2=\"225\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<line x1=\"180\" y1=\"217\" x2=\"222\" y2=\"225\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<line x1=\"315\" y1=\"53\" x2=\"315\" y2=\"225\" stroke=\"#268FA3\" stroke-width=\"1.6\"/>\n<line x1=\"309\" y1=\"53\" x2=\"321\" y2=\"53\" stroke=\"#268FA3\" stroke-width=\"1.6\"/>\n<line x1=\"309\" y1=\"225\" x2=\"321\" y2=\"225\" stroke=\"#268FA3\" stroke-width=\"1.6\"/>\n<text x=\"327\" y=\"139\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">40 m</text>\n<text x=\"180\" y=\"247\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5C575E\">marknivå</text>\n\n</svg></span><p>a) Bestäm hjulets största och minsta gondolhöjd.<br>\nb) Hur lång tid efter start når gondolen för första gången höjden \\(31\\) m?</p>",
    "s": "<p>a) Medellinjen är \\(22\\) och amplituden \\(18\\).</p>\n<p>\\[\nh_{\\max}=22+18=40,\\qquad h_{\\min}=22-18=4.\n\\]</p>\n<p>b) Sätt \\(h(t)=31\\):</p>\n<p>\\[\n22+18\\sin\\left(\\frac{\\pi}{20}t-\\frac{\\pi}{2}\\right)=31\n\\]</p>\n<p>\\[\n\\sin\\left(\\frac{\\pi}{20}t-\\frac{\\pi}{2}\\right)=\\frac12.\n\\]</p>\n<p>Första gången efter start fås när argumentet är \\(\\pi/6\\):</p>\n<p>\\[\n\\frac{\\pi}{20}t-\\frac{\\pi}{2}=\\frac{\\pi}{6}\n\\Rightarrow\n\\frac{\\pi}{20}t=\\frac{2\\pi}{3}\n\\Rightarrow\nt=\\frac{40}{3}\\approx13,3.\n\\]</p>\n<p><strong>a) 4 m och 40 m. b) Cirka 13,3 min.</strong></p>",
    "familj": "trigmodell_pariserhjul"
  },
  {
    "id": "1.03",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Lös ekvationen algebraiskt:</p>\n<p>\\[\\frac1{\\cos^2x}=1-\\tan x.\\]</p>\n<p>Ange alla lösningar.</p>",
    "s": "<p>Utgå från identiteten</p>\n<p>\\[\n\\frac1{\\cos^2x}=1+\\tan^2x.\n\\]</p>\n<p>Ekvationen blir</p>\n<p>\\[\n1+\\tan^2x=1-\\tan x\n\\Rightarrow \\tan^2x+\\tan x=0.\n\\]</p>\n<p>Faktorisera:</p>\n<p>\\[\n\\tan x(\\tan x+1)=0.\n\\]</p>\n<p>Fall 1: \\(\\tan x=0\\Rightarrow x=n\\pi\\).</p>\n<p>Fall 2: \\(\\tan x=-1\\Rightarrow x=-\\frac{\\pi}{4}+n\\pi\\), vilket också kan skrivas \\(\\frac{3\\pi}{4}+n\\pi\\).</p>\n<p>Inga av dessa lösningar har \\(\\cos x=0\\), så de är tillåtna.</p>\n<p><strong>\\[\nx=n\\pi\\quad\\text{eller}\\quad x=\\frac{3\\pi}{4}+n\\pi,\\qquad n\\in\\mathbb Z.\n\\]</strong></p>",
    "familj": "kallmaterial_trigekv_sec2"
  },
  {
    "id": "1.04",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>I enhetscirkeln är tre radier ritade för vinklarna \\(\\pi/6\\), \\(2\\pi/3\\) och \\(5\\pi/4\\).</p>\n<span class=\"fig\"><svg width=\"430\" height=\"310\" viewBox=\"0 0 430 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Enhetscirkel med tre markerade vinklar pi genom 6, 2 pi genom 3 och 5 pi genom 4\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"308\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E1E5EA\" stroke-width=\"1\"><line x1=\"45\" y1=\"155\" x2=\"385\" y2=\"155\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"275\"/></g>\n<line x1=\"45\" y1=\"155\" x2=\"392\" y2=\"155\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M392 155 l-9 -5 v10 z\" fill=\"#2B2527\"/><line x1=\"215\" y1=\"280\" x2=\"215\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M215 28 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<circle cx=\"215\" cy=\"155\" r=\"105\" fill=\"none\" stroke=\"#5C6570\" stroke-width=\"2\"/>\n<g stroke=\"#B43123\" stroke-width=\"2.6\"><line x1=\"215\" y1=\"155\" x2=\"305.9\" y2=\"102.5\"/><line x1=\"215\" y1=\"155\" x2=\"162.5\" y2=\"64.1\"/><line x1=\"215\" y1=\"155\" x2=\"140.8\" y2=\"229.2\"/></g>\n<g fill=\"#B43123\"><circle cx=\"305.9\" cy=\"102.5\" r=\"4.5\"/><circle cx=\"162.5\" cy=\"64.1\" r=\"4.5\"/><circle cx=\"140.8\" cy=\"229.2\" r=\"4.5\"/></g>\n<text x=\"285\" y=\"139\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#B43123\">π/6</text><text x=\"172\" y=\"103\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#B43123\">2π/3</text><text x=\"153\" y=\"205\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#B43123\">5π/4</text>\n<text x=\"398\" y=\"147\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text><text x=\"225\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">y</text><text x=\"323\" y=\"92\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">A</text><text x=\"151\" y=\"50\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">B</text><text x=\"125\" y=\"244\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">C</text>\n</svg></span>\n<p>Bestäm exakt koordinaterna för punkterna A, B och C.</p>",
    "s": "<p><strong>Metod:</strong> En punkt på enhetscirkeln vid vinkeln \\(v\\) har koordinaterna \\((\\cos v,\\sin v)\\).</p>\n<p>A hör till \\(\\pi/6\\):</p><p>\\[A=\\left(\\frac{\\sqrt3}{2},\\frac12\\right).\\]</p>\n<p>B hör till \\(2\\pi/3\\):</p><p>\\[B=\\left(-\\frac12,\\frac{\\sqrt3}{2}\\right).\\]</p>\n<p>C hör till \\(5\\pi/4\\):</p><p>\\[C=\\left(-\\frac{\\sqrt2}{2},-\\frac{\\sqrt2}{2}\\right).\\]</p>",
    "familj": "enhetscirkel_specialvinklar_svg"
  },
  {
    "id": "1.05",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt.</p><p>a) \\(\\sin \\frac{\\pi}{6}\\)<br>b) \\(\\cos \\frac{2\\pi}{3}\\)<br>c) \\(\\tan \\frac{5\\pi}{4}\\)<br>d) \\(\\sin \\frac{3\\pi}{2}\\)</p>",
    "s": "<p><strong>Metod:</strong> Läs av standardvärdena i enhetscirkeln. Tänk särskilt på vilket tecken sinus, cosinus och tangens har i den aktuella kvadranten.</p>\n<p>a) \\(\\sin(\\pi/6)=\\sin30^\\circ=\\boxed{1/2}\\).</p>\n<p>b) \\(2\\pi/3=120^\\circ\\) ligger i andra kvadranten, där cosinus är negativ: \\(\\boxed{-1/2}\\).</p>\n<p>c) \\(5\\pi/4=225^\\circ\\). Här är både sinus och cosinus negativa, så deras kvot är positiv: \\(\\tan(5\\pi/4)=\\boxed{1}\\).</p>\n<p>d) Vinkeln \\(3\\pi/2\\) pekar rakt nedåt i enhetscirkeln, så \\(\\sin(3\\pi/2)=\\boxed{-1}\\).</p>",
    "familj": "proc_enhetscirkel_exakta_2"
  },
  {
    "id": "1.06",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös ekvationen</p><p>\\[\\cos2x=\\sin x\\]</p><p>för \\(0\\le x&lt;2\\pi\\).</p>",
    "s": "<p><strong>Metod:</strong> Skriv först om ekvationen så att du får vanliga trigonometriska grundekvationer. Använd identiteter eller faktorisering innan du löser vinklarna.</p><p>Använd \\(\\cos2x=1-2\\sin^2x\\):</p><p>\\[1-2\\sin^2x=\\sin x.\\]</p><p>Sätt \\(u=\\sin x\\): \\(2u^2+u-1=0=(2u-1)(u+1)\\).</p><p>Alltså \\(\\sin x=1/2\\) eller \\(\\sin x=-1\\).</p><p><strong>\\(x=\\pi/6,\\ 5\\pi/6,\\ 3\\pi/2\\).</strong></p>",
    "familj": "trigekv_cos2x_c"
  },
  {
    "id": "1.07",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Visa först att</p><p>\\[\\sin x+\\sin3x=2\\sin2x\\cos x.\\]</p><p>Använd sedan sambandet för att lösa</p><p>\\[\\sin x+\\sin2x+\\sin3x=0\\]</p><p>för \\(0\\le x&lt;2\\pi\\).</p>",
    "s": "<p>a) Utgå från vänsterledet och skriv båda sinusuttrycken kring vinkeln \\(2x\\):</p>\n<p>\\[\\sin3x=\\sin(2x+x)=\\sin2x\\cos x+\\cos2x\\sin x,\\]</p>\n<p>\\[\\sin x=\\sin(2x-x)=\\sin2x\\cos x-\\cos2x\\sin x.\\]</p>\n<p>När uttrycken adderas tar termerna med \\(\\cos2x\\sin x\\) ut varandra:</p>\n<p>\\[\\sin x+\\sin3x=2\\sin2x\\cos x.\\]</p>\n<p>b) Använd nu sambandet i ekvationen:</p>\n<p>\\[\\sin x+\\sin2x+\\sin3x=\\sin2x(2\\cos x+1)=0.\\]</p>\n<p>Alltså måste minst en faktor vara noll.</p>\n<p>\\(\\sin2x=0\\Rightarrow2x=n\\pi\\Rightarrow x=n\\pi/2\\), vilket i intervallet ger \\(0,\\pi/2,\\pi,3\\pi/2\\).</p>\n<p>\\(2\\cos x+1=0\\Rightarrow\\cos x=-1/2\\Rightarrow x=2\\pi/3,4\\pi/3\\).</p>\n<p><strong>\\[\\boxed{x=0,\\frac\\pi2,\\frac{2\\pi}3,\\pi,\\frac{4\\pi}3,\\frac{3\\pi}2}.\\]</strong></p>",
    "familj": "summa_sinus_bevis_ekvation"
  },
  {
    "id": "1.08",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt.</p><p>a) \\(\\sin 30^\\circ\\)<br>b) \\(\\cos 120^\\circ\\)<br>c) \\(\\sin 225^\\circ\\)<br>d) \\(\\cos 330^\\circ\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd referensvinkeln och tecknet i respektive kvadrant.</p><p>a) <strong>\\(\\frac12\\)</strong><br>b) <strong>\\(-\\frac12\\)</strong><br>c) <strong>\\(-\\frac{\\sqrt2}{2}\\)</strong><br>d) <strong>\\(\\frac{\\sqrt3}{2}\\)</strong></p>",
    "familj": "proc_trig_enhetscirkel_exakta_1"
  },
  {
    "id": "1.09",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0\\le x&lt;2\\pi\\).</p><p>a) \\(\\sin x=\\frac12\\)<br>b) \\(\\cos x=-\\frac{\\sqrt2}{2}\\)<br>c) \\(\\tan x=1\\)<br>d) \\(\\sin x=-1\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först referensvinkeln och välj sedan de kvadranter där funktionen har rätt tecken.</p>\n<p>a) \\(\\sin x=1/2\\) har referensvinkeln \\(\\pi/6\\). Sinus är positiv i kvadrant I och II:</p><p>\\[\\boxed{x=\\pi/6,\\ 5\\pi/6}.\\]</p>\n<p>b) \\(\\cos x=-\\sqrt2/2\\) har referensvinkeln \\(\\pi/4\\). Cosinus är negativ i kvadrant II och III:</p><p>\\[\\boxed{x=3\\pi/4,\\ 5\\pi/4}.\\]</p>\n<p>c) \\(\\tan x=1\\) har referensvinkeln \\(\\pi/4\\). Tangens är positiv i kvadrant I och III:</p><p>\\[\\boxed{x=\\pi/4,\\ 5\\pi/4}.\\]</p>\n<p>d) \\(\\sin x=-1\\) bara i punkten längst ned på enhetscirkeln:</p><p>\\[\\boxed{x=3\\pi/2}.\\]</p>",
    "familj": "proc_trigekv_interval_1"
  },
  {
    "id": "1.10",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(f(x)=\\tan(2x)\\):</p><p>a) ange perioden<br>b) ange två närliggande lodräta asymptoter kring origo<br>c) bestäm \\(f(\\pi/8)\\).</p>",
    "s": "<p><strong>Metod:</strong> För \\(\\tan(kx)\\) är perioden \\(\\pi/|k|\\). Lodräta asymptoter fås när argumentet är \\(\\pi/2+n\\pi\\).</p><p>a) \\(T=\\pi/2\\).</p><p>b) \\(2x=\\pi/2+n\\pi\\Rightarrow x=\\pi/4+n\\pi/2\\). De två närmast origo är \\(\\boxed{x=-\\pi/4}\\) och \\(\\boxed{x=\\pi/4}\\).</p><p>c) \\(f(\\pi/8)=\\tan(2\\cdot\\pi/8)=\\tan(\\pi/4)=\\boxed{1}\\).</p>",
    "familj": "tan_egenskaper"
  },
  {
    "id": "1.11",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt.</p><p>a) \\(\\cos 150^\\circ\\)<br>b) \\(\\sin 225^\\circ\\)<br>c) \\(\\tan 330^\\circ\\)<br>d) \\(\\cos 270^\\circ\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd standardvinklarna i enhetscirkeln och kontrollera tecknet i rätt kvadrant.</p><p>a) <strong>\\(-\\frac{\\sqrt3}{2}\\)</strong>.<br>b) <strong>\\(-\\frac{\\sqrt2}{2}\\)</strong>.<br>c) <strong>\\(-\\frac{1}{\\sqrt3}=-\\frac{\\sqrt3}{3}\\)</strong>.<br>d) <strong>0</strong>.</p>",
    "familj": "proc_enhetscirkel_grader_2"
  },
  {
    "id": "1.12",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En trigonometrisk kurva har en maximipunkt i</p>\n<p>\\[\n\\left(\\frac{\\pi}{3},5\\right)\n\\]</p>\n<p>och nästa minimipunkt i</p>\n<p>\\[\n\\left(\\frac{5\\pi}{6},1\\right).\n\\]</p>\n<p>Det finns inga extrempunkter mellan dessa punkter.</p>\n<p>Bestäm en ekvation för kurvan på formen \\(y=A\\sin(kx+v)+B\\).</p>",
    "s": "<p>Största värdet är \\(5\\) och minsta \\(1\\). Därför</p>\n<p>\\[\nA=\\frac{5-1}{2}=2,\\qquad B=\\frac{5+1}{2}=3.\n\\]</p>\n<p>Avståndet från en maxpunkt till nästa minpunkt är en halv period:</p>\n<p>\\[\n\\frac{T}{2}=\\frac{5\\pi}{6}-\\frac{\\pi}{3}\n=\\frac{\\pi}{2}.\n\\]</p>\n<p>Alltså \\(T=\\pi\\) och</p>\n<p>\\[\nk=\\frac{2\\pi}{T}=2.\n\\]</p>\n<p>Vid \\(x=\\pi/3\\) ska sinusargumentet vara \\(\\pi/2\\):</p>\n<p>\\[\n2\\cdot\\frac{\\pi}{3}+v=\\frac{\\pi}{2}\n\\Rightarrow v=-\\frac{\\pi}{6}.\n\\]</p>\n<p><strong>\\[\ny=2\\sin\\left(2x-\\frac{\\pi}{6}\\right)+3.\n\\]</strong></p>",
    "familj": "sinusfunktion_extrempunkter_a"
  },
  {
    "id": "1.13",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Grafen visar en funktion som kan skrivas</p>\n<p>\\[\nf(x)=A\\sin(kx+v)+B.\n\\]</p><span class=\"fig\"><svg width=\"470\" height=\"250\" viewBox=\"0 0 470 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till en sinusfunktion med period pi, maxvärde 3 och minvärde minus 1\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"248\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55\" y1=\"215.0\" x2=\"445\" y2=\"215.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"219.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"55\" y1=\"183.3\" x2=\"445\" y2=\"183.3\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"187.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"151.7\" x2=\"445\" y2=\"151.7\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"120.0\" x2=\"445\" y2=\"120.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"124.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"88.3\" x2=\"445\" y2=\"88.3\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"92.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"56.7\" x2=\"445\" y2=\"56.7\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"60.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"445\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"29.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"169.7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-π/2</text>\n<line x1=\"152.5\" y1=\"25\" x2=\"152.5\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"152.5\" y=\"169.7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text>\n<line x1=\"250.0\" y1=\"25\" x2=\"250.0\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"250.0\" y=\"169.7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/2</text>\n<line x1=\"347.5\" y1=\"25\" x2=\"347.5\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"347.5\" y=\"169.7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π</text>\n<line x1=\"445.0\" y1=\"25\" x2=\"445.0\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"445.0\" y=\"169.7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3π/2</text>\n<line x1=\"55\" y1=\"151.7\" x2=\"445\" y2=\"151.7\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"152.5\" y1=\"25\" x2=\"152.5\" y2=\"215\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polyline points=\"55.00,56.67 56.30,56.72 57.60,56.89 58.90,57.17 60.20,57.55 61.50,58.05 62.80,58.66 64.10,59.37 65.40,60.19 66.70,61.11 68.00,62.14 69.30,63.27 70.60,64.50 71.90,65.83 73.20,67.25 74.50,68.76 75.80,70.37 77.10,72.06 78.40,73.83 79.70,75.69 81.00,77.62 82.30,79.63 83.60,81.71 84.90,83.85 86.20,86.06 87.50,88.33 88.80,90.66 90.10,93.03 91.40,95.46 92.70,97.92 94.00,100.43 95.30,102.97 96.60,105.54 97.90,108.13 99.20,110.75 100.50,113.38 101.80,116.02 103.10,118.67 104.40,121.33 105.70,123.98 107.00,126.62 108.30,129.25 109.60,131.87 110.90,134.46 112.20,137.03 113.50,139.57 114.80,142.08 116.10,144.54 117.40,146.97 118.70,149.34 120.00,151.67 121.30,153.94 122.60,156.15 123.90,158.29 125.20,160.37 126.50,162.38 127.80,164.31 129.10,166.17 130.40,167.94 131.70,169.63 133.00,171.24 134.30,172.75 135.60,174.17 136.90,175.50 138.20,176.73 139.50,177.86 140.80,178.89 142.10,179.81 143.40,180.63 144.70,181.34 146.00,181.95 147.30,182.45 148.60,182.83 149.90,183.11 151.20,183.28 152.50,183.33 153.80,183.28 155.10,183.11 156.40,182.83 157.70,182.45 159.00,181.95 160.30,181.34 161.60,180.63 162.90,179.81 164.20,178.89 165.50,177.86 166.80,176.73 168.10,175.50 169.40,174.17 170.70,172.75 172.00,171.24 173.30,169.63 174.60,167.94 175.90,166.17 177.20,164.31 178.50,162.38 179.80,160.37 181.10,158.29 182.40,156.15 183.70,153.94 185.00,151.67 186.30,149.34 187.60,146.97 188.90,144.54 190.20,142.08 191.50,139.57 192.80,137.03 194.10,134.46 195.40,131.87 196.70,129.25 198.00,126.62 199.30,123.98 200.60,121.33 201.90,118.67 203.20,116.02 204.50,113.38 205.80,110.75 207.10,108.13 208.40,105.54 209.70,102.97 211.00,100.43 212.30,97.92 213.60,95.46 214.90,93.03 216.20,90.66 217.50,88.33 218.80,86.06 220.10,83.85 221.40,81.71 222.70,79.63 224.00,77.62 225.30,75.69 226.60,73.83 227.90,72.06 229.20,70.37 230.50,68.76 231.80,67.25 233.10,65.83 234.40,64.50 235.70,63.27 237.00,62.14 238.30,61.11 239.60,60.19 240.90,59.37 242.20,58.66 243.50,58.05 244.80,57.55 246.10,57.17 247.40,56.89 248.70,56.72 250.00,56.67 251.30,56.72 252.60,56.89 253.90,57.17 255.20,57.55 256.50,58.05 257.80,58.66 259.10,59.37 260.40,60.19 261.70,61.11 263.00,62.14 264.30,63.27 265.60,64.50 266.90,65.83 268.20,67.25 269.50,68.76 270.80,70.37 272.10,72.06 273.40,73.83 274.70,75.69 276.00,77.62 277.30,79.63 278.60,81.71 279.90,83.85 281.20,86.06 282.50,88.33 283.80,90.66 285.10,93.03 286.40,95.46 287.70,97.92 289.00,100.43 290.30,102.97 291.60,105.54 292.90,108.13 294.20,110.75 295.50,113.38 296.80,116.02 298.10,118.67 299.40,121.33 300.70,123.98 302.00,126.62 303.30,129.25 304.60,131.87 305.90,134.46 307.20,137.03 308.50,139.57 309.80,142.08 311.10,144.54 312.40,146.97 313.70,149.34 315.00,151.67 316.30,153.94 317.60,156.15 318.90,158.29 320.20,160.37 321.50,162.38 322.80,164.31 324.10,166.17 325.40,167.94 326.70,169.63 328.00,171.24 329.30,172.75 330.60,174.17 331.90,175.50 333.20,176.73 334.50,177.86 335.80,178.89 337.10,179.81 338.40,180.63 339.70,181.34 341.00,181.95 342.30,182.45 343.60,182.83 344.90,183.11 346.20,183.28 347.50,183.33 348.80,183.28 350.10,183.11 351.40,182.83 352.70,182.45 354.00,181.95 355.30,181.34 356.60,180.63 357.90,179.81 359.20,178.89 360.50,177.86 361.80,176.73 363.10,175.50 364.40,174.17 365.70,172.75 367.00,171.24 368.30,169.63 369.60,167.94 370.90,166.17 372.20,164.31 373.50,162.38 374.80,160.37 376.10,158.29 377.40,156.15 378.70,153.94 380.00,151.67 381.30,149.34 382.60,146.97 383.90,144.54 385.20,142.08 386.50,139.57 387.80,137.03 389.10,134.46 390.40,131.87 391.70,129.25 393.00,126.62 394.30,123.98 395.60,121.33 396.90,118.67 398.20,116.02 399.50,113.38 400.80,110.75 402.10,108.13 403.40,105.54 404.70,102.97 406.00,100.43 407.30,97.92 408.60,95.46 409.90,93.03 411.20,90.66 412.50,88.33 413.80,86.06 415.10,83.85 416.40,81.71 417.70,79.63 419.00,77.62 420.30,75.69 421.60,73.83 422.90,72.06 424.20,70.37 425.50,68.76 426.80,67.25 428.10,65.83 429.40,64.50 430.70,63.27 432.00,62.14 433.30,61.11 434.60,60.19 435.90,59.37 437.20,58.66 438.50,58.05 439.80,57.55 441.10,57.17 442.40,56.89 443.70,56.72 445.00,56.67\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n</svg></span><p>Bestäm \\(A\\), \\(k\\), \\(v\\) och \\(B\\). Ange en möjlig funktion.</p>",
    "s": "<p>Av grafen avläses största värdet \\(3\\) och minsta värdet \\(-1\\).</p>\n<p>Amplituden är därför</p>\n<p>\\[\nA=\\frac{3-(-1)}2=2\n\\]</p>\n<p>och medellinjen är</p>\n<p>\\[\nB=\\frac{3+(-1)}2=1.\n\\]</p>\n<p>Avståndet mellan två minimipunkter är \\(\\pi\\), alltså är perioden \\(T=\\pi\\). Därför</p>\n<p>\\[\nk=\\frac{2\\pi}{T}=2.\n\\]</p>\n<p>Grafen har en minimipunkt vid \\(x=0\\). För \\(A=2\\) ska sinusargumentet då vara \\(-\\pi/2\\), så en möjlig fas är \\(v=-\\pi/2\\).</p>\n<p><strong>\\[\nf(x)=2\\sin\\left(2x-\\frac{\\pi}{2}\\right)+1.\n\\]</strong></p>",
    "familj": "sinusfunktion_fran_graf"
  },
  {
    "id": "1.14",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För det reella talet \\(a\\) ges ekvationen</p><p>\\[a\\sin x-\\cos x=2,\\qquad 0\\le x&lt;2\\pi.\\]</p><p>Undersök hur antalet lösningar beror på \\(a\\). Förklara varför antalet blir som du anger i varje fall.</p>",
    "s": "<p>Skriv vänsterledet som en enda sinusfunktion:</p>\n<p>\\[a\\sin x-\\cos x=R\\sin(x+v).\\]</p>\n<p>Amplituden blir</p><p>\\[R=\\sqrt{a^2+(-1)^2}=\\sqrt{a^2+1}.\\]</p>\n<p>Under intervallet \\(0\\le x&lt;2\\pi\\) går sinusfunktionen igenom exakt en hel period. Därför avgör amplituden hur många gånger nivån 2 kan träffas.</p>\n<p>För att någon lösning ska finnas krävs \\(R\\ge2\\):</p>\n<p>\\[\\sqrt{a^2+1}\\ge2\\iff a^2\\ge3\\iff |a|\\ge\\sqrt3.\\]</p>\n<p><strong>Alltså:</strong><br>\n\\(|a|&lt;\\sqrt3\\): 0 lösningar.<br>\n\\(|a|=\\sqrt3\\): 1 lösning, eftersom nivån 2 precis når sinuskurvans maximum.<br>\n\\(|a|>\\sqrt3\\): 2 lösningar, eftersom nivån 2 skär kurvan två gånger under en period.</p>",
    "familj": "trig_parameter_antal_amplitud"
  },
  {
    "id": "1.15",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös ekvationerna. Ange alla lösningar.</p><p>a) \\(\\sin x=0\\)<br>b) \\(\\cos x=-1\\)<br>c) \\(\\tan x=\\sqrt3\\)<br>d) \\(\\sin x=\\frac12\\)</p>",
    "s": "<p>a) \\(\\boxed{x=n\\pi}\\).</p><p>b) \\(\\boxed{x=\\pi+2n\\pi}\\).</p><p>c) \\(\\boxed{x=\\pi/3+n\\pi}\\).</p><p>d) \\(\\boxed{x=\\pi/6+2n\\pi}\\) eller \\(\\boxed{x=5\\pi/6+2n\\pi}\\), där \\(n\\in\\mathbb Z\\).</p>",
    "familj": "trigekv_grunder_mix4"
  },
  {
    "id": "1.16",
    "kap": 1,
    "omr": "fasforskjutning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Funktionen</p>\n<p>\\[\nf(x)=3\\cos\\left(\\frac{x}{2}-\\frac{\\pi}{3}\\right)+2\n\\]</p>\n<p>är given.</p>\n<p>a) Bestäm amplitud, medellinje och period.<br>\nb) Bestäm den minsta positiva \\(x\\)-koordinaten för en maximipunkt.<br>\nc) Bestäm funktionens värdemängd.</p>",
    "s": "<p>a) Amplituden är \\(3\\), medellinjen är \\(y=2\\) och</p>\n<p>\\[\nT=\\frac{2\\pi}{1/2}=4\\pi.\n\\]</p>\n<p>b) En maximipunkt fås när cosinusargumentet är \\(0\\) modulo \\(2\\pi\\). Minsta positiva lösningen:</p>\n<p>\\[\n\\frac{x}{2}-\\frac{\\pi}{3}=0\n\\Rightarrow x=\\frac{2\\pi}{3}.\n\\]</p>\n<p>c) \\(2-3\\le f(x)\\le2+3\\), alltså</p>\n<p><strong>\\(-1\\le f(x)\\le5\\).</strong></p>",
    "familj": "fasforskjutning_egenskaper"
  },
  {
    "id": "1.17",
    "kap": 1,
    "omr": "symmetrier_enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla med hjälp av symmetrier och periodicitet.</p><p>a) \\(\\sin(\\pi-x)\\)<br>b) \\(\\cos(-x)\\)<br>c) \\(\\sin(x+2\\pi)\\)<br>d) \\(\\tan(x+\\pi)\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd symmetrin i enhetscirkeln och funktionernas perioder.</p>\n<p>a) Vinklarna \\(x\\) och \\(\\pi-x\\) har samma y-koordinat: \\(\\boxed{\\sin(\\pi-x)=\\sin x}\\).</p>\n<p>b) Cosinus är en jämn funktion: \\(\\boxed{\\cos(-x)=\\cos x}\\).</p>\n<p>c) Sinus har perioden \\(2\\pi\\): \\(\\boxed{\\sin(x+2\\pi)=\\sin x}\\).</p>\n<p>d) Tangens har perioden \\(\\pi\\): \\(\\boxed{\\tan(x+\\pi)=\\tan x}\\).</p>",
    "familj": "proc_symmetrier_periodicitet_2"
  },
  {
    "id": "1.18",
    "kap": 1,
    "omr": "symmetrier_enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Vinkeln \\(\\alpha\\) ligger i andra kvadranten och \\(\\sin\\alpha=3/5\\).</p><p>a) Bestäm \\(\\cos\\alpha\\) och \\(\\tan\\alpha\\).<br>b) Bestäm \\(\\sin(\\pi-\\alpha)\\).<br>c) Bestäm \\(\\cos(2\\pi-\\alpha)\\).</p>",
    "s": "<p>I andra kvadranten är cosinus negativ. Trigonometriska ettan ger \\(\\cos\\alpha=-4/5\\), och då \\(\\tan\\alpha=(3/5)/(-4/5)=-3/4\\).</p><p>b) \\(\\sin(\\pi-\\alpha)=\\sin\\alpha=\\boxed{3/5}\\).</p><p>c) \\(\\cos(2\\pi-\\alpha)=\\cos\\alpha=\\boxed{-4/5}\\).</p>",
    "familj": "enhetscirkel_symmetri_3_4_5"
  },
  {
    "id": "1.19",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Utveckla uttrycken.</p><p>a) \\(\\sin(x+30^\\circ)\\)<br>b) \\(\\sin(x-45^\\circ)\\)<br>c) \\(\\cos(x+60^\\circ)\\)<br>d) \\(\\cos(x-30^\\circ)\\)</p>",
    "s": "<p>a) <strong>\\(\\frac{\\sqrt3}{2}\\sin x+\\frac12\\cos x\\)</strong><br>b) <strong>\\(\\frac{\\sqrt2}{2}\\sin x-\\frac{\\sqrt2}{2}\\cos x\\)</strong><br>c) <strong>\\(\\frac12\\cos x-\\frac{\\sqrt3}{2}\\sin x\\)</strong><br>d) <strong>\\(\\frac{\\sqrt3}{2}\\cos x+\\frac12\\sin x\\)</strong></p>",
    "familj": "proc_additionsformler_utveckla"
  },
  {
    "id": "1.20",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Lös i intervallet \\(0\\le x&lt;2\\pi\\).</p><p>a) \\(\\sin 2x=0\\)<br>b) \\(\\cos 2x=\\frac12\\)<br>c) \\(\\sin(3x)=1\\)<br>d) \\(\\tan(2x)=-1\\)</p>",
    "s": "<p>a) \\(2x=n\\pi\\Rightarrow\\) <strong>\\(x=0,\\frac\\pi2,\\pi,\\frac{3\\pi}2\\)</strong>.</p><p>b) \\(2x=\\pm\\frac\\pi3+2\\pi n\\Rightarrow\\) <strong>\\(x=\\frac\\pi6,\\frac{5\\pi}6,\\frac{7\\pi}6,\\frac{11\\pi}6\\)</strong>.</p><p>c) \\(3x=\\frac\\pi2+2\\pi n\\Rightarrow\\) <strong>\\(x=\\frac\\pi6,\\frac{5\\pi}6,\\frac{3\\pi}2\\)</strong>.</p><p>d) \\(2x=-\\frac\\pi4+\\pi n\\Rightarrow\\) <strong>\\(x=\\frac{3\\pi}8,\\frac{7\\pi}8,\\frac{11\\pi}8,\\frac{15\\pi}8\\)</strong>.</p>",
    "familj": "proc_trigekv_multiple_argument"
  },
  {
    "id": "1.21",
    "kap": 1,
    "omr": "fasforskjutning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beskriv hur grafen till \\(y=\\sin x\\) förändras för funktionerna.</p><p>a) \\(y=\\sin(x-\\frac\\pi3)\\)<br>b) \\(y=2\\sin x\\)<br>c) \\(y=\\sin x-4\\)</p>",
    "s": "<p>a) Förskjutning <strong>\\(\\pi/3\\) åt höger</strong>.</p><p>b) Vertikal sträckning med faktor <strong>2</strong>, alltså amplitud 2.</p><p>c) Förskjutning <strong>4 enheter nedåt</strong>.</p>",
    "familj": "fas_transformation_e"
  },
  {
    "id": "1.22",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>För det reella talet \\(a\\) ges ekvationen</p><p>\\[\\sin x+a=2\\cos^2x,\\qquad0\\le x&lt;2\\pi.\\]</p><p>Undersök hur antalet lösningar beror på \\(a\\). Förklara varför antalet blir som du anger i varje fall.</p>",
    "s": "<p>Sätt \\(y=\\sin x\\). Då är \\(-1\\le y\\le1\\) och \\(\\cos^2x=1-y^2\\). Ekvationen blir</p>\n<p>\\[y+a=2(1-y^2)\\Rightarrow a=2-y-2y^2.\\]</p>\n<p>Studera därför parabeln \\(h(y)=2-y-2y^2\\) på intervallet \\([-1,1]\\).</p>\n<p>Parabelns topp ligger vid</p><p>\\[y=-\\frac{-1}{2\\cdot(-2)}=-\\frac14,\\qquad h(-1/4)=\\frac{17}{8}.\\]</p>\n<p>I ändpunkterna får vi \\(h(-1)=1\\) och \\(h(1)=-1\\).</p>\n<p><strong>Viktig insikt:</strong> Ett värde \\(-1&lt;y&lt;1\\) motsvarar två vinklar \\(x\\) under en hel sinusperiod, medan \\(y=1\\) och \\(y=-1\\) bara motsvarar en vinkel vardera.</p>\n<p>Därför blir antalet lösningar:</p>\n<p>\\(a>17/8\\): 0<br>\n\\(a=17/8\\): 2<br>\n\\(1&lt;a&lt;17/8\\): 4<br>\n\\(a=1\\): 3<br>\n\\(-1&lt;a&lt;1\\): 2<br>\n\\(a=-1\\): 1<br>\n\\(a&lt;-1\\): 0.</p>",
    "familj": "trig_parameter_sin_kvadrat_antal"
  },
  {
    "id": "1.23",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla så långt som möjligt.</p><p>a) \\(\\sin^2x+\\cos^2x+\\sin^2x\\)<br>b) \\(1-\\sin^2x+\\cos^2x\\)<br>c) \\(\\frac{1-\\sin^2x}{\\cos^2x}\\)<br>d) \\(\\frac{\\sin^2x}{1-\\cos^2x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(\\sin^2x+\\cos^2x=1\\) och kontrollera eventuella nämnare.</p><p>Använd \\(\\sin^2x+\\cos^2x=1\\).</p><p>a) \\(1+\\sin^2x\\).<br>b) \\(2\\cos^2x\\).<br>c) <strong>1</strong>, där \\(\\cos x\\ne0\\).<br>d) <strong>1</strong>, där \\(\\sin x\\ne0\\).</p>",
    "familj": "proc_trigettan_forenkla_3"
  },
  {
    "id": "1.24",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Punkten \\(P\\) ligger på enhetscirkeln och motsvarar vinkeln \\(120^\\circ\\).</p><span class=\"fig\"><svg width=\"390\" height=\"265\" viewBox=\"0 0 390 265\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Enhetscirkel med en radie till vinkeln 120 grader\">\n<rect x=\"1\" y=\"1\" width=\"388\" height=\"263\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n\n<line x1=\"60\" y1=\"135\" x2=\"330\" y2=\"135\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"190\" y1=\"35\" x2=\"190\" y2=\"235\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<circle cx=\"190\" cy=\"135\" r=\"82\" fill=\"#F4F8F9\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<line x1=\"190\" y1=\"135\" x2=\"149.0\" y2=\"64.0\" stroke=\"#268FA3\" stroke-width=\"2.5\"/>\n<line x1=\"149.0\" y1=\"64.0\" x2=\"149.0\" y2=\"135\" stroke=\"#268FA3\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"149.0\" y1=\"64.0\" x2=\"190\" y2=\"64.0\" stroke=\"#268FA3\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<circle cx=\"149.0\" cy=\"64.0\" r=\"5\" fill=\"#268FA3\"/>\n<path d=\"M 220 135 A 30 30 0 0 0 175.0 109.0\" fill=\"none\" stroke=\"#5C575E\" stroke-width=\"1.5\"/>\n<text x=\"202\" y=\"114\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">120°</text>\n<text x=\"141.0\" y=\"54.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#268FA3\">P</text>\n<text x=\"333\" y=\"128\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text>\n<text x=\"198\" y=\"42\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">y</text>\n<text x=\"279\" y=\"152\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5C575E\">1</text>\n\n</svg></span><p>a) Bestäm punktens koordinater exakt.<br>b) Bestäm \\(\\sin 120^\\circ\\) och \\(\\cos 120^\\circ\\).</p>",
    "s": "<p>I enhetscirkeln är punktens koordinater \\((\\cos v,\\sin v)\\).</p>\n<p>Vinkeln \\(120^\\circ=180^\\circ-60^\\circ\\) ligger i andra kvadranten. Där är cosinus negativ och sinus positiv.</p>\n<p>\\[\n\\cos120^\\circ=-\\cos60^\\circ=-\\frac12,\\qquad\n\\sin120^\\circ=\\sin60^\\circ=\\frac{\\sqrt3}{2}.\n\\]</p>\n<p><strong>a) \\(P=\\left(-\\frac12,\\frac{\\sqrt3}{2}\\right)\\)</strong><br>\n<strong>b) \\(\\sin120^\\circ=\\frac{\\sqrt3}{2}\\), \\(\\cos120^\\circ=-\\frac12\\)</strong></p>",
    "familj": "enhetscirkel_avlasning"
  },
  {
    "id": "1.25",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Omvandla.</p>\n<p>a) \\(30^\\circ\\) till radianer<br>\nb) \\(135^\\circ\\) till radianer<br>\nc) \\(\\frac{5\\pi}{6}\\) radianer till grader<br>\nd) \\(1,4\\) radianer till grader. Svara med en decimal.</p>",
    "s": "<p>Använd \\(180^\\circ=\\pi\\) radianer.</p>\n<p>a) \\(30^\\circ\\cdot\\frac{\\pi}{180^\\circ}=\\frac{\\pi}6\\).</p>\n<p>b) \\(135^\\circ\\cdot\\frac{\\pi}{180^\\circ}=\\frac{3\\pi}4\\).</p>\n<p>c) \\(\\frac{5\\pi}6\\cdot\\frac{180^\\circ}{\\pi}=150^\\circ\\).</p>\n<p>d) \\(1,4\\cdot\\frac{180^\\circ}{\\pi}\\approx 80.2^\\circ\\).</p>",
    "familj": "radianer_omvandling"
  },
  {
    "id": "1.26",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Visa att</p><p>\\[\\frac{1-\\cos2x}{\\sin2x}=\\tan x\\]</p><p>för alla \\(x\\) där uttrycken är definierade.</p>",
    "s": "<p>Använd \\(1-\\cos2x=2\\sin^2x\\) och \\(\\sin2x=2\\sin x\\cos x\\):</p><p>\\[\\frac{1-\\cos2x}{\\sin2x}=\\frac{2\\sin^2x}{2\\sin x\\cos x}=\\frac{\\sin x}{\\cos x}=\\tan x.\\]</p><p><strong>Identiteten är visad</strong> på den gemensamma definitionsmängden.</p>",
    "familj": "identitet_dubbelvinkel_tan"
  },
  {
    "id": "1.27",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt med additions- eller subtraktionsformler.</p><p>a) \\(\\sin 75^\\circ\\)<br>b) \\(\\cos 75^\\circ\\)<br>c) \\(\\sin 15^\\circ\\)<br>d) \\(\\cos 15^\\circ\\)</p>",
    "s": "<p><strong>Metod:</strong> Dela upp vinklarna i standardvinklar, till exempel \\(75^\\circ=45^\\circ+30^\\circ\\) och \\(15^\\circ=45^\\circ-30^\\circ\\).</p>\n<p>a) \\(\\sin75^\\circ=\\sin45^\\circ\\cos30^\\circ+\\cos45^\\circ\\sin30^\\circ=\\boxed{\\frac{\\sqrt6+\\sqrt2}{4}}\\).</p>\n<p>b) \\(\\cos75^\\circ=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\boxed{\\frac{\\sqrt6-\\sqrt2}{4}}\\).</p>\n<p>c) \\(\\sin15^\\circ=\\sin45^\\circ\\cos30^\\circ-\\cos45^\\circ\\sin30^\\circ=\\boxed{\\frac{\\sqrt6-\\sqrt2}{4}}\\).</p>\n<p>d) \\(\\cos15^\\circ=\\cos45^\\circ\\cos30^\\circ+\\sin45^\\circ\\sin30^\\circ=\\boxed{\\frac{\\sqrt6+\\sqrt2}{4}}\\).</p>",
    "familj": "proc_additionsformler_15_75"
  },
  {
    "id": "1.28",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För \\(y=\\tan(2x)\\), bestäm</p><p>a) perioden<br>b) ett nollställe<br>c) de två lodräta asymptoter som ligger närmast origo<br>d) om funktionen är udda, jämn eller varken eller.</p>",
    "s": "<p>a) \\(T=\\pi/2\\).</p><p>b) Till exempel <strong>\\(x=0\\)</strong>; generellt \\(x=n\\pi/2\\).</p><p>c) \\(2x=\\pm\\pi/2\\Rightarrow\\)<strong>\\(x=\\pm\\pi/4\\)</strong>.</p><p>d) \\(\\tan(2(-x))=-\\tan(2x)\\), alltså är funktionen <strong>udda</strong>.</p>",
    "familj": "tangens_2x_e"
  },
  {
    "id": "1.29",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För vinkeln \\(v\\) gäller \\(\\sin v=\\frac35\\).</p><p>a) Bestäm \\(\\cos v\\) om \\(v\\) ligger i första kvadranten.<br>b) Bestäm \\(\\cos v\\) om \\(v\\) ligger i andra kvadranten.<br>c) Bestäm \\(\\tan v\\) i båda fallen.</p>",
    "s": "<p>Trigonometriska ettan ger \\(\\cos^2v=1-9/25=16/25\\), alltså \\(|\\cos v|=4/5\\).</p><p>a) <strong>\\(\\cos v=4/5\\)</strong>.<br>b) <strong>\\(\\cos v=-4/5\\)</strong>.<br>c) Första kvadranten: <strong>\\(\\tan v=3/4\\)</strong>. Andra kvadranten: <strong>\\(\\tan v=-3/4\\)</strong>.</p>",
    "familj": "proc_trigettan_kvadrant_2"
  },
  {
    "id": "1.30",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>För vinkeln \\(v\\) gäller</p>\n<p>\\[\n\\cos v=-\\frac35,\\qquad 90^\\circ&lt;v&lt;180^\\circ.\n\\]</p>\n<p>Bestäm exakt</p>\n<p>a) \\(\\sin2v\\)<br>\nb) \\(\\cos(v+60^\\circ)\\).</p>",
    "s": "<p>Eftersom \\(v\\) ligger i andra kvadranten är \\(\\sin v&gt;0\\). Trigonometriska ettan ger</p>\n<p>\\[\n\\sin v=\\sqrt{1-\\frac9{25}}=\\frac45.\n\\]</p>\n<p>a)</p>\n<p>\\[\n\\sin2v=2\\sin v\\cos v\n=2\\cdot\\frac45\\cdot\\left(-\\frac35\\right)\n=-\\frac{24}{25}.\n\\]</p>\n<p>b)</p>\n<p>\\[\n\\cos(v+60^\\circ)=\\cos v\\cos60^\\circ-\\sin v\\sin60^\\circ\n\\]</p>\n<p>\\[\n=-\\frac35\\cdot\\frac12-\\frac45\\cdot\\frac{\\sqrt3}{2}\n=-\\frac3{10}-\\frac{2\\sqrt3}{5}.\n\\]</p>",
    "familj": "additionsformel_exakta_varden"
  },
  {
    "id": "1.31",
    "kap": 1,
    "omr": "symmetrier_enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla med hjälp av symmetrier i enhetscirkeln.</p><p>a) \\(\\sin(\\pi-x)\\)<br>b) \\(\\cos(\\pi-x)\\)<br>c) \\(\\sin(-x)\\)<br>d) \\(\\cos(-x)\\)</p>",
    "s": "<p><strong>Metod:</strong> Tänk på var punkten hamnar i enhetscirkeln efter speglingen.</p>\n<p>a) Spegling i y-axeln ändrar inte y-koordinaten: \\(\\boxed{\\sin(\\pi-x)=\\sin x}\\).</p>\n<p>b) Samma spegling byter tecken på x-koordinaten: \\(\\boxed{\\cos(\\pi-x)=-\\cos x}\\).</p>\n<p>c) Spegling i x-axeln byter tecken på y-koordinaten: \\(\\boxed{\\sin(-x)=-\\sin x}\\).</p>\n<p>d) Cosinus är oförändrad vid samma spegling: \\(\\boxed{\\cos(-x)=\\cos x}\\).</p>",
    "familj": "proc_trig_symmetrier_1"
  },
  {
    "id": "1.32",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm största och minsta värde.</p><p>a) \\(f(x)=7+3\\sin x\\)<br>b) \\(g(x)=2-5\\cos x\\)<br>c) \\(h(x)=-4+2\\sin(3x)\\)<br>d) \\(p(x)=6\\cos(2x)-1\\)</p>",
    "s": "<p><strong>Metod:</strong> Läs av amplitud och medellinje direkt. Perioden fås från faktorn framför \\(x\\).</p><p>a) <strong>10 och 4</strong>.<br>b) <strong>7 och −3</strong>.<br>c) <strong>−2 och −6</strong>.<br>d) <strong>5 och −7</strong>.</p>",
    "familj": "proc_trigfunktion_max_min"
  },
  {
    "id": "1.33",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm det saknade trigonometriska värdet exakt.</p><p>a) \\(\\sin v=3/5\\), \\(0&lt;v&lt;\\pi/2\\). Bestäm \\(\\cos v\\).<br>b) \\(\\cos v=-5/13\\), \\(\\pi/2&lt;v&lt;\\pi\\). Bestäm \\(\\sin v\\).<br>c) \\(\\sin v=-8/17\\), \\(3\\pi/2&lt;v&lt;2\\pi\\). Bestäm \\(\\cos v\\).<br>d) \\(\\cos v=7/25\\), \\(3\\pi/2&lt;v&lt;2\\pi\\). Bestäm \\(\\sin v\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(\\sin^2v+\\cos^2v=1\\) och välj sedan tecken utifrån kvadranten.</p>\n<p>a) \\(\\cos^2v=1-9/25=16/25\\). Första kvadranten ger <strong>\\(\\cos v=4/5\\)</strong>.</p>\n<p>b) \\(\\sin^2v=1-25/169=144/169\\). Andra kvadranten ger <strong>\\(\\sin v=12/13\\)</strong>.</p>\n<p>c) \\(\\cos^2v=1-64/289=225/289\\). Fjärde kvadranten ger <strong>\\(\\cos v=15/17\\)</strong>.</p>\n<p>d) \\(\\sin^2v=1-49/625=576/625\\). Fjärde kvadranten ger <strong>\\(\\sin v=-24/25\\)</strong>.</p>",
    "familj": "trigettan_kvadranter_rutin"
  },
  {
    "id": "1.34",
    "kap": 1,
    "omr": "fasforskjutning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen visar en sinusfunktion med amplitud 2, medellinje \\(y=1\\) och period \\(2\\pi\\). Den passerar medellinjen uppåt vid \\(x=\\pi/3\\).</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"22\" x2=\"48.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"48.0\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"92.2\" y1=\"22\" x2=\"92.2\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"136.5\" y1=\"22\" x2=\"136.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"136.5\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"180.8\" y1=\"22\" x2=\"180.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"180.8\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"225.0\" y1=\"22\" x2=\"225.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"225.0\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"269.2\" y1=\"22\" x2=\"269.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"269.2\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"313.5\" y1=\"22\" x2=\"313.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"313.5\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text><line x1=\"357.8\" y1=\"22\" x2=\"357.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"357.8\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">6</text><line x1=\"402.0\" y1=\"22\" x2=\"402.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"402.0\" y=\"179.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">7</text><line x1=\"48\" y1=\"232.0\" x2=\"402\" y2=\"232.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"84.2\" y=\"236.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"48\" y1=\"197.0\" x2=\"402\" y2=\"197.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"84.2\" y=\"201.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"48\" y1=\"162.0\" x2=\"402\" y2=\"162.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"48\" y1=\"127.0\" x2=\"402\" y2=\"127.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"84.2\" y=\"131.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"48\" y1=\"92.0\" x2=\"402\" y2=\"92.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"84.2\" y=\"96.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"48\" y1=\"57.0\" x2=\"402\" y2=\"57.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"84.2\" y=\"61.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"48\" y1=\"22.0\" x2=\"402\" y2=\"22.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"84.2\" y=\"26.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><polyline points=\"48.0,189.2 54.6,193.3 61.3,195.9 67.9,197.0 74.5,196.5 81.2,194.4 87.8,190.8 94.5,185.8 101.1,179.5 107.7,171.9 114.4,163.4 121.0,154.1 127.6,144.1 134.3,133.8 140.9,123.3 147.6,112.9 154.2,102.8 160.8,93.3 167.5,84.5 174.1,76.6 180.8,69.9 187.4,64.5 194.0,60.5 200.7,58.0 207.3,57.0 213.9,57.6 220.6,59.8 227.2,63.4 233.8,68.5 240.5,74.9 247.1,82.5 253.8,91.1 260.4,100.5 267.0,110.4 273.7,120.8 280.3,131.3 286.9,141.7 293.6,151.7 300.2,161.2 306.9,170.0 313.5,177.8 320.1,184.4 326.8,189.7 333.4,193.7 340.1,196.1 346.7,197.0 353.3,196.3 360.0,194.1 366.6,190.3 373.2,185.1 379.9,178.7 386.5,171.0 393.1,162.4 399.8,153.0 406.4,143.0 413.1,132.6 419.7,122.1 426.3,111.8\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"394\" y=\"38\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y=f(x)</text></svg></span><p>Bestäm en möjlig formel för funktionen.</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först period och medellinje. Använd sedan var kurvan passerar medellinjen eller har ett extremvärde för att hitta fasförskjutningen.</p><p>En sinuskurva passerar sin medellinje uppåt när argumentet är 0. Fasförskjutningen är därför \\(\\pi/3\\).</p><p><strong>\\(f(x)=2\\sin(x-\\pi/3)+1\\)</strong>.</p>",
    "familj": "fas_graf"
  },
  {
    "id": "1.35",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt med additions- eller subtraktionsformler.</p><p>a) \\(\\sin75^\\circ\\)<br>b) \\(\\cos75^\\circ\\)<br>c) \\(\\sin15^\\circ\\)<br>d) \\(\\cos15^\\circ\\)</p>",
    "s": "<p>a) \\(\\sin(45^\\circ+30^\\circ)=\\frac{\\sqrt6+\\sqrt2}{4}\\).</p><p>b) \\(\\cos(45^\\circ+30^\\circ)=\\frac{\\sqrt6-\\sqrt2}{4}\\).</p><p>c) \\(\\sin(45^\\circ-30^\\circ)=\\frac{\\sqrt6-\\sqrt2}{4}\\).</p><p>d) \\(\\cos(45^\\circ-30^\\circ)=\\frac{\\sqrt6+\\sqrt2}{4}\\).</p>",
    "familj": "proc_additionsformler_exakt_2"
  },
  {
    "id": "1.36",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm exakt med hjälp av additions- eller subtraktionsformler.</p><p>a) \\(\\sin75^\\circ\\)<br>b) \\(\\cos15^\\circ\\)<br>c) \\(\\cos105^\\circ\\)</p>",
    "s": "<p>a) \\(\\sin(45^\\circ+30^\\circ)=\\frac{\\sqrt6+\\sqrt2}{4}\\).</p><p>b) \\(\\cos(45^\\circ-30^\\circ)=\\frac{\\sqrt6+\\sqrt2}{4}\\).</p><p>c) \\(\\cos(60^\\circ+45^\\circ)=\\frac{\\sqrt2-\\sqrt6}{4}\\).</p>",
    "familj": "addition_exakta_15_75_105"
  },
  {
    "id": "1.37",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En cirkelbåge är 7,5 cm lång i en cirkel med radien 5,0 cm.</p><span class=\"fig\"><svg width=\"390\" height=\"245\" viewBox=\"0 0 390 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cirkelsektor med radie och båglängd\"><rect x=\"1\" y=\"1\" width=\"388\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"120\" y1=\"190\" x2=\"250\" y2=\"190\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"120\" y1=\"190\" x2=\"129.2\" y2=\"60.3\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M 250 190 A 130 130 0 0 0 129.2 60.3\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"4\"/><path d=\"M 154 190 A 34 34 0 0 0 122.4 156.1\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2\"/><text x=\"162\" y=\"172\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#268FA3\">θ</text><text x=\"185\" y=\"210\" font-family=\"sans-serif\" font-size=\"12\">5 cm</text><text x=\"204.6\" y=\"105.2\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">båge 7,5 cm</text></svg></span><p>a) Bestäm medelpunktsvinkeln i radianer.<br>b) Omvandla vinkeln till grader. Svara med en decimal.</p>",
    "s": "<p><strong>Metod:</strong> I radianmått gäller \\(s=r\\theta\\).</p><p>a) \\(\\theta=s/r=7,5/5,0=\\boxed{1,5}\\) rad.</p><p>b) \\(1,5\\cdot180/\\pi\\approx\\boxed{85,9^\\circ}\\).</p>",
    "familj": "radian_baglangd_svg"
  },
  {
    "id": "1.38",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna exakt med additions- eller subtraktionsformler.</p><p>a) \\(\\sin 75^\\circ\\)<br>b) \\(\\cos 15^\\circ\\)<br>c) \\(\\cos 105^\\circ\\)</p>",
    "s": "<p>a) \\(\\sin(45^\\circ+30^\\circ)=\\frac{\\sqrt6+\\sqrt2}{4}\\).</p><p>b) \\(\\cos(45^\\circ-30^\\circ)=\\frac{\\sqrt6+\\sqrt2}{4}\\).</p><p>c) \\(\\cos(60^\\circ+45^\\circ)=\\frac{\\sqrt2-\\sqrt6}{4}\\).</p>",
    "familj": "addition_rutin_exakt"
  },
  {
    "id": "1.39",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Visa med additions- och subtraktionsformler att</p><p>\\[\\sin\\left(x+\\frac\\pi3\\right)+\\sin\\left(x-\\frac\\pi3\\right)=\\sin x.\\]</p>",
    "s": "<p>Utveckla båda sinusuttrycken:</p><p>\\[\\sin x\\cos\\frac\\pi3+\\cos x\\sin\\frac\\pi3+\\sin x\\cos\\frac\\pi3-\\cos x\\sin\\frac\\pi3.\\]</p><p>Cosinustermerna tar ut varandra och \\(2\\cos(\\pi/3)=1\\). Därför återstår \\(\\boxed{\\sin x}\\).</p>",
    "familj": "identitet_addition_symmetri"
  },
  {
    "id": "1.40",
    "kap": 1,
    "omr": "fasforskjutning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beskriv fasförskjutningen jämfört med \\(y=\\sin x\\).</p><p>a) \\(y=\\sin(x-\\frac\\pi3)\\)<br>b) \\(y=\\sin(x+\\frac\\pi4)\\)<br>c) \\(y=2\\cos(x-\\frac\\pi6)\\)<br>d) \\(y=3\\sin(2x-\\pi)\\)</p>",
    "s": "<p>a) <strong>\\(\\frac\\pi3\\) åt höger</strong>.<br>b) <strong>\\(\\frac\\pi4\\) åt vänster</strong>.<br>c) <strong>\\(\\frac\\pi6\\) åt höger</strong> (för cosinuskurvan).<br>d) \\(2x-\\pi=2(x-\\frac\\pi2)\\), alltså <strong>\\(\\frac\\pi2\\) åt höger</strong>.</p>",
    "familj": "proc_fasforskjutning_las_av"
  },
  {
    "id": "1.41",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Utveckla.</p><p>a) \\(\\sin(x+\\frac{\\pi}{3})\\)<br>b) \\(\\cos(x-\\frac{\\pi}{6})\\)<br>c) \\(\\sin(x-\\frac{\\pi}{4})\\)<br>d) \\(\\cos(x+\\frac{\\pi}{4})\\)</p>",
    "s": "<p>a) <strong>\\(\\frac12\\sin x+\\frac{\\sqrt3}{2}\\cos x\\)</strong>.</p><p>b) <strong>\\(\\frac{\\sqrt3}{2}\\cos x+\\frac12\\sin x\\)</strong>.</p><p>c) <strong>\\(\\frac{\\sqrt2}{2}(\\sin x-\\cos x)\\)</strong>.</p><p>d) <strong>\\(\\frac{\\sqrt2}{2}(\\cos x-\\sin x)\\)</strong>.</p>",
    "familj": "proc_additionsformler_utveckla_2"
  },
  {
    "id": "1.42",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Omvandla.</p><p>a) \\(30^\\circ\\) till radianer.<br>b) \\(225^\\circ\\) till radianer.<br>c) \\(\\frac{7\\pi}{6}\\) rad till grader.<br>d) \\(\\frac{11\\pi}{4}\\) rad till grader.</p>",
    "s": "<p><strong>Metod:</strong> Använd sambandet \\(180^\\circ=\\pi\\) rad.</p>\n<p>a) \\(30^\\circ\\cdot\\frac{\\pi}{180^\\circ}=\\boxed{\\pi/6}\\).</p>\n<p>b) \\(225^\\circ\\cdot\\frac{\\pi}{180^\\circ}=\\boxed{5\\pi/4}\\).</p>\n<p>c) \\(\\frac{7\\pi}{6}\\cdot\\frac{180^\\circ}{\\pi}=\\boxed{210^\\circ}\\).</p>\n<p>d) \\(\\frac{11\\pi}{4}\\cdot\\frac{180^\\circ}{\\pi}=\\boxed{495^\\circ}\\).</p>",
    "familj": "proc_radian_grad_omvandling"
  },
  {
    "id": "1.43",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En temperaturmodell antas vara en sinusmodell med perioden 24 h. Under ett dygn uppmäts högsta temperaturen 22 °C och lägsta 10 °C. Klockan 06.00 är temperaturen 16 °C och stigande.</p><p>a) Bestäm en sinusmodell som stämmer med uppgifterna.<br>b) En ytterligare mätning visar 20 °C klockan 09.00. Avgör om den mätningen är förenlig med modellen och motivera.</p>",
    "s": "<p>Amplituden är 6, medellinjen 16 och \\(k=2\\pi/24=\\pi/12\\). Vid \\(t=6\\) ska sinusdelen vara 0 och växande, alltså kan argumentet vara 0 där:</p><p>\\[\\boxed{T(t)=16+6\\sin\\left(\\frac\\pi{12}(t-6)\\right)}.\\]</p><p>Vid \\(t=9\\):</p><p>\\[T(9)=16+6\\sin(\\pi/4)=16+3\\sqrt2\\approx20,24.\\]</p><p>Mätningen 20 °C är alltså <strong>inte exakt förenlig</strong> med den här modellen (avvikelsen är cirka 0,24 °C), även om den kan vara rimlig med mätosäkerhet.</p>",
    "familj": "trigmodell_konsistens_a"
  },
  {
    "id": "1.44",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Skriv uttrycket</p><p>\\[5\\sin x+12\\cos x\\]</p><p>på formen \\(R\\sin(x+\\varphi)\\), där \\(R&gt;0\\) och \\(0&lt;\\varphi&lt;\\pi/2\\). Bestäm därefter uttryckets största och minsta värde.</p>",
    "s": "<p>Jämför</p><p>\\[R\\sin(x+\\varphi)=R\\cos\\varphi\\sin x+R\\sin\\varphi\\cos x.\\]</p><p>Därför \\(R\\cos\\varphi=5\\) och \\(R\\sin\\varphi=12\\). Då</p><p>\\[R=\\sqrt{5^2+12^2}=13,\\qquad \\tan\\varphi=12/5.\\]</p><p>Alltså <strong>\\(13\\sin(x+\\arctan(12/5))\\)</strong>. Största värdet är \\(\\boxed{13}\\) och minsta \\(\\boxed{-13}\\).</p>",
    "familj": "sin_cos_5_12_kombination"
  },
  {
    "id": "1.45",
    "kap": 1,
    "omr": "additionsformler",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm exakt med additions- eller subtraktionsformler.</p><p>a) \\(\\sin75^\\circ\\)<br>b) \\(\\cos105^\\circ\\)<br>c) \\(\\sin15^\\circ\\)</p>",
    "s": "<p><strong>Metod:</strong> Skriv vinklarna som summor eller differenser av \\(30^\\circ\\), \\(45^\\circ\\) och \\(60^\\circ\\).</p>\n<p>a) \\(75^\\circ=45^\\circ+30^\\circ\\):</p><p>\\[\\sin75^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12=\\boxed{\\frac{\\sqrt6+\\sqrt2}{4}}.\\]</p>\n<p>b) \\(105^\\circ=60^\\circ+45^\\circ\\):</p><p>\\[\\cos105^\\circ=\\frac12\\frac{\\sqrt2}{2}-\\frac{\\sqrt3}{2}\\frac{\\sqrt2}{2}=\\boxed{\\frac{\\sqrt2-\\sqrt6}{4}}.\\]</p>\n<p>c) \\(15^\\circ=45^\\circ-30^\\circ\\):</p><p>\\[\\sin15^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}-\\frac{\\sqrt2}{2}\\frac12=\\boxed{\\frac{\\sqrt6-\\sqrt2}{4}}.\\]</p>",
    "familj": "additionsformler_exakta_varden"
  },
  {
    "id": "1.46",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>Visa algebraiskt att</p><p>\\[\\frac{\\sin x}{1+\\cos x}=\\frac{1-\\cos x}{\\sin x}\\]</p><p>för alla \\(x\\) där båda leden är definierade. Förklara även varför man inte får säga att identiteten gäller för alla reella \\(x\\).</p>",
    "s": "<p>Utgå från vänsterledet. Multiplicera täljare och nämnare med \\(1-\\cos x\\):</p>\n<p>\\[\\frac{\\sin x}{1+\\cos x}\\cdot\\frac{1-\\cos x}{1-\\cos x}\n=\\frac{\\sin x(1-\\cos x)}{1-\\cos^2x}.\\]</p>\n<p>Använd trigonometriska ettan, \\(1-\\cos^2x=\\sin^2x\\):</p>\n<p>\\[\\frac{\\sin x(1-\\cos x)}{\\sin^2x}=\\frac{1-\\cos x}{\\sin x}.\\]</p>\n<p>Då är vänsterled och högerled lika.</p>\n<p><strong>Definitionsvillkor:</strong> I den ursprungliga likheten måste både \\(1+\\cos x\\ne0\\) och \\(\\sin x\\ne0\\). När båda leden ska vara definierade innebär det i praktiken \\(x\\ne n\\pi\\), \\(n\\in\\mathbb Z\\). Därför får identiteten inte påstås gälla för alla reella \\(x\\).</p>",
    "familj": "identitet_domän_a"
  },
  {
    "id": "1.47",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla med formler för dubbla vinkeln.</p><p>a) \\(2\\sin x\\cos x\\)<br>b) \\(\\cos^2x-\\sin^2x\\)<br>c) \\(2\\cos^2x-1\\)<br>d) \\(1-2\\sin^2x\\)</p>",
    "s": "<p><strong>Metod:</strong> Matcha uttrycket mot formlerna \\(\\sin2x=2\\sin x\\cos x\\) och \\(\\cos2x=\\cos^2x-\\sin^2x=1-2\\sin^2x=2\\cos^2x-1\\).</p><p>Alla uttryck är standardformer för dubbla vinkeln.</p><p>a) <strong>\\(\\sin2x\\)</strong>.<br>b) <strong>\\(\\cos2x\\)</strong>.<br>c) <strong>\\(\\cos2x\\)</strong>.<br>d) <strong>\\(\\cos2x\\)</strong>.</p>",
    "familj": "proc_dubbelvinkel_standard_2"
  },
  {
    "id": "1.48",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös ekvationen</p><p>\\[\\sin2x+\\sin x=0\\]</p><p>för \\(0\\le x&lt;2\\pi\\). Lös algebraiskt.</p>",
    "s": "<p>Använd \\(\\sin2x=2\\sin x\\cos x\\):</p><p>\\[2\\sin x\\cos x+\\sin x=0.\\]</p><p>Faktorisera:</p><p>\\[\\sin x(2\\cos x+1)=0.\\]</p>\n<p>Alltså antingen \\(\\sin x=0\\), vilket ger \\(x=0,\\pi\\), eller \\(\\cos x=-1/2\\), vilket ger \\(x=2\\pi/3,4\\pi/3\\).</p>\n<p><strong>\\(x=0,\\;2\\pi/3,\\;\\pi,\\;4\\pi/3\\).</strong></p>",
    "familj": "trigekv_faktorisering_sin2x"
  },
  {
    "id": "1.49",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En periodisk rörelse varierar mellan 1,5 m och 5,5 m. Tiden mellan två på varandra följande maximipunkter är 8,0 s. Vid \\(t=0\\) passerar rörelsen medellinjen uppåt.</p><p>Bestäm en sinusmodell \\(h(t)=A\\sin(kt)+B\\).</p>",
    "s": "<p><strong>Metod:</strong> Bestäm amplitud, medellinje och period först. Använd sedan en tydlig punkt i grafen för att bestämma fasen.</p><p>Amplituden är \\(A=(5,5-1,5)/2=2\\). Medellinjen är \\(B=(5,5+1,5)/2=3,5\\).</p><p>Perioden 8 ger \\(k=2\\pi/8=\\pi/4\\). Ingen fasförskjutning behövs.</p><p><strong>\\(h(t)=2\\sin(\\pi t/4)+3,5\\)</strong>.</p>",
    "familj": "trigmodell_bestam"
  },
  {
    "id": "1.50",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Skriv \\(3\\sin x+4\\cos x\\) på formen \\(R\\sin(x+v)\\), där \\(R>0\\) och \\(0&lt;v&lt;\\pi/2\\).</p>",
    "s": "<p><strong>Metod:</strong> Jämför koefficienterna med utvecklingen av \\(R\\sin(x+v)\\) eller \\(R\\cos(x-v)\\). Då får du både amplitud och fas.</p><p>\\(R\\cos v=3\\) och \\(R\\sin v=4\\). Därför \\(R=5\\) och \\(\\tan v=4/3\\).</p><p><strong>\\(3\\sin x+4\\cos x=5\\sin(x+\\arctan(4/3))\\)</strong>.</p>",
    "familj": "asin_bcos_omskrivning"
  },
  {
    "id": "1.51",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(f(x)=\\tan(2x)\\), bestäm</p><p>a) perioden<br>b) två lodräta asymptoter närmast origo<br>c) \\(f(\\pi/8)\\).</p>",
    "s": "<p>a) Tangens har grundperiod \\(\\pi\\), alltså blir perioden \\(\\pi/2\\).</p><p>b) \\(2x=\\pi/2+n\\pi\\Rightarrow x=\\pi/4+n\\pi/2\\). Närmast origo: <strong>\\(x=\\pm\\pi/4\\)</strong>.</p><p>c) \\(f(\\pi/8)=\\tan(\\pi/4)=\\)<strong>1</strong>.</p>",
    "familj": "tangens_period_asymptot"
  },
  {
    "id": "1.52",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Omvandla.</p><p>a) \\(30^\\circ\\) till radianer<br>b) \\(135^\\circ\\) till radianer<br>c) \\(5\\pi/6\\) rad till grader<br>d) \\(7\\pi/4\\) rad till grader</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(180^\\circ=\\pi\\) rad.</p><p>a) \\(\\pi/6\\)<br>b) \\(3\\pi/4\\)<br>c) \\(150^\\circ\\)<br>d) \\(315^\\circ\\)</p>",
    "familj": "radian_rutin_flera"
  },
  {
    "id": "1.53",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Det gäller att \\(\\sin x=\\frac{5}{13}\\) och \\(\\cos x=\\frac{12}{13}\\).</p><p>Bestäm exakt</p><p>a) \\(\\sin2x\\)<br>b) \\(\\cos2x\\)<br>c) \\(\\tan2x\\).</p>",
    "s": "<p>a) \\(\\sin2x=2\\sin x\\cos x=2\\cdot\\frac5{13}\\cdot\\frac{12}{13}=\\boxed{\\frac{120}{169}}\\).</p><p>b) \\(\\cos2x=\\cos^2x-\\sin^2x=\\frac{144-25}{169}=\\boxed{\\frac{119}{169}}\\).</p><p>c) \\(\\tan2x=\\frac{\\sin2x}{\\cos2x}=\\boxed{\\frac{120}{119}}\\).</p>",
    "familj": "proc_dubbelvinkel_berakna_2"
  },
  {
    "id": "1.54",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Grafen visar en sinusfunktion.</p><span class=\"fig\"><svg width=\"470\" height=\"270\" viewBox=\"0 0 470 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Periodisk graf\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"103.4\" y1=\"25\" x2=\"103.4\" y2=\"232\" stroke=\"#E8ECEF\"/><line x1=\"151.8\" y1=\"25\" x2=\"151.8\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"151.8\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"200.1\" y1=\"25\" x2=\"200.1\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"200.1\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"248.5\" y1=\"25\" x2=\"248.5\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"248.5\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"296.9\" y1=\"25\" x2=\"296.9\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"296.9\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"345.2\" y1=\"25\" x2=\"345.2\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"345.2\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"393.6\" y1=\"25\" x2=\"393.6\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"393.6\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"55\" y1=\"206.1\" x2=\"442\" y2=\"206.1\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"210.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"55\" y1=\"180.2\" x2=\"442\" y2=\"180.2\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"154.4\" x2=\"442\" y2=\"154.4\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"158.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"128.5\" x2=\"442\" y2=\"128.5\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"132.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"102.6\" x2=\"442\" y2=\"102.6\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"106.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"55\" y1=\"76.8\" x2=\"442\" y2=\"76.8\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"80.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"50.9\" x2=\"442\" y2=\"50.9\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"54.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"55\" y1=\"180.2\" x2=\"442\" y2=\"180.2\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"103.4\" y1=\"25\" x2=\"103.4\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55.0,128.5 56.8,132.9 58.5,137.3 60.3,141.7 62.0,146.1 63.8,150.4 65.6,154.6 67.3,158.7 69.1,162.7 70.8,166.7 72.6,170.5 74.3,174.1 76.1,177.6 77.9,181.0 79.6,184.2 81.4,187.2 83.1,190.0 84.9,192.6 86.7,195.0 88.4,197.2 90.2,199.1 91.9,200.8 93.7,202.3 95.5,203.6 97.2,204.6 99.0,205.3 100.7,205.8 102.5,206.1 104.3,206.1 106.0,205.8 107.8,205.3 109.5,204.6 111.3,203.6 113.0,202.3 114.8,200.8 116.6,199.1 118.3,197.2 120.1,195.0 121.8,192.6 123.6,190.0 125.4,187.2 127.1,184.2 128.9,181.0 130.6,177.6 132.4,174.1 134.2,170.5 135.9,166.7 137.7,162.7 139.4,158.7 141.2,154.6 143.0,150.4 144.7,146.1 146.5,141.7 148.2,137.3 150.0,132.9 151.8,128.5 153.5,124.1 155.3,119.7 157.0,115.3 158.8,110.9 160.5,106.6 162.3,102.4 164.1,98.3 165.8,94.3 167.6,90.3 169.3,86.5 171.1,82.9 172.9,79.4 174.6,76.0 176.4,72.8 178.1,69.8 179.9,67.0 181.7,64.4 183.4,62.0 185.2,59.8 186.9,57.9 188.7,56.2 190.4,54.7 192.2,53.4 194.0,52.4 195.7,51.7 197.5,51.2 199.2,50.9 201.0,50.9 202.8,51.2 204.5,51.7 206.3,52.4 208.0,53.4 209.8,54.7 211.6,56.2 213.3,57.9 215.1,59.8 216.8,62.0 218.6,64.4 220.4,67.0 222.1,69.8 223.9,72.8 225.6,76.0 227.4,79.4 229.2,82.9 230.9,86.5 232.7,90.3 234.4,94.3 236.2,98.3 237.9,102.4 239.7,106.6 241.5,110.9 243.2,115.3 245.0,119.7 246.7,124.1 248.5,128.5 250.3,132.9 252.0,137.3 253.8,141.7 255.5,146.1 257.3,150.4 259.1,154.6 260.8,158.7 262.6,162.7 264.3,166.7 266.1,170.5 267.9,174.1 269.6,177.6 271.4,181.0 273.1,184.2 274.9,187.2 276.6,190.0 278.4,192.6 280.2,195.0 281.9,197.2 283.7,199.1 285.4,200.8 287.2,202.3 289.0,203.6 290.7,204.6 292.5,205.3 294.2,205.8 296.0,206.1 297.8,206.1 299.5,205.8 301.3,205.3 303.0,204.6 304.8,203.6 306.6,202.3 308.3,200.8 310.1,199.1 311.8,197.2 313.6,195.0 315.3,192.6 317.1,190.0 318.9,187.2 320.6,184.2 322.4,181.0 324.1,177.6 325.9,174.1 327.7,170.5 329.4,166.7 331.2,162.7 332.9,158.7 334.7,154.6 336.5,150.4 338.2,146.1 340.0,141.7 341.7,137.3 343.5,132.9 345.2,128.5 347.0,124.1 348.8,119.7 350.5,115.3 352.3,110.9 354.0,106.6 355.8,102.4 357.6,98.3 359.3,94.3 361.1,90.3 362.8,86.5 364.6,82.9 366.4,79.4 368.1,76.0 369.9,72.8 371.6,69.8 373.4,67.0 375.2,64.4 376.9,62.0 378.7,59.8 380.4,57.9 382.2,56.2 383.9,54.7 385.7,53.4 387.5,52.4 389.2,51.7 391.0,51.2 392.7,50.9 394.5,50.9 396.3,51.2 398.0,51.7 399.8,52.4 401.5,53.4 403.3,54.7 405.1,56.2 406.8,57.9 408.6,59.8 410.3,62.0 412.1,64.4 413.9,67.0 415.6,69.8 417.4,72.8 419.1,76.0 420.9,79.4 422.6,82.9 424.4,86.5 426.2,90.3 427.9,94.3 429.7,98.3 431.4,102.4 433.2,106.6 435.0,110.9 436.7,115.3 438.5,119.7 440.2,124.1 442.0,128.5\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"411.0\" y=\"55.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">f</text><circle cx=\"151.8\" cy=\"128.5\" r=\"4.5\" fill=\"#B43123\"/><text x=\"440\" y=\"172.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"111.4\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>Bestäm funktionens a) amplitud, b) medellinje och c) period.</p>",
    "s": "<p>Maximivärdet är 5 och minimivärdet är −1.</p><p>a) Amplituden är \\((5-(-1))/2=\\boxed{3}\\).</p><p>b) Medellinjen är \\((5+(-1))/2=\\boxed{y=2}\\).</p><p>c) Avståndet mellan två motsvarande lägen är \\(\\boxed{4}\\).</p>",
    "familj": "triggraf_avlasning_amp_period_svg"
  },
  {
    "id": "1.55",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En strålkastare står 12 m från en rak vägg. Strålen roterar och träffpunkten ligger \\(x\\) meter från punkten närmast strålkastaren.</p><span class=\"fig\"><svg width=\"470\" height=\"270\" viewBox=\"0 0 470 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Strålkastare på vinkelrätt avstånd från en vägg\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"80\" y1=\"60\" x2=\"400\" y2=\"60\" stroke=\"#2B2527\" stroke-width=\"5\"/>\n<text x=\"390\" y=\"48\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\">vägg</text>\n<circle cx=\"155\" cy=\"215\" r=\"6\" fill=\"#2B2527\"/>\n<text x=\"103\" y=\"232\" font-family=\"sans-serif\" font-size=\"11\">strålkastare</text>\n<line x1=\"155\" y1=\"215\" x2=\"155\" y2=\"60\" stroke=\"#5C575E\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\"/>\n<line x1=\"155\" y1=\"215\" x2=\"310\" y2=\"60\" stroke=\"#B43123\" stroke-width=\"3\"/>\n<circle cx=\"310\" cy=\"60\" r=\"5\" fill=\"#B43123\"/>\n<path d=\"M155 175 A40 40 0 0 1 183 187\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2\"/>\n<text x=\"176\" y=\"170\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">v</text>\n<line x1=\"135\" y1=\"60\" x2=\"135\" y2=\"215\" stroke=\"#268FA3\" stroke-width=\"1.4\"/>\n<line x1=\"129\" y1=\"60\" x2=\"141\" y2=\"60\" stroke=\"#268FA3\" stroke-width=\"1.4\"/>\n<line x1=\"129\" y1=\"215\" x2=\"141\" y2=\"215\" stroke=\"#268FA3\" stroke-width=\"1.4\"/>\n<text x=\"126\" y=\"142\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">12 m</text>\n<line x1=\"155\" y1=\"82\" x2=\"310\" y2=\"82\" stroke=\"#268FA3\" stroke-width=\"1.4\"/>\n<line x1=\"155\" y1=\"76\" x2=\"155\" y2=\"88\" stroke=\"#268FA3\" stroke-width=\"1.4\"/>\n<line x1=\"310\" y1=\"76\" x2=\"310\" y2=\"88\" stroke=\"#268FA3\" stroke-width=\"1.4\"/>\n<text x=\"232\" y=\"101\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">x</text></svg></span><p>a) Visa att \\(x=12\\tan v\\).<br>b) Bestäm \\(v\\) när träffpunkten ligger 20 m åt sidan. Svara i grader.</p>",
    "s": "<p><strong>Metod:</strong> Översätt uppgifterna i texten till modellens amplitud, medellinje, period och fas. Sätt sedan in det värde som efterfrågas.</p><p>a) I den rätvinkliga triangeln är \\(\\tan v=x/12\\), alltså \\(\\boxed{x=12\\tan v}\\).</p><p>b) \\(\\tan v=20/12=5/3\\), så \\(v=\\arctan(5/3)\\approx\\boxed{59,0^\\circ}\\).</p>",
    "familj": "stralkastare_tangensmodell_svg"
  },
  {
    "id": "1.56",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Använd trigonometriska ettan.</p><p>a) Bestäm \\(\\cos x\\) om \\(\\sin x=\\frac35\\) och \\(0&lt;x&lt;\\frac\\pi2\\).<br>b) Bestäm \\(\\sin x\\) om \\(\\cos x=-\\frac5{13}\\) och \\(\\frac\\pi2&lt;x&lt;\\pi\\).<br>c) Förenkla \\(1-\\sin^2x\\).<br>d) Förenkla \\(\\frac{1-\\sin^2x}{\\cos x}\\) där uttrycket är definierat.</p>",
    "s": "<p>a) \\(\\cos^2x=1-9/25=16/25\\). Första kvadranten ger <strong>\\(\\cos x=4/5\\)</strong>.</p><p>b) \\(\\sin^2x=1-25/169=144/169\\). Andra kvadranten ger <strong>\\(\\sin x=12/13\\)</strong>.</p><p>c) <strong>\\(\\cos^2x\\)</strong>.</p><p>d) \\(\\cos^2x/\\cos x=\\)<strong>\\(\\cos x\\)</strong>.</p>",
    "familj": "trigettan_rutinpaket"
  },
  {
    "id": "1.57",
    "kap": 1,
    "omr": "symmetrier_enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Använd enhetscirkeln och tecknen i de fyra kvadranterna.</p><span class=\"fig\"><svg width=\"440\" height=\"250\" viewBox=\"0 0 440 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Enhetscirkel indelad i fyra kvadranter\"><rect x=\"1\" y=\"1\" width=\"438\" height=\"248\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"45\" y1=\"125\" x2=\"395\" y2=\"125\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"230\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"220\" cy=\"125\" r=\"82\" fill=\"#F7FAFB\" stroke=\"#2B2527\" stroke-width=\"2\"/><text x=\"285\" y=\"70\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#268FA3\">I</text><text x=\"153\" y=\"70\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#268FA3\">II</text><text x=\"150\" y=\"185\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#268FA3\">III</text><text x=\"285\" y=\"185\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#268FA3\">IV</text><text x=\"402\" y=\"120\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"228\" y=\"20\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>Bestäm tecknet på</p><p>a) \\(\\sin140^\\circ\\)<br>b) \\(\\cos220^\\circ\\)<br>c) \\(\\tan310^\\circ\\)<br>d) \\(\\sin(-40^\\circ)\\).</p>",
    "s": "<p>a) 140° ligger i II: <strong>positivt</strong>.</p><p>b) 220° ligger i III: <strong>negativt</strong>.</p><p>c) 310° ligger i IV: sinus negativ och cosinus positiv, alltså <strong>negativt</strong>.</p><p>d) Sinus är udda: \\(\\sin(-40^\\circ)=-\\sin40^\\circ\\), alltså <strong>negativt</strong>.</p>",
    "familj": "kvadrant_tecken_e"
  },
  {
    "id": "1.58",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Förenkla med formler för dubbla vinkeln.</p><p>a) \\(2\\sin x\\cos x\\)<br>b) \\(2\\cos^2x-1\\)<br>c) \\(1-2\\sin^2x\\)</p>",
    "s": "<p><strong>Metod:</strong> Matcha uttrycket mot formlerna \\(\\sin2x=2\\sin x\\cos x\\) och \\(\\cos2x=\\cos^2x-\\sin^2x=1-2\\sin^2x=2\\cos^2x-1\\).</p><p>a) <strong>\\(\\sin2x\\)</strong><br>b) <strong>\\(\\cos2x\\)</strong><br>c) <strong>\\(\\cos2x\\)</strong></p>",
    "familj": "dubbelvinkel_rutin"
  },
  {
    "id": "1.59",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\).</p><p>a) \\(\\sin x=\\frac{\\sqrt3}{2}\\)<br>b) \\(\\cos x=-\\frac12\\)<br>c) \\(\\tan x=\\sqrt3\\)<br>d) \\(\\sin x=-1\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm referensvinkeln och välj de kvadranter där funktionen har rätt tecken.</p><p>a) <strong>\\(x=60^\\circ,120^\\circ\\)</strong>.<br>b) <strong>\\(x=120^\\circ,240^\\circ\\)</strong>.<br>c) <strong>\\(x=60^\\circ,240^\\circ\\)</strong>.<br>d) <strong>\\(x=270^\\circ\\)</strong>.</p>",
    "familj": "proc_trigekv_grader_standard_3"
  },
  {
    "id": "1.60",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Punkterna A, B och C ligger på enhetscirkeln och motsvarar vinklarna \\(5\\pi/6\\), \\(4\\pi/3\\) respektive \\(7\\pi/4\\).</p><span class=\"fig\"><svg width=\"390\" height=\"300\" viewBox=\"0 0 390 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Enhetscirkel med markerade punkter\"><rect x=\"1\" y=\"1\" width=\"388\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><circle cx=\"195\" cy=\"150\" r=\"100\" fill=\"#F7FAFB\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"45\" y1=\"150\" x2=\"345\" y2=\"150\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"195\" y1=\"35\" x2=\"195\" y2=\"265\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"195\" y1=\"150\" x2=\"108.4\" y2=\"100.0\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"108.4\" cy=\"100.0\" r=\"5\" fill=\"#B43123\"/><text x=\"115.4\" y=\"93.0\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">A</text><line x1=\"195\" y1=\"150\" x2=\"145.0\" y2=\"236.6\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"145.0\" cy=\"236.6\" r=\"5\" fill=\"#B43123\"/><text x=\"152.0\" y=\"229.6\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">B</text><line x1=\"195\" y1=\"150\" x2=\"265.7\" y2=\"220.7\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"265.7\" cy=\"220.7\" r=\"5\" fill=\"#B43123\"/><text x=\"272.7\" y=\"213.7\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">C</text><text x=\"334\" y=\"141\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"204\" y=\"47\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>Bestäm exakt koordinaterna för A, B och C.</p>",
    "s": "<p>På enhetscirkeln har punkten vid vinkeln \\(v\\) koordinaterna \\((\\cos v,\\sin v)\\).</p><p><strong>A:</strong> \\((-\\sqrt3/2,\\,1/2)\\)<br><strong>B:</strong> \\((-1/2,\\,-\\sqrt3/2)\\)<br><strong>C:</strong> \\((\\sqrt2/2,\\,-\\sqrt2/2)\\).</p>",
    "familj": "enhetscirkel_tre_kvadranter_svg"
  },
  {
    "id": "1.61",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Visa algebraiskt att</p>\n<p>\\[\n\\tan\\frac v2=\\frac{\\sin v}{1+\\cos v}\n\\]</p>\n<p>för alla \\(v\\) där båda leden är definierade.</p>",
    "s": "<p>Utgå från högerledet och använd formlerna för dubbla vinkeln:</p>\n<p>\\[\n\\sin v=2\\sin\\frac v2\\cos\\frac v2\n\\]</p>\n<p>och</p>\n<p>\\[\n1+\\cos v=1+\\left(2\\cos^2\\frac v2-1\\right)\n=2\\cos^2\\frac v2.\n\\]</p>\n<p>Då</p>\n<p>\\[\n\\frac{\\sin v}{1+\\cos v}\n=\n\\frac{2\\sin\\frac v2\\cos\\frac v2}{2\\cos^2\\frac v2}\n=\n\\frac{\\sin\\frac v2}{\\cos\\frac v2}\n=\n\\tan\\frac v2.\n\\]</p>\n<p><strong>Identiteten är visad.</strong></p>",
    "familj": "kallmaterial_halvvinkel_bevis"
  },
  {
    "id": "1.62",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Lös algebraiskt.</p><p>a) \\(2\\sin x\\cos x=0\\)<br>b) \\(\\sin^2x=\\frac34\\)<br>c) \\(2\\cos^2x-1=0\\)<br>d) \\(\\sin x(2\\cos x-1)=0\\)</p><p>Ange alla lösningar i grader.</p>",
    "s": "<p>a) \\(\\sin x=0\\) eller \\(\\cos x=0\\): <strong>\\(x=90^\\circ n\\)</strong>.</p><p>b) \\(\\sin x=\\pm\\frac{\\sqrt3}{2}\\): <strong>\\(x=60^\\circ+180^\\circ n\\) eller \\(x=120^\\circ+180^\\circ n\\)</strong>.</p><p>c) \\(\\cos x=\\pm\\frac{\\sqrt2}{2}\\): <strong>\\(x=45^\\circ+90^\\circ n\\)</strong>.</p><p>d) \\(\\sin x=0\\) eller \\(\\cos x=\\frac12\\): <strong>\\(x=180^\\circ n\\), \\(x=60^\\circ+360^\\circ n\\) eller \\(x=300^\\circ+360^\\circ n\\)</strong>.</p>",
    "familj": "proc_trigekv_faktorisering"
  },
  {
    "id": "1.63",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Ange alla lösningar i grader.</p><p>a) \\(\\sin x=0\\)<br>b) \\(\\cos x=0\\)<br>c) \\(\\tan x=\\sqrt3\\)<br>d) \\(\\cos x=1\\)</p>",
    "s": "<p>a) <strong>\\(x=180^\\circ n\\)</strong>.<br>b) <strong>\\(x=90^\\circ+180^\\circ n\\)</strong>.<br>c) <strong>\\(x=60^\\circ+180^\\circ n\\)</strong>.<br>d) <strong>\\(x=360^\\circ n\\)</strong>, där \\(n\\in\\mathbb Z\\).</p>",
    "familj": "proc_trigekv_generella_1"
  },
  {
    "id": "1.64",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv om med formler för dubbla vinkeln.</p><p>a) \\(2\\sin x\\cos x\\)<br>b) \\(\\cos^2x-\\sin^2x\\)<br>c) \\(1-2\\sin^2x\\)<br>d) \\(2\\cos^2x-1\\)</p>",
    "s": "<p><strong>Metod:</strong> Matcha uttrycket mot formlerna \\(\\sin2x=2\\sin x\\cos x\\) och \\(\\cos2x=\\cos^2x-\\sin^2x=1-2\\sin^2x=2\\cos^2x-1\\).</p><p>Alla uttryck är standardformer för dubbla vinkeln.</p><p>a) <strong>\\(\\sin 2x\\)</strong><br>b) <strong>\\(\\cos 2x\\)</strong><br>c) <strong>\\(\\cos 2x\\)</strong><br>d) <strong>\\(\\cos 2x\\)</strong></p>",
    "familj": "proc_dubbla_vinkeln_standard"
  },
  {
    "id": "1.65",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0\\le x&lt;2\\pi\\).</p><p>a) \\(\\cos x=\\frac12\\)<br>b) \\(\\sin x=-\\frac{\\sqrt2}{2}\\)<br>c) \\(\\tan x=1\\)<br>d) \\(\\cos x=0\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm referensvinkeln och välj de kvadranter där funktionen har rätt tecken.</p><p>a) <strong>\\(x=\\pi/3,5\\pi/3\\)</strong>.<br>b) <strong>\\(x=5\\pi/4,7\\pi/4\\)</strong>.<br>c) <strong>\\(x=\\pi/4,5\\pi/4\\)</strong>.<br>d) <strong>\\(x=\\pi/2,3\\pi/2\\)</strong>.</p>",
    "familj": "proc_trigekv_radian_standard_3"
  },
  {
    "id": "1.66",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För funktionen \\(f(x)=3\\sin(2x)-4\\), där \\(x\\) mäts i radianer, bestäm</p><p>a) amplituden<br>b) perioden<br>c) medellinjen<br>d) största och minsta värde.</p>",
    "s": "<p><strong>Metod:</strong> Läs av amplitud och medellinje direkt. Perioden fås från faktorn framför \\(x\\).</p><p>a) 3.<br>b) \\(T=2\\pi/2=\\pi\\).<br>c) \\(y=-4\\).<br>d) Största värde \\(-1\\), minsta \\(-7\\).</p>",
    "familj": "sinus_egenskaper_rutin"
  },
  {
    "id": "1.67",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För funktionen \\(f(x)=2\\tan(3x)\\):</p><p>a) bestäm perioden,<br>b) ange två lodräta asymptoter som ligger närmast origo,<br>c) bestäm alla nollställen.</p>",
    "s": "<p>För \\(\\tan(kx)\\) är perioden \\(\\pi/|k|\\).</p><p>a) \\(\\boxed{\\pi/3}\\).</p><p>b) \\(3x=\\pi/2+n\\pi\\Rightarrow x=\\pi/6+n\\pi/3\\). De närmaste är \\(\\boxed{x=\\pm\\pi/6}\\).</p><p>c) \\(3x=n\\pi\\Rightarrow\\boxed{x=n\\pi/3}\\).</p>",
    "familj": "tangens_3x_rutin"
  },
  {
    "id": "1.68",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Visa att</p>\n<p>\\[\n\\sin4x+2\\sin2x=8\\sin x\\cos^3x\n\\]</p>\n<p>för alla reella \\(x\\).</p>",
    "s": "<p>Utgå från vänsterledet:</p>\n<p>\\[\n\\sin4x+2\\sin2x\n=2\\sin2x\\cos2x+2\\sin2x\n\\]</p>\n<p>\\[\n=2\\sin2x(\\cos2x+1).\n\\]</p>\n<p>Använd \\(\\sin2x=2\\sin x\\cos x\\) och \\(1+\\cos2x=2\\cos^2x\\):</p>\n<p>\\[\n2(2\\sin x\\cos x)(2\\cos^2x)\n=8\\sin x\\cos^3x.\n\\]</p>\n<p><strong>VL = HL.</strong></p>",
    "familj": "kallmaterial_identitet_dubbelvinkel"
  },
  {
    "id": "1.69",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En sensors höjd över ett golv varierar periodiskt. Grafen visar hur höjden varierar.</p>\n<span class=\"fig\"><svg width=\"520\" height=\"300\" viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Periodisk cosinuskurva med maximum 11 vid t 2, minimum 3 vid t 8 och nästa maximum vid t 14, samt streckad linje y lika med 9\">\n<rect x=\"1\" y=\"1\" width=\"518\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E3E7EB\" stroke-width=\"1\"><line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"250\"/><line x1=\"110\" y1=\"40\" x2=\"110\" y2=\"250\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"250\"/><line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"250\"/><line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"250\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"250\"/><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"250\"/><line x1=\"410\" y1=\"40\" x2=\"410\" y2=\"250\"/><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"250\"/><line x1=\"55\" y1=\"197\" x2=\"465\" y2=\"197\"/><line x1=\"55\" y1=\"165\" x2=\"465\" y2=\"165\"/><line x1=\"55\" y1=\"133\" x2=\"465\" y2=\"133\"/><line x1=\"55\" y1=\"101\" x2=\"465\" y2=\"101\"/><line x1=\"55\" y1=\"69\" x2=\"465\" y2=\"69\"/></g>\n<line x1=\"55\" y1=\"245\" x2=\"475\" y2=\"245\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M475 245 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"60\" y1=\"258\" x2=\"60\" y2=\"30\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M60 30 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<line x1=\"60\" y1=\"101\" x2=\"460\" y2=\"101\" stroke=\"#8A8F96\" stroke-width=\"1.4\" stroke-dasharray=\"6 5\"/>\n<polyline points=\"60.0,101.0 62.5,98.1 65.0,95.4 67.5,92.7 70.0,90.2 72.5,87.7 75.0,85.4 77.5,83.3 80.0,81.2 82.5,79.3 85.0,77.6 87.5,76.0 90.0,74.5 92.5,73.3 95.0,72.1 97.5,71.2 100.0,70.4 102.5,69.8 105.0,69.4 107.5,69.1 110.0,69.0 112.5,69.1 115.0,69.4 117.5,69.8 120.0,70.4 122.5,71.2 125.0,72.1 127.5,73.3 130.0,74.5 132.5,76.0 135.0,77.6 137.5,79.3 140.0,81.2 142.5,83.3 145.0,85.4 147.5,87.7 150.0,90.2 152.5,92.7 155.0,95.4 157.5,98.1 160.0,101.0 162.5,103.9 165.0,107.0 167.5,110.1 170.0,113.2 172.5,116.4 175.0,119.7 177.5,123.0 180.0,126.3 182.5,129.7 185.0,133.0 187.5,136.3 190.0,139.7 192.5,143.0 195.0,146.3 197.5,149.6 200.0,152.8 202.5,155.9 205.0,159.0 207.5,162.1 210.0,165.0 212.5,167.9 215.0,170.6 217.5,173.3 220.0,175.8 222.5,178.3 225.0,180.6 227.5,182.7 230.0,184.8 232.5,186.7 235.0,188.4 237.5,190.0 240.0,191.5 242.5,192.7 245.0,193.9 247.5,194.8 250.0,195.6 252.5,196.2 255.0,196.6 257.5,196.9 260.0,197.0 262.5,196.9 265.0,196.6 267.5,196.2 270.0,195.6 272.5,194.8 275.0,193.9 277.5,192.7 280.0,191.5 282.5,190.0 285.0,188.4 287.5,186.7 290.0,184.8 292.5,182.7 295.0,180.6 297.5,178.3 300.0,175.8 302.5,173.3 305.0,170.6 307.5,167.9 310.0,165.0 312.5,162.1 315.0,159.0 317.5,155.9 320.0,152.8 322.5,149.6 325.0,146.3 327.5,143.0 330.0,139.7 332.5,136.3 335.0,133.0 337.5,129.7 340.0,126.3 342.5,123.0 345.0,119.7 347.5,116.4 350.0,113.2 352.5,110.1 355.0,107.0 357.5,103.9 360.0,101.0 362.5,98.1 365.0,95.4 367.5,92.7 370.0,90.2 372.5,87.7 375.0,85.4 377.5,83.3 380.0,81.2 382.5,79.3 385.0,77.6 387.5,76.0 390.0,74.5 392.5,73.3 395.0,72.1 397.5,71.2 400.0,70.4 402.5,69.8 405.0,69.4 407.5,69.1 410.0,69.0 412.5,69.1 415.0,69.4 417.5,69.8 420.0,70.4 422.5,71.2 425.0,72.1 427.5,73.3 430.0,74.5 432.5,76.0 435.0,77.6 437.5,79.3 440.0,81.2 442.5,83.3 445.0,85.4 447.5,87.7 450.0,90.2 452.5,92.7 455.0,95.4 457.5,98.1 460.0,101.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<g fill=\"#B43123\"><circle cx=\"110\" cy=\"69\" r=\"4\"/><circle cx=\"260\" cy=\"197\" r=\"4\"/><circle cx=\"410\" cy=\"69\" r=\"4\"/></g>\n<text x=\"480\" y=\"249\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">t (h)</text><text x=\"68\" y=\"32\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">h</text>\n<text x=\"110\" y=\"272\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">2</text><text x=\"260\" y=\"272\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">8</text><text x=\"410\" y=\"272\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">14</text>\n<text x=\"43\" y=\"201\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">3</text><text x=\"43\" y=\"105\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">9</text><text x=\"43\" y=\"73\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">11</text>\n</svg></span>\n<p>a) Bestäm en modell på formen \\(h(t)=A\\cos(k(t-t_0))+B\\) som stämmer med grafen.<br>b) Hur lång tid under en period är sensorn minst 9 höjdenheter över golvet?<br>c) Ange de två tidsintervall under \\(2\\le t\\le14\\) där villkoret \\(h(t)\\ge9\\) gäller.</p>",
    "s": "<p>Maxvärdet är 11 och minvärdet 3. Alltså</p><p>\\[A=\\frac{11-3}{2}=4,\\qquad B=\\frac{11+3}{2}=7.\\]</p>\n<p>Två maxima ligger vid \\(t=2\\) och \\(t=14\\), så perioden är 12 och</p><p>\\[k=\\frac{2\\pi}{12}=\\frac\\pi6.\\]</p>\n<p>a) En modell är därför</p><p><strong>\\[h(t)=4\\cos\\left(\\frac\\pi6(t-2)\\right)+7.\\]</strong></p>\n<p>b) Villkoret \\(h(t)\\ge9\\) ger</p><p>\\[4\\cos\\left(\\frac\\pi6(t-2)\\right)+7\\ge9\\]</p><p>\\[\\cos\\left(\\frac\\pi6(t-2)\\right)\\ge\\frac12.\\]</p>\n<p>I en hel period motsvarar detta vinklar från \\(-\\pi/3\\) till \\(\\pi/3\\), alltså en vinkelbredd \\(2\\pi/3\\). Tiden blir</p><p>\\[\\frac{2\\pi/3}{\\pi/6}=4\\text{ h}.\\]</p>\n<p>c) Kring maximum vid \\(t=2\\) gäller villkoret från \\(t=0\\) till \\(t=4\\). Kring nästa maximum vid \\(t=14\\) gäller det från \\(t=12\\) till \\(t=16\\). Begränsat till \\(2\\le t\\le14\\) blir därför <strong>\\([2,4]\\) och \\([12,14]\\)</strong>.</p>",
    "familj": "trigmodell_graf_tröskel_a"
  },
  {
    "id": "1.70",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En trigonometrisk funktion har en maximipunkt \\((\\pi/3,5)\\) och nästa maximipunkt \\((7\\pi/3,5)\\). Mellan dessa ligger en minimipunkt med y-koordinaten 1.</p><p>Bestäm en möjlig funktion på formen \\(f(x)=A\\cos(k(x-c))+B\\).</p>",
    "s": "<p>Max 5 och min 1 ger amplitud \\(A=2\\) och medellinje \\(B=3\\). Avståndet mellan två maximipunkter är \\(2\\pi\\), alltså är perioden \\(2\\pi\\) och \\(k=1\\). Ett maximum ligger vid \\(x=\\pi/3\\), så vi kan välja \\(c=\\pi/3\\).</p><p><strong>\\(\\boxed{f(x)=2\\cos(x-\\pi/3)+3}\\)</strong>.</p>",
    "familj": "trigfunktion_extrempunkter"
  },
  {
    "id": "1.71",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0\\le x&lt;2\\pi\\).</p><p>a) \\(\\sin2x=0\\)<br>b) \\(\\cos3x=1\\)<br>c) \\(\\sin(x-\\frac{\\pi}{4})=0\\)<br>d) \\(\\cos(2x+\\frac{\\pi}{3})=0\\)</p>",
    "s": "<p>a) \\(2x=n\\pi\\Rightarrow x=n\\pi/2\\): <strong>\\(0,\\pi/2,\\pi,3\\pi/2\\)</strong>.</p><p>b) \\(3x=2n\\pi\\): <strong>\\(x=0,2\\pi/3,4\\pi/3\\)</strong>.</p><p>c) \\(x-\\pi/4=n\\pi\\): <strong>\\(x=\\pi/4,5\\pi/4\\)</strong>.</p><p>d) \\(2x+\\pi/3=\\pi/2+n\\pi\\Rightarrow x=\\pi/12+n\\pi/2\\): <strong>\\(\\pi/12,7\\pi/12,13\\pi/12,19\\pi/12\\)</strong>.</p>",
    "familj": "proc_trigekv_transformerade_2"
  },
  {
    "id": "1.72",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös ekvationen \\(2\\sin^2x-3\\sin x+1=0\\) för \\(0\\le x&lt;2\\pi\\).</p>",
    "s": "<p><strong>Metod:</strong> Skriv först om ekvationen så att du får vanliga trigonometriska grundekvationer. Använd identiteter eller faktorisering innan du löser vinklarna.</p><p>Sätt \\(u=\\sin x\\). Då \\(2u^2-3u+1=(2u-1)(u-1)=0\\).</p><p>Alltså \\(\\sin x=1/2\\) eller \\(\\sin x=1\\).</p><p><strong>\\(x=\\pi/6,\\pi/2,5\\pi/6\\)</strong>.</p>",
    "familj": "trigekv_substitution"
  },
  {
    "id": "1.73",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>För vinkeln \\(v\\) gäller \\(\\tan v=2\\) och \\(0&lt;v&lt;\\pi/2\\).</p><p>Bestäm \\(\\sin2v\\) och \\(\\cos2v\\) exakt utan att först bestämma vinkeln \\(v\\).</p>",
    "s": "<p>Eftersom \\(\\tan v=2=2/1\\) kan en rätvinklig triangel väljas med kateterna 2 och 1. Hypotenusan blir \\(\\sqrt5\\), så</p><p>\\[\\sin v=\\frac2{\\sqrt5},\\qquad \\cos v=\\frac1{\\sqrt5}.\\]</p>\n<p>Då</p><p>\\[\\sin2v=2\\sin v\\cos v=2\\cdot\\frac2{\\sqrt5}\\cdot\\frac1{\\sqrt5}=\\boxed{\\frac45}.\\]</p>\n<p>\\[\\cos2v=\\cos^2v-\\sin^2v=\\frac15-\\frac45=\\boxed{-\\frac35}.\\]</p>",
    "familj": "tan_till_dubbelvinkel"
  },
  {
    "id": "1.74",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Skriv uttrycket på formen \\(R\\sin(x+v)\\), där \\(R>0\\).</p><p>a) \\(\\sin x+\\cos x\\)<br>b) \\(\\sqrt3\\sin x+\\cos x\\)<br>c) \\(\\sin x-\\sqrt3\\cos x\\)<br>d) \\(3\\sin x+4\\cos x\\)</p>",
    "s": "<p>Använd \\(R\\cos v\\) som koefficient framför \\(\\sin x\\) och \\(R\\sin v\\) framför \\(\\cos x\\).</p><p>a) <strong>\\(\\sqrt2\\sin(x+\\frac\\pi4)\\)</strong>.</p><p>b) <strong>\\(2\\sin(x+\\frac\\pi6)\\)</strong>.</p><p>c) <strong>\\(2\\sin(x-\\frac\\pi3)\\)</strong>.</p><p>d) \\(R=5\\), \\(\\cos v=3/5\\), \\(\\sin v=4/5\\): <strong>\\(5\\sin(x+\\arctan(4/3))\\)</strong>.</p>",
    "familj": "proc_asin_bcos_omskrivning"
  },
  {
    "id": "1.75",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm det saknade värdet. Ange tecken med hjälp av den angivna kvadranten.</p><p>a) \\(\\sin x=\\frac35\\), första kvadranten. Bestäm \\(\\cos x\\).<br>b) \\(\\cos x=-\\frac5{13}\\), andra kvadranten. Bestäm \\(\\sin x\\).<br>c) \\(\\sin x=-\\frac8{17}\\), fjärde kvadranten. Bestäm \\(\\cos x\\).<br>d) \\(\\cos x=-\\frac7{25}\\), tredje kvadranten. Bestäm \\(\\sin x\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(\\sin^2x+\\cos^2x=1\\) och kontrollera eventuella nämnare.</p><p>Använd \\(\\sin^2x+\\cos^2x=1\\).</p><p>a) <strong>\\(\\frac45\\)</strong><br>b) <strong>\\(\\frac{12}{13}\\)</strong><br>c) <strong>\\(\\frac{15}{17}\\)</strong><br>d) <strong>\\(-\\frac{24}{25}\\)</strong></p>",
    "familj": "proc_trig_ettan_pythtriplar"
  },
  {
    "id": "1.76",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Omvandla.</p><p>a) \\(30^\\circ\\) till radianer<br>b) \\(225^\\circ\\) till radianer<br>c) \\(5\\pi/6\\) till grader<br>d) \\(7\\pi/4\\) till grader</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(180^\\circ=\\pi\\) rad och multiplicera med rätt omvandlingsfaktor.</p><p>a) \\(\\boxed{\\pi/6}\\)</p><p>b) \\(\\boxed{5\\pi/4}\\)</p><p>c) \\(\\boxed{150^\\circ}\\)</p><p>d) \\(\\boxed{315^\\circ}\\)</p>",
    "familj": "radian_grad_mix4"
  },
  {
    "id": "1.77",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För varje funktion, ange amplitud, period och medellinje.</p><p>a) \\(y=6\\sin(3x)-2\\)<br>b) \\(y=-2\\cos(\\frac{x}{4})+5\\)<br>c) \\(y=\\frac12\\sin(5x)\\)<br>d) \\(y=7-4\\cos(2x)\\)</p>",
    "s": "<p>a) amplitud <strong>6</strong>, period <strong>\\(2\\pi/3\\)</strong>, medellinje <strong>\\(y=-2\\)</strong>.</p><p>b) amplitud <strong>2</strong>, period <strong>\\(8\\pi\\)</strong>, medellinje <strong>\\(y=5\\)</strong>.</p><p>c) amplitud <strong>1/2</strong>, period <strong>\\(2\\pi/5\\)</strong>, medellinje <strong>\\(y=0\\)</strong>.</p><p>d) amplitud <strong>4</strong>, period <strong>\\(\\pi\\)</strong>, medellinje <strong>\\(y=7\\)</strong>.</p>",
    "familj": "proc_trigfunktion_parametrar_3"
  },
  {
    "id": "1.78",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>En cirkelsektor har radien 6 cm och medelpunktsvinkeln 1,2 radianer.</p><span class=\"fig\"><svg width=\"420\" height=\"260\" viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cirkel med radie 6 och medelpunktsvinkel 1,2 radianer\">\n<rect x=\"1\" y=\"1\" width=\"418\" height=\"258\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<circle cx=\"165\" cy=\"142\" r=\"82\" fill=\"#F7FAFB\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<path d=\"M165 142 L247 142 A82 82 0 0 0 194.7 65.6 Z\" fill=\"#DCEFF2\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"165\" y1=\"142\" x2=\"247\" y2=\"142\" stroke=\"#B43123\" stroke-width=\"2\"/>\n<line x1=\"165\" y1=\"142\" x2=\"194.7\" y2=\"65.6\" stroke=\"#B43123\" stroke-width=\"2\"/>\n<path d=\"M200 142 A35 35 0 0 0 177.7 109.4\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"1.5\"/>\n<text x=\"202\" y=\"124\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#2B2527\">1,2 rad</text>\n<text x=\"205\" y=\"158\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#B43123\">6 cm</text>\n<text x=\"165\" y=\"146\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">O</text>\n</svg></span><p>a) Bestäm båglängden.<br>b) Bestäm sektorns area.</p>",
    "s": "<p>a) Båglängden är \\(s=r\\theta=6\\cdot1,2=\\)<strong>7,2 cm</strong>.</p><p>b) Sektorns area är \\(A=\\frac12r^2\\theta=\\frac12\\cdot36\\cdot1,2=\\)<strong>21,6 cm²</strong>.</p>",
    "familj": "radian_baglangd_sektor"
  },
  {
    "id": "1.79",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Visa att</p><p>\\[\\frac{1-\\cos 2x}{\\sin 2x}=\\tan x\\]</p><p>för alla \\(x\\) där båda leden är definierade.</p>",
    "s": "<p>Använd \\(1-\\cos2x=2\\sin^2x\\) och \\(\\sin2x=2\\sin x\\cos x\\):</p><p>\\[\\frac{2\\sin^2x}{2\\sin x\\cos x}=\\frac{\\sin x}{\\cos x}=\\tan x.\\]</p><p>Alltså är identiteten visad där uttrycken är definierade.</p>",
    "familj": "identitet_dubbelvinkel"
  },
  {
    "id": "1.80",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En havsboj rör sig vertikalt enligt modellen \\(h(t)=1,8+0,65\\sin(0,9t-0,4)\\), där \\(h\\) mäts i meter och \\(t\\) i sekunder.</p><p>Under hur stor del av en period är bojens höjd minst 2,20 m? Svara i procent.</p>",
    "s": "<p>Villkoret är \\(\\sin(0,9t-0,4)\\ge(2,20-1,8)/0,65=8/13\\).</p><p>Sätt \\(\\alpha=\\arcsin(8/13)\\). Under en period gäller villkoret för argument mellan \\(\\alpha\\) och \\(\\pi-\\alpha\\), alltså under vinkellängden \\(\\pi-2\\alpha\\).</p><p>Andelen är \\(\\frac{\\pi-2\\alpha}{2\\pi}\\approx0,289\\).</p><p><strong>Cirka 28,9 % av perioden.</strong></p>",
    "familj": "trigmodell_andel_period"
  },
  {
    "id": "1.81",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Undersök hur antalet lösningar till ekvationen</p><p>\\[B\\sin2x=1\\]</p><p>i intervallet \\(0\\le x&lt;2\\pi\\) beror på det reella talet \\(B\\). Motivera alla fall.</p>",
    "s": "<p>Om \\(B=0\\) saknar ekvationen lösning. För \\(B\\ne0\\) kan den skrivas</p><p>\\[\\sin2x=\\frac1B.\\]</p>\n<p>En sinus kan bara anta värden mellan -1 och 1.</p>\n<p><strong>Fall 1: \\(|B|&lt;1\\).</strong> Då \\(|1/B|&gt;1\\), alltså finns <strong>0 lösningar</strong>.</p>\n<p><strong>Fall 2: \\(|B|=1\\).</strong> Då är högerledet \\(1\\) eller \\(-1\\). När \\(2x\\) löper över \\([0,4\\pi)\\) inträffar respektive extremvärde två gånger. Alltså finns <strong>2 lösningar</strong>.</p>\n<p><strong>Fall 3: \\(|B|&gt;1\\).</strong> Då ligger \\(1/B\\) strikt mellan -1 och 1. Under varje sinusperiod finns två lösningar. Intervallet för \\(2x\\) omfattar två hela perioder, så det finns <strong>4 lösningar</strong>.</p>\n<p>Sammanfattning: <strong>0 lösningar om \\(|B|&lt;1\\) (inklusive \\(B=0\\)), 2 lösningar om \\(|B|=1\\), och 4 lösningar om \\(|B|&gt;1\\).</strong></p>",
    "familj": "trigekv_parameter_antal_losningar"
  },
  {
    "id": "1.82",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>Ett pariserhjul har diametern 32 m och dess lägsta punkt ligger 3 m över marken. Ett varv tar 40 s. Vid \\(t=0\\) befinner sig en gondol på medelhöjd och är på väg uppåt.</p><span class=\"fig\"><svg width=\"430\" height=\"285\" viewBox=\"0 0 430 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pariserhjul med diameter 32 meter och lägsta punkt 3 meter över marken\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"283\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"45\" y1=\"248\" x2=\"390\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<circle cx=\"210\" cy=\"135\" r=\"82\" fill=\"#F7FAFB\" stroke=\"#2B2527\" stroke-width=\"2.2\"/>\n<line x1=\"210\" y1=\"135\" x2=\"210\" y2=\"217\" stroke=\"#5C575E\"/><line x1=\"210\" y1=\"135\" x2=\"292\" y2=\"135\" stroke=\"#5C575E\"/><line x1=\"210\" y1=\"135\" x2=\"210\" y2=\"53\" stroke=\"#5C575E\"/>\n<circle cx=\"292\" cy=\"135\" r=\"7\" fill=\"#268FA3\"/><text x=\"305\" y=\"139\" font-family=\"sans-serif\" font-size=\"12\">gondol vid t=0</text>\n<line x1=\"120\" y1=\"53\" x2=\"120\" y2=\"217\" stroke=\"#B43123\"/><line x1=\"114\" y1=\"53\" x2=\"126\" y2=\"53\" stroke=\"#B43123\"/><line x1=\"114\" y1=\"217\" x2=\"126\" y2=\"217\" stroke=\"#B43123\"/><text x=\"93\" y=\"139\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">32 m</text>\n<line x1=\"330\" y1=\"217\" x2=\"330\" y2=\"248\" stroke=\"#268FA3\"/><line x1=\"324\" y1=\"217\" x2=\"336\" y2=\"217\" stroke=\"#268FA3\"/><line x1=\"324\" y1=\"248\" x2=\"336\" y2=\"248\" stroke=\"#268FA3\"/><text x=\"342\" y=\"236\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">3 m</text>\n</svg></span><p>a) Bestäm en sinusmodell \\(h(t)\\) för gondolens höjd.<br>b) Bestäm första tidpunkt då gondolen når 30 m över marken.</p>",
    "s": "<p>Radien är 16 m, alltså är amplituden 16. Medelhöjden är \\(3+16=19\\) m. Vinkelhastigheten är \\(2\\pi/40=\\pi/20\\). Eftersom gondolen vid \\(t=0\\) är på medelhöjd och stiger kan vi välja</p><p>\\[\\boxed{h(t)=19+16\\sin(\\pi t/20)}.\\]</p><p>För 30 m:</p><p>\\[19+16\\sin(\\pi t/20)=30\\Rightarrow\\sin(\\pi t/20)=11/16.\\]</p><p>Första lösningen är</p><p>\\[t=\\frac{20}{\\pi}\\arcsin(11/16)\\approx\\boxed{4,83\\text{ s}}.\\]</p>",
    "familj": "pariserhjul_modell_a"
  },
  {
    "id": "1.83",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Skriv en möjlig funktion av formen \\(y=A\\sin(kx)+B\\).</p><p>a) amplitud 3, period \\(2\\pi\\), medellinje \\(y=4\\).<br>b) amplitud 5, period \\(\\pi\\), medellinje \\(y=-1\\).<br>c) amplitud 2, period \\(4\\pi\\), medellinje \\(y=0\\).</p>",
    "s": "<p>a) Exempel: <strong>\\(y=3\\sin x+4\\)</strong>.</p><p>b) \\(k=2\\), exempel: <strong>\\(y=5\\sin2x-1\\)</strong>.</p><p>c) \\(k=1/2\\), exempel: <strong>\\(y=2\\sin(x/2)\\)</strong>.</p>",
    "familj": "proc_bestamma_trig_funktion_2"
  },
  {
    "id": "1.84",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\).</p><p>a) \\(\\sin x=-\\frac12\\)<br>b) \\(\\cos x=\\frac{\\sqrt2}{2}\\)<br>c) \\(\\tan x=\\sqrt3\\)<br>d) \\(2\\cos x+1=0\\)</p>",
    "s": "<p>a) <strong>\\(x=210^\\circ,330^\\circ\\)</strong>.</p><p>b) <strong>\\(x=45^\\circ,315^\\circ\\)</strong>.</p><p>c) <strong>\\(x=60^\\circ,240^\\circ\\)</strong>.</p><p>d) \\(\\cos x=-1/2\\), alltså <strong>\\(x=120^\\circ,240^\\circ\\)</strong>.</p>",
    "familj": "trigekv_grader_e2"
  },
  {
    "id": "1.85",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För funktionen</p>\n<p>\\[\nf(x)=4\\sin(3x)-2\n\\]</p>\n<p>bestäm</p>\n<p>a) amplituden<br>\nb) perioden<br>\nc) största och minsta värde.</p>",
    "s": "<p>a) Amplituden är absolutbeloppet av koefficienten framför sinus:</p>\n<p><strong>\\(4\\).</strong></p>\n<p>b)</p>\n<p>\\[\nT=\\frac{2\\pi}{3}.\n\\]</p>\n<p>c) Medellinjen är \\(y=-2\\). Därför</p>\n<p>\\[\nf_{\\max}=-2+4=2,\\qquad f_{\\min}=-2-4=-6.\n\\]</p>",
    "familj": "sinusfunktion_egenskaper"
  },
  {
    "id": "1.86",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Undersök hur många lösningar ekvationen</p>\n<p>\\[\nB\\sin2x=5\n\\]</p>\n<p>har i intervallet \\(0\\le x&lt;2\\pi\\), beroende på det reella talet \\(B\\).</p>\n<p>Motivera alla fall.</p>",
    "s": "<p>Om \\(B=0\\) saknas lösningar. För \\(B\\ne0\\) kan ekvationen skrivas</p>\n<p>\\[\n\\sin2x=\\frac5B.\n\\]</p>\n<p>Eftersom \\(-1\\le\\sin2x\\le1\\) krävs \\(\\left|\\frac5B\\right|\\le1\\), alltså \\(|B|\\ge5\\).</p>\n<p>När \\(0\\le x&lt;2\\pi\\) varierar \\(2x\\) över intervallet \\(0\\le2x&lt;4\\pi\\), alltså två hela sinusperioder.</p>\n<p>• Om \\(|B|&lt;5\\): högerledets absolutbelopp är större än 1 → <strong>0 lösningar</strong>.</p>\n<p>• Om \\(|B|=5\\): högerledet är \\(1\\) eller \\(-1\\). Varje sinusperiod ger en lösning → <strong>2 lösningar</strong>.</p>\n<p>• Om \\(|B|&gt;5\\): högerledet ligger strikt mellan \\(-1\\) och \\(1\\). Varje period ger två lösningar → <strong>4 lösningar</strong>.</p>",
    "familj": "trigekvation_parameter_antal"
  },
  {
    "id": "1.87",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm exakt.</p><p>a) \\(\\sin 30^\\circ\\)<br>b) \\(\\cos 120^\\circ\\)<br>c) \\(\\tan 225^\\circ\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd standardvinklarna i enhetscirkeln och kontrollera tecknet i rätt kvadrant.</p><p>a) <strong>\\(1/2\\)</strong><br>b) <strong>\\(-1/2\\)</strong><br>c) <strong>\\(1\\)</strong></p>",
    "familj": "enhetscirkel_standardvarden"
  },
  {
    "id": "1.88",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En strålkastare står 20 m från en rak vägg. Vinkeln \\(v\\) mäts från normalen mot väggen och ljuspunkten hamnar \\(x\\) meter åt sidan.</p><span class=\"fig\"><svg width=\"470\" height=\"255\" viewBox=\"0 0 470 255\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Strålkastare 20 meter från en rak vägg med vinkeln v mot normalen\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"253\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<rect x=\"55\" y=\"45\" width=\"355\" height=\"16\" fill=\"#E7E8EA\" stroke=\"#2B2527\"/>\n<circle cx=\"190\" cy=\"205\" r=\"22\" fill=\"#F4F5F7\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<line x1=\"190\" y1=\"205\" x2=\"190\" y2=\"53\" stroke=\"#5C575E\" stroke-dasharray=\"6 4\" stroke-width=\"1.5\"/>\n<line x1=\"190\" y1=\"205\" x2=\"310\" y2=\"53\" stroke=\"#268FA3\" stroke-width=\"2.4\"/>\n<circle cx=\"310\" cy=\"53\" r=\"5\" fill=\"#268FA3\"/>\n<path d=\"M190 168 A37 37 0 0 1 213 176\" fill=\"none\" stroke=\"#2B2527\"/>\n<text x=\"208\" y=\"163\" font-family=\"sans-serif\" font-size=\"12\">v</text>\n<line x1=\"170\" y1=\"70\" x2=\"170\" y2=\"202\" stroke=\"#B43123\" stroke-width=\"1.4\"/>\n<line x1=\"164\" y1=\"70\" x2=\"176\" y2=\"70\" stroke=\"#B43123\"/><line x1=\"164\" y1=\"202\" x2=\"176\" y2=\"202\" stroke=\"#B43123\"/>\n<text x=\"145\" y=\"139\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">20 m</text>\n<line x1=\"193\" y1=\"80\" x2=\"307\" y2=\"80\" stroke=\"#268FA3\"/><line x1=\"193\" y1=\"75\" x2=\"193\" y2=\"85\" stroke=\"#268FA3\"/><line x1=\"307\" y1=\"75\" x2=\"307\" y2=\"85\" stroke=\"#268FA3\"/>\n<text x=\"250\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">x</text>\n<text x=\"330\" y=\"40\" font-family=\"sans-serif\" font-size=\"12\">vägg</text>\n</svg></span><p>a) Visa att \\(x=20\\tan v\\).<br>b) Bestäm \\(x\\) då \\(v=35^\\circ\\).<br>c) Bestäm vinkeln då \\(x=30\\) m.</p>",
    "s": "<p><strong>Metod:</strong> Översätt uppgifterna i texten till modellens amplitud, medellinje, period och fas. Sätt sedan in det värde som efterfrågas.</p><p>a) I den rätvinkliga triangeln är \\(\\tan v=x/20\\), alltså \\(x=20\\tan v\\).</p><p>b) \\(x=20\\tan35^\\circ\\approx\\)<strong>14,0 m</strong>.</p><p>c) \\(\\tan v=30/20=1,5\\), så \\(v=\\arctan1,5\\approx\\)<strong>56,3°</strong>.</p>",
    "familj": "stralkastare_tangensmodell"
  },
  {
    "id": "1.89",
    "kap": 1,
    "omr": "fasforskjutning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Ange fasförskjutningen i positiv x-riktning.</p><p>a) \\(y=\\sin(x-\\pi/3)\\)<br>b) \\(y=2\\cos(x-\\pi/4)+1\\)<br>c) \\(y=\\sin(2(x-\\pi/6))\\)<br>d) \\(y=3\\cos(4(x+\\pi/8))\\)</p>",
    "s": "<p>a) <strong>\\(\\pi/3\\)</strong>.</p><p>b) <strong>\\(\\pi/4\\)</strong>.</p><p>c) <strong>\\(\\pi/6\\)</strong>.</p><p>d) \\(x+\\pi/8=x-(-\\pi/8)\\), alltså fasförskjutningen i positiv riktning är <strong>\\(-\\pi/8\\)</strong>, dvs. grafen är förskjuten \\(\\pi/8\\) åt vänster.</p>",
    "familj": "proc_fasforskjutning_avlasa_2"
  },
  {
    "id": "1.90",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Lös ekvationen algebraiskt:</p>\n<p>\\[\\sqrt3\\sin x=\\cos x.\\]</p>\n<p>Vinkeln \\(x\\) mäts i grader.</p>",
    "s": "<p>Om \\(\\cos x=0\\) är vänsterledet \\(\\pm\\sqrt3\\), så sådana vinklar är inte lösningar. Vi kan därför dividera med \\(\\cos x\\):</p>\n<p>\\[\n\\sqrt3\\tan x=1\n\\Rightarrow \\tan x=\\frac1{\\sqrt3}.\n\\]</p>\n<p>Referensvinkeln är \\(30^\\circ\\), och tangens har perioden \\(180^\\circ\\).</p>\n<p><strong>\\[\nx=30^\\circ+180^\\circ n,\\qquad n\\in\\mathbb Z.\n\\]</strong></p>",
    "familj": "kallmaterial_trigekv_tan"
  },
  {
    "id": "1.91",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen visar en funktion på formen \\(f(x)=A\\sin(kx)+B\\).</p>\n<span class=\"fig\"><svg width=\"520\" height=\"285\" viewBox=\"0 0 520 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sinuskurva med medellinje 3, maximum 5, minimum 1 och period pi\">\n<rect x=\"1\" y=\"1\" width=\"518\" height=\"283\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E1E5EA\" stroke-width=\"1\"><line x1=\"55.0\" y1=\"40\" x2=\"55.0\" y2=\"240\"/><line x1=\"108.1\" y1=\"40\" x2=\"108.1\" y2=\"240\"/><line x1=\"161.3\" y1=\"40\" x2=\"161.3\" y2=\"240\"/><line x1=\"214.4\" y1=\"40\" x2=\"214.4\" y2=\"240\"/><line x1=\"267.5\" y1=\"40\" x2=\"267.5\" y2=\"240\"/><line x1=\"320.6\" y1=\"40\" x2=\"320.6\" y2=\"240\"/><line x1=\"373.8\" y1=\"40\" x2=\"373.8\" y2=\"240\"/><line x1=\"426.9\" y1=\"40\" x2=\"426.9\" y2=\"240\"/><line x1=\"480.0\" y1=\"40\" x2=\"480.0\" y2=\"240\"/><line x1=\"50\" y1=\"205\" x2=\"485\" y2=\"205\"/><line x1=\"50\" y1=\"175\" x2=\"485\" y2=\"175\"/><line x1=\"50\" y1=\"145\" x2=\"485\" y2=\"145\"/><line x1=\"50\" y1=\"115\" x2=\"485\" y2=\"115\"/><line x1=\"50\" y1=\"85\" x2=\"485\" y2=\"85\"/></g>\n<line x1=\"50\" y1=\"235\" x2=\"490\" y2=\"235\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M490 235 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"267.5\" y1=\"245\" x2=\"267.5\" y2=\"30\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M267.5 30 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<line x1=\"50\" y1=\"145\" x2=\"485\" y2=\"145\" stroke=\"#A8ADB3\" stroke-width=\"1.2\" stroke-dasharray=\"5 5\"/>\n<polyline points=\"55.0,145.0 56.9,141.6 58.9,138.2 60.8,134.8 62.7,131.4 64.7,128.1 66.6,124.8 68.5,121.6 70.5,118.5 72.4,115.5 74.3,112.6 76.3,109.7 78.2,107.0 80.1,104.4 82.0,102.0 84.0,99.7 85.9,97.5 87.8,95.5 89.8,93.6 91.7,91.9 93.6,90.4 95.6,89.1 97.5,87.9 99.4,87.0 101.4,86.2 103.3,85.6 105.2,85.2 107.2,85.0 109.1,85.0 111.0,85.2 113.0,85.6 114.9,86.2 116.8,87.0 118.8,87.9 120.7,89.1 122.6,90.4 124.5,91.9 126.5,93.6 128.4,95.5 130.3,97.5 132.3,99.7 134.2,102.0 136.1,104.4 138.1,107.0 140.0,109.7 141.9,112.6 143.9,115.5 145.8,118.5 147.7,121.6 149.7,124.8 151.6,128.1 153.5,131.4 155.5,134.8 157.4,138.2 159.3,141.6 161.3,145.0 163.2,148.4 165.1,151.8 167.0,155.2 169.0,158.6 170.9,161.9 172.8,165.2 174.8,168.4 176.7,171.5 178.6,174.5 180.6,177.4 182.5,180.3 184.4,183.0 186.4,185.6 188.3,188.0 190.2,190.3 192.2,192.5 194.1,194.5 196.0,196.4 198.0,198.1 199.9,199.6 201.8,200.9 203.8,202.1 205.7,203.0 207.6,203.8 209.5,204.4 211.5,204.8 213.4,205.0 215.3,205.0 217.3,204.8 219.2,204.4 221.1,203.8 223.1,203.0 225.0,202.1 226.9,200.9 228.9,199.6 230.8,198.1 232.7,196.4 234.7,194.5 236.6,192.5 238.5,190.3 240.5,188.0 242.4,185.6 244.3,183.0 246.3,180.3 248.2,177.4 250.1,174.5 252.0,171.5 254.0,168.4 255.9,165.2 257.8,161.9 259.8,158.6 261.7,155.2 263.6,151.8 265.6,148.4 267.5,145.0 269.4,141.6 271.4,138.2 273.3,134.8 275.2,131.4 277.2,128.1 279.1,124.8 281.0,121.6 283.0,118.5 284.9,115.5 286.8,112.6 288.8,109.7 290.7,107.0 292.6,104.4 294.5,102.0 296.5,99.7 298.4,97.5 300.3,95.5 302.3,93.6 304.2,91.9 306.1,90.4 308.1,89.1 310.0,87.9 311.9,87.0 313.9,86.2 315.8,85.6 317.7,85.2 319.7,85.0 321.6,85.0 323.5,85.2 325.5,85.6 327.4,86.2 329.3,87.0 331.3,87.9 333.2,89.1 335.1,90.4 337.0,91.9 339.0,93.6 340.9,95.5 342.8,97.5 344.8,99.7 346.7,102.0 348.6,104.4 350.6,107.0 352.5,109.7 354.4,112.6 356.4,115.5 358.3,118.5 360.2,121.6 362.2,124.8 364.1,128.1 366.0,131.4 368.0,134.8 369.9,138.2 371.8,141.6 373.7,145.0 375.7,148.4 377.6,151.8 379.5,155.2 381.5,158.6 383.4,161.9 385.3,165.2 387.3,168.4 389.2,171.5 391.1,174.5 393.1,177.4 395.0,180.3 396.9,183.0 398.9,185.6 400.8,188.0 402.7,190.3 404.7,192.5 406.6,194.5 408.5,196.4 410.5,198.1 412.4,199.6 414.3,200.9 416.3,202.1 418.2,203.0 420.1,203.8 422.0,204.4 424.0,204.8 425.9,205.0 427.8,205.0 429.8,204.8 431.7,204.4 433.6,203.8 435.6,203.0 437.5,202.1 439.4,200.9 441.4,199.6 443.3,198.1 445.2,196.4 447.2,194.5 449.1,192.5 451.0,190.3 453.0,188.0 454.9,185.6 456.8,183.0 458.8,180.3 460.7,177.4 462.6,174.5 464.5,171.5 466.5,168.4 468.4,165.2 470.3,161.9 472.3,158.6 474.2,155.2 476.1,151.8 478.1,148.4 480.0,145.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<text x=\"493\" y=\"230\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text><text x=\"275.5\" y=\"32\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">y</text>\n<text x=\"42\" y=\"209\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">1</text><text x=\"42\" y=\"149\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">3</text><text x=\"42\" y=\"89\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">5</text>\n<text x=\"267.5\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">0</text><text x=\"320.625\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">pi/4</text><text x=\"373.75\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">pi/2</text><text x=\"426.875\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">3pi/4</text>\n</svg></span>\n<p>Bestäm konstanterna \\(A\\), \\(k\\) och \\(B\\).</p>",
    "s": "<p>Grafens största värde är 5 och minsta värde 1. Därför är amplituden</p><p>\\[A=\\frac{5-1}{2}=2\\]</p><p>och medellinjen</p><p>\\[B=\\frac{5+1}{2}=3.\\]</p>\n<p>Kurvan passerar medellinjen uppåt vid \\(x=0\\) och har första maximum vid \\(x=\\pi/4\\). För en sinuskurva inträffar maximum efter en fjärdedels period, alltså är perioden \\(T=\\pi\\).</p><p>\\[k=\\frac{2\\pi}{T}=2.\\]</p>\n<p><strong>\\(A=2,\\;k=2,\\;B=3\\)</strong>, alltså \\(f(x)=2\\sin2x+3\\).</p>",
    "familj": "bestam_trigfunktion_graf_svg2"
  },
  {
    "id": "1.92",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/1/0",
    "t": "<p>Ange alla lösningar. Vinkeln \\(x\\) mäts i grader.</p>\n<p>a) \\(\\tan x=1\\)<br>\nb) \\(4\\sin(2x-60^\\circ)=2\\)<br>\nc) \\(\\sin x\\cos x=0\\)</p>",
    "s": "<p>a) Tangens har perioden \\(180^\\circ\\):</p>\n<p><strong>\\(x=45^\\circ+180^\\circ n\\).</strong></p>\n<p>b) \\(\\sin(2x-60^\\circ)=\\frac12\\). Alltså</p>\n<p>\\[\n2x-60^\\circ=30^\\circ+360^\\circ n\n\\]\neller\n\\[\n2x-60^\\circ=150^\\circ+360^\\circ n.\n\\]</p>\n<p>Därför</p>\n<p><strong>\\(x=45^\\circ+180^\\circ n\\) eller \\(x=105^\\circ+180^\\circ n\\).</strong></p>\n<p>c) En produkt är noll om någon faktor är noll:</p>\n<p>\\[\n\\sin x=0 \\quad\\text{eller}\\quad \\cos x=0.\n\\]</p>\n<p>Tillsammans ger detta <strong>\\(x=90^\\circ n\\)</strong>.</p>\n<p>I alla fall är \\(n\\in\\mathbb Z\\).</p>",
    "familj": "kallmaterial_trigekv_rutinpaket"
  },
  {
    "id": "1.93",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Uttrycket är</p><p>\\[E(x)=\\sqrt3\\sin x+\\cos x.\\]</p><p>a) Skriv \\(E(x)\\) på formen \\(R\\sin(x+\\varphi)\\), där \\(R&gt;0\\) och \\(0&lt;\\varphi&lt;\\pi/2\\).<br>b) Bestäm uttryckets största värde.<br>c) Lös \\(E(x)=1\\) för \\(0\\le x&lt;2\\pi\\).</p>",
    "s": "<p>Jämför</p><p>\\[R\\sin(x+\\varphi)=R\\cos\\varphi\\sin x+R\\sin\\varphi\\cos x.\\]</p>\n<p>Därför ska \\(R\\cos\\varphi=\\sqrt3\\) och \\(R\\sin\\varphi=1\\). Då</p><p>\\[R=\\sqrt{3+1}=2,\\qquad \\varphi=\\frac\\pi6.\\]</p>\n<p>a) <strong>\\(E(x)=2\\sin(x+\\pi/6)\\)</strong>.</p>\n<p>b) Sinus kan som mest vara 1, alltså är största värdet <strong>2</strong>.</p>\n<p>c) \\(2\\sin(x+\\pi/6)=1\\Rightarrow\\sin(x+\\pi/6)=1/2\\).</p><p>Det ger \\(x+\\pi/6=\\pi/6+2n\\pi\\) eller \\(x+\\pi/6=5\\pi/6+2n\\pi\\).</p><p>I intervallet fås <strong>\\(x=0\\) eller \\(x=2\\pi/3\\)</strong>.</p>",
    "familj": "sin_cos_kombination_exakt"
  },
  {
    "id": "1.94",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Visa, med utgångspunkt i additionsformlerna, att</p><p>\\[\\frac{\\sin x+\\sin3x}{\\cos x+\\cos3x}=\\tan2x\\]</p><p>för alla \\(x\\) där båda leden är definierade.</p>",
    "s": "<p>Skriv \\(\\sin3x=\\sin(2x+x)=\\sin2x\\cos x+\\cos2x\\sin x\\) och motsvarande för \\(\\cos3x\\). Ett effektivare sätt är att först härleda summorna från additionsformlerna:</p><p>\\[\\sin x+\\sin3x=2\\sin2x\\cos x,\\]</p><p>\\[\\cos x+\\cos3x=2\\cos2x\\cos x.\\]</p><p>Där uttrycken är definierade kan gemensamma faktorn \\(2\\cos x\\) förkortas:</p><p>\\[\\frac{2\\sin2x\\cos x}{2\\cos2x\\cos x}=\\boxed{\\tan2x}.\\]</p>",
    "familj": "identitet_summa_via_addition_a"
  },
  {
    "id": "1.95",
    "kap": 1,
    "omr": "fasforskjutning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv om så att fasförskjutningen syns i formen \\(A\\sin(k(x-x_0))+B\\) eller \\(A\\cos(k(x-x_0))+B\\).</p><p>a) \\(y=2\\sin(3x-\\pi)\\)<br>b) \\(y=4\\cos(2x+\\frac{\\pi}{2})-1\\)<br>c) \\(y=\\sin(5x-\\frac{\\pi}{2})\\)<br>d) \\(y=3\\cos(4x-\\pi)+2\\)</p>",
    "s": "<p>a) \\(3x-\\pi=3(x-\\pi/3)\\): <strong>\\(2\\sin(3(x-\\pi/3))\\)</strong>.</p><p>b) \\(2x+\\pi/2=2(x+\\pi/4)\\): <strong>\\(4\\cos(2(x+\\pi/4))-1\\)</strong>.</p><p>c) \\(5x-\\pi/2=5(x-\\pi/10)\\): <strong>\\(\\sin(5(x-\\pi/10))\\)</strong>.</p><p>d) \\(4x-\\pi=4(x-\\pi/4)\\): <strong>\\(3\\cos(4(x-\\pi/4))+2\\)</strong>.</p>",
    "familj": "proc_fasforskjutning_faktorisera_2"
  },
  {
    "id": "1.96",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En trigonometrisk funktion har maximivärdet 7 och minimivärdet −1. Två på varandra följande maximipunkter har x-koordinaterna \\(\\pi/6\\) och \\(7\\pi/6\\).</p><p>Bestäm en funktion på formen \\(f(x)=A\\cos(k(x-c))+B\\) som uppfyller villkoren.</p>",
    "s": "<p>Amplitud \\(A=(7-(-1))/2=4\\) och medellinje \\(B=(7+(-1))/2=3\\).</p><p>Perioden är \\(7\\pi/6-\\pi/6=\\pi\\), så \\(k=2\\pi/T=2\\).</p><p>En maximipunkt fås vid \\(x=c\\), alltså kan \\(c=\\pi/6\\).</p><p><strong>\\[\\boxed{f(x)=4\\cos\\left(2\\left(x-\\frac\\pi6\\right)\\right)+3}.\\]</strong></p>",
    "familj": "bestam_trig_extremdata"
  },
  {
    "id": "1.97",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Förenkla så långt som möjligt.</p><p>a) \\(4\\sin x\\cos x\\)<br>b) \\(3-6\\sin^2x\\)<br>c) \\(2\\cos^2x-2\\sin^2x\\)<br>d) \\(\\frac{\\sin 2x}{\\cos x}\\)</p>",
    "s": "<p>a) \\(4\\sin x\\cos x=\\)<strong>\\(2\\sin2x\\)</strong>.</p><p>b) \\(3(1-2\\sin^2x)=\\)<strong>\\(3\\cos2x\\)</strong>.</p><p>c) \\(2(\\cos^2x-\\sin^2x)=\\)<strong>\\(2\\cos2x\\)</strong>.</p><p>d) \\(\\frac{2\\sin x\\cos x}{\\cos x}=\\)<strong>\\(2\\sin x\\)</strong>, där uttrycket är definierat.</p>",
    "familj": "proc_dubbla_vinkeln_forenkling"
  },
  {
    "id": "1.98",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\).</p><p>a) \\(2\\sin x=\\sqrt3\\)<br>b) \\(3\\cos x=-\\frac32\\)<br>c) \\(\\tan x=-1\\)<br>d) \\(4\\cos x=0\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm referensvinkeln och välj de kvadranter där funktionen har rätt tecken.</p><p>a) <strong>\\(60^\\circ,120^\\circ\\)</strong>.<br>b) <strong>\\(120^\\circ,240^\\circ\\)</strong>.<br>c) <strong>\\(135^\\circ,315^\\circ\\)</strong>.<br>d) <strong>\\(90^\\circ,270^\\circ\\)</strong>.</p>",
    "familj": "proc_trigekv_interval_grader"
  },
  {
    "id": "1.99",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös algebraiskt</p><p>\\[2\\sin^2x-3\\sin x+1=0\\]</p><p>för \\(0\\le x&lt;2\\pi\\).</p>",
    "s": "<p><strong>Metod:</strong> Skriv först om ekvationen så att du får vanliga trigonometriska grundekvationer. Använd identiteter eller faktorisering innan du löser vinklarna.</p><p>Sätt \\(u=\\sin x\\). Då</p><p>\\[2u^2-3u+1=(2u-1)(u-1)=0.\\]</p><p>Alltså \\(\\sin x=1/2\\) eller \\(\\sin x=1\\).</p><p>I intervallet fås <strong>\\(\\boxed{x=\\pi/6,\\ \\pi/2,\\ 5\\pi/6}\\)</strong>.</p>",
    "familj": "trigekv_kvadratisk_sin"
  },
  {
    "id": "1.100",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Grafen visar \\(y=\\tan x\\).</p><span class=\"fig\"><svg width=\"470\" height=\"245\" viewBox=\"0 0 470 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till tangensfunktionen med lodräta asymptoter\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"60\" y1=\"205.0\" x2=\"440\" y2=\"205.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"182.5\" x2=\"440\" y2=\"182.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"160.0\" x2=\"440\" y2=\"160.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"137.5\" x2=\"440\" y2=\"137.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"115.0\" x2=\"440\" y2=\"115.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"92.5\" x2=\"440\" y2=\"92.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"70.0\" x2=\"440\" y2=\"70.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"47.5\" x2=\"440\" y2=\"47.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"25.0\" x2=\"440\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"60.0\" y1=\"25\" x2=\"60.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"60.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-π</text>\n<line x1=\"155.0\" y1=\"25\" x2=\"155.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"155.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-π/2</text>\n<line x1=\"250.0\" y1=\"25\" x2=\"250.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"250.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text>\n<line x1=\"345.0\" y1=\"25\" x2=\"345.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"345.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/2</text>\n<line x1=\"440.0\" y1=\"25\" x2=\"440.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"440.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π</text>\n<line x1=\"60\" y1=\"115.0\" x2=\"440\" y2=\"115.0\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"250.0\" y1=\"25\" x2=\"250.0\" y2=\"205\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"155.0\" y1=\"25\" x2=\"155.0\" y2=\"205\" stroke=\"#268FA3\" stroke-width=\"1.4\" stroke-dasharray=\"6 4\"/>\n<line x1=\"345.0\" y1=\"25\" x2=\"345.0\" y2=\"205\" stroke=\"#268FA3\" stroke-width=\"1.4\" stroke-dasharray=\"6 4\"/>\n<polyline points=\"60.00,115.00 60.72,114.73 61.43,114.47 62.15,114.20 62.87,113.93 63.58,113.67 64.30,113.40 65.02,113.13 65.73,112.86 66.45,112.59 67.17,112.32 67.88,112.05 68.60,111.78 69.32,111.51 70.04,111.23 70.75,110.96 71.47,110.68 72.19,110.40 72.90,110.13 73.62,109.85 74.34,109.56 75.05,109.28 75.77,109.00 76.49,108.71 77.20,108.42 77.92,108.13 78.64,107.84 79.35,107.54 80.07,107.25 80.79,106.95 81.50,106.64 82.22,106.34 82.94,106.03 83.65,105.72 84.37,105.41 85.09,105.09 85.81,104.77 86.52,104.45 87.24,104.12 87.96,103.79 88.67,103.45 89.39,103.12 90.11,102.77 90.82,102.42 91.54,102.07 92.26,101.72 92.97,101.35 93.69,100.99 94.41,100.61 95.12,100.23 95.84,99.85 96.56,99.46 97.27,99.06 97.99,98.66 98.71,98.25 99.42,97.83 100.14,97.40 100.86,96.97 101.58,96.53 102.29,96.08 103.01,95.62 103.73,95.15 104.44,94.67 105.16,94.18 105.88,93.68 106.59,93.17 107.31,92.64 108.03,92.10 108.74,91.56 109.46,90.99 110.18,90.41 110.89,89.82 111.61,89.21 112.33,88.59 113.04,87.94 113.76,87.28 114.48,86.60 115.19,85.90 115.91,85.18 116.63,84.43 117.35,83.66 118.06,82.86 118.78,82.03 119.50,81.18 120.21,80.30 120.93,79.38 121.65,78.42 122.36,77.43 123.08,76.40 123.80,75.33 124.51,74.21 125.23,73.04 125.95,71.82 126.66,70.54 127.38,69.21 128.10,67.80 128.81,66.32 129.53,64.77 130.25,63.13 130.96,61.40 131.68,59.57 132.40,57.62 133.11,55.56 133.83,53.36 134.55,51.02 135.27,48.51 135.98,45.82 136.70,42.93 137.42,39.81 138.13,36.43 138.85,32.76 139.57,28.75 140.28,24.37\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.4\"/>\n<polyline points=\"169.72,205.63 171.15,197.24 172.58,190.19 174.02,184.18 175.45,178.98 176.89,174.44 178.32,170.43 179.75,166.87 181.19,163.68 182.62,160.79 184.05,158.18 185.49,155.79 186.92,153.60 188.35,151.58 189.79,149.70 191.22,147.97 192.65,146.34 194.09,144.82 195.52,143.40 196.96,142.06 198.39,140.79 199.82,139.59 201.26,138.44 202.69,137.36 204.12,136.32 205.56,135.33 206.99,134.38 208.42,133.47 209.86,132.60 211.29,131.75 212.73,130.94 214.16,130.15 215.59,129.39 217.03,128.65 218.46,127.93 219.89,127.23 221.33,126.55 222.76,125.88 224.19,125.23 225.63,124.59 227.06,123.97 228.50,123.36 229.93,122.75 231.36,122.16 232.80,121.58 234.23,121.00 235.66,120.44 237.10,119.87 238.53,119.32 239.96,118.77 241.40,118.22 242.83,117.68 244.27,117.14 245.70,116.60 247.13,116.07 248.57,115.53 250.00,115.00 251.43,114.47 252.87,113.93 254.30,113.40 255.73,112.86 257.17,112.32 258.60,111.78 260.04,111.23 261.47,110.68 262.90,110.13 264.34,109.56 265.77,109.00 267.20,108.42 268.64,107.84 270.07,107.25 271.50,106.64 272.94,106.03 274.37,105.41 275.81,104.77 277.24,104.12 278.67,103.45 280.11,102.77 281.54,102.07 282.97,101.35 284.41,100.61 285.84,99.85 287.27,99.06 288.71,98.25 290.14,97.40 291.58,96.53 293.01,95.62 294.44,94.67 295.88,93.68 297.31,92.64 298.74,91.56 300.18,90.41 301.61,89.21 303.04,87.94 304.48,86.60 305.91,85.18 307.35,83.66 308.78,82.03 310.21,80.30 311.65,78.42 313.08,76.40 314.51,74.21 315.95,71.82 317.38,69.21 318.81,66.32 320.25,63.13 321.68,59.57 323.11,55.56 324.55,51.02 325.98,45.82 327.42,39.81 328.85,32.76 330.28,24.37\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.4\"/>\n<polyline points=\"359.72,205.63 360.43,201.25 361.15,197.24 361.87,193.57 362.58,190.19 363.30,187.07 364.02,184.18 364.73,181.49 365.45,178.98 366.17,176.64 366.89,174.44 367.60,172.38 368.32,170.43 369.04,168.60 369.75,166.87 370.47,165.23 371.19,163.68 371.90,162.20 372.62,160.79 373.34,159.46 374.05,158.18 374.77,156.96 375.49,155.79 376.20,154.67 376.92,153.60 377.64,152.57 378.35,151.58 379.07,150.62 379.79,149.70 380.50,148.82 381.22,147.97 381.94,147.14 382.65,146.34 383.37,145.57 384.09,144.82 384.81,144.10 385.52,143.40 386.24,142.72 386.96,142.06 387.67,141.41 388.39,140.79 389.11,140.18 389.82,139.59 390.54,139.01 391.26,138.44 391.97,137.90 392.69,137.36 393.41,136.83 394.12,136.32 394.84,135.82 395.56,135.33 396.27,134.85 396.99,134.38 397.71,133.92 398.42,133.47 399.14,133.03 399.86,132.60 400.58,132.17 401.29,131.75 402.01,131.34 402.73,130.94 403.44,130.54 404.16,130.15 404.88,129.77 405.59,129.39 406.31,129.01 407.03,128.65 407.74,128.28 408.46,127.93 409.18,127.58 409.89,127.23 410.61,126.88 411.33,126.55 412.04,126.21 412.76,125.88 413.48,125.55 414.19,125.23 414.91,124.91 415.63,124.59 416.35,124.28 417.06,123.97 417.78,123.66 418.50,123.36 419.21,123.05 419.93,122.75 420.65,122.46 421.36,122.16 422.08,121.87 422.80,121.58 423.51,121.29 424.23,121.00 424.95,120.72 425.66,120.44 426.38,120.15 427.10,119.87 427.81,119.60 428.53,119.32 429.25,119.04 429.96,118.77 430.68,118.49 431.40,118.22 432.12,117.95 432.83,117.68 433.55,117.41 434.27,117.14 434.98,116.87 435.70,116.60 436.42,116.33 437.13,116.07 437.85,115.80 438.57,115.53 439.28,115.27 440.00,115.00\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.4\"/>\n</svg></span><p>a) Ange de två lodräta asymptoter som syns närmast origo.<br>\nb) Ange funktionens period.<br>\nc) Ange alla nollställen.</p>",
    "s": "<p>a) Tangens är inte definierad där \\(\\cos x=0\\). Närmast origo är därför</p>\n<p><strong>\\(x=-\\frac{\\pi}{2}\\) och \\(x=\\frac{\\pi}{2}\\).</strong></p>\n<p>b) <strong>Perioden är \\(\\pi\\).</strong></p>\n<p>c) \\(\\tan x=0\\) när \\(\\sin x=0\\), alltså</p>\n<p><strong>\\(x=n\\pi,\\;n\\in\\mathbb Z\\).</strong></p>",
    "familj": "tangens_graf"
  },
  {
    "id": "1.101",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm.</p><p>a) perioden för \\(y=\\tan(3x)\\)<br>b) perioden för \\(y=\\tan(x/2)\\)<br>c) två lodräta asymptoter närmast origo för \\(y=\\tan x\\)<br>d) två lodräta asymptoter närmast origo för \\(y=\\tan(2x)\\).</p>",
    "s": "<p>a) \\(T=\\pi/3\\).</p><p>b) \\(T=2\\pi\\).</p><p>c) <strong>\\(x=-\\pi/2\\)</strong> och <strong>\\(x=\\pi/2\\)</strong>.</p><p>d) \\(2x=\\pi/2+n\\pi\\Rightarrow x=\\pi/4+n\\pi/2\\). Närmast origo: <strong>\\(x=-\\pi/4,\\pi/4\\)</strong>.</p>",
    "familj": "proc_tangens_period_asymptot_2"
  },
  {
    "id": "1.102",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt.</p><p>a) \\(\\tan 45^\\circ\\)<br>b) \\(\\tan 135^\\circ\\)<br>c) \\(\\sin 300^\\circ\\)<br>d) \\(\\cos 240^\\circ\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd standardvinklarna i enhetscirkeln och kontrollera tecknet i rätt kvadrant.</p><p>a) <strong>1</strong><br>b) <strong>−1</strong><br>c) <strong>\\(-\\frac{\\sqrt3}{2}\\)</strong><br>d) <strong>\\(-\\frac12\\)</strong></p>",
    "familj": "proc_trig_enhetscirkel_exakta_2"
  },
  {
    "id": "1.103",
    "kap": 1,
    "omr": "tangensfunktionen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För varje funktion, ange period och alla lodräta asymptoter.</p><p>a) \\(y=\\tan x\\)<br>b) \\(y=\\tan(2x)\\)<br>c) \\(y=\\tan(x-\\frac\\pi4)\\)<br>d) \\(y=2\\tan(3x)+1\\)</p>",
    "s": "<p>a) period <strong>\\(\\pi\\)</strong>, asymptoter <strong>\\(x=\\frac\\pi2+n\\pi\\)</strong>.<br>b) period <strong>\\(\\frac\\pi2\\)</strong>, asymptoter <strong>\\(x=\\frac\\pi4+n\\frac\\pi2\\)</strong>.<br>c) period <strong>\\(\\pi\\)</strong>, asymptoter <strong>\\(x=\\frac{3\\pi}{4}+n\\pi\\)</strong>.<br>d) period <strong>\\(\\frac\\pi3\\)</strong>, asymptoter <strong>\\(x=\\frac\\pi6+n\\frac\\pi3\\)</strong>.</p>",
    "familj": "proc_tangens_period_asymptot"
  },
  {
    "id": "1.104",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Omvandla mellan grader och radianer.</p><p>a) \\(72^\\circ\\)<br>b) \\(330^\\circ\\)<br>c) \\(\\frac{7\\pi}{12}\\)<br>d) \\(\\frac{11\\pi}{6}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(180^\\circ=\\pi\\) rad och multiplicera med rätt omvandlingsfaktor.</p><p>a) <strong>\\(2\\pi/5\\)</strong>.</p><p>b) <strong>\\(11\\pi/6\\)</strong>.</p><p>c) <strong>105°</strong>.</p><p>d) <strong>330°</strong>.</p>",
    "familj": "radianer_rutin_2"
  },
  {
    "id": "1.105",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös ekvationen</p><p>\\[2\\sin x\\cos x=\\frac{\\sqrt3}{2},\\qquad0\\le x&lt;2\\pi.\\]</p>",
    "s": "<p>Använd \\(2\\sin x\\cos x=\\sin2x\\). Då</p><p>\\[\\sin2x=\\frac{\\sqrt3}{2}.\\]</p><p>För \\(0\\le2x&lt;4\\pi\\) fås \\(2x=\\pi/3,2\\pi/3,7\\pi/3,8\\pi/3\\).</p><p><strong>\\(\\boxed{x=\\frac\\pi6,\\frac\\pi3,\\frac{7\\pi}6,\\frac{4\\pi}3}\\)</strong>.</p>",
    "familj": "dubbla_vinkeln_ekvation"
  },
  {
    "id": "1.106",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Grafen visar en funktion av formen \\(f(x)=A\\sin(kx+v)+B\\).</p><span class=\"fig\"><svg width=\"470\" height=\"250\" viewBox=\"0 0 470 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till sinusfunktion\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"248\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"120.5\" y1=\"25\" x2=\"120.5\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"186.0\" y1=\"25\" x2=\"186.0\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"251.5\" y1=\"25\" x2=\"251.5\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"317.0\" y1=\"25\" x2=\"317.0\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"382.5\" y1=\"25\" x2=\"382.5\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"448.0\" y1=\"25\" x2=\"448.0\" y2=\"208\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"208.0\" x2=\"448\" y2=\"208.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"185.1\" x2=\"448\" y2=\"185.1\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"162.2\" x2=\"448\" y2=\"162.2\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"139.4\" x2=\"448\" y2=\"139.4\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"116.5\" x2=\"448\" y2=\"116.5\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"93.6\" x2=\"448\" y2=\"93.6\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"70.8\" x2=\"448\" y2=\"70.8\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"47.9\" x2=\"448\" y2=\"47.9\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"25.0\" x2=\"448\" y2=\"25.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"116.5\" x2=\"448\" y2=\"116.5\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><line x1=\"186.0\" y1=\"25\" x2=\"186.0\" y2=\"208\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><polyline points=\"55.00,54.00 55.66,54.37 56.31,54.74 56.97,55.13 57.62,55.52 58.28,55.92 58.94,56.34 59.59,56.76 60.25,57.19 60.90,57.63 61.56,58.08 62.22,58.54 62.87,59.00 63.53,59.48 64.19,59.96 64.84,60.45 65.50,60.95 66.15,61.46 66.81,61.98 67.47,62.50 68.12,63.03 68.78,63.57 69.43,64.12 70.09,64.67 70.75,65.23 71.40,65.80 72.06,66.37 72.71,66.95 73.37,67.54 74.03,68.14 74.68,68.74 75.34,69.35 75.99,69.96 76.65,70.58 77.31,71.20 77.96,71.83 78.62,72.47 79.28,73.11 79.93,73.75 80.59,74.41 81.24,75.06 81.90,75.72 82.56,76.39 83.21,77.05 83.87,77.73 84.52,78.40 85.18,79.08 85.84,79.77 86.49,80.46 87.15,81.15 87.80,81.84 88.46,82.54 89.12,83.24 89.77,83.94 90.43,84.65 91.09,85.35 91.74,86.06 92.40,86.77 93.05,87.48 93.71,88.20 94.37,88.91 95.02,89.63 95.68,90.35 96.33,91.07 96.99,91.79 97.65,92.51 98.30,93.23 98.96,93.94 99.61,94.66 100.27,95.38 100.93,96.10 101.58,96.82 102.24,97.54 102.89,98.26 103.55,98.97 104.21,99.69 104.86,100.40 105.52,101.11 106.18,101.82 106.83,102.53 107.49,103.23 108.14,103.93 108.80,104.63 109.46,105.33 110.11,106.03 110.77,106.72 111.42,107.40 112.08,108.09 112.74,108.77 113.39,109.45 114.05,110.12 114.70,110.79 115.36,111.46 116.02,112.12 116.67,112.77 117.33,113.42 117.98,114.07 118.64,114.71 119.30,115.35 119.95,115.98 120.61,116.60 121.27,117.22 121.92,117.84 122.58,118.44 123.23,119.05 123.89,119.64 124.55,120.23 125.20,120.81 125.86,121.39 126.51,121.96 127.17,122.52 127.83,123.07 128.48,123.62 129.14,124.16 129.79,124.69 130.45,125.22 131.11,125.73 131.76,126.24 132.42,126.74 133.08,127.24 133.73,127.72 134.39,128.20 135.04,128.66 135.70,129.12 136.36,129.57 137.01,130.01 137.67,130.44 138.32,130.87 138.98,131.28 139.64,131.68 140.29,132.08 140.95,132.46 141.60,132.84 142.26,133.21 142.92,133.56 143.57,133.91 144.23,134.24 144.88,134.57 145.54,134.89 146.20,135.19 146.85,135.49 147.51,135.77 148.17,136.05 148.82,136.31 149.48,136.57 150.13,136.81 150.79,137.04 151.45,137.26 152.10,137.47 152.76,137.67 153.41,137.86 154.07,138.04 154.73,138.21 155.38,138.36 156.04,138.51 156.69,138.64 157.35,138.77 158.01,138.88 158.66,138.98 159.32,139.07 159.97,139.14 160.63,139.21 161.29,139.27 161.94,139.31 162.60,139.34 163.26,139.36 163.91,139.37 164.57,139.37 165.22,139.36 165.88,139.34 166.54,139.30 167.19,139.25 167.85,139.20 168.50,139.13 169.16,139.05 169.82,138.96 170.47,138.85 171.13,138.74 171.78,138.61 172.44,138.48 173.10,138.33 173.75,138.17 174.41,138.00 175.07,137.82 175.72,137.63 176.38,137.43 177.03,137.21 177.69,136.99 178.35,136.76 179.00,136.51 179.66,136.25 180.31,135.99 180.97,135.71 181.63,135.42 182.28,135.13 182.94,134.82 183.59,134.50 184.25,134.17 184.91,133.83 185.56,133.48 186.22,133.13 186.87,132.76 187.53,132.38 188.19,131.99 188.84,131.60 189.50,131.19 190.16,130.77 190.81,130.35 191.47,129.91 192.12,129.47 192.78,129.02 193.44,128.56 194.09,128.09 194.75,127.61 195.40,127.13 196.06,126.63 196.72,126.13 197.37,125.62 198.03,125.10 198.68,124.57 199.34,124.04 200.00,123.50 200.65,122.95 201.31,122.39 201.96,121.83 202.62,121.26 203.28,120.68 203.93,120.10 204.59,119.51 205.25,118.91 205.90,118.31 206.56,117.70 207.21,117.09 207.87,116.47 208.53,115.84 209.18,115.21 209.84,114.57 210.49,113.93 211.15,113.28 211.81,112.63 212.46,111.97 213.12,111.31 213.77,110.64 214.43,109.97 215.09,109.30 215.74,108.62 216.40,107.94 217.06,107.25 217.71,106.56 218.37,105.87 219.02,105.18 219.68,104.48 220.34,103.78 220.99,103.07 221.65,102.37 222.30,101.66 222.96,100.95 223.62,100.24 224.27,99.53 224.93,98.81 225.58,98.10 226.24,97.38 226.90,96.66 227.55,95.94 228.21,95.22 228.86,94.50 229.52,93.78 230.18,93.07 230.83,92.35 231.49,91.63 232.15,90.91 232.80,90.19 233.46,89.47 234.11,88.76 234.77,88.04 235.43,87.33 236.08,86.61 236.74,85.90 237.39,85.20 238.05,84.49 238.71,83.78 239.36,83.08 240.02,82.38 240.67,81.69 241.33,80.99 241.99,80.30 242.64,79.62 243.30,78.93 243.95,78.25 244.61,77.58 245.27,76.91 245.92,76.24 246.58,75.57 247.24,74.91 247.89,74.26 248.55,73.61 249.20,72.97 249.86,72.33 250.52,71.69 251.17,71.06 251.83,70.44 252.48,69.82 253.14,69.21 253.80,68.60 254.45,68.00 255.11,67.41 255.76,66.82 256.42,66.24 257.08,65.67 257.73,65.10 258.39,64.55 259.05,63.99 259.70,63.45 260.36,62.91 261.01,62.38 261.67,61.86 262.33,61.35 262.98,60.84 263.64,60.34 264.29,59.85 264.95,59.37 265.61,58.90 266.26,58.43 266.92,57.98 267.57,57.53 268.23,57.09 268.89,56.66 269.54,56.24 270.20,55.83 270.85,55.43 271.51,55.04 272.17,54.66 272.82,54.29 273.48,53.92 274.14,53.57 274.79,53.23 275.45,52.90 276.10,52.57 276.76,52.26 277.42,51.96 278.07,51.67 278.73,51.38 279.38,51.11 280.04,50.85 280.70,50.60 281.35,50.36 282.01,50.13 282.66,49.92 283.32,49.71 283.98,49.51 284.63,49.33 285.29,49.15 285.94,48.99 286.60,48.84 287.26,48.70 287.91,48.57 288.57,48.45 289.23,48.34 289.88,48.24 290.54,48.16 291.19,48.08 291.85,48.02 292.51,47.97 293.16,47.93 293.82,47.90 294.47,47.88 295.13,47.88 295.79,47.88 296.44,47.90 297.10,47.92 297.75,47.96 298.41,48.01 299.07,48.07 299.72,48.15 300.38,48.23 301.04,48.33 301.69,48.43 302.35,48.55 303.00,48.68 303.66,48.82 304.32,48.97 304.97,49.13 305.63,49.31 306.28,49.49 306.94,49.69 307.60,49.89 308.25,50.11 308.91,50.34 309.56,50.58 310.22,50.82 310.88,51.08 311.53,51.35 312.19,51.63 312.84,51.93 313.50,52.23 314.16,52.54 314.81,52.86 315.47,53.19 316.13,53.53 316.78,53.88 317.44,54.25 318.09,54.62 318.75,55.00 319.41,55.39 320.06,55.79 320.72,56.20 321.37,56.62 322.03,57.04 322.69,57.48 323.34,57.93 324.00,58.38 324.65,58.85 325.31,59.32 325.97,59.80 326.62,60.29 327.28,60.78 327.93,61.29 328.59,61.80 329.25,62.32 329.90,62.85 330.56,63.39 331.22,63.93 331.87,64.48 332.53,65.04 333.18,65.61 333.84,66.18 334.50,66.76 335.15,67.35 335.81,67.94 336.46,68.54 337.12,69.14 337.78,69.75 338.43,70.37 339.09,70.99 339.74,71.62 340.40,72.26 341.06,72.89 341.71,73.54 342.37,74.19 343.03,74.84 343.68,75.50 344.34,76.16 344.99,76.83 345.65,77.50 346.31,78.18 346.96,78.86 347.62,79.54 348.27,80.23 348.93,80.92 349.59,81.61 350.24,82.31 350.90,83.01 351.55,83.71 352.21,84.41 352.87,85.12 353.52,85.83 354.18,86.54 354.83,87.25 355.49,87.96 356.15,88.68 356.80,89.39 357.46,90.11 358.12,90.83 358.77,91.55 359.43,92.27 360.08,92.99 360.74,93.70 361.40,94.42 362.05,95.14 362.71,95.86 363.36,96.58 364.02,97.30 364.68,98.02 365.33,98.73 365.99,99.45 366.64,100.16 367.30,100.87 367.96,101.58 368.61,102.29 369.27,103.00 369.92,103.70 370.58,104.40 371.24,105.10 371.89,105.79 372.55,106.49 373.21,107.18 373.86,107.86 374.52,108.54 375.17,109.22 375.83,109.90 376.49,110.57 377.14,111.23 377.80,111.90 378.45,112.55 379.11,113.21 379.77,113.86 380.42,114.50 381.08,115.14 381.73,115.77 382.39,116.40 383.05,117.02 383.70,117.63 384.36,118.24 385.02,118.85 385.67,119.44 386.33,120.04 386.98,120.62 387.64,121.20 388.30,121.77 388.95,122.33 389.61,122.89 390.26,123.44 390.92,123.98 391.58,124.52 392.23,125.04 392.89,125.56 393.54,126.07 394.20,126.58 394.86,127.07 395.51,127.56 396.17,128.04 396.82,128.51 397.48,128.97 398.14,129.42 398.79,129.87 399.45,130.30 400.11,130.73 400.76,131.14 401.42,131.55 402.07,131.95 402.73,132.34 403.39,132.72 404.04,133.08 404.70,133.44 405.35,133.79 406.01,134.13 406.67,134.46 407.32,134.78 407.98,135.09 408.63,135.39 409.29,135.68 409.95,135.96 410.60,136.22 411.26,136.48 411.91,136.73 412.57,136.96 413.23,137.19 413.88,137.40 414.54,137.61 415.20,137.80 415.85,137.98 416.51,138.15 417.16,138.31 417.82,138.46 418.48,138.60 419.13,138.73 419.79,138.84 420.44,138.94 421.10,139.04 421.76,139.12 422.41,139.19 423.07,139.25 423.72,139.30 424.38,139.33 425.04,139.36 425.69,139.37 426.35,139.37 427.01,139.37 427.66,139.35 428.32,139.31 428.97,139.27 429.63,139.22 430.29,139.15 430.94,139.08 431.60,138.99 432.25,138.89 432.91,138.78 433.57,138.66 434.22,138.52 434.88,138.38 435.53,138.23 436.19,138.06 436.85,137.88 437.50,137.69 438.16,137.50 438.81,137.29 439.47,137.07 440.13,136.83 440.78,136.59 441.44,136.34 442.10,136.08 442.75,135.80 443.41,135.52 444.06,135.23 444.72,134.92 445.38,134.61 446.03,134.28 446.69,133.95 447.34,133.60 448.00,133.25\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\"/></svg></span><p>Det är känt att \\(A>0\\), \\(k>0\\) och \\(-\\pi&lt;v\\le\\pi\\). Bestäm \\(A\\), \\(k\\), \\(v\\) och \\(B\\) och motivera att fasförskjutningen är entydigt bestämd under dessa villkor.</p>",
    "s": "<p>Maxvärdet är 3 och minvärdet −1, vilket ger \\(A=2\\) och \\(B=1\\). Avståndet mellan två likadana lägen i grafen är \\(2\\pi\\), alltså \\(k=1\\).</p><p>Grafen passerar medellinjen uppåt vid \\(x=\\pi/3\\). För en sinusfunktion sker detta när argumentet är \\(0\\) modulo \\(2\\pi\\):</p><p>\\[\\pi/3+v=0\\pmod{2\\pi}.\\]</p><p>Med villkoret \\(-\\pi&lt;v\\le\\pi\\) fås entydigt <strong>\\(v=-\\pi/3\\)</strong>.</p><p><strong>\\(f(x)=2\\sin(x-\\pi/3)+1\\).</strong></p>",
    "familj": "bestam_trig_graf_a2"
  },
  {
    "id": "1.107",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Omvandla.</p><p>a) \\(30^\\circ\\) till radianer<br>b) \\(135^\\circ\\) till radianer<br>c) \\(5\\pi/6\\) rad till grader<br>d) \\(7\\pi/4\\) rad till grader.</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(180^\\circ=\\pi\\) rad och multiplicera med rätt omvandlingsfaktor.</p><p>a) <strong>\\(\\pi/6\\)</strong>.<br>b) <strong>\\(3\\pi/4\\)</strong>.<br>c) <strong>150°</strong>.<br>d) <strong>315°</strong>.</p>",
    "familj": "proc_radian_grad_3"
  },
  {
    "id": "1.108",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Skriv uttrycket</p><p>\\[3\\sin x-4\\cos x\\]</p><p>på formen \\(R\\sin(x-\\varphi)\\), där \\(R&gt;0\\) och \\(0&lt;\\varphi&lt;\\pi/2\\). Bestäm därefter uttryckets största och minsta värde.</p>",
    "s": "<p>Jämför</p><p>\\[R\\sin(x-\\varphi)=R\\cos\\varphi\\sin x-R\\sin\\varphi\\cos x.\\]</p><p>Då krävs \\(R\\cos\\varphi=3\\) och \\(R\\sin\\varphi=4\\). Alltså \\(R=5\\) och \\(\\tan\\varphi=4/3\\).</p><p><strong>\\(3\\sin x-4\\cos x=5\\sin(x-\\arctan(4/3))\\)</strong>.</p><p>Största värde: <strong>5</strong>. Minsta värde: <strong>−5</strong>.</p>",
    "familj": "asin_bcos_3_4"
  },
  {
    "id": "1.109",
    "kap": 1,
    "omr": "dubbla_vinkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Visa att</p>\n<p>\\[\n\\frac{\\sin2x}{2\\cos x}=\\sin x\n\\]</p>\n<p>för alla \\(x\\) där vänsterledet är definierat.</p>",
    "s": "<p>Använd formeln för dubbla vinkeln:</p>\n<p>\\[\n\\sin2x=2\\sin x\\cos x.\n\\]</p>\n<p>Då blir</p>\n<p>\\[\n\\frac{\\sin2x}{2\\cos x}\n=\n\\frac{2\\sin x\\cos x}{2\\cos x}\n=\\sin x.\n\\]</p>\n<p>Förkortningen är tillåten när \\(\\cos x\\ne0\\), vilket är precis det villkor som krävs för att vänsterledet ska vara definierat.</p>\n<p><strong>Identiteten är visad.</strong></p>",
    "familj": "kallmaterial_dubbelvinkel_bevis"
  },
  {
    "id": "1.110",
    "kap": 1,
    "omr": "symmetrier_enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt.</p>\n<p>a) \\(\\sin 30^\\circ\\)<br>\nb) \\(\\cos 150^\\circ\\)<br>\nc) \\(\\tan 225^\\circ\\)<br>\nd) \\(\\sin(-60^\\circ)\\)</p>",
    "s": "<p>a) \\(\\sin30^\\circ=\\frac12\\).</p>\n<p>b) \\(150^\\circ=180^\\circ-30^\\circ\\), alltså \\(\\cos150^\\circ=-\\cos30^\\circ=-\\frac{\\sqrt3}{2}\\).</p>\n<p>c) Tangens har perioden \\(180^\\circ\\): \\(\\tan225^\\circ=\\tan45^\\circ=1\\).</p>\n<p>d) Sinus är udda: \\(\\sin(-60^\\circ)=-\\sin60^\\circ=-\\frac{\\sqrt3}{2}\\).</p>",
    "familj": "exakta_trigvarden"
  },
  {
    "id": "1.111",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös i intervallet \\(0\\le x&lt;2\\pi\\).</p><p>a) \\(2\\cos x+1=0\\)<br>b) \\(\\sin x=-1\\)</p>",
    "s": "<p>a) \\(\\cos x=-1/2\\Rightarrow\\boxed{x=2\\pi/3,4\\pi/3}\\).</p><p>b) \\(\\sin x=-1\\Rightarrow\\boxed{x=3\\pi/2}\\).</p>",
    "familj": "trigekv_grunder_radianer"
  },
  {
    "id": "1.112",
    "kap": 1,
    "omr": "trig_identiteter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Visa att</p><p>\\[\\frac{\\sin x+\\tan x}{1+\\cos x}=\\tan x\\]</p><p>för alla \\(x\\) där båda leden är definierade.</p>",
    "s": "<p>Utgå från vänsterledet och skriv \\(\\tan x=\\sin x/\\cos x\\):</p><p>\\[\\frac{\\sin x+\\sin x/\\cos x}{1+\\cos x}=\\frac{\\sin x(\\cos x+1)}{\\cos x(1+\\cos x)}=\\frac{\\sin x}{\\cos x}=\\tan x.\\]</p><p>För alla \\(x\\) där ursprungsuttrycken är definierade är förkortningen tillåten. Identiteten är då visad.</p>",
    "familj": "kallmaterial_identitet_sin_tan"
  },
  {
    "id": "1.113",
    "kap": 1,
    "omr": "radianer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Använd radianmått.</p><p>a) En cirkel har radien 6 cm. Bestäm båglängden som hör till vinkeln \\(2\\pi/3\\).<br>b) Samma cirkel: bestäm sektorns area.<br>c) En båge är 10 cm lång i en cirkel med radien 4 cm. Bestäm medelpunktsvinkeln i radianer.</p>",
    "s": "<p>a) \\(s=r\\theta=6\\cdot2\\pi/3=\\boxed{4\\pi\\text{ cm}}\\).</p><p>b) \\(A=\\frac12r^2\\theta=\\frac12\\cdot36\\cdot2\\pi/3=\\boxed{12\\pi\\text{ cm}^2}\\).</p><p>c) \\(\\theta=s/r=10/4=\\boxed{2,5\\text{ rad}}\\).</p>",
    "familj": "proc_radian_bage_sektor_2"
  },
  {
    "id": "1.114",
    "kap": 1,
    "omr": "symmetrier_enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Punkten i figuren motsvarar vinkeln \\(140^\\circ\\).</p><span class=\"fig\"><svg width=\"360\" height=\"260\" viewBox=\"0 0 360 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"358\" height=\"258\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"45\" y1=\"132\" x2=\"315\" y2=\"132\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"235\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"180\" cy=\"132\" r=\"84\" fill=\"#F7FAFB\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"180\" y1=\"132\" x2=\"115.7\" y2=\"78.0\" stroke=\"#B43123\" stroke-width=\"2.5\"/><circle cx=\"115.7\" cy=\"78.0\" r=\"4.5\" fill=\"#B43123\"/><path d=\"M 215 132 A 35 35 0 0 0 153.2 109.5\" fill=\"none\" stroke=\"#5C575E\" stroke-width=\"1.4\"/><text x=\"218\" y=\"111\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">140°</text><text x=\"326\" y=\"127\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#2B2527\">x</text><text x=\"187\" y=\"24\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#2B2527\">y</text></svg></span><p>Bestäm exakt sambandet mellan \\(\\sin 140^\\circ\\), \\(\\cos 140^\\circ\\) och motsvarande värden för vinkeln \\(40^\\circ\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd symmetrin i enhetscirkeln och kontrollera vilket tecken funktionen ska ha i den aktuella kvadranten.</p><p>Vinklarna är speglingar i y-axeln. Därför är <strong>\\(\\sin140^\\circ=\\sin40^\\circ\\)</strong> och <strong>\\(\\cos140^\\circ=-\\cos40^\\circ\\)</strong>.</p>",
    "familj": "enhetscirkel_symmetri_figur"
  },
  {
    "id": "1.115",
    "kap": 1,
    "omr": "enhetscirkeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt.</p><p>a) \\(\\sin\\frac{7\\pi}{6}\\)<br>b) \\(\\cos\\frac{5\\pi}{3}\\)<br>c) \\(\\tan\\frac{3\\pi}{4}\\)<br>d) \\(\\cos\\pi+\\sin\\frac{3\\pi}{2}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd standardvinklarna i enhetscirkeln och kontrollera tecknet i rätt kvadrant.</p><p>a) <strong>\\(-\\frac12\\)</strong><br>b) <strong>\\(\\frac12\\)</strong><br>c) <strong>\\(-1\\)</strong><br>d) \\(-1-1=\\)<strong>−2</strong>.</p>",
    "familj": "enhetscirkel_exakta_varden_ny"
  },
  {
    "id": "1.116",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Skriv uttrycket</p>\n<p>\\[\n3\\sin x+4\\cos x\n\\]</p>\n<p>på formen</p>\n<p>\\[\nR\\sin(x+v),\n\\]</p>\n<p>där \\(R&gt;0\\). Bestäm därefter uttryckets största möjliga värde.</p>",
    "s": "<p>Utveckla</p>\n<p>\\[\nR\\sin(x+v)=R\\sin x\\cos v+R\\cos x\\sin v.\n\\]</p>\n<p>Jämför koefficienter:</p>\n<p>\\[\nR\\cos v=3,\\qquad R\\sin v=4.\n\\]</p>\n<p>Kvadrera och addera:</p>\n<p>\\[\nR^2(\\cos^2v+\\sin^2v)=3^2+4^2=25.\n\\]</p>\n<p>Alltså \\(R=5\\).</p>\n<p>Vidare</p>\n<p>\\[\n\\cos v=\\frac35,\\qquad \\sin v=\\frac45,\n\\]</p>\n<p>så exempelvis \\(v=\\arctan(4/3)\\).</p>\n<p><strong>\\[\n3\\sin x+4\\cos x=5\\sin\\left(x+\\arctan\\frac43\\right).\n\\]</strong></p>\n<p>Eftersom sinus högst kan bli 1 är uttryckets största värde <strong>5</strong>.</p>",
    "familj": "asin_bcos_omskrivning"
  },
  {
    "id": "1.117",
    "kap": 1,
    "omr": "trig_modeller",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En gondols höjd över marken varierar periodiskt enligt grafen.</p><span class=\"fig\"><svg width=\"500\" height=\"280\" viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Höjd över tid\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"278\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"242\" stroke=\"#E8ECEF\"/><line x1=\"124.5\" y1=\"25\" x2=\"124.5\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"124.5\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"194.0\" y1=\"25\" x2=\"194.0\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"194.0\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">8</text><line x1=\"263.5\" y1=\"25\" x2=\"263.5\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"263.5\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">12</text><line x1=\"333.0\" y1=\"25\" x2=\"333.0\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"333.0\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">16</text><line x1=\"402.5\" y1=\"25\" x2=\"402.5\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"402.5\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">20</text><line x1=\"472.0\" y1=\"25\" x2=\"472.0\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"472.0\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">24</text><line x1=\"55\" y1=\"198.6\" x2=\"472\" y2=\"198.6\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"202.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">10</text><line x1=\"55\" y1=\"155.2\" x2=\"472\" y2=\"155.2\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"159.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">20</text><line x1=\"55\" y1=\"111.8\" x2=\"472\" y2=\"111.8\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"115.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">30</text><line x1=\"55\" y1=\"68.4\" x2=\"472\" y2=\"68.4\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"72.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">40</text><line x1=\"55\" y1=\"25.0\" x2=\"472\" y2=\"25.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"29.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">50</text><line x1=\"55\" y1=\"242.0\" x2=\"472\" y2=\"242.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"242\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55.0,159.5 56.9,155.6 58.8,151.6 60.7,147.4 62.6,143.2 64.5,138.9 66.4,134.5 68.3,130.1 70.2,125.7 72.1,121.2 74.0,116.8 75.8,112.3 77.7,107.9 79.6,103.5 81.5,99.2 83.4,94.9 85.3,90.8 87.2,86.7 89.1,82.7 91.0,78.9 92.9,75.2 94.8,71.6 96.7,68.2 98.6,65.0 100.5,61.9 102.4,59.1 104.3,56.4 106.2,54.0 108.1,51.7 110.0,49.7 111.9,48.0 113.8,46.4 115.7,45.1 117.5,44.1 119.4,43.3 121.3,42.7 123.2,42.4 125.1,42.4 127.0,42.6 128.9,43.1 130.8,43.8 132.7,44.7 134.6,46.0 136.5,47.4 138.4,49.1 140.3,51.0 142.2,53.2 144.1,55.6 146.0,58.2 147.9,61.0 149.8,63.9 151.7,67.1 153.6,70.5 155.5,74.0 157.4,77.6 159.2,81.4 161.1,85.3 163.0,89.4 164.9,93.5 166.8,97.8 168.7,102.1 170.6,106.4 172.5,110.8 174.4,115.3 176.3,119.7 178.2,124.2 180.1,128.6 182.0,133.1 183.9,137.4 185.8,141.8 187.7,146.0 189.6,150.2 191.5,154.3 193.4,158.2 195.3,162.1 197.2,165.8 199.1,169.4 201.0,172.8 202.8,176.0 204.7,179.0 206.6,181.9 208.5,184.5 210.4,187.0 212.3,189.2 214.2,191.2 216.1,193.0 218.0,194.5 219.9,195.8 221.8,196.9 223.7,197.7 225.6,198.2 227.5,198.5 229.4,198.6 231.3,198.4 233.2,197.9 235.1,197.2 237.0,196.2 238.9,195.0 240.8,193.5 242.7,191.8 244.5,189.9 246.4,187.8 248.3,185.4 250.2,182.8 252.1,180.0 254.0,177.0 255.9,173.8 257.8,170.5 259.7,167.0 261.6,163.3 263.5,159.5 265.4,155.6 267.3,151.6 269.2,147.4 271.1,143.2 273.0,138.9 274.9,134.5 276.8,130.1 278.7,125.7 280.6,121.2 282.5,116.8 284.3,112.3 286.2,107.9 288.1,103.5 290.0,99.2 291.9,94.9 293.8,90.8 295.7,86.7 297.6,82.7 299.5,78.9 301.4,75.2 303.3,71.6 305.2,68.2 307.1,65.0 309.0,61.9 310.9,59.1 312.8,56.4 314.7,54.0 316.6,51.7 318.5,49.7 320.4,48.0 322.3,46.4 324.2,45.1 326.1,44.1 327.9,43.3 329.8,42.7 331.7,42.4 333.6,42.4 335.5,42.6 337.4,43.1 339.3,43.8 341.2,44.7 343.1,46.0 345.0,47.4 346.9,49.1 348.8,51.0 350.7,53.2 352.6,55.6 354.5,58.2 356.4,61.0 358.3,63.9 360.2,67.1 362.1,70.5 364.0,74.0 365.9,77.6 367.8,81.4 369.6,85.3 371.5,89.4 373.4,93.5 375.3,97.8 377.2,102.1 379.1,106.4 381.0,110.8 382.9,115.3 384.8,119.7 386.7,124.2 388.6,128.6 390.5,133.1 392.4,137.4 394.3,141.8 396.2,146.0 398.1,150.2 400.0,154.3 401.9,158.2 403.8,162.1 405.7,165.8 407.6,169.4 409.4,172.8 411.3,176.0 413.2,179.0 415.1,181.9 417.0,184.5 418.9,187.0 420.8,189.2 422.7,191.2 424.6,193.0 426.5,194.5 428.4,195.8 430.3,196.9 432.2,197.7 434.1,198.2 436.0,198.5 437.9,198.6 439.8,198.4 441.7,197.9 443.6,197.2 445.5,196.2 447.4,195.0 449.3,193.5 451.2,191.8 453.0,189.9 454.9,187.8 456.8,185.4 458.7,182.8 460.6,180.0 462.5,177.0 464.4,173.8 466.3,170.5 468.2,167.0 470.1,163.3 472.0,159.5\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"438.6\" y=\"190.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">h(t)</text><circle cx=\"124.5\" cy=\"42.4\" r=\"4.5\" fill=\"#B43123\"/><text x=\"131.5\" y=\"34.4\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">max</text><circle cx=\"228.8\" cy=\"198.6\" r=\"4.5\" fill=\"#B43123\"/><text x=\"235.8\" y=\"190.6\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">min</text><text x=\"470\" y=\"234.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"63.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>a) Bestäm en cosinusmodell \\(h(t)=A\\cos(k(t-t_0))+B\\).<br>b) Hur lång tid under ett varv är gondolen högre än 37 m?</p>",
    "s": "<p>Max = 46, min = 10, alltså \\(A=18\\), \\(B=28\\). Från max vid \\(t=4\\) till min vid \\(t=10\\) går en halv period, alltså \\(T=12\\) och \\(k=2\\pi/T=\\pi/6\\).</p><p>En modell är</p><p>\\[\\boxed{h(t)=18\\cos\\left(\\frac\\pi6(t-4)\\right)+28}.\\]</p><p>Villkoret \\(h&gt;37\\) ger \\(\\cos u>1/2\\). Under en hel period gäller detta under \\(2\\pi/3\\) av totalt \\(2\\pi\\), alltså en tredjedel av perioden.</p><p><strong>\\(\\boxed{4\\text{ h}}\\)</strong>.</p>",
    "familj": "gondol_modell_troskel_svg"
  },
  {
    "id": "1.118",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla.</p><p>a) \\(1-\\sin^2x\\)<br>b) \\(1-\\cos^2x\\)<br>c) \\(\\frac{1-\\cos^2x}{\\sin x}\\)<br>d) \\(\\sin^2x+2\\cos^2x-1\\)</p>",
    "s": "<p>a) <strong>\\(\\cos^2x\\)</strong><br>b) <strong>\\(\\sin^2x\\)</strong><br>c) <strong>\\(\\sin x\\)</strong>, där uttrycket är definierat.<br>d) \\(\\sin^2x+\\cos^2x+\\cos^2x-1=\\)<strong>\\(\\cos^2x\\)</strong>.</p>",
    "familj": "proc_trig_ettan_forenkla"
  },
  {
    "id": "1.119",
    "kap": 1,
    "omr": "sinus_cosinus_kombination",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Skriv på formen \\(R\\sin(x+\\varphi)\\), där \\(R>0\\).</p><p>a) \\(3\\sin x+4\\cos x\\)<br>b) \\(5\\sin x-12\\cos x\\)</p>",
    "s": "<p>Jämför \\(R\\sin(x+\\varphi)=R\\cos\\varphi\\sin x+R\\sin\\varphi\\cos x\\).</p><p>a) \\(R=\\sqrt{3^2+4^2}=5\\). Då \\(\\cos\\varphi=3/5\\), \\(\\sin\\varphi=4/5\\). En möjlighet är <strong>\\(5\\sin(x+\\arctan(4/3))\\)</strong>.</p><p>b) \\(R=13\\), \\(\\cos\\varphi=5/13\\), \\(\\sin\\varphi=-12/13\\). En möjlighet är <strong>\\(13\\sin(x-\\arctan(12/5))\\)</strong>.</p>",
    "familj": "proc_asinx_bcosx_omskrivning_2"
  },
  {
    "id": "1.120",
    "kap": 1,
    "omr": "trig_ekvationer_grunder",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös i intervallet \\(0\\le x&lt;2\\pi\\).</p><p>a) \\(\\sin x=1/2\\)<br>b) \\(\\cos x=-\\sqrt2/2\\)<br>c) \\(\\tan x=-1\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm referensvinkeln och välj de kvadranter där funktionen har rätt tecken.</p><p>a) \\(x=\\pi/6,5\\pi/6\\).<br>b) \\(x=3\\pi/4,5\\pi/4\\).<br>c) \\(x=3\\pi/4,7\\pi/4\\).</p>",
    "familj": "trigekv_standard_radian"
  },
  {
    "id": "1.121",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För varje funktion, ange amplitud, period och medellinje.</p><p>a) \\(y=4\\sin x+2\\)<br>b) \\(y=3\\cos(2x)-1\\)<br>c) \\(y=-5\\sin(\\tfrac{x}{2})\\)<br>d) \\(y=2\\cos(3x)+4\\)</p>",
    "s": "<p>a) amplitud <strong>4</strong>, period <strong>\\(2\\pi\\)</strong>, medellinje <strong>\\(y=2\\)</strong>.<br>b) amplitud <strong>3</strong>, period <strong>\\(\\pi\\)</strong>, medellinje <strong>\\(y=-1\\)</strong>.<br>c) amplitud <strong>5</strong>, period <strong>\\(4\\pi\\)</strong>, medellinje <strong>\\(y=0\\)</strong>.<br>d) amplitud <strong>2</strong>, period <strong>\\(\\frac{2\\pi}{3}\\)</strong>, medellinje <strong>\\(y=4\\)</strong>.</p>",
    "familj": "proc_trigfunktion_amp_period"
  },
  {
    "id": "1.122",
    "kap": 1,
    "omr": "trig_ekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Ange alla lösningar till ekvationen</p>\n<p>\\[\\sin 2x=\\cos x,\\]</p>\n<p>där \\(x\\) mäts i grader.</p>",
    "s": "<p>Använd formeln \\(\\sin2x=2\\sin x\\cos x\\):</p>\n<p>\\[\n2\\sin x\\cos x=\\cos x\n\\]</p>\n<p>\\[\n\\cos x(2\\sin x-1)=0.\n\\]</p>\n<p>Alltså gäller antingen</p>\n<p>\\[\n\\cos x=0 \\Rightarrow x=90^\\circ+180^\\circ n,\n\\]</p>\n<p>eller</p>\n<p>\\[\n\\sin x=\\frac12 \\Rightarrow\nx=30^\\circ+360^\\circ n \\quad\\text{eller}\\quad\nx=150^\\circ+360^\\circ n.\n\\]</p>\n<p><strong>Alla lösningar fås av dessa tre lösningsfamiljer, där \\(n\\in\\mathbb Z\\).</strong></p>",
    "familj": "kallmaterial_trigekv_sin2x_cosx"
  },
  {
    "id": "1.123",
    "kap": 1,
    "omr": "trig_ettan",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla.</p>\n<p>a) \\(\\sin^2x+\\cos^2x\\)<br>\nb) \\(1-\\cos^2x\\)<br>\nc) \\(\\dfrac{\\sin^2x+\\cos^2x}{\\cos x}\\)<br>\nd) \\(\\dfrac{1-\\sin^2x}{\\cos x}\\)</p>",
    "s": "<p>Använd \\(\\sin^2x+\\cos^2x=1\\).</p>\n<p>a) <strong>\\(1\\)</strong></p>\n<p>b) \\(1-\\cos^2x=\\)<strong>\\(\\sin^2x\\)</strong></p>\n<p>c) \\(\\frac1{\\cos x}=\\)<strong>\\(\\frac1{\\cos x}\\)</strong>, där \\(\\cos x\\ne0\\).</p>\n<p>d) \\(\\frac{\\cos^2x}{\\cos x}=\\)<strong>\\(\\cos x\\)</strong>, där \\(\\cos x\\ne0\\).</p>",
    "familj": "trigettan_rutin"
  },
  {
    "id": "1.124",
    "kap": 1,
    "omr": "sinus_cosinusfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För funktionen \\(f(x)=3\\cos(2x-\\pi)+1\\), bestäm</p><p>a) amplituden<br>b) perioden<br>c) största värdet<br>d) minsta värdet.</p>",
    "s": "<p><strong>Metod:</strong> Läs av amplitud och medellinje direkt. Perioden fås från faktorn framför \\(x\\).</p><p>Eftersom \\(f(x)=3\\cos(2x-\\pi)+1\\) är amplituden 3 och medellinjen \\(y=1\\).</p><p>a) <strong>3</strong><br>b) \\(T=2\\pi/2=\\)<strong>\\(\\pi\\)</strong><br>c) <strong>4</strong><br>d) <strong>−2</strong>.</p>",
    "familj": "trigfunktion_lasa_parametrar"
  },
  {
    "id": "1.125",
    "kap": 1,
    "omr": "bestamma_trig_funktion",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Grafen visar en cosinusfunktion på intervallet \\(0\\le x\\le2\\pi\\).</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"funktionsgraf\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"160.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/2</text><line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"265.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π</text><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"370.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3π/2</text><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2π</text><line x1=\"55\" y1=\"225.7\" x2=\"475\" y2=\"225.7\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"228.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"55\" y1=\"181.1\" x2=\"475\" y2=\"181.1\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"184.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"55\" y1=\"136.5\" x2=\"475\" y2=\"136.5\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"139.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"91.9\" x2=\"475\" y2=\"91.9\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"94.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"47.3\" x2=\"475\" y2=\"47.3\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"50.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"55\" y1=\"181.1\" x2=\"480\" y2=\"181.1\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"55.0\" y1=\"20\" x2=\"55.0\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"55.0,225.7 56.0,225.7 57.1,225.7 58.1,225.6 59.2,225.5 60.2,225.4 61.3,225.3 62.4,225.2 63.4,225.0 64.5,224.8 65.5,224.6 66.5,224.4 67.6,224.1 68.7,223.8 69.7,223.6 70.8,223.2 71.8,222.9 72.8,222.5 73.9,222.2 74.9,221.8 76.0,221.3 77.0,220.9 78.1,220.4 79.1,219.9 80.2,219.4 81.2,218.9 82.3,218.4 83.3,217.8 84.4,217.2 85.5,216.6 86.5,216.0 87.5,215.3 88.6,214.7 89.7,214.0 90.7,213.3 91.8,212.6 92.8,211.8 93.8,211.1 94.9,210.3 95.9,209.5 97.0,208.7 98.0,207.8 99.1,207.0 100.1,206.1 101.2,205.2 102.2,204.3 103.3,203.4 104.3,202.5 105.4,201.5 106.4,200.6 107.5,199.6 108.5,198.6 109.6,197.6 110.7,196.5 111.7,195.5 112.8,194.4 113.8,193.4 114.8,192.3 115.9,191.2 116.9,190.1 118.0,188.9 119.0,187.8 120.1,186.6 121.2,185.5 122.2,184.3 123.2,183.1 124.3,181.9 125.3,180.7 126.4,179.5 127.5,178.2 128.5,177.0 129.6,175.7 130.6,174.5 131.6,173.2 132.7,171.9 133.8,170.6 134.8,169.3 135.8,168.0 136.9,166.7 137.9,165.4 139.0,164.1 140.0,162.7 141.1,161.4 142.2,160.0 143.2,158.7 144.2,157.3 145.3,156.0 146.3,154.6 147.4,153.2 148.4,151.8 149.5,150.5 150.5,149.1 151.6,147.7 152.6,146.3 153.7,144.9 154.8,143.5 155.8,142.1 156.8,140.7 157.9,139.3 158.9,137.9 160.0,136.5 161.0,135.1 162.1,133.7 163.1,132.3 164.2,130.9 165.2,129.5 166.3,128.1 167.3,126.7 168.4,125.3 169.4,123.9 170.5,122.5 171.6,121.2 172.6,119.8 173.6,118.4 174.7,117.0 175.8,115.7 176.8,114.3 177.8,113.0 178.9,111.6 179.9,110.3 181.0,108.9 182.1,107.6 183.1,106.3 184.1,105.0 185.2,103.7 186.2,102.4 187.3,101.1 188.3,99.8 189.4,98.5 190.4,97.3 191.5,96.0 192.5,94.8 193.6,93.5 194.7,92.3 195.7,91.1 196.8,89.9 197.8,88.7 198.8,87.5 199.9,86.4 200.9,85.2 202.0,84.1 203.0,82.9 204.1,81.8 205.2,80.7 206.2,79.6 207.2,78.6 208.3,77.5 209.3,76.5 210.4,75.4 211.4,74.4 212.5,73.4 213.5,72.4 214.6,71.5 215.7,70.5 216.7,69.6 217.8,68.7 218.8,67.8 219.8,66.9 220.9,66.0 221.9,65.2 223.0,64.3 224.0,63.5 225.1,62.7 226.1,61.9 227.2,61.2 228.2,60.4 229.3,59.7 230.3,59.0 231.4,58.3 232.4,57.7 233.5,57.0 234.5,56.4 235.6,55.8 236.6,55.2 237.7,54.6 238.7,54.1 239.8,53.6 240.8,53.1 241.9,52.6 242.9,52.1 244.0,51.7 245.0,51.2 246.1,50.8 247.1,50.5 248.2,50.1 249.2,49.8 250.3,49.4 251.3,49.2 252.4,48.9 253.4,48.6 254.5,48.4 255.5,48.2 256.6,48.0 257.6,47.8 258.7,47.7 259.8,47.6 260.8,47.5 261.8,47.4 262.9,47.3 263.9,47.3 265.0,47.3 266.0,47.3 267.1,47.3 268.1,47.4 269.2,47.5 270.2,47.6 271.3,47.7 272.3,47.8 273.4,48.0 274.4,48.2 275.5,48.4 276.5,48.6 277.6,48.9 278.6,49.2 279.7,49.4 280.8,49.8 281.8,50.1 282.8,50.5 283.9,50.8 284.9,51.2 286.0,51.7 287.1,52.1 288.1,52.6 289.1,53.1 290.2,53.6 291.2,54.1 292.3,54.6 293.3,55.2 294.4,55.8 295.4,56.4 296.5,57.0 297.6,57.7 298.6,58.3 299.6,59.0 300.7,59.7 301.8,60.4 302.8,61.2 303.8,61.9 304.9,62.7 305.9,63.5 307.0,64.3 308.1,65.2 309.1,66.0 310.1,66.9 311.2,67.8 312.2,68.7 313.3,69.6 314.3,70.5 315.4,71.5 316.4,72.4 317.5,73.4 318.6,74.4 319.6,75.4 320.6,76.5 321.7,77.5 322.8,78.6 323.8,79.6 324.9,80.7 325.9,81.8 326.9,82.9 328.0,84.1 329.0,85.2 330.1,86.4 331.2,87.5 332.2,88.7 333.2,89.9 334.3,91.1 335.4,92.3 336.4,93.5 337.4,94.8 338.5,96.0 339.5,97.3 340.6,98.5 341.7,99.8 342.7,101.1 343.8,102.4 344.8,103.7 345.9,105.0 346.9,106.3 347.9,107.6 349.0,108.9 350.0,110.3 351.1,111.6 352.2,113.0 353.2,114.3 354.2,115.7 355.3,117.0 356.4,118.4 357.4,119.8 358.4,121.2 359.5,122.5 360.5,123.9 361.6,125.3 362.6,126.7 363.7,128.1 364.8,129.5 365.8,130.9 366.9,132.3 367.9,133.7 368.9,135.1 370.0,136.5 371.0,137.9 372.1,139.3 373.1,140.7 374.2,142.1 375.2,143.5 376.3,144.9 377.3,146.3 378.4,147.7 379.4,149.1 380.5,150.5 381.5,151.8 382.6,153.2 383.6,154.6 384.7,156.0 385.8,157.3 386.8,158.7 387.8,160.0 388.9,161.4 389.9,162.7 391.0,164.1 392.0,165.4 393.1,166.7 394.1,168.0 395.2,169.3 396.2,170.6 397.3,171.9 398.3,173.2 399.4,174.5 400.4,175.7 401.5,177.0 402.5,178.2 403.6,179.5 404.6,180.7 405.7,181.9 406.7,183.1 407.8,184.3 408.8,185.5 409.9,186.6 410.9,187.8 412.0,188.9 413.0,190.1 414.1,191.2 415.2,192.3 416.2,193.4 417.2,194.4 418.3,195.5 419.3,196.5 420.4,197.6 421.4,198.6 422.5,199.6 423.5,200.6 424.6,201.5 425.6,202.5 426.7,203.4 427.7,204.3 428.8,205.2 429.8,206.1 430.9,207.0 431.9,207.8 433.0,208.7 434.0,209.5 435.1,210.3 436.2,211.1 437.2,211.8 438.2,212.6 439.3,213.3 440.3,214.0 441.4,214.7 442.4,215.3 443.5,216.0 444.5,216.6 445.6,217.2 446.6,217.8 447.7,218.4 448.7,218.9 449.8,219.4 450.8,219.9 451.9,220.4 452.9,220.9 454.0,221.3 455.0,221.8 456.1,222.2 457.1,222.5 458.2,222.9 459.2,223.2 460.3,223.6 461.3,223.8 462.4,224.1 463.4,224.4 464.5,224.6 465.5,224.8 466.6,225.0 467.6,225.2 468.7,225.3 469.7,225.4 470.8,225.5 471.8,225.6 472.9,225.7 473.9,225.7 475.0,225.7\"/><text x=\"467\" y=\"43\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = f(x)</text></svg></span><p>Bestäm en ekvation för funktionen på formen \\(f(x)=A\\cos(kx)+B\\).</p>",
    "s": "<p>Grafens största värde är 3 och minsta värde −1. Därför är</p><p>\\[|A|=\\frac{3-(-1)}2=2,\\qquad B=\\frac{3+(-1)}2=1.\\]</p><p>Perioden är \\(2\\pi\\), alltså \\(k=1\\). Vid \\(x=0\\) antar funktionen sitt minimum, så \\(A=-2\\).</p><p><strong>\\(\\boxed{f(x)=-2\\cos x+1}\\)</strong>.</p>",
    "familj": "triggraf_bestam_cosinus"
  },
  {
    "id": "2.01",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För det reella talet \\(a\\) definieras</p>\n<p>\\[\nf_a(x)=x^3+ax^2+3x.\n\\]</p>\n<p>Bestäm alla värden på \\(a\\) för vilka grafen till \\(f_a\\) saknar både maximi- och minimipunkt.</p>",
    "s": "<p>Derivatan är</p>\n<p>\\[\nf_a'(x)=3x^2+2ax+3.\n\\]</p>\n<p>För att \\(f_a\\) ska ha en maximi- och en minimipunkt krävs två olika reella nollställen till derivatan. Funktionen saknar maximi- och minimipunkt när derivatan har högst ett reellt nollställe.</p>\n<p>Diskriminanten är</p>\n<p>\\[\n\\Delta=(2a)^2-4\\cdot3\\cdot3\n=4a^2-36.\n\\]</p>\n<p>Villkoret blir</p>\n<p>\\[\n\\Delta\\le0\n\\Rightarrow\n4a^2\\le36\n\\Rightarrow\na^2\\le9.\n\\]</p>\n<p><strong>\\[\n-3\\le a\\le3.\n\\]</strong></p>\n<p>När \\(a=\\pm3\\) har derivatan ett dubbelt nollställe. Då är tangenten horisontell i en punkt, men derivatan byter inte tecken. Punkten är alltså stationär men är varken en maximi- eller minimipunkt (den brukar kallas terrasspunkt).</p>",
    "familj": "parameter_extrempunkter_a"
  },
  {
    "id": "2.02",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Grafen visar derivatan \\(f'\\) till en funktion \\(f\\).</p><span class=\"fig\"><svg width=\"470\" height=\"270\" viewBox=\"0 0 470 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till derivatan\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"55.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"98.0\" y1=\"25\" x2=\"98.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"98.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"141.0\" y1=\"25\" x2=\"141.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"141.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"184.0\" y1=\"25\" x2=\"184.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"184.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"227.0\" y1=\"25\" x2=\"227.0\" y2=\"232\" stroke=\"#E8ECEF\"/><line x1=\"270.0\" y1=\"25\" x2=\"270.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"270.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"313.0\" y1=\"25\" x2=\"313.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"313.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"356.0\" y1=\"25\" x2=\"356.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"356.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"399.0\" y1=\"25\" x2=\"399.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"399.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"442.0\" y1=\"25\" x2=\"442.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"442.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"55\" y1=\"206.1\" x2=\"442\" y2=\"206.1\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"210.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"55\" y1=\"154.4\" x2=\"442\" y2=\"154.4\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"102.6\" x2=\"442\" y2=\"102.6\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"106.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"50.9\" x2=\"442\" y2=\"50.9\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"54.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"154.4\" x2=\"442\" y2=\"154.4\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"227.0\" y1=\"25\" x2=\"227.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55.0,-104.4 56.8,-97.0 58.5,-89.7 60.3,-82.5 62.0,-75.4 63.8,-68.4 65.6,-61.5 67.3,-54.6 69.1,-47.9 70.8,-41.2 72.6,-34.6 74.4,-28.1 76.1,-21.7 77.9,-15.4 79.6,-9.1 81.4,-3.0 83.1,3.1 84.9,9.1 86.7,15.0 88.4,20.8 90.2,26.5 91.9,32.1 93.7,37.7 95.5,43.1 97.2,48.5 99.0,53.8 100.7,59.0 102.5,64.1 104.3,69.1 106.0,74.1 107.8,78.9 109.5,83.7 111.3,88.4 113.1,93.0 114.8,97.5 116.6,101.9 118.3,106.3 120.1,110.5 121.8,114.7 123.6,118.7 125.4,122.7 127.1,126.6 128.9,130.4 130.6,134.2 132.4,137.8 134.2,141.4 135.9,144.8 137.7,148.2 139.4,151.5 141.2,154.7 143.0,157.8 144.7,160.9 146.5,163.8 148.2,166.7 150.0,169.5 151.8,172.2 153.5,174.8 155.3,177.3 157.0,179.7 158.8,182.1 160.5,184.3 162.3,186.5 164.1,188.6 165.8,190.6 167.6,192.5 169.3,194.3 171.1,196.0 172.9,197.7 174.6,199.2 176.4,200.7 178.1,202.1 179.9,203.4 181.7,204.6 183.4,205.8 185.2,206.8 186.9,207.8 188.7,208.6 190.4,209.4 192.2,210.1 194.0,210.7 195.7,211.3 197.5,211.7 199.2,212.0 201.0,212.3 202.8,212.5 204.5,212.6 206.3,212.6 208.0,212.5 209.8,212.3 211.6,212.1 213.3,211.7 215.1,211.3 216.8,210.8 218.6,210.2 220.4,209.5 222.1,208.7 223.9,207.9 225.6,206.9 227.4,205.9 229.1,204.8 230.9,203.6 232.7,202.3 234.4,200.9 236.2,199.4 237.9,197.9 239.7,196.2 241.5,194.5 243.2,192.7 245.0,190.8 246.7,188.8 248.5,186.7 250.3,184.6 252.0,182.3 253.8,180.0 255.5,177.6 257.3,175.1 259.1,172.5 260.8,169.8 262.6,167.0 264.3,164.2 266.1,161.2 267.9,158.2 269.6,155.1 271.4,151.9 273.1,148.6 274.9,145.2 276.6,141.8 278.4,138.2 280.2,134.6 281.9,130.9 283.7,127.1 285.4,123.2 287.2,119.2 289.0,115.1 290.7,111.0 292.5,106.7 294.2,102.4 296.0,98.0 297.8,93.5 299.5,88.9 301.3,84.2 303.0,79.5 304.8,74.6 306.5,69.7 308.3,64.7 310.1,59.6 311.8,54.4 313.6,49.1 315.3,43.7 317.1,38.3 318.9,32.8 320.6,27.1 322.4,21.4 324.1,15.6 325.9,9.7 327.7,3.8 329.4,-2.3 331.2,-8.4 332.9,-14.7 334.7,-21.0 336.5,-27.4 338.2,-33.9 340.0,-40.5 341.7,-47.1 343.5,-53.9 345.2,-60.7 347.0,-67.6 348.8,-74.6 350.5,-81.7 352.3,-88.9 354.0,-96.2 355.8,-103.6 357.6,-111.0 359.3,-118.5 361.1,-126.1 362.8,-133.8 364.6,-141.6 366.4,-149.5 368.1,-157.5 369.9,-165.5 371.6,-173.7 373.4,-181.9 375.2,-190.2 376.9,-198.6 378.7,-207.1 380.4,-215.6 382.2,-224.3 384.0,-233.0 385.7,-241.9 387.5,-250.8 389.2,-259.8 391.0,-268.9 392.7,-278.0 394.5,-287.3 396.3,-296.7 398.0,-306.1 399.8,-315.6 401.5,-325.2 403.3,-334.9 405.1,-344.7 406.8,-354.6 408.6,-364.5 410.3,-374.6 412.1,-384.7\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"141.0\" cy=\"154.4\" r=\"4.5\" fill=\"#B43123\"/><text x=\"148.0\" y=\"146.4\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">-2</text><circle cx=\"270.0\" cy=\"154.4\" r=\"4.5\" fill=\"#B43123\"/><text x=\"277.0\" y=\"146.4\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">1</text><text x=\"440\" y=\"146.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"235.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>a) På vilka intervall är \\(f\\) växande?<br>b) På vilka intervall är \\(f\\) avtagande?<br>c) Vilken typ av extrempunkt har \\(f\\) vid \\(x=-2\\) respektive \\(x=1\\)?</p>",
    "s": "<p>\\(f\\) växer där \\(f'&gt;0\\) och avtar där \\(f'&lt;0\\).</p><p>a) \\(\\boxed{x&lt;-2\\text{ och }x&gt;1}\\).</p><p>b) \\(\\boxed{-2&lt;x&lt;1}\\).</p><p>c) Vid \\(x=-2\\) går tecknet + till −: <strong>maximipunkt</strong>. Vid \\(x=1\\) går − till +: <strong>minimipunkt</strong>.</p>",
    "familj": "derivatagraf_parabel_e_svg"
  },
  {
    "id": "2.03",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera och ange funktionens definitionsmängd.</p><p>a) \\(f(x)=\\ln(3x-6)\\)<br>b) \\(g(x)=\\ln(x^2)\\)<br>c) \\(h(x)=e^{-0,4x}\\)</p>",
    "s": "<p>a) Definitionsmängd \\(x&gt;2\\), \\(\\boxed{f'(x)=1/(x-2)}\\).</p><p>b) Definitionsmängd \\(x\\ne0\\), \\(\\boxed{g'(x)=2/x}\\).</p><p>c) Definitionsmängd alla reella x, \\(\\boxed{h'(x)=-0,4e^{-0,4x}}\\).</p>",
    "familj": "log_derivata_defmangd_e"
  },
  {
    "id": "2.04",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=7x^5-3x^2+4\\)<br>b) \\(g(x)=\\frac{3}{x^2}+5x\\)<br>c) \\(h(x)=4\\sqrt{x}-2x^3\\)<br>d) \\(p(x)=x^{-3}+2x^{-1}\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=35x^4-6x\\)</strong>.</p><p>b) \\(3x^{-2}+5x\\Rightarrow\\) <strong>\\(g'(x)=-6x^{-3}+5\\)</strong>.</p><p>c) \\(4x^{1/2}-2x^3\\Rightarrow\\) <strong>\\(h'(x)=2x^{-1/2}-6x^2=\\frac2{\\sqrt x}-6x^2\\)</strong>.</p><p>d) <strong>\\(p'(x)=-3x^{-4}-2x^{-2}\\)</strong>.</p>",
    "familj": "proc_deriv_potenser_4"
  },
  {
    "id": "2.05",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=7x^5-3x^2+4\\)<br>b) \\(g(x)=\\frac{4}{x^2}+3\\sqrt{x}\\)<br>c) \\(h(x)=5e^x-2x^3\\)<br>d) \\(p(x)=6x^{-3}+x\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=35x^4-6x\\)</strong>.<br>b) \\(4x^{-2}+3x^{1/2}\\Rightarrow\\) <strong>\\(g'(x)=-8x^{-3}+\\frac{3}{2\\sqrt{x}}\\)</strong>.<br>c) <strong>\\(h'(x)=5e^x-6x^2\\)</strong>.<br>d) <strong>\\(p'(x)=-18x^{-4}+1\\)</strong>.</p>",
    "familj": "proc_deriv_repetition_1"
  },
  {
    "id": "2.06",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Derivera och förenkla så långt som möjligt:</p><p>\\[f(x)=x^2\\sin(3x).\\]</p><p>Bestäm därefter \\(f'(\\pi/3)\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera de två faktorerna och använd produktregeln \\((uv)' = u'v+uv'\\). Förenkla därefter.</p><p>Produktregeln och kedjeregeln ger</p><p>\\[f'(x)=2x\\sin3x+3x^2\\cos3x.\\]</p><p>Vid \\(x=\\pi/3\\) är \\(\\sin\\pi=0\\) och \\(\\cos\\pi=-1\\), så</p><p>\\[f'(\\pi/3)=-3(\\pi/3)^2=\\boxed{-\\pi^2/3}.\\]</p>",
    "familj": "produkt_trig_kedja"
  },
  {
    "id": "2.07",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Låt \\(f(x)=x^2+1\\) och \\(g(x)=3x-2\\).</p><p>a) Bestäm \\((f\\circ g)(x)\\).<br>b) Bestäm \\((g\\circ f)(x)\\).<br>c) Bestäm \\((f\\circ g)'(2)\\).</p>",
    "s": "<p>a) \\(f(g(x))=(3x-2)^2+1=\\)<strong>\\(9x^2-12x+5\\)</strong>.</p><p>b) \\(g(f(x))=3(x^2+1)-2=\\)<strong>\\(3x^2+1\\)</strong>.</p><p>c) Derivatan av \\(9x^2-12x+5\\) är \\(18x-12\\). Vid \\(x=2\\): <strong>24</strong>.</p>",
    "familj": "sammansatt_rutin2"
  },
  {
    "id": "2.08",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Grafen visar \\(y=\\ln x\\) och punkten \\(P=(e,1)\\).</p><span class=\"fig\"><svg width=\"460\" height=\"270\" viewBox=\"0 0 460 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Logaritmkurva och tangent\"><rect x=\"1\" y=\"1\" width=\"458\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"117.5\" y1=\"25\" x2=\"117.5\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"117.5\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">1</text><line x1=\"195.6\" y1=\"25\" x2=\"195.6\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"195.6\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">2</text><line x1=\"273.8\" y1=\"25\" x2=\"273.8\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"273.8\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">3</text><line x1=\"351.9\" y1=\"25\" x2=\"351.9\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"351.9\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">4</text><line x1=\"430.0\" y1=\"25\" x2=\"430.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"430.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">5</text><line x1=\"55\" y1=\"232.0\" x2=\"430\" y2=\"232.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"190.6\" x2=\"430\" y2=\"190.6\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"149.2\" x2=\"430\" y2=\"149.2\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"107.8\" x2=\"430\" y2=\"107.8\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"66.4\" x2=\"430\" y2=\"66.4\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"25.0\" x2=\"430\" y2=\"25.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"149.2\" x2=\"430\" y2=\"149.2\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><polyline points=\"55.0,215.8 56.7,211.5 58.4,207.6 60.1,204.1 61.8,200.8 63.6,197.7 65.3,194.9 67.0,192.3 68.7,189.8 70.4,187.4 72.1,185.2 73.8,183.1 75.5,181.1 77.3,179.2 79.0,177.3 80.7,175.6 82.4,173.9 84.1,172.3 85.8,170.7 87.5,169.2 89.2,167.8 91.0,166.4 92.7,165.0 94.4,163.7 96.1,162.5 97.8,161.2 99.5,160.0 101.2,158.9 102.9,157.7 104.7,156.6 106.4,155.6 108.1,154.5 109.8,153.5 111.5,152.5 113.2,151.5 114.9,150.6 116.6,149.7 118.4,148.7 120.1,147.9 121.8,147.0 123.5,146.1 125.2,145.3 126.9,144.5 128.6,143.7 130.3,142.9 132.1,142.1 133.8,141.4 135.5,140.6 137.2,139.9 138.9,139.2 140.6,138.5 142.3,137.8 144.0,137.1 145.8,136.4 147.5,135.8 149.2,135.1 150.9,134.5 152.6,133.8 154.3,133.2 156.0,132.6 157.7,132.0 159.5,131.4 161.2,130.8 162.9,130.2 164.6,129.7 166.3,129.1 168.0,128.6 169.7,128.0 171.4,127.5 173.2,126.9 174.9,126.4 176.6,125.9 178.3,125.4 180.0,124.9 181.7,124.4 183.4,123.9 185.1,123.4 186.8,122.9 188.6,122.4 190.3,121.9 192.0,121.5 193.7,121.0 195.4,120.6 197.1,120.1 198.8,119.7 200.5,119.2 202.3,118.8 204.0,118.3 205.7,117.9 207.4,117.5 209.1,117.1 210.8,116.7 212.5,116.2 214.2,115.8 216.0,115.4 217.7,115.0 219.4,114.6 221.1,114.3 222.8,113.9 224.5,113.5 226.2,113.1 227.9,112.7 229.7,112.3 231.4,112.0 233.1,111.6 234.8,111.2 236.5,110.9 238.2,110.5 239.9,110.2 241.6,109.8 243.4,109.5 245.1,109.1 246.8,108.8 248.5,108.4 250.2,108.1 251.9,107.8 253.6,107.4 255.3,107.1 257.1,106.8 258.8,106.5 260.5,106.1 262.2,105.8 263.9,105.5 265.6,105.2 267.3,104.9 269.0,104.6 270.8,104.3 272.5,103.9 274.2,103.6 275.9,103.3 277.6,103.0 279.3,102.7 281.0,102.5 282.7,102.2 284.5,101.9 286.2,101.6 287.9,101.3 289.6,101.0 291.3,100.7 293.0,100.4 294.7,100.2 296.4,99.9 298.2,99.6 299.9,99.3 301.6,99.1 303.3,98.8 305.0,98.5 306.7,98.3 308.4,98.0 310.1,97.7 311.8,97.5 313.6,97.2 315.3,97.0 317.0,96.7 318.7,96.5 320.4,96.2 322.1,95.9 323.8,95.7 325.5,95.5 327.3,95.2 329.0,95.0 330.7,94.7 332.4,94.5 334.1,94.2 335.8,94.0 337.5,93.8 339.2,93.5 341.0,93.3 342.7,93.0 344.4,92.8 346.1,92.6 347.8,92.3 349.5,92.1 351.2,91.9 352.9,91.7 354.7,91.4 356.4,91.2 358.1,91.0 359.8,90.8 361.5,90.6 363.2,90.3 364.9,90.1 366.6,89.9 368.4,89.7 370.1,89.5 371.8,89.3 373.5,89.0 375.2,88.8 376.9,88.6 378.6,88.4 380.3,88.2 382.1,88.0 383.8,87.8 385.5,87.6 387.2,87.4 388.9,87.2 390.6,87.0 392.3,86.8 394.0,86.6 395.8,86.4 397.5,86.2 399.2,86.0 400.9,85.8 402.6,85.6 404.3,85.4 406.0,85.2 407.7,85.0 409.5,84.8 411.2,84.6 412.9,84.4 414.6,84.2 416.3,84.0 418.0,83.9 419.7,83.7 421.4,83.5 423.2,83.3 424.9,83.1 426.6,82.9 428.3,82.8 430.0,82.6\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\"/><line x1=\"55.0\" y1=\"146.2\" x2=\"430.0\" y2=\"73.0\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"251.7\" cy=\"107.8\" r=\"5\" fill=\"#B43123\"/><text x=\"259.7\" y=\"99.8\" font-family=\"sans-serif\" font-size=\"11\">P</text><text x=\"390.9\" y=\"72.7\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#268FA3\">tangent</text></svg></span><p>a) Bestäm tangentens lutning i P.<br>b) Bestäm tangentens ekvation.</p>",
    "s": "<p>\\(f'(x)=1/x\\), så \\(f'(e)=1/e\\).</p><p>a) \\(\\boxed{1/e}\\).</p><p>b) Punkt-lutningsform ger \\(y-1=(1/e)(x-e)\\), alltså <strong>\\(\\boxed{y=x/e}\\)</strong>.</p>",
    "familj": "ln_tangent_e_svg"
  },
  {
    "id": "2.09",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Låt \\(f(x)=2x-1\\) och \\(g(x)=x^2+3\\).</p><p>a) Bestäm \\((f\\circ g)(x)\\).<br>b) Bestäm \\((g\\circ f)(x)\\).<br>c) Bestäm \\((f\\circ g)(2)\\).<br>d) Derivera \\((g\\circ f)(x)\\).</p>",
    "s": "<p>a) <strong>\\(2x^2+5\\)</strong>.</p><p>b) \\(g(2x-1)=(2x-1)^2+3=\\)<strong>\\(4x^2-4x+4\\)</strong>.</p><p>c) \\(2\\cdot4+5=\\)<strong>13</strong>.</p><p>d) <strong>\\(8x-4\\)</strong>.</p>",
    "familj": "sammansatta_funktioner_rutin"
  },
  {
    "id": "2.10",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=e^x+3\\ln x\\)<br>b) \\(g(x)=5e^{2x}\\)<br>c) \\(h(x)=\\ln(4x)\\)<br>d) \\(p(x)=2^x\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=e^x+3/x\\)</strong>.</p><p>b) <strong>\\(g'(x)=10e^{2x}\\)</strong>.</p><p>c) <strong>\\(h'(x)=1/x\\)</strong> för \\(x>0\\).</p><p>d) <strong>\\(p'(x)=2^x\\ln2\\)</strong>.</p>",
    "familj": "proc_deriv_exp_log_4"
  },
  {
    "id": "2.11",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En rektangel ligger i första kvadranten med två sidor längs koordinataxlarna. Det övre högra hörnet ligger på parabeln</p>\n<p>\\[\ny=12-x^2.\n\\]</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rektangel under parabeln y lika med 12 minus x kvadrat\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"30\" x2=\"55.0\" y2=\"225\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"241\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text>\n<line x1=\"140.0\" y1=\"30\" x2=\"140.0\" y2=\"225\" stroke=\"#D9E6E9\"/>\n<text x=\"140.0\" y=\"241\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"225.0\" y1=\"30\" x2=\"225.0\" y2=\"225\" stroke=\"#D9E6E9\"/>\n<text x=\"225.0\" y=\"241\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"310.0\" y1=\"30\" x2=\"310.0\" y2=\"225\" stroke=\"#D9E6E9\"/>\n<text x=\"310.0\" y=\"241\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"395.0\" y1=\"30\" x2=\"395.0\" y2=\"225\" stroke=\"#D9E6E9\"/>\n<text x=\"395.0\" y=\"241\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"225.0\" x2=\"395\" y2=\"225.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"195.0\" x2=\"395\" y2=\"195.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"198.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"165.0\" x2=\"395\" y2=\"165.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"168.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"135.0\" x2=\"395\" y2=\"135.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"138.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">6</text>\n<line x1=\"55\" y1=\"105.0\" x2=\"395\" y2=\"105.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"108.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">8</text>\n<line x1=\"55\" y1=\"75.0\" x2=\"395\" y2=\"75.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"78.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">10</text>\n<line x1=\"55\" y1=\"45.0\" x2=\"395\" y2=\"45.0\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"48.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">12</text>\n<line x1=\"55\" y1=\"225\" x2=\"395\" y2=\"225\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"55\" y1=\"225\" x2=\"55\" y2=\"30\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polyline points=\"55.00,45.00 56.34,45.00 57.68,45.01 59.02,45.03 60.35,45.06 61.69,45.09 63.03,45.13 64.37,45.18 65.71,45.24 67.05,45.30 68.38,45.37 69.72,45.45 71.06,45.54 72.40,45.63 73.74,45.73 75.08,45.84 76.41,45.95 77.75,46.07 79.09,46.20 80.43,46.34 81.77,46.49 83.11,46.64 84.44,46.80 85.78,46.97 87.12,47.14 88.46,47.32 89.80,47.51 91.14,47.71 92.48,47.92 93.81,48.13 95.15,48.35 96.49,48.57 97.83,48.81 99.17,49.05 100.51,49.30 101.84,49.56 103.18,49.82 104.52,50.09 105.86,50.37 107.20,50.66 108.54,50.95 109.87,51.25 111.21,51.56 112.55,51.88 113.89,52.20 115.23,52.53 116.57,52.87 117.90,53.22 119.24,53.57 120.58,53.93 121.92,54.30 123.26,54.67 124.60,55.06 125.94,55.45 127.27,55.84 128.61,56.25 129.95,56.66 131.29,57.08 132.63,57.51 133.97,57.95 135.30,58.39 136.64,58.84 137.98,59.30 139.32,59.76 140.66,60.23 142.00,60.71 143.33,61.20 144.67,61.69 146.01,62.20 147.35,62.71 148.69,63.22 150.03,63.75 151.37,64.28 152.70,64.82 154.04,65.37 155.38,65.92 156.72,66.48 158.06,67.05 159.40,67.63 160.73,68.21 162.07,68.80 163.41,69.40 164.75,70.01 166.09,70.62 167.43,71.24 168.76,71.87 170.10,72.51 171.44,73.15 172.78,73.80 174.12,74.46 175.46,75.12 176.79,75.80 178.13,76.48 179.47,77.17 180.81,77.86 182.15,78.56 183.49,79.27 184.83,79.99 186.16,80.72 187.50,81.45 188.84,82.19 190.18,82.94 191.52,83.69 192.86,84.45 194.19,85.22 195.53,86.00 196.87,86.79 198.21,87.58 199.55,88.38 200.89,89.19 202.22,90.00 203.56,90.82 204.90,91.65 206.24,92.49 207.58,93.33 208.92,94.18 210.25,95.04 211.59,95.91 212.93,96.78 214.27,97.66 215.61,98.55 216.95,99.45 218.29,100.35 219.62,101.26 220.96,102.18 222.30,103.11 223.64,104.04 224.98,104.98 226.32,105.93 227.65,106.89 228.99,107.85 230.33,108.82 231.67,109.80 233.01,110.79 234.35,111.78 235.68,112.78 237.02,113.79 238.36,114.80 239.70,115.82 241.04,116.85 242.38,117.89 243.71,118.94 245.05,119.99 246.39,121.05 247.73,122.12 249.07,123.19 250.41,124.27 251.75,125.36 253.08,126.46 254.42,127.57 255.76,128.68 257.10,129.80 258.44,130.92 259.78,132.06 261.11,133.20 262.45,134.35 263.79,135.51 265.13,136.67 266.47,137.84 267.81,139.02 269.14,140.21 270.48,141.40 271.82,142.60 273.16,143.81 274.50,145.03 275.84,146.25 277.17,147.48 278.51,148.72 279.85,149.97 281.19,151.22 282.53,152.48 283.87,153.75 285.21,155.02 286.54,156.31 287.88,157.60 289.22,158.89 290.56,160.20 291.90,161.51 293.24,162.83 294.57,164.16 295.91,165.50 297.25,166.84 298.59,168.19 299.93,169.55 301.27,170.91 302.60,172.28 303.94,173.66 305.28,175.05 306.62,176.44 307.96,177.85 309.30,179.26 310.63,180.67 311.97,182.10 313.31,183.53 314.65,184.97 315.99,186.42 317.33,187.87 318.67,189.33 320.00,190.80 321.34,192.28 322.68,193.76 324.02,195.25 325.36,196.75 326.70,198.26 328.03,199.77 329.37,201.29 330.71,202.82 332.05,204.36 333.39,205.90 334.73,207.45 336.06,209.01 337.40,210.57 338.74,212.15 340.08,213.73 341.42,215.32 342.76,216.91 344.10,218.51 345.43,220.12 346.77,221.74 348.11,223.37 349.45,225.00\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<rect x=\"55.0\" y=\"105.0\" width=\"170.0\" height=\"120.0\" fill=\"#EAF4F6\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<circle cx=\"225.0\" cy=\"105.0\" r=\"4.5\" fill=\"#268FA3\"/>\n<text x=\"284.5\" y=\"150.0\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y = 12 - x²</text>\n</svg></span><p>Bestäm rektangelns största möjliga area och dess sidlängder.</p>",
    "s": "<p>Rektangelns bredd är \\(x\\) och höjden \\(12-x^2\\). Arean är därför</p>\n<p>\\[\nA(x)=x(12-x^2)=12x-x^3,\\qquad 0\\le x\\le\\sqrt{12}.\n\\]</p>\n<p>Derivera:</p>\n<p>\\[\nA'(x)=12-3x^2.\n\\]</p>\n<p>\\[\nA'(x)=0\n\\Rightarrow x^2=4\n\\Rightarrow x=2\n\\]</p>\n<p>eftersom \\(x\\ge0\\).</p>\n<p>Höjden blir</p>\n<p>\\[\n12-2^2=8.\n\\]</p>\n<p>Arean blir</p>\n<p>\\[\nA=2\\cdot8=16.\n\\]</p>\n<p><strong>Största area är 16 areaenheter. Rektangelns sidor är 2 och 8.</strong></p>",
    "familj": "optimering_rektangel_parabel"
  },
  {
    "id": "2.12",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\ln(2x)\\)<br>b) \\(\\ln(x^3)\\), \\(x>0\\)<br>c) \\(e^{x^2}\\)<br>d) \\(e^{\\sin x}\\)</p>",
    "s": "<p>a) <strong>\\(1/x\\)</strong>.</p><p>b) \\(\\ln(x^3)=3\\ln x\\), alltså <strong>\\(3/x\\)</strong>.</p><p>c) <strong>\\(2xe^{x^2}\\)</strong>.</p><p>d) <strong>\\(e^{\\sin x}\\cos x\\)</strong>.</p>",
    "familj": "logexp_rutin3"
  },
  {
    "id": "2.13",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Analysera funktionen</p><p>\\[f(x)=\\ln x-\\frac{x}{2},\\qquad x&gt;0.\\]</p><p>Bestäm eventuell extrempunkt och beskriv grafens beteende då \\(x\\to0^+\\) och då \\(x\\to\\infty\\). Använd detta för att göra en skiss.</p>",
    "s": "<p>\\[f'(x)=\\frac1x-\\frac12.\\]</p><p>\\(f'(x)=0\\Rightarrow x=2\\). Derivatan är positiv för \\(0&lt;x&lt;2\\) och negativ för \\(x&gt;2\\), alltså finns en <strong>maximipunkt</strong> vid</p><p>\\[\\boxed{(2,\\ln2-1)}.\\]</p><p>Då \\(x\\to0^+\\) går \\(\\ln x\\to-\\infty\\), så \\(f(x)\\to-\\infty\\). Då \\(x\\to\\infty\\) dominerar \\(-x/2\\), så även då \\(f(x)\\to-\\infty\\).</p>",
    "familj": "grafskiss_ln_minus_linjar"
  },
  {
    "id": "2.14",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=x\\cos x\\)<br>b) \\(g(x)=x^3\\ln x\\), \\(x&gt;0\\)<br>c) \\(h(x)=(2x-1)e^{2x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd produktregeln \\((uv)'=u'v+uv'\\).</p><p>a) \\(\\boxed{\\cos x-x\\sin x}\\)</p><p>b) \\(\\boxed{3x^2\\ln x+x^2=x^2(3\\ln x+1)}\\)</p><p>c) \\(\\boxed{2e^{2x}+2(2x-1)e^{2x}=4xe^{2x}}\\)</p>",
    "familj": "produktregel_mix_niva2"
  },
  {
    "id": "2.15",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>För \\(f(x)=x^3-3x\\):</p><p>a) bestäm de stationära punkterna och avgör om de är maximi- eller minimipunkter<br>b) bestäm var funktionen växer respektive avtar<br>c) skissa grafen.</p>",
    "s": "<p><strong>Metod:</strong> Börja med derivatan. Nollställen och tecken på derivatan visar var funktionen växer, avtar och har extrempunkter.</p><p>\\(f'(x)=3x^2-3=3(x-1)(x+1)\\), så stationära punkter vid \\(x=\\pm1\\).</p><p>\\(f(-1)=2\\), \\(f(1)=-2\\). Teckenstudium ger växande för \\(x&lt;-1\\) och \\(x>1\\), avtagande för \\(-1&lt;x&lt;1\\). Alltså maxpunkt \\((-1,2)\\), minpunkt \\((1,-2)\\).</p>",
    "familj": "grafskiss_polynom"
  },
  {
    "id": "2.16",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=4\\sin x-3\\cos x\\)<br>b) \\(g(x)=\\tan x\\)<br>c) \\(h(x)=5\\cos(2x)\\)<br>d) \\(p(x)=2\\sin(3x)-\\cos(4x)\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=4\\cos x+3\\sin x\\)</strong>.</p><p>b) <strong>\\(g'(x)=1/\\cos^2x\\)</strong>.</p><p>c) <strong>\\(h'(x)=-10\\sin2x\\)</strong>.</p><p>d) <strong>\\(p'(x)=6\\cos3x+4\\sin4x\\)</strong>.</p>",
    "familj": "proc_deriv_trig_4"
  },
  {
    "id": "2.17",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=\\tan x\\)<br>b) \\(g(x)=\\tan(4x)\\)<br>c) \\(h(x)=3\\sin(2x)-5\\cos x\\)<br>d) \\(p(x)=\\cos(3x+1)\\)</p>",
    "s": "<p>a) \\(\\boxed{f'(x)=1/\\cos^2x}\\)</p><p>b) \\(\\boxed{g'(x)=4/\\cos^2(4x)}\\)</p><p>c) \\(\\boxed{h'(x)=6\\cos2x+5\\sin x}\\)</p><p>d) \\(\\boxed{p'(x)=-3\\sin(3x+1)}\\)</p>",
    "familj": "derivata_trig_tan_rutin4"
  },
  {
    "id": "2.18",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En laser sitter på en skiva som roterar med konstant vinkelhastighet \\(C\\) rad/s. Avståndet från skivans centrum till en rak vägg är \\(L\\) meter.</p>\n<p>Efter tiden \\(t\\) har laserstrålen vridits vinkeln \\(v=Ct\\). Ljuspunktens avstånd längs väggen från punkten rakt framför skivans centrum är \\(x\\).</p><span class=\"fig\"><svg width=\"450\" height=\"280\" viewBox=\"0 0 450 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Roterande laser vars ljuspunkt träffar en vägg\">\n<rect x=\"1\" y=\"1\" width=\"448\" height=\"278\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n\n<rect x=\"55\" y=\"47\" width=\"340\" height=\"16\" fill=\"#E7E8EA\" stroke=\"#2B2527\" stroke-width=\"1.3\"/>\n<circle cx=\"205\" cy=\"210\" r=\"34\" fill=\"#F4F8F9\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<line x1=\"205\" y1=\"210\" x2=\"205\" y2=\"55\" stroke=\"#5C575E\" stroke-width=\"1.4\" stroke-dasharray=\"6 4\"/>\n<line x1=\"205\" y1=\"210\" x2=\"330\" y2=\"55\" stroke=\"#268FA3\" stroke-width=\"2.4\"/>\n<circle cx=\"330\" cy=\"55\" r=\"5\" fill=\"#268FA3\"/>\n<path d=\"M 205 168 A 42 42 0 0 1 236 182\" fill=\"none\" stroke=\"#5C575E\" stroke-width=\"1.5\"/>\n<text x=\"224\" y=\"162\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">v</text>\n<line x1=\"217\" y1=\"75\" x2=\"325\" y2=\"75\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"217\" y1=\"70\" x2=\"217\" y2=\"80\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"325\" y1=\"70\" x2=\"325\" y2=\"80\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<text x=\"267.5\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">x</text>\n<line x1=\"160\" y1=\"55\" x2=\"160\" y2=\"210\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"154\" y1=\"55\" x2=\"166\" y2=\"55\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"154\" y1=\"210\" x2=\"166\" y2=\"210\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<text x=\"148\" y=\"132.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">L</text>\n<text x=\"72\" y=\"38\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">vägg</text>\n\n</svg></span><p>Bestäm ett uttryck för ljuspunktens hastighet \\(\\frac{dx}{dt}\\) i termer av \\(L\\), \\(C\\) och \\(t\\).</p>",
    "s": "<p>Av den rätvinkliga triangeln fås</p>\n<p>\\[\\tan v=\\frac{x}{L}.\\]</p>\n<p>Alltså</p><p>\\[x=L\\tan v.\\]</p>\n<p>Eftersom \\(v=Ct\\) blir</p><p>\\[x=L\\tan(Ct).\\]</p>\n<p>Derivera med kedjeregeln. Eftersom \\((\\tan u)'=1/\\cos^2u\\) får vi</p>\n<p>\\[\\frac{dx}{dt}=L\\cdot\\frac{1}{\\cos^2(Ct)}\\cdot C.\\]</p>\n<p><strong>\\[\\boxed{\\frac{dx}{dt}=\\frac{LC}{\\cos^2(Ct)}}.\\]</strong></p>",
    "familj": "laser_related_rates_a"
  },
  {
    "id": "2.19",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Punkterna A och B ligger på var sin sida om en tunn vägg. A ligger 3 m från väggen och B ligger 5 m från väggen. De två punkter på väggen som ligger närmast A respektive B ligger 12 m från varandra.</p><span class=\"fig\"><svg width=\"460\" height=\"255\" viewBox=\"0 0 460 255\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Punkt A och B på var sin sida om en vägg\"><rect x=\"1\" y=\"1\" width=\"458\" height=\"253\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"70\" y1=\"215\" x2=\"390\" y2=\"215\" stroke=\"#2B2527\" stroke-width=\"3\"/><rect x=\"205\" y=\"75\" width=\"18\" height=\"140\" fill=\"#D7DCE2\" stroke=\"#2B2527\"/><circle cx=\"110\" cy=\"145\" r=\"6\" fill=\"#B43123\"/><circle cx=\"310\" cy=\"55\" r=\"6\" fill=\"#268FA3\"/><line x1=\"110\" y1=\"145\" x2=\"214\" y2=\"90\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"214\" y1=\"90\" x2=\"310\" y2=\"55\" stroke=\"#268FA3\" stroke-width=\"2\"/><text x=\"78\" y=\"145\" font-family=\"sans-serif\" font-size=\"12\">A</text><text x=\"320\" y=\"55\" font-family=\"sans-serif\" font-size=\"12\">B</text><text x=\"210\" y=\"235\" font-family=\"sans-serif\" font-size=\"11\">vägg</text></svg></span><p>En kabel ska gå från A till en punkt P på väggen och vidare till B. Kabeln kostar 1 enhet per meter på A-sidan och 2 enheter per meter på B-sidan. Bestäm var P ska placeras för att minimera kostnaden.</p>",
    "s": "<p>Låt \\(x\\) vara avståndet längs väggen från punkten på väggen närmast A till P. Då är</p><p>\\[K(x)=\\sqrt{x^2+3^2}+2\\sqrt{(12-x)^2+5^2},\\quad0\\le x\\le12.\\]</p><p>\\[K^{\\prime}(x)=\\frac{x}{\\sqrt{x^2+9}}-2\\frac{12-x}{\\sqrt{(12-x)^2+25}}.\\]</p><p>Numerisk lösning av \\(K^{\\prime}(x)=0\\) ger \\(x\\approx9,295\\). Derivatan går från negativ till positiv där, så kostnaden är minimal.</p><p><strong>P ska placeras \\(\\boxed{9,30\\text{ m}}\\) från punkten på väggen som ligger närmast A</strong> (och då cirka 2,70 m från punkten på väggen som ligger närmast B).</p>",
    "familj": "kabel_olika_kostnader_optimering_a"
  },
  {
    "id": "2.20",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För det reella talet \\(a\\) ges</p><p>\\[f_a(x)=x^3-3ax+2.\\]</p><p>Undersök hur antalet stationära punkter och deras typ beror på \\(a\\). Ta även upp gränsfallet.</p>",
    "s": "<p>\\[f_a'(x)=3x^2-3a=3(x^2-a).\\]</p><p>Om \\(a&lt;0\\) är \\(x^2-a&gt;0\\) för alla x: <strong>inga stationära punkter</strong>.</p><p>Om \\(a=0\\) är \\(f'(x)=3x^2\\), som inte byter tecken vid 0. Tangenten är horisontell vid \\(x=0\\), men derivatan byter inte tecken. Punkten är därför stationär men är varken maximi- eller minimipunkt (en terrasspunkt).</p><p>Om \\(a&gt;0\\) fås \\(x=\\pm\\sqrt a\\). Tecknet är +,−,+, så \\(x=-\\sqrt a\\) är <strong>maximipunkt</strong> och \\(x=\\sqrt a\\) <strong>minimipunkt</strong>.</p>",
    "familj": "parameter_stationara_kubik_a"
  },
  {
    "id": "2.21",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>För \\(x&gt;0\\) definieras \\(f_a(x)=x^2+a\\ln x\\).</p><p>Bestäm \\(a\\) så att tangenten till grafen vid \\(x=1\\) är parallell med linjen \\(y=5x-7\\). Bestäm även tangentens ekvation.</p>",
    "s": "<p><strong>Metod:</strong> Skriv först den storhet som ska undersökas som en funktion. Derivera sedan och använd villkoret i uppgiften.</p><p>\\[f_a'(x)=2x+\\frac ax.\\]</p><p>Parallellitet kräver \\(f_a'(1)=5\\): \\(2+a=5\\Rightarrow\\boxed{a=3}\\).</p><p>\\(f_3(1)=1\\), så tangenten genom \\((1,1)\\) med lutning 5 är</p><p><strong>\\(\\boxed{y=5x-4}\\)</strong>.</p>",
    "familj": "parameter_tangent_ln"
  },
  {
    "id": "2.22",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med kedjeregeln.</p><p>a) \\(f(x)=(3x-1)^6\\)<br>b) \\(g(x)=(x^2+4)^5\\)<br>c) \\(h(x)=\\sqrt{2x+7}\\)<br>d) \\(p(x)=(5-2x)^{-3}\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=18(3x-1)^5\\)</strong>.</p><p>b) <strong>\\(g'(x)=10x(x^2+4)^4\\)</strong>.</p><p>c) <strong>\\(h'(x)=1/\\sqrt{2x+7}\\)</strong>.</p><p>d) \\(-3(5-2x)^{-4}\\cdot(-2)\\), alltså <strong>\\(p'(x)=6(5-2x)^{-4}\\)</strong>.</p>",
    "familj": "proc_kedjeregel_potenser_3"
  },
  {
    "id": "2.23",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\tan x\\)<br>b) \\(\\cos4x\\)<br>c) \\(\\sin(x/2)\\)<br>d) \\(2\\sin x-5\\cos x\\)</p>",
    "s": "<p><strong>Metod:</strong> I b och c används kedjeregeln: multiplicera standardderivatan med derivatan av vinkeln.</p><p>a) \\((\\tan x)'=\\boxed{1/\\cos^2x}\\).</p><p>b) \\((\\cos4x)'=-\\sin4x\\cdot4=\\boxed{-4\\sin4x}\\).</p><p>c) \\((\\sin(x/2))'=\\cos(x/2)\\cdot\\frac12=\\boxed{\\frac12\\cos(x/2)}\\).</p><p>d) \\(\\boxed{2\\cos x+5\\sin x}\\).</p>",
    "familj": "trigderivata_rutin_fyra"
  },
  {
    "id": "2.24",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En cirkelformad häxring växer så att radien ökar med \\(0,20\\) m per år.</p>\n<p>Hur snabbt ökar ringens area när radien är \\(0,75\\) m?</p>",
    "s": "<p>Arean är</p>\n<p>\\[\nA=\\pi r^2.\n\\]</p>\n<p>Derivera med avseende på tiden:</p>\n<p>\\[\n\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}.\n\\]</p>\n<p>Sätt in \\(r=0,75\\) och \\(\\frac{dr}{dt}=0,20\\):</p>\n<p>\\[\n\\frac{dA}{dt}=2\\pi\\cdot0,75\\cdot0,20\n=0,30\\pi\n\\approx0,94.\n\\]</p>\n<p><strong>Arean ökar med cirka \\(0,94\\text{ m}^2/\\text{år}\\).</strong></p>",
    "familj": "kallmaterial_related_rates_cirkel"
  },
  {
    "id": "2.25",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(e^{5x}\\)<br>b) \\(3e^{-x}\\)<br>c) \\(e^{x^2+2x}\\)<br>d) \\(2+e^{\\sqrt{x}}\\)</p>",
    "s": "<p>a) <strong>\\(5e^{5x}\\)</strong>.<br>b) <strong>\\(-3e^{-x}\\)</strong>.<br>c) <strong>\\((2x+2)e^{x^2+2x}\\)</strong>.<br>d) <strong>\\(\\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)</strong>.</p>",
    "familj": "proc_deriv_exp_2"
  },
  {
    "id": "2.26",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Visa med hjälp av derivata att</p><p>\\[\\ln x\\le x-1\\]</p><p>för alla \\(x&gt;0\\), och bestäm när likhet gäller.</p>",
    "s": "<p>Sätt \\(g(x)=x-1-\\ln x\\), \\(x&gt;0\\).</p><p>\\[g'(x)=1-\\frac1x=\\frac{x-1}{x}.\\]</p><p>Derivatan är negativ för \\(0&lt;x&lt;1\\), noll vid \\(x=1\\) och positiv för \\(x&gt;1\\). Därför har \\(g\\) ett minsta värde på hela definitionsmängden vid \\(x=1\\).</p><p>\\(g(1)=0\\), alltså \\(g(x)\\ge0\\). Då</p><p>\\[\\boxed{\\ln x\\le x-1}.\\]</p><p>Likhet gäller endast för \\(\\boxed{x=1}\\).</p>",
    "familj": "bevis_ln_olikhet_derivata_a"
  },
  {
    "id": "2.27",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\frac{x}{x+2}\\)<br>b) \\(\\frac{e^x}{x}\\)<br>c) \\(\\frac{\\ln x}{x}\\)<br>d) \\(\\frac{\\sin x}{x^2}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd kvotregeln och förenkla först efter deriveringen.</p><p>a) \\(2/(x+2)^2\\)<br>b) \\(e^x(x-1)/x^2\\)<br>c) \\((1-\\ln x)/x^2\\)<br>d) \\((x\\cos x-2\\sin x)/x^3\\)</p>",
    "familj": "kvot_rutin_fyra"
  },
  {
    "id": "2.28",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=e^{3x-2}\\)<br>b) \\(g(x)=\\ln(2x+5)\\)<br>c) \\(h(x)=\\sin(4x-1)\\)<br>d) \\(p(x)=\\cos(x^2)\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) <strong>\\(f'(x)=3e^{3x-2}\\)</strong>.</p><p>b) <strong>\\(g'(x)=\\frac{2}{2x+5}\\)</strong>.</p><p>c) <strong>\\(h'(x)=4\\cos(4x-1)\\)</strong>.</p><p>d) <strong>\\(p'(x)=-2x\\sin(x^2)\\)</strong>.</p>",
    "familj": "proc_kedja_exp_log_trig_2"
  },
  {
    "id": "2.29",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen visar \\(f\\) och punkten \\(P=(1,2)\\). Tangenten i P har lutningen 1.</p><span class=\"fig\"><svg width=\"460\" height=\"270\" viewBox=\"0 0 460 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Funktionsgraf med punkt\"><rect x=\"1\" y=\"1\" width=\"458\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"55.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"130.4\" y1=\"25\" x2=\"130.4\" y2=\"232\" stroke=\"#E8ECEF\"/><line x1=\"205.8\" y1=\"25\" x2=\"205.8\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"205.8\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"281.2\" y1=\"25\" x2=\"281.2\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"281.2\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"356.6\" y1=\"25\" x2=\"356.6\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"356.6\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"432.0\" y1=\"25\" x2=\"432.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"432.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"202.4\" x2=\"432\" y2=\"202.4\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"172.9\" x2=\"432\" y2=\"172.9\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"176.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"143.3\" x2=\"432\" y2=\"143.3\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"147.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"113.7\" x2=\"432\" y2=\"113.7\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"117.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"55\" y1=\"84.1\" x2=\"432\" y2=\"84.1\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"88.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"54.6\" x2=\"432\" y2=\"54.6\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"58.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"55\" y1=\"25.0\" x2=\"432\" y2=\"25.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"29.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"55\" y1=\"202.4\" x2=\"432\" y2=\"202.4\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"130.4\" y1=\"25\" x2=\"130.4\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55.0,84.1 56.7,86.1 58.4,88.1 60.1,90.1 61.9,92.0 63.6,93.8 65.3,95.7 67.0,97.5 68.7,99.3 70.4,101.1 72.1,102.8 73.8,104.5 75.6,106.1 77.3,107.8 79.0,109.4 80.7,110.9 82.4,112.5 84.1,114.0 85.8,115.5 87.6,116.9 89.3,118.4 91.0,119.7 92.7,121.1 94.4,122.4 96.1,123.7 97.8,125.0 99.6,126.2 101.3,127.4 103.0,128.6 104.7,129.8 106.4,130.9 108.1,132.0 109.8,133.0 111.5,134.0 113.3,135.0 115.0,136.0 116.7,136.9 118.4,137.8 120.1,138.7 121.8,139.5 123.5,140.4 125.3,141.1 127.0,141.9 128.7,142.6 130.4,143.3 132.1,143.9 133.8,144.6 135.5,145.2 137.3,145.7 139.0,146.3 140.7,146.8 142.4,147.2 144.1,147.7 145.8,148.1 147.5,148.5 149.2,148.8 151.0,149.2 152.7,149.4 154.4,149.7 156.1,149.9 157.8,150.1 159.5,150.3 161.2,150.4 163.0,150.5 164.7,150.6 166.4,150.7 168.1,150.7 169.8,150.7 171.5,150.6 173.2,150.5 175.0,150.4 176.7,150.3 178.4,150.1 180.1,149.9 181.8,149.7 183.5,149.4 185.2,149.2 186.9,148.8 188.7,148.5 190.4,148.1 192.1,147.7 193.8,147.2 195.5,146.8 197.2,146.3 198.9,145.7 200.7,145.2 202.4,144.6 204.1,143.9 205.8,143.3 207.5,142.6 209.2,141.9 210.9,141.1 212.7,140.4 214.4,139.5 216.1,138.7 217.8,137.8 219.5,136.9 221.2,136.0 222.9,135.0 224.7,134.0 226.4,133.0 228.1,132.0 229.8,130.9 231.5,129.8 233.2,128.6 234.9,127.4 236.6,126.2 238.4,125.0 240.1,123.7 241.8,122.4 243.5,121.1 245.2,119.7 246.9,118.4 248.6,116.9 250.4,115.5 252.1,114.0 253.8,112.5 255.5,110.9 257.2,109.4 258.9,107.8 260.6,106.1 262.4,104.5 264.1,102.8 265.8,101.1 267.5,99.3 269.2,97.5 270.9,95.7 272.6,93.8 274.3,92.0 276.1,90.1 277.8,88.1 279.5,86.1 281.2,84.1 282.9,82.1 284.6,80.0 286.3,78.0 288.1,75.8 289.8,73.7 291.5,71.5 293.2,69.3 294.9,67.0 296.6,64.8 298.3,62.5 300.1,60.1 301.8,57.7 303.5,55.4 305.2,52.9 306.9,50.5 308.6,48.0 310.3,45.5 312.0,42.9 313.8,40.3 315.5,37.7 317.2,35.1 318.9,32.4 320.6,29.7 322.3,27.0 324.0,24.2 325.8,21.4 327.5,18.6 329.2,15.7 330.9,12.8 332.6,9.9 334.3,7.0 336.0,4.0 337.8,1.0 339.5,-2.1 341.2,-5.1 342.9,-8.2 344.6,-11.4 346.3,-14.5 348.0,-17.7 349.7,-20.9 351.5,-24.2 353.2,-27.5 354.9,-30.8 356.6,-34.1 358.3,-37.5 360.0,-40.9 361.7,-44.4 363.5,-47.8 365.2,-51.3 366.9,-54.9 368.6,-58.4 370.3,-62.0 372.0,-65.6 373.7,-69.3 375.4,-73.0 377.2,-76.7 378.9,-80.4 380.6,-84.2 382.3,-88.0 384.0,-91.8 385.7,-95.7 387.4,-99.6 389.2,-103.5 390.9,-107.5 392.6,-111.4 394.3,-115.5 396.0,-119.5 397.7,-123.6 399.4,-127.7 401.2,-131.8 402.9,-136.0 404.6,-140.2 406.3,-144.4 408.0,-148.7 409.7,-153.0 411.4,-157.3 413.1,-161.7 414.9,-166.1 416.6,-170.5 418.3,-174.9 420.0,-179.4 421.7,-183.9 423.4,-188.4 425.1,-193.0 426.9,-197.6 428.6,-202.2 430.3,-206.9 432.0,-211.6\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"205.8\" cy=\"143.3\" r=\"4.5\" fill=\"#B43123\"/><text x=\"212.8\" y=\"135.3\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">P</text><text x=\"430\" y=\"194.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"138.4\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>En ny funktion definieras av \\(g(x)=\\ln(f(x))\\). Bestäm \\(g'(1)\\) utan att först bestämma något uttryck för \\(f\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera den yttre och den inre funktionen. Kedjeregeln innebär att den yttre derivatan multipliceras med den inre derivatan.</p><p>Kedjeregeln ger</p><p>\\[g'(x)=\\frac{f'(x)}{f(x)}.\\]</p><p>Av uppgiften är \\(f(1)=2\\) och \\(f'(1)=1\\). Alltså</p><p>\\[\\boxed{g'(1)=\\frac12}.\\]</p>",
    "familj": "sammansatt_ln_graf_c_svg"
  },
  {
    "id": "2.30",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/2",
    "t": "<p>Grafen visar funktionen \\(f\\) och tangenten i punkten \\(P=(1,2)\\).</p><span class=\"fig\"><svg width=\"450\" height=\"255\" viewBox=\"0 0 450 255\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till f med tangent i punkten P lika med 1 komma 2\">\n<rect x=\"1\" y=\"1\" width=\"448\" height=\"253\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"208.1\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"115.8\" y1=\"25\" x2=\"115.8\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<text x=\"115.8\" y=\"208.1\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"176.7\" y1=\"25\" x2=\"176.7\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<line x1=\"237.5\" y1=\"25\" x2=\"237.5\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<text x=\"237.5\" y=\"208.1\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"298.3\" y1=\"25\" x2=\"298.3\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<text x=\"298.3\" y=\"208.1\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"359.2\" y1=\"25\" x2=\"359.2\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<text x=\"359.2\" y=\"208.1\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"420.0\" y1=\"25\" x2=\"420.0\" y2=\"220\" stroke=\"#D9E6E9\"/>\n<text x=\"420.0\" y=\"208.1\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"220.0\" x2=\"420\" y2=\"220.0\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"223.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"192.1\" x2=\"420\" y2=\"192.1\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"164.3\" x2=\"420\" y2=\"164.3\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"167.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"136.4\" x2=\"420\" y2=\"136.4\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"139.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"108.6\" x2=\"420\" y2=\"108.6\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"111.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"80.7\" x2=\"420\" y2=\"80.7\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"83.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"52.9\" x2=\"420\" y2=\"52.9\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"55.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"420\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">6</text>\n<line x1=\"55\" y1=\"192.1\" x2=\"420\" y2=\"192.1\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"176.7\" y1=\"25\" x2=\"176.7\" y2=\"220\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polyline points=\"55.00,374.61 56.30,371.31 57.61,368.05 58.91,364.82 60.21,361.63 61.52,358.47 62.82,355.34 64.12,352.25 65.43,349.19 66.73,346.16 68.04,343.16 69.34,340.20 70.64,337.27 71.95,334.37 73.25,331.50 74.55,328.66 75.86,325.85 77.16,323.07 78.46,320.33 79.77,317.61 81.07,314.93 82.38,312.27 83.68,309.64 84.98,307.04 86.29,304.47 87.59,301.93 88.89,299.42 90.20,296.94 91.50,294.48 92.80,292.05 94.11,289.65 95.41,287.27 96.71,284.93 98.02,282.61 99.32,280.31 100.62,278.04 101.93,275.80 103.23,273.58 104.54,271.39 105.84,269.23 107.14,267.09 108.45,264.97 109.75,262.88 111.05,260.81 112.36,258.76 113.66,256.74 114.96,254.75 116.27,252.77 117.57,250.82 118.88,248.89 120.18,246.99 121.48,245.11 122.79,243.24 124.09,241.40 125.39,239.59 126.70,237.79 128.00,236.01 129.30,234.26 130.61,232.52 131.91,230.81 133.21,229.11 134.52,227.44 135.82,225.78 137.12,224.15 138.43,222.53 139.73,220.93 141.04,219.35 142.34,217.79 143.64,216.24 144.95,214.72 146.25,213.21 147.55,211.72 148.86,210.24 150.16,208.79 151.46,207.35 152.77,205.92 154.07,204.51 155.38,203.12 156.68,201.74 157.98,200.38 159.29,199.03 160.59,197.70 161.89,196.38 163.20,195.08 164.50,193.79 165.80,192.52 167.11,191.25 168.41,190.01 169.71,188.77 171.02,187.55 172.32,186.34 173.62,185.14 174.93,183.96 176.23,182.78 177.54,181.62 178.84,180.47 180.14,179.33 181.45,178.20 182.75,177.08 184.05,175.97 185.36,174.88 186.66,173.79 187.96,172.71 189.27,171.64 190.57,170.58 191.88,169.53 193.18,168.49 194.48,167.45 195.79,166.43 197.09,165.41 198.39,164.40 199.70,163.40 201.00,162.40 202.30,161.41 203.61,160.43 204.91,159.46 206.21,158.49 207.52,157.52 208.82,156.57 210.12,155.61 211.43,154.67 212.73,153.72 214.04,152.79 215.34,151.85 216.64,150.92 217.95,150.00 219.25,149.08 220.55,148.16 221.86,147.24 223.16,146.33 224.46,145.42 225.77,144.52 227.07,143.61 228.38,142.71 229.68,141.81 230.98,140.91 232.29,140.01 233.59,139.12 234.89,138.22 236.20,137.32 237.50,136.43 238.80,135.53 240.11,134.64 241.41,133.74 242.71,132.84 244.02,131.95 245.32,131.05 246.62,130.15 247.93,129.24 249.23,128.34 250.54,127.43 251.84,126.52 253.14,125.61 254.45,124.70 255.75,123.78 257.05,122.86 258.36,121.93 259.66,121.00 260.96,120.07 262.27,119.13 263.57,118.19 264.88,117.24 266.18,116.29 267.48,115.33 268.79,114.37 270.09,113.40 271.39,112.43 272.70,111.44 274.00,110.45 275.30,109.46 276.61,108.46 277.91,107.45 279.21,106.43 280.52,105.40 281.82,104.37 283.12,103.33 284.43,102.28 285.73,101.22 287.04,100.15 288.34,99.07 289.64,97.98 290.95,96.88 292.25,95.78 293.55,94.66 294.86,93.53 296.16,92.39 297.46,91.24 298.77,90.08 300.07,88.90 301.38,87.72 302.68,86.52 303.98,85.31 305.29,84.09 306.59,82.85 307.89,81.60 309.20,80.34 310.50,79.07 311.80,77.78 313.11,76.47 314.41,75.16 315.71,73.82 317.02,72.48 318.32,71.11 319.62,69.74 320.93,68.34 322.23,66.94 323.54,65.51 324.84,64.07 326.14,62.61 327.45,61.14 328.75,59.65 330.05,58.14 331.36,56.61 332.66,55.07 333.96,53.51 335.27,51.93 336.57,50.33 337.88,48.71 339.18,47.08 340.48,45.42 341.79,43.74 343.09,42.05 344.39,40.34 345.70,38.60 347.00,36.84 348.30,35.07 349.61,33.27 350.91,31.45 352.21,29.61 353.52,27.75 354.82,25.87 356.12,23.96 357.43,22.03 358.73,20.08 360.04,18.11 361.34,16.11 362.64,14.09 363.95,12.05 365.25,9.98 366.55,7.89 367.86,5.77 369.16,3.63 370.46,1.46 371.77,-0.73 373.07,-2.94 374.38,-5.19 375.68,-7.45 376.98,-9.75 378.29,-12.07 379.59,-14.42 380.89,-16.79 382.20,-19.19 383.50,-21.62 384.80,-24.08 386.11,-26.56 387.41,-29.08 388.71,-31.62 390.02,-34.19 391.32,-36.78 392.62,-39.41 393.93,-42.07 395.23,-44.75 396.54,-47.47 397.84,-50.22 399.14,-52.99 400.45,-55.80 401.75,-58.64 403.05,-61.51 404.36,-64.41 405.66,-67.34 406.96,-70.31 408.27,-73.30 409.57,-76.33 410.88,-79.39 412.18,-82.48 413.48,-85.61 414.79,-88.77 416.09,-91.97 417.39,-95.19 418.70,-98.45 420.00,-101.75\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<line x1=\"146.2\" y1=\"199.1\" x2=\"359.2\" y2=\"52.9\" stroke=\"#5C575E\" stroke-width=\"1.6\" stroke-dasharray=\"6 4\"/>\n<circle cx=\"237.5\" cy=\"136.4\" r=\"4.5\" fill=\"#268FA3\"/>\n<text x=\"245.5\" y=\"128.4\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">P</text>\n</svg></span><p>Den streckade tangenten går genom rutnätspunkterna \\((0;\\,0,5)\\) och \\((2;\\,3,5)\\).</p>\n<p>En ny funktion definieras av</p>\n<p>\\[\nh(x)=(f(x))^2.\n\\]</p>\n<p>Bestäm \\(h'(1)\\).</p>",
    "s": "<p>Kedjeregeln ger</p>\n<p>\\[\nh'(x)=2f(x)f'(x).\n\\]</p>\n<p>Av figuren är</p>\n<p>\\[\nf(1)=2.\n\\]</p>\n<p>Tangentens lutning är</p>\n<p>\\[\nf'(1)=\\frac{3,5-0,5}{2-0}=\\frac32.\n\\]</p>\n<p>Därför</p>\n<p>\\[\nh'(1)=2\\cdot2\\cdot\\frac32=6.\n\\]</p>\n<p><strong>\\(h'(1)=6\\).</strong></p>",
    "familj": "kedjeregel_graf_a"
  },
  {
    "id": "2.31",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm definitionsmängd och derivata för \\(f(x)=\\ln(5-2x)\\).</p>",
    "s": "<p><strong>Definitionsmängd:</strong> Logaritmens argument måste vara positivt:</p>\n<p>\\[5-2x>0\\Rightarrow x&lt;\\frac52.\\]</p>\n<p>Alltså är definitionsmängden \\(x&lt;2,5\\).</p>\n<p><strong>Derivata:</strong> Sätt \\(u=5-2x\\). Då är \\(u'=-2\\), och kedjeregeln ger</p>\n<p>\\[f'(x)=\\frac{u'}{u}=\\boxed{-\\frac{2}{5-2x}}.\\]</p>",
    "familj": "ln_domain_deriv"
  },
  {
    "id": "2.32",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med kedjeregeln.</p><p>a) \\((3x+1)^5\\)<br>b) \\((2-x)^7\\)<br>c) \\(\\sqrt{4x+3}\\)<br>d) \\((x^2+1)^4\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) <strong>\\(15(3x+1)^4\\)</strong>.<br>b) <strong>\\(-7(2-x)^6\\)</strong>.<br>c) <strong>\\(\\frac{2}{\\sqrt{4x+3}}\\)</strong>.<br>d) <strong>\\(8x(x^2+1)^3\\)</strong>.</p>",
    "familj": "proc_kedja_potenser_1"
  },
  {
    "id": "2.33",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Funktionen</p>\n<p>\\[\nf(x)=\\ln(x-2)+1\n\\]</p>\n<p>är given.</p>\n<p>a) Bestäm definitionsmängden.<br>\nb) Ange funktionens lodräta asymptot.<br>\nc) Bestäm den inversa funktionen \\(f^{-1}(x)\\).</p>",
    "s": "<p>a) Logaritmens argument måste vara positivt:</p>\n<p>\\[\nx-2&gt;0\\Rightarrow x&gt;2.\n\\]</p>\n<p>b) När \\(x\\to2^+\\) går \\(\\ln(x-2)\\to-\\infty\\), alltså är</p>\n<p><strong>\\(x=2\\)</strong> en lodrät asymptot.</p>\n<p>c) Sätt \\(y=\\ln(x-2)+1\\) och lös ut \\(x\\):</p>\n<p>\\[\ny-1=\\ln(x-2)\n\\Rightarrow e^{y-1}=x-2\n\\Rightarrow x=e^{y-1}+2.\n\\]</p>\n<p>Byt plats på variabelnamnen:</p>\n<p><strong>\\[\nf^{-1}(x)=e^{x-1}+2.\n\\]</strong></p>",
    "familj": "logaritmfunktion_egenskaper"
  },
  {
    "id": "2.34",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med produktregeln.</p><p>a) \\(f(x)=x^2e^x\\)<br>b) \\(g(x)=x\\ln x\\)<br>c) \\(h(x)=x^3\\sin x\\)<br>d) \\(p(x)=(x+1)(x^2-2)\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=2xe^x+x^2e^x=e^x(x^2+2x)\\)</strong>.</p><p>b) <strong>\\(g'(x)=\\ln x+1\\)</strong>.</p><p>c) <strong>\\(h'(x)=3x^2\\sin x+x^3\\cos x\\)</strong>.</p><p>d) <strong>\\(p'(x)=(x^2-2)+2x(x+1)=3x^2+2x-2\\)</strong>.</p>",
    "familj": "proc_produktregel_4"
  },
  {
    "id": "2.35",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(4\\sin x\\)<br>b) \\(7\\cos x\\)<br>c) \\(3\\sin(2x)\\)<br>d) \\(5\\cos(4x-1)\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd \\((\\sin u)'=\\cos u\\cdot u'\\) och \\((\\cos u)'=-\\sin u\\cdot u'\\). I c och d behövs kedjeregeln.</p><p>a) \\((4\\sin x)'=\\boxed{4\\cos x}\\).</p><p>b) \\((7\\cos x)'=\\boxed{-7\\sin x}\\).</p><p>c) \\((3\\sin(2x))'=3\\cos(2x)\\cdot2=\\boxed{6\\cos(2x)}\\).</p><p>d) \\((5\\cos(4x-1))'=5[-\\sin(4x-1)]\\cdot4=\\boxed{-20\\sin(4x-1)}\\).</p>",
    "familj": "trigderiv_rutin"
  },
  {
    "id": "2.36",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>För det reella talet \\(a\\) ges</p><p>\\[f_a(x)=x^3+ax^2+3x.\\]</p><p>Bestäm alla \\(a\\) för vilka grafen saknar både maximi- och minimipunkt. Motivera.</p>",
    "s": "<p>\\[f_a'(x)=3x^2+2ax+3.\\]</p><p>För att grafen inte ska få en maximi- och en minimipunkt får derivatan inte ha två distinkta reella nollställen. Diskriminanten ska därför vara \\(\\le0\\):</p><p>\\[(2a)^2-4\\cdot3\\cdot3\\le0\\Rightarrow4a^2-36\\le0\\Rightarrow a^2\\le9.\\]</p><p>Vid \\(a=\\pm3\\) är derivatan en perfekt kvadrat och byter inte tecken, så där uppstår ingen max/min.</p><p><strong>\\(\\boxed{-3\\le a\\le3}\\)</strong>.</p>",
    "familj": "parameter_kubik_utan_extrema"
  },
  {
    "id": "2.37",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=(1-2x)^7\\)<br>b) \\(g(x)=e^{x^2}\\)<br>c) \\(h(x)=\\ln(x^2+4)\\)<br>d) \\(p(x)=\\sin(5x^2)\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) \\(\\boxed{-14(1-2x)^6}\\)</p><p>b) \\(\\boxed{2xe^{x^2}}\\)</p><p>c) \\(\\boxed{2x/(x^2+4)}\\)</p><p>d) \\(\\boxed{10x\\cos(5x^2)}\\)</p>",
    "familj": "kedja_mix_niva2"
  },
  {
    "id": "2.38",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En funktion \\(f\\) är deriverbar och grafen till \\(f'\\) visas i figuren.</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"22\" x2=\"48.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"48.0\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text><line x1=\"92.2\" y1=\"22\" x2=\"92.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"92.2\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"136.5\" y1=\"22\" x2=\"136.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"136.5\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"180.8\" y1=\"22\" x2=\"180.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"180.8\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"225.0\" y1=\"22\" x2=\"225.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"269.2\" y1=\"22\" x2=\"269.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"269.2\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"313.5\" y1=\"22\" x2=\"313.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"313.5\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"357.8\" y1=\"22\" x2=\"357.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"357.8\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"402.0\" y1=\"22\" x2=\"402.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"402.0\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"48\" y1=\"232.0\" x2=\"402\" y2=\"232.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"236.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"48\" y1=\"202.0\" x2=\"402\" y2=\"202.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"206.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"48\" y1=\"172.0\" x2=\"402\" y2=\"172.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"176.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"48\" y1=\"142.0\" x2=\"402\" y2=\"142.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"48\" y1=\"112.0\" x2=\"402\" y2=\"112.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"116.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"48\" y1=\"82.0\" x2=\"402\" y2=\"82.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"86.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"48\" y1=\"52.0\" x2=\"402\" y2=\"52.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"56.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"48\" y1=\"22.0\" x2=\"402\" y2=\"22.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"26.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><polyline points=\"48.0,82.0 92.2,112.0 136.5,142.0 180.8,172.0 225.0,187.0 269.2,163.0 313.5,142.0 357.8,97.0 402.0,52.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"394\" y=\"38\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">f'</text></svg></span><p>Funktionen \\(f\\) har värdet \\(f(-2)=5\\). Beskriv var \\(f\\) har lokala extrempunkter och avgör vilken av \\(f(-2)\\) och \\(f(2)\\) som är störst utan att bestämma en formel för \\(f\\).</p>",
    "s": "<p>\\(f'\\) byter från positiv till negativ vid \\(x=-2\\), så \\(f\\) har lokal maxpunkt där. Vid \\(x=2\\) byter \\(f'\\) från negativ till positiv, så där finns en lokal minpunkt.</p><p>På hela intervallet \\((-2,2)\\) är \\(f'&lt;0\\), alltså minskar \\(f\\). Därför är <strong>\\(f(-2)>f(2)\\)</strong>.</p>",
    "familj": "derivatagraf_a"
  },
  {
    "id": "2.39",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Grafen visar derivatan \\(f'\\) till en deriverbar funktion \\(f\\).</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"funktionsgraf\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"115.0\" y1=\"25\" x2=\"115.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"115.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"175.0\" y1=\"25\" x2=\"175.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"175.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"235.0\" y1=\"25\" x2=\"235.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"235.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"295.0\" y1=\"25\" x2=\"295.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"295.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"355.0\" y1=\"25\" x2=\"355.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"355.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"415.0\" y1=\"25\" x2=\"415.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"415.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"248.0\" x2=\"475\" y2=\"248.0\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"251.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text><line x1=\"55\" y1=\"210.8\" x2=\"475\" y2=\"210.8\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"213.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"55\" y1=\"173.7\" x2=\"475\" y2=\"173.7\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"176.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"55\" y1=\"136.5\" x2=\"475\" y2=\"136.5\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"139.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"99.3\" x2=\"475\" y2=\"99.3\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"102.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"62.2\" x2=\"475\" y2=\"62.2\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"65.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">6</text><line x1=\"55\" y1=\"25.0\" x2=\"475\" y2=\"25.0\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">8</text><line x1=\"55\" y1=\"173.7\" x2=\"480\" y2=\"173.7\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"235.0\" y1=\"20\" x2=\"235.0\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"64.5,7.9 65.5,10.0 66.5,12.2 67.6,14.3 68.7,16.5 69.7,18.6 70.8,20.7 71.8,22.8 72.8,24.9 73.9,27.0 75.0,29.0 76.0,31.1 77.1,33.1 78.1,35.2 79.1,37.2 80.2,39.2 81.2,41.2 82.3,43.2 83.4,45.1 84.4,47.1 85.4,49.1 86.5,51.0 87.5,52.9 88.6,54.9 89.7,56.8 90.7,58.7 91.7,60.5 92.8,62.4 93.8,64.3 94.9,66.1 96.0,68.0 97.0,69.8 98.1,71.6 99.1,73.4 100.2,75.2 101.2,77.0 102.2,78.7 103.3,80.5 104.3,82.3 105.4,84.0 106.4,85.7 107.5,87.4 108.6,89.1 109.6,90.8 110.7,92.5 111.7,94.2 112.8,95.8 113.8,97.5 114.8,99.1 115.9,100.7 116.9,102.3 118.0,103.9 119.0,105.5 120.1,107.1 121.2,108.7 122.2,110.2 123.2,111.8 124.3,113.3 125.4,114.8 126.4,116.3 127.5,117.8 128.5,119.3 129.6,120.8 130.6,122.2 131.7,123.7 132.7,125.1 133.8,126.6 134.8,128.0 135.8,129.4 136.9,130.8 137.9,132.2 139.0,133.5 140.1,134.9 141.1,136.2 142.1,137.6 143.2,138.9 144.2,140.2 145.3,141.5 146.3,142.8 147.4,144.1 148.4,145.4 149.5,146.6 150.6,147.9 151.6,149.1 152.6,150.3 153.7,151.5 154.8,152.7 155.8,153.9 156.8,155.1 157.9,156.3 158.9,157.4 160.0,158.6 161.1,159.7 162.1,160.8 163.2,161.9 164.2,163.0 165.2,164.1 166.3,165.2 167.4,166.3 168.4,167.3 169.4,168.4 170.5,169.4 171.6,170.4 172.6,171.4 173.7,172.4 174.7,173.4 175.8,174.4 176.8,175.3 177.8,176.3 178.9,177.2 179.9,178.1 181.0,179.1 182.1,180.0 183.1,180.9 184.1,181.7 185.2,182.6 186.2,183.5 187.3,184.3 188.4,185.2 189.4,186.0 190.4,186.8 191.5,187.6 192.6,188.4 193.6,189.2 194.7,189.9 195.7,190.7 196.8,191.4 197.8,192.2 198.8,192.9 199.9,193.6 201.0,194.3 202.0,195.0 203.0,195.7 204.1,196.3 205.2,197.0 206.2,197.6 207.2,198.3 208.3,198.9 209.3,199.5 210.4,200.1 211.4,200.7 212.5,201.3 213.6,201.8 214.6,202.4 215.7,202.9 216.7,203.4 217.8,204.0 218.8,204.5 219.8,205.0 220.9,205.4 222.0,205.9 223.0,206.4 224.0,206.8 225.1,207.3 226.2,207.7 227.2,208.1 228.2,208.5 229.3,208.9 230.3,209.3 231.4,209.7 232.4,210.0 233.5,210.4 234.6,210.7 235.6,211.0 236.6,211.3 237.7,211.6 238.8,211.9 239.8,212.2 240.9,212.5 241.9,212.7 242.9,213.0 244.0,213.2 245.1,213.4 246.1,213.6 247.2,213.8 248.2,214.0 249.2,214.2 250.3,214.4 251.3,214.5 252.4,214.7 253.5,214.8 254.5,214.9 255.5,215.0 256.6,215.1 257.6,215.2 258.7,215.3 259.8,215.3 260.8,215.4 261.9,215.4 262.9,215.5 263.9,215.5 265.0,215.5 266.1,215.5 267.1,215.5 268.1,215.4 269.2,215.4 270.2,215.3 271.3,215.3 272.4,215.2 273.4,215.1 274.5,215.0 275.5,214.9 276.5,214.8 277.6,214.7 278.6,214.5 279.7,214.4 280.8,214.2 281.8,214.0 282.9,213.8 283.9,213.6 284.9,213.4 286.0,213.2 287.1,213.0 288.1,212.7 289.1,212.5 290.2,212.2 291.2,211.9 292.3,211.6 293.4,211.3 294.4,211.0 295.5,210.7 296.5,210.4 297.6,210.0 298.6,209.7 299.6,209.3 300.7,208.9 301.8,208.5 302.8,208.1 303.9,207.7 304.9,207.3 306.0,206.8 307.0,206.4 308.1,205.9 309.1,205.4 310.2,205.0 311.2,204.5 312.2,204.0 313.3,203.4 314.3,202.9 315.4,202.4 316.4,201.8 317.5,201.3 318.6,200.7 319.6,200.1 320.7,199.5 321.7,198.9 322.8,198.3 323.8,197.6 324.8,197.0 325.9,196.3 326.9,195.7 328.0,195.0 329.1,194.3 330.1,193.6 331.1,192.9 332.2,192.2 333.2,191.4 334.3,190.7 335.4,189.9 336.4,189.2 337.4,188.4 338.5,187.6 339.5,186.8 340.6,186.0 341.6,185.2 342.7,184.3 343.8,183.5 344.8,182.6 345.9,181.7 346.9,180.9 348.0,180.0 349.0,179.1 350.1,178.1 351.1,177.2 352.1,176.3 353.2,175.3 354.2,174.4 355.3,173.4 356.4,172.4 357.4,171.4 358.4,170.4 359.5,169.4 360.6,168.4 361.6,167.3 362.7,166.3 363.7,165.2 364.8,164.1 365.8,163.0 366.8,161.9 367.9,160.8 368.9,159.7 370.0,158.6 371.1,157.4 372.1,156.3 373.2,155.1 374.2,153.9 375.2,152.7 376.3,151.5 377.3,150.3 378.4,149.1 379.4,147.9 380.5,146.6 381.6,145.4 382.6,144.1 383.6,142.8 384.7,141.5 385.8,140.2 386.8,138.9 387.9,137.6 388.9,136.2 389.9,134.9 391.0,133.5 392.0,132.2 393.1,130.8 394.1,129.4 395.2,128.0 396.2,126.6 397.3,125.1 398.4,123.7 399.4,122.2 400.5,120.8 401.5,119.3 402.6,117.8 403.6,116.3 404.6,114.8 405.7,113.3 406.8,111.8 407.8,110.2 408.9,108.7 409.9,107.1 410.9,105.5 412.0,103.9 413.1,102.3 414.1,100.7 415.2,99.1 416.2,97.5 417.2,95.8 418.3,94.2 419.3,92.5 420.4,90.8 421.4,89.1 422.5,87.4 423.6,85.7 424.6,84.0 425.7,82.3 426.7,80.5 427.8,78.7 428.8,77.0 429.8,75.2 430.9,73.4 431.9,71.6 433.0,69.8 434.1,68.0 435.1,66.1 436.1,64.3 437.2,62.4 438.2,60.5 439.3,58.7 440.4,56.8 441.4,54.9 442.4,52.9 443.5,51.0 444.5,49.1 445.6,47.1 446.6,45.1 447.7,43.2 448.8,41.2 449.8,39.2 450.9,37.2 451.9,35.2 453.0,33.1 454.0,31.1 455.1,29.0 456.1,27.0 457.1,24.9 458.2,22.8 459.2,20.7 460.3,18.6 461.4,16.5 462.4,14.3 463.4,12.2 464.5,10.0 465.6,7.9\"/><text x=\"467\" y=\"43\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = f′(x)</text></svg></span><p>a) På vilka intervall är \\(f\\) växande respektive avtagande?<br>b) Avgör om de stationära punkterna är maximi- eller minimipunkter för \\(f\\).</p>",
    "s": "<p>Grafen till \\(f'\\) skär x-axeln vid \\(x=-1\\) och \\(x=2\\). Derivatan är positiv för \\(x&lt;-1\\), negativ för \\(-1&lt;x&lt;2\\) och positiv för \\(x&gt;2\\).</p><p>Alltså är \\(f\\) <strong>växande</strong> på \\(( -\\infty,-1)\\) och \\((2,\\infty)\\), och <strong>avtagande</strong> på \\((-1,2)\\).</p><p>Vid \\(x=-1\\) går \\(f'\\) från + till −: <strong>maximipunkt</strong>. Vid \\(x=2\\) går den från − till +: <strong>minimipunkt</strong>.</p>",
    "familj": "derivatagraf_tecken_parabel"
  },
  {
    "id": "2.40",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera och faktorisera svaret så långt det är naturligt.</p><p>a) \\(f(x)=e^{2x}(x^2+1)\\)<br>b) \\(g(x)=x^2\\cos x\\)<br>c) \\(h(x)=(2x-1)e^{-x}\\)</p>",
    "s": "<p>a) \\(f'=2e^{2x}(x^2+1)+2xe^{2x}=\\boxed{2e^{2x}(x^2+x+1)}\\).</p><p>b) \\(g'=2x\\cos x-x^2\\sin x=\\boxed{x(2\\cos x-x\\sin x)}\\).</p><p>c) \\(h'=2e^{-x}-(2x-1)e^{-x}=\\boxed{e^{-x}(3-2x)}\\).</p>",
    "familj": "proc_produktregel_faktorisera_2"
  },
  {
    "id": "2.41",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En sluten cylindrisk burk ska rymma 1000 cm³. Radien är \\(r\\) cm och höjden \\(h\\) cm.</p><p>a) Visa att burkens area kan skrivas \\(S(r)=2\\pi r^2+2000/r\\).<br>b) Bestäm den radie och höjd som minimerar materialåtgången. Svara med två decimaler.</p>",
    "s": "<p>Volymvillkoret \\(\\pi r^2h=1000\\) ger \\(h=1000/(\\pi r^2)\\). Då</p><p>\\[S=2\\pi r^2+2\\pi rh=2\\pi r^2+\\frac{2000}{r}.\\]</p><p>\\[S'(r)=4\\pi r-\\frac{2000}{r^2}=0\\Rightarrow r^3=\\frac{500}{\\pi}.\\]</p><p>\\(r\\approx\\boxed{5,42}\\) cm. Då \\(h=1000/(\\pi r^2)=2r\\approx\\boxed{10,84}\\) cm. \\(S'\\) byter från negativ till positiv, så detta ger minimum.</p>",
    "familj": "optimering_cylinder_fast_volym"
  },
  {
    "id": "2.42",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm tangentens ekvation till kurvan</p><p>\\[y=x^2e^{-x}\\]</p><p>i den punkt där \\(x=2\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera de två faktorerna och använd produktregeln \\((uv)' = u'v+uv'\\). Förenkla därefter.</p><p>\\[f'(x)=2xe^{-x}-x^2e^{-x}=e^{-x}(2x-x^2).\\]</p><p>\\(f'(2)=0\\) och \\(f(2)=4e^{-2}\\). Tangenten är därför horisontell:</p><p>\\[\\boxed{y=\\frac4{e^2}}.\\]</p>",
    "familj": "produkt_tangent_x2exp"
  },
  {
    "id": "2.43",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Låt \\(f(x)=x^2+1\\) och \\(g(x)=\\ln x\\).</p><p>a) Bestäm \\((g\\circ f)(x)\\).<br>b) Derivera den sammansatta funktionen på två sätt: direkt och med kedjeregeln skriven som \\(g'(f(x))f'(x)\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera den yttre och den inre funktionen. Kedjeregeln innebär att den yttre derivatan multipliceras med den inre derivatan.</p><p>a) \\((g\\circ f)(x)=\\ln(x^2+1)\\).</p><p>b) Direkt: \\(2x/(x^2+1)\\). Med kedjeregeln: \\(g'(f(x))f'(x)=1/(x^2+1)\\cdot2x\\), samma resultat.</p>",
    "familj": "sammansatt_kedja"
  },
  {
    "id": "2.44",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=5x^4-3x^2+7\\)<br>b) \\(g(x)=4e^x-2x^3\\)<br>c) \\(h(x)=3\\ln x+5x\\)<br>d) \\(p(x)=x^{-2}+2x^{1/2}\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera term för term. Använd potensregeln, \\((e^x)'=e^x\\) och \\((\\ln x)'=1/x\\).</p><p>a) \\(f'(x)=20x^3-6x\\).</p><p>b) \\(g'(x)=4e^x-6x^2\\).</p><p>c) \\(h'(x)=\\frac3x+5\\).</p><p>d) \\(p'(x)=-2x^{-3}+x^{-1/2}\\), eftersom \\((2x^{1/2})'=x^{-1/2}\\).</p>",
    "familj": "deriv_rutin_fyra"
  },
  {
    "id": "2.45",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Derivera</p>\n<p>\\[\ny=\\frac{\\ln(2x)}{e^{4x}},\\qquad x>0,\n\\]</p>\n<p>och förenkla svaret så långt som möjligt.</p>",
    "s": "<p>Skriv först om funktionen:</p>\n<p>\\[\ny=e^{-4x}\\ln(2x).\n\\]</p>\n<p>Eftersom \\(\\frac{d}{dx}\\ln(2x)=\\frac1x\\) fås med produktregeln</p>\n<p>\\[\ny'=(-4e^{-4x})\\ln(2x)+e^{-4x}\\frac1x.\n\\]</p>\n<p>Bryt ut \\(e^{-4x}\\):</p>\n<p><strong>\\[\ny'=e^{-4x}\\left(\\frac1x-4\\ln(2x)\\right).\n\\]</strong></p>",
    "familj": "kallmaterial_log_exp_derivata"
  },
  {
    "id": "2.46",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med kvotregeln.</p><p>a) \\(f(x)=\\frac{x}{x+2}\\)<br>b) \\(g(x)=\\frac{x^2+1}{x}\\)<br>c) \\(h(x)=\\frac{e^x}{x}\\)<br>d) \\(p(x)=\\frac{\\sin x}{x}\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=\\frac{2}{(x+2)^2}\\)</strong>.</p><p>b) \\(g'(x)=\\frac{2x^2-(x^2+1)}{x^2}=\\boxed{\\frac{x^2-1}{x^2}}\\).</p><p>c) <strong>\\(h'(x)=\\frac{e^x(x-1)}{x^2}\\)</strong>.</p><p>d) <strong>\\(p'(x)=\\frac{x\\cos x-\\sin x}{x^2}\\)</strong>.</p>",
    "familj": "proc_kvotregel_4"
  },
  {
    "id": "2.47",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Skissa grafen till</p>\n<p>\\[\nf(x)=2x-1+\\frac1{x-2}.\n\\]</p>\n<p>Markera asymptoterna och använd dem tillsammans med derivatan för att få rätt form på grafen.</p><span class=\"fig\"><svg width=\"440\" height=\"255\" viewBox=\"0 0 440 255\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tomt koordinatsystem med rutnät för grafskissning\">\n<rect x=\"1\" y=\"1\" width=\"438\" height=\"253\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"50.0\" y1=\"28.0\" x2=\"50.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"84.0\" y1=\"28.0\" x2=\"84.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"118.0\" y1=\"28.0\" x2=\"118.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"152.0\" y1=\"28.0\" x2=\"152.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"186.0\" y1=\"28.0\" x2=\"186.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"220.0\" y1=\"28.0\" x2=\"220.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"254.0\" y1=\"28.0\" x2=\"254.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"288.0\" y1=\"28.0\" x2=\"288.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"322.0\" y1=\"28.0\" x2=\"322.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"356.0\" y1=\"28.0\" x2=\"356.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"390.0\" y1=\"28.0\" x2=\"390.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"228.0\" x2=\"390.0\" y2=\"228.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"208.0\" x2=\"390.0\" y2=\"208.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"188.0\" x2=\"390.0\" y2=\"188.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"168.0\" x2=\"390.0\" y2=\"168.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"148.0\" x2=\"390.0\" y2=\"148.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"128.0\" x2=\"390.0\" y2=\"128.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"108.0\" x2=\"390.0\" y2=\"108.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"88.0\" x2=\"390.0\" y2=\"88.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"68.0\" x2=\"390.0\" y2=\"68.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"48.0\" x2=\"390.0\" y2=\"48.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"28.0\" x2=\"390.0\" y2=\"28.0\" stroke=\"#D9E6E9\" stroke-width=\"1\"/>\n<line x1=\"50.0\" y1=\"128.0\" x2=\"390.0\" y2=\"128.0\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"220.0\" y1=\"228.0\" x2=\"220.0\" y2=\"28.0\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<text x=\"50.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text>\n<text x=\"84.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<text x=\"118.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<text x=\"152.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<text x=\"186.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<text x=\"254.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<text x=\"288.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<text x=\"322.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<text x=\"356.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<text x=\"390.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<text x=\"212.0\" y=\"231.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text>\n<text x=\"212.0\" y=\"211.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<text x=\"212.0\" y=\"191.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<text x=\"212.0\" y=\"171.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<text x=\"212.0\" y=\"151.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<text x=\"212.0\" y=\"111.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<text x=\"212.0\" y=\"91.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<text x=\"212.0\" y=\"71.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<text x=\"212.0\" y=\"51.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<text x=\"212.0\" y=\"31.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<text x=\"386.0\" y=\"121.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text>\n<text x=\"228.0\" y=\"41.0\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">y</text>\n</svg></span>",
    "s": "<p>Den lodräta asymptoten är</p>\n<p>\\[\nx=2.\n\\]</p>\n<p>Eftersom \\(\\frac1{x-2}\\to0\\) då \\(|x|\\to\\infty\\) är den sneda asymptoten</p>\n<p>\\[\ny=2x-1.\n\\]</p>\n<p>Derivatan är</p>\n<p>\\[\nf'(x)=2-\\frac1{(x-2)^2}.\n\\]</p>\n<p>Stationära punkter fås av</p>\n<p>\\[\n2=\\frac1{(x-2)^2}\n\\Rightarrow\nx=2\\pm\\frac1{\\sqrt2}.\n\\]</p>\n<p>På vänster gren ligger grafen under den sneda asymptoten, eftersom \\(1/(x-2)&lt;0\\). På höger gren ligger den över.</p>\n<p><strong>En korrekt skiss ska alltså visa asymptoterna \\(x=2\\) och \\(y=2x-1\\), med en lokal maximipunkt på vänster gren och en lokal minimipunkt på höger gren.</strong></p>",
    "familj": "grafskiss_asymptoter_derivata"
  },
  {
    "id": "2.48",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm funktionens lodräta och vågräta asymptot:</p>\n<p>\\[\nf(x)=\\frac{2x+3}{4x+1}.\n\\]</p>",
    "s": "<p>Den lodräta asymptoten fås när nämnaren är noll:</p>\n<p>\\[\n4x+1=0\\Rightarrow x=-\\frac14.\n\\]</p>\n<p>För stora \\(|x|\\) bestäms kvoten av de ledande termerna:</p>\n<p>\\[\n\\frac{2x}{4x}\\to\\frac12.\n\\]</p>\n<p><strong>Lodrät asymptot: \\(x=-\\frac14\\). Vågrät asymptot: \\(y=\\frac12\\).</strong></p>",
    "familj": "kallmaterial_asymptoter_rutin"
  },
  {
    "id": "2.49",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(x^2e^x\\)<br>b) \\(x\\ln x\\)<br>c) \\(x^3\\sin x\\)<br>d) \\((2x-1)e^{2x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd produktregeln \\((uv)'=u'v+uv'\\).</p><p>a) \\(e^x(x^2+2x)\\)<br>b) \\(\\ln x+1\\)<br>c) \\(3x^2\\sin x+x^3\\cos x\\)<br>d) \\(2e^{2x}+2(2x-1)e^{2x}=4xe^{2x}\\)</p>",
    "familj": "produkt_rutin_fyra"
  },
  {
    "id": "2.50",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\((2x-1)e^x\\)<br>b) \\(x^2\\cos x\\)<br>c) \\(\\sqrt{x}\\,\\ln x\\)<br>d) \\((x^2+1)\\sin x\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd produktregeln \\((uv)'=u'v+uv'\\).</p><p>a) <strong>\\((2x+1)e^x\\)</strong>.<br>b) <strong>\\(2x\\cos x-x^2\\sin x\\)</strong>.<br>c) <strong>\\(\\frac{\\ln x+2}{2\\sqrt{x}}\\)</strong>.<br>d) <strong>\\(2x\\sin x+(x^2+1)\\cos x\\)</strong>.</p>",
    "familj": "proc_produktregeln_2"
  },
  {
    "id": "2.51",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\sin(5x)\\)<br>b) \\(\\cos(4x)\\)<br>c) \\(\\tan(3x)\\)<br>d) \\(2\\cos(\\pi x)\\)</p>",
    "s": "<p>a) <strong>\\(5\\cos5x\\)</strong>.<br>b) <strong>\\(-4\\sin4x\\)</strong>.<br>c) <strong>\\(\\frac{3}{\\cos^2(3x)}\\)</strong>.<br>d) <strong>\\(-2\\pi\\sin(\\pi x)\\)</strong>.</p>",
    "familj": "proc_deriv_trig_kedja"
  },
  {
    "id": "2.52",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Derivera och förenkla.</p><p>a) \\(f(x)=\\frac{\\ln x}{x}\\)<br>b) \\(g(x)=\\frac{x^2}{e^x}\\)<br>c) \\(h(x)=\\frac{\\sin x}{\\cos x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd kvotregeln och håll täljaren samlad tills deriveringen är klar. Förenkla sedan.</p><p>a) \\(f'=\\frac{1-\\ln x}{x^2}\\).</p><p>b) \\(g'=\\frac{2xe^x-x^2e^x}{e^{2x}}=\\boxed{e^{-x}(2x-x^2)}\\).</p><p>c) \\(h'=\\frac{\\cos^2x+\\sin^2x}{\\cos^2x}=\\boxed{\\frac1{\\cos^2x}}\\).</p>",
    "familj": "proc_kvotregel_forenkla_2"
  },
  {
    "id": "2.53",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>En förenklad modell för effekten från en vindturbin är</p><p>\\[P(v)=v(20-v)^2,\\qquad0\\le v\\le20,\\]</p><p>där \\(v\\) är vindhastigheten i en viss skala.</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"funktionsgraf\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"160.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text><line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"265.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">10</text><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"370.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">15</text><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">20</text><line x1=\"55\" y1=\"248.0\" x2=\"475\" y2=\"248.0\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"251.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"55\" y1=\"179.4\" x2=\"475\" y2=\"179.4\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"182.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">400</text><line x1=\"55\" y1=\"110.8\" x2=\"475\" y2=\"110.8\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"113.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">800</text><line x1=\"55\" y1=\"42.2\" x2=\"475\" y2=\"42.2\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"45.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1200</text><line x1=\"55\" y1=\"248.0\" x2=\"480\" y2=\"248.0\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"55.0\" y1=\"20\" x2=\"55.0\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"55.0,248.0 56.0,244.6 57.1,241.2 58.1,237.9 59.2,234.6 60.2,231.3 61.3,228.0 62.4,224.8 63.4,221.6 64.5,218.5 65.5,215.4 66.5,212.3 67.6,209.3 68.7,206.3 69.7,203.3 70.8,200.3 71.8,197.4 72.8,194.5 73.9,191.7 75.0,188.9 76.0,186.1 77.0,183.3 78.1,180.6 79.2,177.9 80.2,175.2 81.2,172.6 82.3,170.0 83.3,167.5 84.4,164.9 85.5,162.4 86.5,159.9 87.6,157.5 88.6,155.1 89.7,152.7 90.7,150.3 91.8,148.0 92.8,145.7 93.8,143.5 94.9,141.2 95.9,139.0 97.0,136.8 98.0,134.7 99.1,132.6 100.2,130.5 101.2,128.4 102.2,126.4 103.3,124.4 104.3,122.4 105.4,120.5 106.5,118.6 107.5,116.7 108.5,114.8 109.6,113.0 110.7,111.2 111.7,109.4 112.8,107.6 113.8,105.9 114.8,104.2 115.9,102.5 117.0,100.9 118.0,99.3 119.0,97.7 120.1,96.1 121.1,94.6 122.2,93.1 123.2,91.6 124.3,90.1 125.4,88.7 126.4,87.3 127.5,85.9 128.5,84.5 129.6,83.2 130.6,81.9 131.6,80.6 132.7,79.4 133.8,78.1 134.8,76.9 135.9,75.7 136.9,74.6 137.9,73.5 139.0,72.3 140.1,71.3 141.1,70.2 142.2,69.2 143.2,68.1 144.2,67.2 145.3,66.2 146.3,65.2 147.4,64.3 148.4,63.4 149.5,62.5 150.6,61.7 151.6,60.9 152.7,60.1 153.7,59.3 154.8,58.5 155.8,57.8 156.8,57.0 157.9,56.3 158.9,55.7 160.0,55.0 161.1,54.4 162.1,53.8 163.2,53.2 164.2,52.6 165.2,52.1 166.3,51.5 167.3,51.0 168.4,50.5 169.4,50.1 170.5,49.6 171.6,49.2 172.6,48.8 173.7,48.4 174.7,48.1 175.8,47.7 176.8,47.4 177.8,47.1 178.9,46.8 179.9,46.5 181.0,46.3 182.1,46.0 183.1,45.8 184.2,45.6 185.2,45.5 186.2,45.3 187.3,45.2 188.3,45.0 189.4,44.9 190.5,44.9 191.5,44.8 192.5,44.7 193.6,44.7 194.7,44.7 195.7,44.7 196.8,44.7 197.8,44.8 198.8,44.8 199.9,44.9 201.0,45.0 202.0,45.1 203.0,45.2 204.1,45.3 205.2,45.5 206.2,45.6 207.2,45.8 208.3,46.0 209.3,46.2 210.4,46.5 211.5,46.7 212.5,47.0 213.5,47.3 214.6,47.5 215.7,47.8 216.7,48.2 217.8,48.5 218.8,48.9 219.8,49.2 220.9,49.6 222.0,50.0 223.0,50.4 224.1,50.8 225.1,51.2 226.2,51.7 227.2,52.1 228.2,52.6 229.3,53.1 230.3,53.6 231.4,54.1 232.4,54.6 233.5,55.2 234.6,55.7 235.6,56.3 236.7,56.9 237.7,57.4 238.8,58.0 239.8,58.6 240.8,59.3 241.9,59.9 242.9,60.5 244.0,61.2 245.1,61.9 246.1,62.5 247.2,63.2 248.2,63.9 249.2,64.6 250.3,65.4 251.3,66.1 252.4,66.8 253.4,67.6 254.5,68.3 255.6,69.1 256.6,69.9 257.6,70.7 258.7,71.5 259.8,72.3 260.8,73.1 261.9,73.9 262.9,74.8 263.9,75.6 265.0,76.5 266.1,77.3 267.1,78.2 268.1,79.1 269.2,80.0 270.2,80.9 271.3,81.8 272.4,82.7 273.4,83.6 274.4,84.5 275.5,85.4 276.6,86.4 277.6,87.3 278.6,88.3 279.7,89.3 280.8,90.2 281.8,91.2 282.9,92.2 283.9,93.2 284.9,94.2 286.0,95.2 287.1,96.2 288.1,97.2 289.1,98.2 290.2,99.2 291.2,100.2 292.3,101.3 293.4,102.3 294.4,103.4 295.4,104.4 296.5,105.5 297.6,106.5 298.6,107.6 299.6,108.7 300.7,109.7 301.8,110.8 302.8,111.9 303.9,113.0 304.9,114.1 305.9,115.2 307.0,116.3 308.1,117.4 309.1,118.5 310.1,119.6 311.2,120.7 312.2,121.8 313.3,122.9 314.3,124.0 315.4,125.1 316.4,126.3 317.5,127.4 318.6,128.5 319.6,129.6 320.7,130.8 321.7,131.9 322.8,133.0 323.8,134.2 324.8,135.3 325.9,136.5 326.9,137.6 328.0,138.7 329.1,139.9 330.1,141.0 331.2,142.2 332.2,143.3 333.2,144.4 334.3,145.6 335.3,146.7 336.4,147.9 337.4,149.0 338.5,150.2 339.6,151.3 340.6,152.4 341.7,153.6 342.7,154.7 343.8,155.9 344.8,157.0 345.8,158.1 346.9,159.3 347.9,160.4 349.0,161.5 350.1,162.7 351.1,163.8 352.2,164.9 353.2,166.1 354.2,167.2 355.3,168.3 356.3,169.4 357.4,170.5 358.4,171.6 359.5,172.8 360.6,173.9 361.6,175.0 362.7,176.1 363.7,177.2 364.8,178.3 365.8,179.4 366.8,180.4 367.9,181.5 368.9,182.6 370.0,183.7 371.1,184.7 372.1,185.8 373.2,186.9 374.2,187.9 375.2,189.0 376.3,190.0 377.3,191.1 378.4,192.1 379.4,193.1 380.5,194.2 381.6,195.2 382.6,196.2 383.7,197.2 384.7,198.2 385.8,199.2 386.8,200.2 387.8,201.2 388.9,202.2 389.9,203.1 391.0,204.1 392.1,205.0 393.1,206.0 394.1,206.9 395.2,207.9 396.2,208.8 397.3,209.7 398.4,210.6 399.4,211.5 400.4,212.4 401.5,213.3 402.6,214.2 403.6,215.1 404.6,215.9 405.7,216.8 406.8,217.7 407.8,218.5 408.9,219.3 409.9,220.1 410.9,221.0 412.0,221.8 413.1,222.5 414.1,223.3 415.1,224.1 416.2,224.9 417.2,225.6 418.3,226.4 419.4,227.1 420.4,227.8 421.4,228.5 422.5,229.2 423.6,229.9 424.6,230.6 425.6,231.3 426.7,231.9 427.8,232.6 428.8,233.2 429.9,233.8 430.9,234.5 431.9,235.1 433.0,235.6 434.1,236.2 435.1,236.8 436.1,237.3 437.2,237.9 438.2,238.4 439.3,238.9 440.4,239.4 441.4,239.9 442.4,240.4 443.5,240.9 444.6,241.3 445.6,241.7 446.6,242.2 447.7,242.6 448.8,243.0 449.8,243.4 450.9,243.7 451.9,244.1 452.9,244.4 454.0,244.7 455.1,245.1 456.1,245.3 457.1,245.6 458.2,245.9 459.2,246.1 460.3,246.4 461.4,246.6 462.4,246.8 463.4,247.0 464.5,247.2 465.6,247.3 466.6,247.5 467.6,247.6 468.7,247.7 469.8,247.8 470.8,247.9 471.9,247.9 472.9,248.0 473.9,248.0 475.0,248.0\"/><text x=\"467\" y=\"43\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">P(v)</text></svg></span><p>Bestäm den vindhastighet som ger maximal effekt och beräkna maxeffekten.</p>",
    "s": "<p>\\[P'(v)=(20-v)^2-2v(20-v)=(20-v)(20-3v).\\]</p><p>Kritiska punkter är \\(v=20\\) och \\(v=20/3\\). Ändpunkterna ger \\(P(0)=P(20)=0\\), medan</p><p>\\[P(20/3)=\\frac{20}{3}\\left(\\frac{40}{3}\\right)^2=\\frac{32000}{27}\\approx1185,2.\\]</p><p><strong>Maximal effekt fås vid \\(\\boxed{v=20/3\\approx6,67}\\).</strong></p>",
    "familj": "vindturbin_optimering_modell"
  },
  {
    "id": "2.54",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p>\n<p>a) \\(f(x)=x^4-3x^2+2\\)<br>\nb) \\(g(x)=\\sin5x\\)<br>\nc) \\(h(x)=(3x-4)^5\\)<br>\nd) \\(p(x)=e^{2x}\\)</p>",
    "s": "<p>a) \\[\nf'(x)=4x^3-6x.\n\\]</p>\n<p>b) Kedjeregeln ger</p>\n<p>\\[\ng'(x)=5\\cos5x.\n\\]</p>\n<p>c)</p>\n<p>\\[\nh'(x)=5(3x-4)^4\\cdot3=15(3x-4)^4.\n\\]</p>\n<p>d)</p>\n<p>\\[\np'(x)=2e^{2x}.\n\\]</p>",
    "familj": "derivata_rutin_fyra_delar"
  },
  {
    "id": "2.55",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Grafen nedan visar derivatan \\(f'\\) till en funktion \\(f\\).</p>\n<span class=\"fig\"><svg width=\"500\" height=\"300\" viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Parabeln y lika med x kvadrat plus x minus 2 som graf till f prim, med nollställen minus 2 och 1 och nivån y lika med 2 markerad\">\n<rect x=\"1\" y=\"1\" width=\"498\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"55\" y1=\"35\" x2=\"55\" y2=\"255\"/><line x1=\"105\" y1=\"35\" x2=\"105\" y2=\"255\"/><line x1=\"155\" y1=\"35\" x2=\"155\" y2=\"255\"/><line x1=\"205\" y1=\"35\" x2=\"205\" y2=\"255\"/><line x1=\"255\" y1=\"35\" x2=\"255\" y2=\"255\"/><line x1=\"305\" y1=\"35\" x2=\"305\" y2=\"255\"/><line x1=\"355\" y1=\"35\" x2=\"355\" y2=\"255\"/><line x1=\"405\" y1=\"35\" x2=\"405\" y2=\"255\"/><line x1=\"455\" y1=\"35\" x2=\"455\" y2=\"255\"/><line x1=\"55\" y1=\"255.0\" x2=\"455\" y2=\"255.0\"/><line x1=\"55\" y1=\"218.3\" x2=\"455\" y2=\"218.3\"/><line x1=\"55\" y1=\"181.7\" x2=\"455\" y2=\"181.7\"/><line x1=\"55\" y1=\"145.0\" x2=\"455\" y2=\"145.0\"/><line x1=\"55\" y1=\"108.3\" x2=\"455\" y2=\"108.3\"/><line x1=\"55\" y1=\"71.7\" x2=\"455\" y2=\"71.7\"/><line x1=\"55\" y1=\"35.0\" x2=\"455\" y2=\"35.0\"/></g>\n<line x1=\"55\" y1=\"181.66666666666669\" x2=\"465\" y2=\"181.66666666666669\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M465 181.66666666666669 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"255\" y1=\"260\" x2=\"255\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M255 28 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<line x1=\"55\" y1=\"145\" x2=\"455\" y2=\"145\" stroke=\"#8A8F96\" stroke-width=\"1.3\" stroke-dasharray=\"6 5\"/><text x=\"245\" y=\"149\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">2</text>\n<polyline points=\"85.0,68.7 86.7,72.4 88.4,76.0 90.2,79.5 91.9,83.0 93.6,86.5 95.3,89.9 97.1,93.3 98.8,96.6 100.5,99.9 102.2,103.2 103.9,106.4 105.7,109.6 107.4,112.7 109.1,115.7 110.8,118.8 112.6,121.8 114.3,124.7 116.0,127.6 117.7,130.5 119.4,133.3 121.2,136.1 122.9,138.8 124.6,141.5 126.3,144.1 128.1,146.7 129.8,149.3 131.5,151.8 133.2,154.2 134.9,156.7 136.7,159.0 138.4,161.4 140.1,163.7 141.8,165.9 143.6,168.1 145.3,170.3 147.0,172.4 148.7,174.5 150.4,176.5 152.2,178.5 153.9,180.4 155.6,182.3 157.3,184.2 159.1,186.0 160.8,187.8 162.5,189.5 164.2,191.2 165.9,192.8 167.7,194.4 169.4,196.0 171.1,197.5 172.8,199.0 174.6,200.4 176.3,201.8 178.0,203.1 179.7,204.4 181.4,205.6 183.2,206.8 184.9,208.0 186.6,209.1 188.3,210.2 190.1,211.2 191.8,212.2 193.5,213.1 195.2,214.0 196.9,214.9 198.7,215.7 200.4,216.5 202.1,217.2 203.8,217.9 205.6,218.5 207.3,219.1 209.0,219.7 210.7,220.2 212.4,220.7 214.2,221.1 215.9,221.5 217.6,221.8 219.3,222.1 221.1,222.3 222.8,222.5 224.5,222.7 226.2,222.8 227.9,222.9 229.7,222.9 231.4,222.9 233.1,222.8 234.8,222.7 236.6,222.6 238.3,222.4 240.0,222.2 241.7,221.9 243.4,221.6 245.2,221.2 246.9,220.8 248.6,220.4 250.3,219.9 252.1,219.3 253.8,218.8 255.5,218.1 257.2,217.5 258.9,216.8 260.7,216.0 262.4,215.2 264.1,214.4 265.8,213.5 267.6,212.6 269.3,211.6 271.0,210.6 272.7,209.5 274.4,208.4 276.2,207.3 277.9,206.1 279.6,204.9 281.3,203.6 283.1,202.3 284.8,200.9 286.5,199.5 288.2,198.1 289.9,196.6 291.7,195.0 293.4,193.5 295.1,191.8 296.8,190.2 298.6,188.5 300.3,186.7 302.0,184.9 303.7,183.1 305.4,181.2 307.2,179.2 308.9,177.3 310.6,175.3 312.3,173.2 314.1,171.1 315.8,169.0 317.5,166.8 319.2,164.5 320.9,162.3 322.7,159.9 324.4,157.6 326.1,155.2 327.8,152.7 329.6,150.2 331.3,147.7 333.0,145.1 334.7,142.5 336.4,139.8 338.2,137.1 339.9,134.4 341.6,131.6 343.3,128.7 345.1,125.8 346.8,122.9 348.5,119.9 350.2,116.9 351.9,113.9 353.7,110.8 355.4,107.6 357.1,104.4 358.8,101.2 360.6,97.9 362.3,94.6 364.0,91.2 365.7,87.8 367.4,84.4 369.2,80.9 370.9,77.4 372.6,73.8 374.3,70.1 376.1,66.5 377.8,62.8 379.5,59.0 381.2,55.2 382.9,51.4 384.7,47.5 386.4,43.6 388.1,39.6 389.8,35.6 391.6,31.5 393.3,27.4 395.0,23.3\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n<circle cx=\"155\" cy=\"181.66666666666669\" r=\"4\" fill=\"#B43123\"/><circle cx=\"305\" cy=\"181.66666666666669\" r=\"4\" fill=\"#B43123\"/>\n<text x=\"155\" y=\"201.66666666666669\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">-2</text><text x=\"305\" y=\"201.66666666666669\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">1</text><text x=\"365\" y=\"81.26666666666668\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#B43123\">y = f'(x)</text><text x=\"468\" y=\"176.66666666666669\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text>\n</svg></span>\n<p>a) Ange de intervall där \\(f\\) är växande respektive avtagande.<br>b) Avgör om de stationära punkterna är maximi- eller minimipunkter vid \\(x=-2\\) och \\(x=1\\).<br>c) Anta att \\(f(-2)=3\\). Är \\(f(1)\\) större än, mindre än eller lika med 3? Motivera utan att bestämma \\(f\\).<br>d) Hur många punkter på grafen till \\(f\\) har en tangent med lutningen 2?</p>",
    "s": "<p>Grafen visar tecknet på \\(f'\\).</p>\n<p>a) \\(f'&gt;0\\) för \\(x&lt;-2\\) och \\(x&gt;1\\), alltså är \\(f\\) <strong>växande</strong> där. För \\(-2&lt;x&lt;1\\) är \\(f'&lt;0\\), så \\(f\\) är <strong>avtagande</strong>.</p>\n<p>b) Vid \\(x=-2\\) byter derivatan tecken från positiv till negativ: <strong>maximipunkt</strong>. Vid \\(x=1\\) byter den från negativ till positiv: <strong>minimipunkt</strong>.</p>\n<p>c) Funktionen avtar hela vägen från \\(x=-2\\) till \\(x=1\\). Därför är <strong>\\(f(1)&lt;f(-2)=3\\)</strong>.</p>\n<p>d) Tangentlutningen är 2 när \\(f'(x)=2\\). Den horisontella nivån \\(y=2\\) skär den uppåtvända parabeln på två ställen. Alltså finns <strong>två punkter</strong>.</p>",
    "familj": "derivatagraf_tecken_och_lutning_a"
  },
  {
    "id": "2.56",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Låt</p>\n<p>\\[\nf(x)=\\sqrt{x+1},\\qquad g(x)=x^2-4.\n\\]</p>\n<p>a) Bestäm \\((f\\circ g)(x)\\) och dess definitionsmängd.<br>\nb) Bestäm \\((g\\circ f)(x)\\) och dess definitionsmängd.</p>",
    "s": "<p>a)</p>\n<p>\\[\n(f\\circ g)(x)=f(x^2-4)=\\sqrt{x^2-3}.\n\\]</p>\n<p>För att roten ska vara definierad krävs</p>\n<p>\\[\nx^2-3\\ge0\n\\Rightarrow |x|\\ge\\sqrt3.\n\\]</p>\n<p>Alltså <strong>\\(x\\le-\\sqrt3\\) eller \\(x\\ge\\sqrt3\\)</strong>.</p>\n<p>b)</p>\n<p>\\[\n(g\\circ f)(x)=g(\\sqrt{x+1})=(\\sqrt{x+1})^2-4=x-3.\n\\]</p>\n<p>Men sammansättningen är bara definierad där \\(f\\) är definierad, alltså</p>\n<p><strong>\\(x\\ge-1\\)</strong>.</p>",
    "familj": "sammansatta_funktioner_defmangd"
  },
  {
    "id": "2.57",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Grafen visar en funktion \\(f\\). Använd grafen för att avgöra på vilka intervall \\(f'(x)>0\\), \\(f'(x)&lt;0\\) och var \\(f'(x)=0\\).</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"22\" x2=\"48.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"48.0\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text><line x1=\"92.2\" y1=\"22\" x2=\"92.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"92.2\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"136.5\" y1=\"22\" x2=\"136.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"136.5\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"180.8\" y1=\"22\" x2=\"180.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"180.8\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"225.0\" y1=\"22\" x2=\"225.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"269.2\" y1=\"22\" x2=\"269.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"269.2\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"313.5\" y1=\"22\" x2=\"313.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"313.5\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"357.8\" y1=\"22\" x2=\"357.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"357.8\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"402.0\" y1=\"22\" x2=\"402.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"402.0\" y=\"159.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"48\" y1=\"232.0\" x2=\"402\" y2=\"232.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"236.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"48\" y1=\"202.0\" x2=\"402\" y2=\"202.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"206.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"48\" y1=\"172.0\" x2=\"402\" y2=\"172.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"176.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"48\" y1=\"142.0\" x2=\"402\" y2=\"142.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"48\" y1=\"112.0\" x2=\"402\" y2=\"112.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"116.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"48\" y1=\"82.0\" x2=\"402\" y2=\"82.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"86.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"48\" y1=\"52.0\" x2=\"402\" y2=\"52.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"56.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"48\" y1=\"22.0\" x2=\"402\" y2=\"22.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"26.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><polyline points=\"48.0,112.0 92.2,76.0 136.5,52.0 180.8,76.0 225.0,127.0 269.2,172.0 313.5,187.0 357.8,166.0 402.0,106.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"394\" y=\"38\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">f</text></svg></span>",
    "s": "<p>Grafen växer ungefär på \\((-4,-2)\\) och \\((2,4)\\), alltså är \\(f'(x)>0\\) där. Den avtar på \\((-2,2)\\), så \\(f'(x)&lt;0\\) där.</p><p>Vid extrempunkterna \\(x\\approx-2\\) och \\(x\\approx2\\) är tangenten horisontell, alltså \\(f'(x)=0\\).</p>",
    "familj": "derivata_avlas_graf"
  },
  {
    "id": "2.58",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Låt \\(f(x)=2x+1\\) och \\(g(x)=x^2-3\\).</p><p>a) Bestäm \\(f(g(x))\\).<br>b) Bestäm \\(g(f(x))\\).<br>c) Bestäm \\((f\\circ g)(2)\\).<br>d) Derivera \\(g(f(x))\\).</p>",
    "s": "<p>a) \\(f(g(x))=2(x^2-3)+1=\\boxed{2x^2-5}\\).</p><p>b) \\(g(f(x))=(2x+1)^2-3=\\boxed{4x^2+4x-2}\\).</p><p>c) \\(g(2)=1\\), \\(f(1)=3\\), alltså <strong>3</strong>.</p><p>d) \\(g(f(x))=(2x+1)^2-3\\Rightarrow\\boxed{8x+4}\\).</p>",
    "familj": "proc_sammansatta_funktioner_3"
  },
  {
    "id": "2.59",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För \\(a>0\\) definieras</p><p>\\[f_a(x)=x-a\\ln x,\\qquad x>0.\\]</p><p>a) Visa att \\(f_a\\) har exakt en minimipunkt.<br>b) Bestäm minimipunktens koordinater.<br>c) Bestäm alla \\(a>0\\) för vilka minimivärdet är 2.</p>",
    "s": "<p>\\[f_a'(x)=1-\\frac ax=\\frac{x-a}{x}.\\]</p><p>Eftersom \\(x>0\\) är derivatan negativ för \\(x&lt;a\\) och positiv för \\(x>a\\). Funktionen har därför exakt en minimipunkt vid \\(x=a\\).</p><p>Minimivärdet är</p><p>\\[f_a(a)=a-a\\ln a=a(1-\\ln a).\\]</p><p>Villkoret blir \\(a(1-\\ln a)=2\\). Funktionen \\(q(a)=a(1-\\ln a)\\) har maximum 1 vid \\(a=1\\), eftersom \\(q'(a)=-\\ln a\\). Därför kan värdet 2 aldrig uppnås.</p><p><strong>Det finns inget \\(a>0\\) som ger minimivärdet 2.</strong></p>",
    "familj": "parameter_log_resonemang_a"
  },
  {
    "id": "2.60",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera och förenkla.</p><p>a) \\(f(x)=3x^4+2x-9\\)<br>b) \\(g(x)=\\frac{5}{x}+x^2\\)<br>c) \\(h(x)=2\\sqrt{x}-\\frac{1}{x^3}\\)<br>d) \\(q(x)=4e^x+7\\)</p>",
    "s": "<p>a) <strong>\\(12x^3+2\\)</strong>.<br>b) <strong>\\(-\\frac5{x^2}+2x\\)</strong>.<br>c) <strong>\\(\\frac1{\\sqrt{x}}+\\frac3{x^4}\\)</strong>.<br>d) <strong>\\(4e^x\\)</strong>.</p>",
    "familj": "proc_deriv_repetition_2"
  },
  {
    "id": "2.61",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(xe^{2x}\\)<br>b) \\(x\\ln x\\)<br>c) \\(e^x\\cos x\\)<br>d) \\((3x+2)\\sin(2x)\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd produktregeln \\((uv)'=u'v+uv'\\).</p><p>a) <strong>\\(e^{2x}(1+2x)\\)</strong>.<br>b) <strong>\\(\\ln x+1\\)</strong>.<br>c) <strong>\\(e^x(\\cos x-\\sin x)\\)</strong>.<br>d) <strong>\\(3\\sin2x+2(3x+2)\\cos2x\\)</strong>.</p>",
    "familj": "proc_produktregeln_3"
  },
  {
    "id": "2.62",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Studera funktionen</p><p>\\[f(x)=\\ln x-\\frac{x}{2},\\qquad x&gt;0.\\]</p>\n<span class=\"fig\"><svg width=\"450\" height=\"255\" viewBox=\"0 0 450 255\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tomt koordinatsystem för grafskissning\">\n<rect x=\"1\" y=\"1\" width=\"448\" height=\"253\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"225\"/><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"225\"/><line x1=\"140\" y1=\"30\" x2=\"140\" y2=\"225\"/><line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"225\"/><line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"225\"/><line x1=\"260\" y1=\"30\" x2=\"260\" y2=\"225\"/><line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"225\"/><line x1=\"340\" y1=\"30\" x2=\"340\" y2=\"225\"/><line x1=\"380\" y1=\"30\" x2=\"380\" y2=\"225\"/><line x1=\"420\" y1=\"30\" x2=\"420\" y2=\"225\"/><line x1=\"45\" y1=\"45\" x2=\"425\" y2=\"45\"/><line x1=\"45\" y1=\"80\" x2=\"425\" y2=\"80\"/><line x1=\"45\" y1=\"115\" x2=\"425\" y2=\"115\"/><line x1=\"45\" y1=\"150\" x2=\"425\" y2=\"150\"/><line x1=\"45\" y1=\"185\" x2=\"425\" y2=\"185\"/><line x1=\"45\" y1=\"220\" x2=\"425\" y2=\"220\"/></g>\n<line x1=\"45\" y1=\"150\" x2=\"432\" y2=\"150\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M432 150 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"23\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M60 23 l-5 9 h10 z\" fill=\"#2B2527\"/><text x=\"434\" y=\"145\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text><text x=\"68\" y=\"26\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">y</text>\n</svg></span>\n<p>a) Bestäm funktionens eventuella extrempunkt och ange om den är maximi- eller minimipunkt.<br>b) Beskriv grafens beteende då \\(x\\to0^+\\) och då \\(x\\to\\infty\\).<br>c) Visa att ekvationen \\(f(x)=0\\) saknar lösning och skissa därefter grafen.</p>",
    "s": "<p>Derivatan är</p><p>\\[f'(x)=\\frac1x-\\frac12=\\frac{2-x}{2x}.\\]</p><p>Eftersom \\(x&gt;0\\) är derivatan positiv för \\(0&lt;x&lt;2\\) och negativ för \\(x&gt;2\\). Funktionen har därför en <strong>maximipunkt</strong> vid \\(x=2\\).</p>\n<p>\\[f(2)=\\ln2-1.\\]</p><p>Maximipunkten är alltså <strong>\\((2,\\ln2-1)\\)</strong>.</p>\n<p>När \\(x\\to0^+\\) gäller \\(\\ln x\\to-\\infty\\), så \\(f(x)\\to-\\infty\\). Linjen \\(x=0\\) är en lodrät asymptot. När \\(x\\to\\infty\\) dominerar \\(-x/2\\), så även då går \\(f(x)\\to-\\infty\\).</p>\n<p>Eftersom funktionens största värde är \\(\\ln2-1&lt;0\\) ligger hela grafen under x-axeln. Därför saknar \\(f(x)=0\\) lösning.</p>",
    "familj": "grafskiss_log_minus_linjär_a"
  },
  {
    "id": "2.63",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen är \\(f(x)=xe^{-x}\\).</p><p>a) Bestäm \\(f'(x)\\).<br>b) Visa att grafen har en horisontell tangent vid \\(x=1\\) och bestäm tangentens ekvation.</p>",
    "s": "<p><strong>Metod:</strong> Identifiera de två faktorerna och använd produktregeln \\((uv)' = u'v+uv'\\). Förenkla därefter.</p><p>a) Produktregeln ger</p><p>\\[f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x).\\]</p><p>b) \\(f'(1)=0\\), alltså är tangenten horisontell. Punkten är \\((1,e^{-1})\\), så tangenten är <strong>\\(y=1/e\\)</strong>.</p>",
    "familj": "produkt_e_minus_x_tangent"
  },
  {
    "id": "2.64",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=\\ln(x^2+1)\\)<br>b) \\(g(x)=\\ln(5-2x)\\)<br>c) \\(h(x)=e^{x^2}\\)<br>d) \\(p(x)=3^{2x}\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=\\frac{2x}{x^2+1}\\)</strong>.</p><p>b) <strong>\\(g'(x)=\\frac{-2}{5-2x}\\)</strong>.</p><p>c) <strong>\\(h'(x)=2xe^{x^2}\\)</strong>.</p><p>d) <strong>\\(p'(x)=2\\ln3\\cdot3^{2x}\\)</strong>.</p>",
    "familj": "proc_deriv_log_exp_sammansatt_3"
  },
  {
    "id": "2.65",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(f(x)=\\ln(x-2)\\):</p><p>a) ange definitionsmängden<br>b) bestäm \\(f'(x)\\)<br>c) bestäm tangentens ekvation då \\(x=3\\).</p>",
    "s": "<p>a) <strong>\\(x&gt;2\\)</strong>.</p><p>b) <strong>\\(f'(x)=1/(x-2)\\)</strong>.</p><p>c) \\(f(3)=0\\) och \\(f'(3)=1\\). Tangenten genom \\((3,0)\\) blir <strong>\\(y=x-3\\)</strong>.</p>",
    "familj": "ln_funktion_dom_tangent"
  },
  {
    "id": "2.66",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Temperaturen under en del av ett dygn modelleras med</p>\n<p>\\[\nT(x)=15+5\\sin(0,26x),\n\\]</p>\n<p>där \\(T\\) mäts i °C och \\(x\\) i timmar efter klockan 08.00.</p>\n<p>a) Bestäm ett uttryck för temperaturens förändringshastighet.<br>\nb) Bestäm förändringshastigheten klockan 12.00.</p>",
    "s": "<p>a) Derivera med kedjeregeln:</p>\n<p>\\[\nT'(x)=5\\cdot0,26\\cos(0,26x)=1,3\\cos(0,26x).\n\\]</p>\n<p>b) Klockan 12.00 har \\(x=4\\):</p>\n<p>\\[\nT'(4)=1,3\\cos(1,04)\\approx 0.66.\n\\]</p>\n<p><strong>Temperaturen ökar då med cirka \\(0,66\\,^\\circ\\text{C}/\\text{h}\\).</strong></p>",
    "familj": "trigderivata_temperatur"
  },
  {
    "id": "2.67",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(x\\sin x\\)<br>b) \\((x+2)e^x\\)<br>c) \\(x^2\\ln x\\)<br>d) \\((3x-1)\\cos x\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd produktregeln \\((uv)'=u'v+uv'\\).</p><p>a) <strong>\\(\\sin x+x\\cos x\\)</strong>.</p><p>b) <strong>\\((x+3)e^x\\)</strong>.</p><p>c) <strong>\\(2x\\ln x+x\\)</strong>.</p><p>d) <strong>\\(3\\cos x-(3x-1)\\sin x\\)</strong>.</p>",
    "familj": "produkt_rutin2"
  },
  {
    "id": "2.68",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En kubs sidlängd ökar med \\(0,12\\) cm/s.</p>\n<p>Hur snabbt ökar kubens volym när sidlängden är \\(15\\) cm?</p>",
    "s": "<p>Volymen är</p>\n<p>\\[\nV=a^3.\n\\]</p>\n<p>Derivera med avseende på tiden:</p>\n<p>\\[\n\\frac{dV}{dt}=3a^2\\frac{da}{dt}.\n\\]</p>\n<p>Sätt in \\(a=15\\) och \\(\\frac{da}{dt}=0,12\\):</p>\n<p>\\[\n\\frac{dV}{dt}\n=3\\cdot15^2\\cdot0,12\n=81.\n\\]</p>\n<p><strong>Volymen ökar med \\(81\\text{ cm}^3/\\text{s}\\).</strong></p>",
    "familj": "kallmaterial_related_rates_kub"
  },
  {
    "id": "2.69",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Derivera och förenkla så långt som möjligt.</p><p>a) \\(f(x)=x^2\\ln x\\)<br>b) \\(g(x)=e^{2x}/(x+1)\\)<br>c) \\(h(x)=\\ln(x^2+1)\\)</p>",
    "s": "<p>a) Använd produktregeln:</p>\n<p>\\[f'(x)=2x\\ln x+x^2\\cdot\\frac1x=\\boxed{2x\\ln x+x}.\\]</p>\n<p>b) Använd kvotregeln. Täljaren har derivatan \\(2e^{2x}\\):</p>\n<p>\\[g'(x)=\\frac{2e^{2x}(x+1)-e^{2x}}{(x+1)^2}\n=\\boxed{\\frac{e^{2x}(2x+1)}{(x+1)^2}}.\\]</p>\n<p>c) Använd kedjeregeln med den inre funktionen \\(x^2+1\\):</p>\n<p>\\[h'(x)=\\frac{2x}{x^2+1}.\\]</p>",
    "familj": "deriv_exp_log_blandad"
  },
  {
    "id": "2.70",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Kurvan ges av \\(f(x)=x^2-4x+1\\).</p><p>a) Bestäm \\(f'(x)\\).<br>b) Bestäm tangentens lutning då \\(x=3\\).<br>c) Bestäm tangentens ekvation då \\(x=3\\).</p>",
    "s": "<p>a) \\(f'(x)=2x-4\\).</p><p>b) \\(f'(3)=2\\).</p><p>c) \\(f(3)=9-12+1=-2\\). Tangenten genom \\((3,-2)\\) med lutning 2 är \\(y+2=2(x-3)\\), alltså <strong>\\(y=2x-8\\)</strong>.</p>",
    "familj": "proc_tangent_parabel_2"
  },
  {
    "id": "2.71",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm asymptoterna.</p><p>a) \\(f(x)=2+\\frac{3}{x-1}\\)<br>b) \\(g(x)=\\frac{2x+5}{x+2}\\)<br>c) \\(h(x)=x-1+\\frac{4}{x}\\)</p>",
    "s": "<p><strong>Metod:</strong> En lodrät asymptot uppstår där nämnaren går mot 0. För stora \\(|x|\\) undersöker vi vilken enklare funktion som skillnaden mot grafen närmar sig.</p><p>a) \\(x=1\\) gör nämnaren noll och \\(3/(x-1)\\to0\\) för stora \\(|x|\\). Alltså \\(\\boxed{x=1}\\) och \\(\\boxed{y=2}\\).</p><p>b) \\(x=-2\\) ger lodrät asymptot. Skriv \\(\\frac{2x+5}{x+2}=2+\\frac1{x+2}\\), så den vågräta asymptoten är \\(\\boxed{y=2}\\).</p><p>c) \\(4/x\\to0\\) för stora \\(|x|\\), så den sneda asymptoten är \\(\\boxed{y=x-1}\\). Dessutom är \\(\\boxed{x=0}\\) en lodrät asymptot.</p>",
    "familj": "asymptot_rutin"
  },
  {
    "id": "2.72",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Temperaturen i en process modelleras av \\(T(t)=18+6\\sin(0,4t)\\), där \\(t\\) mäts i minuter.</p><p>Bestäm temperaturens förändringshastighet efter 5,0 minuter och tolka tecknet.</p>",
    "s": "<p><strong>Metod:</strong> Skriv först den storhet som ska undersökas som en funktion. Derivera sedan och använd villkoret i uppgiften.</p><p>\\(T'(t)=2,4\\cos(0,4t)\\). Då \\(T'(5)=2,4\\cos2\\approx-1,00\\).</p><p><strong>Temperaturen minskar med cirka 1,00 °C/min.</strong></p>",
    "familj": "trigderiv_tillampning"
  },
  {
    "id": "2.73",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/1/0",
    "t": "<p>Derivera.</p>\n<p>a) \\(f(x)=\\dfrac{x^2+1}{x}\\)<br>\nb) \\(g(x)=\\dfrac{\\sin x}{x}\\), \\(x\\ne0\\)<br>\nc) \\(h(x)=\\dfrac{x}{x+2}\\)<br>\nd) \\(p(x)=\\dfrac{e^x}{1+e^x}\\)</p>",
    "s": "<p>a) Med kvotregeln:</p>\n<p>\\[\nf'(x)=\\frac{2x\\cdot x-(x^2+1)}{x^2}\n=\\frac{x^2-1}{x^2}.\n\\]</p>\n<p>b)</p>\n<p>\\[\ng'(x)=\\frac{x\\cos x-\\sin x}{x^2}.\n\\]</p>\n<p>c)</p>\n<p>\\[\nh'(x)=\\frac{(x+2)-x}{(x+2)^2}\n=\\frac{2}{(x+2)^2}.\n\\]</p>\n<p>d)</p>\n<p>\\[\np'(x)=\\frac{e^x(1+e^x)-e^x\\cdot e^x}{(1+e^x)^2}\n=\\frac{e^x}{(1+e^x)^2}.\n\\]</p>",
    "familj": "kvotregeln_rutin"
  },
  {
    "id": "2.74",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=(3x-2)^5\\)<br>b) \\(g(x)=x^2e^x\\)<br>c) \\(h(x)=\\ln(4x)\\)<br>d) \\(p(x)=\\sin(3x)\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=15(3x-2)^4\\)</strong>.</p><p>b) <strong>\\(g'(x)=e^x(x^2+2x)\\)</strong>.</p><p>c) <strong>\\(h'(x)=1/x\\)</strong>, \\(x&gt;0\\).</p><p>d) <strong>\\(p'(x)=3\\cos3x\\)</strong>.</p>",
    "familj": "derivata_bl_blandad_rutin"
  },
  {
    "id": "2.75",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm derivatans värde.</p><p>a) \\(f(x)=x^3-2x\\), bestäm \\(f'(2)\\).<br>b) \\(g(x)=4\\sqrt{x}\\), bestäm \\(g'(4)\\).<br>c) \\(h(x)=e^x+x^2\\), bestäm \\(h'(0)\\).<br>d) \\(p(x)=\\frac3x\\), bestäm \\(p'(-1)\\).</p>",
    "s": "<p>a) \\(f'(x)=3x^2-2\\Rightarrow\\) <strong>10</strong>.<br>b) \\(g'(x)=2/\\sqrt{x}\\Rightarrow\\) <strong>1</strong>.<br>c) \\(h'(x)=e^x+2x\\Rightarrow\\) <strong>1</strong>.<br>d) \\(p'(x)=-3/x^2\\Rightarrow\\) <strong>−3</strong>.</p>",
    "familj": "proc_deriv_varde_1"
  },
  {
    "id": "2.76",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm stationära punkter.</p><p>a) \\(f(x)=x^2-6x+5\\)<br>b) \\(g(x)=x^3-3x^2\\)</p><p>Avgör för varje stationär punkt om den är en maximi- eller minimipunkt.</p>",
    "s": "<p>a) \\(f'=2x-6=0\\Rightarrow x=3\\). \\(f(3)=-4\\) och \\(f''=2>0\\), alltså <strong>minimipunkt \\((3,-4)\\)</strong>.</p><p>b) \\(g'=3x^2-6x=3x(x-2)\\), så \\(x=0,2\\). \\(g''=6x-6\\). Vid \\(x=0\\) är \\(g''&lt;0\\): <strong>max \\((0,0)\\)</strong>. Vid \\(x=2\\) är \\(g''>0\\): <strong>min \\((2,-4)\\)</strong>.</p>",
    "familj": "proc_stationara_punkter_2"
  },
  {
    "id": "2.77",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Ur hörnen på en kartongbit 32 cm × 22 cm klipps kvadrater med sidan \\(x\\) bort. Sidorna viks upp.</p><span class=\"fig\"><svg width=\"440\" height=\"235\" viewBox=\"0 0 440 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Kartongbit med kvadrater bortklippta i hörnen\"><rect x=\"1\" y=\"1\" width=\"438\" height=\"233\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><rect x=\"90\" y=\"55\" width=\"240\" height=\"140\" fill=\"#F5F7F8\" stroke=\"#2B2527\" stroke-width=\"2\"/><rect x=\"90\" y=\"55\" width=\"35\" height=\"35\" fill=\"#fff\" stroke=\"#B43123\" stroke-dasharray=\"5 4\"/><rect x=\"295\" y=\"55\" width=\"35\" height=\"35\" fill=\"#fff\" stroke=\"#B43123\" stroke-dasharray=\"5 4\"/><rect x=\"90\" y=\"160\" width=\"35\" height=\"35\" fill=\"#fff\" stroke=\"#B43123\" stroke-dasharray=\"5 4\"/><rect x=\"295\" y=\"160\" width=\"35\" height=\"35\" fill=\"#fff\" stroke=\"#B43123\" stroke-dasharray=\"5 4\"/><text x=\"210\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\">32 cm</text><text x=\"350\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\">22 cm</text><text x=\"106\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">x</text></svg></span><p>Ställ upp en volymfunktion och bestäm det värde på \\(x\\) som ger maximal volym. Svara med två decimaler.</p>",
    "s": "<p>Volymen blir</p><p>\\[V(x)=x(32-2x)(22-2x),\\qquad 0&lt;x&lt;11.\\]</p><p>Utveckla: \\(V=704x-108x^2+4x^3\\), så</p><p>\\[V'=704-216x+12x^2.\\]</p><p>\\(V'=0\\) ger \\(3x^2-54x+176=0\\), alltså</p><p>\\[x=9\\pm\\frac{\\sqrt{201}}3.\\]</p><p>Den enda roten i \\((0,11)\\) är \\(x\\approx4,27\\). Ändpunkterna ger volym 0, så denna kritiska punkt ger maximum.</p><p><strong>\\(x\\approx4,27\\) cm.</strong></p>",
    "familj": "oppen_lada_c2"
  },
  {
    "id": "2.78",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(e^{3x}\\)<br>b) \\(e^{x^2}\\)<br>c) \\(e^{2x-5}\\)<br>d) \\(5e^{-2x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) <strong>\\(3e^{3x}\\)</strong>.<br>b) <strong>\\(2xe^{x^2}\\)</strong>.<br>c) <strong>\\(2e^{2x-5}\\)</strong>.<br>d) <strong>\\(-10e^{-2x}\\)</strong>.</p>",
    "familj": "proc_kedja_exp_1"
  },
  {
    "id": "2.79",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen till en funktion har asymptoterna \\(x=2\\) och \\(y=2x-1\\) och ser ut som i figuren.</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"22\" x2=\"48.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"48.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text><line x1=\"92.2\" y1=\"22\" x2=\"92.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"92.2\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"136.5\" y1=\"22\" x2=\"136.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"136.5\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"180.8\" y1=\"22\" x2=\"180.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"180.8\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"225.0\" y1=\"22\" x2=\"225.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"269.2\" y1=\"22\" x2=\"269.2\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"269.2\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"313.5\" y1=\"22\" x2=\"313.5\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"313.5\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"357.8\" y1=\"22\" x2=\"357.8\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"357.8\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"402.0\" y1=\"22\" x2=\"402.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"402.0\" y=\"144.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"48\" y1=\"232.0\" x2=\"402\" y2=\"232.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"236.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-8</text><line x1=\"48\" y1=\"218.9\" x2=\"402\" y2=\"218.9\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"222.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-7</text><line x1=\"48\" y1=\"205.8\" x2=\"402\" y2=\"205.8\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"209.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-6</text><line x1=\"48\" y1=\"192.6\" x2=\"402\" y2=\"192.6\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"196.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text><line x1=\"48\" y1=\"179.5\" x2=\"402\" y2=\"179.5\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"183.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text><line x1=\"48\" y1=\"166.4\" x2=\"402\" y2=\"166.4\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"170.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text><line x1=\"48\" y1=\"153.2\" x2=\"402\" y2=\"153.2\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"157.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text><line x1=\"48\" y1=\"140.1\" x2=\"402\" y2=\"140.1\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"144.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"48\" y1=\"127.0\" x2=\"402\" y2=\"127.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"48\" y1=\"113.9\" x2=\"402\" y2=\"113.9\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"117.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"48\" y1=\"100.8\" x2=\"402\" y2=\"100.8\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"104.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"48\" y1=\"87.6\" x2=\"402\" y2=\"87.6\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"91.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"48\" y1=\"74.5\" x2=\"402\" y2=\"74.5\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"78.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><line x1=\"48\" y1=\"61.4\" x2=\"402\" y2=\"61.4\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"65.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text><line x1=\"48\" y1=\"48.2\" x2=\"402\" y2=\"48.2\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"52.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">6</text><line x1=\"48\" y1=\"35.1\" x2=\"402\" y2=\"35.1\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"39.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">7</text><line x1=\"48\" y1=\"22.0\" x2=\"402\" y2=\"22.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"217.0\" y=\"26.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">8</text><polyline points=\"48.0,254.3 92.2,229.4 136.5,204.4 180.8,179.5 225.0,153.2 269.2,124.4 287.0,104.7 300.2,78.4 306.9,39.1 320.1,214.9 326.8,172.9 340.1,141.4 357.8,123.1 402.0,92.9\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"394\" y=\"38\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">f</text></svg></span><p>Ge ett exempel på en funktion med just dessa asymptoter.</p>",
    "s": "<p><strong>Metod:</strong> För lodräta asymptoter undersöks var nämnaren blir noll. För vågräta eller sneda asymptoter studeras hur funktionen beter sig när \\(|x|\\) blir stor.</p><p>En enkel konstruktion är att lägga till en term som går mot 0 när \\(|x|\\to\\infty\\) men blir obegränsad vid \\(x=2\\):</p><p><strong>\\(f(x)=2x-1+\\frac1{x-2}\\)</strong>.</p>",
    "familj": "asymptot_konstruera"
  },
  {
    "id": "2.80",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen ges av \\(f(x)=x\\ln x\\), där \\(x&gt;0\\).</p><p>a) Bestäm \\(f'(x)\\).<br>b) Bestäm ekvationen för tangenten till grafen i punkten där \\(x=e\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera om uttrycket kräver produktregel, kvotregel eller kedjeregel innan du deriverar.</p><p>a) Produktregeln ger</p><p>\\[f'(x)=1\\cdot\\ln x+x\\cdot\\frac1x=\\ln x+1.\\]</p>\n<p>b) \\(f(e)=e\\ln e=e\\) och \\(f'(e)=1+1=2\\). Tangenten genom \\((e,e)\\) med lutning 2 är</p><p>\\[y-e=2(x-e).\\]</p><p><strong>\\(y=2x-e\\).</strong></p>",
    "familj": "tangent_xlnx"
  },
  {
    "id": "2.81",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Derivera.</p><p>a) \\(\\frac{(x+1)^2}{x^2+1}\\)<br>b) \\(\\frac{e^{2x}}{x+1}\\)<br>c) \\(\\frac{\\sin x}{1+\\cos x}\\)<br>d) \\(\\frac{x\\ln x}{x+1}\\)</p>",
    "s": "<p>a) <strong>\\(\\frac{2(x+1)(1-x)}{(x^2+1)^2}\\)</strong>.<br>b) <strong>\\(\\frac{e^{2x}(2x+1)}{(x+1)^2}\\)</strong>.<br>c) <strong>\\(\\frac{1}{1+\\cos x}\\)</strong>, där uttrycket är definierat, eftersom täljaren blir \\(\\cos x(1+\\cos x)+\\sin^2x=1+\\cos x\\).<br>d) <strong>\\(\\frac{x+\\ln x+1}{(x+1)^2}\\)</strong>.</p>",
    "familj": "proc_kvotregeln_blandad_c"
  },
  {
    "id": "2.82",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Funktionen \\(f\\) har derivatan \\(f'(x)=(x-1)(x+3)\\).</p><p>a) För vilka \\(x\\) är \\(f\\) växande?<br>b) För vilka \\(x\\) är \\(f\\) avtagande?<br>c) Vilka x-koordinater har funktionens extrempunkter?</p>",
    "s": "<p>Nollställen för derivatan är \\(x=-3\\) och \\(x=1\\). Produkten är positiv utanför nollställena och negativ mellan dem.</p><p>a) <strong>\\(x&lt;-3\\) och \\(x>1\\)</strong>.</p><p>b) <strong>\\(-3&lt;x&lt;1\\)</strong>.</p><p>c) <strong>\\(x=-3\\) och \\(x=1\\)</strong>.</p>",
    "familj": "proc_derivata_teckenintervall_2"
  },
  {
    "id": "2.83",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Låt \\(f(x)=2x-1\\) och \\(g(x)=x^2+3\\). Bestäm.</p><p>a) \\((f\\circ g)(x)\\)<br>b) \\((g\\circ f)(x)\\)<br>c) \\((f\\circ g)(2)\\)<br>d) \\((g\\circ f)(-1)\\)</p>",
    "s": "<p>a) \\(f(g(x))=2(x^2+3)-1=\\)<strong>\\(2x^2+5\\)</strong>.<br>b) \\(g(f(x))=(2x-1)^2+3=\\)<strong>\\(4x^2-4x+4\\)</strong>.<br>c) <strong>13</strong>.<br>d) \\(f(-1)=-3\\), så <strong>12</strong>.</p>",
    "familj": "proc_sammansatta_funktioner_eval"
  },
  {
    "id": "2.84",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\sin(4x)\\)<br>b) \\(\\cos(3x-1)\\)<br>c) \\(\\sin(x^2)\\)<br>d) \\(\\cos(2x^2+1)\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) <strong>\\(4\\cos4x\\)</strong>.<br>b) <strong>\\(-3\\sin(3x-1)\\)</strong>.<br>c) <strong>\\(2x\\cos(x^2)\\)</strong>.<br>d) <strong>\\(-4x\\sin(2x^2+1)\\)</strong>.</p>",
    "familj": "proc_kedja_trig_1"
  },
  {
    "id": "2.85",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Derivera och förenkla.</p><p>a) \\((1+e^x)^4\\)<br>b) \\(e^{\\sin x}\\)<br>c) \\(\\sin^3x\\)<br>d) \\((\\ln x)^5\\)</p>",
    "s": "<p><strong>Metod:</strong> I varje del används kedjeregeln: derivera den yttre funktionen och multiplicera med derivatan av det som står inuti.</p>\n<p>a) \\(4(1+e^x)^3\\cdot e^x=\\boxed{4e^x(1+e^x)^3}\\).</p>\n<p>b) \\(e^{\\sin x}\\cdot(\\sin x)'=\\boxed{e^{\\sin x}\\cos x}\\).</p>\n<p>c) \\(3\\sin^2x\\cdot(\\sin x)'=\\boxed{3\\sin^2x\\cos x}\\).</p>\n<p>d) \\(5(\\ln x)^4\\cdot(\\ln x)'=\\boxed{\\frac{5(\\ln x)^4}{x}}\\).</p>",
    "familj": "proc_kedja_blandad_c"
  },
  {
    "id": "2.86",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Derivera och faktorisera svaret där det är lämpligt.</p><p>a) \\(x^2e^{-x}\\)<br>b) \\(x(1+x)^5\\)<br>c) \\(\\sin x\\cos x\\)<br>d) \\(x^2\\ln(x^2)\\), \\(x>0\\)</p>",
    "s": "<p><strong>Metod:</strong> Identifiera de två faktorerna och använd produktregeln \\((uv)' = u'v+uv'\\). Förenkla därefter.</p><p>a) <strong>\\(xe^{-x}(2-x)\\)</strong>.<br>b) <strong>\\((1+x)^4(1+6x)\\)</strong>.<br>c) <strong>\\(\\cos^2x-\\sin^2x=\\cos2x\\)</strong>.<br>d) Eftersom \\(\\ln(x^2)=2\\ln x\\): <strong>\\(4x\\ln x+2x=2x(2\\ln x+1)\\)</strong>.</p>",
    "familj": "proc_produktregeln_faktorisera_c"
  },
  {
    "id": "2.87",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Derivera och förenkla.</p><p>a) \\(\\ln(e^{3x}+1)\\)<br>b) \\(e^{\\ln x}\\), \\(x>0\\)<br>c) \\(\\ln\\sqrt{x}\\), \\(x>0\\)<br>d) \\(e^{2\\ln x}\\), \\(x>0\\)</p>",
    "s": "<p><strong>Metod:</strong> Identifiera om uttrycket kräver produktregel, kvotregel eller kedjeregel innan du deriverar.</p><p>a) <strong>\\(\\frac{3e^{3x}}{e^{3x}+1}\\)</strong>.<br>b) \\(e^{\\ln x}=x\\Rightarrow\\) <strong>1</strong>.<br>c) \\(\\ln\\sqrt{x}=\\frac12\\ln x\\Rightarrow\\) <strong>\\(\\frac1{2x}\\)</strong>.<br>d) \\(e^{2\\ln x}=x^2\\Rightarrow\\) <strong>\\(2x\\)</strong>.</p>",
    "familj": "proc_deriv_exp_log_forenkla_c"
  },
  {
    "id": "2.88",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För \\(f(x)=x^3-3x\\):</p><p>a) bestäm \\(f'(x)\\),<br>b) bestäm de stationära punkternas x-koordinater,<br>c) avgör var funktionen är växande respektive avtagande,<br>d) bestäm de stationära punkternas koordinater.</p>",
    "s": "<p>a) \\(f'(x)=3x^2-3=3(x-1)(x+1)\\).</p><p>b) \\(x=-1,1\\).</p><p>c) Växande för <strong>\\(x&lt;-1\\) och \\(x>1\\)</strong>, avtagande för <strong>\\(-1&lt;x&lt;1\\)</strong>.</p><p>d) \\(f(-1)=2\\), \\(f(1)=-2\\). Punkterna är <strong>\\((-1,2)\\)</strong> och <strong>\\((1,-2)\\)</strong>.</p>",
    "familj": "proc_grafskiss_kubik_2"
  },
  {
    "id": "2.89",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Mängden av ett ämne i blodet modelleras under några timmar av</p><p>\\[M(t)=80t\\,e^{-0,5t},\\qquad t\\ge0.\\]</p><p>När är mängden som störst, och hur stor är den då?</p>",
    "s": "<p>\\[M'(t)=80e^{-0,5t}-40te^{-0,5t}=40e^{-0,5t}(2-t).\\]</p><p>Eftersom exponentialfaktorn är positiv fås stationär punkt vid \\(t=2\\). Derivatan går från positiv till negativ, alltså maximum.</p><p>\\[M(2)=160e^{-1}=\\frac{160}{e}\\approx\\boxed{58,9}.\\]</p><p>Mängden är störst efter <strong>\\(\\boxed{2,0\\text{ h}}\\)</strong>.</p>",
    "familj": "modell_te_minus_exp_max_c"
  },
  {
    "id": "2.90",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>För funktionen</p><p>\\[f(x)=\\frac{2x^2+x-3}{x-1}\\]</p><p>a) Bestäm eventuella lodräta asymptoter.<br>b) Bestäm en linjär asymptot genom polynomdivision.<br>c) Förklara varför \\(x=1\\) inte är en lodrät asymptot trots att nämnaren blir noll där.</p>",
    "s": "<p>Täljaren faktoriseras: \\(2x^2+x-3=(x-1)(2x+3)\\).</p><p>För \\(x\\ne1\\) är alltså \\(f(x)=2x+3\\).</p><p>a) Det finns <strong>ingen lodrät asymptot</strong>; vid \\(x=1\\) finns i stället ett borttaget hål.</p><p>b) Funktionen sammanfaller med linjen \\(y=2x+3\\) utom vid \\(x=1\\), så den linjära asymptoten är <strong>\\(y=2x+3\\)</strong>.</p><p>c) Faktorn \\(x-1\\) förkortas bort, så funktionsvärdena växer inte obegränsat när \\(x\\to1\\).</p>",
    "familj": "asymptot_hole_c"
  },
  {
    "id": "2.91",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En klotformad ballong blåses upp. Vid ett visst ögonblick är radien 5,0 cm och ökar med 0,40 cm/s.</p><p>Med vilken hastighet ökar ballongens volym i detta ögonblick?</p>",
    "s": "<p>Volymen är \\(V=\\frac43\\pi r^3\\). Derivera med avseende på tiden:</p><p>\\[\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}.\\]</p><p>Vid \\(r=5,0\\) och \\(dr/dt=0,40\\):</p><p>\\[\\frac{dV}{dt}=4\\pi\\cdot25\\cdot0,40=\\boxed{40\\pi}\\approx\\boxed{126\\text{ cm}^3/\\text{s}}.\\]</p>",
    "familj": "relaterade_hastigheter_ballong"
  },
  {
    "id": "2.92",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med kedjeregeln.</p><p>a) \\((3x-2)^5\\)<br>b) \\(e^{4x+1}\\)<br>c) \\(\\ln(2x+5)\\)<br>d) \\(\\sin(3x-1)\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) \\(15(3x-2)^4\\)<br>b) \\(4e^{4x+1}\\)<br>c) \\(2/(2x+5)\\)<br>d) \\(3\\cos(3x-1)\\)</p>",
    "familj": "kedja_rutin_fyra"
  },
  {
    "id": "2.93",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\frac{x+1}{x-1}\\)<br>b) \\(\\frac{\\sin x}{x}\\)<br>c) \\(\\frac{x^2}{e^x}\\)<br>d) \\(\\frac{\\ln x}{x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd kvotregeln och förenkla först efter deriveringen.</p><p>a) <strong>\\(-2/(x-1)^2\\)</strong>.</p><p>b) <strong>\\((x\\cos x-\\sin x)/x^2\\)</strong>.</p><p>c) <strong>\\(e^{-x}(2x-x^2)\\)</strong>.</p><p>d) <strong>\\((1-\\ln x)/x^2\\)</strong>.</p>",
    "familj": "kvot_rutin2"
  },
  {
    "id": "2.94",
    "kap": 2,
    "omr": "grafskissning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(f(x)=x^4-4x^2\\):</p><p>a) bestäm \\(f''(x)\\),<br>b) bestäm intervallen där \\(f''(x)>0\\) respektive \\(f''(x)&lt;0\\),<br>c) bestäm de x-värden där \\(f''\\) byter tecken. Sådana punkter kallas inflexionspunkter.</p>",
    "s": "<p>\\(f'(x)=4x^3-8x\\) och</p><p>\\[f''(x)=12x^2-8.\\]</p><p>Sätt \\(f''(x)=0\\):</p><p>\\[12x^2-8=0\\Rightarrow x^2=\\frac23\\Rightarrow x=\\pm\\sqrt{\\frac23}.\\]</p><p>För \\(|x|>\\sqrt{2/3}\\) är \\(f''(x)>0\\). För \\(|x|&lt;\\sqrt{2/3}\\) är \\(f''(x)&lt;0\\).</p><p>Tecknet på \\(f''\\) ändras vid båda nollställena. Därför ligger inflexionspunkterna vid</p><p><strong>\\(\\boxed{x=\\pm\\sqrt{2/3}}\\)</strong>.</p>",
    "familj": "proc_andraderivata_konkavitet_2"
  },
  {
    "id": "2.95",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(4\\sin x\\)<br>b) \\(7\\cos x\\)<br>c) \\(3\\tan x\\)<br>d) \\(2\\sin x-5\\cos x\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd standardderivatorna \\((\\sin x)'=\\cos x\\), \\((\\cos x)'=-\\sin x\\) och \\((\\tan x)'=1/\\cos^2x\\).</p><p>a) \\(\\boxed{4\\cos x}\\).</p><p>b) \\(\\boxed{-7\\sin x}\\).</p><p>c) \\(\\boxed{\\frac{3}{\\cos^2x}}\\).</p><p>d) \\(2\\cos x-5(-\\sin x)=\\boxed{2\\cos x+5\\sin x}\\).</p>",
    "familj": "proc_deriv_trig_standard"
  },
  {
    "id": "2.96",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Funktionen \\(f(x)=\\frac{{2x^2+3}}{{x-1}}\\) har en lodrät och en sned asymptot.</p><span class=\"fig\"><svg width=\"500\" height=\"300\" viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rationell funktion med lodrät och sned asymptot\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"101.1\" y1=\"25\" x2=\"101.1\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"147.2\" y1=\"25\" x2=\"147.2\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"193.3\" y1=\"25\" x2=\"193.3\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"239.4\" y1=\"25\" x2=\"239.4\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"285.6\" y1=\"25\" x2=\"285.6\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"331.7\" y1=\"25\" x2=\"331.7\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"377.8\" y1=\"25\" x2=\"377.8\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"423.9\" y1=\"25\" x2=\"423.9\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"470.0\" y1=\"25\" x2=\"470.0\" y2=\"255\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"255.0\" x2=\"470\" y2=\"255.0\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"235.8\" x2=\"470\" y2=\"235.8\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"216.7\" x2=\"470\" y2=\"216.7\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"197.5\" x2=\"470\" y2=\"197.5\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"178.3\" x2=\"470\" y2=\"178.3\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"159.2\" x2=\"470\" y2=\"159.2\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"140.0\" x2=\"470\" y2=\"140.0\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"120.8\" x2=\"470\" y2=\"120.8\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"101.7\" x2=\"470\" y2=\"101.7\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"82.5\" x2=\"470\" y2=\"82.5\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"63.3\" x2=\"470\" y2=\"63.3\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"44.2\" x2=\"470\" y2=\"44.2\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"25.0\" x2=\"470\" y2=\"25.0\" stroke=\"#E3E6EA\"/><line x1=\"55\" y1=\"159.2\" x2=\"470\" y2=\"159.2\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><line x1=\"239.4\" y1=\"25\" x2=\"239.4\" y2=\"255\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><line x1=\"285.6\" y1=\"25\" x2=\"285.6\" y2=\"255\" stroke=\"#268FA3\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><line x1=\"55.0\" y1=\"216.7\" x2=\"470.0\" y2=\"44.2\" stroke=\"#268FA3\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" points=\"55.0,226.2 56.0,225.9 56.9,225.5 57.9,225.2 58.8,224.8 59.8,224.5 60.7,224.1 61.7,223.8 62.6,223.4 63.6,223.1 64.5,222.7 65.5,222.4 66.4,222.0 67.4,221.7 68.3,221.3 69.3,221.0 70.2,220.6 71.2,220.3 72.1,219.9 73.1,219.6 74.0,219.2 75.0,218.9 75.9,218.5 76.9,218.2 77.8,217.8 78.8,217.5 79.7,217.1 80.7,216.8 81.6,216.4 82.6,216.1 83.5,215.7 84.5,215.4 85.4,215.1 86.4,214.7 87.3,214.4 88.3,214.0 89.2,213.7 90.2,213.3 91.1,213.0 92.1,212.7 93.0,212.3 94.0,212.0 94.9,211.7 95.9,211.3 96.9,211.0 97.8,210.6 98.8,210.3 99.7,210.0 100.7,209.6 101.6,209.3 102.6,209.0 103.5,208.6 104.5,208.3 105.4,208.0 106.4,207.6 107.3,207.3 108.3,207.0 109.2,206.7 110.2,206.3 111.1,206.0 112.1,205.7 113.0,205.4 114.0,205.0 114.9,204.7 115.9,204.4 116.8,204.1 117.8,203.7 118.7,203.4 119.7,203.1 120.6,202.8 121.6,202.5 122.5,202.1 123.5,201.8 124.4,201.5 125.4,201.2 126.3,200.9 127.3,200.6 128.2,200.3 129.2,200.0 130.1,199.6 131.1,199.3 132.0,199.0 133.0,198.7 133.9,198.4 134.9,198.1 135.8,197.8 136.8,197.5 137.8,197.2 138.7,196.9 139.7,196.6 140.6,196.3 141.6,196.0 142.5,195.7 143.5,195.4 144.4,195.2 145.4,194.9 146.3,194.6 147.3,194.3 148.2,194.0 149.2,193.7 150.1,193.4 151.1,193.2 152.0,192.9 153.0,192.6 153.9,192.3 154.9,192.1 155.8,191.8 156.8,191.5 157.7,191.3 158.7,191.0 159.6,190.7 160.6,190.5 161.5,190.2 162.5,189.9 163.4,189.7 164.4,189.4 165.3,189.2 166.3,188.9 167.2,188.7 168.2,188.4 169.1,188.2 170.1,188.0 171.0,187.7 172.0,187.5 172.9,187.3 173.9,187.0 174.8,186.8 175.8,186.6 176.7,186.4 177.7,186.2 178.7,185.9 179.6,185.7 180.6,185.5 181.5,185.3 182.5,185.1 183.4,184.9 184.4,184.7 185.3,184.5 186.3,184.4 187.2,184.2 188.2,184.0 189.1,183.8 190.1,183.7 191.0,183.5 192.0,183.3 192.9,183.2 193.9,183.0 194.8,182.9 195.8,182.8 196.7,182.6 197.7,182.5 198.6,182.4 199.6,182.3 200.5,182.2 201.5,182.1 202.4,182.0 203.4,181.9 204.3,181.8 205.3,181.7 206.2,181.7 207.2,181.6 208.1,181.6 209.1,181.5 210.0,181.5 211.0,181.5 211.9,181.4 212.9,181.4 213.8,181.5 214.8,181.5 215.7,181.5 216.7,181.5 217.6,181.6 218.6,181.7 219.6,181.7 220.5,181.8 221.5,181.9 222.4,182.1 223.4,182.2 224.3,182.4 225.3,182.5 226.2,182.7 227.2,182.9 228.1,183.2 229.1,183.4 230.0,183.7 231.0,184.0 231.9,184.3 232.9,184.7 233.8,185.0 234.8,185.4 235.7,185.9 236.7,186.4 237.6,186.9 238.6,187.4 239.5,188.0 240.5,188.6 241.4,189.2 242.4,190.0 243.3,190.7 244.3,191.5 245.2,192.4 246.2,193.3 247.1,194.3 248.1,195.4 249.0,196.5 250.0,197.7 250.9,199.1 251.9,200.5 252.8,202.0 253.8,203.6 254.7,205.4 255.7,207.2 256.6,209.3 257.6,211.5 258.5,213.9 259.5,216.5 260.5,219.3 261.4,222.4 262.4,225.7 263.3,229.4 264.3,233.4 265.2,237.9 266.2,242.8 267.1,248.3 268.1,254.4\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" points=\"312.3,27.1 313.0,29.0 313.8,30.9 314.6,32.6 315.3,34.2 316.1,35.8 316.8,37.2 317.6,38.6 318.4,39.8 319.1,41.0 319.9,42.2 320.6,43.3 321.4,44.3 322.1,45.2 322.9,46.1 323.7,47.0 324.4,47.8 325.2,48.6 325.9,49.3 326.7,50.0 327.5,50.7 328.2,51.3 329.0,51.9 329.7,52.5 330.5,53.0 331.2,53.5 332.0,54.0 332.8,54.4 333.5,54.8 334.3,55.2 335.0,55.6 335.8,56.0 336.6,56.3 337.3,56.6 338.1,56.9 338.8,57.2 339.6,57.5 340.3,57.7 341.1,58.0 341.9,58.2 342.6,58.4 343.4,58.6 344.1,58.8 344.9,58.9 345.7,59.1 346.4,59.2 347.2,59.4 347.9,59.5 348.7,59.6 349.4,59.7 350.2,59.8 351.0,59.9 351.7,59.9 352.5,60.0 353.2,60.1 354.0,60.1 354.7,60.1 355.5,60.2 356.3,60.2 357.0,60.2 357.8,60.2 358.5,60.2 359.3,60.2 360.1,60.2 360.8,60.2 361.6,60.2 362.3,60.1 363.1,60.1 363.8,60.1 364.6,60.0 365.4,60.0 366.1,59.9 366.9,59.9 367.6,59.8 368.4,59.7 369.2,59.7 369.9,59.6 370.7,59.5 371.4,59.4 372.2,59.3 372.9,59.2 373.7,59.1 374.5,59.0 375.2,58.9 376.0,58.8 376.7,58.7 377.5,58.6 378.3,58.5 379.0,58.3 379.8,58.2 380.5,58.1 381.3,58.0 382.0,57.8 382.8,57.7 383.6,57.6 384.3,57.4 385.1,57.3 385.8,57.1 386.6,57.0 387.4,56.8 388.1,56.7 388.9,56.5 389.6,56.3 390.4,56.2 391.1,56.0 391.9,55.9 392.7,55.7 393.4,55.5 394.2,55.3 394.9,55.2 395.7,55.0 396.5,54.8 397.2,54.6 398.0,54.5 398.7,54.3 399.5,54.1 400.2,53.9 401.0,53.7 401.8,53.5 402.5,53.3 403.3,53.1 404.0,52.9 404.8,52.7 405.6,52.5 406.3,52.3 407.1,52.1 407.8,51.9 408.6,51.7 409.3,51.5 410.1,51.3 410.9,51.1 411.6,50.9 412.4,50.7 413.1,50.5 413.9,50.3 414.6,50.1 415.4,49.8 416.2,49.6 416.9,49.4 417.7,49.2 418.4,49.0 419.2,48.8 420.0,48.5 420.7,48.3 421.5,48.1 422.2,47.9 423.0,47.6 423.7,47.4 424.5,47.2 425.3,46.9 426.0,46.7 426.8,46.5 427.5,46.3 428.3,46.0 429.1,45.8 429.8,45.6 430.6,45.3 431.3,45.1 432.1,44.8 432.8,44.6 433.6,44.4 434.4,44.1 435.1,43.9 435.9,43.7 436.6,43.4 437.4,43.2 438.2,42.9 438.9,42.7 439.7,42.4 440.4,42.2 441.2,41.9 441.9,41.7 442.7,41.5 443.5,41.2 444.2,41.0 445.0,40.7 445.7,40.5 446.5,40.2 447.3,40.0 448.0,39.7 448.8,39.5 449.5,39.2 450.3,38.9 451.0,38.7 451.8,38.4 452.6,38.2 453.3,37.9 454.1,37.7 454.8,37.4 455.6,37.2 456.4,36.9 457.1,36.6 457.9,36.4 458.6,36.1 459.4,35.9 460.1,35.6 460.9,35.3 461.7,35.1 462.4,34.8 463.2,34.6 463.9,34.3 464.7,34.0 465.5,33.8 466.2,33.5 467.0,33.2 467.7,33.0 468.5,32.7 469.2,32.5 470.0,32.2\"/></svg></span><p>a) Bestäm den lodräta asymptoten.<br>b) Utför polynomdivision.<br>c) Bestäm den sneda asymptoten.</p>",
    "s": "<p>a) Nämnaren är noll vid \\(x=1\\), medan täljaren där är 5. Alltså <strong>\\(x=1\\)</strong>.</p><p>b) \\(2x^2+3=(x-1)(2x+2)+5\\), så</p><p>\\[f(x)=2x+2+\\frac5{x-1}.\\]</p><p>c) Resttermen går mot 0 då \\(|x|\\to\\infty\\), alltså är den sneda asymptoten <strong>\\(y=2x+2\\)</strong>.</p>",
    "familj": "asymptot_polynomdivision_rutin"
  },
  {
    "id": "2.97",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Grafen visar derivatan \\(f'(x)\\).</p><span class=\"fig\"><svg width=\"470\" height=\"245\" viewBox=\"0 0 470 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till derivatan f prim med nollställen minus 2, 1 och 4\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"77.9\" y1=\"25\" x2=\"77.9\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"77.9\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"123.8\" y1=\"25\" x2=\"123.8\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"123.8\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"169.7\" y1=\"25\" x2=\"169.7\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"169.7\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"215.6\" y1=\"25\" x2=\"215.6\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<line x1=\"261.5\" y1=\"25\" x2=\"261.5\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"261.5\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"307.4\" y1=\"25\" x2=\"307.4\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"307.4\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"353.2\" y1=\"25\" x2=\"353.2\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"353.2\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"399.1\" y1=\"25\" x2=\"399.1\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"399.1\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"445.0\" y1=\"25\" x2=\"445.0\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"445.0\" y=\"133.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"210.0\" x2=\"445\" y2=\"210.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"186.9\" x2=\"445\" y2=\"186.9\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"163.8\" x2=\"445\" y2=\"163.8\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"140.6\" x2=\"445\" y2=\"140.6\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"117.5\" x2=\"445\" y2=\"117.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"94.4\" x2=\"445\" y2=\"94.4\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"71.2\" x2=\"445\" y2=\"71.2\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"48.1\" x2=\"445\" y2=\"48.1\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"25.0\" x2=\"445\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"117.5\" x2=\"445\" y2=\"117.5\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"215.6\" y1=\"25\" x2=\"215.6\" y2=\"210\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polyline points=\"73.53,209.61 74.50,207.09 75.47,204.60 76.45,202.14 77.42,199.71 78.40,197.31 79.38,194.95 80.35,192.61 81.33,190.31 82.30,188.04 83.28,185.80 84.25,183.58 85.22,181.40 86.20,179.25 87.17,177.13 88.15,175.04 89.12,172.98 90.10,170.95 91.07,168.94 92.05,166.97 93.03,165.02 94.00,163.11 94.97,161.22 95.95,159.36 96.92,157.53 97.90,155.72 98.88,153.95 99.85,152.20 100.83,150.48 101.80,148.79 102.77,147.12 103.75,145.49 104.73,143.87 105.70,142.29 106.67,140.73 107.65,139.20 108.62,137.70 109.60,136.22 110.57,134.76 111.55,133.34 112.53,131.93 113.50,130.56 114.47,129.21 115.45,127.88 116.42,126.58 117.40,125.30 118.38,124.05 119.35,122.82 120.33,121.62 121.30,120.44 122.28,119.29 123.25,118.15 124.22,117.05 125.20,115.96 126.17,114.90 127.15,113.86 128.12,112.85 129.10,111.86 130.07,110.89 131.05,109.94 132.03,109.01 133.00,108.11 133.97,107.23 134.95,106.37 135.93,105.53 136.90,104.72 137.88,103.92 138.85,103.15 139.82,102.40 140.80,101.66 141.78,100.95 142.75,100.26 143.73,99.59 144.70,98.94 145.68,98.31 146.65,97.70 147.62,97.11 148.60,96.53 149.57,95.98 150.55,95.45 151.52,94.93 152.50,94.44 153.47,93.96 154.45,93.50 155.43,93.06 156.40,92.64 157.38,92.23 158.35,91.85 159.32,91.48 160.30,91.13 161.28,90.79 162.25,90.47 163.23,90.17 164.20,89.89 165.18,89.62 166.15,89.37 167.12,89.14 168.10,88.92 169.07,88.72 170.05,88.53 171.02,88.36 172.00,88.20 172.97,88.06 173.95,87.94 174.93,87.83 175.90,87.73 176.88,87.65 177.85,87.58 178.82,87.53 179.80,87.49 180.78,87.47 181.75,87.46 182.73,87.46 183.70,87.48 184.68,87.51 185.65,87.55 186.62,87.61 187.60,87.68 188.57,87.76 189.55,87.85 190.52,87.96 191.50,88.08 192.47,88.21 193.45,88.35 194.42,88.50 195.40,88.67 196.38,88.85 197.35,89.03 198.32,89.23 199.30,89.44 200.28,89.66 201.25,89.89 202.22,90.13 203.20,90.38 204.18,90.64 205.15,90.91 206.12,91.19 207.10,91.48 208.08,91.78 209.05,92.09 210.03,92.40 211.00,92.73 211.98,93.06 212.95,93.41 213.93,93.76 214.90,94.12 215.88,94.48 216.85,94.86 217.82,95.24 218.80,95.63 219.78,96.03 220.75,96.43 221.72,96.84 222.70,97.26 223.68,97.69 224.65,98.12 225.62,98.55 226.60,99.00 227.57,99.45 228.55,99.90 229.53,100.36 230.50,100.83 231.47,101.30 232.45,101.78 233.43,102.26 234.40,102.74 235.38,103.24 236.35,103.73 237.32,104.23 238.30,104.73 239.28,105.24 240.25,105.75 241.22,106.27 242.20,106.79 243.18,107.31 244.15,107.83 245.12,108.36 246.10,108.89 247.08,109.43 248.05,109.96 249.03,110.50 250.00,111.04 250.98,111.58 251.95,112.13 252.92,112.67 253.90,113.22 254.88,113.77 255.85,114.32 256.82,114.87 257.80,115.42 258.77,115.97 259.75,116.52 260.73,117.08 261.70,117.63 262.67,118.18 263.65,118.74 264.62,119.29 265.60,119.84 266.57,120.39 267.55,120.94 268.52,121.49 269.50,122.04 270.48,122.58 271.45,123.13 272.43,123.67 273.40,124.21 274.38,124.75 275.35,125.29 276.32,125.82 277.30,126.36 278.27,126.89 279.25,127.41 280.23,127.94 281.20,128.46 282.18,128.97 283.15,129.49 284.12,130.00 285.10,130.50 286.08,131.01 287.05,131.50 288.02,132.00 289.00,132.49 289.98,132.97 290.95,133.45 291.93,133.92 292.90,134.39 293.88,134.86 294.85,135.31 295.83,135.77 296.80,136.21 297.77,136.65 298.75,137.09 299.73,137.52 300.70,137.94 301.67,138.35 302.65,138.76 303.62,139.16 304.60,139.55 305.57,139.94 306.55,140.32 307.52,140.69 308.50,141.05 309.48,141.41 310.45,141.76 311.43,142.09 312.40,142.42 313.38,142.75 314.35,143.06 315.32,143.36 316.30,143.66 317.27,143.94 318.25,144.22 319.23,144.48 320.20,144.74 321.18,144.98 322.15,145.22 323.12,145.44 324.10,145.66 325.07,145.86 326.05,146.06 327.02,146.24 328.00,146.41 328.98,146.57 329.95,146.72 330.93,146.85 331.90,146.98 332.88,147.09 333.85,147.19 334.82,147.28 335.80,147.36 336.78,147.42 337.75,147.47 338.73,147.51 339.70,147.53 340.68,147.54 341.65,147.54 342.62,147.52 343.60,147.49 344.58,147.44 345.55,147.39 346.52,147.31 347.50,147.22 348.48,147.12 349.45,147.01 350.42,146.87 351.40,146.73 352.38,146.56 353.35,146.38 354.32,146.19 355.30,145.98 356.27,145.75 357.25,145.51 358.22,145.25 359.20,144.98 360.18,144.69 361.15,144.38 362.12,144.05 363.10,143.71 364.07,143.35 365.05,142.97 366.02,142.58 367.00,142.17 367.98,141.73 368.95,141.29 369.93,140.82 370.90,140.33 371.88,139.83 372.85,139.30 373.82,138.76 374.80,138.20 375.77,137.62 376.75,137.02 377.73,136.40 378.70,135.76 379.68,135.10 380.65,134.42 381.62,133.72 382.60,132.99 383.57,132.25 384.55,131.49 385.53,130.71 386.50,129.90 387.48,129.08 388.45,128.23 389.43,127.36 390.40,126.47 391.38,125.55 392.35,124.62 393.33,123.66 394.30,122.68 395.27,121.68 396.25,120.65 397.23,119.60 398.20,118.53 399.17,117.43 400.15,116.32 401.12,115.17 402.10,114.01 403.07,112.82 404.05,111.60 405.02,110.36 406.00,109.10 406.97,107.81 407.95,106.50 408.93,105.16 409.90,103.80 410.88,102.41 411.85,101.00 412.82,99.56 413.80,98.09 414.77,96.60 415.75,95.08 416.73,93.54 417.70,91.97 418.68,90.37 419.65,88.75 420.62,87.10 421.60,85.42 422.57,83.71 423.55,81.98 424.53,80.22 425.50,78.43 426.47,76.61 427.45,74.77 428.43,72.90 429.40,71.00 430.38,69.07 431.35,67.11 432.33,65.12 433.30,63.10 434.27,61.06 435.25,58.98 436.23,56.87 437.20,54.74 438.18,52.57 439.15,50.38 440.12,48.15 441.10,45.90 442.07,43.61 443.05,41.29 444.02,38.94 445.00,36.56\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\"/>\n<circle cx=\"123.8\" cy=\"117.5\" r=\"4\" fill=\"#268FA3\"/>\n<circle cx=\"261.5\" cy=\"117.5\" r=\"4\" fill=\"#268FA3\"/>\n<circle cx=\"399.1\" cy=\"117.5\" r=\"4\" fill=\"#268FA3\"/>\n<text x=\"440\" y=\"40\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y = f'(x)</text>\n</svg></span><p>a) I vilka intervall är \\(f\\) växande?<br>\nb) I vilka intervall är \\(f\\) avtagande?<br>\nc) Avgör om de stationära punkterna är maximi- eller minimipunkter vid \\(x=-2\\), \\(x=1\\) och \\(x=4\\).</p>",
    "s": "<p>En funktion är växande där \\(f'(x)&gt;0\\) och avtagande där \\(f'(x)&lt;0\\).</p>\n<p>Av grafens tecken fås:</p>\n<p>\\[\nf'(x)&lt;0 \\text{ för }x&lt;-2,\n\\]\n\\[\nf'(x)&gt;0 \\text{ för }-2&lt;x&lt;1,\n\\]\n\\[\nf'(x)&lt;0 \\text{ för }1&lt;x&lt;4,\n\\]\n\\[\nf'(x)&gt;0 \\text{ för }x&gt;4.\n\\]</p>\n<p><strong>a) \\(f\\) växer på \\((-2,1)\\) och \\((4,\\infty)\\).</strong></p>\n<p><strong>b) \\(f\\) avtar på \\((-\\infty,-2)\\) och \\((1,4)\\).</strong></p>\n<p>c) Teckenbytena ger <strong>minimipunkt vid \\(x=-2\\)</strong>, <strong>maximipunkt vid \\(x=1\\)</strong> och <strong>minimipunkt vid \\(x=4\\)</strong>.</p>",
    "familj": "derivatagraf_tecken"
  },
  {
    "id": "2.98",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=x^6-4x^3+2\\)<br>b) \\(g(x)=3\\sqrt{x}\\)<br>c) \\(h(x)=5/x^2\\)<br>d) \\(p(x)=2e^x\\)</p>",
    "s": "<p>a) <strong>\\(f'(x)=6x^5-12x^2\\)</strong>.</p><p>b) \\(g(x)=3x^{1/2}\\), alltså <strong>\\(g'(x)=\\frac{3}{2\\sqrt{x}}\\)</strong>.</p><p>c) \\(h(x)=5x^{-2}\\), alltså <strong>\\(h'(x)=-10x^{-3}=-\\frac{10}{x^3}\\)</strong>.</p><p>d) <strong>\\(p'(x)=2e^x\\)</strong>.</p>",
    "familj": "derivata_repetition_rutin4"
  },
  {
    "id": "2.99",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "2/2/0",
    "t": "<p>Derivera och förenkla så långt som möjligt.</p>\n<p>a) \\(f(x)=x^2e^x\\)<br>\nb) \\(g(x)=x\\sin x\\)<br>\nc) \\(h(x)=\\dfrac{e^x}{x}\\), \\(x\\ne0\\)<br>\nd) \\(p(x)=\\dfrac{\\ln x}{x^2}\\), \\(x>0\\)</p>",
    "s": "<p>a) Produktregeln:</p>\n<p>\\[\nf'(x)=2xe^x+x^2e^x=e^x(x^2+2x).\n\\]</p>\n<p>b)</p>\n<p>\\[\ng'(x)=\\sin x+x\\cos x.\n\\]</p>\n<p>c) Kvotregeln:</p>\n<p>\\[\nh'(x)=\\frac{xe^x-e^x}{x^2}\n=\\frac{e^x(x-1)}{x^2}.\n\\]</p>\n<p>d)</p>\n<p>\\[\np'(x)=\\frac{(1/x)x^2-\\ln x\\cdot2x}{x^4}\n=\\frac{1-2\\ln x}{x^3}.\n\\]</p>",
    "familj": "produkt_kvot_paket"
  },
  {
    "id": "2.100",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm lodräta och vågräta asymptoter.</p><p>a) \\(f(x)=\\frac{3}{x-2}+1\\)<br>b) \\(g(x)=\\frac{2x+1}{x-4}\\)<br>c) \\(h(x)=\\frac{5x^2-1}{x^2+3}\\)<br>d) \\(p(x)=\\frac{1}{(x+1)(x-3)}\\)</p>",
    "s": "<p>a) lodrät <strong>\\(x=2\\)</strong>, vågrät <strong>\\(y=1\\)</strong>.</p><p>b) lodrät <strong>\\(x=4\\)</strong>, vågrät <strong>\\(y=2\\)</strong>.</p><p>c) inga lodräta asymptoter eftersom \\(x^2+3>0\\); vågrät <strong>\\(y=5\\)</strong>.</p><p>d) lodräta <strong>\\(x=-1\\)</strong> och <strong>\\(x=3\\)</strong>; vågrät <strong>\\(y=0\\)</strong>.</p>",
    "familj": "proc_asymptoter_rationella_3"
  },
  {
    "id": "2.101",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm alla asymptoter till</p><p>\\[f(x)=\\frac{2x^2+x+1}{x-1}.\\]</p><p>Motivera både den lodräta och den linjära asymptoten.</p>",
    "s": "<p>Den lodräta asymptoten fås när nämnaren är noll och täljaren inte är det:</p><p>\\[x-1=0\\Rightarrow x=1,\\qquad 2(1)^2+1+1=4\\ne0.\\]</p><p>Alltså är <strong>\\(x=1\\)</strong> en lodrät asymptot.</p>\n<p>Polynomdivision ger</p><p>\\[\\frac{2x^2+x+1}{x-1}=2x+3+\\frac4{x-1}.\\]</p><p>När \\(|x|\\to\\infty\\) går den sista termen mot 0. Den sneda asymptoten är därför <strong>\\(y=2x+3\\)</strong>.</p>",
    "familj": "asymptoter_polynomdivision_c"
  },
  {
    "id": "2.102",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med kedjeregeln.</p><p>a) \\(f(x)=(3x-1)^5\\)<br>b) \\(g(x)=\\sqrt{2x+5}\\)<br>c) \\(h(x)=e^{4x-2}\\)<br>d) \\(p(x)=\\ln(5x+1)\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p>\n<p>a) <strong>\\(f'(x)=15(3x-1)^4\\)</strong>.</p><p>b) <strong>\\(g'(x)=1/\\sqrt{2x+5}\\)</strong>.</p><p>c) <strong>\\(h'(x)=4e^{4x-2}\\)</strong>.</p><p>d) <strong>\\(p'(x)=5/(5x+1)\\)</strong>.</p>",
    "familj": "kedjeregel_rutin4"
  },
  {
    "id": "2.103",
    "kap": 2,
    "omr": "derivata_exp_log",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(\\ln x\\)<br>b) \\(\\ln(3x)\\)<br>c) \\(\\ln(x^2+1)\\)<br>d) \\(\\ln(5-2x)\\)</p>",
    "s": "<p><strong>Metod:</strong> För \\(\\ln u(x)\\) gäller \\((\\ln u)'=u'/u\\).</p><p>a) \\((\\ln x)'=\\boxed{1/x}\\).</p><p>b) \\((\\ln(3x))'=\\frac{3}{3x}=\\boxed{1/x}\\).</p><p>c) \\((\\ln(x^2+1))'=\\frac{2x}{x^2+1}\\).</p><p>d) \\((\\ln(5-2x))'=\\frac{-2}{5-2x}\\).</p>",
    "familj": "proc_deriv_ln_1"
  },
  {
    "id": "2.104",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm funktionens asymptoter.</p><p>a) \\(f(x)=\\frac{3}{x-2}+1\\)<br>b) \\(g(x)=\\frac{2x+1}{x+4}\\)<br>c) \\(h(x)=2x-3+\\frac1x\\)<br>d) \\(p(x)=\\frac{x^2+1}{x-1}\\)</p>",
    "s": "<p>a) <strong>\\(x=2\\), \\(y=1\\)</strong>.<br>b) lodrät <strong>\\(x=-4\\)</strong>, vågrät <strong>\\(y=2\\)</strong>.<br>c) lodrät <strong>\\(x=0\\)</strong>, sned <strong>\\(y=2x-3\\)</strong>.<br>d) Polynomdivision ger \\(p(x)=x+1+\\frac2{x-1}\\). Alltså <strong>\\(x=1\\)</strong> och <strong>\\(y=x+1\\)</strong>.</p>",
    "familj": "proc_asymptoter_rutin_mix"
  },
  {
    "id": "2.105",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm tangentens lutning till grafen.</p><p>a) \\(y=x^2+3x\\) vid \\(x=1\\).<br>b) \\(y=x^3\\) vid \\(x=-2\\).<br>c) \\(y=2e^x\\) vid \\(x=0\\).</p>",
    "s": "<p>a) \\(y'=2x+3\\Rightarrow\\)<strong>5</strong>.<br>b) \\(y'=3x^2\\Rightarrow\\)<strong>12</strong>.<br>c) \\(y'=2e^x\\Rightarrow\\)<strong>2</strong>.</p>",
    "familj": "proc_deriv_tangentlutning"
  },
  {
    "id": "2.106",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm den sneda asymptoten.</p><p>a) \\(f(x)=\\frac{x^2+3x+1}{x+1}\\)<br>b) \\(g(x)=\\frac{2x^2-x+4}{x-2}\\)<br>c) \\(h(x)=\\frac{x^2-4}{x-1}\\)</p>",
    "s": "<p><strong>Metod:</strong> För lodräta asymptoter undersöks var nämnaren blir noll. För vågräta eller sneda asymptoter studeras hur funktionen beter sig när \\(|x|\\) blir stor.</p><p>Polynomdivision:</p><p>a) \\(x^2+3x+1=(x+1)(x+2)-1\\), alltså asymptot <strong>\\(y=x+2\\)</strong>.</p><p>b) \\(2x^2-x+4=(x-2)(2x+3)+10\\), alltså <strong>\\(y=2x+3\\)</strong>.</p><p>c) \\(x^2-4=(x-1)(x+1)-3\\), alltså <strong>\\(y=x+1\\)</strong>.</p>",
    "familj": "proc_sneda_asymptoter_2"
  },
  {
    "id": "2.107",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera och förenkla.</p><p>a) \\(\\frac{2x+1}{x-3}\\)<br>b) \\(\\frac{x^2+1}{x}\\)<br>c) \\(\\frac{\\ln x}{x}\\)<br>d) \\(\\frac{\\cos x}{e^x}\\)</p>",
    "s": "<p>a) <strong>\\(-\\frac7{(x-3)^2}\\)</strong>.<br>b) \\(x+1/x\\Rightarrow\\) <strong>\\(1-1/x^2\\)</strong>.<br>c) <strong>\\(\\frac{1-\\ln x}{x^2}\\)</strong>.<br>d) \\(e^{-x}\\cos x\\Rightarrow\\) <strong>\\(-e^{-x}(\\sin x+\\cos x)\\)</strong>.</p>",
    "familj": "proc_kvotregeln_2"
  },
  {
    "id": "2.108",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med kvotregeln.</p><p>a) \\(\\frac{x}{x+2}\\)<br>b) \\(\\frac{x^2}{x-1}\\)<br>c) \\(\\frac{e^x}{x}\\)<br>d) \\(\\frac{\\sin x}{x}\\)</p>",
    "s": "<p>a) <strong>\\(\\frac{2}{(x+2)^2}\\)</strong>.<br>b) <strong>\\(\\frac{x(x-2)}{(x-1)^2}\\)</strong>.<br>c) <strong>\\(\\frac{e^x(x-1)}{x^2}\\)</strong>.<br>d) <strong>\\(\\frac{x\\cos x-\\sin x}{x^2}\\)</strong>.</p>",
    "familj": "proc_kvotregeln_1"
  },
  {
    "id": "2.109",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En rektangulär hage ska ligga längs en rak å, så stängsel behövs bara på tre sidor. Man har 180 m stängsel.</p><p>Låt \\(x\\) vara de två sidorna vinkelräta mot ån.</p><p>a) Ställ upp areafunktionen.<br>b) Bestäm de mått som ger största möjliga area och bestäm denna area.</p>",
    "s": "<p>Den tredje stängslade sidan blir \\(180-2x\\). Alltså</p><p>\\[A(x)=x(180-2x)=180x-2x^2.\\]</p><p>\\[A'(x)=180-4x=0\\Rightarrow x=45.\\]</p><p>Den parallella sidan blir 90 m. Eftersom \\(A''=-4&lt;0\\) fås maximum.</p><p><strong>Mått \\(45\\times90\\) m och area \\(\\boxed{4050\\text{ m}^2}\\).</strong></p>",
    "familj": "optimering_hage_a_c"
  },
  {
    "id": "2.110",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm definitionsmängden.</p><p>a) \\(f(x)=\\ln(x-3)\\)<br>b) \\(g(x)=\\ln(7-x)\\)<br>c) \\(h(x)=\\ln(x^2-4)\\)<br>d) \\(p(x)=\\ln(2x+5)\\)</p>",
    "s": "<p>Argumentet till \\(\\ln\\) måste vara positivt.</p><p>a) <strong>\\(x>3\\)</strong>.<br>b) <strong>\\(x&lt;7\\)</strong>.<br>c) \\(x^2>4\\Rightarrow\\) <strong>\\(x&lt;-2\\) eller \\(x>2\\)</strong>.<br>d) <strong>\\(x>-\\frac52\\)</strong>.</p>",
    "familj": "proc_ln_definitionsmangd"
  },
  {
    "id": "2.111",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Funktionen är</p><p>\\[f(x)=\\frac{2x^2-3}{x-2}.\\]</p><span class=\"fig\"><svg width=\"480\" height=\"290\" viewBox=\"0 0 480 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till rationell funktion\"><rect x=\"1\" y=\"1\" width=\"478\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"87.9\" y1=\"25\" x2=\"87.9\" y2=\"250\" stroke=\"#E8ECEF\"/><text x=\"87.9\" y=\"268\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">-4</text><line x1=\"153.8\" y1=\"25\" x2=\"153.8\" y2=\"250\" stroke=\"#E8ECEF\"/><text x=\"153.8\" y=\"268\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">-2</text><line x1=\"219.6\" y1=\"25\" x2=\"219.6\" y2=\"250\" stroke=\"#E8ECEF\"/><text x=\"219.6\" y=\"268\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">0</text><line x1=\"285.4\" y1=\"25\" x2=\"285.4\" y2=\"250\" stroke=\"#E8ECEF\"/><text x=\"285.4\" y=\"268\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">2</text><line x1=\"351.2\" y1=\"25\" x2=\"351.2\" y2=\"250\" stroke=\"#E8ECEF\"/><text x=\"351.2\" y=\"268\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">4</text><line x1=\"417.1\" y1=\"25\" x2=\"417.1\" y2=\"250\" stroke=\"#E8ECEF\"/><text x=\"417.1\" y=\"268\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\">6</text><line x1=\"55\" y1=\"250.0\" x2=\"450\" y2=\"250.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"254.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\">-20</text><line x1=\"55\" y1=\"200.0\" x2=\"450\" y2=\"200.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"204.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\">-10</text><line x1=\"55\" y1=\"150.0\" x2=\"450\" y2=\"150.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"154.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\">0</text><line x1=\"55\" y1=\"100.0\" x2=\"450\" y2=\"100.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"104.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\">10</text><line x1=\"55\" y1=\"50.0\" x2=\"450\" y2=\"50.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"54.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\">20</text><line x1=\"55\" y1=\"150.0\" x2=\"450\" y2=\"150.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"219.6\" y1=\"25\" x2=\"219.6\" y2=\"250\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55.0,183.6 56.0,183.3 56.9,183.0 57.9,182.7 58.8,182.5 59.8,182.2 60.7,181.9 61.7,181.6 62.6,181.4 63.6,181.1 64.6,180.8 65.5,180.5 66.5,180.3 67.4,180.0 68.4,179.7 69.3,179.5 70.3,179.2 71.2,178.9 72.2,178.6 73.2,178.4 74.1,178.1 75.1,177.8 76.0,177.5 77.0,177.3 77.9,177.0 78.9,176.7 79.9,176.5 80.8,176.2 81.8,175.9 82.7,175.6 83.7,175.4 84.6,175.1 85.6,174.8 86.5,174.6 87.5,174.3 88.5,174.0 89.4,173.7 90.4,173.5 91.3,173.2 92.3,172.9 93.2,172.7 94.2,172.4 95.1,172.1 96.1,171.9 97.1,171.6 98.0,171.3 99.0,171.1 99.9,170.8 100.9,170.5 101.8,170.3 102.8,170.0 103.7,169.7 104.7,169.5 105.7,169.2 106.6,168.9 107.6,168.7 108.5,168.4 109.5,168.1 110.4,167.9 111.4,167.6 112.3,167.3 113.3,167.1 114.3,166.8 115.2,166.5 116.2,166.3 117.1,166.0 118.1,165.8 119.0,165.5 120.0,165.2 121.0,165.0 121.9,164.7 122.9,164.4 123.8,164.2 124.8,163.9 125.7,163.7 126.7,163.4 127.6,163.1 128.6,162.9 129.6,162.6 130.5,162.4 131.5,162.1 132.4,161.9 133.4,161.6 134.3,161.3 135.3,161.1 136.2,160.8 137.2,160.6 138.2,160.3 139.1,160.1 140.1,159.8 141.0,159.6 142.0,159.3 142.9,159.1 143.9,158.8 144.8,158.6 145.8,158.3 146.8,158.1 147.7,157.8 148.7,157.6 149.6,157.3 150.6,157.1 151.5,156.8 152.5,156.6 153.4,156.3 154.4,156.1 155.4,155.8 156.3,155.6 157.3,155.4 158.2,155.1 159.2,154.9 160.1,154.6 161.1,154.4 162.1,154.1 163.0,153.9 164.0,153.7 164.9,153.4 165.9,153.2 166.8,153.0 167.8,152.7 168.7,152.5 169.7,152.3 170.7,152.0 171.6,151.8 172.6,151.6 173.5,151.3 174.5,151.1 175.4,150.9 176.4,150.7 177.3,150.4 178.3,150.2 179.3,150.0 180.2,149.8 181.2,149.6 182.1,149.3 183.1,149.1 184.0,148.9 185.0,148.7 185.9,148.5 186.9,148.3 187.9,148.1 188.8,147.9 189.8,147.7 190.7,147.5 191.7,147.3 192.6,147.1 193.6,146.9 194.6,146.7 195.5,146.5 196.5,146.3 197.4,146.1 198.4,145.9 199.3,145.7 200.3,145.5 201.2,145.3 202.2,145.2 203.2,145.0 204.1,144.8 205.1,144.7 206.0,144.5 207.0,144.3 207.9,144.2 208.9,144.0 209.8,143.8 210.8,143.7 211.8,143.5 212.7,143.4 213.7,143.3 214.6,143.1 215.6,143.0 216.5,142.9 217.5,142.8 218.4,142.6 219.4,142.5 220.4,142.4 221.3,142.3 222.3,142.2 223.2,142.1 224.2,142.0 225.1,142.0 226.1,141.9 227.0,141.8 228.0,141.8 229.0,141.7 229.9,141.7 230.9,141.7 231.8,141.6 232.8,141.6 233.7,141.6 234.7,141.6 235.7,141.7 236.6,141.7 237.6,141.7 238.5,141.8 239.5,141.9 240.4,142.0 241.4,142.1 242.3,142.2 243.3,142.3 244.3,142.5 245.2,142.7 246.2,142.9 247.1,143.1 248.1,143.4 249.0,143.7 250.0,144.0 250.9,144.3 251.9,144.7 252.9,145.2 253.8,145.6 254.8,146.2 255.7,146.7 256.7,147.4 257.6,148.1 258.6,148.8 259.5,149.7 260.5,150.6 261.5,151.6 262.4,152.8 263.4,154.0 264.3,155.4 265.3,157.0 266.2,158.7 267.2,160.7 268.1,162.9 269.1,165.4 270.1,168.3 271.0,171.5 272.0,175.3 272.9,179.7 273.9,184.9 274.8,191.0 275.8,198.5 276.8,207.6 277.7,219.1 278.7,233.9\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\"/><polyline points=\"295.6,25.8 296.2,30.7 296.9,34.9 297.6,38.7 298.3,42.1 299.0,45.1 299.6,47.8 300.3,50.3 301.0,52.5 301.7,54.5 302.4,56.3 303.0,58.0 303.7,59.5 304.4,60.9 305.1,62.2 305.8,63.4 306.4,64.5 307.1,65.5 307.8,66.4 308.5,67.3 309.2,68.1 309.8,68.9 310.5,69.6 311.2,70.3 311.9,70.9 312.6,71.4 313.2,72.0 313.9,72.5 314.6,72.9 315.3,73.4 316.0,73.8 316.6,74.2 317.3,74.5 318.0,74.8 318.7,75.2 319.4,75.4 320.0,75.7 320.7,76.0 321.4,76.2 322.1,76.4 322.8,76.6 323.5,76.8 324.1,77.0 324.8,77.1 325.5,77.3 326.2,77.4 326.9,77.6 327.5,77.7 328.2,77.8 328.9,77.9 329.6,77.9 330.3,78.0 330.9,78.1 331.6,78.2 332.3,78.2 333.0,78.2 333.7,78.3 334.3,78.3 335.0,78.3 335.7,78.4 336.4,78.4 337.1,78.4 337.7,78.4 338.4,78.4 339.1,78.4 339.8,78.3 340.5,78.3 341.1,78.3 341.8,78.3 342.5,78.2 343.2,78.2 343.9,78.2 344.5,78.1 345.2,78.1 345.9,78.0 346.6,78.0 347.3,77.9 347.9,77.8 348.6,77.8 349.3,77.7 350.0,77.6 350.7,77.6 351.3,77.5 352.0,77.4 352.7,77.3 353.4,77.2 354.1,77.2 354.7,77.1 355.4,77.0 356.1,76.9 356.8,76.8 357.5,76.7 358.2,76.6 358.8,76.5 359.5,76.4 360.2,76.3 360.9,76.2 361.6,76.1 362.2,76.0 362.9,75.8 363.6,75.7 364.3,75.6 365.0,75.5 365.6,75.4 366.3,75.3 367.0,75.1 367.7,75.0 368.4,74.9 369.0,74.8 369.7,74.6 370.4,74.5 371.1,74.4 371.8,74.2 372.4,74.1 373.1,74.0 373.8,73.8 374.5,73.7 375.2,73.6 375.8,73.4 376.5,73.3 377.2,73.2 377.9,73.0 378.6,72.9 379.2,72.7 379.9,72.6 380.6,72.4 381.3,72.3 382.0,72.1 382.6,72.0 383.3,71.9 384.0,71.7 384.7,71.6 385.4,71.4 386.0,71.3 386.7,71.1 387.4,70.9 388.1,70.8 388.8,70.6 389.4,70.5 390.1,70.3 390.8,70.2 391.5,70.0 392.2,69.9 392.8,69.7 393.5,69.5 394.2,69.4 394.9,69.2 395.6,69.1 396.3,68.9 396.9,68.7 397.6,68.6 398.3,68.4 399.0,68.3 399.7,68.1 400.3,67.9 401.0,67.8 401.7,67.6 402.4,67.4 403.1,67.3 403.7,67.1 404.4,66.9 405.1,66.8 405.8,66.6 406.5,66.4 407.1,66.3 407.8,66.1 408.5,65.9 409.2,65.8 409.9,65.6 410.5,65.4 411.2,65.2 411.9,65.1 412.6,64.9 413.3,64.7 413.9,64.6 414.6,64.4 415.3,64.2 416.0,64.0 416.7,63.9 417.3,63.7 418.0,63.5 418.7,63.3 419.4,63.2 420.1,63.0 420.7,62.8 421.4,62.6 422.1,62.5 422.8,62.3 423.5,62.1 424.1,61.9 424.8,61.7 425.5,61.6 426.2,61.4 426.9,61.2 427.5,61.0 428.2,60.9 428.9,60.7 429.6,60.5 430.3,60.3 430.9,60.1 431.6,60.0 432.3,59.8 433.0,59.6 433.7,59.4 434.4,59.2 435.0,59.0 435.7,58.9 436.4,58.7 437.1,58.5 437.8,58.3 438.4,58.1 439.1,58.0 439.8,57.8 440.5,57.6 441.2,57.4 441.8,57.2 442.5,57.0 443.2,56.9 443.9,56.7 444.6,56.5 445.2,56.3 445.9,56.1 446.6,55.9 447.3,55.7 448.0,55.6 448.6,55.4 449.3,55.2 450.0,55.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\"/><text x=\"445\" y=\"142.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"227.6\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>a) Ange den lodräta asymptoten.<br>b) Bestäm den linjära asymptoten med polynomdivision.</p>",
    "s": "<p>a) Nämnaren är noll vid \\(x=2\\) och täljaren är då 5, alltså \\(\\boxed{x=2}\\).</p><p>b) Polynomdivision ger</p><p>\\[\\frac{2x^2-3}{x-2}=2x+4+\\frac5{x-2}.\\]</p><p>Alltså \\(\\boxed{y=2x+4}\\).</p>",
    "familj": "asymptot_rutin_svg_ny"
  },
  {
    "id": "2.112",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För varje funktion, ange definitionsmängd.</p><p>a) \\(f(x)=\\ln x\\)<br>b) \\(g(x)=\\ln(x-3)\\)<br>c) \\(h(x)=\\ln(5-2x)\\)<br>d) \\(p(x)=\\ln(x^2-4)\\)</p>",
    "s": "<p>Logaritmens argument måste vara positivt.</p><p>a) <strong>\\(x>0\\)</strong>.</p><p>b) <strong>\\(x>3\\)</strong>.</p><p>c) <strong>\\(x&lt;5/2\\)</strong>.</p><p>d) \\(x^2-4>0\\Rightarrow\\) <strong>\\(x&lt;-2\\) eller \\(x>2\\)</strong>.</p>",
    "familj": "proc_ln_definitionsmangd_2"
  },
  {
    "id": "2.113",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En affisch ska ha en tryckt rektangulär yta på 384 cm². Marginalerna ska vara 2 cm på vardera sidan och 3 cm upptill och nedtill.</p>\n<span class=\"fig\"><svg width=\"390\" height=\"300\" viewBox=\"0 0 390 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rektangulär affisch med tryckyta och marginaler 2 cm på sidorna och 3 cm upptill och nedtill\">\n<rect x=\"1\" y=\"1\" width=\"388\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<rect x=\"90\" y=\"35\" width=\"210\" height=\"230\" fill=\"#F7F7F8\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<rect x=\"120\" y=\"70\" width=\"150\" height=\"160\" fill=\"#FBF0EE\" stroke=\"#B43123\" stroke-width=\"2\"/>\n<text x=\"195\" y=\"155\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#B43123\">tryckyta 384 cm²</text>\n<line x1=\"90\" y1=\"248\" x2=\"120\" y2=\"248\" stroke=\"#5C6570\"/><line x1=\"90\" y1=\"243\" x2=\"90\" y2=\"253\" stroke=\"#5C6570\"/><line x1=\"120\" y1=\"243\" x2=\"120\" y2=\"253\" stroke=\"#5C6570\"/><text x=\"105\" y=\"270\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">2 cm</text>\n<line x1=\"285\" y1=\"35\" x2=\"285\" y2=\"70\" stroke=\"#5C6570\"/><line x1=\"280\" y1=\"35\" x2=\"290\" y2=\"35\" stroke=\"#5C6570\"/><line x1=\"280\" y1=\"70\" x2=\"290\" y2=\"70\" stroke=\"#5C6570\"/><text x=\"304\" y=\"56\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">3 cm</text>\n<text x=\"195\" y=\"245\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">tryckt bredd = x</text>\n</svg></span>\n<p>Bestäm måtten på den tryckta ytan så att hela affischens area blir så liten som möjligt. Bestäm även affischens minsta möjliga area.</p>",
    "s": "<p>Låt den tryckta bredden vara \\(x\\) cm. Då är den tryckta höjden \\(384/x\\) cm.</p><p>Affischens totala mått är \\(x+4\\) och \\(384/x+6\\), så</p><p>\\[A(x)=(x+4)\\left(\\frac{384}{x}+6\\right)=408+6x+\\frac{1536}{x}.\\]</p>\n<p>\\[A'(x)=6-\\frac{1536}{x^2}.\\]</p><p>\\[A'(x)=0\\Rightarrow6x^2=1536\\Rightarrow x^2=256.\\]</p><p>Eftersom \\(x&gt;0\\) fås \\(x=16\\) cm. Den tryckta höjden blir \\(384/16=24\\) cm.</p>\n<p>Affischens mått blir då \\(20\\) cm × \\(30\\) cm och arean <strong>600 cm²</strong>. Derivatan går från negativ till positiv, så detta är ett minimum.</p>",
    "familj": "optimering_affisch_marginaler_svg"
  },
  {
    "id": "2.114",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En klotformad ballong blåses upp. Vid ett visst ögonblick är radien 10 cm och ökar då med 0,40 cm/s.</p>\n<span class=\"fig\"><svg width=\"360\" height=\"245\" viewBox=\"0 0 360 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Klotformad ballong med radie r markerad\">\n<rect x=\"1\" y=\"1\" width=\"358\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<circle cx=\"170\" cy=\"120\" r=\"78\" fill=\"#F4F5F7\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<circle cx=\"170\" cy=\"120\" r=\"3.5\" fill=\"#2B2527\"/><line x1=\"170\" y1=\"120\" x2=\"241\" y2=\"88\" stroke=\"#B43123\" stroke-width=\"2.4\"/><path d=\"M241 88 l-11 1 l5 9 z\" fill=\"#B43123\"/><text x=\"212\" y=\"96\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#B43123\">r</text><text x=\"170\" y=\"221\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">V = 4πr³/3</text>\n</svg></span>\n<p>a) Bestäm hur snabbt ballongens volym ökar vid detta ögonblick.<br>b) Anta därefter att volymen fortsätter att öka med just denna konstanta hastighet från en tom ballong. Hur lång tid skulle det då ta att nå radien 15 cm?</p>",
    "s": "<p>Volymen är \\(V=\\frac43\\pi r^3\\). Derivera med avseende på tiden:</p><p>\\[\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}.\\]</p>\n<p>a) Vid \\(r=10\\) och \\(dr/dt=0,40\\):</p><p>\\[\\frac{dV}{dt}=4\\pi\\cdot10^2\\cdot0,40=\\boxed{160\\pi\\text{ cm}^3/\\text{s}}.\\]</p>\n<p>b) Volymen vid \\(r=15\\) är</p><p>\\[V=\\frac43\\pi\\cdot15^3=4500\\pi\\text{ cm}^3.\\]</p><p>Med konstant volymökning \\(160\\pi\\) cm³/s blir tiden</p><p>\\[t=\\frac{4500\\pi}{160\\pi}=28,125\\text{ s}.\\]</p><p><strong>Cirka 28,1 s.</strong></p>",
    "familj": "relaterade_hastigheter_ballong_a"
  },
  {
    "id": "2.115",
    "kap": 2,
    "omr": "sammansatta_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen till \\(f\\) och tangenten i punkten där \\(x=1\\) visas nedan.</p>\n<span class=\"fig\"><svg width=\"470\" height=\"300\" viewBox=\"0 0 470 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Grafen y lika med x kvadrat plus x och dess tangent vid punkten 1 komma 2\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"55.0\" y1=\"35\" x2=\"55.0\" y2=\"260\"/><line x1=\"116.7\" y1=\"35\" x2=\"116.7\" y2=\"260\"/><line x1=\"178.3\" y1=\"35\" x2=\"178.3\" y2=\"260\"/><line x1=\"240.0\" y1=\"35\" x2=\"240.0\" y2=\"260\"/><line x1=\"301.7\" y1=\"35\" x2=\"301.7\" y2=\"260\"/><line x1=\"363.3\" y1=\"35\" x2=\"363.3\" y2=\"260\"/><line x1=\"425.0\" y1=\"35\" x2=\"425.0\" y2=\"260\"/><line x1=\"55\" y1=\"260.0\" x2=\"425\" y2=\"260.0\"/><line x1=\"55\" y1=\"215.0\" x2=\"425\" y2=\"215.0\"/><line x1=\"55\" y1=\"170.0\" x2=\"425\" y2=\"170.0\"/><line x1=\"55\" y1=\"125.0\" x2=\"425\" y2=\"125.0\"/><line x1=\"55\" y1=\"80.0\" x2=\"425\" y2=\"80.0\"/><line x1=\"55\" y1=\"35.0\" x2=\"425\" y2=\"35.0\"/></g>\n<line x1=\"55\" y1=\"215\" x2=\"437\" y2=\"215\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M437 215 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"240\" y1=\"265\" x2=\"240\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M240 28 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<polyline points=\"73.5,111.7 75.2,114.5 77.0,117.2 78.7,119.9 80.4,122.6 82.2,125.2 83.9,127.8 85.6,130.3 87.3,132.8 89.1,135.3 90.8,137.7 92.5,140.1 94.3,142.5 96.0,144.8 97.7,147.1 99.5,149.4 101.2,151.6 102.9,153.8 104.6,156.0 106.4,158.1 108.1,160.2 109.8,162.2 111.6,164.3 113.3,166.2 115.0,168.2 116.8,170.1 118.5,172.0 120.2,173.8 121.9,175.6 123.7,177.4 125.4,179.1 127.1,180.8 128.9,182.5 130.6,184.1 132.3,185.7 134.1,187.2 135.8,188.8 137.5,190.2 139.2,191.7 141.0,193.1 142.7,194.5 144.4,195.8 146.2,197.1 147.9,198.4 149.6,199.6 151.4,200.8 153.1,202.0 154.8,203.1 156.5,204.2 158.3,205.3 160.0,206.3 161.7,207.3 163.5,208.3 165.2,209.2 166.9,210.1 168.7,210.9 170.4,211.7 172.1,212.5 173.8,213.2 175.6,213.9 177.3,214.6 179.0,215.3 180.8,215.9 182.5,216.4 184.2,216.9 186.0,217.4 187.7,217.9 189.4,218.3 191.1,218.7 192.9,219.1 194.6,219.4 196.3,219.7 198.1,219.9 199.8,220.1 201.5,220.3 203.3,220.4 205.0,220.5 206.7,220.6 208.4,220.6 210.2,220.6 211.9,220.6 213.6,220.5 215.4,220.4 217.1,220.3 218.8,220.1 220.6,219.9 222.3,219.6 224.0,219.3 225.7,219.0 227.5,218.6 229.2,218.2 230.9,217.8 232.7,217.4 234.4,216.9 236.1,216.3 237.9,215.8 239.6,215.1 241.3,214.5 243.0,213.8 244.8,213.1 246.5,212.4 248.2,211.6 250.0,210.8 251.7,209.9 253.4,209.0 255.2,208.1 256.9,207.1 258.6,206.2 260.4,205.1 262.1,204.1 263.8,203.0 265.5,201.8 267.3,200.6 269.0,199.4 270.7,198.2 272.5,196.9 274.2,195.6 275.9,194.3 277.7,192.9 279.4,191.5 281.1,190.0 282.8,188.5 284.6,187.0 286.3,185.4 288.0,183.8 289.8,182.2 291.5,180.5 293.2,178.8 295.0,177.1 296.7,175.3 298.4,173.5 300.1,171.7 301.9,169.8 303.6,167.9 305.3,165.9 307.1,163.9 308.8,161.9 310.5,159.8 312.3,157.7 314.0,155.6 315.7,153.5 317.4,151.3 319.2,149.0 320.9,146.8 322.6,144.4 324.4,142.1 326.1,139.7 327.8,137.3 329.6,134.9 331.3,132.4 333.0,129.9 334.7,127.3 336.5,124.7 338.2,122.1 339.9,119.4 341.7,116.8 343.4,114.0 345.1,111.3 346.9,108.5 348.6,105.6 350.3,102.7 352.0,99.8 353.8,96.9 355.5,93.9 357.2,90.9 359.0,87.9 360.7,84.8 362.4,81.7 364.2,78.5 365.9,75.3 367.6,72.1 369.3,68.8 371.1,65.5 372.8,62.2 374.5,58.8 376.3,55.4 378.0,52.0 379.7,48.5 381.5,45.0 383.2,41.4 384.9,37.9\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n<line x1=\"221.5\" y1=\"257.75\" x2=\"394.16666666666663\" y2=\"68.75\" stroke=\"#6B7280\" stroke-width=\"2\" stroke-dasharray=\"7 5\"/>\n<circle cx=\"301.66666666666663\" cy=\"170\" r=\"5\" fill=\"#B43123\"/><text x=\"311.66666666666663\" y=\"162\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">(1, 2)</text><text x=\"366.4166666666667\" y=\"100.25\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#6B7280\">tangent</text>\n<text x=\"301.66666666666663\" y=\"235\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">1</text><text x=\"230\" y=\"174\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">2</text><text x=\"439\" y=\"210\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">x</text><text x=\"248\" y=\"31\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">y</text>\n</svg></span>\n<p>Av figuren kan man avläsa att \\(f(1)=2\\) och att tangenten har lutningen 3. En ny funktion definieras av \\(g(x)=(f(x))^2\\).</p><p>Bestäm \\(g(1)\\) och \\(g'(1)\\).</p>",
    "s": "<p><strong>Metod:</strong> Identifiera den yttre och den inre funktionen. Kedjeregeln innebär att den yttre derivatan multipliceras med den inre derivatan.</p><p>\\[g(1)=(f(1))^2=2^2=4.\\]</p>\n<p>Kedjeregeln ger</p><p>\\[g'(x)=2f(x)f'(x).\\]</p><p>Eftersom \\(f(1)=2\\) och \\(f'(1)=3\\) fås</p><p>\\[g'(1)=2\\cdot2\\cdot3=12.\\]</p>\n<p><strong>\\(g(1)=4\\) och \\(g'(1)=12\\).</strong></p>",
    "familj": "sammansatt_fran_graf_tangent"
  },
  {
    "id": "2.116",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\(3\\sin x\\)<br>b) \\(-4\\cos x\\)<br>c) \\(2\\sin x+5\\cos x\\)<br>d) \\(7-\\cos x\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera term för term och använd \\((\\sin x)'=\\cos x\\) och \\((\\cos x)'=-\\sin x\\).</p><p>a) \\(\\boxed{3\\cos x}\\).</p><p>b) \\(-4(-\\sin x)=\\boxed{4\\sin x}\\).</p><p>c) \\(\\boxed{2\\cos x-5\\sin x}\\).</p><p>d) Konstanten 7 får derivatan 0 och \\((-\\cos x)'=\\sin x\\), alltså \\(\\boxed{\\sin x}\\).</p>",
    "familj": "derivata_sincos_rutin2"
  },
  {
    "id": "2.117",
    "kap": 2,
    "omr": "asymptoter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Undersök funktionen</p><p>\\[f(x)=\\frac{x^2+2x+3}{x+1}.\\]</p><p>a) Bestäm alla asymptoter.<br>b) Bestäm om grafen kan skära sin linjära asymptot. Motivera.</p>",
    "s": "<p>Polynomdivision:</p><p>\\[f(x)=x+1+\\frac2{x+1}.\\]</p><p>Alltså lodrät asymptot \\(\\boxed{x=-1}\\) och linjär asymptot \\(\\boxed{y=x+1}\\).</p><p>För att skära den linjära asymptoten krävs \\(2/(x+1)=0\\), vilket saknar lösning. <strong>Grafen skär alltså aldrig den linjära asymptoten.</strong></p>",
    "familj": "asymptot_skarning_resonemang_c"
  },
  {
    "id": "2.118",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm största eller minsta värde.</p><p>a) \\(f(x)=x+\\frac{9}{x}\\), \\(x>0\\).<br>b) \\(g(x)=x^2e^{-x}\\), \\(x>0\\).</p>",
    "s": "<p>a) \\(f'(x)=1-9/x^2=0\\Rightarrow x=3\\). Funktionen går från avtagande till växande, så minimum är \\(f(3)=3+3=\\\\boxed{6}\\).</p><p>b) \\(g'(x)=e^{-x}(2x-x^2)=xe^{-x}(2-x)\\). För \\(x>0\\) byter derivatan från positiv till negativ vid \\(x=2\\), alltså maximum där. \\(g(2)=\\boxed{4e^{-2}}\\).</p>",
    "familj": "proc_optimering_standard_2"
  },
  {
    "id": "2.119",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm ekvationen för tangenten till kurvan</p>\n<p>\\[\ny=xe^{2x}\n\\]</p>\n<p>i den punkt där \\(x=1\\).</p>",
    "s": "<p>Funktionsvärdet är</p>\n<p>\\[\ny(1)=e^2.\n\\]</p>\n<p>Derivera med produktregeln:</p>\n<p>\\[\ny'=e^{2x}+2xe^{2x}=e^{2x}(1+2x).\n\\]</p>\n<p>Tangentens lutning vid \\(x=1\\) är</p>\n<p>\\[\ny'(1)=3e^2.\n\\]</p>\n<p>Punkt-lutningsformen ger</p>\n<p>\\[\ny-e^2=3e^2(x-1).\n\\]</p>\n<p><strong>\\[\ny=3e^2x-2e^2.\n\\]</strong></p>",
    "familj": "kallmaterial_tangent_exp"
  },
  {
    "id": "2.120",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>En öppen låda tillverkas av ett rektangulärt kartongark, 30 cm × 20 cm. Kvadrater med sidan \\(x\\) klipps bort i varje hörn och kanterna viks upp.</p><p>Bestäm \\(x\\) så att lådans volym blir maximal. Motivera att lösningen verkligen ger maximum.</p>",
    "s": "<p>Volymen är \\(V(x)=x(30-2x)(20-2x)=4x^3-100x^2+600x\\), med \\(0&lt;x&lt;10\\).</p><p>\\(V'(x)=12x^2-200x+600=4(3x^2-50x+150)\\).</p><p>Rötterna är \\(x=(25\\pm5\\sqrt7)/3\\). Endast \\(x=(25-5\\sqrt7)/3\\approx3,92\\) ligger i intervallet \\(0&lt;x&lt;10\\).</p><p>Ändpunkterna ger volym 0 och den inre stationära punkten ger positiv volym, så denna punkt ger den största möjliga volymen.</p><p><strong>\\(x\\approx3,92\\) cm.</strong></p>",
    "familj": "optimering_lada_a"
  },
  {
    "id": "2.121",
    "kap": 2,
    "omr": "kedjeregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera.</p><p>a) \\((5x+1)^4\\)<br>b) \\(\\sqrt{3x+2}\\)<br>c) \\(\\cos(4x)\\)<br>d) \\(e^{-3x}\\)</p>",
    "s": "<p><strong>Metod:</strong> Derivera den yttre funktionen och multiplicera med derivatan av den inre funktionen.</p><p>a) <strong>\\(20(5x+1)^3\\)</strong>.</p><p>b) <strong>\\(\\frac{3}{2\\sqrt{3x+2}}\\)</strong>.</p><p>c) <strong>\\(-4\\sin4x\\)</strong>.</p><p>d) <strong>\\(-3e^{-3x}\\)</strong>.</p>",
    "familj": "kedja_rutin2"
  },
  {
    "id": "2.122",
    "kap": 2,
    "omr": "derivata_sin_cos",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Härled deriveringsregeln för tangens genom att skriva \\(\\tan x=\\sin x/\\cos x\\) och använda kvotregeln. Förenkla svaret med trigonometriska ettan.</p>",
    "s": "<p>Med kvotregeln:</p><p>\\[\\frac{d}{dx}\\tan x=\\frac{\\cos x\\cdot\\cos x-\\sin x(-\\sin x)}{\\cos^2x}.\\]</p><p>Täljaren blir \\(\\cos^2x+\\sin^2x=1\\). Därför</p><p>\\[\\boxed{(\\tan x)'=\\frac1{\\cos^2x}}\\]</p><p>för de x där tangens är definierad.</p>",
    "familj": "harledning_tangensderivata"
  },
  {
    "id": "2.123",
    "kap": 2,
    "omr": "kvotregeln",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>För \\(x&gt;0\\) är</p><p>\\[f(x)=\\frac{\\ln x}{x+1}.\\]</p><p>a) Bestäm \\(f'(x)\\).<br>b) Bestäm tangentens ekvation vid \\(x=1\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd kvotregeln och håll täljaren samlad tills deriveringen är klar. Förenkla sedan.</p><p>a) Kvotregeln ger</p><p>\\[f'(x)=\\frac{\\frac1x(x+1)-\\ln x}{(x+1)^2}.\\]</p><p>b) \\(f(1)=0\\) och \\(f'(1)=\\frac{2}{4}=1/2\\). Tangenten är därför <strong>\\(y=\\frac12(x-1)\\)</strong>.</p>",
    "familj": "kvot_ln_tangent"
  },
  {
    "id": "2.124",
    "kap": 2,
    "omr": "deriveringsregler_repetition",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Derivera och förenkla.</p><p>a) \\(f(x)=(x^2+1)e^{3x}\\)<br>b) \\(g(x)=\\frac{\\ln x}{x^2}\\)<br>c) \\(h(x)=\\sin(x^2+1)\\)<br>d) \\(p(x)=\\ln(1+e^x)\\)</p>",
    "s": "<p>a) \\(f'=2xe^{3x}+3(x^2+1)e^{3x}=\\boxed{e^{3x}(3x^2+2x+3)}\\).</p><p>b) \\(g=x^{-2}\\ln x\\Rightarrow g'=x^{-3}(1-2\\ln x)=\\boxed{\\frac{1-2\\ln x}{x^3}}\\).</p><p>c) <strong>\\(h'(x)=2x\\cos(x^2+1)\\)</strong>.</p><p>d) <strong>\\(p'(x)=\\frac{e^x}{1+e^x}\\)</strong>.</p>",
    "familj": "proc_deriv_blandad_5"
  },
  {
    "id": "2.125",
    "kap": 2,
    "omr": "derivata_grafer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Figuren visar en kurva och en tangent i punkten \\(P\\).</p><span class=\"fig\"><svg width=\"450\" height=\"245\" viewBox=\"0 0 450 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Kurva med tangent i punkt P\"><rect x=\"1\" y=\"1\" width=\"448\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"45\" y1=\"190\" x2=\"415\" y2=\"190\" stroke=\"#2B2527\"/><line x1=\"85\" y1=\"25\" x2=\"85\" y2=\"220\" stroke=\"#2B2527\"/><path d=\"M55 170 C115 55,180 75,220 130 C255 180,310 205,390 55\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\"/><circle cx=\"220\" cy=\"130\" r=\"4\" fill=\"#B43123\"/><line x1=\"150\" y1=\"110\" x2=\"305\" y2=\"165\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"229\" y=\"121\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">P</text></svg></span><p>a) Är \\(f'(x_P)\\) positiv, negativ eller noll?<br>b) Vad betyder derivatans tecken för funktionen nära \\(P\\)?<br>c) Om tangentens lutning är \\(-0,8\\), ange \\(f'(x_P)\\).</p>",
    "s": "<p>a) Tangenten lutar nedåt åt höger: <strong>derivatan är negativ</strong>.</p><p>b) Funktionen är <strong>avtagande</strong> nära punkten.</p><p>c) <strong>\\(f'(x_P)=-0,8\\)</strong>.</p>",
    "familj": "derivata_graf_tecken_e"
  },
  {
    "id": "2.126",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>En rektangel är symmetrisk kring y-axeln, har basen på x-axeln och sina övre hörn på parabeln \\(y=12-x^2\\).</p><span class=\"fig\"><svg width=\"470\" height=\"300\" viewBox=\"0 0 470 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rektangel inskriven under parabeln y lika med 12 minus x kvadrat\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55\" y1=\"250\" x2=\"430\" y2=\"250\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"242.5\" y1=\"30\" x2=\"242.5\" y2=\"250\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.4\" points=\"81.2,247.2 82.5,244.1 83.8,241.0 85.0,238.0 86.2,235.0 87.5,232.0 88.7,229.0 90.0,226.0 91.2,223.1 92.5,220.2 93.8,217.3 95.0,214.5 96.2,211.7 97.5,208.9 98.8,206.1 100.0,203.3 101.2,200.6 102.5,197.9 103.8,195.2 105.0,192.5 106.2,189.9 107.5,187.3 108.8,184.7 110.0,182.1 111.2,179.6 112.5,177.1 113.8,174.6 115.0,172.1 116.2,169.7 117.5,167.3 118.8,164.9 120.0,162.5 121.2,160.2 122.5,157.8 123.8,155.5 125.0,153.3 126.2,151.0 127.5,148.8 128.8,146.6 130.0,144.4 131.2,142.2 132.5,140.1 133.8,138.0 135.0,135.9 136.2,133.9 137.5,131.8 138.8,129.8 140.0,127.8 141.2,125.9 142.5,123.9 143.8,122.0 145.0,120.1 146.2,118.3 147.5,116.4 148.8,114.6 150.0,112.8 151.2,111.1 152.5,109.3 153.8,107.6 155.0,105.9 156.2,104.2 157.5,102.6 158.8,100.9 160.0,99.3 161.2,97.8 162.5,96.2 163.8,94.7 165.0,93.2 166.2,91.7 167.5,90.2 168.8,88.8 170.0,87.4 171.2,86.0 172.5,84.7 173.8,83.3 175.0,82.0 176.2,80.7 177.5,79.5 178.8,78.2 180.0,77.0 181.2,75.8 182.5,74.6 183.8,73.5 185.0,72.4 186.2,71.3 187.5,70.2 188.8,69.2 190.0,68.2 191.2,67.2 192.5,66.2 193.8,65.2 195.0,64.3 196.2,63.4 197.5,62.5 198.8,61.7 200.0,60.8 201.2,60.0 202.5,59.2 203.8,58.5 205.0,57.8 206.2,57.0 207.5,56.4 208.8,55.7 210.0,55.1 211.2,54.4 212.5,53.9 213.8,53.3 215.0,52.7 216.2,52.2 217.5,51.7 218.8,51.3 220.0,50.8 221.2,50.4 222.5,50.0 223.8,49.6 225.0,49.3 226.2,49.0 227.5,48.7 228.8,48.4 230.0,48.1 231.2,47.9 232.5,47.7 233.8,47.5 235.0,47.4 236.2,47.2 237.5,47.1 238.8,47.0 240.0,47.0 241.2,46.9 242.5,46.9 243.8,46.9 245.0,47.0 246.2,47.0 247.5,47.1 248.8,47.2 250.0,47.4 251.2,47.5 252.5,47.7 253.8,47.9 255.0,48.1 256.2,48.4 257.5,48.7 258.8,49.0 260.0,49.3 261.2,49.6 262.5,50.0 263.8,50.4 265.0,50.8 266.2,51.3 267.5,51.7 268.8,52.2 270.0,52.7 271.2,53.3 272.5,53.9 273.8,54.4 275.0,55.1 276.2,55.7 277.5,56.4 278.8,57.0 280.0,57.8 281.2,58.5 282.5,59.2 283.8,60.0 285.0,60.8 286.2,61.7 287.5,62.5 288.8,63.4 290.0,64.3 291.2,65.2 292.5,66.2 293.8,67.2 295.0,68.2 296.2,69.2 297.5,70.2 298.8,71.3 300.0,72.4 301.2,73.5 302.5,74.6 303.8,75.8 305.0,77.0 306.2,78.2 307.5,79.5 308.8,80.7 310.0,82.0 311.2,83.3 312.5,84.7 313.8,86.0 315.0,87.4 316.2,88.8 317.5,90.2 318.8,91.7 320.0,93.2 321.2,94.7 322.5,96.2 323.8,97.8 325.0,99.3 326.2,100.9 327.5,102.6 328.8,104.2 330.0,105.9 331.2,107.6 332.5,109.3 333.8,111.1 335.0,112.8 336.2,114.6 337.5,116.4 338.8,118.3 340.0,120.1 341.2,122.0 342.5,123.9 343.8,125.9 345.0,127.8 346.2,129.8 347.5,131.8 348.8,133.9 350.0,135.9 351.2,138.0 352.5,140.1 353.8,142.2 355.0,144.4 356.2,146.6 357.5,148.8 358.8,151.0 360.0,153.3 361.2,155.5 362.5,157.8 363.8,160.2 365.0,162.5 366.2,164.9 367.5,167.3 368.8,169.7 370.0,172.1 371.2,174.6 372.5,177.1 373.8,179.6 375.0,182.1 376.2,184.7 377.5,187.3 378.8,189.9 380.0,192.5 381.2,195.2 382.5,197.9 383.8,200.6 385.0,203.3 386.2,206.1 387.5,208.9 388.8,211.7 390.0,214.5 391.2,217.3 392.5,220.2 393.8,223.1 395.0,226.0 396.2,229.0 397.5,232.0 398.8,235.0 400.0,238.0 401.2,241.0 402.5,244.1 403.8,247.2\"/>\n<rect x=\"148.8\" y=\"114.6\" width=\"187.5\" height=\"135.4\" fill=\"#DCEFF2\" stroke=\"#268FA3\" stroke-width=\"2\"/>\n<text x=\"350\" y=\"58\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = 12 - x²</text><text x=\"342.2\" y=\"109.6\" font-family=\"sans-serif\" font-size=\"11\">(x, 12-x²)</text>\n</svg></span><p>Bestäm rektangelns största möjliga area och dess sidlängder.</p>",
    "s": "<p>Låt det högra övre hörnet ha x-koordinaten \\(x&gt;0\\). Bredden är \\(2x\\) och höjden \\(12-x^2\\).</p><p>\\[A(x)=2x(12-x^2)=24x-2x^3.\\]</p><p>\\[A'(x)=24-6x^2=0\\Rightarrow x=2.\\]</p><p>Detta ger maximum (derivatan går från positiv till negativ). Bredden är \\(4\\), höjden \\(8\\).</p><p><strong>Största area: \\(\\boxed{32}\\) areaenheter, sidlängder 4 och 8.</strong></p>",
    "familj": "optimering_rektangel_under_parabel"
  },
  {
    "id": "2.127",
    "kap": 2,
    "omr": "tillampningar_derivata",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En rektangel har omkretsen 40 cm. Bestäm de sidlängder som ger maximal area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\), då är den andra \\(20-x\\). Arean är \\(A(x)=x(20-x)=20x-x^2\\).</p><p>\\(A'(x)=20-2x=0\\Rightarrow x=10\\). Eftersom \\(A'\\) går från positiv till negativ fås maximum.</p><p><strong>10 cm × 10 cm.</strong></p>",
    "familj": "optimering_rektangel"
  },
  {
    "id": "2.128",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera.</p><p>a) \\(f(x)=x^2\\sin x\\)<br>b) \\(g(x)=xe^x\\)<br>c) \\(h(x)=(x^2+1)\\ln x\\), \\(x&gt;0\\)</p>",
    "s": "<p>Använd produktregeln \\((uv)'=u'v+uv'\\).</p>\n<p>a) <strong>\\(f'(x)=2x\\sin x+x^2\\cos x\\)</strong>.</p>\n<p>b) <strong>\\(g'(x)=e^x+xe^x=e^x(1+x)\\)</strong>.</p>\n<p>c) <strong>\\(h'(x)=2x\\ln x+\\frac{x^2+1}{x}\\)</strong>.</p>",
    "familj": "produktregel_rutin3"
  },
  {
    "id": "2.129",
    "kap": 2,
    "omr": "produktregeln",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera med produktregeln.</p><p>a) \\(x^2e^x\\)<br>b) \\(x\\sin x\\)<br>c) \\((x+1)\\cos x\\)<br>d) \\(x^3\\ln x\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd produktregeln \\((uv)'=u'v+uv'\\).</p><p>a) <strong>\\(e^x(x^2+2x)\\)</strong>.<br>b) <strong>\\(\\sin x+x\\cos x\\)</strong>.<br>c) <strong>\\(\\cos x-(x+1)\\sin x\\)</strong>.<br>d) <strong>\\(x^2(3\\ln x+1)\\)</strong>.</p>",
    "familj": "proc_produktregeln_1"
  },
  {
    "id": "2.130",
    "kap": 2,
    "omr": "logaritmfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös ekvationerna.</p><p>a) \\(\\ln x=0\\)<br>b) \\(\\ln x=2\\)<br>c) \\(\\ln(x-1)=\\ln5\\)<br>d) \\(2\\ln x=\\ln16\\)</p>",
    "s": "<p>a) <strong>\\(x=1\\)</strong>.<br>b) <strong>\\(x=e^2\\)</strong>.<br>c) <strong>\\(x=6\\)</strong>.<br>d) \\(\\ln(x^2)=\\ln16\\) och \\(x>0\\), alltså <strong>\\(x=4\\)</strong>.</p>",
    "familj": "proc_ln_ekvationer"
  },
  {
    "id": "3.01",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm arean mellan kurvorna \\(y=\\cos x\\) och \\(y=\\sin x\\) på intervallet \\(0\\le x\\le\\pi/2\\).</p>",
    "s": "<p>Kurvorna skär varandra då \\(\\sin x=\\cos x\\Rightarrow x=\\pi/4\\). På första halvan ligger cosinus över sinus och på andra tvärtom.</p><p>\\[A=\\int_0^{\\pi/4}(\\cos x-\\sin x)dx+\\int_{\\pi/4}^{\\pi/2}(\\sin x-\\cos x)dx.\\]</p><p>Båda delarna är \\(\\sqrt2-1\\), så</p><p><strong>\\(\\boxed{A=2\\sqrt2-2}\\)</strong>.</p>",
    "familj": "area_sin_cos_halvperiod"
  },
  {
    "id": "3.02",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En slumpvariabel har täthetsfunktionen</p><p>\\[f(x)=kx(2-x),\\qquad0\\le x\\le2,\\]</p><p>och \\(f(x)=0\\) annars.</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"funktionsgraf\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"160.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,5</text><line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"265.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"370.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1,5</text><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"248.0\" x2=\"475\" y2=\"248.0\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"251.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"55\" y1=\"182.4\" x2=\"475\" y2=\"182.4\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"185.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,25</text><line x1=\"55\" y1=\"116.8\" x2=\"475\" y2=\"116.8\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"119.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,5</text><line x1=\"55\" y1=\"51.2\" x2=\"475\" y2=\"51.2\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"54.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,75</text><line x1=\"55\" y1=\"248.0\" x2=\"480\" y2=\"248.0\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"55.0\" y1=\"20\" x2=\"55.0\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"55.0,248.0 56.0,246.0 57.1,244.1 58.1,242.1 59.2,240.2 60.2,238.3 61.3,236.4 62.4,234.5 63.4,232.6 64.5,230.7 65.5,228.8 66.5,227.0 67.6,225.1 68.7,223.3 69.7,221.4 70.8,219.6 71.8,217.8 72.8,216.0 73.9,214.2 75.0,212.4 76.0,210.6 77.0,208.8 78.1,207.1 79.2,205.3 80.2,203.6 81.2,201.9 82.3,200.2 83.3,198.5 84.4,196.8 85.5,195.1 86.5,193.4 87.5,191.7 88.6,190.1 89.7,188.4 90.7,186.8 91.8,185.2 92.8,183.5 93.8,181.9 94.9,180.3 96.0,178.7 97.0,177.2 98.0,175.6 99.1,174.0 100.2,172.5 101.2,170.9 102.2,169.4 103.3,167.9 104.3,166.4 105.4,164.9 106.4,163.4 107.5,161.9 108.6,160.4 109.6,159.0 110.7,157.5 111.7,156.1 112.8,154.7 113.8,153.2 114.8,151.8 115.9,150.4 116.9,149.0 118.0,147.7 119.0,146.3 120.1,144.9 121.2,143.6 122.2,142.2 123.2,140.9 124.3,139.6 125.4,138.2 126.4,136.9 127.4,135.7 128.5,134.4 129.6,133.1 130.6,131.8 131.6,130.6 132.7,129.3 133.8,128.1 134.8,126.9 135.9,125.7 136.9,124.5 137.9,123.3 139.0,122.1 140.1,120.9 141.1,119.7 142.1,118.6 143.2,117.4 144.2,116.3 145.3,115.2 146.3,114.0 147.4,112.9 148.4,111.8 149.5,110.8 150.6,109.7 151.6,108.6 152.7,107.6 153.7,106.5 154.8,105.5 155.8,104.4 156.8,103.4 157.9,102.4 158.9,101.4 160.0,100.4 161.1,99.4 162.1,98.5 163.2,97.5 164.2,96.6 165.2,95.6 166.3,94.7 167.4,93.8 168.4,92.9 169.4,92.0 170.5,91.1 171.6,90.2 172.6,89.3 173.6,88.5 174.7,87.6 175.8,86.8 176.8,85.9 177.8,85.1 178.9,84.3 179.9,83.5 181.0,82.7 182.1,81.9 183.1,81.2 184.2,80.4 185.2,79.6 186.2,78.9 187.3,78.2 188.3,77.4 189.4,76.7 190.5,76.0 191.5,75.3 192.6,74.7 193.6,74.0 194.7,73.3 195.7,72.7 196.8,72.0 197.8,71.4 198.9,70.8 199.9,70.1 200.9,69.5 202.0,68.9 203.0,68.4 204.1,67.8 205.2,67.2 206.2,66.7 207.2,66.1 208.3,65.6 209.3,65.1 210.4,64.5 211.4,64.0 212.5,63.5 213.6,63.0 214.6,62.6 215.7,62.1 216.7,61.6 217.8,61.2 218.8,60.8 219.8,60.3 220.9,59.9 222.0,59.5 223.0,59.1 224.1,58.7 225.1,58.3 226.1,58.0 227.2,57.6 228.2,57.3 229.3,56.9 230.3,56.6 231.4,56.3 232.4,56.0 233.5,55.7 234.5,55.4 235.6,55.1 236.7,54.8 237.7,54.6 238.8,54.3 239.8,54.1 240.8,53.8 241.9,53.6 243.0,53.4 244.0,53.2 245.1,53.0 246.1,52.8 247.2,52.7 248.2,52.5 249.2,52.3 250.3,52.2 251.4,52.1 252.4,51.9 253.4,51.8 254.5,51.7 255.5,51.6 256.6,51.6 257.6,51.5 258.7,51.4 259.8,51.4 260.8,51.3 261.9,51.3 262.9,51.3 263.9,51.2 265.0,51.2 266.0,51.2 267.1,51.3 268.1,51.3 269.2,51.3 270.2,51.4 271.3,51.4 272.4,51.5 273.4,51.6 274.4,51.6 275.5,51.7 276.5,51.8 277.6,51.9 278.6,52.1 279.7,52.2 280.8,52.3 281.8,52.5 282.9,52.7 283.9,52.8 284.9,53.0 286.0,53.2 287.0,53.4 288.1,53.6 289.1,53.8 290.2,54.1 291.2,54.3 292.3,54.6 293.4,54.8 294.4,55.1 295.5,55.4 296.5,55.7 297.6,56.0 298.6,56.3 299.6,56.6 300.7,56.9 301.8,57.3 302.8,57.6 303.9,58.0 304.9,58.3 306.0,58.7 307.0,59.1 308.1,59.5 309.1,59.9 310.1,60.3 311.2,60.8 312.2,61.2 313.3,61.6 314.4,62.1 315.4,62.6 316.5,63.0 317.5,63.5 318.5,64.0 319.6,64.5 320.6,65.1 321.7,65.6 322.8,66.1 323.8,66.7 324.8,67.2 325.9,67.8 326.9,68.4 328.0,68.9 329.1,69.5 330.1,70.1 331.1,70.8 332.2,71.4 333.2,72.0 334.3,72.7 335.3,73.3 336.4,74.0 337.4,74.7 338.5,75.3 339.6,76.0 340.6,76.7 341.6,77.4 342.7,78.2 343.8,78.9 344.8,79.6 345.9,80.4 346.9,81.2 347.9,81.9 349.0,82.7 350.1,83.5 351.1,84.3 352.2,85.1 353.2,85.9 354.2,86.8 355.3,87.6 356.4,88.5 357.4,89.3 358.4,90.2 359.5,91.1 360.6,92.0 361.6,92.9 362.7,93.8 363.7,94.7 364.8,95.6 365.8,96.6 366.9,97.5 367.9,98.5 369.0,99.4 370.0,100.4 371.0,101.4 372.1,102.4 373.1,103.4 374.2,104.4 375.2,105.5 376.3,106.5 377.3,107.6 378.4,108.6 379.4,109.7 380.5,110.8 381.6,111.8 382.6,112.9 383.6,114.0 384.7,115.2 385.8,116.3 386.8,117.4 387.8,118.6 388.9,119.7 389.9,120.9 391.0,122.1 392.1,123.3 393.1,124.5 394.1,125.7 395.2,126.9 396.2,128.1 397.3,129.3 398.4,130.6 399.4,131.8 400.4,133.1 401.5,134.4 402.6,135.7 403.6,136.9 404.7,138.2 405.7,139.6 406.8,140.9 407.8,142.2 408.9,143.6 409.9,144.9 410.9,146.3 412.0,147.6 413.1,149.0 414.1,150.4 415.2,151.8 416.2,153.2 417.2,154.7 418.3,156.1 419.4,157.5 420.4,159.0 421.5,160.4 422.5,161.9 423.5,163.4 424.6,164.9 425.6,166.4 426.7,167.9 427.8,169.4 428.8,170.9 429.8,172.5 430.9,174.0 431.9,175.6 433.0,177.2 434.1,178.7 435.1,180.3 436.1,181.9 437.2,183.5 438.2,185.2 439.3,186.8 440.3,188.4 441.4,190.1 442.4,191.7 443.5,193.4 444.6,195.1 445.6,196.8 446.6,198.5 447.7,200.2 448.8,201.9 449.8,203.6 450.9,205.3 451.9,207.1 452.9,208.8 454.0,210.6 455.1,212.4 456.1,214.2 457.2,216.0 458.2,217.8 459.2,219.6 460.3,221.4 461.4,223.3 462.4,225.1 463.4,227.0 464.5,228.8 465.6,230.7 466.6,232.6 467.7,234.5 468.7,236.4 469.8,238.3 470.8,240.2 471.9,242.1 472.9,244.1 474.0,246.0 475.0,248.0\"/><text x=\"467\" y=\"43\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">f(x)</text></svg></span><p>a) Bestäm \\(k\\).<br>b) Bestäm \\(P(X&lt;1)\\).</p>",
    "s": "<p>a) Kravet \\(\\int_0^2f(x)dx=1\\) ger</p><p>\\[1=k\\int_0^2(2x-x^2)dx=k\\left[x^2-\\frac{x^3}{3}\\right]_0^2=k\\frac43.\\]</p><p>Alltså <strong>\\(k=3/4\\)</strong>.</p><p>b) \\[P(X&lt;1)=\\frac34\\int_0^1(2x-x^2)dx=\\frac34\\left(1-\\frac13\\right)=\\boxed{\\frac12}.\\]</p>",
    "familj": "tathet_parabel_normalisering"
  },
  {
    "id": "3.03",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(f(x)=6x^2-4x+3\\)<br>b) \\(g(x)=5x^4+2/x^2\\)<br>c) \\(h(x)=3\\sqrt{x}\\)<br>d) \\(p(x)=4x^{-3}\\)</p>",
    "s": "<p>a) <strong>\\(F(x)=2x^3-2x^2+3x+C\\)</strong>.</p><p>b) <strong>\\(G(x)=x^5-2/x+C\\)</strong>.</p><p>c) \\(3x^{1/2}\\Rightarrow\\) <strong>\\(H(x)=2x^{3/2}+C\\)</strong>.</p><p>d) <strong>\\(P(x)=-2x^{-2}+C=-2/x^2+C\\)</strong>.</p>",
    "familj": "proc_primitiva_potenser_4"
  },
  {
    "id": "3.04",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna arean mellan grafen och x-axeln på det angivna intervallet.</p><p>a) \\(y=x+2\\), \\(0\\le x\\le3\\).<br>b) \\(y=4-x\\), \\(0\\le x\\le4\\).<br>c) \\(y=x^2\\), \\(0\\le x\\le2\\).</p>",
    "s": "<p>Funktionerna är icke-negativa på intervallen.</p><p>a) \\(\\int_0^3(x+2)dx=\\)<strong>\\(\\frac{21}{2}\\)</strong> a.e.<br>b) \\(\\int_0^4(4-x)dx=\\)<strong>8</strong> a.e.<br>c) \\(\\int_0^2x^2dx=\\)<strong>\\(\\frac83\\)</strong> a.e.</p>",
    "familj": "proc_area_under_graf_1"
  },
  {
    "id": "3.05",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För \\(a>0\\) definieras</p><p>\\[f_a(x)=a(1-x)^2,\\qquad 0\\le x\\le1,\\]</p><p>och \\(f_a(x)=0\\) annars.</p><p>a) Bestäm \\(a\\) så att \\(f_a\\) blir en täthetsfunktion.<br>b) Bestäm medianen \\(m\\), dvs det tal som uppfyller \\(P(X\\le m)=0,5\\). Svara exakt.</p>",
    "s": "<p>a) För att \\(f_a\\) ska vara en täthetsfunktion måste integralen över hela intervallet vara 1. Därför</p><p>\\[1=a\\int_0^1(1-x)^2dx=a\\cdot\\frac13,\\]</p><p>så <strong>\\(a=3\\)</strong>.</p><p>b) Medianen uppfyller</p><p>\\[\\int_0^m3(1-x)^2dx=\\frac12.\\]</p><p>En primitiv funktion är \\(-(1-x)^3\\), så</p><p>\\[1-(1-m)^3=\\frac12.\\]</p><p>\\[(1-m)^3=\\frac12\\Rightarrow1-m=2^{-1/3}.\\]</p><p><strong>\\(m=1-2^{-1/3}\\).</strong></p>",
    "familj": "tathet_median_a"
  },
  {
    "id": "3.06",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p>\n<p>a) \\(\\displaystyle\\int_0^2(3x^2+1)\\,dx\\)<br>\nb) \\(\\displaystyle\\int_0^{\\pi/2}\\cos x\\,dx\\)<br>\nc) \\(\\displaystyle\\int_1^e\\frac1x\\,dx\\)<br>\nd) \\(\\displaystyle\\int_0^1 e^{2x}\\,dx\\)</p>",
    "s": "<p>a)</p>\n<p>\\[\n[x^3+x]_0^2=8+2=10.\n\\]</p>\n<p>b)</p>\n<p>\\[\n[\\sin x]_0^{\\pi/2}=1.\n\\]</p>\n<p>c)</p>\n<p>\\[\n[\\ln x]_1^e=1.\n\\]</p>\n<p>d)</p>\n<p>\\[\n\\left[\\frac12e^{2x}\\right]_0^1\n=\\frac{e^2-1}{2}.\n\\]</p>",
    "familj": "bestamda_integraler_rutin"
  },
  {
    "id": "3.07",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna arean mellan kurvan \\(y=\\sin x\\) och x-axeln för \\(0\\le x\\le\\pi\\).</p>",
    "s": "<p>På intervallet är \\(\\sin x\\ge0\\), så arean är</p><p>\\[\\int_0^\\pi\\sin x\\,dx=[-\\cos x]_0^\\pi=1-(-1)=\\boxed{2}.\\]</p>",
    "familj": "area_sin_0_pi_e"
  },
  {
    "id": "3.08",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En maskins effekt varierar enligt \\(P(t)=2t+5\\) kW under \\(0\\le t\\le4\\) h.</p><p>a) Skriv en integral för den producerade energin.<br>b) Beräkna energin.<br>c) Ange rätt enhet.</p>",
    "s": "<p>a) \\(\\int_0^4(2t+5)dt\\).</p><p>b) \\([t^2+5t]_0^4=16+20=\\)<strong>36</strong>.</p><p>c) kW·h = <strong>kWh</strong>. Alltså 36 kWh.</p>",
    "familj": "effekt_energi_e"
  },
  {
    "id": "3.09",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(f(x)=e^x\\)<br>b) \\(g(x)=3e^{2x}\\)<br>c) \\(h(x)=4\\cos x-2\\sin x\\)<br>d) \\(p(x)=1/x\\), \\(x>0\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm en funktion vars derivata blir den givna funktionen och lägg till \\(C\\).</p><p>a) \\(\\boxed{e^x+C}\\).</p><p>b) Eftersom \\((e^{2x})'=2e^{2x}\\) blir svaret \\(\\boxed{\\frac32e^{2x}+C}\\).</p><p>c) \\(\\boxed{4\\sin x+2\\cos x+C}\\), eftersom derivatan av \\(2\\cos x\\) är \\(-2\\sin x\\).</p><p>d) För \\(x>0\\): \\(\\boxed{\\ln x+C}\\).</p>",
    "familj": "proc_primitiva_exp_trig_3"
  },
  {
    "id": "3.10",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Avgör om den bestämda integralen direkt ger en geometrisk area eller en tecknad area, och beräkna värdet.</p><p>a) \\(\\int_0^2(x+1)dx\\)<br>b) \\(\\int_{-1}^1x\\,dx\\)<br>c) \\(\\int_0^\\pi\\sin x\\,dx\\)<br>d) \\(\\int_0^{2\\pi}\\sin x\\,dx\\)</p>",
    "s": "<p>a) Funktionen är positiv: integral och geometrisk area är <strong>4</strong>.<br>b) Integralen är en tecknad area och blir <strong>0</strong>; geometrisk area är inte 0.<br>c) Funktionen är icke-negativ: <strong>2</strong> är även geometrisk area.<br>d) Integralen är tecknad area och blir <strong>0</strong>; positiv och negativ del tar ut varandra.</p>",
    "familj": "proc_integral_vs_area"
  },
  {
    "id": "3.11",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(f(x)=6x^2\\)<br>b) \\(f(x)=4x^3-2x\\)<br>c) \\(f(x)=3e^x\\)<br>d) \\(f(x)=\\frac{5}{x}\\), \\(x>0\\)</p>",
    "s": "<p>a) <strong>\\(F(x)=2x^3+C\\)</strong>.<br>b) <strong>\\(F(x)=x^4-x^2+C\\)</strong>.<br>c) <strong>\\(F(x)=3e^x+C\\)</strong>.<br>d) <strong>\\(F(x)=5\\ln x+C\\)</strong>.</p>",
    "familj": "proc_primitiva_1"
  },
  {
    "id": "3.12",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Grafen visar en triangelformad täthetsfunktion på intervallet \\(0\\le x\\le6\\).</p><span class=\"fig\"><svg width=\"440\" height=\"235\" viewBox=\"0 0 440 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Triangelformad täthetsfunktion\"><rect x=\"1\" y=\"1\" width=\"438\" height=\"233\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55\" y1=\"190\" x2=\"410\" y2=\"190\" stroke=\"#2B2527\"/><line x1=\"85\" y1=\"30\" x2=\"85\" y2=\"215\" stroke=\"#2B2527\"/><polygon points=\"85,190 85,55 350,190\" fill=\"#DCEEF1\" stroke=\"#268FA3\" stroke-width=\"2.4\"/><text x=\"85\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">0</text><text x=\"350\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">6</text><text x=\"100\" y=\"55\" font-family=\"sans-serif\" font-size=\"11\">k</text></svg></span><p>a) Bestäm höjden \\(k\\).<br>b) Bestäm \\(P(X\\le3)\\).<br>c) Förklara varför \\(f(x)\\) själv inte är en sannolikhet.</p>",
    "s": "<p>a) Triangelns area ska vara 1: \\(6k/2=1\\Rightarrow\\)<strong>\\(k=1/3\\)</strong>.</p><p>b) Funktionen är linjär från \\(1/3\\) vid 0 till 0 vid 6, så vid 3 är höjden \\(1/6\\). Arean från 0 till 3 är en trapets:</p><p>\\[P(X\\le3)=\\frac{1/3+1/6}{2}\\cdot3=\\frac34.\\]</p><p>c) En sannolikhet fås som <strong>area/integral över ett intervall</strong>; täthetsvärdet är sannolikhet per x-enhet.</p>",
    "familj": "tathet_triangel_e"
  },
  {
    "id": "3.13",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(8x^3\\)<br>b) \\(5e^x-2\\)<br>c) \\(3/x\\), \\(x>0\\)<br>d) \\(4\\sin x+3\\cos x\\)</p>",
    "s": "<p><strong>Metod:</strong> En primitiv funktion \\(F\\) ska uppfylla \\(F'=f\\). Lägg alltid till konstanten \\(C\\).</p><p>a) \\(\\int8x^3dx=\\boxed{2x^4+C}\\).</p><p>b) \\(\\int(5e^x-2)dx=\\boxed{5e^x-2x+C}\\).</p><p>c) För \\(x>0\\): \\(\\int\\frac3x dx=\\boxed{3\\ln x+C}\\).</p><p>d) \\(\\int(4\\sin x+3\\cos x)dx=\\boxed{-4\\cos x+3\\sin x+C}\\).</p>",
    "familj": "primitiv_rutin2"
  },
  {
    "id": "3.14",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>En kontinuerlig slumpvariabel har täthetsfunktionen \\(f(x)=\\frac{x}{8}\\) för \\(0\\le x\\le4\\), och \\(f(x)=0\\) annars. Beräkna.</p><p>a) \\(P(X\\le2)\\)<br>b) \\(P(1\\le X\\le3)\\)<br>c) \\(P(X>3)\\)<br>d) \\(P(X=2)\\)</p>",
    "s": "<p>a) \\(\\int_0^2x/8\\,dx=\\)<strong>\\(\\frac14\\)</strong>.<br>b) \\([x^2/16]_1^3=(9-1)/16=\\)<strong>\\(\\frac12\\)</strong>.<br>c) \\(1-P(X\\le3)=1-9/16=\\)<strong>\\(\\frac7{16}\\)</strong>.<br>d) För en kontinuerlig fördelning är <strong>\\(P(X=2)=0\\)</strong>.</p>",
    "familj": "proc_sannolikhet_tathet_1"
  },
  {
    "id": "3.15",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm den primitiva funktion \\(F\\) som uppfyller villkoret.</p><p>a) \\(F'(x)=4x^3\\), \\(F(1)=5\\).<br>b) \\(F'(x)=2e^x\\), \\(F(0)=3\\).<br>c) \\(F'(x)=\\cos x\\), \\(F(\\pi/2)=4\\).</p>",
    "s": "<p>a) \\(F=x^4+C\\). \\(1+C=5\\Rightarrow C=4\\). <strong>\\(F=x^4+4\\)</strong>.</p><p>b) \\(F=2e^x+C\\). \\(2+C=3\\Rightarrow C=1\\). <strong>\\(F=2e^x+1\\)</strong>.</p><p>c) \\(F=\\sin x+C\\). \\(1+C=4\\Rightarrow C=3\\). <strong>\\(F=\\sin x+3\\)</strong>.</p>",
    "familj": "proc_primitiv_villkor_2"
  },
  {
    "id": "3.16",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Effekten från en solcellsanläggning modelleras under sex timmar av</p><p>\\[P(t)=4,2t(6-t)\\quad\\text{kW},\\qquad0\\le t\\le6.\\]</p><p>a) När är effekten som störst?<br>b) Bestäm den producerade energin under de sex timmarna.</p>",
    "s": "<p>a) Parabeln har symmetrilinje \\(t=3\\), alltså största effekt vid \\(\\boxed{t=3\\text{ h}}\\).</p><p>b)</p><p>\\[E=\\int_0^6 4,2t(6-t)dt=4,2\\left[3t^2-\\frac{t^3}{3}\\right]_0^6.\\]</p><p>\\[E=4,2(108-72)=\\boxed{151,2\\text{ kWh}}.\\]</p>",
    "familj": "solcell_parabel_energi_c"
  },
  {
    "id": "3.17",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan graferna \\(y=2x\\) och \\(y=x^2\\) visas i figuren.</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Område mellan linjen y lika med två x och parabeln y lika med x kvadrat\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"248\" stroke=\"#D9E6E9\"/><line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"248\" stroke=\"#D9E6E9\"/><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"248\" stroke=\"#D9E6E9\"/><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><line x1=\"55\" y1=\"248.0\" x2=\"475\" y2=\"248.0\" stroke=\"#D9E6E9\"/><line x1=\"55\" y1=\"198.4\" x2=\"475\" y2=\"198.4\" stroke=\"#D9E6E9\"/><line x1=\"55\" y1=\"148.9\" x2=\"475\" y2=\"148.9\" stroke=\"#D9E6E9\"/><line x1=\"55\" y1=\"99.3\" x2=\"475\" y2=\"99.3\" stroke=\"#D9E6E9\"/><line x1=\"55\" y1=\"49.8\" x2=\"475\" y2=\"49.8\" stroke=\"#D9E6E9\"/><polygon points=\"55.0,248.0 57.3,246.9 59.7,245.8 62.0,244.7 64.3,243.6 66.7,242.5 69.0,241.4 71.3,240.3 73.7,239.2 76.0,238.1 78.3,237.0 80.7,235.9 83.0,234.8 85.3,233.7 87.7,232.6 90.0,231.5 92.3,230.4 94.7,229.3 97.0,228.2 99.3,227.1 101.7,226.0 104.0,224.9 106.3,223.8 108.7,222.7 111.0,221.6 113.3,220.5 115.7,219.4 118.0,218.3 120.3,217.2 122.7,216.1 125.0,215.0 127.3,213.9 129.7,212.8 132.0,211.7 134.3,210.6 136.7,209.5 139.0,208.4 141.3,207.3 143.7,206.2 146.0,205.1 148.3,204.0 150.7,202.8 153.0,201.7 155.3,200.6 157.7,199.5 160.0,198.4 162.3,197.3 164.7,196.2 167.0,195.1 169.3,194.0 171.7,192.9 174.0,191.8 176.3,190.7 178.7,189.6 181.0,188.5 183.3,187.4 185.7,186.3 188.0,185.2 190.3,184.1 192.7,183.0 195.0,181.9 197.3,180.8 199.7,179.7 202.0,178.6 204.3,177.5 206.7,176.4 209.0,175.3 211.3,174.2 213.7,173.1 216.0,172.0 218.3,170.9 220.7,169.8 223.0,168.7 225.3,167.6 227.7,166.5 230.0,165.4 232.3,164.3 234.7,163.2 237.0,162.1 239.3,161.0 241.7,159.9 244.0,158.8 246.3,157.7 248.7,156.6 251.0,155.5 253.3,154.4 255.7,153.3 258.0,152.2 260.3,151.1 262.7,150.0 265.0,148.9 267.3,147.8 269.7,146.7 272.0,145.6 274.3,144.5 276.7,143.4 279.0,142.3 281.3,141.2 283.7,140.1 286.0,139.0 288.3,137.9 290.7,136.8 293.0,135.7 295.3,134.6 297.7,133.5 300.0,132.4 302.3,131.3 304.7,130.2 307.0,129.1 309.3,128.0 311.7,126.9 314.0,125.8 316.3,124.7 318.7,123.6 321.0,122.5 323.3,121.4 325.7,120.3 328.0,119.2 330.3,118.1 332.7,117.0 335.0,115.9 337.3,114.8 339.7,113.6 342.0,112.5 344.3,111.4 346.7,110.3 349.0,109.2 351.3,108.1 353.7,107.0 356.0,105.9 358.3,104.8 360.7,103.7 363.0,102.6 365.3,101.5 367.7,100.4 370.0,99.3 372.3,98.2 374.7,97.1 377.0,96.0 379.3,94.9 381.7,93.8 384.0,92.7 386.3,91.6 388.7,90.5 391.0,89.4 393.3,88.3 395.7,87.2 398.0,86.1 400.3,85.0 402.7,83.9 405.0,82.8 407.3,81.7 409.7,80.6 412.0,79.5 414.3,78.4 416.7,77.3 419.0,76.2 421.3,75.1 423.7,74.0 426.0,72.9 428.3,71.8 430.7,70.7 433.0,69.6 435.3,68.5 437.7,67.4 440.0,66.3 442.3,65.2 444.7,64.1 447.0,63.0 449.3,61.9 451.7,60.8 454.0,59.7 456.3,58.6 458.7,57.5 461.0,56.4 463.3,55.3 465.7,54.2 468.0,53.1 470.3,52.0 472.7,50.9 475.0,49.8 475.0,49.8 472.7,52.0 470.3,54.2 468.0,56.3 465.7,58.5 463.3,60.6 461.0,62.8 458.7,64.9 456.3,67.0 454.0,69.1 451.7,71.2 449.3,73.3 447.0,75.3 444.7,77.4 442.3,79.4 440.0,81.4 437.7,83.5 435.3,85.5 433.0,87.4 430.7,89.4 428.3,91.4 426.0,93.3 423.7,95.3 421.3,97.2 419.0,99.1 416.7,101.0 414.3,102.9 412.0,104.8 409.7,106.7 407.3,108.5 405.0,110.3 402.7,112.2 400.3,114.0 398.0,115.8 395.7,117.6 393.3,119.4 391.0,121.1 388.7,122.9 386.3,124.6 384.0,126.4 381.7,128.1 379.3,129.8 377.0,131.5 374.7,133.2 372.3,134.8 370.0,136.5 367.7,138.1 365.3,139.8 363.0,141.4 360.7,143.0 358.3,144.6 356.0,146.2 353.7,147.8 351.3,149.3 349.0,150.9 346.7,152.4 344.3,153.9 342.0,155.4 339.7,156.9 337.3,158.4 335.0,159.9 332.7,161.4 330.3,162.8 328.0,164.3 325.7,165.7 323.3,167.1 321.0,168.5 318.7,169.9 316.3,171.3 314.0,172.6 311.7,174.0 309.3,175.3 307.0,176.6 304.7,178.0 302.3,179.3 300.0,180.5 297.7,181.8 295.3,183.1 293.0,184.3 290.7,185.6 288.3,186.8 286.0,188.0 283.7,189.2 281.3,190.4 279.0,191.6 276.7,192.8 274.3,193.9 272.0,195.1 269.7,196.2 267.3,197.3 265.0,198.4 262.7,199.5 260.3,200.6 258.0,201.7 255.7,202.8 253.3,203.8 251.0,204.8 248.7,205.9 246.3,206.9 244.0,207.9 241.7,208.8 239.3,209.8 237.0,210.8 234.7,211.7 232.3,212.7 230.0,213.6 227.7,214.5 225.3,215.4 223.0,216.3 220.7,217.2 218.3,218.0 216.0,218.9 213.7,219.7 211.3,220.5 209.0,221.4 206.7,222.2 204.3,222.9 202.0,223.7 199.7,224.5 197.3,225.2 195.0,226.0 192.7,226.7 190.3,227.4 188.0,228.1 185.7,228.8 183.3,229.5 181.0,230.2 178.7,230.8 176.3,231.5 174.0,232.1 171.7,232.7 169.3,233.3 167.0,233.9 164.7,234.5 162.3,235.1 160.0,235.6 157.7,236.2 155.3,236.7 153.0,237.2 150.7,237.7 148.3,238.2 146.0,238.7 143.7,239.2 141.3,239.6 139.0,240.1 136.7,240.5 134.3,240.9 132.0,241.3 129.7,241.7 127.3,242.1 125.0,242.5 122.7,242.9 120.3,243.2 118.0,243.5 115.7,243.9 113.3,244.2 111.0,244.5 108.7,244.8 106.3,245.0 104.0,245.3 101.7,245.6 99.3,245.8 97.0,246.0 94.7,246.2 92.3,246.4 90.0,246.6 87.7,246.8 85.3,247.0 83.0,247.1 80.7,247.3 78.3,247.4 76.0,247.5 73.7,247.6 71.3,247.7 69.0,247.8 66.7,247.8 64.3,247.9 62.0,247.9 59.7,248.0 57.3,248.0 55.0,248.0\" fill=\"#DCEFF2\"/><line x1=\"55\" y1=\"248\" x2=\"475\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"55\" y1=\"25\" x2=\"55\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><text x=\"160.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,5</text><text x=\"265.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><text x=\"370.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1,5</text><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><text x=\"47\" y=\"201.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><text x=\"47\" y=\"151.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><text x=\"47\" y=\"102.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><text x=\"47\" y=\"52.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"55.0,248.0 56.4,248.0 57.8,248.0 59.2,248.0 60.6,248.0 62.0,247.9 63.4,247.9 64.8,247.9 66.2,247.9 67.6,247.8 69.0,247.8 70.4,247.7 71.8,247.7 73.2,247.6 74.6,247.6 76.0,247.5 77.4,247.4 78.8,247.4 80.2,247.3 81.6,247.2 83.0,247.1 84.4,247.0 85.8,246.9 87.2,246.8 88.6,246.7 90.0,246.6 91.4,246.5 92.8,246.4 94.2,246.3 95.6,246.1 97.0,246.0 98.4,245.9 99.8,245.7 101.2,245.6 102.6,245.5 104.0,245.3 105.4,245.1 106.8,245.0 108.2,244.8 109.6,244.7 111.0,244.5 112.4,244.3 113.8,244.1 115.2,243.9 116.6,243.7 118.0,243.5 119.4,243.3 120.8,243.1 122.2,242.9 123.6,242.7 125.0,242.5 126.4,242.3 127.8,242.0 129.2,241.8 130.6,241.6 132.0,241.3 133.4,241.1 134.8,240.8 136.2,240.6 137.6,240.3 139.0,240.1 140.4,239.8 141.8,239.5 143.2,239.3 144.6,239.0 146.0,238.7 147.4,238.4 148.8,238.1 150.2,237.8 151.6,237.5 153.0,237.2 154.4,236.9 155.8,236.6 157.2,236.3 158.6,235.9 160.0,235.6 161.4,235.3 162.8,234.9 164.2,234.6 165.6,234.3 167.0,233.9 168.4,233.5 169.8,233.2 171.2,232.8 172.6,232.5 174.0,232.1 175.4,231.7 176.8,231.3 178.2,230.9 179.6,230.6 181.0,230.2 182.4,229.8 183.8,229.4 185.2,229.0 186.6,228.5 188.0,228.1 189.4,227.7 190.8,227.3 192.2,226.8 193.6,226.4 195.0,226.0 196.4,225.5 197.8,225.1 199.2,224.6 200.6,224.2 202.0,223.7 203.4,223.3 204.8,222.8 206.2,222.3 207.6,221.8 209.0,221.4 210.4,220.9 211.8,220.4 213.2,219.9 214.6,219.4 216.0,218.9 217.4,218.4 218.8,217.9 220.2,217.3 221.6,216.8 223.0,216.3 224.4,215.8 225.8,215.2 227.2,214.7 228.6,214.1 230.0,213.6 231.4,213.0 232.8,212.5 234.2,211.9 235.6,211.3 237.0,210.8 238.4,210.2 239.8,209.6 241.2,209.0 242.6,208.5 244.0,207.9 245.4,207.3 246.8,206.7 248.2,206.1 249.6,205.4 251.0,204.8 252.4,204.2 253.8,203.6 255.2,203.0 256.6,202.3 258.0,201.7 259.4,201.1 260.8,200.4 262.2,199.8 263.6,199.1 265.0,198.4 266.4,197.8 267.8,197.1 269.2,196.4 270.6,195.8 272.0,195.1 273.4,194.4 274.8,193.7 276.2,193.0 277.6,192.3 279.0,191.6 280.4,190.9 281.8,190.2 283.2,189.5 284.6,188.8 286.0,188.0 287.4,187.3 288.8,186.6 290.2,185.8 291.6,185.1 293.0,184.3 294.4,183.6 295.8,182.8 297.2,182.1 298.6,181.3 300.0,180.5 301.4,179.8 302.8,179.0 304.2,178.2 305.6,177.4 307.0,176.6 308.4,175.8 309.8,175.0 311.2,174.2 312.6,173.4 314.0,172.6 315.4,171.8 316.8,171.0 318.2,170.2 319.6,169.3 321.0,168.5 322.4,167.7 323.8,166.8 325.2,166.0 326.6,165.1 328.0,164.3 329.4,163.4 330.8,162.5 332.2,161.7 333.6,160.8 335.0,159.9 336.4,159.0 337.8,158.1 339.2,157.2 340.6,156.3 342.0,155.4 343.4,154.5 344.8,153.6 346.2,152.7 347.6,151.8 349.0,150.9 350.4,149.9 351.8,149.0 353.2,148.1 354.6,147.1 356.0,146.2 357.4,145.2 358.8,144.3 360.2,143.3 361.6,142.4 363.0,141.4 364.4,140.4 365.8,139.5 367.2,138.5 368.6,137.5 370.0,136.5 371.4,135.5 372.8,134.5 374.2,133.5 375.6,132.5 377.0,131.5 378.4,130.5 379.8,129.5 381.2,128.4 382.6,127.4 384.0,126.4 385.4,125.3 386.8,124.3 388.2,123.2 389.6,122.2 391.0,121.1 392.4,120.1 393.8,119.0 395.2,117.9 396.6,116.9 398.0,115.8 399.4,114.7 400.8,113.6 402.2,112.5 403.6,111.4 405.0,110.3 406.4,109.2 407.8,108.1 409.2,107.0 410.6,105.9 412.0,104.8 413.4,103.7 414.8,102.5 416.2,101.4 417.6,100.3 419.0,99.1 420.4,98.0 421.8,96.8 423.2,95.7 424.6,94.5 426.0,93.3 427.4,92.2 428.8,91.0 430.2,89.8 431.6,88.6 433.0,87.4 434.4,86.2 435.8,85.1 437.2,83.9 438.6,82.6 440.0,81.4 441.4,80.2 442.8,79.0 444.2,77.8 445.6,76.6 447.0,75.3 448.4,74.1 449.8,72.9 451.2,71.6 452.6,70.4 454.0,69.1 455.4,67.8 456.8,66.6 458.2,65.3 459.6,64.0 461.0,62.8 462.4,61.5 463.8,60.2 465.2,58.9 466.6,57.6 468.0,56.3 469.4,55.0 470.8,53.7 472.2,52.4 473.6,51.1 475.0,49.8\"/><polyline fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.3\" points=\"55.0,248.0 475.0,49.8\"/><text x=\"430\" y=\"52\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y = 2x</text><text x=\"430\" y=\"86\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = x²</text></svg></span><p>Bestäm områdets area.</p>",
    "s": "<p>Skärningspunkterna ges av \\(x^2=2x\\Rightarrow x=0\\) eller \\(x=2\\). På intervallet ligger linjen över parabeln.</p><p>\\[A=\\int_0^2(2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=4-\\frac83=\\boxed{\\frac43}.\\]</p>",
    "familj": "area_linje_parabel"
  },
  {
    "id": "3.18",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En kontinuerlig slumpvariabel har täthetsfunktionen \\(f(x)=2x\\) för \\(0\\le x\\le1\\).</p><p>a) Kontrollera att funktionen är en täthetsfunktion.<br>b) Bestäm \\(P(0,2\\le X\\le0,6)\\).<br>c) Bestäm \\(P(X>0,8)\\).</p>",
    "s": "<p>a) \\(f\\ge0\\) och \\(\\int_0^12x\\,dx=[x^2]_0^1=1\\).</p><p>b) \\([x^2]_{0,2}^{0,6}=0,36-0,04=\\)<strong>0,32</strong>.</p><p>c) \\(1-P(X\\le0,8)=1-0,64=\\)<strong>0,36</strong>.</p>",
    "familj": "tathet_2x_e"
  },
  {
    "id": "3.19",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan \\(y=2\\) och \\(y=x\\) för \\(0\\le x\\le2\\) roteras kring x-axeln.</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"22\" x2=\"48.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"166.0\" y1=\"22\" x2=\"166.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"166.0\" y=\"249.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"284.0\" y1=\"22\" x2=\"284.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"284.0\" y=\"249.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"402.0\" y1=\"22\" x2=\"402.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"402.0\" y=\"249.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"48\" y1=\"232.0\" x2=\"402\" y2=\"232.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"48\" y1=\"162.0\" x2=\"402\" y2=\"162.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"40.0\" y=\"166.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"48\" y1=\"92.0\" x2=\"402\" y2=\"92.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"40.0\" y=\"96.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"48\" y1=\"22.0\" x2=\"402\" y2=\"22.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"40.0\" y=\"26.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><polygon points=\"48.0,232.0 48.0,92.0 284.0,92.0 284.0,232.0\" fill=\"#F6E8E5\" opacity=\"0.85\"/><polyline points=\"48.0,92.0 284.0,92.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"394\" y=\"38\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y=2</text></svg></span><p>Bestäm volymen av den kropp som motsvarar området mellan linjerna \\(y=2\\) och \\(y=x\\).</p>",
    "s": "<p><strong>Metod:</strong> Bestäm radien eller radierna vinkelrätt mot rotationsaxeln. Skriv sedan volymintegralen med skivor eller brickor.</p><p>Tvärsnittet är en bricka med yttre radie 2 och inre radie \\(x\\):</p><p>\\[V=\\pi\\int_0^2(4-x^2)dx=\\pi[4x-x^3/3]_0^2=\\frac{16\\pi}{3}.\\]</p><p><strong>\\(16\\pi/3\\).</strong></p>",
    "familj": "rotation_bricka"
  },
  {
    "id": "3.20",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna den geometriska arean mellan grafen och x-axeln.</p><p>a) \\(y=x-1\\), \\(0\\le x\\le3\\).<br>b) \\(y=2x-4\\), \\(0\\le x\\le4\\).<br>c) \\(y=\\sin x\\), \\(0\\le x\\le\\pi\\).</p>",
    "s": "<p>a) Dela vid \\(x=1\\): \\(\\int_0^1(1-x)dx+\\int_1^3(x-1)dx=\\frac12+2=\\)<strong>\\(\\frac52\\)</strong> a.e.</p><p>b) Dela vid \\(x=2\\): två trianglar med area 4 vardera, totalt <strong>8</strong> a.e.</p><p>c) \\(\\sin x\\ge0\\) på intervallet, så arean är <strong>2</strong> a.e.</p>",
    "familj": "proc_area_teckenbyte_1"
  },
  {
    "id": "3.21",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^2(3x^2+1)\\,dx\\)<br>b) \\(\\int_1^3(2x-4)\\,dx\\)<br>c) \\(\\int_{-1}^{1}x^2\\,dx\\)<br>d) \\(\\int_0^4\\sqrt{x}\\,dx\\)</p>",
    "s": "<p>a) \\([x^3+x]_0^2=8+2=\\boxed{10}\\).</p><p>b) \\([x^2-4x]_1^3=(-3)-(-3)=\\\\boxed{0}\\).</p><p>c) \\([x^3/3]_{-1}^1=\\boxed{2/3}\\).</p><p>d) \\([\\frac23x^{3/2}]_0^4=\\frac23\\cdot8=\\boxed{16/3}\\).</p>",
    "familj": "proc_bestamda_integraler_4"
  },
  {
    "id": "3.22",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion och kontrollera genom derivering.</p><p>a) \\(3x^2+4\\)<br>b) \\(2x^{-3}-5x\\)<br>c) \\(e^{2x}\\)<br>d) \\(\\cos(3x)\\)</p>",
    "s": "<p>a) <strong>\\(x^3+4x+C\\)</strong>.<br>b) <strong>\\(-x^{-2}-\\frac52x^2+C\\)</strong>.<br>c) <strong>\\(\\frac12e^{2x}+C\\)</strong>.<br>d) <strong>\\(\\frac13\\sin3x+C\\)</strong>. Derivering av respektive svar ger tillbaka integranden.</p>",
    "familj": "proc_primitiva_kedjeformer"
  },
  {
    "id": "3.23",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "1/1/0",
    "t": "<p>Grafen till \\(f\\) är styckvis linjär.</p><span class=\"fig\"><svg width=\"450\" height=\"235\" viewBox=\"0 0 450 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Styckvis linjär graf med hörn i minus ett noll, noll två, två noll och tre minus två\">\n<rect x=\"1\" y=\"1\" width=\"448\" height=\"233\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"128.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"115.8\" y1=\"25\" x2=\"115.8\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<text x=\"115.8\" y=\"128.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"176.7\" y1=\"25\" x2=\"176.7\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<line x1=\"237.5\" y1=\"25\" x2=\"237.5\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<text x=\"237.5\" y=\"128.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"298.3\" y1=\"25\" x2=\"298.3\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<text x=\"298.3\" y=\"128.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"359.2\" y1=\"25\" x2=\"359.2\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<text x=\"359.2\" y=\"128.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"420.0\" y1=\"25\" x2=\"420.0\" y2=\"200\" stroke=\"#D9E6E9\"/>\n<text x=\"420.0\" y=\"128.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"200.0\" x2=\"420\" y2=\"200.0\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"203.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"55\" y1=\"170.8\" x2=\"420\" y2=\"170.8\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"173.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"55\" y1=\"141.7\" x2=\"420\" y2=\"141.7\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"144.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"112.5\" x2=\"420\" y2=\"112.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"83.3\" x2=\"420\" y2=\"83.3\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"86.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"54.2\" x2=\"420\" y2=\"54.2\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"57.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"420\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"168.7\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"112.5\" x2=\"420\" y2=\"112.5\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"176.7\" y1=\"25\" x2=\"176.7\" y2=\"200\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polyline points=\"115.8,112.5 176.7,54.2 298.3,112.5 359.2,170.8\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.8\"/>\n<circle cx=\"115.8\" cy=\"112.5\" r=\"4\" fill=\"#268FA3\"/>\n<circle cx=\"176.7\" cy=\"54.2\" r=\"4\" fill=\"#268FA3\"/>\n<circle cx=\"298.3\" cy=\"112.5\" r=\"4\" fill=\"#268FA3\"/>\n<circle cx=\"359.2\" cy=\"170.8\" r=\"4\" fill=\"#268FA3\"/>\n</svg></span><p>Bestäm</p>\n<p>\\[\n\\int_{-1}^{3}f(x)\\,dx\n\\]</p>\n<p>utan att bestämma någon funktionsformel.</p>",
    "s": "<p>Integralen är den tecknade arean.</p>\n<p>Från \\(x=-1\\) till \\(x=2\\) finns en triangel ovanför x-axeln med bas \\(3\\) och höjd \\(2\\):</p>\n<p>\\[\nA_1=\\frac{3\\cdot2}{2}=3.\n\\]</p>\n<p>Från \\(x=2\\) till \\(x=3\\) finns en triangel under x-axeln med bas \\(1\\) och höjd \\(2\\). Den bidrar negativt:</p>\n<p>\\[\nA_2=-\\frac{1\\cdot2}{2}=-1.\n\\]</p>\n<p>Därför</p>\n<p><strong>\\[\n\\int_{-1}^{3}f(x)\\,dx=3-1=2.\n\\]</strong></p>",
    "familj": "integral_graf_tecknad_area"
  },
  {
    "id": "3.24",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En cyklists hastighet under \\(0\\le t\\le6\\) s modelleras av \\(v(t)=4+0,5t^2\\) m/s.</p><p>Hur långt färdas cyklisten under dessa 6 sekunder?</p>",
    "s": "<p><strong>Metod:</strong> En integral summerar en storhet per enhet, till exempel hastighet, flöde eller massa per meter. Kontrollera därför också enheten i svaret.</p><p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^6(4+0,5t^2)dt=[4t+t^3/6]_0^6=24+36=60.\\]</p><p><strong>60 m.</strong></p>",
    "familj": "integral_hastighet"
  },
  {
    "id": "3.25",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Ett inflöde \\(q(t)\\) mäts i liter per minut. Bestäm den tillförda volymen.</p><p>a) \\(q(t)=20\\), \\(0\\le t\\le8\\).<br>b) \\(q(t)=10+2t\\), \\(0\\le t\\le5\\).<br>c) \\(q(t)=30-t\\), \\(0\\le t\\le10\\).</p>",
    "s": "<p>a) <strong>160 liter</strong>.<br>b) \\(\\int_0^5(10+2t)dt=50+25=\\)<strong>75 liter</strong>.<br>c) \\(\\int_0^{10}(30-t)dt=300-50=\\)<strong>250 liter</strong>.</p>",
    "familj": "proc_integral_flode_1"
  },
  {
    "id": "3.26",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Området under \\(y=x\\) för \\(0\\le x\\le2\\) roteras ett varv kring x-axeln.</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"funktionsgraf\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"265.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"248.0\" x2=\"475\" y2=\"248.0\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"251.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"55\" y1=\"155.1\" x2=\"475\" y2=\"155.1\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"158.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"62.2\" x2=\"475\" y2=\"62.2\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"65.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"248.0\" x2=\"480\" y2=\"248.0\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"55.0\" y1=\"20\" x2=\"55.0\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><polygon points=\"55.0,248.0 57.3,247.0 59.7,245.9 62.0,244.9 64.3,243.9 66.7,242.8 69.0,241.8 71.3,240.8 73.7,239.7 76.0,238.7 78.3,237.7 80.7,236.6 83.0,235.6 85.3,234.6 87.7,233.5 90.0,232.5 92.3,231.5 94.7,230.4 97.0,229.4 99.3,228.4 101.7,227.4 104.0,226.3 106.3,225.3 108.7,224.3 111.0,223.2 113.3,222.2 115.7,221.2 118.0,220.1 120.3,219.1 122.7,218.1 125.0,217.0 127.3,216.0 129.7,215.0 132.0,213.9 134.3,212.9 136.7,211.9 139.0,210.8 141.3,209.8 143.7,208.8 146.0,207.7 148.3,206.7 150.7,205.7 153.0,204.6 155.3,203.6 157.7,202.6 160.0,201.5 162.3,200.5 164.7,199.5 167.0,198.4 169.3,197.4 171.7,196.4 174.0,195.3 176.3,194.3 178.7,193.3 181.0,192.2 183.3,191.2 185.7,190.2 188.0,189.2 190.3,188.1 192.7,187.1 195.0,186.1 197.3,185.0 199.7,184.0 202.0,183.0 204.3,181.9 206.7,180.9 209.0,179.9 211.3,178.8 213.7,177.8 216.0,176.8 218.3,175.7 220.7,174.7 223.0,173.7 225.3,172.6 227.7,171.6 230.0,170.6 232.3,169.5 234.7,168.5 237.0,167.5 239.3,166.4 241.7,165.4 244.0,164.4 246.3,163.3 248.7,162.3 251.0,161.3 253.3,160.2 255.7,159.2 258.0,158.2 260.3,157.1 262.7,156.1 265.0,155.1 267.3,154.1 269.7,153.0 272.0,152.0 274.3,151.0 276.7,149.9 279.0,148.9 281.3,147.9 283.7,146.8 286.0,145.8 288.3,144.8 290.7,143.7 293.0,142.7 295.3,141.7 297.7,140.6 300.0,139.6 302.3,138.6 304.7,137.5 307.0,136.5 309.3,135.5 311.7,134.4 314.0,133.4 316.3,132.4 318.7,131.3 321.0,130.3 323.3,129.3 325.7,128.2 328.0,127.2 330.3,126.2 332.7,125.1 335.0,124.1 337.3,123.1 339.7,122.0 342.0,121.0 344.3,120.0 346.7,118.9 349.0,117.9 351.3,116.9 353.7,115.9 356.0,114.8 358.3,113.8 360.7,112.8 363.0,111.7 365.3,110.7 367.7,109.7 370.0,108.6 372.3,107.6 374.7,106.6 377.0,105.5 379.3,104.5 381.7,103.5 384.0,102.4 386.3,101.4 388.7,100.4 391.0,99.3 393.3,98.3 395.7,97.3 398.0,96.2 400.3,95.2 402.7,94.2 405.0,93.1 407.3,92.1 409.7,91.1 412.0,90.0 414.3,89.0 416.7,88.0 419.0,86.9 421.3,85.9 423.7,84.9 426.0,83.8 428.3,82.8 430.7,81.8 433.0,80.8 435.3,79.7 437.7,78.7 440.0,77.7 442.3,76.6 444.7,75.6 447.0,74.6 449.3,73.5 451.7,72.5 454.0,71.5 456.3,70.4 458.7,69.4 461.0,68.4 463.3,67.3 465.7,66.3 468.0,65.3 470.3,64.2 472.7,63.2 475.0,62.2 475.0,248.0 472.7,248.0 470.3,248.0 468.0,248.0 465.7,248.0 463.3,248.0 461.0,248.0 458.7,248.0 456.3,248.0 454.0,248.0 451.7,248.0 449.3,248.0 447.0,248.0 444.7,248.0 442.3,248.0 440.0,248.0 437.7,248.0 435.3,248.0 433.0,248.0 430.7,248.0 428.3,248.0 426.0,248.0 423.7,248.0 421.3,248.0 419.0,248.0 416.7,248.0 414.3,248.0 412.0,248.0 409.7,248.0 407.3,248.0 405.0,248.0 402.7,248.0 400.3,248.0 398.0,248.0 395.7,248.0 393.3,248.0 391.0,248.0 388.7,248.0 386.3,248.0 384.0,248.0 381.7,248.0 379.3,248.0 377.0,248.0 374.7,248.0 372.3,248.0 370.0,248.0 367.7,248.0 365.3,248.0 363.0,248.0 360.7,248.0 358.3,248.0 356.0,248.0 353.7,248.0 351.3,248.0 349.0,248.0 346.7,248.0 344.3,248.0 342.0,248.0 339.7,248.0 337.3,248.0 335.0,248.0 332.7,248.0 330.3,248.0 328.0,248.0 325.7,248.0 323.3,248.0 321.0,248.0 318.7,248.0 316.3,248.0 314.0,248.0 311.7,248.0 309.3,248.0 307.0,248.0 304.7,248.0 302.3,248.0 300.0,248.0 297.7,248.0 295.3,248.0 293.0,248.0 290.7,248.0 288.3,248.0 286.0,248.0 283.7,248.0 281.3,248.0 279.0,248.0 276.7,248.0 274.3,248.0 272.0,248.0 269.7,248.0 267.3,248.0 265.0,248.0 262.7,248.0 260.3,248.0 258.0,248.0 255.7,248.0 253.3,248.0 251.0,248.0 248.7,248.0 246.3,248.0 244.0,248.0 241.7,248.0 239.3,248.0 237.0,248.0 234.7,248.0 232.3,248.0 230.0,248.0 227.7,248.0 225.3,248.0 223.0,248.0 220.7,248.0 218.3,248.0 216.0,248.0 213.7,248.0 211.3,248.0 209.0,248.0 206.7,248.0 204.3,248.0 202.0,248.0 199.7,248.0 197.3,248.0 195.0,248.0 192.7,248.0 190.3,248.0 188.0,248.0 185.7,248.0 183.3,248.0 181.0,248.0 178.7,248.0 176.3,248.0 174.0,248.0 171.7,248.0 169.3,248.0 167.0,248.0 164.7,248.0 162.3,248.0 160.0,248.0 157.7,248.0 155.3,248.0 153.0,248.0 150.7,248.0 148.3,248.0 146.0,248.0 143.7,248.0 141.3,248.0 139.0,248.0 136.7,248.0 134.3,248.0 132.0,248.0 129.7,248.0 127.3,248.0 125.0,248.0 122.7,248.0 120.3,248.0 118.0,248.0 115.7,248.0 113.3,248.0 111.0,248.0 108.7,248.0 106.3,248.0 104.0,248.0 101.7,248.0 99.3,248.0 97.0,248.0 94.7,248.0 92.3,248.0 90.0,248.0 87.7,248.0 85.3,248.0 83.0,248.0 80.7,248.0 78.3,248.0 76.0,248.0 73.7,248.0 71.3,248.0 69.0,248.0 66.7,248.0 64.3,248.0 62.0,248.0 59.7,248.0 57.3,248.0 55.0,248.0\" fill=\"#DCEFF2\" opacity=\"0.9\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"55.0,248.0 56.0,247.5 57.1,247.1 58.1,246.6 59.2,246.1 60.2,245.7 61.3,245.2 62.4,244.7 63.4,244.3 64.5,243.8 65.5,243.4 66.5,242.9 67.6,242.4 68.7,242.0 69.7,241.5 70.8,241.0 71.8,240.6 72.8,240.1 73.9,239.6 75.0,239.2 76.0,238.7 77.0,238.2 78.1,237.8 79.2,237.3 80.2,236.8 81.2,236.4 82.3,235.9 83.3,235.5 84.4,235.0 85.5,234.5 86.5,234.1 87.5,233.6 88.6,233.1 89.7,232.7 90.7,232.2 91.8,231.7 92.8,231.3 93.8,230.8 94.9,230.3 96.0,229.9 97.0,229.4 98.0,229.0 99.1,228.5 100.2,228.0 101.2,227.6 102.2,227.1 103.3,226.6 104.3,226.2 105.4,225.7 106.4,225.2 107.5,224.8 108.6,224.3 109.6,223.8 110.7,223.4 111.7,222.9 112.8,222.4 113.8,222.0 114.8,221.5 115.9,221.1 116.9,220.6 118.0,220.1 119.0,219.7 120.1,219.2 121.2,218.7 122.2,218.3 123.2,217.8 124.3,217.3 125.4,216.9 126.4,216.4 127.4,215.9 128.5,215.5 129.6,215.0 130.6,214.6 131.6,214.1 132.7,213.6 133.8,213.2 134.8,212.7 135.9,212.2 136.9,211.8 137.9,211.3 139.0,210.8 140.1,210.4 141.1,209.9 142.1,209.4 143.2,209.0 144.2,208.5 145.3,208.0 146.3,207.6 147.4,207.1 148.4,206.7 149.5,206.2 150.6,205.7 151.6,205.3 152.7,204.8 153.7,204.3 154.8,203.9 155.8,203.4 156.8,202.9 157.9,202.5 158.9,202.0 160.0,201.5 161.1,201.1 162.1,200.6 163.2,200.1 164.2,199.7 165.2,199.2 166.3,198.8 167.4,198.3 168.4,197.8 169.4,197.4 170.5,196.9 171.6,196.4 172.6,196.0 173.6,195.5 174.7,195.0 175.8,194.6 176.8,194.1 177.8,193.6 178.9,193.2 179.9,192.7 181.0,192.2 182.1,191.8 183.1,191.3 184.2,190.9 185.2,190.4 186.2,189.9 187.3,189.5 188.3,189.0 189.4,188.5 190.5,188.1 191.5,187.6 192.6,187.1 193.6,186.7 194.7,186.2 195.7,185.7 196.8,185.3 197.8,184.8 198.9,184.4 199.9,183.9 200.9,183.4 202.0,183.0 203.0,182.5 204.1,182.0 205.2,181.6 206.2,181.1 207.2,180.6 208.3,180.2 209.3,179.7 210.4,179.2 211.4,178.8 212.5,178.3 213.6,177.8 214.6,177.4 215.7,176.9 216.7,176.5 217.8,176.0 218.8,175.5 219.8,175.1 220.9,174.6 222.0,174.1 223.0,173.7 224.1,173.2 225.1,172.7 226.1,172.3 227.2,171.8 228.2,171.3 229.3,170.9 230.3,170.4 231.4,169.9 232.4,169.5 233.5,169.0 234.5,168.6 235.6,168.1 236.7,167.6 237.7,167.2 238.8,166.7 239.8,166.2 240.8,165.8 241.9,165.3 243.0,164.8 244.0,164.4 245.1,163.9 246.1,163.4 247.2,163.0 248.2,162.5 249.2,162.1 250.3,161.6 251.4,161.1 252.4,160.7 253.4,160.2 254.5,159.7 255.5,159.3 256.6,158.8 257.6,158.3 258.7,157.9 259.8,157.4 260.8,156.9 261.9,156.5 262.9,156.0 263.9,155.5 265.0,155.1 266.0,154.6 267.1,154.2 268.1,153.7 269.2,153.2 270.2,152.8 271.3,152.3 272.4,151.8 273.4,151.4 274.4,150.9 275.5,150.4 276.5,150.0 277.6,149.5 278.6,149.0 279.7,148.6 280.8,148.1 281.8,147.6 282.9,147.2 283.9,146.7 284.9,146.3 286.0,145.8 287.0,145.3 288.1,144.9 289.1,144.4 290.2,143.9 291.2,143.5 292.3,143.0 293.4,142.5 294.4,142.1 295.5,141.6 296.5,141.1 297.6,140.7 298.6,140.2 299.6,139.8 300.7,139.3 301.8,138.8 302.8,138.4 303.9,137.9 304.9,137.4 306.0,137.0 307.0,136.5 308.1,136.0 309.1,135.6 310.1,135.1 311.2,134.6 312.2,134.2 313.3,133.7 314.4,133.2 315.4,132.8 316.5,132.3 317.5,131.9 318.5,131.4 319.6,130.9 320.6,130.5 321.7,130.0 322.8,129.5 323.8,129.1 324.8,128.6 325.9,128.1 326.9,127.7 328.0,127.2 329.1,126.7 330.1,126.3 331.1,125.8 332.2,125.3 333.2,124.9 334.3,124.4 335.3,124.0 336.4,123.5 337.4,123.0 338.5,122.6 339.6,122.1 340.6,121.6 341.6,121.2 342.7,120.7 343.8,120.2 344.8,119.8 345.9,119.3 346.9,118.8 347.9,118.4 349.0,117.9 350.1,117.5 351.1,117.0 352.2,116.5 353.2,116.1 354.2,115.6 355.3,115.1 356.4,114.7 357.4,114.2 358.4,113.7 359.5,113.3 360.6,112.8 361.6,112.3 362.7,111.9 363.7,111.4 364.8,110.9 365.8,110.5 366.9,110.0 367.9,109.6 369.0,109.1 370.0,108.6 371.0,108.2 372.1,107.7 373.1,107.2 374.2,106.8 375.2,106.3 376.3,105.8 377.3,105.4 378.4,104.9 379.4,104.4 380.5,104.0 381.6,103.5 382.6,103.0 383.6,102.6 384.7,102.1 385.8,101.7 386.8,101.2 387.8,100.7 388.9,100.3 389.9,99.8 391.0,99.3 392.1,98.9 393.1,98.4 394.1,97.9 395.2,97.5 396.2,97.0 397.3,96.5 398.4,96.1 399.4,95.6 400.4,95.2 401.5,94.7 402.6,94.2 403.6,93.8 404.7,93.3 405.7,92.8 406.8,92.4 407.8,91.9 408.9,91.4 409.9,91.0 410.9,90.5 412.0,90.0 413.1,89.6 414.1,89.1 415.2,88.6 416.2,88.2 417.2,87.7 418.3,87.3 419.4,86.8 420.4,86.3 421.5,85.9 422.5,85.4 423.5,84.9 424.6,84.5 425.6,84.0 426.7,83.5 427.8,83.1 428.8,82.6 429.8,82.1 430.9,81.7 431.9,81.2 433.0,80.8 434.1,80.3 435.1,79.8 436.1,79.4 437.2,78.9 438.2,78.4 439.3,78.0 440.3,77.5 441.4,77.0 442.4,76.6 443.5,76.1 444.6,75.6 445.6,75.2 446.6,74.7 447.7,74.2 448.8,73.8 449.8,73.3 450.9,72.9 451.9,72.4 452.9,71.9 454.0,71.5 455.1,71.0 456.1,70.5 457.2,70.1 458.2,69.6 459.2,69.1 460.3,68.7 461.4,68.2 462.4,67.7 463.4,67.3 464.5,66.8 465.6,66.3 466.6,65.9 467.7,65.4 468.7,65.0 469.8,64.5 470.8,64.0 471.9,63.6 472.9,63.1 474.0,62.6 475.0,62.2\"/><text x=\"467\" y=\"43\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = x</text></svg></span><p>Bestäm rotationskroppens volym.</p>",
    "s": "<p>Skivmetoden ger</p><p>\\[V=\\pi\\int_0^2x^2dx=\\pi\\left[\\frac{x^3}{3}\\right]_0^2=\\boxed{\\frac{8\\pi}{3}}.\\]</p>",
    "familj": "rotation_linje_xaxel"
  },
  {
    "id": "3.27",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna exakt.</p><p>a) \\(\\int_0^1 e^x\\,dx\\)<br>b) \\(\\int_1^e\\frac1x\\,dx\\)<br>c) \\(\\int_0^{\\pi/2}\\cos x\\,dx\\)<br>d) \\(\\int_0^{\\pi}\\sin x\\,dx\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd en primitiv funktion och beräkna \\(F(b)-F(a)\\).</p><p>a) \\([e^x]_0^1=e-1=\\boxed{e-1}\\).</p><p>b) \\([\\ln x]_1^e=1-0=\\boxed{1}\\).</p><p>c) \\([\\sin x]_0^{\\pi/2}=1-0=\\boxed{1}\\).</p><p>d) En primitiv funktion till \\(\\sin x\\) är \\(-\\cos x\\): \\([-\\cos x]_0^\\pi=1-(-1)=\\boxed{2}\\).</p>",
    "familj": "proc_integraler_exp_ln_trig_3"
  },
  {
    "id": "3.28",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen visar \\(y=\\cos3x\\). Det skuggade området ligger mellan grafen och x-axeln.</p><span class=\"fig\"><svg width=\"460\" height=\"245\" viewBox=\"0 0 460 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf till y lika med cosinus 3x med området under x-axeln skuggat\">\n<rect x=\"1\" y=\"1\" width=\"458\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55\" y1=\"179.3\" x2=\"430\" y2=\"179.3\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"182.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"115.0\" x2=\"430\" y2=\"115.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"50.7\" x2=\"430\" y2=\"50.7\" stroke=\"#D9E6E9\"/>\n<text x=\"47\" y=\"53.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text>\n<line x1=\"148.8\" y1=\"25\" x2=\"148.8\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"148.8\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/6</text>\n<line x1=\"242.5\" y1=\"25\" x2=\"242.5\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"242.5\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/3</text>\n<line x1=\"336.2\" y1=\"25\" x2=\"336.2\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"336.2\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/2</text>\n<line x1=\"430.0\" y1=\"25\" x2=\"430.0\" y2=\"205\" stroke=\"#D9E6E9\"/>\n<text x=\"430.0\" y=\"132.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2π/3</text>\n<line x1=\"55\" y1=\"115.0\" x2=\"430\" y2=\"115.0\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"55\" y1=\"25\" x2=\"55\" y2=\"205\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polygon points=\"148.8,115.0 148.8,115.0 150.3,116.7 151.9,118.4 153.4,120.0 155.0,121.7 156.6,123.4 158.1,125.1 159.7,126.7 161.2,128.4 162.8,130.0 164.4,131.6 165.9,133.3 167.5,134.9 169.1,136.5 170.6,138.0 172.2,139.6 173.8,141.1 175.3,142.7 176.9,144.2 178.4,145.7 180.0,147.1 181.6,148.6 183.1,150.0 184.7,151.4 186.2,152.8 187.8,154.1 189.4,155.5 190.9,156.8 192.5,158.0 194.1,159.3 195.6,160.5 197.2,161.6 198.8,162.8 200.3,163.9 201.9,165.0 203.4,166.0 205.0,167.0 206.6,168.0 208.1,168.9 209.7,169.8 211.2,170.7 212.8,171.5 214.4,172.3 215.9,173.0 217.5,173.7 219.1,174.4 220.6,175.0 222.2,175.6 223.8,176.1 225.3,176.6 226.9,177.1 228.4,177.5 230.0,177.9 231.6,178.2 233.1,178.5 234.7,178.7 236.2,178.9 237.8,179.1 239.4,179.2 240.9,179.3 242.5,179.3 244.1,179.3 245.6,179.2 247.2,179.1 248.8,178.9 250.3,178.7 251.9,178.5 253.4,178.2 255.0,177.9 256.6,177.5 258.1,177.1 259.7,176.6 261.2,176.1 262.8,175.6 264.4,175.0 265.9,174.4 267.5,173.7 269.1,173.0 270.6,172.3 272.2,171.5 273.8,170.7 275.3,169.8 276.9,168.9 278.4,168.0 280.0,167.0 281.6,166.0 283.1,165.0 284.7,163.9 286.2,162.8 287.8,161.6 289.4,160.5 290.9,159.3 292.5,158.0 294.1,156.8 295.6,155.5 297.2,154.1 298.8,152.8 300.3,151.4 301.9,150.0 303.4,148.6 305.0,147.1 306.6,145.7 308.1,144.2 309.7,142.7 311.2,141.1 312.8,139.6 314.4,138.0 315.9,136.5 317.5,134.9 319.1,133.3 320.6,131.6 322.2,130.0 323.8,128.4 325.3,126.7 326.9,125.1 328.4,123.4 330.0,121.7 331.6,120.0 333.1,118.4 334.7,116.7 336.2,115.0 336.2,115.0\" fill=\"#DCEFF2\" stroke=\"none\"/>\n<polyline points=\"55.00,50.71 56.44,50.73 57.88,50.79 59.33,50.88 60.77,51.01 62.21,51.18 63.65,51.39 65.10,51.63 66.54,51.91 67.98,52.23 69.42,52.58 70.87,52.97 72.31,53.40 73.75,53.86 75.19,54.36 76.63,54.89 78.08,55.46 79.52,56.06 80.96,56.70 82.40,57.37 83.85,58.08 85.29,58.82 86.73,59.59 88.17,60.39 89.62,61.23 91.06,62.09 92.50,62.99 93.94,63.92 95.38,64.88 96.83,65.87 98.27,66.88 99.71,67.93 101.15,69.00 102.60,70.10 104.04,71.22 105.48,72.37 106.92,73.55 108.37,74.75 109.81,75.97 111.25,77.21 112.69,78.48 114.13,79.77 115.58,81.08 117.02,82.41 118.46,83.76 119.90,85.12 121.35,86.51 122.79,87.91 124.23,89.33 125.67,90.76 127.12,92.20 128.56,93.66 130.00,95.13 131.44,96.62 132.88,98.11 134.33,99.62 135.77,101.13 137.21,102.65 138.65,104.18 140.10,105.71 141.54,107.25 142.98,108.80 144.42,110.34 145.87,111.89 147.31,113.45 148.75,115.00 150.19,116.55 151.63,118.11 153.08,119.66 154.52,121.20 155.96,122.75 157.40,124.29 158.85,125.82 160.29,127.35 161.73,128.87 163.17,130.38 164.62,131.89 166.06,133.38 167.50,134.87 168.94,136.34 170.38,137.80 171.83,139.24 173.27,140.67 174.71,142.09 176.15,143.49 177.60,144.88 179.04,146.24 180.48,147.59 181.92,148.92 183.37,150.23 184.81,151.52 186.25,152.79 187.69,154.03 189.13,155.25 190.58,156.45 192.02,157.63 193.46,158.78 194.90,159.90 196.35,161.00 197.79,162.07 199.23,163.12 200.67,164.13 202.12,165.12 203.56,166.08 205.00,167.01 206.44,167.91 207.88,168.77 209.33,169.61 210.77,170.41 212.21,171.18 213.65,171.92 215.10,172.63 216.54,173.30 217.98,173.94 219.42,174.54 220.87,175.11 222.31,175.64 223.75,176.14 225.19,176.60 226.63,177.03 228.08,177.42 229.52,177.77 230.96,178.09 232.40,178.37 233.85,178.61 235.29,178.82 236.73,178.99 238.17,179.12 239.62,179.21 241.06,179.27 242.50,179.29 243.94,179.27 245.38,179.21 246.83,179.12 248.27,178.99 249.71,178.82 251.15,178.61 252.60,178.37 254.04,178.09 255.48,177.77 256.92,177.42 258.37,177.03 259.81,176.60 261.25,176.14 262.69,175.64 264.13,175.11 265.58,174.54 267.02,173.94 268.46,173.30 269.90,172.63 271.35,171.92 272.79,171.18 274.23,170.41 275.67,169.61 277.12,168.77 278.56,167.91 280.00,167.01 281.44,166.08 282.88,165.12 284.33,164.13 285.77,163.12 287.21,162.07 288.65,161.00 290.10,159.90 291.54,158.78 292.98,157.63 294.42,156.45 295.87,155.25 297.31,154.03 298.75,152.79 300.19,151.52 301.63,150.23 303.08,148.92 304.52,147.59 305.96,146.24 307.40,144.88 308.85,143.49 310.29,142.09 311.73,140.67 313.17,139.24 314.62,137.80 316.06,136.34 317.50,134.87 318.94,133.38 320.38,131.89 321.83,130.38 323.27,128.87 324.71,127.35 326.15,125.82 327.60,124.29 329.04,122.75 330.48,121.20 331.92,119.66 333.37,118.11 334.81,116.55 336.25,115.00 337.69,113.45 339.13,111.89 340.58,110.34 342.02,108.80 343.46,107.25 344.90,105.71 346.35,104.18 347.79,102.65 349.23,101.13 350.67,99.62 352.12,98.11 353.56,96.62 355.00,95.13 356.44,93.66 357.88,92.20 359.33,90.76 360.77,89.33 362.21,87.91 363.65,86.51 365.10,85.12 366.54,83.76 367.98,82.41 369.42,81.08 370.87,79.77 372.31,78.48 373.75,77.21 375.19,75.97 376.63,74.75 378.08,73.55 379.52,72.37 380.96,71.22 382.40,70.10 383.85,69.00 385.29,67.93 386.73,66.88 388.17,65.87 389.62,64.88 391.06,63.92 392.50,62.99 393.94,62.09 395.38,61.23 396.83,60.39 398.27,59.59 399.71,58.82 401.15,58.08 402.60,57.37 404.04,56.70 405.48,56.06 406.92,55.46 408.37,54.89 409.81,54.36 411.25,53.86 412.69,53.40 414.13,52.97 415.58,52.58 417.02,52.23 418.46,51.91 419.90,51.63 421.35,51.39 422.79,51.18 424.23,51.01 425.67,50.88 427.12,50.79 428.56,50.73 430.00,50.71\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<text x=\"99.8\" y=\"53.9\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y = cos 3x</text>\n</svg></span><p>Beräkna det skuggade områdets area exakt.</p>",
    "s": "<p>På intervallet \\(\\frac{\\pi}{6}\\le x\\le\\frac{\\pi}{2}\\) är \\(\\cos3x\\le0\\). Arean är därför</p>\n<p>\\[\nA=-\\int_{\\pi/6}^{\\pi/2}\\cos3x\\,dx.\n\\]</p>\n<p>En primitiv funktion är \\(\\frac13\\sin3x\\):</p>\n<p>\\[\nA=-\\left[\\frac13\\sin3x\\right]_{\\pi/6}^{\\pi/2}\n=-\\frac13\\left(\\sin\\frac{3\\pi}{2}-\\sin\\frac{\\pi}{2}\\right).\n\\]</p>\n<p>\\[\nA=-\\frac13(-1-1)=\\frac23.\n\\]</p>\n<p><strong>Arean är \\(\\frac23\\) areaenheter.</strong></p>",
    "familj": "kallmaterial_cos3x_area"
  },
  {
    "id": "3.29",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>För varje \\(a>0\\) ges täthetsfunktionen</p><p>\\[f_a(x)=ax^{a-1},\\qquad0&lt;x&lt;1.\\]</p><p>För ett visst värde på \\(a\\) gäller \\(P(X&lt;1/2)=1/8\\).</p><p>a) Bestäm \\(a\\).<br>b) Bestäm därefter \\(P(X>3/4)\\).<br>c) Bestäm det förväntade värdet \\(E(X)\\) med hjälp av \\(E(X)=\\int_0^1x f(x)dx\\).</p>",
    "s": "<p>För \\(0&lt;t&lt;1\\) får vi sannolikheten</p><p>\\[P(X&lt;t)=\\int_0^t ax^{a-1}dx=t^a.\\]</p><p>a) \\((1/2)^a=1/8=(1/2)^3\\Rightarrow\\boxed{a=3}\\).</p><p>b) \\(P(X&gt;3/4)=1-(3/4)^3=1-27/64=\\boxed{37/64}\\).</p><p>c) \\[E(X)=\\int_0^1x\\cdot3x^2dx=3\\int_0^1x^3dx=\\boxed{3/4}.\\]</p>",
    "familj": "tathetsfamilj_parameter_a"
  },
  {
    "id": "3.30",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Grafen \\(y=\\sin x\\) visas för en hel period.</p><span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"funktionsgraf\"><rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"55.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"160.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π/2</text><line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"265.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">π</text><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"370.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3π/2</text><line x1=\"475.0\" y1=\"25\" x2=\"475.0\" y2=\"248\" stroke=\"#D9E6E9\"/><text x=\"475.0\" y=\"266\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2π</text><line x1=\"55\" y1=\"222.3\" x2=\"475\" y2=\"222.3\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"225.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text><line x1=\"55\" y1=\"136.5\" x2=\"475\" y2=\"136.5\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"139.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text><line x1=\"55\" y1=\"50.7\" x2=\"475\" y2=\"50.7\" stroke=\"#D9E6E9\"/><text x=\"47\" y=\"53.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"136.5\" x2=\"480\" y2=\"136.5\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"55.0\" y1=\"20\" x2=\"55.0\" y2=\"248\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><polyline fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" points=\"55.0,136.5 56.0,135.2 57.1,133.8 58.1,132.5 59.2,131.1 60.2,129.8 61.3,128.4 62.4,127.1 63.4,125.8 64.5,124.4 65.5,123.1 66.5,121.8 67.6,120.4 68.7,119.1 69.7,117.8 70.8,116.5 71.8,115.2 72.8,113.9 73.9,112.6 74.9,111.3 76.0,110.0 77.0,108.7 78.1,107.4 79.1,106.2 80.2,104.9 81.2,103.7 82.3,102.4 83.3,101.2 84.4,100.0 85.5,98.8 86.5,97.6 87.5,96.4 88.6,95.2 89.7,94.0 90.7,92.8 91.8,91.7 92.8,90.5 93.8,89.4 94.9,88.3 95.9,87.2 97.0,86.1 98.0,85.0 99.1,83.9 100.1,82.9 101.2,81.8 102.2,80.8 103.3,79.8 104.3,78.8 105.4,77.8 106.4,76.8 107.5,75.9 108.5,74.9 109.6,74.0 110.7,73.1 111.7,72.2 112.8,71.3 113.8,70.4 114.8,69.6 115.9,68.7 116.9,67.9 118.0,67.1 119.0,66.3 120.1,65.6 121.2,64.8 122.2,64.1 123.2,63.4 124.3,62.7 125.3,62.0 126.4,61.3 127.5,60.7 128.5,60.1 129.6,59.5 130.6,58.9 131.6,58.3 132.7,57.8 133.8,57.3 134.8,56.8 135.8,56.3 136.9,55.8 137.9,55.4 139.0,54.9 140.0,54.5 141.1,54.1 142.2,53.8 143.2,53.4 144.2,53.1 145.3,52.8 146.3,52.5 147.4,52.2 148.4,52.0 149.5,51.8 150.5,51.6 151.6,51.4 152.6,51.2 153.7,51.1 154.8,51.0 155.8,50.9 156.8,50.8 157.9,50.8 158.9,50.7 160.0,50.7 161.0,50.7 162.1,50.8 163.1,50.8 164.2,50.9 165.2,51.0 166.3,51.1 167.3,51.2 168.4,51.4 169.4,51.6 170.5,51.8 171.6,52.0 172.6,52.2 173.6,52.5 174.7,52.8 175.8,53.1 176.8,53.4 177.8,53.8 178.9,54.1 179.9,54.5 181.0,54.9 182.1,55.4 183.1,55.8 184.1,56.3 185.2,56.8 186.2,57.3 187.3,57.8 188.3,58.3 189.4,58.9 190.4,59.5 191.5,60.1 192.5,60.7 193.6,61.3 194.7,62.0 195.7,62.7 196.8,63.4 197.8,64.1 198.8,64.8 199.9,65.6 200.9,66.3 202.0,67.1 203.0,67.9 204.1,68.7 205.2,69.6 206.2,70.4 207.2,71.3 208.3,72.2 209.3,73.1 210.4,74.0 211.4,74.9 212.5,75.9 213.5,76.8 214.6,77.8 215.7,78.8 216.7,79.8 217.8,80.8 218.8,81.8 219.8,82.9 220.9,83.9 221.9,85.0 223.0,86.1 224.0,87.2 225.1,88.3 226.1,89.4 227.2,90.5 228.2,91.7 229.3,92.8 230.3,94.0 231.4,95.2 232.4,96.4 233.5,97.6 234.5,98.8 235.6,100.0 236.6,101.2 237.7,102.4 238.7,103.7 239.8,104.9 240.8,106.2 241.9,107.4 242.9,108.7 244.0,110.0 245.0,111.3 246.1,112.6 247.1,113.9 248.2,115.2 249.2,116.5 250.3,117.8 251.3,119.1 252.4,120.4 253.4,121.8 254.5,123.1 255.5,124.4 256.6,125.8 257.6,127.1 258.7,128.4 259.8,129.8 260.8,131.1 261.8,132.5 262.9,133.8 263.9,135.2 265.0,136.5 266.0,137.8 267.1,139.2 268.1,140.5 269.2,141.9 270.2,143.2 271.3,144.6 272.3,145.9 273.4,147.2 274.4,148.6 275.5,149.9 276.5,151.2 277.6,152.6 278.6,153.9 279.7,155.2 280.8,156.5 281.8,157.8 282.8,159.1 283.9,160.4 284.9,161.7 286.0,163.0 287.1,164.3 288.1,165.6 289.1,166.8 290.2,168.1 291.2,169.3 292.3,170.6 293.3,171.8 294.4,173.0 295.4,174.2 296.5,175.4 297.6,176.6 298.6,177.8 299.6,179.0 300.7,180.2 301.8,181.3 302.8,182.5 303.8,183.6 304.9,184.7 305.9,185.8 307.0,186.9 308.1,188.0 309.1,189.1 310.1,190.1 311.2,191.2 312.2,192.2 313.3,193.2 314.3,194.2 315.4,195.2 316.4,196.2 317.5,197.1 318.6,198.1 319.6,199.0 320.6,199.9 321.7,200.8 322.8,201.7 323.8,202.6 324.9,203.4 325.9,204.3 326.9,205.1 328.0,205.9 329.0,206.7 330.1,207.4 331.2,208.2 332.2,208.9 333.2,209.6 334.3,210.3 335.4,211.0 336.4,211.7 337.4,212.3 338.5,212.9 339.5,213.5 340.6,214.1 341.7,214.7 342.7,215.2 343.8,215.7 344.8,216.2 345.9,216.7 346.9,217.2 347.9,217.6 349.0,218.1 350.0,218.5 351.1,218.9 352.2,219.2 353.2,219.6 354.2,219.9 355.3,220.2 356.4,220.5 357.4,220.8 358.4,221.0 359.5,221.2 360.5,221.4 361.6,221.6 362.6,221.8 363.7,221.9 364.8,222.0 365.8,222.1 366.9,222.2 367.9,222.2 368.9,222.3 370.0,222.3 371.0,222.3 372.1,222.2 373.1,222.2 374.2,222.1 375.2,222.0 376.3,221.9 377.3,221.8 378.4,221.6 379.4,221.4 380.5,221.2 381.5,221.0 382.6,220.8 383.6,220.5 384.7,220.2 385.8,219.9 386.8,219.6 387.8,219.2 388.9,218.9 389.9,218.5 391.0,218.1 392.0,217.6 393.1,217.2 394.1,216.7 395.2,216.2 396.2,215.7 397.3,215.2 398.3,214.7 399.4,214.1 400.4,213.5 401.5,212.9 402.5,212.3 403.6,211.7 404.6,211.0 405.7,210.3 406.7,209.6 407.8,208.9 408.8,208.2 409.9,207.4 410.9,206.7 412.0,205.9 413.0,205.1 414.1,204.3 415.2,203.4 416.2,202.6 417.2,201.7 418.3,200.8 419.3,199.9 420.4,199.0 421.4,198.1 422.5,197.1 423.5,196.2 424.6,195.2 425.6,194.2 426.7,193.2 427.7,192.2 428.8,191.2 429.8,190.1 430.9,189.1 431.9,188.0 433.0,186.9 434.0,185.8 435.1,184.7 436.2,183.6 437.2,182.5 438.2,181.3 439.3,180.2 440.3,179.0 441.4,177.8 442.4,176.6 443.5,175.4 444.5,174.2 445.6,173.0 446.6,171.8 447.7,170.6 448.7,169.3 449.8,168.1 450.8,166.8 451.9,165.6 452.9,164.3 454.0,163.0 455.0,161.7 456.1,160.4 457.1,159.1 458.2,157.8 459.2,156.5 460.3,155.2 461.3,153.9 462.4,152.6 463.4,151.2 464.5,149.9 465.5,148.6 466.6,147.2 467.6,145.9 468.7,144.6 469.7,143.2 470.8,141.9 471.8,140.5 472.9,139.2 473.9,137.8 475.0,136.5\"/><text x=\"467\" y=\"43\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = sin x</text></svg></span><p>a) Beräkna \\(\\int_0^{2\\pi}\\sin x\\,dx\\).<br>b) Bestäm den sammanlagda geometriska arean mellan grafen och x-axeln på samma intervall.<br>c) Förklara varför svaren skiljer sig.</p>",
    "s": "<p>a) \\([ -\\cos x]_0^{2\\pi}=-1-(-1)=\\boxed{0}\\).</p><p>b) Arean på \\([0,\\pi]\\) är 2 och på \\([\\pi,2\\pi]\\) är också 2 efter absolutbelopp. Total area: <strong>4</strong>.</p><p>c) Bestämd integral räknar area under x-axeln med negativt tecken, medan geometrisk area alltid är positiv.</p>",
    "familj": "sinus_signed_vs_area"
  },
  {
    "id": "3.31",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^2(3x^2+1)\\,dx\\)<br>b) \\(\\int_0^{\\pi/2}\\cos x\\,dx\\)<br>c) \\(\\int_1^e\\frac1x\\,dx\\)<br>d) \\(\\int_0^1e^x\\,dx\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först en primitiv funktion och sätt sedan in den övre och den undre gränsen.</p><p>a) \\(\\int(3x^2+1)dx=x^3+x\\), så \\([x^3+x]_0^2=8+2=\\boxed{10}\\).</p><p>b) \\(\\int\\cos x\\,dx=\\sin x\\), så \\([\\sin x]_0^{\\pi/2}=1-0=\\boxed{1}\\).</p><p>c) För \\(x>0\\) är \\(\\int\\frac1x dx=\\ln x\\), så \\([\\ln x]_1^e=1-0=\\boxed{1}\\).</p><p>d) \\([e^x]_0^1=e-1=\\boxed{e-1}\\).</p>",
    "familj": "integral_rutin_fyra"
  },
  {
    "id": "3.32",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Låt</p>\n<p>\\[\nf(x)=6x-x^2.\n\\]</p>\n<p>Två tal \\(a&lt;b\\) väljs så att</p>\n<p>\\[\n\\int_a^b f(x)\\,dx=0.\n\\]</p>\n<p>Bestäm det största möjliga värdet av intervallets längd \\(b-a\\). Svara exakt.</p>",
    "s": "<p>Skriv om funktionen:</p>\n<p>\\[\nf(x)=9-(x-3)^2.\n\\]</p>\n<p>Låt intervallets mittpunkt vara \\(m\\) och längden vara \\(d=b-a\\). Sätt \\(x=m+u\\), där \\(-d/2\\le u\\le d/2\\).</p>\n<p>Då är</p>\n<p>\\[\n0=\\int_{-d/2}^{d/2}\\left[9-(m-3+u)^2\\right]du.\n\\]</p>\n<p>Den linjära termen i \\(u\\) försvinner över det symmetriska intervallet. Därför</p>\n<p>\\[\n0=d\\left(9-(m-3)^2-\\frac{d^2}{12}\\right).\n\\]</p>\n<p>Eftersom \\(d&gt;0\\):</p>\n<p>\\[\n(m-3)^2+\\frac{d^2}{12}=9.\n\\]</p>\n<p>För att maximera \\(d\\) ska \\((m-3)^2\\) vara så liten som möjligt, alltså \\(m=3\\).</p>\n<p>\\[\n\\frac{d^2}{12}=9\n\\Rightarrow d^2=108\n\\Rightarrow d=6\\sqrt3.\n\\]</p>\n<p><strong>Det största möjliga värdet är \\(b-a=6\\sqrt3\\).</strong></p>",
    "familj": "integral_intervall_maxbredd_a"
  },
  {
    "id": "3.33",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^{\\pi}\\cos(2x)\\,dx\\)<br>b) \\(\\int_0^{\\pi/2}2\\sin(2x)\\,dx\\)<br>c) \\(\\int_0^{\\pi/4}4\\cos(4x)\\,dx\\)<br>d) \\(\\int_0^{\\pi/6}6\\sin(3x)\\,dx\\)</p>",
    "s": "<p>a) Primitiv \\(\\frac12\\sin2x\\): <strong>0</strong>.</p><p>b) Primitiv \\(-\\cos2x\\): \\(-\\cos\\pi)-(-\\cos0)=1-(-1)=\\\\boxed{2}\\).</p><p>c) Primitiv \\(\\sin4x\\): <strong>\\(1\\)</strong>.</p><p>d) Primitiv \\(-2\\cos3x\\): \\(-2\\cos\\frac\\pi2)-(-2\\cos0)=\\\\boxed{2}\\).</p>",
    "familj": "proc_integraler_trig_kedja_2"
  },
  {
    "id": "3.34",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>För ett reellt tal \\(a\\) definieras</p><p>\\[F(a)=\\int_a^{a+2}(4-x^2)\\,dx.\\]</p><p>Bestäm det värde på \\(a\\) som maximerar \\(F(a)\\), och bestäm maxvärdet.</p>",
    "s": "<p>Det går att derivera integralen utan att först räkna ut hela integralen. När båda gränserna flyttas med samma hastighet får vi</p><p>\\[F'(a)=(4-(a+2)^2)-(4-a^2)=-4a-4.\\]</p><p>\\(F'(a)=0\\Rightarrow a=-1\\). Derivatan är positiv före och negativ efter, alltså maximum.</p><p>\\[F(-1)=\\int_{-1}^{1}(4-x^2)dx=8-\\frac23=\\boxed{22/3}.\\]</p><p><strong>Maximum fås för \\(\\boxed{a=-1}\\).</strong></p>",
    "familj": "glidande_integral_max"
  },
  {
    "id": "3.35",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion \\(F\\) till \\(f\\).</p>\n<p>a) \\(f(x)=6x^2-4x+3\\)<br>\nb) \\(f(x)=5e^{2x}\\)<br>\nc) \\(f(x)=4\\cos3x\\)<br>\nd) \\(f(x)=\\dfrac3x\\), \\(x>0\\)</p>",
    "s": "<p>a)</p>\n<p>\\[\nF(x)=2x^3-2x^2+3x+C.\n\\]</p>\n<p>b)</p>\n<p>\\[\nF(x)=\\frac52e^{2x}+C.\n\\]</p>\n<p>c)</p>\n<p>\\[\nF(x)=\\frac43\\sin3x+C.\n\\]</p>\n<p>d)</p>\n<p>\\[\nF(x)=3\\ln x+C.\n\\]</p>",
    "familj": "primitiva_rutin_fyra_delar"
  },
  {
    "id": "3.36",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna integralerna exakt.</p><p>a) \\(\\int_0^2(3x^2+1)\\,dx\\)<br>b) \\(\\int_0^{\\pi/2}\\cos x\\,dx\\)<br>c) \\(\\int_1^e\\frac1x\\,dx\\)<br>d) \\(\\int_0^1 2e^{2x}\\,dx\\)</p>",
    "s": "<p>a) \\([x^3+x]_0^2=8+2=\\)<strong>10</strong>.</p><p>b) \\([\\sin x]_0^{\\pi/2}=\\)<strong>1</strong>.</p><p>c) \\([\\ln x]_1^e=1-0=\\)<strong>1</strong>.</p><p>d) En primitiv funktion är \\(e^{2x}\\), alltså \\([e^{2x}]_0^1=\\)<strong>\\(e^2-1\\)</strong>.</p>",
    "familj": "integral_rutin4"
  },
  {
    "id": "3.37",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En kontinuerlig slumpvariabel \\(X\\) har täthetsfunktionen</p>\n<p>\\[\nf(x)=kx,\\qquad 0\\le x\\le2,\n\\]</p>\n<p>och \\(f(x)=0\\) utanför intervallet.</p>\n<p>a) Bestäm konstanten \\(k\\).<br>\nb) Bestäm \\(P(X&gt;1,5)\\).</p>",
    "s": "<p>a) En täthetsfunktion ska ha total area 1:</p>\n<p>\\[\n\\int_0^2kx\\,dx=1.\n\\]</p>\n<p>\\[\nk\\left[\\frac{x^2}{2}\\right]_0^2\n=2k=1\n\\Rightarrow\nk=\\frac12.\n\\]</p>\n<p>b)</p>\n<p>\\[\nP(X&gt;1,5)=\\int_{1,5}^{2}\\frac12x\\,dx\n=\\left[\\frac{x^2}{4}\\right]_{1,5}^{2}.\n\\]</p>\n<p>\\[\n=1-\\frac{2,25}{4}\n=\\frac7{16}\n=0,4375.\n\\]</p>\n<p><strong>\\(P(X&gt;1,5)=0,4375\\), alltså 43,75 %.</strong></p>",
    "familj": "tathetsfunktion_bestam_k"
  },
  {
    "id": "3.38",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En sfär har radien \\(5,0\\) cm. En \\(2,0\\) cm tjock bit skärs av från ena sidan av sfären enligt figuren.</p><span class=\"fig\"><svg width=\"450\" height=\"260\" viewBox=\"0 0 450 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tvärsnitt av en sfär med radie 5 cm där en avskuren del med tjocklek 2 cm är markerad\">\n<rect x=\"1\" y=\"1\" width=\"448\" height=\"258\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n\n<line x1=\"55\" y1=\"130\" x2=\"385\" y2=\"130\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<line x1=\"200\" y1=\"32\" x2=\"200\" y2=\"228\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<circle cx=\"200\" cy=\"130\" r=\"82\" fill=\"#F4F8F9\" stroke=\"#2B2527\" stroke-width=\"2\"/>\n<path d=\"M 249.2 64.4 A 82 82 0 0 1 249.2 195.6 L 249.2 64.4 Z\" fill=\"#DCEFF2\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"249.2\" y1=\"64.4\" x2=\"249.2\" y2=\"195.6\" stroke=\"#268FA3\" stroke-width=\"1.8\"/>\n<line x1=\"249.2\" y1=\"222\" x2=\"282.0\" y2=\"222\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"249.2\" y1=\"216\" x2=\"249.2\" y2=\"228\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<line x1=\"282.0\" y1=\"216\" x2=\"282.0\" y2=\"228\" stroke=\"#268FA3\" stroke-width=\"1.5\"/>\n<text x=\"265.6\" y=\"244\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">2 cm</text>\n<text x=\"192\" y=\"120\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">R = 5 cm</text>\n\n</svg></span><p>Bestäm den avskurna bitens volym med hjälp av en integral. Svara exakt och med en decimal.</p>",
    "s": "<p>I ett tvärsnitt kan sfären beskrivas av</p>\n<p>\\[\nx^2+y^2=25.\n\\]</p>\n<p>Den avskurna delen är 2 cm tjock, så den sträcker sig från \\(x=3\\) till \\(x=5\\). Då</p>\n<p>\\[\ny^2=25-x^2.\n\\]</p>\n<p>Vid rotation kring x-axeln blir tvärsnittsarean \\(\\pi y^2=\\pi(25-x^2)\\). Alltså</p>\n<p>\\[\nV=\\pi\\int_3^5(25-x^2)\\,dx.\n\\]</p>\n<p>\\[\nV=\\pi\\left[25x-\\frac{x^3}{3}\\right]_3^5\n=\\frac{52\\pi}{3}.\n\\]</p>\n<p><strong>\\[\nV=\\frac{52\\pi}{3}\\text{ cm}^3\\approx 54,5\\text{ cm}^3.\n\\]</strong></p>",
    "familj": "rotationsvolym_avskuren_kula_a"
  },
  {
    "id": "3.39",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm arean mellan grafen och x-axeln.</p><p>a) \\(y=2x+2\\), \\(0\\le x\\le3\\).<br>b) \\(y=4-x^2\\), \\(0\\le x\\le2\\).<br>c) \\(y=e^x\\), \\(0\\le x\\le1\\).</p>",
    "s": "<p>Funktionerna är icke-negativa på intervallen.</p><p>a) \\(\\int_0^3(2x+2)dx=[x^2+2x]_0^3=\\boxed{15}\\).</p><p>b) \\(\\int_0^2(4-x^2)dx=[4x-x^3/3]_0^2=8-8/3=\\boxed{16/3}\\).</p><p>c) \\(\\int_0^1e^x dx=\\boxed{e-1}\\).</p>",
    "familj": "proc_area_under_kurva_3"
  },
  {
    "id": "3.40",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Grafen är linjär mellan de markerade punkterna.</p><span class=\"fig\"><svg width=\"470\" height=\"260\" viewBox=\"0 0 470 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Styckvis linjär graf med markerade brytpunkter\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"258\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><g stroke=\"#E8ECEF\"><line x1=\"55\" y1=\"25\" x2=\"55\" y2=\"225\"/><line x1=\"100\" y1=\"25\" x2=\"100\" y2=\"225\"/><line x1=\"145\" y1=\"25\" x2=\"145\" y2=\"225\"/><line x1=\"190\" y1=\"25\" x2=\"190\" y2=\"225\"/><line x1=\"235\" y1=\"25\" x2=\"235\" y2=\"225\"/><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"225\"/><line x1=\"325\" y1=\"25\" x2=\"325\" y2=\"225\"/><line x1=\"370\" y1=\"25\" x2=\"370\" y2=\"225\"/><line x1=\"415\" y1=\"25\" x2=\"415\" y2=\"225\"/><line x1=\"55\" y1=\"225\" x2=\"415\" y2=\"225\"/><line x1=\"55\" y1=\"200\" x2=\"415\" y2=\"200\"/><line x1=\"55\" y1=\"175\" x2=\"415\" y2=\"175\"/><line x1=\"55\" y1=\"150\" x2=\"415\" y2=\"150\"/><line x1=\"55\" y1=\"125\" x2=\"415\" y2=\"125\"/><line x1=\"55\" y1=\"100\" x2=\"415\" y2=\"100\"/><line x1=\"55\" y1=\"75\" x2=\"415\" y2=\"75\"/><line x1=\"55\" y1=\"50\" x2=\"415\" y2=\"50\"/><line x1=\"55\" y1=\"25\" x2=\"415\" y2=\"25\"/></g><line x1=\"55\" y1=\"125\" x2=\"415\" y2=\"125\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"55\" y1=\"25\" x2=\"55\" y2=\"225\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55,125 145,75 280,175 415,100\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><text x=\"145\" y=\"64\" font-family=\"sans-serif\" font-size=\"11\">(2,2)</text><text x=\"280\" y=\"192\" font-family=\"sans-serif\" font-size=\"11\">(5,-2)</text><text x=\"405\" y=\"92\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">(8,1)</text><text x=\"405\" y=\"117\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"64\" y=\"38\" font-family=\"sans-serif\" font-size=\"11\">f(x)</text></svg></span><p>a) Bestäm \\(\\int_0^8 f(x)\\,dx\\) med hjälp av geometriska areor.<br>b) Bestäm den sammanlagda geometriska arean mellan grafen och x-axeln.</p>",
    "s": "<p>Mellan 0 och 2 fås en triangel: area 2. Mellan 2 och 5 går linjen från 2 till −2; positiva och negativa arean tar ut varandra. Mellan 5 och 8 går från −2 till 1 och skär x-axeln vid x=7.</p><p>Signerad area där: negativ triangel \\(-2\\) och positiv triangel \\(+0,5\\). Totalt</p><p>a) \\(2+0-2+0,5=\\boxed{0,5}\\).</p><p>b) geometrisk area \\(2+1,5+1,5+2+0,5=\\boxed{7,5}\\).</p>",
    "familj": "integral_graf_geometrisk_e_svg"
  },
  {
    "id": "3.41",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm \\(F(x)\\) om \\(F'\\) och ett funktionsvärde är givna.</p><p>a) \\(F'(x)=2x\\), \\(F(0)=3\\).<br>b) \\(F'(x)=3x^2\\), \\(F(1)=5\\).<br>c) \\(F'(x)=e^x\\), \\(F(0)=0\\).<br>d) \\(F'(x)=\\cos x\\), \\(F(\\pi/2)=4\\).</p>",
    "s": "<p>a) \\(F=x^2+C\\), \\(C=3\\): <strong>\\(F=x^2+3\\)</strong>.<br>b) \\(F=x^3+C\\), \\(1+C=5\\): <strong>\\(F=x^3+4\\)</strong>.<br>c) \\(F=e^x+C\\), \\(1+C=0\\): <strong>\\(F=e^x-1\\)</strong>.<br>d) \\(F=\\sin x+C\\), \\(1+C=4\\): <strong>\\(F=\\sin x+3\\)</strong>.</p>",
    "familj": "proc_primitiva_begynnelsevillkor"
  },
  {
    "id": "3.42",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En vas modelleras som rotationskroppen som fås när området mellan</p><p>\\[y_{yttre}=1+\\sqrt{x},\\qquad y_{inre}=\\frac12+\\frac{x}{4},\\qquad0\\le x\\le4\\]</p><p>roteras kring x-axeln. Bestäm vasmaterialets volym exakt.</p>",
    "s": "<p>Volymen av materialet är skillnaden mellan yttre och inre skivor:</p><p>\\[V=\\pi\\int_0^4\\left((1+\\sqrt x)^2-\\left(\\frac12+\\frac x4\\right)^2\\right)dx.\\]</p><p>Utveckla:</p><p>\\[(1+\\sqrt x)^2=1+2\\sqrt x+x,\\quad\\left(\\frac12+\\frac x4\\right)^2=\\frac14+\\frac x4+\\frac{x^2}{16}.\\]</p><p>Integranden blir \\(3/4+2\\sqrt x+3x/4-x^2/16\\).</p><p>Integrering 0 till 4 ger \\(3+32/3+6-4/3=55/3\\).</p><p><strong>\\(\\boxed{V=55\\pi/3}\\)</strong> volymenheter.</p>",
    "familj": "vas_rotationsvolym_tva_radier_a"
  },
  {
    "id": "3.43",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^2 3x^2\\,dx\\)<br>b) \\(\\int_1^3(2x+1)\\,dx\\)<br>c) \\(\\int_0^1 e^x\\,dx\\)<br>d) \\(\\int_0^{\\pi/2}\\cos x\\,dx\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm en primitiv funktion och använd \\(\\int_a^b f(x)dx=F(b)-F(a)\\).</p><p>a) \\([x^3]_0^2=8-0=\\boxed{8}\\).</p><p>b) \\([x^2+x]_1^3=(9+3)-(1+1)=\\boxed{10}\\).</p><p>c) \\([e^x]_0^1=e-1=\\boxed{e-1}\\).</p><p>d) \\([\\sin x]_0^{\\pi/2}=1-0=\\boxed{1}\\).</p>",
    "familj": "proc_integral_bestamd_1"
  },
  {
    "id": "3.44",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För \\(a&lt;b\\) definieras</p><p>\\[I(a,b)=\\int_a^b(9-x^2)\\,dx.\\]</p><p>Bestäm den största möjliga längden \\(b-a\\) om \\(I(a,b)=0\\). Motivera varför din lösning ger den största längden.</p>",
    "s": "<p>Villkoret \\(I(a,b)=0\\) ger</p><p>\\[9(b-a)-\\frac{b^3-a^3}{3}=0.\\]</p><p>Eftersom \\(b>a\\) kan vi dividera med \\(b-a\\):</p><p>\\[27=a^2+ab+b^2.\\]</p><p>Sätt mittpunkten \\(m=(a+b)/2\\) och längden \\(d=b-a\\). Då är \\(a=m-d/2\\) och \\(b=m+d/2\\), vilket ger</p><p>\\[27=3m^2+\\frac{d^2}{4}.\\]</p><p>Alltså \\(d^2=108-12m^2\\), som blir störst när \\(m=0\\). Då</p><p>\\[d=\\sqrt{108}=\\boxed{6\\sqrt3}.\\]</p><p>Det största intervallet är alltså symmetriskt kring origo, med \\(a=-3\\sqrt3\\) och \\(b=3\\sqrt3\\).</p>",
    "familj": "integral_noll_langsta_intervall_a"
  },
  {
    "id": "3.45",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm den geometriska arean mellan grafen \\(y=x-2\\), x-axeln och linjerna \\(x=0\\) och \\(x=5\\).</p>",
    "s": "<p>Grafen skär x-axeln vid \\(x=2\\). Därför måste arean delas upp:</p><p>\\[A=-\\int_0^2(x-2)dx+\\int_2^5(x-2)dx.\\]</p><p>Första delen är en triangel med area 2. Andra delen är en triangel med bas 3 och höjd 3, area \\(9/2\\).</p><p><strong>\\(A=2+9/2=\\boxed{13/2}\\)</strong>.</p>",
    "familj": "proc_geometrisk_area_tecken_2"
  },
  {
    "id": "3.46",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En reservoar innehåller från början 120 m³ vatten. Skillnaden mellan inflödet och utflödet är</p><p>\\[q(t)=3t-6\\quad\\text{m}^3/\\text{h},\\qquad0\\le t\\le8.\\]</p><p>a) När är vattenmängden som minst?<br>b) Hur mycket vatten finns då?<br>c) Hur mycket vatten finns efter 8 timmar?</p>",
    "s": "<p>Vattenmängden är \\(V(t)=120+\\int_0^t(3u-6)du=120+1,5t^2-6t\\).</p><p>a) Minimum när \\(V'(t)=q(t)=0\\Rightarrow t=2\\) h.</p><p>b) \\(V(2)=120+6-12=\\boxed{114\\text{ m}^3}\\).</p><p>c) \\(V(8)=120+96-48=\\boxed{168\\text{ m}^3}\\).</p>",
    "familj": "reservoar_nettoflode_c"
  },
  {
    "id": "3.47",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan kurvan \\(y=x^2\\) och linjen \\(y=4\\) roteras kring linjen \\(y=4\\).</p>\n<span class=\"fig\"><svg width=\"470\" height=\"300\" viewBox=\"0 0 470 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Parabel y lika med x kvadrat och linjen y lika med 4 med området mellan dem markerat\">\n<rect x=\"1\" y=\"1\" width=\"468\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"93.5\" y1=\"35\" x2=\"93.5\" y2=\"250\"/><line x1=\"170.5\" y1=\"35\" x2=\"170.5\" y2=\"250\"/><line x1=\"247.5\" y1=\"35\" x2=\"247.5\" y2=\"250\"/><line x1=\"324.5\" y1=\"35\" x2=\"324.5\" y2=\"250\"/><line x1=\"401.5\" y1=\"35\" x2=\"401.5\" y2=\"250\"/><line x1=\"55\" y1=\"237.83018867924528\" x2=\"440\" y2=\"237.83018867924528\"/><line x1=\"55\" y1=\"197.2641509433962\" x2=\"440\" y2=\"197.2641509433962\"/><line x1=\"55\" y1=\"156.69811320754718\" x2=\"440\" y2=\"156.69811320754718\"/><line x1=\"55\" y1=\"116.13207547169813\" x2=\"440\" y2=\"116.13207547169813\"/><line x1=\"55\" y1=\"75.56603773584905\" x2=\"440\" y2=\"75.56603773584905\"/></g>\n<line x1=\"55\" y1=\"237.83018867924528\" x2=\"447\" y2=\"237.83018867924528\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"247.5\" y1=\"255\" x2=\"247.5\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<polygon points=\"93.5,75.56603773584905 401.5,75.56603773584905 401.5,75.6 399.3,80.2 397.1,84.7 394.9,89.2 392.7,93.6 390.5,97.9 388.3,102.2 386.1,106.4 383.9,110.5 381.7,114.6 379.5,118.6 377.3,122.6 375.1,126.4 372.9,130.2 370.7,134.0 368.5,137.7 366.3,141.3 364.1,144.8 361.9,148.3 359.7,151.7 357.5,155.0 355.3,158.3 353.1,161.5 350.9,164.7 348.7,167.8 346.5,170.8 344.3,173.7 342.1,176.6 339.9,179.4 337.7,182.2 335.5,184.8 333.3,187.5 331.1,190.0 328.9,192.5 326.7,194.9 324.5,197.3 322.3,199.5 320.1,201.8 317.9,203.9 315.7,206.0 313.5,208.0 311.3,210.0 309.1,211.9 306.9,213.7 304.7,215.4 302.5,217.1 300.3,218.8 298.1,220.3 295.9,221.8 293.7,223.2 291.5,224.6 289.3,225.9 287.1,227.1 284.9,228.3 282.7,229.4 280.5,230.4 278.3,231.3 276.1,232.2 273.9,233.1 271.7,233.8 269.5,234.5 267.3,235.1 265.1,235.7 262.9,236.2 260.7,236.6 258.5,237.0 256.3,237.3 254.1,237.5 251.9,237.7 249.7,237.8 247.5,237.8 245.3,237.8 243.1,237.7 240.9,237.5 238.7,237.3 236.5,237.0 234.3,236.6 232.1,236.2 229.9,235.7 227.7,235.1 225.5,234.5 223.3,233.8 221.1,233.1 218.9,232.2 216.7,231.3 214.5,230.4 212.3,229.4 210.1,228.3 207.9,227.1 205.7,225.9 203.5,224.6 201.3,223.2 199.1,221.8 196.9,220.3 194.7,218.8 192.5,217.1 190.3,215.4 188.1,213.7 185.9,211.9 183.7,210.0 181.5,208.0 179.3,206.0 177.1,203.9 174.9,201.8 172.7,199.5 170.5,197.3 168.3,194.9 166.1,192.5 163.9,190.0 161.7,187.5 159.5,184.8 157.3,182.2 155.1,179.4 152.9,176.6 150.7,173.7 148.5,170.8 146.3,167.8 144.1,164.7 141.9,161.5 139.7,158.3 137.5,155.0 135.3,151.7 133.1,148.3 130.9,144.8 128.7,141.3 126.5,137.7 124.3,134.0 122.1,130.2 119.9,126.4 117.7,122.6 115.5,118.6 113.3,114.6 111.1,110.5 108.9,106.4 106.7,102.2 104.5,97.9 102.3,93.6 100.1,89.2 97.9,84.7 95.7,80.2 93.5,75.6\" fill=\"#F3E1DE\" opacity=\"0.8\"/>\n<line x1=\"70.4\" y1=\"75.56603773584905\" x2=\"424.59999999999997\" y2=\"75.56603773584905\" stroke=\"#476582\" stroke-width=\"2.5\"/><text x=\"324.5\" y=\"65.56603773584905\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#476582\">y = 4 (rotationsaxel)</text>\n<polyline points=\"93.5,75.6 95.7,80.2 97.9,84.7 100.1,89.2 102.3,93.6 104.5,97.9 106.7,102.2 108.9,106.4 111.1,110.5 113.3,114.6 115.5,118.6 117.7,122.6 119.9,126.4 122.1,130.2 124.3,134.0 126.5,137.7 128.7,141.3 130.9,144.8 133.1,148.3 135.3,151.7 137.5,155.0 139.7,158.3 141.9,161.5 144.1,164.7 146.3,167.8 148.5,170.8 150.7,173.7 152.9,176.6 155.1,179.4 157.3,182.2 159.5,184.8 161.7,187.5 163.9,190.0 166.1,192.5 168.3,194.9 170.5,197.3 172.7,199.5 174.9,201.8 177.1,203.9 179.3,206.0 181.5,208.0 183.7,210.0 185.9,211.9 188.1,213.7 190.3,215.4 192.5,217.1 194.7,218.8 196.9,220.3 199.1,221.8 201.3,223.2 203.5,224.6 205.7,225.9 207.9,227.1 210.1,228.3 212.3,229.4 214.5,230.4 216.7,231.3 218.9,232.2 221.1,233.1 223.3,233.8 225.5,234.5 227.7,235.1 229.9,235.7 232.1,236.2 234.3,236.6 236.5,237.0 238.7,237.3 240.9,237.5 243.1,237.7 245.3,237.8 247.5,237.8 249.7,237.8 251.9,237.7 254.1,237.5 256.3,237.3 258.5,237.0 260.7,236.6 262.9,236.2 265.1,235.7 267.3,235.1 269.5,234.5 271.7,233.8 273.9,233.1 276.1,232.2 278.3,231.3 280.5,230.4 282.7,229.4 284.9,228.3 287.1,227.1 289.3,225.9 291.5,224.6 293.7,223.2 295.9,221.8 298.1,220.3 300.3,218.8 302.5,217.1 304.7,215.4 306.9,213.7 309.1,211.9 311.3,210.0 313.5,208.0 315.7,206.0 317.9,203.9 320.1,201.8 322.3,199.5 324.5,197.3 326.7,194.9 328.9,192.5 331.1,190.0 333.3,187.5 335.5,184.8 337.7,182.2 339.9,179.4 342.1,176.6 344.3,173.7 346.5,170.8 348.7,167.8 350.9,164.7 353.1,161.5 355.3,158.3 357.5,155.0 359.7,151.7 361.9,148.3 364.1,144.8 366.3,141.3 368.5,137.7 370.7,134.0 372.9,130.2 375.1,126.4 377.3,122.6 379.5,118.6 381.7,114.6 383.9,110.5 386.1,106.4 388.3,102.2 390.5,97.9 392.7,93.6 394.9,89.2 397.1,84.7 399.3,80.2 401.5,75.6\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"324.5\" y=\"217.2641509433962\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = x^2</text><text x=\"93.5\" y=\"270\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">-2</text><text x=\"401.5\" y=\"270\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">2</text>\n</svg></span>\n<p>Beräkna rotationskroppens volym exakt.</p>",
    "s": "<p>Vid varje \\(x\\) är radien från rotationsaxeln \\(y=4\\) ner till parabeln</p><p>\\[R(x)=4-x^2.\\]</p>\n<p>Skivmetoden ger</p><p>\\[V=\\pi\\int_{-2}^{2}(4-x^2)^2dx.\\]</p><p>Utveckla:</p><p>\\[(4-x^2)^2=16-8x^2+x^4.\\]</p>\n<p>\\[V=\\pi\\left[16x-\\frac83x^3+\\frac15x^5\\right]_{-2}^{2}=\\boxed{\\frac{512\\pi}{15}}.\\]</p>",
    "familj": "rotation_kring_horisontell_linje_svg"
  },
  {
    "id": "3.48",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För varje funktion anges att \\(f(x)=kx^n\\) på intervallet och \\(f(x)=0\\) utanför. Bestäm \\(k\\) så att \\(f\\) blir en täthetsfunktion.</p><p>a) \\(f(x)=k\\) för \\(0\\le x\\le4\\).<br>b) \\(f(x)=kx\\) för \\(0\\le x\\le2\\).<br>c) \\(f(x)=kx^2\\) för \\(0\\le x\\le3\\).</p>",
    "s": "<p>En täthetsfunktion ska ha total integral 1.</p><p>a) \\(4k=1\\Rightarrow\\) <strong>\\(k=\\frac14\\)</strong>.<br>b) \\(k[x^2/2]_0^2=2k=1\\Rightarrow\\) <strong>\\(k=\\frac12\\)</strong>.<br>c) \\(k[x^3/3]_0^3=9k=1\\Rightarrow\\) <strong>\\(k=\\frac19\\)</strong>.</p>",
    "familj": "proc_tathet_normalisering_1"
  },
  {
    "id": "3.49",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Väntetiden \\(T\\) i minuter till en kundtjänst modelleras med täthetsfunktionen</p>\n<p>\\[\nf(t)=0,25e^{-0,25t},\\qquad t\\ge0.\n\\]</p>\n<p>a) Bestäm sannolikheten att väntetiden är högst 5 minuter.<br>\nb) Bestäm sannolikheten att väntetiden överstiger 6 minuter.</p>",
    "s": "<p>a)</p>\n<p>\\[\nP(T\\le5)=\\int_0^5 0,25e^{-0,25t}\\,dt\n=\\left[-e^{-0,25t}\\right]_0^5\n=1-e^{-1,25}\n\\approx 0.713.\n\\]</p>\n<p>b)</p>\n<p>\\[\nP(T&gt;6)=\\int_6^\\infty0,25e^{-0,25t}\\,dt\n=e^{-1,5}\n\\approx 0.223.\n\\]</p>\n<p><strong>a) Cirka 71.3 %. b) Cirka 22.3 %.</strong></p>",
    "familj": "kallmaterial_tathetsfunktion_exp"
  },
  {
    "id": "3.50",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "1/2/1",
    "t": "<p>En partikel rör sig längs en rät linje med hastigheten</p>\n<p>\\[\nv(t)=3t^2-12t+9\n\\]</p>\n<p>meter per sekund under intervallet \\(0\\le t\\le5\\).</p>\n<p>a) Bestäm partikelns förflyttning.<br>\nb) Bestäm den totala sträcka som partikeln färdas.</p>",
    "s": "<p>En lägesförändring från \\(t=0\\) kan beskrivas av</p>\n<p>\\[\ns(t)=\\int v(t)\\,dt=t^3-6t^2+9t+C.\n\\]</p>\n<p>Vi kan sätta \\(C=0\\) eftersom endast skillnader behövs.</p>\n<p>a)</p>\n<p>\\[\ns(5)-s(0)=125-150+45=20.\n\\]</p>\n<p><strong>Förflyttningen är 20 m.</strong></p>\n<p>b) Hastigheten byter tecken när</p>\n<p>\\[\n3(t-1)(t-3)=0,\n\\]</p>\n<p>alltså vid \\(t=1\\) och \\(t=3\\).</p>\n<p>\\[\ns(1)=4,\\qquad s(3)=0,\\qquad s(5)=20.\n\\]</p>\n<p>Den totala sträckan blir</p>\n<p>\\[\n|4-0|+|0-4|+|20-0|=4+4+20=28.\n\\]</p>\n<p><strong>Den totala sträckan är 28 m.</strong></p>",
    "familj": "integral_hastighet_totalstracka"
  },
  {
    "id": "3.51",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm arean mellan kurvorna på det angivna intervallet.</p><p>a) \\(y=2x+3\\) och \\(y=x\\), \\(0\\le x\\le2\\).<br>b) \\(y=x^2+2\\) och \\(y=x^2-1\\), \\(-1\\le x\\le2\\).<br>c) \\(y=4\\) och \\(y=x^2\\), \\(0\\le x\\le2\\).</p>",
    "s": "<p>a) Skillnaden är \\(x+3\\): \\(\\int_0^2(x+3)dx=[x^2/2+3x]_0^2=\\\\boxed{8}\\).</p><p>b) Skillnaden är konstant 3 över ett intervall med längd 3: <strong>9</strong>.</p><p>c) \\(\\int_0^2(4-x^2)dx=\\boxed{16/3}\\).</p>",
    "familj": "proc_area_mellan_kurvor_3"
  },
  {
    "id": "3.52",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Kurvorna \\(y=2x\\) och \\(y=x^2\\) begränsar ett område.</p><span class=\"fig\"><svg width=\"460\" height=\"270\" viewBox=\"0 0 460 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två kurvor som begränsar ett område\"><rect x=\"1\" y=\"1\" width=\"458\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"98.5\" y1=\"25\" x2=\"98.5\" y2=\"232\" stroke=\"#E8ECEF\"/><line x1=\"243.5\" y1=\"25\" x2=\"243.5\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"243.5\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"388.5\" y1=\"25\" x2=\"388.5\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"388.5\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"211.3\" x2=\"432\" y2=\"211.3\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"169.9\" x2=\"432\" y2=\"169.9\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"173.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"128.5\" x2=\"432\" y2=\"128.5\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"132.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"87.1\" x2=\"432\" y2=\"87.1\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"91.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"55\" y1=\"45.7\" x2=\"432\" y2=\"45.7\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"49.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"211.3\" x2=\"432\" y2=\"211.3\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"98.5\" y1=\"25\" x2=\"98.5\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"98.5,211.3 99.8,210.5 101.1,209.8 102.5,209.0 103.8,208.3 105.1,207.5 106.4,206.8 107.7,206.0 109.0,205.3 110.4,204.5 111.7,203.8 113.0,203.0 114.3,202.3 115.6,201.5 117.0,200.8 118.3,200.0 119.6,199.3 120.9,198.5 122.2,197.8 123.5,197.0 124.9,196.2 126.2,195.5 127.5,194.7 128.8,194.0 130.1,193.2 131.5,192.5 132.8,191.7 134.1,191.0 135.4,190.2 136.7,189.5 138.0,188.7 139.4,188.0 140.7,187.2 142.0,186.5 143.3,185.7 144.6,185.0 146.0,184.2 147.3,183.4 148.6,182.7 149.9,181.9 151.2,181.2 152.5,180.4 153.9,179.7 155.2,178.9 156.5,178.2 157.8,177.4 159.1,176.7 160.5,175.9 161.8,175.2 163.1,174.4 164.4,173.7 165.7,172.9 167.0,172.2 168.4,171.4 169.7,170.7 171.0,169.9 172.3,169.1 173.6,168.4 175.0,167.6 176.3,166.9 177.6,166.1 178.9,165.4 180.2,164.6 181.5,163.9 182.9,163.1 184.2,162.4 185.5,161.6 186.8,160.9 188.1,160.1 189.5,159.4 190.8,158.6 192.1,157.9 193.4,157.1 194.7,156.4 196.0,155.6 197.4,154.8 198.7,154.1 200.0,153.3 201.3,152.6 202.6,151.8 204.0,151.1 205.3,150.3 206.6,149.6 207.9,148.8 209.2,148.1 210.5,147.3 211.9,146.6 213.2,145.8 214.5,145.1 215.8,144.3 217.1,143.6 218.5,142.8 219.8,142.0 221.1,141.3 222.4,140.5 223.7,139.8 225.0,139.0 226.4,138.3 227.7,137.5 229.0,136.8 230.3,136.0 231.6,135.3 233.0,134.5 234.3,133.8 235.6,133.0 236.9,132.3 238.2,131.5 239.5,130.8 240.9,130.0 242.2,129.3 243.5,128.5 244.8,127.7 246.1,127.0 247.5,126.2 248.8,125.5 250.1,124.7 251.4,124.0 252.7,123.2 254.0,122.5 255.4,121.7 256.7,121.0 258.0,120.2 259.3,119.5 260.6,118.7 262.0,118.0 263.3,117.2 264.6,116.5 265.9,115.7 267.2,115.0 268.5,114.2 269.9,113.4 271.2,112.7 272.5,111.9 273.8,111.2 275.1,110.4 276.5,109.7 277.8,108.9 279.1,108.2 280.4,107.4 281.7,106.7 283.0,105.9 284.4,105.2 285.7,104.4 287.0,103.7 288.3,102.9 289.6,102.2 291.0,101.4 292.3,100.6 293.6,99.9 294.9,99.1 296.2,98.4 297.5,97.6 298.9,96.9 300.2,96.1 301.5,95.4 302.8,94.6 304.1,93.9 305.5,93.1 306.8,92.4 308.1,91.6 309.4,90.9 310.7,90.1 312.0,89.4 313.4,88.6 314.7,87.9 316.0,87.1 317.3,86.3 318.6,85.6 320.0,84.8 321.3,84.1 322.6,83.3 323.9,82.6 325.2,81.8 326.5,81.1 327.9,80.3 329.2,79.6 330.5,78.8 331.8,78.1 333.1,77.3 334.5,76.6 335.8,75.8 337.1,75.1 338.4,74.3 339.7,73.6 341.0,72.8 342.4,72.0 343.7,71.3 345.0,70.5 346.3,69.8 347.6,69.0 349.0,68.3 350.3,67.5 351.6,66.8 352.9,66.0 354.2,65.3 355.5,64.5 356.9,63.8 358.2,63.0 359.5,62.3 360.8,61.5 362.1,60.8 363.5,60.0 364.8,59.2 366.1,58.5 367.4,57.7 368.7,57.0 370.0,56.2 371.4,55.5 372.7,54.7 374.0,54.0 375.3,53.2 376.6,52.5 378.0,51.7 379.3,51.0 380.6,50.2 381.9,49.5 383.2,48.7 384.5,48.0 385.9,47.2 387.2,46.5 388.5,45.7\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"365.3\" y=\"50.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">y=2x</text><polyline points=\"98.5,211.3 99.8,211.3 101.1,211.3 102.5,211.3 103.8,211.2 105.1,211.2 106.4,211.2 107.7,211.1 109.0,211.1 110.4,211.0 111.7,211.0 113.0,210.9 114.3,210.8 115.6,210.7 117.0,210.6 118.3,210.5 119.6,210.4 120.9,210.3 122.2,210.2 123.5,210.1 124.9,209.9 126.2,209.8 127.5,209.6 128.8,209.5 130.1,209.3 131.5,209.2 132.8,209.0 134.1,208.8 135.4,208.6 136.7,208.4 138.0,208.2 139.4,208.0 140.7,207.8 142.0,207.6 143.3,207.3 144.6,207.1 146.0,206.9 147.3,206.6 148.6,206.4 149.9,206.1 151.2,205.8 152.5,205.5 153.9,205.3 155.2,205.0 156.5,204.7 157.8,204.4 159.1,204.1 160.5,203.7 161.8,203.4 163.1,203.1 164.4,202.7 165.7,202.4 167.0,202.0 168.4,201.7 169.7,201.3 171.0,200.9 172.3,200.6 173.6,200.2 175.0,199.8 176.3,199.4 177.6,199.0 178.9,198.6 180.2,198.1 181.5,197.7 182.9,197.3 184.2,196.8 185.5,196.4 186.8,195.9 188.1,195.5 189.5,195.0 190.8,194.5 192.1,194.1 193.4,193.6 194.7,193.1 196.0,192.6 197.4,192.1 198.7,191.5 200.0,191.0 201.3,190.5 202.6,189.9 204.0,189.4 205.3,188.9 206.6,188.3 207.9,187.7 209.2,187.2 210.5,186.6 211.9,186.0 213.2,185.4 214.5,184.8 215.8,184.2 217.1,183.6 218.5,183.0 219.8,182.3 221.1,181.7 222.4,181.1 223.7,180.4 225.0,179.8 226.4,179.1 227.7,178.4 229.0,177.8 230.3,177.1 231.6,176.4 233.0,175.7 234.3,175.0 235.6,174.3 236.9,173.6 238.2,172.9 239.5,172.1 240.9,171.4 242.2,170.6 243.5,169.9 244.8,169.1 246.1,168.4 247.5,167.6 248.8,166.8 250.1,166.1 251.4,165.3 252.7,164.5 254.0,163.7 255.4,162.8 256.7,162.0 258.0,161.2 259.3,160.4 260.6,159.5 262.0,158.7 263.3,157.8 264.6,157.0 265.9,156.1 267.2,155.2 268.5,154.4 269.9,153.5 271.2,152.6 272.5,151.7 273.8,150.8 275.1,149.9 276.5,148.9 277.8,148.0 279.1,147.1 280.4,146.1 281.7,145.2 283.0,144.2 284.4,143.3 285.7,142.3 287.0,141.3 288.3,140.4 289.6,139.4 291.0,138.4 292.3,137.4 293.6,136.4 294.9,135.3 296.2,134.3 297.5,133.3 298.9,132.2 300.2,131.2 301.5,130.2 302.8,129.1 304.1,128.0 305.5,127.0 306.8,125.9 308.1,124.8 309.4,123.7 310.7,122.6 312.0,121.5 313.4,120.4 314.7,119.3 316.0,118.1 317.3,117.0 318.6,115.9 320.0,114.7 321.3,113.6 322.6,112.4 323.9,111.3 325.2,110.1 326.5,108.9 327.9,107.7 329.2,106.5 330.5,105.3 331.8,104.1 333.1,102.9 334.5,101.7 335.8,100.4 337.1,99.2 338.4,98.0 339.7,96.7 341.0,95.5 342.4,94.2 343.7,92.9 345.0,91.7 346.3,90.4 347.6,89.1 349.0,87.8 350.3,86.5 351.6,85.2 352.9,83.9 354.2,82.5 355.5,81.2 356.9,79.9 358.2,78.5 359.5,77.2 360.8,75.8 362.1,74.4 363.5,73.1 364.8,71.7 366.1,70.3 367.4,68.9 368.7,67.5 370.0,66.1 371.4,64.7 372.7,63.3 374.0,61.8 375.3,60.4 376.6,59.0 378.0,57.5 379.3,56.1 380.6,54.6 381.9,53.1 383.2,51.7 384.5,50.2 385.9,48.7 387.2,47.2 388.5,45.7\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"365.3\" y=\"63.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#268FA3\">y=x^2</text><circle cx=\"98.5\" cy=\"211.3\" r=\"4.5\" fill=\"#B43123\"/><circle cx=\"388.5\" cy=\"45.7\" r=\"4.5\" fill=\"#B43123\"/><text x=\"430\" y=\"203.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"106.5\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>Bestäm områdets area exakt.</p>",
    "s": "<p>Skärningarna ges av \\(x^2=2x\\Rightarrow x=0\\) eller \\(x=2\\). På intervallet ligger \\(2x\\) över \\(x^2\\).</p><p>\\[A=\\int_0^2(2x-x^2)dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=4-\\frac83=\\boxed{\\frac43}.\\]</p>",
    "familj": "area_parabel_linje_c_svg"
  },
  {
    "id": "3.53",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan kurvan \\(y=4-x^2\\) och x-axeln roteras kring linjen \\(y=5\\).</p><span class=\"fig\"><svg width=\"460\" height=\"280\" viewBox=\"0 0 460 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Område roteras kring linjen y=5\"><rect x=\"1\" y=\"1\" width=\"458\" height=\"278\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"72.1\" y1=\"25\" x2=\"72.1\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"72.1\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"157.8\" y1=\"25\" x2=\"157.8\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"157.8\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"243.5\" y1=\"25\" x2=\"243.5\" y2=\"242\" stroke=\"#E8ECEF\"/><line x1=\"329.2\" y1=\"25\" x2=\"329.2\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"329.2\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"414.9\" y1=\"25\" x2=\"414.9\" y2=\"242\" stroke=\"#E8ECEF\"/><text x=\"414.9\" y=\"260\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"205.8\" x2=\"432\" y2=\"205.8\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"169.7\" x2=\"432\" y2=\"169.7\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"173.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"55\" y1=\"133.5\" x2=\"432\" y2=\"133.5\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"137.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"97.3\" x2=\"432\" y2=\"97.3\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"101.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"55\" y1=\"61.2\" x2=\"432\" y2=\"61.2\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"65.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"25.0\" x2=\"432\" y2=\"25.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"29.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"55\" y1=\"205.8\" x2=\"432\" y2=\"205.8\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"243.5\" y1=\"25\" x2=\"243.5\" y2=\"242\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"55\" y1=\"25.0\" x2=\"432\" y2=\"25.0\" stroke=\"#B43123\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><text x=\"428\" y=\"20.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#B43123\">y=5</text><polyline points=\"72.1,205.8 73.7,203.2 75.3,200.6 76.8,198.1 78.4,195.5 79.9,193.0 81.5,190.5 83.0,188.0 84.6,185.6 86.2,183.1 87.7,180.7 89.3,178.3 90.8,176.0 92.4,173.7 93.9,171.4 95.5,169.1 97.1,166.8 98.6,164.6 100.2,162.4 101.7,160.2 103.3,158.0 104.9,155.9 106.4,153.8 108.0,151.7 109.5,149.6 111.1,147.5 112.6,145.5 114.2,143.5 115.8,141.6 117.3,139.6 118.9,137.7 120.4,135.8 122.0,133.9 123.5,132.1 125.1,130.2 126.7,128.4 128.2,126.6 129.8,124.9 131.3,123.1 132.9,121.4 134.5,119.8 136.0,118.1 137.6,116.5 139.1,114.8 140.7,113.2 142.2,111.7 143.8,110.1 145.4,108.6 146.9,107.1 148.5,105.7 150.0,104.2 151.6,102.8 153.1,101.4 154.7,100.0 156.3,98.7 157.8,97.3 159.4,96.0 160.9,94.8 162.5,93.5 164.0,92.3 165.6,91.1 167.2,89.9 168.7,88.7 170.3,87.6 171.8,86.5 173.4,85.4 175.0,84.3 176.5,83.3 178.1,82.3 179.6,81.3 181.2,80.3 182.7,79.4 184.3,78.4 185.9,77.5 187.4,76.7 189.0,75.8 190.5,75.0 192.1,74.2 193.6,73.4 195.2,72.7 196.8,71.9 198.3,71.2 199.9,70.5 201.4,69.9 203.0,69.2 204.6,68.6 206.1,68.1 207.7,67.5 209.2,67.0 210.8,66.4 212.3,65.9 213.9,65.5 215.5,65.0 217.0,64.6 218.6,64.2 220.1,63.9 221.7,63.5 223.2,63.2 224.8,62.9 226.4,62.6 227.9,62.4 229.5,62.1 231.0,61.9 232.6,61.8 234.2,61.6 235.7,61.5 237.3,61.4 238.8,61.3 240.4,61.2 241.9,61.2 243.5,61.2 245.1,61.2 246.6,61.2 248.2,61.3 249.7,61.4 251.3,61.5 252.8,61.6 254.4,61.8 256.0,61.9 257.5,62.1 259.1,62.4 260.6,62.6 262.2,62.9 263.8,63.2 265.3,63.5 266.9,63.9 268.4,64.2 270.0,64.6 271.5,65.0 273.1,65.5 274.7,65.9 276.2,66.4 277.8,67.0 279.3,67.5 280.9,68.1 282.4,68.6 284.0,69.2 285.6,69.9 287.1,70.5 288.7,71.2 290.2,71.9 291.8,72.7 293.4,73.4 294.9,74.2 296.5,75.0 298.0,75.8 299.6,76.7 301.1,77.5 302.7,78.4 304.3,79.4 305.8,80.3 307.4,81.3 308.9,82.3 310.5,83.3 312.0,84.3 313.6,85.4 315.2,86.5 316.7,87.6 318.3,88.7 319.8,89.9 321.4,91.1 323.0,92.3 324.5,93.5 326.1,94.8 327.6,96.0 329.2,97.3 330.7,98.7 332.3,100.0 333.9,101.4 335.4,102.8 337.0,104.2 338.5,105.7 340.1,107.1 341.6,108.6 343.2,110.1 344.8,111.7 346.3,113.2 347.9,114.8 349.4,116.5 351.0,118.1 352.5,119.8 354.1,121.4 355.7,123.1 357.2,124.9 358.8,126.6 360.3,128.4 361.9,130.2 363.5,132.1 365.0,133.9 366.6,135.8 368.1,137.7 369.7,139.6 371.2,141.6 372.8,143.5 374.4,145.5 375.9,147.5 377.5,149.6 379.0,151.7 380.6,153.8 382.1,155.9 383.7,158.0 385.3,160.2 386.8,162.4 388.4,164.6 389.9,166.8 391.5,169.1 393.1,171.4 394.6,173.7 396.2,176.0 397.7,178.3 399.3,180.7 400.8,183.1 402.4,185.6 404.0,188.0 405.5,190.5 407.1,193.0 408.6,195.5 410.2,198.1 411.7,200.6 413.3,203.2 414.9,205.8\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"387.4\" y=\"155.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">y=4-x^2</text><text x=\"430\" y=\"197.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"251.5\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>Bestäm rotationskroppens volym exakt.</p>",
    "s": "<p>Skärning med x-axeln sker vid \\(x=\\pm2\\). Vid rotation kring \\(y=5\\) är yttre radien \\(R=5\\) och inre radien \\(r=5-(4-x^2)=1+x^2\\).</p><p>\\[V=\\pi\\int_{-2}^2\\left(25-(1+x^2)^2\\right)dx.\\]</p><p>Integranden är \\(24-2x^2-x^4\\). Symmetri ger</p><p>\\[V=2\\pi\\left[24x-\\frac{2x^3}{3}-\\frac{x^5}{5}\\right]_0^2=\\boxed{\\frac{1088\\pi}{15}}.\\]</p>",
    "familj": "rotation_parabel_axel_y5_c_svg"
  },
  {
    "id": "3.54",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Beräkna exakt.</p><p>a) \\(\\int_0^1 e^{2x}\\,dx\\)<br>b) \\(\\int_0^{\\pi/4}\\sin(2x)\\,dx\\)<br>c) \\(\\int_0^{\\pi/6}\\cos(3x)\\,dx\\)<br>d) \\(\\int_0^1(3x+1)^2\\,dx\\)</p>",
    "s": "<p>a) En primitiv funktion är \\(\\frac12e^{2x}\\): <strong>\\(\\frac{e^2-1}{2}\\)</strong>.<br>b) En primitiv funktion är \\(-\\frac12\\cos2x\\): <strong>\\(\\frac12\\)</strong>.<br>c) En primitiv funktion är \\(\\frac13\\sin3x\\): <strong>\\(\\frac13\\)</strong>.<br>d) En primitiv funktion är \\((3x+1)^3/9\\): <strong>7</strong>.</p>",
    "familj": "proc_integral_kedjeformer_c"
  },
  {
    "id": "3.55",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Temperaturen under 12 timmar modelleras av</p><p>\\[T(t)=20+4\\sin\\left(\\frac{\\pi t}{12}\\right),\\qquad0\\le t\\le12.\\]</p><p>Medelvärdet av en funktion på \\([a,b]\\) ges av \\(\\frac1{b-a}\\int_a^bf(x)dx\\).</p><p>Bestäm modellens medeltemperatur under de 12 timmarna.</p>",
    "s": "<p>\\[\\bar T=\\frac1{12}\\int_0^{12}\\left(20+4\\sin\\frac{\\pi t}{12}\\right)dt.\\]</p><p>Konstantdelen ger 20. Vidare</p><p>\\[\\int_0^{12}\\sin(\\pi t/12)dt=\\frac{24}{\\pi}.\\]</p><p>Alltså</p><p>\\[\\bar T=20+\\frac1{12}\\cdot4\\cdot\\frac{24}{\\pi}=\\boxed{20+\\frac8\\pi\\approx22,55^\\circ C}.\\]</p>",
    "familj": "medelvarde_integral_temperatur"
  },
  {
    "id": "3.56",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Området under \\(y=4-x^2\\) från \\(x=0\\) till \\(x=2\\) ska delas i två lika stora areor av linjen \\(x=a\\).</p><p>Bestäm \\(a\\) med minst tre decimaler. Digitalt verktyg får användas.</p>",
    "s": "<p>Hela arean är</p><p>\\[\\int_0^2(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_0^2=\\frac{16}{3}.\\]</p><p>Halva arean är därför \\(8/3\\), så</p><p>\\[4a-\\frac{a^3}{3}=\\frac83.\\]</p><p>Detta ger \\(a^3-12a+8=0\\). Den lösning som ligger i \\([0,2]\\) är</p><p><strong>\\(\\boxed{a\\approx0,695}\\)</strong>.</p>",
    "familj": "area_halvering_parameter_c"
  },
  {
    "id": "3.57",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Kurvorna \\(y=x^2\\) och \\(y=2x\\) innesluter ett område.</p><p>a) Bestäm skärningspunkternas x-koordinater.<br>b) Ställ upp en integral för arean.<br>c) Beräkna arean.</p>",
    "s": "<p><strong>Metod:</strong> Ta först reda på vilken graf som ligger överst. Arean fås genom att integrera övre funktion minus undre funktion.</p><p>a) \\(x^2=2x\\Rightarrow x(x-2)=0\\), alltså <strong>\\(x=0,2\\)</strong>.</p><p>b) På \\([0,2]\\) ligger \\(2x\\) över \\(x^2\\): \\[A=\\int_0^2(2x-x^2)dx.\\]</p><p>c) \\([x^2-x^3/3]_0^2=4-8/3=\\boxed{4/3}\\).</p>",
    "familj": "proc_area_skarning_parabel_linje_2"
  },
  {
    "id": "3.58",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Det skuggade området begränsas av</p>\n<p>\\[\ny=4-x^2\n\\quad\\text{och}\\quad\ny=2-x.\n\\]</p><span class=\"fig\"><svg width=\"450\" height=\"250\" viewBox=\"0 0 450 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Område mellan parabeln y lika med 4 minus x kvadrat och linjen y lika med 2 minus x\">\n<rect x=\"1\" y=\"1\" width=\"448\" height=\"248\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"88.2\" y1=\"25\" x2=\"88.2\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"88.2\" y=\"203.9\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"154.5\" y1=\"25\" x2=\"154.5\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"154.5\" y=\"203.9\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"220.9\" y1=\"25\" x2=\"220.9\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<line x1=\"287.3\" y1=\"25\" x2=\"287.3\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"287.3\" y=\"203.9\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"353.6\" y1=\"25\" x2=\"353.6\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"353.6\" y=\"203.9\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"420.0\" y1=\"25\" x2=\"420.0\" y2=\"215\" stroke=\"#D9E6E9\"/>\n<text x=\"420.0\" y=\"203.9\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"187.9\" x2=\"420\" y2=\"187.9\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"160.7\" x2=\"420\" y2=\"160.7\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"133.6\" x2=\"420\" y2=\"133.6\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"106.4\" x2=\"420\" y2=\"106.4\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"79.3\" x2=\"420\" y2=\"79.3\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"52.1\" x2=\"420\" y2=\"52.1\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"25.0\" x2=\"420\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"187.9\" x2=\"420\" y2=\"187.9\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"220.9\" y1=\"25\" x2=\"220.9\" y2=\"215\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polygon points=\"154.5,106.4 155.8,105.4 157.0,104.4 158.3,103.5 159.5,102.5 160.8,101.6 162.0,100.7 163.3,99.8 164.5,98.9 165.7,98.0 167.0,97.2 168.2,96.4 169.5,95.6 170.7,94.8 172.0,94.0 173.2,93.3 174.5,92.6 175.7,91.9 176.9,91.2 178.2,90.5 179.4,89.9 180.7,89.3 181.9,88.7 183.2,88.1 184.4,87.5 185.7,86.9 186.9,86.4 188.1,85.9 189.4,85.4 190.6,84.9 191.9,84.5 193.1,84.0 194.4,83.6 195.6,83.2 196.9,82.9 198.1,82.5 199.3,82.2 200.6,81.8 201.8,81.5 203.1,81.2 204.3,81.0 205.6,80.7 206.8,80.5 208.1,80.3 209.3,80.1 210.5,79.9 211.8,79.8 213.0,79.7 214.3,79.6 215.5,79.5 216.8,79.4 218.0,79.3 219.2,79.3 220.5,79.3 221.7,79.3 223.0,79.3 224.2,79.4 225.5,79.4 226.7,79.5 228.0,79.6 229.2,79.7 230.4,79.8 231.7,80.0 232.9,80.2 234.2,80.4 235.4,80.6 236.7,80.8 237.9,81.1 239.2,81.3 240.4,81.6 241.6,81.9 242.9,82.3 244.1,82.6 245.4,83.0 246.6,83.4 247.9,83.8 249.1,84.2 250.4,84.6 251.6,85.1 252.8,85.6 254.1,86.1 255.3,86.6 256.6,87.1 257.8,87.7 259.1,88.3 260.3,88.9 261.6,89.5 262.8,90.1 264.0,90.8 265.3,91.4 266.5,92.1 267.8,92.8 269.0,93.6 270.3,94.3 271.5,95.1 272.8,95.9 274.0,96.7 275.2,97.5 276.5,98.3 277.7,99.2 279.0,100.1 280.2,101.0 281.5,101.9 282.7,102.8 284.0,103.8 285.2,104.8 286.4,105.8 287.7,106.8 288.9,107.8 290.2,108.9 291.4,109.9 292.7,111.0 293.9,112.1 295.2,113.3 296.4,114.4 297.6,115.6 298.9,116.8 300.1,118.0 301.4,119.2 302.6,120.4 303.9,121.7 305.1,123.0 306.4,124.3 307.6,125.6 308.8,126.9 310.1,128.3 311.3,129.7 312.6,131.1 313.8,132.5 315.1,133.9 316.3,135.4 317.6,136.8 318.8,138.3 320.0,139.8 321.3,141.4 322.5,142.9 323.8,144.5 325.0,146.1 326.3,147.7 327.5,149.3 328.8,151.0 330.0,152.6 331.2,154.3 332.5,156.0 333.7,157.7 335.0,159.5 336.2,161.2 337.5,163.0 338.7,164.8 339.9,166.6 341.2,168.5 342.4,170.3 343.7,172.2 344.9,174.1 346.2,176.0 347.4,177.9 348.7,179.9 349.9,181.8 351.1,183.8 352.4,185.8 353.6,187.9 353.6,187.9 352.4,187.3 351.1,186.8 349.9,186.3 348.7,185.8 347.4,185.3 346.2,184.8 344.9,184.3 343.7,183.8 342.4,183.3 341.2,182.8 339.9,182.3 338.7,181.8 337.5,181.2 336.2,180.7 335.0,180.2 333.7,179.7 332.5,179.2 331.2,178.7 330.0,178.2 328.8,177.7 327.5,177.2 326.3,176.7 325.0,176.2 323.8,175.6 322.5,175.1 321.3,174.6 320.0,174.1 318.8,173.6 317.6,173.1 316.3,172.6 315.1,172.1 313.8,171.6 312.6,171.1 311.3,170.6 310.1,170.0 308.8,169.5 307.6,169.0 306.4,168.5 305.1,168.0 303.9,167.5 302.6,167.0 301.4,166.5 300.1,166.0 298.9,165.5 297.6,165.0 296.4,164.4 295.2,163.9 293.9,163.4 292.7,162.9 291.4,162.4 290.2,161.9 288.9,161.4 287.7,160.9 286.4,160.4 285.2,159.9 284.0,159.4 282.7,158.8 281.5,158.3 280.2,157.8 279.0,157.3 277.7,156.8 276.5,156.3 275.2,155.8 274.0,155.3 272.8,154.8 271.5,154.3 270.3,153.8 269.0,153.2 267.8,152.7 266.5,152.2 265.3,151.7 264.0,151.2 262.8,150.7 261.6,150.2 260.3,149.7 259.1,149.2 257.8,148.7 256.6,148.2 255.3,147.7 254.1,147.1 252.8,146.6 251.6,146.1 250.4,145.6 249.1,145.1 247.9,144.6 246.6,144.1 245.4,143.6 244.1,143.1 242.9,142.6 241.6,142.1 240.4,141.5 239.2,141.0 237.9,140.5 236.7,140.0 235.4,139.5 234.2,139.0 232.9,138.5 231.7,138.0 230.4,137.5 229.2,137.0 228.0,136.5 226.7,135.9 225.5,135.4 224.2,134.9 223.0,134.4 221.7,133.9 220.5,133.4 219.2,132.9 218.0,132.4 216.8,131.9 215.5,131.4 214.3,130.9 213.0,130.3 211.8,129.8 210.5,129.3 209.3,128.8 208.1,128.3 206.8,127.8 205.6,127.3 204.3,126.8 203.1,126.3 201.8,125.8 200.6,125.3 199.3,124.8 198.1,124.2 196.9,123.7 195.6,123.2 194.4,122.7 193.1,122.2 191.9,121.7 190.6,121.2 189.4,120.7 188.1,120.2 186.9,119.7 185.7,119.2 184.4,118.6 183.2,118.1 181.9,117.6 180.7,117.1 179.4,116.6 178.2,116.1 176.9,115.6 175.7,115.1 174.5,114.6 173.2,114.1 172.0,113.6 170.7,113.0 169.5,112.5 168.2,112.0 167.0,111.5 165.7,111.0 164.5,110.5 163.3,110.0 162.0,109.5 160.8,109.0 159.5,108.5 158.3,108.0 157.0,107.4 155.8,106.9 154.5,106.4\" fill=\"#DCEFF2\" stroke=\"none\"/>\n<polyline points=\"55.00,248.93 56.46,245.96 57.92,243.01 59.38,240.09 60.84,237.20 62.30,234.33 63.76,231.49 65.22,228.67 66.68,225.88 68.14,223.12 69.60,220.39 71.06,217.68 72.52,214.99 73.98,212.33 75.44,209.70 76.90,207.10 78.36,204.52 79.82,201.97 81.28,199.44 82.74,196.94 84.20,194.47 85.66,192.02 87.12,189.60 88.58,187.21 90.04,184.84 91.50,182.50 92.96,180.18 94.42,177.89 95.88,175.63 97.34,173.39 98.80,171.18 100.26,169.00 101.72,166.84 103.18,164.71 104.64,162.60 106.10,160.52 107.56,158.47 109.02,156.44 110.48,154.44 111.94,152.47 113.40,150.52 114.86,148.60 116.32,146.70 117.78,144.83 119.24,142.99 120.70,141.17 122.16,139.38 123.62,137.62 125.08,135.88 126.54,134.17 128.00,132.49 129.46,130.83 130.92,129.19 132.38,127.59 133.84,126.01 135.30,124.45 136.76,122.93 138.22,121.43 139.68,119.95 141.14,118.50 142.60,117.08 144.06,115.68 145.52,114.31 146.98,112.97 148.44,111.65 149.90,110.36 151.36,109.10 152.82,107.86 154.28,106.65 155.74,105.46 157.20,104.30 158.66,103.17 160.12,102.06 161.58,100.98 163.04,99.92 164.50,98.90 165.96,97.89 167.42,96.92 168.88,95.97 170.34,95.05 171.80,94.15 173.26,93.28 174.72,92.43 176.18,91.62 177.64,90.82 179.10,90.06 180.56,89.32 182.02,88.61 183.48,87.92 184.94,87.26 186.40,86.63 187.86,86.02 189.32,85.44 190.78,84.88 192.24,84.35 193.70,83.85 195.16,83.37 196.62,82.92 198.08,82.50 199.54,82.10 201.00,81.73 202.46,81.38 203.92,81.06 205.38,80.77 206.84,80.51 208.30,80.27 209.76,80.05 211.22,79.86 212.68,79.70 214.14,79.57 215.60,79.46 217.06,79.38 218.52,79.32 219.98,79.29 221.44,79.29 222.90,79.31 224.36,79.36 225.82,79.43 227.28,79.54 228.74,79.66 230.20,79.82 231.66,80.00 233.12,80.20 234.58,80.44 236.04,80.70 237.50,80.98 238.96,81.29 240.42,81.63 241.88,82.00 243.34,82.39 244.80,82.80 246.26,83.25 247.72,83.72 249.18,84.21 250.64,84.73 252.10,85.28 253.56,85.86 255.02,86.46 256.48,87.08 257.94,87.74 259.40,88.42 260.86,89.12 262.32,89.85 263.78,90.61 265.24,91.40 266.70,92.21 268.16,93.05 269.62,93.91 271.08,94.80 272.54,95.71 274.00,96.66 275.46,97.63 276.92,98.62 278.38,99.64 279.84,100.69 281.30,101.76 282.76,102.86 284.22,103.99 285.68,105.14 287.14,106.32 288.60,107.53 290.06,108.76 291.52,110.01 292.98,111.30 294.44,112.61 295.90,113.94 297.36,115.31 298.82,116.70 300.28,118.11 301.74,119.55 303.20,121.02 304.66,122.51 306.12,124.03 307.58,125.58 309.04,127.15 310.50,128.75 311.96,130.38 313.42,132.03 314.88,133.71 316.34,135.41 317.80,137.14 319.26,138.90 320.72,140.68 322.18,142.49 323.64,144.33 325.10,146.19 326.56,148.08 328.02,149.99 329.48,151.93 330.94,153.90 332.40,155.89 333.86,157.91 335.32,159.96 336.78,162.03 338.24,164.13 339.70,166.25 341.16,168.41 342.62,170.58 344.08,172.79 345.54,175.02 347.00,177.27 348.46,179.55 349.92,181.86 351.38,184.20 352.84,186.56 354.30,188.95 355.76,191.36 357.22,193.80 358.68,196.27 360.14,198.76 361.60,201.28 363.06,203.82 364.52,206.39 365.98,208.99 367.44,211.61 368.90,214.26 370.36,216.94 371.82,219.64 373.28,222.37 374.74,225.13 376.20,227.91 377.66,230.72 379.12,233.55 380.58,236.41 382.04,239.30 383.50,242.21 384.96,245.15 386.42,248.12 387.88,251.11 389.34,254.12 390.80,257.17 392.26,260.24 393.72,263.34 395.18,266.46 396.64,269.61 398.10,272.78 399.56,275.99 401.02,279.21 402.48,282.47 403.94,285.75 405.40,289.06 406.86,292.39 408.32,295.75 409.78,299.14 411.24,302.55 412.70,305.99 414.16,309.45 415.62,312.94 417.08,316.46 418.54,320.00 420.00,323.57\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<polyline points=\"55.00,65.71 56.46,66.31 57.92,66.91 59.38,67.51 60.84,68.10 62.30,68.70 63.76,69.30 65.22,69.89 66.68,70.49 68.14,71.09 69.60,71.69 71.06,72.28 72.52,72.88 73.98,73.48 75.44,74.07 76.90,74.67 78.36,75.27 79.82,75.87 81.28,76.46 82.74,77.06 84.20,77.66 85.66,78.25 87.12,78.85 88.58,79.45 90.04,80.05 91.50,80.64 92.96,81.24 94.42,81.84 95.88,82.43 97.34,83.03 98.80,83.63 100.26,84.23 101.72,84.82 103.18,85.42 104.64,86.02 106.10,86.61 107.56,87.21 109.02,87.81 110.48,88.41 111.94,89.00 113.40,89.60 114.86,90.20 116.32,90.79 117.78,91.39 119.24,91.99 120.70,92.59 122.16,93.18 123.62,93.78 125.08,94.38 126.54,94.97 128.00,95.57 129.46,96.17 130.92,96.77 132.38,97.36 133.84,97.96 135.30,98.56 136.76,99.15 138.22,99.75 139.68,100.35 141.14,100.95 142.60,101.54 144.06,102.14 145.52,102.74 146.98,103.33 148.44,103.93 149.90,104.53 151.36,105.13 152.82,105.72 154.28,106.32 155.74,106.92 157.20,107.51 158.66,108.11 160.12,108.71 161.58,109.31 163.04,109.90 164.50,110.50 165.96,111.10 167.42,111.69 168.88,112.29 170.34,112.89 171.80,113.49 173.26,114.08 174.72,114.68 176.18,115.28 177.64,115.87 179.10,116.47 180.56,117.07 182.02,117.67 183.48,118.26 184.94,118.86 186.40,119.46 187.86,120.05 189.32,120.65 190.78,121.25 192.24,121.85 193.70,122.44 195.16,123.04 196.62,123.64 198.08,124.23 199.54,124.83 201.00,125.43 202.46,126.03 203.92,126.62 205.38,127.22 206.84,127.82 208.30,128.41 209.76,129.01 211.22,129.61 212.68,130.21 214.14,130.80 215.60,131.40 217.06,132.00 218.52,132.59 219.98,133.19 221.44,133.79 222.90,134.39 224.36,134.98 225.82,135.58 227.28,136.18 228.74,136.77 230.20,137.37 231.66,137.97 233.12,138.57 234.58,139.16 236.04,139.76 237.50,140.36 238.96,140.95 240.42,141.55 241.88,142.15 243.34,142.75 244.80,143.34 246.26,143.94 247.72,144.54 249.18,145.13 250.64,145.73 252.10,146.33 253.56,146.93 255.02,147.52 256.48,148.12 257.94,148.72 259.40,149.31 260.86,149.91 262.32,150.51 263.78,151.11 265.24,151.70 266.70,152.30 268.16,152.90 269.62,153.49 271.08,154.09 272.54,154.69 274.00,155.29 275.46,155.88 276.92,156.48 278.38,157.08 279.84,157.67 281.30,158.27 282.76,158.87 284.22,159.47 285.68,160.06 287.14,160.66 288.60,161.26 290.06,161.85 291.52,162.45 292.98,163.05 294.44,163.65 295.90,164.24 297.36,164.84 298.82,165.44 300.28,166.03 301.74,166.63 303.20,167.23 304.66,167.83 306.12,168.42 307.58,169.02 309.04,169.62 310.50,170.21 311.96,170.81 313.42,171.41 314.88,172.01 316.34,172.60 317.80,173.20 319.26,173.80 320.72,174.39 322.18,174.99 323.64,175.59 325.10,176.19 326.56,176.78 328.02,177.38 329.48,177.98 330.94,178.57 332.40,179.17 333.86,179.77 335.32,180.37 336.78,180.96 338.24,181.56 339.70,182.16 341.16,182.75 342.62,183.35 344.08,183.95 345.54,184.55 347.00,185.14 348.46,185.74 349.92,186.34 351.38,186.93 352.84,187.53 354.30,188.13 355.76,188.73 357.22,189.32 358.68,189.92 360.14,190.52 361.60,191.11 363.06,191.71 364.52,192.31 365.98,192.91 367.44,193.50 368.90,194.10 370.36,194.70 371.82,195.29 373.28,195.89 374.74,196.49 376.20,197.09 377.66,197.68 379.12,198.28 380.58,198.88 382.04,199.47 383.50,200.07 384.96,200.67 386.42,201.27 387.88,201.86 389.34,202.46 390.80,203.06 392.26,203.65 393.72,204.25 395.18,204.85 396.64,205.45 398.10,206.04 399.56,206.64 401.02,207.24 402.48,207.83 403.94,208.43 405.40,209.03 406.86,209.63 408.32,210.22 409.78,210.82 411.24,211.42 412.70,212.01 414.16,212.61 415.62,213.21 417.08,213.81 418.54,214.40 420.00,215.00\" fill=\"none\" stroke=\"#5C575E\" stroke-width=\"1.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<text x=\"101.5\" y=\"57.6\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y = 4 - x²</text>\n<text x=\"307.2\" y=\"152.6\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">y = 2 - x</text>\n</svg></span><p>Beräkna områdets area exakt.</p>",
    "s": "<p>Skärningspunkterna fås av</p>\n<p>\\[\n4-x^2=2-x\n\\Rightarrow x^2-x-2=0\n\\Rightarrow (x-2)(x+1)=0.\n\\]</p>\n<p>Alltså är gränserna \\(x=-1\\) och \\(x=2\\).</p>\n<p>Parabeln ligger över linjen i intervallet, så</p>\n<p>\\[\nA=\\int_{-1}^{2}\\left[(4-x^2)-(2-x)\\right]dx\n=\\int_{-1}^{2}(2+x-x^2)\\,dx.\n\\]</p>\n<p>\\[\nA=\\left[2x+\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_{-1}^{2}\n=\\frac92.\n\\]</p>\n<p><strong>Arean är \\(\\frac92\\) areaenheter.</strong></p>",
    "familj": "area_mellan_parabel_linje"
  },
  {
    "id": "3.59",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna arean mellan kurvorna.</p><p>a) \\(y=3x\\) och \\(y=x\\) för \\(0\\le x\\le2\\).<br>b) \\(y=x+4\\) och \\(y=2x\\) för \\(0\\le x\\le4\\).<br>c) \\(y=4\\) och \\(y=x^2\\) för \\(0\\le x\\le2\\).</p>",
    "s": "<p>a) \\(\\int_0^2(3x-x)dx=\\)<strong>4</strong> a.e.<br>b) \\(x+4\\ge2x\\) på intervallet: \\(\\int_0^4(4-x)dx=\\)<strong>8</strong> a.e.<br>c) \\(\\int_0^2(4-x^2)dx=\\)<strong>\\(\\frac{16}{3}\\)</strong> a.e.</p>",
    "familj": "proc_area_mellan_kurvor_1"
  },
  {
    "id": "3.60",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Kurvorna \\(y=\\sin x\\) och \\(y=\\cos x\\) begränsar tillsammans med linjerna \\(x=0\\) och \\(x=\\pi/2\\) ett område.</p>\n<span class=\"fig\"><svg width=\"480\" height=\"290\" viewBox=\"0 0 480 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graferna y lika med sinus x och y lika med cosinus x mellan 0 och pi genom 2 med området mellan graferna markerat\">\n<rect x=\"1\" y=\"1\" width=\"478\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E1E5EA\" stroke-width=\"1\"><line x1=\"70\" y1=\"45\" x2=\"70\" y2=\"225\"/><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"225\"/><line x1=\"250\" y1=\"45\" x2=\"250\" y2=\"225\"/><line x1=\"340\" y1=\"45\" x2=\"340\" y2=\"225\"/><line x1=\"430\" y1=\"45\" x2=\"430\" y2=\"225\"/><line x1=\"60\" y1=\"220\" x2=\"440\" y2=\"220\"/><line x1=\"60\" y1=\"180\" x2=\"440\" y2=\"180\"/><line x1=\"60\" y1=\"140\" x2=\"440\" y2=\"140\"/><line x1=\"60\" y1=\"100\" x2=\"440\" y2=\"100\"/><line x1=\"60\" y1=\"60\" x2=\"440\" y2=\"60\"/></g>\n<line x1=\"60\" y1=\"220\" x2=\"447\" y2=\"220\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M447 220 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"70\" y1=\"230\" x2=\"70\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<polygon points=\"70.0,60.0 72.0,60.0 74.0,60.0 76.0,60.1 78.0,60.1 80.0,60.2 82.0,60.2 84.0,60.3 86.0,60.4 88.0,60.5 90.0,60.6 92.0,60.7 94.0,60.9 96.0,61.0 98.0,61.2 100.0,61.4 102.0,61.6 104.0,61.8 106.0,62.0 108.0,62.2 110.0,62.4 112.0,62.7 114.0,62.9 116.0,63.2 118.0,63.5 120.0,63.8 122.0,64.1 124.0,64.4 126.0,64.8 128.0,65.1 130.0,65.5 132.0,65.8 134.0,66.2 136.0,66.6 138.0,67.0 140.0,67.4 142.0,67.8 144.0,68.3 146.0,68.7 148.0,69.2 150.0,69.6 152.0,70.1 154.0,70.6 156.0,71.1 158.0,71.7 160.0,72.2 162.0,72.7 164.0,73.3 166.0,73.8 168.0,74.4 170.0,75.0 172.0,75.6 174.0,76.2 176.0,76.8 178.0,77.4 180.0,78.1 182.0,78.7 184.0,79.4 186.0,80.1 188.0,80.7 190.0,81.4 192.0,82.1 194.0,82.9 196.0,83.6 198.0,84.3 200.0,85.1 202.0,85.8 204.0,86.6 206.0,87.4 208.0,88.1 210.0,88.9 212.0,89.7 214.0,90.6 216.0,91.4 218.0,92.2 220.0,93.1 222.0,93.9 224.0,94.8 226.0,95.7 228.0,96.5 230.0,97.4 232.0,98.3 234.0,99.2 236.0,100.2 238.0,101.1 240.0,102.0 242.0,103.0 244.0,103.9 246.0,104.9 248.0,105.9 250.0,106.9 252.0,107.9 254.0,108.9 256.0,109.9 258.0,110.9 260.0,111.9 262.0,112.9 264.0,114.0 266.0,115.0 268.0,116.1 270.0,117.2 272.0,118.2 274.0,119.3 276.0,120.4 278.0,121.5 280.0,122.6 282.0,123.7 284.0,124.8 286.0,126.0 288.0,127.1 290.0,128.2 292.0,129.4 294.0,130.5 296.0,131.7 298.0,132.9 300.0,134.0 302.0,135.2 304.0,136.4 306.0,137.6 308.0,138.8 310.0,140.0 312.0,141.2 314.0,142.4 316.0,143.7 318.0,144.9 320.0,146.1 322.0,147.4 324.0,148.6 326.0,149.9 328.0,151.1 330.0,152.4 332.0,153.6 334.0,154.9 336.0,156.2 338.0,157.5 340.0,158.8 342.0,160.1 344.0,161.4 346.0,162.7 348.0,164.0 350.0,165.3 352.0,166.6 354.0,167.9 356.0,169.2 358.0,170.6 360.0,171.9 362.0,173.2 364.0,174.6 366.0,175.9 368.0,177.2 370.0,178.6 372.0,179.9 374.0,181.3 376.0,182.6 378.0,184.0 380.0,185.4 382.0,186.7 384.0,188.1 386.0,189.5 388.0,190.8 390.0,192.2 392.0,193.6 394.0,195.0 396.0,196.4 398.0,197.7 400.0,199.1 402.0,200.5 404.0,201.9 406.0,203.3 408.0,204.7 410.0,206.1 412.0,207.4 414.0,208.8 416.0,210.2 418.0,211.6 420.0,213.0 422.0,214.4 424.0,215.8 426.0,217.2 428.0,218.6 430.0,220.0 430.0,60.0 428.0,60.0 426.0,60.0 424.0,60.1 422.0,60.1 420.0,60.2 418.0,60.2 416.0,60.3 414.0,60.4 412.0,60.5 410.0,60.6 408.0,60.7 406.0,60.9 404.0,61.0 402.0,61.2 400.0,61.4 398.0,61.6 396.0,61.8 394.0,62.0 392.0,62.2 390.0,62.4 388.0,62.7 386.0,62.9 384.0,63.2 382.0,63.5 380.0,63.8 378.0,64.1 376.0,64.4 374.0,64.8 372.0,65.1 370.0,65.5 368.0,65.8 366.0,66.2 364.0,66.6 362.0,67.0 360.0,67.4 358.0,67.8 356.0,68.3 354.0,68.7 352.0,69.2 350.0,69.6 348.0,70.1 346.0,70.6 344.0,71.1 342.0,71.7 340.0,72.2 338.0,72.7 336.0,73.3 334.0,73.8 332.0,74.4 330.0,75.0 328.0,75.6 326.0,76.2 324.0,76.8 322.0,77.4 320.0,78.1 318.0,78.7 316.0,79.4 314.0,80.1 312.0,80.7 310.0,81.4 308.0,82.1 306.0,82.9 304.0,83.6 302.0,84.3 300.0,85.1 298.0,85.8 296.0,86.6 294.0,87.4 292.0,88.1 290.0,88.9 288.0,89.7 286.0,90.6 284.0,91.4 282.0,92.2 280.0,93.1 278.0,93.9 276.0,94.8 274.0,95.7 272.0,96.5 270.0,97.4 268.0,98.3 266.0,99.2 264.0,100.2 262.0,101.1 260.0,102.0 258.0,103.0 256.0,103.9 254.0,104.9 252.0,105.9 250.0,106.9 248.0,107.9 246.0,108.9 244.0,109.9 242.0,110.9 240.0,111.9 238.0,112.9 236.0,114.0 234.0,115.0 232.0,116.1 230.0,117.2 228.0,118.2 226.0,119.3 224.0,120.4 222.0,121.5 220.0,122.6 218.0,123.7 216.0,124.8 214.0,126.0 212.0,127.1 210.0,128.2 208.0,129.4 206.0,130.5 204.0,131.7 202.0,132.9 200.0,134.0 198.0,135.2 196.0,136.4 194.0,137.6 192.0,138.8 190.0,140.0 188.0,141.2 186.0,142.4 184.0,143.7 182.0,144.9 180.0,146.1 178.0,147.4 176.0,148.6 174.0,149.9 172.0,151.1 170.0,152.4 168.0,153.6 166.0,154.9 164.0,156.2 162.0,157.5 160.0,158.8 158.0,160.1 156.0,161.4 154.0,162.7 152.0,164.0 150.0,165.3 148.0,166.6 146.0,167.9 144.0,169.2 142.0,170.6 140.0,171.9 138.0,173.2 136.0,174.6 134.0,175.9 132.0,177.2 130.0,178.6 128.0,179.9 126.0,181.3 124.0,182.6 122.0,184.0 120.0,185.4 118.0,186.7 116.0,188.1 114.0,189.5 112.0,190.8 110.0,192.2 108.0,193.6 106.0,195.0 104.0,196.4 102.0,197.7 100.0,199.1 98.0,200.5 96.0,201.9 94.0,203.3 92.0,204.7 90.0,206.1 88.0,207.4 86.0,208.8 84.0,210.2 82.0,211.6 80.0,213.0 78.0,214.4 76.0,215.8 74.0,217.2 72.0,218.6 70.0,220.0\" fill=\"#F3E1DE\" opacity=\"0.8\"/>\n<polyline points=\"70.0,220.0 72.0,218.6 74.0,217.2 76.0,215.8 78.0,214.4 80.0,213.0 82.0,211.6 84.0,210.2 86.0,208.8 88.0,207.4 90.0,206.1 92.0,204.7 94.0,203.3 96.0,201.9 98.0,200.5 100.0,199.1 102.0,197.7 104.0,196.4 106.0,195.0 108.0,193.6 110.0,192.2 112.0,190.8 114.0,189.5 116.0,188.1 118.0,186.7 120.0,185.4 122.0,184.0 124.0,182.6 126.0,181.3 128.0,179.9 130.0,178.6 132.0,177.2 134.0,175.9 136.0,174.6 138.0,173.2 140.0,171.9 142.0,170.6 144.0,169.2 146.0,167.9 148.0,166.6 150.0,165.3 152.0,164.0 154.0,162.7 156.0,161.4 158.0,160.1 160.0,158.8 162.0,157.5 164.0,156.2 166.0,154.9 168.0,153.6 170.0,152.4 172.0,151.1 174.0,149.9 176.0,148.6 178.0,147.4 180.0,146.1 182.0,144.9 184.0,143.7 186.0,142.4 188.0,141.2 190.0,140.0 192.0,138.8 194.0,137.6 196.0,136.4 198.0,135.2 200.0,134.0 202.0,132.9 204.0,131.7 206.0,130.5 208.0,129.4 210.0,128.2 212.0,127.1 214.0,126.0 216.0,124.8 218.0,123.7 220.0,122.6 222.0,121.5 224.0,120.4 226.0,119.3 228.0,118.2 230.0,117.2 232.0,116.1 234.0,115.0 236.0,114.0 238.0,112.9 240.0,111.9 242.0,110.9 244.0,109.9 246.0,108.9 248.0,107.9 250.0,106.9 252.0,105.9 254.0,104.9 256.0,103.9 258.0,103.0 260.0,102.0 262.0,101.1 264.0,100.2 266.0,99.2 268.0,98.3 270.0,97.4 272.0,96.5 274.0,95.7 276.0,94.8 278.0,93.9 280.0,93.1 282.0,92.2 284.0,91.4 286.0,90.6 288.0,89.7 290.0,88.9 292.0,88.1 294.0,87.4 296.0,86.6 298.0,85.8 300.0,85.1 302.0,84.3 304.0,83.6 306.0,82.9 308.0,82.1 310.0,81.4 312.0,80.7 314.0,80.1 316.0,79.4 318.0,78.7 320.0,78.1 322.0,77.4 324.0,76.8 326.0,76.2 328.0,75.6 330.0,75.0 332.0,74.4 334.0,73.8 336.0,73.3 338.0,72.7 340.0,72.2 342.0,71.7 344.0,71.1 346.0,70.6 348.0,70.1 350.0,69.6 352.0,69.2 354.0,68.7 356.0,68.3 358.0,67.8 360.0,67.4 362.0,67.0 364.0,66.6 366.0,66.2 368.0,65.8 370.0,65.5 372.0,65.1 374.0,64.8 376.0,64.4 378.0,64.1 380.0,63.8 382.0,63.5 384.0,63.2 386.0,62.9 388.0,62.7 390.0,62.4 392.0,62.2 394.0,62.0 396.0,61.8 398.0,61.6 400.0,61.4 402.0,61.2 404.0,61.0 406.0,60.9 408.0,60.7 410.0,60.6 412.0,60.5 414.0,60.4 416.0,60.3 418.0,60.2 420.0,60.2 422.0,60.1 424.0,60.1 426.0,60.0 428.0,60.0 430.0,60.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><polyline points=\"70.0,60.0 72.0,60.0 74.0,60.0 76.0,60.1 78.0,60.1 80.0,60.2 82.0,60.2 84.0,60.3 86.0,60.4 88.0,60.5 90.0,60.6 92.0,60.7 94.0,60.9 96.0,61.0 98.0,61.2 100.0,61.4 102.0,61.6 104.0,61.8 106.0,62.0 108.0,62.2 110.0,62.4 112.0,62.7 114.0,62.9 116.0,63.2 118.0,63.5 120.0,63.8 122.0,64.1 124.0,64.4 126.0,64.8 128.0,65.1 130.0,65.5 132.0,65.8 134.0,66.2 136.0,66.6 138.0,67.0 140.0,67.4 142.0,67.8 144.0,68.3 146.0,68.7 148.0,69.2 150.0,69.6 152.0,70.1 154.0,70.6 156.0,71.1 158.0,71.7 160.0,72.2 162.0,72.7 164.0,73.3 166.0,73.8 168.0,74.4 170.0,75.0 172.0,75.6 174.0,76.2 176.0,76.8 178.0,77.4 180.0,78.1 182.0,78.7 184.0,79.4 186.0,80.1 188.0,80.7 190.0,81.4 192.0,82.1 194.0,82.9 196.0,83.6 198.0,84.3 200.0,85.1 202.0,85.8 204.0,86.6 206.0,87.4 208.0,88.1 210.0,88.9 212.0,89.7 214.0,90.6 216.0,91.4 218.0,92.2 220.0,93.1 222.0,93.9 224.0,94.8 226.0,95.7 228.0,96.5 230.0,97.4 232.0,98.3 234.0,99.2 236.0,100.2 238.0,101.1 240.0,102.0 242.0,103.0 244.0,103.9 246.0,104.9 248.0,105.9 250.0,106.9 252.0,107.9 254.0,108.9 256.0,109.9 258.0,110.9 260.0,111.9 262.0,112.9 264.0,114.0 266.0,115.0 268.0,116.1 270.0,117.2 272.0,118.2 274.0,119.3 276.0,120.4 278.0,121.5 280.0,122.6 282.0,123.7 284.0,124.8 286.0,126.0 288.0,127.1 290.0,128.2 292.0,129.4 294.0,130.5 296.0,131.7 298.0,132.9 300.0,134.0 302.0,135.2 304.0,136.4 306.0,137.6 308.0,138.8 310.0,140.0 312.0,141.2 314.0,142.4 316.0,143.7 318.0,144.9 320.0,146.1 322.0,147.4 324.0,148.6 326.0,149.9 328.0,151.1 330.0,152.4 332.0,153.6 334.0,154.9 336.0,156.2 338.0,157.5 340.0,158.8 342.0,160.1 344.0,161.4 346.0,162.7 348.0,164.0 350.0,165.3 352.0,166.6 354.0,167.9 356.0,169.2 358.0,170.6 360.0,171.9 362.0,173.2 364.0,174.6 366.0,175.9 368.0,177.2 370.0,178.6 372.0,179.9 374.0,181.3 376.0,182.6 378.0,184.0 380.0,185.4 382.0,186.7 384.0,188.1 386.0,189.5 388.0,190.8 390.0,192.2 392.0,193.6 394.0,195.0 396.0,196.4 398.0,197.7 400.0,199.1 402.0,200.5 404.0,201.9 406.0,203.3 408.0,204.7 410.0,206.1 412.0,207.4 414.0,208.8 416.0,210.2 418.0,211.6 420.0,213.0 422.0,214.4 424.0,215.8 426.0,217.2 428.0,218.6 430.0,220.0\" fill=\"none\" stroke=\"#476582\" stroke-width=\"3\"/>\n<circle cx=\"250\" cy=\"106.86291501015239\" r=\"4\" fill=\"#2B2527\"/><text x=\"258\" y=\"98.86291501015239\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">pi/4</text><text x=\"425\" y=\"245\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">pi/2</text><text x=\"363.3543911069815\" y=\"56.71746235372402\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">sin x</text><text x=\"363.3543911069815\" y=\"192.12556645888714\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#476582\">cos x</text>\n</svg></span>\n<p>Beräkna områdets area exakt.</p>",
    "s": "<p>Kurvorna skär varandra när \\(\\sin x=\\cos x\\), alltså vid \\(x=\\pi/4\\).</p>\n<p>På \\([0,\\pi/4]\\) ligger cosinus över sinus. På \\([\\pi/4,\\pi/2]\\) ligger sinus över cosinus.</p>\n<p>På grund av symmetrin räcker det att dubbla den första arean:</p><p>\\[A=2\\int_0^{\\pi/4}(\\cos x-\\sin x)\\,dx.\\]</p><p>\\[A=2[\\sin x+\\cos x]_0^{\\pi/4}=2(\\sqrt2-1).\\]</p><p><strong>\\(A=2\\sqrt2-2\\) areaenheter.</strong></p>",
    "familj": "area_sin_cos_symmetri_svg"
  },
  {
    "id": "3.61",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm konstanten \\(k\\) så att</p><p>\\[\\int_0^2(kx+1)\\,dx=10.\\]</p>",
    "s": "<p><strong>Metod:</strong> Bestäm en primitiv funktion, sätt in övre och undre gränsen och subtrahera.</p><p>\\[\\int_0^2(kx+1)dx=\\left[\\frac{kx^2}{2}+x\\right]_0^2=2k+2.\\]</p><p>\\(2k+2=10\\Rightarrow\\boxed{k=4}\\).</p>",
    "familj": "integral_parameter_linjar"
  },
  {
    "id": "3.62",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(x^{-2}\\)<br>b) \\(\\sqrt{x}\\)<br>c) \\(2\\cos x\\)<br>d) \\(5\\sin x\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd potensregeln baklänges för potenser och standardprimitiverna för sinus och cosinus.</p><p>a) \\(\\int x^{-2}dx=\\frac{x^{-1}}{-1}=\\boxed{-x^{-1}+C}\\).</p><p>b) \\(\\sqrt{x}=x^{1/2}\\), så \\(\\int x^{1/2}dx=\\boxed{\\frac23x^{3/2}+C}\\).</p><p>c) \\(\\int2\\cos x\\,dx=\\boxed{2\\sin x+C}\\).</p><p>d) \\(\\int5\\sin x\\,dx=\\boxed{-5\\cos x+C}\\).</p>",
    "familj": "proc_primitiva_2"
  },
  {
    "id": "3.63",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En partikels hastighet är \\(v(t)=4t-2\\) m/s.</p><p>a) Bestäm förflyttningen från \\(t=1\\) s till \\(t=4\\) s.<br>b) Bestäm partikelns hastighet vid \\(t=4\\) s.<br>c) Om \\(s(1)=5\\) m, bestäm \\(s(4)\\).</p>",
    "s": "<p>a) \\(\\int_1^4(4t-2)dt=[2t^2-2t]_1^4=(32-8)-(2-2)=\\boxed{24\\text{ m}}\\).</p><p>b) \\(v(4)=16-2=\\boxed{14\\text{ m/s}}\\).</p><p>c) \\(s(4)=s(1)+24=\\boxed{29\\text{ m}}\\).</p>",
    "familj": "proc_integral_hastighet_2"
  },
  {
    "id": "3.64",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm först skärningspunkterna och beräkna sedan arean mellan kurvorna.</p><p>a) \\(y=x^2\\) och \\(y=2x\\).<br>b) \\(y=x^2-1\\) och \\(y=3\\).<br>c) \\(y=x^2\\) och \\(y=4x-x^2\\).</p>",
    "s": "<p>a) Skärningar \\(x=0,2\\). Area \\(\\int_0^2(2x-x^2)dx=\\)<strong>\\(\\frac43\\)</strong>.</p><p>b) \\(x^2-1=3\\Rightarrow x=\\pm2\\). Area \\(\\int_{-2}^2(4-x^2)dx=\\)<strong>\\(\\frac{32}{3}\\)</strong>.</p><p>c) \\(2x^2=4x\\Rightarrow x=0,2\\). Area \\(\\int_0^2(4x-2x^2)dx=\\)<strong>\\(\\frac83\\)</strong>.</p>",
    "familj": "proc_area_mellan_skarningar_c"
  },
  {
    "id": "3.65",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(f(x)=4\\cos x\\)<br>b) \\(g(x)=3\\sin x\\)<br>c) \\(h(x)=2e^{2x}\\)<br>d) \\(p(x)=5/x\\), \\(x&gt;0\\)</p>",
    "s": "<p>a) \\(\\boxed{4\\sin x+C}\\)</p><p>b) \\(\\boxed{-3\\cos x+C}\\)</p><p>c) \\(\\boxed{e^{2x}+C}\\)</p><p>d) \\(\\boxed{5\\ln x+C}\\)</p>",
    "familj": "primitiv_trig_exp_log_e"
  },
  {
    "id": "3.66",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För \\(a>0\\) begränsas ett område av kurvan \\(y=a-x^2\\) och x-axeln.</p><p>Bestäm \\(a\\) så att områdets area är \\(32/3\\) areaenheter.</p>",
    "s": "<p>Nollställena är \\(x=\\pm\\sqrt a\\). Symmetri ger</p><p>\\[A=2\\int_0^{\\sqrt a}(a-x^2)dx=2\\left[a x-\\frac{x^3}{3}\\right]_0^{\\sqrt a}=\\frac{4}{3}a^{3/2}.\\]</p><p>Sätt lika med \\(32/3\\): \\(a^{3/2}=8\\Rightarrow a=4\\).</p><p><strong>\\(a=4\\).</strong></p>",
    "familj": "area_parameter_a"
  },
  {
    "id": "3.67",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Området under \\(y=x\\) från \\(x=0\\) till \\(x=3\\) roteras kring x-axeln.</p><p>a) Skriv volymintegralen.<br>b) Beräkna volymen.<br>c) Vilken välkänd kropp får man?</p>",
    "s": "<p>a) \\(V=\\pi\\int_0^3x^2dx\\).</p><p>b) \\(V=\\pi[x^3/3]_0^3=\\)<strong>\\(9\\pi\\)</strong>.</p><p>c) Området bildar en <strong>rät cirkulär kon</strong> med radie och höjd 3.</p>",
    "familj": "rotation_kon_e"
  },
  {
    "id": "3.68",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^\\pi\\sin x\\,dx\\)<br>b) \\(\\int_0^{2\\pi}\\cos x\\,dx\\)<br>c) \\(\\int_0^{\\pi/2}2\\sin x\\,dx\\)<br>d) \\(\\int_0^{\\pi/3}3\\cos x\\,dx\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(\\int\\sin x\\,dx=-\\cos x\\) och \\(\\int\\cos x\\,dx=\\sin x\\).</p><p>a) \\([-\\cos x]_0^\\pi=1-(-1)=\\boxed{2}\\).</p><p>b) \\([\\sin x]_0^{2\\pi}=0-0=\\boxed{0}\\).</p><p>c) \\([-2\\cos x]_0^{\\pi/2}=0-(-2)=\\boxed{2}\\).</p><p>d) \\([3\\sin x]_0^{\\pi/3}=3\\cdot\\frac{\\sqrt3}{2}=\\boxed{\\frac{3\\sqrt3}{2}}\\).</p>",
    "familj": "proc_integral_trig_1"
  },
  {
    "id": "3.69",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En funktion \\(P(t)=200+50t\\) anger effekt i watt under tidsintervallet \\(0\\le t\\le4\\) timmar.</p><p>a) Ställ upp en integral för energin under intervallet.<br>b) Beräkna energin i Wh.</p>",
    "s": "<p>a) \\[E=\\int_0^4(200+50t)dt.\\]</p><p>b) \\([200t+25t^2]_0^4=800+400=\\boxed{1200\\text{ Wh}}\\).</p>",
    "familj": "proc_integral_effekt_energi_2"
  },
  {
    "id": "3.70",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En slumpvariabel har täthetsfunktionen \\(f(x)=2x\\) för \\(0\\le x\\le1\\).</p><p>Bestäm \\(P(0,2\\le X\\le0,7)\\).</p>",
    "s": "<p>\\[P(0,2\\le X\\le0,7)=\\int_{0,2}^{0,7}2x dx=[x^2]_{0,2}^{0,7}=0,49-0,04=\\boxed{0,45}.\\]</p>",
    "familj": "tathet_2x_intervall"
  },
  {
    "id": "3.71",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan parabeln \\(y=x^2\\) och linjen \\(y=4\\), för \\(-2\\le x\\le2\\), roteras kring linjen \\(y=4\\).</p><p>Bestäm rotationskroppens volym exakt.</p>",
    "s": "<p>Avståndet från rotationsaxeln \\(y=4\\) till parabeln är \\(R(x)=4-x^2\\). Skivmetoden ger</p><p>\\[V=\\pi\\int_{-2}^{2}(4-x^2)^2dx.\\]</p><p>Integranden är jämn:</p><p>\\[V=2\\pi\\int_0^2(16-8x^2+x^4)dx=2\\pi\\left[16x-\\frac83x^3+\\frac{x^5}{5}\\right]_0^2.\\]</p><p><strong>\\(\\boxed{V=512\\pi/15}\\)</strong>.</p>",
    "familj": "rotation_parabel_kring_y4"
  },
  {
    "id": "3.72",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Grafen till \\(f(x)=2-x\\) och koordinataxlarna begränsar ett område i första kvadranten.</p><span class=\"fig\"><svg width=\"430\" height=\"270\" viewBox=\"0 0 430 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"22\" x2=\"48.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"166.0\" y1=\"22\" x2=\"166.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"166.0\" y=\"249.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"284.0\" y1=\"22\" x2=\"284.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"284.0\" y=\"249.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"402.0\" y1=\"22\" x2=\"402.0\" y2=\"232\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"402.0\" y=\"249.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><line x1=\"48\" y1=\"232.0\" x2=\"402\" y2=\"232.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"48\" y1=\"162.0\" x2=\"402\" y2=\"162.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"40.0\" y=\"166.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text><line x1=\"48\" y1=\"92.0\" x2=\"402\" y2=\"92.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"40.0\" y=\"96.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text><line x1=\"48\" y1=\"22.0\" x2=\"402\" y2=\"22.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><text x=\"40.0\" y=\"26.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text><polygon points=\"48.0,232.0 48.0,92.0 284.0,232.0\" fill=\"#F6E8E5\" opacity=\"0.85\"/><polyline points=\"48.0,92.0 284.0,232.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"394\" y=\"38\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y=2-x</text></svg></span><p>Beräkna områdets area med en integral.</p>",
    "s": "<p>\\[A=\\int_0^2(2-x)\\,dx=[2x-x^2/2]_0^2=2.\\]</p><p><strong>2 areaenheter.</strong></p>",
    "familj": "area_triangel_integral"
  },
  {
    "id": "3.73",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Effekten från en solcellsanläggning modelleras under sex timmar av \\(P(t)=1200\\sin(\\pi t/6)\\) W, \\(0\\le t\\le6\\).</p><p>Bestäm den producerade energin under intervallet. Svara i kWh.</p>",
    "s": "<p><strong>Metod:</strong> Översätt först situationen till en integral. Kontrollera sedan vad integralens tecken och enhet betyder i sammanhanget.</p><p>Energin i Wh är</p><p>\\[E=\\int_0^6 1200\\sin(\\pi t/6)dt=\\frac{14400}{\\pi}\\text{ Wh}.\\]</p><p>Detta är \\(14,4/\\pi\\approx4,58\\) kWh.</p><p><strong>Cirka 4,58 kWh.</strong></p>",
    "familj": "integral_effekt_sol"
  },
  {
    "id": "3.74",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(f(x)=6x^2-4x+3\\)<br>b) \\(g(x)=5e^x\\)<br>c) \\(h(x)=4\\cos x\\)<br>d) \\(p(x)=3/x\\), \\(x>0\\)</p>",
    "s": "<p>a) \\(F(x)=2x^3-2x^2+3x+C\\)<br>b) \\(G(x)=5e^x+C\\)<br>c) \\(H(x)=4\\sin x+C\\)<br>d) \\(P(x)=3\\ln x+C\\)</p>",
    "familj": "primitiv_rutin_fyra"
  },
  {
    "id": "3.75",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Inflödet till en tank är \\(q(t)=30-2t\\) liter/minut för \\(0\\le t\\le10\\).</p><p>a) Hur många liter rinner in under de 10 minuterna?<br>b) Om tanken innehåller 200 liter från början, hur mycket finns efter 10 minuter om inget rinner ut?</p>",
    "s": "<p>a) \\(\\int_0^{10}(30-2t)dt=[30t-t^2]_0^{10}=300-100=\\boxed{200\\text{ L}}\\).</p><p>b) \\(200+200=\\boxed{400\\text{ L}}\\).</p>",
    "familj": "proc_integral_inflode_2"
  },
  {
    "id": "3.76",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Effekten från en solpanel under en molnfri tolvtimmarsdag modelleras med</p><p>\\[P(t)=600\\sin\\left(\\frac{\\pi t}{12}\\right),\\qquad 0\\le t\\le12,\\]</p><p>där \\(P\\) mäts i watt och \\(t\\) i timmar.</p><p>Bestäm den totala producerade energin under dagen i kWh. Svara med två decimaler.</p>",
    "s": "<p>Energin fås genom att integrera effekten över tiden:</p><p>\\[E=\\int_0^{12}600\\sin\\left(\\frac{\\pi t}{12}\\right)dt.\\]</p>\n<p>En primitiv funktion är \\(-\\frac{7200}{\\pi}\\cos(\\pi t/12)\\). Därför</p><p>\\[E=\\frac{14400}{\\pi}\\text{ Wh}\\approx4583,66\\text{ Wh}.\\]</p><p><strong>\\(E\\approx4,58\\) kWh.</strong></p>",
    "familj": "solpanel_energi_integral"
  },
  {
    "id": "3.77",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna exakt.</p><p>a) \\(\\int_{-1}^{1}x^2\\,dx\\)<br>b) \\(\\int_{-2}^{2}x^3\\,dx\\)<br>c) \\(\\int_1^4\\frac1{\\sqrt{x}}\\,dx\\)<br>d) \\(\\int_1^e\\frac1x\\,dx\\)</p>",
    "s": "<p>a) <strong>\\(\\frac23\\)</strong>.<br>b) Integranden är udda över ett symmetriskt intervall: <strong>0</strong>.<br>c) \\([2\\sqrt{x}]_1^4=4-2=\\)<strong>2</strong>.<br>d) \\([\\ln x]_1^e=\\)<strong>1</strong>.</p>",
    "familj": "proc_integral_bestamd_2"
  },
  {
    "id": "3.78",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^2(3x+1)\\,dx\\)<br>b) \\(\\int_0^{\\pi/2}\\cos x\\,dx\\)<br>c) \\(\\int_1^e\\frac1x\\,dx\\)</p>",
    "s": "<p>a) \\([\\frac32x^2+x]_0^2=6+2=\\)<strong>8</strong>.</p><p>b) \\([\\sin x]_0^{\\pi/2}=\\)<strong>1</strong>.</p><p>c) \\([\\ln x]_1^e=\\)<strong>1</strong>.</p>",
    "familj": "bestamda_integraler_rutin"
  },
  {
    "id": "3.79",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Grafen visar inflödet till en tank i liter per minut. Under de första 4 minuterna är inflödet 50 L/min. Därefter minskar det linjärt till 20 L/min vid \\(t=8\\) min.</p><span class=\"fig\"><svg width=\"480\" height=\"280\" viewBox=\"0 0 480 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Flödesgraf: 50 liter per minut i fyra minuter och därefter linjärt ned till 20 liter per minut efter åtta minuter\">\n<rect x=\"1\" y=\"1\" width=\"478\" height=\"278\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E1E6EA\"><line x1=\"60\" y1=\"225\" x2=\"440\" y2=\"225\"/><line x1=\"60\" y1=\"175\" x2=\"440\" y2=\"175\"/><line x1=\"60\" y1=\"125\" x2=\"440\" y2=\"125\"/><line x1=\"60\" y1=\"75\" x2=\"440\" y2=\"75\"/><line x1=\"60\" y1=\"25\" x2=\"440\" y2=\"25\"/><line x1=\"60\" y1=\"25\" x2=\"60\" y2=\"225\"/><line x1=\"155\" y1=\"25\" x2=\"155\" y2=\"225\"/><line x1=\"250\" y1=\"25\" x2=\"250\" y2=\"225\"/><line x1=\"345\" y1=\"25\" x2=\"345\" y2=\"225\"/><line x1=\"440\" y1=\"25\" x2=\"440\" y2=\"225\"/></g>\n<line x1=\"60\" y1=\"225\" x2=\"445\" y2=\"225\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"20\" stroke=\"#2B2527\" stroke-width=\"1.7\"/>\n<polygon points=\"60,58.3 250,58.3 440,158.3 440,225 60,225\" fill=\"#DCEFF2\"/>\n<polyline points=\"60,58.3 250,58.3 440,158.3\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/>\n<text x=\"55\" y=\"62\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">50</text><text x=\"55\" y=\"162\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">20</text><text x=\"250\" y=\"244\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">4</text><text x=\"440\" y=\"244\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">8 min</text><text x=\"75\" y=\"35\" font-family=\"sans-serif\" font-size=\"11\">liter/min</text>\n</svg></span><p>Hur mycket vatten har tillförts under de första 8 minuterna?</p>",
    "s": "<p>Vattenmängden är arean under flödesgrafen.</p><p>Första 4 min: \\(50\\cdot4=200\\) L.</p><p>Nästa 4 min bildar en trapets med medelhöjd \\((50+20)/2=35\\): \\(35\\cdot4=140\\) L.</p><p><strong>Totalt \\(200+140=\\boxed{340\\text{ L}}\\).</strong></p>",
    "familj": "flodesgraf_trapets_total"
  },
  {
    "id": "3.80",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(3x^2\\)<br>b) \\(e^{2x}\\)<br>c) \\(\\cos3x\\)<br>d) \\(1/x\\), \\(x&gt;0\\)</p>",
    "s": "<p><strong>Metod:</strong> Kontrollera gärna svaret genom att derivera den primitiva funktionen.</p><p>a) \\(\\int3x^2dx=\\boxed{x^3+C}\\).</p><p>b) Eftersom \\((e^{2x})'=2e^{2x}\\) blir en primitiv funktion \\(\\boxed{\\frac12e^{2x}+C}\\).</p><p>c) Eftersom \\((\\sin3x)'=3\\cos3x\\) blir svaret \\(\\boxed{\\frac13\\sin3x+C}\\).</p><p>d) För \\(x>0\\): \\(\\boxed{\\ln x+C}\\).</p>",
    "familj": "primitiver_blandad_rutin"
  },
  {
    "id": "3.81",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm medelvärdet av funktionen.</p><p>a) \\(f(x)=x^2\\) på intervallet \\([0,3]\\).<br>b) \\(g(x)=2x+1\\) på intervallet \\([1,5]\\).</p>",
    "s": "<p>Medelvärdet är \\(\\frac1{b-a}\\int_a^bf(x)dx\\).</p><p>a) \\(\\frac13[x^3/3]_0^3=\\frac13\\cdot9=\\\\boxed{3}\\).</p><p>b) \\(\\frac14[x^2+x]_1^5=\\frac14(30-2)=\\\\boxed{7}\\).</p>",
    "familj": "proc_integral_medelvarde_2"
  },
  {
    "id": "3.82",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Kurvorna \\(y=\\cos x\\) och \\(y=\\sin x\\) begränsar tillsammans med y-axeln ett område i första kvadranten fram till deras första skärning.</p><span class=\"fig\"><svg width=\"450\" height=\"235\" viewBox=\"0 0 450 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graferna y=cos x och y=sin x med område mellan dem\"><rect x=\"1\" y=\"1\" width=\"448\" height=\"233\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"45\" y1=\"185\" x2=\"420\" y2=\"185\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"25\" x2=\"80\" y2=\"215\" stroke=\"#2B2527\"/><path d=\"M80 90 C130 35,180 35,230 90 C280 145,330 145,380 90\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.4\"/><path d=\"M80 130 C130 170,180 170,230 130 C280 90,330 90,380 130\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.4\"/><path d=\"M80 90 C130 35,180 35,230 90 L230 130 C180 170,130 170,80 130 Z\" fill=\"#DCEEF1\" opacity=\"0.7\"/><text x=\"360\" y=\"75\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">cos x</text><text x=\"350\" y=\"145\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">sin x</text><text x=\"80\" y=\"207\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">0</text><text x=\"230\" y=\"207\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">π/4</text></svg></span><p>Bestäm områdets area exakt.</p>",
    "s": "<p>Första skärningen i första kvadranten fås av \\(\\sin x=\\cos x\\Rightarrow x=\\pi/4\\).</p><p>På \\([0,\\pi/4]\\) ligger cosinus över sinus:</p><p>\\[A=\\int_0^{\\pi/4}(\\cos x-\\sin x)dx=[\\sin x+\\cos x]_0^{\\pi/4}.\\]</p><p>\\[A=\\sqrt2-1.\\]</p><p><strong>Arean är \\(\\sqrt2-1\\).</strong></p>",
    "familj": "area_sin_cos_c"
  },
  {
    "id": "3.83",
    "kap": 3,
    "omr": "area_mellan_kurvor",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm arean mellan kurvorna \\(y=x\\) och \\(y=x^2\\) i intervallet \\(0\\le x\\le1\\).</p>",
    "s": "<p><strong>Metod:</strong> Ta först reda på vilken graf som ligger överst. Arean fås genom att integrera övre funktion minus undre funktion.</p><p>I intervallet ligger \\(y=x\\) över \\(y=x^2\\).</p><p>\\[A=\\int_0^1(x-x^2)\\,dx=\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac16.\\]</p><p><strong>\\(1/6\\) areaenheter.</strong></p>",
    "familj": "area_mellan_rutin"
  },
  {
    "id": "3.84",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En kontinuerlig slumpvariabel \\(X\\) har täthetsfunktionen</p><p>\\[f(x)=kx(2-x),\\qquad 0\\le x\\le2,\\]</p><p>och \\(f(x)=0\\) annars.</p><p>a) Bestäm konstanten \\(k\\).<br>b) Bestäm \\(P(0,5\\le X\\le1,5)\\) exakt.</p>",
    "s": "<p>a) En täthetsfunktion ska ha total integral 1:</p><p>\\[1=k\\int_0^2x(2-x)\\,dx=k\\left[x^2-\\frac{x^3}{3}\\right]_0^2=k\\frac43.\\]</p><p>Alltså <strong>\\(k=3/4\\)</strong>.</p>\n<p>b)</p><p>\\[P=\\int_{1/2}^{3/2}\\frac34x(2-x)\\,dx.\\]</p><p>En primitiv funktion är \\(\\frac34x^2-\\frac14x^3\\). Insättning ger</p><p><strong>\\(P=11/16\\).</strong></p>",
    "familj": "tathet_parabel_k_probability"
  },
  {
    "id": "3.85",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En hastighet \\(v(t)\\) anges i m/s. Bestäm förflyttningen.</p><p>a) \\(v(t)=3t\\), \\(0\\le t\\le4\\).<br>b) \\(v(t)=8-2t\\), \\(0\\le t\\le3\\).<br>c) \\(v(t)=5\\), \\(2\\le t\\le7\\).</p>",
    "s": "<p>Förflyttning ges av \\(\\int v(t)dt\\).</p><p>a) \\(\\int_0^4 3t dt=\\)<strong>24 m</strong>.<br>b) \\(\\int_0^3(8-2t)dt=24-9=\\)<strong>15 m</strong>.<br>c) \\(\\int_2^7 5dt=\\)<strong>25 m</strong>.</p>",
    "familj": "proc_integral_hastighet_1"
  },
  {
    "id": "3.86",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Grafen visar hur snabbt vatten rinner in i en tank.</p><span class=\"fig\"><svg width=\"465\" height=\"250\" viewBox=\"0 0 465 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf över påfyllningshastighet som först är 60, sedan minskar linjärt till 20 och därefter är konstant\">\n<rect x=\"1\" y=\"1\" width=\"463\" height=\"248\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"60.0\" y1=\"25\" x2=\"60.0\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"60.0\" y=\"226\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text>\n<line x1=\"145.2\" y1=\"25\" x2=\"145.2\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"145.2\" y=\"226\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"230.5\" y1=\"25\" x2=\"230.5\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"230.5\" y=\"226\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">10</text>\n<line x1=\"315.7\" y1=\"25\" x2=\"315.7\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"315.7\" y=\"226\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">15</text>\n<line x1=\"400.9\" y1=\"25\" x2=\"400.9\" y2=\"210\" stroke=\"#D9E6E9\"/>\n<text x=\"400.9\" y=\"226\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">20</text>\n<line x1=\"60\" y1=\"210.0\" x2=\"435\" y2=\"210.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"60\" y1=\"183.6\" x2=\"435\" y2=\"183.6\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"186.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">10</text>\n<line x1=\"60\" y1=\"157.1\" x2=\"435\" y2=\"157.1\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"160.1\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">20</text>\n<line x1=\"60\" y1=\"130.7\" x2=\"435\" y2=\"130.7\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"133.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">30</text>\n<line x1=\"60\" y1=\"104.3\" x2=\"435\" y2=\"104.3\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"107.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">40</text>\n<line x1=\"60\" y1=\"77.9\" x2=\"435\" y2=\"77.9\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"80.9\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">50</text>\n<line x1=\"60\" y1=\"51.4\" x2=\"435\" y2=\"51.4\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"54.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">60</text>\n<line x1=\"60\" y1=\"25.0\" x2=\"435\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">70</text>\n<line x1=\"60\" y1=\"210\" x2=\"435\" y2=\"210\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"60\" y1=\"25\" x2=\"60\" y2=\"210\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polygon points=\"60.0,210.0 60.0,51.4 145.2,51.4 315.7,157.1 400.9,157.1 400.9,210.0\" fill=\"#EAF4F6\" stroke=\"none\"/>\n<polyline points=\"60.0,51.4 145.2,51.4 315.7,157.1 400.9,157.1\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.8\"/>\n<text x=\"430\" y=\"40\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#268FA3\">liter/min</text>\n<text x=\"430\" y=\"243\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5C575E\">tid (min)</text>\n</svg></span><p>Hur många liter vatten har tillförts under de första 20 minuterna?</p>",
    "s": "<p>Vattenmängden är arean under hastighetsgrafen.</p>\n<p>0–5 min: rektangel</p>\n<p>\\[\n5\\cdot60=300\\text{ liter}.\n\\]</p>\n<p>5–15 min: trapets</p>\n<p>\\[\n10\\cdot\\frac{60+20}{2}=400\\text{ liter}.\n\\]</p>\n<p>15–20 min: rektangel</p>\n<p>\\[\n5\\cdot20=100\\text{ liter}.\n\\]</p>\n<p>Totalt</p>\n<p><strong>\\[\n300+400+100=800\\text{ liter}.\n\\]</strong></p>",
    "familj": "flodesgraf_integral"
  },
  {
    "id": "3.87",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Funktionen \\(f(x)=kx\\) för \\(0\\le x\\le2\\) och \\(f(x)=0\\) annars ska vara en täthetsfunktion.</p><p>a) Bestäm \\(k\\).<br>b) Bestäm \\(P(X\\le1)\\).<br>c) Bestäm \\(P(1\\le X\\le2)\\).</p>",
    "s": "<p>a) \\(1=\\int_0^2kx dx=2k\\Rightarrow\\boxed{k=1/2}\\).</p><p>b) \\(\\int_0^1x/2\\,dx=[x^2/4]_0^1=\\boxed{1/4}\\).</p><p>c) \\(1-1/4=\\boxed{3/4}\\).</p>",
    "familj": "proc_tathet_linjart_2"
  },
  {
    "id": "3.88",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En täthetsfunktion är symmetrisk kring \\(x=2\\) och ges på intervallet \\(0\\le x\\le4\\) av</p><p>\\[f(x)=k\\left(4-(x-2)^2\\right),\\]</p><p>och är 0 annars.</p><p>a) Bestäm \\(k\\).<br>b) Utan att integrera en gång till: bestäm medianen.<br>c) Bestäm \\(P(|X-2|\\le1)\\) exakt.</p>",
    "s": "<p>a) Sätt \\(u=x-2\\):</p><p>\\[1=k\\int_{-2}^2(4-u^2)du=k\\cdot\\frac{32}{3}\\Rightarrow\\boxed{k=3/32}.\\]</p><p>b) Tätheten är symmetrisk kring 2, alltså är medianen \\(\\boxed{2}\\).</p><p>c)</p><p>\\[P(1\\le X\\le3)=\\frac3{32}\\int_{-1}^1(4-u^2)du=\\frac3{32}\\cdot\\frac{22}{3}=\\boxed{\\frac{11}{16}}.\\]</p>",
    "familj": "tathet_symmetrisk_parabel_a"
  },
  {
    "id": "3.89",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Funktionen \\(f(x)=kx\\) för \\(0\\le x\\le2\\), och \\(f(x)=0\\) annars, ska vara en täthetsfunktion.</p><p>a) Bestäm \\(k\\).<br>b) Bestäm \\(P(X>1)\\).</p>",
    "s": "<p><strong>Metod:</strong> För en täthetsfunktion är den totala arean 1. Sannolikheten för ett intervall fås genom att integrera tätheten över intervallet.</p><p>a) Kravet är \\(\\int_0^2kx\\,dx=1\\). Det ger \\(2k=1\\Rightarrow k=1/2\\).</p><p>b) \\(P(X>1)=\\int_1^2x/2\\,dx=[x^2/4]_1^2=3/4\\).</p><p><strong>\\(k=1/2\\), \\(P(X>1)=0,75\\).</strong></p>",
    "familj": "tathet_linjar"
  },
  {
    "id": "3.90",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Det skuggade området ligger mellan grafen \\(y=f(x)\\), x-axeln, y-axeln och linjen \\(x=4\\).</p><span class=\"fig\"><svg width=\"450\" height=\"235\" viewBox=\"0 0 450 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf med skuggat område under kurvan\"><rect x=\"1\" y=\"1\" width=\"448\" height=\"233\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"50\" y1=\"190\" x2=\"410\" y2=\"190\" stroke=\"#2B2527\"/><line x1=\"85\" y1=\"25\" x2=\"85\" y2=\"220\" stroke=\"#2B2527\"/><path d=\"M85 190 C130 70,205 55,260 110 C315 165,350 170,395 95\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.5\"/><path d=\"M85 190 C130 70,205 55,260 110 C285 135,305 152,330 160 L330 190 L85 190 Z\" fill=\"#DCEEF1\" opacity=\"0.75\"/><line x1=\"330\" y1=\"55\" x2=\"330\" y2=\"190\" stroke=\"#B43123\" stroke-dasharray=\"6 4\"/><text x=\"330\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">x=4</text><text x=\"160\" y=\"78\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y=f(x)</text></svg></span><p>a) Skriv ett integraluttryck för arean om \\(f(x)\\ge0\\) på intervallet.<br>b) Om \\(\\int_0^4f(x)\\,dx=11,5\\), bestäm arean.<br>c) Vad ändras om \\(f\\) är negativ på en del av intervallet?</p>",
    "s": "<p>a) <strong>\\(A=\\int_0^4f(x)\\,dx\\)</strong>, under förutsättning att \\(f\\ge0\\).</p><p>b) <strong>11,5 areaenheter</strong>.</p><p>c) Då måste intervallet delas vid nollställena och negativa integralbidrag tas med absolutbelopp när geometrisk area beräknas.</p>",
    "familj": "area_tolkning_e2"
  },
  {
    "id": "3.91",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>I första kvadranten begränsas ett område av kurvorna \\(y=\\sqrt{x}\\) och \\(y=x/2\\). Kurvorna skär varandra vid \\(x=0\\) och \\(x=4\\). Området roteras kring linjen \\(y=-1\\).</p>\n<span class=\"fig\"><svg width=\"480\" height=\"310\" viewBox=\"0 0 480 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Område mellan y lika med roten ur x och y lika med x genom 2 roterat kring linjen y lika med minus 1\">\n<rect x=\"1\" y=\"1\" width=\"478\" height=\"308\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"71.59574468085106\" y1=\"35\" x2=\"71.59574468085106\" y2=\"270\"/><line x1=\"154.5744680851064\" y1=\"35\" x2=\"154.5744680851064\" y2=\"270\"/><line x1=\"237.5531914893617\" y1=\"35\" x2=\"237.5531914893617\" y2=\"270\"/><line x1=\"320.531914893617\" y1=\"35\" x2=\"320.531914893617\" y2=\"270\"/><line x1=\"403.51063829787233\" y1=\"35\" x2=\"403.51063829787233\" y2=\"270\"/><line x1=\"55\" y1=\"257.2972972972973\" x2=\"445\" y2=\"257.2972972972973\"/><line x1=\"55\" y1=\"193.7837837837838\" x2=\"445\" y2=\"193.7837837837838\"/><line x1=\"55\" y1=\"130.27027027027026\" x2=\"445\" y2=\"130.27027027027026\"/><line x1=\"55\" y1=\"66.75675675675674\" x2=\"445\" y2=\"66.75675675675674\"/></g>\n<line x1=\"55\" y1=\"193.7837837837838\" x2=\"452\" y2=\"193.7837837837838\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"71.59574468085106\" y1=\"275\" x2=\"71.59574468085106\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<line x1=\"55\" y1=\"257.2972972972973\" x2=\"445\" y2=\"257.2972972972973\" stroke=\"#476582\" stroke-width=\"2\" stroke-dasharray=\"7 5\"/><text x=\"345.4255319148936\" y=\"250.2972972972973\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#476582\">y = -1</text>\n<polygon points=\"71.6,193.8 73.7,183.7 75.7,179.6 77.8,176.4 79.9,173.7 82.0,171.3 84.0,169.2 86.1,167.2 88.2,165.4 90.3,163.7 92.3,162.0 94.4,160.5 96.5,159.0 98.6,157.6 100.6,156.2 102.7,154.9 104.8,153.6 106.9,152.4 108.9,151.2 111.0,150.0 113.1,148.9 115.2,147.8 117.2,146.7 119.3,145.6 121.4,144.6 123.5,143.6 125.5,142.6 127.6,141.6 129.7,140.6 131.8,139.7 133.8,138.8 135.9,137.9 138.0,137.0 140.1,136.1 142.1,135.2 144.2,134.4 146.3,133.5 148.4,132.7 150.4,131.9 152.5,131.1 154.6,130.3 156.6,129.5 158.7,128.7 160.8,127.9 162.9,127.2 164.9,126.4 167.0,125.7 169.1,124.9 171.2,124.2 173.2,123.5 175.3,122.8 177.4,122.1 179.5,121.4 181.5,120.7 183.6,120.0 185.7,119.3 187.8,118.6 189.8,118.0 191.9,117.3 194.0,116.6 196.1,116.0 198.1,115.4 200.2,114.7 202.3,114.1 204.4,113.4 206.4,112.8 208.5,112.2 210.6,111.6 212.7,111.0 214.7,110.4 216.8,109.8 218.9,109.2 221.0,108.6 223.0,108.0 225.1,107.4 227.2,106.8 229.3,106.2 231.3,105.7 233.4,105.1 235.5,104.5 237.6,104.0 239.6,103.4 241.7,102.8 243.8,102.3 245.9,101.7 247.9,101.2 250.0,100.7 252.1,100.1 254.1,99.6 256.2,99.0 258.3,98.5 260.4,98.0 262.4,97.5 264.5,96.9 266.6,96.4 268.7,95.9 270.7,95.4 272.8,94.9 274.9,94.4 277.0,93.9 279.0,93.4 281.1,92.9 283.2,92.4 285.3,91.9 287.3,91.4 289.4,90.9 291.5,90.4 293.6,89.9 295.6,89.4 297.7,88.9 299.8,88.5 301.9,88.0 303.9,87.5 306.0,87.0 308.1,86.6 310.2,86.1 312.2,85.6 314.3,85.2 316.4,84.7 318.5,84.2 320.5,83.8 322.6,83.3 324.7,82.9 326.8,82.4 328.8,82.0 330.9,81.5 333.0,81.1 335.1,80.6 337.1,80.2 339.2,79.7 341.3,79.3 343.4,78.8 345.4,78.4 347.5,78.0 349.6,77.5 351.6,77.1 353.7,76.7 355.8,76.2 357.9,75.8 359.9,75.4 362.0,75.0 364.1,74.5 366.2,74.1 368.2,73.7 370.3,73.3 372.4,72.9 374.5,72.4 376.5,72.0 378.6,71.6 380.7,71.2 382.8,70.8 384.8,70.4 386.9,70.0 389.0,69.6 391.1,69.2 393.1,68.8 395.2,68.4 397.3,68.0 399.4,67.6 401.4,67.2 403.5,66.8 403.5,66.8 401.4,67.6 399.4,68.3 397.3,69.1 395.2,69.9 393.1,70.7 391.1,71.5 389.0,72.3 386.9,73.1 384.8,73.9 382.8,74.7 380.7,75.5 378.6,76.3 376.5,77.1 374.5,77.9 372.4,78.7 370.3,79.5 368.2,80.3 366.2,81.0 364.1,81.8 362.0,82.6 359.9,83.4 357.9,84.2 355.8,85.0 353.7,85.8 351.6,86.6 349.6,87.4 347.5,88.2 345.4,89.0 343.4,89.8 341.3,90.6 339.2,91.4 337.1,92.2 335.1,93.0 333.0,93.8 330.9,94.5 328.8,95.3 326.8,96.1 324.7,96.9 322.6,97.7 320.5,98.5 318.5,99.3 316.4,100.1 314.3,100.9 312.2,101.7 310.2,102.5 308.1,103.3 306.0,104.1 303.9,104.9 301.9,105.7 299.8,106.5 297.7,107.2 295.6,108.0 293.6,108.8 291.5,109.6 289.4,110.4 287.3,111.2 285.3,112.0 283.2,112.8 281.1,113.6 279.0,114.4 277.0,115.2 274.9,116.0 272.8,116.8 270.7,117.6 268.7,118.4 266.6,119.2 264.5,119.9 262.4,120.7 260.4,121.5 258.3,122.3 256.2,123.1 254.1,123.9 252.1,124.7 250.0,125.5 247.9,126.3 245.9,127.1 243.8,127.9 241.7,128.7 239.6,129.5 237.6,130.3 235.5,131.1 233.4,131.9 231.3,132.7 229.3,133.4 227.2,134.2 225.1,135.0 223.0,135.8 221.0,136.6 218.9,137.4 216.8,138.2 214.7,139.0 212.7,139.8 210.6,140.6 208.5,141.4 206.4,142.2 204.4,143.0 202.3,143.8 200.2,144.6 198.1,145.4 196.1,146.1 194.0,146.9 191.9,147.7 189.8,148.5 187.8,149.3 185.7,150.1 183.6,150.9 181.5,151.7 179.5,152.5 177.4,153.3 175.3,154.1 173.2,154.9 171.2,155.7 169.1,156.5 167.0,157.3 164.9,158.1 162.9,158.9 160.8,159.6 158.7,160.4 156.6,161.2 154.6,162.0 152.5,162.8 150.4,163.6 148.4,164.4 146.3,165.2 144.2,166.0 142.1,166.8 140.1,167.6 138.0,168.4 135.9,169.2 133.8,170.0 131.8,170.8 129.7,171.6 127.6,172.3 125.5,173.1 123.5,173.9 121.4,174.7 119.3,175.5 117.2,176.3 115.2,177.1 113.1,177.9 111.0,178.7 108.9,179.5 106.9,180.3 104.8,181.1 102.7,181.9 100.6,182.7 98.6,183.5 96.5,184.3 94.4,185.1 92.3,185.8 90.3,186.6 88.2,187.4 86.1,188.2 84.0,189.0 82.0,189.8 79.9,190.6 77.8,191.4 75.7,192.2 73.7,193.0 71.6,193.8\" fill=\"#F3E1DE\" opacity=\"0.8\"/><polyline points=\"71.6,193.8 73.7,183.7 75.7,179.6 77.8,176.4 79.9,173.7 82.0,171.3 84.0,169.2 86.1,167.2 88.2,165.4 90.3,163.7 92.3,162.0 94.4,160.5 96.5,159.0 98.6,157.6 100.6,156.2 102.7,154.9 104.8,153.6 106.9,152.4 108.9,151.2 111.0,150.0 113.1,148.9 115.2,147.8 117.2,146.7 119.3,145.6 121.4,144.6 123.5,143.6 125.5,142.6 127.6,141.6 129.7,140.6 131.8,139.7 133.8,138.8 135.9,137.9 138.0,137.0 140.1,136.1 142.1,135.2 144.2,134.4 146.3,133.5 148.4,132.7 150.4,131.9 152.5,131.1 154.6,130.3 156.6,129.5 158.7,128.7 160.8,127.9 162.9,127.2 164.9,126.4 167.0,125.7 169.1,124.9 171.2,124.2 173.2,123.5 175.3,122.8 177.4,122.1 179.5,121.4 181.5,120.7 183.6,120.0 185.7,119.3 187.8,118.6 189.8,118.0 191.9,117.3 194.0,116.6 196.1,116.0 198.1,115.4 200.2,114.7 202.3,114.1 204.4,113.4 206.4,112.8 208.5,112.2 210.6,111.6 212.7,111.0 214.7,110.4 216.8,109.8 218.9,109.2 221.0,108.6 223.0,108.0 225.1,107.4 227.2,106.8 229.3,106.2 231.3,105.7 233.4,105.1 235.5,104.5 237.6,104.0 239.6,103.4 241.7,102.8 243.8,102.3 245.9,101.7 247.9,101.2 250.0,100.7 252.1,100.1 254.1,99.6 256.2,99.0 258.3,98.5 260.4,98.0 262.4,97.5 264.5,96.9 266.6,96.4 268.7,95.9 270.7,95.4 272.8,94.9 274.9,94.4 277.0,93.9 279.0,93.4 281.1,92.9 283.2,92.4 285.3,91.9 287.3,91.4 289.4,90.9 291.5,90.4 293.6,89.9 295.6,89.4 297.7,88.9 299.8,88.5 301.9,88.0 303.9,87.5 306.0,87.0 308.1,86.6 310.2,86.1 312.2,85.6 314.3,85.2 316.4,84.7 318.5,84.2 320.5,83.8 322.6,83.3 324.7,82.9 326.8,82.4 328.8,82.0 330.9,81.5 333.0,81.1 335.1,80.6 337.1,80.2 339.2,79.7 341.3,79.3 343.4,78.8 345.4,78.4 347.5,78.0 349.6,77.5 351.6,77.1 353.7,76.7 355.8,76.2 357.9,75.8 359.9,75.4 362.0,75.0 364.1,74.5 366.2,74.1 368.2,73.7 370.3,73.3 372.4,72.9 374.5,72.4 376.5,72.0 378.6,71.6 380.7,71.2 382.8,70.8 384.8,70.4 386.9,70.0 389.0,69.6 391.1,69.2 393.1,68.8 395.2,68.4 397.3,68.0 399.4,67.6 401.4,67.2 403.5,66.8\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><polyline points=\"71.6,193.8 73.7,193.0 75.7,192.2 77.8,191.4 79.9,190.6 82.0,189.8 84.0,189.0 86.1,188.2 88.2,187.4 90.3,186.6 92.3,185.8 94.4,185.1 96.5,184.3 98.6,183.5 100.6,182.7 102.7,181.9 104.8,181.1 106.9,180.3 108.9,179.5 111.0,178.7 113.1,177.9 115.2,177.1 117.2,176.3 119.3,175.5 121.4,174.7 123.5,173.9 125.5,173.1 127.6,172.3 129.7,171.6 131.8,170.8 133.8,170.0 135.9,169.2 138.0,168.4 140.1,167.6 142.1,166.8 144.2,166.0 146.3,165.2 148.4,164.4 150.4,163.6 152.5,162.8 154.6,162.0 156.6,161.2 158.7,160.4 160.8,159.6 162.9,158.9 164.9,158.1 167.0,157.3 169.1,156.5 171.2,155.7 173.2,154.9 175.3,154.1 177.4,153.3 179.5,152.5 181.5,151.7 183.6,150.9 185.7,150.1 187.8,149.3 189.8,148.5 191.9,147.7 194.0,146.9 196.1,146.1 198.1,145.4 200.2,144.6 202.3,143.8 204.4,143.0 206.4,142.2 208.5,141.4 210.6,140.6 212.7,139.8 214.7,139.0 216.8,138.2 218.9,137.4 221.0,136.6 223.0,135.8 225.1,135.0 227.2,134.2 229.3,133.4 231.3,132.7 233.4,131.9 235.5,131.1 237.6,130.3 239.6,129.5 241.7,128.7 243.8,127.9 245.9,127.1 247.9,126.3 250.0,125.5 252.1,124.7 254.1,123.9 256.2,123.1 258.3,122.3 260.4,121.5 262.4,120.7 264.5,119.9 266.6,119.2 268.7,118.4 270.7,117.6 272.8,116.8 274.9,116.0 277.0,115.2 279.0,114.4 281.1,113.6 283.2,112.8 285.3,112.0 287.3,111.2 289.4,110.4 291.5,109.6 293.6,108.8 295.6,108.0 297.7,107.2 299.8,106.5 301.9,105.7 303.9,104.9 306.0,104.1 308.1,103.3 310.2,102.5 312.2,101.7 314.3,100.9 316.4,100.1 318.5,99.3 320.5,98.5 322.6,97.7 324.7,96.9 326.8,96.1 328.8,95.3 330.9,94.5 333.0,93.8 335.1,93.0 337.1,92.2 339.2,91.4 341.3,90.6 343.4,89.8 345.4,89.0 347.5,88.2 349.6,87.4 351.6,86.6 353.7,85.8 355.8,85.0 357.9,84.2 359.9,83.4 362.0,82.6 364.1,81.8 366.2,81.0 368.2,80.3 370.3,79.5 372.4,78.7 374.5,77.9 376.5,77.1 378.6,76.3 380.7,75.5 382.8,74.7 384.8,73.9 386.9,73.1 389.0,72.3 391.1,71.5 393.1,70.7 395.2,69.9 397.3,69.1 399.4,68.3 401.4,67.6 403.5,66.8\" fill=\"none\" stroke=\"#5C6570\" stroke-width=\"2.6\"/>\n<text x=\"262.44680851063833\" y=\"85.46077138637222\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">y = sqrt(x)</text><text x=\"279.0425531914894\" y=\"132.3918918918919\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C6570\">y = x/2</text><text x=\"403.51063829787233\" y=\"290\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">4</text>\n</svg></span>\n<p>Beräkna rotationskroppens volym exakt.</p>",
    "s": "<p>Rotationsaxeln \\(y=-1\\) ligger under båda kurvorna. För \\(0\\le x\\le4\\) ligger \\(y=\\sqrt{x}\\) över \\(y=x/2\\).</p>\n<p>Det är därför enklast att använda brickmetoden och integrera med avseende på \\(x\\).</p>\n<p>Yttre radie:</p><p>\\[R(x)=\\sqrt{x}-(-1)=\\sqrt{x}+1.\\]</p>\n<p>Inre radie:</p><p>\\[r(x)=\\frac{x}{2}-(-1)=\\frac{x}{2}+1.\\]</p>\n<p>Volymen blir</p>\n<p>\\[V=\\pi\\int_0^4\\left[(\\sqrt{x}+1)^2-\\left(\\frac{x}{2}+1\\right)^2\\right]dx.\\]</p>\n<p>Förenkla integranden:</p>\n<p>\\[(\\sqrt{x}+1)^2-\\left(\\frac{x}{2}+1\\right)^2\n=x+2\\sqrt{x}+1-\\left(\\frac{x^2}{4}+x+1\\right)\n=2\\sqrt{x}-\\frac{x^2}{4}.\\]</p>\n<p>Alltså</p>\n<p>\\[V=\\pi\\left[\\frac43x^{3/2}-\\frac{x^3}{12}\\right]_0^4\n=\\pi\\left(\\frac{32}{3}-\\frac{16}{3}\\right)\n=\\boxed{\\frac{16\\pi}{3}}.\\]</p>",
    "familj": "rotation_brickor_forskjuten_axel_a"
  },
  {
    "id": "3.92",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En väntetid \\(T\\) har täthetsfunktionen \\(f(t)=0,2e^{-0,2t}\\) för \\(t\\ge0\\).</p><p>Bestäm sannolikheten att väntetiden är högst 5 minuter.</p>",
    "s": "<p><strong>Metod:</strong> Skriv sannolikheten som en integral av täthetsfunktionen över rätt intervall.</p><p>\\[P(T\\le5)=\\int_0^5 0,2e^{-0,2t}dt=[-e^{-0,2t}]_0^5=1-e^{-1}\\approx0,632.\\]</p><p><strong>Cirka 63,2 %.</strong></p>",
    "familj": "tathet_exponential"
  },
  {
    "id": "3.93",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Funktionen \\(f(x)=k(4-x)\\) för \\(0\\le x\\le4\\) och 0 annars ska vara en täthetsfunktion.</p><p>a) Bestäm \\(k\\).<br>b) Bestäm \\(P(X>2)\\).<br>c) Bestäm \\(P(1&lt;X&lt;3)\\).</p>",
    "s": "<p>a) \\(1=k\\int_0^4(4-x)dx=k[4x-x^2/2]_0^4=8k\\), alltså \\(\\boxed{k=1/8}\\).</p><p>b) \\(\\frac18\\int_2^4(4-x)dx=\\frac18\\cdot2=\\boxed{1/4}\\).</p><p>c) \\(\\frac18[4x-x^2/2]_1^3=\\frac18((12-4,5)-(4-0,5))=\\frac4{8}=\\boxed{1/2}\\).</p>",
    "familj": "proc_tathet_avtagande_2"
  },
  {
    "id": "3.94",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^3 2x\\,dx\\)<br>b) \\(\\int_1^2 3x^2\\,dx\\)<br>c) \\(\\int_0^{\\pi}\\sin x\\,dx\\)<br>d) \\(\\int_0^{\\ln3}e^x\\,dx\\)</p>",
    "s": "<p><strong>Metod:</strong> Bestäm en primitiv funktion och sätt in gränserna.</p><p>a) \\([x^2]_0^3=9-0=\\boxed{9}\\).</p><p>b) \\([x^3]_1^2=8-1=\\boxed{7}\\).</p><p>c) \\([ -\\cos x ]_0^\\pi=1-(-1)=\\boxed{2}\\).</p><p>d) \\([e^x]_0^{\\ln3}=3-1=\\boxed{2}\\).</p>",
    "familj": "integral_rutin2"
  },
  {
    "id": "3.95",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen visar ett vattenflöde \\(q(t)\\) i liter per minut.</p>\n<span class=\"fig\"><svg width=\"500\" height=\"290\" viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Styckvis linjär graf för vattenflöde från 10 till 30 liter per minut, sedan konstant 30 och sedan ner till 0\">\n<rect x=\"1\" y=\"1\" width=\"498\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"70\" y1=\"35\" x2=\"70\" y2=\"240\"/><line x1=\"110\" y1=\"35\" x2=\"110\" y2=\"240\"/><line x1=\"150\" y1=\"35\" x2=\"150\" y2=\"240\"/><line x1=\"190\" y1=\"35\" x2=\"190\" y2=\"240\"/><line x1=\"230\" y1=\"35\" x2=\"230\" y2=\"240\"/><line x1=\"270\" y1=\"35\" x2=\"270\" y2=\"240\"/><line x1=\"310\" y1=\"35\" x2=\"310\" y2=\"240\"/><line x1=\"350\" y1=\"35\" x2=\"350\" y2=\"240\"/><line x1=\"390\" y1=\"35\" x2=\"390\" y2=\"240\"/><line x1=\"430\" y1=\"35\" x2=\"430\" y2=\"240\"/><line x1=\"470\" y1=\"35\" x2=\"470\" y2=\"240\"/><line x1=\"55\" y1=\"55\" x2=\"470\" y2=\"55\"/><line x1=\"55\" y1=\"95\" x2=\"470\" y2=\"95\"/><line x1=\"55\" y1=\"135\" x2=\"470\" y2=\"135\"/><line x1=\"55\" y1=\"175\" x2=\"470\" y2=\"175\"/><line x1=\"55\" y1=\"215\" x2=\"470\" y2=\"215\"/></g>\n<line x1=\"55\" y1=\"235\" x2=\"478\" y2=\"235\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M478 235 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"70\" y1=\"250\" x2=\"70\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M70 28 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<polygon points=\"70,195 190,75 310,75 430,235 70,235\" fill=\"#F3E1DE\" opacity=\"0.75\"/>\n<polyline points=\"70,195 190,75 310,75 430,235\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n<g fill=\"#B43123\"><circle cx=\"70\" cy=\"195\" r=\"4\"/><circle cx=\"190\" cy=\"75\" r=\"4\"/><circle cx=\"310\" cy=\"75\" r=\"4\"/><circle cx=\"430\" cy=\"235\" r=\"4\"/></g>\n<text x=\"187\" y=\"260\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">4</text><text x=\"307\" y=\"260\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">8</text><text x=\"425\" y=\"260\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">12</text><text x=\"40\" y=\"199\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">10</text><text x=\"40\" y=\"79\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">30</text><text x=\"475\" y=\"229\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">t</text><text x=\"78\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">q</text>\n</svg></span>\n<p>Bestäm hur stor vattenvolym som passerar under de 12 minuterna.</p>",
    "s": "<p>Volymen är arean under grafen.</p>\n<p>0–4 min: trapezoid med medelhöjd \\((10+30)/2=20\\), alltså \\(20\\cdot4=80\\) liter.</p>\n<p>4–8 min: rektangel \\(30\\cdot4=120\\) liter.</p>\n<p>8–12 min: triangel \\(30\\cdot4/2=60\\) liter.</p>\n<p><strong>Total volym: \\(80+120+60=260\\) liter.</strong></p>",
    "familj": "flodesgraf_integral_svg"
  },
  {
    "id": "3.96",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>En behållare fylls med en hastighet \\(q(t)=30+5t\\) liter/minut under de första 8 minuterna. Samtidigt läcker vatten ut med konstant hastighet 12 liter/minut. Behållaren innehåller från början 50 liter.</p><p>När passerar vattenvolymen första gången 300 liter?</p>",
    "s": "<p>Nettotillförseln är \\(18+5t\\) liter/minut. Volymen blir</p><p>\\[V(t)=50+\\int_0^t(18+5u)du=50+18t+2,5t^2.\\]</p><p>Sätt \\(V=300\\): \\(2,5t^2+18t-250=0\\). Den positiva roten är</p><p>\\[t=\\frac{-18+\\sqrt{2824}}5\\approx7,03.\\]</p><p><strong>Efter cirka 7,03 min.</strong></p>",
    "familj": "integral_nettoflode_a"
  },
  {
    "id": "3.97",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Området i första kvadranten mellan kurvorna</p>\n<p>\\[\ny=x\n\\quad\\text{och}\\quad\ny=x^3\n\\]</p>\n<p>roteras ett varv kring y-axeln.</p><span class=\"fig\"><svg width=\"440\" height=\"270\" viewBox=\"0 0 440 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Område mellan y lika med x och y lika med x kubik som roteras kring y-axeln\">\n<rect x=\"1\" y=\"1\" width=\"438\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"60.0\" y1=\"25\" x2=\"60.0\" y2=\"230\" stroke=\"#D9E6E9\"/>\n<text x=\"60.0\" y=\"246\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0</text>\n<line x1=\"60\" y1=\"230.0\" x2=\"400\" y2=\"230.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"190.8\" y1=\"25\" x2=\"190.8\" y2=\"230\" stroke=\"#D9E6E9\"/>\n<text x=\"190.8\" y=\"246\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,5</text>\n<line x1=\"60\" y1=\"148.0\" x2=\"400\" y2=\"148.0\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"151.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">0,5</text>\n<line x1=\"321.5\" y1=\"25\" x2=\"321.5\" y2=\"230\" stroke=\"#D9E6E9\"/>\n<text x=\"321.5\" y=\"246\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"60\" y1=\"66.0\" x2=\"400\" y2=\"66.0\" stroke=\"#D9E6E9\"/>\n<text x=\"52\" y=\"69.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"60\" y1=\"230\" x2=\"400\" y2=\"230\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"60\" y1=\"25\" x2=\"60\" y2=\"230\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<polygon points=\"60.0,230.0 61.3,229.2 62.6,228.4 63.9,227.5 65.2,226.7 66.5,225.9 67.8,225.1 69.2,224.3 70.5,223.4 71.8,222.6 73.1,221.8 74.4,221.0 75.7,220.2 77.0,219.3 78.3,218.5 79.6,217.7 80.9,216.9 82.2,216.1 83.5,215.2 84.8,214.4 86.2,213.6 87.5,212.8 88.8,212.0 90.1,211.1 91.4,210.3 92.7,209.5 94.0,208.7 95.3,207.9 96.6,207.0 97.9,206.2 99.2,205.4 100.5,204.6 101.8,203.8 103.2,202.9 104.5,202.1 105.8,201.3 107.1,200.5 108.4,199.7 109.7,198.8 111.0,198.0 112.3,197.2 113.6,196.4 114.9,195.6 116.2,194.7 117.5,193.9 118.8,193.1 120.2,192.3 121.5,191.5 122.8,190.6 124.1,189.8 125.4,189.0 126.7,188.2 128.0,187.4 129.3,186.5 130.6,185.7 131.9,184.9 133.2,184.1 134.5,183.3 135.8,182.4 137.2,181.6 138.5,180.8 139.8,180.0 141.1,179.2 142.4,178.3 143.7,177.5 145.0,176.7 146.3,175.9 147.6,175.1 148.9,174.2 150.2,173.4 151.5,172.6 152.8,171.8 154.2,171.0 155.5,170.1 156.8,169.3 158.1,168.5 159.4,167.7 160.7,166.9 162.0,166.0 163.3,165.2 164.6,164.4 165.9,163.6 167.2,162.8 168.5,161.9 169.8,161.1 171.2,160.3 172.5,159.5 173.8,158.7 175.1,157.8 176.4,157.0 177.7,156.2 179.0,155.4 180.3,154.6 181.6,153.7 182.9,152.9 184.2,152.1 185.5,151.3 186.8,150.5 188.2,149.6 189.5,148.8 190.8,148.0 192.1,147.2 193.4,146.4 194.7,145.5 196.0,144.7 197.3,143.9 198.6,143.1 199.9,142.3 201.2,141.4 202.5,140.6 203.8,139.8 205.2,139.0 206.5,138.2 207.8,137.3 209.1,136.5 210.4,135.7 211.7,134.9 213.0,134.1 214.3,133.2 215.6,132.4 216.9,131.6 218.2,130.8 219.5,130.0 220.8,129.1 222.2,128.3 223.5,127.5 224.8,126.7 226.1,125.9 227.4,125.0 228.7,124.2 230.0,123.4 231.3,122.6 232.6,121.8 233.9,120.9 235.2,120.1 236.5,119.3 237.8,118.5 239.2,117.7 240.5,116.8 241.8,116.0 243.1,115.2 244.4,114.4 245.7,113.6 247.0,112.7 248.3,111.9 249.6,111.1 250.9,110.3 252.2,109.5 253.5,108.6 254.8,107.8 256.2,107.0 257.5,106.2 258.8,105.4 260.1,104.5 261.4,103.7 262.7,102.9 264.0,102.1 265.3,101.3 266.6,100.4 267.9,99.6 269.2,98.8 270.5,98.0 271.8,97.2 273.2,96.3 274.5,95.5 275.8,94.7 277.1,93.9 278.4,93.1 279.7,92.2 281.0,91.4 282.3,90.6 283.6,89.8 284.9,89.0 286.2,88.1 287.5,87.3 288.8,86.5 290.2,85.7 291.5,84.9 292.8,84.0 294.1,83.2 295.4,82.4 296.7,81.6 298.0,80.8 299.3,79.9 300.6,79.1 301.9,78.3 303.2,77.5 304.5,76.7 305.8,75.8 307.2,75.0 308.5,74.2 309.8,73.4 311.1,72.6 312.4,71.7 313.7,70.9 315.0,70.1 316.3,69.3 317.6,68.5 318.9,67.6 320.2,66.8 321.5,66.0 321.5,66.0 320.2,68.4 318.9,70.9 317.6,73.3 316.3,75.6 315.0,78.0 313.7,80.3 312.4,82.6 311.1,84.9 309.8,87.2 308.5,89.4 307.2,91.6 305.8,93.8 304.5,95.9 303.2,98.1 301.9,100.2 300.6,102.3 299.3,104.4 298.0,106.4 296.7,108.4 295.4,110.4 294.1,112.4 292.8,114.4 291.5,116.3 290.2,118.2 288.8,120.1 287.5,122.0 286.2,123.9 284.9,125.7 283.6,127.5 282.3,129.3 281.0,131.1 279.7,132.8 278.4,134.5 277.1,136.2 275.8,137.9 274.5,139.6 273.2,141.2 271.8,142.8 270.5,144.4 269.2,146.0 267.9,147.6 266.6,149.1 265.3,150.7 264.0,152.2 262.7,153.7 261.4,155.1 260.1,156.6 258.8,158.0 257.5,159.4 256.2,160.8 254.8,162.2 253.5,163.5 252.2,164.9 250.9,166.2 249.6,167.5 248.3,168.8 247.0,170.1 245.7,171.3 244.4,172.5 243.1,173.7 241.8,174.9 240.5,176.1 239.2,177.3 237.8,178.4 236.5,179.6 235.2,180.7 233.9,181.8 232.6,182.9 231.3,183.9 230.0,185.0 228.7,186.0 227.4,187.0 226.1,188.0 224.8,189.0 223.5,190.0 222.2,190.9 220.8,191.9 219.5,192.8 218.2,193.7 216.9,194.6 215.6,195.5 214.3,196.3 213.0,197.2 211.7,198.0 210.4,198.8 209.1,199.6 207.8,200.4 206.5,201.2 205.2,202.0 203.8,202.7 202.5,203.5 201.2,204.2 199.9,204.9 198.6,205.6 197.3,206.3 196.0,206.9 194.7,207.6 193.4,208.2 192.1,208.9 190.8,209.5 189.5,210.1 188.2,210.7 186.8,211.3 185.5,211.9 184.2,212.4 182.9,213.0 181.6,213.5 180.3,214.0 179.0,214.6 177.7,215.1 176.4,215.5 175.1,216.0 173.8,216.5 172.5,217.0 171.2,217.4 169.8,217.8 168.5,218.3 167.2,218.7 165.9,219.1 164.6,219.5 163.3,219.9 162.0,220.3 160.7,220.6 159.4,221.0 158.1,221.4 156.8,221.7 155.5,222.0 154.2,222.3 152.8,222.7 151.5,223.0 150.2,223.3 148.9,223.6 147.6,223.8 146.3,224.1 145.0,224.4 143.7,224.6 142.4,224.9 141.1,225.1 139.8,225.3 138.5,225.6 137.2,225.8 135.8,226.0 134.5,226.2 133.2,226.4 131.9,226.6 130.6,226.8 129.3,226.9 128.0,227.1 126.7,227.3 125.4,227.4 124.1,227.6 122.8,227.7 121.5,227.9 120.2,228.0 118.8,228.1 117.5,228.3 116.2,228.4 114.9,228.5 113.6,228.6 112.3,228.7 111.0,228.8 109.7,228.9 108.4,229.0 107.1,229.0 105.8,229.1 104.5,229.2 103.2,229.3 101.8,229.3 100.5,229.4 99.2,229.4 97.9,229.5 96.6,229.5 95.3,229.6 94.0,229.6 92.7,229.7 91.4,229.7 90.1,229.8 88.8,229.8 87.5,229.8 86.2,229.8 84.8,229.9 83.5,229.9 82.2,229.9 80.9,229.9 79.6,229.9 78.3,229.9 77.0,230.0 75.7,230.0 74.4,230.0 73.1,230.0 71.8,230.0 70.5,230.0 69.2,230.0 67.8,230.0 66.5,230.0 65.2,230.0 63.9,230.0 62.6,230.0 61.3,230.0 60.0,230.0\" fill=\"#DCEFF2\" stroke=\"none\"/>\n<polyline points=\"60.00,230.00 61.31,229.18 62.62,228.36 63.92,227.54 65.23,226.72 66.54,225.90 67.85,225.08 69.15,224.26 70.46,223.44 71.77,222.62 73.08,221.80 74.38,220.98 75.69,220.16 77.00,219.34 78.31,218.52 79.62,217.70 80.92,216.88 82.23,216.06 83.54,215.24 84.85,214.42 86.15,213.60 87.46,212.78 88.77,211.96 90.08,211.14 91.38,210.32 92.69,209.50 94.00,208.68 95.31,207.86 96.62,207.04 97.92,206.22 99.23,205.40 100.54,204.58 101.85,203.76 103.15,202.94 104.46,202.12 105.77,201.30 107.08,200.48 108.38,199.66 109.69,198.84 111.00,198.02 112.31,197.20 113.62,196.38 114.92,195.56 116.23,194.74 117.54,193.92 118.85,193.10 120.15,192.28 121.46,191.46 122.77,190.64 124.08,189.82 125.38,189.00 126.69,188.18 128.00,187.36 129.31,186.54 130.62,185.72 131.92,184.90 133.23,184.08 134.54,183.26 135.85,182.44 137.15,181.62 138.46,180.80 139.77,179.98 141.08,179.16 142.38,178.34 143.69,177.52 145.00,176.70 146.31,175.88 147.62,175.06 148.92,174.24 150.23,173.42 151.54,172.60 152.85,171.78 154.15,170.96 155.46,170.14 156.77,169.32 158.08,168.50 159.38,167.68 160.69,166.86 162.00,166.04 163.31,165.22 164.62,164.40 165.92,163.58 167.23,162.76 168.54,161.94 169.85,161.12 171.15,160.30 172.46,159.48 173.77,158.66 175.08,157.84 176.38,157.02 177.69,156.20 179.00,155.38 180.31,154.56 181.62,153.74 182.92,152.92 184.23,152.10 185.54,151.28 186.85,150.46 188.15,149.64 189.46,148.82 190.77,148.00 192.08,147.18 193.38,146.36 194.69,145.54 196.00,144.72 197.31,143.90 198.62,143.08 199.92,142.26 201.23,141.44 202.54,140.62 203.85,139.80 205.15,138.98 206.46,138.16 207.77,137.34 209.08,136.52 210.38,135.70 211.69,134.88 213.00,134.06 214.31,133.24 215.62,132.42 216.92,131.60 218.23,130.78 219.54,129.96 220.85,129.14 222.15,128.32 223.46,127.50 224.77,126.68 226.08,125.86 227.38,125.04 228.69,124.22 230.00,123.40 231.31,122.58 232.62,121.76 233.92,120.94 235.23,120.12 236.54,119.30 237.85,118.48 239.15,117.66 240.46,116.84 241.77,116.02 243.08,115.20 244.38,114.38 245.69,113.56 247.00,112.74 248.31,111.92 249.62,111.10 250.92,110.28 252.23,109.46 253.54,108.64 254.85,107.82 256.15,107.00 257.46,106.18 258.77,105.36 260.08,104.54 261.38,103.72 262.69,102.90 264.00,102.08 265.31,101.26 266.62,100.44 267.92,99.62 269.23,98.80 270.54,97.98 271.85,97.16 273.15,96.34 274.46,95.52 275.77,94.70 277.08,93.88 278.38,93.06 279.69,92.24 281.00,91.42 282.31,90.60 283.62,89.78 284.92,88.96 286.23,88.14 287.54,87.32 288.85,86.50 290.15,85.68 291.46,84.86 292.77,84.04 294.08,83.22 295.38,82.40 296.69,81.58 298.00,80.76 299.31,79.94 300.62,79.12 301.92,78.30 303.23,77.48 304.54,76.66 305.85,75.84 307.15,75.02 308.46,74.20 309.77,73.38 311.08,72.56 312.38,71.74 313.69,70.92 315.00,70.10 316.31,69.28 317.62,68.46 318.92,67.64 320.23,66.82 321.54,66.00\" fill=\"none\" stroke=\"#5C575E\" stroke-width=\"1.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<polyline points=\"60.00,230.00 61.31,230.00 62.62,230.00 63.92,230.00 65.23,230.00 66.54,230.00 67.85,230.00 69.15,229.99 70.46,229.99 71.77,229.99 73.08,229.98 74.38,229.97 75.69,229.96 77.00,229.95 78.31,229.94 79.62,229.93 80.92,229.92 82.23,229.90 83.54,229.88 84.85,229.86 86.15,229.84 87.46,229.81 88.77,229.78 90.08,229.75 91.38,229.72 92.69,229.68 94.00,229.64 95.31,229.60 96.62,229.55 97.92,229.50 99.23,229.45 100.54,229.39 101.85,229.33 103.15,229.26 104.46,229.19 105.77,229.12 107.08,229.04 108.38,228.96 109.69,228.88 111.00,228.78 112.31,228.69 113.62,228.59 114.92,228.48 116.23,228.37 117.54,228.25 118.85,228.13 120.15,228.00 121.46,227.87 122.77,227.73 124.08,227.59 125.38,227.44 126.69,227.28 128.00,227.12 129.31,226.95 130.62,226.77 131.92,226.59 133.23,226.40 134.54,226.20 135.85,226.00 137.15,225.79 138.46,225.57 139.77,225.35 141.08,225.11 142.38,224.87 143.69,224.63 145.00,224.37 146.31,224.11 147.62,223.83 148.92,223.55 150.23,223.27 151.54,222.97 152.85,222.66 154.15,222.35 155.46,222.03 156.77,221.69 158.08,221.35 159.38,221.00 160.69,220.64 162.00,220.27 163.31,219.89 164.62,219.50 165.92,219.11 167.23,218.70 168.54,218.28 169.85,217.85 171.15,217.41 172.46,216.96 173.77,216.50 175.08,216.03 176.38,215.55 177.69,215.06 179.00,214.55 180.31,214.04 181.62,213.51 182.92,212.97 184.23,212.42 185.54,211.86 186.85,211.29 188.15,210.71 189.46,210.11 190.77,209.50 192.08,208.88 193.38,208.25 194.69,207.60 196.00,206.94 197.31,206.27 198.62,205.58 199.92,204.89 201.23,204.18 202.54,203.45 203.85,202.71 205.15,201.96 206.46,201.20 207.77,200.42 209.08,199.63 210.38,198.82 211.69,198.00 213.00,197.17 214.31,196.32 215.62,195.45 216.92,194.58 218.23,193.68 219.54,192.78 220.85,191.85 222.15,190.91 223.46,189.96 224.77,188.99 226.08,188.01 227.38,187.01 228.69,185.99 230.00,184.96 231.31,183.91 232.62,182.85 233.92,181.77 235.23,180.67 236.54,179.56 237.85,178.43 239.15,177.29 240.46,176.12 241.77,174.94 243.08,173.75 244.38,172.53 245.69,171.30 247.00,170.05 248.31,168.79 249.62,167.50 250.92,166.20 252.23,164.88 253.54,163.54 254.85,162.19 256.15,160.81 257.46,159.42 258.77,158.01 260.08,156.58 261.38,155.13 262.69,153.66 264.00,152.17 265.31,150.67 266.62,149.14 267.92,147.60 269.23,146.03 270.54,144.45 271.85,142.84 273.15,141.22 274.46,139.58 275.77,137.91 277.08,136.23 278.38,134.52 279.69,132.80 281.00,131.05 282.31,129.28 283.62,127.50 284.92,125.69 286.23,123.86 287.54,122.01 288.85,120.13 290.15,118.24 291.46,116.32 292.77,114.39 294.08,112.43 295.38,110.44 296.69,108.44 298.00,106.41 299.31,104.37 300.62,102.30 301.92,100.20 303.23,98.09 304.54,95.95 305.85,93.78 307.15,91.60 308.46,89.39 309.77,87.16 311.08,84.90 312.38,82.62 313.69,80.32 315.00,78.00 316.31,75.64 317.62,73.27 318.92,70.87 320.23,68.45 321.54,66.00\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>\n<text x=\"235.2\" y=\"95.5\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">y = x</text>\n<text x=\"248.3\" y=\"184.1\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">y = x³</text>\n\n</svg></span><p>Bestäm rotationskroppens volym exakt.</p>",
    "s": "<p>Kurvorna skär varandra vid \\(x=0\\) och \\(x=1\\). För rotation kring y-axeln är det naturligt att integrera med avseende på \\(y\\).</p>\n<p>Skriv kurvorna som</p>\n<p>\\[\nx=y\n\\quad\\text{och}\\quad\nx=\\sqrt[3]{y}.\n\\]</p>\n<p>För \\(0&lt;y&lt;1\\) är den yttre radien \\(R=y^{1/3}\\) och den inre \\(r=y\\).</p>\n<p>\\[\nV=\\pi\\int_0^1(R^2-r^2)\\,dy\n=\\pi\\int_0^1\\left(y^{2/3}-y^2\\right)dy.\n\\]</p>\n<p>\\[\nV=\\pi\\left[\\frac35y^{5/3}-\\frac13y^3\\right]_0^1\n=\\pi\\left(\\frac35-\\frac13\\right)\n=\\frac{4\\pi}{15}.\n\\]</p>\n<p><strong>\\(V=\\frac{4\\pi}{15}\\) volymenheter.</strong></p>",
    "familj": "rotationsvolym_yaxel_a"
  },
  {
    "id": "3.98",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En funktion \\(F\\) uppfyller \\(F'(x)=3x^2-4x+2\\) och \\(F(1)=5\\). Bestäm \\(F(x)\\).</p>",
    "s": "<p>En primitiv funktion är \\(x^3-2x^2+2x+C\\).</p><p>Villkoret \\(F(1)=1-2+2+C=1+C=5\\) ger \\(C=4\\).</p><p><strong>\\(\\boxed{F(x)=x^3-2x^2+2x+4}\\)</strong>.</p>",
    "familj": "primitiv_begynnelsevillkor_e"
  },
  {
    "id": "3.99",
    "kap": 3,
    "omr": "sannolikhetsfordelning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En slumpvariabel har täthetsfunktionen \\(f(x)=2x\\) för \\(0\\le x\\le1\\).</p><p>Bestäm</p><p>a) \\(P(X&lt;0,5)\\)<br>b) \\(P(X>0,8)\\)<br>c) \\(P(0,2&lt;X&lt;0,6)\\).</p>",
    "s": "<p>En primitiv funktion är \\(x^2\\).</p><p>a) \\(0,5^2=\\boxed{0,25}\\).</p><p>b) \\(1-0,8^2=1-0,64=\\boxed{0,36}\\).</p><p>c) \\(0,6^2-0,2^2=0,36-0,04=\\boxed{0,32}\\).</p>",
    "familj": "proc_sannolikhet_tathet_2"
  },
  {
    "id": "3.100",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Området under \\(y=\\sqrt{x}\\) från \\(x=0\\) till \\(x=4\\) roteras kring x-axeln.</p><p>Bestäm rotationskroppens volym.</p>",
    "s": "<p>\\[V=\\pi\\int_0^4(\\sqrt{x})^2dx=\\pi\\int_0^4x\\,dx=8\\pi.\\]</p><p><strong>\\(8\\pi\\) volymenheter.</strong></p>",
    "familj": "rotation_rutin"
  },
  {
    "id": "3.101",
    "kap": 3,
    "omr": "integralberakning",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(\\int_0^2(4-x^2)\\,dx\\)<br>b) \\(\\int_0^3(6-2x)\\,dx\\)<br>c) \\(\\int_{-1}^2(2x+3)\\,dx\\)<br>d) \\(\\int_0^1(3x^2-2x+1)\\,dx\\)</p>",
    "s": "<p>a) \\([4x-x^3/3]_0^2=\\)<strong>\\(\\frac{16}{3}\\)</strong>.<br>b) \\([6x-x^2]_0^3=\\)<strong>9</strong>.<br>c) \\([x^2+3x]_{-1}^2=10-(-2)=\\)<strong>12</strong>.<br>d) \\([x^3-x^2+x]_0^1=\\)<strong>1</strong>.</p>",
    "familj": "proc_integral_polynom_1"
  },
  {
    "id": "3.102",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Området under \\(y=x^2\\) från \\(x=0\\) till \\(x=3\\) roteras kring x-axeln.</p><span class=\"fig\"><svg width=\"450\" height=\"270\" viewBox=\"0 0 450 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Område under parabel\"><rect x=\"1\" y=\"1\" width=\"448\" height=\"268\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"232\" stroke=\"#E8ECEF\"/><line x1=\"177.3\" y1=\"25\" x2=\"177.3\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"177.3\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"299.7\" y1=\"25\" x2=\"299.7\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"299.7\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"422.0\" y1=\"25\" x2=\"422.0\" y2=\"232\" stroke=\"#E8ECEF\"/><text x=\"422.0\" y=\"250\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"55\" y1=\"232.0\" x2=\"422\" y2=\"232.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"190.6\" x2=\"422\" y2=\"190.6\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"194.6\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"55\" y1=\"149.2\" x2=\"422\" y2=\"149.2\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"153.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"55\" y1=\"107.8\" x2=\"422\" y2=\"107.8\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"111.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"55\" y1=\"66.4\" x2=\"422\" y2=\"66.4\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"70.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">8</text><line x1=\"55\" y1=\"25.0\" x2=\"422\" y2=\"25.0\" stroke=\"#E8ECEF\"/><text x=\"47\" y=\"29.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10.5\" fill=\"#5C575E\">10</text><line x1=\"55\" y1=\"232.0\" x2=\"422\" y2=\"232.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"232\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"422.0\" y1=\"25\" x2=\"422.0\" y2=\"232\" stroke=\"#B43123\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><text x=\"427.0\" y=\"39\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#B43123\">x=3</text><polyline points=\"55.0,232.0 56.7,232.0 58.3,232.0 60.0,232.0 61.7,231.9 63.3,231.9 65.0,231.9 66.7,231.8 68.3,231.8 70.0,231.7 71.7,231.6 73.3,231.5 75.0,231.4 76.7,231.3 78.4,231.2 80.0,231.1 81.7,231.0 83.4,230.9 85.0,230.8 86.7,230.6 88.4,230.5 90.0,230.3 91.7,230.1 93.4,230.0 95.0,229.8 96.7,229.6 98.4,229.4 100.0,229.2 101.7,229.0 103.4,228.8 105.0,228.5 106.7,228.3 108.4,228.1 110.0,227.8 111.7,227.6 113.4,227.3 115.1,227.0 116.7,226.7 118.4,226.4 120.1,226.1 121.7,225.8 123.4,225.5 125.1,225.2 126.7,224.9 128.4,224.5 130.1,224.2 131.7,223.9 133.4,223.5 135.1,223.1 136.7,222.8 138.4,222.4 140.1,222.0 141.7,221.6 143.4,221.2 145.1,220.8 146.8,220.4 148.4,219.9 150.1,219.5 151.8,219.1 153.4,218.6 155.1,218.1 156.8,217.7 158.4,217.2 160.1,216.7 161.8,216.2 163.4,215.7 165.1,215.2 166.8,214.7 168.4,214.2 170.1,213.7 171.8,213.1 173.4,212.6 175.1,212.0 176.8,211.5 178.4,210.9 180.1,210.3 181.8,209.8 183.5,209.2 185.1,208.6 186.8,208.0 188.5,207.4 190.1,206.7 191.8,206.1 193.5,205.5 195.1,204.8 196.8,204.2 198.5,203.5 200.1,202.9 201.8,202.2 203.5,201.5 205.1,200.8 206.8,200.1 208.5,199.4 210.1,198.7 211.8,198.0 213.5,197.3 215.1,196.5 216.8,195.8 218.5,195.0 220.2,194.3 221.8,193.5 223.5,192.7 225.2,192.0 226.8,191.2 228.5,190.4 230.2,189.6 231.8,188.8 233.5,187.9 235.2,187.1 236.8,186.3 238.5,185.4 240.2,184.6 241.8,183.7 243.5,182.8 245.2,182.0 246.8,181.1 248.5,180.2 250.2,179.3 251.8,178.4 253.5,177.5 255.2,176.6 256.8,175.6 258.5,174.7 260.2,173.8 261.9,172.8 263.5,171.9 265.2,170.9 266.9,169.9 268.5,168.9 270.2,167.9 271.9,166.9 273.5,165.9 275.2,164.9 276.9,163.9 278.5,162.9 280.2,161.8 281.9,160.8 283.5,159.8 285.2,158.7 286.9,157.6 288.5,156.6 290.2,155.5 291.9,154.4 293.6,153.3 295.2,152.2 296.9,151.1 298.6,150.0 300.2,148.8 301.9,147.7 303.6,146.5 305.2,145.4 306.9,144.2 308.6,143.1 310.2,141.9 311.9,140.7 313.6,139.5 315.2,138.3 316.9,137.1 318.6,135.9 320.2,134.7 321.9,133.5 323.6,132.2 325.2,131.0 326.9,129.7 328.6,128.5 330.2,127.2 331.9,125.9 333.6,124.7 335.3,123.4 336.9,122.1 338.6,120.8 340.3,119.4 341.9,118.1 343.6,116.8 345.3,115.5 346.9,114.1 348.6,112.8 350.3,111.4 351.9,110.0 353.6,108.7 355.3,107.3 356.9,105.9 358.6,104.5 360.3,103.1 361.9,101.7 363.6,100.3 365.3,98.8 366.9,97.4 368.6,96.0 370.3,94.5 372.0,93.0 373.6,91.6 375.3,90.1 377.0,88.6 378.6,87.1 380.3,85.6 382.0,84.1 383.6,82.6 385.3,81.1 387.0,79.6 388.6,78.0 390.3,76.5 392.0,74.9 393.6,73.4 395.3,71.8 397.0,70.2 398.6,68.7 400.3,67.1 402.0,65.5 403.7,63.9 405.3,62.3 407.0,60.6 408.7,59.0 410.3,57.4 412.0,55.7 413.7,54.1 415.3,52.4 417.0,50.7 418.7,49.1 420.3,47.4 422.0,45.7\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"392.6\" y=\"66.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">y=x^2</text><text x=\"420\" y=\"224.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">x</text><text x=\"63.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"11\">y</text></svg></span><p>a) Ställ upp volymintegralen.<br>b) Beräkna volymen exakt.</p>",
    "s": "<p>Skivmetoden ger</p><p>\\[V=\\pi\\int_0^3(x^2)^2dx=\\pi\\int_0^3x^4dx.\\]</p><p>\\[V=\\pi\\left[\\frac{x^5}{5}\\right]_0^3=\\boxed{\\frac{243\\pi}{5}}.\\]</p>",
    "familj": "rotation_parabel_e_svg"
  },
  {
    "id": "3.103",
    "kap": 3,
    "omr": "area_integraler",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För \\(a&lt;b\\) definieras</p><p>\\[C=\\int_a^b\\left(4-(x-2)^2\\right)dx.\\]</p><p>a) Bestäm det största möjliga värdet på intervallets längd \\(b-a\\) när \\(C\\) antar sitt största möjliga värde.<br>b) Bestäm den största möjliga längden \\(b-a\\) om \\(C=0\\). Svara exakt.</p>",
    "s": "<p>Integranden \\(4-(x-2)^2\\) är positiv mellan nollställena \\(x=0\\) och \\(x=4\\), och negativ utanför.</p>\n<p>a) För att maximera integralen ska hela det positiva området tas med och inget negativt. Alltså \\(a=0\\), \\(b=4\\), så <strong>\\(b-a=4\\)</strong>.</p>\n<p>b) Sätt intervallets mittpunkt till \\(m\\) och halva längden till \\(h&gt;0\\): \\(a=m-h\\), \\(b=m+h\\). Skriv \\(u=x-2\\). En direkt beräkning ger</p><p>\\[C=2h\\left(4-(m-2)^2-\\frac{h^2}{3}\\right).\\]</p>\n<p>För \\(C=0\\) och \\(h&gt;0\\) måste</p><p>\\[h^2=3\\left(4-(m-2)^2\\right)\\le12.\\]</p><p>Största \\(h\\) fås när \\(m=2\\), alltså \\(h=2\\sqrt3\\). Intervallets längd är \\(2h\\):</p><p><strong>\\(b-a=4\\sqrt3\\).</strong></p>",
    "familj": "integral_parameter_intervall_a"
  },
  {
    "id": "3.104",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm en primitiv funktion.</p><p>a) \\(f(x)=6x^2-4x+3\\)<br>b) \\(g(x)=\\cos x\\)<br>c) \\(h(x)=5e^x\\)<br>d) \\(p(x)=1/x\\), \\(x&gt;0\\)</p>",
    "s": "<p>a) <strong>\\(F(x)=2x^3-2x^2+3x+C\\)</strong>.</p><p>b) <strong>\\(G(x)=\\sin x+C\\)</strong>.</p><p>c) <strong>\\(H(x)=5e^x+C\\)</strong>.</p><p>d) <strong>\\(P(x)=\\ln x+C\\)</strong>.</p>",
    "familj": "primitiv_rutin4"
  },
  {
    "id": "3.105",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Området under grafen roteras kring x-axeln. Bestäm volymen.</p><p>a) \\(y=x\\), \\(0\\le x\\le2\\).<br>b) \\(y=\\sqrt{x}\\), \\(0\\le x\\le4\\).<br>c) \\(y=2\\), \\(0\\le x\\le3\\).</p>",
    "s": "<p>Använd \\(V=\\pi\\int_a^b y^2dx\\).</p><p>a) \\(V=\\pi\\int_0^2x^2dx=\\boxed{8\\pi/3}\\).</p><p>b) \\(V=\\pi\\int_0^4x dx=\\pi[x^2/2]_0^4=\\boxed{8\\pi}\\).</p><p>c) \\(V=\\pi\\int_0^34dx=\\boxed{12\\pi}\\).</p>",
    "familj": "proc_rotationsvolym_skivor_3"
  },
  {
    "id": "3.106",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En tunn stång är 4,0 m lång. Dess massa per meter varierar enligt</p><p>\\[m(x)=2+0,5x\\quad\\text{kg/m},\\qquad0\\le x\\le4.\\]</p><p>Bestäm stångens totala massa.</p>",
    "s": "<p><strong>Metod:</strong> En integral summerar en storhet per enhet, till exempel hastighet, flöde eller massa per meter. Kontrollera därför också enheten i svaret.</p><p>Massan fås genom att integrera massan per längdenhet:</p><p>\\[m=\\int_0^4(2+0,5x)dx=[2x+0,25x^2]_0^4=8+4=\\boxed{12\\text{ kg}}.\\]</p>",
    "familj": "massdensitet_stang_integral_c"
  },
  {
    "id": "3.107",
    "kap": 3,
    "omr": "tathetsfunktioner",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En kontinuerlig slumpvariabel \\(X\\) har täthetsfunktionen</p><p>\\[f(x)=kx^2,\\qquad0\\le x\\le2,\\]</p><p>och \\(f(x)=0\\) annars.</p><p>a) Bestäm \\(k\\).<br>b) Bestäm \\(P(X&gt;1)\\).<br>c) Bestäm det tal \\(a\\) som uppfyller \\(P(X\\le a)=1/8\\).</p>",
    "s": "<p><strong>Metod:</strong> För en täthetsfunktion är den totala arean 1. Sannolikheten för ett intervall fås genom att integrera tätheten över intervallet.</p><p>a) \\(1=k\\int_0^2x^2dx=k\\cdot8/3\\Rightarrow\\boxed{k=3/8}\\).</p><p>b) \\(P(X&gt;1)=1-\\int_0^1(3/8)x^2dx=1-1/8=\\boxed{7/8}\\).</p><p>c) \\(\\int_0^a(3/8)x^2dx=a^3/8=1/8\\Rightarrow\\boxed{a=1}\\).</p>",
    "familj": "tathet_kx2_c"
  },
  {
    "id": "3.108",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Skillnaden mellan inflödet och utflödet i en vattenreservoar kan under sex timmar beskrivas av</p><p>\\[q(t)=t^2-6t+5,\\qquad 0\\le t\\le6,\\]</p><p>där \\(q\\) mäts i m³/h. Positivt \\(q\\) betyder att reservoaren fylls och negativt \\(q\\) att den töms. Vid \\(t=0\\) finns 30 m³ vatten.</p>\n<span class=\"fig\"><svg width=\"490\" height=\"285\" viewBox=\"0 0 490 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graf av skillnaden mellan inflöde och utflöde, q lika med t kvadrat minus 6t plus 5, med nollställen vid t 1 och t 5\">\n<rect x=\"1\" y=\"1\" width=\"488\" height=\"283\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"70\" y1=\"35\" x2=\"70\" y2=\"245\"/><line x1=\"133.33333333333331\" y1=\"35\" x2=\"133.33333333333331\" y2=\"245\"/><line x1=\"196.66666666666666\" y1=\"35\" x2=\"196.66666666666666\" y2=\"245\"/><line x1=\"260\" y1=\"35\" x2=\"260\" y2=\"245\"/><line x1=\"323.3333333333333\" y1=\"35\" x2=\"323.3333333333333\" y2=\"245\"/><line x1=\"386.6666666666667\" y1=\"35\" x2=\"386.6666666666667\" y2=\"245\"/><line x1=\"450\" y1=\"35\" x2=\"450\" y2=\"245\"/><line x1=\"65\" y1=\"225.9090909090909\" x2=\"455\" y2=\"225.9090909090909\"/><line x1=\"65\" y1=\"187.72727272727275\" x2=\"455\" y2=\"187.72727272727275\"/><line x1=\"65\" y1=\"149.54545454545456\" x2=\"455\" y2=\"149.54545454545456\"/><line x1=\"65\" y1=\"111.36363636363637\" x2=\"455\" y2=\"111.36363636363637\"/><line x1=\"65\" y1=\"73.18181818181816\" x2=\"455\" y2=\"73.18181818181816\"/></g>\n<line x1=\"65\" y1=\"149.54545454545456\" x2=\"465\" y2=\"149.54545454545456\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><path d=\"M465 149.54545454545456 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"70\" y1=\"250\" x2=\"70\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<polyline points=\"70.0,54.1 72.1,57.9 74.2,61.6 76.3,65.4 78.4,69.0 80.6,72.7 82.7,76.2 84.8,79.8 86.9,83.3 89.0,86.7 91.1,90.2 93.2,93.5 95.3,96.9 97.4,100.1 99.6,103.4 101.7,106.6 103.8,109.8 105.9,112.9 108.0,115.9 110.1,119.0 112.2,122.0 114.3,124.9 116.4,127.8 118.6,130.7 120.7,133.5 122.8,136.3 124.9,139.0 127.0,141.7 129.1,144.4 131.2,147.0 133.3,149.5 135.4,152.1 137.6,154.6 139.7,157.0 141.8,159.4 143.9,161.7 146.0,164.1 148.1,166.3 150.2,168.6 152.3,170.7 154.4,172.9 156.6,175.0 158.7,177.0 160.8,179.1 162.9,181.0 165.0,183.0 167.1,184.8 169.2,186.7 171.3,188.5 173.4,190.3 175.6,192.0 177.7,193.6 179.8,195.3 181.9,196.9 184.0,198.4 186.1,199.9 188.2,201.4 190.3,202.8 192.4,204.2 194.6,205.5 196.7,206.8 198.8,208.1 200.9,209.3 203.0,210.4 205.1,211.6 207.2,212.7 209.3,213.7 211.4,214.7 213.6,215.6 215.7,216.6 217.8,217.4 219.9,218.3 222.0,219.0 224.1,219.8 226.2,220.5 228.3,221.1 230.4,221.8 232.6,222.3 234.7,222.9 236.8,223.3 238.9,223.8 241.0,224.2 243.1,224.6 245.2,224.9 247.3,225.1 249.4,225.4 251.6,225.6 253.7,225.7 255.8,225.8 257.9,225.9 260.0,225.9 262.1,225.9 264.2,225.8 266.3,225.7 268.4,225.6 270.6,225.4 272.7,225.1 274.8,224.9 276.9,224.6 279.0,224.2 281.1,223.8 283.2,223.3 285.3,222.9 287.4,222.3 289.6,221.8 291.7,221.1 293.8,220.5 295.9,219.8 298.0,219.0 300.1,218.3 302.2,217.4 304.3,216.6 306.4,215.6 308.6,214.7 310.7,213.7 312.8,212.7 314.9,211.6 317.0,210.4 319.1,209.3 321.2,208.1 323.3,206.8 325.4,205.5 327.6,204.2 329.7,202.8 331.8,201.4 333.9,199.9 336.0,198.4 338.1,196.9 340.2,195.3 342.3,193.6 344.4,192.0 346.6,190.3 348.7,188.5 350.8,186.7 352.9,184.8 355.0,183.0 357.1,181.0 359.2,179.1 361.3,177.0 363.4,175.0 365.6,172.9 367.7,170.7 369.8,168.6 371.9,166.3 374.0,164.1 376.1,161.7 378.2,159.4 380.3,157.0 382.4,154.6 384.6,152.1 386.7,149.5 388.8,147.0 390.9,144.4 393.0,141.7 395.1,139.0 397.2,136.3 399.3,133.5 401.4,130.7 403.6,127.8 405.7,124.9 407.8,122.0 409.9,119.0 412.0,115.9 414.1,112.9 416.2,109.8 418.3,106.6 420.4,103.4 422.6,100.1 424.7,96.9 426.8,93.5 428.9,90.2 431.0,86.7 433.1,83.3 435.2,79.8 437.3,76.2 439.4,72.7 441.6,69.0 443.7,65.4 445.8,61.6 447.9,57.9 450.0,54.1\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n<circle cx=\"133.33333333333331\" cy=\"149.54545454545456\" r=\"4\" fill=\"#B43123\"/><circle cx=\"386.6666666666667\" cy=\"149.54545454545456\" r=\"4\" fill=\"#B43123\"/><text x=\"133.33333333333331\" y=\"169.54545454545456\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">1</text><text x=\"386.6666666666667\" y=\"169.54545454545456\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">5</text><text x=\"468\" y=\"144.54545454545456\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">t</text><text x=\"78\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">q</text>\n</svg></span>\n<p>a) Under vilka tidsintervall ökar respektive minskar vattenvolymen?<br>b) Bestäm den minsta vattenvolymen under de sex timmarna och när den inträffar.<br>c) Bestäm totala förändringen av vattenvolymen under hela sex-timmarsperioden.</p>",
    "s": "<p>Volymens förändringshastighet är \\(V'(t)=q(t)=(t-1)(t-5)\\).</p>\n<p>a) \\(q&gt;0\\) för \\(0\\le t&lt;1\\) och \\(5&lt;t\\le6\\), så volymen ökar där. Den minskar för \\(1&lt;t&lt;5\\).</p>\n<p>Volymen är</p><p>\\[V(t)=30+\\int_0^t(s^2-6s+5)ds=30+\\frac{t^3}{3}-3t^2+5t.\\]</p>\n<p>b) Den enda inre minimipunkten inträffar vid \\(t=5\\), eftersom \\(q\\) byter från negativ till positiv där.</p><p>\\[V(5)=30+\\frac{125}{3}-75+25=\\frac{65}{3}.\\]</p><p>Ändpunkterna ger \\(V(0)=30\\) och \\(V(6)=24\\), så minimum är verkligen vid \\(t=5\\).</p><p><strong>Minsta volym: \\(65/3\\approx21,7\\) m³ efter 5 h.</strong></p>\n<p>c) Nettovolymförändringen är</p><p>\\[\\int_0^6q(t)dt=V(6)-V(0)=24-30=\\boxed{-6\\text{ m}^3}.\\]</p>",
    "familj": "reservoar_nettoflode_integral_a"
  },
  {
    "id": "3.109",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Grafen visar ett vattenflöde \\(q(t)\\) i liter per minut.</p><span class=\"fig\"><svg width=\"470\" height=\"255\" viewBox=\"0 0 470 255\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Flödesgraf\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"253\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55\" y1=\"215\" x2=\"425\" y2=\"215\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"55\" y1=\"35\" x2=\"55\" y2=\"215\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><polyline points=\"55,185 145,95 280,95 415,155\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"3\"/><line x1=\"145\" y1=\"215\" x2=\"145\" y2=\"95\" stroke=\"#E8ECEF\"/><line x1=\"280\" y1=\"215\" x2=\"280\" y2=\"95\" stroke=\"#E8ECEF\"/><text x=\"55\" y=\"235\" font-family=\"sans-serif\" font-size=\"11\">0</text><text x=\"145\" y=\"235\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">4</text><text x=\"280\" y=\"235\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">10</text><text x=\"415\" y=\"235\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\">16</text><text x=\"47\" y=\"99\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">30</text><text x=\"47\" y=\"159\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">15</text><text x=\"390\" y=\"205\" font-family=\"sans-serif\" font-size=\"11\">t (min)</text><text x=\"65\" y=\"48\" font-family=\"sans-serif\" font-size=\"11\">q (L/min)</text></svg></span><p>Bestäm hur mycket vatten som passerar under de första 16 minuterna.</p>",
    "s": "<p>Volymen är arean under flödesgrafen.</p><p>0–4 min: trapets \\((15+30)\\cdot4/2=90\\) L.</p><p>4–10 min: rektangel \\(30\\cdot6=180\\) L.</p><p>10–16 min: trapets \\((30+15)\\cdot6/2=135\\) L.</p><p>Totalt \\(\\boxed{405\\text{ L}}\\).</p>",
    "familj": "flodesgraf_trapets_e_svg"
  },
  {
    "id": "3.110",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan \\(y=x\\), x-axeln och \\(x=2\\) roteras kring linjen \\(y=3\\).</p><p>Bestäm volymen.</p>",
    "s": "<p>För varje \\(x\\in[0,2]\\) är ytterradien \\(R=3\\) och innerradien \\(r=3-x\\).</p><p>\\[V=\\pi\\int_0^2(9-(3-x)^2)dx=\\pi\\int_0^2(6x-x^2)dx.\\]</p><p>\\[V=\\pi[3x^2-x^3/3]_0^2=\\pi(12-8/3)=\\boxed{28\\pi/3}.\\]</p>",
    "familj": "proc_rotation_forskjuten_axel_2"
  },
  {
    "id": "3.111",
    "kap": 3,
    "omr": "integraler_storheter",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>En partikels hastighet är</p><p>\\[v(t)=3t^2-12t+9,\\qquad0\\le t\\le4.\\]</p><p>a) Bestäm partikelns förflyttning under intervallet.<br>b) Bestäm den totala sträcka partikeln färdas.</p>",
    "s": "<p>En primitiv funktion till hastigheten är</p><p>\\[F(t)=t^3-6t^2+9t.\\]</p><p>a) Förflyttningen är \\(F(4)-F(0)=64-96+36=\\boxed{4}\\).</p><p>b) \\(v(t)=3(t-1)(t-3)\\), så rörelseriktningen ändras vid \\(t=1\\) och \\(t=3\\). \\(F(0)=0,F(1)=4,F(3)=0,F(4)=4\\).</p><p>Total sträcka: \\(|4-0|+|0-4|+|4-0|=\\boxed{12}\\).</p>",
    "familj": "hastighet_forflyttning_totalstracka"
  },
  {
    "id": "3.112",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan \\(y=2x\\) och \\(y=x\\) för \\(0\\le x\\le2\\) roteras kring x-axeln.</p><p>a) Ange ytterradie och innerradie.<br>b) Ställ upp volymintegralen.<br>c) Beräkna volymen.</p>",
    "s": "<p><strong>Metod:</strong> Bestäm radien eller radierna vinkelrätt mot rotationsaxeln. Skriv sedan volymintegralen med skivor eller brickor.</p><p>a) Ytterradie \\(R=2x\\), innerradie \\(r=x\\).</p><p>b) \\[V=\\pi\\int_0^2((2x)^2-x^2)dx=\\pi\\int_0^23x^2dx.\\]</p><p>c) \\(V=\\pi[x^3]_0^2=\\boxed{8\\pi}\\).</p>",
    "familj": "proc_rotation_brickor_2"
  },
  {
    "id": "3.113",
    "kap": 3,
    "omr": "integral_modellering",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Nettoförändringen av en mängd ges av hastigheten \\(r(t)=t^2-4t+3\\) enheter per timme under \\(0\\le t\\le5\\).</p><p>a) Bestäm nettot under intervallet.<br>b) Bestäm de tider då mängden tillfälligt varken ökar eller minskar.<br>c) Om mängden från början är 20 enheter, bestäm mängden efter 5 timmar.</p>",
    "s": "<p><strong>Metod:</strong> Översätt först situationen till en integral. Kontrollera sedan vad integralens tecken och enhet betyder i sammanhanget.</p><p>a) \\(\\int_0^5(t^2-4t+3)dt=[t^3/3-2t^2+3t]_0^5=125/3-50+15=\\boxed{20/3}\\).</p><p>b) \\(r(t)=(t-1)(t-3)=0\\Rightarrow\\boxed{t=1,3}\\).</p><p>c) \\(20+20/3=\\boxed{80/3}\\) enheter.</p>",
    "familj": "proc_integral_nettoforandring_2"
  },
  {
    "id": "3.114",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Området mellan \\(y=\\sqrt{x}\\), x-axeln och linjen \\(x=4\\) roteras kring linjen \\(y=3\\).</p><p>Bestäm rotationskroppens volym.</p>",
    "s": "<p>Rotation kring \\(y=3\\) ger brickor med ytterradie \\(R=3\\) och innerradie \\(r=3-\\sqrt{x}\\).</p><p>\\[V=\\pi\\int_0^4\\left(3^2-(3-\\sqrt{x})^2\\right)dx.\\]</p><p>Förenkla integranden: \\(9-(9-6\\sqrt{x}+x)=6\\sqrt{x}-x\\).</p><p>\\[V=\\pi\\left[4x^{3/2}-\\frac{x^2}{2}\\right]_0^4=\\pi(32-8)=\\]<strong>\\(24\\pi\\)</strong>.</p>",
    "familj": "rotation_forskjuten_axel_c"
  },
  {
    "id": "3.115",
    "kap": 3,
    "omr": "rotationsvolymer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>I ett koordinatsystem ligger cirkelskivan</p><p>\\[(x-3)^2+y^2\\le1.\\]</p><p>Den roteras ett varv kring y-axeln och bildar en ringformad rotationskropp.</p><span class=\"fig\"><svg width=\"460\" height=\"285\" viewBox=\"0 0 460 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cirkel med centrum tre enheter från y-axeln som roteras kring y-axeln\">\n<rect x=\"1\" y=\"1\" width=\"458\" height=\"283\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"95\" y1=\"25\" x2=\"95\" y2=\"245\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"55\" y1=\"190\" x2=\"410\" y2=\"190\" stroke=\"#2B2527\" stroke-width=\"1.6\"/>\n<circle cx=\"280\" cy=\"135\" r=\"62\" fill=\"#DCEFF2\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"280\" cy=\"135\" r=\"4\" fill=\"#2B2527\"/>\n<line x1=\"95\" y1=\"135\" x2=\"280\" y2=\"135\" stroke=\"#B43123\" stroke-width=\"1.5\"/><text x=\"188\" y=\"128\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">3</text>\n<line x1=\"280\" y1=\"135\" x2=\"342\" y2=\"135\" stroke=\"#268FA3\" stroke-width=\"1.5\"/><text x=\"311\" y=\"128\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">1</text><text x=\"72\" y=\"38\" font-family=\"sans-serif\" font-size=\"12\">y-axel</text>\n</svg></span><p>Bestäm volymen exakt med hjälp av en integral. Du får använda geometrisk tolkning av en integral.</p>",
    "s": "<p>För ett givet \\(y\\in[-1,1]\\) är ytterradien \\(R=3+\\sqrt{1-y^2}\\) och innerradien \\(r=3-\\sqrt{1-y^2}\\).</p><p>\\[V=\\pi\\int_{-1}^{1}(R^2-r^2)dy.\\]</p><p>Skillnaden blir</p><p>\\[(3+s)^2-(3-s)^2=12s,\\qquad s=\\sqrt{1-y^2}.\\]</p><p>Alltså</p><p>\\[V=12\\pi\\int_{-1}^{1}\\sqrt{1-y^2}dy.\\]</p><p>Integralen är arean av en halvcirkel med radie 1, alltså \\(\\pi/2\\).</p><p><strong>\\(\\boxed{V=6\\pi^2}\\)</strong>.</p>",
    "familj": "torus_integral_geometri"
  },
  {
    "id": "4.01",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p>\n<p>a) \\(i^2\\)<br>\nb) \\(i^{19}\\)<br>\nc) \\((3+2i)+(5-7i)\\)<br>\nd) \\((2+i)(3-4i)\\)</p>",
    "s": "<p>a) <strong>\\(i^2=-1\\)</strong>.</p>\n<p>b) Potenserna av \\(i\\) upprepas med perioden 4. Eftersom \\(19=4\\cdot4+3\\):</p>\n<p>\\[\ni^{19}=i^3=-i.\n\\]</p>\n<p>c)</p>\n<p>\\[\n(3+2i)+(5-7i)=8-5i.\n\\]</p>\n<p>d)</p>\n<p>\\[\n(2+i)(3-4i)=6-8i+3i-4i^2=10-5i.\n\\]</p>",
    "familj": "komplex_rutin_fyra_delar"
  },
  {
    "id": "4.02",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla.</p><p>a) \\(i^{18}\\)<br>b) \\(i^{27}\\)<br>c) \\(i^{44}\\)<br>d) \\(i^{101}\\)</p>",
    "s": "<p>Potenser av \\(i\\) upprepas med period 4.</p><p>a) \\(18\\equiv2\\pmod4\\Rightarrow\\boxed{-1}\\).</p><p>b) \\(27\\equiv3\\Rightarrow\\boxed{-i}\\).</p><p>c) \\(44\\equiv0\\Rightarrow\\\\boxed{1}\\).</p><p>d) \\(101\\equiv1\\Rightarrow\\\\boxed{i}\\).</p>",
    "familj": "proc_i_potenser_3"
  },
  {
    "id": "4.03",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Rötterna till \\(z^6=64\\) bildar en regelbunden sexhörning i det komplexa talplanet.</p><p>a) Bestäm alla rötter på polär form.<br>b) Vilka av rötterna har positiv imaginärdel?<br>c) Visa utan att addera rötterna en och en att summan av alla sex rötter är 0.</p>",
    "s": "<p>a) Absolutbeloppet är 2 och argumenten \\(\\theta_k=k\\pi/3\\), \\(k=0,1,\\dots,5\\):</p><p>\\[\\boxed{z_k=2e^{ik\\pi/3}}.\\]</p><p>b) Positiv imaginärdel har \\(k=1,2\\): \\(\\boxed{2e^{i\\pi/3},\\ 2e^{i2\\pi/3}}\\).</p><p>c) Rötterna ligger parvis mitt emot varandra: \\(z_{k+3}=-z_k\\). Varje sådant par summerar till 0, alltså gör hela summan det.</p>",
    "familj": "sjatterot_symmetri_summa_a"
  },
  {
    "id": "4.04",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>De komplexa talen är</p>\n<p>\\[\nz_1=2(\\cos30^\\circ+i\\sin30^\\circ)\n\\]</p>\n<p>och</p>\n<p>\\[\nz_2=3(\\cos(-45^\\circ)+i\\sin(-45^\\circ)).\n\\]</p>\n<p>Bestäm i polär form</p>\n<p>a) \\(z_1z_2\\)<br>\nb) \\(\\dfrac{z_1}{z_2}\\).</p>",
    "s": "<p>Vid multiplikation multipliceras absolutbeloppen och argumenten adderas:</p>\n<p>\\[\nz_1z_2=6(\\cos(-15^\\circ)+i\\sin(-15^\\circ)).\n\\]</p>\n<p>Vid division divideras absolutbeloppen och argumenten subtraheras:</p>\n<p>\\[\n\\frac{z_1}{z_2}\n=\n\\frac23(\\cos75^\\circ+i\\sin75^\\circ).\n\\]</p>",
    "familj": "polar_multiplikation_division"
  },
  {
    "id": "4.05",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Ett fjärdegradspolynom \\(p(z)\\) har reella koefficienter och koefficienten framför \\(z^4\\) är 1. Två av dess rötter är</p><p>\\[z_1=1+i\\qquad\\text{och}\\qquad z_2=2i.\\]</p><p>a) Bestäm de två andra rötterna utan att räkna och förklara varför de måste finnas.<br>b) Bestäm polynomet \\(p(z)\\) på utvecklad form.</p>",
    "s": "<p>a) När ett polynom har reella koefficienter kommer en komplex rot som inte är reell tillsammans med sitt konjugat. Därför måste även</p><p><strong>\\(1-i\\) och \\(-2i\\)</strong></p><p>vara rötter.</p>\n<p>b) Eftersom koefficienten framför \\(z^4\\) ska vara 1 blir polynomet</p><p>\\[p(z)=(z-(1+i))(z-(1-i))(z-2i)(z+2i).\\]</p>\n<p>De första två faktorerna ger</p><p>\\[(z-1)^2+1=z^2-2z+2,\\]</p><p>och de sista två ger \\(z^2+4\\).</p>\n<p>\\[p(z)=(z^2-2z+2)(z^2+4).\\]</p><p>Utveckling:</p><p><strong>\\[p(z)=z^4-2z^3+6z^2-8z+8.\\]</strong></p>",
    "familj": "polynom_reella_koeff_konjugatpar_a"
  },
  {
    "id": "4.06",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Villkoret nedan beskriver en mängd punkter i det komplexa talplanet. Bestäm vilken kurva punkterna bildar och rita den:</p><p>\\[|z-(1-i)|=3.\\]</p><span class=\"fig\"><svg width=\"420\" height=\"330\" viewBox=\"0 0 420 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med lika skala på axlarna\"><rect x=\"1\" y=\"1\" width=\"418\" height=\"328\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"85.0\" y1=\"35\" x2=\"85.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"285.0\" x2=\"335.0\" y2=\"285.0\" stroke=\"#E8ECEF\"/><line x1=\"110.0\" y1=\"35\" x2=\"110.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"260.0\" x2=\"335.0\" y2=\"260.0\" stroke=\"#E8ECEF\"/><line x1=\"135.0\" y1=\"35\" x2=\"135.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"235.0\" x2=\"335.0\" y2=\"235.0\" stroke=\"#E8ECEF\"/><line x1=\"160.0\" y1=\"35\" x2=\"160.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"210.0\" x2=\"335.0\" y2=\"210.0\" stroke=\"#E8ECEF\"/><line x1=\"185.0\" y1=\"35\" x2=\"185.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"185.0\" x2=\"335.0\" y2=\"185.0\" stroke=\"#E8ECEF\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#E8ECEF\"/><line x1=\"235.0\" y1=\"35\" x2=\"235.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"135.0\" x2=\"335.0\" y2=\"135.0\" stroke=\"#E8ECEF\"/><line x1=\"260.0\" y1=\"35\" x2=\"260.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"110.0\" x2=\"335.0\" y2=\"110.0\" stroke=\"#E8ECEF\"/><line x1=\"285.0\" y1=\"35\" x2=\"285.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"85.0\" x2=\"335.0\" y2=\"85.0\" stroke=\"#E8ECEF\"/><line x1=\"310.0\" y1=\"35\" x2=\"310.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"60.0\" x2=\"335.0\" y2=\"60.0\" stroke=\"#E8ECEF\"/><line x1=\"335.0\" y1=\"35\" x2=\"335.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"35.0\" x2=\"335.0\" y2=\"35.0\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"235.0\" cy=\"185.0\" r=\"75.0\" fill=\"#DCEEF1\" fill-opacity=\"0.22\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"235.0\" cy=\"185.0\" r=\"5\" fill=\"#B43123\"/><text x=\"242.0\" y=\"178.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">C</text><text x=\"332.0\" y=\"152.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"218.0\" y=\"47\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span>",
    "s": "<p>Absolutbeloppet är avstånd. Villkoret säger att avståndet från punkten \\(1-i\\), dvs \\((1,-1)\\), är 3.</p><p>Punkterna bildar därför <strong>cirkeln med centrum \\((1,-1)\\) och radie 3</strong>.</p><p>I koordinater: \\(\\boxed{(x-1)^2+(y+1)^2=9}\\).</p>",
    "familj": "lokus_cirkel_enkel_c_svg"
  },
  {
    "id": "4.07",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna och skriv på formen \\(a+bi\\).</p><p>a) \\((4-3i)-(1+5i)\\)<br>b) \\((2+3i)(2-3i)\\)<br>c) \\((1-i)^3\\)<br>d) \\(\\frac{3+4i}{1+i}\\)</p>",
    "s": "<p>a) <strong>\\(3-8i\\)</strong>.</p><p>b) Produkten av konjugat: <strong>13</strong>.</p><p>c) \\((1-i)^2=-2i\\), alltså \\((-2i)(1-i)=-2-2i\\): <strong>\\(-2-2i\\)</strong>.</p><p>d) Multiplicera med \\(1-i\\): \\((3+4i)(1-i)/2=(7+i)/2\\), alltså <strong>\\(7/2+i/2\\)</strong>.</p>",
    "familj": "komplex_rutin3"
  },
  {
    "id": "4.08",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\((5+3i)+(-2+7i)\\)<br>b) \\((4-6i)-(1+2i)\\)<br>c) \\(-3(2-i)\\)<br>d) \\(2(1+4i)-(3-i)\\)</p>",
    "s": "<p><strong>Metod:</strong> Räkna realdelar och imaginärdelar var för sig och använd \\(i^2=-1\\).</p><p>a) <strong>\\(3+10i\\)</strong>.<br>b) <strong>\\(3-8i\\)</strong>.<br>c) <strong>\\(-6+3i\\)</strong>.<br>d) \\(2+8i-3+i=\\boxed{-1+9i}\\).</p>",
    "familj": "proc_complex_add_sub_3"
  },
  {
    "id": "4.09",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna i polär form.</p><p>a) \\(2\\operatorname{cis}(\\pi/6)\\cdot3\\operatorname{cis}(\\pi/4)\\)<br>b) \\(\\frac{8\\operatorname{cis}(5\\pi/6)}{2\\operatorname{cis}(\\pi/3)}\\)<br>c) \\(5\\operatorname{cis}(7\\pi/6)\\cdot2\\operatorname{cis}(5\\pi/6)\\)<br>d) \\(\\frac{6\\operatorname{cis}(3\\pi/2)}{3\\operatorname{cis}(\\pi/2)}\\)</p>",
    "s": "<p>a) <strong>\\(6\\operatorname{cis}(5\\pi/12)\\)</strong>.<br>b) <strong>\\(4\\operatorname{cis}(\\pi/2)=4i\\)</strong>.<br>c) Argumentet blir \\(2\\pi\\): <strong>10</strong>.<br>d) <strong>\\(2\\operatorname{cis}(\\pi)=-2\\)</strong>.</p>",
    "familj": "proc_polar_mult_div_1"
  },
  {
    "id": "4.10",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Polynomet \\(p(z)=z^3-5z^2+17z-13\\) har reella koefficienter och roten \\(z=2+3i\\).</p><p>Bestäm alla rötter.</p>",
    "s": "<p>Reella koefficienter innebär att även konjugatet <strong>\\(2-3i\\)</strong> är en rot.</p><p>Summan av rötterna är 5. De två kända rötterna har summa 4, så den tredje roten är <strong>1</strong>.</p><p>Kontroll av produkten: \\((2+3i)(2-3i)\\cdot1=13\\), vilket stämmer med konstanttermen eftersom produkten av rötterna är 13.</p><p><strong>Rötterna är \\(1,2+3i,2-3i\\).</strong></p>",
    "familj": "konjugatrot_c2"
  },
  {
    "id": "4.11",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Skriv på polär form.</p><p>a) \\(2+2i\\)<br>b) \\(-3i\\)<br>c) \\(-1-\\sqrt3i\\)</p>",
    "s": "<p>a) Absolutbelopp \\(2\\sqrt2\\), argument \\(\\pi/4\\): <strong>\\(2\\sqrt2(\\cos\\frac\\pi4+i\\sin\\frac\\pi4)\\)</strong>.</p><p>b) Absolutbelopp 3, argument \\(3\\pi/2\\): <strong>\\(3(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2})\\)</strong>.</p><p>c) Absolutbelopp 2, argument \\(4\\pi/3\\): <strong>\\(2(\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3})\\)</strong>.</p>",
    "familj": "polar_rutin3"
  },
  {
    "id": "4.12",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös</p><p>\\[z^4=81\\left(\\cos120^\\circ+i\\sin120^\\circ\\right).\\]</p><span class=\"fig\"><svg width=\"440\" height=\"290\" viewBox=\"0 0 440 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\"><rect x=\"1\" y=\"1\" width=\"438\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"260.0\" x2=\"385\" y2=\"260.0\" stroke=\"#E8ECEF\"/><line x1=\"88.0\" y1=\"25\" x2=\"88.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"236.5\" x2=\"385\" y2=\"236.5\" stroke=\"#E8ECEF\"/><line x1=\"121.0\" y1=\"25\" x2=\"121.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"213.0\" x2=\"385\" y2=\"213.0\" stroke=\"#E8ECEF\"/><line x1=\"154.0\" y1=\"25\" x2=\"154.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"189.5\" x2=\"385\" y2=\"189.5\" stroke=\"#E8ECEF\"/><line x1=\"187.0\" y1=\"25\" x2=\"187.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"166.0\" x2=\"385\" y2=\"166.0\" stroke=\"#E8ECEF\"/><line x1=\"220.0\" y1=\"25\" x2=\"220.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"142.5\" x2=\"385\" y2=\"142.5\" stroke=\"#E8ECEF\"/><line x1=\"253.0\" y1=\"25\" x2=\"253.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"119.0\" x2=\"385\" y2=\"119.0\" stroke=\"#E8ECEF\"/><line x1=\"286.0\" y1=\"25\" x2=\"286.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"95.5\" x2=\"385\" y2=\"95.5\" stroke=\"#E8ECEF\"/><line x1=\"319.0\" y1=\"25\" x2=\"319.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"72.0\" x2=\"385\" y2=\"72.0\" stroke=\"#E8ECEF\"/><line x1=\"352.0\" y1=\"25\" x2=\"352.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"48.5\" x2=\"385\" y2=\"48.5\" stroke=\"#E8ECEF\"/><line x1=\"385.0\" y1=\"25\" x2=\"385.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"25.0\" x2=\"385\" y2=\"25.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"142.5\" x2=\"385\" y2=\"142.5\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><line x1=\"220.0\" y1=\"25\" x2=\"220.0\" y2=\"260\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><circle cx=\"220.0\" cy=\"142.5\" r=\"99.0\" fill=\"#DCEEF1\" fill-opacity=\"0.3\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"305.7\" cy=\"107.2\" r=\"5\" fill=\"#B43123\"/><text x=\"313.7\" y=\"99.2\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z1</text><circle cx=\"170.5\" cy=\"81.4\" r=\"5\" fill=\"#B43123\"/><text x=\"178.5\" y=\"73.4\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z2</text><circle cx=\"134.3\" cy=\"177.8\" r=\"5\" fill=\"#B43123\"/><text x=\"142.3\" y=\"169.8\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z3</text><circle cx=\"269.5\" cy=\"203.6\" r=\"5\" fill=\"#B43123\"/><text x=\"277.5\" y=\"195.6\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z4</text><text x=\"369\" y=\"134.5\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"228.0\" y=\"35\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>Ange alla rötter på polär form och beskriv deras geometriska placering.</p>",
    "s": "<p>Varje rot har absolutbelopp \\(81^{1/4}=3\\). Argumenten är</p><p>\\[\\theta_k=\\frac{120^\\circ+360^\\circ k}{4}=30^\\circ+90^\\circ k,\\quad k=0,1,2,3.\\]</p><p>Alltså <strong>30°, 120°, 210° och 300°</strong>.</p><p>Rötterna ligger på cirkeln \\(|z|=3\\) med 90° mellanrum, alltså i hörnen på en kvadrat med centrum i origo.</p>",
    "familj": "fjarderot_polar_c"
  },
  {
    "id": "4.13",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Talet \\(z=2-3i\\) och dess konjugat är markerade i det komplexa talplanet.</p><span class=\"fig\"><svg width=\"430\" height=\"290\" viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text>\n<line x1=\"90.0\" y1=\"25\" x2=\"90.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"90.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<line x1=\"125.0\" y1=\"25\" x2=\"125.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"125.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"160.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"195.0\" y1=\"25\" x2=\"195.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"195.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"230.0\" y1=\"25\" x2=\"230.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"265.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"300.0\" y1=\"25\" x2=\"300.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"300.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"335.0\" y1=\"25\" x2=\"335.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"335.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"370.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"405.0\" y1=\"25\" x2=\"405.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"405.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"250.0\" x2=\"405\" y2=\"250.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"253.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text>\n<line x1=\"55\" y1=\"227.5\" x2=\"405\" y2=\"227.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"230.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<line x1=\"55\" y1=\"205.0\" x2=\"405\" y2=\"205.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"208.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"55\" y1=\"182.5\" x2=\"405\" y2=\"182.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"185.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"55\" y1=\"160.0\" x2=\"405\" y2=\"160.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"163.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"137.5\" x2=\"405\" y2=\"137.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"115.0\" x2=\"405\" y2=\"115.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"118.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"92.5\" x2=\"405\" y2=\"92.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"95.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"70.0\" x2=\"405\" y2=\"70.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"73.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"47.5\" x2=\"405\" y2=\"47.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"50.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"405\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"137.5\" x2=\"405\" y2=\"137.5\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"230.0\" y1=\"25\" x2=\"230.0\" y2=\"250\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<text x=\"403\" y=\"130.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Re</text>\n<text x=\"238.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Im</text>\n<circle cx=\"300.0\" cy=\"205.0\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"308.0\" y=\"197.0\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">z</text>\n<circle cx=\"300.0\" cy=\"70.0\" r=\"5\" fill=\"#5C575E\"/>\n<text x=\"308.0\" y=\"62.0\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">z̄</text>\n\n</svg></span><p>a) Bestäm \\(\\overline z\\).<br>\nb) Bestäm \\(|z|\\) exakt.<br>\nc) Förklara geometriskt varför \\(|z|=|\\overline z|\\).</p>",
    "s": "<p>a) Konjugering byter tecken på imaginärdelen:</p>\n<p><strong>\\(\\overline z=2+3i\\).</strong></p>\n<p>b)</p>\n<p>\\[\n|z|=\\sqrt{2^2+(-3)^2}=\\sqrt{13}.\n\\]</p>\n<p>c) Punkterna \\(z\\) och \\(\\overline z\\) är speglingar i realaxeln. Spegling förändrar inte avståndet till origo, så absolutbeloppen är lika.</p>",
    "familj": "komplex_konjugat_geometri"
  },
  {
    "id": "4.14",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Multiplicera och skriv svaret på formen \\(a+bi\\).</p><p>a) \\((2+3i)(4-i)\\)<br>b) \\((1-2i)^2\\)<br>c) \\((3+i)(3-i)\\)<br>d) \\((2+i)(-1+4i)\\)</p>",
    "s": "<p>a) \\(8-2i+12i-3i^2=\\boxed{11+10i}\\).</p><p>b) \\(1-4i+4i^2=\\boxed{-3-4i}\\).</p><p>c) Konjugatprodukt: \\(3^2+1^2=\\boxed{10}\\).</p><p>d) \\(-2+8i-i+4i^2=\\boxed{-6+7i}\\).</p>",
    "familj": "proc_complex_multiplikation_3"
  },
  {
    "id": "4.15",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Utför polynomdivisionen</p>\n<p>\\[\n\\frac{2x^4-3x^3-11x^2+12x+9}{x^2-3}.\n\\]</p>\n<p>Ange både kvot och eventuell rest.</p>",
    "s": "<p>Dividera ledande termer stegvis:</p>\n<p>\\[\n2x^4/(x^2)=2x^2.\n\\]</p>\n<p>Subtraktion ger \\(-3x^3-5x^2+12x+9\\).</p>\n<p>Nästa term är \\(-3x\\), vilket ger efter subtraktion \\(-5x^2+3x+9\\).</p>\n<p>Nästa term är \\(-5\\), vilket ger resten \\(3x-6\\).</p>\n<p><strong>\\[\n\\frac{2x^4-3x^3-11x^2+12x+9}{x^2-3}\n=\n2x^2-3x-5+\\frac{3x-6}{x^2-3}.\n\\]</strong></p>\n<p>Kvoten är \\(2x^2-3x-5\\) och resten \\(3x-6\\).</p>",
    "familj": "polynomdivision_rutin_c"
  },
  {
    "id": "4.16",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Alla komplexa tal \\(z=x+yi\\) som uppfyller</p><p>\\[|z-(2+i)|=2|z+1|\\]</p><p>bildar en kurva i det komplexa talplanet. Bestäm vilken kurva det är och ange dess medelpunkt och radie.</p>",
    "s": "<p>Kvadrera båda leden:</p><p>\\[(x-2)^2+(y-1)^2=4[(x+1)^2+y^2].\\]</p><p>Utveckling ger \\(3x^2+3y^2+12x+2y-1=0\\). Dividera med 3 och kvadratkomplettera:</p><p>\\[(x+2)^2+(y+1/3)^2=40/9.\\]</p><p>Punkterna bildar alltså en cirkel med <strong>medelpunkt \\((-2,-1/3)\\)</strong> och <strong>radie \\(2\\sqrt{10}/3\\)</strong>.</p>",
    "familj": "komplex_ort_apollonius"
  },
  {
    "id": "4.17",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm och beskriv mängden av komplexa tal som uppfyller</p><p>\\[|z-(2+i)|=3.\\]</p><span class=\"fig\"><svg width=\"460\" height=\"310\" viewBox=\"0 0 460 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med en cirkel med centrum två plus i och radie tre\"><rect x=\"1\" y=\"1\" width=\"458\" height=\"308\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><g><line x1=\"89\" y1=\"25\" x2=\"89\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"127\" y1=\"25\" x2=\"127\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"165\" y1=\"25\" x2=\"165\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"203\" y1=\"25\" x2=\"203\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"241\" y1=\"25\" x2=\"241\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"279\" y1=\"25\" x2=\"279\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"317\" y1=\"25\" x2=\"317\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"355\" y1=\"25\" x2=\"355\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"393\" y1=\"25\" x2=\"393\" y2=\"280\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"284\" x2=\"410\" y2=\"284\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"246\" x2=\"410\" y2=\"246\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"208\" x2=\"410\" y2=\"208\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"170\" x2=\"410\" y2=\"170\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"132\" x2=\"410\" y2=\"132\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"94\" x2=\"410\" y2=\"94\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"56\" x2=\"410\" y2=\"56\" stroke=\"#E1E6EA\"/><line x1=\"65\" y1=\"18\" x2=\"410\" y2=\"18\" stroke=\"#E1E6EA\"/></g><line x1=\"60\" y1=\"170\" x2=\"425\" y2=\"170\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"165\" y1=\"292\" x2=\"165\" y2=\"18\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><circle cx=\"241\" cy=\"132\" r=\"114\" fill=\"#DCEFF2\" fill-opacity=\"0.45\" stroke=\"#268FA3\" stroke-width=\"2.2\"/><circle cx=\"241\" cy=\"132\" r=\"5\" fill=\"#B43123\"/><text x=\"251\" y=\"124\" font-family=\"sans-serif\" font-size=\"12\">2 + i</text><text x=\"427\" y=\"163\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"172\" y=\"23\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>Bestäm dessutom de punkter i mängden som ligger på den reella axeln.</p>",
    "s": "<p>Villkoret betyder att avståndet från \\(z\\) till punkten \\(2+i\\) är 3. Mängden är alltså en <strong>cirkel med centrum \\((2,1)\\) och radie 3</strong>.</p><p>På den reella axeln är \\(z=x\\). Då</p><p>\\[|x-(2+i)|^2=(x-2)^2+1=9.\\]</p><p>\\[(x-2)^2=8\\Rightarrow x=2\\pm2\\sqrt2.\\]</p><p><strong>Skärningspunkterna är \\(z=2\\pm2\\sqrt2\\).</strong></p>",
    "familj": "komplex_lokus_cirkel_skarning"
  },
  {
    "id": "4.18",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Lös ekvationen \\(z^4=16\\) och markera alla lösningar i det komplexa talplanet.</p>\n<span class=\"fig\"><svg width=\"390\" height=\"310\" viewBox=\"0 0 390 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tomt komplext talplan med cirkel av radie 2 som stöd för att markera fjärderötter\">\n<rect x=\"1\" y=\"1\" width=\"388\" height=\"308\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"55\" y1=\"35\" x2=\"55\" y2=\"270\"/><line x1=\"95\" y1=\"35\" x2=\"95\" y2=\"270\"/><line x1=\"135\" y1=\"35\" x2=\"135\" y2=\"270\"/><line x1=\"175\" y1=\"35\" x2=\"175\" y2=\"270\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"270\"/><line x1=\"255\" y1=\"35\" x2=\"255\" y2=\"270\"/><line x1=\"295\" y1=\"35\" x2=\"295\" y2=\"270\"/><line x1=\"335\" y1=\"35\" x2=\"335\" y2=\"270\"/><line x1=\"40\" y1=\"45\" x2=\"355\" y2=\"45\"/><line x1=\"40\" y1=\"85\" x2=\"355\" y2=\"85\"/><line x1=\"40\" y1=\"125\" x2=\"355\" y2=\"125\"/><line x1=\"40\" y1=\"165\" x2=\"355\" y2=\"165\"/><line x1=\"40\" y1=\"205\" x2=\"355\" y2=\"205\"/><line x1=\"40\" y1=\"245\" x2=\"355\" y2=\"245\"/></g>\n<line x1=\"40\" y1=\"165\" x2=\"365\" y2=\"165\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M365 165 l-9 -5 v10 z\" fill=\"#2B2527\"/>\n<line x1=\"195\" y1=\"275\" x2=\"195\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><path d=\"M195 28 l-5 9 h10 z\" fill=\"#2B2527\"/>\n<circle cx=\"195\" cy=\"165\" r=\"80\" fill=\"none\" stroke=\"#BFC5CC\" stroke-width=\"1.5\" stroke-dasharray=\"5 5\"/>\n<text x=\"367\" y=\"158\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Re</text><text x=\"203\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Im</text><text x=\"278\" y=\"184\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">2</text>\n</svg></span>",
    "s": "<p>Skriv högerledet som \\(16(\\cos0+i\\sin0)\\). Fjärderötterna har absolutbelopp</p><p>\\[r=16^{1/4}=2\\]</p><p>och argument</p><p>\\[\\theta_k=\\frac{0+2k\\pi}{4}=\\frac{k\\pi}{2},\\qquad k=0,1,2,3.\\]</p>\n<p>Lösningarna är därför</p><p><strong>\\(z=2,\\;2i,\\;-2,\\;-2i\\)</strong>.</p><p>De ligger på cirkeln \\(|z|=2\\) med 90° mellanrum.</p>",
    "familj": "fjarderot_16_talplan_svg"
  },
  {
    "id": "4.19",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Låt</p><p>\\[z_1=2\\operatorname{cis}(\\pi/6),\\qquad z_2=3\\operatorname{cis}(-\\pi/4).\\]</p><p>Bestäm \\(z_1z_2\\) och \\(z_1/z_2\\) i polär form.</p>",
    "s": "<p>Vid multiplikation multipliceras absolutbeloppen och argumenten adderas:</p><p>\\[z_1z_2=6\\operatorname{cis}(\\pi/6-\\pi/4)=\\boxed{6\\operatorname{cis}(-\\pi/12)}.\\]</p><p>Vid division divideras absolutbeloppen och argumenten subtraheras:</p><p>\\[\\frac{z_1}{z_2}=\\frac23\\operatorname{cis}(\\pi/6+\\pi/4)=\\boxed{\\frac23\\operatorname{cis}(5\\pi/12)}.\\]</p>",
    "familj": "polar_mult_div_ny"
  },
  {
    "id": "4.20",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Dividera och skriv svaret på formen \\(a+bi\\).</p><p>a) \\(\\frac{3+i}{1-i}\\)<br>b) \\(\\frac{5-5i}{1+i}\\)<br>c) \\(\\frac{4}{2-i}\\)<br>d) \\(\\frac{2+6i}{3i}\\)</p>",
    "s": "<p>a) Multiplicera med \\(1+i\\): \\(\\frac{(3+i)(1+i)}2=\\boxed{1+2i}\\).</p><p>b) \\(\\frac{(5-5i)(1-i)}2=\\frac{-10i}{2}=\\boxed{-5i}\\).</p><p>c) \\(\\frac{4(2+i)}5=\\boxed{\\frac85+\\frac45i}\\).</p><p>d) \\(\\frac{2+6i}{3i}\\cdot\\frac{-i}{-i}=\\frac{6-2i}{3}=\\boxed{2-\\frac23i}\\).</p>",
    "familj": "proc_complex_division_3"
  },
  {
    "id": "4.21",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla.</p><p>a) \\(3i^2\\)<br>b) \\(2i^3-5i\\)<br>c) \\(i^4+i^2\\)<br>d) \\((2i)^4\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(i^2=-1\\), vilket ger \\(i^3=-i\\) och \\(i^4=1\\).</p><p>a) \\(3i^2=3(-1)=\\boxed{-3}\\).</p><p>b) \\(2i^3-5i=2(-i)-5i=\\boxed{-7i}\\).</p><p>c) \\(i^4+i^2=1-1=\\boxed{0}\\).</p><p>d) \\((2i)^4=2^4i^4=16\\cdot1=\\boxed{16}\\).</p>",
    "familj": "proc_i_forenkla_1"
  },
  {
    "id": "4.22",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Skriv på polär form med \\(0\\le\\theta&lt;2\\pi\\).</p><p>a) \\(1+i\\)<br>b) \\(-1+i\\)<br>c) \\(-2i\\)</p>",
    "s": "<p>a) \\(\\sqrt2(\\cos\\frac\\pi4+i\\sin\\frac\\pi4)\\).<br>b) \\(\\sqrt2(\\cos\\frac{3\\pi}4+i\\sin\\frac{3\\pi}4)\\).<br>c) \\(2(\\cos\\frac{3\\pi}2+i\\sin\\frac{3\\pi}2)\\).</p>",
    "familj": "polar_rutin"
  },
  {
    "id": "4.23",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För det reella talet \\(a\\) ges polynomet</p><p>\\[p_a(z)=z^4+az^2+1.\\]</p><p>Bestäm alla reella värden på \\(a\\) för vilka polynomet har minst en dubbel rot. Bestäm också vilka rötter som är dubbla i varje fall.</p>",
    "s": "<p>Sätt \\(w=z^2\\). Då blir ekvationen</p><p>\\[w^2+aw+1=0.\\]</p>\n<p>För att samma \\(w\\)-värde ska förekomma två gånger måste andragradsekvationen ha en dubbelrot. Det händer när diskriminanten är noll:</p>\n<p>\\[a^2-4=0\\Rightarrow a=\\pm2.\\]</p>\n<p>För \\(a=2\\):</p><p>\\[p(z)=z^4+2z^2+1=(z^2+1)^2=(z-i)^2(z+i)^2.\\]</p>\n<p>Alltså är \\(\\boxed{z=i}\\) och \\(\\boxed{z=-i}\\) dubbla rötter.</p>\n<p>För \\(a=-2\\):</p><p>\\[p(z)=z^4-2z^2+1=(z^2-1)^2=(z-1)^2(z+1)^2.\\]</p>\n<p>Alltså är \\(\\boxed{z=1}\\) och \\(\\boxed{z=-1}\\) dubbla rötter.</p>",
    "familj": "polynom_parameter_multipla_rotter_a"
  },
  {
    "id": "4.24",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Förenkla.</p><p>a) \\(i^{17}\\)<br>b) \\(i^{42}\\)<br>c) \\(i^{103}\\)</p>",
    "s": "<p><strong>Metod:</strong> Potenserna av \\(i\\) upprepas var fjärde exponent: \\(i,i^2=-1,i^3=-i,i^4=1\\).</p><p>a) \\(17=4\\cdot4+1\\Rightarrow i^{17}=i\\).</p><p>b) \\(42=4\\cdot10+2\\Rightarrow i^{42}=i^2=\\boxed{-1}\\).</p><p>c) \\(103=4\\cdot25+3\\Rightarrow i^{103}=i^3=\\boxed{-i}\\).</p>",
    "familj": "i_potenser_rutin"
  },
  {
    "id": "4.25",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna och svara på formen \\(a+bi\\).</p><p>a) \\((3-2i)+(5+7i)\\)<br>b) \\((4+i)(2-3i)\\)<br>c) \\(\\frac{5+i}{1-i}\\)<br>d) \\((2+3i)^2\\)</p>",
    "s": "<p><strong>Metod:</strong> Räkna realdelar och imaginärdelar var för sig och använd \\(i^2=-1\\).</p><p>a) \\(8+5i\\).<br>b) \\(11-10i\\).<br>c) Multiplicera med \\(1+i\\): \\(\\frac{(5+i)(1+i)}2=2+3i\\).<br>d) \\(-5+12i\\).</p>",
    "familj": "komplex_rutin_fyra"
  },
  {
    "id": "4.26",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm konjugat och absolutbelopp.</p><p>a) \\(z=6+8i\\)<br>b) \\(z=-8+15i\\)<br>c) \\(z=12-5i\\)<br>d) \\(z=-9-40i\\)</p>",
    "s": "<p>a) \\(\\bar z=6-8i\\), \\(|z|=10\\).</p><p>b) \\(\\bar z=-8-15i\\), \\(|z|=17\\).</p><p>c) \\(\\bar z=12+5i\\), \\(|z|=13\\).</p><p>d) \\(\\bar z=-9+40i\\), \\(|z|=41\\).</p>",
    "familj": "proc_complex_konjugat_abs_3"
  },
  {
    "id": "4.27",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>I det komplexa talplanet är \\(z_1=-2+3i\\) och \\(z_2=3-i\\) markerade.</p><span class=\"fig\"><svg width=\"380\" height=\"280\" viewBox=\"0 0 380 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"1\" y=\"1\" width=\"378\" height=\"278\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"48.0\" y1=\"24\" x2=\"48.0\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"242.0\" x2=\"352\" y2=\"242.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"78.4\" y1=\"24\" x2=\"78.4\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"220.2\" x2=\"352\" y2=\"220.2\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"108.8\" y1=\"24\" x2=\"108.8\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"198.4\" x2=\"352\" y2=\"198.4\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"139.2\" y1=\"24\" x2=\"139.2\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"176.6\" x2=\"352\" y2=\"176.6\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"169.6\" y1=\"24\" x2=\"169.6\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"154.8\" x2=\"352\" y2=\"154.8\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"200.0\" y1=\"24\" x2=\"200.0\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"133.0\" x2=\"352\" y2=\"133.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"230.4\" y1=\"24\" x2=\"230.4\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"111.2\" x2=\"352\" y2=\"111.2\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"260.8\" y1=\"24\" x2=\"260.8\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"89.4\" x2=\"352\" y2=\"89.4\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"291.2\" y1=\"24\" x2=\"291.2\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"67.6\" x2=\"352\" y2=\"67.6\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"321.6\" y1=\"24\" x2=\"321.6\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"45.8\" x2=\"352\" y2=\"45.8\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"352.0\" y1=\"24\" x2=\"352.0\" y2=\"242\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"24.0\" x2=\"352\" y2=\"24.0\" stroke=\"#D9DDE2\" stroke-width=\"0.7\"/><line x1=\"48\" y1=\"133.0\" x2=\"352\" y2=\"133.0\" stroke=\"#2B2527\" stroke-width=\"1.8\"/><line x1=\"200.0\" y1=\"24\" x2=\"200.0\" y2=\"242\" stroke=\"#2B2527\" stroke-width=\"1.8\"/><text x=\"349\" y=\"126.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"207.0\" y=\"36\" font-family=\"sans-serif\" font-size=\"11\">Im</text><circle cx=\"139.2\" cy=\"67.6\" r=\"5\" fill=\"#B43123\"/><text x=\"147.2\" y=\"59.6\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z₁</text><circle cx=\"291.2\" cy=\"154.8\" r=\"5\" fill=\"#B43123\"/><text x=\"299.2\" y=\"146.8\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z₂</text></svg></span><p>Bestäm och markera det tal som motsvarar \\(z_1+z_2\\), samt bestäm dess absolutbelopp.</p>",
    "s": "<p><strong>Metod:</strong> Tolka \\(a+bi\\) som punkten \\((a,b)\\). Absolutbeloppet är avståndet till origo och konjugering speglar i realaxeln.</p><p>\\(z_1+z_2=1+2i\\), vilket motsvarar punkten \\((1,2)\\).</p><p>Absolutbeloppet är <strong>\\(\\sqrt5\\)</strong>.</p>",
    "familj": "komplexplan_summa"
  },
  {
    "id": "4.28",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Dividera \\(2x^4-3x^3+0x^2+5x-4\\) med \\(x-2\\). Ange kvot och rest.</p>",
    "s": "<p>Syntetisk division med 2 ger koefficienterna \\(2,1,2,9\\) och resten 14.</p><p>Alltså</p><p>\\[\\boxed{2x^4-3x^3+5x-4=(x-2)(2x^3+x^2+2x+9)+14}.\\]</p>",
    "familj": "polynomdivision_fjardegrad_e"
  },
  {
    "id": "4.29",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös \\(z^3=8\\) i de komplexa talen och markera rötterna i talplanet.</p><span class=\"fig\"><svg width=\"420\" height=\"330\" viewBox=\"0 0 420 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med lika skala på axlarna\"><rect x=\"1\" y=\"1\" width=\"418\" height=\"328\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"85.0\" y1=\"35\" x2=\"85.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"285.0\" x2=\"335.0\" y2=\"285.0\" stroke=\"#E8ECEF\"/><line x1=\"126.7\" y1=\"35\" x2=\"126.7\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"243.3\" x2=\"335.0\" y2=\"243.3\" stroke=\"#E8ECEF\"/><line x1=\"168.3\" y1=\"35\" x2=\"168.3\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"201.7\" x2=\"335.0\" y2=\"201.7\" stroke=\"#E8ECEF\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#E8ECEF\"/><line x1=\"251.7\" y1=\"35\" x2=\"251.7\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"118.3\" x2=\"335.0\" y2=\"118.3\" stroke=\"#E8ECEF\"/><line x1=\"293.3\" y1=\"35\" x2=\"293.3\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"76.7\" x2=\"335.0\" y2=\"76.7\" stroke=\"#E8ECEF\"/><line x1=\"335.0\" y1=\"35\" x2=\"335.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"35.0\" x2=\"335.0\" y2=\"35.0\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"293.3\" cy=\"160.0\" r=\"5\" fill=\"#B43123\"/><text x=\"300.3\" y=\"153.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">z1</text><circle cx=\"168.3\" cy=\"87.8\" r=\"5\" fill=\"#B43123\"/><text x=\"175.3\" y=\"80.8\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">z2</text><circle cx=\"168.3\" cy=\"232.2\" r=\"5\" fill=\"#B43123\"/><text x=\"175.3\" y=\"249.2\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">z3</text><text x=\"332.0\" y=\"152.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"218.0\" y=\"47\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>Ange både polär och rektangulär form.</p>",
    "s": "<p>\\(8=8e^{i2\\pi n}\\). Rötterna har absolutbelopp 2 och argument</p><p>\\[\\theta_k=\\frac{2\\pi k}{3},\\quad k=0,1,2.\\]</p><p>Polärt: \\(2e^{i0}\\), \\(2e^{i2\\pi/3}\\), \\(2e^{i4\\pi/3}\\).</p><p>Rektangulärt:</p><p>\\[\\boxed{2,\\quad -1+\\sqrt3 i,\\quad -1-\\sqrt3 i}.\\]</p>",
    "familj": "kubikrot_8_svg_c"
  },
  {
    "id": "4.30",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Beräkna exakt med hjälp av polär form och de Moivres formel:</p>\n<p>\\[\n(1+i)^8.\n\\]</p>",
    "s": "<p>Skriv först \\(1+i\\) i polär form:</p>\n<p>\\[\n1+i=\\sqrt2\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right).\n\\]</p>\n<p>de Moivres formel ger</p>\n<p>\\[\n(1+i)^8=(\\sqrt2)^8\n\\left(\\cos2\\pi+i\\sin2\\pi\\right).\n\\]</p>\n<p>\\[\n(\\sqrt2)^8=16,\\qquad \\cos2\\pi=1,\\quad\\sin2\\pi=0.\n\\]</p>\n<p><strong>\\((1+i)^8=16\\).</strong></p>",
    "familj": "de_moivre_potens"
  },
  {
    "id": "4.31",
    "kap": 4,
    "omr": "eulers_formel",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Använd Eulers formel för att skriva \\(e^{i\\pi/3}\\) på formen \\(a+bi\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\) och standardvärdena för sinus och cosinus.</p><p>Enligt Eulers formel \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\).</p><p>Alltså <strong>\\(e^{i\\pi/3}=\\frac12+\\frac{\\sqrt3}{2}i\\)</strong>.</p>",
    "familj": "euler_rutin"
  },
  {
    "id": "4.32",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Lös ekvationerna och skriv \\(z\\) på formen \\(a+bi\\).</p><p>a) \\(z+(3-2i)=7+5i\\)<br>b) \\(2z=6-8i\\)<br>c) \\((1+i)z=4\\)</p>",
    "s": "<p><strong>Metod:</strong> Räkna realdelar och imaginärdelar var för sig och använd \\(i^2=-1\\).</p><p>a) \\(z=7+5i-(3-2i)=\\boxed{4+7i}\\).</p><p>b) \\(z=\\boxed{3-4i}\\).</p><p>c) \\(z=4/(1+i)=4(1-i)/2=\\boxed{2-2i}\\).</p>",
    "familj": "proc_complex_linjar_ekvation_2"
  },
  {
    "id": "4.33",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Talet \\(z=-2+3i\\) är markerat i det komplexa talplanet.</p><span class=\"fig\"><svg width=\"430\" height=\"300\" viewBox=\"0 0 430 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med punkten z lika med minus två plus tre i\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><g><line x1=\"90\" y1=\"30\" x2=\"90\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"170\" y1=\"30\" x2=\"170\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"210\" y1=\"30\" x2=\"210\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"250\" y1=\"30\" x2=\"250\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"290\" y1=\"30\" x2=\"290\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"330\" y1=\"30\" x2=\"330\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"270\" x2=\"370\" y2=\"270\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"230\" x2=\"370\" y2=\"230\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"190\" x2=\"370\" y2=\"190\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"150\" x2=\"370\" y2=\"150\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"110\" x2=\"370\" y2=\"110\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"70\" x2=\"370\" y2=\"70\" stroke=\"#DFE5E8\"/><line x1=\"90\" y1=\"30\" x2=\"370\" y2=\"30\" stroke=\"#DFE5E8\"/></g><line x1=\"80\" y1=\"150\" x2=\"390\" y2=\"150\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"210\" y1=\"280\" x2=\"210\" y2=\"20\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"30\" r=\"6\" fill=\"#B43123\"/><text x=\"116\" y=\"25\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z</text><text x=\"392\" y=\"143\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"217\" y=\"23\" font-family=\"sans-serif\" font-size=\"11\">Im</text><text x=\"130\" y=\"166\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\">-2</text><text x=\"198\" y=\"34\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\">3</text></svg></span><p>a) Ange realdel och imaginärdel.<br>b) Bestäm \\(\\bar z\\).<br>c) Bestäm \\(|z|\\).</p>",
    "s": "<p>a) \\(\\operatorname{Re}z=\\boxed{-2}\\), \\(\\operatorname{Im}z=\\\\boxed{3}\\).</p><p>b) <strong>\\(\\bar z=-2-3i\\)</strong>.</p><p>c) \\(|z|=\\sqrt{(-2)^2+3^2}=\\)<strong>\\(\\sqrt{13}\\)</strong>.</p>",
    "familj": "komplexplan_z_minus2_3"
  },
  {
    "id": "4.34",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Beräkna och skriv svaret på formen \\(a+bi\\):</p>\n<p>\\[\n\\frac{3+5i}{1+i}.\n\\]</p>",
    "s": "<p>Multiplicera täljare och nämnare med nämnarens konjugat \\(1-i\\):</p>\n<p>\\[\n\\frac{3+5i}{1+i}\\cdot\\frac{1-i}{1-i}\n=\n\\frac{(3+5i)(1-i)}{(1+i)(1-i)}.\n\\]</p>\n<p>Täljaren blir</p>\n<p>\\[\n3-3i+5i-5i^2=8+2i\n\\]</p>\n<p>och nämnaren</p>\n<p>\\[\n1-i^2=2.\n\\]</p>\n<p>Därför</p>\n<p><strong>\\[\n\\frac{3+5i}{1+i}=4+i.\n\\]</strong></p>",
    "familj": "komplex_division_konjugat"
  },
  {
    "id": "4.35",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>Varje komplext tal \\(z\\) förändras enligt</p><p>\\[T(z)=(1+i)z+(2-i)\\]</p><p>Triangeln i det komplexa talplanet har hörn \\(0,2,2i\\).</p><span class=\"fig\"><svg width=\"520\" height=\"285\" viewBox=\"0 0 520 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Triangel i komplext talplan före och efter förändringen T av z lika med ett plus i gånger z plus två minus i\"><rect x=\"1\" y=\"1\" width=\"518\" height=\"283\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><text x=\"125\" y=\"28\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">före</text><line x1=\"30\" y1=\"150\" x2=\"220\" y2=\"150\" stroke=\"#2B2527\"/><line x1=\"100\" y1=\"245\" x2=\"100\" y2=\"45\" stroke=\"#2B2527\"/><polygon points=\"100,150 170,150 100,80\" fill=\"#F8E2DE\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"100\" y=\"166\" font-family=\"sans-serif\" font-size=\"10\">0</text><text x=\"170\" y=\"166\" font-family=\"sans-serif\" font-size=\"10\">2</text><text x=\"88\" y=\"84\" font-family=\"sans-serif\" font-size=\"10\">2i</text><text x=\"385\" y=\"28\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">efter</text><line x1=\"250\" y1=\"150\" x2=\"505\" y2=\"150\" stroke=\"#2B2527\"/><line x1=\"290\" y1=\"245\" x2=\"290\" y2=\"45\" stroke=\"#2B2527\"/><polygon points=\"360,185 430,115 290,115\" fill=\"#DCEFF2\" stroke=\"#268FA3\" stroke-width=\"2\"/><text x=\"362\" y=\"202\" font-family=\"sans-serif\" font-size=\"10\">2-i</text><text x=\"430\" y=\"108\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\">4+i</text><text x=\"280\" y=\"109\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\">i</text></svg></span><p>a) Bestäm hörnen i den nya triangeln.<br>b) Beskriv vad förändringen gör geometriskt.<br>c) Bestäm den nya triangelns area.</p>",
    "s": "<p>a) \\(T(0)=2-i\\), \\(T(2)=2+2i+2-i=4+i\\), \\(T(2i)=2i+2i^2+2-i=i\\). Hörnen är alltså <strong>\\(2-i,4+i,i\\)</strong>.</p><p>b) Multiplikation med \\(1+i\\) ger rotation med \\(\\pi/4\\) och skalning med faktorn \\(\\sqrt2\\). Därefter flyttas alla punkter med \\(2-i\\), alltså 2 steg åt höger och 1 steg nedåt.</p><p>c) Ursprungstriangeln är rätvinklig med kateter 2 och 2, area 2. Areor skalas med kvadraten av längdskalan: \\((\\sqrt2)^2=2\\). Ny area är därför <strong>\\(\\boxed{4}\\)</strong>.</p>",
    "familj": "komplex_avbildning_affin_area"
  },
  {
    "id": "4.36",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv på formen \\(a+bi\\).</p><p>a) \\(2\\operatorname{cis}(0)\\)<br>b) \\(4\\operatorname{cis}(\\pi/2)\\)<br>c) \\(6\\operatorname{cis}(\\pi)\\)<br>d) \\(2\\sqrt2\\operatorname{cis}(7\\pi/4)\\)</p>",
    "s": "<p>a) <strong>2</strong>.<br>b) <strong>\\(4i\\)</strong>.<br>c) <strong>−6</strong>.<br>d) \\(2\\sqrt2(\\frac{\\sqrt2}{2}-i\\frac{\\sqrt2}{2})=\\)<strong>\\(2-2i\\)</strong>.</p>",
    "familj": "proc_polar_till_rekt_1"
  },
  {
    "id": "4.37",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Lös ekvationen \\(x^2-4x+13=0\\) i de komplexa talen.</p>",
    "s": "<p><strong>Metod:</strong> När diskriminanten är negativ, skriv \\(\\sqrt{-k}=i\\sqrt{k}\\) och fortsätt med den vanliga andragradsformeln.</p><p>Diskriminanten är \\(16-52=-36\\). Därför</p><p>\\[x=\\frac{4\\pm6i}{2}=2\\pm3i.\\]</p><p><strong>\\(x=2\\pm3i\\)</strong>.</p>",
    "familj": "andragrad_komplex"
  },
  {
    "id": "4.38",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Multiplikation med \\(i\\) motsvarar en rotation \\(90^\\circ\\) moturs i det komplexa talplanet.</p><p>Bestäm \\(iz\\).</p><p>a) \\(z=3+2i\\)<br>b) \\(z=-4+i\\)<br>c) \\(z=2-5i\\)<br>d) \\(z=-1-3i\\)</p>",
    "s": "<p>Använd \\(i(a+bi)=-b+ai\\).</p><p>a) <strong>\\(-2+3i\\)</strong>.<br>b) <strong>\\(-1-4i\\)</strong>.<br>c) <strong>\\(5+2i\\)</strong>.<br>d) <strong>\\(3-i\\)</strong>.</p>",
    "familj": "proc_complex_rotation_i_2"
  },
  {
    "id": "4.39",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös \\(z^3=8i\\) och ange alla lösningar i polär form.</p>",
    "s": "<p>\\(8i=8(\\cos(\\pi/2)+i\\sin(\\pi/2))\\). Kubikrötterna har absolutbelopp 2 och argument</p><p>\\[\\theta_k=\\frac{\\pi/2+2k\\pi}{3}=\\frac\\pi6+\\frac{2k\\pi}{3},\\quad k=0,1,2.\\]</p><p><strong>\\(2\\operatorname{cis}(\\pi/6), 2\\operatorname{cis}(5\\pi/6), 2\\operatorname{cis}(3\\pi/2)\\)</strong>.</p>",
    "familj": "potensekv_cis"
  },
  {
    "id": "4.40",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Lös ekvationerna genom faktorisering.</p><p>a) \\(x^3-4x=0\\)<br>b) \\(x^3+x^2-6x=0\\)<br>c) \\(x^4-5x^2+4=0\\)<br>d) \\(x^3-3x^2-4x+12=0\\)</p>",
    "s": "<p>a) \\(x(x-2)(x+2)=0\\Rightarrow\\) <strong>\\(x=-2,0,2\\)</strong>.</p><p>b) \\(x(x+3)(x-2)=0\\Rightarrow\\) <strong>\\(x=-3,0,2\\)</strong>.</p><p>c) Sätt \\(u=x^2\\): \\((u-1)(u-4)=0\\Rightarrow\\) <strong>\\(x=\\pm1,\\pm2\\)</strong>.</p><p>d) Gruppera: \\(x^2(x-3)-4(x-3)=(x-3)(x-2)(x+2)\\). <strong>\\(x=-2,2,3\\)</strong>.</p>",
    "familj": "proc_polynomekv_faktorisering_c"
  },
  {
    "id": "4.41",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Polynomet är</p><p>\\[p(x)=x^3-2x^2-5x+6.\\]</p><p>a) Visa med faktorsatsen att \\(x-1\\) är en faktor.<br>b) Faktorisera polynomet fullständigt och lös \\(p(x)=0\\).</p>",
    "s": "<p>a) \\(p(1)=1-2-5+6=0\\). Enligt faktorsatsen är därför \\(x-1\\) en faktor.</p>\n<p>b) Polynomdivision ger</p><p>\\[p(x)=(x-1)(x^2-x-6).\\]</p><p>Andragradsfaktorn faktoriseras:</p><p>\\[x^2-x-6=(x-3)(x+2).\\]</p>\n<p>Alltså</p><p>\\[p(x)=(x-1)(x-3)(x+2).\\]</p><p><strong>Rötterna är \\(x=-2,1,3\\).</strong></p>",
    "familj": "faktorsats_kubik_fullstandig"
  },
  {
    "id": "4.42",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm fjärdegradspolynomet med reella koefficienter och koefficienten 1 framför \\(x^4\\) som har roten \\(2+i\\) och där \\(-1\\) är en dubbelrot.</p>",
    "s": "<p>Reella koefficienter innebär att även konjugatet \\(2-i\\) är en rot.</p><p>Polynomet är därför</p><p>\\[(x-(2+i))(x-(2-i))(x+1)^2.\\]</p><p>De två komplexa faktorerna kan först multipliceras ihop: \\((x-2)^2+1=x^2-4x+5\\). Därför</p><p>\\[(x^2-4x+5)(x+1)^2=\\boxed{x^4-2x^3-2x^2+6x+5}.\\]</p>",
    "familj": "polynom_konjugat_dubbelrot"
  },
  {
    "id": "4.43",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Multiplicera och skriv svaret på formen \\(a+bi\\).</p><p>a) \\((2+3i)(4-i)\\)<br>b) \\((1-2i)^2\\)<br>c) \\((3+i)(3-i)\\)<br>d) \\(i(5-4i)\\)</p>",
    "s": "<p><strong>Metod:</strong> Räkna realdelar och imaginärdelar var för sig och använd \\(i^2=-1\\).</p><p>a) \\(8-2i+12i-3i^2=\\)<strong>\\(11+10i\\)</strong>.<br>b) \\(1-4i+4i^2=\\)<strong>\\(-3-4i\\)</strong>.<br>c) \\(9-i^2=\\)<strong>10</strong>.<br>d) \\(5i-4i^2=\\)<strong>\\(4+5i\\)</strong>.</p>",
    "familj": "proc_complex_mult_1"
  },
  {
    "id": "4.44",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv i polär form \\(r(\\cos\\theta+i\\sin\\theta)\\), med \\(0\\le\\theta&lt;2\\pi\\).</p><p>a) \\(1+i\\)<br>b) \\(-1+i\\)<br>c) \\(-\\sqrt3-i\\)<br>d) \\(2i\\)</p>",
    "s": "<p>a) \\(r=\\sqrt2\\), \\(\\theta=\\pi/4\\): <strong>\\(\\sqrt2\\operatorname{cis}(\\pi/4)\\)</strong>.</p><p>b) \\(r=\\sqrt2\\), \\(\\theta=3\\pi/4\\).</p><p>c) \\(r=2\\), vinkeln ligger i tredje kvadranten med referensvinkel \\(\\pi/6\\): <strong>\\(2\\operatorname{cis}(7\\pi/6)\\)</strong>.</p><p>d) <strong>\\(2\\operatorname{cis}(\\pi/2)\\)</strong>.</p>",
    "familj": "proc_rect_till_polar_3"
  },
  {
    "id": "4.45",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Utför polynomdivisionen</p><p>\\[\\frac{x^3+2x^2-5x-6}{x-2}.\\]</p><p>Kontrollera svaret genom multiplikation.</p>",
    "s": "<p>Divisionen ger</p><p><strong>\\(\\boxed{x^2+4x+3}\\)</strong>.</p><p>Kontroll:</p><p>\\[(x-2)(x^2+4x+3)=x^3+2x^2-5x-6.\\]</p>",
    "familj": "polynomdivision_exakt_ny"
  },
  {
    "id": "4.46",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(z=5-12i\\), bestäm</p><p>a) \\(\\bar z\\)<br>b) \\(|z|\\)<br>c) \\(z\\bar z\\).</p>",
    "s": "<p><strong>Metod:</strong> Konjugatet byter tecken på imaginärdelen. Absolutbeloppet fås med Pythagoras sats.</p><p>a) <strong>\\(5+12i\\)</strong>.</p><p>b) \\(\\sqrt{25+144}=\\)<strong>13</strong>.</p><p>c) \\(z\\bar z=|z|^2=\\)<strong>169</strong>.</p>",
    "familj": "abs_konjugat_5_12"
  },
  {
    "id": "4.47",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>De komplexa talen är</p><p>\\[z_1=3\\left(\\cos\\frac\\pi6+i\\sin\\frac\\pi6\\right),\\qquad z_2=2\\left(\\cos\\frac\\pi3+i\\sin\\frac\\pi3\\right).\\]</p><p>a) Bestäm \\(z_1z_2\\) på polär form och därefter på rektangulär form.<br>b) Bestäm \\(z_1/z_2\\) på polär form.</p>",
    "s": "<p>a) Vid multiplikation multipliceras absolutbeloppen och argumenten adderas:</p><p>\\[z_1z_2=6\\left(\\cos\\frac\\pi2+i\\sin\\frac\\pi2\\right)=\\boxed{6i}.\\]</p>\n<p>b) Vid division divideras absolutbeloppen och argumenten subtraheras:</p><p>\\[\\frac{z_1}{z_2}=\\frac32\\left(\\cos\\left(-\\frac\\pi6\\right)+i\\sin\\left(-\\frac\\pi6\\right)\\right).\\]</p><p>Ekvivalent med argument i \\([0,2\\pi)\\): <strong>\\(\\frac32(\\cos\\frac{11\\pi}{6}+i\\sin\\frac{11\\pi}{6})\\)</strong>.</p>",
    "familj": "polar_multiplikation_division_c2"
  },
  {
    "id": "4.48",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm absolutbelopp och argument för resultatet utan att först gå över till rektangulär form.</p><p>a) \\(z_1=3\\operatorname{cis}(20^\\circ)\\), \\(z_2=2\\operatorname{cis}(40^\\circ)\\). Bestäm \\(z_1z_2\\).<br>b) Bestäm \\(z_1/z_2\\).<br>c) Bestäm \\(z_2^2\\).<br>d) Bestäm \\(1/z_1\\).</p>",
    "s": "<p>a) absolutbelopp <strong>6</strong>, argument <strong>60°</strong>.<br>b) absolutbelopp <strong>\\(3/2\\)</strong>, argument <strong>−20°</strong> (eller 340°).<br>c) absolutbelopp <strong>4</strong>, argument <strong>80°</strong>.<br>d) absolutbelopp <strong>\\(1/3\\)</strong>, argument <strong>−20°</strong> (eller 340°).</p>",
    "familj": "proc_polar_abs_arg_rules"
  },
  {
    "id": "4.49",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Lös ekvationerna.</p><p>a) \\(z^2+16=0\\)<br>b) \\(z^2-6z+13=0\\)<br>c) \\(z^2+4z+8=0\\)</p>",
    "s": "<p><strong>Metod:</strong> Använd andragradsformeln som vanligt. När ett negativt tal hamnar under rottecknet använder du \\(i^2=-1\\).</p><p>a) \\(\\boxed{z=\\pm4i}\\).</p><p>b) \\(z=(6\\pm\\sqrt{-16})/2=\\boxed{3\\pm2i}\\).</p><p>c) \\(z=(-4\\pm\\sqrt{-16})/2=\\boxed{-2\\pm2i}\\).</p>",
    "familj": "andragrad_komplex_rutin3"
  },
  {
    "id": "4.50",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv på formen \\(a+bi\\).</p><p>a) \\(4\\operatorname{cis}(\\pi/3)\\)<br>b) \\(6\\operatorname{cis}(5\\pi/6)\\)<br>c) \\(3\\operatorname{cis}(3\\pi/2)\\)<br>d) \\(2\\sqrt2\\operatorname{cis}(7\\pi/4)\\)</p>",
    "s": "<p>a) \\(4(1/2+i\\sqrt3/2)=\\boxed{2+2\\sqrt3i}\\).</p><p>b) \\(6(-\\sqrt3/2+i/2)=\\boxed{-3\\sqrt3+3i}\\).</p><p>c) <strong>\\(-3i\\)</strong>.</p><p>d) \\(2\\sqrt2(\\sqrt2/2-i\\sqrt2/2)=\\boxed{2-2i}\\).</p>",
    "familj": "proc_polar_till_rect_3"
  },
  {
    "id": "4.51",
    "kap": 4,
    "omr": "eulers_formel",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>Använd Eulers formel \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\).</p>\n<p>a) Förenkla \\(e^{i\\pi}\\).<br>\nb) Skriv \\(3e^{i\\pi/3}\\) på formen \\(a+bi\\).<br>\nc) Bestäm absolutbelopp och argument för \\(-2e^{-i\\pi/4}\\).</p>",
    "s": "<p>a)</p>\n<p>\\[\ne^{i\\pi}=\\cos\\pi+i\\sin\\pi=-1.\n\\]</p>\n<p>b)</p>\n<p>\\[\n3e^{i\\pi/3}\n=3\\left(\\frac12+i\\frac{\\sqrt3}{2}\\right)\n=\\frac32+\\frac{3\\sqrt3}{2}i.\n\\]</p>\n<p>c) Skriv minustecknet som en rotation med \\(\\pi\\):</p>\n<p>\\[\n-2e^{-i\\pi/4}=2e^{i(3\\pi/4)}.\n\\]</p>\n<p><strong>Absolutbeloppet är \\(2\\) och ett argument är \\(\\frac{3\\pi}{4}\\).</strong></p>",
    "familj": "euler_formel_rutin"
  },
  {
    "id": "4.52",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(i^{18}\\)<br>b) \\(i^{35}\\)<br>c) \\(i^{100}\\)<br>d) \\(i^{2026}\\)</p>",
    "s": "<p>Potenserna av \\(i\\) upprepas med period 4.</p><p>a) \\(18\\equiv2\\pmod4\\Rightarrow\\)<strong>−1</strong>.</p><p>b) \\(35\\equiv3\\pmod4\\Rightarrow\\)<strong>−i</strong>.</p><p>c) \\(100\\equiv0\\pmod4\\Rightarrow\\)<strong>1</strong>.</p><p>d) \\(2026\\equiv2\\pmod4\\Rightarrow\\)<strong>−1</strong>.</p>",
    "familj": "i_potenser_e"
  },
  {
    "id": "4.53",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(p(x)=x^3+2x^2-5x-6\\):</p><p>a) Beräkna \\(p(2)\\).<br>b) Avgör om \\(x-2\\) är en faktor.<br>c) Beräkna \\(p(-1)\\) och avgör om \\(x+1\\) är en faktor.</p>",
    "s": "<p><strong>Metod:</strong> Sätt in det nollställe som hör ihop med faktorn. Om värdet blir 0 är uttrycket en faktor.</p><p>a) \\(8+8-10-6=\\)<strong>0</strong>.</p><p>b) Eftersom \\(p(2)=0\\) är <strong>\\(x-2\\) en faktor</strong>.</p><p>c) \\(-1+2+5-6=0\\), så <strong>\\(x+1\\) är också en faktor</strong>.</p>",
    "familj": "faktorsats_rutin_e2"
  },
  {
    "id": "4.54",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös ekvationen \\(x^3-4x^2+x+6=0\\), givet att \\(x=2\\) är en rot.</p>",
    "s": "<p><strong>Metod:</strong> Använd en känd rot för att få en faktor. Dividera sedan bort faktorn och lös ekvationen som återstår.</p><p>Dividera polynomet med \\(x-2\\): kvoten blir \\(x^2-2x-3=(x-3)(x+1)\\).</p><p><strong>\\(x=-1,2,3\\)</strong>.</p>",
    "familj": "poly_given_root"
  },
  {
    "id": "4.55",
    "kap": 4,
    "omr": "eulers_formel",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Använd Eulers formel för att visa att</p><p>\\[e^{ix}+e^{-ix}=2\\cos x\\]</p><p>och härled därefter ett motsvarande uttryck för \\(\\sin x\\).</p>",
    "s": "<p>Eulers formel ger \\(e^{ix}=\\cos x+i\\sin x\\) och \\(e^{-ix}=\\cos x-i\\sin x\\).</p><p>Addition ger \\(e^{ix}+e^{-ix}=2\\cos x\\).</p><p>Subtraktion ger \\(e^{ix}-e^{-ix}=2i\\sin x\\), alltså</p><p>\\[\\boxed{\\sin x=\\frac{e^{ix}-e^{-ix}}{2i}}.\\]</p>",
    "familj": "euler_harled_cos_sin_c"
  },
  {
    "id": "4.56",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna i polär form.</p><p>a) \\(2\\operatorname{cis}(\\pi/6)\\cdot3\\operatorname{cis}(\\pi/4)\\)<br>b) \\(\\frac{8\\operatorname{cis}(5\\pi/6)}{2\\operatorname{cis}(\\pi/3)}\\)<br>c) \\(5\\operatorname{cis}(7\\pi/4)\\cdot2\\operatorname{cis}(3\\pi/4)\\)</p>",
    "s": "<p>a) Multiplicera absolutbelopp och addera argument: <strong>\\(6\\operatorname{cis}(5\\pi/12)\\)</strong>.</p><p>b) Dividera absolutbelopp och subtrahera argument: <strong>\\(4\\operatorname{cis}(\\pi/2)\\)</strong>.</p><p>c) \\(10\\operatorname{cis}(10\\pi/4)=10\\operatorname{cis}(5\\pi/2)=\\boxed{10\\operatorname{cis}(\\pi/2)}\\).</p>",
    "familj": "proc_polar_mult_div_3"
  },
  {
    "id": "4.57",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Punkterna \\(z_1=-3+2i\\) och \\(z_2=2-4i\\) är markerade.</p><span class=\"fig\"><svg width=\"440\" height=\"290\" viewBox=\"0 0 440 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\"><rect x=\"1\" y=\"1\" width=\"438\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"260.0\" x2=\"385\" y2=\"260.0\" stroke=\"#E8ECEF\"/><line x1=\"88.0\" y1=\"25\" x2=\"88.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"236.5\" x2=\"385\" y2=\"236.5\" stroke=\"#E8ECEF\"/><line x1=\"121.0\" y1=\"25\" x2=\"121.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"213.0\" x2=\"385\" y2=\"213.0\" stroke=\"#E8ECEF\"/><line x1=\"154.0\" y1=\"25\" x2=\"154.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"189.5\" x2=\"385\" y2=\"189.5\" stroke=\"#E8ECEF\"/><line x1=\"187.0\" y1=\"25\" x2=\"187.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"166.0\" x2=\"385\" y2=\"166.0\" stroke=\"#E8ECEF\"/><line x1=\"220.0\" y1=\"25\" x2=\"220.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"142.5\" x2=\"385\" y2=\"142.5\" stroke=\"#E8ECEF\"/><line x1=\"253.0\" y1=\"25\" x2=\"253.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"119.0\" x2=\"385\" y2=\"119.0\" stroke=\"#E8ECEF\"/><line x1=\"286.0\" y1=\"25\" x2=\"286.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"95.5\" x2=\"385\" y2=\"95.5\" stroke=\"#E8ECEF\"/><line x1=\"319.0\" y1=\"25\" x2=\"319.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"72.0\" x2=\"385\" y2=\"72.0\" stroke=\"#E8ECEF\"/><line x1=\"352.0\" y1=\"25\" x2=\"352.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"48.5\" x2=\"385\" y2=\"48.5\" stroke=\"#E8ECEF\"/><line x1=\"385.0\" y1=\"25\" x2=\"385.0\" y2=\"260\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"25.0\" x2=\"385\" y2=\"25.0\" stroke=\"#E8ECEF\"/><line x1=\"55\" y1=\"142.5\" x2=\"385\" y2=\"142.5\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><line x1=\"220.0\" y1=\"25\" x2=\"220.0\" y2=\"260\" stroke=\"#2B2527\" stroke-width=\"1.5\"/><circle cx=\"121.0\" cy=\"95.5\" r=\"5\" fill=\"#B43123\"/><text x=\"129.0\" y=\"87.5\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z₁</text><circle cx=\"286.0\" cy=\"236.5\" r=\"5\" fill=\"#B43123\"/><text x=\"294.0\" y=\"228.5\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">z₂</text><text x=\"369\" y=\"134.5\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"228.0\" y=\"35\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>a) Ange deras koordinater.<br>b) Markera mentalt var \\(\\bar z_1\\) ligger och ange talet.<br>c) Bestäm \\(|z_2|\\).</p>",
    "s": "<p>a) \\(z_1\\leftrightarrow(-3,2)\\), \\(z_2\\leftrightarrow(2,-4)\\).</p><p>b) Konjugatet speglas i realaxeln: <strong>\\(\\bar z_1=-3-2i\\)</strong>.</p><p>c) \\(|z_2|=\\sqrt{2^2+(-4)^2}=\\)<strong>\\(2\\sqrt5\\)</strong>.</p>",
    "familj": "talplan_rutin_e2"
  },
  {
    "id": "4.58",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Skriv på polär form med argument i intervallet \\(0\\le\\theta&lt;2\\pi\\).</p><p>a) \\(\\sqrt3+i\\)<br>b) \\(-1-i\\)<br>c) \\(3i\\)</p>",
    "s": "<p>a) \\(r=2\\), \\(\\theta=\\pi/6\\): \\(\\boxed{2(\\cos\\frac\\pi6+i\\sin\\frac\\pi6)}\\).</p><p>b) \\(r=\\sqrt2\\), \\(\\theta=5\\pi/4\\): \\(\\boxed{\\sqrt2(\\cos\\frac{5\\pi}4+i\\sin\\frac{5\\pi}4)}\\).</p><p>c) \\(\\boxed{3(\\cos\\frac\\pi2+i\\sin\\frac\\pi2)}\\).</p>",
    "familj": "polarform_mix_ny3"
  },
  {
    "id": "4.59",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Utför polynomdivision.</p><p>a) \\((x^2+5x+6)/(x+2)\\)<br>b) \\((x^2-1)/(x-1)\\)<br>c) \\((x^3-8)/(x-2)\\)<br>d) \\((2x^3+3x^2-2x-3)/(x+1)\\)</p>",
    "s": "<p><strong>Metod:</strong> Skriv resultatet som \\(\\text{täljare}=\\text{nämnare}\\cdot\\text{kvot}+\\text{rest}\\). Här blir resten 0 i alla fyra fallen.</p>\n<p>a) \\(x^2+5x+6=(x+2)(x+3)\\Rightarrow\\boxed{x+3}\\).</p>\n<p>b) \\(x^2-1=(x-1)(x+1)\\Rightarrow\\boxed{x+1}\\).</p>\n<p>c) \\(x^3-8=(x-2)(x^2+2x+4)\\Rightarrow\\boxed{x^2+2x+4}\\).</p>\n<p>d) \\(2x^3+3x^2-2x-3=(x+1)(2x^2+x-3)\\Rightarrow\\boxed{2x^2+x-3}\\).</p>",
    "familj": "proc_polynomdivision_1"
  },
  {
    "id": "4.60",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Triangelns hörn representerar de komplexa talen \\(z_1=1\\), \\(z_2=3\\) och \\(z_3=1+2i\\).</p><span class=\"fig\"><svg width=\"430\" height=\"245\" viewBox=\"0 0 430 245\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Triangel vars hörn är komplexa tal\"><rect x=\"1\" y=\"1\" width=\"428\" height=\"243\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"145,195 260,195 185,95\" fill=\"#DCEEF1\" fill-opacity=\"0.35\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"145\" cy=\"195\" r=\"4\" fill=\"#B43123\"/><circle cx=\"260\" cy=\"195\" r=\"4\" fill=\"#B43123\"/><circle cx=\"185\" cy=\"95\" r=\"4\" fill=\"#B43123\"/><text x=\"132\" y=\"212\" font-family=\"sans-serif\" font-size=\"12\">z1=1</text><text x=\"246\" y=\"212\" font-family=\"sans-serif\" font-size=\"12\">z2=3</text><text x=\"190\" y=\"88\" font-family=\"sans-serif\" font-size=\"12\">z3=1+2i</text><text x=\"290\" y=\"95\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">w=(1+i)z</text></svg></span><p>Varje hörn förändras enligt \\(w=(1+i)z\\).</p><p>a) Bestäm de nya komplexa talen för de tre hörnen.<br>b) Beskriv geometriskt hur hela triangeln förändras.</p>",
    "s": "<p>a) \\(w_1=1+i\\), \\(w_2=3+3i\\), \\(w_3=(1+i)(1+2i)=-1+3i\\).</p><p>b) Faktoren \\(1+i\\) har absolutbelopp \\(\\sqrt2\\) och argument \\(\\pi/4\\). Hela triangeln en <strong>rotation 45° moturs kring origo kombinerad med en förstoring med faktor \\(\\sqrt2\\)</strong>.</p>",
    "familj": "komplex_avbildning_rotation_skala_c_svg"
  },
  {
    "id": "4.61",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Triangeln \\(ABC\\) har hörnen</p>\n<p>\\[\nA=1+i,\\qquad B=3+i,\\qquad C=2+3i.\n\\]</p><span class=\"fig\"><svg width=\"440\" height=\"300\" viewBox=\"0 0 440 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\">\n<rect x=\"1\" y=\"1\" width=\"438\" height=\"298\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<line x1=\"100.0\" y1=\"25\" x2=\"100.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"100.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"145.0\" y1=\"25\" x2=\"145.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"145.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"190.0\" y1=\"25\" x2=\"190.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"190.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"235.0\" y1=\"25\" x2=\"235.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<line x1=\"280.0\" y1=\"25\" x2=\"280.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"280.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"325.0\" y1=\"25\" x2=\"325.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"325.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"370.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"415.0\" y1=\"25\" x2=\"415.0\" y2=\"260\" stroke=\"#D9E6E9\"/>\n<text x=\"415.0\" y=\"235.8\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"260.0\" x2=\"415\" y2=\"260.0\" stroke=\"#D9E6E9\"/>\n<text x=\"227.0\" y=\"263.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"220.8\" x2=\"415\" y2=\"220.8\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"181.7\" x2=\"415\" y2=\"181.7\" stroke=\"#D9E6E9\"/>\n<text x=\"227.0\" y=\"184.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"142.5\" x2=\"415\" y2=\"142.5\" stroke=\"#D9E6E9\"/>\n<text x=\"227.0\" y=\"145.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"103.3\" x2=\"415\" y2=\"103.3\" stroke=\"#D9E6E9\"/>\n<text x=\"227.0\" y=\"106.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"64.2\" x2=\"415\" y2=\"64.2\" stroke=\"#D9E6E9\"/>\n<text x=\"227.0\" y=\"67.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"415\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"227.0\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"220.8\" x2=\"415\" y2=\"220.8\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"235.0\" y1=\"25\" x2=\"235.0\" y2=\"260\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<text x=\"413\" y=\"213.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Re</text>\n<text x=\"243.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Im</text>\n<circle cx=\"280.0\" cy=\"181.7\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"288.0\" y=\"173.7\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">A</text>\n<circle cx=\"370.0\" cy=\"181.7\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"378.0\" y=\"173.7\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">B</text>\n<circle cx=\"325.0\" cy=\"103.3\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"333.0\" y=\"95.3\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">C</text>\n\n</svg></span><p>Alla tre komplexa tal multipliceras med \\(i\\).</p>\n<p>Bestäm de nya hörnens koordinater och beskriv den geometriska transformationen.</p>",
    "s": "<p>För \\(z=x+yi\\) gäller</p>\n<p>\\[\niz=ix+i^2y=-y+xi.\n\\]</p>\n<p>Alltså skickas \\((x,y)\\) till \\((-y,x)\\).</p>\n<p>\\[\nA'=i(1+i)=-1+i,\n\\]</p>\n<p>\\[\nB'=i(3+i)=-1+3i,\n\\]</p>\n<p>\\[\nC'=i(2+3i)=-3+2i.\n\\]</p>\n<p><strong>Multiplikation med \\(i\\) är en rotation \\(90^\\circ\\) moturs kring origo.</strong></p>",
    "familj": "multiplikation_i_rotation"
  },
  {
    "id": "4.62",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Använd de Moivres formel.</p><p>a) \\((2\\operatorname{cis}(\\pi/6))^3\\)<br>b) \\((\\sqrt2\\operatorname{cis}(\\pi/4))^4\\)<br>c) \\((3\\operatorname{cis}(2\\pi/3))^2\\)<br>d) \\((2\\operatorname{cis}(5\\pi/6))^6\\)</p>",
    "s": "<p>a) \\(8\\operatorname{cis}(\\pi/2)=\\boxed{8i}\\).</p><p>b) \\(4\\operatorname{cis}(\\pi)=\\boxed{-4}\\).</p><p>c) \\(9\\operatorname{cis}(4\\pi/3)=\\boxed{-\\frac92-\\frac{9\\sqrt3}{2}i}\\).</p><p>d) \\(64\\operatorname{cis}(5\\pi)=\\boxed{-64}\\).</p>",
    "familj": "proc_demoivre_potenser_3"
  },
  {
    "id": "4.63",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Talet \\(z=-\\sqrt3+i\\) är markerat i det komplexa talplanet.</p><span class=\"fig\"><svg width=\"410\" height=\"280\" viewBox=\"0 0 410 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\">\n<rect x=\"1\" y=\"1\" width=\"408\" height=\"278\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"147.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"110.0\" y1=\"25\" x2=\"110.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<text x=\"110.0\" y=\"147.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"165.0\" y1=\"25\" x2=\"165.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<text x=\"165.0\" y=\"147.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"220.0\" y1=\"25\" x2=\"220.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<line x1=\"275.0\" y1=\"25\" x2=\"275.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<text x=\"275.0\" y=\"147.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"330.0\" y1=\"25\" x2=\"330.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<text x=\"330.0\" y=\"147.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"385.0\" y1=\"25\" x2=\"385.0\" y2=\"240\" stroke=\"#D9E6E9\"/>\n<text x=\"385.0\" y=\"147.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"240.0\" x2=\"385\" y2=\"240.0\" stroke=\"#D9E6E9\"/>\n<text x=\"212.0\" y=\"243.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"55\" y1=\"204.2\" x2=\"385\" y2=\"204.2\" stroke=\"#D9E6E9\"/>\n<text x=\"212.0\" y=\"207.2\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"55\" y1=\"168.3\" x2=\"385\" y2=\"168.3\" stroke=\"#D9E6E9\"/>\n<text x=\"212.0\" y=\"171.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"132.5\" x2=\"385\" y2=\"132.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"96.7\" x2=\"385\" y2=\"96.7\" stroke=\"#D9E6E9\"/>\n<text x=\"212.0\" y=\"99.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"60.8\" x2=\"385\" y2=\"60.8\" stroke=\"#D9E6E9\"/>\n<text x=\"212.0\" y=\"63.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"385\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"212.0\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"132.5\" x2=\"385\" y2=\"132.5\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"220.0\" y1=\"25\" x2=\"220.0\" y2=\"240\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<text x=\"383\" y=\"125.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Re</text>\n<text x=\"228.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Im</text>\n<line x1=\"220.0\" y1=\"132.5\" x2=\"124.7\" y2=\"96.7\" stroke=\"#268FA3\" stroke-width=\"2\"/>\n<circle cx=\"124.7\" cy=\"96.7\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"132.7\" y=\"88.7\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">z</text>\n\n</svg></span><p>Skriv \\(z\\) i polär form med argumentet i intervallet \\(0\\le\\theta&lt;2\\pi\\).</p>",
    "s": "<p>Absolutbeloppet är</p>\n<p>\\[\nr=\\sqrt{(-\\sqrt3)^2+1^2}=2.\n\\]</p>\n<p>Punkten ligger i andra kvadranten och har referensvinkeln \\(30^\\circ\\), alltså</p>\n<p>\\[\n\\theta=150^\\circ=\\frac{5\\pi}{6}.\n\\]</p>\n<p><strong>\\[\nz=2\\left(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6}\\right).\n\\]</strong></p>",
    "familj": "polar_form_fran_rektangular"
  },
  {
    "id": "4.64",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Använd faktorsatsen och avgör om den angivna faktorn verkligen är en faktor.</p><p>a) \\(p(x)=x^3-4x+3\\), \\(x-1\\).<br>b) \\(p(x)=x^3+2x^2-x-2\\), \\(x+2\\).<br>c) \\(p(x)=2x^3-x^2-8x+4\\), \\(x-2\\).<br>d) \\(p(x)=x^4-5x^2+4\\), \\(x-3\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in det nollställe som hör ihop med faktorn. Om värdet blir 0 är uttrycket en faktor.</p><p>a) \\(p(1)=1-4+3=0\\): <strong>ja</strong>.<br>b) \\(p(-2)=-8+8+2-2=0\\): <strong>ja</strong>.<br>c) \\(p(2)=16-4-16+4=0\\): <strong>ja</strong>.<br>d) \\(p(3)=81-45+4=40\\ne0\\): <strong>nej</strong>.</p>",
    "familj": "proc_faktorsatsen_kontroll_1"
  },
  {
    "id": "4.65",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(i^7\\)<br>b) \\(i^{24}\\)<br>c) \\(i^{43}\\)<br>d) \\(i^{2027}\\)</p>",
    "s": "<p>Potenser av \\(i\\) har period 4.</p><p>a) <strong>\\(-i\\)</strong>.<br>b) <strong>1</strong>.<br>c) <strong>\\(-i\\)</strong>.<br>d) \\(2027\\equiv3\\pmod4\\Rightarrow\\)<strong>\\(-i\\)</strong>.</p>",
    "familj": "proc_i_potenser_3"
  },
  {
    "id": "4.66",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För \\(z=-3+4i\\), bestäm</p><p>a) \\(\\bar z\\)<br>b) \\(|z|\\)<br>c) \\(z\\bar z\\)<br>d) \\(1/z\\) på formen \\(a+bi\\).</p>",
    "s": "<p><strong>Metod:</strong> Konjugatet byter tecken på imaginärdelen. Absolutbeloppet fås med Pythagoras sats.</p><p>a) \\(-3-4i\\).<br>b) 5.<br>c) 25.<br>d) \\(1/z=\\bar z/|z|^2=(-3-4i)/25\\).</p>",
    "familj": "konjugat_abs_rutin"
  },
  {
    "id": "4.67",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[x^2+6x+13=0.\\]</p>",
    "s": "<p>Diskriminanten är \\(36-52=-16\\). Därför</p><p>\\[x=\\frac{-6\\pm4i}{2}=\\boxed{-3\\pm2i}.\\]</p>",
    "familj": "andragrad_komplexa_minus3_2i"
  },
  {
    "id": "4.68",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Lös ekvationerna och ange alla komplexa lösningar.</p><p>a) \\(z^2=4\\)<br>b) \\(z^2=-9\\)<br>c) \\(z^3=8\\)</p>",
    "s": "<p>a) <strong>\\(z=\\pm2\\)</strong>.</p><p>b) <strong>\\(z=\\pm3i\\)</strong>.</p><p>c) Skriv \\(8=8\\operatorname{cis}(2k\\pi)\\). Kubikrötterna har absolutbelopp 2 och argument \\(2k\\pi/3\\): <strong>\\(2,\\ -1+\\sqrt3i,\\ -1-\\sqrt3i\\)</strong>.</p>",
    "familj": "proc_complex_potensekvationer_3"
  },
  {
    "id": "4.69",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Låt</p><p>\\[z_1=3(\\cos20^\\circ+i\\sin20^\\circ),\\quad z_2=2(\\cos70^\\circ+i\\sin70^\\circ).\\]</p><p>Bestäm \\(z_1z_2\\) och \\(z_1/z_2\\) i polär form.</p>",
    "s": "<p>Vid multiplikation multipliceras absolutbeloppen och argumenten adderas:</p><p><strong>\\(z_1z_2=6(\\cos90^\\circ+i\\sin90^\\circ)\\)</strong>.</p><p>Vid division divideras absolutbeloppen och argumenten subtraheras:</p><p><strong>\\(z_1/z_2=\\frac32(\\cos(-50^\\circ)+i\\sin(-50^\\circ))\\)</strong>.</p>",
    "familj": "polar_mult_div"
  },
  {
    "id": "4.70",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla.</p><p>a) \\(z\\bar z\\) då \\(z=2-3i\\).<br>b) \\(|1-\\sqrt3 i|\\).<br>c) \\(\\overline{4+7i}\\).<br>d) \\(|-6+8i|^2\\).</p>",
    "s": "<p><strong>Metod:</strong> Konjugatet byter tecken på imaginärdelen. Absolutbeloppet fås med Pythagoras sats.</p><p>a) \\(|z|^2=4+9=\\)<strong>13</strong>.<br>b) \\(\\sqrt{1+3}=\\)<strong>2</strong>.<br>c) <strong>\\(4-7i\\)</strong>.<br>d) \\(36+64=\\)<strong>100</strong>.</p>",
    "familj": "proc_complex_abs_relationer"
  },
  {
    "id": "4.71",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Bestäm alla komplexa tal \\(z=x+yi\\) som samtidigt uppfyller</p><p>\\[|z-(1+i)|=\\sqrt5\\qquad\\text{och}\\qquad \\operatorname{Im}z=2\\operatorname{Re}z.\\]</p>\n<span class=\"fig\"><svg width=\"430\" height=\"330\" viewBox=\"0 0 430 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med cirkel med centrum 1 plus i och linjen y lika med 2x\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"328\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<g stroke=\"#E2E6EA\" stroke-width=\"1\"><line x1=\"55\" y1=\"35\" x2=\"55\" y2=\"290\"/><line x1=\"95\" y1=\"35\" x2=\"95\" y2=\"290\"/><line x1=\"135\" y1=\"35\" x2=\"135\" y2=\"290\"/><line x1=\"175\" y1=\"35\" x2=\"175\" y2=\"290\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"290\"/><line x1=\"255\" y1=\"35\" x2=\"255\" y2=\"290\"/><line x1=\"295\" y1=\"35\" x2=\"295\" y2=\"290\"/><line x1=\"335\" y1=\"35\" x2=\"335\" y2=\"290\"/><line x1=\"375\" y1=\"35\" x2=\"375\" y2=\"290\"/><line x1=\"40\" y1=\"45\" x2=\"390\" y2=\"45\"/><line x1=\"40\" y1=\"85\" x2=\"390\" y2=\"85\"/><line x1=\"40\" y1=\"125\" x2=\"390\" y2=\"125\"/><line x1=\"40\" y1=\"165\" x2=\"390\" y2=\"165\"/><line x1=\"40\" y1=\"205\" x2=\"390\" y2=\"205\"/><line x1=\"40\" y1=\"245\" x2=\"390\" y2=\"245\"/><line x1=\"40\" y1=\"285\" x2=\"390\" y2=\"285\"/></g>\n<line x1=\"40\" y1=\"205\" x2=\"400\" y2=\"205\" stroke=\"#2B2527\" stroke-width=\"1.7\"/><line x1=\"215\" y1=\"295\" x2=\"215\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\"/>\n<circle cx=\"255\" cy=\"165\" r=\"89.44\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.7\"/>\n<line x1=\"145\" y1=\"305\" x2=\"305\" y2=\"-15\" stroke=\"#476582\" stroke-width=\"2.5\"/>\n<circle cx=\"255\" cy=\"165\" r=\"4\" fill=\"#2B2527\"/><text x=\"263\" y=\"158\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#50494B\">1 + i</text><text x=\"305\" y=\"43\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#476582\">Im z = 2 Re z</text><text x=\"327\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#B43123\">|z - (1+i)| = sqrt(5)</text>\n</svg></span>\n<p>Svara exakt.</p>",
    "s": "<p>Det första villkoret är en cirkel med centrum \\((1,1)\\) och radie \\(\\sqrt5\\). Det andra villkoret är linjen \\(y=2x\\).</p>\n<p>Sätt \\(y=2x\\) i cirkelekvationen:</p><p>\\[(x-1)^2+(y-1)^2=5.\\]</p><p>\\[(x-1)^2+(2x-1)^2=5.\\]</p><p>\\[5x^2-6x-3=0.\\]</p>\n<p>pq-/kvadratisk formel ger</p><p>\\[x=\\frac{6\\pm\\sqrt{96}}{10}=\\frac{3\\pm2\\sqrt6}{5}.\\]</p><p>Då \\(y=2x\\):</p><p>\\[y=\\frac{6\\pm4\\sqrt6}{5}.\\]</p>\n<p>Alltså</p><p><strong>\\[z_1=\\frac{3+2\\sqrt6}{5}+\\frac{6+4\\sqrt6}{5}i,\\qquad z_2=\\frac{3-2\\sqrt6}{5}+\\frac{6-4\\sqrt6}{5}i.\\]</strong></p>",
    "familj": "komplex_lokus_cirkel_linje_a"
  },
  {
    "id": "4.72",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>En rot till ekvationen</p>\n<p>\\[\nz^3-2z^2+5z-10=0\n\\]</p>\n<p>är \\(z=2\\).</p>\n<p>Bestäm ekvationens övriga rötter.</p>",
    "s": "<p>Eftersom \\(z=2\\) är en rot är \\(z-2\\) en faktor. Polynomdivision eller faktorisering ger</p>\n<p>\\[\nz^3-2z^2+5z-10=(z-2)(z^2+5).\n\\]</p>\n<p>De återstående rötterna fås av</p>\n<p>\\[\nz^2+5=0\n\\Rightarrow z^2=-5\n\\Rightarrow z=\\pm i\\sqrt5.\n\\]</p>\n<p><strong>De övriga rötterna är \\(i\\sqrt5\\) och \\(-i\\sqrt5\\).</strong></p>",
    "familj": "polynomekvation_komplexa_roots"
  },
  {
    "id": "4.73",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Polynomet är</p><p>\\[p(x)=x^3-4x^2+x+6.\\]</p><p>a) Visa att \\(x-2\\) är en faktor.<br>b) Faktorisera polynomet fullständigt.<br>c) Lös \\(p(x)=0\\).</p>",
    "s": "<p>a) \\(p(2)=8-16+2+6=0\\), alltså är \\(x-2\\) en faktor.</p><p>b) Polynomdivision ger \\(p(x)=(x-2)(x^2-2x-3)\\). Andragradaren faktoriseras:</p><p>\\[x^2-2x-3=(x-3)(x+1).\\]</p><p>Alltså <strong>\\(p(x)=(x+1)(x-2)(x-3)\\)</strong>.</p><p>c) <strong>\\(x=-1,2,3\\)</strong>.</p>",
    "familj": "faktorsats_kubik_tre_rotter"
  },
  {
    "id": "4.74",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös \\(z^4=16\\) och skriv lösningarna både i polär och rektangulär form.</p>",
    "s": "<p>\\(16=16\\operatorname{cis}(2k\\pi)\\). Fjärderötterna har absolutbelopp 2 och argument \\(k\\pi/2\\), \\(k=0,1,2,3\\).</p><p>Polär form: \\(2\\operatorname{cis}0\\), \\(2\\operatorname{cis}(\\pi/2)\\), \\(2\\operatorname{cis}\\pi\\), \\(2\\operatorname{cis}(3\\pi/2)\\).</p><p>Rektangulär form: <strong>\\(2,2i,-2,-2i\\)</strong>.</p>",
    "familj": "proc_complex_fjarderot_2"
  },
  {
    "id": "4.75",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna och svara på formen \\(a+bi\\).</p><p>a) \\((3+2i)+(5-7i)\\)<br>b) \\((4-i)(2+3i)\\)<br>c) \\(i(6-2i)\\)<br>d) \\((1+i)^2\\)</p>",
    "s": "<p><strong>Metod:</strong> Räkna realdelar och imaginärdelar var för sig och använd \\(i^2=-1\\).</p><p>a) <strong>\\(8-5i\\)</strong>.</p><p>b) \\(8+12i-2i-3i^2=\\)<strong>\\(11+10i\\)</strong>.</p><p>c) \\(6i-2i^2=\\)<strong>\\(2+6i\\)</strong>.</p><p>d) \\(1+2i+i^2=\\)<strong>\\(2i\\)</strong>.</p>",
    "familj": "komplex_rakning_fyra"
  },
  {
    "id": "4.76",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Dividera.</p><p>a) \\(x^3-1\\) med \\(x-1\\)<br>b) \\(2x^3+3x^2-8x-12\\) med \\(x+2\\).</p>",
    "s": "<p><strong>Metod:</strong> Dividera högsta gradens term först och fortsätt tills resten har lägre grad än divisorn.</p><p>a) \\(x^3-1=(x-1)(x^2+x+1)\\). Kvoten är därför <strong>\\(\\boxed{x^2+x+1}\\)</strong> och resten 0.</p><p>b) \\(2x^3+3x^2-8x-12=(x+2)(2x^2-x-6)\\). Kvoten är <strong>\\(\\boxed{2x^2-x-6}\\)</strong> och resten 0.</p>",
    "familj": "polynomdivision_rutin"
  },
  {
    "id": "4.77",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Skriv \\(z=-\\sqrt3+i\\) i polär form.</p>",
    "s": "<p>Absolutbeloppet är \\(r=\\sqrt{3+1}=2\\). Punkten ligger i andra kvadranten och referensvinkeln är \\(\\pi/6\\), så argumentet är \\(5\\pi/6\\).</p><p><strong>\\(\\boxed{z=2(\\cos(5\\pi/6)+i\\sin(5\\pi/6))}\\)</strong>.</p>",
    "familj": "polar_minus_sqrt3_i"
  },
  {
    "id": "4.78",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm alla komplexa tal \\(z=a+bi\\) som uppfyller</p><p>\\[z+\\bar z=6\\quad\\text{och}\\quad |z|=5.\\]</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(\\bar z=a-bi\\) och \\(|z|=\\sqrt{a^2+b^2}\\). Sambandet \\(z\\bar z=|z|^2\\) är ofta användbart.</p><p>\\(z+\\bar z=2a=6\\Rightarrow a=3\\). Vidare</p><p>\\[|z|^2=a^2+b^2=25\\Rightarrow9+b^2=25\\Rightarrow b=\\pm4.\\]</p><p><strong>\\(\\boxed{z=3+4i\\text{ eller }z=3-4i}\\)</strong>.</p>",
    "familj": "konjugat_abs_system"
  },
  {
    "id": "4.79",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv i polär form med argument i intervallet \\(0\\le\\theta&lt;2\\pi\\).</p><p>a) \\(1+i\\)<br>b) \\(-1+i\\)<br>c) \\(-\\sqrt3-i\\)<br>d) \\(2i\\)</p>",
    "s": "<p>a) \\(|z|=\\sqrt2\\), \\(\\theta=\\pi/4\\): <strong>\\(\\sqrt2\\operatorname{cis}(\\pi/4)\\)</strong>.<br>b) <strong>\\(\\sqrt2\\operatorname{cis}(3\\pi/4)\\)</strong>.<br>c) \\(|z|=2\\), tredje kvadranten med referensvinkel \\(\\pi/6\\): <strong>\\(2\\operatorname{cis}(7\\pi/6)\\)</strong>.<br>d) <strong>\\(2\\operatorname{cis}(\\pi/2)\\)</strong>.</p>",
    "familj": "proc_polar_rekt_till_polar_1"
  },
  {
    "id": "4.80",
    "kap": 4,
    "omr": "eulers_formel",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Skriv på formen \\(a+bi\\) med hjälp av Eulers formel.</p><p>a) \\(e^{i\\pi}\\)<br>b) \\(e^{i\\pi/2}\\)<br>c) \\(2e^{i3\\pi/4}\\)<br>d) \\(3e^{-i\\pi/6}\\)</p>",
    "s": "<p>Använd \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\).</p><p>a) <strong>\\(-1\\)</strong>.<br>b) <strong>\\(i\\)</strong>.<br>c) <strong>\\(-\\sqrt2+\\sqrt2i\\)</strong>.<br>d) <strong>\\(\\frac{3\\sqrt3}{2}-\\frac32i\\)</strong>.</p>",
    "familj": "proc_euler_till_rect_2"
  },
  {
    "id": "4.81",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För \\(p(x)=x^3-4x^2-x+4\\):</p><p>a) visa att \\(x-1\\) är en faktor,<br>b) visa att \\(x+1\\) är en faktor,<br>c) faktorisera polynomet fullständigt.</p>",
    "s": "<p>a) \\(p(1)=1-4-1+4=0\\).</p><p>b) \\(p(-1)=-1-4+1+4=0\\).</p><p>Faktorisera genom gruppering:</p><p>\\[x^3-4x^2-x+4=x^2(x-4)-1(x-4)=(x^2-1)(x-4).\\]</p><p>Alltså \\(\\boxed{(x-1)(x+1)(x-4)}\\).</p>",
    "familj": "faktorsats_tva_rotter_e"
  },
  {
    "id": "4.82",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>För \\(p(x)=x^3+ax^2-5x-6\\) är \\(x-2\\) en faktor.</p><p>a) Bestäm \\(a\\).<br>b) Faktorisera därefter polynomet fullständigt.</p>",
    "s": "<p><strong>Metod:</strong> Använd faktorsatsen: \\(x-r\\) är en faktor precis när \\(p(r)=0\\).</p><p>a) Faktorsatsen ger \\(p(2)=8+4a-10-6=4a-8=0\\), alltså \\(a=2\\).</p><p>b) \\(p(x)=x^3+2x^2-5x-6\\). Division med \\(x-2\\) ger \\(x^2+4x+3=(x+1)(x+3)\\).</p><p><strong>\\(p(x)=(x-2)(x+1)(x+3)\\)</strong>.</p>",
    "familj": "faktorsats_parameter"
  },
  {
    "id": "4.83",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Använd de Moivres formel.</p><p>a) \\((\\cos20^\\circ+i\\sin20^\\circ)^3\\)<br>b) \\([2(\\cos45^\\circ+i\\sin45^\\circ)]^2\\)<br>c) \\([3e^{i\\pi/6}]^4\\)</p>",
    "s": "<p><strong>Metod:</strong> På polär form multipliceras argumentet med exponenten och absolutbeloppet upphöjs till exponenten.</p><p>a) <strong>\\(\\cos60^\\circ+i\\sin60^\\circ\\)</strong>.</p><p>b) <strong>\\(4(\\cos90^\\circ+i\\sin90^\\circ)=4i\\)</strong>.</p><p>c) <strong>\\(81e^{i2\\pi/3}\\)</strong>.</p>",
    "familj": "demoivre_rutin_e"
  },
  {
    "id": "4.84",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Alla komplexa tal \\(z=x+yi\\) som uppfyller</p><p>\\[|z-2|=|z-(2+4i)|\\]</p><p>bildar en linje i det komplexa talplanet.</p><p>a) Förklara med hjälp av avstånd varför det måste bli en viss linje, utan att börja med algebra.<br>b) Härled linjens ekvation i \\(x\\) och \\(y\\).<br>c) Förklara varför resultatet stämmer med din geometriska tolkning.</p>",
    "s": "<p>a) Punkterna ska ligga lika långt från \\(2\\) och \\(2+4i\\), dvs från punkterna \\((2,0)\\) och \\((2,4)\\). Punkterna ligger därför på mittnormalen till sträckan mellan dem.</p><p>b) Kvadrera:</p><p>\\[(x-2)^2+y^2=(x-2)^2+(y-4)^2.\\]</p><p>\\[y^2=y^2-8y+16\\Rightarrow y=2.\\]</p><p>c) Sträckans mittpunkt är \\((2,2)\\) och sträckan är lodrät, så dess mittnormal ska vara den horisontella linjen <strong>\\(y=2\\)</strong>.</p>",
    "familj": "komplex_mittnormal_a"
  },
  {
    "id": "4.85",
    "kap": 4,
    "omr": "imaginara_enheten",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Förenkla.</p><p>a) \\(i^{23}\\)<br>b) \\(i^{48}\\)<br>c) \\(i^{101}+i^{102}\\)<br>d) \\(\\frac1i\\)</p>",
    "s": "<p>a) \\(23\\equiv3\\pmod4\\Rightarrow\\boxed{-i}\\).</p><p>b) \\(48\\equiv0\\pmod4\\Rightarrow\\\\boxed{1}\\).</p><p>c) \\(i^{101}=i\\), \\(i^{102}=-1\\), alltså <strong>\\(-1+i\\)</strong>.</p><p>d) Multiplicera med \\(i/i\\): \\(1/i=i/i^2=\\boxed{-i}\\).</p>",
    "familj": "i_potenser_och_reciprok"
  },
  {
    "id": "4.86",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Utför polynomdivision.</p><p>a) \\(\\frac{x^3-8}{x-2}\\)<br>b) \\(\\frac{x^3+x^2-x-1}{x+1}\\)<br>c) \\(\\frac{2x^3+3x^2-8x-12}{x+2}\\)<br>d) \\(\\frac{x^4-1}{x-1}\\)</p>",
    "s": "<p><strong>Metod:</strong> Dividera ledande term med ledande term, multiplicera tillbaka och subtrahera. Fortsätt tills resten har lägre grad än nämnaren.</p><p>a) <strong>\\(x^2+2x+4\\)</strong>.</p><p>b) Gruppera eller dividera: <strong>\\(x^2-1\\)</strong>.</p><p>c) Division ger <strong>\\(2x^2-x-6\\)</strong>.</p><p>d) <strong>\\(x^3+x^2+x+1\\)</strong>.</p>",
    "familj": "proc_polynomdivision_3"
  },
  {
    "id": "4.87",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna och skriv svaret på formen \\(a+bi\\).</p><p>a) \\((3+5i)+(2-7i)\\)<br>b) \\((4-3i)-(1+6i)\\)<br>c) \\(-2(3-i)+(5+4i)\\)<br>d) \\((1+i)+(1-i)\\)</p>",
    "s": "<p><strong>Metod:</strong> Räkna realdelar och imaginärdelar var för sig och använd \\(i^2=-1\\).</p><p>a) <strong>\\(5-2i\\)</strong>.<br>b) <strong>\\(3-9i\\)</strong>.<br>c) \\(-6+2i+5+4i=\\)<strong>\\(-1+6i\\)</strong>.<br>d) <strong>2</strong>.</p>",
    "familj": "proc_complex_add_sub_1"
  },
  {
    "id": "4.88",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "1/2/0",
    "t": "<p>De komplexa tal som uppfyller</p>\n<p>\\[\n|z-(2-i)|=3\n\\]</p>\n<p>bildar en geometrisk figur i det komplexa talplanet.</p><span class=\"fig\"><svg width=\"430\" height=\"290\" viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text>\n<line x1=\"90.0\" y1=\"25\" x2=\"90.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"90.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<line x1=\"125.0\" y1=\"25\" x2=\"125.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"125.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"160.0\" y1=\"25\" x2=\"160.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"160.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"195.0\" y1=\"25\" x2=\"195.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"195.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"230.0\" y1=\"25\" x2=\"230.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<line x1=\"265.0\" y1=\"25\" x2=\"265.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"265.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"300.0\" y1=\"25\" x2=\"300.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"300.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"335.0\" y1=\"25\" x2=\"335.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"335.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"370.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"405.0\" y1=\"25\" x2=\"405.0\" y2=\"250\" stroke=\"#D9E6E9\"/>\n<text x=\"405.0\" y=\"152.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"250.0\" x2=\"405\" y2=\"250.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"253.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-5</text>\n<line x1=\"55\" y1=\"227.5\" x2=\"405\" y2=\"227.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"230.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-4</text>\n<line x1=\"55\" y1=\"205.0\" x2=\"405\" y2=\"205.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"208.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"55\" y1=\"182.5\" x2=\"405\" y2=\"182.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"185.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"55\" y1=\"160.0\" x2=\"405\" y2=\"160.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"163.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"137.5\" x2=\"405\" y2=\"137.5\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"115.0\" x2=\"405\" y2=\"115.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"118.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"92.5\" x2=\"405\" y2=\"92.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"95.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"70.0\" x2=\"405\" y2=\"70.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"73.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"47.5\" x2=\"405\" y2=\"47.5\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"50.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">4</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"405\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"222.0\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">5</text>\n<line x1=\"55\" y1=\"137.5\" x2=\"405\" y2=\"137.5\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"230.0\" y1=\"25\" x2=\"230.0\" y2=\"250\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<text x=\"403\" y=\"130.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Re</text>\n<text x=\"238.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Im</text>\n<circle cx=\"300.0\" cy=\"160.0\" r=\"105.0\" fill=\"none\" stroke=\"#268FA3\" stroke-width=\"2\"/>\n<circle cx=\"300.0\" cy=\"160.0\" r=\"5\" fill=\"#5C575E\"/>\n<text x=\"308.0\" y=\"152.0\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5C575E\">C</text>\n\n</svg></span><p>a) Beskriv figuren.<br>\nb) Ange dess medelpunkt och radie.<br>\nc) Bestäm de två punkter på figuren som ligger på linjen \\(\\operatorname{Im}z=-1\\).</p>",
    "s": "<p>Uttrycket \\(|z-(2-i)|\\) är avståndet från punkten \\(z\\) till talet \\(2-i\\).</p>\n<p>a) Alla punkter på konstant avstånd 3 bildar en <strong>cirkel</strong>.</p>\n<p>b) Medelpunkten är <strong>\\((2,-1)\\)</strong> och radien är <strong>3</strong>.</p>\n<p>c) På den horisontella linjen genom medelpunkten ligger cirkelns vänster- och högerpunkt tre enheter bort:</p>\n<p>\\[\nz=(2-3)-i=-1-i\n\\]</p>\n<p>och</p>\n<p>\\[\nz=(2+3)-i=5-i.\n\\]</p>",
    "familj": "komplex_lokus_cirkel"
  },
  {
    "id": "4.89",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>För det reella talet \\(a\\) definieras</p>\n<p>\\[\np_a(z)=z^3-az^2+(a+10)z-15.\n\\]</p>\n<p>Det är känt att \\(2+i\\) är en rot till \\(p_a(z)=0\\).</p>\n<p>Bestäm \\(a\\) och alla rötter.</p>",
    "s": "<p>Polynomet har reella koefficienter. Därför måste även konjugatet \\(2-i\\) vara en rot.</p>\n<p>Låt den tredje roten vara \\(r\\), som då är reell. Eftersom koefficienten framför \\(z^3\\) är 1 och koefficienten framför \\(z^2\\) är \\(-a\\), är summan av rötterna \\(a\\):</p>\n<p>\\[\n(2+i)+(2-i)+r=4+r=a.\n\\]</p>\n<p>Alltså \\(r=a-4\\).</p>\n<p>Summan av produkterna av rötterna två och två är koefficienten framför \\(z\\), alltså \\(a+10\\):</p>\n<p>\\[\n(2+i)(2-i)+r(2+i)+r(2-i)=a+10.\n\\]</p>\n<p>\\[\n5+4r=a+10.\n\\]</p>\n<p>Sätt in \\(r=a-4\\):</p>\n<p>\\[\n5+4(a-4)=a+10\n\\Rightarrow4a-11=a+10\n\\Rightarrow a=7.\n\\]</p>\n<p>Då är \\(r=3\\).</p>\n<p><strong>\\[\na=7,\\qquad z=2+i,\\;2-i,\\;3.\n\\]</strong></p>",
    "familj": "polynom_parameter_konjugatroots_a"
  },
  {
    "id": "4.90",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Lös ekvationerna och skriv svaret på formen \\(a+bi\\).</p><p>a) \\(z+(2-i)=5+3i\\)<br>b) \\(2z=6-4i\\)<br>c) \\((1+i)z=4\\)<br>d) \\(\\frac{z}{2-i}=1+2i\\)</p>",
    "s": "<p>a) Flytta över \\(2-i\\):</p><p>\\[z=5+3i-(2-i)=\\boxed{3+4i}.\\]</p>\n<p>b) Dela båda leden med 2:</p><p>\\[z=\\boxed{3-2i}.\\]</p>\n<p>c) \\(z=4/(1+i)\\). Förläng med konjugatet \\(1-i\\):</p><p>\\[z=\\frac{4(1-i)}{(1+i)(1-i)}=\\frac{4-4i}{2}=\\boxed{2-2i}.\\]</p>\n<p>d) Multiplicera båda leden med \\(2-i\\):</p><p>\\[z=(2-i)(1+2i)=2+4i-i-2i^2=\\boxed{4+3i}.\\]</p>",
    "familj": "proc_complex_lin_ekvationer_c"
  },
  {
    "id": "4.91",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Alla \\(z=x+yi\\) som uppfyller</p><p>\\[|z-1|=2|z+1|.\\]</p><span class=\"fig\"><svg width=\"420\" height=\"330\" viewBox=\"0 0 420 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med lika skala på axlarna\"><rect x=\"1\" y=\"1\" width=\"418\" height=\"328\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"85.0\" y1=\"35\" x2=\"85.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"285.0\" x2=\"335.0\" y2=\"285.0\" stroke=\"#E8ECEF\"/><line x1=\"116.2\" y1=\"35\" x2=\"116.2\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"253.8\" x2=\"335.0\" y2=\"253.8\" stroke=\"#E8ECEF\"/><line x1=\"147.5\" y1=\"35\" x2=\"147.5\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"222.5\" x2=\"335.0\" y2=\"222.5\" stroke=\"#E8ECEF\"/><line x1=\"178.8\" y1=\"35\" x2=\"178.8\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"191.2\" x2=\"335.0\" y2=\"191.2\" stroke=\"#E8ECEF\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#E8ECEF\"/><line x1=\"241.2\" y1=\"35\" x2=\"241.2\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"128.8\" x2=\"335.0\" y2=\"128.8\" stroke=\"#E8ECEF\"/><line x1=\"272.5\" y1=\"35\" x2=\"272.5\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"97.5\" x2=\"335.0\" y2=\"97.5\" stroke=\"#E8ECEF\"/><line x1=\"303.8\" y1=\"35\" x2=\"303.8\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"66.2\" x2=\"335.0\" y2=\"66.2\" stroke=\"#E8ECEF\"/><line x1=\"335.0\" y1=\"35\" x2=\"335.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"35.0\" x2=\"335.0\" y2=\"35.0\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"157.9\" cy=\"160.0\" r=\"41.7\" fill=\"#DCEEF1\" fill-opacity=\"0.22\" stroke=\"#268FA3\" stroke-width=\"2\"/><circle cx=\"241.2\" cy=\"160.0\" r=\"5\" fill=\"#B43123\"/><text x=\"248.2\" y=\"153.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">1</text><circle cx=\"178.8\" cy=\"160.0\" r=\"5\" fill=\"#B43123\"/><text x=\"185.8\" y=\"153.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">-1</text><text x=\"332.0\" y=\"152.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"218.0\" y=\"47\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>bildar en cirkel. Härled cirkelns ekvation och ange centrum och radie.</p>",
    "s": "<p>Kvadrera villkoret:</p><p>\\[(x-1)^2+y^2=4((x+1)^2+y^2).\\]</p><p>Förenkling ger</p><p>\\[3x^2+10x+3y^2+3=0.\\]</p><p>Dela med 3 och kvadratkomplettera:</p><p>\\[\\left(x+\\frac53\\right)^2+y^2=\\frac{16}{9}.\\]</p><p>Alltså en cirkel med centrum \\(\\boxed{(-5/3,0)}\\) och radie \\(\\boxed{4/3}\\).</p>",
    "familj": "apollonius_lokus_a_svg"
  },
  {
    "id": "4.92",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Avgör med faktorsatsen om den angivna faktorn är en faktor.</p><p>a) \\(p(x)=x^3-4x^2+x+6\\), faktor \\(x-2\\).<br>b) \\(q(x)=x^3+2x^2-5x-6\\), faktor \\(x+1\\).<br>c) \\(r(x)=2x^3-3x^2-8x+12\\), faktor \\(x-2\\).<br>d) \\(s(x)=x^4-16\\), faktor \\(x+2\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in det nollställe som hör ihop med faktorn. Om värdet blir 0 är uttrycket en faktor.</p><p>a) \\(p(2)=8-16+2+6=0\\): <strong>ja</strong>.</p><p>b) \\(q(-1)=-1+2+5-6=0\\): <strong>ja</strong>.</p><p>c) \\(r(2)=16-12-16+12=0\\): <strong>ja</strong>.</p><p>d) \\(s(-2)=16-16=0\\): <strong>ja</strong>.</p>",
    "familj": "proc_faktorsatsen_kontroll_3"
  },
  {
    "id": "4.93",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Beräkna exakt med de Moivres formel.</p><p>a) \\((1+i)^8\\)<br>b) \\((\\sqrt3-i)^6\\)</p>",
    "s": "<p>a) \\(1+i=\\sqrt2(\\cos\\frac\\pi4+i\\sin\\frac\\pi4)\\). Därför</p><p>\\[(1+i)^8=(\\sqrt2)^8(\\cos2\\pi+i\\sin2\\pi)=16.\\]</p><p><strong>16</strong>.</p>\n<p>b) \\(\\sqrt3-i=2(\\cos(-\\pi/6)+i\\sin(-\\pi/6))\\). Därför</p><p>\\[(\\sqrt3-i)^6=2^6(\\cos(-\\pi)+i\\sin(-\\pi))=-64.\\]</p><p><strong>−64</strong>.</p>",
    "familj": "demoivre_exakta_potenser_c"
  },
  {
    "id": "4.94",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det komplexa talet \\(z=2+3i\\) visas i talplanet tillsammans med två relaterade tal.</p><span class=\"fig\"><svg width=\"420\" height=\"330\" viewBox=\"0 0 420 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan med lika skala på axlarna\"><rect x=\"1\" y=\"1\" width=\"418\" height=\"328\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"85.0\" y1=\"35\" x2=\"85.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"285.0\" x2=\"335.0\" y2=\"285.0\" stroke=\"#E8ECEF\"/><line x1=\"110.0\" y1=\"35\" x2=\"110.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"260.0\" x2=\"335.0\" y2=\"260.0\" stroke=\"#E8ECEF\"/><line x1=\"135.0\" y1=\"35\" x2=\"135.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"235.0\" x2=\"335.0\" y2=\"235.0\" stroke=\"#E8ECEF\"/><line x1=\"160.0\" y1=\"35\" x2=\"160.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"210.0\" x2=\"335.0\" y2=\"210.0\" stroke=\"#E8ECEF\"/><line x1=\"185.0\" y1=\"35\" x2=\"185.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"185.0\" x2=\"335.0\" y2=\"185.0\" stroke=\"#E8ECEF\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#E8ECEF\"/><line x1=\"235.0\" y1=\"35\" x2=\"235.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"135.0\" x2=\"335.0\" y2=\"135.0\" stroke=\"#E8ECEF\"/><line x1=\"260.0\" y1=\"35\" x2=\"260.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"110.0\" x2=\"335.0\" y2=\"110.0\" stroke=\"#E8ECEF\"/><line x1=\"285.0\" y1=\"35\" x2=\"285.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"85.0\" x2=\"335.0\" y2=\"85.0\" stroke=\"#E8ECEF\"/><line x1=\"310.0\" y1=\"35\" x2=\"310.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"60.0\" x2=\"335.0\" y2=\"60.0\" stroke=\"#E8ECEF\"/><line x1=\"335.0\" y1=\"35\" x2=\"335.0\" y2=\"285\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"35.0\" x2=\"335.0\" y2=\"35.0\" stroke=\"#E8ECEF\"/><line x1=\"85.0\" y1=\"160.0\" x2=\"335.0\" y2=\"160.0\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"210.0\" y1=\"35\" x2=\"210.0\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"260.0\" cy=\"85.0\" r=\"5\" fill=\"#B43123\"/><text x=\"267.0\" y=\"78.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">z</text><circle cx=\"260.0\" cy=\"235.0\" r=\"5\" fill=\"#B43123\"/><text x=\"267.0\" y=\"252.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">konj z</text><circle cx=\"135.0\" cy=\"110.0\" r=\"5\" fill=\"#B43123\"/><text x=\"142.0\" y=\"103.0\" font-family=\"sans-serif\" font-size=\"11.5\" fill=\"#B43123\">iz</text><text x=\"332.0\" y=\"152.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"218.0\" y=\"47\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>a) Ange \\(\\bar z\\).<br>b) Ange \\(iz\\).<br>c) Beskriv geometriskt vad multiplikation med \\(i\\) gör.</p>",
    "s": "<p>a) \\(\\boxed{\\bar z=2-3i}\\).</p><p>b) \\(iz=2i+3i^2=\\boxed{-3+2i}\\).</p><p>c) Multiplikation med \\(i\\) motsvarar en <strong>rotation 90° moturs kring origo</strong> utan ändring av absolutbeloppet.</p>",
    "familj": "komplex_plan_konjugat_i_svg"
  },
  {
    "id": "4.95",
    "kap": 4,
    "omr": "eulers_formel",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Det komplexa talet är \\(z=-1+\\sqrt3\\,i\\).</p><p>a) Skriv \\(z\\) på exponentialform \\(re^{i\\theta}\\), där \\(0\\le\\theta&lt;2\\pi\\).<br>b) Bestäm \\(z^3\\) exakt med exponentialformen.</p>",
    "s": "<p>a) Absolutbeloppet är</p><p>\\[r=\\sqrt{(-1)^2+(\\sqrt3)^2}=2.\\]</p><p>Talet ligger i andra kvadranten och har argument \\(2\\pi/3\\). Alltså</p><p><strong>\\(z=2e^{i2\\pi/3}\\)</strong>.</p>\n<p>b)</p><p>\\[z^3=2^3e^{i2\\pi}=8(\\cos2\\pi+i\\sin2\\pi)=\\boxed{8}.\\]</p>",
    "familj": "eulerform_potens_c"
  },
  {
    "id": "4.96",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>Lös ekvationen</p><p>\\[z^5=32.\\]</p><span class=\"fig\"><svg width=\"430\" height=\"290\" viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fem jämnt fördelade komplexa rötter på cirkeln med radie två\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><line x1=\"210\" y1=\"260\" x2=\"210\" y2=\"25\" stroke=\"#2B2527\" stroke-width=\"1.6\"/><circle cx=\"210\" cy=\"145\" r=\"90\" fill=\"none\" stroke=\"#AABBC0\" stroke-width=\"1.4\"/><polygon points=\"300.0,145.0 237.8,59.4 137.2,92.1 137.2,197.9 237.8,230.6\" fill=\"#DCEFF2\" fill-opacity=\"0.45\" stroke=\"#268FA3\" stroke-width=\"1.5\"/><circle cx=\"300.0\" cy=\"145.0\" r=\"5\" fill=\"#B43123\"/><circle cx=\"237.8\" cy=\"59.4\" r=\"5\" fill=\"#B43123\"/><circle cx=\"137.2\" cy=\"92.1\" r=\"5\" fill=\"#B43123\"/><circle cx=\"137.2\" cy=\"197.9\" r=\"5\" fill=\"#B43123\"/><circle cx=\"237.8\" cy=\"230.6\" r=\"5\" fill=\"#B43123\"/><text x=\"365\" y=\"137\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"217\" y=\"30\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>a) Ange alla rötter i polär form.<br>b) Förklara geometriskt varför deras summa är 0.</p>",
    "s": "<p>\\(32=32\\operatorname{cis}(2\\pi n)\\). Femterötterna har absolutbelopp \\(32^{1/5}=2\\) och argument</p><p>\\[\\theta_k=\\frac{2\\pi k}{5},\\quad k=0,1,2,3,4.\\]</p><p><strong>\\(\\boxed{z_k=2\\operatorname{cis}(2\\pi k/5)}\\)</strong>.</p><p>Rötterna ligger som hörnen i en regelbunden femhörning med centrum i origo. Vektorerna är jämnt fördelade runt origo. Genom rotationssymmetrin tar deras x-komponenter och y-komponenter ut varandra. Därför är <strong>summan 0</strong>. Detta stämmer också med att koefficienten framför \\(z^4\\) i \\(z^5-32\\) är 0.</p>",
    "familj": "femterot_32_geometri_summa"
  },
  {
    "id": "4.97",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Det komplexa talet är \\(z=1+i\\sqrt3\\).</p><p>a) Bestäm \\(z^5\\) exakt med polär form.<br>b) Bestäm \\(1/z\\) på både rektangulär och polär form.<br>c) Kontrollera att absolutbeloppen uppfyller \\(|z|\\,|1/z|=1\\).</p>",
    "s": "<p>\\(z=2e^{i\\pi/3}\\).</p><p>a) \\(z^5=32e^{i5\\pi/3}=\\boxed{16-16\\sqrt3 i}\\).</p><p>b) Polärt \\(\\boxed{\\frac12e^{-i\\pi/3}}\\). Rektangulärt \\((1-i\\sqrt3)/4=\\boxed{1/4-(\\sqrt3/4)i}\\).</p><p>c) \\(|z|=2\\), \\(|1/z|=1/2\\), produkten är \\(\\boxed{1}\\).</p>",
    "familj": "polar_och_rektangulart_invers_c"
  },
  {
    "id": "4.98",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Bestäm konstanten \\(a\\).</p><p>a) \\(x-2\\) ska vara en faktor i \\(p(x)=x^3+ax^2-5x+2\\).<br>b) \\(x+3\\) ska vara en faktor i \\(q(x)=2x^3-x^2+ax+18\\).<br>c) \\(x-1\\) ska vara en faktor i \\(r(x)=ax^3+2x^2-5x+1\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd faktorsatsen: \\(x-r\\) är en faktor precis när \\(p(r)=0\\).</p><p>a) \\(p(2)=8+4a-10+2=4a=0\\Rightarrow\\boxed{a=0}\\).</p><p>b) \\(q(-3)=-54-9-3a+18=-45-3a=0\\Rightarrow\\boxed{a=-15}\\).</p><p>c) \\(r(1)=a+2-5+1=a-2=0\\Rightarrow\\boxed{a=2}\\).</p>",
    "familj": "proc_faktorsats_parameter_2"
  },
  {
    "id": "4.99",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Lös ekvationen</p><p>\\[z^3=-8i.\\]</p><span class=\"fig\"><svg width=\"430\" height=\"290\" viewBox=\"0 0 430 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tre kubikrötter jämnt fördelade på cirkeln med radie två\">\n<rect x=\"1\" y=\"1\" width=\"428\" height=\"288\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"50\" y1=\"145\" x2=\"385\" y2=\"145\" stroke=\"#2B2527\"/><line x1=\"215\" y1=\"260\" x2=\"215\" y2=\"25\" stroke=\"#2B2527\"/><circle cx=\"215\" cy=\"145\" r=\"92\" fill=\"none\" stroke=\"#AABBC0\"/>\n<circle cx=\"294.7\" cy=\"191.0\" r=\"6\" fill=\"#B43123\"/><circle cx=\"215.0\" cy=\"53.0\" r=\"6\" fill=\"#B43123\"/><circle cx=\"135.3\" cy=\"191.0\" r=\"6\" fill=\"#B43123\"/><polygon points=\"294.7,191.0 215.0,53.0 135.3,191.0\" fill=\"#DCEFF2\" fill-opacity=\"0.4\" stroke=\"#268FA3\"/><text x=\"370\" y=\"137\" font-family=\"sans-serif\" font-size=\"11\">Re</text><text x=\"222\" y=\"30\" font-family=\"sans-serif\" font-size=\"11\">Im</text></svg></span><p>Ange rötterna både i polär och rektangulär form.</p>",
    "s": "<p>Skriv \\(-8i=8\\operatorname{cis}(-\\pi/2)\\). Kubikrötterna har absolutbelopp 2 och argument</p><p>\\[-\\pi/6,\\quad\\pi/2,\\quad7\\pi/6.\\]</p><p>Polär form: <strong>\\(2\\operatorname{cis}(-\\pi/6),2\\operatorname{cis}(\\pi/2),2\\operatorname{cis}(7\\pi/6)\\)</strong>.</p><p>Rektangulär form: <strong>\\(\\sqrt3-i,\\ 2i,\\ -\\sqrt3-i\\)</strong>.</p>",
    "familj": "kubikrot_minus8i"
  },
  {
    "id": "4.100",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna \\((\\cos20^\\circ+i\\sin20^\\circ)^9\\) med de Moivres formel.</p>",
    "s": "<p><strong>Metod:</strong> Med de Moivres formel multipliceras argumentet med exponenten.</p><p>\\[(\\cos20^\\circ+i\\sin20^\\circ)^9=\\cos(9\\cdot20^\\circ)+i\\sin(9\\cdot20^\\circ).\\]</p><p>Eftersom \\(9\\cdot20^\\circ=180^\\circ\\) får vi</p><p>\\[\\cos180^\\circ+i\\sin180^\\circ=-1+0i.\\]</p><p><strong>\\(\\boxed{-1}\\)</strong>.</p>",
    "familj": "demoivre_rutin"
  },
  {
    "id": "4.101",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/4/0",
    "t": "<p>Lös och ange alla komplexa rötter i polär form.</p><p>a) \\(z^2=9\\)<br>b) \\(z^2=-16\\)<br>c) \\(z^3=8\\)<br>d) \\(z^4=16\\)</p>",
    "s": "<p>a) <strong>\\(3\\operatorname{cis}0\\), \\(3\\operatorname{cis}\\pi\\)</strong>.</p><p>b) <strong>\\(4\\operatorname{cis}(\\pi/2)\\), \\(4\\operatorname{cis}(3\\pi/2)\\)</strong>.</p><p>c) <strong>\\(2\\operatorname{cis}(0),\\ 2\\operatorname{cis}(2\\pi/3),\\ 2\\operatorname{cis}(4\\pi/3)\\)</strong>.</p><p>d) <strong>\\(2\\operatorname{cis}(k\\pi/2)\\), \\(k=0,1,2,3\\)</strong>.</p>",
    "familj": "proc_complex_potensekv_standard_c"
  },
  {
    "id": "4.102",
    "kap": 4,
    "omr": "potensekvationer_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/2",
    "t": "<p>Lös ekvationen</p>\n<p>\\[\nz^4=16i\n\\]</p>\n<p>och ange alla rötter i polär form. Figuren visar rötternas placering på cirkeln \\(|z|=2\\).</p><span class=\"fig\"><svg width=\"420\" height=\"285\" viewBox=\"0 0 420 285\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Komplext talplan\">\n<rect x=\"1\" y=\"1\" width=\"418\" height=\"283\" rx=\"10\" fill=\"#fff\" stroke=\"#E4E3E6\"/>\n<line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<text x=\"55.0\" y=\"150.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"111.7\" y1=\"25\" x2=\"111.7\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<text x=\"111.7\" y=\"150.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"168.3\" y1=\"25\" x2=\"168.3\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<text x=\"168.3\" y=\"150.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"225.0\" y1=\"25\" x2=\"225.0\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<line x1=\"281.7\" y1=\"25\" x2=\"281.7\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<text x=\"281.7\" y=\"150.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"338.3\" y1=\"25\" x2=\"338.3\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<text x=\"338.3\" y=\"150.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"395.0\" y1=\"25\" x2=\"395.0\" y2=\"245\" stroke=\"#D9E6E9\"/>\n<text x=\"395.0\" y=\"150.0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"245.0\" x2=\"395\" y2=\"245.0\" stroke=\"#D9E6E9\"/>\n<text x=\"217.0\" y=\"248.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-3</text>\n<line x1=\"55\" y1=\"208.3\" x2=\"395\" y2=\"208.3\" stroke=\"#D9E6E9\"/>\n<text x=\"217.0\" y=\"211.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-2</text>\n<line x1=\"55\" y1=\"171.7\" x2=\"395\" y2=\"171.7\" stroke=\"#D9E6E9\"/>\n<text x=\"217.0\" y=\"174.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">-1</text>\n<line x1=\"55\" y1=\"135.0\" x2=\"395\" y2=\"135.0\" stroke=\"#D9E6E9\"/>\n<line x1=\"55\" y1=\"98.3\" x2=\"395\" y2=\"98.3\" stroke=\"#D9E6E9\"/>\n<text x=\"217.0\" y=\"101.3\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">1</text>\n<line x1=\"55\" y1=\"61.7\" x2=\"395\" y2=\"61.7\" stroke=\"#D9E6E9\"/>\n<text x=\"217.0\" y=\"64.7\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">2</text>\n<line x1=\"55\" y1=\"25.0\" x2=\"395\" y2=\"25.0\" stroke=\"#D9E6E9\"/>\n<text x=\"217.0\" y=\"28.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#5C575E\">3</text>\n<line x1=\"55\" y1=\"135.0\" x2=\"395\" y2=\"135.0\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<line x1=\"225.0\" y1=\"25\" x2=\"225.0\" y2=\"245\" stroke=\"#2B2527\" stroke-width=\"1.8\"/>\n<text x=\"393\" y=\"128.0\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Re</text>\n<text x=\"233.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#2B2527\">Im</text>\n<circle cx=\"225.0\" cy=\"135.0\" r=\"113.3\" fill=\"none\" stroke=\"#5C575E\" stroke-width=\"2\"/>\n<circle cx=\"329.7\" cy=\"106.9\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"337.7\" y=\"98.9\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">z1</text>\n<circle cx=\"181.6\" cy=\"67.2\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"189.6\" y=\"59.2\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">z2</text>\n<circle cx=\"120.3\" cy=\"163.1\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"128.3\" y=\"155.1\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">z3</text>\n<circle cx=\"268.4\" cy=\"202.8\" r=\"5\" fill=\"#268FA3\"/>\n<text x=\"276.4\" y=\"194.8\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#268FA3\">z4</text>\n\n</svg></span>",
    "s": "<p>Skriv högerledet i polär form:</p>\n<p>\\[\n16i=16\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right).\n\\]</p>\n<p>Om \\(z=r(\\cos\\theta+i\\sin\\theta)\\), så krävs</p>\n<p>\\[\nr^4=16\\Rightarrow r=2\n\\]</p>\n<p>och</p>\n<p>\\[\n4\\theta=\\frac{\\pi}{2}+2\\pi k.\n\\]</p>\n<p>Därför</p>\n<p>\\[\n\\theta=\\frac{\\pi}{8}+\\frac{\\pi}{2}k,\\qquad k=0,1,2,3.\n\\]</p>\n<p><strong>Rötterna är</strong></p>\n<p>\\[\n2\\operatorname{cis}\\frac{\\pi}{8},\\quad\n2\\operatorname{cis}\\frac{5\\pi}{8},\\quad\n2\\operatorname{cis}\\frac{9\\pi}{8},\\quad\n2\\operatorname{cis}\\frac{13\\pi}{8}.\n\\]</p>",
    "familj": "komplexa_fjarderotter_a"
  },
  {
    "id": "4.103",
    "kap": 4,
    "omr": "polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Skriv talen på polär form med argument i intervallet \\(0\\le\\theta&lt;2\\pi\\).</p><p>a) \\(1+i\\)<br>b) \\(-\\sqrt3+i\\)<br>c) \\(-2i\\)</p>",
    "s": "<p>a) \\(r=\\sqrt2\\), \\(\\theta=\\pi/4\\): <strong>\\(\\sqrt2(\\cos\\frac\\pi4+i\\sin\\frac\\pi4)\\)</strong>.</p>\n<p>b) \\(r=2\\), andra kvadranten och referensvinkel \\(\\pi/6\\), alltså \\(\\theta=5\\pi/6\\): <strong>\\(2(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6})\\)</strong>.</p>\n<p>c) \\(r=2\\), \\(\\theta=3\\pi/2\\): <strong>\\(2(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2})\\)</strong>.</p>",
    "familj": "polarform_rutin3"
  },
  {
    "id": "4.104",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Faktorisera fullständigt och lös.</p><p>a) \\(x^3-4x=0\\)<br>b) \\(x^3+x^2-4x-4=0\\)<br>c) \\(x^4-5x^2+4=0\\)</p>",
    "s": "<p>a) \\(x(x^2-4)=x(x-2)(x+2)\\): <strong>\\(x=-2,0,2\\)</strong>.</p><p>b) Gruppera: \\(x^2(x+1)-4(x+1)=(x+1)(x-2)(x+2)\\): <strong>\\(x=-2,-1,2\\)</strong>.</p><p>c) Sätt \\(u=x^2\\): \\(u^2-5u+4=(u-1)(u-4)\\). Alltså <strong>\\(x=\\pm1,\\pm2\\)</strong>.</p>",
    "familj": "proc_polynomekvationer_faktor_3"
  },
  {
    "id": "4.105",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Använd de Moivres formel.</p><p>a) \\([2\\operatorname{cis}(\\pi/6)]^3\\)<br>b) \\([3\\operatorname{cis}(\\pi/4)]^2\\)<br>c) \\([\\operatorname{cis}(2\\pi/3)]^4\\)<br>d) \\([2\\operatorname{cis}(5\\pi/6)]^2\\)</p>",
    "s": "<p>a) <strong>\\(8\\operatorname{cis}(\\pi/2)=8i\\)</strong>.<br>b) <strong>\\(9\\operatorname{cis}(\\pi/2)=9i\\)</strong>.<br>c) \\(\\operatorname{cis}(8\\pi/3)=\\)<strong>\\(\\operatorname{cis}(2\\pi/3)\\)</strong>.<br>d) \\(4\\operatorname{cis}(5\\pi/3)=\\)<strong>\\(2-2\\sqrt3 i\\)</strong>.</p>",
    "familj": "proc_de_moivre_potenser_1"
  },
  {
    "id": "4.106",
    "kap": 4,
    "omr": "rakning_polar_form",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Beräkna på polär form.</p><p>\\[z_1=4e^{i\\pi/6},\\qquad z_2=2e^{i\\pi/3}.\\]</p><p>a) \\(z_1z_2\\)<br>b) \\(z_1/z_2\\)<br>c) \\(z_2^3\\)</p>",
    "s": "<p>a) \\(\\boxed{8e^{i\\pi/2}}\\).</p><p>b) \\(\\boxed{2e^{-i\\pi/6}}\\) (eller argument \\(11\\pi/6\\)).</p><p>c) \\(\\boxed{8e^{i\\pi}=-8}\\).</p>",
    "familj": "polar_rakning_expform_e"
  },
  {
    "id": "4.107",
    "kap": 4,
    "omr": "polynomdivision",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Utför polynomdivision och ange kvot och rest.</p><p>a) Dividera \\(x^3-4x^2+x+6\\) med \\(x-2\\).<br>b) Dividera \\(2x^3+3x^2-5\\) med \\(x+1\\).</p>",
    "s": "<p>a) Divisionen ger</p><p>\\[x^3-4x^2+x+6=(x-2)(x^2-2x-3)+0.\\]</p><p><strong>Kvot \\(x^2-2x-3\\), rest 0.</strong></p>\n<p>b) Divisionen ger</p><p>\\[2x^3+3x^2-5=(x+1)(2x^2+x-1)-4.\\]</p><p><strong>Kvot \\(2x^2+x-1\\), rest −4.</strong></p>",
    "familj": "polynomdivision_rutin2"
  },
  {
    "id": "4.108",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Dividera och skriv svaret på formen \\(a+bi\\).</p><p>a) \\(\\frac{3+i}{1-i}\\)<br>b) \\(\\frac{5}{2+i}\\)<br>c) \\(\\frac{4-2i}{1+2i}\\)<br>d) \\(\\frac{i}{1+i}\\)</p>",
    "s": "<p>Förläng med nämnarens konjugat.</p><p>a) \\(\\frac{(3+i)(1+i)}2=\\)<strong>\\(1+2i\\)</strong>.<br>b) \\(\\frac{5(2-i)}5=\\)<strong>\\(2-i\\)</strong>.<br>c) \\(\\frac{(4-2i)(1-2i)}5=\\frac{-10i}{5}=\\)<strong>\\(-2i\\)</strong>.<br>d) \\(\\frac{i(1-i)}2=\\)<strong>\\(\\frac12+\\frac12i\\)</strong>.</p>",
    "familj": "proc_complex_division_1"
  },
  {
    "id": "4.109",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "A",
    "poang": "0/1/3",
    "t": "<p>Polynomet</p><p>\\[p(z)=z^3+az^2+bz+2\\]</p><p>har reella koefficienter och roten \\(1+i\\).</p><p>Bestäm \\(a\\) och \\(b\\) genom att använda sambanden mellan rötter och koefficienter. Börja alltså inte med att sätta in \\(z=1+i\\) och utveckla allt direkt.</p>",
    "s": "<p>Eftersom koefficienterna är reella är även \\(1-i\\) en rot. Låt den tredje roten vara det reella talet \\(r\\).</p>\n<p>För ett polynom \\(z^3+az^2+bz+2\\) gäller att produkten av rötterna är \\(-2\\). Därför</p>\n<p>\\[(1+i)(1-i)r=2r=-2\\Rightarrow r=-1.\\]</p>\n<p>Summan av rötterna är \\(-a\\):</p>\n<p>\\[(1+i)+(1-i)+(-1)=1=-a\\Rightarrow\\boxed{a=-1}.\\]</p>\n<p>Summan av produkterna två och två är \\(b\\):</p>\n<p>\\[(1+i)(1-i)+(-1)(1+i)+(-1)(1-i)=2-2=0.\\]</p>\n<p>Alltså \\(\\boxed{b=0}\\).</p>",
    "familj": "polynom_parameter_konjugat_vieta"
  },
  {
    "id": "4.110",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Polynomet \\(p(x)=x^3-2x^2-5x+6\\) har roten \\(x=1\\).</p><p>a) Dividera \\(p(x)\\) med \\(x-1\\).<br>b) Faktorisera polynomet fullständigt.<br>c) Lös \\(p(x)=0\\).</p>",
    "s": "<p><strong>Metod:</strong> Använd en känd rot för att få en faktor. Dividera sedan bort faktorn och lös ekvationen som återstår.</p><p>a) Polynomdivision ger \\(x^2-x-6\\).</p><p>b) \\(x^2-x-6=(x-3)(x+2)\\), alltså \\[p(x)=(x-1)(x-3)(x+2).\\]</p><p>c) <strong>\\(x=-2,1,3\\)</strong>.</p>",
    "familj": "proc_kubik_given_rot_2"
  },
  {
    "id": "4.111",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna och skriv svaret på formen \\(a+bi\\).</p><p>a) \\((5-3i)+(2+7i)\\)<br>b) \\((4+2i)(1-3i)\\)<br>c) \\((2-i)^2\\)<br>d) \\(\\frac{6+8i}{2i}\\)</p>",
    "s": "<p>a) \\(\\boxed{7+4i}\\)</p><p>b) \\(4-12i+2i-6i^2=\\boxed{10-10i}\\)</p><p>c) \\(4-4i+i^2=\\boxed{3-4i}\\)</p><p>d) Multiplicera med \\(-i/-i\\): \\((6+8i)/(2i)=4-3i\\), alltså \\(\\boxed{4-3i}\\).</p>",
    "familj": "komplex_rutin_ny4"
  },
  {
    "id": "4.112",
    "kap": 4,
    "omr": "rakning_komplexa",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna och skriv svaret på formen \\(a+bi\\).</p><p>a) \\((3-2i)+(1+5i)\\)<br>b) \\((4+i)-(2-3i)\\)<br>c) \\((2+i)(3-2i)\\)<br>d) \\(\\frac{5+5i}{1+i}\\)</p>",
    "s": "<p>a) <strong>\\(4+3i\\)</strong>.</p><p>b) <strong>\\(2+4i\\)</strong>.</p><p>c) \\(6-4i+3i-2i^2=8-i\\), alltså <strong>\\(8-i\\)</strong>.</p><p>d) Multiplicera med konjugatet \\(1-i\\):</p><p>\\[\\frac{(5+5i)(1-i)}{(1+i)(1-i)}=\\frac{10}{2}=\\boxed{5}.\\]</p>",
    "familj": "komplex_rutin4"
  },
  {
    "id": "4.113",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Använd de Moivres formel för att skriva</p><p>\\[(1+i\\sqrt3)^6\\]</p><p>på formen \\(a+bi\\).</p>",
    "s": "<p><strong>Metod:</strong> Skriv talet på polär form och använd att en potens höjer absolutbeloppet till potensen och multiplicerar argumentet med exponenten.</p><p>\\(1+i\\sqrt3=2\\operatorname{cis}(\\pi/3)\\). Då</p><p>\\[(1+i\\sqrt3)^6=2^6\\operatorname{cis}(2\\pi)=64.\\]</p><p><strong>\\(\\boxed{64+0i}\\)</strong>.</p>",
    "familj": "de_moivre_potens_sex"
  },
  {
    "id": "4.114",
    "kap": 4,
    "omr": "polynomekvationer",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Ett tredjegradspolynom med reella koefficienter har koefficienten 1 framför \\(x^3\\). Två av rötterna är \\(4\\) och \\(1+2i\\).</p><p>a) Bestäm den tredje roten.<br>b) Bestäm polynomet på utvecklad form.<br>c) Bestäm konstanttermen utan att först multiplicera ut hela produkten. Förklara hur du tänker.</p>",
    "s": "<p>a) Reella koefficienter innebär att komplexa rötter kommer konjugatvis: \\(\\boxed{1-2i}\\).</p><p>b)</p><p>\\[(x-4)(x-(1+2i))(x-(1-2i))=(x-4)((x-1)^2+4).\\]</p><p>\\[(x-4)(x^2-2x+5)=\\boxed{x^3-6x^2+13x-20}.\\]</p><p>c) När koefficienten framför \\(x^3\\) är 1 är konstanttermen \\(-r_1r_2r_3\\): \\(-4|1+2i|^2=-4\\cdot5=\\boxed{-20}\\).</p>",
    "familj": "polynom_fran_rotter_konjugat_c"
  },
  {
    "id": "4.115",
    "kap": 4,
    "omr": "eulers_formel",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Förenkla exakt med hjälp av Eulers formel:</p><p>\\[e^{i5\\pi/6}+e^{-i5\\pi/6}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Använd \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\) och standardvärdena för sinus och cosinus.</p><p>Eftersom \\(e^{i\\theta}+e^{-i\\theta}=2\\cos\\theta\\) fås</p><p>\\[2\\cos(5\\pi/6)=2\\left(-\\frac{\\sqrt3}{2}\\right)=\\boxed{-\\sqrt3}.\\]</p>",
    "familj": "euler_konjugat_summa"
  },
  {
    "id": "4.116",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Lös andragradsekvationerna.</p><p>a) \\(x^2+16=0\\)<br>b) \\(x^2-4x+13=0\\)<br>c) \\(2x^2+8x+10=0\\)<br>d) \\(x^2+6x+25=0\\)</p>",
    "s": "<p>a) <strong>\\(x=\\pm4i\\)</strong>.</p><p>b) \\(x=(4\\pm\\sqrt{-36})/2=\\boxed{2\\pm3i}\\).</p><p>c) Dividera med 2: \\(x^2+4x+5=0\\Rightarrow\\boxed{x=-2\\pm i}\\).</p><p>d) \\(x=(-6\\pm\\sqrt{-64})/2=\\boxed{-3\\pm4i}\\).</p>",
    "familj": "proc_andragrad_complex_3"
  },
  {
    "id": "4.117",
    "kap": 4,
    "omr": "faktorsatsen",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "2/1/0",
    "t": "<p>Polynomet är</p>\n<p>\\[\np(x)=x^3-3x^2-4x+12.\n\\]</p>\n<p>a) Visa med faktorsatsen att \\(x-2\\) är en faktor.<br>\nb) Faktorisera polynomet fullständigt.<br>\nc) Lös ekvationen \\(p(x)=0\\).</p>",
    "s": "<p>a)</p>\n<p>\\[\np(2)=8-12-8+12=0.\n\\]</p>\n<p>Alltså är \\(x-2\\) en faktor.</p>\n<p>b) Polynomet kan grupperas:</p>\n<p>\\[\nx^3-3x^2-4x+12\n=x^2(x-3)-4(x-3)\n\\]</p>\n<p>\\[\n=(x-3)(x^2-4)\n=(x-3)(x-2)(x+2).\n\\]</p>\n<p>c)</p>\n<p><strong>\\[\nx=-2,\\quad x=2,\\quad x=3.\n\\]</strong></p>",
    "familj": "faktorsats_faktorisering"
  },
  {
    "id": "4.118",
    "kap": 4,
    "omr": "de_moivre",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Beräkna exakt med de Moivres formel:</p><p>\\[(1-\\sqrt3\\,i)^{10}.\\]</p>",
    "s": "<p>Talet har absolutbelopp 2 och argument \\(-\\pi/3\\):</p><p>\\[1-\\sqrt3 i=2e^{-i\\pi/3}.\\]</p><p>Alltså</p><p>\\[(1-\\sqrt3 i)^{10}=2^{10}e^{-i10\\pi/3}=1024e^{-i4\\pi/3}=1024e^{i2\\pi/3}.\\]</p><p>\\[=1024\\left(-\\frac12+i\\frac{\\sqrt3}{2}\\right)=\\boxed{-512+512\\sqrt3\\,i}.\\]</p>",
    "familj": "demoivre_tiondepotens_c"
  },
  {
    "id": "4.119",
    "kap": 4,
    "omr": "komplexa_losningar",
    "kurs": [
      "2c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Ett polynom med reella koefficienter har roten \\(2+3i\\).</p><p>a) Vilken annan rot måste också finnas?<br>b) Bilda ett andragradspolynom med koefficienten 1 framför \\(x^2\\) som har just dessa två rötter.<br>c) Kontrollera resultatet genom att sätta in \\(2+3i\\).</p>",
    "s": "<p>a) Reella koefficienter ger konjugerade rotpar, alltså <strong>\\(2-3i\\)</strong>.</p><p>b) \\[(x-(2+3i))(x-(2-3i))=(x-2)^2+9=\\boxed{x^2-4x+13}.\\]</p><p>c) \\((2+3i)^2-4(2+3i)+13=(4+12i-9)-8-12i+13=0\\), så roten verifieras.</p>",
    "familj": "proc_konjugerade_rotter_2"
  },
  {
    "id": "4.120",
    "kap": 4,
    "omr": "konjugat_absolutbelopp",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>För varje tal, bestäm konjugatet och absolutbeloppet.</p><p>a) \\(3+4i\\)<br>b) \\(-5+12i\\)<br>c) \\(8-15i\\)<br>d) \\(-7-24i\\)</p>",
    "s": "<p><strong>Metod:</strong> Konjugatet byter tecken på imaginärdelen. Absolutbeloppet fås med Pythagoras sats.</p><p>a) konjugat <strong>\\(3-4i\\)</strong>, absolutbelopp <strong>5</strong>.<br>b) <strong>\\(-5-12i\\)</strong>, <strong>13</strong>.<br>c) <strong>\\(8+15i\\)</strong>, <strong>17</strong>.<br>d) <strong>\\(-7+24i\\)</strong>, <strong>25</strong>.</p>",
    "familj": "proc_complex_konjugat_abs_1"
  },
  {
    "id": "4.121",
    "kap": 4,
    "omr": "komplexa_talplanet",
    "kurs": [
      "2c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Ange koordinaterna \\((a,b)\\) i det komplexa talplanet.</p><p>a) \\(z=4+2i\\)<br>b) \\(z=-3+5i\\)<br>c) \\(z=-6-i\\)<br>d) \\(z=7\\)</p>",
    "s": "<p><strong>Metod:</strong> Talet \\(z=a+bi\\) motsvarar punkten \\((a,b)\\): realdelen ger x-koordinaten och koefficienten framför \\(i\\) ger y-koordinaten.</p><p>a) \\(4+2i\\Rightarrow\\boxed{(4,2)}\\).</p><p>b) \\(-3+5i\\Rightarrow\\boxed{(-3,5)}\\).</p><p>c) \\(-6-i=-6+(-1)i\\Rightarrow\\boxed{(-6,-1)}\\).</p><p>d) \\(7=7+0i\\Rightarrow\\boxed{(7,0)}\\).</p>",
    "familj": "proc_complex_plan_koordinater"
  }
];
