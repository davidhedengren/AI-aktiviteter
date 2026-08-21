/* uppgifter2.js — uppgiftsbanken för Fysik 2.
   Samma format som uppgifter.js, globalen heter BANK2.

   Varje område i struktur2.js har minst en uppgift.
   Kraftmoment ingår inte här eftersom det ligger i Fysik 1. */

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
 },
{
  "id": "1.2",
  "kap": 1,
  "omr": "cirkel",
  "niva": "E",
  "typ": "beräkna centripetalacceleration vid cirkulär rörelse",
  "poang": "(1/1/0)",
  "t": "<p>En bil kör med den konstanta farten 12 m/s i en cirkelformad rondell med radien 24 m. Bestäm bilens centripetalacceleration.</p>",
  "s": "<p>Vid cirkulär rörelse gäller <strong>a = v²/r</strong>.</p><p>a = 12²/24 = <strong>6,0 m/s²</strong>.</p>"
 },
{
  "id": "1.3",
  "kap": 1,
  "omr": "rotation",
  "niva": "E",
  "typ": "beräkna vinkelhastighet vid rotation",
  "poang": "(1/1/0)",
  "t": "<p>Ett hjul roterar med frekvensen 5,0 varv/s. Bestäm hjulets vinkelhastighet i rad/s.</p>",
  "s": "<p>Sambandet mellan frekvens och vinkelhastighet är <strong>ω = 2πf</strong>.</p><p>ω = 2π · 5,0 = <strong>31,4 rad/s</strong>.</p>"
 },
{
  "id": "2.1",
  "kap": 2,
  "omr": "svangning",
  "niva": "E",
  "typ": "beräkna period och frekvens för harmonisk svängning",
  "poang": "(1/1/0)",
  "t": "<p>En oscillator utför 12 hela svängningar på 6,0 s. Bestäm oscillatorns period och frekvens.</p>",
  "s": "<p>Perioden är tiden för en svängning: T = 6,0/12 = <strong>0,50 s</strong>.</p><p>Frekvensen är f = 1/T = <strong>2,0 Hz</strong>.</p>"
 },
{
  "id": "2.2",
  "kap": 2,
  "omr": "pendel",
  "niva": "E",
  "typ": "beräkna pendelns period",
  "poang": "(1/1/0)",
  "t": "<p>En enkel pendel har längden 1,0 m. Bestäm pendelns period. Använd g = 9,82 m/s².</p>",
  "s": "<p>För en enkel pendel gäller <strong>T = 2π√(l/g)</strong>.</p><p>T = 2π√(1,0/9,82) = <strong>2,01 s</strong>.</p>"
 },
{
  "id": "2.3",
  "kap": 2,
  "omr": "energi",
  "niva": "E",
  "typ": "beräkna lägesenergi i en harmonisk oscillator",
  "poang": "(1/1/0)",
  "t": "<p>En massa på 0,50 kg sitter i en fjäder och svänger. Vid största utslaget är massan 0,20 m ovanför jämviktsläget. Hur stor är skillnaden i lägesenergi mellan dessa två lägen?</p>",
  "s": "<p>Lägesenergin ändras enligt <strong>ΔE = mgΔh</strong>.</p><p>ΔE = 0,50 · 9,82 · 0,20 = <strong>0,98 J</strong>.</p>"
 },
{
  "id": "3.1",
  "kap": 3,
  "omr": "vagor",
  "niva": "E",
  "typ": "beräkna våglängd från frekvens och våghastighet",
  "poang": "(1/1/0)",
  "t": "<p>En våg färdas med hastigheten 340 m/s och har frekvensen 680 Hz. Bestäm våglängden.</p>",
  "s": "<p>Vågekvationen är <strong>v = fλ</strong>.</p><p>λ = v/f = 340/680 = <strong>0,50 m</strong>.</p>"
 },
{
  "id": "3.2",
  "kap": 3,
  "omr": "ljud",
  "niva": "E",
  "typ": "beräkna ljudnivå från intensitet",
  "poang": "(1/1/0)",
  "t": "<p>Ljudintensiteten på en plats är 1,0 · 10⁻⁶ W/m². Bestäm ljudnivån i decibel. Använd I₀ = 1,0 · 10⁻¹² W/m².</p>",
  "s": "<p>Ljudnivån ges av <strong>L = 10 log(I/I₀)</strong>.</p><p>L = 10 log(10⁻⁶/10⁻¹²) = <strong>60 dB</strong>.</p>"
 },
{
  "id": "3.3",
  "kap": 3,
  "omr": "interferens",
  "niva": "E",
  "typ": "avgöra konstruktiv interferens från vägskillnad",
  "poang": "(1/1/0)",
  "t": "<p>Två koherenta vågor har våglängden 0,40 m. Vägskillnaden till en punkt är 0,80 m. Blir interferensen konstruktiv eller destruktiv?</p>",
  "s": "<p>För konstruktiv interferens krävs en vägskillnad som är ett helt antal våglängder.</p><p>0,80/0,40 = 2, alltså två våglängder. Interferensen är därför <strong>konstruktiv</strong>.</p>"
 },
{
  "id": "3.4",
  "kap": 3,
  "omr": "doppler",
  "niva": "E",
  "typ": "förklara dopplereffekten",
  "poang": "(1/1/0)",
  "t": "<p>En ambulans kör mot en stillastående person med sirenen på. Personen upplever en högre frekvens än den frekvens som ambulansen sänder ut. Förklara varför.</p>",
  "s": "<p>När ljudkällan närmar sig möter personen vågfronterna tätare. Våglängden blir mindre framför ljudkällan.</p><p>Eftersom <strong>f = v/λ</strong> blir den uppmätta frekvensen <strong>högre</strong>. Detta kallas dopplereffekten.</p>"
 },
{
  "id": "4.1",
  "kap": 4,
  "omr": "reflektion",
  "niva": "E",
  "typ": "använda reflektionslagen",
  "poang": "(1/1/0)",
  "t": "<p>En ljusstråle träffar en plan spegel med infallsvinkeln 35°. Bestäm reflektionsvinkeln.</p>",
  "s": "<p>Reflektionslagen säger att <strong>infallsvinkel = reflektionsvinkel</strong>.</p><p>Reflektionsvinkeln är därför <strong>35°</strong>.</p>"
 },
{
  "id": "4.2",
  "kap": 4,
  "omr": "linser",
  "niva": "E",
  "typ": "beräkna linsens brännvidd från optisk styrka",
  "poang": "(1/1/0)",
  "t": "<p>En konvergerande lins har den optiska styrkan +5,0 dioptrier. Bestäm linsens brännvidd.</p>",
  "s": "<p>Sambandet är <strong>P = 1/f</strong>, där f anges i meter.</p><p>f = 1/5,0 = <strong>0,20 m</strong>, alltså 20 cm.</p>"
 },
{
  "id": "4.3",
  "kap": 4,
  "omr": "diffraktion",
  "niva": "E",
  "typ": "beräkna diffraktionsvinkel med gitterekvationen",
  "poang": "(1/1/0)",
  "t": "<p>Ett diffraktionsgitter har 500 linjer/mm. Monokromatiskt ljus med våglängden 600 nm ger första ordningens maximum. Bestäm diffraktionsvinkeln.</p>",
  "s": "<p>Gitterkonstanten är d = 1/(500 · 10³) = 2,0 · 10⁻⁶ m.</p><p>Gitterekvationen är <strong>d sin θ = mλ</strong>.</p><p>sin θ = 1 · 600 · 10⁻⁹/(2,0 · 10⁻⁶) = 0,30.</p><p>θ = <strong>17,5°</strong>.</p>"
 },
{
  "id": "5.1",
  "kap": 5,
  "omr": "coulomb",
  "niva": "E",
  "typ": "beräkna elektrisk kraft mellan två laddningar",
  "poang": "(1/1/0)",
  "t": "<p>Två punktladdningar på 2,0 μC respektive 3,0 μC ligger 0,50 m från varandra. Bestäm kraftens storlek mellan laddningarna. Använd k = 8,99 · 10⁹ Nm²/C².</p>",
  "s": "<p>Coulombs lag är <strong>F = k|q₁q₂|/r²</strong>.</p><p>F = 8,99 · 10⁹ · (2,0 · 10⁻⁶)(3,0 · 10⁻⁶)/0,50² = <strong>0,216 N</strong>.</p>"
 },
{
  "id": "5.2",
  "kap": 5,
  "omr": "falt",
  "niva": "E",
  "typ": "beräkna kraft på laddning i homogent elektriskt fält",
  "poang": "(1/1/0)",
  "t": "<p>En proton befinner sig i ett homogent elektriskt fält med fältstyrkan 2,0 · 10⁴ N/C. Hur stor elektrisk kraft verkar på protonen? Protonens laddning är 1,60 · 10⁻¹⁹ C.</p>",
  "s": "<p>Kraften ges av <strong>F = qE</strong>.</p><p>F = 1,60 · 10⁻¹⁹ · 2,0 · 10⁴ = <strong>3,2 · 10⁻¹⁵ N</strong>.</p>"
 },
{
  "id": "5.3",
  "kap": 5,
  "omr": "potential",
  "niva": "E",
  "typ": "beräkna arbete från laddning och spänningsskillnad",
  "poang": "(1/1/0)",
  "t": "<p>En laddning på 4,0 μC flyttas genom en spänningsskillnad på 120 V. Hur stort arbete motsvarar denna förändring i elektrisk potentiell energi?</p>",
  "s": "<p>Sambandet är <strong>W = qU</strong>.</p><p>W = 4,0 · 10⁻⁶ · 120 = <strong>4,8 · 10⁻⁴ J</strong>.</p>"
 },
{
  "id": "5.4",
  "kap": 5,
  "omr": "kondensator",
  "niva": "E",
  "typ": "beräkna laddning på kondensator",
  "poang": "(1/1/0)",
  "t": "<p>En kondensator har kapacitansen 220 μF och spänningen 12 V över sig. Hur stor laddning finns på kondensatorn?</p>",
  "s": "<p>Sambandet är <strong>Q = CU</strong>.</p><p>Q = 220 · 10⁻⁶ · 12 = <strong>2,64 · 10⁻³ C</strong>, alltså 2,64 mC.</p>"
 },
{
  "id": "6.1",
  "kap": 6,
  "omr": "magnetfalt",
  "niva": "E",
  "typ": "beräkna magnetisk kraft på strömförande ledare",
  "poang": "(1/1/0)",
  "t": "<p>En rak ledare med längden 0,20 m ligger vinkelrätt mot ett magnetfält med flödestätheten 0,50 T. Strömmen är 3,0 A. Bestäm kraften på ledaren.</p>",
  "s": "<p>För en vinkelrät ledare gäller <strong>F = BIL</strong>.</p><p>F = 0,50 · 3,0 · 0,20 = <strong>0,30 N</strong>.</p>"
 },
{
  "id": "6.2",
  "kap": 6,
  "omr": "kraft",
  "niva": "E",
  "typ": "bestäm kraftens riktning på strömförande ledare",
  "poang": "(1/1/0)",
  "t": "<p>En rak ledare har ström riktad åt höger. Magnetfältet är riktat rakt uppåt i figuren. Åt vilket håll verkar den magnetiska kraften på ledaren?</p>",
  "s": "<p>Använd högerhandsregeln för kraften på en strömförande ledare, <strong>F = I L × B</strong>.</p><p>Med ström åt höger och magnetfält uppåt blir kraften <strong>ut ur bildens plan</strong>.</p>"
 },
{
  "id": "6.3",
  "kap": 6,
  "omr": "laddning",
  "niva": "E",
  "typ": "beräkna magnetisk kraft på laddad partikel",
  "poang": "(1/1/0)",
  "t": "<p>En proton rör sig med hastigheten 2,0 · 10⁶ m/s vinkelrätt mot ett magnetfält på 0,30 T. Hur stor blir den magnetiska kraften? Protonens laddning är 1,60 · 10⁻¹⁹ C.</p>",
  "s": "<p>För vinkelrät rörelse gäller <strong>F = qvB</strong>.</p><p>F = 1,60 · 10⁻¹⁹ · 2,0 · 10⁶ · 0,30 = <strong>9,6 · 10⁻¹⁴ N</strong>.</p>"
 },
{
  "id": "6.4",
  "kap": 6,
  "omr": "induktion",
  "niva": "E",
  "typ": "förklara elektromagnetisk induktion",
  "poang": "(1/1/0)",
  "t": "<p>En magnet förs in i en spole. En galvanometer som är kopplad till spolen ger då ett utslag. Vad är orsaken till att en inducerad spänning uppstår?</p>",
  "s": "<p>När magneten rör sig förändras det magnetiska flödet genom spolen.</p><p>En förändring av magnetiskt flöde ger enligt Faradays induktionslag en <strong>inducerad spänning</strong>.</p>"
 },
{
  "id": "7.1",
  "kap": 7,
  "omr": "postulat",
  "niva": "E",
  "typ": "ange relativitetsteorins postulat",
  "poang": "(1/1/0)",
  "t": "<p>Vilket av följande påståenden är ett av den speciella relativitetsteorins två grundläggande postulat?</p><ol><li>Ljusets hastighet är densamma för alla inertialsystem.</li><li>Tiden går alltid lika fort för alla observatörer.</li><li>Ljusets hastighet beror på ljuskällans hastighet.</li></ol>",
  "s": "<p>Rätt svar är <strong>1</strong>. Ljusets hastighet i vakuum är densamma för alla inertialsystem, oberoende av observatörens eller ljuskällans rörelse.</p>"
 },
{
  "id": "7.2",
  "kap": 7,
  "omr": "tid",
  "niva": "E",
  "typ": "beräkna tidsdilatation",
  "poang": "(1/1/0)",
  "t": "<p>En astronaut färdas med en hastighet som gör att γ = 2,0. Astronautens egen tid för en händelse är 3,0 s. Hur lång tid mäts av en observatör på jorden?</p>",
  "s": "<p>Tidsdilatationen ges av <strong>Δt = γΔτ</strong>.</p><p>Δt = 2,0 · 3,0 = <strong>6,0 s</strong>.</p>"
 },
{
  "id": "7.3",
  "kap": 7,
  "omr": "energi",
  "niva": "E",
  "typ": "beräkna relativistisk energi från massa",
  "poang": "(1/1/0)",
  "t": "<p>Hur mycket motsvarar vilenergin hos en massa på 1,0 g? Använd c = 3,00 · 10⁸ m/s.</p>",
  "s": "<p>Einsteins samband är <strong>E = mc²</strong>.</p><p>m = 0,001 kg.</p><p>E = 0,001 · (3,00 · 10⁸)² = <strong>9,0 · 10¹³ J</strong>.</p>"
 },
{
  "id": "8.1",
  "kap": 8,
  "omr": "fotoelektrisk",
  "niva": "E",
  "typ": "förklara fotoelektrisk effekt",
  "poang": "(1/1/0)",
  "t": "<p>En metallyta belyses med ljus. Elektroner lämnar ytan endast när ljusets frekvens är tillräckligt hög. Varför kan inte en tillräckligt intensiv stråle med för låg frekvens slå loss elektroner?</p>",
  "s": "<p>I den fotoelektriska effekten överförs energi till elektronerna i form av fotoner. En fotons energi är <strong>E = hf</strong>.</p><p>Om frekvensen är under tröskelfrekvensen har varje foton för liten energi, oavsett hur många fotoner som träffar ytan.</p>"
 },
{
  "id": "8.2",
  "kap": 8,
  "omr": "fotoner",
  "niva": "E",
  "typ": "beräkna fotonenergi från våglängd",
  "poang": "(1/1/0)",
  "t": "<p>Bestäm energin hos en foton med våglängden 600 nm. Använd h = 6,63 · 10⁻³⁴ Js och c = 3,00 · 10⁸ m/s.</p>",
  "s": "<p>Fotonens energi ges av <strong>E = hc/λ</strong>.</p><p>E = (6,63 · 10⁻³⁴ · 3,00 · 10⁸)/(600 · 10⁻⁹) = <strong>3,32 · 10⁻¹⁹ J</strong>.</p>"
 },
{
  "id": "8.3",
  "kap": 8,
  "omr": "atommodell",
  "niva": "E",
  "typ": "förklara emissionsspektrum från atom",
  "poang": "(1/1/0)",
  "t": "<p>Varför ger en exciterad atom upphov till linjer i ett emissionsspektrum i stället för ett kontinuerligt spektrum?</p>",
  "s": "<p>Elektronerna i atomen kan bara befinna sig på vissa bestämda energinivåer.</p><p>När en elektron går från en högre till en lägre energinivå avges en foton med energin <strong>E = ΔE = hf</strong>. Därför fås endast vissa bestämda våglängder och därmed spektrallinjer.</p>"
 },
{
  "id": "9.1",
  "kap": 9,
  "omr": "himlakroppar",
  "niva": "E",
  "typ": "beräkna gravitationskraft mellan himlakroppar",
  "poang": "(1/1/0)",
  "t": "<p>Två himlakroppar har massorna 5,0 · 10²⁴ kg och 2,0 · 10²⁴ kg och befinner sig 4,0 · 10⁸ m från varandra. Bestäm gravitationskraftens storlek. Använd G = 6,67 · 10⁻¹¹ Nm²/kg².</p>",
  "s": "<p>Newtons gravitationslag är <strong>F = Gm₁m₂/r²</strong>.</p><p>F = 6,67 · 10⁻¹¹ · (5,0 · 10²⁴)(2,0 · 10²⁴)/(4,0 · 10⁸)² = <strong>4,17 · 10²¹ N</strong>.</p>"
 },
{
  "id": "9.2",
  "kap": 9,
  "omr": "kosmologi",
  "niva": "E",
  "typ": "förklara universums expansion",
  "poang": "(1/1/0)",
  "t": "<p>Vad menas med att universum expanderar?</p>",
  "s": "<p>Att universum expanderar betyder att avstånden mellan avlägsna galaxer i genomsnitt ökar med tiden.</p><p>Det är själva rymden som expanderar, vilket bland annat kan observeras genom galaxernas rödförskjutning.</p>"
 }
];
