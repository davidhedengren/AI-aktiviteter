/* uppgifter2.js — Fysik 2. Uppgiftsbank. */

window.BANK2 = [
{
  "id": "1.1",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "identifiera hastighets- och accelerationsriktning i en cirkelbana, ur figur, sökt riktningar",
  "poang": "(2/0/0)",
  "t": "<p>En vagn rör sig med konstant fart längs den cirkulära banan i pilens riktning.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Riktningsanalys i cirkelbana\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"220\" cy=\"120\" r=\"78\" fill=\"none\" stroke=\"#9A959C\" stroke-width=\"3\"/><path d=\"M286 77 Q310 91 307 116\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><circle cx=\"287\" cy=\"78\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"287\" y1=\"78\" x2=\"323\" y2=\"135\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"328\" y=\"144\" font-size=\"13\">A</text><line x1=\"287\" y1=\"78\" x2=\"239\" y2=\"103\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"230\" y=\"111\" font-size=\"13\">B</text><line x1=\"287\" y1=\"78\" x2=\"336\" y2=\"42\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"342\" y=\"41\" font-size=\"13\">C</text><text x=\"76\" y=\"36\" font-size=\"13\">Rörelseriktning</text></svg></span><p>Vilken av pilarna A–C visar <strong>hastighetens</strong> riktning och vilken visar <strong>accelerationens</strong> riktning i den markerade punkten?</p>",
  "s": "<p>Hastigheten är tangent till banan: <strong>A</strong>.</p><p>Accelerationen är riktad mot cirkelns centrum: <strong>B</strong>.</p>"
},
{
  "id": "1.2",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "beräkna centripetalacceleration från fart och radie, ur text och figur, sökt acceleration",
  "poang": "(2/0/0)",
  "t": "<p>En gokart kör med farten 14 m/s genom en kurva med radien 28 m.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Gokart på rundad bana\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><path d=\"M70 180 Q210 35 430 155\" fill=\"none\" stroke=\"#777\" stroke-width=\"10\"/><circle cx=\"300\" cy=\"78\" r=\"11\" fill=\"#B43123\"/><line x1=\"300\" y1=\"78\" x2=\"245\" y2=\"111\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"318\" y=\"62\" font-size=\"13\">14 m/s</text><line x1=\"245\" y1=\"111\" x2=\"300\" y2=\"78\" stroke=\"#9A959C\" stroke-width=\"1.4\"/><text x=\"245\" y=\"128\" font-size=\"13\">r = 28 m</text></svg></span><p>Bestäm centripetalaccelerationen.</p>",
  "s": "<p>a<sub>c</sub> = v²/r = 14²/28 = <strong>7.0 m/s²</strong>.</p>"
},
{
  "id": "1.3",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "bestäm tangentiell fart från radie och periodtid, ur figur, sökt fart",
  "poang": "(2/0/0)",
  "t": "<p>En observationsplattform roterar ett varv på 11 s. En person står 5,5 m från rotationsaxeln.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Roterande observationsplattform\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"245\" cy=\"120\" r=\"82\" fill=\"#F4F5F7\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"245\" cy=\"120\" r=\"5\" fill=\"#2B2527\"/><line x1=\"245\" y1=\"120\" x2=\"327\" y2=\"120\" stroke=\"#9A959C\" stroke-width=\"1.5\"/><circle cx=\"327\" cy=\"120\" r=\"10\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M330 84 A42 42 0 0 1 360 112\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2.5\" marker-end=\"url(#arrb)\"/><text x=\"280\" y=\"145\" font-size=\"13\">5,5 m</text><text x=\"73\" y=\"52\" font-size=\"13\">1 varv på 11 s</text></svg></span><p>Vilken fart har personen?</p>",
  "s": "<p>På ett varv färdas personen sträckan 2πr.</p><p>v = 2πr/T = 2π·5,5/11 = <strong>3.14 m/s</strong>.</p>"
},
{
  "id": "1.4",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "beräkna resultantkraft vid cirkelrörelse från massa fart och radie, ur figur, sökt kraft",
  "poang": "(2/0/0)",
  "t": "<p>En träningsboll med massan 0,18 kg rör sig med 7,2 m/s i en cirkel med radien 0,60 m.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Träningsboll i horisontell cirkel\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"255\" cy=\"120\" r=\"70\" fill=\"none\" stroke=\"#9A959C\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"255\" y1=\"120\" x2=\"325\" y2=\"120\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"325\" cy=\"120\" r=\"10\" fill=\"#E8B04F\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"325\" y1=\"120\" x2=\"278\" y2=\"120\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"292\" y=\"106\" font-size=\"12\">F?</text><path d=\"M324 87 Q345 101 348 121\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2.5\" marker-end=\"url(#arrb)\"/><text x=\"342\" y=\"82\" font-size=\"12\">7,2 m/s</text><text x=\"264\" y=\"144\" font-size=\"12\">0,60 m</text></svg></span><p>Hur stor resultantkraft måste verka på bollen?</p>",
  "s": "<p>F = mv²/r = 0,18·7,2²/0,60 = <strong>15.6 N</strong>, riktad mot centrum.</p>"
},
{
  "id": "1.5",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "jämföra centripetalaccelerationer proportionellt utan numeriska värden, ur figur, sökt förhållande",
  "poang": "(2/0/0)",
  "t": "<p>Två små vagnar A och B kör med samma fart. Banas radie är r för A och 2r för B.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Jämförelse av två cirkelbanor\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"145\" cy=\"122\" r=\"55\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"3\"/><circle cx=\"355\" cy=\"122\" r=\"85\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"200\" cy=\"122\" r=\"7\" fill=\"#2A5D9E\"/><circle cx=\"440\" cy=\"122\" r=\"7\" fill=\"#B43123\"/><text x=\"145\" y=\"205\" text-anchor=\"middle\" font-size=\"13\">A: r</text><text x=\"355\" y=\"220\" text-anchor=\"middle\" font-size=\"13\">B: 2r</text><text x=\"250\" y=\"34\" text-anchor=\"middle\" font-size=\"13\">samma fart v</text></svg></span><p>Hur förhåller sig deras centripetalaccelerationer till varandra?</p>",
  "s": "<p>a<sub>c</sub> = v²/r. När radien fördubblas halveras accelerationen.</p><p><strong>A har dubbelt så stor centripetalacceleration som B.</strong></p>"
},
{
  "id": "1.6",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "bestäm radie baklänges från fart och centripetalacceleration, ur mätdata, sökt radie",
  "poang": "(2/0/0)",
  "t": "<p>En rörelsesensor mäter farten 9,0 m/s och centripetalaccelerationen 3,6 m/s² när en robot följer en rundad bana.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Kurvradie bestäms från mätdata\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><path d=\"M65 175 Q210 40 435 160\" fill=\"none\" stroke=\"#777\" stroke-width=\"8\"/><circle cx=\"282\" cy=\"75\" r=\"10\" fill=\"#B43123\"/><line x1=\"282\" y1=\"75\" x2=\"338\" y2=\"56\" stroke=\"#2A5D9E\" stroke-width=\"2.5\" marker-end=\"url(#arrb)\"/><text x=\"332\" y=\"44\" font-size=\"12\">9,0 m/s</text><line x1=\"282\" y1=\"75\" x2=\"236\" y2=\"111\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"173\" y=\"122\" font-size=\"12\">a = 3,6 m/s²</text><text x=\"242\" y=\"147\" font-size=\"12\">r = ?</text></svg></span><p>Bestäm banans radie.</p>",
  "s": "<p>r = v²/a<sub>c</sub> = 9,0²/3,6 = <strong>22.5 m</strong>.</p>"
},
{
  "id": "1.7",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "identifiera vilken verklig kraft som ger centripetalresultanten i en plan bilkurva, begreppsresonemang",
  "poang": "(2/0/0)",
  "t": "<p>En bil kör med konstant fart genom en plan kurva utan att sladda.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Bil i plan kurva\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><rect x=\"85\" y=\"48\" width=\"330\" height=\"130\" rx=\"65\" fill=\"#EDEEF1\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M115 115 Q250 52 385 115 Q250 178 115 115\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-dasharray=\"8 7\"/><rect x=\"295\" y=\"91\" width=\"34\" height=\"20\" rx=\"4\" fill=\"#B43123\" transform=\"rotate(22 312 101)\"/><line x1=\"312\" y1=\"101\" x2=\"260\" y2=\"122\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"192\" y=\"142\" font-size=\"12\">mot kurvans centrum</text></svg></span><p>Vilken kraft ger den horisontella resultant som håller bilen kvar i kurvan?</p>",
  "s": "<p>Det är den <strong>statiska friktionskraften mellan däcken och vägen</strong>. ”Centripetalkraft” är namnet på resultanten mot centrum, inte en extra kraft.</p>"
},
{
  "id": "1.8",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "bestäm rotationsfrekvens och varvtal från tangentiell fart och radie, ur teknisk situation",
  "poang": "(2/0/0)",
  "t": "<p>Kanten på en slipsten med radien 0,32 m rör sig med 6,4 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Roterande slipsten\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"250\" cy=\"118\" r=\"72\" fill=\"#F4F5F7\" stroke=\"#2B2527\" stroke-width=\"3\"/><circle cx=\"250\" cy=\"118\" r=\"7\" fill=\"#2B2527\"/><line x1=\"250\" y1=\"118\" x2=\"322\" y2=\"118\" stroke=\"#9A959C\"/><text x=\"274\" y=\"139\" font-size=\"12\">0,32 m</text><path d=\"M304 68 A72 72 0 0 1 330 110\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><line x1=\"322\" y1=\"118\" x2=\"322\" y2=\"64\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"334\" y=\"76\" font-size=\"12\">6,4 m/s</text></svg></span><p>Bestäm rotationsfrekvensen i Hz och varvtalet i varv/minut.</p>",
  "s": "<p>v = 2πrf ⇒ f = v/(2πr) = <strong>3.18 Hz</strong>.</p><p>Varvtal = 60f = <strong>191 varv/min</strong>.</p>"
},
{
  "id": "1.9",
  "kap": 1,
  "omr": "cirkel",
  "niva": "C",
  "typ": "analysera krafter i toppen av en vertikal cirkelbåge och bestäm normalkraft, ur figur",
  "poang": "(1/2/0)",
  "t": "<p>En bil med massan 1450 kg passerar ett brokrön med farten 24 m/s. Krökningsradien är 85 m.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Bil över brokrön\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><path d=\"M45 178 Q250 35 455 178\" fill=\"none\" stroke=\"#777\" stroke-width=\"12\"/><rect x=\"229\" y=\"61\" width=\"42\" height=\"22\" rx=\"4\" fill=\"#B43123\"/><circle cx=\"239\" cy=\"85\" r=\"6\"/><circle cx=\"262\" cy=\"85\" r=\"6\"/><line x1=\"250\" y1=\"72\" x2=\"250\" y2=\"132\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"260\" y=\"126\" font-size=\"12\">mg</text><line x1=\"250\" y1=\"72\" x2=\"250\" y2=\"35\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"260\" y=\"43\" font-size=\"12\">N</text><text x=\"310\" y=\"150\" font-size=\"12\">r = 85 m</text></svg></span><p>Bestäm normalkraften från vägen på bilen.</p>",
  "s": "<p>Mot centrum är nedåt. Därför gäller mg − N = mv²/r.</p><p>N = mg − mv²/r = <strong>4413 N ≈ 4.4 kN</strong>.</p>"
},
{
  "id": "1.10",
  "kap": 1,
  "omr": "cirkel",
  "niva": "C",
  "typ": "tolka upplevd tyngd via normalkraft i dalbotten, flera krafter och centripetalvillkor",
  "poang": "(1/2/0)",
  "t": "<p>En passagerare med massan 65 kg sitter i en vagn som passerar botten av en dal med farten 18 m/s. Radien är 24 m.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Passagerare i dalbotten\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><path d=\"M50 60 Q250 205 450 60\" fill=\"none\" stroke=\"#777\" stroke-width=\"12\"/><circle cx=\"250\" cy=\"178\" r=\"11\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"250\" y1=\"178\" x2=\"250\" y2=\"120\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"262\" y=\"132\" font-size=\"12\">N</text><line x1=\"250\" y1=\"178\" x2=\"250\" y2=\"215\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"260\" y=\"218\" font-size=\"12\">mg</text><text x=\"335\" y=\"174\" font-size=\"12\">r = 24 m</text></svg></span><p>Hur stor kraft från sätet verkar på passageraren, och hur många gånger den vanliga tyngden motsvarar det?</p>",
  "s": "<p>N − mg = mv²/r ⇒ N = mg + mv²/r = <strong>1516 N</strong>.</p><p>N/(mg) = <strong>2.37</strong>. Passageraren belastas alltså av cirka <strong>2.4 g</strong>.</p>"
},
{
  "id": "1.11",
  "kap": 1,
  "omr": "cirkel",
  "niva": "C",
  "typ": "bestäm maximal kurvhastighet när statisk friktion begränsar centripetalkraften, modellering av kraftgräns",
  "poang": "(1/2/0)",
  "t": "<p>På en plan testbana är kurvradien 42 m och friktionstalet mellan däck och asfalt 0,58.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Friktionsgräns i kurva\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><rect x=\"35\" y=\"35\" width=\"430\" height=\"155\" rx=\"76\" fill=\"#EDEEF1\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M80 112 Q250 48 420 112\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-dasharray=\"9 8\"/><rect x=\"318\" y=\"84\" width=\"38\" height=\"22\" rx=\"4\" fill=\"#B43123\" transform=\"rotate(20 337 95)\"/><line x1=\"337\" y1=\"95\" x2=\"273\" y2=\"116\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"194\" y=\"137\" font-size=\"12\">friktion</text><text x=\"76\" y=\"174\" font-size=\"12\">μ = 0,58</text><text x=\"345\" y=\"165\" font-size=\"12\">r = 42 m</text></svg></span><p>Bestäm den största fart en bil kan ha utan att börja glida.</p>",
  "s": "<p>Vid gränsen är friktionskraften μmg och hela den används som centripetalkraft:</p><p>μmg = mv²/r ⇒ v = √(μgr) = <strong>15.5 m/s = 56 km/h</strong>.</p>"
},
{
  "id": "1.12",
  "kap": 1,
  "omr": "cirkel",
  "niva": "C",
  "typ": "bestäm konisk pendels vinkel och fart från periodtid och snörlängd, härleda via kraftkomponenter",
  "poang": "(1/2/0)",
  "t": "<p>En liten lampa sitter i ett 1,20 m långt snöre och rör sig som en konisk pendel. Ett varv tar 1,85 s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Konisk pendel\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"250\" y1=\"28\" x2=\"250\" y2=\"105\" stroke=\"#9A959C\" stroke-dasharray=\"5 4\"/><line x1=\"250\" y1=\"28\" x2=\"340\" y2=\"125\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><circle cx=\"340\" cy=\"125\" r=\"11\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><ellipse cx=\"250\" cy=\"125\" rx=\"90\" ry=\"28\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><path d=\"M250 62 A34 34 0 0 1 274 74\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"279\" y=\"70\" font-size=\"12\">θ</text><text x=\"295\" y=\"72\" font-size=\"12\">L = 1,20 m</text><text x=\"70\" y=\"195\" font-size=\"12\">T = 1,85 s</text></svg></span><p>Bestäm vinkeln θ mot lodlinjen och lampans fart.</p>",
  "s": "<p>För en konisk pendel ger kraftkomponenterna tanθ = v²/(rg), medan r = Lsinθ och v = 2πr/T. Detta kan förenklas till cosθ = gT²/(4π²L).</p><p>cosθ = 0.709 ⇒ θ = <strong>44.8°</strong>.</p><p>r = Lsinθ = 0.846 m och v = 2πr/T = <strong>2.87 m/s</strong>.</p>"
},
{
  "id": "1.13",
  "kap": 1,
  "omr": "cirkel",
  "niva": "C",
  "typ": "kombinera gravitationskraft med cirkelrörelse för att bestämma omloppstid runt liten himlakropp",
  "poang": "(1/2/0)",
  "t": "<p>En sond ska gå i cirkulär bana 140 km över en asteroid. Asteroidens radie är 260 km och massan 8,0·10²⁰ kg.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Sond i bana runt asteroid\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"235\" cy=\"120\" r=\"45\" fill=\"#9A959C\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"235\" cy=\"120\" r=\"92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\" stroke-dasharray=\"7 5\"/><rect x=\"321\" y=\"111\" width=\"18\" height=\"12\" fill=\"#B43123\"/><line x1=\"235\" y1=\"120\" x2=\"327\" y2=\"120\" stroke=\"#9A959C\" stroke-width=\"1.3\"/><text x=\"251\" y=\"106\" font-size=\"11\">R = 260 km</text><text x=\"340\" y=\"145\" font-size=\"11\">h = 140 km</text><text x=\"68\" y=\"43\" font-size=\"12\">M = 8,0·10²⁰ kg</text></svg></span><p>Bestäm sondens omloppstid. Använd G = 6,67·10⁻¹¹ N·m²/kg².</p>",
  "s": "<p>Banradien är r = (260+140) km = 4,00·10⁵ m.</p><p>GMm/r² = mv²/r och v = 2πr/T ger T = 2π√(r³/GM).</p><p>T = <strong>1.91 h</strong>.</p>"
},
{
  "id": "1.14",
  "kap": 1,
  "omr": "cirkel",
  "niva": "A",
  "typ": "kombinera kontaktvillkor i loop med energibevarande för att bestämma minsta starthöjd, obekant flerstegsproblem",
  "poang": "(0/1/3)",
  "t": "<p>En liten vagn släpps från vila på en friktionsfri bana och ska gå runt en vertikal loop med radien 5,0 m.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Vagn som rullar in i vertikal loop\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><path d=\"M45 190 H150\" stroke=\"#2B2527\" stroke-width=\"4\"/><line x1=\"150\" y1=\"190\" x2=\"280\" y2=\"190\" stroke=\"#777\" stroke-width=\"8\"/><circle cx=\"280\" cy=\"120\" r=\"70\" fill=\"none\" stroke=\"#777\" stroke-width=\"8\"/><path d=\"M45 76 L145 190\" stroke=\"#777\" stroke-width=\"8\"/><circle cx=\"65\" cy=\"98\" r=\"9\" fill=\"#B43123\"/><line x1=\"395\" y1=\"190\" x2=\"395\" y2=\"48\" stroke=\"#9A959C\" stroke-width=\"1.5\"/><text x=\"405\" y=\"124\" font-size=\"12\">2r</text><text x=\"80\" y=\"68\" font-size=\"12\">släpps från vila</text><text x=\"270\" y=\"215\" font-size=\"12\">r = 5,0 m</text></svg></span><p>Hur högt över loopens lägsta punkt måste vagnen minst starta för att precis behålla kontakten hela vägen?</p>",
  "s": "<p>I loopens topp är minsta möjliga normalkraft N = 0. Då gäller mg = mv²/r ⇒ v² = gr.</p><p>Energibevarande från starthöjden h till toppen:</p><p>mgh = mg·2r + ½m(gr).</p><p>h = 2r + r/2 = 2,5r = <strong>12.5 m</strong>.</p><p>Det avgörande är alltså inte bara att nå toppen, utan att fortfarande ha tillräcklig fart där för att banan ska kunna böja rörelsen.</p>"
},
{
  "id": "1.15",
  "kap": 1,
  "omr": "cirkel",
  "niva": "A",
  "typ": "modellera artificiell tyngd i roterande habitat och analysera skillnad mellan huvud och fötter, cirkelrörelse i obekant situation",
  "poang": "(0/1/3)",
  "t": "<p>Ett ringformat rymdhabitat har radien 120 m. Rotationens hastighet ska väljas så att en person vid golvet upplever en normalkraft motsvarande 0,90g.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Roterande rymdhabitat\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><circle cx=\"245\" cy=\"120\" r=\"95\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"9\"/><circle cx=\"245\" cy=\"120\" r=\"7\" fill=\"#2B2527\"/><line x1=\"245\" y1=\"120\" x2=\"340\" y2=\"120\" stroke=\"#9A959C\"/><text x=\"273\" y=\"108\" font-size=\"12\">120 m</text><rect x=\"331\" y=\"92\" width=\"16\" height=\"28\" rx=\"4\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><circle cx=\"339\" cy=\"86\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M160 44 A98 98 0 0 1 230 24\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"64\" y=\"201\" font-size=\"12\">personens längd 1,8 m</text></svg></span><ol><li>Bestäm habitatets varvtal i varv/minut.</li><li>En person är 1,8 m lång. Hur stor centripetalacceleration får huvudet, och hur många procent mindre är den än vid fötterna?</li></ol>",
  "s": "<p>a) Vid golvet ska a = ω²R = 0,90g. Då ω = √(0,90g/R) = 0.271 rad/s.</p><p>Varvtalet blir n = ω/(2π)·60 = <strong>2.59 varv/min</strong>.</p><p>b) Huvudet ligger på radien 118,2 m. a<sub>huvud</sub> = ω²·118,2 = <strong>8.71 m/s²</strong>.</p><p>Huvudets acceleration är <strong>1.5 % mindre</strong> än vid fötterna. Det visar att ”tyngden” i ett roterande habitat inte är helt jämn över kroppen.</p>"
},
{
  "id": "1.16",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "horisontellt kast från given höjd, bestäm falltid och horisontell räckvidd",
  "poang": "(2/0/0)",
  "t": "<p>En stålkula rullar horisontellt från ett 1,6 m högt bord med farten 4,2 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Kula som lämnar ett bord horisontellt\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><rect x=\"55\" y=\"78\" width=\"155\" height=\"12\" fill=\"#9A959C\"/><line x1=\"70\" y1=\"90\" x2=\"70\" y2=\"195\" stroke=\"#777\" stroke-width=\"6\"/><circle cx=\"202\" cy=\"70\" r=\"9\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"202\" y1=\"70\" x2=\"267\" y2=\"70\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"214\" y=\"58\" font-size=\"12\">4,2 m/s</text><path d=\"M202 70 Q300 78 350 195\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/><line x1=\"45\" y1=\"78\" x2=\"45\" y2=\"195\" stroke=\"#9A959C\"/><text x=\"18\" y=\"140\" font-size=\"12\">1,6 m</text></svg></span><p>Hur långt från bordskanten träffar kulan golvet?</p>",
  "s": "<p>Falltiden bestäms av höjden: t = √(2h/g) = <strong>0.571 s</strong>.</p><p>x = v<sub>x</sub>t = 4,2·0.571 = <strong>2.40 m</strong>.</p>"
},
{
  "id": "1.17",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "dela upp begynnelsehastighet i horisontell och vertikal komponent, ur vektorfigur",
  "poang": "(2/0/0)",
  "t": "<p>En handboll lämnar handen med farten 21 m/s i vinkeln 37° över horisontalplanet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Uppdelning av kasthastighet\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"115\" cy=\"177\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"115\" y1=\"177\" x2=\"215\" y2=\"102\" stroke=\"#2B2527\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><line x1=\"115\" y1=\"177\" x2=\"215\" y2=\"177\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><line x1=\"215\" y1=\"177\" x2=\"215\" y2=\"102\" stroke=\"#B43123\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><path d=\"M155 177 A40 40 0 0 0 147 153\" fill=\"none\" stroke=\"#777\"/><text x=\"158\" y=\"159\" font-size=\"12\">37°</text><text x=\"188\" y=\"93\" font-size=\"12\">21 m/s</text><text x=\"160\" y=\"194\" font-size=\"12\">vₓ</text><text x=\"224\" y=\"142\" font-size=\"12\">vᵧ</text></svg></span><p>Bestäm begynnelsehastighetens horisontella och vertikala komponent.</p>",
  "s": "<p>v<sub>0x</sub> = v₀cos37° = <strong>16.8 m/s</strong>.</p><p>v<sub>0y</sub> = v₀sin37° = <strong>12.6 m/s</strong>.</p>"
},
{
  "id": "1.18",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "bestäm tid till vändpunkt från vertikal begynnelsekomponent, rörelse i y-led",
  "poang": "(2/0/0)",
  "t": "<p>En boll har den vertikala begynnelsekomponenten 13 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Tid till högsta punkten\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"175\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M110 175 Q240 35 365 170\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/><circle cx=\"238\" cy=\"69\" r=\"6\" fill=\"#B43123\"/><line x1=\"110\" y1=\"175\" x2=\"110\" y2=\"103\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"120\" y=\"112\" font-size=\"12\">v₀y = 13 m/s</text><text x=\"218\" y=\"48\" font-size=\"12\">vᵧ = 0</text></svg></span><p>Hur lång tid efter kastet når den sin högsta punkt?</p>",
  "s": "<p>I högsta punkten är v<sub>y</sub> = 0.</p><p>0 = 13 − gt ⇒ t = 13/9,82 = <strong>1.32 s</strong>.</p>"
},
{
  "id": "1.19",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "bestäm maximal höjd för snett kast från begynnelsefart och vinkel",
  "poang": "(2/0/0)",
  "t": "<p>En tennisboll kastas från marknivå med farten 17 m/s i vinkeln 54°.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Bestäm maximal kasthöjd\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"177\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M90 177 Q245 32 400 177\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><line x1=\"90\" y1=\"177\" x2=\"154\" y2=\"90\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"149\" y=\"82\" font-size=\"12\">17 m/s</text><text x=\"115\" y=\"162\" font-size=\"12\">54°</text><line x1=\"245\" y1=\"177\" x2=\"245\" y2=\"72\" stroke=\"#9A959C\" stroke-dasharray=\"4 4\"/><text x=\"253\" y=\"125\" font-size=\"12\">hmax?</text></svg></span><p>Hur högt över utkastpunkten når bollen?</p>",
  "s": "<p>v<sub>0y</sub> = 17sin54° = 13.75 m/s.</p><p>Vid toppen är v<sub>y</sub>=0, så h = v<sub>0y</sub>²/(2g) = <strong>9.63 m</strong>.</p>"
},
{
  "id": "1.20",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "bestäm total flygtid när start- och landningshöjd är samma, använda symmetri i vertikalrörelsen",
  "poang": "(2/0/0)",
  "t": "<p>En frisbee kastas med 15 m/s i vinkeln 28° och landar på samma höjd som den kastades från.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Flygtid för ett snett kast\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"177\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M90 177 Q250 65 410 177\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><line x1=\"90\" y1=\"177\" x2=\"153\" y2=\"143\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"125\" y=\"132\" font-size=\"12\">15 m/s</text><text x=\"112\" y=\"174\" font-size=\"12\">28°</text><circle cx=\"410\" cy=\"177\" r=\"6\" fill=\"#2B2527\"/><text x=\"203\" y=\"210\" font-size=\"12\">samma höjd vid start och landning</text></svg></span><p>Bestäm flygtiden. Bortse från luftmotstånd.</p>",
  "s": "<p>v<sub>0y</sub> = 15sin28°. Tiden upp är v<sub>0y</sub>/g och nedtiden är lika lång.</p><p>T = 2v<sub>0y</sub>/g = <strong>1.43 s</strong>.</p>"
},
{
  "id": "1.21",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "bestäm kastlängd på samma höjd från fart och vinkel, kombinera flygtid och horisontell rörelse",
  "poang": "(2/0/0)",
  "t": "<p>En boll kastas från marknivå med 19 m/s i vinkeln 41° och landar på marken igen.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Kastlängd på plan mark\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"65\" cy=\"177\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M65 177 Q245 34 430 177\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><line x1=\"65\" y1=\"177\" x2=\"132\" y2=\"118\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"121\" y=\"108\" font-size=\"12\">19 m/s</text><text x=\"89\" y=\"165\" font-size=\"12\">41°</text><line x1=\"65\" y1=\"205\" x2=\"430\" y2=\"205\" stroke=\"#9A959C\"/><text x=\"247\" y=\"222\" text-anchor=\"middle\" font-size=\"12\">R = ?</text></svg></span><p>Bestäm kastlängden.</p>",
  "s": "<p>R = v₀²sin(2θ)/g = 19²sin82°/9,82 = <strong>36.4 m</strong>.</p>"
},
{
  "id": "1.22",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "bestäm x- och y-position efter given tid i ett snett kast, behandla rörelsekomponenter separat",
  "poang": "(2/0/0)",
  "t": "<p>En boll kastas från marken med 22 m/s i vinkeln 36°.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Position efter en given tid\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"75\" cy=\"177\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M75 177 Q240 35 430 170\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/><circle cx=\"260\" cy=\"78\" r=\"7\" fill=\"#B43123\"/><line x1=\"260\" y1=\"78\" x2=\"260\" y2=\"195\" stroke=\"#9A959C\" stroke-dasharray=\"4 4\"/><line x1=\"75\" y1=\"210\" x2=\"260\" y2=\"210\" stroke=\"#9A959C\"/><text x=\"168\" y=\"226\" text-anchor=\"middle\" font-size=\"12\">x</text><text x=\"268\" y=\"135\" font-size=\"12\">y</text><text x=\"96\" y=\"146\" font-size=\"12\">22 m/s, 36°</text></svg></span><p>Var befinner sig bollen 1,4 s efter kastet? Ange x- och y-koordinat relativt kastpunkten.</p>",
  "s": "<p>x = v₀cosθ·t = <strong>24.9 m</strong>.</p><p>y = v₀sinθ·t − gt²/2 = <strong>8.5 m</strong>.</p>"
},
{
  "id": "1.23",
  "kap": 1,
  "omr": "kast",
  "niva": "E",
  "typ": "bestäm hastighetens storlek och riktning vid viss tid genom att kombinera komponenter",
  "poang": "(2/0/0)",
  "t": "<p>En boll kastas med 20 m/s i vinkeln 50°. Bestäm fart och rörelseriktning 2,1 s efter kastet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Hastighet under ett kast\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M70 177 Q230 35 410 177\" fill=\"none\" stroke=\"#9A959C\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><circle cx=\"286\" cy=\"82\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"286\" y1=\"82\" x2=\"349\" y2=\"103\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><line x1=\"286\" y1=\"82\" x2=\"349\" y2=\"82\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"349\" y1=\"82\" x2=\"349\" y2=\"103\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"352\" y=\"116\" font-size=\"12\">v efter 2,1 s</text></svg></span>",
  "s": "<p>v<sub>x</sub> = 20cos50° = 12.86 m/s.</p><p>v<sub>y</sub> = 20sin50° − 9,82·2,1 = -5.30 m/s.</p><p>Farten blir <strong>13.9 m/s</strong>. Vinkeln är <strong>22.4° under horisontalplanet</strong>.</p>"
},
{
  "id": "1.24",
  "kap": 1,
  "omr": "kast",
  "niva": "C",
  "typ": "bestäm okänd utgångshastighet för att passera given målpunkt vid bestämd kastvinkel, invertera kastbanans ekvation",
  "poang": "(1/2/0)",
  "t": "<p>En basketboll släpps 2,0 m över golvet i vinkeln 47°. Ringens centrum är 6,8 m bort och 3,05 m över golvet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Basketkast med okänd utgångshastighet\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"70\" cy=\"145\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"70\" y1=\"145\" x2=\"130\" y2=\"91\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"95\" y=\"117\" font-size=\"12\">47°</text><path d=\"M70 145 Q220 32 365 90\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><line x1=\"365\" y1=\"195\" x2=\"365\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"4\"/><ellipse cx=\"365\" cy=\"90\" rx=\"24\" ry=\"5\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"380\" y=\"104\" font-size=\"12\">3,05 m</text><line x1=\"70\" y1=\"213\" x2=\"365\" y2=\"213\" stroke=\"#9A959C\"/><text x=\"218\" y=\"228\" text-anchor=\"middle\" font-size=\"12\">6,8 m</text><text x=\"38\" y=\"153\" font-size=\"12\">2,0 m</text></svg></span><p>Vilken utgångshastighet krävs för att bollen ska passera ringens centrum?</p>",
  "s": "<p>Kastbanan skrivs y = y₀ + x tanθ − gx²/(2v₀²cos²θ).</p><p>Med x=6,8 m, y₀=2,0 m, y=3,05 m och θ=47° fås v₀ = <strong>8.8 m/s</strong>.</p>"
},
{
  "id": "1.25",
  "kap": 1,
  "omr": "kast",
  "niva": "C",
  "typ": "snett kast mellan olika höjder, lös flygtid med andragradsekvation och bestäm nedslagspunkt och slutfart",
  "poang": "(1/2/0)",
  "t": "<p>En räddningslina skjuts från en 28 m hög klippkant med 23 m/s i vinkeln 30°.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Snett kast från klippa\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M45 72 H145 V195\" fill=\"#9A959C\"/><circle cx=\"135\" cy=\"63\" r=\"8\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"135\" y1=\"63\" x2=\"203\" y2=\"24\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"177\" y=\"20\" font-size=\"12\">23 m/s</text><text x=\"160\" y=\"58\" font-size=\"12\">30°</text><path d=\"M135 63 Q260 4 420 195\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><line x1=\"25\" y1=\"72\" x2=\"25\" y2=\"195\" stroke=\"#9A959C\"/><text x=\"3\" y=\"139\" font-size=\"12\">28 m</text></svg></span><p>Bestäm hur långt från klippfoten projektilen landar och farten precis före nedslaget.</p>",
  "s": "<p>Vertikalt: 0 = 28 + 11.50t − 4,91t². Den positiva lösningen är t = <strong>3.83 s</strong>.</p><p>x = v<sub>x</sub>t = 19.92·3.83 = <strong>76.3 m</strong>.</p><p>v<sub>y</sub> = 11.50 − 9,82·3.83 = -26.1 m/s. Slutfarten blir <strong>32.8 m/s</strong>.</p>"
},
{
  "id": "1.26",
  "kap": 1,
  "omr": "kast",
  "niva": "C",
  "typ": "bestäm träffhöjd och hastighetsriktning vid en lodrät vägg från kastdata och horisontellt avstånd",
  "poang": "(1/2/0)",
  "t": "<p>En boll kastas med 24 m/s i vinkeln 40° mot en lodrät vägg 26 m bort.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Projektil träffar lodrät vägg\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"177\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"60\" y1=\"177\" x2=\"125\" y2=\"122\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"100\" y=\"112\" font-size=\"12\">24 m/s</text><text x=\"83\" y=\"169\" font-size=\"12\">40°</text><path d=\"M60 177 Q225 38 390 124\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><rect x=\"390\" y=\"45\" width=\"12\" height=\"150\" fill=\"#9A959C\"/><circle cx=\"390\" cy=\"124\" r=\"6\" fill=\"#B43123\"/><line x1=\"60\" y1=\"214\" x2=\"390\" y2=\"214\" stroke=\"#9A959C\"/><text x=\"225\" y=\"228\" text-anchor=\"middle\" font-size=\"12\">26 m</text></svg></span><p>På vilken höjd träffar bollen väggen, och är den på väg upp eller ned? Ange även hastighetens vinkel mot horisontalplanet.</p>",
  "s": "<p>Tiden till väggen är t = x/v<sub>x</sub> = <strong>1.41 s</strong>.</p><p>Höjden blir y = <strong>12.0 m</strong>.</p><p>v<sub>y</sub> = 1.5 m/s, alltså är bollen på väg <strong>ned</strong>. Hastigheten lutar <strong>4.8° nedåt</strong> från horisontalplanet.</p>"
},
{
  "id": "1.27",
  "kap": 1,
  "omr": "kast",
  "niva": "C",
  "typ": "bestäm okänd begynnelsehastighet och kastvinkel ur videodata vid två tidpunkter, modellera komponentrörelse",
  "poang": "(1/2/0)",
  "t": "<p>I en videomätning sätts kastpunkten till (0,0). Efter 0,50 s är bollen vid (4.0 m, 4.27 m) och efter 1,00 s vid (8.0 m, 6.09 m).</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Videomätning av kastbana\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"70\" cy=\"177\" r=\"6\" fill=\"#2B2527\"/><circle cx=\"190\" cy=\"105\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><circle cx=\"310\" cy=\"93\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><text x=\"171\" y=\"88\" font-size=\"11\">t = 0,50 s</text><text x=\"291\" y=\"76\" font-size=\"11\">t = 1,00 s</text><line x1=\"70\" y1=\"205\" x2=\"190\" y2=\"205\" stroke=\"#9A959C\"/><text x=\"130\" y=\"220\" text-anchor=\"middle\" font-size=\"11\">x = 4.0 m</text><line x1=\"190\" y1=\"205\" x2=\"310\" y2=\"205\" stroke=\"#9A959C\"/><text x=\"250\" y=\"220\" text-anchor=\"middle\" font-size=\"11\">ytterligare 4.0 m</text><text x=\"355\" y=\"112\" font-size=\"11\">y₁=4.27 m</text><text x=\"355\" y=\"132\" font-size=\"11\">y₂=6.09 m</text></svg></span><p>Bestäm bollens begynnelsefart och kastvinkel. Bortse från luftmotstånd.</p>",
  "s": "<p>Horisontellt är farten konstant: v<sub>0x</sub> = 8.0/1,00 = <strong>8.0 m/s</strong>.</p><p>Vertikalt: y = v<sub>0y</sub>t − gt²/2. Med t=1,00 s fås v<sub>0y</sub> = 6.09+4,91 = <strong>11.0 m/s</strong>.</p><p>v₀ = √(8²+11²) = <strong>13.6 m/s</strong> och θ = arctan(11/8) = <strong>54.0°</strong>.</p>"
},
{
  "id": "1.28",
  "kap": 1,
  "omr": "kast",
  "niva": "C",
  "typ": "bestäm två möjliga kastvinklar för samma räckvidd vid given fart, tolka trigonometriska dubbellösningar",
  "poang": "(1/2/0)",
  "t": "<p>En boll kastas från marknivå med farten 20 m/s och ska landa 30 m bort på samma höjd.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Två kastbanor till samma mål\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"177\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><circle cx=\"410\" cy=\"177\" r=\"7\" fill=\"#2B2527\"/><path d=\"M60 177 Q235 135 410 177\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2.5\"/><path d=\"M60 177 Q235 12 410 177\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><line x1=\"60\" y1=\"210\" x2=\"410\" y2=\"210\" stroke=\"#9A959C\"/><text x=\"235\" y=\"226\" text-anchor=\"middle\" font-size=\"12\">30 m</text><text x=\"220\" y=\"97\" font-size=\"12\">samma v₀ = 20 m/s</text></svg></span><p>Bestäm de två kastvinklar som ger rätt kastlängd.</p>",
  "s": "<p>R = v₀²sin(2θ)/g ⇒ sin(2θ) = Rg/v₀² = 0.737.</p><p>Det ger 2θ = 47.4° eller 132.6°.</p><p>Alltså θ = <strong>23.7°</strong> eller <strong>66.3°</strong>. De två banorna är en låg och en hög kastbana.</p>"
},
{
  "id": "1.29",
  "kap": 1,
  "omr": "kast",
  "niva": "A",
  "typ": "bestäm intervall av utgångshastigheter för att träffa ett rörligt mål, kombinera projektilrörelse med relativ förflyttning och olikheter",
  "poang": "(0/0/3)",
  "t": "<p>En boll kastas i 45° från samma höjd som ett 2,8 m långt lastflak. I kastögonblicket är flakets bakre kant 7,0 m framför kastpunkten. Lastbilen kör bort från kastaren med 5,0 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Kast mot rörligt lastflak\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"177\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"55\" y1=\"177\" x2=\"112\" y2=\"120\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"79\" y=\"142\" font-size=\"12\">45°</text><path d=\"M55 177 Q210 30 365 177\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\"/><rect x=\"320\" y=\"164\" width=\"78\" height=\"24\" fill=\"#C8D7E8\" stroke=\"#2B2527\"/><line x1=\"338\" y1=\"164\" x2=\"338\" y2=\"138\" stroke=\"#2B2527\"/><line x1=\"380\" y1=\"164\" x2=\"380\" y2=\"138\" stroke=\"#2B2527\"/><line x1=\"322\" y1=\"151\" x2=\"397\" y2=\"151\" stroke=\"#2A5D9E\" stroke-width=\"2.5\" marker-end=\"url(#arrb)\"/><text x=\"344\" y=\"142\" font-size=\"11\">5,0 m/s</text><text x=\"321\" y=\"205\" font-size=\"11\">lastflak 2,8 m</text></svg></span><p>Inom vilket intervall måste bollens utgångshastighet ligga för att den ska landa på flaket?</p>",
  "s": "<p>För 45° och samma start- och sluthöjd är flygtiden T = √2v₀/g och bollens räckvidd R = v₀²/g.</p><p>Under flygtiden ligger flaket mellan x = 7,0+5,0T och x = 9,8+5,0T.</p><p>Kravet 7,0+5T ≤ R ≤ 9,8+5T ger efter insättning <strong>12.55 m/s ≤ v₀ ≤ 13.96 m/s</strong>.</p>"
},
{
  "id": "1.30",
  "kap": 1,
  "omr": "kast",
  "niva": "A",
  "typ": "bestäm minsta utgångshastighet under flera geometriska villkor, jämför hinderkrav och räckviddskrav för projektilbana",
  "poang": "(0/1/3)",
  "t": "<p>En motorcykel lämnar en ramp 0,90 m över marken i vinkeln 27°. Ett 2,4 m högt hinder står 10 m från rampkanten. Landningszonen börjar 18 m från rampkanten.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" role=\"img\" aria-label=\"Motorcykelkast över hinder till landningszon\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker><marker id=\"arrb\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2A5D9E\"/></marker></defs><line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M40 175 L105 138\" stroke=\"#777\" stroke-width=\"10\"/><circle cx=\"105\" cy=\"134\" r=\"8\" fill=\"#B43123\"/><line x1=\"105\" y1=\"134\" x2=\"170\" y2=\"103\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arrb)\"/><text x=\"123\" y=\"124\" font-size=\"12\">27°</text><rect x=\"265\" y=\"112\" width=\"10\" height=\"83\" fill=\"#9A959C\"/><text x=\"250\" y=\"103\" font-size=\"11\">2,4 m</text><rect x=\"390\" y=\"188\" width=\"75\" height=\"7\" fill=\"#A6B88C\"/><text x=\"395\" y=\"179\" font-size=\"11\">landning från 18 m</text><path d=\"M105 134 Q250 28 425 190\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/></svg></span><p>Bestäm den minsta utgångshastighet som både klarar hindret och når landningszonen. Bortse från luftmotstånd.</p>",
  "s": "<p>Kastbanan är y = y₀ + x tanθ − gx²/(2v₀²cos²θ).</p><p>Villkoret y(10) ≥ 2,4 ger v₀ ≥ <strong>13.1 m/s</strong>.</p><p>Villkoret y(18) ≥ 0 ger v₀ ≥ <strong>14.1 m/s</strong>.</p><p>Det strängaste villkoret styr, alltså v₀,min = <strong>14.1 m/s</strong>.</p><p>Med denna fart är höjden vid hindret 2.89 m och nedslaget sker vid x ≈ 18.0 m, så båda kraven är precis uppfyllda.</p>"
},
{
  "id": "2.1",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En fjäder med fjäderkonstanten 180 N/m dras ut 4,0 cm från sitt obelastade läge. Bestäm fjäderkraftens storlek.</p>",
  "s": "<p>Hookes lag: F = kx.</p><p>F = 180·0,040 = <strong>7,2 N</strong>.</p>"
},
{
  "id": "2.2",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En massa på 0,32 kg hängs i en vertikal fjäder. När massan är i jämvikt har fjädern förlängts 5,5 cm. Bestäm fjäderkonstanten.</p>",
  "s": "<p>I jämvikt är fjäderkraften lika stor som tyngdkraften: kx = mg.</p><p>k = mg/x = 0,32·9,82/0,055 = <strong>57,1 N/m</strong>.</p>"
},
{
  "id": "2.3",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En fjäder har fjäderkonstanten 75 N/m. Hur mycket förlängs den av en kraft på 6,0 N?</p>",
  "s": "<p>x = F/k = 6,0/75 = 0,080 m.</p><p>Förlängningen är <strong>8,0 cm</strong>.</p>"
},
{
  "id": "2.4",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En fjäder med fjäderkonstanten 240 N/m trycks ihop 6,0 cm. Hur stor elastisk potentiell energi lagras i fjädern?</p>",
  "s": "<p>E = ½kx².</p><p>E = 0,5·240·0,060² = <strong>0,432 J</strong>.</p>"
},
{
  "id": "2.5",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två likadana fjädrar med fjäderkonstanten 100 N/m håller tillsammans en last lodrätt och delar lasten lika. Lasten väger 1,0 kg. Hur mycket förlängs varje fjäder?</p>",
  "s": "<p>Varje fjäder bär halva tyngden: F = mg/2.</p><p>x = F/k = 1,0·9,82/(2·100) = 0,0491 m = <strong>4,91 cm</strong>.</p>"
},
{
  "id": "2.6",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En kula på 0,50 kg hängs i en fjäder. I jämvikt är fjädern 8,0 cm längre än obelastad. Kulan dras sedan ytterligare 4,5 cm nedåt. Bestäm fjäderkonstanten och fjäderkraftens största värde under den efterföljande svängningen.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fjäder med jämviktsläge och neddraget läge\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"170\" y1=\"35\" x2=\"330\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"5\"/><polyline points=\"250,38 235,52 265,66 235,80 265,94 235,108 265,122 250,136\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2\"/><rect x=\"220\" y=\"136\" width=\"60\" height=\"38\" rx=\"5\" fill=\"#E9EDF1\" stroke=\"#2B2527\"/><line x1=\"350\" y1=\"136\" x2=\"350\" y2=\"190\" stroke=\"#8A858E\" stroke-dasharray=\"5 4\"/><text x=\"360\" y=\"154\" font-size=\"12\">jämvikt</text><line x1=\"220\" y1=\"194\" x2=\"280\" y2=\"194\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"290\" y=\"198\" font-size=\"12\">4,5 cm extra</text></svg></span>",
  "s": "<p>I jämvikt: k·0,080 = mg ⇒ k = <strong>61,4 N/m</strong>.</p><p>Fjädern är längst i nedersta vändläget: total förlängning = 0,080 + 0,045 = 0,125 m.</p><p>F_max = k·0,125 = <strong>7,67 N</strong>.</p>"
},
{
  "id": "2.7",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två fjädrar med fjäderkonstanterna 120 N/m och 180 N/m kopplas i serie. De dras tillsammans ut 5,0 cm. Bestäm kraften i fjädrarna och hur mycket var och en förlängs.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två fjädrar i serie\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"80\" y1=\"112\" x2=\"130\" y2=\"112\" stroke=\"#2B2527\" stroke-width=\"4\"/><polyline points=\"130,112 145,96 160,128 175,96 190,128 205,112\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"112\" r=\"5\" fill=\"#2B2527\"/><polyline points=\"220,112 235,96 250,128 265,96 280,128 295,112\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"295\" y1=\"112\" x2=\"410\" y2=\"112\" stroke=\"#2B2527\" stroke-width=\"4\"/><text x=\"168\" y=\"78\" font-size=\"12\">120 N/m</text><text x=\"250\" y=\"78\" font-size=\"12\">180 N/m</text><line x1=\"130\" y1=\"160\" x2=\"295\" y2=\"160\" stroke=\"#B43123\"/><text x=\"212\" y=\"178\" text-anchor=\"middle\" font-size=\"12\">total förlängning 5,0 cm</text></svg></span>",
  "s": "<p>För seriekopplade fjädrar: 1/k_eq = 1/120 + 1/180 ⇒ k_eq = <strong>72 N/m</strong>.</p><p>F = k_eq x = 72·0,050 = <strong>3,6 N</strong>.</p><p>x₁=F/k₁=<strong>3 cm</strong>, x₂=F/k₂=<strong>2 cm</strong>. Summan blir 5,0 cm.</p>"
},
{
  "id": "2.8",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En plattform med massan 0,80 kg hänger i två parallella fjädrar med fjäderkonstanterna 90 N/m och 150 N/m. Bestäm jämviktsförlängningen. Hur stor del av tyngdkraften bär respektive fjäder?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plattform i två parallella fjädrar\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"130\" y1=\"35\" x2=\"370\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"5\"/><polyline points=\"190,38 175,52 205,66 175,80 205,94 190,108\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2\"/><polyline points=\"310,38 295,52 325,66 295,80 325,94 310,108\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2\"/><rect x=\"150\" y=\"108\" width=\"200\" height=\"35\" fill=\"#DCE3E8\" stroke=\"#2B2527\"/><text x=\"190\" y=\"92\" text-anchor=\"middle\" font-size=\"12\">90 N/m</text><text x=\"310\" y=\"92\" text-anchor=\"middle\" font-size=\"12\">150 N/m</text><text x=\"250\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">0,80 kg</text></svg></span>",
  "s": "<p>Parallellt får fjädrarna samma förlängning och k_tot = 90+150 = 240 N/m.</p><p>x = mg/k_tot = 0,80·9,82/240 = <strong>3,27 cm</strong>.</p><p>F₁=k₁x=<strong>2,95 N</strong> och F₂=k₂x=<strong>4,91 N</strong>.</p>"
},
{
  "id": "2.9",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En okänd fjäder testas. När dess längd är 18,0 cm visar kraftmätaren 3,0 N och när längden är 26,0 cm visar den 7,0 N. Fjädern antas följa Hookes lag. Bestäm fjäderkonstanten och fjäderns obelastade längd. Därefter hängs en massa på 0,60 kg i fjädern. Vilken blir fjäderns totala längd i jämvikt?</p>",
  "s": "<p>Hookes lag kan skrivas F = k(L−L₀). Skillnaden mellan mätpunkterna eliminerar L₀.</p><p>k = ΔF/ΔL = 4,0/0,080 = <strong>50 N/m</strong>.</p><p>L₀ = 0,180 − 3,0/50 = <strong>12 cm</strong>.</p><p>Med 0,60 kg blir förlängningen x=mg/k=11,8 cm och totallängden <strong>23,8 cm</strong>.</p>"
},
{
  "id": "2.10",
  "kap": 2,
  "omr": "fjadrar",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En stuntperson med massan 75 kg landar på en fjäderplattform efter ett fritt fall på 0,45 m. Plattformen börjar komprimeras när personen träffar den. Fjädrarna ska vara som mest 22 cm hoptryckta innan personen vänder. Bortse från energiförluster och plattformens massa. Bestäm den sammanlagda fjäderkonstant som krävs och personens största acceleration under inbromsningen.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Stuntlandning på fjäderplattform\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"60\" y1=\"200\" x2=\"440\" y2=\"200\" stroke=\"#777\" stroke-width=\"2\"/><rect x=\"190\" y=\"150\" width=\"120\" height=\"12\" fill=\"#7D8790\" stroke=\"#2B2527\"/><polyline points=\"205,162 195,172 215,182 195,192 205,200\" fill=\"none\" stroke=\"#2B2527\"/><polyline points=\"295,162 285,172 305,182 285,192 295,200\" fill=\"none\" stroke=\"#2B2527\"/><circle cx=\"250\" cy=\"62\" r=\"10\" fill=\"#E0B28A\" stroke=\"#2B2527\"/><line x1=\"250\" y1=\"72\" x2=\"250\" y2=\"112\" stroke=\"#2B2527\" stroke-width=\"3\"/><line x1=\"250\" y1=\"84\" x2=\"230\" y2=\"100\" stroke=\"#2B2527\" stroke-width=\"3\"/><line x1=\"250\" y1=\"84\" x2=\"270\" y2=\"100\" stroke=\"#2B2527\" stroke-width=\"3\"/><line x1=\"250\" y1=\"112\" x2=\"235\" y2=\"138\" stroke=\"#2B2527\" stroke-width=\"3\"/><line x1=\"250\" y1=\"112\" x2=\"265\" y2=\"138\" stroke=\"#2B2527\" stroke-width=\"3\"/><line x1=\"330\" y1=\"62\" x2=\"330\" y2=\"150\" stroke=\"#8A858E\"/><text x=\"338\" y=\"108\" font-size=\"12\">0,45 m</text><text x=\"250\" y=\"180\" text-anchor=\"middle\" font-size=\"12\">max 22 cm kompression</text></svg></span>",
  "s": "<p>Från start till nedersta läget minskar gravitationsenergin med mg(h+x) och blir fjäderenergi.</p><p>mg(h+x)=½kx² ⇒ k=2mg(h+x)/x² = <strong>2,04·10<sup>4</sup> N/m</strong>.</p><p>I nedersta läget är fjäderkraften kx=4486 N uppåt. Resultantkraften är kx−mg, så a=(kx−mg)/m=<strong>50 m/s²</strong> uppåt.</p><p>Maxaccelerationen inträffar vid maximal kompression eftersom fjäderkraften då är störst.</p>"
},
{
  "id": "2.11",
  "kap": 2,
  "omr": "svangningar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En harmonisk svängning har periodtiden 0,80 s. Bestäm frekvensen.</p>",
  "s": "<p>f=1/T=1/0,80=<strong>1,25 Hz</strong>.</p>"
},
{
  "id": "2.12",
  "kap": 2,
  "omr": "svangningar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En vikt svänger harmoniskt med amplituden 6,0 cm. Hur långt färdas vikten under ett helt varv i svängningen, från ett vändläge tillbaka till samma vändläge?</p>",
  "s": "<p>Under en period går vikten från +A till −A och tillbaka: sträckan är 4A.</p><p>s=4·6,0 cm=<strong>24 cm</strong>.</p>"
},
{
  "id": "2.13",
  "kap": 2,
  "omr": "svangningar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En harmonisk oscillator har amplituden 4,5 cm och periodtiden 0,60 s. Bestäm den största hastigheten.</p>",
  "s": "<p>ω=2π/T.</p><p>v_max=ωA=(2π/0,60)·0,045=<strong>0,471 m/s</strong>.</p>"
},
{
  "id": "2.14",
  "kap": 2,
  "omr": "svangningar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En punkt svänger harmoniskt med amplituden 3,0 cm och periodtiden 0,50 s. Bestäm accelerationens största belopp.</p>",
  "s": "<p>a_max=ω²A och ω=2π/T.</p><p>a_max=(2π/0,50)²·0,030=<strong>4,74 m/s²</strong>.</p>"
},
{
  "id": "2.15",
  "kap": 2,
  "omr": "svangningar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En harmonisk oscillator befinner sig i jämviktsläget och rör sig åt höger. Ange då tecken på elongation, hastighet och acceleration.</p>",
  "s": "<p>I jämviktsläget är elongationen <strong>x=0</strong>.</p><p>Hastigheten är positiv och maximal eftersom rörelsen är åt höger.</p><p>Accelerationen är <strong>0</strong>, eftersom återförande kraften är noll i jämviktsläget.</p>"
},
{
  "id": "2.16",
  "kap": 2,
  "omr": "svangningar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En massa på 0,28 kg utför harmoniska svängningar. Ur ett läge-tid-diagram avläses periodtiden 0,84 s och amplituden 5,0 cm. Bestäm fjäderkonstanten och massans största hastighet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Uppmätt läge som funktion av tid\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"40\" y1=\"112\" x2=\"460\" y2=\"112\" stroke=\"#777\"/><line x1=\"50\" y1=\"190\" x2=\"50\" y2=\"30\" stroke=\"#777\"/><polyline points=\"45.0,54.0 47.9,54.2 50.9,54.9 53.8,56.1 56.7,57.7 59.6,59.7 62.6,62.2 65.5,65.1 68.4,68.3 71.4,71.9 74.3,75.8 77.2,80.0 80.1,84.5 83.1,89.2 86.0,94.1 88.9,99.1 91.9,104.2 94.8,109.4 97.7,114.6 100.6,119.8 103.6,124.9 106.5,129.9 109.4,134.8 112.4,139.5 115.3,144.0 118.2,148.2 121.1,152.1 124.1,155.7 127.0,158.9 129.9,161.8 132.9,164.3 135.8,166.3 138.7,167.9 141.6,169.1 144.6,169.8 147.5,170.0 150.4,169.8 153.4,169.1 156.3,167.9 159.2,166.3 162.1,164.3 165.1,161.8 168.0,158.9 170.9,155.7 173.9,152.1 176.8,148.2 179.7,144.0 182.6,139.5 185.6,134.8 188.5,129.9 191.4,124.9 194.4,119.8 197.3,114.6 200.2,109.4 203.1,104.2 206.1,99.1 209.0,94.1 211.9,89.2 214.9,84.5 217.8,80.0 220.7,75.8 223.6,71.9 226.6,68.3 229.5,65.1 232.4,62.2 235.4,59.7 238.3,57.7 241.2,56.1 244.1,54.9 247.1,54.2 250.0,54.0 252.9,54.2 255.9,54.9 258.8,56.1 261.7,57.7 264.6,59.7 267.6,62.2 270.5,65.1 273.4,68.3 276.4,71.9 279.3,75.8 282.2,80.0 285.1,84.5 288.1,89.2 291.0,94.1 293.9,99.1 296.9,104.2 299.8,109.4 302.7,114.6 305.6,119.8 308.6,124.9 311.5,129.9 314.4,134.8 317.4,139.5 320.3,144.0 323.2,148.2 326.1,152.1 329.1,155.7 332.0,158.9 334.9,161.8 337.9,164.3 340.8,166.3 343.7,167.9 346.6,169.1 349.6,169.8 352.5,170.0 355.4,169.8 358.4,169.1 361.3,167.9 364.2,166.3 367.1,164.3 370.1,161.8 373.0,158.9 375.9,155.7 378.9,152.1 381.8,148.2 384.7,144.0 387.6,139.5 390.6,134.8 393.5,129.9 396.4,124.9 399.4,119.8 402.3,114.6 405.2,109.4 408.1,104.2 411.1,99.1 414.0,94.1 416.9,89.2 419.9,84.5 422.8,80.0 425.7,75.8 428.6,71.9 431.6,68.3 434.5,65.1 437.4,62.2 440.4,59.7 443.3,57.7 446.2,56.1 449.1,54.9 452.1,54.2 455.0,54.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"60\" y=\"54\" font-size=\"12\">+5,0 cm</text><text x=\"300\" y=\"205\" font-size=\"12\">T = 0,84 s</text></svg></span>",
  "s": "<p>För fjäderoscillatorn T=2π√(m/k) ⇒ k=4π²m/T²=<strong>15,7 N/m</strong>.</p><p>ω=2π/T och v_max=ωA=(2π/0,84)·0,050=<strong>0,374 m/s</strong>.</p>"
},
{
  "id": "2.17",
  "kap": 2,
  "omr": "svangningar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En kloss på 0,40 kg sitter i en horisontell fjäder med k=64 N/m och svänger med amplituden 10 cm. Bestäm klossens fart när den är 6,0 cm från jämviktsläget.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Horisontell fjäderoscillator\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"55\" y1=\"180\" x2=\"445\" y2=\"180\" stroke=\"#777\" stroke-width=\"2\"/><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"180\" stroke=\"#2B2527\" stroke-width=\"5\"/><polyline points=\"70,130 90,112 110,148 130,112 150,148 170,112 190,130\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2\"/><rect x=\"190\" y=\"105\" width=\"85\" height=\"50\" rx=\"5\" fill=\"#E7ECEF\" stroke=\"#2B2527\"/><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"170\" stroke=\"#8A858E\" stroke-dasharray=\"5 4\"/><text x=\"330\" y=\"68\" text-anchor=\"middle\" font-size=\"12\">jämviktsläge</text><line x1=\"275\" y1=\"165\" x2=\"330\" y2=\"165\" stroke=\"#B43123\"/><text x=\"302\" y=\"158\" text-anchor=\"middle\" font-size=\"12\">6,0 cm</text></svg></span>",
  "s": "<p>Den mekaniska energin är ½kA². Vid elongationen x finns både fjäderenergi och rörelseenergi.</p><p>½kA² = ½kx² + ½mv².</p><p>v=√[(k/m)(A²−x²)] = <strong>1,01 m/s</strong>.</p>"
},
{
  "id": "2.18",
  "kap": 2,
  "omr": "svangningar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En harmonisk svängning startar i sitt positiva vändläge vid t=0. Periodtiden är 0,90 s. Hur lång tid tar det första gången tills elongationen har minskat till hälften av amplituden? Bestäm också hastighetens belopp då om amplituden är 8,0 cm.</p>",
  "s": "<p>Med start i vändläget kan x=A cos(ωt). Villkoret x=A/2 ger cos(ωt)=1/2 ⇒ ωt=π/3.</p><p>Eftersom ω=2π/T blir t=T/6=<strong>0,150 s</strong>.</p><p>v=ωA sin(π/3)=(2π/0,90)·0,080·√3/2=<strong>0,484 m/s</strong>.</p>"
},
{
  "id": "2.19",
  "kap": 2,
  "omr": "svangningar",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En vikt hänger i en vertikal fjäder och utför harmoniska svängningar. Periodtiden är 0,85 s och amplituden 12 cm. När vikten passerar jämviktsläget är fjäderkraften 5,0 N. Bestäm massan, fjäderkonstanten och fjäderkraftens största värde under svängningen.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Vertikal svängning med tre karakteristiska lägen\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"110\" y1=\"35\" x2=\"390\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"250\" y1=\"45\" x2=\"250\" y2=\"195\" stroke=\"#AAA\" stroke-dasharray=\"5 4\"/><rect x=\"220\" y=\"67\" width=\"60\" height=\"28\" fill=\"#EEF1F3\" stroke=\"#2B2527\"/><rect x=\"220\" y=\"111\" width=\"60\" height=\"28\" fill=\"#DDE7ED\" stroke=\"#2B2527\"/><rect x=\"220\" y=\"155\" width=\"60\" height=\"28\" fill=\"#EEF1F3\" stroke=\"#2B2527\"/><text x=\"295\" y=\"85\" font-size=\"12\">övre vändläge</text><text x=\"295\" y=\"129\" font-size=\"12\">jämvikt</text><text x=\"295\" y=\"173\" font-size=\"12\">nedre vändläge</text><line x1=\"195\" y1=\"83\" x2=\"195\" y2=\"167\" stroke=\"#B43123\"/><text x=\"175\" y=\"128\" text-anchor=\"middle\" font-size=\"12\">2A</text></svg></span>",
  "s": "<p>I jämviktsläget är fjäderkraften lika med tyngdkraften: m=5,0/g=<strong>0,509 kg</strong>.</p><p>T=2π√(m/k) ⇒ k=4π²m/T²=<strong>27,8 N/m</strong>.</p><p>Fjäderkraften är störst i nedersta vändläget, där fjädern är ytterligare A utdragen.</p><p>F_max=mg+kA=5,0+27,8·0,12=<strong>8,34 N</strong>.</p>"
},
{
  "id": "2.20",
  "kap": 2,
  "omr": "svangningar",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En horisontell oscillator är dold i en låda. Sensorer visar att dess maximala hastighet är 1,20 m/s, maximala acceleration 18,0 m/s² och den största återförande kraften 7,20 N. Anta harmonisk svängning. Bestäm amplituden, periodtiden, fjäderkonstanten och den svängande massan.</p>",
  "s": "<p>För harmonisk svängning gäller v_max=ωA och a_max=ω²A. Division ger ω=a_max/v_max=18,0/1,20=<strong>15,0 rad/s</strong>.</p><p>A=v_max/ω=1,20/15,0=<strong>0,08 m</strong>. T=2π/ω=<strong>0,419 s</strong>.</p><p>F_max=kA ⇒ k=7,20/0,08=<strong>90 N/m</strong>.</p><p>ω²=k/m ⇒ m=k/ω²=<strong>0,4 kg</strong>.</p>"
},
{
  "id": "2.21",
  "kap": 2,
  "omr": "pendlar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En matematisk pendel är 1,00 m lång. Bestäm periodtiden för små svängningar.</p>",
  "s": "<p>T=2π√(L/g)=2π√(1,00/9,82)=<strong>2,01 s</strong>.</p>"
},
{
  "id": "2.22",
  "kap": 2,
  "omr": "pendlar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En pendel har periodtiden 1,60 s. Bestäm pendelns längd.</p>",
  "s": "<p>L=g(T/2π)².</p><p>L=9,82·(1,60/2π)²=<strong>0,637 m</strong>.</p>"
},
{
  "id": "2.23",
  "kap": 2,
  "omr": "pendlar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En pendel är 75 cm lång. Ungefär hur många hela svängningar gör den på en minut?</p>",
  "s": "<p>T=2π√(0,75/9,82)=<strong>1,74 s</strong>.</p><p>N=60/T≈<strong>35 svängningar</strong>.</p>"
},
{
  "id": "2.24",
  "kap": 2,
  "omr": "pendlar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två pendlar har samma längd men den ena kulan har dubbelt så stor massa. Jämför deras periodtider vid små svängningar.</p>",
  "s": "<p>För en matematisk pendel är T=2π√(L/g). Massan finns inte med i uttrycket.</p><p>Pendlarna får därför <strong>samma periodtid</strong>.</p>"
},
{
  "id": "2.25",
  "kap": 2,
  "omr": "pendlar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En pendel har periodtiden 2,00 s på jorden. Samma pendel tas till månen där g=1,62 m/s². Bestäm periodtiden på månen.</p>",
  "s": "<p>För samma längd gäller T∝1/√g.</p><p>T_måne=T_jord√(g_jord/g_måne)=2,00√(9,82/1,62)=<strong>4,92 s</strong>.</p>"
},
{
  "id": "2.26",
  "kap": 2,
  "omr": "pendlar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>I ett experiment är pendellängden 0,994 m. Fyrtio hela svängningar tar 80,2 s. Bestäm ett experimentellt värde på tyngdaccelerationen.</p>",
  "s": "<p>T=80,2/40=<strong>2 s</strong>.</p><p>Ur T=2π√(L/g) fås g=4π²L/T².</p><p>g=<strong>9,76 m/s²</strong>.</p>"
},
{
  "id": "2.27",
  "kap": 2,
  "omr": "pendlar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En pendelklockas pendel är 1,000 m lång när klockan går rätt. En varm dag blir pendeln 2,0 mm längre. Hur mycket går klockan fel under ett dygn om övrigt är oförändrat?</p>",
  "s": "<p>Perioden är proportionell mot √L. Den nya perioden blir T_ny/T_gammal=√(1,002/1,000).</p><p>Klockan går långsammare med samma relativa faktor.</p><p>Förlusten under 86400 s blir ungefär <strong>86,4 s per dygn</strong>.</p>"
},
{
  "id": "2.28",
  "kap": 2,
  "omr": "pendlar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En pendelkula släpps från vila när snöret, som är 1,20 m långt, bildar vinkeln 25° mot lodlinjen. Bestäm kulans fart i lägsta punkten och pendelns periodtid enligt småvinkelmodellen. Kommentera kort varför periodformeln bara är ungefärlig här.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pendel släpps från 25 grader\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"150\" y1=\"35\" x2=\"350\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"190\" stroke=\"#AAA\" stroke-dasharray=\"5 4\"/><line x1=\"250\" y1=\"40\" x2=\"330\" y2=\"160\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><circle cx=\"330\" cy=\"160\" r=\"14\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><path d=\"M250 84 A44 44 0 0 1 273 77\" fill=\"none\" stroke=\"#B43123\"/><text x=\"280\" y=\"80\" font-size=\"12\">25°</text><text x=\"295\" y=\"105\" font-size=\"12\">1,20 m</text><circle cx=\"250\" cy=\"190\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/></svg></span>",
  "s": "<p>Höjdskillnaden är h=L(1−cos25°)=<strong>0,112 m</strong>. Energi: mgh=½mv² ⇒ v=<strong>1,49 m/s</strong>.</p><p>Småvinkelmodellen ger T=2π√(L/g)=<strong>2,2 s</strong>.</p><p>Vid 25° är vinkeln inte särskilt liten, så den verkliga perioden blir något längre än småvinkelapproximationen.</p>"
},
{
  "id": "2.29",
  "kap": 2,
  "omr": "pendlar",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>På en planet ska g bestämmas med en pendel, men mätningen av pendellängden har ett okänt systematiskt fel d eftersom upphängningspunkten sitter dold. När den uppmätta längden är 0,60 m blir perioden 2,61 s och när den uppmätta längden är 1,10 m blir perioden 3,49 s. Den verkliga längden är L+d. Bestäm både d och planetens tyngdacceleration.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pendelförsök med dold upphängningspunkt\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"170\" y=\"25\" width=\"160\" height=\"35\" fill=\"#777\"/><circle cx=\"250\" cy=\"47\" r=\"5\" fill=\"#2B2527\"/><line x1=\"250\" y1=\"47\" x2=\"315\" y2=\"172\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"315\" cy=\"172\" r=\"13\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"180\" y1=\"62\" x2=\"180\" y2=\"172\" stroke=\"#8A858E\"/><text x=\"145\" y=\"112\" font-size=\"12\">uppmätt L</text><line x1=\"250\" y1=\"47\" x2=\"250\" y2=\"72\" stroke=\"#B43123\" stroke-width=\"4\"/><text x=\"260\" y=\"68\" font-size=\"12\">okänt fel d</text></svg></span>",
  "s": "<p>För varje mätning gäller T²=4π²(L+d)/g. Subtraktion eliminerar d.</p><p>g=4π²(L₂−L₁)/(T₂²−T₁²).</p><p>Insättning ger g≈<strong>3,7 m/s²</strong>.</p><p>Sedan d=gT₁²/(4π²)−L₁≈<strong>0,04 m</strong>, alltså cirka 4 cm.</p>"
},
{
  "id": "2.30",
  "kap": 2,
  "omr": "pendlar",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En 1,00 m lång pendel hänger i en hiss. Under en del av färden mäts periodtiden till 1,80 s. Bestäm hissens accelerationsbelopp och riktning. En elev påstår att hissen måste röra sig uppåt eftersom perioden är kortare än normalt. Bedöm påståendet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pendel i accelererande hiss\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"95\" y=\"30\" width=\"310\" height=\"170\" fill=\"none\" stroke=\"#687078\" stroke-width=\"4\"/><line x1=\"190\" y1=\"55\" x2=\"310\" y2=\"55\" stroke=\"#2B2527\" stroke-width=\"4\"/><line x1=\"250\" y1=\"55\" x2=\"305\" y2=\"155\" stroke=\"#2B2527\" stroke-width=\"2\"/><circle cx=\"305\" cy=\"155\" r=\"13\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"380\" y1=\"150\" x2=\"380\" y2=\"80\" stroke=\"#B43123\" stroke-width=\"2.5\"/><polygon points=\"380,80 384.3,89.0 375.7,89.0\" fill=\"#B43123\"/><text x=\"380\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" fill=\"#B43123\">a ?</text><text x=\"115\" y=\"185\" font-size=\"12\">T = 1,80 s</text></svg></span>",
  "s": "<p>Pendeln reagerar på den effektiva tyngdaccelerationen g_eff. T=2π√(L/g_eff) ⇒ g_eff=4π²L/T²=<strong>12,2 m/s²</strong>.</p><p>Eftersom g_eff>g gäller g_eff=g+a, alltså a=<strong>2,36 m/s² uppåt</strong>.</p><p>Det betyder att hissens <em>acceleration</em> är uppåt. Hissen kan samtidigt röra sig uppåt och öka farten eller röra sig nedåt och bromsa. Elevens slutsats om rörelseriktningen är därför inte säker.</p>"
},
{
  "id": "2.31",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En våg har frekvensen 6,0 Hz och våglängden 1,5 m. Bestäm vågens utbredningshastighet.</p>",
  "s": "<p>v=fλ=6,0·1,5=<strong>9,0 m/s</strong>.</p>"
},
{
  "id": "2.32",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En våg rör sig med 12 m/s och har frekvensen 4,0 Hz. Bestäm våglängden.</p>",
  "s": "<p>λ=v/f=12/4,0=<strong>3,0 m</strong>.</p>"
},
{
  "id": "2.33",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En våg har periodtiden 0,25 s. Bestäm frekvensen.</p>",
  "s": "<p>f=1/T=1/0,25=<strong>4,0 Hz</strong>.</p>"
},
{
  "id": "2.34",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En transversal våg rör sig åt höger. En markerad punkt på linan befinner sig exakt på en vågtopp. Vilken riktning har punktens momentana hastighet just då?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Materialpunkt på en vågtopp\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><polyline points=\"50.0,120.0 53.3,115.2 56.7,110.4 60.0,105.8 63.3,101.3 66.7,97.1 70.0,93.2 73.3,89.7 76.7,86.5 80.0,83.8 83.3,81.6 86.7,79.9 90.0,78.7 93.3,78.1 96.7,78.0 100.0,78.5 103.3,79.5 106.7,81.1 110.0,83.2 113.3,85.8 116.7,88.8 120.0,92.2 123.3,96.0 126.7,100.2 130.0,104.5 133.3,109.1 136.7,113.9 140.0,118.7 143.3,123.5 146.7,128.3 150.0,133.0 153.3,137.5 156.7,141.8 160.0,145.7 163.3,149.4 166.7,152.6 170.0,155.5 173.3,157.8 176.7,159.7 180.0,161.0 183.3,161.8 186.7,162.0 190.0,161.7 193.3,160.8 196.7,159.4 200.0,157.4 203.3,155.0 206.7,152.1 210.0,148.8 213.3,145.0 216.7,141.0 220.0,136.7 223.3,132.1 226.7,127.4 230.0,122.6 233.3,117.8 236.7,113.0 240.0,108.3 243.3,103.7 246.7,99.4 250.0,95.3 253.3,91.6 256.7,88.2 260.0,85.3 263.3,82.8 266.7,80.8 270.0,79.3 273.3,78.4 276.7,78.0 280.0,78.2 283.3,78.9 286.7,80.2 290.0,82.0 293.3,84.3 296.7,87.1 300.0,90.3 303.3,93.9 306.7,97.9 310.0,102.1 313.3,106.6 316.7,111.3 320.0,116.0 323.3,120.9 326.7,125.7 330.0,130.4 333.3,135.1 336.7,139.5 340.0,143.6 343.3,147.4 346.7,150.9 350.0,154.0 353.3,156.6 356.7,158.7 360.0,160.3 363.3,161.4 366.7,161.9 370.0,161.9 373.3,161.3 376.7,160.2 380.0,158.5 383.3,156.4 386.7,153.7 390.0,150.6 393.3,147.1 396.7,143.2 400.0,139.1 403.3,134.6 406.7,130.0 410.0,125.3 413.3,120.4 416.7,115.6 420.0,110.8 423.3,106.2 426.7,101.7 430.0,97.5 433.3,93.6 436.7,90.0 440.0,86.8 443.3,84.1 446.7,81.8 450.0,80.1\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"141\" cy=\"79\" r=\"7\" fill=\"#E8B04F\" stroke=\"#2B2527\"/><line x1=\"360\" y1=\"55\" x2=\"425\" y2=\"55\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><polygon points=\"425,55 416.0,59.3 416.0,50.7\" fill=\"#2B2527\"/><text x=\"392\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2B2527\">våg åt höger</text><text x=\"141\" y=\"63\" text-anchor=\"middle\" font-size=\"12\">markerad punkt</text></svg></span>",
  "s": "<p>Vid själva vändläget är punktens momentana tvärhastighet <strong>0</strong>.</p><p>Vågmönstret rör sig åt höger, men materialpunkten rör sig inte åt höger med vågen.</p>"
},
{
  "id": "2.35",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En triangulär puls rör sig åt höger mot en fast ände på en lina. Beskriv hur pulsen ser ut direkt efter reflektionen.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Puls närmar sig en fast ände\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"45\" y1=\"135\" x2=\"435\" y2=\"135\" stroke=\"#999\"/><path d=\"M55 135 L180 135 L235 72 L290 135 L410 135\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><line x1=\"435\" y1=\"45\" x2=\"435\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"6\"/><line x1=\"305\" y1=\"85\" x2=\"385\" y2=\"85\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><polygon points=\"385,85 376.0,89.3 376.0,80.7\" fill=\"#2B2527\"/><text x=\"345\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2B2527\">rörelse</text><text x=\"440\" y=\"210\" text-anchor=\"end\" font-size=\"12\">fast ände</text></svg></span>",
  "s": "<p>Vid en fast ände reflekteras pulsen <strong>inverterad</strong>.</p><p>En uppåtriktad puls kommer alltså tillbaka som en nedåtriktad puls och rör sig åt vänster.</p>"
},
{
  "id": "2.36",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En sinusvåg med våglängden 4,0 m rör sig åt höger med 2,0 m/s. Vid t=0 befinner sig en viss materialpunkt i jämviktsläget och rör sig uppåt. Bestäm punktens läge efter 0,75 s om amplituden är 6,0 cm.</p>",
  "s": "<p>Perioden T=λ/v=4,0/2,0=<strong>2 s</strong>.</p><p>Punkten utför harmonisk svängning. Med x(0)=0 och rörelse uppåt kan y=A sin(2πt/T).</p><p>y=0,060 sin(2π·0,75/2)=<strong>4,24 cm</strong>. Negativt värde betyder under jämviktsläget.</p>"
},
{
  "id": "2.37",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En 1,20 m lång sträng är fast i båda ändar. Vid frekvensen 45 Hz uppstår ett stående vågmönster med tre bukar. Bestäm våglängden, våghastigheten och grundtonens frekvens.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sträng med tre bukar\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"50\" y1=\"115\" x2=\"450\" y2=\"115\" stroke=\"#999\"/><polyline points=\"55.0,115.0 57.2,112.3 59.3,109.6 61.5,106.9 63.7,104.2 65.8,101.5 68.0,98.9 70.2,96.4 72.3,93.8 74.5,91.4 76.7,89.0 78.8,86.7 81.0,84.4 83.2,82.3 85.3,80.2 87.5,78.2 89.7,76.4 91.8,74.6 94.0,72.9 96.2,71.4 98.3,70.0 100.5,68.7 102.7,67.5 104.8,66.5 107.0,65.5 109.2,64.8 111.3,64.1 113.5,63.6 115.7,63.3 117.8,63.1 120.0,63.0 122.2,63.1 124.3,63.3 126.5,63.6 128.7,64.1 130.8,64.8 133.0,65.5 135.2,66.5 137.3,67.5 139.5,68.7 141.7,70.0 143.8,71.4 146.0,72.9 148.2,74.6 150.3,76.4 152.5,78.2 154.7,80.2 156.8,82.3 159.0,84.4 161.2,86.7 163.3,89.0 165.5,91.4 167.7,93.8 169.8,96.4 172.0,98.9 174.2,101.5 176.3,104.2 178.5,106.9 180.7,109.6 182.8,112.3 185.0,115.0 187.2,117.7 189.3,120.4 191.5,123.1 193.7,125.8 195.8,128.5 198.0,131.1 200.2,133.6 202.3,136.2 204.5,138.6 206.7,141.0 208.8,143.3 211.0,145.6 213.2,147.7 215.3,149.8 217.5,151.8 219.7,153.6 221.8,155.4 224.0,157.1 226.2,158.6 228.3,160.0 230.5,161.3 232.7,162.5 234.8,163.5 237.0,164.5 239.2,165.2 241.3,165.9 243.5,166.4 245.7,166.7 247.8,166.9 250.0,167.0 252.2,166.9 254.3,166.7 256.5,166.4 258.7,165.9 260.8,165.2 263.0,164.5 265.2,163.5 267.3,162.5 269.5,161.3 271.7,160.0 273.8,158.6 276.0,157.1 278.2,155.4 280.3,153.6 282.5,151.8 284.7,149.8 286.8,147.7 289.0,145.6 291.2,143.3 293.3,141.0 295.5,138.6 297.7,136.2 299.8,133.6 302.0,131.1 304.2,128.5 306.3,125.8 308.5,123.1 310.7,120.4 312.8,117.7 315.0,115.0 317.2,112.3 319.3,109.6 321.5,106.9 323.7,104.2 325.8,101.5 328.0,98.9 330.2,96.4 332.3,93.8 334.5,91.4 336.7,89.0 338.8,86.7 341.0,84.4 343.2,82.3 345.3,80.2 347.5,78.2 349.7,76.4 351.8,74.6 354.0,72.9 356.2,71.4 358.3,70.0 360.5,68.7 362.7,67.5 364.8,66.5 367.0,65.5 369.2,64.8 371.3,64.1 373.5,63.6 375.7,63.3 377.8,63.1 380.0,63.0 382.2,63.1 384.3,63.3 386.5,63.6 388.7,64.1 390.8,64.8 393.0,65.5 395.2,66.5 397.3,67.5 399.5,68.7 401.7,70.0 403.8,71.4 406.0,72.9 408.2,74.6 410.3,76.4 412.5,78.2 414.7,80.2 416.8,82.3 419.0,84.4 421.2,86.7 423.3,89.0 425.5,91.4 427.7,93.8 429.8,96.4 432.0,98.9 434.2,101.5 436.3,104.2 438.5,106.9 440.7,109.6 442.8,112.3 445.0,115.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"55.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"185.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"315.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"445.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><text x=\"250\" y=\"200\" text-anchor=\"middle\" font-size=\"12\">L = 1,20 m, f = 45 Hz</text></svg></span>",
  "s": "<p>Tre bukar betyder tredje harmoniska svängningen: L=3λ/2.</p><p>λ=2L/3=<strong>0,8 m</strong>. v=fλ=45·0,8=<strong>36 m/s</strong>.</p><p>Grundtonen har en tredjedel av frekvensen: f₁=<strong>15 Hz</strong>.</p>"
},
{
  "id": "2.38",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Vattenvågor går från djupt till grunt vatten. Frekvensen ändras inte. I det djupa området är hastigheten 0,30 m/s och våglängden 10 cm. I det grunda området mäts våglängden till 6,5 cm. Bestäm våghastigheten där och förklara varför vågfronterna bryts när de går snett över gränsen.</p>",
  "s": "<p>f=v₁/λ₁=0,30/0,10=3,0 Hz. v₂=fλ₂=3,0·0,065=<strong>0,195 m/s</strong>.</p><p>När en del av vågfronten går in i det långsammare området först bromsas den delen först. Därför vrids vågfronten och utbredningsriktningen bryts.</p>"
},
{
  "id": "2.39",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>Två korta pulser rör sig mot varandra på samma lina. Den vänstra pulsen är +4,0 cm hög och 30 cm bred och rör sig åt höger med 20 cm/s. Den högra pulsen är −2,5 cm hög och 20 cm bred och rör sig åt vänster med 10 cm/s. Deras närmaste kanter är 45 cm från varandra vid t=0. Bestäm när pulserna först börjar överlappa. Bestäm också den resulterande elongationen där de överlappar helt, om deras plana toppar sammanfaller.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två pulser som möts\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"45\" y1=\"120\" x2=\"455\" y2=\"120\" stroke=\"#999\"/><path d=\"M60 120 L120 120 L150 70 L180 120 L235 120\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><path d=\"M265 120 L320 120 L345 155 L370 120 L440 120\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"3\"/><line x1=\"175\" y1=\"55\" x2=\"230\" y2=\"55\" stroke=\"#B43123\" stroke-width=\"2.5\"/><polygon points=\"230,55 221.0,59.3 221.0,50.7\" fill=\"#B43123\"/><text x=\"202\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" fill=\"#B43123\">20 cm/s</text><line x1=\"370\" y1=\"170\" x2=\"315\" y2=\"170\" stroke=\"#2A5D9E\" stroke-width=\"2.5\"/><polygon points=\"315,170 324.0,165.7 324.0,174.3\" fill=\"#2A5D9E\"/><text x=\"342\" y=\"163\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2A5D9E\">15 cm/s</text><text x=\"120\" y=\"64\" font-size=\"12\">+4,0 cm</text><text x=\"360\" y=\"155\" font-size=\"12\">−2,5 cm</text></svg></span>",
  "s": "<p>Närmaste kanterna närmar sig med 20+10=30 cm/s.</p><p>t=45/30=<strong>1,50 s</strong>.</p><p>Vid överlappning gäller superpositionsprincipen. Elongationerna adderas algebraiskt: +4,0+(−2,5)=<strong>+1,5 cm</strong>.</p><p>Pulserna påverkar inte varandras fortsatta form efter mötet i den idealiserade linan.</p>"
},
{
  "id": "2.40",
  "kap": 2,
  "omr": "vagrorelser",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>Parallella vattenvågor går från ett område där hastigheten är 0,50 m/s till ett område där hastigheten är 0,30 m/s. Infallsvinkeln mellan vågens utbredningsriktning och normalen är 40°. Bestäm brytningsvinkeln. Bestäm dessutom hur våglängden förändras om den är 12 cm före gränsen, och förklara varför frekvensen inte förändras.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Vattenvågor bryts vid djupgräns\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"250\" y1=\"25\" x2=\"250\" y2=\"205\" stroke=\"#777\" stroke-width=\"3\"/><line x1=\"250\" y1=\"115\" x2=\"455\" y2=\"115\" stroke=\"#AAA\" stroke-dasharray=\"5 4\"/><line x1=\"65\" y1=\"45\" x2=\"130\" y2=\"165\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"97\" y1=\"45\" x2=\"162\" y2=\"165\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"129\" y1=\"45\" x2=\"194\" y2=\"165\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"161\" y1=\"45\" x2=\"226\" y2=\"165\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"270\" y1=\"55\" x2=\"300\" y2=\"175\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"305\" y1=\"55\" x2=\"335\" y2=\"175\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"340\" y1=\"55\" x2=\"370\" y2=\"175\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"375\" y1=\"55\" x2=\"405\" y2=\"175\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"120\" y=\"35\" font-size=\"12\">0,50 m/s</text><text x=\"325\" y=\"35\" font-size=\"12\">0,30 m/s</text><text x=\"255\" y=\"108\" font-size=\"12\">normal</text></svg></span>",
  "s": "<p>För vågbrytning gäller sinθ₁/sinθ₂=v₁/v₂.</p><p>sinθ₂=(v₂/v₁)sin40° ⇒ θ₂=<strong>22,7°</strong>.</p><p>Frekvensen f=v₁/λ₁=0,50/0,12=4,17 Hz. λ₂=v₂/f=<strong>7,2 cm</strong>.</p><p>Frekvensen bestäms av källan och måste vara samma på båda sidor om gränsen; annars skulle vågtoppar skapas eller försvinna vid gränsen.</p>"
},
{
  "id": "2.41",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En ton har frekvensen 680 Hz. Använd ljudhastigheten 340 m/s och bestäm våglängden i luft.</p>",
  "s": "<p>λ=v/f=340/680=<strong>0,50 m</strong>.</p>"
},
{
  "id": "2.42",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Du står 102 m från en lodrät klippvägg och ropar. Hur lång tid tar det innan ekot kommer tillbaka? Använd ljudhastigheten 340 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Eko från klippvägg\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><circle cx=\"85\" cy=\"155\" r=\"10\" fill=\"#E0B28A\" stroke=\"#2B2527\"/><line x1=\"85\" y1=\"165\" x2=\"85\" y2=\"195\" stroke=\"#2B2527\"/><path d=\"M360 35 L440 55 L405 95 L445 125 L390 165 L430 205\" fill=\"#8A8178\" stroke=\"#2B2527\"/><line x1=\"105\" y1=\"145\" x2=\"350\" y2=\"115\" stroke=\"#B43123\" stroke-width=\"2.5\"/><polygon points=\"350,115 341.6,120.4 340.5,111.8\" fill=\"#B43123\"/><text x=\"228\" y=\"123\" text-anchor=\"middle\" font-size=\"12\" fill=\"#B43123\">ljud</text><line x1=\"350\" y1=\"130\" x2=\"110\" y2=\"160\" stroke=\"#2A5D9E\" stroke-width=\"2.5\"/><polygon points=\"110,160 118.4,154.6 119.5,163.2\" fill=\"#2A5D9E\"/><text x=\"230\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2A5D9E\">eko</text><text x=\"245\" y=\"205\" text-anchor=\"middle\" font-size=\"12\">102 m</text></svg></span>",
  "s": "<p>Ljudet färdas fram och tillbaka: s=2·102=204 m.</p><p>t=s/v=204/340=<strong>0,60 s</strong>.</p>"
},
{
  "id": "2.43",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Ett rör är öppet i båda ändar och är 0,68 m långt. Bestäm grundtonens frekvens. Använd ljudhastigheten 340 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Grundton i öppet rör\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"70\" y=\"65\" width=\"360\" height=\"95\" fill=\"#EEF3F5\" stroke=\"#2B2527\" stroke-width=\"3\"/><polyline points=\"70.0,112.0 73.0,110.8 76.0,109.6 79.0,108.5 82.0,107.3 85.0,106.1 88.0,105.0 91.0,103.8 94.0,102.6 97.0,101.5 100.0,100.4 103.0,99.2 106.0,98.1 109.0,97.0 112.0,95.9 115.0,94.8 118.0,93.7 121.0,92.6 124.0,91.6 127.0,90.5 130.0,89.5 133.0,88.5 136.0,87.5 139.0,86.5 142.0,85.5 145.0,84.6 148.0,83.7 151.0,82.8 154.0,81.9 157.0,81.0 160.0,80.2 163.0,79.4 166.0,78.6 169.0,77.8 172.0,77.0 175.0,76.3 178.0,75.6 181.0,74.9 184.0,74.3 187.0,73.6 190.0,73.0 193.0,72.5 196.0,71.9 199.0,71.4 202.0,70.9 205.0,70.4 208.0,70.0 211.0,69.6 214.0,69.2 217.0,68.9 220.0,68.5 223.0,68.2 226.0,68.0 229.0,67.8 232.0,67.6 235.0,67.4 238.0,67.2 241.0,67.1 244.0,67.1 247.0,67.0 250.0,67.0 253.0,67.0 256.0,67.1 259.0,67.1 262.0,67.2 265.0,67.4 268.0,67.6 271.0,67.8 274.0,68.0 277.0,68.2 280.0,68.5 283.0,68.9 286.0,69.2 289.0,69.6 292.0,70.0 295.0,70.4 298.0,70.9 301.0,71.4 304.0,71.9 307.0,72.5 310.0,73.0 313.0,73.6 316.0,74.3 319.0,74.9 322.0,75.6 325.0,76.3 328.0,77.0 331.0,77.8 334.0,78.6 337.0,79.4 340.0,80.2 343.0,81.0 346.0,81.9 349.0,82.8 352.0,83.7 355.0,84.6 358.0,85.5 361.0,86.5 364.0,87.5 367.0,88.5 370.0,89.5 373.0,90.5 376.0,91.6 379.0,92.6 382.0,93.7 385.0,94.8 388.0,95.9 391.0,97.0 394.0,98.1 397.0,99.2 400.0,100.4 403.0,101.5 406.0,102.6 409.0,103.8 412.0,105.0 415.0,106.1 418.0,107.3 421.0,108.5 424.0,109.6 427.0,110.8 430.0,112.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"250\" y=\"188\" text-anchor=\"middle\" font-size=\"12\">öppet – 0,68 m – öppet</text></svg></span>",
  "s": "<p>För ett öppet rör gäller L=λ/2 i grundtonen.</p><p>λ=2L=1,36 m.</p><p>f=v/λ=340/1,36=<strong>25 Hz</strong>.</p>"
},
{
  "id": "2.44",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Ett rör är slutet i ena änden och öppet i den andra. Längden är 0,40 m. Bestäm grundtonens frekvens.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Grundton i halvöppet rör\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"75\" y=\"65\" width=\"350\" height=\"95\" fill=\"#EEF3F5\" stroke=\"#2B2527\" stroke-width=\"3\"/><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"160\" stroke=\"#2B2527\" stroke-width=\"8\"/><path d=\"M78 112 Q250 25 422 112\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"250\" y=\"188\" text-anchor=\"middle\" font-size=\"12\">stängt – 0,40 m – öppet</text></svg></span>",
  "s": "<p>För ett halvöppet rör gäller L=λ/4.</p><p>λ=4L=1,60 m.</p><p>f=340/1,60=<strong>212 Hz</strong>.</p>"
},
{
  "id": "2.45",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En öppen orgelpipa har grundtonen 220 Hz. Vilken frekvens har dess första överton?</p>",
  "s": "<p>I ett öppet rör finns alla heltalsmultiplar av grundtonen.</p><p>Första övertonen är andra harmoniska: f₂=2f₁=<strong>440 Hz</strong>.</p>"
},
{
  "id": "2.46",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>I ett resonansrör med ena änden stängd uppstår två närliggande resonanslägen när luftpelaren är 16,8 cm respektive 53,3 cm. Stämgaffelns frekvens är 467 Hz. Bestäm ljudhastigheten i försöket.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två närliggande resonanslägen i rör\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"55\" y=\"55\" width=\"390\" height=\"105\" fill=\"#EEF3F5\" stroke=\"#2B2527\" stroke-width=\"3\"/><rect x=\"125\" y=\"60\" width=\"8\" height=\"95\" fill=\"#777\"/><rect x=\"350\" y=\"60\" width=\"8\" height=\"95\" fill=\"#777\"/><text x=\"129\" y=\"182\" text-anchor=\"middle\" font-size=\"12\">16,8 cm</text><text x=\"354\" y=\"182\" text-anchor=\"middle\" font-size=\"12\">53,3 cm</text><path d=\"M60 108 Q95 75 130 108\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><path d=\"M60 132 Q135 65 210 132 T360 132\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"3\"/><text x=\"250\" y=\"42\" text-anchor=\"middle\" font-size=\"12\">stämgaffel 467 Hz</text></svg></span>",
  "s": "<p>Mellan två närliggande resonanslägen skiljer en halv våglängd.</p><p>λ/2=0,533−0,168=0,365 m ⇒ λ=0,730 m.</p><p>v=fλ=467·0,730=<strong>341 m/s</strong>.</p>"
},
{
  "id": "2.47",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>I ett 0,85 m långt rör som är öppet i båda ändar observeras ett stående ljudmönster som motsvarar femte harmoniska svängningen. Bestäm frekvensen och ange vilken överton detta är.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Femte harmoniska i öppet rör\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"55\" y=\"55\" width=\"390\" height=\"115\" fill=\"#EEF3F5\" stroke=\"#2B2527\"/><polyline points=\"60.0,112.0 61.9,108.9 63.8,105.7 65.7,102.7 67.6,99.6 69.5,96.7 71.4,93.8 73.3,91.1 75.2,88.5 77.1,86.0 79.0,83.7 80.9,81.6 82.8,79.6 84.7,77.9 86.6,76.4 88.5,75.0 90.4,74.0 92.3,73.1 94.2,72.5 96.1,72.1 98.0,72.0 99.9,72.1 101.8,72.5 103.7,73.1 105.6,74.0 107.5,75.0 109.4,76.4 111.3,77.9 113.2,79.6 115.1,81.6 117.0,83.7 118.9,86.0 120.8,88.5 122.7,91.1 124.6,93.8 126.5,96.7 128.4,99.6 130.3,102.7 132.2,105.7 134.1,108.9 136.0,112.0 137.9,115.1 139.8,118.3 141.7,121.3 143.6,124.4 145.5,127.3 147.4,130.2 149.3,132.9 151.2,135.5 153.1,138.0 155.0,140.3 156.9,142.4 158.8,144.4 160.7,146.1 162.6,147.6 164.5,149.0 166.4,150.0 168.3,150.9 170.2,151.5 172.1,151.9 174.0,152.0 175.9,151.9 177.8,151.5 179.7,150.9 181.6,150.0 183.5,149.0 185.4,147.6 187.3,146.1 189.2,144.4 191.1,142.4 193.0,140.3 194.9,138.0 196.8,135.5 198.7,132.9 200.6,130.2 202.5,127.3 204.4,124.4 206.3,121.3 208.2,118.3 210.1,115.1 212.0,112.0 213.9,108.9 215.8,105.7 217.7,102.7 219.6,99.6 221.5,96.7 223.4,93.8 225.3,91.1 227.2,88.5 229.1,86.0 231.0,83.7 232.9,81.6 234.8,79.6 236.7,77.9 238.6,76.4 240.5,75.0 242.4,74.0 244.3,73.1 246.2,72.5 248.1,72.1 250.0,72.0 251.9,72.1 253.8,72.5 255.7,73.1 257.6,74.0 259.5,75.0 261.4,76.4 263.3,77.9 265.2,79.6 267.1,81.6 269.0,83.7 270.9,86.0 272.8,88.5 274.7,91.1 276.6,93.8 278.5,96.7 280.4,99.6 282.3,102.7 284.2,105.7 286.1,108.9 288.0,112.0 289.9,115.1 291.8,118.3 293.7,121.3 295.6,124.4 297.5,127.3 299.4,130.2 301.3,132.9 303.2,135.5 305.1,138.0 307.0,140.3 308.9,142.4 310.8,144.4 312.7,146.1 314.6,147.6 316.5,149.0 318.4,150.0 320.3,150.9 322.2,151.5 324.1,151.9 326.0,152.0 327.9,151.9 329.8,151.5 331.7,150.9 333.6,150.0 335.5,149.0 337.4,147.6 339.3,146.1 341.2,144.4 343.1,142.4 345.0,140.3 346.9,138.0 348.8,135.5 350.7,132.9 352.6,130.2 354.5,127.3 356.4,124.4 358.3,121.3 360.2,118.3 362.1,115.1 364.0,112.0 365.9,108.9 367.8,105.7 369.7,102.7 371.6,99.6 373.5,96.7 375.4,93.8 377.3,91.1 379.2,88.5 381.1,86.0 383.0,83.7 384.9,81.6 386.8,79.6 388.7,77.9 390.6,76.4 392.5,75.0 394.4,74.0 396.3,73.1 398.2,72.5 400.1,72.1 402.0,72.0 403.9,72.1 405.8,72.5 407.7,73.1 409.6,74.0 411.5,75.0 413.4,76.4 415.3,77.9 417.2,79.6 419.1,81.6 421.0,83.7 422.9,86.0 424.8,88.5 426.7,91.1 428.6,93.8 430.5,96.7 432.4,99.6 434.3,102.7 436.2,105.7 438.1,108.9 440.0,112.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"250\" y=\"195\" text-anchor=\"middle\" font-size=\"12\">L = 0,85 m</text></svg></span>",
  "s": "<p>För öppet rör är f_n=n·v/(2L).</p><p>f₅=5·340/(2·0,85)=<strong>1 Hz</strong>.</p><p>Femte harmoniska är <strong>fjärde övertonen</strong>, eftersom grundtonen räknas som första harmoniska.</p>"
},
{
  "id": "2.48",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två små högtalare är kopplade i fas till samma tongenerator med frekvensen 850 Hz. I en punkt P är avståndet till den ena högtalaren 3,20 m. Vilket närmaste större avstånd till den andra högtalaren ger första ljudminimum i P?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två högtalare och en observationspunkt\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"65\" y=\"55\" width=\"28\" height=\"46\" fill=\"#5E6F7E\"/><rect x=\"65\" y=\"145\" width=\"28\" height=\"46\" fill=\"#5E6F7E\"/><circle cx=\"390\" cy=\"120\" r=\"7\" fill=\"#B43123\"/><line x1=\"93\" y1=\"78\" x2=\"390\" y2=\"120\" stroke=\"#8BB1CF\"/><line x1=\"93\" y1=\"168\" x2=\"390\" y2=\"120\" stroke=\"#8BB1CF\"/><text x=\"45\" y=\"82\" font-size=\"12\">A</text><text x=\"45\" y=\"172\" font-size=\"12\">B</text><text x=\"402\" y=\"124\" font-size=\"12\">P</text><text x=\"220\" y=\"82\" font-size=\"12\">3,20 m</text><text x=\"250\" y=\"195\" text-anchor=\"middle\" font-size=\"12\">f = 850 Hz, källorna i fas</text></svg></span>",
  "s": "<p>λ=v/f=340/850=<strong>0,4 m</strong>.</p><p>För första minimum krävs vägskillnaden λ/2=0,20 m.</p><p>Det andra avståndet ska därför vara 3,20+0,20=<strong>3,40 m</strong>.</p>"
},
{
  "id": "2.49",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>Ett rör har okänd längd och det är inte känt om det är öppet i båda ändar eller slutet i ena änden. När frekvensen ökas registreras två på varandra följande tydliga resonanser vid 255 Hz och 425 Hz. Inga resonanser finns mellan dessa. Använd ljudhastigheten 340 m/s. Avgör vilken typ av rör det är och bestäm dess längd.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Registrerade resonansfrekvenser\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"55\" y1=\"175\" x2=\"450\" y2=\"175\" stroke=\"#777\"/><line x1=\"85\" y1=\"175\" x2=\"85\" y2=\"60\" stroke=\"#777\"/><rect x=\"170\" y=\"92\" width=\"10\" height=\"83\" fill=\"#B43123\"/><rect x=\"310\" y=\"55\" width=\"10\" height=\"120\" fill=\"#2A5D9E\"/><text x=\"175\" y=\"192\" text-anchor=\"middle\" font-size=\"12\">f₁</text><text x=\"315\" y=\"192\" text-anchor=\"middle\" font-size=\"12\">f₂</text><text x=\"250\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">två på varandra följande resonanser</text></svg></span>",
  "s": "<p>I ett öppet rör ligger närliggande harmoniska frekvenser ett grundtonsintervall f₁ från varandra. Då skulle f₁=170 Hz, men 255/170=1,5 är inte ett heltal, så detta passar inte ett öppet rör.</p><p>I ett halvöppet rör förekommer bara udda harmoniska. Närliggande tillåtna frekvenser skiljer 2f₁.</p><p>2f₁=425−255=170 ⇒ f₁=<strong>85 Hz</strong>. 255=3f₁ och 425=5f₁, vilket stämmer.</p><p>För halvöppet rör: f₁=v/(4L) ⇒ L=340/(4·85)=<strong>1 m</strong>.</p>"
},
{
  "id": "2.50",
  "kap": 2,
  "omr": "ljudvagor",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En öppen metallpipa är 0,650 m lång. Vid ett experiment mäts grundtonen till 270 Hz. En elev använder standardvärdet 340 m/s och menar att mätningen måste vara fel. Anta i stället att ljudhastigheten kan approximeras med v≈331+0,60·T, där T är lufttemperaturen i °C. Bestäm vilken temperatur mätningen motsvarar och bedöm om resultatet är fysiskt rimligt för ett vanligt klassrum.</p>",
  "s": "<p>För ett öppet rör är v=2Lf=2·0,650·270=<strong>351 m/s</strong>.</p><p>331+0,60T=351 ⇒ T=<strong>33,3 °C</strong>.</p><p>Temperaturen blir ungefär 33 °C. Det är möjligt men ovanligt varmt för ett klassrum. Mätningen behöver alltså inte vara matematiskt fel, men temperatur, ändkorrektion och mätosäkerhet bör kontrolleras.</p>"
},
{
  "id": "2.51",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Ljudintensiteten är 1,0·10⁻⁶ W/m². Bestäm ljudnivån. Använd I₀=1,0·10⁻¹² W/m².</p>",
  "s": "<p>L=10log₁₀(I/I₀).</p><p>L=10log₁₀(10⁶)=<strong>60 dB</strong>.</p>"
},
{
  "id": "2.52",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Ljudnivån ökar från 60 dB till 70 dB. Hur många gånger större blir intensiteten?</p>",
  "s": "<p>En ökning med 10 dB motsvarar en faktor 10 i intensitet.</p><p>Intensiteten blir <strong>10 gånger större</strong>.</p>"
},
{
  "id": "2.53",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En liten ljudkälla avger ljudeffekten 0,050 W jämnt i alla riktningar. Bestäm ljudintensiteten 4,0 m från källan.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sfärisk ljudspridning\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><circle cx=\"250\" cy=\"115\" r=\"12\" fill=\"#5E6F7E\"/><circle cx=\"250\" cy=\"115\" r=\"38\" fill=\"none\" stroke=\"#8BB1CF\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#8BB1CF\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"115\" r=\"98\" fill=\"none\" stroke=\"#8BB1CF\" stroke-width=\"1.5\"/><line x1=\"250\" y1=\"115\" x2=\"348\" y2=\"115\" stroke=\"#777\"/><text x=\"298\" y=\"105\" font-size=\"12\">4,0 m</text><text x=\"250\" y=\"215\" text-anchor=\"middle\" font-size=\"12\">P = 0,050 W</text></svg></span>",
  "s": "<p>I=P/(4πr²).</p><p>I=0,050/(4π·4,0²)=<strong>2,49·10<sup>-4</sup> W/m²</strong>.</p>"
},
{
  "id": "2.54",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två lika starka, oberoende maskiner ger vardera ljudnivån 70 dB på en arbetsplats. Vilken total ljudnivå får man ungefär när båda är igång samtidigt?</p>",
  "s": "<p>Två lika intensiteter ger dubbla intensiteten.</p><p>ΔL=10log₁₀2≈3,0 dB.</p><p>Total nivå ≈ <strong>73 dB</strong>.</p>"
},
{
  "id": "2.55",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Ett ljud med frekvensen 15 kHz och ett ljud med frekvensen 25 kHz spelas upp. Vilket ligger normalt inom en ung människas hörselområde?</p>",
  "s": "<p>Det ungefärliga hörselområdet brukar anges till 20 Hz–20 kHz.</p><p><strong>15 kHz</strong> ligger inom området, medan 25 kHz är ultraljud.</p>"
},
{
  "id": "2.56",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En punktformig högtalare ger 84 dB på 2,0 m avstånd. Bortse från reflektioner. Vilken ljudnivå får man på 8,0 m avstånd?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Ljudnivå på två avstånd\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"60\" y=\"92\" width=\"30\" height=\"46\" fill=\"#5E6F7E\"/><path d=\"M90 60 A55 55 0 0 1 90 170\" fill=\"none\" stroke=\"#8BB1CF\"/><path d=\"M90 5 A110 110 0 0 1 90 225\" fill=\"none\" stroke=\"#8BB1CF\"/><path d=\"M90 -55 A170 170 0 0 1 90 285\" fill=\"none\" stroke=\"#8BB1CF\"/><circle cx=\"145\" cy=\"115\" r=\"5\" fill=\"#B43123\"/><circle cx=\"410\" cy=\"115\" r=\"5\" fill=\"#B43123\"/><text x=\"135\" y=\"95\" font-size=\"12\">2,0 m: 84 dB</text><text x=\"355\" y=\"95\" font-size=\"12\">8,0 m: ?</text></svg></span>",
  "s": "<p>Intensiteten avtar som 1/r², så nivåskillnaden kan skrivas ΔL=20log₁₀(r₂/r₁).</p><p>ΔL=20log₁₀(8/2)=<strong>12 dB</strong>.</p><p>L₂=84−12=<strong>72 dB</strong>.</p>"
},
{
  "id": "2.57",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En person utsätts under en arbetsperiod för 90 dB i 1,0 h och därefter 87 dB i 3,0 h. Bestäm den konstanta ljudnivå som skulle ge samma totala ljudenergi per area under de fyra timmarna.</p>",
  "s": "<p>Ljudnivåer måste först omvandlas till relativa intensiteter.</p><p>I_rel,medel=[10^(90/10)·1 + 10^(87/10)·3]/4.</p><p>L_eq=10log₁₀(I_rel,medel)=<strong>88 dB</strong>.</p>"
},
{
  "id": "2.58",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En högtalare mäts till 78 dB på 6,0 m avstånd i fri luft. Anta sfärisk spridning. Bestäm ljudintensiteten vid mätpunkten och uppskatta högtalarens akustiska effekt.</p>",
  "s": "<p>I=I₀·10^(L/10)=10⁻¹²·10^7,8=<strong>6,31·10<sup>-5</sup> W/m²</strong>.</p><p>P=I·4πr²=6,31·10<sup>-5</sup>·4π·6,0²=<strong>0,029 W</strong>.</p>"
},
{
  "id": "2.59",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>Fyra identiska maskiner står nära varandra. En maskin ger 82 dB på 3,0 m avstånd. En arbetsplats ligger 12 m från maskinerna. Mellan maskinerna och arbetsplatsen sätts en skärm som släpper igenom 12 % av ljudintensiteten. Anta punktformiga, oberoende källor och fri sfärisk spridning. Bestäm ljudnivån på arbetsplatsen när alla fyra maskiner är igång.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fyra maskiner, skärm och arbetsplats\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"60\" y=\"60\" width=\"45\" height=\"35\" fill=\"#777\"/><rect x=\"115\" y=\"60\" width=\"45\" height=\"35\" fill=\"#777\"/><rect x=\"60\" y=\"110\" width=\"45\" height=\"35\" fill=\"#777\"/><rect x=\"115\" y=\"110\" width=\"45\" height=\"35\" fill=\"#777\"/><rect x=\"270\" y=\"35\" width=\"12\" height=\"150\" fill=\"#8A8178\"/><circle cx=\"415\" cy=\"110\" r=\"10\" fill=\"#E0B28A\" stroke=\"#2B2527\"/><text x=\"75\" y=\"175\" font-size=\"12\">4 maskiner</text><text x=\"255\" y=\"205\" font-size=\"12\">skärm</text><text x=\"390\" y=\"145\" font-size=\"12\">arbetsplats</text><line x1=\"160\" y1=\"185\" x2=\"415\" y2=\"185\" stroke=\"#777\"/><text x=\"287\" y=\"200\" text-anchor=\"middle\" font-size=\"12\">12 m</text></svg></span>",
  "s": "<p>Fyra oberoende lika källor ger +10log₁₀4 = +6,02 dB.</p><p>Ökat avstånd 3→12 m ger −20log₁₀(12/3)=−12,04 dB.</p><p>Skärmen multiplicerar intensiteten med 0,12 och ger 10log₁₀0,12=−9,21 dB.</p><p>L=82+6,02−12,04−9,21=<strong>66,8 dB</strong>.</p>"
},
{
  "id": "2.60",
  "kap": 2,
  "omr": "ljud_horsel",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En okänd punktformig ljudkälla står ute på ett öppet fält. På två punkter längs samma radie från källan mäts 86 dB respektive 80 dB. Punkterna ligger 5,0 m från varandra och den lägre nivån mäts längst bort. Bestäm avståndet från källan till den närmaste mätpunkten och uppskatta källans akustiska effekt.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två mätpunkter från samma ljudkälla\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"55\" y=\"90\" width=\"30\" height=\"48\" fill=\"#5E6F7E\"/><line x1=\"85\" y1=\"115\" x2=\"440\" y2=\"115\" stroke=\"#777\"/><circle cx=\"230\" cy=\"115\" r=\"7\" fill=\"#B43123\"/><circle cx=\"350\" cy=\"115\" r=\"7\" fill=\"#2A5D9E\"/><text x=\"210\" y=\"95\" font-size=\"12\">86 dB</text><text x=\"335\" y=\"95\" font-size=\"12\">80 dB</text><line x1=\"230\" y1=\"150\" x2=\"350\" y2=\"150\" stroke=\"#777\"/><text x=\"290\" y=\"168\" text-anchor=\"middle\" font-size=\"12\">5,0 m</text></svg></span>",
  "s": "<p>För sfärisk spridning är nivåskillnaden ΔL=20log₁₀(r₂/r₁).</p><p>6,0=20log₁₀((r₁+5)/r₁) ⇒ r₁=<strong>5,02 m</strong>.</p><p>Vid 86 dB är I=I₀10^(8,6)=<strong>3,98·10<sup>-4</sup> W/m²</strong>.</p><p>P=4πr₁²I=<strong>0,126 W</strong>.</p>"
},
{
  "id": "2.61",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Ett ekolod arbetar med ultraljud med frekvensen 50 kHz. Ljudhastigheten i vatten är 1500 m/s. Bestäm våglängden.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Ekolod med ultraljud\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><path d=\"M35 75 Q250 45 465 75 L465 190 L35 190 Z\" fill=\"#DDECF4\" stroke=\"#6F94B0\"/><rect x=\"215\" y=\"55\" width=\"70\" height=\"25\" fill=\"#657B8B\"/><path d=\"M245 80 L190 170 M255 80 L310 170\" stroke=\"#B43123\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"250\" y=\"112\" text-anchor=\"middle\" font-size=\"12\">50 kHz</text><line x1=\"35\" y1=\"190\" x2=\"465\" y2=\"190\" stroke=\"#776B5D\" stroke-width=\"6\"/></svg></span>",
  "s": "<p>λ=v/f=1500/50000=<strong>0,030 m = 3,0 cm</strong>.</p>"
},
{
  "id": "2.62",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En ultraljudspuls skickas ned mot havsbotten och ekot kommer tillbaka efter 0,80 s. Ljudhastigheten i vattnet är 1500 m/s. Hur djupt är det?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Djupmätning med eko\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><path d=\"M30 55 L470 55 L470 195 L30 195 Z\" fill=\"#DDECF4\"/><rect x=\"210\" y=\"35\" width=\"80\" height=\"30\" fill=\"#657B8B\"/><line x1=\"245\" y1=\"65\" x2=\"245\" y2=\"190\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"255\" y1=\"190\" x2=\"255\" y2=\"65\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><path d=\"M30 190 Q120 175 220 190 T470 190\" fill=\"#97836E\"/><text x=\"270\" y=\"130\" font-size=\"12\">eko efter 0,80 s</text></svg></span>",
  "s": "<p>Pulsen går ned och tillbaka, alltså 2d=vt.</p><p>d=vt/2=1500·0,80/2=<strong>600 m</strong>.</p>"
},
{
  "id": "2.63",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En hundvissla avger 24 kHz. Klassificera ljudet för en människa: infraljud, hörbart ljud eller ultraljud.</p>",
  "s": "<p>24 kHz ligger över ungefär 20 kHz. Det är därför <strong>ultraljud</strong> för människan.</p>"
},
{
  "id": "2.64",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En infraljudsvåg har frekvensen 8,0 Hz och utbreder sig med 340 m/s i luft. Bestäm våglängden.</p>",
  "s": "<p>λ=v/f=340/8,0=<strong>42,5 m</strong>.</p>"
},
{
  "id": "2.65",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Medicinskt ultraljud har ofta mycket högre frekvens än hörbart ljud. Förklara kort varför högre frekvens kan ge bättre detaljupplösning i en bild.</p>",
  "s": "<p>Högre frekvens ger kortare våglängd när ljudhastigheten är ungefär given.</p><p>Kortare våglängd gör det möjligt att urskilja <strong>mindre strukturer</strong>.</p>"
},
{
  "id": "2.66",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Vid en ultraljudsundersökning skickas en kort puls in i kroppen. Ett eko från en gränsyta registreras 130 μs efter utsändningen. Anta ljudhastigheten 1540 m/s i vävnaden. Bestäm gränsytans djup.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Ultraljudspuls i vävnad\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"45\" y=\"40\" width=\"410\" height=\"155\" fill=\"#F2D7D3\" stroke=\"#2B2527\"/><rect x=\"55\" y=\"90\" width=\"28\" height=\"50\" rx=\"4\" fill=\"#63798A\"/><line x1=\"83\" y1=\"115\" x2=\"355\" y2=\"115\" stroke=\"#B43123\" stroke-width=\"3\"/><line x1=\"355\" y1=\"55\" x2=\"355\" y2=\"175\" stroke=\"#8C5E55\" stroke-width=\"4\"/><line x1=\"355\" y1=\"125\" x2=\"83\" y2=\"125\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><text x=\"220\" y=\"95\" text-anchor=\"middle\" font-size=\"12\">130 μs tur och retur</text></svg></span>",
  "s": "<p>Ekopulsen färdas fram och tillbaka.</p><p>d=vt/2=1540·130·10⁻⁶/2=<strong>10 cm</strong>.</p>"
},
{
  "id": "2.67",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En fladdermus flyger rakt mot en stillastående insekt med 8,0 m/s och sänder ultraljud med frekvensen 45,0 kHz. Bestäm den frekvens som når insekten. Använd ljudhastigheten 340 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fladdermus flyger mot insekt\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><path d=\"M80 110 Q105 75 130 110 Q105 100 80 110\" fill=\"#3E4448\"/><circle cx=\"390\" cy=\"110\" r=\"5\" fill=\"#2B2527\"/><line x1=\"135\" y1=\"110\" x2=\"375\" y2=\"110\" stroke=\"#8BB1CF\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"100\" y1=\"145\" x2=\"170\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><polygon points=\"170,145 161.0,149.3 161.0,140.7\" fill=\"#2B2527\"/><text x=\"135\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2B2527\">8,0 m/s</text><text x=\"230\" y=\"96\" font-size=\"12\">45,0 kHz</text><text x=\"402\" y=\"114\" font-size=\"12\">insekt</text></svg></span>",
  "s": "<p>För en källa som rör sig mot en stillastående observatör gäller f_obs=f₀·v/(v−v_s).</p><p>f_obs=45,0 kHz·340/(340−8,0)=<strong>46,1 kHz</strong>.</p>"
},
{
  "id": "2.68",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En ultraljudsgivare ska kunna urskilja strukturer som är ungefär 0,50 mm stora. Anta som en enkel tumregel att våglängden bör vara högst 0,50 mm. Ljudhastigheten i vävnad är 1540 m/s. Vilken minsta frekvens krävs?</p>",
  "s": "<p>f=v/λ.</p><p>f_min=1540/(0,50·10⁻³)=<strong>3,08 MHz</strong>.</p>"
},
{
  "id": "2.69",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En stillaliggande ubåt sänder en ultraljudspuls mot ett fartyg som rör sig rakt bort från ubåten. Den reflekterade signalens frekvens är 2,20 % lägre än den utsända. Ljudhastigheten i havsvatten är 1500 m/s. Behandla reflektionen som en dubbel dopplereffekt och bestäm fartygets fart.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sonareko från fartyg som avlägsnar sig\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><path d=\"M40 55 L460 55 L460 195 L40 195 Z\" fill=\"#DDECF4\"/><path d=\"M70 120 L150 120 L165 135 L55 135 Z\" fill=\"#5F7180\"/><path d=\"M340 85 L410 85 L425 102 L325 102 Z\" fill=\"#777\"/><line x1=\"165\" y1=\"128\" x2=\"330\" y2=\"96\" stroke=\"#B43123\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"330\" y1=\"108\" x2=\"165\" y2=\"138\" stroke=\"#2A5D9E\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"375\" y1=\"70\" x2=\"430\" y2=\"70\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><polygon points=\"430,70 421.0,74.3 421.0,65.7\" fill=\"#2B2527\"/><text x=\"402\" y=\"63\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2B2527\">v</text><text x=\"245\" y=\"172\" text-anchor=\"middle\" font-size=\"12\">reflekterad frekvens 2,20 % lägre</text></svg></span>",
  "s": "<p>För ett mål som rör sig bort blir den reflekterade frekvenskvoten f_eko/f₀=(v−u)/(v+u).</p><p>Här är f_eko/f₀=0,978.</p><p>0,978=(1500−u)/(1500+u) ⇒ u=<strong>16,7 m/s</strong>, cirka 60,1 km/h.</p>"
},
{
  "id": "2.70",
  "kap": 2,
  "omr": "extrema_frekvenser",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>Vid dopplerultraljud används frekvensen 5,0 MHz för att mäta blodflöde. Den uppmätta frekvensförskjutningen från blodkropparna är 1,80 kHz. Ultraljudsstrålen bildar vinkeln 60° mot blodets rörelseriktning. Använd approximationen Δf=2f₀v cosθ/c med c=1540 m/s och bestäm blodets hastighet. Förklara varför vinkeluppskattningen är viktig.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Dopplerultraljud mot blodflöde\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"45\" y=\"55\" width=\"410\" height=\"130\" fill=\"#F6DDDA\"/><path d=\"M80 145 Q250 70 420 110\" fill=\"none\" stroke=\"#B35B5B\" stroke-width=\"28\"/><line x1=\"90\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#4E80B5\" stroke-width=\"4\"/><path d=\"M205 100 A45 45 0 0 1 230 83\" fill=\"none\" stroke=\"#777\"/><text x=\"218\" y=\"82\" font-size=\"12\">60°</text><line x1=\"255\" y1=\"116\" x2=\"330\" y2=\"105\" stroke=\"#B43123\" stroke-width=\"2.5\"/><polygon points=\"330,105 321.7,110.6 320.5,102.0\" fill=\"#B43123\"/><text x=\"292\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" fill=\"#B43123\">blodflöde</text><text x=\"100\" y=\"72\" font-size=\"12\">5,0 MHz</text><text x=\"300\" y=\"160\" font-size=\"12\">Δf = 1,80 kHz</text></svg></span>",
  "s": "<p>v=Δf·c/(2f₀cosθ)=1800·1540/[2·5,0·10⁶·cos60°]=<strong>0,554 m/s</strong>.</p><p>Eftersom den uppmätta dopplerförskjutningen innehåller faktorn cosθ blir den beräknade hastigheten mycket känslig för fel i vinkeln när θ är stor. Vid 90° skulle ingen dopplerförskjutning mätas trots att blodet rör sig.</p>"
},
{
  "id": "2.71",
  "kap": 2,
  "omr": "vagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två identiska vågor möts i fas. Vad händer med amplituden i den punkt där två vågtoppar sammanfaller?</p>",
  "s": "<p>Elongationerna adderas enligt superpositionsprincipen.</p><p>Två lika stora vågtoppar ger <strong>dubbla amplituden</strong>: konstruktiv interferens.</p>"
},
{
  "id": "2.72",
  "kap": 2,
  "omr": "vagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två koherenta vågor med våglängden 0,40 m når en punkt med vägskillnaden 0,80 m. Blir interferensen konstruktiv eller destruktiv?</p>",
  "s": "<p>Δs=0,80 m=2λ. En heltalsmultipel av λ ger <strong>konstruktiv interferens</strong>.</p>"
},
{
  "id": "2.73",
  "kap": 2,
  "omr": "vagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två koherenta vågor med våglängden 0,50 m når en punkt med vägskillnaden 0,25 m. Blir interferensen konstruktiv eller destruktiv?</p>",
  "s": "<p>Δs=0,25 m=λ/2. En udda halv våglängd ger <strong>destruktiv interferens</strong>.</p>"
},
{
  "id": "2.74",
  "kap": 2,
  "omr": "vagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En plan vattenvåg passerar genom en smal öppning vars bredd är ungefär lika stor som våglängden. Vad händer bakom öppningen?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diffraktion genom smal öppning\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"245\" y1=\"35\" x2=\"245\" y2=\"92\" stroke=\"#2B2527\" stroke-width=\"6\"/><line x1=\"245\" y1=\"138\" x2=\"245\" y2=\"195\" stroke=\"#2B2527\" stroke-width=\"6\"/><line x1=\"55\" y1=\"50\" x2=\"55\" y2=\"180\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"90\" y1=\"50\" x2=\"90\" y2=\"180\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"125\" y1=\"50\" x2=\"125\" y2=\"180\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"180\" stroke=\"#4E80B5\" stroke-width=\"2\"/><line x1=\"195\" y1=\"50\" x2=\"195\" y2=\"180\" stroke=\"#4E80B5\" stroke-width=\"2\"/><path d=\"M255 115 A35 35 0 0 1 290 150\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><path d=\"M255 115 A65 65 0 0 1 320 180\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><path d=\"M255 115 A95 95 0 0 1 350 210\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><text x=\"245\" y=\"120\" text-anchor=\"middle\" font-size=\"11\">öppning ≈ λ</text></svg></span>",
  "s": "<p>Vågen böjs av och sprids åt flera håll. Fenomenet kallas <strong>diffraktion</strong>.</p>"
},
{
  "id": "2.75",
  "kap": 2,
  "omr": "vagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En våg går från ett medium till ett annat. Vad händer med frekvensen vid gränsen om vågkällan är oförändrad?</p>",
  "s": "<p>Frekvensen bestäms av källan och <strong>ändras inte</strong> vid övergången.</p><p>Om våghastigheten ändras måste i stället våglängden ändras eftersom v=fλ.</p>"
},
{
  "id": "2.76",
  "kap": 2,
  "omr": "vagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två vågkällor svänger i fas och sänder vågor med våglängden 0,60 m. Till en punkt P är avstånden 5,10 m respektive 6,00 m. Avgör om P ligger i ett maximum eller minimum och motivera.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Vägskillnad från två källor\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><circle cx=\"80\" cy=\"70\" r=\"8\" fill=\"#4E80B5\"/><circle cx=\"80\" cy=\"165\" r=\"8\" fill=\"#4E80B5\"/><circle cx=\"405\" cy=\"118\" r=\"7\" fill=\"#B43123\"/><line x1=\"88\" y1=\"70\" x2=\"405\" y2=\"118\" stroke=\"#777\"/><line x1=\"88\" y1=\"165\" x2=\"405\" y2=\"118\" stroke=\"#777\"/><text x=\"225\" y=\"72\" font-size=\"12\">5,10 m</text><text x=\"225\" y=\"165\" font-size=\"12\">6,00 m</text><text x=\"105\" y=\"120\" font-size=\"12\">λ = 0,60 m</text></svg></span>",
  "s": "<p>Vägskillnaden Δs=6,00−5,10=<strong>0,9 m</strong>.</p><p>Δs/0,6=1,5 = 1,5. Det är en udda halv multipel av λ.</p><p>P ligger därför i ett <strong>interferensminimum</strong>.</p>"
},
{
  "id": "2.77",
  "kap": 2,
  "omr": "vagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två högtalare sänder ljud i fas. När en mikrofon flyttas längs en viss linje från A till B ökar vägskillnaden mellan högtalarna och mikrofonen med 18 cm. På sträckan går signalen från ett maximum i A via ett mellanliggande maximum till ett maximum i B. Bestäm ljudets våglängd och frekvens. Använd 340 m/s.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Mikrofon flyttas genom interferensfält\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><rect x=\"55\" y=\"55\" width=\"28\" height=\"40\" fill=\"#5E6F7E\"/><rect x=\"55\" y=\"145\" width=\"28\" height=\"40\" fill=\"#5E6F7E\"/><line x1=\"155\" y1=\"118\" x2=\"415\" y2=\"118\" stroke=\"#777\" stroke-dasharray=\"6 4\"/><circle cx=\"170\" cy=\"118\" r=\"6\" fill=\"#B43123\"/><circle cx=\"390\" cy=\"118\" r=\"6\" fill=\"#2A5D9E\"/><line x1=\"175\" y1=\"100\" x2=\"385\" y2=\"100\" stroke=\"#2B2527\" stroke-width=\"2.5\"/><polygon points=\"385,100 376.0,104.3 376.0,95.7\" fill=\"#2B2527\"/><text x=\"280\" y=\"93\" text-anchor=\"middle\" font-size=\"12\" fill=\"#2B2527\">mikrofon flyttas</text><text x=\"280\" y=\"145\" text-anchor=\"middle\" font-size=\"12\">vägskillnaden ökar 18 cm</text></svg></span>",
  "s": "<p>Från maximum till nästa maximum ändras vägskillnaden med en våglängd. Här passeras två maximumintervall, alltså 18 cm=2λ.</p><p>λ=<strong>9 cm</strong>.</p><p>f=v/λ=340/0,090=<strong>3778 Hz</strong>.</p>"
},
{
  "id": "2.78",
  "kap": 2,
  "omr": "vagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En sträng med längden 1,60 m är fast i båda ändar. Ett stående vågmönster har fyra bukar när vibratorn drivs med 20 Hz. Bestäm antalet noder, våglängden och vågens hastighet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fyra bukar på sträng\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><polyline points=\"55.0,115.0 57.0,112.0 58.9,109.0 60.9,106.0 62.8,103.1 64.8,100.2 66.7,97.3 68.7,94.6 70.6,91.9 72.5,89.3 74.5,86.8 76.5,84.4 78.4,82.1 80.3,80.0 82.3,78.0 84.2,76.2 86.2,74.5 88.2,72.9 90.1,71.6 92.0,70.4 94.0,69.3 95.9,68.5 97.9,67.9 99.8,67.4 101.8,67.1 103.8,67.0 105.7,67.1 107.7,67.4 109.6,67.9 111.5,68.5 113.5,69.3 115.5,70.4 117.4,71.6 119.4,72.9 121.3,74.5 123.2,76.2 125.2,78.0 127.2,80.0 129.1,82.1 131.1,84.4 133.0,86.8 134.9,89.3 136.9,91.9 138.8,94.6 140.8,97.3 142.8,100.2 144.7,103.1 146.6,106.0 148.6,109.0 150.6,112.0 152.5,115.0 154.4,118.0 156.4,121.0 158.4,124.0 160.3,126.9 162.2,129.8 164.2,132.7 166.1,135.4 168.1,138.1 170.1,140.7 172.0,143.2 173.9,145.6 175.9,147.9 177.8,150.0 179.8,152.0 181.8,153.8 183.7,155.5 185.7,157.1 187.6,158.4 189.5,159.6 191.5,160.7 193.4,161.5 195.4,162.1 197.3,162.6 199.3,162.9 201.2,163.0 203.2,162.9 205.2,162.6 207.1,162.1 209.1,161.5 211.0,160.7 213.0,159.6 214.9,158.4 216.8,157.1 218.8,155.5 220.8,153.8 222.7,152.0 224.7,150.0 226.6,147.9 228.6,145.6 230.5,143.2 232.5,140.7 234.4,138.1 236.4,135.4 238.3,132.7 240.2,129.8 242.2,126.9 244.2,124.0 246.1,121.0 248.1,118.0 250.0,115.0 251.9,112.0 253.9,109.0 255.8,106.0 257.8,103.1 259.8,100.2 261.7,97.3 263.6,94.6 265.6,91.9 267.6,89.3 269.5,86.8 271.5,84.4 273.4,82.1 275.3,80.0 277.3,78.0 279.2,76.2 281.2,74.5 283.1,72.9 285.1,71.6 287.0,70.4 289.0,69.3 290.9,68.5 292.9,67.9 294.9,67.4 296.8,67.1 298.8,67.0 300.7,67.1 302.6,67.4 304.6,67.9 306.6,68.5 308.5,69.3 310.5,70.4 312.4,71.6 314.4,72.9 316.3,74.5 318.2,76.2 320.2,78.0 322.2,80.0 324.1,82.1 326.0,84.4 328.0,86.8 329.9,89.3 331.9,91.9 333.8,94.6 335.8,97.3 337.8,100.2 339.7,103.1 341.6,106.0 343.6,109.0 345.6,112.0 347.5,115.0 349.4,118.0 351.4,121.0 353.4,124.0 355.3,126.9 357.2,129.8 359.2,132.7 361.2,135.4 363.1,138.1 365.1,140.7 367.0,143.2 369.0,145.6 370.9,147.9 372.8,150.0 374.8,152.0 376.8,153.8 378.7,155.5 380.6,157.1 382.6,158.4 384.6,159.6 386.5,160.7 388.4,161.5 390.4,162.1 392.4,162.6 394.3,162.9 396.2,163.0 398.2,162.9 400.1,162.6 402.1,162.1 404.1,161.5 406.0,160.7 407.9,159.6 409.9,158.4 411.9,157.1 413.8,155.5 415.8,153.8 417.7,152.0 419.7,150.0 421.6,147.9 423.5,145.6 425.5,143.2 427.4,140.7 429.4,138.1 431.3,135.4 433.3,132.7 435.2,129.8 437.2,126.9 439.1,124.0 441.1,121.0 443.1,118.0 445.0,115.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"55.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"152.5\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"250.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"347.5\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><circle cx=\"445.0\" cy=\"115\" r=\"4\" fill=\"#2B2527\"/><text x=\"250\" y=\"190\" text-anchor=\"middle\" font-size=\"12\">L = 1,60 m, f = 20 Hz</text></svg></span>",
  "s": "<p>Fyra bukar ger fyra halva våglängder längs strängen: L=4λ/2.</p><p>Det finns en nod i varje ände och mellan varje par bukar: <strong>5 noder</strong>.</p><p>λ=2L/4=<strong>0,8 m</strong>. v=fλ=20·0,8=<strong>16 m/s</strong>.</p>"
},
{
  "id": "2.79",
  "kap": 2,
  "omr": "vagor",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>Två koherenta vågkällor har våglängden 0,60 m men svänger i motfas. Till en punkt P är avstånden 4,20 m och 5,10 m. Avgör om interferensen i P är konstruktiv eller destruktiv. Hur mycket måste den längre vägen minst ändras, med den kortare oförändrad, för att P ska byta från maximum till minimum?</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Två källor i motfas\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><circle cx=\"90\" cy=\"72\" r=\"9\" fill=\"#4E80B5\"/><circle cx=\"90\" cy=\"165\" r=\"9\" fill=\"#C45C4B\"/><text x=\"110\" y=\"76\" font-size=\"12\">S₁: fas 0</text><text x=\"110\" y=\"169\" font-size=\"12\">S₂: fas π</text><circle cx=\"410\" cy=\"120\" r=\"7\" fill=\"#B43123\"/><line x1=\"99\" y1=\"72\" x2=\"410\" y2=\"120\" stroke=\"#777\"/><line x1=\"99\" y1=\"165\" x2=\"410\" y2=\"120\" stroke=\"#777\"/><text x=\"240\" y=\"65\" font-size=\"12\">4,20 m</text><text x=\"240\" y=\"170\" font-size=\"12\">5,10 m</text></svg></span>",
  "s": "<p>Vägskillnaden är Δs=0,90 m=1,5λ. Denna vägskillnad ger en fasförskjutning 3π.</p><p>Källorna startar dessutom i motfas, alltså ytterligare π. Total fasskillnad blir 4π, vilket är <strong>konstruktiv interferens</strong>.</p><p>För att gå från maximum till närmaste minimum måste total fas ändras π, vilket motsvarar en ändring av vägskillnaden λ/2.</p><p>Minsta ändring är därför <strong>0,30 m</strong>.</p>"
},
{
  "id": "2.80",
  "kap": 2,
  "omr": "vagor",
  "niva": "A",
  "poang": "(0/1/3)",
  "t": "<p>En 0,90 m lång sträng är fast i båda ändar. Vid dragkraften 36 N är den andra harmoniska frekvensen 40 Hz. Strängen byts inte och längden är oförändrad. Vilken dragkraft krävs för att samma svängningsmod ska få frekvensen 55 Hz? Bestäm också strängens linjära massdensitet.</p><span class=\"fig\"><svg preserveAspectRatio=\"xMinYMid meet\" viewBox=\"0 0 500 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Andra harmoniska på spänd sträng\"><rect x=\"8\" y=\"8\" width=\"484\" height=\"214\" rx=\"12\" fill=\"#FBFBFA\" stroke=\"#DEDAD5\"/><line x1=\"60\" y1=\"55\" x2=\"60\" y2=\"170\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"440\" y1=\"55\" x2=\"440\" y2=\"170\" stroke=\"#2B2527\" stroke-width=\"5\"/><polyline points=\"65.0,110.0 67.1,108.4 69.1,106.9 71.2,105.3 73.2,103.7 75.3,102.2 77.3,100.6 79.4,99.1 81.4,97.6 83.5,96.1 85.6,94.6 87.6,93.1 89.7,91.7 91.7,90.3 93.8,88.9 95.8,87.5 97.9,86.2 99.9,84.8 102.0,83.5 104.1,82.3 106.1,81.1 108.2,79.9 110.2,78.7 112.3,77.6 114.3,76.6 116.4,75.5 118.4,74.5 120.5,73.6 122.6,72.7 124.6,71.8 126.7,71.0 128.7,70.3 130.8,69.6 132.8,68.9 134.9,68.3 136.9,67.7 139.0,67.2 141.1,66.7 143.1,66.3 145.2,66.0 147.2,65.7 149.3,65.4 151.3,65.2 153.4,65.1 155.4,65.0 157.5,65.0 159.6,65.0 161.6,65.1 163.7,65.2 165.7,65.4 167.8,65.7 169.8,66.0 171.9,66.3 173.9,66.7 176.0,67.2 178.1,67.7 180.1,68.3 182.2,68.9 184.2,69.6 186.3,70.3 188.3,71.0 190.4,71.8 192.4,72.7 194.5,73.6 196.6,74.5 198.6,75.5 200.7,76.6 202.7,77.6 204.8,78.7 206.8,79.9 208.9,81.1 210.9,82.3 213.0,83.5 215.1,84.8 217.1,86.2 219.2,87.5 221.2,88.9 223.3,90.3 225.3,91.7 227.4,93.1 229.4,94.6 231.5,96.1 233.6,97.6 235.6,99.1 237.7,100.6 239.7,102.2 241.8,103.7 243.8,105.3 245.9,106.9 247.9,108.4 250.0,110.0 252.1,111.6 254.1,113.1 256.2,114.7 258.2,116.3 260.3,117.8 262.3,119.4 264.4,120.9 266.4,122.4 268.5,123.9 270.6,125.4 272.6,126.9 274.7,128.3 276.7,129.7 278.8,131.1 280.8,132.5 282.9,133.8 284.9,135.2 287.0,136.5 289.1,137.7 291.1,138.9 293.2,140.1 295.2,141.3 297.3,142.4 299.3,143.4 301.4,144.5 303.4,145.5 305.5,146.4 307.6,147.3 309.6,148.2 311.7,149.0 313.7,149.7 315.8,150.4 317.8,151.1 319.9,151.7 321.9,152.3 324.0,152.8 326.1,153.3 328.1,153.7 330.2,154.0 332.2,154.3 334.3,154.6 336.3,154.8 338.4,154.9 340.4,155.0 342.5,155.0 344.6,155.0 346.6,154.9 348.7,154.8 350.7,154.6 352.8,154.3 354.8,154.0 356.9,153.7 358.9,153.3 361.0,152.8 363.1,152.3 365.1,151.7 367.2,151.1 369.2,150.4 371.3,149.7 373.3,149.0 375.4,148.2 377.4,147.3 379.5,146.4 381.6,145.5 383.6,144.5 385.7,143.4 387.7,142.4 389.8,141.3 391.8,140.1 393.9,138.9 395.9,137.7 398.0,136.5 400.1,135.2 402.1,133.8 404.2,132.5 406.2,131.1 408.3,129.7 410.3,128.3 412.4,126.9 414.4,125.4 416.5,123.9 418.6,122.4 420.6,120.9 422.7,119.4 424.7,117.8 426.8,116.3 428.8,114.7 430.9,113.1 432.9,111.6 435.0,110.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"250\" y=\"195\" text-anchor=\"middle\" font-size=\"12\">L = 0,90 m, T = 36 N</text></svg></span>",
  "s": "<p>För en given sträng och samma mod är f∝v∝√T.</p><p>T₂=T₁(f₂/f₁)²=36·(55/40)²=<strong>68,1 N</strong>.</p><p>För andra harmoniska på en sträng med fasta ändar är λ=2L/2=L=0,90 m.</p><p>v=fλ=40·0,90=36 m/s och v=√(T/μ) ⇒ μ=T/v²=<strong>0,028 kg/m</strong>.</p>"
},
{
  "id": "3.1",
  "kap": 3,
  "omr": "elektriska_falt",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En elektron befinner sig i ett homogent elektriskt fält med fältstyrkan 3,5·10⁴ N/C. Bestäm kraftens storlek på elektronen.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Elektriskt fält mellan två parallella plattor\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"55\" y=\"35\" width=\"25\" height=\"105\" rx=\"3\" fill=\"#f2b6ac\"/><rect x=\"350\" y=\"35\" width=\"25\" height=\"105\" rx=\"3\" fill=\"#b8d7ea\"/><text x=\"68\" y=\"28\" text-anchor=\"middle\" font-size=\"20\">+</text><text x=\"362\" y=\"28\" text-anchor=\"middle\" font-size=\"20\">−</text><line x1=\"110\" y1=\"50\" x2=\"325\" y2=\"50\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"75\" x2=\"325\" y2=\"75\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"100\" x2=\"325\" y2=\"100\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"125\" x2=\"325\" y2=\"125\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"210\" cy=\"100\" r=\"8\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Elektron i homogent elektriskt fält</text></svg></div>",
  "s": "<p>F=|q|E=1,602·10⁻¹⁹·3,5·10⁴=<strong>5,61·10⁻¹⁵ N</strong>. Kraften är riktad motsatt fältet eftersom elektronen är negativ.</p>"
},
{
  "id": "3.2",
  "kap": 3,
  "omr": "elektriska_falt",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två parallella plattor har spänningsskillnaden 2,4 kV och avståndet 3,0 cm. Mellan plattorna finns ett homogent elektriskt fält.</p><ol><li>Bestäm fältstyrkan.</li><li>Bestäm accelerationen för en proton i fältet. Protonmassan är 1,67·10⁻²⁷ kg.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Elektriskt fält mellan två parallella plattor\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"55\" y=\"35\" width=\"25\" height=\"105\" rx=\"3\" fill=\"#f2b6ac\"/><rect x=\"350\" y=\"35\" width=\"25\" height=\"105\" rx=\"3\" fill=\"#b8d7ea\"/><text x=\"68\" y=\"28\" text-anchor=\"middle\" font-size=\"20\">+</text><text x=\"362\" y=\"28\" text-anchor=\"middle\" font-size=\"20\">−</text><line x1=\"110\" y1=\"50\" x2=\"325\" y2=\"50\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"75\" x2=\"325\" y2=\"75\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"100\" x2=\"325\" y2=\"100\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"125\" x2=\"325\" y2=\"125\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"210\" cy=\"100\" r=\"8\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Proton mellan parallella plattor</text></svg></div>",
  "s": "<p>E=U/d=2400/0,030=<strong>8,0·10⁴ N/C</strong>.</p><p>F=qE=1,602·10⁻¹⁹·8,0·10⁴=1,282·10⁻¹⁴ N.</p><p>a=F/m=1,282·10⁻¹⁴/1,67·10⁻²⁷=<strong>7,68·10¹² m/s²</strong>.</p>"
},
{
  "id": "3.3",
  "kap": 3,
  "omr": "elektriska_falt",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En liten oljedroppe med massan 4,8·10⁻¹⁵ kg svävar stilla mellan två horisontella plattor. Det elektriska fältet är riktat nedåt och har storleken 1,5·10⁵ N/C.</p><ol><li>Bestäm droppens laddning inklusive tecken.</li><li>Hur många elementarladdningar motsvarar detta ungefär?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Elektriskt fält mellan två parallella plattor\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"55\" y=\"35\" width=\"25\" height=\"105\" rx=\"3\" fill=\"#f2b6ac\"/><rect x=\"350\" y=\"35\" width=\"25\" height=\"105\" rx=\"3\" fill=\"#b8d7ea\"/><text x=\"68\" y=\"28\" text-anchor=\"middle\" font-size=\"20\">+</text><text x=\"362\" y=\"28\" text-anchor=\"middle\" font-size=\"20\">−</text><line x1=\"110\" y1=\"50\" x2=\"325\" y2=\"50\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"75\" x2=\"325\" y2=\"75\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"100\" x2=\"325\" y2=\"100\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"110\" y1=\"125\" x2=\"325\" y2=\"125\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"210\" cy=\"100\" r=\"8\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Svävande laddad oljedroppe</text></svg></div>",
  "s": "<p>För att sväva måste den elektriska kraften vara uppåt och lika stor som mg. Eftersom fältet är nedåt måste laddningen vara negativ.</p><p>|q|E=mg ⇒ |q|=mg/E=4,8·10⁻¹⁵·9,82/(1,5·10⁵)=3,14·10⁻¹⁹ C.</p><p>q=<strong>−3,14·10⁻¹⁹ C</strong>.</p><p>|q|/e=3,14/1,602=<strong>1,96 ≈ 2 elementarladdningar</strong>. Droppen bär alltså ungefär laddningen −2e.</p>"
},
{
  "id": "3.4",
  "kap": 3,
  "omr": "kondensatorer",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En kondensator på 47 μF laddas till 12 V. Hur stor laddning lagras?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Parallellplattkondensator\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"155\" y1=\"38\" x2=\"155\" y2=\"140\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"275\" y1=\"38\" x2=\"275\" y2=\"140\" stroke=\"#2B2527\" stroke-width=\"5\"/><text x=\"145\" y=\"28\" font-size=\"20\">+</text><text x=\"270\" y=\"28\" font-size=\"20\">−</text><line x1=\"165\" y1=\"92\" x2=\"265\" y2=\"92\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"155\" y1=\"156\" x2=\"275\" y2=\"156\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"155\" y1=\"149\" x2=\"155\" y2=\"163\" stroke=\"#B43123\"/><line x1=\"275\" y1=\"149\" x2=\"275\" y2=\"163\" stroke=\"#B43123\"/><text x=\"215\" y=\"176\" text-anchor=\"middle\" font-size=\"14\" fill=\"#B43123\">d</text></svg></div>",
  "s": "<p>Q=CU=47·10⁻⁶·12=<strong>5,64·10⁻⁴ C = 564 μC</strong>.</p>"
},
{
  "id": "3.5",
  "kap": 3,
  "omr": "kondensatorer",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En kondensator på 220 μF laddas till 9,0 V.</p><ol><li>Bestäm den lagrade energin.</li><li>Om spänningen fördubblas, med vilken faktor ändras energin?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Parallellplattkondensator\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"155\" y1=\"38\" x2=\"155\" y2=\"140\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"275\" y1=\"38\" x2=\"275\" y2=\"140\" stroke=\"#2B2527\" stroke-width=\"5\"/><text x=\"145\" y=\"28\" font-size=\"20\">+</text><text x=\"270\" y=\"28\" font-size=\"20\">−</text><line x1=\"165\" y1=\"92\" x2=\"265\" y2=\"92\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"155\" y1=\"156\" x2=\"275\" y2=\"156\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"155\" y1=\"149\" x2=\"155\" y2=\"163\" stroke=\"#B43123\"/><line x1=\"275\" y1=\"149\" x2=\"275\" y2=\"163\" stroke=\"#B43123\"/><text x=\"215\" y=\"176\" text-anchor=\"middle\" font-size=\"14\" fill=\"#B43123\">d</text></svg></div>",
  "s": "<p>W=½CU²=0,5·220·10⁻⁶·9,0²=<strong>8,91 mJ</strong>.</p><p>Eftersom W∝U² ger dubblerad spänning <strong>fyra gånger så stor energi</strong>.</p>"
},
{
  "id": "3.6",
  "kap": 3,
  "omr": "kondensatorer",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En parallellplattkondensator kopplas till ett 200 V-batteri. Plattavståndet är 2,0 mm. Med batteriet fortfarande anslutet ökas plattavståndet till 5,0 mm.</p><ol><li>Hur förändras fältstyrkan mellan plattorna?</li><li>Hur förändras kapacitansen och den lagrade energin?</li><li>Förklara var energiskillnaden tar vägen.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Parallellplattkondensator\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"155\" y1=\"38\" x2=\"155\" y2=\"140\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"275\" y1=\"38\" x2=\"275\" y2=\"140\" stroke=\"#2B2527\" stroke-width=\"5\"/><text x=\"145\" y=\"28\" font-size=\"20\">+</text><text x=\"270\" y=\"28\" font-size=\"20\">−</text><line x1=\"165\" y1=\"92\" x2=\"265\" y2=\"92\" stroke=\"#2A5D9E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"155\" y1=\"156\" x2=\"275\" y2=\"156\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"155\" y1=\"149\" x2=\"155\" y2=\"163\" stroke=\"#B43123\"/><line x1=\"275\" y1=\"149\" x2=\"275\" y2=\"163\" stroke=\"#B43123\"/><text x=\"215\" y=\"176\" text-anchor=\"middle\" font-size=\"14\" fill=\"#B43123\">d</text></svg></div>",
  "s": "<p>Med batteriet anslutet hålls U konstant. E=U/d. Från 2,0 mm till 5,0 mm minskar E med faktorn 2/5: från 1,00·10⁵ till <strong>4,0·10⁴ V/m</strong>.</p><p>För parallella plattor C=εA/d, så C minskar till <strong>0,40 av ursprungsvärdet</strong>. Eftersom W=½CU² och U är konstant minskar även energin till <strong>0,40 av ursprungsvärdet</strong>.</p><p>När plattorna dras isär utför det elektriska fältet negativt arbete på den yttre kraften, samtidigt som laddning strömmar tillbaka till batteriet. Energi återförs därför till kretsen/batteriet.</p>"
},
{
  "id": "3.7",
  "kap": 3,
  "omr": "magnetism",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En 0,30 m lång rak ledare befinner sig vinkelrätt mot ett magnetfält på 0,80 T. Strömmen är 4,0 A. Bestäm den magnetiska kraften på ledaren.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Strömförande ledare i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"65\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><line x1=\"75\" y1=\"155\" x2=\"350\" y2=\"155\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"215\" y1=\"155\" x2=\"215\" y2=\"80\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><text x=\"224\" y=\"96\" font-size=\"14\" fill=\"#B43123\">F</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Strömförande ledare i magnetfält</text></svg></div>",
  "s": "<p>F=BIl=0,80·4,0·0,30=<strong>0,96 N</strong>.</p>"
},
{
  "id": "3.8",
  "kap": 3,
  "omr": "magnetism",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En horisontell kopparstav med längden 0,25 m och massan 18 g ligger i ett homogent magnetfält på 0,60 T. Magnetfältet och staven är vinkelräta mot varandra.</p><p>Hur stor ström måste gå genom staven för att den magnetiska kraften precis ska balansera tyngdkraften?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Strömförande ledare i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"65\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><line x1=\"75\" y1=\"155\" x2=\"350\" y2=\"155\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"215\" y1=\"155\" x2=\"215\" y2=\"80\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><text x=\"224\" y=\"96\" font-size=\"14\" fill=\"#B43123\">F</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Magnetisk svävning av ledare</text></svg></div>",
  "s": "<p>Jämvikt kräver BIl=mg.</p><p>I=mg/(Bl)=0,018·9,82/(0,60·0,25)=<strong>1,18 A</strong>.</p><p>Strömriktningen väljs så att kraften enligt högerhandsregeln blir uppåt.</p>"
},
{
  "id": "3.9",
  "kap": 3,
  "omr": "magnetism",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>Två långa parallella ledare sitter 8,0 cm från varandra och leder 15 A respektive 24 A i samma riktning. Betrakta en 0,50 m lång del av ledarna.</p><ol><li>Bestäm kraftens storlek mellan ledarna.</li><li>Är kraften attraherande eller repellerande?</li><li>Bestäm vilket magnetfält den ena ledaren skapar vid den andra.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Strömförande ledare i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"65\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"65\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"95\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"125\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"155\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"185\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"215\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"245\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"275\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"305\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"335\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"45\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"75\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"105\" r=\"3\" fill=\"#2A5D9E\"/><circle cx=\"365\" cy=\"135\" r=\"3\" fill=\"#2A5D9E\"/><line x1=\"75\" y1=\"155\" x2=\"350\" y2=\"155\" stroke=\"#2B2527\" stroke-width=\"5\"/><line x1=\"215\" y1=\"155\" x2=\"215\" y2=\"80\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><text x=\"224\" y=\"96\" font-size=\"14\" fill=\"#B43123\">F</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Parallella strömledare</text></svg></div>",
  "s": "<p>F/L=μ₀I₁I₂/(2πd). Med μ₀=4π·10⁻⁷:</p><p>F = (4π·10⁻⁷·15·24·0,50)/(2π·0,080)=<strong>4,50·10⁻⁴ N</strong>.</p><p>Strömmar i samma riktning <strong>attraherar</strong>.</p><p>B₁=μ₀I₁/(2πd)=4π·10⁻⁷·15/(2π·0,080)=<strong>3,75·10⁻⁵ T</strong>.</p>"
},
{
  "id": "3.10",
  "kap": 3,
  "omr": "laddade_partiklar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En proton rör sig med 2,0·10⁶ m/s vinkelrätt mot ett magnetfält på 0,35 T. Bestäm den magnetiska kraftens storlek.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Laddad partikel böjs i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><g transform=\"translate(55,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><path d=\"M80 120 Q155 25 270 62 Q340 84 335 142\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"120\" x2=\"130\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"120\" y=\"72\" font-size=\"14\">v</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Proton i magnetfält</text></svg></div>",
  "s": "<p>F=qvB=1,602·10⁻¹⁹·2,0·10⁶·0,35=<strong>1,12·10⁻¹³ N</strong>.</p>"
},
{
  "id": "3.11",
  "kap": 3,
  "omr": "laddade_partiklar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En proton med farten 3,0·10⁶ m/s går vinkelrätt in i ett homogent magnetfält på 0,20 T. Protonmassan är 1,67·10⁻²⁷ kg.</p><ol><li>Visa att banan blir cirkulär.</li><li>Bestäm banradien.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Laddad partikel böjs i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><g transform=\"translate(55,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><path d=\"M80 120 Q155 25 270 62 Q340 84 335 142\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"120\" x2=\"130\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"120\" y=\"72\" font-size=\"14\">v</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Cirkulär protonbana</text></svg></div>",
  "s": "<p>Den magnetiska kraften qvB är alltid vinkelrät mot hastigheten och ändrar därför riktningen men inte farten. Den fungerar som centripetalkraft.</p><p>qvB=mv²/r ⇒ r=mv/(qB)=1,67·10⁻²⁷·3,0·10⁶/(1,602·10⁻¹⁹·0,20)=<strong>0,156 m</strong>.</p>"
},
{
  "id": "3.12",
  "kap": 3,
  "omr": "laddade_partiklar",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>I en hastighetsväljare korsas ett elektriskt fält E=3,0·10⁴ V/m och ett magnetfält B=0,12 T vinkelrätt mot varandra. Joner går rakt igenom utan avböjning och går sedan in i ett område med endast magnetfältet 0,12 T. Där böjs de i en cirkel med radien 0,145 m. Jonerna har laddningen +e.</p><p>Bestäm jonens massa och identifiera ungefär vilken masstal den motsvarar. Använd 1 u = 1,66·10⁻²⁷ kg.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Laddad partikel böjs i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><g transform=\"translate(55,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><path d=\"M80 120 Q155 25 270 62 Q340 84 335 142\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"120\" x2=\"130\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"120\" y=\"72\" font-size=\"14\">v</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Hastighetsväljare och masspektrometer</text></svg></div>",
  "s": "<p>I hastighetsväljaren balanserar krafterna: qE=qvB ⇒ v=E/B=3,0·10⁴/0,12=<strong>2,50·10⁵ m/s</strong>.</p><p>I magnetfältet: qvB=mv²/r ⇒ m=qBr/v.</p><p>m=1,602·10⁻¹⁹·0,12·0,145/(2,50·10⁵)=<strong>1,12·10⁻²⁶ kg</strong>.</p><p>m/u=1,12·10⁻²⁶/(1,66·10⁻²⁷)=<strong>6,7</strong>, alltså ungefär masstal <strong>7</strong>.</p>"
},
{
  "id": "3.13",
  "kap": 3,
  "omr": "jordens_magnetfalt",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En kompassnål ställer in sig i nord-sydlig riktning. Vilken fysikalisk växelverkan gör detta möjligt?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Jorden med förenklade magnetfältslinjer\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"215\" cy=\"95\" r=\"48\" fill=\"#9bc6df\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M190 57 Q215 42 240 56 Q233 68 244 79 Q229 88 233 102 Q215 112 199 100 Q202 85 188 76 Z\" fill=\"#8cbf7a\" opacity=\".9\"/><path d=\"M215 14 C120 26 113 151 215 176\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><path d=\"M215 14 C310 26 317 151 215 176\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"155\" stroke=\"#2B2527\" stroke-dasharray=\"4 4\"/><text x=\"225\" y=\"28\" font-size=\"14\">magnetisk axel</text></svg></div>",
  "s": "<p>Kompassnålen är en liten magnet. Jordens magnetfält ger ett vridmoment som orienterar nålen längs fältet. Därför kan kompassen visa ungefär <strong>magnetisk nordriktning</strong>.</p>"
},
{
  "id": "3.14",
  "kap": 3,
  "omr": "jordens_magnetfalt",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>På en plats är jordens magnetfält 52 μT och inklinationsvinkeln 68° nedåt från horisontalplanet.</p><ol><li>Bestäm den horisontella komponenten.</li><li>Bestäm den vertikala komponenten.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Jorden med förenklade magnetfältslinjer\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"215\" cy=\"95\" r=\"48\" fill=\"#9bc6df\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M190 57 Q215 42 240 56 Q233 68 244 79 Q229 88 233 102 Q215 112 199 100 Q202 85 188 76 Z\" fill=\"#8cbf7a\" opacity=\".9\"/><path d=\"M215 14 C120 26 113 151 215 176\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><path d=\"M215 14 C310 26 317 151 215 176\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"155\" stroke=\"#2B2527\" stroke-dasharray=\"4 4\"/><text x=\"225\" y=\"28\" font-size=\"14\">magnetisk axel</text></svg></div>",
  "s": "<p>B<sub>h</sub>=B cos68°=52·cos68°=<strong>19,5 μT</strong>.</p><p>B<sub>v</sub>=B sin68°=<strong>48,2 μT</strong> nedåt.</p>"
},
{
  "id": "3.15",
  "kap": 3,
  "omr": "jordens_magnetfalt",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En rak kraftledning går exakt öst-väst och leder 900 A mot öster. En sensor står 12 m rakt under ledningen. Jordens horisontella magnetfält där är 18 μT riktat mot norr.</p><p>Bestäm storlek och riktning på den resulterande horisontella magnetfältkomponenten vid sensorn. Anta en oändligt lång rak ledare.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Jorden med förenklade magnetfältslinjer\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"215\" cy=\"95\" r=\"48\" fill=\"#9bc6df\" stroke=\"#2B2527\" stroke-width=\"2\"/><path d=\"M190 57 Q215 42 240 56 Q233 68 244 79 Q229 88 233 102 Q215 112 199 100 Q202 85 188 76 Z\" fill=\"#8cbf7a\" opacity=\".9\"/><path d=\"M215 14 C120 26 113 151 215 176\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><path d=\"M215 14 C310 26 317 151 215 176\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"155\" stroke=\"#2B2527\" stroke-dasharray=\"4 4\"/><text x=\"225\" y=\"28\" font-size=\"14\">magnetisk axel</text></svg></div>",
  "s": "<p>Ledningens fält är B=μ₀I/(2πr)=4π·10⁻⁷·900/(2π·12)=<strong>15 μT</strong>.</p><p>Med högerhandsregeln: ström mot öster ger fält vid en punkt under ledningen riktat <strong>mot norr</strong>. Det ligger alltså i samma riktning som jordens horisontella fält.</p><p>B<sub>res</sub>=18+15=<strong>33 μT mot norr</strong>.</p>"
},
{
  "id": "3.16",
  "kap": 3,
  "omr": "induktion",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Magnetflödet genom en spole med 200 varv minskar från 3,0·10⁻⁴ Wb till 0 på 0,050 s. Bestäm den inducerade emk:ns belopp.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Spole och magnet vid induktion\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><ellipse cx=\"130\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"144\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"158\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"172\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"186\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"200\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"214\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"228\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"242\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"256\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><rect x=\"305\" y=\"62\" width=\"70\" height=\"66\" rx=\"7\" fill=\"#f2b6ac\" stroke=\"#2B2527\"/><text x=\"322\" y=\"101\" font-size=\"20\">N</text><text x=\"352\" y=\"101\" font-size=\"20\">S</text><line x1=\"380\" y1=\"95\" x2=\"410\" y2=\"95\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><text x=\"355\" y=\"151\" font-size=\"14\">rörelse</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Förändrat magnetflöde genom spole</text></svg></div>",
  "s": "<p>|ε|=N|ΔΦ|/Δt=200·3,0·10⁻⁴/0,050=<strong>1,20 V</strong>.</p>"
},
{
  "id": "3.17",
  "kap": 3,
  "omr": "induktion",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En 0,40 m lång metallstav rör sig med 6,0 m/s vinkelrätt mot ett homogent magnetfält på 0,75 T.</p><ol><li>Bestäm den inducerade spänningen mellan stavens ändar.</li><li>Förklara varför laddningar separeras i staven.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Spole och magnet vid induktion\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><ellipse cx=\"130\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"144\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"158\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"172\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"186\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"200\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"214\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"228\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"242\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"256\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><rect x=\"305\" y=\"62\" width=\"70\" height=\"66\" rx=\"7\" fill=\"#f2b6ac\" stroke=\"#2B2527\"/><text x=\"322\" y=\"101\" font-size=\"20\">N</text><text x=\"352\" y=\"101\" font-size=\"20\">S</text><line x1=\"380\" y1=\"95\" x2=\"410\" y2=\"95\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><text x=\"355\" y=\"151\" font-size=\"14\">rörelse</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Rörelseinduktion</text></svg></div>",
  "s": "<p>ε=Blv=0,75·0,40·6,0=<strong>1,80 V</strong>.</p><p>De fria laddningarna i staven rör sig tillsammans med staven och påverkas av den magnetiska Lorentzkraften qv×B. Positiva och negativa laddningar separeras tills ett elektriskt fält balanserar den magnetiska kraften.</p>"
},
{
  "id": "3.18",
  "kap": 3,
  "omr": "induktion",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En kvadratisk ledarslinga med sidan 0,20 m och resistansen 0,80 Ω dras med konstant fart 1,5 m/s ut ur ett område med homogent magnetfält 0,60 T. Fältet är vinkelrätt mot slingan.</p><ol><li>Bestäm den inducerade strömmen medan slingan lämnar fältområdet.</li><li>Bestäm den magnetiska bromskraften på slingan.</li><li>Visa att den mekaniska effekten som krävs motsvarar den elektriska värmeeffekten.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Spole och magnet vid induktion\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><ellipse cx=\"130\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"144\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"158\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"172\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"186\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"200\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"214\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"228\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"242\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"256\" cy=\"95\" rx=\"16\" ry=\"46\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><rect x=\"305\" y=\"62\" width=\"70\" height=\"66\" rx=\"7\" fill=\"#f2b6ac\" stroke=\"#2B2527\"/><text x=\"322\" y=\"101\" font-size=\"20\">N</text><text x=\"352\" y=\"101\" font-size=\"20\">S</text><line x1=\"380\" y1=\"95\" x2=\"410\" y2=\"95\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><text x=\"355\" y=\"151\" font-size=\"14\">rörelse</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Slinga lämnar magnetfält</text></svg></div>",
  "s": "<p>Arean i fält minskar med hastigheten l·v. ε=B l v=0,60·0,20·1,5=<strong>0,180 V</strong>.</p><p>I=ε/R=0,180/0,80=<strong>0,225 A</strong>.</p><p>Den ledarsida som ligger i fältet får kraft F=BIl=0,60·0,225·0,20=<strong>0,0270 N</strong> mot rörelsen enligt Lenz lag.</p><p>Mekanisk effekt Fv=0,0270·1,5=<strong>0,0405 W</strong>. Elektrisk effekt I²R=0,225²·0,80=<strong>0,0405 W</strong>. De är lika, som energiprincipen kräver.</p>"
},
{
  "id": "3.19",
  "kap": 3,
  "omr": "vaxelstrom",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Elnätets frekvens är 50 Hz. Bestäm perioden för växelspänningen.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Sinusformad växelspänning\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"35\" y1=\"88\" x2=\"395\" y2=\"88\" stroke=\"#8A858E\"/><polyline points=\"35,88.0 38,81.4 41,75.0 44,68.9 47,63.3 50,58.3 53,54.0 56,50.6 59,48.1 62,46.5 65,46.0 68,46.5 71,48.1 74,50.6 77,54.0 80,58.3 83,63.3 86,68.9 89,75.0 92,81.4 95,88.0 98,94.6 101,101.0 104,107.1 107,112.7 110,117.7 113,122.0 116,125.4 119,127.9 122,129.5 125,130.0 128,129.5 131,127.9 134,125.4 137,122.0 140,117.7 143,112.7 146,107.1 149,101.0 152,94.6 155,88.0 158,81.4 161,75.0 164,68.9 167,63.3 170,58.3 173,54.0 176,50.6 179,48.1 182,46.5 185,46.0 188,46.5 191,48.1 194,50.6 197,54.0 200,58.3 203,63.3 206,68.9 209,75.0 212,81.4 215,88.0 218,94.6 221,101.0 224,107.1 227,112.7 230,117.7 233,122.0 236,125.4 239,127.9 242,129.5 245,130.0 248,129.5 251,127.9 254,125.4 257,122.0 260,117.7 263,112.7 266,107.1 269,101.0 272,94.6 275,88.0 278,81.4 281,75.0 284,68.9 287,63.3 290,58.3 293,54.0 296,50.6 299,48.1 302,46.5 305,46.0 308,46.5 311,48.1 314,50.6 317,54.0 320,58.3 323,63.3 326,68.9 329,75.0 332,81.4 335,88.0 338,94.6 341,101.0 344,107.1 347,112.7 350,117.7 353,122.0 356,125.4 359,127.9 362,129.5 365,130.0 368,129.5 371,127.9 374,125.4 377,122.0 380,117.7 383,112.7 386,107.1 389,101.0 392,94.6 395,88.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">50 Hz växelspänning</text></svg></div>",
  "s": "<p>T=1/f=1/50=<strong>0,020 s = 20 ms</strong>.</p>"
},
{
  "id": "3.20",
  "kap": 3,
  "omr": "vaxelstrom",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En sinusformad växelspänning har effektivvärdet 230 V.</p><ol><li>Bestäm toppvärdet.</li><li>Vilken medeleffekt utvecklas i ett rent resistivt element på 46 Ω?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Sinusformad växelspänning\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"35\" y1=\"88\" x2=\"395\" y2=\"88\" stroke=\"#8A858E\"/><polyline points=\"35,88.0 38,81.4 41,75.0 44,68.9 47,63.3 50,58.3 53,54.0 56,50.6 59,48.1 62,46.5 65,46.0 68,46.5 71,48.1 74,50.6 77,54.0 80,58.3 83,63.3 86,68.9 89,75.0 92,81.4 95,88.0 98,94.6 101,101.0 104,107.1 107,112.7 110,117.7 113,122.0 116,125.4 119,127.9 122,129.5 125,130.0 128,129.5 131,127.9 134,125.4 137,122.0 140,117.7 143,112.7 146,107.1 149,101.0 152,94.6 155,88.0 158,81.4 161,75.0 164,68.9 167,63.3 170,58.3 173,54.0 176,50.6 179,48.1 182,46.5 185,46.0 188,46.5 191,48.1 194,50.6 197,54.0 200,58.3 203,63.3 206,68.9 209,75.0 212,81.4 215,88.0 218,94.6 221,101.0 224,107.1 227,112.7 230,117.7 233,122.0 236,125.4 239,127.9 242,129.5 245,130.0 248,129.5 251,127.9 254,125.4 257,122.0 260,117.7 263,112.7 266,107.1 269,101.0 272,94.6 275,88.0 278,81.4 281,75.0 284,68.9 287,63.3 290,58.3 293,54.0 296,50.6 299,48.1 302,46.5 305,46.0 308,46.5 311,48.1 314,50.6 317,54.0 320,58.3 323,63.3 326,68.9 329,75.0 332,81.4 335,88.0 338,94.6 341,101.0 344,107.1 347,112.7 350,117.7 353,122.0 356,125.4 359,127.9 362,129.5 365,130.0 368,129.5 371,127.9 374,125.4 377,122.0 380,117.7 383,112.7 386,107.1 389,101.0 392,94.6 395,88.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Sinusformad nätspänning</text></svg></div>",
  "s": "<p>U<sub>max</sub>=√2 U<sub>eff</sub>=√2·230=<strong>325 V</strong>.</p><p>P=U<sub>eff</sub>²/R=230²/46=<strong>1,15 kW</strong>.</p>"
},
{
  "id": "3.21",
  "kap": 3,
  "omr": "vaxelstrom",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En generator ger spänningen u(t)=170 sin(100πt) V över ett motstånd på 34 Ω.</p><ol><li>Bestäm frekvensen.</li><li>Bestäm effektivvärdet av spänning och ström.</li><li>Bestäm den energi som omvandlas till värme under 3,0 minuter.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Sinusformad växelspänning\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"35\" y1=\"88\" x2=\"395\" y2=\"88\" stroke=\"#8A858E\"/><polyline points=\"35,88.0 38,81.4 41,75.0 44,68.9 47,63.3 50,58.3 53,54.0 56,50.6 59,48.1 62,46.5 65,46.0 68,46.5 71,48.1 74,50.6 77,54.0 80,58.3 83,63.3 86,68.9 89,75.0 92,81.4 95,88.0 98,94.6 101,101.0 104,107.1 107,112.7 110,117.7 113,122.0 116,125.4 119,127.9 122,129.5 125,130.0 128,129.5 131,127.9 134,125.4 137,122.0 140,117.7 143,112.7 146,107.1 149,101.0 152,94.6 155,88.0 158,81.4 161,75.0 164,68.9 167,63.3 170,58.3 173,54.0 176,50.6 179,48.1 182,46.5 185,46.0 188,46.5 191,48.1 194,50.6 197,54.0 200,58.3 203,63.3 206,68.9 209,75.0 212,81.4 215,88.0 218,94.6 221,101.0 224,107.1 227,112.7 230,117.7 233,122.0 236,125.4 239,127.9 242,129.5 245,130.0 248,129.5 251,127.9 254,125.4 257,122.0 260,117.7 263,112.7 266,107.1 269,101.0 272,94.6 275,88.0 278,81.4 281,75.0 284,68.9 287,63.3 290,58.3 293,54.0 296,50.6 299,48.1 302,46.5 305,46.0 308,46.5 311,48.1 314,50.6 317,54.0 320,58.3 323,63.3 326,68.9 329,75.0 332,81.4 335,88.0 338,94.6 341,101.0 344,107.1 347,112.7 350,117.7 353,122.0 356,125.4 359,127.9 362,129.5 365,130.0 368,129.5 371,127.9 374,125.4 377,122.0 380,117.7 383,112.7 386,107.1 389,101.0 392,94.6 395,88.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Generatorns växelspänning</text></svg></div>",
  "s": "<p>ω=100π rad/s ⇒ f=ω/(2π)=<strong>50 Hz</strong>.</p><p>U<sub>eff</sub>=170/√2=<strong>120 V</strong>. I<sub>eff</sub>=U/R=120,2/34=<strong>3,54 A</strong>.</p><p>P=U²/R=120,2²/34=<strong>425 W</strong>. På 180 s: E=Pt=425·180=<strong>7,65·10⁴ J = 76,5 kJ</strong>.</p>"
},
{
  "id": "3.22",
  "kap": 3,
  "omr": "vaxelstrom_spole_kondensator",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En spole med induktansen 0,20 H ansluts till växelström med frekvensen 50 Hz. Bestäm den induktiva reaktansen.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Sinusformad växelspänning\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"35\" y1=\"88\" x2=\"395\" y2=\"88\" stroke=\"#8A858E\"/><polyline points=\"35,88.0 38,81.4 41,75.0 44,68.9 47,63.3 50,58.3 53,54.0 56,50.6 59,48.1 62,46.5 65,46.0 68,46.5 71,48.1 74,50.6 77,54.0 80,58.3 83,63.3 86,68.9 89,75.0 92,81.4 95,88.0 98,94.6 101,101.0 104,107.1 107,112.7 110,117.7 113,122.0 116,125.4 119,127.9 122,129.5 125,130.0 128,129.5 131,127.9 134,125.4 137,122.0 140,117.7 143,112.7 146,107.1 149,101.0 152,94.6 155,88.0 158,81.4 161,75.0 164,68.9 167,63.3 170,58.3 173,54.0 176,50.6 179,48.1 182,46.5 185,46.0 188,46.5 191,48.1 194,50.6 197,54.0 200,58.3 203,63.3 206,68.9 209,75.0 212,81.4 215,88.0 218,94.6 221,101.0 224,107.1 227,112.7 230,117.7 233,122.0 236,125.4 239,127.9 242,129.5 245,130.0 248,129.5 251,127.9 254,125.4 257,122.0 260,117.7 263,112.7 266,107.1 269,101.0 272,94.6 275,88.0 278,81.4 281,75.0 284,68.9 287,63.3 290,58.3 293,54.0 296,50.6 299,48.1 302,46.5 305,46.0 308,46.5 311,48.1 314,50.6 317,54.0 320,58.3 323,63.3 326,68.9 329,75.0 332,81.4 335,88.0 338,94.6 341,101.0 344,107.1 347,112.7 350,117.7 353,122.0 356,125.4 359,127.9 362,129.5 365,130.0 368,129.5 371,127.9 374,125.4 377,122.0 380,117.7 383,112.7 386,107.1 389,101.0 392,94.6 395,88.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Spole i växelström</text></svg></div>",
  "s": "<p>X<sub>L</sub>=2πfL=2π·50·0,20=<strong>62,8 Ω</strong>.</p>"
},
{
  "id": "3.23",
  "kap": 3,
  "omr": "vaxelstrom_spole_kondensator",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En kondensator på 47 μF ansluts till 230 V, 50 Hz.</p><ol><li>Bestäm den kapacitiva reaktansen.</li><li>Bestäm strömmens effektivvärde.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Sinusformad växelspänning\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"35\" y1=\"88\" x2=\"395\" y2=\"88\" stroke=\"#8A858E\"/><polyline points=\"35,88.0 38,81.4 41,75.0 44,68.9 47,63.3 50,58.3 53,54.0 56,50.6 59,48.1 62,46.5 65,46.0 68,46.5 71,48.1 74,50.6 77,54.0 80,58.3 83,63.3 86,68.9 89,75.0 92,81.4 95,88.0 98,94.6 101,101.0 104,107.1 107,112.7 110,117.7 113,122.0 116,125.4 119,127.9 122,129.5 125,130.0 128,129.5 131,127.9 134,125.4 137,122.0 140,117.7 143,112.7 146,107.1 149,101.0 152,94.6 155,88.0 158,81.4 161,75.0 164,68.9 167,63.3 170,58.3 173,54.0 176,50.6 179,48.1 182,46.5 185,46.0 188,46.5 191,48.1 194,50.6 197,54.0 200,58.3 203,63.3 206,68.9 209,75.0 212,81.4 215,88.0 218,94.6 221,101.0 224,107.1 227,112.7 230,117.7 233,122.0 236,125.4 239,127.9 242,129.5 245,130.0 248,129.5 251,127.9 254,125.4 257,122.0 260,117.7 263,112.7 266,107.1 269,101.0 272,94.6 275,88.0 278,81.4 281,75.0 284,68.9 287,63.3 290,58.3 293,54.0 296,50.6 299,48.1 302,46.5 305,46.0 308,46.5 311,48.1 314,50.6 317,54.0 320,58.3 323,63.3 326,68.9 329,75.0 332,81.4 335,88.0 338,94.6 341,101.0 344,107.1 347,112.7 350,117.7 353,122.0 356,125.4 359,127.9 362,129.5 365,130.0 368,129.5 371,127.9 374,125.4 377,122.0 380,117.7 383,112.7 386,107.1 389,101.0 392,94.6 395,88.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Kondensator i växelström</text></svg></div>",
  "s": "<p>X<sub>C</sub>=1/(2πfC)=1/(2π·50·47·10⁻⁶)=<strong>67,7 Ω</strong>.</p><p>I=U/X<sub>C</sub>=230/67,7=<strong>3,40 A</strong>.</p>"
},
{
  "id": "3.24",
  "kap": 3,
  "omr": "vaxelstrom_spole_kondensator",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En seriekrets består av R=40 Ω, L=0,18 H och C=75 μF och ansluts till 120 V effektivvärde. Frekvensen kan varieras.</p><ol><li>Bestäm resonansfrekvensen.</li><li>Bestäm strömmen vid resonans.</li><li>Förklara varför strömmen blir maximal just då.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Sinusformad växelspänning\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"35\" y1=\"88\" x2=\"395\" y2=\"88\" stroke=\"#8A858E\"/><polyline points=\"35,88.0 38,81.4 41,75.0 44,68.9 47,63.3 50,58.3 53,54.0 56,50.6 59,48.1 62,46.5 65,46.0 68,46.5 71,48.1 74,50.6 77,54.0 80,58.3 83,63.3 86,68.9 89,75.0 92,81.4 95,88.0 98,94.6 101,101.0 104,107.1 107,112.7 110,117.7 113,122.0 116,125.4 119,127.9 122,129.5 125,130.0 128,129.5 131,127.9 134,125.4 137,122.0 140,117.7 143,112.7 146,107.1 149,101.0 152,94.6 155,88.0 158,81.4 161,75.0 164,68.9 167,63.3 170,58.3 173,54.0 176,50.6 179,48.1 182,46.5 185,46.0 188,46.5 191,48.1 194,50.6 197,54.0 200,58.3 203,63.3 206,68.9 209,75.0 212,81.4 215,88.0 218,94.6 221,101.0 224,107.1 227,112.7 230,117.7 233,122.0 236,125.4 239,127.9 242,129.5 245,130.0 248,129.5 251,127.9 254,125.4 257,122.0 260,117.7 263,112.7 266,107.1 269,101.0 272,94.6 275,88.0 278,81.4 281,75.0 284,68.9 287,63.3 290,58.3 293,54.0 296,50.6 299,48.1 302,46.5 305,46.0 308,46.5 311,48.1 314,50.6 317,54.0 320,58.3 323,63.3 326,68.9 329,75.0 332,81.4 335,88.0 338,94.6 341,101.0 344,107.1 347,112.7 350,117.7 353,122.0 356,125.4 359,127.9 362,129.5 365,130.0 368,129.5 371,127.9 374,125.4 377,122.0 380,117.7 383,112.7 386,107.1 389,101.0 392,94.6 395,88.0\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">RLC-seriekrets vid resonans</text></svg></div>",
  "s": "<p>Vid resonans X<sub>L</sub>=X<sub>C</sub>, vilket ger f₀=1/(2π√(LC)).</p><p>f₀=1/(2π√(0,18·75·10⁻⁶))=<strong>43,3 Hz</strong>.</p><p>Vid resonans tar de reaktiva bidragen ut varandra och impedansen är Z=R=40 Ω. I=120/40=<strong>3,00 A</strong>.</p><p>Strömmen blir maximal eftersom kretsens totala impedans då är minimal.</p>"
},
{
  "id": "4.1",
  "kap": 4,
  "omr": "em_vagor",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En radiovåg har frekvensen 100 MHz. Bestäm våglängden i vakuum.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Elektromagnetisk våg\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><polyline points=\"50,90.0 53,84.9 56,79.9 59,75.2 62,71.0 65,67.3 68,64.3 71,62.0 74,60.6 77,60.0 80,60.3 83,61.5 86,63.5 89,66.2 92,69.7 95,73.8 98,78.3 101,83.2 104,88.3 107,93.4 110,98.5 113,103.2 116,107.6 119,111.5 122,114.8 125,117.3 128,119.0 131,119.9 134,119.9 137,119.0 140,117.3 143,114.8 146,111.5 149,107.6 152,103.2 155,98.5 158,93.4 161,88.3 164,83.2 167,78.3 170,73.8 173,69.7 176,66.2 179,63.5 182,61.5 185,60.3 188,60.0 191,60.6 194,62.0 197,64.3 200,67.3 203,71.0 206,75.2 209,79.9 212,84.9 215,90.0 218,95.1 221,100.1 224,104.8 227,109.0 230,112.7 233,115.7 236,118.0 239,119.4 242,120.0 245,119.7 248,118.5 251,116.5 254,113.8 257,110.3 260,106.2 263,101.7 266,96.8 269,91.7 272,86.6 275,81.5 278,76.8 281,72.4 284,68.5 287,65.2 290,62.7 293,61.0 296,60.1 299,60.1 302,61.0 305,62.7 308,65.2 311,68.5 314,72.4 317,76.8 320,81.5 323,86.6 326,91.7 329,96.8 332,101.7 335,106.2 338,110.3 341,113.8 344,116.5 347,118.5 350,119.7 353,120.0 356,119.4 359,118.0 362,115.7 365,112.7 368,109.0 371,104.8 374,100.1 377,95.1 380,90.0 383,84.9\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><line x1=\"50\" y1=\"90\" x2=\"385\" y2=\"90\" stroke=\"#8A858E\"/><line x1=\"70\" y1=\"150\" x2=\"350\" y2=\"150\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><text x=\"210\" y=\"173\" text-anchor=\"middle\" font-size=\"14\">utbredningsriktning</text></svg></div>",
  "s": "<p>λ=c/f=2,998·10⁸/(100·10⁶)=<strong>3,00 m</strong>.</p>"
},
{
  "id": "4.2",
  "kap": 4,
  "omr": "em_vagor",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En radar sänder mikrovågor med frekvensen 24 GHz.</p><ol><li>Bestäm våglängden.</li><li>En puls kommer tillbaka efter 80 μs. Hur långt bort är objektet?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Elektromagnetisk våg\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><polyline points=\"50,90.0 53,84.9 56,79.9 59,75.2 62,71.0 65,67.3 68,64.3 71,62.0 74,60.6 77,60.0 80,60.3 83,61.5 86,63.5 89,66.2 92,69.7 95,73.8 98,78.3 101,83.2 104,88.3 107,93.4 110,98.5 113,103.2 116,107.6 119,111.5 122,114.8 125,117.3 128,119.0 131,119.9 134,119.9 137,119.0 140,117.3 143,114.8 146,111.5 149,107.6 152,103.2 155,98.5 158,93.4 161,88.3 164,83.2 167,78.3 170,73.8 173,69.7 176,66.2 179,63.5 182,61.5 185,60.3 188,60.0 191,60.6 194,62.0 197,64.3 200,67.3 203,71.0 206,75.2 209,79.9 212,84.9 215,90.0 218,95.1 221,100.1 224,104.8 227,109.0 230,112.7 233,115.7 236,118.0 239,119.4 242,120.0 245,119.7 248,118.5 251,116.5 254,113.8 257,110.3 260,106.2 263,101.7 266,96.8 269,91.7 272,86.6 275,81.5 278,76.8 281,72.4 284,68.5 287,65.2 290,62.7 293,61.0 296,60.1 299,60.1 302,61.0 305,62.7 308,65.2 311,68.5 314,72.4 317,76.8 320,81.5 323,86.6 326,91.7 329,96.8 332,101.7 335,106.2 338,110.3 341,113.8 344,116.5 347,118.5 350,119.7 353,120.0 356,119.4 359,118.0 362,115.7 365,112.7 368,109.0 371,104.8 374,100.1 377,95.1 380,90.0 383,84.9\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><line x1=\"50\" y1=\"90\" x2=\"385\" y2=\"90\" stroke=\"#8A858E\"/><line x1=\"70\" y1=\"150\" x2=\"350\" y2=\"150\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><text x=\"210\" y=\"173\" text-anchor=\"middle\" font-size=\"14\">utbredningsriktning</text></svg></div>",
  "s": "<p>λ=c/f=2,998·10⁸/(24·10⁹)=<strong>1,25 cm</strong>.</p><p>Pulsen går tur och retur. d=ct/2=2,998·10⁸·80·10⁻⁶/2=<strong>12,0 km</strong>.</p>"
},
{
  "id": "4.3",
  "kap": 4,
  "omr": "em_vagor",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En rymdsond kommunicerar med jorden via en bärvåg på 8,4 GHz. Sonden befinner sig 2,25·10¹¹ m bort och rör sig bort från jorden med 12 km/s. Använd den icke-relativistiska approximationen Δf/f≈v/c.</p><ol><li>Bestäm signalens enkelriktade gångtid.</li><li>Uppskatta Dopplerskiftets storlek.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Elektromagnetisk våg\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><polyline points=\"50,90.0 53,84.9 56,79.9 59,75.2 62,71.0 65,67.3 68,64.3 71,62.0 74,60.6 77,60.0 80,60.3 83,61.5 86,63.5 89,66.2 92,69.7 95,73.8 98,78.3 101,83.2 104,88.3 107,93.4 110,98.5 113,103.2 116,107.6 119,111.5 122,114.8 125,117.3 128,119.0 131,119.9 134,119.9 137,119.0 140,117.3 143,114.8 146,111.5 149,107.6 152,103.2 155,98.5 158,93.4 161,88.3 164,83.2 167,78.3 170,73.8 173,69.7 176,66.2 179,63.5 182,61.5 185,60.3 188,60.0 191,60.6 194,62.0 197,64.3 200,67.3 203,71.0 206,75.2 209,79.9 212,84.9 215,90.0 218,95.1 221,100.1 224,104.8 227,109.0 230,112.7 233,115.7 236,118.0 239,119.4 242,120.0 245,119.7 248,118.5 251,116.5 254,113.8 257,110.3 260,106.2 263,101.7 266,96.8 269,91.7 272,86.6 275,81.5 278,76.8 281,72.4 284,68.5 287,65.2 290,62.7 293,61.0 296,60.1 299,60.1 302,61.0 305,62.7 308,65.2 311,68.5 314,72.4 317,76.8 320,81.5 323,86.6 326,91.7 329,96.8 332,101.7 335,106.2 338,110.3 341,113.8 344,116.5 347,118.5 350,119.7 353,120.0 356,119.4 359,118.0 362,115.7 365,112.7 368,109.0 371,104.8 374,100.1 377,95.1 380,90.0 383,84.9\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><line x1=\"50\" y1=\"90\" x2=\"385\" y2=\"90\" stroke=\"#8A858E\"/><line x1=\"70\" y1=\"150\" x2=\"350\" y2=\"150\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><text x=\"210\" y=\"173\" text-anchor=\"middle\" font-size=\"14\">utbredningsriktning</text></svg></div>",
  "s": "<p>t=d/c=2,25·10¹¹/2,998·10⁸=<strong>751 s = 12,5 min</strong>.</p><p>|Δf|≈f v/c=8,4·10⁹·12000/(2,998·10⁸)=<strong>3,36·10⁵ Hz = 336 kHz</strong>. Eftersom sonden avlägsnar sig blir den mottagna frekvensen lägre.</p>"
},
{
  "id": "4.4",
  "kap": 4,
  "omr": "vagrorelselara",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Monokromatiskt ljus med våglängden 600 nm passerar en dubbelspalt. Avståndet mellan spalterna är 0,30 mm och skärmen står 2,0 m bort. Bestäm avståndet mellan närliggande ljusmaxima nära centrum.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Två koherenta källor och observationspunkt\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"115\" cy=\"92\" r=\"6\" fill=\"#B43123\"/><circle cx=\"315\" cy=\"92\" r=\"6\" fill=\"#B43123\"/><text x=\"108\" y=\"78\" font-size=\"14\">S₁</text><text x=\"308\" y=\"78\" font-size=\"14\">S₂</text><path d=\"M115 92 Q215 20 315 92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><path d=\"M115 92 Q215 164 315 92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"45\" r=\"5\" fill=\"#2B2527\"/><text x=\"224\" y=\"44\" font-size=\"14\">P</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Dubbelspaltsinterferens</text></svg></div>",
  "s": "<p>För små vinklar: Δy=λL/d = 600·10⁻⁹·2,0/(0,30·10⁻³)=<strong>4,0 mm</strong>.</p>"
},
{
  "id": "4.5",
  "kap": 4,
  "omr": "vagrorelselara",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Ett gitter har 600 linjer/mm. Laserljus med våglängden 532 nm träffar gittret vinkelrätt.</p><ol><li>Bestäm gitterkonstanten.</li><li>Bestäm vinkeln till första ordningens maximum.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Två koherenta källor och observationspunkt\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"115\" cy=\"92\" r=\"6\" fill=\"#B43123\"/><circle cx=\"315\" cy=\"92\" r=\"6\" fill=\"#B43123\"/><text x=\"108\" y=\"78\" font-size=\"14\">S₁</text><text x=\"308\" y=\"78\" font-size=\"14\">S₂</text><path d=\"M115 92 Q215 20 315 92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><path d=\"M115 92 Q215 164 315 92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"45\" r=\"5\" fill=\"#2B2527\"/><text x=\"224\" y=\"44\" font-size=\"14\">P</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Diffraktionsgitter</text></svg></div>",
  "s": "<p>d=1/(600·10³)=<strong>1,667 μm</strong>.</p><p>d sinθ=mλ. För m=1: sinθ=532·10⁻⁹/1,667·10⁻⁶=0,3192 ⇒ θ=<strong>18,6°</strong>.</p>"
},
{
  "id": "4.6",
  "kap": 4,
  "omr": "vagrorelselara",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>Vitt ljus faller vinkelrätt på ett gitter med 500 linjer/mm. Det synliga området kan tas som 400–700 nm.</p><p>Undersök om andra ordningens synliga spektrum överlappar första ordningens synliga spektrum. Ange i så fall vilka våglängder i andra ordningen som ligger vid samma vinklar som någon våglängd i första ordningen.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Två koherenta källor och observationspunkt\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"115\" cy=\"92\" r=\"6\" fill=\"#B43123\"/><circle cx=\"315\" cy=\"92\" r=\"6\" fill=\"#B43123\"/><text x=\"108\" y=\"78\" font-size=\"14\">S₁</text><text x=\"308\" y=\"78\" font-size=\"14\">S₂</text><path d=\"M115 92 Q215 20 315 92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><path d=\"M115 92 Q215 164 315 92\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"45\" r=\"5\" fill=\"#2B2527\"/><text x=\"224\" y=\"44\" font-size=\"14\">P</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Spektralordningar i gitter</text></svg></div>",
  "s": "<p>Gitterekvationen är d sinθ=mλ. Samma vinkel kräver m₁λ₁=m₂λ₂.</p><p>För första och andra ordningen: λ₁=2λ₂.</p><p>För att λ₁ ska vara synlig 400–700 nm krävs 400≤2λ₂≤700 ⇒ 200≤λ₂≤350 nm. Men andra ordningens synliga λ₂ ligger 400–700 nm.</p><p>Alltså finns <strong>ingen överlappning mellan första och andra ordningens synliga spektrum</strong>. Däremot kan andra ordningen för UV-ljus överlappa första ordningens synliga område.</p>"
},
{
  "id": "4.7",
  "kap": 4,
  "omr": "temperaturstralning",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En glödande kropp har temperaturen 3000 K. Bestäm ungefär vid vilken våglängd dess strålning är starkast. Använd Wiens förskjutningslag λ<sub>max</sub>T=2,90·10⁻³ m·K.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Varm strålande kropp\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"95\" y=\"35\" width=\"240\" height=\"110\" rx=\"55\" fill=\"#2B2527\"/><circle cx=\"215\" cy=\"90\" r=\"26\" fill=\"#f5c66c\"/><path d=\"M215 54 L223 77 L248 78 L228 93 L235 117 L215 103 L195 117 L202 93 L182 78 L207 77 Z\" fill=\"#fff\" opacity=\".9\"/><text x=\"215\" y=\"176\" text-anchor=\"middle\" font-size=\"14\">Temperaturstrålning</text></svg></div>",
  "s": "<p>λ<sub>max</sub>=2,90·10⁻³/3000=<strong>9,67·10⁻⁷ m = 967 nm</strong>, alltså nära infrarött.</p>"
},
{
  "id": "4.8",
  "kap": 4,
  "omr": "temperaturstralning",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två stjärnor kan approximeras som svartkroppar. Stjärna A har temperaturen 5800 K och stjärna B 11600 K. De har samma radie.</p><ol><li>Hur förändras våglängden för intensitetsmaximum?</li><li>Hur många gånger större total utstrålad effekt har B?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Varm strålande kropp\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"95\" y=\"35\" width=\"240\" height=\"110\" rx=\"55\" fill=\"#2B2527\"/><circle cx=\"215\" cy=\"90\" r=\"26\" fill=\"#f5c66c\"/><path d=\"M215 54 L223 77 L248 78 L228 93 L235 117 L215 103 L195 117 L202 93 L182 78 L207 77 Z\" fill=\"#fff\" opacity=\".9\"/><text x=\"215\" y=\"176\" text-anchor=\"middle\" font-size=\"14\">Två svartkroppstemperaturer</text></svg></div>",
  "s": "<p>Wiens lag ger λ<sub>max</sub>∝1/T, så B:s maximum ligger vid <strong>halva våglängden</strong>.</p><p>Stefan-Boltzmann: P∝T⁴ för samma area. (11600/5800)⁴=2⁴=<strong>16 gånger större effekt</strong>.</p>"
},
{
  "id": "4.9",
  "kap": 4,
  "omr": "temperaturstralning",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En planet utan atmosfär kretsar kring en sollik stjärna. Planeten absorberar i genomsnitt 240 W/m² över hela sin yta och kan approximeras som en svartkropp i strålningsjämvikt. Använd Stefan-Boltzmanns konstant σ=5,67·10⁻⁸ W/(m²K⁴).</p><p>Bestäm planetens jämviktstemperatur och diskutera kort varför en verklig planet kan ha en annan yttemperatur.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Varm strålande kropp\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"95\" y=\"35\" width=\"240\" height=\"110\" rx=\"55\" fill=\"#2B2527\"/><circle cx=\"215\" cy=\"90\" r=\"26\" fill=\"#f5c66c\"/><path d=\"M215 54 L223 77 L248 78 L228 93 L235 117 L215 103 L195 117 L202 93 L182 78 L207 77 Z\" fill=\"#fff\" opacity=\".9\"/><text x=\"215\" y=\"176\" text-anchor=\"middle\" font-size=\"14\">Planetens strålningsbalans</text></svg></div>",
  "s": "<p>I jämvikt gäller σT⁴=240.</p><p>T=(240/5,67·10⁻⁸)^(1/4)=<strong>255 K ≈ −18 °C</strong>.</p><p>En verklig planet kan avvika på grund av atmosfärens växthuseffekt, moln, albedo, värmetransport, dygnsvariation och att ytan inte är en ideal svartkropp.</p>"
},
{
  "id": "4.10",
  "kap": 4,
  "omr": "straloptik",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En ljusstråle går från luft in i glas med brytningsindex 1,50. Infallsvinkeln är 30°. Bestäm brytningsvinkeln.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Reflektion i plan spegel\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"45\" y1=\"145\" x2=\"385\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"4\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"155\" stroke=\"#8A858E\" stroke-dasharray=\"5 4\"/><line x1=\"80\" y1=\"55\" x2=\"215\" y2=\"145\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><line x1=\"215\" y1=\"145\" x2=\"350\" y2=\"55\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Brytning luft till glas</text></svg></div>",
  "s": "<p>Snells lag: n₁sin i=n₂sin r. sin r=sin30°/1,50=0,3333. r=<strong>19,5°</strong>.</p>"
},
{
  "id": "4.11",
  "kap": 4,
  "omr": "straloptik",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Ljus går från glas med brytningsindex 1,52 mot luft.</p><ol><li>Bestäm gränsvinkeln för totalreflektion.</li><li>Vad händer om infallsvinkeln i glaset är 50°?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Reflektion i plan spegel\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"45\" y1=\"145\" x2=\"385\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"4\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"155\" stroke=\"#8A858E\" stroke-dasharray=\"5 4\"/><line x1=\"80\" y1=\"55\" x2=\"215\" y2=\"145\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><line x1=\"215\" y1=\"145\" x2=\"350\" y2=\"55\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Totalreflektion</text></svg></div>",
  "s": "<p>Vid gränsvinkeln är brytningsvinkeln 90°: sinθ<sub>c</sub>=n₂/n₁=1/1,52. θ<sub>c</sub>=<strong>41,1°</strong>.</p><p>50° är större än gränsvinkeln, därför sker <strong>totalreflektion</strong>.</p>"
},
{
  "id": "4.12",
  "kap": 4,
  "omr": "straloptik",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En dykare under vatten (n=1,33) tittar upp mot den plana vattenytan. Ljuset från hela himlen koncentreras till en cirkulär “Snells fönster”.</p><p>Bestäm fönstrets fulla vinkelbredd sedd från dykaren och förklara varför området utanför fönstret visar reflektioner från undervattensmiljön.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Reflektion i plan spegel\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"45\" y1=\"145\" x2=\"385\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"4\"/><line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"155\" stroke=\"#8A858E\" stroke-dasharray=\"5 4\"/><line x1=\"80\" y1=\"55\" x2=\"215\" y2=\"145\" stroke=\"#B43123\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/><line x1=\"215\" y1=\"145\" x2=\"350\" y2=\"55\" stroke=\"#2A5D9E\" stroke-width=\"3\" marker-end=\"url(#arr)\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Snells fönster under vatten</text></svg></div>",
  "s": "<p>Den största brytningsvinkeln i vattnet fås för ljus som kommer längs luftens horisont, i=90°. Snells lag: 1·sin90°=1,33 sin r.</p><p>r=arcsin(1/1,33)=<strong>48,8°</strong> från normalen.</p><p>Fönstrets fulla vinkel är 2r=<strong>97,5°</strong>.</p><p>Utanför denna kon riktning skulle motsvara ljus i vattnet som träffar ytan över gränsvinkeln. Då sker totalreflektion, så dykaren ser den speglade undervattensmiljön.</p>"
},
{
  "id": "4.13",
  "kap": 4,
  "omr": "ljus_partikelstrom",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Bestäm energin hos en foton med våglängden 500 nm.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Foton från källa till elektron\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"55\" y=\"58\" width=\"45\" height=\"70\" rx=\"5\" fill=\"#8A858E\"/><path d=\"M110 92 C135 65 155 119 180 92 C205 65 225 119 250 92\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"330\" cy=\"92\" r=\"20\" fill=\"#84b8d8\" stroke=\"#2B2527\"/><line x1=\"250\" y1=\"92\" x2=\"302\" y2=\"92\" stroke=\"#B43123\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Foton med våglängden 500 nm</text></svg></div>",
  "s": "<p>E=hc/λ=6,626·10⁻³⁴·2,998·10⁸/(500·10⁻⁹)=<strong>3,97·10⁻¹⁹ J</strong> ≈ <strong>2,48 eV</strong>.</p>"
},
{
  "id": "4.14",
  "kap": 4,
  "omr": "ljus_partikelstrom",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En metall har utträdesarbetet 2,20 eV och belyses med 400 nm ljus.</p><ol><li>Bestäm fotonenergin i eV.</li><li>Bestäm fotoelektronernas största kinetiska energi.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Foton från källa till elektron\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"55\" y=\"58\" width=\"45\" height=\"70\" rx=\"5\" fill=\"#8A858E\"/><path d=\"M110 92 C135 65 155 119 180 92 C205 65 225 119 250 92\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"330\" cy=\"92\" r=\"20\" fill=\"#84b8d8\" stroke=\"#2B2527\"/><line x1=\"250\" y1=\"92\" x2=\"302\" y2=\"92\" stroke=\"#B43123\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Fotoelektrisk effekt</text></svg></div>",
  "s": "<p>E<sub>foton</sub>=hc/λ = 3,10 eV.</p><p>K<sub>max</sub>=E<sub>foton</sub>−W=3,10−2,20=<strong>0,90 eV</strong>.</p>"
},
{
  "id": "4.15",
  "kap": 4,
  "omr": "ljus_partikelstrom",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>I ett fotoelektriskt experiment stoppas de snabbaste elektronerna av stoppotentialen 1,35 V när metallen belyses med 365 nm ljus.</p><ol><li>Bestäm metallens utträdesarbete i eV.</li><li>Bestäm metallens gränsvåglängd.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Foton från källa till elektron\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"55\" y=\"58\" width=\"45\" height=\"70\" rx=\"5\" fill=\"#8A858E\"/><path d=\"M110 92 C135 65 155 119 180 92 C205 65 225 119 250 92\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"330\" cy=\"92\" r=\"20\" fill=\"#84b8d8\" stroke=\"#2B2527\"/><line x1=\"250\" y1=\"92\" x2=\"302\" y2=\"92\" stroke=\"#B43123\" stroke-width=\"2\" marker-end=\"url(#arrR)\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Stoppotential i fotoelektriskt experiment</text></svg></div>",
  "s": "<p>Fotonenergin i eV kan beräknas med 1240 eV·nm/λ: E=1240/365=<strong>3,397 eV</strong>.</p><p>K<sub>max</sub>=eU<sub>s</sub>=1,35 eV. Utträdesarbetet W=3,397−1,35=<strong>2,05 eV</strong>.</p><p>Gränsvåglängden λ₀=1240/W=1240/2,047=<strong>606 nm</strong>.</p>"
},
{
  "id": "4.16",
  "kap": 4,
  "omr": "partikelstralar",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En alfapartikel består av två protoner och två neutroner. Ange dess laddning och ungefärliga masstal.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Laddad partikel böjs i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><g transform=\"translate(55,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><path d=\"M80 120 Q155 25 270 62 Q340 84 335 142\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"120\" x2=\"130\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"120\" y=\"72\" font-size=\"14\">v</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Alfapartikel</text></svg></div>",
  "s": "<p>Laddningen är <strong>+2e</strong> och masstalet är ungefär <strong>4</strong>.</p>"
},
{
  "id": "4.17",
  "kap": 4,
  "omr": "partikelstralar",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Elektroner accelereras från vila genom spänningen 5,0 kV. Bortse från relativistiska effekter.</p><ol><li>Bestäm elektronens kinetiska energi.</li><li>Bestäm farten. Elektronmassan är 9,11·10⁻³¹ kg.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Laddad partikel böjs i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><g transform=\"translate(55,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><path d=\"M80 120 Q155 25 270 62 Q340 84 335 142\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"120\" x2=\"130\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"120\" y=\"72\" font-size=\"14\">v</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Accelererad elektronstråle</text></svg></div>",
  "s": "<p>K=eU=1,602·10⁻¹⁹·5000=<strong>8,01·10⁻¹⁶ J = 5,0 keV</strong>.</p><p>½mv²=K ⇒ v=√(2K/m)=<strong>4,19·10⁷ m/s</strong>.</p>"
},
{
  "id": "4.18",
  "kap": 4,
  "omr": "partikelstralar",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>Protoner accelereras genom 2,0 MV och riktas sedan mot ett tunt mål. Bortse från relativistiska effekter.</p><ol><li>Bestäm protonernas fart.</li><li>Hur stor de Broglie-våglängd har protonerna? Använd protonmassan 1,67·10⁻²⁷ kg.</li><li>Jämför våglängden med en typisk atomstorlek 0,10 nm.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Laddad partikel böjs i magnetfält\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><g transform=\"translate(55,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(55,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(95,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(135,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(175,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(215,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(255,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(295,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(335,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,45)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,80)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><g transform=\"translate(375,115)\"><line x1=\"-4\" y1=\"-4\" x2=\"4\" y2=\"4\" stroke=\"#2A5D9E\"/><line x1=\"4\" y1=\"-4\" x2=\"-4\" y2=\"4\" stroke=\"#2A5D9E\"/></g><path d=\"M80 120 Q155 25 270 62 Q340 84 335 142\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><line x1=\"80\" y1=\"120\" x2=\"130\" y2=\"82\" stroke=\"#2B2527\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"120\" y=\"72\" font-size=\"14\">v</text><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Protonstråle och de Broglie-våglängd</text></svg></div>",
  "s": "<p>K=eU=1,602·10⁻¹⁹·2,0·10⁶=3,204·10⁻¹³ J.</p><p>v=√(2K/m)=√(2·3,204·10⁻¹³/1,67·10⁻²⁷)=<strong>1,96·10⁷ m/s</strong>.</p><p>p=mv=3,27·10⁻²⁰ kg m/s. λ=h/p=6,626·10⁻³⁴/3,27·10⁻²⁰=<strong>2,03·10⁻¹⁴ m</strong>.</p><p>Det är cirka 5000 gånger mindre än 0,10 nm, alltså mycket mindre än en atom.</p>"
},
{
  "id": "4.19",
  "kap": 4,
  "omr": "atomstruktur",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En elektron i en atom går från energinivån −1,5 eV till −3,4 eV. Avges eller absorberas en foton, och vilken energi har den?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad atommodell med elektronskal\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"215\" cy=\"92\" r=\"15\" fill=\"#f2b6ac\" stroke=\"#2B2527\"/><ellipse cx=\"215\" cy=\"92\" rx=\"68\" ry=\"28\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"215\" cy=\"92\" rx=\"28\" ry=\"68\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><circle cx=\"280\" cy=\"92\" r=\"6\" fill=\"#f5c66c\"/><circle cx=\"215\" cy=\"27\" r=\"6\" fill=\"#f5c66c\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Elektronövergång mellan energinivåer</text></svg></div>",
  "s": "<p>Elektronen går till lägre energi, därför <strong>avges</strong> en foton. Energin är ΔE=(−1,5)−(−3,4)=<strong>1,9 eV</strong>.</p>"
},
{
  "id": "4.20",
  "kap": 4,
  "omr": "atomstruktur",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En atom avger en spektrallinje med våglängden 656 nm.</p><ol><li>Bestäm fotonens energi i eV.</li><li>Vad säger denna energi om skillnaden mellan de två atomära energinivåerna?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Linjespektrum\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"45\" y=\"54\" width=\"340\" height=\"72\" rx=\"6\" fill=\"#222\"/><line x1=\"105\" y1=\"58\" x2=\"105\" y2=\"122\" stroke=\"#6b5cff\" stroke-width=\"5\"/><line x1=\"170\" y1=\"58\" x2=\"170\" y2=\"122\" stroke=\"#4fa4ff\" stroke-width=\"5\"/><line x1=\"245\" y1=\"58\" x2=\"245\" y2=\"122\" stroke=\"#62c86d\" stroke-width=\"5\"/><line x1=\"320\" y1=\"58\" x2=\"320\" y2=\"122\" stroke=\"#ff5d4a\" stroke-width=\"5\"/><text x=\"215\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">Atomärt linjespektrum</text></svg></div>",
  "s": "<p>E=hc/λ = 1240/656=<strong>1,89 eV</strong>.</p><p>Energiskillnaden mellan nivåerna är därför också <strong>1,89 eV</strong>, eftersom en foton bär exakt den energi som förloras i övergången.</p>"
},
{
  "id": "4.21",
  "kap": 4,
  "omr": "atomstruktur",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En väteatom befinner sig i grundtillståndet. Energinivåerna ges av E<sub>n</sub>=−13,6/n² eV.</p><p>Atomen absorberar en foton som precis exciterar elektronen till n=4. När elektronen sedan återgår till grundtillståndet kan flera olika fotoner avges i en kaskad. Bestäm energin hos den absorberade fotonen och hur många olika spektrallinjer som maximalt kan uppstå från nivåerna n=1 till n=4.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad atommodell med elektronskal\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"215\" cy=\"92\" r=\"15\" fill=\"#f2b6ac\" stroke=\"#2B2527\"/><ellipse cx=\"215\" cy=\"92\" rx=\"68\" ry=\"28\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><ellipse cx=\"215\" cy=\"92\" rx=\"28\" ry=\"68\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2\"/><circle cx=\"280\" cy=\"92\" r=\"6\" fill=\"#f5c66c\"/><circle cx=\"215\" cy=\"27\" r=\"6\" fill=\"#f5c66c\"/><text x=\"215\" y=\"181\" text-anchor=\"middle\" font-size=\"14\">Väteatomens energinivåer</text></svg></div>",
  "s": "<p>E₁=−13,6 eV. E₄=−13,6/16=−0,850 eV.</p><p>Absorberad energi E₄−E₁=<strong>12,75 eV</strong>.</p><p>Fyra nivåer kan ge övergångar mellan varje par. Antalet möjliga linjer är n(n−1)/2=4·3/2=<strong>6 linjer</strong>.</p>"
},
{
  "id": "5.1",
  "kap": 5,
  "omr": "farg_ljusstyrka",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Två stjärnor har yttemperaturerna 4500 K och 9000 K. Vilken av dem har sitt intensitetsmaximum vid kortast våglängd?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Linjespektrum\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><rect x=\"45\" y=\"54\" width=\"340\" height=\"72\" rx=\"6\" fill=\"#222\"/><line x1=\"105\" y1=\"58\" x2=\"105\" y2=\"122\" stroke=\"#6b5cff\" stroke-width=\"5\"/><line x1=\"170\" y1=\"58\" x2=\"170\" y2=\"122\" stroke=\"#4fa4ff\" stroke-width=\"5\"/><line x1=\"245\" y1=\"58\" x2=\"245\" y2=\"122\" stroke=\"#62c86d\" stroke-width=\"5\"/><line x1=\"320\" y1=\"58\" x2=\"320\" y2=\"122\" stroke=\"#ff5d4a\" stroke-width=\"5\"/><text x=\"215\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">Stjärnors färg och temperatur</text></svg></div>",
  "s": "<p>Enligt Wiens lag λ<sub>max</sub>∝1/T. Stjärnan på <strong>9000 K</strong> har därför maximum vid kortare våglängd och ser blåare ut.</p>"
},
{
  "id": "5.2",
  "kap": 5,
  "omr": "farg_ljusstyrka",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Stjärna A har samma yttemperatur som solen men radien 3,0 gånger solens.</p><ol><li>Hur många gånger större luminositet har A än solen?</li><li>Om A och solen låg på samma avstånd, hur skulle deras observerade flöden förhålla sig?</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad utveckling för sollik stjärna\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"105\" cy=\"92\" r=\"30\" fill=\"#f5c66c\"/><line x1=\"145\" y1=\"92\" x2=\"205\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"245\" cy=\"92\" r=\"48\" fill=\"#f29f76\"/><line x1=\"300\" y1=\"92\" x2=\"350\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"376\" cy=\"92\" r=\"15\" fill=\"#e7e9ec\"/><text x=\"105\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">huvudserie</text><text x=\"245\" y=\"157\" text-anchor=\"middle\" font-size=\"13\">röd jätte</text><text x=\"376\" y=\"125\" text-anchor=\"middle\" font-size=\"13\">vit dvärg</text></svg></div>",
  "s": "<p>L=4πR²σT⁴. Samma T ger L∝R². Med R=3R☉ blir L=<strong>9 gånger solens</strong>.</p><p>På samma avstånd är observerat flöde proportionellt mot luminositeten, alltså också <strong>9 gånger större</strong>.</p>"
},
{
  "id": "5.3",
  "kap": 5,
  "omr": "farg_ljusstyrka",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>Två stjärnor har samma observerade bolometriska flöde från jorden. Stjärna A har temperaturen 6000 K och radien 1,0 R☉. Stjärna B har temperaturen 3000 K och radien 4,0 R☉.</p><p>Bestäm förhållandet mellan deras luminositeter och avgör vilken stjärna som ligger längst bort.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad utveckling för sollik stjärna\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"105\" cy=\"92\" r=\"30\" fill=\"#f5c66c\"/><line x1=\"145\" y1=\"92\" x2=\"205\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"245\" cy=\"92\" r=\"48\" fill=\"#f29f76\"/><line x1=\"300\" y1=\"92\" x2=\"350\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"376\" cy=\"92\" r=\"15\" fill=\"#e7e9ec\"/><text x=\"105\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">huvudserie</text><text x=\"245\" y=\"157\" text-anchor=\"middle\" font-size=\"13\">röd jätte</text><text x=\"376\" y=\"125\" text-anchor=\"middle\" font-size=\"13\">vit dvärg</text></svg></div>",
  "s": "<p>L∝R²T⁴.</p><p>L<sub>B</sub>/L<sub>A</sub>=(4/1)²(3000/6000)⁴=16·(1/2)⁴=16/16=<strong>1</strong>.</p><p>De har alltså samma luminositet. Eftersom de också ger samma observerade flöde F=L/(4πd²), måste de ligga på <strong>samma avstånd</strong>. Den större, svalare stjärnan kompenserar exakt sin lägre temperatur med större area.</p>"
},
{
  "id": "5.4",
  "kap": 5,
  "omr": "exoplaneter",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En stjärnas ljusstyrka minskar med 1,0 % när en planet passerar framför den. Anta att stjärnskivan och planeten har jämn ljusstyrka. Bestäm planetens radie som andel av stjärnans radie.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Exoplanettransit och ljuskurva\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"140\" cy=\"90\" r=\"54\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><circle cx=\"140\" cy=\"90\" r=\"9\" fill=\"#2B2527\"/><path d=\"M238 45 L238 135 M238 90 L360 90\" stroke=\"#8A858E\" stroke-width=\"2\"/><polyline points=\"238,55 270,55 280,112 305,112 315,55 360,55\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"140\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">transit</text><text x=\"300\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">ljuskurva</text></svg></div>",
  "s": "<p>Transitdjupet δ≈(R<sub>p</sub>/R<sub>*</sub>)². R<sub>p</sub>/R<sub>*</sub>=√0,010=<strong>0,100</strong>. Planetens radie är alltså cirka <strong>10 % av stjärnans</strong>.</p>"
},
{
  "id": "5.5",
  "kap": 5,
  "omr": "exoplaneter",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En exoplanet kretsar runt en stjärna med solens massa. Omloppstiden är 125 dygn. Använd Keplers tredje lag i formen T²=a³ när T anges i år och a i astronomiska enheter.</p><p>Bestäm planetens medelavstånd från stjärnan.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Exoplanettransit och ljuskurva\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"140\" cy=\"90\" r=\"54\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><circle cx=\"140\" cy=\"90\" r=\"9\" fill=\"#2B2527\"/><path d=\"M238 45 L238 135 M238 90 L360 90\" stroke=\"#8A858E\" stroke-width=\"2\"/><polyline points=\"238,55 270,55 280,112 305,112 315,55 360,55\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"140\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">transit</text><text x=\"300\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">ljuskurva</text></svg></div>",
  "s": "<p>T=125/365,25=<strong>0,342 år</strong>.</p><p>a=T^(2/3)=0,342^(2/3)=<strong>0,489 AU</strong>.</p>"
},
{
  "id": "5.6",
  "kap": 5,
  "omr": "exoplaneter",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En planet upptäcks både med transitmetoden och radialhastighetsmetoden. Transitdjupet är 0,81 %, stjärnans radie är 0,90 R☉ och radialhastighetsdata ger planetmassan 0,60 M<sub>J</sub>. Använd R☉=6,96·10⁸ m, M<sub>J</sub>=1,90·10²⁷ kg.</p><p>Bestäm planetens medeldensitet.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Exoplanettransit och ljuskurva\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"140\" cy=\"90\" r=\"54\" fill=\"#f5c66c\" stroke=\"#2B2527\"/><circle cx=\"140\" cy=\"90\" r=\"9\" fill=\"#2B2527\"/><path d=\"M238 45 L238 135 M238 90 L360 90\" stroke=\"#8A858E\" stroke-width=\"2\"/><polyline points=\"238,55 270,55 280,112 305,112 315,55 360,55\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"3\"/><text x=\"140\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">transit</text><text x=\"300\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">ljuskurva</text></svg></div>",
  "s": "<p>R<sub>p</sub>/R<sub>*</sub>=√0,0081=0,090.</p><p>R<sub>p</sub>=0,090·0,90·6,96·10⁸=<strong>5,64·10⁷ m</strong>.</p><p>M<sub>p</sub>=0,60·1,90·10²⁷=<strong>1,14·10²⁷ kg</strong>.</p><p>V=4πR³/3=7,52·10²³ m³.</p><p>ρ=M/V=<strong>1,52·10³ kg/m³ = 1,52 g/cm³</strong>.</p>"
},
{
  "id": "5.7",
  "kap": 5,
  "omr": "stjarnornas_utveckling",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Vad blir den ungefärliga slutprodukten för en stjärna med ungefär solens massa efter röd-jättefasen?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad utveckling för sollik stjärna\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"105\" cy=\"92\" r=\"30\" fill=\"#f5c66c\"/><line x1=\"145\" y1=\"92\" x2=\"205\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"245\" cy=\"92\" r=\"48\" fill=\"#f29f76\"/><line x1=\"300\" y1=\"92\" x2=\"350\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"376\" cy=\"92\" r=\"15\" fill=\"#e7e9ec\"/><text x=\"105\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">huvudserie</text><text x=\"245\" y=\"157\" text-anchor=\"middle\" font-size=\"13\">röd jätte</text><text x=\"376\" y=\"125\" text-anchor=\"middle\" font-size=\"13\">vit dvärg</text></svg></div>",
  "s": "<p>De yttre lagren kastas av och kärnan blir en <strong>vit dvärg</strong> (omgiven av en planetarisk nebulosa under en övergångsfas).</p>"
},
{
  "id": "5.8",
  "kap": 5,
  "omr": "stjarnornas_utveckling",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>En huvudseriestjärna har ungefär 8 gånger solens luminositet men bara 2 gånger solens massa.</p><p>Om den tillgängliga mängden kärnbränsle antas vara proportionell mot massan, uppskatta stjärnans livslängd på huvudserien relativt solens.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad utveckling för sollik stjärna\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"105\" cy=\"92\" r=\"30\" fill=\"#f5c66c\"/><line x1=\"145\" y1=\"92\" x2=\"205\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"245\" cy=\"92\" r=\"48\" fill=\"#f29f76\"/><line x1=\"300\" y1=\"92\" x2=\"350\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"376\" cy=\"92\" r=\"15\" fill=\"#e7e9ec\"/><text x=\"105\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">huvudserie</text><text x=\"245\" y=\"157\" text-anchor=\"middle\" font-size=\"13\">röd jätte</text><text x=\"376\" y=\"125\" text-anchor=\"middle\" font-size=\"13\">vit dvärg</text></svg></div>",
  "s": "<p>Livslängden kan grovt uppskattas som bränsle/förbrukning ∝ M/L.</p><p>t/t☉≈(2/8)=<strong>0,25</strong>. Stjärnan lever alltså ungefär <strong>en fjärdedel så länge som solen</strong> på huvudserien.</p>"
},
{
  "id": "5.9",
  "kap": 5,
  "omr": "stjarnornas_utveckling",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>En stjärnhop innehåller många stjärnor som bildades samtidigt. I ett HR-diagram ser man att stjärnor med massor över ungefär 3 M☉ redan har lämnat huvudserien, medan mindre massiva stjärnor fortfarande ligger kvar.</p><p>Använd den grova relationen L∝M³·⁵ och antag att huvudserielivslängden t∝M/L. Om solen lever 10 miljarder år på huvudserien, uppskatta stjärnhopens ålder.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Förenklad utveckling för sollik stjärna\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><circle cx=\"105\" cy=\"92\" r=\"30\" fill=\"#f5c66c\"/><line x1=\"145\" y1=\"92\" x2=\"205\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"245\" cy=\"92\" r=\"48\" fill=\"#f29f76\"/><line x1=\"300\" y1=\"92\" x2=\"350\" y2=\"92\" stroke=\"#8A858E\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><circle cx=\"376\" cy=\"92\" r=\"15\" fill=\"#e7e9ec\"/><text x=\"105\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">huvudserie</text><text x=\"245\" y=\"157\" text-anchor=\"middle\" font-size=\"13\">röd jätte</text><text x=\"376\" y=\"125\" text-anchor=\"middle\" font-size=\"13\">vit dvärg</text></svg></div>",
  "s": "<p>t∝M/L∝M/M³·⁵=M⁻²·⁵.</p><p>För vändpunktsmassan 3 M☉: t=10·3⁻²·⁵ miljarder år.</p><p>3²·⁵=15,59 ⇒ t=<strong>0,641 miljarder år ≈ 6,4·10⁸ år</strong>.</p><p>Stjärnhopens ålder är alltså ungefär 640 miljoner år, eftersom stjärnor kring 3 M☉ just håller på att lämna huvudserien.</p>"
},
{
  "id": "5.10",
  "kap": 5,
  "omr": "kosmologi",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>En galax har spektrallinjer som är rödförskjutna. Vad innebär det i den enklaste tolkningen för galaxens rörelse relativt oss?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Hubblediagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"58\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"58\" y1=\"145\" x2=\"58\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"75\" y1=\"135\" x2=\"350\" y2=\"48\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"120\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"210\" cy=\"90\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"310\" cy=\"62\" r=\"5\" fill=\"#2A5D9E\"/><text x=\"365\" y=\"165\" font-size=\"13\">avstånd</text><text x=\"18\" y=\"45\" font-size=\"13\" transform=\"rotate(-90 18 45)\">recessionsfart</text></svg></div>",
  "s": "<p>Rödförskjutningen betyder att ljusets våglängder har sträckts. För en avlägsen galax tolkas detta som att galaxen i genomsnitt <strong>avlägsnar sig från oss</strong> på grund av universums expansion.</p>"
},
{
  "id": "5.11",
  "kap": 5,
  "omr": "kosmologi",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Använd Hubbles lag v=H₀d med H₀=70 km/(s·Mpc). En galax har recessionsfarten 8400 km/s.</p><ol><li>Uppskatta avståndet till galaxen.</li><li>Hur lång tid skulle ljuset ungefär ta att färdas detta avstånd om man bortser från kosmologiska komplikationer? Använd 1 Mpc=3,26 miljoner ljusår.</li></ol><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Hubblediagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"58\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"58\" y1=\"145\" x2=\"58\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"75\" y1=\"135\" x2=\"350\" y2=\"48\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"120\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"210\" cy=\"90\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"310\" cy=\"62\" r=\"5\" fill=\"#2A5D9E\"/><text x=\"365\" y=\"165\" font-size=\"13\">avstånd</text><text x=\"18\" y=\"45\" font-size=\"13\" transform=\"rotate(-90 18 45)\">recessionsfart</text></svg></div>",
  "s": "<p>d=v/H₀=8400/70=<strong>120 Mpc</strong>.</p><p>120 Mpc motsvarar 120·3,26=<strong>391 miljoner ljusår</strong>. En enkel ljusgångtid blir därför cirka <strong>391 miljoner år</strong>.</p>"
},
{
  "id": "5.12",
  "kap": 5,
  "omr": "kosmologi",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>Anta för ett överslag att Hubblekonstanten varit konstant och lika med 70 km/(s·Mpc) under hela universums historia.</p><p>Uppskatta universums ålder från 1/H₀. Använd 1 Mpc=3,086·10¹⁹ km. Kommentera varför detta bara är en grov modell.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Hubblediagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"58\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"58\" y1=\"145\" x2=\"58\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"75\" y1=\"135\" x2=\"350\" y2=\"48\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"120\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"210\" cy=\"90\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"310\" cy=\"62\" r=\"5\" fill=\"#2A5D9E\"/><text x=\"365\" y=\"165\" font-size=\"13\">avstånd</text><text x=\"18\" y=\"45\" font-size=\"13\" transform=\"rotate(-90 18 45)\">recessionsfart</text></svg></div>",
  "s": "<p>H₀=70/(3,086·10¹⁹) s⁻¹=<strong>2,268·10⁻¹⁸ s⁻¹</strong>.</p><p>1/H₀=4,409·10¹⁷ s. Dividerat med 3,156·10⁷ s/år ger <strong>1,40·10¹⁰ år ≈ 14,0 miljarder år</strong>.</p><p>Det är en grov uppskattning eftersom expansionshastigheten inte varit konstant: materia, strålning och mörk energi har påverkat expansionen olika under kosmisk tid.</p>"
},
{
  "id": "5.13",
  "kap": 5,
  "omr": "framtiden",
  "niva": "E",
  "poang": "(2/0/0)",
  "t": "<p>Observationer visar att universums expansion accelererar. Vilken komponent i den moderna kosmologiska modellen används för att beskriva den drivande effekten?</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Hubblediagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"58\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"58\" y1=\"145\" x2=\"58\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"75\" y1=\"135\" x2=\"350\" y2=\"48\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"120\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"210\" cy=\"90\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"310\" cy=\"62\" r=\"5\" fill=\"#2A5D9E\"/><text x=\"365\" y=\"165\" font-size=\"13\">avstånd</text><text x=\"18\" y=\"45\" font-size=\"13\" transform=\"rotate(-90 18 45)\">recessionsfart</text></svg></div>",
  "s": "<p>Den accelererande expansionen beskrivs med <strong>mörk energi</strong>, ofta modellerad som en kosmologisk konstant.</p>"
},
{
  "id": "5.14",
  "kap": 5,
  "omr": "framtiden",
  "niva": "C",
  "poang": "(1/2/0)",
  "t": "<p>Två möjliga framtidsscenarier diskuteras: fortsatt accelererande expansion och en framtida kontraktion.</p><p>Förklara kvalitativt vilken roll den totala energitätheten och mörk energis egenskaper spelar för vilket scenario som är möjligt.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Hubblediagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"58\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"58\" y1=\"145\" x2=\"58\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"75\" y1=\"135\" x2=\"350\" y2=\"48\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"120\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"210\" cy=\"90\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"310\" cy=\"62\" r=\"5\" fill=\"#2A5D9E\"/><text x=\"365\" y=\"165\" font-size=\"13\">avstånd</text><text x=\"18\" y=\"45\" font-size=\"13\" transform=\"rotate(-90 18 45)\">recessionsfart</text></svg></div>",
  "s": "<p>Universums framtid bestäms inte enbart av vanlig materia utan av den totala energiinnehållet och hur olika komponenter utvecklas när universum expanderar. Om mörk energi beter sig ungefär som en kosmologisk konstant fortsätter den att dominera och expansionen accelererar. En framtida kontraktion skulle kräva en annan utveckling där den effektiva drivningen av expansionen avtar eller blir attraktiv och den sammanlagda dynamiken vänder expansionen.</p>"
},
{
  "id": "5.15",
  "kap": 5,
  "omr": "framtiden",
  "niva": "A",
  "poang": "(0/2/2)",
  "t": "<p>I en förenklad modell antas en avlägsen galax ha konstant komoving position medan universums skalfaktor växer exponentiellt, a(t)=e<sup>Ht</sup>, med H=2,3·10⁻¹⁸ s⁻¹.</p><p>Hur lång tid tar det innan det fysiska avståndet till galaxen har fördubblats? Jämför resultatet med Hubbletiden 1/H och förklara vad exponentiell expansion innebär.</p><div class=\"fig\"><svg viewBox=\"0 0 430 190\" role=\"img\" aria-label=\"Hubblediagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#2B2527\"/></marker><marker id=\"arrR\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B43123\"/></marker></defs><line x1=\"58\" y1=\"145\" x2=\"380\" y2=\"145\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"58\" y1=\"145\" x2=\"58\" y2=\"35\" stroke=\"#2B2527\" stroke-width=\"2\" marker-end=\"url(#arr)\"/><line x1=\"75\" y1=\"135\" x2=\"350\" y2=\"48\" stroke=\"#B43123\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"120\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"210\" cy=\"90\" r=\"5\" fill=\"#2A5D9E\"/><circle cx=\"310\" cy=\"62\" r=\"5\" fill=\"#2A5D9E\"/><text x=\"365\" y=\"165\" font-size=\"13\">avstånd</text><text x=\"18\" y=\"45\" font-size=\"13\" transform=\"rotate(-90 18 45)\">recessionsfart</text></svg></div>",
  "s": "<p>Fördubbling kräver e<sup>Ht</sup>=2 ⇒ t=ln2/H.</p><p>t=0,693/(2,3·10⁻¹⁸)=3,01·10¹⁷ s = <strong>9,55 miljarder år</strong>.</p><p>Hubbletiden 1/H=4,35·10¹⁷ s=<strong>13,8 miljarder år</strong>. Fördubblingstiden är alltså ln2≈0,693 gånger Hubbletiden.</p><p>Exponentiell expansion betyder att avstånd växer med en konstant procentuell takt snarare än med ett konstant antal meter per sekund.</p>"
}
];
