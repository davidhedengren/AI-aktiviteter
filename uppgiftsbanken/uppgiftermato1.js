/* uppgiftermato1.js — Matematik – fortsättning nivå 1b och 1c.
   Runda 1 komplett: 20 uppgifter i varje område i den förenklade strukturen.
   Uppgifterna är nyskrivna; nationella prov och lärarprov används för nivåkalibrering,
   inte för ordagrann kopiering. SVG-figurer ligger inline i respektive uppgift. */

window.BANKMATO1 = [
  {
    "id": "1.01",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Vilka av följande uttryck är polynom i variabeln \\(x\\)?</p><p>A. \\(3x^4-2x+7\\)<br>B. \\(x^2+\\frac{4}{x}\\)<br>C. \\(5-\\sqrt{x}\\)<br>D. \\(-2x^3+x^2-6\\)</p><p>Ange också grad och konstantterm för de uttryck som är polynom.</p>",
    "s": "<p><strong>Metod:</strong> I ett polynom får variabeln bara förekomma med icke-negativa heltalsexponenter: \\(x^0,x^1,x^2,\\ldots\\). Variabeln får alltså inte ligga i nämnaren eller under ett rottecken.</p><p>A är ett polynom. Högsta exponenten är 4, så graden är <strong>4</strong>. Konstanttermen är <strong>7</strong>.</p><p>B är inte ett polynom eftersom \\(4/x=4x^{-1}\\).</p><p>C är inte ett polynom eftersom \\(\\sqrt{x}=x^{1/2}\\).</p><p>D är ett polynom. Högsta exponenten är 3, så graden är <strong>3</strong>. Konstanttermen är <strong>-6</strong>.</p><p><strong>Svar:</strong> A och D.</p>",
    "familj": "mato1_polynom_begrepp_klassificera"
  },
  {
    "id": "1.02",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Funktionen \\(f\\) ges av</p><p>\\[f(x)=2x^2-3x+1.\\]</p><p>a) Bestäm \\(f(-1)\\).<br>b) Bestäm \\(f(2)-f(0)\\).<br>c) Förklara med ord vad \\(f(2)\\) betyder.</p>",
    "s": "<p><strong>Metod:</strong> Ett funktionsvärde fås genom att ersätta \\(x\\) med det givna talet i hela funktionsuttrycket.</p><p>a) \\(f(-1)=2(-1)^2-3(-1)+1=2+3+1=\\)<strong>6</strong>.</p><p>b) \\(f(2)=2\\cdot4-6+1=3\\) och \\(f(0)=1\\). Därför är \\(f(2)-f(0)=3-1=\\)<strong>2</strong>.</p><p>c) \\(f(2)\\) är funktionens <strong>y-värde när x-värdet är 2</strong>, alltså y-koordinaten för den punkt på grafen som har x-koordinaten 2.</p>",
    "familj": "mato1_funktionsbegrepp_varden"
  },
  {
    "id": "1.03",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Det rationella uttrycket</p><p>\\[R(x)=\\frac{x+3}{x^2-9}\\]</p><p>är inte definierat för alla reella \\(x\\).</p><p>a) Bestäm de värden på \\(x\\) som inte tillhör definitionsmängden.<br>b) Förklara varför dessa värden måste uteslutas även om uttrycket senare kan förkortas.</p>",
    "s": "<p><strong>Metod:</strong> Ett rationellt uttryck är inte definierat när nämnaren är noll.</p><p>Faktorisera nämnaren:</p><p>\\[x^2-9=(x-3)(x+3).\\]</p><p>Nämnaren blir noll för \\(x=3\\) och \\(x=-3\\). Alltså måste båda värdena uteslutas.</p><p>Även om \\(x+3\\) kan förkortas bort i ett senare steg ändrar det inte det ursprungliga uttryckets definitionsmängd. Vid \\(x=-3\\) var originalets nämnare fortfarande noll.</p><p><strong>Svar:</strong> \\(x\\neq -3\\) och \\(x\\neq 3\\).</p>",
    "familj": "mato1_rationellt_definitionsmangd"
  },
  {
    "id": "1.04",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar grafen till en funktion \\(f\\) samt två linjer \\(\\ell\\) och \\(m\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf med en tangent och en sekant till en parabel\"><defs><marker id=\"g103arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"g103clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"88.20\" y1=\"20\" x2=\"88.20\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"168.60\" y1=\"20\" x2=\"168.60\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"329.40\" y1=\"20\" x2=\"329.40\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"409.80\" y1=\"20\" x2=\"409.80\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"236.86\" x2=\"459\" y2=\"236.86\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g103arr)\"/><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g103arr)\"/><line x1=\"88.20\" y1=\"232.86\" x2=\"88.20\" y2=\"240.86\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"88.20\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"168.60\" y1=\"232.86\" x2=\"168.60\" y2=\"240.86\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"168.60\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"329.40\" y1=\"232.86\" x2=\"329.40\" y2=\"240.86\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"329.40\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"409.80\" y1=\"232.86\" x2=\"409.80\" y2=\"240.86\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"409.80\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><text x=\"460.00\" y=\"228.86\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"200.71\" x2=\"253.00\" y2=\"200.71\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"164.57\" x2=\"253.00\" y2=\"164.57\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"128.43\" x2=\"253.00\" y2=\"128.43\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"92.29\" x2=\"253.00\" y2=\"92.29\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"56.14\" x2=\"253.00\" y2=\"56.14\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"257.00\" y=\"13.00\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><text x=\"241.00\" y=\"252.86\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">0</text><path d=\"M48.00,10.96 L49.34,13.97 L50.68,16.95 L52.02,19.91 L53.36,22.85 L54.70,25.77 L56.04,28.67 L57.38,31.56 L58.72,34.42 L60.06,37.26 L61.40,40.08 L62.74,42.88 L64.08,45.66 L65.42,48.42 L66.76,51.16 L68.10,53.88 L69.44,56.58 L70.78,59.27 L72.12,61.93 L73.46,64.57 L74.80,67.19 L76.14,69.79 L77.48,72.37 L78.82,74.93 L80.16,77.47 L81.50,79.99 L82.84,82.49 L84.18,84.97 L85.52,87.43 L86.86,89.87 L88.20,92.29 L89.54,94.69 L90.88,97.06 L92.22,99.42 L93.56,101.76 L94.90,104.08 L96.24,106.38 L97.58,108.66 L98.92,110.92 L100.26,113.16 L101.60,115.38 L102.94,117.58 L104.28,119.75 L105.62,121.91 L106.96,124.05 L108.30,126.17 L109.64,128.27 L110.98,130.35 L112.32,132.40 L113.66,134.44 L115.00,136.46 L116.34,138.46 L117.68,140.44 L119.02,142.39 L120.36,144.33 L121.70,146.25 L123.04,148.15 L124.38,150.02 L125.72,151.88 L127.06,153.72 L128.40,155.54 L129.74,157.33 L131.08,159.11 L132.42,160.87 L133.76,162.60 L135.10,164.32 L136.44,166.02 L137.78,167.69 L139.12,169.35 L140.46,170.99 L141.80,172.60 L143.14,174.20 L144.48,175.78 L145.82,177.33 L147.16,178.87 L148.50,180.38 L149.84,181.88 L151.18,183.36 L152.52,184.81 L153.86,186.25 L155.20,187.66 L156.54,189.06 L157.88,190.43 L159.22,191.79 L160.56,193.12 L161.90,194.44 L163.24,195.73 L164.58,197.01 L165.92,198.26 L167.26,199.50 L168.60,200.71 L169.94,201.91 L171.28,203.08 L172.62,204.24 L173.96,205.37 L175.30,206.49 L176.64,207.58 L177.98,208.66 L179.32,209.71 L180.66,210.74 L182.00,211.76 L183.34,212.75 L184.68,213.73 L186.02,214.68 L187.36,215.61 L188.70,216.53 L190.04,217.42 L191.38,218.29 L192.72,219.15 L194.06,219.98 L195.40,220.79 L196.74,221.59 L198.08,222.36 L199.42,223.11 L200.76,223.85 L202.10,224.56 L203.44,225.25 L204.78,225.92 L206.12,226.58 L207.46,227.21 L208.80,227.82 L210.14,228.41 L211.48,228.99 L212.82,229.54 L214.16,230.07 L215.50,230.58 L216.84,231.07 L218.18,231.55 L219.52,232.00 L220.86,232.43 L222.20,232.84 L223.54,233.23 L224.88,233.60 L226.22,233.96 L227.56,234.29 L228.90,234.60 L230.24,234.89 L231.58,235.16 L232.92,235.41 L234.26,235.64 L235.60,235.85 L236.94,236.04 L238.28,236.21 L239.62,236.37 L240.96,236.50 L242.30,236.61 L243.64,236.70 L244.98,236.77 L246.32,236.82 L247.66,236.85 L249.00,236.86 L250.34,236.85 L251.68,236.82 L253.02,236.77 L254.36,236.70 L255.70,236.61 L257.04,236.50 L258.38,236.37 L259.72,236.21 L261.06,236.04 L262.40,235.85 L263.74,235.64 L265.08,235.41 L266.42,235.16 L267.76,234.89 L269.10,234.60 L270.44,234.29 L271.78,233.96 L273.12,233.60 L274.46,233.23 L275.80,232.84 L277.14,232.43 L278.48,232.00 L279.82,231.55 L281.16,231.07 L282.50,230.58 L283.84,230.07 L285.18,229.54 L286.52,228.99 L287.86,228.41 L289.20,227.82 L290.54,227.21 L291.88,226.58 L293.22,225.92 L294.56,225.25 L295.90,224.56 L297.24,223.85 L298.58,223.11 L299.92,222.36 L301.26,221.59 L302.60,220.79 L303.94,219.98 L305.28,219.15 L306.62,218.29 L307.96,217.42 L309.30,216.53 L310.64,215.61 L311.98,214.68 L313.32,213.73 L314.66,212.75 L316.00,211.76 L317.34,210.74 L318.68,209.71 L320.02,208.66 L321.36,207.58 L322.70,206.49 L324.04,205.37 L325.38,204.24 L326.72,203.08 L328.06,201.91 L329.40,200.71 L330.74,199.50 L332.08,198.26 L333.42,197.01 L334.76,195.73 L336.10,194.44 L337.44,193.12 L338.78,191.79 L340.12,190.43 L341.46,189.06 L342.80,187.66 L344.14,186.25 L345.48,184.81 L346.82,183.36 L348.16,181.88 L349.50,180.38 L350.84,178.87 L352.18,177.33 L353.52,175.78 L354.86,174.20 L356.20,172.60 L357.54,170.99 L358.88,169.35 L360.22,167.69 L361.56,166.02 L362.90,164.32 L364.24,162.60 L365.58,160.87 L366.92,159.11 L368.26,157.33 L369.60,155.54 L370.94,153.72 L372.28,151.88 L373.62,150.02 L374.96,148.15 L376.30,146.25 L377.64,144.33 L378.98,142.39 L380.32,140.44 L381.66,138.46 L383.00,136.46 L384.34,134.44 L385.68,132.40 L387.02,130.35 L388.36,128.27 L389.70,126.17 L391.04,124.05 L392.38,121.91 L393.72,119.75 L395.06,117.58 L396.40,115.38 L397.74,113.16 L399.08,110.92 L400.42,108.66 L401.76,106.38 L403.10,104.08 L404.44,101.76 L405.78,99.42 L407.12,97.06 L408.46,94.69 L409.80,92.29 L411.14,89.87 L412.48,87.43 L413.82,84.97 L415.16,82.49 L416.50,79.99 L417.84,77.47 L419.18,74.93 L420.52,72.37 L421.86,69.79 L423.20,67.19 L424.54,64.57 L425.88,61.93 L427.22,59.27 L428.56,56.58 L429.90,53.88 L431.24,51.16 L432.58,48.42 L433.92,45.66 L435.26,42.88 L436.60,40.08 L437.94,37.26 L439.28,34.42 L440.62,31.56 L441.96,28.67 L443.30,25.77 L444.64,22.85 L445.98,19.91 L447.32,16.95 L448.66,13.97 L450.00,10.96\" fill=\"none\" stroke=\"#2B2527\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g103clip)\"/><path d=\"M48.00,453.71 L49.34,452.51 L50.68,451.30 L52.02,450.10 L53.36,448.90 L54.70,447.69 L56.04,446.49 L57.38,445.28 L58.72,444.08 L60.06,442.87 L61.40,441.67 L62.74,440.46 L64.08,439.26 L65.42,438.05 L66.76,436.85 L68.10,435.64 L69.44,434.44 L70.78,433.23 L72.12,432.03 L73.46,430.82 L74.80,429.62 L76.14,428.41 L77.48,427.21 L78.82,426.00 L80.16,424.80 L81.50,423.60 L82.84,422.39 L84.18,421.19 L85.52,419.98 L86.86,418.78 L88.20,417.57 L89.54,416.37 L90.88,415.16 L92.22,413.96 L93.56,412.75 L94.90,411.55 L96.24,410.34 L97.58,409.14 L98.92,407.93 L100.26,406.73 L101.60,405.52 L102.94,404.32 L104.28,403.11 L105.62,401.91 L106.96,400.70 L108.30,399.50 L109.64,398.30 L110.98,397.09 L112.32,395.89 L113.66,394.68 L115.00,393.48 L116.34,392.27 L117.68,391.07 L119.02,389.86 L120.36,388.66 L121.70,387.45 L123.04,386.25 L124.38,385.04 L125.72,383.84 L127.06,382.63 L128.40,381.43 L129.74,380.22 L131.08,379.02 L132.42,377.81 L133.76,376.61 L135.10,375.40 L136.44,374.20 L137.78,373.00 L139.12,371.79 L140.46,370.59 L141.80,369.38 L143.14,368.18 L144.48,366.97 L145.82,365.77 L147.16,364.56 L148.50,363.36 L149.84,362.15 L151.18,360.95 L152.52,359.74 L153.86,358.54 L155.20,357.33 L156.54,356.13 L157.88,354.92 L159.22,353.72 L160.56,352.51 L161.90,351.31 L163.24,350.10 L164.58,348.90 L165.92,347.70 L167.26,346.49 L168.60,345.29 L169.94,344.08 L171.28,342.88 L172.62,341.67 L173.96,340.47 L175.30,339.26 L176.64,338.06 L177.98,336.85 L179.32,335.65 L180.66,334.44 L182.00,333.24 L183.34,332.03 L184.68,330.83 L186.02,329.62 L187.36,328.42 L188.70,327.21 L190.04,326.01 L191.38,324.80 L192.72,323.60 L194.06,322.40 L195.40,321.19 L196.74,319.99 L198.08,318.78 L199.42,317.58 L200.76,316.37 L202.10,315.17 L203.44,313.96 L204.78,312.76 L206.12,311.55 L207.46,310.35 L208.80,309.14 L210.14,307.94 L211.48,306.73 L212.82,305.53 L214.16,304.32 L215.50,303.12 L216.84,301.91 L218.18,300.71 L219.52,299.50 L220.86,298.30 L222.20,297.10 L223.54,295.89 L224.88,294.69 L226.22,293.48 L227.56,292.28 L228.90,291.07 L230.24,289.87 L231.58,288.66 L232.92,287.46 L234.26,286.25 L235.60,285.05 L236.94,283.84 L238.28,282.64 L239.62,281.43 L240.96,280.23 L242.30,279.02 L243.64,277.82 L244.98,276.61 L246.32,275.41 L247.66,274.20 L249.00,273.00 L250.34,271.80 L251.68,270.59 L253.02,269.39 L254.36,268.18 L255.70,266.98 L257.04,265.77 L258.38,264.57 L259.72,263.36 L261.06,262.16 L262.40,260.95 L263.74,259.75 L265.08,258.54 L266.42,257.34 L267.76,256.13 L269.10,254.93 L270.44,253.72 L271.78,252.52 L273.12,251.31 L274.46,250.11 L275.80,248.90 L277.14,247.70 L278.48,246.50 L279.82,245.29 L281.16,244.09 L282.50,242.88 L283.84,241.68 L285.18,240.47 L286.52,239.27 L287.86,238.06 L289.20,236.86 L290.54,235.65 L291.88,234.45 L293.22,233.24 L294.56,232.04 L295.90,230.83 L297.24,229.63 L298.58,228.42 L299.92,227.22 L301.26,226.01 L302.60,224.81 L303.94,223.60 L305.28,222.40 L306.62,221.20 L307.96,219.99 L309.30,218.79 L310.64,217.58 L311.98,216.38 L313.32,215.17 L314.66,213.97 L316.00,212.76 L317.34,211.56 L318.68,210.35 L320.02,209.15 L321.36,207.94 L322.70,206.74 L324.04,205.53 L325.38,204.33 L326.72,203.12 L328.06,201.92 L329.40,200.71 L330.74,199.51 L332.08,198.30 L333.42,197.10 L334.76,195.90 L336.10,194.69 L337.44,193.49 L338.78,192.28 L340.12,191.08 L341.46,189.87 L342.80,188.67 L344.14,187.46 L345.48,186.26 L346.82,185.05 L348.16,183.85 L349.50,182.64 L350.84,181.44 L352.18,180.23 L353.52,179.03 L354.86,177.82 L356.20,176.62 L357.54,175.41 L358.88,174.21 L360.22,173.00 L361.56,171.80 L362.90,170.60 L364.24,169.39 L365.58,168.19 L366.92,166.98 L368.26,165.78 L369.60,164.57 L370.94,163.37 L372.28,162.16 L373.62,160.96 L374.96,159.75 L376.30,158.55 L377.64,157.34 L378.98,156.14 L380.32,154.93 L381.66,153.73 L383.00,152.52 L384.34,151.32 L385.68,150.11 L387.02,148.91 L388.36,147.70 L389.70,146.50 L391.04,145.30 L392.38,144.09 L393.72,142.89 L395.06,141.68 L396.40,140.48 L397.74,139.27 L399.08,138.07 L400.42,136.86 L401.76,135.66 L403.10,134.45 L404.44,133.25 L405.78,132.04 L407.12,130.84 L408.46,129.63 L409.80,128.43 L411.14,127.22 L412.48,126.02 L413.82,124.81 L415.16,123.61 L416.50,122.40 L417.84,121.20 L419.18,120.00 L420.52,118.79 L421.86,117.59 L423.20,116.38 L424.54,115.18 L425.88,113.97 L427.22,112.77 L428.56,111.56 L429.90,110.36 L431.24,109.15 L432.58,107.95 L433.92,106.74 L435.26,105.54 L436.60,104.33 L437.94,103.13 L439.28,101.92 L440.62,100.72 L441.96,99.51 L443.30,98.31 L444.64,97.10 L445.98,95.90 L447.32,94.70 L448.66,93.49 L450.00,92.29\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g103clip)\"/><path d=\"M48.00,254.93 L49.34,254.33 L50.68,253.72 L52.02,253.12 L53.36,252.52 L54.70,251.92 L56.04,251.31 L57.38,250.71 L58.72,250.11 L60.06,249.51 L61.40,248.90 L62.74,248.30 L64.08,247.70 L65.42,247.10 L66.76,246.50 L68.10,245.89 L69.44,245.29 L70.78,244.69 L72.12,244.09 L73.46,243.48 L74.80,242.88 L76.14,242.28 L77.48,241.68 L78.82,241.07 L80.16,240.47 L81.50,239.87 L82.84,239.27 L84.18,238.66 L85.52,238.06 L86.86,237.46 L88.20,236.86 L89.54,236.25 L90.88,235.65 L92.22,235.05 L93.56,234.45 L94.90,233.85 L96.24,233.24 L97.58,232.64 L98.92,232.04 L100.26,231.44 L101.60,230.83 L102.94,230.23 L104.28,229.63 L105.62,229.03 L106.96,228.42 L108.30,227.82 L109.64,227.22 L110.98,226.62 L112.32,226.01 L113.66,225.41 L115.00,224.81 L116.34,224.21 L117.68,223.60 L119.02,223.00 L120.36,222.40 L121.70,221.80 L123.04,221.20 L124.38,220.59 L125.72,219.99 L127.06,219.39 L128.40,218.79 L129.74,218.18 L131.08,217.58 L132.42,216.98 L133.76,216.38 L135.10,215.77 L136.44,215.17 L137.78,214.57 L139.12,213.97 L140.46,213.36 L141.80,212.76 L143.14,212.16 L144.48,211.56 L145.82,210.95 L147.16,210.35 L148.50,209.75 L149.84,209.15 L151.18,208.55 L152.52,207.94 L153.86,207.34 L155.20,206.74 L156.54,206.14 L157.88,205.53 L159.22,204.93 L160.56,204.33 L161.90,203.73 L163.24,203.12 L164.58,202.52 L165.92,201.92 L167.26,201.32 L168.60,200.71 L169.94,200.11 L171.28,199.51 L172.62,198.91 L173.96,198.30 L175.30,197.70 L176.64,197.10 L177.98,196.50 L179.32,195.90 L180.66,195.29 L182.00,194.69 L183.34,194.09 L184.68,193.49 L186.02,192.88 L187.36,192.28 L188.70,191.68 L190.04,191.08 L191.38,190.47 L192.72,189.87 L194.06,189.27 L195.40,188.67 L196.74,188.06 L198.08,187.46 L199.42,186.86 L200.76,186.26 L202.10,185.65 L203.44,185.05 L204.78,184.45 L206.12,183.85 L207.46,183.25 L208.80,182.64 L210.14,182.04 L211.48,181.44 L212.82,180.84 L214.16,180.23 L215.50,179.63 L216.84,179.03 L218.18,178.43 L219.52,177.82 L220.86,177.22 L222.20,176.62 L223.54,176.02 L224.88,175.41 L226.22,174.81 L227.56,174.21 L228.90,173.61 L230.24,173.00 L231.58,172.40 L232.92,171.80 L234.26,171.20 L235.60,170.60 L236.94,169.99 L238.28,169.39 L239.62,168.79 L240.96,168.19 L242.30,167.58 L243.64,166.98 L244.98,166.38 L246.32,165.78 L247.66,165.17 L249.00,164.57 L250.34,163.97 L251.68,163.37 L253.02,162.76 L254.36,162.16 L255.70,161.56 L257.04,160.96 L258.38,160.35 L259.72,159.75 L261.06,159.15 L262.40,158.55 L263.74,157.95 L265.08,157.34 L266.42,156.74 L267.76,156.14 L269.10,155.54 L270.44,154.93 L271.78,154.33 L273.12,153.73 L274.46,153.13 L275.80,152.52 L277.14,151.92 L278.48,151.32 L279.82,150.72 L281.16,150.11 L282.50,149.51 L283.84,148.91 L285.18,148.31 L286.52,147.70 L287.86,147.10 L289.20,146.50 L290.54,145.90 L291.88,145.30 L293.22,144.69 L294.56,144.09 L295.90,143.49 L297.24,142.89 L298.58,142.28 L299.92,141.68 L301.26,141.08 L302.60,140.48 L303.94,139.87 L305.28,139.27 L306.62,138.67 L307.96,138.07 L309.30,137.46 L310.64,136.86 L311.98,136.26 L313.32,135.66 L314.66,135.05 L316.00,134.45 L317.34,133.85 L318.68,133.25 L320.02,132.65 L321.36,132.04 L322.70,131.44 L324.04,130.84 L325.38,130.24 L326.72,129.63 L328.06,129.03 L329.40,128.43 L330.74,127.83 L332.08,127.22 L333.42,126.62 L334.76,126.02 L336.10,125.42 L337.44,124.81 L338.78,124.21 L340.12,123.61 L341.46,123.01 L342.80,122.40 L344.14,121.80 L345.48,121.20 L346.82,120.60 L348.16,120.00 L349.50,119.39 L350.84,118.79 L352.18,118.19 L353.52,117.59 L354.86,116.98 L356.20,116.38 L357.54,115.78 L358.88,115.18 L360.22,114.57 L361.56,113.97 L362.90,113.37 L364.24,112.77 L365.58,112.16 L366.92,111.56 L368.26,110.96 L369.60,110.36 L370.94,109.75 L372.28,109.15 L373.62,108.55 L374.96,107.95 L376.30,107.35 L377.64,106.74 L378.98,106.14 L380.32,105.54 L381.66,104.94 L383.00,104.33 L384.34,103.73 L385.68,103.13 L387.02,102.53 L388.36,101.92 L389.70,101.32 L391.04,100.72 L392.38,100.12 L393.72,99.51 L395.06,98.91 L396.40,98.31 L397.74,97.71 L399.08,97.10 L400.42,96.50 L401.76,95.90 L403.10,95.30 L404.44,94.70 L405.78,94.09 L407.12,93.49 L408.46,92.89 L409.80,92.29 L411.14,91.68 L412.48,91.08 L413.82,90.48 L415.16,89.88 L416.50,89.27 L417.84,88.67 L419.18,88.07 L420.52,87.47 L421.86,86.86 L423.20,86.26 L424.54,85.66 L425.88,85.06 L427.22,84.45 L428.56,83.85 L429.90,83.25 L431.24,82.65 L432.58,82.05 L433.92,81.44 L435.26,80.84 L436.60,80.24 L437.94,79.64 L439.28,79.03 L440.62,78.43 L441.96,77.83 L443.30,77.23 L444.64,76.62 L445.98,76.02 L447.32,75.42 L448.66,74.82 L450.00,74.21\" fill=\"none\" stroke=\"#2A5D9E\" stroke-width=\"2.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g103clip)\"/><circle cx=\"329.40\" cy=\"200.71\" r=\"4.4\" fill=\"#B43123\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"336.40\" y=\"193.71\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text><circle cx=\"168.60\" cy=\"200.71\" r=\"4.4\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"175.60\" y=\"193.71\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">Q</text><circle cx=\"409.80\" cy=\"92.29\" r=\"4.4\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"416.80\" y=\"85.29\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">R</text><text x=\"421.86\" y=\"108.55\" text-anchor=\"start\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">ℓ</text><text x=\"68.10\" y=\"235.05\" text-anchor=\"start\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#2A5D9E\">m</text><text x=\"389.70\" y=\"43.49\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#2B2527\">y = f(x)</text></svg></span><p>a) Vilken linje är en tangent till grafen?<br>b) Vilken linje är en sekant till grafen? Motivera kort.</p>",
    "s": "<p><strong>Begrepp:</strong> En tangent har samma riktning som kurvan i tangeringspunkten. En sekant går genom två olika punkter på kurvan.</p><p>Linjen \\(\\ell\\) berör kurvan i punkten \\(P\\) och har där samma riktning som kurvan. Alltså är <strong>\\(\\ell\\) tangenten</strong>.</p><p>Linjen \\(m\\) går genom de två olika punkterna \\(Q\\) och \\(R\\) på kurvan. Alltså är <strong>\\(m\\) sekanten</strong>.</p>",
    "familj": "mato1_tangent_sekant_begrepp_graf"
  },
  {
    "id": "1.05",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[|2x-3|=5.\\]</p>",
    "s": "<p><strong>Metod:</strong> Om \\(|A|=5\\) kan uttrycket \\(A\\) vara antingen \\(5\\) eller \\(-5\\).</p><p>Fall 1: \\(2x-3=5\\), vilket ger \\(2x=8\\) och \\(x=4\\).</p><p>Fall 2: \\(2x-3=-5\\), vilket ger \\(2x=-2\\) och \\(x=-1\\).</p><p><strong>Svar:</strong> \\(\\boxed{x=-1\\text{ eller }x=4}\\).</p>",
    "familj": "mato1_absolutbelopp_ekvation_rutin"
  },
  {
    "id": "1.06",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Faktorisera polynomet fullständigt:</p><p>\\[6x^3-24x.\\]</p>",
    "s": "<p><strong>Metod:</strong> Börja med att bryta ut största gemensamma faktor. Undersök sedan om uttrycket i parentesen kan faktoriseras vidare.</p><p>\\[6x^3-24x=6x(x^2-4).\\]</p><p>Uttrycket \\(x^2-4\\) är en differens av två kvadrater:</p><p>\\[x^2-4=(x-2)(x+2).\\]</p><p>Alltså</p><p>\\[6x^3-24x=\\boxed{6x(x-2)(x+2)}.\\]</p><p><strong>Kontroll:</strong> Multiplicerar man ihop faktorerna får man tillbaka \\(6x^3-24x\\).</p>",
    "familj": "mato1_faktorisering_gemensam_konjugat"
  },
  {
    "id": "1.07",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Grafen visar en tredjegradsfunktion \\(f\\). Nollställena och punkten \\((0,3)\\) kan avläsas exakt i figuren.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"480\" height=\"330\" viewBox=\"0 0 480 330\" role=\"img\" aria-label=\"Graf till en tredjegradsfunktion med nollställena minus två, ett och tre\"><defs><marker id=\"g108arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"g108clip\"><rect x=\"48\" y=\"20\" width=\"412\" height=\"268\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"412\" height=\"268\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"81.23\" y1=\"20\" x2=\"81.23\" y2=\"288\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"147.68\" y1=\"20\" x2=\"147.68\" y2=\"288\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"214.13\" y1=\"20\" x2=\"214.13\" y2=\"288\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"280.58\" y1=\"20\" x2=\"280.58\" y2=\"288\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"347.03\" y1=\"20\" x2=\"347.03\" y2=\"288\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"413.48\" y1=\"20\" x2=\"413.48\" y2=\"288\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"288.00\" x2=\"460\" y2=\"288.00\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"258.22\" x2=\"460\" y2=\"258.22\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"228.44\" x2=\"460\" y2=\"228.44\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"198.67\" x2=\"460\" y2=\"198.67\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"168.89\" x2=\"460\" y2=\"168.89\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"139.11\" x2=\"460\" y2=\"139.11\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"109.33\" x2=\"460\" y2=\"109.33\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"79.56\" x2=\"460\" y2=\"79.56\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"49.78\" x2=\"460\" y2=\"49.78\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"20.00\" x2=\"460\" y2=\"20.00\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"168.89\" x2=\"469\" y2=\"168.89\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g108arr)\"/><line x1=\"214.13\" y1=\"288\" x2=\"214.13\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g108arr)\"/><line x1=\"81.23\" y1=\"164.89\" x2=\"81.23\" y2=\"172.89\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"81.23\" y=\"185.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"147.68\" y1=\"164.89\" x2=\"147.68\" y2=\"172.89\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"147.68\" y=\"185.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"280.58\" y1=\"164.89\" x2=\"280.58\" y2=\"172.89\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"280.58\" y=\"185.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"347.03\" y1=\"164.89\" x2=\"347.03\" y2=\"172.89\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"347.03\" y=\"185.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"413.48\" y1=\"164.89\" x2=\"413.48\" y2=\"172.89\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"413.48\" y=\"185.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"470.00\" y=\"160.89\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"210.13\" y1=\"288.00\" x2=\"218.13\" y2=\"288.00\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"291.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"210.13\" y1=\"258.22\" x2=\"218.13\" y2=\"258.22\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"261.72\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"210.13\" y1=\"228.44\" x2=\"218.13\" y2=\"228.44\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"231.94\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"210.13\" y1=\"198.67\" x2=\"218.13\" y2=\"198.67\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"202.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"210.13\" y1=\"139.11\" x2=\"218.13\" y2=\"139.11\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"142.61\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"210.13\" y1=\"109.33\" x2=\"218.13\" y2=\"109.33\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"112.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"210.13\" y1=\"79.56\" x2=\"218.13\" y2=\"79.56\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"83.06\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"210.13\" y1=\"49.78\" x2=\"218.13\" y2=\"49.78\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"53.28\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"210.13\" y1=\"20.00\" x2=\"218.13\" y2=\"20.00\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"205.13\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"222.13\" y=\"13.00\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><text x=\"206.13\" y=\"184.89\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">0</text><path d=\"M48.00,312.19 L49.37,304.95 L50.75,297.82 L52.12,290.81 L53.49,283.92 L54.87,277.15 L56.24,270.49 L57.61,263.95 L58.99,257.53 L60.36,251.22 L61.73,245.02 L63.11,238.94 L64.48,232.97 L65.85,227.11 L67.23,221.36 L68.60,215.72 L69.97,210.19 L71.35,204.77 L72.72,199.46 L74.09,194.25 L75.47,189.15 L76.84,184.15 L78.21,179.26 L79.59,174.47 L80.96,169.78 L82.33,165.20 L83.71,160.72 L85.08,156.33 L86.45,152.05 L87.83,147.87 L89.20,143.78 L90.57,139.79 L91.95,135.90 L93.32,132.10 L94.69,128.40 L96.07,124.79 L97.44,121.27 L98.81,117.85 L100.19,114.52 L101.56,111.28 L102.93,108.12 L104.31,105.06 L105.68,102.09 L107.05,99.21 L108.43,96.41 L109.80,93.70 L111.17,91.07 L112.55,88.53 L113.92,86.07 L115.29,83.69 L116.67,81.40 L118.04,79.19 L119.41,77.06 L120.79,75.01 L122.16,73.03 L123.53,71.14 L124.91,69.32 L126.28,67.58 L127.65,65.92 L129.03,64.33 L130.40,62.81 L131.77,61.37 L133.15,60.00 L134.52,58.71 L135.89,57.48 L137.27,56.33 L138.64,55.24 L140.01,54.23 L141.39,53.28 L142.76,52.40 L144.13,51.58 L145.51,50.83 L146.88,50.15 L148.25,49.53 L149.63,48.97 L151.00,48.47 L152.37,48.04 L153.75,47.67 L155.12,47.36 L156.49,47.10 L157.87,46.91 L159.24,46.77 L160.61,46.69 L161.99,46.67 L163.36,46.70 L164.73,46.79 L166.11,46.93 L167.48,47.12 L168.85,47.37 L170.23,47.66 L171.60,48.01 L172.97,48.41 L174.35,48.86 L175.72,49.35 L177.09,49.89 L178.47,50.48 L179.84,51.12 L181.21,51.80 L182.59,52.52 L183.96,53.29 L185.33,54.10 L186.71,54.95 L188.08,55.85 L189.45,56.78 L190.83,57.75 L192.20,58.77 L193.57,59.82 L194.95,60.91 L196.32,62.03 L197.69,63.19 L199.07,64.38 L200.44,65.61 L201.81,66.88 L203.19,68.17 L204.56,69.50 L205.93,70.85 L207.31,72.24 L208.68,73.66 L210.05,75.11 L211.43,76.58 L212.80,78.08 L214.17,79.61 L215.55,81.16 L216.92,82.73 L218.29,84.33 L219.67,85.96 L221.04,87.60 L222.41,89.27 L223.79,90.96 L225.16,92.67 L226.53,94.39 L227.91,96.14 L229.28,97.90 L230.65,99.68 L232.03,101.48 L233.40,103.29 L234.77,105.11 L236.15,106.95 L237.52,108.80 L238.89,110.66 L240.27,112.54 L241.64,114.42 L243.01,116.32 L244.39,118.22 L245.76,120.13 L247.13,122.05 L248.51,123.98 L249.88,125.91 L251.25,127.84 L252.63,129.78 L254.00,131.73 L255.37,133.67 L256.75,135.62 L258.12,137.57 L259.49,139.52 L260.87,141.47 L262.24,143.41 L263.61,145.36 L264.99,147.30 L266.36,149.24 L267.73,151.17 L269.11,153.10 L270.48,155.02 L271.85,156.93 L273.23,158.84 L274.60,160.74 L275.97,162.63 L277.35,164.51 L278.72,166.38 L280.09,168.23 L281.47,170.08 L282.84,171.91 L284.21,173.73 L285.59,175.53 L286.96,177.31 L288.33,179.08 L289.71,180.84 L291.08,182.57 L292.45,184.29 L293.83,185.99 L295.20,187.66 L296.57,189.32 L297.95,190.95 L299.32,192.56 L300.69,194.15 L302.07,195.71 L303.44,197.25 L304.81,198.76 L306.19,200.25 L307.56,201.71 L308.93,203.14 L310.31,204.54 L311.68,205.91 L313.05,207.25 L314.43,208.56 L315.80,209.84 L317.17,211.08 L318.55,212.29 L319.92,213.47 L321.29,214.61 L322.67,215.71 L324.04,216.78 L325.41,217.81 L326.79,218.80 L328.16,219.75 L329.53,220.67 L330.91,221.54 L332.28,222.37 L333.65,223.15 L335.03,223.90 L336.40,224.60 L337.77,225.25 L339.15,225.86 L340.52,226.43 L341.89,226.94 L343.27,227.41 L344.64,227.83 L346.01,228.20 L347.39,228.52 L348.76,228.79 L350.13,229.01 L351.51,229.17 L352.88,229.28 L354.25,229.34 L355.63,229.34 L357.00,229.29 L358.37,229.18 L359.75,229.01 L361.12,228.78 L362.49,228.50 L363.87,228.15 L365.24,227.75 L366.61,227.28 L367.99,226.75 L369.36,226.16 L370.73,225.50 L372.11,224.78 L373.48,224.00 L374.85,223.15 L376.23,222.23 L377.60,221.24 L378.97,220.19 L380.35,219.06 L381.72,217.87 L383.09,216.61 L384.47,215.27 L385.84,213.86 L387.21,212.38 L388.59,210.83 L389.96,209.20 L391.33,207.49 L392.71,205.71 L394.08,203.85 L395.45,201.91 L396.83,199.90 L398.20,197.80 L399.57,195.63 L400.95,193.37 L402.32,191.03 L403.69,188.61 L405.07,186.11 L406.44,183.52 L407.81,180.84 L409.19,178.09 L410.56,175.24 L411.93,172.31 L413.31,169.29 L414.68,166.18 L416.05,162.98 L417.43,159.68 L418.80,156.30 L420.17,152.83 L421.55,149.26 L422.92,145.60 L424.29,141.85 L425.67,138.00 L427.04,134.05 L428.41,130.01 L429.79,125.87 L431.16,121.63 L432.53,117.29 L433.91,112.85 L435.28,108.32 L436.65,103.68 L438.03,98.93 L439.40,94.09 L440.77,89.14 L442.15,84.08 L443.52,78.92 L444.89,73.66 L446.27,68.28 L447.64,62.80 L449.01,57.21 L450.39,51.51 L451.76,45.71 L453.13,39.78 L454.51,33.75 L455.88,27.61 L457.25,21.35 L458.63,14.98 L460.00,8.49\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g108clip)\"/><circle cx=\"81.23\" cy=\"168.89\" r=\"4.4\" fill=\"#B43123\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><circle cx=\"280.58\" cy=\"168.89\" r=\"4.4\" fill=\"#B43123\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><circle cx=\"413.48\" cy=\"168.89\" r=\"4.4\" fill=\"#B43123\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><circle cx=\"214.13\" cy=\"79.56\" r=\"4.4\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"221.13\" y=\"72.56\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">(0, 3)</text><text x=\"390.23\" y=\"55.73\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y = f(x)</text></svg></span><p>Bestäm ett funktionsuttryck för \\(f(x)\\).</p>",
    "s": "<p><strong>Metod:</strong> Om nollställena är \\(r_1,r_2,r_3\\) kan en tredjegradsfunktion skrivas \\(f(x)=k(x-r_1)(x-r_2)(x-r_3)\\).</p><p>Av grafen avläses nollställena \\(-2\\), \\(1\\) och \\(3\\). Alltså</p><p>\\[f(x)=k(x+2)(x-1)(x-3).\\]</p><p>Använd punkten \\((0,3)\\):</p><p>\\[3=k(0+2)(0-1)(0-3)=6k.\\]</p><p>Därför är \\(k=\\frac12\\).</p><p><strong>Svar:</strong> \\[\\boxed{f(x)=\\frac12(x+2)(x-1)(x-3)}.\\]</p><p>Utvecklad form är \\(f(x)=\\frac12x^3-x^2-\\frac52x+3\\).</p>",
    "familj": "mato1_polynomfunktion_fran_graf"
  },
  {
    "id": "1.08",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förkorta så långt som möjligt och ange samtidigt vilka värden på \\(x\\) som inte är tillåtna i det ursprungliga uttrycket:</p><p>\\[\\frac{x^2-9}{x^2+5x+6}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera både täljare och nämnare innan du förkortar.</p><p>\\[x^2-9=(x-3)(x+3)\\]</p><p>och</p><p>\\[x^2+5x+6=(x+2)(x+3).\\]</p><p>Därför</p><p>\\[\\frac{(x-3)(x+3)}{(x+2)(x+3)}=\\frac{x-3}{x+2}.\\]</p><p>I originalet blir nämnaren noll för \\(x=-3\\) och \\(x=-2\\), så båda värdena måste uteslutas.</p><p><strong>Svar:</strong> \\(\\frac{x-3}{x+2}\\), där \\(x\\neq-3,-2\\).</p>",
    "familj": "mato1_rationellt_forkorta_faktorisering"
  },
  {
    "id": "1.09",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet algebraiskt:</p><p>\\[\\lim_{x\\to3}\\frac{x^2-9}{x-3}.\\]</p><p>Förklara också varför direkt insättning av \\(x=3\\) inte fungerar i det ursprungliga uttrycket.</p>",
    "s": "<p><strong>Insikt:</strong> Direkt insättning ger \\(0/0\\). Det betyder inte att gränsvärdet är noll eller saknas; uttrycket måste först förenklas.</p><p>Faktorisera täljaren:</p><p>\\[x^2-9=(x-3)(x+3).\\]</p><p>För \\(x\\neq3\\) gäller därför</p><p>\\[\\frac{x^2-9}{x-3}=x+3.\\]</p><p>När \\(x\\) närmar sig 3 närmar sig \\(x+3\\) värdet 6:</p><p>\\[\\lim_{x\\to3}\\frac{x^2-9}{x-3}=\\boxed{6}.\\]</p>",
    "familj": "mato1_gransvarde_faktorisering"
  },
  {
    "id": "1.10",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Undersök hur antalet <em>olika reella lösningar</em> till ekvationen</p><p>\\[|x^2-4|=a\\]</p><p>beror på det reella talet \\(a\\).</p>",
    "s": "<p><strong>Första observationen:</strong> Ett absolutbelopp kan aldrig vara negativt. Om \\(a&lt;0\\) finns därför inga lösningar.</p><p>För \\(a\\ge0\\) gäller</p><p>\\[x^2-4=a\\quad\\text{eller}\\quad x^2-4=-a,\\]</p><p>alltså</p><p>\\[x^2=4+a\\quad\\text{eller}\\quad x^2=4-a.\\]</p><p>För \\(a\\ge0\\) är \\(4+a&gt;0\\), så ekvationen \\(x^2=4+a\\) ger alltid två reella lösningar. Ekvationen \\(x^2=4-a\\) ger reella lösningar endast när \\(a\\le4\\).</p><p>Fall för fall:</p><p>• \\(a&lt;0\\): <strong>0 lösningar</strong>.<br>• \\(a=0\\): båda fallen ger samma \\(x=\\pm2\\): <strong>2 lösningar</strong>.<br>• \\(0&lt;a&lt;4\\): båda högerleden är positiva och olika: <strong>4 lösningar</strong>.<br>• \\(a=4\\): \\(x^2=8\\) ger två lösningar och \\(x^2=0\\) ger en: <strong>3 lösningar</strong>.<br>• \\(a&gt;4\\): endast \\(x^2=4+a\\) ger reella lösningar: <strong>2 lösningar</strong>.</p><p><strong>Svar:</strong> \\(0\\) lösningar om \\(a&lt;0\\); \\(2\\) om \\(a=0\\) eller \\(a&gt;4\\); \\(4\\) om \\(0&lt;a&lt;4\\); och \\(3\\) om \\(a=4\\).</p>",
    "familj": "mato1_absolutbelopp_parameter_antal_losningar"
  },
  {
    "id": "1.11",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen algebraiskt:</p><p>\\[x^3-4x^2-x+4=0.\\]</p>",
    "s": "<p><strong>Metod:</strong> Här finns ingen gemensam faktor i alla fyra termer, men termerna kan grupperas så att samma faktor uppstår.</p><p>Gruppera två och två:</p><p>\\[x^3-4x^2-x+4=x^2(x-4)-1(x-4).\\]</p><p>Bryt ut \\(x-4\\):</p><p>\\[(x-4)(x^2-1)=0.\\]</p><p>Faktorisera differensen av två kvadrater:</p><p>\\[(x-4)(x-1)(x+1)=0.\\]</p><p>Med nollproduktmetoden fås</p><p><strong>\\(x=-1,\\;x=1\\) eller \\(x=4\\).</strong></p>",
    "familj": "mato1_polynomekvation_gruppering"
  },
  {
    "id": "1.12",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Låt \\(f(x)=2 x^{2} - 3 x + 1\\).</p><p>a) Bestäm \\(f(0)\\).<br>b) Bestäm \\(f(1)\\).<br>c) Bestäm \\(f(2)\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in det angivna x-värdet i funktionsuttrycket och räkna i rätt ordning.</p><p>a) \\(f(0)=1\\).</p><p>b) \\(f(1)=0\\).</p><p>c) \\(f(2)=3\\).</p>",
    "familj": "funktioner_funvarden_0"
  },
  {
    "id": "1.13",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[\\frac{1}{x-1}+\\frac{2}{x+1}=1.\\]</p>",
    "s": "<p><strong>Metod:</strong> Börja med att ange förbjudna värden och multiplicera sedan hela ekvationen med minsta gemensamma nämnare.</p><p>Förbjudna värden är \\(x=1\\) och \\(x=-1\\).</p><p>Multiplicera med \\((x-1)(x+1)\\):</p><p>\\[(x+1)+2(x-1)=(x-1)(x+1).\\]</p><p>Förenkla:</p><p>\\[x+1+2x-2=x^2-1\\]</p><p>\\[3x-1=x^2-1\\]</p><p>\\[x^2-3x=0\\]</p><p>\\[x(x-3)=0.\\]</p><p>Alltså \\(x=0\\) eller \\(x=3\\). Båda är tillåtna.</p><p><strong>Svar:</strong> \\(\\boxed{x=0\\text{ eller }x=3}\\).</p>",
    "familj": "mato1_rationell_ekvation_mgn"
  },
  {
    "id": "1.14",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För funktionen \\(f(x)=x^2\\) bildas en sekant genom punkterna på grafen med x-koordinaterna \\(2\\) och \\(2+h\\), där \\(h\\neq0\\).</p><p>a) Visa att sekantens lutning kan skrivas \\(4+h\\).<br>b) Bestäm gränsvärdet för sekantens lutning när \\(h\\to0\\).<br>c) Använd resultatet för att bestämma ekvationen för tangenten till grafen i punkten där \\(x=2\\).</p>",
    "s": "<p><strong>Metod:</strong> Sekantens lutning är ändringen i y dividerad med ändringen i x.</p><p>a) \\[k_h=\\frac{f(2+h)-f(2)}{(2+h)-2}=\\frac{(2+h)^2-4}{h}.\\]</p><p>Utveckla täljaren:</p><p>\\[k_h=\\frac{4+4h+h^2-4}{h}=\\frac{h(4+h)}{h}=4+h.\\]</p><p>b) När \\(h\\to0\\) får vi</p><p>\\[\\lim_{h\\to0}(4+h)=4.\\]</p><p>Tangentens lutning är alltså <strong>4</strong>.</p><p>c) Punkten är \\((2,f(2))=(2,4)\\). Med punkt-lutningsformen:</p><p>\\[y-4=4(x-2)\\]</p><p>så</p><p><strong>\\(y=4x-4\\).</strong></p>",
    "familj": "mato1_sekant_till_tangent_gransvarde"
  },
  {
    "id": "1.15",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Beräkna.</p><p>a) \\(|-7|\\)<br>b) \\(|5-9|\\)<br>c) \\(|-3|+|4|\\)<br>d) \\(|0|\\).</p>",
    "s": "<p>Absolutbeloppet är avståndet till 0 på tallinjen och är därför aldrig negativt.</p><p>a) <strong>7</strong><br>b) \\(|-4|=\\)<strong>4</strong><br>c) \\(3+4=\\)<strong>7</strong><br>d) <strong>0</strong></p>",
    "familj": "abs_berakna"
  },
  {
    "id": "1.16",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla polynomuttrycket:</p><p>\\[(2x^2-3x+4)+(x^2+5x-7)-(x^2-2x+1).\\]</p>",
    "s": "<p><strong>Metod:</strong> Ta först bort parenteserna. Minustecknet framför den sista parentesen byter tecken på alla termer i den parentesen.</p><p>\\[2x^2-3x+4+x^2+5x-7-x^2+2x-1.\\]</p><p>Samla termer av samma grad:</p><p>\\[(2+1-1)x^2+(-3+5+2)x+(4-7-1).\\]</p><p>Det ger</p><p><strong>\\(\\boxed{2x^2+4x-4}\\).</strong></p>",
    "familj": "mato1_polynom_addition_subtraktion"
  },
  {
    "id": "1.17",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Låt \\(f(x)=- x^{3} + 4 x\\).</p><p>a) Bestäm \\(f(-1)\\).<br>b) Bestäm \\(f(1)\\).<br>c) Bestäm \\(f(2)\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in det angivna x-värdet i funktionsuttrycket och räkna i rätt ordning.</p><p>a) \\(f(-1)=-3\\).</p><p>b) \\(f(1)=3\\).</p><p>c) \\(f(2)=0\\).</p>",
    "familj": "funktioner_funvarden_1"
  },
  {
    "id": "1.18",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Förenkla uttrycket så långt som möjligt och ange alla värden på \\(x\\) som måste uteslutas:</p><p>\\[\\frac{x^2-4}{x^2-x-2}\\div\\frac{x+2}{x-1}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera först. Vid division med ett rationellt uttryck måste man dessutom komma ihåg att det uttryck man dividerar med inte får vara noll.</p><p>\\[x^2-4=(x-2)(x+2),\\qquad x^2-x-2=(x-2)(x+1).\\]</p><p>Då blir</p><p>\\[\\frac{(x-2)(x+2)}{(x-2)(x+1)}\\cdot\\frac{x-1}{x+2}=\\frac{x-1}{x+1}.\\]</p><p><strong>Uteslutna värden:</strong></p><p>Från första nämnaren: \\(x\\neq2,-1\\).<br>Från nämnaren \\(x-1\\) i den andra kvoten: \\(x\\neq1\\).<br>Den andra kvoten får inte heller vara noll, så \\(x+2\\neq0\\Rightarrow x\\neq-2\\).</p><p><strong>Svar:</strong> \\(\\boxed{\\frac{x-1}{x+1}}\\), där \\(\\boxed{x\\neq-2,-1,1,2}\\).</p>",
    "familj": "mato1_rationella_operationer_division_definitionsmangd"
  },
  {
    "id": "1.19",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Grafen visar funktionen \\(f\\) i närheten av \\(x=2\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"460\" height=\"315\" viewBox=\"0 0 460 315\" role=\"img\" aria-label=\"Graf till en funktion med ett hål vid x lika med två och ett separat funktionsvärde\"><defs><marker id=\"g114arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"g114clip\"><rect x=\"48\" y=\"20\" width=\"392\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"392\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"113.33\" y1=\"20\" x2=\"113.33\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"178.67\" y1=\"20\" x2=\"178.67\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"244.00\" y1=\"20\" x2=\"244.00\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"309.33\" y1=\"20\" x2=\"309.33\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"374.67\" y1=\"20\" x2=\"374.67\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"440.00\" y1=\"20\" x2=\"440.00\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"273.00\" x2=\"440\" y2=\"273.00\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"230.83\" x2=\"440\" y2=\"230.83\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"188.67\" x2=\"440\" y2=\"188.67\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"146.50\" x2=\"440\" y2=\"146.50\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"104.33\" x2=\"440\" y2=\"104.33\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"62.17\" x2=\"440\" y2=\"62.17\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"20.00\" x2=\"440\" y2=\"20.00\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"230.83\" x2=\"449\" y2=\"230.83\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g114arr)\"/><line x1=\"113.33\" y1=\"273\" x2=\"113.33\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g114arr)\"/><line x1=\"48.00\" y1=\"226.83\" x2=\"48.00\" y2=\"234.83\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"48.00\" y=\"247.83\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"178.67\" y1=\"226.83\" x2=\"178.67\" y2=\"234.83\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"178.67\" y=\"247.83\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"244.00\" y1=\"226.83\" x2=\"244.00\" y2=\"234.83\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"244.00\" y=\"247.83\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"309.33\" y1=\"226.83\" x2=\"309.33\" y2=\"234.83\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"309.33\" y=\"247.83\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"374.67\" y1=\"226.83\" x2=\"374.67\" y2=\"234.83\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"374.67\" y=\"247.83\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"440.00\" y1=\"226.83\" x2=\"440.00\" y2=\"234.83\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"440.00\" y=\"247.83\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"450.00\" y=\"222.83\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"109.33\" y1=\"273.00\" x2=\"117.33\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"104.33\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"109.33\" y1=\"188.67\" x2=\"117.33\" y2=\"188.67\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"104.33\" y=\"192.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"109.33\" y1=\"146.50\" x2=\"117.33\" y2=\"146.50\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"104.33\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"109.33\" y1=\"104.33\" x2=\"117.33\" y2=\"104.33\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"104.33\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"109.33\" y1=\"62.17\" x2=\"117.33\" y2=\"62.17\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"104.33\" y=\"65.67\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"109.33\" y1=\"20.00\" x2=\"117.33\" y2=\"20.00\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"104.33\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"121.33\" y=\"13.00\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><text x=\"105.33\" y=\"246.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">0</text><path d=\"M48.00,230.83 L244.00,104.33\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g114clip)\"/><path d=\"M244.00,104.33 L440.00,230.83\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g114clip)\"/><circle cx=\"244.00\" cy=\"188.67\" r=\"4.4\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"251.00\" y=\"181.67\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">f(2)</text><circle cx=\"244.00\" cy=\"104.33\" r=\"5\" fill=\"#FFFFFF\" stroke=\"#B43123\" stroke-width=\"2.2\"/><text x=\"358.33\" y=\"165.48\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y = f(x)</text></svg></span><p>a) Bestäm \\(\\lim_{x\\to2}f(x)\\).<br>b) Bestäm \\(f(2)\\).<br>c) Är \\(f\\) kontinuerlig för \\(x=2\\)? Motivera.</p>",
    "s": "<p><strong>Begrepp:</strong> För kontinuitet i \\(x=a\\) krävs att gränsvärdet finns och att \\(\\lim_{x\\to a}f(x)=f(a)\\).</p><p>a) Från både vänster och höger närmar sig grafen den öppna punkten \\((2,3)\\). Därför är <strong>\\(\\lim_{x\\to2}f(x)=3\\)</strong>.</p><p>b) Den fyllda punkten vid \\(x=2\\) ligger på \\(y=1\\), alltså är <strong>\\(f(2)=1\\)</strong>.</p><p>c) Eftersom \\(3\\neq1\\) gäller inte \\(\\lim_{x\\to2}f(x)=f(2)\\). Funktionen är därför <strong>inte kontinuerlig</strong> i \\(x=2\\).</p>",
    "familj": "mato1_kontinuitet_hal_graf"
  },
  {
    "id": "1.20",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[|x-3|=5.\\]</p>",
    "s": "<p>Uttrycket betyder att avståndet mellan \\(x\\) och \\(3\\) är \\(5\\). Därför finns två möjligheter:</p><p>\\[x-3=5\\quad\\text{eller}\\quad x-3=-5.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x=-2\\ \\text{eller}\\ x=8}\\).</p>",
    "familj": "abs_ekvation_0"
  },
  {
    "id": "1.21",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Faktorisera polynomet fullständigt:</p><p>\\[x^4-5x^2+4.\\]</p>",
    "s": "<p><strong>Insikt:</strong> Uttrycket är ett andragradsuttryck i \\(x^2\\). Sätt tillfälligt \\(u=x^2\\).</p><p>Då blir</p><p>\\[u^2-5u+4=(u-1)(u-4).\\]</p><p>Sätt tillbaka \\(u=x^2\\):</p><p>\\[(x^2-1)(x^2-4).\\]</p><p>Båda faktorerna är differenser av två kvadrater:</p><p>\\[(x-1)(x+1)(x-2)(x+2).\\]</p><p><strong>Svar:</strong> \\(\\boxed{(x-2)(x-1)(x+1)(x+2)}\\).</p>",
    "familj": "mato1_faktorisering_bikvadratisk"
  },
  {
    "id": "1.22",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Låt \\(f(x)=x^{2} - 4\\).</p><p>a) Bestäm \\(f(0)\\).<br>b) Bestäm \\(f(2)\\).<br>c) Bestäm \\(f(3)\\).</p>",
    "s": "<p><strong>Metod:</strong> Sätt in det angivna x-värdet i funktionsuttrycket och räkna i rätt ordning.</p><p>a) \\(f(0)=-4\\).</p><p>b) \\(f(2)=0\\).</p><p>c) \\(f(3)=5\\).</p>",
    "familj": "funktioner_funvarden_2"
  },
  {
    "id": "1.23",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla uttrycket så långt som möjligt och ange vilka x-värden som måste uteslutas:</p><p>\\[\\frac{x^{2} - 9}{x - 3}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera täljare och nämnare innan du förkortar.</p><p>\\[\\frac{x^{2} - 9}{x - 3}=x + 3=x + 3.\\]</p><p>Det ursprungliga uttrycket är inte definierat när nämnaren är noll.</p><p><strong>Svar:</strong> \\(\\boxed{x + 3}\\), med \\(x\\neq 3\\).</p>",
    "familj": "rationella_forkorta_0"
  },
  {
    "id": "1.24",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Funktionen</p><p>\\[f(x)=\\frac{ax^2+bx+1}{x^2-1}\\]</p><p>är definierad för \\(x\\neq\\pm1\\).</p><p>Bestäm konstanterna \\(a\\) och \\(b\\) så att</p><p>1. \\(\\displaystyle \\lim_{x\\to\\infty}f(x)=2\\), och<br>2. diskontinuiteten vid \\(x=1\\) kan tas bort genom att definiera ett lämpligt värde på \\(f(1)\\).</p><p>Bestäm även vilket värde \\(f(1)\\) då ska ges.</p>",
    "s": "<p><strong>Steg 1 – gränsvärdet vid oändligheten:</strong> Täljare och nämnare har samma grad. Gränsvärdet är därför kvoten mellan koefficienterna framför \\(x^2\\):</p><p>\\[\\lim_{x\\to\\infty}f(x)=a.\\]</p><p>Villkoret ger \\(a=2\\).</p><p><strong>Steg 2 – borttagbar diskontinuitet vid x=1:</strong> Nämnaren innehåller faktorn \\(x-1\\). För att hålet ska kunna tas bort måste även täljaren vara noll för \\(x=1\\):</p><p>\\[2+b+1=0\\Rightarrow b=-3.\\]</p><p>Täljaren blir</p><p>\\[2x^2-3x+1=(x-1)(2x-1),\\]</p><p>medan \\(x^2-1=(x-1)(x+1)\\). För \\(x\\neq1\\):</p><p>\\[f(x)=\\frac{2x-1}{x+1}.\\]</p><p>Därför</p><p>\\[\\lim_{x\\to1}f(x)=\\frac{2\\cdot1-1}{1+1}=\\frac12.\\]</p><p><strong>Svar:</strong> \\(\\boxed{a=2,\\;b=-3}\\) och funktionen blir kontinuerlig vid \\(x=1\\) om man definierar \\(\\boxed{f(1)=\\frac12}\\).</p>",
    "familj": "mato1_kontinuitet_parametrar_rationell"
  },
  {
    "id": "1.25",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[|x-2|=7.\\]</p>",
    "s": "<p>Uttrycket betyder att avståndet mellan \\(x\\) och \\(2\\) är \\(7\\). Därför finns två möjligheter:</p><p>\\[x-2=7\\quad\\text{eller}\\quad x-2=-7.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x=-5\\ \\text{eller}\\ x=9}\\).</p>",
    "familj": "abs_ekvation_1"
  },
  {
    "id": "1.26",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Undersök hur antalet <em>olika reella lösningar</em> till ekvationen</p><p>\\[x^4-(a+1)x^2+a=0\\]</p><p>beror på det reella talet \\(a\\).</p>",
    "s": "<p><strong>Insikt:</strong> Uttrycket kan faktoriseras utan att lösa en allmän fjärdegradsekvation:</p><p>\\[x^4-(a+1)x^2+a=(x^2-1)(x^2-a).\\]</p><p>Alltså måste antingen \\(x^2=1\\) eller \\(x^2=a\\).</p><p>Ekvationen \\(x^2=1\\) ger alltid \\(x=\\pm1\\).</p><p>Studera sedan \\(x^2=a\\):</p><p>• Om \\(a&lt;0\\) finns inga nya reella lösningar: <strong>2 lösningar</strong>.<br>• Om \\(a=0\\) tillkommer \\(x=0\\): <strong>3 lösningar</strong>.<br>• Om \\(a&gt;0\\) fås \\(x=\\pm\\sqrt a\\). Om \\(a\\neq1\\) är dessa två nya lösningar: <strong>4 lösningar</strong>.<br>• Om \\(a=1\\) sammanfaller \\(\\pm\\sqrt a\\) med \\(\\pm1\\): <strong>2 lösningar</strong>.</p><p><strong>Svar:</strong> 2 lösningar för \\(a&lt;0\\) eller \\(a=1\\); 3 lösningar för \\(a=0\\); 4 lösningar för \\(a&gt;0\\) och \\(a\\neq1\\).</p>",
    "familj": "mato1_polynomekvation_parameter_antal_roter"
  },
  {
    "id": "1.27",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Figuren visar grafen till \\(f\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"f0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"f0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"247.70\" x2=\"450\" y2=\"247.70\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"222.40\" x2=\"450\" y2=\"222.40\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"197.10\" x2=\"450\" y2=\"197.10\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"171.80\" x2=\"450\" y2=\"171.80\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"121.20\" x2=\"450\" y2=\"121.20\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"95.90\" x2=\"450\" y2=\"95.90\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"70.60\" x2=\"450\" y2=\"70.60\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"45.30\" x2=\"450\" y2=\"45.30\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"459\" y2=\"146.50\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#f0arr)\"/><line x1=\"48.00\" y1=\"142.50\" x2=\"48.00\" y2=\"150.50\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"163.50\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"142.50\" x2=\"115.00\" y2=\"150.50\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"163.50\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"142.50\" x2=\"182.00\" y2=\"150.50\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"163.50\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"142.50\" x2=\"316.00\" y2=\"150.50\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"163.50\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"142.50\" x2=\"383.00\" y2=\"150.50\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"163.50\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"142.50\" x2=\"450.00\" y2=\"150.50\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"163.50\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"138.50\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#f0arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-5</text><line x1=\"245.00\" y1=\"247.70\" x2=\"253.00\" y2=\"247.70\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"251.20\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"245.00\" y1=\"222.40\" x2=\"253.00\" y2=\"222.40\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"225.90\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"197.10\" x2=\"253.00\" y2=\"197.10\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"200.60\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"171.80\" x2=\"253.00\" y2=\"171.80\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"175.30\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"121.20\" x2=\"253.00\" y2=\"121.20\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"124.70\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"95.90\" x2=\"253.00\" y2=\"95.90\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"99.40\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"70.60\" x2=\"253.00\" y2=\"70.60\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"74.10\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"45.30\" x2=\"253.00\" y2=\"45.30\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"48.80\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,20.00 L48.80,21.82 L49.61,23.63 L50.41,25.43 L51.22,27.23 L52.02,29.02 L52.82,30.80 L53.63,32.57 L54.43,34.34 L55.24,36.10 L56.04,37.85 L56.84,39.60 L57.65,41.33 L58.45,43.07 L59.26,44.79 L60.06,46.50 L60.86,48.21 L61.67,49.91 L62.47,51.61 L63.28,53.30 L64.08,54.97 L64.88,56.65 L65.69,58.31 L66.49,59.97 L67.30,61.62 L68.10,63.26 L68.90,64.90 L69.71,66.53 L70.51,68.15 L71.32,69.76 L72.12,71.37 L72.92,72.97 L73.73,74.56 L74.53,76.15 L75.34,77.72 L76.14,79.29 L76.94,80.86 L77.75,82.41 L78.55,83.96 L79.36,85.50 L80.16,87.03 L80.96,88.56 L81.77,90.08 L82.57,91.59 L83.38,93.10 L84.18,94.59 L84.98,96.08 L85.79,97.57 L86.59,99.04 L87.40,100.51 L88.20,101.97 L89.00,103.43 L89.81,104.87 L90.61,106.31 L91.42,107.74 L92.22,109.17 L93.02,110.58 L93.83,111.99 L94.63,113.40 L95.44,114.79 L96.24,116.18 L97.04,117.56 L97.85,118.93 L98.65,120.30 L99.46,121.66 L100.26,123.01 L101.06,124.36 L101.87,125.69 L102.67,127.02 L103.48,128.35 L104.28,129.66 L105.08,130.97 L105.89,132.27 L106.69,133.56 L107.50,134.85 L108.30,136.13 L109.10,137.40 L109.91,138.66 L110.71,139.92 L111.52,141.17 L112.32,142.41 L113.12,143.65 L113.93,144.87 L114.73,146.09 L115.54,147.31 L116.34,148.51 L117.14,149.71 L117.95,150.90 L118.75,152.09 L119.56,153.26 L120.36,154.43 L121.16,155.60 L121.97,156.75 L122.77,157.90 L123.58,159.04 L124.38,160.17 L125.18,161.30 L125.99,162.42 L126.79,163.53 L127.60,164.63 L128.40,165.73 L129.20,166.82 L130.01,167.90 L130.81,168.97 L131.62,170.04 L132.42,171.10 L133.22,172.15 L134.03,173.20 L134.83,174.24 L135.64,175.27 L136.44,176.29 L137.24,177.31 L138.05,178.32 L138.85,179.32 L139.66,180.32 L140.46,181.30 L141.26,182.28 L142.07,183.26 L142.87,184.22 L143.68,185.18 L144.48,186.13 L145.28,187.07 L146.09,188.01 L146.89,188.94 L147.70,189.86 L148.50,190.78 L149.30,191.68 L150.11,192.58 L150.91,193.47 L151.72,194.36 L152.52,195.24 L153.32,196.11 L154.13,196.97 L154.93,197.83 L155.74,198.68 L156.54,199.52 L157.34,200.35 L158.15,201.18 L158.95,202.00 L159.76,202.81 L160.56,203.62 L161.36,204.42 L162.17,205.21 L162.97,205.99 L163.78,206.77 L164.58,207.53 L165.38,208.30 L166.19,209.05 L166.99,209.80 L167.80,210.54 L168.60,211.27 L169.40,211.99 L170.21,212.71 L171.01,213.42 L171.82,214.12 L172.62,214.82 L173.42,215.51 L174.23,216.19 L175.03,216.86 L175.84,217.53 L176.64,218.19 L177.44,218.84 L178.25,219.49 L179.05,220.12 L179.86,220.75 L180.66,221.38 L181.46,221.99 L182.27,222.60 L183.07,223.20 L183.88,223.80 L184.68,224.38 L185.48,224.96 L186.29,225.53 L187.09,226.10 L187.90,226.66 L188.70,227.21 L189.50,227.75 L190.31,228.29 L191.11,228.81 L191.92,229.33 L192.72,229.85 L193.52,230.35 L194.33,230.85 L195.13,231.35 L195.94,231.83 L196.74,232.31 L197.54,232.78 L198.35,233.24 L199.15,233.70 L199.96,234.14 L200.76,234.58 L201.56,235.02 L202.37,235.44 L203.17,235.86 L203.98,236.27 L204.78,236.68 L205.58,237.08 L206.39,237.47 L207.19,237.85 L208.00,238.22 L208.80,238.59 L209.60,238.95 L210.41,239.31 L211.21,239.65 L212.02,239.99 L212.82,240.32 L213.62,240.65 L214.43,240.96 L215.23,241.27 L216.04,241.58 L216.84,241.87 L217.64,242.16 L218.45,242.44 L219.25,242.71 L220.06,242.98 L220.86,243.24 L221.66,243.49 L222.47,243.73 L223.27,243.97 L224.08,244.20 L224.88,244.42 L225.68,244.64 L226.49,244.84 L227.29,245.04 L228.10,245.24 L228.90,245.42 L229.70,245.60 L230.51,245.77 L231.31,245.94 L232.12,246.09 L232.92,246.24 L233.72,246.38 L234.53,246.52 L235.33,246.65 L236.14,246.77 L236.94,246.88 L237.74,246.99 L238.55,247.08 L239.35,247.18 L240.16,247.26 L240.96,247.34 L241.76,247.40 L242.57,247.47 L243.37,247.52 L244.18,247.57 L244.98,247.61 L245.78,247.64 L246.59,247.67 L247.39,247.69 L248.20,247.70 L249.00,247.70 L249.80,247.70 L250.61,247.69 L251.41,247.67 L252.22,247.64 L253.02,247.61 L253.82,247.57 L254.63,247.52 L255.43,247.47 L256.24,247.40 L257.04,247.34 L257.84,247.26 L258.65,247.18 L259.45,247.08 L260.26,246.99 L261.06,246.88 L261.86,246.77 L262.67,246.65 L263.47,246.52 L264.28,246.38 L265.08,246.24 L265.88,246.09 L266.69,245.94 L267.49,245.77 L268.30,245.60 L269.10,245.42 L269.90,245.24 L270.71,245.04 L271.51,244.84 L272.32,244.64 L273.12,244.42 L273.92,244.20 L274.73,243.97 L275.53,243.73 L276.34,243.49 L277.14,243.24 L277.94,242.98 L278.75,242.71 L279.55,242.44 L280.36,242.16 L281.16,241.87 L281.96,241.58 L282.77,241.27 L283.57,240.96 L284.38,240.65 L285.18,240.32 L285.98,239.99 L286.79,239.65 L287.59,239.31 L288.40,238.95 L289.20,238.59 L290.00,238.22 L290.81,237.85 L291.61,237.47 L292.42,237.08 L293.22,236.68 L294.02,236.27 L294.83,235.86 L295.63,235.44 L296.44,235.02 L297.24,234.58 L298.04,234.14 L298.85,233.70 L299.65,233.24 L300.46,232.78 L301.26,232.31 L302.06,231.83 L302.87,231.35 L303.67,230.85 L304.48,230.35 L305.28,229.85 L306.08,229.33 L306.89,228.81 L307.69,228.29 L308.50,227.75 L309.30,227.21 L310.10,226.66 L310.91,226.10 L311.71,225.53 L312.52,224.96 L313.32,224.38 L314.12,223.80 L314.93,223.20 L315.73,222.60 L316.54,221.99 L317.34,221.38 L318.14,220.75 L318.95,220.12 L319.75,219.49 L320.56,218.84 L321.36,218.19 L322.16,217.53 L322.97,216.86 L323.77,216.19 L324.58,215.51 L325.38,214.82 L326.18,214.12 L326.99,213.42 L327.79,212.71 L328.60,211.99 L329.40,211.27 L330.20,210.54 L331.01,209.80 L331.81,209.05 L332.62,208.30 L333.42,207.53 L334.22,206.77 L335.03,205.99 L335.83,205.21 L336.64,204.42 L337.44,203.62 L338.24,202.81 L339.05,202.00 L339.85,201.18 L340.66,200.35 L341.46,199.52 L342.26,198.68 L343.07,197.83 L343.87,196.97 L344.68,196.11 L345.48,195.24 L346.28,194.36 L347.09,193.47 L347.89,192.58 L348.70,191.68 L349.50,190.78 L350.30,189.86 L351.11,188.94 L351.91,188.01 L352.72,187.07 L353.52,186.13 L354.32,185.18 L355.13,184.22 L355.93,183.26 L356.74,182.28 L357.54,181.30 L358.34,180.32 L359.15,179.32 L359.95,178.32 L360.76,177.31 L361.56,176.29 L362.36,175.27 L363.17,174.24 L363.97,173.20 L364.78,172.15 L365.58,171.10 L366.38,170.04 L367.19,168.97 L367.99,167.90 L368.80,166.82 L369.60,165.73 L370.40,164.63 L371.21,163.53 L372.01,162.42 L372.82,161.30 L373.62,160.17 L374.42,159.04 L375.23,157.90 L376.03,156.75 L376.84,155.60 L377.64,154.43 L378.44,153.26 L379.25,152.09 L380.05,150.90 L380.86,149.71 L381.66,148.51 L382.46,147.31 L383.27,146.09 L384.07,144.87 L384.88,143.65 L385.68,142.41 L386.48,141.17 L387.29,139.92 L388.09,138.66 L388.90,137.40 L389.70,136.13 L390.50,134.85 L391.31,133.56 L392.11,132.27 L392.92,130.97 L393.72,129.66 L394.52,128.35 L395.33,127.02 L396.13,125.69 L396.94,124.36 L397.74,123.01 L398.54,121.66 L399.35,120.30 L400.15,118.93 L400.96,117.56 L401.76,116.18 L402.56,114.79 L403.37,113.40 L404.17,111.99 L404.98,110.58 L405.78,109.17 L406.58,107.74 L407.39,106.31 L408.19,104.87 L409.00,103.43 L409.80,101.97 L410.60,100.51 L411.41,99.04 L412.21,97.57 L413.02,96.08 L413.82,94.59 L414.62,93.10 L415.43,91.59 L416.23,90.08 L417.04,88.56 L417.84,87.03 L418.64,85.50 L419.45,83.96 L420.25,82.41 L421.06,80.86 L421.86,79.29 L422.66,77.72 L423.47,76.15 L424.27,74.56 L425.08,72.97 L425.88,71.37 L426.68,69.76 L427.49,68.15 L428.29,66.53 L429.10,64.90 L429.90,63.26 L430.70,61.62 L431.51,59.97 L432.31,58.31 L433.12,56.65 L433.92,54.97 L434.72,53.30 L435.53,51.61 L436.33,49.91 L437.14,48.21 L437.94,46.50 L438.74,44.79 L439.55,43.07 L440.35,41.33 L441.16,39.60 L441.96,37.85 L442.76,36.10 L443.57,34.34 L444.37,32.57 L445.18,30.80 L445.98,29.02 L446.78,27.23 L447.59,25.43 L448.39,23.63 L449.20,21.82 L450.00,20.00\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#f0clip)\"/><text x=\"383.00\" y=\"45.30\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"115.00\" cy=\"146.50\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"122.00\" y=\"139.50\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"249.00\" cy=\"247.70\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"256.00\" y=\"240.70\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"383.00\" cy=\"146.50\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"390.00\" y=\"139.50\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">C</text></svg></span><p>a) Bestäm funktionens nollställen.<br>b) Bestäm ett intervall där \\(f(x)&lt;0\\).<br>c) Avläs ett extremvärde.</p>",
    "s": "<p><strong>a)</strong> Nollställena avläses där grafen skär x-axeln: <strong>−2 och 2</strong>.</p><p><strong>b)</strong> Där grafen ligger under x-axeln gäller <strong>−2&lt;x&lt;2</strong>.</p><p><strong>c)</strong> Av grafen avläses <strong>minsta värdet −4</strong>.</p>",
    "familj": "funktioner_graf_0"
  },
  {
    "id": "1.28",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla uttrycket så långt som möjligt och ange vilka x-värden som måste uteslutas:</p><p>\\[\\frac{x^{2} - 4 x}{x}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera täljare och nämnare innan du förkortar.</p><p>\\[\\frac{x^{2} - 4 x}{x}=x - 4=x - 4.\\]</p><p>Det ursprungliga uttrycket är inte definierat när nämnaren är noll.</p><p><strong>Svar:</strong> \\(\\boxed{x - 4}\\), med \\(x\\neq 0\\).</p>",
    "familj": "rationella_forkorta_1"
  },
  {
    "id": "1.29",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet</p><p>\\[\\lim_{x\\to 2}\\frac{x^{2} - 4}{x - 2}.\\]</p>",
    "s": "<p>Direkt insättning ger ett obestämt uttryck, så vi förenklar först:</p><p>\\[\\frac{x^{2} - 4}{x - 2}=x + 2\\quad (x\\neq 2).\\]</p><p>Därför</p><p>\\[\\lim_{x\\to 2}\\frac{x^{2} - 4}{x - 2}=4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{4}\\).</p>",
    "familj": "grans_faktorisera_0"
  },
  {
    "id": "1.30",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[|x-4|=1.\\]</p>",
    "s": "<p>Uttrycket betyder att avståndet mellan \\(x\\) och \\(4\\) är \\(1\\). Därför finns två möjligheter:</p><p>\\[x-4=1\\quad\\text{eller}\\quad x-4=-1.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x=3\\ \\text{eller}\\ x=5}\\).</p>",
    "familj": "abs_ekvation_2"
  },
  {
    "id": "1.31",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Man vill approximera ett nollställe till</p><p>\\[f(x)=x^3-x-1\\]</p><p>med intervallhalveringsmetoden. Startintervallet är \\([1,2]\\), och programidén är:</p><pre style=\"font-family:IBM Plex Mono,monospace;font-size:12px;line-height:1.55;background:#F4F5F7;border:1px solid #E4E3E6;border-radius:8px;padding:10px 12px;overflow:auto\">a = 1\nb = 2\nwhile b-a &gt; 0.01:\n    m = (a+b)/2\n    if f(a)*f(m) &lt;= 0:\n        b = m\n    else:\n        a = m</pre><p>a) Vilken egenskap hos \\(f(a)\\) och \\(f(b)\\) gör att intervallet är lämpligt som startintervall?<br>b) Genomför de två första varven för hand och ange intervallet efter varje varv.</p>",
    "s": "<p><strong>a)</strong> Funktionen är kontinuerlig och</p><p>\\[f(1)=1-1-1=-1,\\qquad f(2)=8-2-1=5.\\]</p><p>Värdena har olika tecken, alltså finns minst ett nollställe mellan 1 och 2.</p><p><strong>b) Varv 1:</strong> Mittpunkten är \\(m=1,5\\).</p><p>\\[f(1,5)=1,5^3-1,5-1=0,875&gt;0.\\]</p><p>Eftersom \\(f(1)&lt;0\\) och \\(f(1,5)&gt;0\\) ligger nollstället i intervallet <strong>\\(1\\le x\\le1,5\\)</strong>.</p><p><strong>Varv 2:</strong> Mittpunkten blir \\(m=1,25\\).</p><p>\\[f(1,25)=1,25^3-1,25-1=-0,296875&lt;0.\\]</p><p>Teckenbytet finns nu mellan 1,25 och 1,5. Intervallet efter två varv är därför <strong>\\(1,25\\le x\\le1,5\\)</strong>.</p><p><strong>Tänk så här:</strong> Varje varv behåller den halva där funktionsvärdena har olika tecken. Intervallängden halveras därför varje gång.</p>",
    "familj": "mato1_programmering_intervallhalvering_tva_varv"
  },
  {
    "id": "1.32",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Figuren visar grafen till \\(f\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"f1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"f1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"98.25\" y1=\"20\" x2=\"98.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"198.75\" y1=\"20\" x2=\"198.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"299.25\" y1=\"20\" x2=\"299.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"399.75\" y1=\"20\" x2=\"399.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"247.70\" x2=\"450\" y2=\"247.70\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"222.40\" x2=\"450\" y2=\"222.40\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"197.10\" x2=\"450\" y2=\"197.10\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"171.80\" x2=\"450\" y2=\"171.80\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"121.20\" x2=\"450\" y2=\"121.20\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"95.90\" x2=\"450\" y2=\"95.90\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"70.60\" x2=\"450\" y2=\"70.60\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"45.30\" x2=\"450\" y2=\"45.30\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"171.80\" x2=\"459\" y2=\"171.80\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#f1arr)\"/><line x1=\"48.00\" y1=\"167.80\" x2=\"48.00\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"98.25\" y1=\"167.80\" x2=\"98.25\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"98.25\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"148.50\" y1=\"167.80\" x2=\"148.50\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"249.00\" y1=\"167.80\" x2=\"249.00\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"249.00\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"299.25\" y1=\"167.80\" x2=\"299.25\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"299.25\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"349.50\" y1=\"167.80\" x2=\"349.50\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"399.75\" y1=\"167.80\" x2=\"399.75\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"399.75\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"450.00\" y1=\"167.80\" x2=\"450.00\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"460\" y=\"163.80\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"198.75\" y1=\"273\" x2=\"198.75\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#f1arr)\"/><line x1=\"194.75\" y1=\"273.00\" x2=\"202.75\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"194.75\" y1=\"247.70\" x2=\"202.75\" y2=\"247.70\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"251.20\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"194.75\" y1=\"222.40\" x2=\"202.75\" y2=\"222.40\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"225.90\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"194.75\" y1=\"197.10\" x2=\"202.75\" y2=\"197.10\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"200.60\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"194.75\" y1=\"146.50\" x2=\"202.75\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"194.75\" y1=\"121.20\" x2=\"202.75\" y2=\"121.20\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"124.70\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"194.75\" y1=\"95.90\" x2=\"202.75\" y2=\"95.90\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"99.40\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"194.75\" y1=\"70.60\" x2=\"202.75\" y2=\"70.60\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"74.10\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"194.75\" y1=\"45.30\" x2=\"202.75\" y2=\"45.30\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"48.80\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"194.75\" y1=\"20.00\" x2=\"202.75\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"189.75\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"210.75\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,323.60 L48.80,321.98 L49.61,320.37 L50.41,318.77 L51.22,317.18 L52.02,315.58 L52.82,314.00 L53.63,312.42 L54.43,310.85 L55.24,309.29 L56.04,307.73 L56.84,306.18 L57.65,304.64 L58.45,303.10 L59.26,301.57 L60.06,300.04 L60.86,298.52 L61.67,297.01 L62.47,295.50 L63.28,294.00 L64.08,292.51 L64.88,291.02 L65.69,289.54 L66.49,288.07 L67.30,286.60 L68.10,285.14 L68.90,283.69 L69.71,282.24 L70.51,280.80 L71.32,279.37 L72.12,277.94 L72.92,276.52 L73.73,275.10 L74.53,273.69 L75.34,272.29 L76.14,270.90 L76.94,269.51 L77.75,268.12 L78.55,266.75 L79.36,265.38 L80.16,264.01 L80.96,262.66 L81.77,261.31 L82.57,259.96 L83.38,258.62 L84.18,257.29 L84.98,255.97 L85.79,254.65 L86.59,253.34 L87.40,252.03 L88.20,250.74 L89.00,249.44 L89.81,248.16 L90.61,246.88 L91.42,245.61 L92.22,244.34 L93.02,243.08 L93.83,241.83 L94.63,240.58 L95.44,239.34 L96.24,238.11 L97.04,236.88 L97.85,235.66 L98.65,234.44 L99.46,233.24 L100.26,232.03 L101.06,230.84 L101.87,229.65 L102.67,228.47 L103.48,227.29 L104.28,226.12 L105.08,224.96 L105.89,223.81 L106.69,222.66 L107.50,221.51 L108.30,220.38 L109.10,219.25 L109.91,218.12 L110.71,217.00 L111.52,215.89 L112.32,214.79 L113.12,213.69 L113.93,212.60 L114.73,211.52 L115.54,210.44 L116.34,209.37 L117.14,208.30 L117.95,207.24 L118.75,206.19 L119.56,205.14 L120.36,204.10 L121.16,203.07 L121.97,202.04 L122.77,201.02 L123.58,200.01 L124.38,199.00 L125.18,198.00 L125.99,197.01 L126.79,196.02 L127.60,195.04 L128.40,194.06 L129.20,193.10 L130.01,192.13 L130.81,191.18 L131.62,190.23 L132.42,189.29 L133.22,188.35 L134.03,187.42 L134.83,186.50 L135.64,185.58 L136.44,184.67 L137.24,183.77 L138.05,182.87 L138.85,181.98 L139.66,181.10 L140.46,180.22 L141.26,179.35 L142.07,178.48 L142.87,177.63 L143.68,176.77 L144.48,175.93 L145.28,175.09 L146.09,174.26 L146.89,173.43 L147.70,172.61 L148.50,171.80 L149.30,170.99 L150.11,170.19 L150.91,169.40 L151.72,168.61 L152.52,167.83 L153.32,167.06 L154.13,166.29 L154.93,165.53 L155.74,164.78 L156.54,164.03 L157.34,163.29 L158.15,162.55 L158.95,161.82 L159.76,161.10 L160.56,160.38 L161.36,159.68 L162.17,158.97 L162.97,158.28 L163.78,157.59 L164.58,156.90 L165.38,156.23 L166.19,155.56 L166.99,154.89 L167.80,154.23 L168.60,153.58 L169.40,152.94 L170.21,152.30 L171.01,151.67 L171.82,151.05 L172.62,150.43 L173.42,149.81 L174.23,149.21 L175.03,148.61 L175.84,148.02 L176.64,147.43 L177.44,146.85 L178.25,146.28 L179.05,145.71 L179.86,145.15 L180.66,144.60 L181.46,144.05 L182.27,143.51 L183.07,142.98 L183.88,142.45 L184.68,141.93 L185.48,141.41 L186.29,140.90 L187.09,140.40 L187.90,139.90 L188.70,139.42 L189.50,138.93 L190.31,138.46 L191.11,137.99 L191.92,137.52 L192.72,137.07 L193.52,136.62 L194.33,136.17 L195.13,135.74 L195.94,135.31 L196.74,134.88 L197.54,134.46 L198.35,134.05 L199.15,133.65 L199.96,133.25 L200.76,132.86 L201.56,132.47 L202.37,132.09 L203.17,131.72 L203.98,131.36 L204.78,131.00 L205.58,130.64 L206.39,130.30 L207.19,129.96 L208.00,129.62 L208.80,129.30 L209.60,128.98 L210.41,128.66 L211.21,128.35 L212.02,128.05 L212.82,127.76 L213.62,127.47 L214.43,127.19 L215.23,126.91 L216.04,126.64 L216.84,126.38 L217.64,126.13 L218.45,125.88 L219.25,125.63 L220.06,125.40 L220.86,125.17 L221.66,124.94 L222.47,124.73 L223.27,124.52 L224.08,124.31 L224.88,124.11 L225.68,123.92 L226.49,123.74 L227.29,123.56 L228.10,123.39 L228.90,123.22 L229.70,123.07 L230.51,122.91 L231.31,122.77 L232.12,122.63 L232.92,122.50 L233.72,122.37 L234.53,122.25 L235.33,122.14 L236.14,122.03 L236.94,121.93 L237.74,121.83 L238.55,121.75 L239.35,121.67 L240.16,121.59 L240.96,121.52 L241.76,121.46 L242.57,121.41 L243.37,121.36 L244.18,121.32 L244.98,121.28 L245.78,121.25 L246.59,121.23 L247.39,121.21 L248.20,121.20 L249.00,121.20 L249.80,121.20 L250.61,121.21 L251.41,121.23 L252.22,121.25 L253.02,121.28 L253.82,121.32 L254.63,121.36 L255.43,121.41 L256.24,121.46 L257.04,121.52 L257.84,121.59 L258.65,121.67 L259.45,121.75 L260.26,121.83 L261.06,121.93 L261.86,122.03 L262.67,122.14 L263.47,122.25 L264.28,122.37 L265.08,122.50 L265.88,122.63 L266.69,122.77 L267.49,122.91 L268.30,123.07 L269.10,123.22 L269.90,123.39 L270.71,123.56 L271.51,123.74 L272.32,123.92 L273.12,124.11 L273.92,124.31 L274.73,124.52 L275.53,124.73 L276.34,124.94 L277.14,125.17 L277.94,125.40 L278.75,125.63 L279.55,125.88 L280.36,126.13 L281.16,126.38 L281.96,126.64 L282.77,126.91 L283.57,127.19 L284.38,127.47 L285.18,127.76 L285.98,128.05 L286.79,128.35 L287.59,128.66 L288.40,128.98 L289.20,129.30 L290.00,129.62 L290.81,129.96 L291.61,130.30 L292.42,130.64 L293.22,131.00 L294.02,131.36 L294.83,131.72 L295.63,132.09 L296.44,132.47 L297.24,132.86 L298.04,133.25 L298.85,133.65 L299.65,134.05 L300.46,134.46 L301.26,134.88 L302.06,135.31 L302.87,135.74 L303.67,136.17 L304.48,136.62 L305.28,137.07 L306.08,137.52 L306.89,137.99 L307.69,138.46 L308.50,138.93 L309.30,139.42 L310.10,139.90 L310.91,140.40 L311.71,140.90 L312.52,141.41 L313.32,141.93 L314.12,142.45 L314.93,142.98 L315.73,143.51 L316.54,144.05 L317.34,144.60 L318.14,145.15 L318.95,145.71 L319.75,146.28 L320.56,146.85 L321.36,147.43 L322.16,148.02 L322.97,148.61 L323.77,149.21 L324.58,149.81 L325.38,150.43 L326.18,151.05 L326.99,151.67 L327.79,152.30 L328.60,152.94 L329.40,153.58 L330.20,154.23 L331.01,154.89 L331.81,155.56 L332.62,156.23 L333.42,156.90 L334.22,157.59 L335.03,158.28 L335.83,158.97 L336.64,159.68 L337.44,160.38 L338.24,161.10 L339.05,161.82 L339.85,162.55 L340.66,163.29 L341.46,164.03 L342.26,164.78 L343.07,165.53 L343.87,166.29 L344.68,167.06 L345.48,167.83 L346.28,168.61 L347.09,169.40 L347.89,170.19 L348.70,170.99 L349.50,171.80 L350.30,172.61 L351.11,173.43 L351.91,174.26 L352.72,175.09 L353.52,175.93 L354.32,176.77 L355.13,177.63 L355.93,178.48 L356.74,179.35 L357.54,180.22 L358.34,181.10 L359.15,181.98 L359.95,182.87 L360.76,183.77 L361.56,184.67 L362.36,185.58 L363.17,186.50 L363.97,187.42 L364.78,188.35 L365.58,189.29 L366.38,190.23 L367.19,191.18 L367.99,192.13 L368.80,193.10 L369.60,194.06 L370.40,195.04 L371.21,196.02 L372.01,197.01 L372.82,198.00 L373.62,199.00 L374.42,200.01 L375.23,201.02 L376.03,202.04 L376.84,203.07 L377.64,204.10 L378.44,205.14 L379.25,206.19 L380.05,207.24 L380.86,208.30 L381.66,209.37 L382.46,210.44 L383.27,211.52 L384.07,212.60 L384.88,213.69 L385.68,214.79 L386.48,215.89 L387.29,217.00 L388.09,218.12 L388.90,219.25 L389.70,220.38 L390.50,221.51 L391.31,222.66 L392.11,223.81 L392.92,224.96 L393.72,226.12 L394.52,227.29 L395.33,228.47 L396.13,229.65 L396.94,230.84 L397.74,232.03 L398.54,233.24 L399.35,234.44 L400.15,235.66 L400.96,236.88 L401.76,238.11 L402.56,239.34 L403.37,240.58 L404.17,241.83 L404.98,243.08 L405.78,244.34 L406.58,245.61 L407.39,246.88 L408.19,248.16 L409.00,249.44 L409.80,250.74 L410.60,252.03 L411.41,253.34 L412.21,254.65 L413.02,255.97 L413.82,257.29 L414.62,258.62 L415.43,259.96 L416.23,261.31 L417.04,262.66 L417.84,264.01 L418.64,265.38 L419.45,266.75 L420.25,268.12 L421.06,269.51 L421.86,270.90 L422.66,272.29 L423.47,273.69 L424.27,275.10 L425.08,276.52 L425.88,277.94 L426.68,279.37 L427.49,280.80 L428.29,282.24 L429.10,283.69 L429.90,285.14 L430.70,286.60 L431.51,288.07 L432.31,289.54 L433.12,291.02 L433.92,292.51 L434.72,294.00 L435.53,295.50 L436.33,297.01 L437.14,298.52 L437.94,300.04 L438.74,301.57 L439.55,303.10 L440.35,304.64 L441.16,306.18 L441.96,307.73 L442.76,309.29 L443.57,310.85 L444.37,312.42 L445.18,314.00 L445.98,315.58 L446.78,317.18 L447.59,318.77 L448.39,320.37 L449.20,321.98 L450.00,323.60\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#f1clip)\"/><text x=\"399.75\" y=\"45.30\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"148.50\" cy=\"171.80\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"155.50\" y=\"164.80\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"249.00\" cy=\"121.20\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"256.00\" y=\"114.20\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"349.50\" cy=\"171.80\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"356.50\" y=\"164.80\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">C</text></svg></span><p>a) Bestäm funktionens nollställen.<br>b) Bestäm ett intervall där \\(f(x)&lt;0\\).<br>c) Avläs ett extremvärde.</p>",
    "s": "<p><strong>a)</strong> Nollställena avläses där grafen skär x-axeln: <strong>−1 och 3</strong>.</p><p><strong>b)</strong> Där grafen ligger under x-axeln gäller <strong>x&lt;−1 eller x&gt;3</strong>.</p><p><strong>c)</strong> Av grafen avläses <strong>största värdet 2</strong>.</p>",
    "familj": "funktioner_graf_1"
  },
  {
    "id": "1.33",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla uttrycket så långt som möjligt och ange vilka x-värden som måste uteslutas:</p><p>\\[\\frac{x^{2} - 5 x + 6}{x - 2}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera täljare och nämnare innan du förkortar.</p><p>\\[\\frac{x^{2} - 5 x + 6}{x - 2}=x - 3=x - 3.\\]</p><p>Det ursprungliga uttrycket är inte definierat när nämnaren är noll.</p><p><strong>Svar:</strong> \\(\\boxed{x - 3}\\), med \\(x\\neq 2\\).</p>",
    "familj": "rationella_forkorta_2"
  },
  {
    "id": "1.34",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet</p><p>\\[\\lim_{x\\to 1}\\frac{x^{2} - 1}{x - 1}.\\]</p>",
    "s": "<p>Direkt insättning ger ett obestämt uttryck, så vi förenklar först:</p><p>\\[\\frac{x^{2} - 1}{x - 1}=x + 1\\quad (x\\neq 1).\\]</p><p>Därför</p><p>\\[\\lim_{x\\to 1}\\frac{x^{2} - 1}{x - 1}=2.\\]</p><p><strong>Svar:</strong> \\(\\boxed{2}\\).</p>",
    "familj": "grans_faktorisera_1"
  },
  {
    "id": "1.35",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös olikheten</p><p>\\[|x-2|<3.\\]</p>",
    "s": "<p>Absolutbeloppet beskriver avståndet från \\(2\\). Villkoret betyder att avståndet ska vara mindre än \\(3\\).</p><p><strong>Svar:</strong> \\(-1<x<5\\).</p>",
    "familj": "abs_olikhet_0"
  },
  {
    "id": "1.36",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Förenkla eller faktorisera.</p><p>a) \\((2x+3)(x-1)\\)<br>b) \\(x^{2} + 3 x - 4\\)<br>c) Faktorisera \\(2 x^{2} + x - 3\\).</p>",
    "s": "<p><strong>Metod:</strong> Vid multiplikation multipliceras varje term i den första parentesen med varje term i den andra. Vid faktorisering söker man motsvarande faktorer.</p><p>a) \\[2 x^{2} + x - 3\\]</p><p>b) \\[x^{2} + 3 x - 4\\]</p><p>c) \\[\\left(x - 1\\right) \\left(2 x + 3\\right)\\]</p><p><strong>Kontroll:</strong> Multiplicera gärna tillbaka faktorerna i c).</p>",
    "familj": "polynom_rutin_0"
  },
  {
    "id": "1.37",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En andragradsfunktion har nollställena \\(x=-2\\) och \\(x=1\\). Dessutom är \\(f(0)=2\\).</p><p>Bestäm \\(f(x)\\).</p>",
    "s": "<p>Skriv först \\(f(x)=k(x--2)(x-1)\\).</p><p>Sätt in \\(x=0\\):</p><p>\\[2=k\\cdot -2\\]</p><p>vilket ger \\(k=-1\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=- \\left(x - 1\\right) \\left(x + 2\\right)}\\).</p>",
    "familj": "funktioner_bestam_polynom_0"
  },
  {
    "id": "1.38",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla uttrycket så långt som möjligt och ange vilka x-värden som måste uteslutas:</p><p>\\[\\frac{x^{2} - 1}{x + 1}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera täljare och nämnare innan du förkortar.</p><p>\\[\\frac{x^{2} - 1}{x + 1}=x - 1=x - 1.\\]</p><p>Det ursprungliga uttrycket är inte definierat när nämnaren är noll.</p><p><strong>Svar:</strong> \\(\\boxed{x - 1}\\), med \\(x\\neq -1\\).</p>",
    "familj": "rationella_forkorta_3"
  },
  {
    "id": "1.39",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet</p><p>\\[\\lim_{x\\to 0}\\frac{x^{2} + 3 x}{x}.\\]</p>",
    "s": "<p>Direkt insättning ger ett obestämt uttryck, så vi förenklar först:</p><p>\\[\\frac{x^{2} + 3 x}{x}=x + 3\\quad (x\\neq 0).\\]</p><p>Därför</p><p>\\[\\lim_{x\\to 0}\\frac{x^{2} + 3 x}{x}=3.\\]</p><p><strong>Svar:</strong> \\(\\boxed{3}\\).</p>",
    "familj": "grans_faktorisera_2"
  },
  {
    "id": "1.40",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös olikheten</p><p>\\[|x--1|\\le4.\\]</p>",
    "s": "<p>Absolutbeloppet beskriver avståndet från \\(-1\\). Villkoret betyder att avståndet ska vara högst \\(4\\).</p><p><strong>Svar:</strong> \\(-5\\le x\\le3\\).</p>",
    "familj": "abs_olikhet_1"
  },
  {
    "id": "1.41",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Förenkla eller faktorisera.</p><p>a) \\((3x-2)(x+2)\\)<br>b) \\(x^{2} - 3 x - 10\\)<br>c) Faktorisera \\(3 x^{2} + 4 x - 4\\).</p>",
    "s": "<p><strong>Metod:</strong> Vid multiplikation multipliceras varje term i den första parentesen med varje term i den andra. Vid faktorisering söker man motsvarande faktorer.</p><p>a) \\[3 x^{2} + 4 x - 4\\]</p><p>b) \\[x^{2} - 3 x - 10\\]</p><p>c) \\[\\left(x + 2\\right) \\left(3 x - 2\\right)\\]</p><p><strong>Kontroll:</strong> Multiplicera gärna tillbaka faktorerna i c).</p>",
    "familj": "polynom_rutin_1"
  },
  {
    "id": "1.42",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En andragradsfunktion har nollställena \\(x=-1\\) och \\(x=3\\). Dessutom är \\(f(0)=-3\\).</p><p>Bestäm \\(f(x)\\).</p>",
    "s": "<p>Skriv först \\(f(x)=k(x--1)(x-3)\\).</p><p>Sätt in \\(x=0\\):</p><p>\\[-3=k\\cdot -3\\]</p><p>vilket ger \\(k=1\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=\\left(x - 3\\right) \\left(x + 1\\right)}\\).</p>",
    "familj": "funktioner_bestam_polynom_1"
  },
  {
    "id": "1.43",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla</p><p>\\[\\frac{x + 2}{x - 1} \\cdot \\frac{x - 1}{x + 4}.\\]</p><p>Ange också vilka värden som inte är tillåtna i det ursprungliga uttrycket.</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera först. Vid division multiplicerar man med det andra bråkets invers.</p><p>Det förenklade resultatet blir</p><p>\\[\\boxed{\\frac{x + 2}{x + 4}}.\\]</p><p>Otillåtna värden bestäms från originaluttrycket: \\(x\\neq -4, x\\neq 1\\).</p>",
    "familj": "rationella_operation_0"
  },
  {
    "id": "1.44",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet</p><p>\\[\\lim_{x\\to 2}\\frac{x^{3} - 8}{x - 2}.\\]</p>",
    "s": "<p>Direkt insättning ger ett obestämt uttryck, så vi förenklar först:</p><p>\\[\\frac{x^{3} - 8}{x - 2}=x^{2} + 2 x + 4\\quad (x\\neq 2).\\]</p><p>Därför</p><p>\\[\\lim_{x\\to 2}\\frac{x^{3} - 8}{x - 2}=12.\\]</p><p><strong>Svar:</strong> \\(\\boxed{12}\\).</p>",
    "familj": "grans_faktorisera_3"
  },
  {
    "id": "1.45",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös olikheten</p><p>\\[|x-3|>2.\\]</p>",
    "s": "<p>Avståndet från \\(3\\) ska vara större än \\(2\\), alltså ligger \\(x\\) utanför intervallet från \\(1\\) till \\(5\\).</p><p><strong>Svar:</strong> \\(x&lt;1\\) eller \\(x&gt;5\\).</p>",
    "familj": "abs_olikhet_2"
  },
  {
    "id": "1.46",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Förenkla eller faktorisera.</p><p>a) \\((4x+1)(x-2)\\)<br>b) \\(x^{2} + x - 6\\)<br>c) Faktorisera \\(4 x^{2} - 7 x - 2\\).</p>",
    "s": "<p><strong>Metod:</strong> Vid multiplikation multipliceras varje term i den första parentesen med varje term i den andra. Vid faktorisering söker man motsvarande faktorer.</p><p>a) \\[4 x^{2} - 7 x - 2\\]</p><p>b) \\[x^{2} + x - 6\\]</p><p>c) \\[\\left(x - 2\\right) \\left(4 x + 1\\right)\\]</p><p><strong>Kontroll:</strong> Multiplicera gärna tillbaka faktorerna i c).</p>",
    "familj": "polynom_rutin_2"
  },
  {
    "id": "1.47",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En andragradsfunktion har nollställena \\(x=1\\) och \\(x=4\\). Dessutom är \\(f(0)=5\\).</p><p>Bestäm \\(f(x)\\).</p>",
    "s": "<p>Skriv först \\(f(x)=k(x-1)(x-4)\\).</p><p>Sätt in \\(x=0\\):</p><p>\\[5=k\\cdot 4\\]</p><p>vilket ger \\(k=\\frac{5}{4}\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=\\frac{5 \\left(x - 4\\right) \\left(x - 1\\right)}{4}}\\).</p>",
    "familj": "funktioner_bestam_polynom_2"
  },
  {
    "id": "1.48",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla</p><p>\\[\\frac{x^{2} - 4}{x + 1} \\div \\frac{x - 2}{x + 1}.\\]</p><p>Ange också vilka värden som inte är tillåtna i det ursprungliga uttrycket.</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera först. Vid division multiplicerar man med det andra bråkets invers.</p><p>Det förenklade resultatet blir</p><p>\\[\\boxed{x + 2}.\\]</p><p>Otillåtna värden bestäms från originaluttrycket: \\(x\\neq -1, x\\neq 2\\).</p>",
    "familj": "rationella_operation_1"
  },
  {
    "id": "1.49",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till \\(f\\) och en sekant genom punkterna \\(A\\) och \\(B\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"gsec0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"gsec0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"128.40\" y1=\"20\" x2=\"128.40\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"208.80\" y1=\"20\" x2=\"208.80\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"289.20\" y1=\"20\" x2=\"289.20\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"369.60\" y1=\"20\" x2=\"369.60\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"459\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gsec0arr)\"/><line x1=\"48.00\" y1=\"269.00\" x2=\"48.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"208.80\" y1=\"269.00\" x2=\"208.80\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"208.80\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"289.20\" y1=\"269.00\" x2=\"289.20\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"289.20\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"369.60\" y1=\"269.00\" x2=\"369.60\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"369.60\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"269.00\" x2=\"450.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"265.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"128.40\" y1=\"273\" x2=\"128.40\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gsec0arr)\"/><line x1=\"124.40\" y1=\"236.86\" x2=\"132.40\" y2=\"236.86\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"240.36\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"124.40\" y1=\"200.71\" x2=\"132.40\" y2=\"200.71\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"124.40\" y1=\"164.57\" x2=\"132.40\" y2=\"164.57\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"124.40\" y1=\"128.43\" x2=\"132.40\" y2=\"128.43\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"124.40\" y1=\"92.29\" x2=\"132.40\" y2=\"92.29\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"124.40\" y1=\"56.14\" x2=\"132.40\" y2=\"56.14\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"124.40\" y1=\"20.00\" x2=\"132.40\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><text x=\"140.40\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,218.79 L48.80,219.15 L49.61,219.50 L50.41,219.85 L51.22,220.20 L52.02,220.55 L52.82,220.89 L53.63,221.23 L54.43,221.56 L55.24,221.89 L56.04,222.22 L56.84,222.54 L57.65,222.86 L58.45,223.18 L59.26,223.49 L60.06,223.80 L60.86,224.11 L61.67,224.41 L62.47,224.71 L63.28,225.00 L64.08,225.29 L64.88,225.58 L65.69,225.86 L66.49,226.14 L67.30,226.42 L68.10,226.69 L68.90,226.96 L69.71,227.23 L70.51,227.49 L71.32,227.75 L72.12,228.00 L72.92,228.25 L73.73,228.50 L74.53,228.74 L75.34,228.99 L76.14,229.22 L76.94,229.46 L77.75,229.68 L78.55,229.91 L79.36,230.13 L80.16,230.35 L80.96,230.57 L81.77,230.78 L82.57,230.99 L83.38,231.19 L84.18,231.39 L84.98,231.59 L85.79,231.78 L86.59,231.97 L87.40,232.16 L88.20,232.34 L89.00,232.52 L89.81,232.69 L90.61,232.87 L91.42,233.03 L92.22,233.20 L93.02,233.36 L93.83,233.52 L94.63,233.67 L95.44,233.82 L96.24,233.97 L97.04,234.11 L97.85,234.25 L98.65,234.38 L99.46,234.52 L100.26,234.64 L101.06,234.77 L101.87,234.89 L102.67,235.01 L103.48,235.12 L104.28,235.23 L105.08,235.34 L105.89,235.44 L106.69,235.54 L107.50,235.64 L108.30,235.73 L109.10,235.82 L109.91,235.90 L110.71,235.98 L111.52,236.06 L112.32,236.13 L113.12,236.20 L113.93,236.27 L114.73,236.33 L115.54,236.39 L116.34,236.45 L117.14,236.50 L117.95,236.55 L118.75,236.60 L119.56,236.64 L120.36,236.68 L121.16,236.71 L121.97,236.74 L122.77,236.77 L123.58,236.79 L124.38,236.81 L125.18,236.83 L125.99,236.84 L126.79,236.85 L127.60,236.86 L128.40,236.86 L129.20,236.86 L130.01,236.85 L130.81,236.84 L131.62,236.83 L132.42,236.81 L133.22,236.79 L134.03,236.77 L134.83,236.74 L135.64,236.71 L136.44,236.68 L137.24,236.64 L138.05,236.60 L138.85,236.55 L139.66,236.50 L140.46,236.45 L141.26,236.39 L142.07,236.33 L142.87,236.27 L143.68,236.20 L144.48,236.13 L145.28,236.06 L146.09,235.98 L146.89,235.90 L147.70,235.82 L148.50,235.73 L149.30,235.64 L150.11,235.54 L150.91,235.44 L151.72,235.34 L152.52,235.23 L153.32,235.12 L154.13,235.01 L154.93,234.89 L155.74,234.77 L156.54,234.64 L157.34,234.52 L158.15,234.38 L158.95,234.25 L159.76,234.11 L160.56,233.97 L161.36,233.82 L162.17,233.67 L162.97,233.52 L163.78,233.36 L164.58,233.20 L165.38,233.03 L166.19,232.87 L166.99,232.69 L167.80,232.52 L168.60,232.34 L169.40,232.16 L170.21,231.97 L171.01,231.78 L171.82,231.59 L172.62,231.39 L173.42,231.19 L174.23,230.99 L175.03,230.78 L175.84,230.57 L176.64,230.35 L177.44,230.13 L178.25,229.91 L179.05,229.68 L179.86,229.46 L180.66,229.22 L181.46,228.99 L182.27,228.74 L183.07,228.50 L183.88,228.25 L184.68,228.00 L185.48,227.75 L186.29,227.49 L187.09,227.23 L187.90,226.96 L188.70,226.69 L189.50,226.42 L190.31,226.14 L191.11,225.86 L191.92,225.58 L192.72,225.29 L193.52,225.00 L194.33,224.71 L195.13,224.41 L195.94,224.11 L196.74,223.80 L197.54,223.49 L198.35,223.18 L199.15,222.86 L199.96,222.54 L200.76,222.22 L201.56,221.89 L202.37,221.56 L203.17,221.23 L203.98,220.89 L204.78,220.55 L205.58,220.20 L206.39,219.85 L207.19,219.50 L208.00,219.15 L208.80,218.79 L209.60,218.42 L210.41,218.06 L211.21,217.69 L212.02,217.31 L212.82,216.93 L213.62,216.55 L214.43,216.17 L215.23,215.78 L216.04,215.39 L216.84,214.99 L217.64,214.59 L218.45,214.19 L219.25,213.78 L220.06,213.37 L220.86,212.96 L221.66,212.54 L222.47,212.12 L223.27,211.69 L224.08,211.27 L224.88,210.83 L225.68,210.40 L226.49,209.96 L227.29,209.52 L228.10,209.07 L228.90,208.62 L229.70,208.17 L230.51,207.71 L231.31,207.25 L232.12,206.78 L232.92,206.32 L233.72,205.84 L234.53,205.37 L235.33,204.89 L236.14,204.41 L236.94,203.92 L237.74,203.43 L238.55,202.94 L239.35,202.44 L240.16,201.94 L240.96,201.44 L241.76,200.93 L242.57,200.42 L243.37,199.90 L244.18,199.38 L244.98,198.86 L245.78,198.34 L246.59,197.81 L247.39,197.27 L248.20,196.74 L249.00,196.20 L249.80,195.65 L250.61,195.10 L251.41,194.55 L252.22,194.00 L253.02,193.44 L253.82,192.88 L254.63,192.31 L255.43,191.74 L256.24,191.17 L257.04,190.59 L257.84,190.01 L258.65,189.43 L259.45,188.84 L260.26,188.25 L261.06,187.66 L261.86,187.06 L262.67,186.46 L263.47,185.85 L264.28,185.24 L265.08,184.63 L265.88,184.01 L266.69,183.39 L267.49,182.77 L268.30,182.14 L269.10,181.51 L269.90,180.88 L270.71,180.24 L271.51,179.60 L272.32,178.95 L273.12,178.31 L273.92,177.65 L274.73,177.00 L275.53,176.34 L276.34,175.67 L277.14,175.01 L277.94,174.34 L278.75,173.66 L279.55,172.99 L280.36,172.30 L281.16,171.62 L281.96,170.93 L282.77,170.24 L283.57,169.54 L284.38,168.84 L285.18,168.14 L285.98,167.43 L286.79,166.72 L287.59,166.01 L288.40,165.29 L289.20,164.57 L290.00,163.85 L290.81,163.12 L291.61,162.39 L292.42,161.65 L293.22,160.91 L294.02,160.17 L294.83,159.42 L295.63,158.67 L296.44,157.92 L297.24,157.16 L298.04,156.40 L298.85,155.64 L299.65,154.87 L300.46,154.10 L301.26,153.32 L302.06,152.54 L302.87,151.76 L303.67,150.97 L304.48,150.18 L305.28,149.39 L306.08,148.59 L306.89,147.79 L307.69,146.99 L308.50,146.18 L309.30,145.37 L310.10,144.56 L310.91,143.74 L311.71,142.91 L312.52,142.09 L313.32,141.26 L314.12,140.43 L314.93,139.59 L315.73,138.75 L316.54,137.91 L317.34,137.06 L318.14,136.21 L318.95,135.35 L319.75,134.49 L320.56,133.63 L321.36,132.77 L322.16,131.90 L322.97,131.02 L323.77,130.15 L324.58,129.27 L325.38,128.38 L326.18,127.50 L326.99,126.61 L327.79,125.71 L328.60,124.81 L329.40,123.91 L330.20,123.01 L331.01,122.10 L331.81,121.18 L332.62,120.27 L333.42,119.35 L334.22,118.42 L335.03,117.50 L335.83,116.57 L336.64,115.63 L337.44,114.69 L338.24,113.75 L339.05,112.81 L339.85,111.86 L340.66,110.91 L341.46,109.95 L342.26,108.99 L343.07,108.03 L343.87,107.06 L344.68,106.09 L345.48,105.12 L346.28,104.14 L347.09,103.16 L347.89,102.17 L348.70,101.18 L349.50,100.19 L350.30,99.20 L351.11,98.20 L351.91,97.19 L352.72,96.19 L353.52,95.18 L354.32,94.16 L355.13,93.15 L355.93,92.12 L356.74,91.10 L357.54,90.07 L358.34,89.04 L359.15,88.00 L359.95,86.97 L360.76,85.92 L361.56,84.88 L362.36,83.83 L363.17,82.77 L363.97,81.72 L364.78,80.65 L365.58,79.59 L366.38,78.52 L367.19,77.45 L367.99,76.38 L368.80,75.30 L369.60,74.21 L370.40,73.13 L371.21,72.04 L372.01,70.95 L372.82,69.85 L373.62,68.75 L374.42,67.64 L375.23,66.54 L376.03,65.42 L376.84,64.31 L377.64,63.19 L378.44,62.07 L379.25,60.94 L380.05,59.81 L380.86,58.68 L381.66,57.54 L382.46,56.40 L383.27,55.26 L384.07,54.11 L384.88,52.96 L385.68,51.81 L386.48,50.65 L387.29,49.49 L388.09,48.32 L388.90,47.15 L389.70,45.98 L390.50,44.80 L391.31,43.62 L392.11,42.44 L392.92,41.25 L393.72,40.06 L394.52,38.86 L395.33,37.67 L396.13,36.46 L396.94,35.26 L397.74,34.05 L398.54,32.84 L399.35,31.62 L400.15,30.40 L400.96,29.18 L401.76,27.95 L402.56,26.72 L403.37,25.49 L404.17,24.25 L404.98,23.01 L405.78,21.76 L406.58,20.51 L407.39,19.26 L408.19,18.00 L409.00,16.75 L409.80,15.48 L410.60,14.22 L411.41,12.94 L412.21,11.67 L413.02,10.39 L413.82,9.11 L414.62,7.83 L415.43,6.54 L416.23,5.25 L417.04,3.95 L417.84,2.65 L418.64,1.35 L419.45,0.04 L420.25,-1.27 L421.06,-2.58 L421.86,-3.90 L422.66,-5.22 L423.47,-6.55 L424.27,-7.87 L425.08,-9.21 L425.88,-10.54 L426.68,-11.88 L427.49,-13.22 L428.29,-14.57 L429.10,-15.92 L429.90,-17.27 L430.70,-18.63 L431.51,-19.99 L432.31,-21.35 L433.12,-22.72 L433.92,-24.09 L434.72,-25.47 L435.53,-26.85 L436.33,-28.23 L437.14,-29.62 L437.94,-31.01 L438.74,-32.40 L439.55,-33.80 L440.35,-35.20 L441.16,-36.60 L441.96,-38.01 L442.76,-39.42 L443.57,-40.84 L444.37,-42.25 L445.18,-43.68 L445.98,-45.10 L446.78,-46.53 L447.59,-47.96 L448.39,-49.40 L449.20,-50.84 L450.00,-52.29\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#gsec0clip)\"/><text x=\"345.48\" y=\"92.29\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><line x1=\"128.40\" y1=\"236.86\" x2=\"289.20\" y2=\"164.57\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><text x=\"215.80\" y=\"194.71\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2A5D9E\">sekant</text><circle cx=\"128.40\" cy=\"236.86\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"135.40\" y=\"229.86\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"289.20\" cy=\"164.57\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"296.20\" y=\"157.57\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text></svg></span><p>Bestäm sekantens lutning. Vad representerar lutningen för funktionen på intervallet?</p>",
    "s": "<p>Av figuren: \\(A=(0,1)\\) och \\(B=(2,3)\\).</p><p>Sekantens lutning är</p><p>\\[k=\\frac{3-1}{2-0}=1.\\]</p><p>Detta är funktionens <strong>genomsnittliga förändringshastighet</strong> på intervallet.</p>",
    "familj": "grans_sekant_0"
  },
  {
    "id": "1.50",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En temperaturgivare ska hålla sig högst 1,5 °C från 20 °C.</p><p>Skriv villkoret med absolutbelopp och ange det tillåtna intervallet.</p>",
    "s": "<p>Avvikelsen från målvärdet \\(20\\) är \\(|x-20|\\). Villkoret blir</p><p>\\[|x-20|\\le 1,5.\\]</p><p>Det motsvarar intervallet</p><p>\\[18,5\\le x\\le 21,5.\\]</p>",
    "familj": "abs_kontext_0"
  },
  {
    "id": "1.51",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Förenkla eller faktorisera.</p><p>a) \\((2x-4)(x+3)\\)<br>b) \\(x^{2} + 4 x + 3\\)<br>c) Faktorisera \\(2 x^{2} + 2 x - 12\\).</p>",
    "s": "<p><strong>Metod:</strong> Vid multiplikation multipliceras varje term i den första parentesen med varje term i den andra. Vid faktorisering söker man motsvarande faktorer.</p><p>a) \\[2 x^{2} + 2 x - 12\\]</p><p>b) \\[x^{2} + 4 x + 3\\]</p><p>c) \\[2 \\left(x - 2\\right) \\left(x + 3\\right)\\]</p><p><strong>Kontroll:</strong> Multiplicera gärna tillbaka faktorerna i c).</p>",
    "familj": "polynom_rutin_3"
  },
  {
    "id": "1.52",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En polynomfunktion \\(f\\) av tredje graden har exakt två extrempunkter. Förklara varför grafen måste ha minst ett nollställe.</p>",
    "s": "<p><strong>Resonemang:</strong> En tredjegradsfunktion har udda grad. När \\(x\\) går mot \\(+\\infty\\) och \\(-\\infty\\) går funktionsvärdena åt motsatta håll (det ena mot \\(+\\infty\\), det andra mot \\(-\\infty\\), beroende på tecknet på ledande koefficienten). Eftersom polynomfunktioner är kontinuerliga måste grafen därför passera x-axeln minst en gång.</p>",
    "familj": "funktioner_udda_grad_resonemang"
  },
  {
    "id": "1.53",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Förenkla</p><p>\\[\\frac{2 x}{x - 3} \\cdot \\frac{x + 1}{4 x}.\\]</p><p>Ange också vilka värden som inte är tillåtna i det ursprungliga uttrycket.</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera först. Vid division multiplicerar man med det andra bråkets invers.</p><p>Det förenklade resultatet blir</p><p>\\[\\boxed{\\frac{x + 1}{2 x - 6}}.\\]</p><p>Otillåtna värden bestäms från originaluttrycket: \\(x\\neq 0, x\\neq 3\\).</p>",
    "familj": "rationella_operation_2"
  },
  {
    "id": "1.54",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till \\(f\\) och en sekant genom punkterna \\(A\\) och \\(B\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"gsec1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"gsec1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"128.40\" y1=\"20\" x2=\"128.40\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"208.80\" y1=\"20\" x2=\"208.80\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"289.20\" y1=\"20\" x2=\"289.20\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"369.60\" y1=\"20\" x2=\"369.60\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"459\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gsec1arr)\"/><line x1=\"48.00\" y1=\"269.00\" x2=\"48.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"208.80\" y1=\"269.00\" x2=\"208.80\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"208.80\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"289.20\" y1=\"269.00\" x2=\"289.20\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"289.20\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"369.60\" y1=\"269.00\" x2=\"369.60\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"369.60\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"269.00\" x2=\"450.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"265.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"128.40\" y1=\"273\" x2=\"128.40\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gsec1arr)\"/><line x1=\"124.40\" y1=\"236.86\" x2=\"132.40\" y2=\"236.86\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"240.36\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"124.40\" y1=\"200.71\" x2=\"132.40\" y2=\"200.71\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"124.40\" y1=\"164.57\" x2=\"132.40\" y2=\"164.57\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"124.40\" y1=\"128.43\" x2=\"132.40\" y2=\"128.43\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"124.40\" y1=\"92.29\" x2=\"132.40\" y2=\"92.29\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"124.40\" y1=\"56.14\" x2=\"132.40\" y2=\"56.14\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"124.40\" y1=\"20.00\" x2=\"132.40\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><text x=\"140.40\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,218.79 L48.80,219.15 L49.61,219.50 L50.41,219.85 L51.22,220.20 L52.02,220.55 L52.82,220.89 L53.63,221.23 L54.43,221.56 L55.24,221.89 L56.04,222.22 L56.84,222.54 L57.65,222.86 L58.45,223.18 L59.26,223.49 L60.06,223.80 L60.86,224.11 L61.67,224.41 L62.47,224.71 L63.28,225.00 L64.08,225.29 L64.88,225.58 L65.69,225.86 L66.49,226.14 L67.30,226.42 L68.10,226.69 L68.90,226.96 L69.71,227.23 L70.51,227.49 L71.32,227.75 L72.12,228.00 L72.92,228.25 L73.73,228.50 L74.53,228.74 L75.34,228.99 L76.14,229.22 L76.94,229.46 L77.75,229.68 L78.55,229.91 L79.36,230.13 L80.16,230.35 L80.96,230.57 L81.77,230.78 L82.57,230.99 L83.38,231.19 L84.18,231.39 L84.98,231.59 L85.79,231.78 L86.59,231.97 L87.40,232.16 L88.20,232.34 L89.00,232.52 L89.81,232.69 L90.61,232.87 L91.42,233.03 L92.22,233.20 L93.02,233.36 L93.83,233.52 L94.63,233.67 L95.44,233.82 L96.24,233.97 L97.04,234.11 L97.85,234.25 L98.65,234.38 L99.46,234.52 L100.26,234.64 L101.06,234.77 L101.87,234.89 L102.67,235.01 L103.48,235.12 L104.28,235.23 L105.08,235.34 L105.89,235.44 L106.69,235.54 L107.50,235.64 L108.30,235.73 L109.10,235.82 L109.91,235.90 L110.71,235.98 L111.52,236.06 L112.32,236.13 L113.12,236.20 L113.93,236.27 L114.73,236.33 L115.54,236.39 L116.34,236.45 L117.14,236.50 L117.95,236.55 L118.75,236.60 L119.56,236.64 L120.36,236.68 L121.16,236.71 L121.97,236.74 L122.77,236.77 L123.58,236.79 L124.38,236.81 L125.18,236.83 L125.99,236.84 L126.79,236.85 L127.60,236.86 L128.40,236.86 L129.20,236.86 L130.01,236.85 L130.81,236.84 L131.62,236.83 L132.42,236.81 L133.22,236.79 L134.03,236.77 L134.83,236.74 L135.64,236.71 L136.44,236.68 L137.24,236.64 L138.05,236.60 L138.85,236.55 L139.66,236.50 L140.46,236.45 L141.26,236.39 L142.07,236.33 L142.87,236.27 L143.68,236.20 L144.48,236.13 L145.28,236.06 L146.09,235.98 L146.89,235.90 L147.70,235.82 L148.50,235.73 L149.30,235.64 L150.11,235.54 L150.91,235.44 L151.72,235.34 L152.52,235.23 L153.32,235.12 L154.13,235.01 L154.93,234.89 L155.74,234.77 L156.54,234.64 L157.34,234.52 L158.15,234.38 L158.95,234.25 L159.76,234.11 L160.56,233.97 L161.36,233.82 L162.17,233.67 L162.97,233.52 L163.78,233.36 L164.58,233.20 L165.38,233.03 L166.19,232.87 L166.99,232.69 L167.80,232.52 L168.60,232.34 L169.40,232.16 L170.21,231.97 L171.01,231.78 L171.82,231.59 L172.62,231.39 L173.42,231.19 L174.23,230.99 L175.03,230.78 L175.84,230.57 L176.64,230.35 L177.44,230.13 L178.25,229.91 L179.05,229.68 L179.86,229.46 L180.66,229.22 L181.46,228.99 L182.27,228.74 L183.07,228.50 L183.88,228.25 L184.68,228.00 L185.48,227.75 L186.29,227.49 L187.09,227.23 L187.90,226.96 L188.70,226.69 L189.50,226.42 L190.31,226.14 L191.11,225.86 L191.92,225.58 L192.72,225.29 L193.52,225.00 L194.33,224.71 L195.13,224.41 L195.94,224.11 L196.74,223.80 L197.54,223.49 L198.35,223.18 L199.15,222.86 L199.96,222.54 L200.76,222.22 L201.56,221.89 L202.37,221.56 L203.17,221.23 L203.98,220.89 L204.78,220.55 L205.58,220.20 L206.39,219.85 L207.19,219.50 L208.00,219.15 L208.80,218.79 L209.60,218.42 L210.41,218.06 L211.21,217.69 L212.02,217.31 L212.82,216.93 L213.62,216.55 L214.43,216.17 L215.23,215.78 L216.04,215.39 L216.84,214.99 L217.64,214.59 L218.45,214.19 L219.25,213.78 L220.06,213.37 L220.86,212.96 L221.66,212.54 L222.47,212.12 L223.27,211.69 L224.08,211.27 L224.88,210.83 L225.68,210.40 L226.49,209.96 L227.29,209.52 L228.10,209.07 L228.90,208.62 L229.70,208.17 L230.51,207.71 L231.31,207.25 L232.12,206.78 L232.92,206.32 L233.72,205.84 L234.53,205.37 L235.33,204.89 L236.14,204.41 L236.94,203.92 L237.74,203.43 L238.55,202.94 L239.35,202.44 L240.16,201.94 L240.96,201.44 L241.76,200.93 L242.57,200.42 L243.37,199.90 L244.18,199.38 L244.98,198.86 L245.78,198.34 L246.59,197.81 L247.39,197.27 L248.20,196.74 L249.00,196.20 L249.80,195.65 L250.61,195.10 L251.41,194.55 L252.22,194.00 L253.02,193.44 L253.82,192.88 L254.63,192.31 L255.43,191.74 L256.24,191.17 L257.04,190.59 L257.84,190.01 L258.65,189.43 L259.45,188.84 L260.26,188.25 L261.06,187.66 L261.86,187.06 L262.67,186.46 L263.47,185.85 L264.28,185.24 L265.08,184.63 L265.88,184.01 L266.69,183.39 L267.49,182.77 L268.30,182.14 L269.10,181.51 L269.90,180.88 L270.71,180.24 L271.51,179.60 L272.32,178.95 L273.12,178.31 L273.92,177.65 L274.73,177.00 L275.53,176.34 L276.34,175.67 L277.14,175.01 L277.94,174.34 L278.75,173.66 L279.55,172.99 L280.36,172.30 L281.16,171.62 L281.96,170.93 L282.77,170.24 L283.57,169.54 L284.38,168.84 L285.18,168.14 L285.98,167.43 L286.79,166.72 L287.59,166.01 L288.40,165.29 L289.20,164.57 L290.00,163.85 L290.81,163.12 L291.61,162.39 L292.42,161.65 L293.22,160.91 L294.02,160.17 L294.83,159.42 L295.63,158.67 L296.44,157.92 L297.24,157.16 L298.04,156.40 L298.85,155.64 L299.65,154.87 L300.46,154.10 L301.26,153.32 L302.06,152.54 L302.87,151.76 L303.67,150.97 L304.48,150.18 L305.28,149.39 L306.08,148.59 L306.89,147.79 L307.69,146.99 L308.50,146.18 L309.30,145.37 L310.10,144.56 L310.91,143.74 L311.71,142.91 L312.52,142.09 L313.32,141.26 L314.12,140.43 L314.93,139.59 L315.73,138.75 L316.54,137.91 L317.34,137.06 L318.14,136.21 L318.95,135.35 L319.75,134.49 L320.56,133.63 L321.36,132.77 L322.16,131.90 L322.97,131.02 L323.77,130.15 L324.58,129.27 L325.38,128.38 L326.18,127.50 L326.99,126.61 L327.79,125.71 L328.60,124.81 L329.40,123.91 L330.20,123.01 L331.01,122.10 L331.81,121.18 L332.62,120.27 L333.42,119.35 L334.22,118.42 L335.03,117.50 L335.83,116.57 L336.64,115.63 L337.44,114.69 L338.24,113.75 L339.05,112.81 L339.85,111.86 L340.66,110.91 L341.46,109.95 L342.26,108.99 L343.07,108.03 L343.87,107.06 L344.68,106.09 L345.48,105.12 L346.28,104.14 L347.09,103.16 L347.89,102.17 L348.70,101.18 L349.50,100.19 L350.30,99.20 L351.11,98.20 L351.91,97.19 L352.72,96.19 L353.52,95.18 L354.32,94.16 L355.13,93.15 L355.93,92.12 L356.74,91.10 L357.54,90.07 L358.34,89.04 L359.15,88.00 L359.95,86.97 L360.76,85.92 L361.56,84.88 L362.36,83.83 L363.17,82.77 L363.97,81.72 L364.78,80.65 L365.58,79.59 L366.38,78.52 L367.19,77.45 L367.99,76.38 L368.80,75.30 L369.60,74.21 L370.40,73.13 L371.21,72.04 L372.01,70.95 L372.82,69.85 L373.62,68.75 L374.42,67.64 L375.23,66.54 L376.03,65.42 L376.84,64.31 L377.64,63.19 L378.44,62.07 L379.25,60.94 L380.05,59.81 L380.86,58.68 L381.66,57.54 L382.46,56.40 L383.27,55.26 L384.07,54.11 L384.88,52.96 L385.68,51.81 L386.48,50.65 L387.29,49.49 L388.09,48.32 L388.90,47.15 L389.70,45.98 L390.50,44.80 L391.31,43.62 L392.11,42.44 L392.92,41.25 L393.72,40.06 L394.52,38.86 L395.33,37.67 L396.13,36.46 L396.94,35.26 L397.74,34.05 L398.54,32.84 L399.35,31.62 L400.15,30.40 L400.96,29.18 L401.76,27.95 L402.56,26.72 L403.37,25.49 L404.17,24.25 L404.98,23.01 L405.78,21.76 L406.58,20.51 L407.39,19.26 L408.19,18.00 L409.00,16.75 L409.80,15.48 L410.60,14.22 L411.41,12.94 L412.21,11.67 L413.02,10.39 L413.82,9.11 L414.62,7.83 L415.43,6.54 L416.23,5.25 L417.04,3.95 L417.84,2.65 L418.64,1.35 L419.45,0.04 L420.25,-1.27 L421.06,-2.58 L421.86,-3.90 L422.66,-5.22 L423.47,-6.55 L424.27,-7.87 L425.08,-9.21 L425.88,-10.54 L426.68,-11.88 L427.49,-13.22 L428.29,-14.57 L429.10,-15.92 L429.90,-17.27 L430.70,-18.63 L431.51,-19.99 L432.31,-21.35 L433.12,-22.72 L433.92,-24.09 L434.72,-25.47 L435.53,-26.85 L436.33,-28.23 L437.14,-29.62 L437.94,-31.01 L438.74,-32.40 L439.55,-33.80 L440.35,-35.20 L441.16,-36.60 L441.96,-38.01 L442.76,-39.42 L443.57,-40.84 L444.37,-42.25 L445.18,-43.68 L445.98,-45.10 L446.78,-46.53 L447.59,-47.96 L448.39,-49.40 L449.20,-50.84 L450.00,-52.29\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#gsec1clip)\"/><text x=\"345.48\" y=\"92.29\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><line x1=\"208.80\" y1=\"218.79\" x2=\"369.60\" y2=\"74.21\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><text x=\"296.20\" y=\"140.50\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2A5D9E\">sekant</text><circle cx=\"208.80\" cy=\"218.79\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"215.80\" y=\"211.79\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"369.60\" cy=\"74.21\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"376.60\" y=\"67.21\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text></svg></span><p>Bestäm sekantens lutning. Vad representerar lutningen för funktionen på intervallet?</p>",
    "s": "<p>Av figuren: \\(A=(1,1,5)\\) och \\(B=(3,5,5)\\).</p><p>Sekantens lutning är</p><p>\\[k=\\frac{5,5-1,5}{3-1}=2.\\]</p><p>Detta är funktionens <strong>genomsnittliga förändringshastighet</strong> på intervallet.</p>",
    "familj": "grans_sekant_1"
  },
  {
    "id": "1.55",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En detalj får avvika högst 0,08 mm från måttet 12,00 mm.</p><p>Skriv villkoret med absolutbelopp och ange det tillåtna intervallet.</p>",
    "s": "<p>Avvikelsen från målvärdet \\(12\\) är \\(|x-12|\\). Villkoret blir</p><p>\\[|x-12|\\le 0,08.\\]</p><p>Det motsvarar intervallet</p><p>\\[11,92\\le x\\le 12,08.\\]</p>",
    "familj": "abs_kontext_1"
  },
  {
    "id": "1.56",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös polynomekvationen</p><p>\\[x^{3} - 2 x^{2} - 11 x + 12=0.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera polynomet och använd nollproduktmetoden.</p><p>\\[x^{3} - 2 x^{2} - 11 x + 12=\\left(x - 4\\right) \\left(x - 1\\right) \\left(x + 3\\right).\\]</p><p>Alltså måste någon faktor vara noll.</p><p><strong>Svar:</strong> \\(x=-3,\\ 1,\\ 4\\).</p>",
    "familj": "polynom_nollprodukt_0"
  },
  {
    "id": "1.57",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Funktionen ges av \\(f(x)=2(x-1)^2-3\\).</p><p>Bestäm symmetrilinje, extrempunkt och om extrempunkten är en maximi- eller minimipunkt.</p>",
    "s": "<p>Uttrycket är på formen \\(a(x-h)^2+k\\). Symmetrilinjen är därför \\(x=h\\), alltså \\(x=1\\).</p><p>Extrempunkten är \\((1,-3)\\). Eftersom \\(a=2\\) är positiv öppnar parabeln uppåt.</p><p><strong>Svar:</strong> symmetrilinje \\(x=1\\), minimipunkt \\((1,-3)\\).</p>",
    "familj": "funktioner_kvadratkompletterad_0"
  },
  {
    "id": "1.58",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[\\frac{1}{x + 1} + \\frac{1}{x - 1}=1.\\]</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först otillåtna värden och multiplicera sedan ekvationen med en gemensam nämnare.</p><p>En gemensam nämnare är \\(1\\). Efter multiplikation och förenkling fås</p><p>\\[-1 + \\frac{1}{x + 1} + \\frac{1}{x - 1}=0.\\]</p><p>Det ger \\(x=1 - \\sqrt{2}, x=1 + \\sqrt{2}\\).</p><p><strong>Svar:</strong> \\(\\boxed{1 - \\sqrt{2}, 1 + \\sqrt{2}}\\).</p>",
    "familj": "rationella_ekvation_0"
  },
  {
    "id": "1.59",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen definieras av</p><p>\\[f(x)=\\begin{cases}2x+3,&x&lt;1\\\\x^2+c,&x\\ge 1.\\end{cases}\\]</p><p>Bestäm \\(c\\) så att funktionen är kontinuerlig vid \\(x=1\\).</p>",
    "s": "<p>För kontinuitet måste vänster och höger funktionsvärde vara lika vid \\(x=1\\).</p><p>Vänsterledets värde är \\(2\\cdot1+3=5\\). Högerledets värde är \\(1+c\\).</p><p>\\[1+c=5\\Rightarrow c=4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{c=4}\\).</p>",
    "familj": "grans_kontinuitet_styckvis_0"
  },
  {
    "id": "1.60",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till en absolutbeloppsfunktion.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"abs0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"abs0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"98.25\" y1=\"20\" x2=\"98.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"198.75\" y1=\"20\" x2=\"198.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"299.25\" y1=\"20\" x2=\"299.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"399.75\" y1=\"20\" x2=\"399.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"241.38\" x2=\"450\" y2=\"241.38\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"209.75\" x2=\"450\" y2=\"209.75\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"178.12\" x2=\"450\" y2=\"178.12\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"114.88\" x2=\"450\" y2=\"114.88\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"83.25\" x2=\"450\" y2=\"83.25\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"51.62\" x2=\"450\" y2=\"51.62\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"178.12\" x2=\"459\" y2=\"178.12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#abs0arr)\"/><line x1=\"48.00\" y1=\"174.12\" x2=\"48.00\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"98.25\" y1=\"174.12\" x2=\"98.25\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"98.25\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"148.50\" y1=\"174.12\" x2=\"148.50\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"198.75\" y1=\"174.12\" x2=\"198.75\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"198.75\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"299.25\" y1=\"174.12\" x2=\"299.25\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"299.25\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"349.50\" y1=\"174.12\" x2=\"349.50\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"399.75\" y1=\"174.12\" x2=\"399.75\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"399.75\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"174.12\" x2=\"450.00\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"170.12\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#abs0arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"241.38\" x2=\"253.00\" y2=\"241.38\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"244.88\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"209.75\" x2=\"253.00\" y2=\"209.75\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"213.25\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"146.50\" x2=\"253.00\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"114.88\" x2=\"253.00\" y2=\"114.88\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"118.38\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"83.25\" x2=\"253.00\" y2=\"83.25\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"86.75\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"51.62\" x2=\"253.00\" y2=\"51.62\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"55.12\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,83.25 L48.80,83.76 L49.61,84.26 L50.41,84.77 L51.22,85.27 L52.02,85.78 L52.82,86.29 L53.63,86.79 L54.43,87.30 L55.24,87.80 L56.04,88.31 L56.84,88.82 L57.65,89.32 L58.45,89.83 L59.26,90.33 L60.06,90.84 L60.86,91.35 L61.67,91.85 L62.47,92.36 L63.28,92.86 L64.08,93.37 L64.88,93.88 L65.69,94.38 L66.49,94.89 L67.30,95.39 L68.10,95.90 L68.90,96.41 L69.71,96.91 L70.51,97.42 L71.32,97.92 L72.12,98.43 L72.92,98.94 L73.73,99.44 L74.53,99.95 L75.34,100.45 L76.14,100.96 L76.94,101.47 L77.75,101.97 L78.55,102.48 L79.36,102.98 L80.16,103.49 L80.96,104.00 L81.77,104.50 L82.57,105.01 L83.38,105.51 L84.18,106.02 L84.98,106.53 L85.79,107.03 L86.59,107.54 L87.40,108.04 L88.20,108.55 L89.00,109.06 L89.81,109.56 L90.61,110.07 L91.42,110.57 L92.22,111.08 L93.02,111.59 L93.83,112.09 L94.63,112.60 L95.44,113.10 L96.24,113.61 L97.04,114.12 L97.85,114.62 L98.65,115.13 L99.46,115.63 L100.26,116.14 L101.06,116.65 L101.87,117.15 L102.67,117.66 L103.48,118.16 L104.28,118.67 L105.08,119.18 L105.89,119.68 L106.69,120.19 L107.50,120.69 L108.30,121.20 L109.10,121.71 L109.91,122.21 L110.71,122.72 L111.52,123.22 L112.32,123.73 L113.12,124.24 L113.93,124.74 L114.73,125.25 L115.54,125.75 L116.34,126.26 L117.14,126.77 L117.95,127.27 L118.75,127.78 L119.56,128.28 L120.36,128.79 L121.16,129.30 L121.97,129.80 L122.77,130.31 L123.58,130.81 L124.38,131.32 L125.18,131.83 L125.99,132.33 L126.79,132.84 L127.60,133.34 L128.40,133.85 L129.20,134.36 L130.01,134.86 L130.81,135.37 L131.62,135.87 L132.42,136.38 L133.22,136.89 L134.03,137.39 L134.83,137.90 L135.64,138.40 L136.44,138.91 L137.24,139.42 L138.05,139.92 L138.85,140.43 L139.66,140.93 L140.46,141.44 L141.26,141.95 L142.07,142.45 L142.87,142.96 L143.68,143.46 L144.48,143.97 L145.28,144.48 L146.09,144.98 L146.89,145.49 L147.70,145.99 L148.50,146.50 L149.30,147.01 L150.11,147.51 L150.91,148.02 L151.72,148.52 L152.52,149.03 L153.32,149.54 L154.13,150.04 L154.93,150.55 L155.74,151.05 L156.54,151.56 L157.34,152.07 L158.15,152.57 L158.95,153.08 L159.76,153.58 L160.56,154.09 L161.36,154.60 L162.17,155.10 L162.97,155.61 L163.78,156.11 L164.58,156.62 L165.38,157.13 L166.19,157.63 L166.99,158.14 L167.80,158.64 L168.60,159.15 L169.40,159.66 L170.21,160.16 L171.01,160.67 L171.82,161.17 L172.62,161.68 L173.42,162.19 L174.23,162.69 L175.03,163.20 L175.84,163.70 L176.64,164.21 L177.44,164.72 L178.25,165.22 L179.05,165.73 L179.86,166.23 L180.66,166.74 L181.46,167.25 L182.27,167.75 L183.07,168.26 L183.88,168.76 L184.68,169.27 L185.48,169.78 L186.29,170.28 L187.09,170.79 L187.90,171.29 L188.70,171.80 L189.50,172.31 L190.31,172.81 L191.11,173.32 L191.92,173.82 L192.72,174.33 L193.52,174.84 L194.33,175.34 L195.13,175.85 L195.94,176.35 L196.74,176.86 L197.54,177.37 L198.35,177.87 L199.15,178.38 L199.96,178.88 L200.76,179.39 L201.56,179.90 L202.37,180.40 L203.17,180.91 L203.98,181.41 L204.78,181.92 L205.58,182.43 L206.39,182.93 L207.19,183.44 L208.00,183.94 L208.80,184.45 L209.60,184.96 L210.41,185.46 L211.21,185.97 L212.02,186.47 L212.82,186.98 L213.62,187.49 L214.43,187.99 L215.23,188.50 L216.04,189.00 L216.84,189.51 L217.64,190.02 L218.45,190.52 L219.25,191.03 L220.06,191.53 L220.86,192.04 L221.66,192.55 L222.47,193.05 L223.27,193.56 L224.08,194.06 L224.88,194.57 L225.68,195.08 L226.49,195.58 L227.29,196.09 L228.10,196.59 L228.90,197.10 L229.70,197.61 L230.51,198.11 L231.31,198.62 L232.12,199.12 L232.92,199.63 L233.72,200.14 L234.53,200.64 L235.33,201.15 L236.14,201.65 L236.94,202.16 L237.74,202.67 L238.55,203.17 L239.35,203.68 L240.16,204.18 L240.96,204.69 L241.76,205.20 L242.57,205.70 L243.37,206.21 L244.18,206.71 L244.98,207.22 L245.78,207.73 L246.59,208.23 L247.39,208.74 L248.20,209.24 L249.00,209.75 L249.80,210.26 L250.61,210.76 L251.41,211.27 L252.22,211.77 L253.02,212.28 L253.82,212.79 L254.63,213.29 L255.43,213.80 L256.24,214.30 L257.04,214.81 L257.84,215.32 L258.65,215.82 L259.45,216.33 L260.26,216.83 L261.06,217.34 L261.86,217.85 L262.67,218.35 L263.47,218.86 L264.28,219.36 L265.08,219.87 L265.88,220.38 L266.69,220.88 L267.49,221.39 L268.30,221.89 L269.10,222.40 L269.90,222.91 L270.71,223.41 L271.51,223.92 L272.32,224.42 L273.12,224.93 L273.92,225.44 L274.73,225.94 L275.53,226.45 L276.34,226.95 L277.14,227.46 L277.94,227.97 L278.75,228.47 L279.55,228.98 L280.36,229.48 L281.16,229.99 L281.96,230.50 L282.77,231.00 L283.57,231.51 L284.38,232.01 L285.18,232.52 L285.98,233.03 L286.79,233.53 L287.59,234.04 L288.40,234.54 L289.20,235.05 L290.00,235.56 L290.81,236.06 L291.61,236.57 L292.42,237.07 L293.22,237.58 L294.02,238.09 L294.83,238.59 L295.63,239.10 L296.44,239.60 L297.24,240.11 L298.04,240.62 L298.85,241.12 L299.65,241.12 L300.46,240.62 L301.26,240.11 L302.06,239.60 L302.87,239.10 L303.67,238.59 L304.48,238.09 L305.28,237.58 L306.08,237.07 L306.89,236.57 L307.69,236.06 L308.50,235.56 L309.30,235.05 L310.10,234.54 L310.91,234.04 L311.71,233.53 L312.52,233.03 L313.32,232.52 L314.12,232.01 L314.93,231.51 L315.73,231.00 L316.54,230.50 L317.34,229.99 L318.14,229.48 L318.95,228.98 L319.75,228.47 L320.56,227.97 L321.36,227.46 L322.16,226.95 L322.97,226.45 L323.77,225.94 L324.58,225.44 L325.38,224.93 L326.18,224.42 L326.99,223.92 L327.79,223.41 L328.60,222.91 L329.40,222.40 L330.20,221.89 L331.01,221.39 L331.81,220.88 L332.62,220.38 L333.42,219.87 L334.22,219.36 L335.03,218.86 L335.83,218.35 L336.64,217.85 L337.44,217.34 L338.24,216.83 L339.05,216.33 L339.85,215.82 L340.66,215.32 L341.46,214.81 L342.26,214.30 L343.07,213.80 L343.87,213.29 L344.68,212.79 L345.48,212.28 L346.28,211.77 L347.09,211.27 L347.89,210.76 L348.70,210.26 L349.50,209.75 L350.30,209.24 L351.11,208.74 L351.91,208.23 L352.72,207.73 L353.52,207.22 L354.32,206.71 L355.13,206.21 L355.93,205.70 L356.74,205.20 L357.54,204.69 L358.34,204.18 L359.15,203.68 L359.95,203.17 L360.76,202.67 L361.56,202.16 L362.36,201.65 L363.17,201.15 L363.97,200.64 L364.78,200.14 L365.58,199.63 L366.38,199.12 L367.19,198.62 L367.99,198.11 L368.80,197.61 L369.60,197.10 L370.40,196.59 L371.21,196.09 L372.01,195.58 L372.82,195.08 L373.62,194.57 L374.42,194.06 L375.23,193.56 L376.03,193.05 L376.84,192.55 L377.64,192.04 L378.44,191.53 L379.25,191.03 L380.05,190.52 L380.86,190.02 L381.66,189.51 L382.46,189.00 L383.27,188.50 L384.07,187.99 L384.88,187.49 L385.68,186.98 L386.48,186.47 L387.29,185.97 L388.09,185.46 L388.90,184.96 L389.70,184.45 L390.50,183.94 L391.31,183.44 L392.11,182.93 L392.92,182.43 L393.72,181.92 L394.52,181.41 L395.33,180.91 L396.13,180.40 L396.94,179.90 L397.74,179.39 L398.54,178.88 L399.35,178.38 L400.15,177.87 L400.96,177.37 L401.76,176.86 L402.56,176.35 L403.37,175.85 L404.17,175.34 L404.98,174.84 L405.78,174.33 L406.58,173.82 L407.39,173.32 L408.19,172.81 L409.00,172.31 L409.80,171.80 L410.60,171.29 L411.41,170.79 L412.21,170.28 L413.02,169.78 L413.82,169.27 L414.62,168.76 L415.43,168.26 L416.23,167.75 L417.04,167.25 L417.84,166.74 L418.64,166.23 L419.45,165.73 L420.25,165.22 L421.06,164.72 L421.86,164.21 L422.66,163.70 L423.47,163.20 L424.27,162.69 L425.08,162.19 L425.88,161.68 L426.68,161.17 L427.49,160.67 L428.29,160.16 L429.10,159.66 L429.90,159.15 L430.70,158.64 L431.51,158.14 L432.31,157.63 L433.12,157.13 L433.92,156.62 L434.72,156.11 L435.53,155.61 L436.33,155.10 L437.14,154.60 L437.94,154.09 L438.74,153.58 L439.55,153.08 L440.35,152.57 L441.16,152.07 L441.96,151.56 L442.76,151.05 L443.57,150.55 L444.37,150.04 L445.18,149.54 L445.98,149.03 L446.78,148.52 L447.59,148.02 L448.39,147.51 L449.20,147.01 L450.00,146.50\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#abs0clip)\"/><text x=\"374.62\" y=\"51.62\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"299.25\" cy=\"241.38\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"306.25\" y=\"234.38\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">V</text></svg></span><p>Bestäm ett funktionsuttryck på formen \\(f(x)=|x-a|+b\\).</p>",
    "s": "<p>Spetsen ligger i \\((1,-2)\\). För funktionen \\(f(x)=|x-a|+b\\) ligger spetsen i \\((a,b)\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=|x-1|-2}\\).</p>",
    "familj": "abs_graf_0"
  },
  {
    "id": "1.61",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös polynomekvationen</p><p>\\[x^{3} - 5 x^{2} - 4 x + 20=0.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera polynomet och använd nollproduktmetoden.</p><p>\\[x^{3} - 5 x^{2} - 4 x + 20=\\left(x - 5\\right) \\left(x - 2\\right) \\left(x + 2\\right).\\]</p><p>Alltså måste någon faktor vara noll.</p><p><strong>Svar:</strong> \\(x=-2,\\ 2,\\ 5\\).</p>",
    "familj": "polynom_nollprodukt_1"
  },
  {
    "id": "1.62",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Funktionen ges av \\(f(x)=-1(x-2)^2+4\\).</p><p>Bestäm symmetrilinje, extrempunkt och om extrempunkten är en maximi- eller minimipunkt.</p>",
    "s": "<p>Uttrycket är på formen \\(a(x-h)^2+k\\). Symmetrilinjen är därför \\(x=h\\), alltså \\(x=2\\).</p><p>Extrempunkten är \\((2,4)\\). Eftersom \\(a=-1\\) är negativ öppnar parabeln nedåt.</p><p><strong>Svar:</strong> symmetrilinje \\(x=2\\), maximipunkt \\((2,4)\\).</p>",
    "familj": "funktioner_kvadratkompletterad_1"
  },
  {
    "id": "1.63",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[\\frac{2}{x - 2}=\\frac{3}{x + 1}.\\]</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först otillåtna värden och multiplicera sedan ekvationen med en gemensam nämnare.</p><p>En gemensam nämnare är \\(x^{2} - x - 2\\). Efter multiplikation och förenkling fås</p><p>\\[- \\frac{3 x^{2}}{x + 1} + \\frac{2 x^{2}}{x - 2} + \\frac{3 x}{x + 1} - \\frac{2 x}{x - 2} + \\frac{6}{x + 1} - \\frac{4}{x - 2}=0.\\]</p><p>Det ger \\(x=8\\).</p><p><strong>Svar:</strong> \\(\\boxed{8}\\).</p>",
    "familj": "rationella_ekvation_1"
  },
  {
    "id": "1.64",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen definieras av</p><p>\\[f(x)=\\begin{cases}1x-2,&x&lt;1\\\\x^2+c,&x\\ge 1.\\end{cases}\\]</p><p>Bestäm \\(c\\) så att funktionen är kontinuerlig vid \\(x=1\\).</p>",
    "s": "<p>För kontinuitet måste vänster och höger funktionsvärde vara lika vid \\(x=1\\).</p><p>Vänsterledets värde är \\(1\\cdot1-2=-1\\). Högerledets värde är \\(1+c\\).</p><p>\\[1+c=-1\\Rightarrow c=-2.\\]</p><p><strong>Svar:</strong> \\(\\boxed{c=-2}\\).</p>",
    "familj": "grans_kontinuitet_styckvis_1"
  },
  {
    "id": "1.65",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till en absolutbeloppsfunktion.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"abs1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"abs1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"98.25\" y1=\"20\" x2=\"98.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"198.75\" y1=\"20\" x2=\"198.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"299.25\" y1=\"20\" x2=\"299.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"399.75\" y1=\"20\" x2=\"399.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"241.38\" x2=\"450\" y2=\"241.38\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"209.75\" x2=\"450\" y2=\"209.75\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"178.12\" x2=\"450\" y2=\"178.12\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"114.88\" x2=\"450\" y2=\"114.88\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"83.25\" x2=\"450\" y2=\"83.25\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"51.62\" x2=\"450\" y2=\"51.62\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"178.12\" x2=\"459\" y2=\"178.12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#abs1arr)\"/><line x1=\"48.00\" y1=\"174.12\" x2=\"48.00\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"98.25\" y1=\"174.12\" x2=\"98.25\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"98.25\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"148.50\" y1=\"174.12\" x2=\"148.50\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"198.75\" y1=\"174.12\" x2=\"198.75\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"198.75\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"299.25\" y1=\"174.12\" x2=\"299.25\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"299.25\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"349.50\" y1=\"174.12\" x2=\"349.50\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"399.75\" y1=\"174.12\" x2=\"399.75\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"399.75\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"174.12\" x2=\"450.00\" y2=\"182.12\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"195.12\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"170.12\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#abs1arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"241.38\" x2=\"253.00\" y2=\"241.38\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"244.88\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"209.75\" x2=\"253.00\" y2=\"209.75\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"213.25\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"146.50\" x2=\"253.00\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"114.88\" x2=\"253.00\" y2=\"114.88\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"118.38\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"83.25\" x2=\"253.00\" y2=\"83.25\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"86.75\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"51.62\" x2=\"253.00\" y2=\"51.62\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"55.12\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,83.25 L48.80,83.76 L49.61,84.26 L50.41,84.77 L51.22,85.27 L52.02,85.78 L52.82,86.29 L53.63,86.79 L54.43,87.30 L55.24,87.80 L56.04,88.31 L56.84,88.82 L57.65,89.32 L58.45,89.83 L59.26,90.33 L60.06,90.84 L60.86,91.35 L61.67,91.85 L62.47,92.36 L63.28,92.86 L64.08,93.37 L64.88,93.88 L65.69,94.38 L66.49,94.89 L67.30,95.39 L68.10,95.90 L68.90,96.41 L69.71,96.91 L70.51,97.42 L71.32,97.92 L72.12,98.43 L72.92,98.94 L73.73,99.44 L74.53,99.95 L75.34,100.45 L76.14,100.96 L76.94,101.47 L77.75,101.97 L78.55,102.48 L79.36,102.98 L80.16,103.49 L80.96,104.00 L81.77,104.50 L82.57,105.01 L83.38,105.51 L84.18,106.02 L84.98,106.53 L85.79,107.03 L86.59,107.54 L87.40,108.04 L88.20,108.55 L89.00,109.06 L89.81,109.56 L90.61,110.07 L91.42,110.57 L92.22,111.08 L93.02,111.59 L93.83,112.09 L94.63,112.60 L95.44,113.10 L96.24,113.61 L97.04,114.12 L97.85,114.62 L98.65,115.13 L99.46,115.63 L100.26,116.14 L101.06,116.65 L101.87,117.15 L102.67,117.66 L103.48,118.16 L104.28,118.67 L105.08,119.18 L105.89,119.68 L106.69,120.19 L107.50,120.69 L108.30,121.20 L109.10,121.71 L109.91,122.21 L110.71,122.72 L111.52,123.22 L112.32,123.73 L113.12,124.24 L113.93,124.74 L114.73,125.25 L115.54,125.75 L116.34,126.26 L117.14,126.77 L117.95,127.27 L118.75,127.78 L119.56,128.28 L120.36,128.79 L121.16,129.30 L121.97,129.80 L122.77,130.31 L123.58,130.81 L124.38,131.32 L125.18,131.83 L125.99,132.33 L126.79,132.84 L127.60,133.34 L128.40,133.85 L129.20,134.36 L130.01,134.86 L130.81,135.37 L131.62,135.87 L132.42,136.38 L133.22,136.89 L134.03,137.39 L134.83,137.90 L135.64,138.40 L136.44,138.91 L137.24,139.42 L138.05,139.92 L138.85,140.43 L139.66,140.93 L140.46,141.44 L141.26,141.95 L142.07,142.45 L142.87,142.96 L143.68,143.46 L144.48,143.97 L145.28,144.48 L146.09,144.98 L146.89,145.49 L147.70,145.99 L148.50,146.50 L149.30,145.99 L150.11,145.49 L150.91,144.98 L151.72,144.48 L152.52,143.97 L153.32,143.46 L154.13,142.96 L154.93,142.45 L155.74,141.95 L156.54,141.44 L157.34,140.93 L158.15,140.43 L158.95,139.92 L159.76,139.42 L160.56,138.91 L161.36,138.40 L162.17,137.90 L162.97,137.39 L163.78,136.89 L164.58,136.38 L165.38,135.87 L166.19,135.37 L166.99,134.86 L167.80,134.36 L168.60,133.85 L169.40,133.34 L170.21,132.84 L171.01,132.33 L171.82,131.83 L172.62,131.32 L173.42,130.81 L174.23,130.31 L175.03,129.80 L175.84,129.30 L176.64,128.79 L177.44,128.28 L178.25,127.78 L179.05,127.27 L179.86,126.77 L180.66,126.26 L181.46,125.75 L182.27,125.25 L183.07,124.74 L183.88,124.24 L184.68,123.73 L185.48,123.22 L186.29,122.72 L187.09,122.21 L187.90,121.71 L188.70,121.20 L189.50,120.69 L190.31,120.19 L191.11,119.68 L191.92,119.18 L192.72,118.67 L193.52,118.16 L194.33,117.66 L195.13,117.15 L195.94,116.65 L196.74,116.14 L197.54,115.63 L198.35,115.13 L199.15,114.62 L199.96,114.12 L200.76,113.61 L201.56,113.10 L202.37,112.60 L203.17,112.09 L203.98,111.59 L204.78,111.08 L205.58,110.57 L206.39,110.07 L207.19,109.56 L208.00,109.06 L208.80,108.55 L209.60,108.04 L210.41,107.54 L211.21,107.03 L212.02,106.53 L212.82,106.02 L213.62,105.51 L214.43,105.01 L215.23,104.50 L216.04,104.00 L216.84,103.49 L217.64,102.98 L218.45,102.48 L219.25,101.97 L220.06,101.47 L220.86,100.96 L221.66,100.45 L222.47,99.95 L223.27,99.44 L224.08,98.94 L224.88,98.43 L225.68,97.92 L226.49,97.42 L227.29,96.91 L228.10,96.41 L228.90,95.90 L229.70,95.39 L230.51,94.89 L231.31,94.38 L232.12,93.88 L232.92,93.37 L233.72,92.86 L234.53,92.36 L235.33,91.85 L236.14,91.35 L236.94,90.84 L237.74,90.33 L238.55,89.83 L239.35,89.32 L240.16,88.82 L240.96,88.31 L241.76,87.80 L242.57,87.30 L243.37,86.79 L244.18,86.29 L244.98,85.78 L245.78,85.27 L246.59,84.77 L247.39,84.26 L248.20,83.76 L249.00,83.25 L249.80,82.74 L250.61,82.24 L251.41,81.73 L252.22,81.23 L253.02,80.72 L253.82,80.21 L254.63,79.71 L255.43,79.20 L256.24,78.70 L257.04,78.19 L257.84,77.68 L258.65,77.18 L259.45,76.67 L260.26,76.17 L261.06,75.66 L261.86,75.15 L262.67,74.65 L263.47,74.14 L264.28,73.64 L265.08,73.13 L265.88,72.62 L266.69,72.12 L267.49,71.61 L268.30,71.11 L269.10,70.60 L269.90,70.09 L270.71,69.59 L271.51,69.08 L272.32,68.58 L273.12,68.07 L273.92,67.56 L274.73,67.06 L275.53,66.55 L276.34,66.05 L277.14,65.54 L277.94,65.03 L278.75,64.53 L279.55,64.02 L280.36,63.52 L281.16,63.01 L281.96,62.50 L282.77,62.00 L283.57,61.49 L284.38,60.99 L285.18,60.48 L285.98,59.97 L286.79,59.47 L287.59,58.96 L288.40,58.46 L289.20,57.95 L290.00,57.44 L290.81,56.94 L291.61,56.43 L292.42,55.93 L293.22,55.42 L294.02,54.91 L294.83,54.41 L295.63,53.90 L296.44,53.40 L297.24,52.89 L298.04,52.38 L298.85,51.88 L299.65,51.37 L300.46,50.87 L301.26,50.36 L302.06,49.85 L302.87,49.35 L303.67,48.84 L304.48,48.34 L305.28,47.83 L306.08,47.32 L306.89,46.82 L307.69,46.31 L308.50,45.81 L309.30,45.30 L310.10,44.79 L310.91,44.29 L311.71,43.78 L312.52,43.28 L313.32,42.77 L314.12,42.26 L314.93,41.76 L315.73,41.25 L316.54,40.75 L317.34,40.24 L318.14,39.73 L318.95,39.23 L319.75,38.72 L320.56,38.22 L321.36,37.71 L322.16,37.20 L322.97,36.70 L323.77,36.19 L324.58,35.69 L325.38,35.18 L326.18,34.67 L326.99,34.17 L327.79,33.66 L328.60,33.16 L329.40,32.65 L330.20,32.14 L331.01,31.64 L331.81,31.13 L332.62,30.63 L333.42,30.12 L334.22,29.61 L335.03,29.11 L335.83,28.60 L336.64,28.10 L337.44,27.59 L338.24,27.08 L339.05,26.58 L339.85,26.07 L340.66,25.57 L341.46,25.06 L342.26,24.55 L343.07,24.05 L343.87,23.54 L344.68,23.04 L345.48,22.53 L346.28,22.02 L347.09,21.52 L347.89,21.01 L348.70,20.51 L349.50,20.00 L350.30,19.49 L351.11,18.99 L351.91,18.48 L352.72,17.98 L353.52,17.47 L354.32,16.96 L355.13,16.46 L355.93,15.95 L356.74,15.45 L357.54,14.94 L358.34,14.43 L359.15,13.93 L359.95,13.42 L360.76,12.92 L361.56,12.41 L362.36,11.90 L363.17,11.40 L363.97,10.89 L364.78,10.39 L365.58,9.88 L366.38,9.37 L367.19,8.87 L367.99,8.36 L368.80,7.86 L369.60,7.35 L370.40,6.84 L371.21,6.34 L372.01,5.83 L372.82,5.33 L373.62,4.82 L374.42,4.31 L375.23,3.81 L376.03,3.30 L376.84,2.80 L377.64,2.29 L378.44,1.78 L379.25,1.28 L380.05,0.77 L380.86,0.27 L381.66,-0.24 L382.46,-0.75 L383.27,-1.25 L384.07,-1.76 L384.88,-2.26 L385.68,-2.77 L386.48,-3.28 L387.29,-3.78 L388.09,-4.29 L388.90,-4.79 L389.70,-5.30 L390.50,-5.81 L391.31,-6.31 L392.11,-6.82 L392.92,-7.32 L393.72,-7.83 L394.52,-8.34 L395.33,-8.84 L396.13,-9.35 L396.94,-9.85 L397.74,-10.36 L398.54,-10.87 L399.35,-11.37 L400.15,-11.88 L400.96,-12.38 L401.76,-12.89 L402.56,-13.40 L403.37,-13.90 L404.17,-14.41 L404.98,-14.91 L405.78,-15.42 L406.58,-15.93 L407.39,-16.43 L408.19,-16.94 L409.00,-17.44 L409.80,-17.95 L410.60,-18.46 L411.41,-18.96 L412.21,-19.47 L413.02,-19.97 L413.82,-20.48 L414.62,-20.99 L415.43,-21.49 L416.23,-22.00 L417.04,-22.50 L417.84,-23.01 L418.64,-23.52 L419.45,-24.02 L420.25,-24.53 L421.06,-25.03 L421.86,-25.54 L422.66,-26.05 L423.47,-26.55 L424.27,-27.06 L425.08,-27.56 L425.88,-28.07 L426.68,-28.58 L427.49,-29.08 L428.29,-29.59 L429.10,-30.09 L429.90,-30.60 L430.70,-31.11 L431.51,-31.61 L432.31,-32.12 L433.12,-32.62 L433.92,-33.13 L434.72,-33.64 L435.53,-34.14 L436.33,-34.65 L437.14,-35.15 L437.94,-35.66 L438.74,-36.17 L439.55,-36.67 L440.35,-37.18 L441.16,-37.68 L441.96,-38.19 L442.76,-38.70 L443.57,-39.20 L444.37,-39.71 L445.18,-40.21 L445.98,-40.72 L446.78,-41.23 L447.59,-41.73 L448.39,-42.24 L449.20,-42.74 L450.00,-43.25\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#abs1clip)\"/><text x=\"374.62\" y=\"51.62\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"148.50\" cy=\"146.50\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"155.50\" y=\"139.50\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">V</text></svg></span><p>Bestäm ett funktionsuttryck på formen \\(f(x)=|x-a|+b\\).</p>",
    "s": "<p>Spetsen ligger i \\((-2,1)\\). För funktionen \\(f(x)=|x-a|+b\\) ligger spetsen i \\((a,b)\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=|x--2|+1}\\).</p>",
    "familj": "abs_graf_1"
  },
  {
    "id": "1.66",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös polynomekvationen</p><p>\\[x^{3} + 2 x^{2} - 11 x - 12=0.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera polynomet och använd nollproduktmetoden.</p><p>\\[x^{3} + 2 x^{2} - 11 x - 12=\\left(x - 3\\right) \\left(x + 1\\right) \\left(x + 4\\right).\\]</p><p>Alltså måste någon faktor vara noll.</p><p><strong>Svar:</strong> \\(x=-4,\\ -1,\\ 3\\).</p>",
    "familj": "polynom_nollprodukt_2"
  },
  {
    "id": "1.67",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Funktionen ges av \\(f(x)=3(x--2)^2+1\\).</p><p>Bestäm symmetrilinje, extrempunkt och om extrempunkten är en maximi- eller minimipunkt.</p>",
    "s": "<p>Uttrycket är på formen \\(a(x-h)^2+k\\). Symmetrilinjen är därför \\(x=h\\), alltså \\(x=-2\\).</p><p>Extrempunkten är \\((-2,1)\\). Eftersom \\(a=3\\) är positiv öppnar parabeln uppåt.</p><p><strong>Svar:</strong> symmetrilinje \\(x=-2\\), minimipunkt \\((-2,1)\\).</p>",
    "familj": "funktioner_kvadratkompletterad_2"
  },
  {
    "id": "1.68",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[\\frac{x + 1}{x - 1}=2.\\]</p>",
    "s": "<p><strong>Metod:</strong> Bestäm först otillåtna värden och multiplicera sedan ekvationen med en gemensam nämnare.</p><p>En gemensam nämnare är \\(x - 1\\). Efter multiplikation och förenkling fås</p><p>\\[\\frac{x^{2}}{x - 1} - 2 x + 2 - \\frac{1}{x - 1}=0.\\]</p><p>Det ger \\(x=3\\).</p><p><strong>Svar:</strong> \\(\\boxed{3}\\).</p>",
    "familj": "rationella_ekvation_2"
  },
  {
    "id": "1.69",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Figuren visar en funktion med ett hål i grafen vid \\(x=1\\). Den fyllda punkten visar funktionens faktiska värde där.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"ghole0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"ghole0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"459\" y2=\"236.86\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ghole0arr)\"/><line x1=\"48.00\" y1=\"232.86\" x2=\"48.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"232.86\" x2=\"115.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"232.86\" x2=\"182.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"232.86\" x2=\"316.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"232.86\" x2=\"383.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"232.86\" x2=\"450.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"228.86\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ghole0arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"200.71\" x2=\"253.00\" y2=\"200.71\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"164.57\" x2=\"253.00\" y2=\"164.57\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"128.43\" x2=\"253.00\" y2=\"128.43\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"92.29\" x2=\"253.00\" y2=\"92.29\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"56.14\" x2=\"253.00\" y2=\"56.14\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,273.00 L48.80,272.57 L49.61,272.13 L50.41,271.70 L51.22,271.27 L52.02,270.83 L52.82,270.40 L53.63,269.96 L54.43,269.53 L55.24,269.10 L56.04,268.66 L56.84,268.23 L57.65,267.80 L58.45,267.36 L59.26,266.93 L60.06,266.49 L60.86,266.06 L61.67,265.63 L62.47,265.19 L63.28,264.76 L64.08,264.33 L64.88,263.89 L65.69,263.46 L66.49,263.02 L67.30,262.59 L68.10,262.16 L68.90,261.72 L69.71,261.29 L70.51,260.86 L71.32,260.42 L72.12,259.99 L72.92,259.55 L73.73,259.12 L74.53,258.69 L75.34,258.25 L76.14,257.82 L76.94,257.39 L77.75,256.95 L78.55,256.52 L79.36,256.09 L80.16,255.65 L80.96,255.22 L81.77,254.78 L82.57,254.35 L83.38,253.92 L84.18,253.48 L84.98,253.05 L85.79,252.62 L86.59,252.18 L87.40,251.75 L88.20,251.31 L89.00,250.88 L89.81,250.45 L90.61,250.01 L91.42,249.58 L92.22,249.15 L93.02,248.71 L93.83,248.28 L94.63,247.84 L95.44,247.41 L96.24,246.98 L97.04,246.54 L97.85,246.11 L98.65,245.68 L99.46,245.24 L100.26,244.81 L101.06,244.37 L101.87,243.94 L102.67,243.51 L103.48,243.07 L104.28,242.64 L105.08,242.21 L105.89,241.77 L106.69,241.34 L107.50,240.91 L108.30,240.47 L109.10,240.04 L109.91,239.60 L110.71,239.17 L111.52,238.74 L112.32,238.30 L113.12,237.87 L113.93,237.44 L114.73,237.00 L115.54,236.57 L116.34,236.13 L117.14,235.70 L117.95,235.27 L118.75,234.83 L119.56,234.40 L120.36,233.97 L121.16,233.53 L121.97,233.10 L122.77,232.66 L123.58,232.23 L124.38,231.80 L125.18,231.36 L125.99,230.93 L126.79,230.50 L127.60,230.06 L128.40,229.63 L129.20,229.19 L130.01,228.76 L130.81,228.33 L131.62,227.89 L132.42,227.46 L133.22,227.03 L134.03,226.59 L134.83,226.16 L135.64,225.73 L136.44,225.29 L137.24,224.86 L138.05,224.42 L138.85,223.99 L139.66,223.56 L140.46,223.12 L141.26,222.69 L142.07,222.26 L142.87,221.82 L143.68,221.39 L144.48,220.95 L145.28,220.52 L146.09,220.09 L146.89,219.65 L147.70,219.22 L148.50,218.79 L149.30,218.35 L150.11,217.92 L150.91,217.48 L151.72,217.05 L152.52,216.62 L153.32,216.18 L154.13,215.75 L154.93,215.32 L155.74,214.88 L156.54,214.45 L157.34,214.01 L158.15,213.58 L158.95,213.15 L159.76,212.71 L160.56,212.28 L161.36,211.85 L162.17,211.41 L162.97,210.98 L163.78,210.55 L164.58,210.11 L165.38,209.68 L166.19,209.24 L166.99,208.81 L167.80,208.38 L168.60,207.94 L169.40,207.51 L170.21,207.08 L171.01,206.64 L171.82,206.21 L172.62,205.77 L173.42,205.34 L174.23,204.91 L175.03,204.47 L175.84,204.04 L176.64,203.61 L177.44,203.17 L178.25,202.74 L179.05,202.30 L179.86,201.87 L180.66,201.44 L181.46,201.00 L182.27,200.57 L183.07,200.14 L183.88,199.70 L184.68,199.27 L185.48,198.83 L186.29,198.40 L187.09,197.97 L187.90,197.53 L188.70,197.10 L189.50,196.67 L190.31,196.23 L191.11,195.80 L191.92,195.37 L192.72,194.93 L193.52,194.50 L194.33,194.06 L195.13,193.63 L195.94,193.20 L196.74,192.76 L197.54,192.33 L198.35,191.90 L199.15,191.46 L199.96,191.03 L200.76,190.59 L201.56,190.16 L202.37,189.73 L203.17,189.29 L203.98,188.86 L204.78,188.43 L205.58,187.99 L206.39,187.56 L207.19,187.12 L208.00,186.69 L208.80,186.26 L209.60,185.82 L210.41,185.39 L211.21,184.96 L212.02,184.52 L212.82,184.09 L213.62,183.65 L214.43,183.22 L215.23,182.79 L216.04,182.35 L216.84,181.92 L217.64,181.49 L218.45,181.05 L219.25,180.62 L220.06,180.19 L220.86,179.75 L221.66,179.32 L222.47,178.88 L223.27,178.45 L224.08,178.02 L224.88,177.58 L225.68,177.15 L226.49,176.72 L227.29,176.28 L228.10,175.85 L228.90,175.41 L229.70,174.98 L230.51,174.55 L231.31,174.11 L232.12,173.68 L232.92,173.25 L233.72,172.81 L234.53,172.38 L235.33,171.94 L236.14,171.51 L236.94,171.08 L237.74,170.64 L238.55,170.21 L239.35,169.78 L240.16,169.34 L240.96,168.91 L241.76,168.47 L242.57,168.04 L243.37,167.61 L244.18,167.17 L244.98,166.74 L245.78,166.31 L246.59,165.87 L247.39,165.44 L248.20,165.01 L249.00,164.57 L249.80,164.14 L250.61,163.70 L251.41,163.27 L252.22,162.84 L253.02,162.40 L253.82,161.97 L254.63,161.54 L255.43,161.10 L256.24,160.67 L257.04,160.23 L257.84,159.80 L258.65,159.37 L259.45,158.93 L260.26,158.50 L261.06,158.07 L261.86,157.63 L262.67,157.20 L263.47,156.76 L264.28,156.33 L265.08,155.90 L265.88,155.46 L266.69,155.03 L267.49,154.60 L268.30,154.16 L269.10,153.73 L269.90,153.29 L270.71,152.86 L271.51,152.43 L272.32,151.99 L273.12,151.56 L273.92,151.13 L274.73,150.69 L275.53,150.26 L276.34,149.83 L277.14,149.39 L277.94,148.96 L278.75,148.52 L279.55,148.09 L280.36,147.66 L281.16,147.22 L281.96,146.79 L282.77,146.36 L283.57,145.92 L284.38,145.49 L285.18,145.05 L285.98,144.62 L286.79,144.19 L287.59,143.75 L288.40,143.32 L289.20,142.89 L290.00,142.45 L290.81,142.02 L291.61,141.58 L292.42,141.15 L293.22,140.72 L294.02,140.28 L294.83,139.85 L295.63,139.42 L296.44,138.98 L297.24,138.55 L298.04,138.11 L298.85,137.68 L299.65,137.25 L300.46,136.81 L301.26,136.38 L302.06,135.95 L302.87,135.51 L303.67,135.08 L304.48,134.65 L305.28,134.21 L306.08,133.78 L306.89,133.34 L307.69,132.91 L308.50,132.48 L309.30,132.04 L310.10,131.61 L310.91,131.18 L311.71,130.74 L312.52,130.31 L313.32,129.87 L314.12,129.44 L314.93,129.01 L315.73,128.57 L316.54,128.14 L317.34,127.71 L318.14,127.27 L318.95,126.84 L319.75,126.40 L320.56,125.97 L321.36,125.54 L322.16,125.10 L322.97,124.67 L323.77,124.24 L324.58,123.80 L325.38,123.37 L326.18,122.93 L326.99,122.50 L327.79,122.07 L328.60,121.63 L329.40,121.20 L330.20,120.77 L331.01,120.33 L331.81,119.90 L332.62,119.47 L333.42,119.03 L334.22,118.60 L335.03,118.16 L335.83,117.73 L336.64,117.30 L337.44,116.86 L338.24,116.43 L339.05,116.00 L339.85,115.56 L340.66,115.13 L341.46,114.69 L342.26,114.26 L343.07,113.83 L343.87,113.39 L344.68,112.96 L345.48,112.53 L346.28,112.09 L347.09,111.66 L347.89,111.22 L348.70,110.79 L349.50,110.36 L350.30,109.92 L351.11,109.49 L351.91,109.06 L352.72,108.62 L353.52,108.19 L354.32,107.75 L355.13,107.32 L355.93,106.89 L356.74,106.45 L357.54,106.02 L358.34,105.59 L359.15,105.15 L359.95,104.72 L360.76,104.29 L361.56,103.85 L362.36,103.42 L363.17,102.98 L363.97,102.55 L364.78,102.12 L365.58,101.68 L366.38,101.25 L367.19,100.82 L367.99,100.38 L368.80,99.95 L369.60,99.51 L370.40,99.08 L371.21,98.65 L372.01,98.21 L372.82,97.78 L373.62,97.35 L374.42,96.91 L375.23,96.48 L376.03,96.04 L376.84,95.61 L377.64,95.18 L378.44,94.74 L379.25,94.31 L380.05,93.88 L380.86,93.44 L381.66,93.01 L382.46,92.57 L383.27,92.14 L384.07,91.71 L384.88,91.27 L385.68,90.84 L386.48,90.41 L387.29,89.97 L388.09,89.54 L388.90,89.11 L389.70,88.67 L390.50,88.24 L391.31,87.80 L392.11,87.37 L392.92,86.94 L393.72,86.50 L394.52,86.07 L395.33,85.64 L396.13,85.20 L396.94,84.77 L397.74,84.33 L398.54,83.90 L399.35,83.47 L400.15,83.03 L400.96,82.60 L401.76,82.17 L402.56,81.73 L403.37,81.30 L404.17,80.86 L404.98,80.43 L405.78,80.00 L406.58,79.56 L407.39,79.13 L408.19,78.70 L409.00,78.26 L409.80,77.83 L410.60,77.39 L411.41,76.96 L412.21,76.53 L413.02,76.09 L413.82,75.66 L414.62,75.23 L415.43,74.79 L416.23,74.36 L417.04,73.93 L417.84,73.49 L418.64,73.06 L419.45,72.62 L420.25,72.19 L421.06,71.76 L421.86,71.32 L422.66,70.89 L423.47,70.46 L424.27,70.02 L425.08,69.59 L425.88,69.15 L426.68,68.72 L427.49,68.29 L428.29,67.85 L429.10,67.42 L429.90,66.99 L430.70,66.55 L431.51,66.12 L432.31,65.68 L433.12,65.25 L433.92,64.82 L434.72,64.38 L435.53,63.95 L436.33,63.52 L437.14,63.08 L437.94,62.65 L438.74,62.21 L439.55,61.78 L440.35,61.35 L441.16,60.91 L441.96,60.48 L442.76,60.05 L443.57,59.61 L444.37,59.18 L445.18,58.75 L445.98,58.31 L446.78,57.88 L447.59,57.44 L448.39,57.01 L449.20,56.58 L450.00,56.14\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#ghole0clip)\"/><text x=\"396.40\" y=\"74.21\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"316.00\" cy=\"200.71\" r=\"4.2\" fill=\"#2E7D52\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"323.00\" y=\"193.71\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text><circle cx=\"316.00\" cy=\"128.43\" r=\"5\" fill=\"#fff\" stroke=\"#B43123\" stroke-width=\"2\"/></svg></span><p>a) Bestäm \\(\\lim_{x\\to 1} f(x)\\).<br>b) Bestäm \\(f(1)\\).<br>c) Är funktionen kontinuerlig vid \\(x=1\\)?</p>",
    "s": "<p><strong>a)</strong> När \\(x\\) närmar sig \\(1\\) från båda håll närmar sig grafen \\(3\\), alltså är gränsvärdet \\(3\\).</p><p><strong>b)</strong> Den fyllda punkten ligger på y-värdet \\(1\\), alltså \\(f(1)=1\\).</p><p><strong>c)</strong> Nej. För kontinuitet krävs att gränsvärdet är lika med funktionsvärdet, men \\(3\\neq 1\\).</p>",
    "familj": "grans_graf_hole_0"
  },
  {
    "id": "1.70",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Skriv funktionen \\(f(x)=|2x-6|\\) utan absolutbelopp som en styckvis definierad funktion.</p>",
    "s": "<p>Tecknet inuti absolutbeloppet byts när \\(2x-6=0\\), alltså vid \\(x=3\\).</p><p>För \\(x\\ge3\\) är \\(2x-6\\ge0\\), så \\(f(x)=2x-6\\).</p><p>För \\(x&lt;3\\) är \\(2x-6&lt;0\\), så \\(f(x)=-(2x-6)=-2x+6\\).</p><p><strong>Svar:</strong></p><p>\\[f(x)=\\begin{cases}-2x+6,&x&lt;3\\\\2x-6,&x\\ge3.\\end{cases}\\]</p>",
    "familj": "abs_styckvis"
  },
  {
    "id": "1.71",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös polynomekvationen</p><p>\\[x^{3} - 9 x^{2} + 20 x - 12=0.\\]</p>",
    "s": "<p><strong>Metod:</strong> Faktorisera polynomet och använd nollproduktmetoden.</p><p>\\[x^{3} - 9 x^{2} + 20 x - 12=\\left(x - 6\\right) \\left(x - 2\\right) \\left(x - 1\\right).\\]</p><p>Alltså måste någon faktor vara noll.</p><p><strong>Svar:</strong> \\(x=1,\\ 2,\\ 6\\).</p>",
    "familj": "polynom_nollprodukt_3"
  },
  {
    "id": "1.72",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>För en andragradsfunktion gäller \\(f(1)=4\\), \\(f(3)=4\\) och \\(f(2)=1\\). Bestäm ett funktionsuttryck för \\(f\\).</p>",
    "s": "<p>Eftersom \\(f(1)=f(3)\\) och punkterna ligger lika långt från \\(x=2\\), är symmetrilinjen \\(x=2\\). Dessutom är \\(f(2)=1\\), så vi kan skriva</p><p>\\[f(x)=a(x-2)^2+1.\\]</p><p>Använd \\(f(1)=4\\):</p><p>\\[4=a(1-2)^2+1=a+1\\]</p><p>så \\(a=3\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=3(x-2)^2+1}\\).</p>",
    "familj": "funktioner_symmetri_bestam"
  },
  {
    "id": "1.73",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En bilresa på 240 km kan beskrivas med modellen \\(T(v)=\\frac{240}{v}\\).</p><p>a) Förklara varför \\(v=0\\) inte tillhör definitionsmängden i modellen.<br>b) Bestäm \\(v\\) om \\(T=4\\).<br>c) Beskriv vad som händer med \\(T(v)\\) när \\(v\\) blir mycket stor.</p>",
    "s": "<p><strong>a)</strong> Division med noll är inte definierad, och i sammanhanget skulle noll medelhastigheten v km/h dessutom innebära att förloppet aldrig blir klart.</p><p><strong>b)</strong> \\[240/v=4\\Rightarrow v=6.\\]</p><p><strong>c)</strong> När \\(v\\) ökar blir kvoten \\(240/v\\) allt mindre och närmar sig 0.</p><p><strong>Svar:</strong> \\(v=6\\).</p>",
    "familj": "rationella_modell_0"
  },
  {
    "id": "1.74",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Figuren visar en funktion med ett hål i grafen vid \\(x=-1\\). Den fyllda punkten visar funktionens faktiska värde där.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"ghole1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"ghole1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"459\" y2=\"236.86\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ghole1arr)\"/><line x1=\"48.00\" y1=\"232.86\" x2=\"48.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"232.86\" x2=\"115.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"232.86\" x2=\"182.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"232.86\" x2=\"316.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"232.86\" x2=\"383.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"232.86\" x2=\"450.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"228.86\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ghole1arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"200.71\" x2=\"253.00\" y2=\"200.71\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"164.57\" x2=\"253.00\" y2=\"164.57\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"128.43\" x2=\"253.00\" y2=\"128.43\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"92.29\" x2=\"253.00\" y2=\"92.29\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"56.14\" x2=\"253.00\" y2=\"56.14\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,236.86 L48.80,236.42 L49.61,235.99 L50.41,235.56 L51.22,235.12 L52.02,234.69 L52.82,234.25 L53.63,233.82 L54.43,233.39 L55.24,232.95 L56.04,232.52 L56.84,232.09 L57.65,231.65 L58.45,231.22 L59.26,230.79 L60.06,230.35 L60.86,229.92 L61.67,229.48 L62.47,229.05 L63.28,228.62 L64.08,228.18 L64.88,227.75 L65.69,227.32 L66.49,226.88 L67.30,226.45 L68.10,226.01 L68.90,225.58 L69.71,225.15 L70.51,224.71 L71.32,224.28 L72.12,223.85 L72.92,223.41 L73.73,222.98 L74.53,222.54 L75.34,222.11 L76.14,221.68 L76.94,221.24 L77.75,220.81 L78.55,220.38 L79.36,219.94 L80.16,219.51 L80.96,219.07 L81.77,218.64 L82.57,218.21 L83.38,217.77 L84.18,217.34 L84.98,216.91 L85.79,216.47 L86.59,216.04 L87.40,215.61 L88.20,215.17 L89.00,214.74 L89.81,214.30 L90.61,213.87 L91.42,213.44 L92.22,213.00 L93.02,212.57 L93.83,212.14 L94.63,211.70 L95.44,211.27 L96.24,210.83 L97.04,210.40 L97.85,209.97 L98.65,209.53 L99.46,209.10 L100.26,208.67 L101.06,208.23 L101.87,207.80 L102.67,207.36 L103.48,206.93 L104.28,206.50 L105.08,206.06 L105.89,205.63 L106.69,205.20 L107.50,204.76 L108.30,204.33 L109.10,203.89 L109.91,203.46 L110.71,203.03 L111.52,202.59 L112.32,202.16 L113.12,201.73 L113.93,201.29 L114.73,200.86 L115.54,200.43 L116.34,199.99 L117.14,199.56 L117.95,199.12 L118.75,198.69 L119.56,198.26 L120.36,197.82 L121.16,197.39 L121.97,196.96 L122.77,196.52 L123.58,196.09 L124.38,195.65 L125.18,195.22 L125.99,194.79 L126.79,194.35 L127.60,193.92 L128.40,193.49 L129.20,193.05 L130.01,192.62 L130.81,192.18 L131.62,191.75 L132.42,191.32 L133.22,190.88 L134.03,190.45 L134.83,190.02 L135.64,189.58 L136.44,189.15 L137.24,188.71 L138.05,188.28 L138.85,187.85 L139.66,187.41 L140.46,186.98 L141.26,186.55 L142.07,186.11 L142.87,185.68 L143.68,185.25 L144.48,184.81 L145.28,184.38 L146.09,183.94 L146.89,183.51 L147.70,183.08 L148.50,182.64 L149.30,182.21 L150.11,181.78 L150.91,181.34 L151.72,180.91 L152.52,180.47 L153.32,180.04 L154.13,179.61 L154.93,179.17 L155.74,178.74 L156.54,178.31 L157.34,177.87 L158.15,177.44 L158.95,177.00 L159.76,176.57 L160.56,176.14 L161.36,175.70 L162.17,175.27 L162.97,174.84 L163.78,174.40 L164.58,173.97 L165.38,173.53 L166.19,173.10 L166.99,172.67 L167.80,172.23 L168.60,171.80 L169.40,171.37 L170.21,170.93 L171.01,170.50 L171.82,170.07 L172.62,169.63 L173.42,169.20 L174.23,168.76 L175.03,168.33 L175.84,167.90 L176.64,167.46 L177.44,167.03 L178.25,166.60 L179.05,166.16 L179.86,165.73 L180.66,165.29 L181.46,164.86 L182.27,164.43 L183.07,163.99 L183.88,163.56 L184.68,163.13 L185.48,162.69 L186.29,162.26 L187.09,161.82 L187.90,161.39 L188.70,160.96 L189.50,160.52 L190.31,160.09 L191.11,159.66 L191.92,159.22 L192.72,158.79 L193.52,158.35 L194.33,157.92 L195.13,157.49 L195.94,157.05 L196.74,156.62 L197.54,156.19 L198.35,155.75 L199.15,155.32 L199.96,154.89 L200.76,154.45 L201.56,154.02 L202.37,153.58 L203.17,153.15 L203.98,152.72 L204.78,152.28 L205.58,151.85 L206.39,151.42 L207.19,150.98 L208.00,150.55 L208.80,150.11 L209.60,149.68 L210.41,149.25 L211.21,148.81 L212.02,148.38 L212.82,147.95 L213.62,147.51 L214.43,147.08 L215.23,146.64 L216.04,146.21 L216.84,145.78 L217.64,145.34 L218.45,144.91 L219.25,144.48 L220.06,144.04 L220.86,143.61 L221.66,143.17 L222.47,142.74 L223.27,142.31 L224.08,141.87 L224.88,141.44 L225.68,141.01 L226.49,140.57 L227.29,140.14 L228.10,139.71 L228.90,139.27 L229.70,138.84 L230.51,138.40 L231.31,137.97 L232.12,137.54 L232.92,137.10 L233.72,136.67 L234.53,136.24 L235.33,135.80 L236.14,135.37 L236.94,134.93 L237.74,134.50 L238.55,134.07 L239.35,133.63 L240.16,133.20 L240.96,132.77 L241.76,132.33 L242.57,131.90 L243.37,131.46 L244.18,131.03 L244.98,130.60 L245.78,130.16 L246.59,129.73 L247.39,129.30 L248.20,128.86 L249.00,128.43 L249.80,127.99 L250.61,127.56 L251.41,127.13 L252.22,126.69 L253.02,126.26 L253.82,125.83 L254.63,125.39 L255.43,124.96 L256.24,124.53 L257.04,124.09 L257.84,123.66 L258.65,123.22 L259.45,122.79 L260.26,122.36 L261.06,121.92 L261.86,121.49 L262.67,121.06 L263.47,120.62 L264.28,120.19 L265.08,119.75 L265.88,119.32 L266.69,118.89 L267.49,118.45 L268.30,118.02 L269.10,117.59 L269.90,117.15 L270.71,116.72 L271.51,116.28 L272.32,115.85 L273.12,115.42 L273.92,114.98 L274.73,114.55 L275.53,114.12 L276.34,113.68 L277.14,113.25 L277.94,112.81 L278.75,112.38 L279.55,111.95 L280.36,111.51 L281.16,111.08 L281.96,110.65 L282.77,110.21 L283.57,109.78 L284.38,109.35 L285.18,108.91 L285.98,108.48 L286.79,108.04 L287.59,107.61 L288.40,107.18 L289.20,106.74 L290.00,106.31 L290.81,105.88 L291.61,105.44 L292.42,105.01 L293.22,104.57 L294.02,104.14 L294.83,103.71 L295.63,103.27 L296.44,102.84 L297.24,102.41 L298.04,101.97 L298.85,101.54 L299.65,101.10 L300.46,100.67 L301.26,100.24 L302.06,99.80 L302.87,99.37 L303.67,98.94 L304.48,98.50 L305.28,98.07 L306.08,97.63 L306.89,97.20 L307.69,96.77 L308.50,96.33 L309.30,95.90 L310.10,95.47 L310.91,95.03 L311.71,94.60 L312.52,94.17 L313.32,93.73 L314.12,93.30 L314.93,92.86 L315.73,92.43 L316.54,92.00 L317.34,91.56 L318.14,91.13 L318.95,90.70 L319.75,90.26 L320.56,89.83 L321.36,89.39 L322.16,88.96 L322.97,88.53 L323.77,88.09 L324.58,87.66 L325.38,87.23 L326.18,86.79 L326.99,86.36 L327.79,85.92 L328.60,85.49 L329.40,85.06 L330.20,84.62 L331.01,84.19 L331.81,83.76 L332.62,83.32 L333.42,82.89 L334.22,82.45 L335.03,82.02 L335.83,81.59 L336.64,81.15 L337.44,80.72 L338.24,80.29 L339.05,79.85 L339.85,79.42 L340.66,78.99 L341.46,78.55 L342.26,78.12 L343.07,77.68 L343.87,77.25 L344.68,76.82 L345.48,76.38 L346.28,75.95 L347.09,75.52 L347.89,75.08 L348.70,74.65 L349.50,74.21 L350.30,73.78 L351.11,73.35 L351.91,72.91 L352.72,72.48 L353.52,72.05 L354.32,71.61 L355.13,71.18 L355.93,70.74 L356.74,70.31 L357.54,69.88 L358.34,69.44 L359.15,69.01 L359.95,68.58 L360.76,68.14 L361.56,67.71 L362.36,67.27 L363.17,66.84 L363.97,66.41 L364.78,65.97 L365.58,65.54 L366.38,65.11 L367.19,64.67 L367.99,64.24 L368.80,63.81 L369.60,63.37 L370.40,62.94 L371.21,62.50 L372.01,62.07 L372.82,61.64 L373.62,61.20 L374.42,60.77 L375.23,60.34 L376.03,59.90 L376.84,59.47 L377.64,59.03 L378.44,58.60 L379.25,58.17 L380.05,57.73 L380.86,57.30 L381.66,56.87 L382.46,56.43 L383.27,56.00 L384.07,55.56 L384.88,55.13 L385.68,54.70 L386.48,54.26 L387.29,53.83 L388.09,53.40 L388.90,52.96 L389.70,52.53 L390.50,52.09 L391.31,51.66 L392.11,51.23 L392.92,50.79 L393.72,50.36 L394.52,49.93 L395.33,49.49 L396.13,49.06 L396.94,48.63 L397.74,48.19 L398.54,47.76 L399.35,47.32 L400.15,46.89 L400.96,46.46 L401.76,46.02 L402.56,45.59 L403.37,45.16 L404.17,44.72 L404.98,44.29 L405.78,43.85 L406.58,43.42 L407.39,42.99 L408.19,42.55 L409.00,42.12 L409.80,41.69 L410.60,41.25 L411.41,40.82 L412.21,40.38 L413.02,39.95 L413.82,39.52 L414.62,39.08 L415.43,38.65 L416.23,38.22 L417.04,37.78 L417.84,37.35 L418.64,36.91 L419.45,36.48 L420.25,36.05 L421.06,35.61 L421.86,35.18 L422.66,34.75 L423.47,34.31 L424.27,33.88 L425.08,33.45 L425.88,33.01 L426.68,32.58 L427.49,32.14 L428.29,31.71 L429.10,31.28 L429.90,30.84 L430.70,30.41 L431.51,29.98 L432.31,29.54 L433.12,29.11 L433.92,28.67 L434.72,28.24 L435.53,27.81 L436.33,27.37 L437.14,26.94 L437.94,26.51 L438.74,26.07 L439.55,25.64 L440.35,25.20 L441.16,24.77 L441.96,24.34 L442.76,23.90 L443.57,23.47 L444.37,23.04 L445.18,22.60 L445.98,22.17 L446.78,21.73 L447.59,21.30 L448.39,20.87 L449.20,20.43 L450.00,20.00\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#ghole1clip)\"/><text x=\"396.40\" y=\"74.21\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"182.00\" cy=\"92.29\" r=\"4.2\" fill=\"#2E7D52\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"189.00\" y=\"85.29\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text><circle cx=\"182.00\" cy=\"164.57\" r=\"5\" fill=\"#fff\" stroke=\"#B43123\" stroke-width=\"2\"/></svg></span><p>a) Bestäm \\(\\lim_{x\\to -1} f(x)\\).<br>b) Bestäm \\(f(-1)\\).<br>c) Är funktionen kontinuerlig vid \\(x=-1\\)?</p>",
    "s": "<p><strong>a)</strong> När \\(x\\) närmar sig \\(-1\\) från båda håll närmar sig grafen \\(2\\), alltså är gränsvärdet \\(2\\).</p><p><strong>b)</strong> Den fyllda punkten ligger på y-värdet \\(4\\), alltså \\(f(-1)=4\\).</p><p><strong>c)</strong> Nej. För kontinuitet krävs att gränsvärdet är lika med funktionsvärdet, men \\(2\\neq 4\\).</p>",
    "familj": "grans_graf_hole_1"
  },
  {
    "id": "1.75",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Lös ekvationen</p><p>\\[|x-1|=|2x+3|.\\]</p>",
    "s": "<p>Båda leden är icke-negativa, så vi kan kvadrera båda leden utan att ändra lösningsmängden:</p><p>\\[(x-1)^2=(2x+3)^2.\\]</p><p>Använd skillnad av kvadrater:</p><p>\\[(x-1-(2x+3))(x-1+(2x+3))=0\\]</p><p>\\[(-x-4)(3x+2)=0.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x=-4\\ \\text{eller}\\ x=-\\frac23}\\).</p>",
    "familj": "abs_tva_abs"
  },
  {
    "id": "1.76",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En tredjegradsfunktion har nollställena \\(x=-2, x=1\\) och \\(x=3\\). Grafen går dessutom genom punkten \\((0,6)\\).</p><p>Bestäm ett funktionsuttryck.</p>",
    "s": "<p><strong>Metod:</strong> Med nollställena kan funktionen skrivas</p><p>\\[f(x)=k(x--2)(x-1)(x-3).\\]</p><p>Sätt in punkten \\((0,6)\\):</p><p>\\[6=k\\cdot 6\\]</p><p>så \\(k=1\\).</p><p><strong>Svar:</strong> \\[\\boxed{f(x)=\\left(x - 3\\right) \\left(x - 1\\right) \\left(x + 2\\right)}\\]</p>",
    "familj": "polynom_fran_nollstallen_0"
  },
  {
    "id": "1.77",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En polynomfunktion \\(f\\) har nollställena \\(-2\\) och \\(3\\). Nollstället \\(x=3\\) är dubbelt. Dessutom är \\(f(0)=18\\).</p><p>Bestäm den polynomfunktion av lägsta möjliga grad som uppfyller villkoren.</p>",
    "s": "<p>Eftersom \\(x=3\\) är ett dubbelt nollställe måste faktorn \\((x-3)^2\\) finnas. Funktionen med lägsta möjliga grad är därför</p><p>\\[f(x)=k(x+2)(x-3)^2.\\]</p><p>Sätt in \\(x=0\\):</p><p>\\[18=k\\cdot2\\cdot9=18k\\]</p><p>så \\(k=1\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=(x+2)(x-3)^2}\\).</p>",
    "familj": "funktioner_dubbelt_nollstalle"
  },
  {
    "id": "1.78",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En datamängd på 600 MB kan beskrivas med modellen \\(T(v)=\\frac{600}{v}\\).</p><p>a) Förklara varför \\(v=0\\) inte tillhör definitionsmängden i modellen.<br>b) Bestäm \\(v\\) om \\(T=5\\).<br>c) Beskriv vad som händer med \\(T(v)\\) när \\(v\\) blir mycket stor.</p>",
    "s": "<p><strong>a)</strong> Division med noll är inte definierad, och i sammanhanget skulle noll överföringshastigheten v MB/s dessutom innebära att förloppet aldrig blir klart.</p><p><strong>b)</strong> \\[600/v=5\\Rightarrow v=12.\\]</p><p><strong>c)</strong> När \\(v\\) ökar blir kvoten \\(600/v\\) allt mindre och närmar sig 0.</p><p><strong>Svar:</strong> \\(v=12\\).</p>",
    "familj": "rationella_modell_1"
  },
  {
    "id": "1.79",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen \\(f(x)=\\frac{x^2-a^2}{x-a}\\) är definierad för \\(x\\neq a\\).</p><p>a) Förenkla uttrycket.<br>b) Bestäm \\(\\lim_{x\\to a}f(x)\\).<br>c) Vilket värde bör man ge \\(f(a)\\) om funktionen ska kunna utvidgas till en kontinuerlig funktion?</p>",
    "s": "<p>Faktorisera täljaren:</p><p>\\[x^2-a^2=(x-a)(x+a).\\]</p><p>För \\(x\\neq a\\) är därför \\(f(x)=x+a\\).</p><p><strong>b)</strong> \\[\\lim_{x\\to a}f(x)=a+a=2a.\\]</p><p><strong>c)</strong> För kontinuitet måste funktionsvärdet vara lika med gränsvärdet. Alltså ska \\(f(a)=2a\\).</p>",
    "familj": "grans_parameter_utvidgning"
  },
  {
    "id": "1.80",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm alla reella värden på parametern \\(a\\) för vilka ekvationen</p><p>\\[|x-2|=a\\]</p><p>har exakt a) två lösningar, b) en lösning, c) ingen lösning.</p>",
    "s": "<p>Vänsterledet \\(|x-2|\\) är alltid \\(\\ge0\\) och beskriver avståndet från \\(x\\) till 2.</p><p>a) Om \\(a&gt;0\\) finns två punkter på avståndet \\(a\\) från 2: \\(x=2-a\\) och \\(x=2+a\\).</p><p>b) Om \\(a=0\\) sammanfaller dessa till en lösning: \\(x=2\\).</p><p>c) Om \\(a&lt;0\\) kan ett absolutbelopp inte bli lika med \\(a\\), så ingen lösning finns.</p>",
    "familj": "abs_parameter_antal_losningar"
  },
  {
    "id": "1.81",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En tredjegradsfunktion har nollställena \\(x=-1, x=2\\) och \\(x=4\\). Grafen går dessutom genom punkten \\((0,-8)\\).</p><p>Bestäm ett funktionsuttryck.</p>",
    "s": "<p><strong>Metod:</strong> Med nollställena kan funktionen skrivas</p><p>\\[f(x)=k(x--1)(x-2)(x-4).\\]</p><p>Sätt in punkten \\((0,-8)\\):</p><p>\\[-8=k\\cdot 8\\]</p><p>så \\(k=-1\\).</p><p><strong>Svar:</strong> \\[\\boxed{f(x)=- \\left(x - 4\\right) \\left(x - 2\\right) \\left(x + 1\\right)}\\]</p>",
    "familj": "polynom_fran_nollstallen_1"
  },
  {
    "id": "1.82",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Låt \\(f(x)=x^{2} + 4 x + 3\\).</p><p>a) Bestäm \\(f(-1)\\).<br>b) Bestäm \\(f(0)\\).<br>c) Bestäm \\(f(2)\\).<br>d) Bestäm funktionens symmetrilinje.</p>",
    "s": "<p>a) \\(f(-1)=0\\).</p><p>b) \\(f(0)=3\\).</p><p>c) \\(f(2)=15\\).</p><p>d) Skriv funktionen som \\(f(x)=1(x--2)^2-1\\). Symmetrilinjen är därför \\(\\boxed{x=-2}\\).</p>",
    "familj": "funktioner_extra_eval_0"
  },
  {
    "id": "1.83",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>För vilka värden på \\(a\\) har ekvationen</p><p>\\[\\frac{x+a}{x-2}=3\\]</p><p>lösningen \\(x=5\\)?</p>",
    "s": "<p>Sätt in den givna lösningen \\(x=5\\):</p><p>\\[\\frac{5+a}{5-2}=3\\]</p><p>\\[5+a=9\\]</p><p>\\[a=4.\\]</p><p>Eftersom \\(5\\neq2\\) är lösningen tillåten.</p><p><strong>Svar:</strong> \\(\\boxed{a=4}\\).</p>",
    "familj": "rationella_parameter"
  },
  {
    "id": "1.84",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Förklara varför funktionen \\(f(x)=\\frac{1}{x-2}\\) inte kan göras kontinuerlig vid \\(x=2\\) genom att bara definiera ett lämpligt värde på \\(f(2)\\).</p>",
    "s": "<p>När \\(x\\) närmar sig 2 blir nämnaren \\(x-2\\) mycket liten. Från vänster går funktionsvärdena mot \\(-\\infty\\), medan de från höger går mot \\(+\\infty\\). Det finns alltså inget ändligt tvåsidigt gränsvärde vid \\(x=2\\). Därför finns inget enda värde på \\(f(2)\\) som kan göra funktionen kontinuerlig där.</p>",
    "familj": "grans_vertikal_asymptot_resonemang"
  },
  {
    "id": "1.85",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>För funktionen \\(f(x)=|x+1|+|x-3|\\), bestäm funktionens minsta värde och alla x-värden där detta minsta värde antas. Motivera utan digitalt verktyg.</p>",
    "s": "<p><strong>Tolkning:</strong> \\(|x+1|\\) är avståndet från \\(x\\) till \\(-1\\), och \\(|x-3|\\) är avståndet från \\(x\\) till \\(3\\).</p><p>Om \\(x\\) ligger mellan \\(-1\\) och 3 är summan av avstånden precis avståndet mellan ändpunkterna:</p><p>\\[(x+1)+(3-x)=4.\\]</p><p>Utanför intervallet blir summan större än 4.</p><p><strong>Svar:</strong> Minsta värdet är \\(\\boxed{4}\\), och det antas för alla \\(\\boxed{-1\\le x\\le3}\\).</p>",
    "familj": "abs_summa_avstand"
  },
  {
    "id": "1.86",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En tredjegradsfunktion har nollställena \\(x=-3, x=1\\) och \\(x=2\\). Grafen går dessutom genom punkten \\((0,12)\\).</p><p>Bestäm ett funktionsuttryck.</p>",
    "s": "<p><strong>Metod:</strong> Med nollställena kan funktionen skrivas</p><p>\\[f(x)=k(x--3)(x-1)(x-2).\\]</p><p>Sätt in punkten \\((0,12)\\):</p><p>\\[12=k\\cdot 6\\]</p><p>så \\(k=2\\).</p><p><strong>Svar:</strong> \\[\\boxed{f(x)=2 \\left(x - 2\\right) \\left(x - 1\\right) \\left(x + 3\\right)}\\]</p>",
    "familj": "polynom_fran_nollstallen_2"
  },
  {
    "id": "1.87",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En andragradsfunktion ges av \\(f(x)=2 x^{2} + 4 x + 2\\).</p><p>a) Bestäm \\(f(0)\\).<br>b) Bestäm symmetrilinjen.<br>c) Avgör om funktionen har ett minimi- eller maximivärde och ange värdet.</p>",
    "s": "<p>a) \\(f(0)=2\\).</p><p>b) Formen \\(a(x-h)^2+k\\) ger symmetrilinjen \\(x=-1\\).</p><p>c) Eftersom koefficienten framför kvadraten är positiv har funktionen ett minimivärde. Det är \\(0\\) och antas vid \\(x=-1\\).</p>",
    "familj": "funktioner_extra_egenskaper_1"
  },
  {
    "id": "1.88",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Visa att</p><p>\\[\\frac{x}{x-1}-\\frac{1}{x+1}=\\frac{x^2+1}{x^2-1}\\]</p><p>för alla x där båda leden är definierade.</p>",
    "s": "<p><strong>Vänsterled:</strong> Använd gemensam nämnare \\((x-1)(x+1)=x^2-1\\):</p><p>\\[\\frac{x(x+1)}{x^2-1}-\\frac{x-1}{x^2-1}\\]</p><p>\\[=\\frac{x^2+x-x+1}{x^2-1}=\\frac{x^2+1}{x^2-1}.\\]</p><p>Detta är högerledet. Identiteten gäller för \\(x\\neq1\\) och \\(x\\neq-1\\).</p>",
    "familj": "rationella_identitet_bevis"
  },
  {
    "id": "1.89",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Bestäm konstanterna \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;2\\\\x^2-1,&x\\ge2\\end{cases}\\]</p><p>är kontinuerlig vid \\(x=2\\) och dessutom har vänsterdelens lutning samma som högerdelens tangentlutning där.</p>",
    "s": "<p>Kontinuitet kräver</p><p>\\[2a+b=2^2-1=3.\\]</p><p>Högerdelens derivata är \\(2x\\), så tangentlutningen vid \\(x=2\\) är 4. Vänsterdelen har lutningen \\(a\\), alltså måste \\(a=4\\).</p><p>Sätt in i kontinuitetsvillkoret:</p><p>\\[8+b=3\\Rightarrow b=-5.\\]</p><p><strong>Svar:</strong> \\(\\boxed{a=4,\\ b=-5}\\).</p>",
    "familj": "grans_kontinuitet_lutning"
  },
  {
    "id": "1.90",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen \\[|x--3|=1.\\]</p>",
    "s": "<p>Absolutbeloppet beskriver avståndet från \\(x\\) till \\(-3\\). Avståndet ska vara \\(1\\), alltså</p><p>\\[x=-4\\quad\\text{eller}\\quad x=-2.\\]</p>",
    "familj": "topup_abs_0"
  },
  {
    "id": "1.91",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För funktionen \\(f(x)=x^3-x-2\\) vet man att ett nollställe ligger i intervallet \\([1,2]\\).</p><p>Genomför <strong>ett</strong> steg med intervallhalveringsmetoden och ange det nya intervallet.</p>",
    "s": "<p>Mittpunkten är \\(m=(1+2)/2=1,5\\).</p><p>\\[f(1)=-2,\\qquad f(1,5)=-0,125.\\]</p><p>Teckenbytet finns mellan \\(1,5\\) och \\(2\\).</p><p><strong>Svar:</strong> det nya intervallet är \\(\\boxed{[1,5,2]}\\).</p>",
    "familj": "polynom_intervallhalvering_0"
  },
  {
    "id": "1.92",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Låt \\(f(x)=3 x^{2} + 1\\).</p><p>a) Bestäm \\(f(-1)\\).<br>b) Bestäm \\(f(0)\\).<br>c) Bestäm \\(f(2)\\).<br>d) Bestäm funktionens symmetrilinje.</p>",
    "s": "<p>a) \\(f(-1)=4\\).</p><p>b) \\(f(0)=1\\).</p><p>c) \\(f(2)=13\\).</p><p>d) Skriv funktionen som \\(f(x)=3(x-0)^2+1\\). Symmetrilinjen är därför \\(\\boxed{x=0}\\).</p>",
    "familj": "funktioner_extra_eval_2"
  },
  {
    "id": "1.93",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det rationella uttrycket \\[R(x)=\\frac{x^2-4}{x-2}\\] kan förenklas.</p><p>a) Förenkla uttrycket.<br>b) Ange definitionsmängden.<br>c) Beräkna \\(R(3)\\).</p>",
    "s": "<p>a) Faktorisera täljaren: \\(x^2-4=(x-2)(x+2)\\). För \\(x\\neq 2\\) blir därför \\(R(x)=x+2\\).</p><p>b) Originalets nämnare är noll för \\(x=2\\), så \\(x=2\\) måste uteslutas.</p><p>c) \\(R(3)=3+2=5\\).</p>",
    "familj": "rationella_extra_0"
  },
  {
    "id": "1.94",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet</p><p>\\[\\lim_{x\\to 1}\\frac{x^2-1}{x-1}.\\]</p>",
    "s": "<p>Faktorisera täljaren:</p><p>\\[x^2-1=(x-1)(x+1).\\]</p><p>För \\(x\\neq 1\\) blir uttrycket \\(x+1\\). Därför är gränsvärdet \\(1+1=2\\).</p><p><strong>Svar:</strong> \\(\\boxed{2}\\).</p>",
    "familj": "topup_grans_0"
  },
  {
    "id": "1.95",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen \\[|x--2|=2.\\]</p>",
    "s": "<p>Absolutbeloppet beskriver avståndet från \\(x\\) till \\(-2\\). Avståndet ska vara \\(2\\), alltså</p><p>\\[x=-4\\quad\\text{eller}\\quad x=0.\\]</p>",
    "familj": "topup_abs_1"
  },
  {
    "id": "1.96",
    "kap": 1,
    "omr": "polynom",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För funktionen \\(f(x)=x^3+x-4\\) vet man att ett nollställe ligger i intervallet \\([1,2]\\).</p><p>Genomför <strong>ett</strong> steg med intervallhalveringsmetoden och ange det nya intervallet.</p>",
    "s": "<p>Mittpunkten är \\(m=(1+2)/2=1,5\\).</p><p>\\[f(1)=-2,\\qquad f(1,5)=0,875.\\]</p><p>Teckenbytet finns mellan \\(1\\) och \\(1,5\\).</p><p><strong>Svar:</strong> det nya intervallet är \\(\\boxed{[1,1,5]}\\).</p>",
    "familj": "polynom_intervallhalvering_1"
  },
  {
    "id": "1.97",
    "kap": 1,
    "omr": "funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>En andragradsfunktion ges av \\(f(x)=x^{2} - 2 x + 3\\).</p><p>a) Bestäm \\(f(0)\\).<br>b) Bestäm symmetrilinjen.<br>c) Avgör om funktionen har ett minimi- eller maximivärde och ange värdet.</p>",
    "s": "<p>a) \\(f(0)=3\\).</p><p>b) Formen \\(a(x-h)^2+k\\) ger symmetrilinjen \\(x=1\\).</p><p>c) Eftersom koefficienten framför kvadraten är positiv har funktionen ett minimivärde. Det är \\(2\\) och antas vid \\(x=1\\).</p>",
    "familj": "funktioner_extra_egenskaper_3"
  },
  {
    "id": "1.98",
    "kap": 1,
    "omr": "rationella_uttryck",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det rationella uttrycket \\[R(x)=\\frac{x^2-9}{x-3}\\] kan förenklas.</p><p>a) Förenkla uttrycket.<br>b) Ange definitionsmängden.<br>c) Beräkna \\(R(5)\\).</p>",
    "s": "<p>a) Faktorisera täljaren: \\(x^2-9=(x-3)(x+3)\\). För \\(x\\neq 3\\) blir därför \\(R(x)=x+3\\).</p><p>b) Originalets nämnare är noll för \\(x=3\\), så \\(x=3\\) måste uteslutas.</p><p>c) \\(R(5)=5+3=8\\).</p>",
    "familj": "rationella_extra_1"
  },
  {
    "id": "1.99",
    "kap": 1,
    "omr": "gransvarde_kontinuitet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm gränsvärdet</p><p>\\[\\lim_{x\\to 2}\\frac{x^2-4}{x-2}.\\]</p>",
    "s": "<p>Faktorisera täljaren:</p><p>\\[x^2-4=(x-2)(x+2).\\]</p><p>För \\(x\\neq 2\\) blir uttrycket \\(x+2\\). Därför är gränsvärdet \\(2+2=4\\).</p><p><strong>Svar:</strong> \\(\\boxed{4}\\).</p>",
    "familj": "topup_grans_1"
  },
  {
    "id": "1.100",
    "kap": 1,
    "omr": "absolutbelopp",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Lös ekvationen \\[|x--1|=3.\\]</p>",
    "s": "<p>Absolutbeloppet beskriver avståndet från \\(x\\) till \\(-1\\). Avståndet ska vara \\(3\\), alltså</p><p>\\[x=-4\\quad\\text{eller}\\quad x=2.\\]</p>",
    "familj": "topup_abs_2"
  },
  {
    "id": "2.01",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En växts höjd \\(h\\) mäts i centimeter.</p><p>\\[h(2)=13,4\\qquad\\text{och}\\qquad h(6)=18,2\\]</p><p>Bestäm växtens genomsnittliga förändringshastighet mellan \\(t=2\\) veckor och \\(t=6\\) veckor.</p>",
    "s": "<p><strong>Metod:</strong> Genomsnittlig förändringshastighet beräknas med en ändringskvot:</p><p>\\[\\frac{h(6)-h(2)}{6-2}.\\]</p><p>Sätt in värdena:</p><p>\\[\\frac{18,2-13,4}{4}=\\frac{4,8}{4}=1,2.\\]</p><p><strong>Svar:</strong> Växtens genomsnittliga förändringshastighet är \\(\\boxed{1,2\\text{ cm/vecka}}\\).</p>",
    "familj": "mato1_andringskvot_vaxt"
  },
  {
    "id": "2.02",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm derivatan av funktionen</p><p>\\[f(x)=2x^4-3x^3+5x-7.\\]</p>",
    "s": "<p>Vi deriverar term för term:</p><p>\\[(2x^4)\\,\\!\\prime=8x^3\\]</p><p>\\[(-3x^3)\\,\\!\\prime=-9x^2\\]</p><p>\\[(5x)\\,\\!\\prime=5\\]</p><p>\\[(-7)\\,\\!\\prime=0.\\]</p><p>Alltså</p><p>\\[\\boxed{f\\,\\!\\prime(x)=8x^3-9x^2+5}.\\]</p>",
    "familj": "mato1_derivata_polynom_rutin"
  },
  {
    "id": "2.03",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar grafen till \\(y=f(x)\\) och tangenten \\(t\\) i punkten \\(P\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Matematisk figur\"><defs><marker id=\"g213arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"g213clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"88.20\" y1=\"20\" x2=\"88.20\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"168.60\" y1=\"20\" x2=\"168.60\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"329.40\" y1=\"20\" x2=\"329.40\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"409.80\" y1=\"20\" x2=\"409.80\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"247.70\" x2=\"450\" y2=\"247.70\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"197.10\" x2=\"450\" y2=\"197.10\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"95.90\" x2=\"450\" y2=\"95.90\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"45.30\" x2=\"450\" y2=\"45.30\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"88.20\" y1=\"273\" x2=\"88.20\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g213arr)\"/><line x1=\"84.20\" y1=\"247.70\" x2=\"92.20\" y2=\"247.70\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"251.20\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"84.20\" y1=\"197.10\" x2=\"92.20\" y2=\"197.10\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"200.60\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"84.20\" y1=\"146.50\" x2=\"92.20\" y2=\"146.50\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"84.20\" y1=\"95.90\" x2=\"92.20\" y2=\"95.90\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"99.40\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"84.20\" y1=\"45.30\" x2=\"92.20\" y2=\"45.30\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"48.80\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><text x=\"100.20\" y=\"13.00\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,114.88 L49.01,115.82 L50.01,116.76 L51.02,117.69 L52.02,118.61 L53.02,119.52 L54.03,120.43 L55.04,121.32 L56.04,122.21 L57.05,123.09 L58.05,123.97 L59.05,124.83 L60.06,125.69 L61.06,126.54 L62.07,127.38 L63.08,128.22 L64.08,129.04 L65.09,129.86 L66.09,130.67 L67.09,131.47 L68.10,132.27 L69.11,133.06 L70.11,133.83 L71.11,134.61 L72.12,135.37 L73.12,136.12 L74.13,136.87 L75.14,137.61 L76.14,138.34 L77.14,139.06 L78.15,139.78 L79.16,140.49 L80.16,141.19 L81.16,141.88 L82.17,142.56 L83.17,143.24 L84.18,143.91 L85.19,144.57 L86.19,145.22 L87.19,145.86 L88.20,146.50 L89.20,147.13 L90.21,147.75 L91.22,148.36 L92.22,148.97 L93.22,149.56 L94.23,150.15 L95.23,150.73 L96.24,151.31 L97.25,151.87 L98.25,152.43 L99.25,152.98 L100.26,153.52 L101.27,154.05 L102.27,154.58 L103.28,155.10 L104.28,155.61 L105.28,156.11 L106.29,156.60 L107.30,157.09 L108.30,157.57 L109.31,158.04 L110.31,158.50 L111.31,158.96 L112.32,159.40 L113.33,159.84 L114.33,160.27 L115.34,160.70 L116.34,161.11 L117.34,161.52 L118.35,161.92 L119.35,162.31 L120.36,162.69 L121.36,163.07 L122.37,163.44 L123.38,163.79 L124.38,164.15 L125.39,164.49 L126.39,164.83 L127.40,165.15 L128.40,165.47 L129.41,165.79 L130.41,166.09 L131.42,166.39 L132.42,166.68 L133.43,166.96 L134.43,167.23 L135.44,167.50 L136.44,167.75 L137.44,168.00 L138.45,168.24 L139.45,168.48 L140.46,168.70 L141.47,168.92 L142.47,169.13 L143.47,169.33 L144.48,169.52 L145.49,169.71 L146.49,169.89 L147.50,170.06 L148.50,170.22 L149.50,170.37 L150.51,170.52 L151.51,170.66 L152.52,170.79 L153.53,170.91 L154.53,171.03 L155.53,171.13 L156.54,171.23 L157.55,171.32 L158.55,171.40 L159.56,171.48 L160.56,171.55 L161.56,171.61 L162.57,171.66 L163.57,171.70 L164.58,171.74 L165.58,171.76 L166.59,171.78 L167.59,171.80 L168.60,171.80 L169.60,171.80 L170.61,171.78 L171.62,171.76 L172.62,171.74 L173.62,171.70 L174.63,171.66 L175.63,171.61 L176.64,171.55 L177.65,171.48 L178.65,171.40 L179.66,171.32 L180.66,171.23 L181.67,171.13 L182.67,171.03 L183.68,170.91 L184.68,170.79 L185.69,170.66 L186.69,170.52 L187.70,170.37 L188.70,170.22 L189.70,170.06 L190.71,169.89 L191.72,169.71 L192.72,169.52 L193.72,169.33 L194.73,169.13 L195.73,168.92 L196.74,168.70 L197.75,168.48 L198.75,168.24 L199.75,168.00 L200.76,167.75 L201.77,167.50 L202.77,167.23 L203.78,166.96 L204.78,166.68 L205.78,166.39 L206.79,166.09 L207.80,165.79 L208.80,165.47 L209.81,165.15 L210.81,164.83 L211.81,164.49 L212.82,164.15 L213.82,163.79 L214.83,163.44 L215.83,163.07 L216.84,162.69 L217.84,162.31 L218.85,161.92 L219.86,161.52 L220.86,161.11 L221.87,160.70 L222.87,160.27 L223.88,159.84 L224.88,159.40 L225.88,158.96 L226.89,158.50 L227.89,158.04 L228.90,157.57 L229.91,157.09 L230.91,156.60 L231.92,156.11 L232.92,155.61 L233.93,155.10 L234.93,154.58 L235.94,154.05 L236.94,153.52 L237.94,152.98 L238.95,152.43 L239.96,151.87 L240.96,151.31 L241.97,150.73 L242.97,150.15 L243.97,149.56 L244.98,148.97 L245.98,148.36 L246.99,147.75 L247.99,147.13 L249.00,146.50 L250.01,145.86 L251.01,145.22 L252.02,144.57 L253.02,143.91 L254.02,143.24 L255.03,142.56 L256.03,141.88 L257.04,141.19 L258.04,140.49 L259.05,139.78 L260.06,139.06 L261.06,138.34 L262.06,137.61 L263.07,136.87 L264.07,136.12 L265.08,135.37 L266.08,134.61 L267.09,133.83 L268.10,133.06 L269.10,132.27 L270.11,131.47 L271.11,130.67 L272.12,129.86 L273.12,129.04 L274.12,128.22 L275.13,127.38 L276.13,126.54 L277.14,125.69 L278.14,124.83 L279.15,123.97 L280.15,123.09 L281.16,122.21 L282.17,121.32 L283.17,120.43 L284.18,119.52 L285.18,118.61 L286.19,117.69 L287.19,116.76 L288.19,115.82 L289.20,114.88 L290.21,113.92 L291.21,112.96 L292.22,111.99 L293.22,111.02 L294.23,110.03 L295.23,109.04 L296.24,108.04 L297.24,107.03 L298.25,106.02 L299.25,104.99 L300.25,103.96 L301.26,102.92 L302.26,101.87 L303.27,100.82 L304.27,99.75 L305.28,98.68 L306.28,97.60 L307.29,96.52 L308.29,95.42 L309.30,94.32 L310.31,93.21 L311.31,92.09 L312.31,90.96 L313.32,89.83 L314.32,88.69 L315.33,87.54 L316.33,86.38 L317.34,85.21 L318.34,84.04 L319.35,82.85 L320.36,81.66 L321.36,80.47 L322.37,79.26 L323.37,78.05 L324.38,76.83 L325.38,75.60 L326.38,74.36 L327.39,73.11 L328.39,71.86 L329.40,70.60 L330.41,69.33 L331.41,68.05 L332.42,66.77 L333.42,65.48 L334.43,64.18 L335.43,62.87 L336.44,61.55 L337.44,60.23 L338.44,58.89 L339.45,57.55 L340.46,56.21 L341.46,54.85 L342.47,53.49 L343.47,52.12 L344.48,50.74 L345.48,49.35 L346.48,47.95 L347.49,46.55 L348.50,45.14 L349.50,43.72 L350.50,42.29 L351.51,40.86 L352.52,39.41 L353.52,37.96 L354.52,36.50 L355.53,35.04 L356.53,33.56 L357.54,32.08 L358.54,30.59 L359.55,29.09 L360.56,27.59 L361.56,26.07 L362.56,24.55 L363.57,23.02 L364.57,21.48 L365.58,19.94 L366.58,18.38 L367.59,16.82 L368.59,15.25 L369.60,13.68 L370.61,12.09 L371.61,10.50 L372.61,8.90 L373.62,7.29 L374.62,5.67 L375.63,4.05 L376.64,2.41 L377.64,0.77 L378.64,-0.88 L379.65,-2.53 L380.66,-4.20 L381.66,-5.87 L382.66,-7.55 L383.67,-9.24 L384.68,-10.93 L385.68,-12.64 L386.69,-14.35 L387.69,-16.07 L388.69,-17.80 L389.70,-19.53 L390.71,-21.27 L391.71,-23.03 L392.71,-24.78 L393.72,-26.55 L394.73,-28.33 L395.73,-30.11 L396.74,-31.90 L397.74,-33.70 L398.75,-35.51 L399.75,-37.32 L400.75,-39.14 L401.76,-40.97 L402.76,-42.81 L403.77,-44.66 L404.77,-46.51 L405.78,-48.37 L406.79,-50.24 L407.79,-52.12 L408.79,-54.01 L409.80,-55.90 L410.81,-57.80 L411.81,-59.71 L412.81,-61.63 L413.82,-63.55 L414.82,-65.49 L415.83,-67.43 L416.84,-69.38 L417.84,-71.33 L418.84,-73.30 L419.85,-75.27 L420.86,-77.25 L421.86,-79.24 L422.86,-81.24 L423.87,-83.24 L424.88,-85.25 L425.88,-87.27 L426.89,-89.30 L427.89,-91.34 L428.89,-93.38 L429.90,-95.43 L430.91,-97.49 L431.91,-99.56 L432.91,-101.63 L433.92,-103.72 L434.93,-105.81 L435.93,-107.91 L436.94,-110.01 L437.94,-112.13 L438.94,-114.25 L439.95,-116.38 L440.96,-118.52 L441.96,-120.67 L442.96,-122.82 L443.97,-124.98 L444.98,-127.16 L445.98,-129.33 L446.99,-131.52 L447.99,-133.71 L449.00,-135.92 L450.00,-138.12\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g213clip)\"/><line x1=\"48.00\" y1=\"273.00\" x2=\"450.00\" y2=\"20.00\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><text x=\"257.00\" y=\"140.50\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#2A5D9E\">t</text><circle cx=\"249.00\" cy=\"146.50\" r=\"4.3\" fill=\"#B43123\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"256.00\" y=\"139.50\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text><text x=\"388.00\" y=\"36\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#2B2527\">y = f(x)</text></svg></span><p>a) Avläs \\(f(2)\\).<br>b) Bestäm \\(f\\,\\!\\prime(2)\\).</p>",
    "s": "<p>Punkten \\(P\\) ligger vid \\(x=2\\). Av grafen avläses \\(P=(2,3)\\), alltså är</p><p>\\[f(2)=3.\\]</p><p>Tangenten \\(t\\) stiger 1 enhet när \\(x\\) ökar 1 enhet, så tangentens lutning är \\(1\\). Därför är</p><p>\\[f\\,\\!\\prime(2)=1.\\]</p><p><strong>Svar:</strong> a) \\(\\boxed{3}\\) &nbsp;&nbsp; b) \\(\\boxed{1}\\).</p>",
    "familj": "mato1_tangent_derivata_avlasning"
  },
  {
    "id": "2.04",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>En bakteriekultur kan beskrivas med funktionen</p><p>\\[N(t)=150\\cdot 1,12^t.\\]</p><p>a) Vad är startvärdet?<br>b) Vilken procentuell ökning motsvarar tillväxtfaktorn?<br>c) Skriv funktionen med basen \\(e\\), alltså på formen \\(N(t)=150e^{kt}\\).</p>",
    "s": "<p><strong>a)</strong> Startvärdet är värdet när \\(t=0\\):</p><p>\\[N(0)=150\\cdot 1,12^0=150.\\]</p><p>Alltså är startvärdet \\(150\\).</p><p><strong>b)</strong> Tillväxtfaktorn är \\(1,12\\), vilket innebär en ökning med \\(12\\,\\%\\).</p><p><strong>c)</strong> Eftersom \\(a^t=e^{t\\ln a}\\) kan vi skriva</p><p>\\[1,12^t=e^{t\\ln(1,12)}.\\]</p><p>Därför blir</p><p>\\[N(t)=150e^{t\\ln(1,12)}.\\]</p><p>Alltså är \\(k=\\ln(1,12)\\approx 0,1133\\).</p><p><strong>Svar:</strong> a) \\(\\boxed{150}\\) &nbsp;&nbsp; b) \\(\\boxed{12\\%}\\) &nbsp;&nbsp; c) \\(\\boxed{N(t)=150e^{0,1133t}}\\) ungefär.</p>",
    "familj": "mato1_exp_repetition_bas_e"
  },
  {
    "id": "2.05",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till en funktion \\(f\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Matematisk figur\"><defs><marker id=\"g202arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"g202clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"88.20\" y1=\"20\" x2=\"88.20\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"168.60\" y1=\"20\" x2=\"168.60\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"329.40\" y1=\"20\" x2=\"329.40\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"409.80\" y1=\"20\" x2=\"409.80\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"254.93\" x2=\"450\" y2=\"254.93\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"218.79\" x2=\"450\" y2=\"218.79\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"182.64\" x2=\"450\" y2=\"182.64\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"110.36\" x2=\"450\" y2=\"110.36\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"74.21\" x2=\"450\" y2=\"74.21\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"38.07\" x2=\"450\" y2=\"38.07\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"254.93\" x2=\"459\" y2=\"254.93\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g202arr)\"/><line x1=\"168.60\" y1=\"250.93\" x2=\"168.60\" y2=\"258.93\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"168.60\" y=\"271.93\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"249.00\" y1=\"250.93\" x2=\"249.00\" y2=\"258.93\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"249.00\" y=\"271.93\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"329.40\" y1=\"250.93\" x2=\"329.40\" y2=\"258.93\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"329.40\" y=\"271.93\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"409.80\" y1=\"250.93\" x2=\"409.80\" y2=\"258.93\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"409.80\" y=\"271.93\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460.00\" y=\"246.93\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><text x=\"80.20\" y=\"271.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">0</text><line x1=\"88.20\" y1=\"273\" x2=\"88.20\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g202arr)\"/><line x1=\"84.20\" y1=\"218.79\" x2=\"92.20\" y2=\"218.79\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"222.29\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"84.20\" y1=\"182.64\" x2=\"92.20\" y2=\"182.64\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"186.14\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"84.20\" y1=\"146.50\" x2=\"92.20\" y2=\"146.50\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"84.20\" y1=\"110.36\" x2=\"92.20\" y2=\"110.36\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"113.86\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"84.20\" y1=\"74.21\" x2=\"92.20\" y2=\"74.21\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"77.71\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"84.20\" y1=\"38.07\" x2=\"92.20\" y2=\"38.07\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"79.20\" y=\"41.57\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"100.20\" y=\"13.00\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,300.11 L49.01,297.85 L50.01,295.61 L51.02,293.38 L52.02,291.16 L53.02,288.95 L54.03,286.76 L55.04,284.57 L56.04,282.40 L57.05,280.23 L58.05,278.08 L59.05,275.94 L60.06,273.81 L61.06,271.70 L62.07,269.59 L63.08,267.49 L64.08,265.41 L65.09,263.34 L66.09,261.28 L67.09,259.23 L68.10,257.19 L69.11,255.16 L70.11,253.14 L71.11,251.14 L72.12,249.15 L73.12,247.16 L74.13,245.19 L75.14,243.23 L76.14,241.28 L77.14,239.35 L78.15,237.42 L79.16,235.51 L80.16,233.60 L81.16,231.71 L82.17,229.83 L83.17,227.96 L84.18,226.10 L85.19,224.26 L86.19,222.42 L87.19,220.60 L88.20,218.79 L89.20,216.98 L90.21,215.19 L91.22,213.42 L92.22,211.65 L93.22,209.89 L94.23,208.15 L95.23,206.41 L96.24,204.69 L97.25,202.98 L98.25,201.28 L99.25,199.59 L100.26,197.91 L101.27,196.25 L102.27,194.59 L103.28,192.95 L104.28,191.32 L105.28,189.70 L106.29,188.09 L107.30,186.49 L108.30,184.90 L109.31,183.33 L110.31,181.76 L111.31,180.21 L112.32,178.67 L113.33,177.14 L114.33,175.62 L115.34,174.11 L116.34,172.61 L117.34,171.13 L118.35,169.65 L119.35,168.19 L120.36,166.74 L121.36,165.30 L122.37,163.87 L123.38,162.45 L124.38,161.05 L125.39,159.65 L126.39,158.27 L127.40,156.90 L128.40,155.54 L129.41,154.19 L130.41,152.85 L131.42,151.52 L132.42,150.20 L133.43,148.90 L134.43,147.61 L135.44,146.32 L136.44,145.05 L137.44,143.79 L138.45,142.55 L139.45,141.31 L140.46,140.08 L141.47,138.87 L142.47,137.67 L143.47,136.48 L144.48,135.30 L145.49,134.13 L146.49,132.97 L147.50,131.82 L148.50,130.69 L149.50,129.56 L150.51,128.45 L151.51,127.35 L152.52,126.26 L153.53,125.18 L154.53,124.11 L155.53,123.06 L156.54,122.01 L157.55,120.98 L158.55,119.96 L159.56,118.95 L160.56,117.95 L161.56,116.96 L162.57,115.98 L163.57,115.02 L164.58,114.06 L165.58,113.12 L166.59,112.19 L167.59,111.27 L168.60,110.36 L169.60,109.46 L170.61,108.57 L171.62,107.70 L172.62,106.83 L173.62,105.98 L174.63,105.14 L175.63,104.31 L176.64,103.49 L177.65,102.68 L178.65,101.89 L179.66,101.10 L180.66,100.33 L181.67,99.57 L182.67,98.81 L183.68,98.07 L184.68,97.35 L185.69,96.63 L186.69,95.92 L187.70,95.23 L188.70,94.54 L189.70,93.87 L190.71,93.21 L191.72,92.56 L192.72,91.92 L193.72,91.30 L194.73,90.68 L195.73,90.08 L196.74,89.48 L197.75,88.90 L198.75,88.33 L199.75,87.77 L200.76,87.23 L201.77,86.69 L202.77,86.16 L203.78,85.65 L204.78,85.15 L205.78,84.66 L206.79,84.18 L207.80,83.71 L208.80,83.25 L209.81,82.80 L210.81,82.37 L211.81,81.95 L212.82,81.53 L213.82,81.13 L214.83,80.74 L215.83,80.36 L216.84,80.00 L217.84,79.64 L218.85,79.30 L219.86,78.96 L220.86,78.64 L221.87,78.33 L222.87,78.03 L223.88,77.74 L224.88,77.47 L225.88,77.20 L226.89,76.95 L227.89,76.70 L228.90,76.47 L229.91,76.25 L230.91,76.04 L231.92,75.85 L232.92,75.66 L233.93,75.48 L234.93,75.32 L235.94,75.17 L236.94,75.03 L237.94,74.90 L238.95,74.78 L239.96,74.67 L240.96,74.58 L241.97,74.49 L242.97,74.42 L243.97,74.36 L244.98,74.30 L245.98,74.27 L246.99,74.24 L247.99,74.22 L249.00,74.21 L250.01,74.22 L251.01,74.24 L252.02,74.27 L253.02,74.30 L254.02,74.36 L255.03,74.42 L256.03,74.49 L257.04,74.58 L258.04,74.67 L259.05,74.78 L260.06,74.90 L261.06,75.03 L262.06,75.17 L263.07,75.32 L264.07,75.48 L265.08,75.66 L266.08,75.85 L267.09,76.04 L268.10,76.25 L269.10,76.47 L270.11,76.70 L271.11,76.95 L272.12,77.20 L273.12,77.47 L274.12,77.74 L275.13,78.03 L276.13,78.33 L277.14,78.64 L278.14,78.96 L279.15,79.30 L280.15,79.64 L281.16,80.00 L282.17,80.36 L283.17,80.74 L284.18,81.13 L285.18,81.53 L286.19,81.95 L287.19,82.37 L288.19,82.80 L289.20,83.25 L290.21,83.71 L291.21,84.18 L292.22,84.66 L293.22,85.15 L294.23,85.65 L295.23,86.16 L296.24,86.69 L297.24,87.23 L298.25,87.77 L299.25,88.33 L300.25,88.90 L301.26,89.48 L302.26,90.08 L303.27,90.68 L304.27,91.30 L305.28,91.92 L306.28,92.56 L307.29,93.21 L308.29,93.87 L309.30,94.54 L310.31,95.23 L311.31,95.92 L312.31,96.63 L313.32,97.35 L314.32,98.07 L315.33,98.81 L316.33,99.57 L317.34,100.33 L318.34,101.10 L319.35,101.89 L320.36,102.68 L321.36,103.49 L322.37,104.31 L323.37,105.14 L324.38,105.98 L325.38,106.83 L326.38,107.70 L327.39,108.57 L328.39,109.46 L329.40,110.36 L330.41,111.27 L331.41,112.19 L332.42,113.12 L333.42,114.06 L334.43,115.02 L335.43,115.98 L336.44,116.96 L337.44,117.95 L338.44,118.95 L339.45,119.96 L340.46,120.98 L341.46,122.01 L342.47,123.06 L343.47,124.11 L344.48,125.18 L345.48,126.26 L346.48,127.35 L347.49,128.45 L348.50,129.56 L349.50,130.69 L350.50,131.82 L351.51,132.97 L352.52,134.13 L353.52,135.30 L354.52,136.48 L355.53,137.67 L356.53,138.87 L357.54,140.08 L358.54,141.31 L359.55,142.55 L360.56,143.79 L361.56,145.05 L362.56,146.32 L363.57,147.61 L364.57,148.90 L365.58,150.20 L366.58,151.52 L367.59,152.85 L368.59,154.19 L369.60,155.54 L370.61,156.90 L371.61,158.27 L372.61,159.65 L373.62,161.05 L374.62,162.45 L375.63,163.87 L376.64,165.30 L377.64,166.74 L378.64,168.19 L379.65,169.65 L380.66,171.13 L381.66,172.61 L382.66,174.11 L383.67,175.62 L384.68,177.14 L385.68,178.67 L386.69,180.21 L387.69,181.76 L388.69,183.33 L389.70,184.90 L390.71,186.49 L391.71,188.09 L392.71,189.70 L393.72,191.32 L394.73,192.95 L395.73,194.59 L396.74,196.25 L397.74,197.91 L398.75,199.59 L399.75,201.28 L400.75,202.98 L401.76,204.69 L402.76,206.41 L403.77,208.15 L404.77,209.89 L405.78,211.65 L406.79,213.42 L407.79,215.19 L408.79,216.98 L409.80,218.79 L410.81,220.60 L411.81,222.42 L412.81,224.26 L413.82,226.10 L414.82,227.96 L415.83,229.83 L416.84,231.71 L417.84,233.60 L418.84,235.51 L419.85,237.42 L420.86,239.35 L421.86,241.28 L422.86,243.23 L423.87,245.19 L424.88,247.16 L425.88,249.15 L426.89,251.14 L427.89,253.14 L428.89,255.16 L429.90,257.19 L430.91,259.23 L431.91,261.28 L432.91,263.34 L433.92,265.41 L434.93,267.49 L435.93,269.59 L436.94,271.70 L437.94,273.81 L438.94,275.94 L439.95,278.08 L440.96,280.23 L441.96,282.40 L442.96,284.57 L443.97,286.76 L444.98,288.95 L445.98,291.16 L446.99,293.38 L447.99,295.61 L449.00,297.85 L450.00,300.11\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g202clip)\"/><circle cx=\"88.20\" cy=\"218.79\" r=\"4.3\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"95.20\" y=\"211.79\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"249.00\" cy=\"74.21\" r=\"4.3\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"256.00\" y=\"67.21\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"409.80\" cy=\"218.79\" r=\"4.3\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"416.80\" y=\"211.79\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"388.00\" y=\"36\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#2B2527\">y = f(x)</text></svg></span><p>a) Bestäm den genomsnittliga förändringshastigheten på intervallet \\([0,2]\\).<br>b) Bestäm den genomsnittliga förändringshastigheten på intervallet \\([2,4]\\).<br>c) Förklara kort vad skillnaden mellan svaren i a) och b) säger om grafens utveckling.</p>",
    "s": "<p>Av figuren avläses punkterna \\(A=(0,1)\\), \\(B=(2,5)\\) och \\(C=(4,1)\\).</p><p><strong>a)</strong> På intervallet \\([0,2]\\) blir ändringskvoten</p><p>\\[\\frac{f(2)-f(0)}{2-0}=\\frac{5-1}{2}=2.\\]</p><p><strong>b)</strong> På intervallet \\([2,4]\\) blir ändringskvoten</p><p>\\[\\frac{f(4)-f(2)}{4-2}=\\frac{1-5}{2}=-2.\\]</p><p><strong>c)</strong> Den positiva ändringskvoten i a) visar att funktionen i genomsnitt <em>ökar</em> med 2 enheter per x-enhet mellan \\(0\\) och \\(2\\). Den negativa ändringskvoten i b) visar att funktionen i genomsnitt <em>minskar</em> med 2 enheter per x-enhet mellan \\(2\\) och \\(4\\).</p><p><strong>Svar:</strong> a) \\(\\boxed{2}\\) &nbsp;&nbsp; b) \\(\\boxed{-2}\\).</p>",
    "familj": "mato1_andringskvot_graf_tva_intervall"
  },
  {
    "id": "2.06",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm ekvationen för tangenten till grafen för</p><p>\\[f(x)=x^3-6x+4\\]</p><p>i punkten där \\(x=2\\).</p>",
    "s": "<p><strong>Steg 1: Bestäm derivatan.</strong></p><p>\\[f\\,\\!\\prime(x)=3x^2-6.\\]</p><p><strong>Steg 2: Bestäm tangentens lutning.</strong></p><p>\\[f\\,\\!\\prime(2)=3\\cdot 2^2-6=12-6=6.\\]</p><p>Alltså har tangenten lutningen \\(6\\).</p><p><strong>Steg 3: Bestäm punktens koordinater.</strong></p><p>\\[f(2)=2^3-6\\cdot 2+4=8-12+4=0.\\]</p><p>Punkten är alltså \\((2,0)\\).</p><p><strong>Steg 4: Skriv tangentens ekvation.</strong></p><p>Med punkt-lutningsform får vi</p><p>\\[y-0=6(x-2).\\]</p><p>Förenkla:</p><p>\\[y=6x-12.\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=6x-12}\\).</p>",
    "familj": "mato1_derivata_polynom_tangent"
  },
  {
    "id": "2.07",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm ekvationen för den tangent till grafen för</p><p>\\[f(x)=x^2-2x+5\\]</p><p>som är parallell med linjen \\(y=4x-1\\).</p>",
    "s": "<p>Om två linjer är parallella har de samma lutning. Linjen \\(y=4x-1\\) har lutningen \\(4\\).</p><p>Derivera funktionen:</p><p>\\[f\\,\\!\\prime(x)=2x-2.\\]</p><p>Den sökta tangenten ska alltså uppfylla</p><p>\\[f\\,\\!\\prime(x)=4.\\]</p><p>Lös ekvationen:</p><p>\\[2x-2=4\\]</p><p>\\[2x=6\\]</p><p>\\[x=3.\\]</p><p>Beräkna funktionsvärdet:</p><p>\\[f(3)=3^2-2\\cdot 3+5=9-6+5=8.\\]</p><p>Tangenten går alltså genom punkten \\((3,8)\\) och har lutningen \\(4\\).</p><p>Använd punkt-lutningsform:</p><p>\\[y-8=4(x-3).\\]</p><p>Förenkla:</p><p>\\[y=4x-4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=4x-4}\\).</p>",
    "familj": "mato1_tangent_parallell_linje"
  },
  {
    "id": "2.08",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Skriv om funktionen</p><p>\\[f(x)=5e^{0,4x}\\]</p><p>på formen \\(f(x)=5\\cdot a^x\\). Bestäm värdet på \\(a\\).</p>",
    "s": "<p>Vi använder sambandet</p><p>\\[e^{0,4x}=(e^{0,4})^x.\\]</p><p>Därför kan funktionen skrivas</p><p>\\[f(x)=5\\cdot (e^{0,4})^x.\\]</p><p>Alltså är</p><p>\\[a=e^{0,4}.\\]</p><p>Med räknare får man</p><p>\\[e^{0,4}\\approx 1,492.\\]</p><p><strong>Svar:</strong> \\(\\boxed{a=e^{0,4}\\approx 1,49}\\).</p>",
    "familj": "mato1_talet_e_skriv_om_bas_a"
  },
  {
    "id": "2.09",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>För en funktion \\(s(t)\\) gäller att tangenten till grafen i punkten där \\(t=3\\) har ekvationen</p><p>\\[y=5t-4.\\]</p><p>a) Bestäm \\(s\\,\\!\\prime(3)\\).<br>b) Vad betyder detta värde om \\(s\\) är en sträcka i meter och \\(t\\) mäts i sekunder?</p>",
    "s": "<p><strong>a)</strong> Derivatan i en punkt är tangentens lutning i den punkten. Tangentens ekvation är \\(y=5t-4\\), så lutningen är \\(5\\).</p><p>Alltså är</p><p>\\[s\\,\\!\\prime(3)=5.\\]</p><p><strong>b)</strong> Om \\(s\\) är sträcka i meter och \\(t\\) är tid i sekunder betyder derivatan den <em>momentana hastigheten</em>.</p><p><strong>Svar:</strong> \\(\\boxed{s\\,\\!\\prime(3)=5}\\). Det betyder att hastigheten vid \\(t=3\\) s är \\(\\boxed{5\\text{ m/s}}\\).</p>",
    "familj": "mato1_derivata_begrepp_tangent_lutning"
  },
  {
    "id": "2.10",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm derivatan av</p><p>\\[g(x)=5x^3-2\\sqrt{x}.\\]</p><p>Skriv gärna \\(\\sqrt{x}\\) som en potens först.</p>",
    "s": "<p>Skriv \\(\\sqrt{x}=x^{1/2}\\). Då blir funktionen</p><p>\\[g(x)=5x^3-2x^{1/2}.\\]</p><p>Derivera term för term:</p><p>\\[(5x^3)\\,\\!\\prime=15x^2\\]</p><p>och</p><p>\\[(-2x^{1/2})\\,\\!\\prime=-2\\cdot \\frac12 x^{-1/2}=-x^{-1/2}.\\]</p><p>Alltså</p><p>\\[\\boxed{g\\,\\!\\prime(x)=15x^2-x^{-1/2}}.\\]</p><p>Man kan också skriva svaret som</p><p>\\[\\boxed{g\\,\\!\\prime(x)=15x^2-\\frac{1}{\\sqrt{x}}}.\\]</p>",
    "familj": "mato1_derivata_potens_rot"
  },
  {
    "id": "2.11",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm ekvationen för tangenten till \\(f(x)=x^{2} + 1\\) i punkten där \\(x=1\\).</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=2 x\\), så tangentens lutning är</p><p>\\[k=f\\,\\!\\prime(1)=2.\\]</p><p>Punkten på grafen är \\((1,2)\\).</p><p>Med punkt-lutningsformen:</p><p>\\[y-2=2(x-1).\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=2 x}\\).</p>",
    "familj": "tangent_rutin_0"
  },
  {
    "id": "2.12",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[4e^{0,3x}=9\\]</p><p>algebraiskt.</p>",
    "s": "<p>Vi börjar med att isolera exponentialtermen:</p><p>\\[e^{0,3x}=\\frac94.\\]</p><p>Logaritmera båda leden med den naturliga logaritmen:</p><p>\\[\\ln(e^{0,3x})=\\ln\\left(\\frac94\\right).\\]</p><p>Eftersom \\(\\ln(e^u)=u\\) får vi</p><p>\\[0,3x=\\ln\\left(\\frac94\\right).\\]</p><p>Lös ut \\(x\\):</p><p>\\[x=\\frac{\\ln(9/4)}{0,3}.\\]</p><p>Med räknare:</p><p>\\[x\\approx \\frac{0,81093}{0,3}\\approx 2,70.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x\\approx 2,70}\\).</p>",
    "familj": "mato1_naturlig_logaritm_los_exp"
  },
  {
    "id": "2.13",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar grafen till en funktion \\(f\\) med punkterna \\(A\\), \\(B\\) och \\(C\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Matematisk figur\"><defs><marker id=\"g204arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"g204clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"83.26\" y1=\"20\" x2=\"83.26\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"153.79\" y1=\"20\" x2=\"153.79\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"224.32\" y1=\"20\" x2=\"224.32\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"294.84\" y1=\"20\" x2=\"294.84\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"365.37\" y1=\"20\" x2=\"365.37\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"435.89\" y1=\"20\" x2=\"435.89\" y2=\"273\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"249.13\" x2=\"450\" y2=\"249.13\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"201.40\" x2=\"450\" y2=\"201.40\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"153.66\" x2=\"450\" y2=\"153.66\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"105.92\" x2=\"450\" y2=\"105.92\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"58.19\" x2=\"450\" y2=\"58.19\" stroke=\"#E9E8EB\" stroke-width=\"1\"/><line x1=\"48\" y1=\"249.13\" x2=\"459\" y2=\"249.13\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g204arr)\"/><line x1=\"83.26\" y1=\"245.13\" x2=\"83.26\" y2=\"253.13\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"83.26\" y=\"266.13\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"153.79\" y1=\"245.13\" x2=\"153.79\" y2=\"253.13\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"153.79\" y=\"266.13\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"294.84\" y1=\"245.13\" x2=\"294.84\" y2=\"253.13\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"294.84\" y=\"266.13\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"365.37\" y1=\"245.13\" x2=\"365.37\" y2=\"253.13\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"365.37\" y=\"266.13\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"435.89\" y1=\"245.13\" x2=\"435.89\" y2=\"253.13\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"435.89\" y=\"266.13\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460.00\" y=\"241.13\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><text x=\"216.32\" y=\"266.13\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">0</text><line x1=\"224.32\" y1=\"273\" x2=\"224.32\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#g204arr)\"/><line x1=\"220.32\" y1=\"201.40\" x2=\"228.32\" y2=\"201.40\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"215.32\" y=\"204.90\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"220.32\" y1=\"153.66\" x2=\"228.32\" y2=\"153.66\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"215.32\" y=\"157.16\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"220.32\" y1=\"105.92\" x2=\"228.32\" y2=\"105.92\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"215.32\" y=\"109.42\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"220.32\" y1=\"58.19\" x2=\"228.32\" y2=\"58.19\" stroke=\"#2B2527\" stroke-width=\"1\"/><text x=\"215.32\" y=\"61.69\" text-anchor=\"end\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"236.32\" y=\"13.00\" font-family=\"IBM Plex Mono, monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,226.76 L49.01,224.10 L50.01,221.47 L51.01,218.88 L52.02,216.33 L53.03,213.81 L54.03,211.33 L55.03,208.89 L56.04,206.47 L57.05,204.10 L58.05,201.75 L59.06,199.45 L60.06,197.17 L61.06,194.93 L62.07,192.73 L63.08,190.55 L64.08,188.41 L65.08,186.31 L66.09,184.23 L67.09,182.19 L68.10,180.18 L69.10,178.20 L70.11,176.26 L71.11,174.35 L72.12,172.47 L73.13,170.62 L74.13,168.80 L75.13,167.01 L76.14,165.25 L77.15,163.52 L78.15,161.83 L79.15,160.16 L80.16,158.53 L81.16,156.92 L82.17,155.34 L83.18,153.79 L84.18,152.28 L85.19,150.79 L86.19,149.33 L87.20,147.89 L88.20,146.49 L89.20,145.11 L90.21,143.76 L91.22,142.44 L92.22,141.15 L93.22,139.88 L94.23,138.65 L95.23,137.43 L96.24,136.25 L97.25,135.09 L98.25,133.96 L99.25,132.85 L100.26,131.77 L101.27,130.71 L102.27,129.68 L103.27,128.68 L104.28,127.70 L105.28,126.74 L106.29,125.81 L107.29,124.90 L108.30,124.02 L109.31,123.16 L110.31,122.33 L111.31,121.52 L112.32,120.73 L113.33,119.96 L114.33,119.22 L115.34,118.50 L116.34,117.81 L117.34,117.13 L118.35,116.48 L119.35,115.85 L120.36,115.24 L121.37,114.65 L122.37,114.09 L123.38,113.54 L124.38,113.02 L125.39,112.51 L126.39,112.03 L127.40,111.56 L128.40,111.12 L129.41,110.70 L130.41,110.29 L131.41,109.91 L132.42,109.54 L133.43,109.20 L134.43,108.87 L135.44,108.56 L136.44,108.27 L137.44,108.00 L138.45,107.74 L139.45,107.50 L140.46,107.28 L141.47,107.08 L142.47,106.90 L143.47,106.73 L144.48,106.58 L145.49,106.44 L146.49,106.32 L147.50,106.22 L148.50,106.13 L149.50,106.06 L150.51,106.00 L151.51,105.96 L152.52,105.94 L153.53,105.93 L154.53,105.93 L155.54,105.95 L156.54,105.98 L157.55,106.02 L158.55,106.08 L159.56,106.16 L160.56,106.24 L161.56,106.34 L162.57,106.46 L163.57,106.58 L164.58,106.72 L165.58,106.87 L166.59,107.03 L167.59,107.21 L168.60,107.39 L169.60,107.59 L170.61,107.80 L171.62,108.02 L172.62,108.25 L173.62,108.49 L174.63,108.74 L175.63,109.00 L176.64,109.28 L177.65,109.56 L178.65,109.85 L179.66,110.15 L180.66,110.46 L181.67,110.78 L182.67,111.11 L183.68,111.45 L184.68,111.79 L185.69,112.14 L186.69,112.50 L187.70,112.87 L188.70,113.25 L189.71,113.63 L190.71,114.02 L191.72,114.42 L192.72,114.83 L193.72,115.24 L194.73,115.65 L195.73,116.08 L196.74,116.51 L197.75,116.94 L198.75,117.38 L199.76,117.83 L200.76,118.28 L201.77,118.73 L202.77,119.20 L203.78,119.66 L204.78,120.13 L205.78,120.60 L206.79,121.08 L207.80,121.56 L208.80,122.04 L209.80,122.53 L210.81,123.02 L211.81,123.51 L212.82,124.01 L213.82,124.51 L214.83,125.01 L215.83,125.51 L216.84,126.01 L217.85,126.52 L218.85,127.02 L219.85,127.53 L220.86,128.04 L221.87,128.55 L222.87,129.06 L223.87,129.57 L224.88,130.08 L225.88,130.59 L226.89,131.10 L227.90,131.61 L228.90,132.12 L229.91,132.62 L230.91,133.13 L231.92,133.64 L232.92,134.14 L233.92,134.64 L234.93,135.14 L235.94,135.64 L236.94,136.13 L237.94,136.63 L238.95,137.11 L239.95,137.60 L240.96,138.08 L241.97,138.56 L242.97,139.04 L243.97,139.51 L244.98,139.98 L245.99,140.45 L246.99,140.91 L248.00,141.36 L249.00,141.81 L250.01,142.26 L251.01,142.70 L252.02,143.13 L253.02,143.56 L254.02,143.98 L255.03,144.40 L256.04,144.81 L257.04,145.21 L258.04,145.61 L259.05,146.00 L260.06,146.38 L261.06,146.76 L262.07,147.13 L263.07,147.49 L264.07,147.84 L265.08,148.18 L266.09,148.52 L267.09,148.84 L268.09,149.16 L269.10,149.47 L270.11,149.77 L271.11,150.06 L272.12,150.34 L273.12,150.61 L274.12,150.87 L275.13,151.12 L276.13,151.36 L277.14,151.59 L278.14,151.81 L279.15,152.02 L280.15,152.22 L281.16,152.40 L282.17,152.57 L283.17,152.73 L284.17,152.88 L285.18,153.02 L286.19,153.14 L287.19,153.25 L288.19,153.35 L289.20,153.44 L290.21,153.51 L291.21,153.57 L292.22,153.61 L293.22,153.64 L294.22,153.66 L295.23,153.66 L296.24,153.65 L297.24,153.62 L298.25,153.58 L299.25,153.52 L300.25,153.44 L301.26,153.35 L302.26,153.25 L303.27,153.13 L304.27,152.99 L305.28,152.84 L306.29,152.67 L307.29,152.48 L308.29,152.27 L309.30,152.05 L310.31,151.81 L311.31,151.56 L312.32,151.28 L313.32,150.99 L314.32,150.68 L315.33,150.35 L316.33,150.00 L317.34,149.63 L318.34,149.24 L319.35,148.84 L320.36,148.41 L321.36,147.96 L322.37,147.50 L323.37,147.01 L324.38,146.51 L325.38,145.98 L326.38,145.43 L327.39,144.86 L328.39,144.27 L329.40,143.66 L330.40,143.03 L331.41,142.37 L332.42,141.69 L333.42,140.99 L334.43,140.27 L335.43,139.53 L336.44,138.76 L337.44,137.97 L338.44,137.16 L339.45,136.32 L340.45,135.46 L341.46,134.57 L342.47,133.66 L343.47,132.73 L344.48,131.77 L345.48,130.79 L346.49,129.78 L347.49,128.74 L348.50,127.69 L349.50,126.60 L350.50,125.49 L351.51,124.36 L352.52,123.19 L353.52,122.00 L354.53,120.79 L355.53,119.55 L356.54,118.28 L357.54,116.98 L358.54,115.66 L359.55,114.30 L360.56,112.93 L361.56,111.52 L362.56,110.08 L363.57,108.62 L364.57,107.12 L365.58,105.60 L366.59,104.05 L367.59,102.47 L368.59,100.86 L369.60,99.22 L370.61,97.55 L371.61,95.85 L372.62,94.12 L373.62,92.36 L374.62,90.57 L375.63,88.74 L376.63,86.89 L377.64,85.01 L378.64,83.09 L379.65,81.14 L380.66,79.16 L381.66,77.15 L382.67,75.10 L383.67,73.02 L384.67,70.91 L385.68,68.77 L386.68,66.59 L387.69,64.38 L388.69,62.14 L389.70,59.86 L390.71,57.54 L391.71,55.20 L392.72,52.82 L393.72,50.40 L394.72,47.95 L395.73,45.46 L396.73,42.94 L397.74,40.39 L398.75,37.79 L399.75,35.16 L400.75,32.50 L401.76,29.80 L402.77,27.06 L403.77,24.29 L404.77,21.48 L405.78,18.63 L406.78,15.74 L407.79,12.82 L408.79,9.85 L409.80,6.86 L410.81,3.82 L411.81,0.74 L412.81,-2.37 L413.82,-5.53 L414.82,-8.72 L415.83,-11.95 L416.83,-15.22 L417.84,-18.54 L418.84,-21.89 L419.85,-25.28 L420.86,-28.71 L421.86,-32.18 L422.86,-35.69 L423.87,-39.25 L424.88,-42.84 L425.88,-46.48 L426.88,-50.16 L427.89,-53.88 L428.89,-57.64 L429.90,-61.44 L430.91,-65.29 L431.91,-69.18 L432.91,-73.11 L433.92,-77.08 L434.93,-81.10 L435.93,-85.16 L436.94,-89.27 L437.94,-93.42 L438.94,-97.61 L439.95,-101.85 L440.96,-106.13 L441.96,-110.45 L442.96,-114.82 L443.97,-119.24 L444.98,-123.70 L445.98,-128.21 L446.99,-132.76 L447.99,-137.36 L449.00,-142.00 L450.00,-146.69\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#g204clip)\"/><circle cx=\"118.53\" cy=\"116.37\" r=\"4.3\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"125.53\" y=\"109.37\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"153.79\" cy=\"105.92\" r=\"4.3\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"160.79\" y=\"98.92\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"259.58\" cy=\"146.20\" r=\"4.3\" fill=\"#2A5D9E\" stroke=\"#FFFFFF\" stroke-width=\"1.4\"/><text x=\"266.58\" y=\"139.20\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"388.00\" y=\"36\" text-anchor=\"middle\" font-family=\"IBM Plex Mono, monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#2B2527\">y = f(x)</text></svg></span><p>Avgör om derivatan är positiv, noll eller negativ i respektive punkt. Motivera kort med hur grafen ser ut där.</p>",
    "s": "<p><strong>Punkt A:</strong> Grafen stiger när man passerar punkten, alltså är tangenten uppåtlutad och derivatan <strong>positiv</strong>.</p><p><strong>Punkt B:</strong> Punkten ligger i en toppunkt. Där är tangenten horisontell, alltså är derivatan <strong>0</strong>.</p><p><strong>Punkt C:</strong> Grafen sjunker i punkten, alltså är tangenten nedåtlutad och derivatan <strong>negativ</strong>.</p><p><strong>Svar:</strong> \\(f\\,\\!\\prime(A)&gt;0\\), \\(f\\,\\!\\prime(B)=0\\), \\(f\\,\\!\\prime(C)&lt;0\\).</p>",
    "familj": "mato1_derivata_tecken_graf"
  },
  {
    "id": "2.14",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera. Endast svar krävs.</p><p>a) \\(f_1(x)=3 x^{4} - 2 x^{2} + 5 x - 7\\)<br>b) \\(f_2(x)=5 x^{3} + 4 x\\)<br>c) \\(f_3(x)=3 - 2 x^{5}\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(f_1\\,\\!\\prime(x)=12 x^{3} - 4 x + 5\\)</p><p>b) \\(f_2\\,\\!\\prime(x)=15 x^{2} + 4\\)</p><p>c) \\(f_3\\,\\!\\prime(x)=- 10 x^{4}\\)</p>",
    "familj": "derivreg_multi_0"
  },
  {
    "id": "2.15",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm ekvationen för tangenten till \\(f(x)=x^{3} - 2 x\\) i punkten där \\(x=0\\).</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=3 x^{2} - 2\\), så tangentens lutning är</p><p>\\[k=f\\,\\!\\prime(0)=-2.\\]</p><p>Punkten på grafen är \\((0,0)\\).</p><p>Med punkt-lutningsformen:</p><p>\\[y-0=-2(x-0).\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=- 2 x}\\).</p>",
    "familj": "tangent_rutin_1"
  },
  {
    "id": "2.16",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Lös ekvationen</p><p>\\[x^{\\ln x}=e^5\\cdot x\\]</p><p>algebraiskt.</p>",
    "s": "<p><strong>Steg 1: Bestäm definitionsmängden.</strong> Eftersom \\(\\ln x\\) förekommer måste \\(x&gt;0\\).</p><p><strong>Steg 2: Logaritmera båda leden.</strong></p><p>\\[\\ln\\left(x^{\\ln x}\\right)=\\ln(e^5\\cdot x).\\]</p><p>Använd logaritmlagarna:</p><p>\\[(\\ln x)^2=5+\\ln x.\\]</p><p><strong>Steg 3: Sätt \\(t=\\ln x\\).</strong> Då får vi andragradsekvationen</p><p>\\[t^2-t-5=0.\\]</p><p>Lös med pq-formeln eller kvadratkomplettering:</p><p>\\[t=\\frac{1\\pm \\sqrt{21}}{2}.\\]</p><p>Eftersom \\(t=\\ln x\\) får vi</p><p>\\[\\ln x=\\frac{1+\\sqrt{21}}{2}\\quad \\text{eller}\\quad \\ln x=\\frac{1-\\sqrt{21}}{2}.\\]</p><p>Exponentiera:</p><p>\\[x=e^{\\frac{1+\\sqrt{21}}{2}}\\quad \\text{eller}\\quad x=e^{\\frac{1-\\sqrt{21}}{2}}.\\]</p><p><strong>Svar:</strong> \\[\\boxed{x_1=e^{\\frac{1+\\sqrt{21}}{2}},\\qquad x_2=e^{\\frac{1-\\sqrt{21}}{2}}}.\\]</p>",
    "familj": "mato1_naturlig_logaritm_x_lnx"
  },
  {
    "id": "2.17",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Tabellen visar några värden för en funktion \\(f\\).</p><table class=\"tabell\"><tr><th>\\(x\\)</th><th>1,9</th><th>2,0</th><th>2,1</th></tr><tr><th>\\(f(x)\\)</th><td>4,61</td><td>5,00</td><td>5,41</td></tr></table><p>Använd värdena i tabellen för att approximera \\(f\\,\\!\\prime(2)\\).</p>",
    "s": "<p><strong>Metod:</strong> En bra approximation fås med en symmetrisk differenskvot:</p><p>\\[f\\,\\!\\prime(2)\\approx \\frac{f(2,1)-f(1,9)}{2,1-1,9}.\\]</p><p>Sätt in tabellvärdena:</p><p>\\[f\\,\\!\\prime(2)\\approx \\frac{5,41-4,61}{0,2}=\\frac{0,80}{0,2}=4,0.\\]</p><p><strong>Svar:</strong> \\(\\boxed{f\\,\\!\\prime(2)\\approx 4}\\).</p>",
    "familj": "mato1_numerisk_derivering_tabell"
  },
  {
    "id": "2.18",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera. Endast svar krävs.</p><p>a) \\(f_1(x)=x^{6} - 4 x^{3} + 2 x\\)<br>b) \\(f_2(x)=\\frac{x^{4}}{2} - 3 x^{2}\\)<br>c) \\(f_3(x)=7 x^{2} - 5 x + 1\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(f_1\\,\\!\\prime(x)=6 x^{5} - 12 x^{2} + 2\\)</p><p>b) \\(f_2\\,\\!\\prime(x)=2 x^{3} - 6 x\\)</p><p>c) \\(f_3\\,\\!\\prime(x)=14 x - 5\\)</p>",
    "familj": "derivreg_multi_1"
  },
  {
    "id": "2.19",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm ekvationen för tangenten till \\(f(x)=2 x^{2} - 3 x + 4\\) i punkten där \\(x=2\\).</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=4 x - 3\\), så tangentens lutning är</p><p>\\[k=f\\,\\!\\prime(2)=5.\\]</p><p>Punkten på grafen är \\((2,6)\\).</p><p>Med punkt-lutningsformen:</p><p>\\[y-6=5(x-2).\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=5 x - 4}\\).</p>",
    "familj": "tangent_rutin_2"
  },
  {
    "id": "2.20",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm derivatan av funktionen</p><p>\\[f(x)=3e^{0,5x}\\]</p><p>och skriv därefter ekvationen för tangenten i punkten där \\(x=0\\).</p>",
    "s": "<p><strong>Steg 1: Derivera funktionen.</strong></p><p>När man deriverar \\(e^{kx}\\) får man \\(ke^{kx}\\). Alltså</p><p>\\[f\\,\\!\\prime(x)=3\\cdot 0,5e^{0,5x}=1,5e^{0,5x}.\\]</p><p><strong>Steg 2: Bestäm punkt och lutning vid \\(x=0\\).</strong></p><p>\\[f(0)=3e^0=3\\]</p><p>och</p><p>\\[f\\,\\!\\prime(0)=1,5e^0=1,5.\\]</p><p>Tangenten går alltså genom \\((0,3)\\) och har lutningen \\(1,5\\).</p><p><strong>Steg 3: Skriv tangentens ekvation.</strong></p><p>\\[y-3=1,5(x-0)\\]</p><p>så</p><p>\\[y=1,5x+3.\\]</p><p><strong>Svar:</strong> \\(\\boxed{f\\,\\!\\prime(x)=1,5e^{0,5x}}\\) och tangenten är \\(\\boxed{y=1,5x+3}\\).</p>",
    "familj": "mato1_derivata_exp_tangent"
  },
  {
    "id": "2.21",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Använd ett digitalt verktyg för att bestämma alla \\(x\\)-värden där tangenten till grafen för</p><p>\\[f(x)=x^3-6x^2+9x+1\\]</p><p>är horisontell. Ange också koordinaterna för motsvarande punkter på grafen. Beskriv kort hur du gjorde i ditt digitala verktyg.</p>",
    "s": "<p><strong>Exempel på metod i digitalt verktyg:</strong> Man kan skriva in \\(f(x)=x^3-6x^2+9x+1\\) och sedan antingen derivera till \\(f\\,\\!\\prime(x)\\) och lösa \\(f\\,\\!\\prime(x)=0\\), eller använda ett kommando som hittar extrempunkter.</p><p>Algebraiskt får man</p><p>\\[f\\,\\!\\prime(x)=3x^2-12x+9.\\]</p><p>Lös ekvationen:</p><p>\\[3x^2-12x+9=0\\]</p><p>\\[x^2-4x+3=0\\]</p><p>\\[(x-1)(x-3)=0.\\]</p><p>Alltså är \\(x=1\\) eller \\(x=3\\).</p><p>Beräkna funktionsvärdena:</p><p>\\[f(1)=1-6+9+1=5\\]</p><p>\\[f(3)=27-54+27+1=1.\\]</p><p><strong>Svar:</strong> Tangenten är horisontell i punkterna \\(\\boxed{(1,5)}\\) och \\(\\boxed{(3,1)}\\).</p>",
    "familj": "mato1_derivering_digitala_horisontell_tangent"
  },
  {
    "id": "2.22",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera. Endast svar krävs.</p><p>a) \\(f_1(x)=4 x^{\\frac{3}{2}} - 2 \\sqrt{x}\\)<br>b) \\(f_2(x)=2 x^{2} + \\frac{3}{x}\\)<br>c) \\(f_3(x)=- x + \\frac{5}{x^{2}}\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(f_1\\,\\!\\prime(x)=6 \\sqrt{x} - \\frac{1}{\\sqrt{x}}\\)</p><p>b) \\(f_2\\,\\!\\prime(x)=4 x - \\frac{3}{x^{2}}\\)</p><p>c) \\(f_3\\,\\!\\prime(x)=-1 - \\frac{10}{x^{3}}\\)</p>",
    "familj": "derivreg_multi_2"
  },
  {
    "id": "2.23",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm ekvationen för tangenten till \\(f(x)=x^{3} - 3 x^{2} + 2\\) i punkten där \\(x=1\\).</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=3 x^{2} - 6 x\\), så tangentens lutning är</p><p>\\[k=f\\,\\!\\prime(1)=-3.\\]</p><p>Punkten på grafen är \\((1,0)\\).</p><p>Med punkt-lutningsformen:</p><p>\\[y-0=-3(x-1).\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=3 - 3 x}\\).</p>",
    "familj": "tangent_rutin_3"
  },
  {
    "id": "2.24",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Antalet bakterier i en odling växer exponentiellt med tiden. Klockan 08.00 finns det 1800 bakterier och klockan 14.00 finns det 8100 bakterier.</p><p>Vid vilken tidpunkt växer bakterieantalet med 900 bakterier per timme?</p>",
    "s": "<p><strong>Steg 1: Ställ upp en exponentialfunktion.</strong></p><p>Låt \\(t\\) vara antalet timmar efter 08.00. Då kan modellen skrivas</p><p>\\[N(t)=Ce^{kt}.\\]</p><p>Vid \\(t=0\\) är \\(N(0)=1800\\), alltså är \\(C=1800\\).</p><p>Vid \\(t=6\\) (alltså kl. 14.00) är \\(N(6)=8100\\). Därför gäller</p><p>\\[1800e^{6k}=8100.\\]</p><p>Dela med 1800:</p><p>\\[e^{6k}=4,5.\\]</p><p>Logaritmera:</p><p>\\[6k=\\ln(4,5)\\]</p><p>\\[k=\\frac{\\ln(4,5)}{6}.\\]</p><p><strong>Steg 2: Derivera modellen.</strong></p><p>\\[N\\,\\!\\prime(t)=1800\\cdot \\frac{\\ln(4,5)}{6}\\, e^{\\frac{\\ln(4,5)}{6}t}.\\]</p><p>Vi söker den tidpunkt då</p><p>\\[N\\,\\!\\prime(t)=900.\\]</p><p>Sätt in:</p><p>\\[1800\\cdot \\frac{\\ln(4,5)}{6}\\, e^{\\frac{\\ln(4,5)}{6}t}=900.\\]</p><p>Förenkla först genom att dela med 1800:</p><p>\\[\\frac{\\ln(4,5)}{6}e^{\\frac{\\ln(4,5)}{6}t}=0,5.\\]</p><p>Alltså</p><p>\\[e^{\\frac{\\ln(4,5)}{6}t}=\\frac{0,5\\cdot 6}{\\ln(4,5)}=\\frac{3}{\\ln(4,5)}.\\]</p><p>Logaritmera:</p><p>\\[\\frac{\\ln(4,5)}{6}t=\\ln\\left(\\frac{3}{\\ln(4,5)}\\right).\\]</p><p>Så</p><p>\\[t=\\frac{6\\ln\\left(\\frac{3}{\\ln(4,5)}\\right)}{\\ln(4,5)}\\approx 4,57.\\]</p><p>Detta är cirka 4 timmar och 34 minuter efter 08.00.</p><p><strong>Svar:</strong> Tidpunkten är ungefär \\(\\boxed{12.34}\\).</p>",
    "familj": "mato1_exp_tillampning_tillvaxthastighet"
  },
  {
    "id": "2.25",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Följande programidé använder differenskvoten för att approximera derivatan av en funktion \\(f\\) i punkten \\(x=a\\).</p><pre style=\"font-family:IBM Plex Mono,monospace;font-size:12px;line-height:1.55;background:#F4F5F7;border:1px solid #E4E3E6;border-radius:8px;padding:10px 12px;overflow:auto\">def derivata(f, a, h):\n    return ( ________ ) / h</pre><p>a) Fyll i det saknade uttrycket.<br>b) Använd sedan programidén för att approximera derivatan av \\(f(x)=x^2+1\\) i punkten \\(x=3\\) med \\(h=0,1\\).</p>",
    "s": "<p><strong>a)</strong> En framåtriktad differenskvot skrivs</p><p>\\[\\frac{f(a+h)-f(a)}{h}.\\]</p><p>Det saknade uttrycket är alltså <code>f(a+h) - f(a)</code>.</p><p><strong>b)</strong> Här är \\(f(x)=x^2+1\\), \\(a=3\\) och \\(h=0,1\\).</p><p>Först beräknar vi</p><p>\\[f(3,1)=3,1^2+1=9,61+1=10,61\\]</p><p>och</p><p>\\[f(3)=3^2+1=10.\\]</p><p>Då blir approximationen</p><p>\\[\\frac{10,61-10}{0,1}=\\frac{0,61}{0,1}=6,1.\\]</p><p>Detta ligger nära det exakta värdet \\(f\\,\\!\\prime(3)=6\\).</p><p><strong>Svar:</strong> a) <code>f(a+h) - f(a)</code> &nbsp;&nbsp; b) \\(\\boxed{6,1}\\).</p>",
    "familj": "mato1_programmering_derivering_diffkvot"
  },
  {
    "id": "2.26",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Derivera. Endast svar krävs.</p><p>a) \\(f_1(x)=2 x^{5} + x^{3} - 8\\)<br>b) \\(f_2(x)=- 3 x^{4} + 6 x^{2}\\)<br>c) \\(f_3(x)=x^{\\frac{5}{2}} + 2 \\sqrt{x}\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(f_1\\,\\!\\prime(x)=10 x^{4} + 3 x^{2}\\)</p><p>b) \\(f_2\\,\\!\\prime(x)=- 12 x^{3} + 12 x\\)</p><p>c) \\(f_3\\,\\!\\prime(x)=\\frac{5 x^{\\frac{3}{2}}}{2} + \\frac{1}{\\sqrt{x}}\\)</p>",
    "familj": "derivreg_multi_3"
  },
  {
    "id": "2.27",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>På vilka punkter på grafen till \\(f(x)=x^{2} - 4 x + 1\\) har tangenten lutningen \\(2\\)?</p>",
    "s": "<p>En tangent med lutningen \\(2\\) kräver</p><p>\\[f\\,\\!\\prime(x)=2.\\]</p><p>Här är \\(f\\,\\!\\prime(x)=2 x - 4\\). Ekvationen ger \\(x=3\\).</p><p>För \\(x=3\\) är \\(f(x)=-2\\).</p><p><strong>Svar:</strong> \\(3,-2\\).</p>",
    "familj": "tangent_given_slope_0"
  },
  {
    "id": "2.28",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Skriv om \\(f(x)=3\\cdot 2^x\\) på formen \\(f(x)=3e^{kx}\\). Bestäm \\(k\\) med tre decimaler.</p>",
    "s": "<p>Använd \\(a^x=e^{x\\ln a}\\):</p><p>\\[2^x=e^{x\\ln(2)}.\\]</p><p>Alltså är \\(k=\\ln(2)\\approx 0,693\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=3e^{0,693x}}\\) ungefär.</p>",
    "familj": "exp_bas_e_0"
  },
  {
    "id": "2.29",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(f\\,\\!\\prime(2)\\) med hjälp av derivatans definition om</p><p>\\[f(x)=x^2+1.\\]</p>",
    "s": "<p><strong>Metod:</strong> Derivatans definition är</p><p>\\[f\\,\\!\\prime(a)=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}.\\]</p><p>Här är \\(a=2\\), alltså</p><p>\\[f\\,\\!\\prime(2)=\\lim_{h\\to 0}\\frac{f(2+h)-f(2)}{h}.\\]</p><p>Beräkna först funktionsvärdena:</p><p>\\[f(2+h)=(2+h)^2+1=4+4h+h^2+1=5+4h+h^2\\]</p><p>och</p><p>\\[f(2)=2^2+1=5.\\]</p><p>Sätt in:</p><p>\\[f\\,\\!\\prime(2)=\\lim_{h\\to 0}\\frac{5+4h+h^2-5}{h}\\]</p><p>\\[=\\lim_{h\\to 0}\\frac{4h+h^2}{h}\\]</p><p>\\[=\\lim_{h\\to 0}(4+h)=4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{f\\,\\!\\prime(2)=4}\\).</p>",
    "familj": "mato1_derivatans_definition_x2"
  },
  {
    "id": "2.30",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För \\(f(x)=2 x^{3} - 5 x\\), bestäm \\(f\\,\\!\\prime(2)\\).</p>",
    "s": "<p>Derivera först:</p><p>\\[f\\,\\!\\prime(x)=6 x^{2} - 5.\\]</p><p>Sätt sedan in \\(x=2\\):</p><p>\\[f\\,\\!\\prime(2)=19.\\]</p><p><strong>Svar:</strong> \\(\\boxed{19}\\).</p>",
    "familj": "derivreg_varde_0"
  },
  {
    "id": "2.31",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>På vilka punkter på grafen till \\(f(x)=x^{3} - 3 x\\) har tangenten lutningen \\(6\\)?</p>",
    "s": "<p>En tangent med lutningen \\(6\\) kräver</p><p>\\[f\\,\\!\\prime(x)=6.\\]</p><p>Här är \\(f\\,\\!\\prime(x)=3 x^{2} - 3\\). Ekvationen ger \\(x=- \\sqrt{3}, x=\\sqrt{3}\\).</p><p>För \\(x=- \\sqrt{3}\\) är \\(f(x)=0\\).</p><p>För \\(x=\\sqrt{3}\\) är \\(f(x)=0\\).</p><p><strong>Svar:</strong> \\(- \\sqrt{3},0\\), \\(\\sqrt{3},0\\).</p>",
    "familj": "tangent_given_slope_1"
  },
  {
    "id": "2.32",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Skriv om \\(f(x)=3\\cdot 5^x\\) på formen \\(f(x)=3e^{kx}\\). Bestäm \\(k\\) med tre decimaler.</p>",
    "s": "<p>Använd \\(a^x=e^{x\\ln a}\\):</p><p>\\[5^x=e^{x\\ln(5)}.\\]</p><p>Alltså är \\(k=\\ln(5)\\approx 1,609\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=3e^{1,609x}}\\) ungefär.</p>",
    "familj": "exp_bas_e_1"
  },
  {
    "id": "2.33",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Visa med hjälp av derivatans definition att derivatan av</p><p>\\[f(x)=\\frac{1}{x}\\]</p><p>är</p><p>\\[f\\,\\!\\prime(x)=-\\frac{1}{x^2}\\qquad (x\\neq 0).\\]</p>",
    "s": "<p><strong>Metod:</strong> Vi utgår från derivatans definition för ett godtyckligt \\(x\\neq 0\\):</p><p>\\[f\\,\\!\\prime(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}.\\]</p><p>Eftersom \\(f(x)=1/x\\) får vi</p><p>\\[f\\,\\!\\prime(x)=\\lim_{h\\to 0}\\frac{\\frac{1}{x+h}-\\frac{1}{x}}{h}.\\]</p><p>För att förenkla täljaren använder vi gemensam nämnare:</p><p>\\[\\frac{1}{x+h}-\\frac{1}{x}=\\frac{x-(x+h)}{x(x+h)}=\\frac{-h}{x(x+h)}.\\]</p><p>Då blir differenskvoten</p><p>\\[f\\,\\!\\prime(x)=\\lim_{h\\to 0}\\frac{\\frac{-h}{x(x+h)}}{h}.\\]</p><p>Förkorta med \\(h\\) (för \\(h\\neq 0\\)):</p><p>\\[f\\,\\!\\prime(x)=\\lim_{h\\to 0}\\left(-\\frac{1}{x(x+h)}\\right).\\]</p><p>När \\(h\\to 0\\) går \\(x+h\\to x\\), alltså</p><p>\\[f\\,\\!\\prime(x)=-\\frac{1}{x\\cdot x}=-\\frac{1}{x^2}.\\]</p><p><strong>Alltså:</strong> \\[\\boxed{f\\,\\!\\prime(x)=-\\frac{1}{x^2}}\\qquad (x\\neq 0).\\]</p>",
    "familj": "mato1_derivatans_definition_en_genom_x"
  },
  {
    "id": "2.34",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För \\(f(x)=x^{4} - 2 x^{2}\\), bestäm \\(f\\,\\!\\prime(-1)\\).</p>",
    "s": "<p>Derivera först:</p><p>\\[f\\,\\!\\prime(x)=4 x^{3} - 4 x.\\]</p><p>Sätt sedan in \\(x=-1\\):</p><p>\\[f\\,\\!\\prime(-1)=0.\\]</p><p><strong>Svar:</strong> \\(\\boxed{0}\\).</p>",
    "familj": "derivreg_varde_1"
  },
  {
    "id": "2.35",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>På vilka punkter på grafen till \\(f(x)=2 x^{2} + x\\) har tangenten lutningen \\(5\\)?</p>",
    "s": "<p>En tangent med lutningen \\(5\\) kräver</p><p>\\[f\\,\\!\\prime(x)=5.\\]</p><p>Här är \\(f\\,\\!\\prime(x)=4 x + 1\\). Ekvationen ger \\(x=1\\).</p><p>För \\(x=1\\) är \\(f(x)=3\\).</p><p><strong>Svar:</strong> \\(1,3\\).</p>",
    "familj": "tangent_given_slope_2"
  },
  {
    "id": "2.36",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Skriv om \\(f(x)=3\\cdot 1,08^x\\) på formen \\(f(x)=3e^{kx}\\). Bestäm \\(k\\) med tre decimaler.</p>",
    "s": "<p>Använd \\(a^x=e^{x\\ln a}\\):</p><p>\\[1,08^x=e^{x\\ln(1,08)}.\\]</p><p>Alltså är \\(k=\\ln(1,08)\\approx 0,077\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=3e^{0,077x}}\\) ungefär.</p>",
    "familj": "exp_bas_e_2"
  },
  {
    "id": "2.37",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För funktionen \\(f(x)=x^{2} + 2 x\\), bestäm den genomsnittliga förändringshastigheten på intervallet \\([1,3]\\).</p>",
    "s": "<p>Använd ändringskvoten</p><p>\\[\\frac{f(3)-f(1)}{3-1}.\\]</p><p>Här är \\(f(1)=3\\) och \\(f(3)=15\\), alltså</p><p>\\[\\frac{15-3}{2}=6.\\]</p><p><strong>Svar:</strong> \\(\\boxed{6}\\).</p>",
    "familj": "derivbeg_andringskvot_0"
  },
  {
    "id": "2.38",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För \\(f(x)=3 x^{2} + 4 x - 1\\), bestäm \\(f\\,\\!\\prime(3)\\).</p>",
    "s": "<p>Derivera först:</p><p>\\[f\\,\\!\\prime(x)=6 x + 4.\\]</p><p>Sätt sedan in \\(x=3\\):</p><p>\\[f\\,\\!\\prime(3)=22.\\]</p><p><strong>Svar:</strong> \\(\\boxed{22}\\).</p>",
    "familj": "derivreg_varde_2"
  },
  {
    "id": "2.39",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar en tangent \\(t\\) till grafen i punkten \\(P\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"tg0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"tg0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"128.40\" y1=\"20\" x2=\"128.40\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"208.80\" y1=\"20\" x2=\"208.80\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"289.20\" y1=\"20\" x2=\"289.20\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"369.60\" y1=\"20\" x2=\"369.60\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"244.89\" x2=\"450\" y2=\"244.89\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"216.78\" x2=\"450\" y2=\"216.78\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"160.56\" x2=\"450\" y2=\"160.56\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"132.44\" x2=\"450\" y2=\"132.44\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"76.22\" x2=\"450\" y2=\"76.22\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"48.11\" x2=\"450\" y2=\"48.11\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"244.89\" x2=\"459\" y2=\"244.89\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#tg0arr)\"/><line x1=\"48.00\" y1=\"240.89\" x2=\"48.00\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"208.80\" y1=\"240.89\" x2=\"208.80\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"208.80\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"289.20\" y1=\"240.89\" x2=\"289.20\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"289.20\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"369.60\" y1=\"240.89\" x2=\"369.60\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"369.60\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"240.89\" x2=\"450.00\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"236.89\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"128.40\" y1=\"273\" x2=\"128.40\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#tg0arr)\"/><line x1=\"124.40\" y1=\"273.00\" x2=\"132.40\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"124.40\" y1=\"216.78\" x2=\"132.40\" y2=\"216.78\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"220.28\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"124.40\" y1=\"188.67\" x2=\"132.40\" y2=\"188.67\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"192.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"124.40\" y1=\"160.56\" x2=\"132.40\" y2=\"160.56\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"164.06\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"124.40\" y1=\"132.44\" x2=\"132.40\" y2=\"132.44\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"135.94\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"124.40\" y1=\"104.33\" x2=\"132.40\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"124.40\" y1=\"76.22\" x2=\"132.40\" y2=\"76.22\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"79.72\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"124.40\" y1=\"48.11\" x2=\"132.40\" y2=\"48.11\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"51.61\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><line x1=\"124.40\" y1=\"20.00\" x2=\"132.40\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">8</text><text x=\"140.40\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,160.56 L48.80,161.11 L49.61,161.67 L50.41,162.22 L51.22,162.76 L52.02,163.30 L52.82,163.83 L53.63,164.35 L54.43,164.87 L55.24,165.39 L56.04,165.90 L56.84,166.40 L57.65,166.90 L58.45,167.39 L59.26,167.88 L60.06,168.36 L60.86,168.83 L61.67,169.30 L62.47,169.76 L63.28,170.22 L64.08,170.68 L64.88,171.12 L65.69,171.56 L66.49,172.00 L67.30,172.43 L68.10,172.85 L68.90,173.27 L69.71,173.69 L70.51,174.09 L71.32,174.50 L72.12,174.89 L72.92,175.28 L73.73,175.67 L74.53,176.05 L75.34,176.42 L76.14,176.79 L76.94,177.15 L77.75,177.51 L78.55,177.86 L79.36,178.21 L80.16,178.55 L80.96,178.88 L81.77,179.21 L82.57,179.53 L83.38,179.85 L84.18,180.16 L84.98,180.47 L85.79,180.77 L86.59,181.07 L87.40,181.35 L88.20,181.64 L89.00,181.92 L89.81,182.19 L90.61,182.46 L91.42,182.72 L92.22,182.97 L93.02,183.22 L93.83,183.47 L94.63,183.71 L95.44,183.94 L96.24,184.17 L97.04,184.39 L97.85,184.61 L98.65,184.82 L99.46,185.02 L100.26,185.22 L101.06,185.42 L101.87,185.61 L102.67,185.79 L103.48,185.97 L104.28,186.14 L105.08,186.30 L105.89,186.46 L106.69,186.62 L107.50,186.77 L108.30,186.91 L109.10,187.05 L109.91,187.18 L110.71,187.31 L111.52,187.43 L112.32,187.54 L113.12,187.65 L113.93,187.76 L114.73,187.85 L115.54,187.95 L116.34,188.03 L117.14,188.12 L117.95,188.19 L118.75,188.26 L119.56,188.33 L120.36,188.39 L121.16,188.44 L121.97,188.49 L122.77,188.53 L123.58,188.57 L124.38,188.60 L125.18,188.62 L125.99,188.64 L126.79,188.66 L127.60,188.66 L128.40,188.67 L129.20,188.66 L130.01,188.66 L130.81,188.64 L131.62,188.62 L132.42,188.60 L133.22,188.57 L134.03,188.53 L134.83,188.49 L135.64,188.44 L136.44,188.39 L137.24,188.33 L138.05,188.26 L138.85,188.19 L139.66,188.12 L140.46,188.03 L141.26,187.95 L142.07,187.85 L142.87,187.76 L143.68,187.65 L144.48,187.54 L145.28,187.43 L146.09,187.31 L146.89,187.18 L147.70,187.05 L148.50,186.91 L149.30,186.77 L150.11,186.62 L150.91,186.46 L151.72,186.30 L152.52,186.14 L153.32,185.97 L154.13,185.79 L154.93,185.61 L155.74,185.42 L156.54,185.22 L157.34,185.02 L158.15,184.82 L158.95,184.61 L159.76,184.39 L160.56,184.17 L161.36,183.94 L162.17,183.71 L162.97,183.47 L163.78,183.22 L164.58,182.97 L165.38,182.72 L166.19,182.46 L166.99,182.19 L167.80,181.92 L168.60,181.64 L169.40,181.35 L170.21,181.07 L171.01,180.77 L171.82,180.47 L172.62,180.16 L173.42,179.85 L174.23,179.53 L175.03,179.21 L175.84,178.88 L176.64,178.55 L177.44,178.21 L178.25,177.86 L179.05,177.51 L179.86,177.15 L180.66,176.79 L181.46,176.42 L182.27,176.05 L183.07,175.67 L183.88,175.28 L184.68,174.89 L185.48,174.50 L186.29,174.09 L187.09,173.69 L187.90,173.27 L188.70,172.85 L189.50,172.43 L190.31,172.00 L191.11,171.56 L191.92,171.12 L192.72,170.68 L193.52,170.22 L194.33,169.76 L195.13,169.30 L195.94,168.83 L196.74,168.36 L197.54,167.88 L198.35,167.39 L199.15,166.90 L199.96,166.40 L200.76,165.90 L201.56,165.39 L202.37,164.87 L203.17,164.35 L203.98,163.83 L204.78,163.30 L205.58,162.76 L206.39,162.22 L207.19,161.67 L208.00,161.11 L208.80,160.56 L209.60,159.99 L210.41,159.42 L211.21,158.84 L212.02,158.26 L212.82,157.67 L213.62,157.08 L214.43,156.48 L215.23,155.88 L216.04,155.27 L216.84,154.65 L217.64,154.03 L218.45,153.40 L219.25,152.77 L220.06,152.13 L220.86,151.49 L221.66,150.84 L222.47,150.19 L223.27,149.52 L224.08,148.86 L224.88,148.19 L225.68,147.51 L226.49,146.83 L227.29,146.14 L228.10,145.44 L228.90,144.74 L229.70,144.04 L230.51,143.33 L231.31,142.61 L232.12,141.89 L232.92,141.16 L233.72,140.43 L234.53,139.69 L235.33,138.94 L236.14,138.19 L236.94,137.43 L237.74,136.67 L238.55,135.90 L239.35,135.13 L240.16,134.35 L240.96,133.57 L241.76,132.78 L242.57,131.98 L243.37,131.18 L244.18,130.38 L244.98,129.56 L245.78,128.75 L246.59,127.92 L247.39,127.09 L248.20,126.26 L249.00,125.42 L249.80,124.57 L250.61,123.72 L251.41,122.86 L252.22,122.00 L253.02,121.13 L253.82,120.26 L254.63,119.38 L255.43,118.49 L256.24,117.60 L257.04,116.70 L257.84,115.80 L258.65,114.89 L259.45,113.98 L260.26,113.06 L261.06,112.13 L261.86,111.20 L262.67,110.27 L263.47,109.33 L264.28,108.38 L265.08,107.43 L265.88,106.47 L266.69,105.50 L267.49,104.53 L268.30,103.56 L269.10,102.58 L269.90,101.59 L270.71,100.60 L271.51,99.60 L272.32,98.60 L273.12,97.59 L273.92,96.57 L274.73,95.55 L275.53,94.53 L276.34,93.49 L277.14,92.46 L277.94,91.41 L278.75,90.36 L279.55,89.31 L280.36,88.25 L281.16,87.19 L281.96,86.11 L282.77,85.04 L283.57,83.96 L284.38,82.87 L285.18,81.77 L285.98,80.68 L286.79,79.57 L287.59,78.46 L288.40,77.34 L289.20,76.22 L290.00,75.09 L290.81,73.96 L291.61,72.82 L292.42,71.68 L293.22,70.53 L294.02,69.37 L294.83,68.21 L295.63,67.05 L296.44,65.87 L297.24,64.70 L298.04,63.51 L298.85,62.32 L299.65,61.13 L300.46,59.93 L301.26,58.72 L302.06,57.51 L302.87,56.29 L303.67,55.07 L304.48,53.84 L305.28,52.61 L306.08,51.37 L306.89,50.12 L307.69,48.87 L308.50,47.62 L309.30,46.35 L310.10,45.09 L310.91,43.81 L311.71,42.53 L312.52,41.25 L313.32,39.96 L314.12,38.66 L314.93,37.36 L315.73,36.05 L316.54,34.74 L317.34,33.42 L318.14,32.10 L318.95,30.77 L319.75,29.43 L320.56,28.09 L321.36,26.75 L322.16,25.39 L322.97,24.04 L323.77,22.67 L324.58,21.30 L325.38,19.93 L326.18,18.55 L326.99,17.16 L327.79,15.77 L328.60,14.37 L329.40,12.97 L330.20,11.56 L331.01,10.15 L331.81,8.73 L332.62,7.31 L333.42,5.87 L334.22,4.44 L335.03,3.00 L335.83,1.55 L336.64,0.09 L337.44,-1.36 L338.24,-2.83 L339.05,-4.30 L339.85,-5.78 L340.66,-7.26 L341.46,-8.74 L342.26,-10.24 L343.07,-11.73 L343.87,-13.24 L344.68,-14.75 L345.48,-16.26 L346.28,-17.78 L347.09,-19.31 L347.89,-20.84 L348.70,-22.38 L349.50,-23.92 L350.30,-25.47 L351.11,-27.03 L351.91,-28.59 L352.72,-30.15 L353.52,-31.72 L354.32,-33.30 L355.13,-34.88 L355.93,-36.47 L356.74,-38.07 L357.54,-39.67 L358.34,-41.27 L359.15,-42.88 L359.95,-44.50 L360.76,-46.12 L361.56,-47.75 L362.36,-49.38 L363.17,-51.02 L363.97,-52.66 L364.78,-54.31 L365.58,-55.97 L366.38,-57.63 L367.19,-59.30 L367.99,-60.97 L368.80,-62.65 L369.60,-64.33 L370.40,-66.02 L371.21,-67.72 L372.01,-69.42 L372.82,-71.12 L373.62,-72.84 L374.42,-74.55 L375.23,-76.28 L376.03,-78.01 L376.84,-79.74 L377.64,-81.48 L378.44,-83.23 L379.25,-84.98 L380.05,-86.74 L380.86,-88.50 L381.66,-90.27 L382.46,-92.04 L383.27,-93.82 L384.07,-95.60 L384.88,-97.39 L385.68,-99.19 L386.48,-100.99 L387.29,-102.80 L388.09,-104.61 L388.90,-106.43 L389.70,-108.26 L390.50,-110.09 L391.31,-111.92 L392.11,-113.76 L392.92,-115.61 L393.72,-117.46 L394.52,-119.32 L395.33,-121.19 L396.13,-123.05 L396.94,-124.93 L397.74,-126.81 L398.54,-128.70 L399.35,-130.59 L400.15,-132.49 L400.96,-134.39 L401.76,-136.30 L402.56,-138.21 L403.37,-140.13 L404.17,-142.06 L404.98,-143.99 L405.78,-145.93 L406.58,-147.87 L407.39,-149.82 L408.19,-151.77 L409.00,-153.73 L409.80,-155.69 L410.60,-157.67 L411.41,-159.64 L412.21,-161.62 L413.02,-163.61 L413.82,-165.60 L414.62,-167.60 L415.43,-169.61 L416.23,-171.62 L417.04,-173.63 L417.84,-175.65 L418.64,-177.68 L419.45,-179.71 L420.25,-181.75 L421.06,-183.79 L421.86,-185.84 L422.66,-187.90 L423.47,-189.96 L424.27,-192.03 L425.08,-194.10 L425.88,-196.17 L426.68,-198.26 L427.49,-200.35 L428.29,-202.44 L429.10,-204.54 L429.90,-206.65 L430.70,-208.76 L431.51,-210.87 L432.31,-213.00 L433.12,-215.12 L433.92,-217.26 L434.72,-219.40 L435.53,-221.54 L436.33,-223.69 L437.14,-225.85 L437.94,-228.01 L438.74,-230.18 L439.55,-232.35 L440.35,-234.53 L441.16,-236.71 L441.96,-238.90 L442.76,-241.10 L443.57,-243.30 L444.37,-245.51 L445.18,-247.72 L445.98,-249.94 L446.78,-252.16 L447.59,-254.39 L448.39,-256.62 L449.20,-258.87 L450.00,-261.11\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#tg0clip)\"/><text x=\"369.60\" y=\"76.22\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><line x1=\"48.00\" y1=\"273.00\" x2=\"450.00\" y2=\"-8.11\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><text x=\"256.00\" y=\"126.44\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2A5D9E\">t</text><circle cx=\"208.80\" cy=\"160.56\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"215.80\" y=\"153.56\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text></svg></span><p>a) Bestäm tangentens lutning.<br>b) Bestäm tangentens ekvation.</p>",
    "s": "<p>Av rutnätet kan man avläsa att tangenten ändras \\(2\\) i y-led när x ökar med 1. Lutningen är därför \\(2\\).</p><p>Linjen skär y-axeln vid \\(1\\), så</p><p><strong>Svar:</strong> \\(\\boxed{y=2x+1}\\).</p>",
    "familj": "tangent_graf_0"
  },
  {
    "id": "2.40",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Skriv om \\(f(x)=3\\cdot 0,93^x\\) på formen \\(f(x)=3e^{kx}\\). Bestäm \\(k\\) med tre decimaler.</p>",
    "s": "<p>Använd \\(a^x=e^{x\\ln a}\\):</p><p>\\[0,93^x=e^{x\\ln(0,93)}.\\]</p><p>Alltså är \\(k=\\ln(0,93)\\approx -0,073\\).</p><p><strong>Svar:</strong> \\(\\boxed{f(x)=3e^{-0,073x}}\\) ungefär.</p>",
    "familj": "exp_bas_e_3"
  },
  {
    "id": "2.41",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För funktionen \\(f(x)=x^{3}\\), bestäm den genomsnittliga förändringshastigheten på intervallet \\([0,2]\\).</p>",
    "s": "<p>Använd ändringskvoten</p><p>\\[\\frac{f(2)-f(0)}{2-0}.\\]</p><p>Här är \\(f(0)=0\\) och \\(f(2)=8\\), alltså</p><p>\\[\\frac{8-0}{2}=4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{4}\\).</p>",
    "familj": "derivbeg_andringskvot_1"
  },
  {
    "id": "2.42",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla x-värden där derivatan till \\(f(x)=x^{3} - 3 x^{2} - 9 x\\) är noll.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=3 \\left(x - 3\\right) \\left(x + 1\\right).\\]</p><p>Lös \\(f\\,\\!\\prime(x)=0\\) med nollproduktmetoden.</p><p><strong>Svar:</strong> \\(x=-1, x=3\\).</p>",
    "familj": "derivreg_nollstallen_0"
  },
  {
    "id": "2.43",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar en tangent \\(t\\) till grafen i punkten \\(P\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"tg1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"tg1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"128.40\" y1=\"20\" x2=\"128.40\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"208.80\" y1=\"20\" x2=\"208.80\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"289.20\" y1=\"20\" x2=\"289.20\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"369.60\" y1=\"20\" x2=\"369.60\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"244.89\" x2=\"450\" y2=\"244.89\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"216.78\" x2=\"450\" y2=\"216.78\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"160.56\" x2=\"450\" y2=\"160.56\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"132.44\" x2=\"450\" y2=\"132.44\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"76.22\" x2=\"450\" y2=\"76.22\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"48.11\" x2=\"450\" y2=\"48.11\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"244.89\" x2=\"459\" y2=\"244.89\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#tg1arr)\"/><line x1=\"48.00\" y1=\"240.89\" x2=\"48.00\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"208.80\" y1=\"240.89\" x2=\"208.80\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"208.80\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"289.20\" y1=\"240.89\" x2=\"289.20\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"289.20\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"369.60\" y1=\"240.89\" x2=\"369.60\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"369.60\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"240.89\" x2=\"450.00\" y2=\"248.89\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"261.89\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"236.89\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"128.40\" y1=\"273\" x2=\"128.40\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#tg1arr)\"/><line x1=\"124.40\" y1=\"273.00\" x2=\"132.40\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"124.40\" y1=\"216.78\" x2=\"132.40\" y2=\"216.78\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"220.28\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"124.40\" y1=\"188.67\" x2=\"132.40\" y2=\"188.67\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"192.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"124.40\" y1=\"160.56\" x2=\"132.40\" y2=\"160.56\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"164.06\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"124.40\" y1=\"132.44\" x2=\"132.40\" y2=\"132.44\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"135.94\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"124.40\" y1=\"104.33\" x2=\"132.40\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"124.40\" y1=\"76.22\" x2=\"132.40\" y2=\"76.22\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"79.72\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><line x1=\"124.40\" y1=\"48.11\" x2=\"132.40\" y2=\"48.11\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"51.61\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">7</text><line x1=\"124.40\" y1=\"20.00\" x2=\"132.40\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"119.40\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">8</text><text x=\"140.40\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,-148.67 L48.80,-146.70 L49.61,-144.74 L50.41,-142.79 L51.22,-140.84 L52.02,-138.90 L52.82,-136.96 L53.63,-135.03 L54.43,-133.10 L55.24,-131.18 L56.04,-129.27 L56.84,-127.36 L57.65,-125.46 L58.45,-123.56 L59.26,-121.67 L60.06,-119.78 L60.86,-117.90 L61.67,-116.03 L62.47,-114.16 L63.28,-112.29 L64.08,-110.44 L64.88,-108.58 L65.69,-106.74 L66.49,-104.89 L67.30,-103.06 L68.10,-101.23 L68.90,-99.40 L69.71,-97.59 L70.51,-95.77 L71.32,-93.97 L72.12,-92.16 L72.92,-90.37 L73.73,-88.58 L74.53,-86.79 L75.34,-85.01 L76.14,-83.24 L76.94,-81.47 L77.75,-79.71 L78.55,-77.95 L79.36,-76.20 L80.16,-74.45 L80.96,-72.71 L81.77,-70.98 L82.57,-69.25 L83.38,-67.53 L84.18,-65.81 L84.98,-64.10 L85.79,-62.39 L86.59,-60.69 L87.40,-59.00 L88.20,-57.31 L89.00,-55.62 L89.81,-53.94 L90.61,-52.27 L91.42,-50.60 L92.22,-48.94 L93.02,-47.29 L93.83,-45.64 L94.63,-43.99 L95.44,-42.35 L96.24,-40.72 L97.04,-39.09 L97.85,-37.47 L98.65,-35.85 L99.46,-34.24 L100.26,-32.64 L101.06,-31.04 L101.87,-29.44 L102.67,-27.86 L103.48,-26.27 L104.28,-24.70 L105.08,-23.13 L105.89,-21.56 L106.69,-20.00 L107.50,-18.44 L108.30,-16.90 L109.10,-15.35 L109.91,-13.81 L110.71,-12.28 L111.52,-10.76 L112.32,-9.24 L113.12,-7.72 L113.93,-6.21 L114.73,-4.71 L115.54,-3.21 L116.34,-1.72 L117.14,-0.23 L117.95,1.25 L118.75,2.73 L119.56,4.20 L120.36,5.66 L121.16,7.12 L121.97,8.58 L122.77,10.02 L123.58,11.47 L124.38,12.90 L125.18,14.33 L125.99,15.76 L126.79,17.18 L127.60,18.59 L128.40,20.00 L129.20,21.40 L130.01,22.80 L130.81,24.19 L131.62,25.58 L132.42,26.96 L133.22,28.33 L134.03,29.70 L134.83,31.06 L135.64,32.42 L136.44,33.77 L137.24,35.12 L138.05,36.46 L138.85,37.80 L139.66,39.13 L140.46,40.45 L141.26,41.77 L142.07,43.08 L142.87,44.39 L143.68,45.69 L144.48,46.99 L145.28,48.28 L146.09,49.56 L146.89,50.84 L147.70,52.11 L148.50,53.38 L149.30,54.64 L150.11,55.90 L150.91,57.15 L151.72,58.40 L152.52,59.64 L153.32,60.87 L154.13,62.10 L154.93,63.32 L155.74,64.54 L156.54,65.75 L157.34,66.96 L158.15,68.16 L158.95,69.35 L159.76,70.54 L160.56,71.72 L161.36,72.90 L162.17,74.07 L162.97,75.24 L163.78,76.40 L164.58,77.56 L165.38,78.71 L166.19,79.85 L166.99,80.99 L167.80,82.12 L168.60,83.25 L169.40,84.37 L170.21,85.49 L171.01,86.60 L171.82,87.70 L172.62,88.80 L173.42,89.90 L174.23,90.98 L175.03,92.07 L175.84,93.14 L176.64,94.21 L177.44,95.28 L178.25,96.34 L179.05,97.39 L179.86,98.44 L180.66,99.48 L181.46,100.52 L182.27,101.55 L183.07,102.58 L183.88,103.60 L184.68,104.61 L185.48,105.62 L186.29,106.63 L187.09,107.63 L187.90,108.62 L188.70,109.60 L189.50,110.59 L190.31,111.56 L191.11,112.53 L191.92,113.49 L192.72,114.45 L193.52,115.41 L194.33,116.35 L195.13,117.30 L195.94,118.23 L196.74,119.16 L197.54,120.09 L198.35,121.01 L199.15,121.92 L199.96,122.83 L200.76,123.73 L201.56,124.63 L202.37,125.52 L203.17,126.40 L203.98,127.28 L204.78,128.16 L205.58,129.03 L206.39,129.89 L207.19,130.75 L208.00,131.60 L208.80,132.44 L209.60,133.28 L210.41,134.12 L211.21,134.95 L212.02,135.77 L212.82,136.59 L213.62,137.40 L214.43,138.21 L215.23,139.01 L216.04,139.81 L216.84,140.60 L217.64,141.38 L218.45,142.16 L219.25,142.93 L220.06,143.70 L220.86,144.46 L221.66,145.22 L222.47,145.97 L223.27,146.71 L224.08,147.45 L224.88,148.19 L225.68,148.91 L226.49,149.64 L227.29,150.35 L228.10,151.07 L228.90,151.77 L229.70,152.47 L230.51,153.17 L231.31,153.85 L232.12,154.54 L232.92,155.21 L233.72,155.89 L234.53,156.55 L235.33,157.21 L236.14,157.87 L236.94,158.52 L237.74,159.16 L238.55,159.80 L239.35,160.43 L240.16,161.06 L240.96,161.68 L241.76,162.30 L242.57,162.91 L243.37,163.51 L244.18,164.11 L244.98,164.70 L245.78,165.29 L246.59,165.87 L247.39,166.45 L248.20,167.02 L249.00,167.58 L249.80,168.14 L250.61,168.70 L251.41,169.24 L252.22,169.79 L253.02,170.32 L253.82,170.86 L254.63,171.38 L255.43,171.90 L256.24,172.42 L257.04,172.92 L257.84,173.43 L258.65,173.93 L259.45,174.42 L260.26,174.90 L261.06,175.38 L261.86,175.86 L262.67,176.33 L263.47,176.79 L264.28,177.25 L265.08,177.70 L265.88,178.15 L266.69,178.59 L267.49,179.03 L268.30,179.46 L269.10,179.88 L269.90,180.30 L270.71,180.71 L271.51,181.12 L272.32,181.52 L273.12,181.92 L273.92,182.31 L274.73,182.70 L275.53,183.08 L276.34,183.45 L277.14,183.82 L277.94,184.18 L278.75,184.54 L279.55,184.89 L280.36,185.23 L281.16,185.57 L281.96,185.91 L282.77,186.24 L283.57,186.56 L284.38,186.88 L285.18,187.19 L285.98,187.50 L286.79,187.80 L287.59,188.09 L288.40,188.38 L289.20,188.67 L290.00,188.94 L290.81,189.22 L291.61,189.48 L292.42,189.75 L293.22,190.00 L294.02,190.25 L294.83,190.50 L295.63,190.74 L296.44,190.97 L297.24,191.20 L298.04,191.42 L298.85,191.64 L299.65,191.85 L300.46,192.05 L301.26,192.25 L302.06,192.44 L302.87,192.63 L303.67,192.82 L304.48,192.99 L305.28,193.16 L306.08,193.33 L306.89,193.49 L307.69,193.65 L308.50,193.79 L309.30,193.94 L310.10,194.08 L310.91,194.21 L311.71,194.33 L312.52,194.45 L313.32,194.57 L314.12,194.68 L314.93,194.78 L315.73,194.88 L316.54,194.97 L317.34,195.06 L318.14,195.14 L318.95,195.22 L319.75,195.29 L320.56,195.35 L321.36,195.41 L322.16,195.47 L322.97,195.51 L323.77,195.56 L324.58,195.59 L325.38,195.62 L326.18,195.65 L326.99,195.67 L327.79,195.68 L328.60,195.69 L329.40,195.69 L330.20,195.69 L331.01,195.68 L331.81,195.67 L332.62,195.65 L333.42,195.62 L334.22,195.59 L335.03,195.56 L335.83,195.51 L336.64,195.47 L337.44,195.41 L338.24,195.35 L339.05,195.29 L339.85,195.22 L340.66,195.14 L341.46,195.06 L342.26,194.97 L343.07,194.88 L343.87,194.78 L344.68,194.68 L345.48,194.57 L346.28,194.45 L347.09,194.33 L347.89,194.21 L348.70,194.08 L349.50,193.94 L350.30,193.79 L351.11,193.65 L351.91,193.49 L352.72,193.33 L353.52,193.16 L354.32,192.99 L355.13,192.82 L355.93,192.63 L356.74,192.44 L357.54,192.25 L358.34,192.05 L359.15,191.85 L359.95,191.64 L360.76,191.42 L361.56,191.20 L362.36,190.97 L363.17,190.74 L363.97,190.50 L364.78,190.25 L365.58,190.00 L366.38,189.75 L367.19,189.48 L367.99,189.22 L368.80,188.94 L369.60,188.67 L370.40,188.38 L371.21,188.09 L372.01,187.80 L372.82,187.50 L373.62,187.19 L374.42,186.88 L375.23,186.56 L376.03,186.24 L376.84,185.91 L377.64,185.57 L378.44,185.23 L379.25,184.89 L380.05,184.54 L380.86,184.18 L381.66,183.82 L382.46,183.45 L383.27,183.08 L384.07,182.70 L384.88,182.31 L385.68,181.92 L386.48,181.52 L387.29,181.12 L388.09,180.71 L388.90,180.30 L389.70,179.88 L390.50,179.46 L391.31,179.03 L392.11,178.59 L392.92,178.15 L393.72,177.70 L394.52,177.25 L395.33,176.79 L396.13,176.33 L396.94,175.86 L397.74,175.38 L398.54,174.90 L399.35,174.42 L400.15,173.93 L400.96,173.43 L401.76,172.92 L402.56,172.42 L403.37,171.90 L404.17,171.38 L404.98,170.86 L405.78,170.32 L406.58,169.79 L407.39,169.24 L408.19,168.70 L409.00,168.14 L409.80,167.58 L410.60,167.02 L411.41,166.45 L412.21,165.87 L413.02,165.29 L413.82,164.70 L414.62,164.11 L415.43,163.51 L416.23,162.91 L417.04,162.30 L417.84,161.68 L418.64,161.06 L419.45,160.43 L420.25,159.80 L421.06,159.16 L421.86,158.52 L422.66,157.87 L423.47,157.21 L424.27,156.55 L425.08,155.89 L425.88,155.21 L426.68,154.54 L427.49,153.85 L428.29,153.17 L429.10,152.47 L429.90,151.77 L430.70,151.07 L431.51,150.35 L432.31,149.64 L433.12,148.91 L433.92,148.19 L434.72,147.45 L435.53,146.71 L436.33,145.97 L437.14,145.22 L437.94,144.46 L438.74,143.70 L439.55,142.93 L440.35,142.16 L441.16,141.38 L441.96,140.60 L442.76,139.81 L443.57,139.01 L444.37,138.21 L445.18,137.40 L445.98,136.59 L446.78,135.77 L447.59,134.95 L448.39,134.12 L449.20,133.28 L450.00,132.44\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#tg1clip)\"/><text x=\"369.60\" y=\"76.22\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><line x1=\"48.00\" y1=\"104.33\" x2=\"450.00\" y2=\"244.89\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><text x=\"256.00\" y=\"168.61\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2A5D9E\">t</text><circle cx=\"289.20\" cy=\"188.67\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"296.20\" y=\"181.67\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text></svg></span><p>a) Bestäm tangentens lutning.<br>b) Bestäm tangentens ekvation.</p>",
    "s": "<p>Av rutnätet kan man avläsa att tangenten ändras \\(-1\\) i y-led när x ökar med 1. Lutningen är därför \\(-1\\).</p><p>Linjen skär y-axeln vid \\(4\\), så</p><p><strong>Svar:</strong> \\(\\boxed{y=-1x+4}\\).</p>",
    "familj": "tangent_graf_1"
  },
  {
    "id": "2.44",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[2e^{0,4x}=7.\\]</p>",
    "s": "<p>Isolera exponentialtermen:</p><p>\\[e^{0,4x}=3,5.\\]</p><p>Logaritmera:</p><p>\\[0,4x=\\ln(3,5).\\]</p><p>\\[x=\\frac{\\ln(3,5)}{0,4}\\approx 3,13.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x\\approx 3,13}\\).</p>",
    "familj": "exp_ln_eq_0"
  },
  {
    "id": "2.45",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För funktionen \\(f(x)=3 x^{2} - x\\), bestäm den genomsnittliga förändringshastigheten på intervallet \\([2,4]\\).</p>",
    "s": "<p>Använd ändringskvoten</p><p>\\[\\frac{f(4)-f(2)}{4-2}.\\]</p><p>Här är \\(f(2)=10\\) och \\(f(4)=44\\), alltså</p><p>\\[\\frac{44-10}{2}=17.\\]</p><p><strong>Svar:</strong> \\(\\boxed{17}\\).</p>",
    "familj": "derivbeg_andringskvot_2"
  },
  {
    "id": "2.46",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla x-värden där derivatan till \\(f(x)=x^{4} - 8 x^{2}\\) är noll.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=4 x \\left(x - 2\\right) \\left(x + 2\\right).\\]</p><p>Lös \\(f\\,\\!\\prime(x)=0\\) med nollproduktmetoden.</p><p><strong>Svar:</strong> \\(x=-2, x=0, x=2\\).</p>",
    "familj": "derivreg_nollstallen_1"
  },
  {
    "id": "2.47",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm den tangent till \\(f(x)=x^2+2x\\) som är parallell med linjen \\(y=6x-4\\).</p>",
    "s": "<p>Parallella linjer har samma lutning, alltså ska tangentens lutning vara 6.</p><p>\\[f\\,\\!\\prime(x)=2x+2.\\]</p><p>\\[2x+2=6\\Rightarrow x=2.\\]</p><p>\\[f(2)=4+4=8.\\]</p><p>Tangenten genom \\((2,8)\\) med lutningen 6 är</p><p>\\[y-8=6(x-2)\\Rightarrow y=6x-4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{y=6x-4}\\).</p>",
    "familj": "tangent_parallel"
  },
  {
    "id": "2.48",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[5e^{0,2x}=12.\\]</p>",
    "s": "<p>Isolera exponentialtermen:</p><p>\\[e^{0,2x}=2,4.\\]</p><p>Logaritmera:</p><p>\\[0,2x=\\ln(2,4).\\]</p><p>\\[x=\\frac{\\ln(2,4)}{0,2}\\approx 4,38.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x\\approx 4,38}\\).</p>",
    "familj": "exp_ln_eq_1"
  },
  {
    "id": "2.49",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Tabellen visar värden nära en punkt.</p><table class=\"tabell\"><tr><th>x</th><th>1,9</th><th>2</th><th>2,1</th></tr><tr><th>f(x)</th><td>2,51</td><td>3</td><td>3,51</td></tr></table><p>Approximerа \\(f\\,\\!\\prime(2)\\) med en symmetrisk differenskvot.</p>",
    "s": "<p>En symmetrisk approximation är</p><p>\\[f\\,\\!\\prime(2)\\approx \\frac{f(2,1)-f(1,9)}{0,2}.\\]</p><p>\\[=\\frac{3,51-2,51}{0,2}=5.\\]</p><p><strong>Svar:</strong> ungefär \\(5\\).</p>",
    "familj": "derivbeg_numerisk_0"
  },
  {
    "id": "2.50",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen \\(f(x)=ax^3-6x^2+9x\\) har en stationär punkt vid \\(x=1\\). Bestäm \\(a\\).</p>",
    "s": "<p>En stationär punkt innebär att derivatan är noll.</p><p>\\[f\\,\\!\\prime(x)=3ax^2-12x+9.\\]</p><p>Sätt \\(x=1\\):</p><p>\\[3a-12+9=0\\]</p><p>\\[3a-3=0\\Rightarrow a=1.\\]</p><p><strong>Svar:</strong> \\(\\boxed{a=1}\\).</p>",
    "familj": "derivreg_parameter_stationar"
  },
  {
    "id": "2.51",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Bestäm alla tangenter till kurvan \\(y=x^2\\) som går genom punkten \\((0,-4)\\).</p>",
    "s": "<p>Låt tangenten tangera vid \\(x=a\\). Punkten på kurvan är \\((a,a^2)\\) och lutningen är \\(2a\\).</p><p>Tangentens ekvation blir</p><p>\\[y-a^2=2a(x-a)\\]</p><p>vilket förenklas till</p><p>\\[y=2ax-a^2.\\]</p><p>Eftersom tangenten ska gå genom \\((0,-4)\\):</p><p>\\[-4=-a^2\\Rightarrow a=\\pm2.\\]</p><p>För \\(a=2\\): \\(y=4x-4\\). För \\(a=-2\\): \\(y=-4x-4\\).</p><p><strong>Svar:</strong> \\(\\boxed{y=4x-4}\\) och \\(\\boxed{y=-4x-4}\\).</p>",
    "familj": "tangent_genom_extern_punkt"
  },
  {
    "id": "2.52",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen</p><p>\\[3e^{0,5x}=20.\\]</p>",
    "s": "<p>Isolera exponentialtermen:</p><p>\\[e^{0,5x}=6,6667.\\]</p><p>Logaritmera:</p><p>\\[0,5x=\\ln(6,6667).\\]</p><p>\\[x=\\frac{\\ln(6,6667)}{0,5}\\approx 3,79.\\]</p><p><strong>Svar:</strong> \\(\\boxed{x\\approx 3,79}\\).</p>",
    "familj": "exp_ln_eq_2"
  },
  {
    "id": "2.53",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Tabellen visar värden nära en punkt.</p><table class=\"tabell\"><tr><th>x</th><th>0,99</th><th>1</th><th>1,01</th></tr><tr><th>f(x)</th><td>4,0201</td><td>4</td><td>3,9801</td></tr></table><p>Approximerа \\(f\\,\\!\\prime(1)\\) med en symmetrisk differenskvot.</p>",
    "s": "<p>En symmetrisk approximation är</p><p>\\[f\\,\\!\\prime(1)\\approx \\frac{f(1,01)-f(0,99)}{0,02}.\\]</p><p>\\[=\\frac{3,9801-4,0201}{0,02}=-2.\\]</p><p><strong>Svar:</strong> ungefär \\(-2\\).</p>",
    "familj": "derivbeg_numerisk_1"
  },
  {
    "id": "2.54",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>För en potensfunktion \\(f(x)=kx^n\\) gäller att \\(f(2)=24\\) och \\(f\\,\\!\\prime(2)=36\\). Bestäm \\(k\\) och \\(n\\).</p>",
    "s": "<p>För \\(f(x)=kx^n\\) är</p><p>\\[f\\,\\!\\prime(x)=knx^{n-1}.\\]</p><p>Vid \\(x=2\\) gäller</p><p>\\[k2^n=24\\]</p><p>och</p><p>\\[kn2^{n-1}=36.\\]</p><p>Dividera den andra ekvationen med den första:</p><p>\\[\\frac{n}{2}=\\frac{36}{24}=\\frac32\\]</p><p>så \\(n=3\\). Då ger \\(k2^3=24\\), alltså \\(k=3\\).</p><p><strong>Svar:</strong> \\(\\boxed{k=3,\\ n=3}\\).</p>",
    "familj": "derivreg_potens_parameter"
  },
  {
    "id": "2.55",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + 2\\) i punkten där \\(x=-1\\).</p>",
    "s": "<p>\\[f'(x)=2 x,\\qquad f'(-1)=-2.\\]</p><p>Punkten är \\((-1,3)\\). Punkt-lutningsformen ger</p><p>\\[y-3=-2(x--1),\\]</p><p>alltså \\(\\boxed{y=1 - 2 x}\\).</p>",
    "familj": "topup_tangent_0"
  },
  {
    "id": "2.56",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Derivera. Endast svar krävs.</p><p>a) \\(2e^{3x}\\)<br>b) \\(5e^{-0,5x}\\)<br>c) \\(7^x\\)<br>d) \\(3\\cdot2^x\\).</p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(6e^{3x}\\)</p><p>b) \\(-2,5e^{-0,5x}\\)</p><p>c) \\(7^x\\ln7\\)</p><p>d) \\(3\\cdot2^x\\ln2\\)</p>",
    "familj": "exp_deriv_multi"
  },
  {
    "id": "2.57",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Figuren visar grafen till \\(f\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"db1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"db1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"105.43\" y1=\"20\" x2=\"105.43\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"162.86\" y1=\"20\" x2=\"162.86\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"220.29\" y1=\"20\" x2=\"220.29\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"277.71\" y1=\"20\" x2=\"277.71\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"335.14\" y1=\"20\" x2=\"335.14\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"392.57\" y1=\"20\" x2=\"392.57\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"247.70\" x2=\"450\" y2=\"247.70\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"222.40\" x2=\"450\" y2=\"222.40\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"197.10\" x2=\"450\" y2=\"197.10\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"171.80\" x2=\"450\" y2=\"171.80\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"121.20\" x2=\"450\" y2=\"121.20\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"95.90\" x2=\"450\" y2=\"95.90\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"70.60\" x2=\"450\" y2=\"70.60\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"45.30\" x2=\"450\" y2=\"45.30\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"171.80\" x2=\"459\" y2=\"171.80\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#db1arr)\"/><line x1=\"48.00\" y1=\"167.80\" x2=\"48.00\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"105.43\" y1=\"167.80\" x2=\"105.43\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"105.43\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"162.86\" y1=\"167.80\" x2=\"162.86\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"162.86\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"277.71\" y1=\"167.80\" x2=\"277.71\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"277.71\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"335.14\" y1=\"167.80\" x2=\"335.14\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"335.14\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"392.57\" y1=\"167.80\" x2=\"392.57\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"392.57\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"167.80\" x2=\"450.00\" y2=\"175.80\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"188.80\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"163.80\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"220.29\" y1=\"273\" x2=\"220.29\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#db1arr)\"/><line x1=\"216.29\" y1=\"273.00\" x2=\"224.29\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"216.29\" y1=\"247.70\" x2=\"224.29\" y2=\"247.70\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"251.20\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"216.29\" y1=\"222.40\" x2=\"224.29\" y2=\"222.40\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"225.90\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"216.29\" y1=\"197.10\" x2=\"224.29\" y2=\"197.10\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"200.60\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"216.29\" y1=\"146.50\" x2=\"224.29\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"216.29\" y1=\"121.20\" x2=\"224.29\" y2=\"121.20\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"124.70\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"216.29\" y1=\"95.90\" x2=\"224.29\" y2=\"95.90\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"99.40\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"216.29\" y1=\"70.60\" x2=\"224.29\" y2=\"70.60\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"74.10\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"216.29\" y1=\"45.30\" x2=\"224.29\" y2=\"45.30\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"48.80\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"216.29\" y1=\"20.00\" x2=\"224.29\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"211.29\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"232.29\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,414.68 L48.80,409.88 L49.61,405.13 L50.41,400.42 L51.22,395.76 L52.02,391.14 L52.82,386.56 L53.63,382.02 L54.43,377.53 L55.24,373.07 L56.04,368.66 L56.84,364.29 L57.65,359.97 L58.45,355.68 L59.26,351.44 L60.06,347.24 L60.86,343.08 L61.67,338.96 L62.47,334.88 L63.28,330.84 L64.08,326.84 L64.88,322.89 L65.69,318.97 L66.49,315.09 L67.30,311.25 L68.10,307.45 L68.90,303.70 L69.71,299.98 L70.51,296.30 L71.32,292.66 L72.12,289.05 L72.92,285.49 L73.73,281.96 L74.53,278.48 L75.34,275.03 L76.14,271.62 L76.94,268.25 L77.75,264.91 L78.55,261.61 L79.36,258.35 L80.16,255.13 L80.96,251.94 L81.77,248.79 L82.57,245.68 L83.38,242.60 L84.18,239.56 L84.98,236.56 L85.79,233.59 L86.59,230.66 L87.40,227.76 L88.20,224.90 L89.00,222.07 L89.81,219.28 L90.61,216.53 L91.42,213.81 L92.22,211.12 L93.02,208.47 L93.83,205.85 L94.63,203.27 L95.44,200.72 L96.24,198.20 L97.04,195.72 L97.85,193.27 L98.65,190.86 L99.46,188.47 L100.26,186.13 L101.06,183.81 L101.87,181.53 L102.67,179.27 L103.48,177.06 L104.28,174.87 L105.08,172.71 L105.89,170.59 L106.69,168.50 L107.50,166.44 L108.30,164.41 L109.10,162.41 L109.91,160.45 L110.71,158.51 L111.52,156.61 L112.32,154.73 L113.12,152.89 L113.93,151.07 L114.73,149.29 L115.54,147.54 L116.34,145.81 L117.14,144.12 L117.95,142.45 L118.75,140.81 L119.56,139.21 L120.36,137.63 L121.16,136.08 L121.97,134.56 L122.77,133.06 L123.58,131.60 L124.38,130.16 L125.18,128.75 L125.99,127.37 L126.79,126.01 L127.60,124.69 L128.40,123.39 L129.20,122.11 L130.01,120.87 L130.81,119.65 L131.62,118.45 L132.42,117.29 L133.22,116.15 L134.03,115.03 L134.83,113.94 L135.64,112.88 L136.44,111.84 L137.24,110.83 L138.05,109.84 L138.85,108.88 L139.66,107.94 L140.46,107.03 L141.26,106.14 L142.07,105.28 L142.87,104.44 L143.68,103.62 L144.48,102.83 L145.28,102.06 L146.09,101.32 L146.89,100.59 L147.70,99.90 L148.50,99.22 L149.30,98.57 L150.11,97.94 L150.91,97.33 L151.72,96.74 L152.52,96.18 L153.32,95.64 L154.13,95.12 L154.93,94.62 L155.74,94.15 L156.54,93.69 L157.34,93.26 L158.15,92.85 L158.95,92.45 L159.76,92.08 L160.56,91.73 L161.36,91.40 L162.17,91.09 L162.97,90.80 L163.78,90.53 L164.58,90.28 L165.38,90.05 L166.19,89.83 L166.99,89.64 L167.80,89.47 L168.60,89.31 L169.40,89.18 L170.21,89.06 L171.01,88.96 L171.82,88.88 L172.62,88.81 L173.42,88.77 L174.23,88.74 L175.03,88.73 L175.84,88.73 L176.64,88.76 L177.44,88.80 L178.25,88.86 L179.05,88.93 L179.86,89.02 L180.66,89.13 L181.46,89.25 L182.27,89.39 L183.07,89.54 L183.88,89.71 L184.68,89.90 L185.48,90.10 L186.29,90.32 L187.09,90.55 L187.90,90.80 L188.70,91.06 L189.50,91.33 L190.31,91.62 L191.11,91.93 L191.92,92.24 L192.72,92.57 L193.52,92.92 L194.33,93.28 L195.13,93.65 L195.94,94.04 L196.74,94.43 L197.54,94.84 L198.35,95.27 L199.15,95.70 L199.96,96.15 L200.76,96.61 L201.56,97.09 L202.37,97.57 L203.17,98.07 L203.98,98.57 L204.78,99.09 L205.58,99.62 L206.39,100.16 L207.19,100.72 L208.00,101.28 L208.80,101.85 L209.60,102.43 L210.41,103.03 L211.21,103.63 L212.02,104.24 L212.82,104.87 L213.62,105.50 L214.43,106.14 L215.23,106.79 L216.04,107.45 L216.84,108.12 L217.64,108.80 L218.45,109.48 L219.25,110.18 L220.06,110.88 L220.86,111.59 L221.66,112.31 L222.47,113.03 L223.27,113.76 L224.08,114.50 L224.88,115.25 L225.68,116.01 L226.49,116.77 L227.29,117.54 L228.10,118.31 L228.90,119.09 L229.70,119.88 L230.51,120.67 L231.31,121.47 L232.12,122.27 L232.92,123.08 L233.72,123.90 L234.53,124.72 L235.33,125.54 L236.14,126.37 L236.94,127.21 L237.74,128.05 L238.55,128.89 L239.35,129.74 L240.16,130.59 L240.96,131.45 L241.76,132.31 L242.57,133.17 L243.37,134.03 L244.18,134.90 L244.98,135.78 L245.78,136.65 L246.59,137.53 L247.39,138.41 L248.20,139.29 L249.00,140.18 L249.80,141.06 L250.61,141.95 L251.41,142.84 L252.22,143.73 L253.02,144.62 L253.82,145.52 L254.63,146.41 L255.43,147.31 L256.24,148.20 L257.04,149.10 L257.84,150.00 L258.65,150.90 L259.45,151.79 L260.26,152.69 L261.06,153.59 L261.86,154.48 L262.67,155.38 L263.47,156.27 L264.28,157.17 L265.08,158.06 L265.88,158.95 L266.69,159.84 L267.49,160.73 L268.30,161.61 L269.10,162.50 L269.90,163.38 L270.71,164.26 L271.51,165.14 L272.32,166.01 L273.12,166.88 L273.92,167.75 L274.73,168.62 L275.53,169.48 L276.34,170.34 L277.14,171.19 L277.94,172.04 L278.75,172.89 L279.55,173.73 L280.36,174.57 L281.16,175.40 L281.96,176.23 L282.77,177.06 L283.57,177.88 L284.38,178.69 L285.18,179.50 L285.98,180.30 L286.79,181.10 L287.59,181.89 L288.40,182.68 L289.20,183.46 L290.00,184.23 L290.81,185.00 L291.61,185.76 L292.42,186.51 L293.22,187.26 L294.02,188.00 L294.83,188.73 L295.63,189.45 L296.44,190.17 L297.24,190.88 L298.04,191.58 L298.85,192.27 L299.65,192.95 L300.46,193.63 L301.26,194.30 L302.06,194.95 L302.87,195.60 L303.67,196.24 L304.48,196.87 L305.28,197.49 L306.08,198.11 L306.89,198.71 L307.69,199.30 L308.50,199.88 L309.30,200.45 L310.10,201.01 L310.91,201.56 L311.71,202.10 L312.52,202.63 L313.32,203.14 L314.12,203.65 L314.93,204.14 L315.73,204.63 L316.54,205.10 L317.34,205.55 L318.14,206.00 L318.95,206.43 L319.75,206.86 L320.56,207.26 L321.36,207.66 L322.16,208.04 L322.97,208.41 L323.77,208.77 L324.58,209.11 L325.38,209.44 L326.18,209.75 L326.99,210.06 L327.79,210.34 L328.60,210.62 L329.40,210.87 L330.20,211.12 L331.01,211.35 L331.81,211.56 L332.62,211.76 L333.42,211.94 L334.22,212.11 L335.03,212.26 L335.83,212.40 L336.64,212.52 L337.44,212.62 L338.24,212.71 L339.05,212.78 L339.85,212.83 L340.66,212.87 L341.46,212.89 L342.26,212.89 L343.07,212.88 L343.87,212.85 L344.68,212.80 L345.48,212.73 L346.28,212.65 L347.09,212.54 L347.89,212.42 L348.70,212.28 L349.50,212.12 L350.30,211.94 L351.11,211.75 L351.91,211.53 L352.72,211.30 L353.52,211.04 L354.32,210.77 L355.13,210.47 L355.93,210.16 L356.74,209.82 L357.54,209.47 L358.34,209.09 L359.15,208.70 L359.95,208.28 L360.76,207.84 L361.56,207.38 L362.36,206.90 L363.17,206.40 L363.97,205.88 L364.78,205.33 L365.58,204.77 L366.38,204.18 L367.19,203.56 L367.99,202.93 L368.80,202.27 L369.60,201.59 L370.40,200.89 L371.21,200.16 L372.01,199.41 L372.82,198.64 L373.62,197.85 L374.42,197.02 L375.23,196.18 L376.03,195.31 L376.84,194.42 L377.64,193.50 L378.44,192.56 L379.25,191.59 L380.05,190.60 L380.86,189.58 L381.66,188.54 L382.46,187.47 L383.27,186.38 L384.07,185.26 L384.88,184.11 L385.68,182.94 L386.48,181.74 L387.29,180.52 L388.09,179.27 L388.90,177.99 L389.70,176.68 L390.50,175.35 L391.31,173.99 L392.11,172.61 L392.92,171.19 L393.72,169.75 L394.52,168.28 L395.33,166.78 L396.13,165.25 L396.94,163.70 L397.74,162.11 L398.54,160.50 L399.35,158.86 L400.15,157.18 L400.96,155.48 L401.76,153.75 L402.56,151.99 L403.37,150.20 L404.17,148.38 L404.98,146.53 L405.78,144.65 L406.58,142.74 L407.39,140.80 L408.19,138.83 L409.00,136.83 L409.80,134.79 L410.60,132.73 L411.41,130.63 L412.21,128.50 L413.02,126.34 L413.82,124.15 L414.62,121.92 L415.43,119.66 L416.23,117.37 L417.04,115.05 L417.84,112.70 L418.64,110.31 L419.45,107.89 L420.25,105.43 L421.06,102.94 L421.86,100.42 L422.66,97.86 L423.47,95.27 L424.27,92.65 L425.08,89.99 L425.88,87.30 L426.68,84.57 L427.49,81.81 L428.29,79.01 L429.10,76.18 L429.90,73.31 L430.70,70.41 L431.51,67.47 L432.31,64.49 L433.12,61.48 L433.92,58.44 L434.72,55.35 L435.53,52.23 L436.33,49.08 L437.14,45.88 L437.94,42.65 L438.74,39.38 L439.55,36.08 L440.35,32.74 L441.16,29.36 L441.96,25.94 L442.76,22.48 L443.57,18.99 L444.37,15.46 L445.18,11.88 L445.98,8.27 L446.78,4.63 L447.59,0.94 L448.39,-2.79 L449.20,-6.55 L450.00,-10.36\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#db1clip)\"/><text x=\"340.89\" y=\"65.54\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"162.86\" cy=\"90.84\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"169.86\" y=\"83.84\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"237.51\" cy=\"127.81\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"244.51\" y=\"120.81\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"346.63\" cy=\"212.60\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"353.63\" y=\"205.60\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">C</text></svg></span><p>Avgör om \\(f\\,\\!\\prime(x)\\) är positiv, negativ eller ungefär noll i punkterna A, B och C.</p>",
    "s": "<p><strong>A:</strong> grafen är stigande, alltså är derivatan <strong>positiv</strong>.</p><p><strong>B:</strong> grafen är fallande, alltså är derivatan <strong>negativ</strong>.</p><p><strong>C:</strong> grafen är stigande, alltså är derivatan <strong>positiv</strong>.</p>",
    "familj": "derivbeg_tecken_graf"
  },
  {
    "id": "2.58",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Visa att om \\(f(x)=x^n\\) med heltal \\(n\\ge2\\), så gäller \\(f\\,\\!\\prime(1)=n\\). Förklara därefter geometriskt vad detta säger om tangenten till grafen i punkten \\((1,1)\\).</p>",
    "s": "<p>Potensregeln ger</p><p>\\[f\\,\\!\\prime(x)=nx^{n-1}.\\]</p><p>Vid \\(x=1\\):</p><p>\\[f\\,\\!\\prime(1)=n\\cdot1^{n-1}=n.\\]</p><p>Det betyder att tangenten till grafen \\(y=x^n\\) i punkten \\((1,1)\\) har lutningen \\(n\\). Tangentens ekvation blir därför \\(y-1=n(x-1)\\).</p>",
    "familj": "derivreg_general_potens"
  },
  {
    "id": "2.59",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + x + 2\\) i punkten där \\(x=0\\).</p>",
    "s": "<p>\\[f'(x)=2 x + 1,\\qquad f'(0)=1.\\]</p><p>Punkten är \\((0,2)\\). Punkt-lutningsformen ger</p><p>\\[y-2=1(x-0),\\]</p><p>alltså \\(\\boxed{y=x + 2}\\).</p>",
    "familj": "topup_tangent_1"
  },
  {
    "id": "2.60",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=4e^{0,5x}\\) vid \\(x=0\\). Avrunda vid behov till två decimaler.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=2e^{0,5x}.\\]</p><p>Vid \\(x=0\\): \\(f(0)\\approx 4\\) och \\(f\\,\\!\\prime(0)\\approx 2\\).</p><p>Tangenten blir</p><p>\\[y-4=2(x-0).\\]</p><p><strong>Svar:</strong> \\(y\\approx 2x+4\\).</p>",
    "familj": "exp_tangent_0"
  },
  {
    "id": "2.61",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(f\\,\\!\\prime(1)\\) med derivatans definition för \\(f(x)=x^{2} + 3\\).</p>",
    "s": "<p>\\[f\\,\\!\\prime(1)=\\lim_{h\\to0}\\frac{f(1+h)-f(1)}{h}.\\]</p><p>Efter insättning och förenkling blir differenskvoten</p><p>\\[h + 2.\\]</p><p>Därför</p><p>\\[f\\,\\!\\prime(1)=\\lim_{h\\to0}(h + 2)=2.\\]</p><p><strong>Svar:</strong> \\(\\boxed{2}\\).</p>",
    "familj": "derivbeg_definition_0"
  },
  {
    "id": "2.62",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Derivera</p><p>\\[f(x)=2 x^{4} - x^{3} + 2 x^{2} - 5 x + 3.\\]</p>",
    "s": "<p>Derivera term för term med potensregeln:</p><p>\\[f' (x)=8 x^{3} - 3 x^{2} + 4 x - 5.\\]</p>",
    "familj": "topup_derreg_0"
  },
  {
    "id": "2.63",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + 2 x + 2\\) i punkten där \\(x=1\\).</p>",
    "s": "<p>\\[f'(x)=2 x + 2,\\qquad f'(1)=4.\\]</p><p>Punkten är \\((1,5)\\). Punkt-lutningsformen ger</p><p>\\[y-5=4(x-1),\\]</p><p>alltså \\(\\boxed{y=4 x + 1}\\).</p>",
    "familj": "topup_tangent_2"
  },
  {
    "id": "2.64",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=2e^{-0,3x}\\) vid \\(x=2\\). Avrunda vid behov till två decimaler.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=-0,6e^{-0,3x}.\\]</p><p>Vid \\(x=2\\): \\(f(2)\\approx 1,1\\) och \\(f\\,\\!\\prime(2)\\approx -0,33\\).</p><p>Tangenten blir</p><p>\\[y-1,1=-0,33(x-2).\\]</p><p><strong>Svar:</strong> \\(y\\approx -0,33x+1,76\\).</p>",
    "familj": "exp_tangent_1"
  },
  {
    "id": "2.65",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(f\\,\\!\\prime(2)\\) med derivatans definition för \\(f(x)=2 x^{2} - x\\).</p>",
    "s": "<p>\\[f\\,\\!\\prime(2)=\\lim_{h\\to0}\\frac{f(2+h)-f(2)}{h}.\\]</p><p>Efter insättning och förenkling blir differenskvoten</p><p>\\[2 h + 7.\\]</p><p>Därför</p><p>\\[f\\,\\!\\prime(2)=\\lim_{h\\to0}(2 h + 7)=7.\\]</p><p><strong>Svar:</strong> \\(\\boxed{7}\\).</p>",
    "familj": "derivbeg_definition_1"
  },
  {
    "id": "2.66",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Derivera</p><p>\\[f(x)=3 x^{4} - 2 x^{3} + 2 x^{2} - 5 x + 3.\\]</p>",
    "s": "<p>Derivera term för term med potensregeln:</p><p>\\[f' (x)=12 x^{3} - 6 x^{2} + 4 x - 5.\\]</p>",
    "familj": "topup_derreg_1"
  },
  {
    "id": "2.67",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + 2\\) i punkten där \\(x=2\\).</p>",
    "s": "<p>\\[f'(x)=2 x,\\qquad f'(2)=4.\\]</p><p>Punkten är \\((2,6)\\). Punkt-lutningsformen ger</p><p>\\[y-6=4(x-2),\\]</p><p>alltså \\(\\boxed{y=4 x - 2}\\).</p>",
    "familj": "topup_tangent_3"
  },
  {
    "id": "2.68",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En algkultur beskrivs av modellen \\(M(t)=800e^{0,18t}\\), där \\(t\\) mäts i timme.</p><p>a) Bestäm \\(M(4)\\).<br>b) Bestäm förändringshastigheten vid samma tidpunkt och tolka tecknet.</p>",
    "s": "<p><strong>a)</strong> \\(M(4)=800e^{0,18\\cdot 4}\\approx 1643,55\\).</p><p><strong>b)</strong> \\(M\\,\\!\\prime(t)=144e^{0,18t}\\), alltså \\(M\\,\\!\\prime(4)\\approx 295,84\\).</p><p>Det positiva tecknet betyder att mängden ökar vid denna tidpunkt.</p>",
    "familj": "exp_model_rate_0"
  },
  {
    "id": "2.69",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En bils sträcka från start ges av \\(s(t)\\) meter. Förklara skillnaden mellan</p><p>a) \\(\\frac{s(8)-s(5)}{8-5}\\)<br>b) \\(s\\,\\!\\prime(5)\\).</p>",
    "s": "<p><strong>a)</strong> Kvoten är bilens <em>genomsnittliga hastighet</em> mellan \\(t=5\\) s och \\(t=8\\) s.</p><p><strong>b)</strong> \\(s\\,\\!\\prime(5)\\) är den <em>momentana hastigheten</em> exakt vid \\(t=5\\) s.</p><p>Båda har enheten m/s, men beskriver olika typer av förändringshastighet.</p>",
    "familj": "derivbeg_genomsnitt_momentan"
  },
  {
    "id": "2.70",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Derivera</p><p>\\[f(x)=4 x^{4} - 3 x^{3} + 2 x^{2} - 5 x + 3.\\]</p>",
    "s": "<p>Derivera term för term med potensregeln:</p><p>\\[f' (x)=16 x^{3} - 9 x^{2} + 4 x - 5.\\]</p>",
    "familj": "topup_derreg_2"
  },
  {
    "id": "2.71",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + x + 2\\) i punkten där \\(x=-1\\).</p>",
    "s": "<p>\\[f'(x)=2 x + 1,\\qquad f'(-1)=-1.\\]</p><p>Punkten är \\((-1,2)\\). Punkt-lutningsformen ger</p><p>\\[y-2=-1(x--1),\\]</p><p>alltså \\(\\boxed{y=1 - x}\\).</p>",
    "familj": "topup_tangent_4"
  },
  {
    "id": "2.72",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ett läkemedel i blodet beskrivs av modellen \\(M(t)=12e^{-0,22t}\\), där \\(t\\) mäts i timme.</p><p>a) Bestäm \\(M(3)\\).<br>b) Bestäm förändringshastigheten vid samma tidpunkt och tolka tecknet.</p>",
    "s": "<p><strong>a)</strong> \\(M(3)=12e^{-0,22\\cdot 3}\\approx 6,2\\).</p><p><strong>b)</strong> \\(M\\,\\!\\prime(t)=-2,64e^{-0,22t}\\), alltså \\(M\\,\\!\\prime(3)\\approx -1,36\\).</p><p>Det negativa tecknet betyder att mängden minskar vid denna tidpunkt.</p>",
    "familj": "exp_model_rate_1"
  },
  {
    "id": "2.73",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ett program uppskattar derivatan med uttrycket</p><pre style=\"font-family:IBM Plex Mono,monospace;font-size:12px;background:#F4F5F7;padding:10px;border-radius:8px\">(f(x+h)-f(x-h))/(2*h)</pre><p>Förklara varför ett mindre värde på \\(h\\) ofta ger en bättre approximation, men också varför ett extremt litet \\(h\\) kan vara problematiskt i en dator.</p>",
    "s": "<p>När \\(h\\) minskar använder man punkter närmare den punkt där derivatan söks. Sekantens lutning närmar sig då tangentens lutning, vilket normalt förbättrar approximationen.</p><p>I en dator lagras tal med begränsad precision. Om \\(h\\) blir extremt litet kan \\(f(x+h)\\) och \\(f(x-h)\\) bli nästan lika i maskinrepresentationen. Subtraktionen kan då förlora noggrannhet genom avrundningsfel. Därför finns en praktisk balans mellan litet \\(h\\) och numerisk precision.</p>",
    "familj": "derivbeg_programmering_precision"
  },
  {
    "id": "2.74",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Derivera</p><p>\\[f(x)=5 x^{4} - x^{3} + 2 x^{2} - 5 x + 3.\\]</p>",
    "s": "<p>Derivera term för term med potensregeln:</p><p>\\[f' (x)=20 x^{3} - 3 x^{2} + 4 x - 5.\\]</p>",
    "familj": "topup_derreg_3"
  },
  {
    "id": "2.75",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + 2 x + 2\\) i punkten där \\(x=0\\).</p>",
    "s": "<p>\\[f'(x)=2 x + 2,\\qquad f'(0)=2.\\]</p><p>Punkten är \\((0,2)\\). Punkt-lutningsformen ger</p><p>\\[y-2=2(x-0),\\]</p><p>alltså \\(\\boxed{y=2 x + 2}\\).</p>",
    "familj": "topup_tangent_5"
  },
  {
    "id": "2.76",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En population följer modellen \\(P(t)=Ce^{kt}\\). Vid \\(t=0\\) finns 1200 individer och vid \\(t=5\\) finns 2100 individer.</p><p>Bestäm den tidpunkt då populationens tillväxthastighet första gången är 250 individer per tidsenhet.</p>",
    "s": "<p>Från \\(P(0)=1200\\) fås \\(C=1200\\).</p><p>\\[1200e^{5k}=2100\\Rightarrow k=\\frac{\\ln(2100/1200)}5\\approx 0,1119.\\]</p><p>Derivatan är</p><p>\\[P\\,\\!\\prime(t)=1200k e^{kt}.\\]</p><p>Sätt \\(P\\,\\!\\prime(t)=250\\):</p><p>\\[1200k e^{kt}=250.\\]</p><p>\\[t=\\frac{\\ln(250/(1200k))}{k}\\approx 5,55.\\]</p><p><strong>Svar:</strong> ungefär \\(5,55\\) tidsenheter efter start.</p>",
    "familj": "exp_model_two_points_rate"
  },
  {
    "id": "2.77",
    "kap": 2,
    "omr": "derivatabegrepp",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För \\(f(x)=x^{2} + 1\\), bestäm den genomsnittliga förändringshastigheten från \\(x=0\\) till \\(x=2\\).</p>",
    "s": "<p>Använd ändringskvoten:</p><p>\\[\\frac{f(2)-f(0)}{2}=\\frac{5-1}{2}=2.\\]</p><p><strong>Svar:</strong> \\(2\\).</p>",
    "familj": "topup_derbeg_0"
  },
  {
    "id": "2.78",
    "kap": 2,
    "omr": "deriveringsregler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Derivera</p><p>\\[f(x)=2 x^{4} - 2 x^{3} + 2 x^{2} - 5 x + 3.\\]</p>",
    "s": "<p>Derivera term för term med potensregeln:</p><p>\\[f' (x)=8 x^{3} - 6 x^{2} + 4 x - 5.\\]</p>",
    "familj": "topup_derreg_4"
  },
  {
    "id": "2.79",
    "kap": 2,
    "omr": "tangenter_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm tangentens ekvation till \\(f(x)=x^{2} + 2\\) i punkten där \\(x=1\\).</p>",
    "s": "<p>\\[f'(x)=2 x,\\qquad f'(1)=2.\\]</p><p>Punkten är \\((1,3)\\). Punkt-lutningsformen ger</p><p>\\[y-3=2(x-1),\\]</p><p>alltså \\(\\boxed{y=2 x + 1}\\).</p>",
    "familj": "topup_tangent_6"
  },
  {
    "id": "2.80",
    "kap": 2,
    "omr": "exponential_ln_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>För \\(f(x)=2 e^{\\frac{x}{10}}\\):</p><p>a) Bestäm \\(f'(x)\\).<br>b) Bestäm \\(f'(0)\\).</p>",
    "s": "<p>a) \\(f'(x)=\\frac{e^{\\frac{x}{10}}}{5}\\).</p><p>b) Eftersom \\(e^0=1\\) får vi \\(f'(0)=\\frac{1}{5}\\).</p>",
    "familj": "topup_exp_0"
  },
  {
    "id": "3.01",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För funktionen \\(f(x)=x^{3} - 3 x^{2}\\):</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där funktionen är växande respektive avtagande.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=3 x \\left(x - 2\\right).\\]</p><p>Nollställena är \\(0, 2\\).</p><p>Teckenstudium av derivatan ger:</p><p><strong>Växande:</strong> \\((-\\infty,0)\\), \\((2,\\infty)\\).</p><p><strong>Avtagande:</strong> \\((0,2)\\).</p>",
    "familj": "grafanalys_tecken_0"
  },
  {
    "id": "3.02",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm funktionens största och minsta värde på intervallet \\([-1,3]\\) med hjälp av derivata:</p><p>\\[f(x)=x^{3} - 3 x^{2} + 2.\\]</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=3 x^{2} - 6 x\\). Kritiska punkter i intervallet är \\(0, 2\\).</p><p>Kontrollera både kritiska punkter och intervallets ändpunkter:</p><p>\\[f(-1)=-2\\]</p><p>\\[f(3)=2\\]</p><p>\\[f(0)=2\\]</p><p>\\[f(2)=-2\\]</p><p><strong>Största värde:</strong> \\(2\\) vid \\(x=3\\).</p><p><strong>Minsta värde:</strong> \\(-2\\) vid \\(x=-1\\).</p>",
    "familj": "extrem_intervall_0"
  },
  {
    "id": "3.03",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till \\(f(x)=|x-0|+1\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"derivabs0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"derivabs0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"98.25\" y1=\"20\" x2=\"98.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"198.75\" y1=\"20\" x2=\"198.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"299.25\" y1=\"20\" x2=\"299.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"399.75\" y1=\"20\" x2=\"399.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"230.83\" x2=\"450\" y2=\"230.83\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"62.17\" x2=\"450\" y2=\"62.17\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"459\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#derivabs0arr)\"/><line x1=\"48.00\" y1=\"269.00\" x2=\"48.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"98.25\" y1=\"269.00\" x2=\"98.25\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"98.25\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"148.50\" y1=\"269.00\" x2=\"148.50\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"198.75\" y1=\"269.00\" x2=\"198.75\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"198.75\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"299.25\" y1=\"269.00\" x2=\"299.25\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"299.25\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"349.50\" y1=\"269.00\" x2=\"349.50\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"399.75\" y1=\"269.00\" x2=\"399.75\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"399.75\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"269.00\" x2=\"450.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"265.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#derivabs0arr)\"/><line x1=\"245.00\" y1=\"230.83\" x2=\"253.00\" y2=\"230.83\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"234.33\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"188.67\" x2=\"253.00\" y2=\"188.67\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"192.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"146.50\" x2=\"253.00\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"104.33\" x2=\"253.00\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"62.17\" x2=\"253.00\" y2=\"62.17\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"65.67\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,62.17 L48.80,62.84 L49.61,63.52 L50.41,64.19 L51.22,64.87 L52.02,65.54 L52.82,66.21 L53.63,66.89 L54.43,67.56 L55.24,68.24 L56.04,68.91 L56.84,69.59 L57.65,70.26 L58.45,70.94 L59.26,71.61 L60.06,72.29 L60.86,72.96 L61.67,73.64 L62.47,74.31 L63.28,74.99 L64.08,75.66 L64.88,76.33 L65.69,77.01 L66.49,77.68 L67.30,78.36 L68.10,79.03 L68.90,79.71 L69.71,80.38 L70.51,81.06 L71.32,81.73 L72.12,82.41 L72.92,83.08 L73.73,83.76 L74.53,84.43 L75.34,85.11 L76.14,85.78 L76.94,86.45 L77.75,87.13 L78.55,87.80 L79.36,88.48 L80.16,89.15 L80.96,89.83 L81.77,90.50 L82.57,91.18 L83.38,91.85 L84.18,92.53 L84.98,93.20 L85.79,93.88 L86.59,94.55 L87.40,95.23 L88.20,95.90 L89.00,96.57 L89.81,97.25 L90.61,97.92 L91.42,98.60 L92.22,99.27 L93.02,99.95 L93.83,100.62 L94.63,101.30 L95.44,101.97 L96.24,102.65 L97.04,103.32 L97.85,104.00 L98.65,104.67 L99.46,105.35 L100.26,106.02 L101.06,106.69 L101.87,107.37 L102.67,108.04 L103.48,108.72 L104.28,109.39 L105.08,110.07 L105.89,110.74 L106.69,111.42 L107.50,112.09 L108.30,112.77 L109.10,113.44 L109.91,114.12 L110.71,114.79 L111.52,115.47 L112.32,116.14 L113.12,116.81 L113.93,117.49 L114.73,118.16 L115.54,118.84 L116.34,119.51 L117.14,120.19 L117.95,120.86 L118.75,121.54 L119.56,122.21 L120.36,122.89 L121.16,123.56 L121.97,124.24 L122.77,124.91 L123.58,125.59 L124.38,126.26 L125.18,126.93 L125.99,127.61 L126.79,128.28 L127.60,128.96 L128.40,129.63 L129.20,130.31 L130.01,130.98 L130.81,131.66 L131.62,132.33 L132.42,133.01 L133.22,133.68 L134.03,134.36 L134.83,135.03 L135.64,135.71 L136.44,136.38 L137.24,137.05 L138.05,137.73 L138.85,138.40 L139.66,139.08 L140.46,139.75 L141.26,140.43 L142.07,141.10 L142.87,141.78 L143.68,142.45 L144.48,143.13 L145.28,143.80 L146.09,144.48 L146.89,145.15 L147.70,145.83 L148.50,146.50 L149.30,147.17 L150.11,147.85 L150.91,148.52 L151.72,149.20 L152.52,149.87 L153.32,150.55 L154.13,151.22 L154.93,151.90 L155.74,152.57 L156.54,153.25 L157.34,153.92 L158.15,154.60 L158.95,155.27 L159.76,155.95 L160.56,156.62 L161.36,157.29 L162.17,157.97 L162.97,158.64 L163.78,159.32 L164.58,159.99 L165.38,160.67 L166.19,161.34 L166.99,162.02 L167.80,162.69 L168.60,163.37 L169.40,164.04 L170.21,164.72 L171.01,165.39 L171.82,166.07 L172.62,166.74 L173.42,167.41 L174.23,168.09 L175.03,168.76 L175.84,169.44 L176.64,170.11 L177.44,170.79 L178.25,171.46 L179.05,172.14 L179.86,172.81 L180.66,173.49 L181.46,174.16 L182.27,174.84 L183.07,175.51 L183.88,176.19 L184.68,176.86 L185.48,177.53 L186.29,178.21 L187.09,178.88 L187.90,179.56 L188.70,180.23 L189.50,180.91 L190.31,181.58 L191.11,182.26 L191.92,182.93 L192.72,183.61 L193.52,184.28 L194.33,184.96 L195.13,185.63 L195.94,186.31 L196.74,186.98 L197.54,187.65 L198.35,188.33 L199.15,189.00 L199.96,189.68 L200.76,190.35 L201.56,191.03 L202.37,191.70 L203.17,192.38 L203.98,193.05 L204.78,193.73 L205.58,194.40 L206.39,195.08 L207.19,195.75 L208.00,196.43 L208.80,197.10 L209.60,197.77 L210.41,198.45 L211.21,199.12 L212.02,199.80 L212.82,200.47 L213.62,201.15 L214.43,201.82 L215.23,202.50 L216.04,203.17 L216.84,203.85 L217.64,204.52 L218.45,205.20 L219.25,205.87 L220.06,206.55 L220.86,207.22 L221.66,207.89 L222.47,208.57 L223.27,209.24 L224.08,209.92 L224.88,210.59 L225.68,211.27 L226.49,211.94 L227.29,212.62 L228.10,213.29 L228.90,213.97 L229.70,214.64 L230.51,215.32 L231.31,215.99 L232.12,216.67 L232.92,217.34 L233.72,218.01 L234.53,218.69 L235.33,219.36 L236.14,220.04 L236.94,220.71 L237.74,221.39 L238.55,222.06 L239.35,222.74 L240.16,223.41 L240.96,224.09 L241.76,224.76 L242.57,225.44 L243.37,226.11 L244.18,226.79 L244.98,227.46 L245.78,228.13 L246.59,228.81 L247.39,229.48 L248.20,230.16 L249.00,230.83 L249.80,230.16 L250.61,229.48 L251.41,228.81 L252.22,228.13 L253.02,227.46 L253.82,226.79 L254.63,226.11 L255.43,225.44 L256.24,224.76 L257.04,224.09 L257.84,223.41 L258.65,222.74 L259.45,222.06 L260.26,221.39 L261.06,220.71 L261.86,220.04 L262.67,219.36 L263.47,218.69 L264.28,218.01 L265.08,217.34 L265.88,216.67 L266.69,215.99 L267.49,215.32 L268.30,214.64 L269.10,213.97 L269.90,213.29 L270.71,212.62 L271.51,211.94 L272.32,211.27 L273.12,210.59 L273.92,209.92 L274.73,209.24 L275.53,208.57 L276.34,207.89 L277.14,207.22 L277.94,206.55 L278.75,205.87 L279.55,205.20 L280.36,204.52 L281.16,203.85 L281.96,203.17 L282.77,202.50 L283.57,201.82 L284.38,201.15 L285.18,200.47 L285.98,199.80 L286.79,199.12 L287.59,198.45 L288.40,197.77 L289.20,197.10 L290.00,196.43 L290.81,195.75 L291.61,195.08 L292.42,194.40 L293.22,193.73 L294.02,193.05 L294.83,192.38 L295.63,191.70 L296.44,191.03 L297.24,190.35 L298.04,189.68 L298.85,189.00 L299.65,188.33 L300.46,187.65 L301.26,186.98 L302.06,186.31 L302.87,185.63 L303.67,184.96 L304.48,184.28 L305.28,183.61 L306.08,182.93 L306.89,182.26 L307.69,181.58 L308.50,180.91 L309.30,180.23 L310.10,179.56 L310.91,178.88 L311.71,178.21 L312.52,177.53 L313.32,176.86 L314.12,176.19 L314.93,175.51 L315.73,174.84 L316.54,174.16 L317.34,173.49 L318.14,172.81 L318.95,172.14 L319.75,171.46 L320.56,170.79 L321.36,170.11 L322.16,169.44 L322.97,168.76 L323.77,168.09 L324.58,167.41 L325.38,166.74 L326.18,166.07 L326.99,165.39 L327.79,164.72 L328.60,164.04 L329.40,163.37 L330.20,162.69 L331.01,162.02 L331.81,161.34 L332.62,160.67 L333.42,159.99 L334.22,159.32 L335.03,158.64 L335.83,157.97 L336.64,157.29 L337.44,156.62 L338.24,155.95 L339.05,155.27 L339.85,154.60 L340.66,153.92 L341.46,153.25 L342.26,152.57 L343.07,151.90 L343.87,151.22 L344.68,150.55 L345.48,149.87 L346.28,149.20 L347.09,148.52 L347.89,147.85 L348.70,147.17 L349.50,146.50 L350.30,145.83 L351.11,145.15 L351.91,144.48 L352.72,143.80 L353.52,143.13 L354.32,142.45 L355.13,141.78 L355.93,141.10 L356.74,140.43 L357.54,139.75 L358.34,139.08 L359.15,138.40 L359.95,137.73 L360.76,137.05 L361.56,136.38 L362.36,135.71 L363.17,135.03 L363.97,134.36 L364.78,133.68 L365.58,133.01 L366.38,132.33 L367.19,131.66 L367.99,130.98 L368.80,130.31 L369.60,129.63 L370.40,128.96 L371.21,128.28 L372.01,127.61 L372.82,126.93 L373.62,126.26 L374.42,125.59 L375.23,124.91 L376.03,124.24 L376.84,123.56 L377.64,122.89 L378.44,122.21 L379.25,121.54 L380.05,120.86 L380.86,120.19 L381.66,119.51 L382.46,118.84 L383.27,118.16 L384.07,117.49 L384.88,116.81 L385.68,116.14 L386.48,115.47 L387.29,114.79 L388.09,114.12 L388.90,113.44 L389.70,112.77 L390.50,112.09 L391.31,111.42 L392.11,110.74 L392.92,110.07 L393.72,109.39 L394.52,108.72 L395.33,108.04 L396.13,107.37 L396.94,106.69 L397.74,106.02 L398.54,105.35 L399.35,104.67 L400.15,104.00 L400.96,103.32 L401.76,102.65 L402.56,101.97 L403.37,101.30 L404.17,100.62 L404.98,99.95 L405.78,99.27 L406.58,98.60 L407.39,97.92 L408.19,97.25 L409.00,96.57 L409.80,95.90 L410.60,95.23 L411.41,94.55 L412.21,93.88 L413.02,93.20 L413.82,92.53 L414.62,91.85 L415.43,91.18 L416.23,90.50 L417.04,89.83 L417.84,89.15 L418.64,88.48 L419.45,87.80 L420.25,87.13 L421.06,86.45 L421.86,85.78 L422.66,85.11 L423.47,84.43 L424.27,83.76 L425.08,83.08 L425.88,82.41 L426.68,81.73 L427.49,81.06 L428.29,80.38 L429.10,79.71 L429.90,79.03 L430.70,78.36 L431.51,77.68 L432.31,77.01 L433.12,76.33 L433.92,75.66 L434.72,74.99 L435.53,74.31 L436.33,73.64 L437.14,72.96 L437.94,72.29 L438.74,71.61 L439.55,70.94 L440.35,70.26 L441.16,69.59 L441.96,68.91 L442.76,68.24 L443.57,67.56 L444.37,66.89 L445.18,66.21 L445.98,65.54 L446.78,64.87 L447.59,64.19 L448.39,63.52 L449.20,62.84 L450.00,62.17\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#derivabs0clip)\"/><text x=\"364.57\" y=\"91.68\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"249.00\" cy=\"230.83\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"256.00\" y=\"223.83\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text></svg></span><p>Är funktionen deriverbar vid \\(x=0\\)? Motivera.</p>",
    "s": "<p>Nej. Vid \\(x=0\\) har grafen ett hörn. Lutningen från vänster är \\(-1\\) och från höger är \\(1\\). Eftersom de ensidiga derivatorna inte är lika finns ingen derivata i punkten.</p>",
    "familj": "deriverbarhet_abs_0"
  },
  {
    "id": "3.04",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm alla primitiva funktioner. Endast svar krävs.</p><p>a) \\(f(x)=3 x^{2}\\)<br>b) \\(f(x)=4 x^{3} - 2 x\\)<br>c) \\(f(x)=5\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(F(x)=x^{3}+C\\)</p><p>b) \\(F(x)=x^{4} - x^{2}+C\\)</p><p>c) \\(F(x)=5 x+C\\)</p>",
    "familj": "primitiva_multi_0"
  },
  {
    "id": "3.05",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna</p><p>\\[\\int_{0}^{2}3 x^{2}\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(F(x)=x^{3}\\).</p><p>\\[\\int_{0}^{2}3 x^{2}\\,dx=F(2)-F(0)=8.\\]</p><p><strong>Svar:</strong> \\(\\boxed{8}\\).</p>",
    "familj": "integral_rutin_0"
  },
  {
    "id": "3.06",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet beskrivs av \\(v(t)=4+0,5t\\), där \\(t\\) mäts i sekunder och \\(v\\) i m/s.</p><p>Hur långt färdas cyklisten mellan \\(t=0\\) och \\(t=10\\)?</p>",
    "s": "<p>Sträckan fås genom att integrera hastigheten:</p><p>\\[s=\\int_{0}^{10}\\frac{t}{2} + 4\\,dt.\\]</p><p>\\[s=65.\\]</p><p><strong>Svar:</strong> \\(\\boxed{65\\text{ m}}\\).</p>",
    "familj": "intapp_hastighet_0"
  },
  {
    "id": "3.07",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För funktionen \\(f(x)=x^{3} - 12 x\\):</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där funktionen är växande respektive avtagande.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=3 \\left(x - 2\\right) \\left(x + 2\\right).\\]</p><p>Nollställena är \\(-2, 2\\).</p><p>Teckenstudium av derivatan ger:</p><p><strong>Växande:</strong> \\((-\\infty,-2)\\), \\((2,\\infty)\\).</p><p><strong>Avtagande:</strong> \\((-2,2)\\).</p>",
    "familj": "grafanalys_tecken_1"
  },
  {
    "id": "3.08",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm funktionens största och minsta värde på intervallet \\([-3,2]\\) med hjälp av derivata:</p><p>\\[f(x)=x^{4} - 4 x^{2}.\\]</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=4 x^{3} - 8 x\\). Kritiska punkter i intervallet är \\(0, - \\sqrt{2}, \\sqrt{2}\\).</p><p>Kontrollera både kritiska punkter och intervallets ändpunkter:</p><p>\\[f(-3)=45\\]</p><p>\\[f(2)=0\\]</p><p>\\[f(0)=0\\]</p><p>\\[f(- \\sqrt{2})=-4\\]</p><p>\\[f(\\sqrt{2})=-4\\]</p><p><strong>Största värde:</strong> \\(45\\) vid \\(x=-3\\).</p><p><strong>Minsta värde:</strong> \\(-4\\) vid \\(x=- \\sqrt{2}\\).</p>",
    "familj": "extrem_intervall_1"
  },
  {
    "id": "3.09",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till \\(f(x)=|x-2|+1\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"derivabs1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"derivabs1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"98.25\" y1=\"20\" x2=\"98.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"198.75\" y1=\"20\" x2=\"198.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"299.25\" y1=\"20\" x2=\"299.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"399.75\" y1=\"20\" x2=\"399.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"230.83\" x2=\"450\" y2=\"230.83\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"62.17\" x2=\"450\" y2=\"62.17\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"459\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#derivabs1arr)\"/><line x1=\"48.00\" y1=\"269.00\" x2=\"48.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"98.25\" y1=\"269.00\" x2=\"98.25\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"98.25\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"148.50\" y1=\"269.00\" x2=\"148.50\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"198.75\" y1=\"269.00\" x2=\"198.75\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"198.75\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"299.25\" y1=\"269.00\" x2=\"299.25\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"299.25\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"349.50\" y1=\"269.00\" x2=\"349.50\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"399.75\" y1=\"269.00\" x2=\"399.75\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"399.75\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"269.00\" x2=\"450.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"265.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#derivabs1arr)\"/><line x1=\"245.00\" y1=\"230.83\" x2=\"253.00\" y2=\"230.83\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"234.33\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"188.67\" x2=\"253.00\" y2=\"188.67\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"192.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"146.50\" x2=\"253.00\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"104.33\" x2=\"253.00\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"62.17\" x2=\"253.00\" y2=\"62.17\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"65.67\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,-22.17 L48.80,-21.49 L49.61,-20.82 L50.41,-20.14 L51.22,-19.47 L52.02,-18.79 L52.82,-18.12 L53.63,-17.44 L54.43,-16.77 L55.24,-16.09 L56.04,-15.42 L56.84,-14.75 L57.65,-14.07 L58.45,-13.40 L59.26,-12.72 L60.06,-12.05 L60.86,-11.37 L61.67,-10.70 L62.47,-10.02 L63.28,-9.35 L64.08,-8.67 L64.88,-8.00 L65.69,-7.32 L66.49,-6.65 L67.30,-5.97 L68.10,-5.30 L68.90,-4.63 L69.71,-3.95 L70.51,-3.28 L71.32,-2.60 L72.12,-1.93 L72.92,-1.25 L73.73,-0.58 L74.53,0.10 L75.34,0.77 L76.14,1.45 L76.94,2.12 L77.75,2.80 L78.55,3.47 L79.36,4.15 L80.16,4.82 L80.96,5.49 L81.77,6.17 L82.57,6.84 L83.38,7.52 L84.18,8.19 L84.98,8.87 L85.79,9.54 L86.59,10.22 L87.40,10.89 L88.20,11.57 L89.00,12.24 L89.81,12.92 L90.61,13.59 L91.42,14.27 L92.22,14.94 L93.02,15.61 L93.83,16.29 L94.63,16.96 L95.44,17.64 L96.24,18.31 L97.04,18.99 L97.85,19.66 L98.65,20.34 L99.46,21.01 L100.26,21.69 L101.06,22.36 L101.87,23.04 L102.67,23.71 L103.48,24.39 L104.28,25.06 L105.08,25.73 L105.89,26.41 L106.69,27.08 L107.50,27.76 L108.30,28.43 L109.10,29.11 L109.91,29.78 L110.71,30.46 L111.52,31.13 L112.32,31.81 L113.12,32.48 L113.93,33.16 L114.73,33.83 L115.54,34.51 L116.34,35.18 L117.14,35.85 L117.95,36.53 L118.75,37.20 L119.56,37.88 L120.36,38.55 L121.16,39.23 L121.97,39.90 L122.77,40.58 L123.58,41.25 L124.38,41.93 L125.18,42.60 L125.99,43.28 L126.79,43.95 L127.60,44.63 L128.40,45.30 L129.20,45.97 L130.01,46.65 L130.81,47.32 L131.62,48.00 L132.42,48.67 L133.22,49.35 L134.03,50.02 L134.83,50.70 L135.64,51.37 L136.44,52.05 L137.24,52.72 L138.05,53.40 L138.85,54.07 L139.66,54.75 L140.46,55.42 L141.26,56.09 L142.07,56.77 L142.87,57.44 L143.68,58.12 L144.48,58.79 L145.28,59.47 L146.09,60.14 L146.89,60.82 L147.70,61.49 L148.50,62.17 L149.30,62.84 L150.11,63.52 L150.91,64.19 L151.72,64.87 L152.52,65.54 L153.32,66.21 L154.13,66.89 L154.93,67.56 L155.74,68.24 L156.54,68.91 L157.34,69.59 L158.15,70.26 L158.95,70.94 L159.76,71.61 L160.56,72.29 L161.36,72.96 L162.17,73.64 L162.97,74.31 L163.78,74.99 L164.58,75.66 L165.38,76.33 L166.19,77.01 L166.99,77.68 L167.80,78.36 L168.60,79.03 L169.40,79.71 L170.21,80.38 L171.01,81.06 L171.82,81.73 L172.62,82.41 L173.42,83.08 L174.23,83.76 L175.03,84.43 L175.84,85.11 L176.64,85.78 L177.44,86.45 L178.25,87.13 L179.05,87.80 L179.86,88.48 L180.66,89.15 L181.46,89.83 L182.27,90.50 L183.07,91.18 L183.88,91.85 L184.68,92.53 L185.48,93.20 L186.29,93.88 L187.09,94.55 L187.90,95.23 L188.70,95.90 L189.50,96.57 L190.31,97.25 L191.11,97.92 L191.92,98.60 L192.72,99.27 L193.52,99.95 L194.33,100.62 L195.13,101.30 L195.94,101.97 L196.74,102.65 L197.54,103.32 L198.35,104.00 L199.15,104.67 L199.96,105.35 L200.76,106.02 L201.56,106.69 L202.37,107.37 L203.17,108.04 L203.98,108.72 L204.78,109.39 L205.58,110.07 L206.39,110.74 L207.19,111.42 L208.00,112.09 L208.80,112.77 L209.60,113.44 L210.41,114.12 L211.21,114.79 L212.02,115.47 L212.82,116.14 L213.62,116.81 L214.43,117.49 L215.23,118.16 L216.04,118.84 L216.84,119.51 L217.64,120.19 L218.45,120.86 L219.25,121.54 L220.06,122.21 L220.86,122.89 L221.66,123.56 L222.47,124.24 L223.27,124.91 L224.08,125.59 L224.88,126.26 L225.68,126.93 L226.49,127.61 L227.29,128.28 L228.10,128.96 L228.90,129.63 L229.70,130.31 L230.51,130.98 L231.31,131.66 L232.12,132.33 L232.92,133.01 L233.72,133.68 L234.53,134.36 L235.33,135.03 L236.14,135.71 L236.94,136.38 L237.74,137.05 L238.55,137.73 L239.35,138.40 L240.16,139.08 L240.96,139.75 L241.76,140.43 L242.57,141.10 L243.37,141.78 L244.18,142.45 L244.98,143.13 L245.78,143.80 L246.59,144.48 L247.39,145.15 L248.20,145.83 L249.00,146.50 L249.80,147.17 L250.61,147.85 L251.41,148.52 L252.22,149.20 L253.02,149.87 L253.82,150.55 L254.63,151.22 L255.43,151.90 L256.24,152.57 L257.04,153.25 L257.84,153.92 L258.65,154.60 L259.45,155.27 L260.26,155.95 L261.06,156.62 L261.86,157.29 L262.67,157.97 L263.47,158.64 L264.28,159.32 L265.08,159.99 L265.88,160.67 L266.69,161.34 L267.49,162.02 L268.30,162.69 L269.10,163.37 L269.90,164.04 L270.71,164.72 L271.51,165.39 L272.32,166.07 L273.12,166.74 L273.92,167.41 L274.73,168.09 L275.53,168.76 L276.34,169.44 L277.14,170.11 L277.94,170.79 L278.75,171.46 L279.55,172.14 L280.36,172.81 L281.16,173.49 L281.96,174.16 L282.77,174.84 L283.57,175.51 L284.38,176.19 L285.18,176.86 L285.98,177.53 L286.79,178.21 L287.59,178.88 L288.40,179.56 L289.20,180.23 L290.00,180.91 L290.81,181.58 L291.61,182.26 L292.42,182.93 L293.22,183.61 L294.02,184.28 L294.83,184.96 L295.63,185.63 L296.44,186.31 L297.24,186.98 L298.04,187.65 L298.85,188.33 L299.65,189.00 L300.46,189.68 L301.26,190.35 L302.06,191.03 L302.87,191.70 L303.67,192.38 L304.48,193.05 L305.28,193.73 L306.08,194.40 L306.89,195.08 L307.69,195.75 L308.50,196.43 L309.30,197.10 L310.10,197.77 L310.91,198.45 L311.71,199.12 L312.52,199.80 L313.32,200.47 L314.12,201.15 L314.93,201.82 L315.73,202.50 L316.54,203.17 L317.34,203.85 L318.14,204.52 L318.95,205.20 L319.75,205.87 L320.56,206.55 L321.36,207.22 L322.16,207.89 L322.97,208.57 L323.77,209.24 L324.58,209.92 L325.38,210.59 L326.18,211.27 L326.99,211.94 L327.79,212.62 L328.60,213.29 L329.40,213.97 L330.20,214.64 L331.01,215.32 L331.81,215.99 L332.62,216.67 L333.42,217.34 L334.22,218.01 L335.03,218.69 L335.83,219.36 L336.64,220.04 L337.44,220.71 L338.24,221.39 L339.05,222.06 L339.85,222.74 L340.66,223.41 L341.46,224.09 L342.26,224.76 L343.07,225.44 L343.87,226.11 L344.68,226.79 L345.48,227.46 L346.28,228.13 L347.09,228.81 L347.89,229.48 L348.70,230.16 L349.50,230.83 L350.30,230.16 L351.11,229.48 L351.91,228.81 L352.72,228.13 L353.52,227.46 L354.32,226.79 L355.13,226.11 L355.93,225.44 L356.74,224.76 L357.54,224.09 L358.34,223.41 L359.15,222.74 L359.95,222.06 L360.76,221.39 L361.56,220.71 L362.36,220.04 L363.17,219.36 L363.97,218.69 L364.78,218.01 L365.58,217.34 L366.38,216.67 L367.19,215.99 L367.99,215.32 L368.80,214.64 L369.60,213.97 L370.40,213.29 L371.21,212.62 L372.01,211.94 L372.82,211.27 L373.62,210.59 L374.42,209.92 L375.23,209.24 L376.03,208.57 L376.84,207.89 L377.64,207.22 L378.44,206.55 L379.25,205.87 L380.05,205.20 L380.86,204.52 L381.66,203.85 L382.46,203.17 L383.27,202.50 L384.07,201.82 L384.88,201.15 L385.68,200.47 L386.48,199.80 L387.29,199.12 L388.09,198.45 L388.90,197.77 L389.70,197.10 L390.50,196.43 L391.31,195.75 L392.11,195.08 L392.92,194.40 L393.72,193.73 L394.52,193.05 L395.33,192.38 L396.13,191.70 L396.94,191.03 L397.74,190.35 L398.54,189.68 L399.35,189.00 L400.15,188.33 L400.96,187.65 L401.76,186.98 L402.56,186.31 L403.37,185.63 L404.17,184.96 L404.98,184.28 L405.78,183.61 L406.58,182.93 L407.39,182.26 L408.19,181.58 L409.00,180.91 L409.80,180.23 L410.60,179.56 L411.41,178.88 L412.21,178.21 L413.02,177.53 L413.82,176.86 L414.62,176.19 L415.43,175.51 L416.23,174.84 L417.04,174.16 L417.84,173.49 L418.64,172.81 L419.45,172.14 L420.25,171.46 L421.06,170.79 L421.86,170.11 L422.66,169.44 L423.47,168.76 L424.27,168.09 L425.08,167.41 L425.88,166.74 L426.68,166.07 L427.49,165.39 L428.29,164.72 L429.10,164.04 L429.90,163.37 L430.70,162.69 L431.51,162.02 L432.31,161.34 L433.12,160.67 L433.92,159.99 L434.72,159.32 L435.53,158.64 L436.33,157.97 L437.14,157.29 L437.94,156.62 L438.74,155.95 L439.55,155.27 L440.35,154.60 L441.16,153.92 L441.96,153.25 L442.76,152.57 L443.57,151.90 L444.37,151.22 L445.18,150.55 L445.98,149.87 L446.78,149.20 L447.59,148.52 L448.39,147.85 L449.20,147.17 L450.00,146.50\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#derivabs1clip)\"/><text x=\"364.57\" y=\"91.68\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"349.50\" cy=\"230.83\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"356.50\" y=\"223.83\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text></svg></span><p>Är funktionen deriverbar vid \\(x=2\\)? Motivera.</p>",
    "s": "<p>Nej. Vid \\(x=2\\) har grafen ett hörn. Lutningen från vänster är \\(-1\\) och från höger är \\(1\\). Eftersom de ensidiga derivatorna inte är lika finns ingen derivata i punkten.</p>",
    "familj": "deriverbarhet_abs_1"
  },
  {
    "id": "3.10",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm alla primitiva funktioner. Endast svar krävs.</p><p>a) \\(f(x)=x^{4} + 2 x\\)<br>b) \\(f(x)=6 x^{2} - 3\\)<br>c) \\(f(x)=e^{x}\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(F(x)=\\frac{x^{5}}{5} + x^{2}+C\\)</p><p>b) \\(F(x)=2 x^{3} - 3 x+C\\)</p><p>c) \\(F(x)=e^{x}+C\\)</p>",
    "familj": "primitiva_multi_1"
  },
  {
    "id": "3.11",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna</p><p>\\[\\int_{1}^{4}2 x + 1\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(F(x)=x^{2} + x\\).</p><p>\\[\\int_{1}^{4}2 x + 1\\,dx=F(4)-F(1)=18.\\]</p><p><strong>Svar:</strong> \\(\\boxed{18}\\).</p>",
    "familj": "integral_rutin_1"
  },
  {
    "id": "3.12",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Ett tågs hastighet beskrivs av \\(v(t)=20-0,4t\\), där \\(t\\) mäts i sekunder och \\(v\\) i m/s.</p><p>Hur långt färdas tåget mellan \\(t=0\\) och \\(t=20\\)?</p>",
    "s": "<p>Sträckan fås genom att integrera hastigheten:</p><p>\\[s=\\int_{0}^{20}20 - \\frac{2 t}{5}\\,dt.\\]</p><p>\\[s=320.\\]</p><p><strong>Svar:</strong> \\(\\boxed{320\\text{ m}}\\).</p>",
    "familj": "intapp_hastighet_1"
  },
  {
    "id": "3.13",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För funktionen \\(f(x)=x^{4} - 4 x^{2}\\):</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där funktionen är växande respektive avtagande.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=4 x \\left(x^{2} - 2\\right).\\]</p><p>Nollställena är \\(0, - \\sqrt{2}, \\sqrt{2}\\).</p><p>Teckenstudium av derivatan ger:</p><p><strong>Växande:</strong> \\((-1,41,0)\\), \\((1,41,\\infty)\\).</p><p><strong>Avtagande:</strong> \\((-\\infty,-1,41)\\), \\((0,1,41)\\).</p>",
    "familj": "grafanalys_tecken_2"
  },
  {
    "id": "3.14",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm funktionens största och minsta värde på intervallet \\([0,5]\\) med hjälp av derivata:</p><p>\\[f(x)=- x^{2} + 6 x - 5.\\]</p>",
    "s": "<p>Derivatan är \\(f\\,\\!\\prime(x)=6 - 2 x\\). Kritiska punkter i intervallet är \\(3\\).</p><p>Kontrollera både kritiska punkter och intervallets ändpunkter:</p><p>\\[f(0)=-5\\]</p><p>\\[f(5)=0\\]</p><p>\\[f(3)=4\\]</p><p><strong>Största värde:</strong> \\(4\\) vid \\(x=3\\).</p><p><strong>Minsta värde:</strong> \\(-5\\) vid \\(x=0\\).</p>",
    "familj": "extrem_intervall_2"
  },
  {
    "id": "3.15",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar grafen till \\(f(x)=|x--1|+1\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"derivabs2arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"derivabs2clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"98.25\" y1=\"20\" x2=\"98.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"198.75\" y1=\"20\" x2=\"198.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"299.25\" y1=\"20\" x2=\"299.25\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"399.75\" y1=\"20\" x2=\"399.75\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"230.83\" x2=\"450\" y2=\"230.83\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"146.50\" x2=\"450\" y2=\"146.50\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"62.17\" x2=\"450\" y2=\"62.17\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"459\" y2=\"273.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#derivabs2arr)\"/><line x1=\"48.00\" y1=\"269.00\" x2=\"48.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"98.25\" y1=\"269.00\" x2=\"98.25\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"98.25\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"148.50\" y1=\"269.00\" x2=\"148.50\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"198.75\" y1=\"269.00\" x2=\"198.75\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"198.75\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"299.25\" y1=\"269.00\" x2=\"299.25\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"299.25\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"349.50\" y1=\"269.00\" x2=\"349.50\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"399.75\" y1=\"269.00\" x2=\"399.75\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"399.75\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"450.00\" y1=\"269.00\" x2=\"450.00\" y2=\"277.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"290.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><text x=\"460\" y=\"265.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#derivabs2arr)\"/><line x1=\"245.00\" y1=\"230.83\" x2=\"253.00\" y2=\"230.83\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"234.33\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"188.67\" x2=\"253.00\" y2=\"188.67\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"192.17\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"146.50\" x2=\"253.00\" y2=\"146.50\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"150.00\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"104.33\" x2=\"253.00\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"62.17\" x2=\"253.00\" y2=\"62.17\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"65.67\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,104.33 L48.80,105.01 L49.61,105.68 L50.41,106.36 L51.22,107.03 L52.02,107.71 L52.82,108.38 L53.63,109.06 L54.43,109.73 L55.24,110.41 L56.04,111.08 L56.84,111.75 L57.65,112.43 L58.45,113.10 L59.26,113.78 L60.06,114.45 L60.86,115.13 L61.67,115.80 L62.47,116.48 L63.28,117.15 L64.08,117.83 L64.88,118.50 L65.69,119.18 L66.49,119.85 L67.30,120.53 L68.10,121.20 L68.90,121.87 L69.71,122.55 L70.51,123.22 L71.32,123.90 L72.12,124.57 L72.92,125.25 L73.73,125.92 L74.53,126.60 L75.34,127.27 L76.14,127.95 L76.94,128.62 L77.75,129.30 L78.55,129.97 L79.36,130.65 L80.16,131.32 L80.96,131.99 L81.77,132.67 L82.57,133.34 L83.38,134.02 L84.18,134.69 L84.98,135.37 L85.79,136.04 L86.59,136.72 L87.40,137.39 L88.20,138.07 L89.00,138.74 L89.81,139.42 L90.61,140.09 L91.42,140.77 L92.22,141.44 L93.02,142.11 L93.83,142.79 L94.63,143.46 L95.44,144.14 L96.24,144.81 L97.04,145.49 L97.85,146.16 L98.65,146.84 L99.46,147.51 L100.26,148.19 L101.06,148.86 L101.87,149.54 L102.67,150.21 L103.48,150.89 L104.28,151.56 L105.08,152.23 L105.89,152.91 L106.69,153.58 L107.50,154.26 L108.30,154.93 L109.10,155.61 L109.91,156.28 L110.71,156.96 L111.52,157.63 L112.32,158.31 L113.12,158.98 L113.93,159.66 L114.73,160.33 L115.54,161.01 L116.34,161.68 L117.14,162.35 L117.95,163.03 L118.75,163.70 L119.56,164.38 L120.36,165.05 L121.16,165.73 L121.97,166.40 L122.77,167.08 L123.58,167.75 L124.38,168.43 L125.18,169.10 L125.99,169.78 L126.79,170.45 L127.60,171.13 L128.40,171.80 L129.20,172.47 L130.01,173.15 L130.81,173.82 L131.62,174.50 L132.42,175.17 L133.22,175.85 L134.03,176.52 L134.83,177.20 L135.64,177.87 L136.44,178.55 L137.24,179.22 L138.05,179.90 L138.85,180.57 L139.66,181.25 L140.46,181.92 L141.26,182.59 L142.07,183.27 L142.87,183.94 L143.68,184.62 L144.48,185.29 L145.28,185.97 L146.09,186.64 L146.89,187.32 L147.70,187.99 L148.50,188.67 L149.30,189.34 L150.11,190.02 L150.91,190.69 L151.72,191.37 L152.52,192.04 L153.32,192.71 L154.13,193.39 L154.93,194.06 L155.74,194.74 L156.54,195.41 L157.34,196.09 L158.15,196.76 L158.95,197.44 L159.76,198.11 L160.56,198.79 L161.36,199.46 L162.17,200.14 L162.97,200.81 L163.78,201.49 L164.58,202.16 L165.38,202.83 L166.19,203.51 L166.99,204.18 L167.80,204.86 L168.60,205.53 L169.40,206.21 L170.21,206.88 L171.01,207.56 L171.82,208.23 L172.62,208.91 L173.42,209.58 L174.23,210.26 L175.03,210.93 L175.84,211.61 L176.64,212.28 L177.44,212.95 L178.25,213.63 L179.05,214.30 L179.86,214.98 L180.66,215.65 L181.46,216.33 L182.27,217.00 L183.07,217.68 L183.88,218.35 L184.68,219.03 L185.48,219.70 L186.29,220.38 L187.09,221.05 L187.90,221.73 L188.70,222.40 L189.50,223.07 L190.31,223.75 L191.11,224.42 L191.92,225.10 L192.72,225.77 L193.52,226.45 L194.33,227.12 L195.13,227.80 L195.94,228.47 L196.74,229.15 L197.54,229.82 L198.35,230.50 L199.15,230.50 L199.96,229.82 L200.76,229.15 L201.56,228.47 L202.37,227.80 L203.17,227.12 L203.98,226.45 L204.78,225.77 L205.58,225.10 L206.39,224.42 L207.19,223.75 L208.00,223.07 L208.80,222.40 L209.60,221.73 L210.41,221.05 L211.21,220.38 L212.02,219.70 L212.82,219.03 L213.62,218.35 L214.43,217.68 L215.23,217.00 L216.04,216.33 L216.84,215.65 L217.64,214.98 L218.45,214.30 L219.25,213.63 L220.06,212.95 L220.86,212.28 L221.66,211.61 L222.47,210.93 L223.27,210.26 L224.08,209.58 L224.88,208.91 L225.68,208.23 L226.49,207.56 L227.29,206.88 L228.10,206.21 L228.90,205.53 L229.70,204.86 L230.51,204.18 L231.31,203.51 L232.12,202.83 L232.92,202.16 L233.72,201.49 L234.53,200.81 L235.33,200.14 L236.14,199.46 L236.94,198.79 L237.74,198.11 L238.55,197.44 L239.35,196.76 L240.16,196.09 L240.96,195.41 L241.76,194.74 L242.57,194.06 L243.37,193.39 L244.18,192.71 L244.98,192.04 L245.78,191.37 L246.59,190.69 L247.39,190.02 L248.20,189.34 L249.00,188.67 L249.80,187.99 L250.61,187.32 L251.41,186.64 L252.22,185.97 L253.02,185.29 L253.82,184.62 L254.63,183.94 L255.43,183.27 L256.24,182.59 L257.04,181.92 L257.84,181.25 L258.65,180.57 L259.45,179.90 L260.26,179.22 L261.06,178.55 L261.86,177.87 L262.67,177.20 L263.47,176.52 L264.28,175.85 L265.08,175.17 L265.88,174.50 L266.69,173.82 L267.49,173.15 L268.30,172.47 L269.10,171.80 L269.90,171.13 L270.71,170.45 L271.51,169.78 L272.32,169.10 L273.12,168.43 L273.92,167.75 L274.73,167.08 L275.53,166.40 L276.34,165.73 L277.14,165.05 L277.94,164.38 L278.75,163.70 L279.55,163.03 L280.36,162.35 L281.16,161.68 L281.96,161.01 L282.77,160.33 L283.57,159.66 L284.38,158.98 L285.18,158.31 L285.98,157.63 L286.79,156.96 L287.59,156.28 L288.40,155.61 L289.20,154.93 L290.00,154.26 L290.81,153.58 L291.61,152.91 L292.42,152.23 L293.22,151.56 L294.02,150.89 L294.83,150.21 L295.63,149.54 L296.44,148.86 L297.24,148.19 L298.04,147.51 L298.85,146.84 L299.65,146.16 L300.46,145.49 L301.26,144.81 L302.06,144.14 L302.87,143.46 L303.67,142.79 L304.48,142.11 L305.28,141.44 L306.08,140.77 L306.89,140.09 L307.69,139.42 L308.50,138.74 L309.30,138.07 L310.10,137.39 L310.91,136.72 L311.71,136.04 L312.52,135.37 L313.32,134.69 L314.12,134.02 L314.93,133.34 L315.73,132.67 L316.54,131.99 L317.34,131.32 L318.14,130.65 L318.95,129.97 L319.75,129.30 L320.56,128.62 L321.36,127.95 L322.16,127.27 L322.97,126.60 L323.77,125.92 L324.58,125.25 L325.38,124.57 L326.18,123.90 L326.99,123.22 L327.79,122.55 L328.60,121.87 L329.40,121.20 L330.20,120.53 L331.01,119.85 L331.81,119.18 L332.62,118.50 L333.42,117.83 L334.22,117.15 L335.03,116.48 L335.83,115.80 L336.64,115.13 L337.44,114.45 L338.24,113.78 L339.05,113.10 L339.85,112.43 L340.66,111.75 L341.46,111.08 L342.26,110.41 L343.07,109.73 L343.87,109.06 L344.68,108.38 L345.48,107.71 L346.28,107.03 L347.09,106.36 L347.89,105.68 L348.70,105.01 L349.50,104.33 L350.30,103.66 L351.11,102.98 L351.91,102.31 L352.72,101.63 L353.52,100.96 L354.32,100.29 L355.13,99.61 L355.93,98.94 L356.74,98.26 L357.54,97.59 L358.34,96.91 L359.15,96.24 L359.95,95.56 L360.76,94.89 L361.56,94.21 L362.36,93.54 L363.17,92.86 L363.97,92.19 L364.78,91.51 L365.58,90.84 L366.38,90.17 L367.19,89.49 L367.99,88.82 L368.80,88.14 L369.60,87.47 L370.40,86.79 L371.21,86.12 L372.01,85.44 L372.82,84.77 L373.62,84.09 L374.42,83.42 L375.23,82.74 L376.03,82.07 L376.84,81.39 L377.64,80.72 L378.44,80.05 L379.25,79.37 L380.05,78.70 L380.86,78.02 L381.66,77.35 L382.46,76.67 L383.27,76.00 L384.07,75.32 L384.88,74.65 L385.68,73.97 L386.48,73.30 L387.29,72.62 L388.09,71.95 L388.90,71.27 L389.70,70.60 L390.50,69.93 L391.31,69.25 L392.11,68.58 L392.92,67.90 L393.72,67.23 L394.52,66.55 L395.33,65.88 L396.13,65.20 L396.94,64.53 L397.74,63.85 L398.54,63.18 L399.35,62.50 L400.15,61.83 L400.96,61.15 L401.76,60.48 L402.56,59.81 L403.37,59.13 L404.17,58.46 L404.98,57.78 L405.78,57.11 L406.58,56.43 L407.39,55.76 L408.19,55.08 L409.00,54.41 L409.80,53.73 L410.60,53.06 L411.41,52.38 L412.21,51.71 L413.02,51.03 L413.82,50.36 L414.62,49.69 L415.43,49.01 L416.23,48.34 L417.04,47.66 L417.84,46.99 L418.64,46.31 L419.45,45.64 L420.25,44.96 L421.06,44.29 L421.86,43.61 L422.66,42.94 L423.47,42.26 L424.27,41.59 L425.08,40.91 L425.88,40.24 L426.68,39.57 L427.49,38.89 L428.29,38.22 L429.10,37.54 L429.90,36.87 L430.70,36.19 L431.51,35.52 L432.31,34.84 L433.12,34.17 L433.92,33.49 L434.72,32.82 L435.53,32.14 L436.33,31.47 L437.14,30.79 L437.94,30.12 L438.74,29.45 L439.55,28.77 L440.35,28.10 L441.16,27.42 L441.96,26.75 L442.76,26.07 L443.57,25.40 L444.37,24.72 L445.18,24.05 L445.98,23.37 L446.78,22.70 L447.59,22.02 L448.39,21.35 L449.20,20.67 L450.00,20.00\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#derivabs2clip)\"/><text x=\"364.57\" y=\"91.68\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><circle cx=\"198.75\" cy=\"230.83\" r=\"4.2\" fill=\"#2A5D9E\" stroke=\"#fff\" stroke-width=\"1.3\"/><text x=\"205.75\" y=\"223.83\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" font-weight=\"600\" fill=\"#2B2527\">P</text></svg></span><p>Är funktionen deriverbar vid \\(x=-1\\)? Motivera.</p>",
    "s": "<p>Nej. Vid \\(x=-1\\) har grafen ett hörn. Lutningen från vänster är \\(-1\\) och från höger är \\(1\\). Eftersom de ensidiga derivatorna inte är lika finns ingen derivata i punkten.</p>",
    "familj": "deriverbarhet_abs_2"
  },
  {
    "id": "3.16",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Bestäm alla primitiva funktioner. Endast svar krävs.</p><p>a) \\(f(x)=\\frac{2}{x^{2}}\\)<br>b) \\(f(x)=3 e^{2 x}\\)<br>c) \\(f(x)=7 \\sqrt{x}\\)<br></p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(F(x)=- \\frac{2}{x}+C\\)</p><p>b) \\(F(x)=\\frac{3 e^{2 x}}{2}+C\\)</p><p>c) \\(F(x)=\\frac{14 x^{\\frac{3}{2}}}{3}+C\\)</p>",
    "familj": "primitiva_multi_2"
  },
  {
    "id": "3.17",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna</p><p>\\[\\int_{0}^{2}x^{3} - 2 x\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(F(x)=\\frac{x^{4}}{4} - x^{2}\\).</p><p>\\[\\int_{0}^{2}x^{3} - 2 x\\,dx=F(2)-F(0)=0.\\]</p><p><strong>Svar:</strong> \\(\\boxed{0}\\).</p>",
    "familj": "integral_rutin_2"
  },
  {
    "id": "3.18",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Flödet av vatten beskrivs av</p><p>\\[q(t)=0.8 - 0.02 t\\]</p><p>där \\(q\\) mäts i m³/min. Bestäm den totala mängden som passerar under de första 20 minuterna.</p>",
    "s": "<p>Total mängd är integralen av flödeshastigheten:</p><p>\\[V=\\int_0^{20}0.8 - 0.02 t\\,dt=12.0.\\]</p><p><strong>Svar:</strong> \\(12.0\\) m³.</p>",
    "familj": "intapp_flode_0"
  },
  {
    "id": "3.19",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Figuren visar grafen till \\(f\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"ga0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"ga0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"250.00\" x2=\"450\" y2=\"250.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"227.00\" x2=\"450\" y2=\"227.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"204.00\" x2=\"450\" y2=\"204.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"181.00\" x2=\"450\" y2=\"181.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"158.00\" x2=\"450\" y2=\"158.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"135.00\" x2=\"450\" y2=\"135.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"112.00\" x2=\"450\" y2=\"112.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"89.00\" x2=\"450\" y2=\"89.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"66.00\" x2=\"450\" y2=\"66.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"43.00\" x2=\"450\" y2=\"43.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"158.00\" x2=\"459\" y2=\"158.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ga0arr)\"/><line x1=\"48.00\" y1=\"154.00\" x2=\"48.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"154.00\" x2=\"115.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"154.00\" x2=\"182.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"154.00\" x2=\"316.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"154.00\" x2=\"383.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"154.00\" x2=\"450.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"150.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ga0arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-5</text><line x1=\"245.00\" y1=\"250.00\" x2=\"253.00\" y2=\"250.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"253.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"245.00\" y1=\"227.00\" x2=\"253.00\" y2=\"227.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"230.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"204.00\" x2=\"253.00\" y2=\"204.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"207.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"181.00\" x2=\"253.00\" y2=\"181.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"184.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"135.00\" x2=\"253.00\" y2=\"135.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"138.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"112.00\" x2=\"253.00\" y2=\"112.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"115.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"89.00\" x2=\"253.00\" y2=\"89.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"92.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"66.00\" x2=\"253.00\" y2=\"66.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"69.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"43.00\" x2=\"253.00\" y2=\"43.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"46.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,572.00 L48.80,565.41 L49.61,558.87 L50.41,552.40 L51.22,545.98 L52.02,539.62 L52.82,533.32 L53.63,527.08 L54.43,520.90 L55.24,514.77 L56.04,508.70 L56.84,502.69 L57.65,496.74 L58.45,490.84 L59.26,485.00 L60.06,479.21 L60.86,473.48 L61.67,467.81 L62.47,462.19 L63.28,456.63 L64.08,451.13 L64.88,445.67 L65.69,440.28 L66.49,434.93 L67.30,429.64 L68.10,424.41 L68.90,419.23 L69.71,414.10 L70.51,409.03 L71.32,404.00 L72.12,399.03 L72.92,394.12 L73.73,389.25 L74.53,384.44 L75.34,379.68 L76.14,374.97 L76.94,370.31 L77.75,365.71 L78.55,361.15 L79.36,356.64 L80.16,352.19 L80.96,347.78 L81.77,343.43 L82.57,339.12 L83.38,334.87 L84.18,330.66 L84.98,326.50 L85.79,322.39 L86.59,318.33 L87.40,314.32 L88.20,310.35 L89.00,306.43 L89.81,302.56 L90.61,298.74 L91.42,294.97 L92.22,291.24 L93.02,287.55 L93.83,283.92 L94.63,280.33 L95.44,276.78 L96.24,273.28 L97.04,269.83 L97.85,266.42 L98.65,263.06 L99.46,259.74 L100.26,256.46 L101.06,253.23 L101.87,250.05 L102.67,246.90 L103.48,243.80 L104.28,240.75 L105.08,237.73 L105.89,234.76 L106.69,231.83 L107.50,228.95 L108.30,226.10 L109.10,223.30 L109.91,220.54 L110.71,217.82 L111.52,215.14 L112.32,212.50 L113.12,209.90 L113.93,207.35 L114.73,204.83 L115.54,202.35 L116.34,199.92 L117.14,197.52 L117.95,195.16 L118.75,192.84 L119.56,190.55 L120.36,188.31 L121.16,186.11 L121.97,183.94 L122.77,181.81 L123.58,179.72 L124.38,177.66 L125.18,175.64 L125.99,173.66 L126.79,171.72 L127.60,169.81 L128.40,167.94 L129.20,166.10 L130.01,164.30 L130.81,162.53 L131.62,160.80 L132.42,159.10 L133.22,157.44 L134.03,155.82 L134.83,154.22 L135.64,152.66 L136.44,151.14 L137.24,149.65 L138.05,148.19 L138.85,146.76 L139.66,145.37 L140.46,144.01 L141.26,142.68 L142.07,141.38 L142.87,140.11 L143.68,138.88 L144.48,137.68 L145.28,136.51 L146.09,135.37 L146.89,134.25 L147.70,133.17 L148.50,132.12 L149.30,131.10 L150.11,130.11 L150.91,129.15 L151.72,128.22 L152.52,127.32 L153.32,126.44 L154.13,125.60 L154.93,124.78 L155.74,123.99 L156.54,123.23 L157.34,122.49 L158.15,121.78 L158.95,121.10 L159.76,120.45 L160.56,119.82 L161.36,119.22 L162.17,118.64 L162.97,118.09 L163.78,117.57 L164.58,117.07 L165.38,116.59 L166.19,116.15 L166.99,115.72 L167.80,115.32 L168.60,114.94 L169.40,114.59 L170.21,114.26 L171.01,113.96 L171.82,113.67 L172.62,113.42 L173.42,113.18 L174.23,112.96 L175.03,112.77 L175.84,112.60 L176.64,112.45 L177.44,112.33 L178.25,112.22 L179.05,112.14 L179.86,112.07 L180.66,112.03 L181.46,112.00 L182.27,112.00 L183.07,112.02 L183.88,112.05 L184.68,112.11 L185.48,112.18 L186.29,112.28 L187.09,112.39 L187.90,112.52 L188.70,112.67 L189.50,112.83 L190.31,113.02 L191.11,113.22 L191.92,113.44 L192.72,113.67 L193.52,113.92 L194.33,114.19 L195.13,114.48 L195.94,114.78 L196.74,115.09 L197.54,115.43 L198.35,115.77 L199.15,116.14 L199.96,116.51 L200.76,116.90 L201.56,117.31 L202.37,117.73 L203.17,118.16 L203.98,118.61 L204.78,119.07 L205.58,119.55 L206.39,120.03 L207.19,120.53 L208.00,121.04 L208.80,121.57 L209.60,122.10 L210.41,122.65 L211.21,123.21 L212.02,123.78 L212.82,124.36 L213.62,124.95 L214.43,125.56 L215.23,126.17 L216.04,126.79 L216.84,127.42 L217.64,128.07 L218.45,128.72 L219.25,129.38 L220.06,130.05 L220.86,130.72 L221.66,131.41 L222.47,132.10 L223.27,132.81 L224.08,133.52 L224.88,134.23 L225.68,134.96 L226.49,135.69 L227.29,136.43 L228.10,137.17 L228.90,137.92 L229.70,138.68 L230.51,139.44 L231.31,140.21 L232.12,140.98 L232.92,141.76 L233.72,142.54 L234.53,143.33 L235.33,144.12 L236.14,144.91 L236.94,145.71 L237.74,146.52 L238.55,147.32 L239.35,148.13 L240.16,148.94 L240.96,149.76 L241.76,150.58 L242.57,151.40 L243.37,152.22 L244.18,153.04 L244.98,153.86 L245.78,154.69 L246.59,155.52 L247.39,156.34 L248.20,157.17 L249.00,158.00 L249.80,158.83 L250.61,159.66 L251.41,160.48 L252.22,161.31 L253.02,162.14 L253.82,162.96 L254.63,163.78 L255.43,164.60 L256.24,165.42 L257.04,166.24 L257.84,167.06 L258.65,167.87 L259.45,168.68 L260.26,169.48 L261.06,170.29 L261.86,171.09 L262.67,171.88 L263.47,172.67 L264.28,173.46 L265.08,174.24 L265.88,175.02 L266.69,175.79 L267.49,176.56 L268.30,177.32 L269.10,178.08 L269.90,178.83 L270.71,179.57 L271.51,180.31 L272.32,181.04 L273.12,181.77 L273.92,182.48 L274.73,183.19 L275.53,183.90 L276.34,184.59 L277.14,185.28 L277.94,185.95 L278.75,186.62 L279.55,187.28 L280.36,187.93 L281.16,188.58 L281.96,189.21 L282.77,189.83 L283.57,190.44 L284.38,191.05 L285.18,191.64 L285.98,192.22 L286.79,192.79 L287.59,193.35 L288.40,193.90 L289.20,194.43 L290.00,194.96 L290.81,195.47 L291.61,195.97 L292.42,196.45 L293.22,196.93 L294.02,197.39 L294.83,197.84 L295.63,198.27 L296.44,198.69 L297.24,199.10 L298.04,199.49 L298.85,199.86 L299.65,200.23 L300.46,200.57 L301.26,200.91 L302.06,201.22 L302.87,201.52 L303.67,201.81 L304.48,202.08 L305.28,202.33 L306.08,202.56 L306.89,202.78 L307.69,202.98 L308.50,203.17 L309.30,203.33 L310.10,203.48 L310.91,203.61 L311.71,203.72 L312.52,203.82 L313.32,203.89 L314.12,203.95 L314.93,203.98 L315.73,204.00 L316.54,204.00 L317.34,203.97 L318.14,203.93 L318.95,203.86 L319.75,203.78 L320.56,203.67 L321.36,203.55 L322.16,203.40 L322.97,203.23 L323.77,203.04 L324.58,202.82 L325.38,202.58 L326.18,202.33 L326.99,202.04 L327.79,201.74 L328.60,201.41 L329.40,201.06 L330.20,200.68 L331.01,200.28 L331.81,199.85 L332.62,199.41 L333.42,198.93 L334.22,198.43 L335.03,197.91 L335.83,197.36 L336.64,196.78 L337.44,196.18 L338.24,195.55 L339.05,194.90 L339.85,194.22 L340.66,193.51 L341.46,192.77 L342.26,192.01 L343.07,191.22 L343.87,190.40 L344.68,189.56 L345.48,188.68 L346.28,187.78 L347.09,186.85 L347.89,185.89 L348.70,184.90 L349.50,183.88 L350.30,182.83 L351.11,181.75 L351.91,180.63 L352.72,179.49 L353.52,178.32 L354.32,177.12 L355.13,175.89 L355.93,174.62 L356.74,173.32 L357.54,171.99 L358.34,170.63 L359.15,169.24 L359.95,167.81 L360.76,166.35 L361.56,164.86 L362.36,163.34 L363.17,161.78 L363.97,160.18 L364.78,158.56 L365.58,156.90 L366.38,155.20 L367.19,153.47 L367.99,151.70 L368.80,149.90 L369.60,148.06 L370.40,146.19 L371.21,144.28 L372.01,142.34 L372.82,140.36 L373.62,138.34 L374.42,136.28 L375.23,134.19 L376.03,132.06 L376.84,129.89 L377.64,127.69 L378.44,125.45 L379.25,123.16 L380.05,120.84 L380.86,118.48 L381.66,116.08 L382.46,113.65 L383.27,111.17 L384.07,108.65 L384.88,106.10 L385.68,103.50 L386.48,100.86 L387.29,98.18 L388.09,95.46 L388.90,92.70 L389.70,89.90 L390.50,87.05 L391.31,84.17 L392.11,81.24 L392.92,78.27 L393.72,75.25 L394.52,72.20 L395.33,69.10 L396.13,65.95 L396.94,62.77 L397.74,59.54 L398.54,56.26 L399.35,52.94 L400.15,49.58 L400.96,46.17 L401.76,42.72 L402.56,39.22 L403.37,35.67 L404.17,32.08 L404.98,28.45 L405.78,24.76 L406.58,21.03 L407.39,17.26 L408.19,13.44 L409.00,9.57 L409.80,5.65 L410.60,1.68 L411.41,-2.33 L412.21,-6.39 L413.02,-10.50 L413.82,-14.66 L414.62,-18.87 L415.43,-23.12 L416.23,-27.43 L417.04,-31.78 L417.84,-36.19 L418.64,-40.64 L419.45,-45.15 L420.25,-49.71 L421.06,-54.31 L421.86,-58.97 L422.66,-63.68 L423.47,-68.44 L424.27,-73.25 L425.08,-78.12 L425.88,-83.03 L426.68,-88.00 L427.49,-93.03 L428.29,-98.10 L429.10,-103.23 L429.90,-108.41 L430.70,-113.64 L431.51,-118.93 L432.31,-124.28 L433.12,-129.67 L433.92,-135.13 L434.72,-140.63 L435.53,-146.19 L436.33,-151.81 L437.14,-157.48 L437.94,-163.21 L438.74,-169.00 L439.55,-174.84 L440.35,-180.74 L441.16,-186.69 L441.96,-192.70 L442.76,-198.77 L443.57,-204.90 L444.37,-211.08 L445.18,-217.32 L445.98,-223.62 L446.78,-229.98 L447.59,-236.40 L448.39,-242.87 L449.20,-249.41 L450.00,-256.00\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#ga0clip)\"/><text x=\"403.10\" y=\"47.60\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text></svg></span><p>a) Ungefär för vilka x-värden är \\(f\\,\\!\\prime(x)=0\\)?<br>b) På vilka intervall är \\(f\\,\\!\\prime(x)&lt;0\\)?<br>c) Ange var \\(f\\,\\!\\prime\\prime(x)\\) verkar vara positiv.</p>",
    "s": "<p>Grafen har horisontell tangent ungefär vid \\(x=-1\\) och \\(x=1\\), alltså är derivatan noll där.</p><p>Grafen faller mellan dessa punkter, så \\(f\\,\\!\\prime(x)&lt;0\\) för ungefär \\(-1&lt;x&lt;1\\).</p><p>Kurvan är konkav uppåt för \\(x&gt;0\\), vilket betyder att \\(f\\,\\!\\prime\\prime(x)&gt;0\\) där.</p>",
    "familj": "grafanalys_graf_0"
  },
  {
    "id": "3.20",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 40 cm.</p><p>Bestäm rektangelns största möjliga area med hjälp av derivata.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\) cm. Då är den andra sidan \\(2-x\\) eftersom \\(2x+2y=40\\).</p><p>Arean blir</p><p>\\[A(x)=x(2-x)=2x-x^2.\\]</p><p>\\[A\\,\\!\\prime(x)=2-2x.\\]</p><p>Sätt derivatan lika med noll:</p><p>\\[2-2x=0\\Rightarrow x=10.\\]</p><p>Andraderivatan är \\(A\\,\\!\\prime\\prime(x)=-2&lt;0\\), alltså är det ett maximum.</p><p><strong>Svar:</strong> största arean är \\(\\boxed{100\\text{ cm}^2}\\), och rektangeln är en kvadrat.</p>",
    "familj": "extrem_rektangel_0"
  },
  {
    "id": "3.21",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\) och \\(b\\) så att</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;1\\\\x^2+2x+1,&x\\ge1\\end{cases}\\]</p><p>är både kontinuerlig och deriverbar vid \\(x=1\\).</p>",
    "s": "<p><strong>Deriverbarhet:</strong> Vänsterdelens derivata är \\(a\\). Högerdelens derivata är \\(2x+2\\), som vid \\(x=1\\) är \\(4\\). Alltså \\(a=4\\).</p><p><strong>Kontinuitet:</strong> Högerdelens funktionsvärde vid 1 är \\(4\\). Vänsterdelens är \\(a+b=4+b\\). Därför \\(4+b=4\\), så \\(b=0\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=4,\\ b=0}\\).</p>",
    "familj": "deriverbarhet_styckvis_0"
  },
  {
    "id": "3.22",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm den primitiva funktion \\(F\\) till \\(f(x)=3 x^{2} - 4\\) som uppfyller \\(F(0)=5\\).</p>",
    "s": "<p>Alla primitiva funktioner har formen</p><p>\\[F(x)=x^{3} - 4 x+C.\\]</p><p>Villkoret ger</p><p>\\[5=0+C\\]</p><p>så \\(C=5\\).</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=x^{3} - 4 x + 5}\\).</p>",
    "familj": "primitiva_villkor_0"
  },
  {
    "id": "3.23",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna</p><p>\\[\\int_{0}^{1}4 e^{x}\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(F(x)=4 e^{x}\\).</p><p>\\[\\int_{0}^{1}4 e^{x}\\,dx=F(1)-F(0)=-4 + 4 e.\\]</p><p><strong>Svar:</strong> \\(\\boxed{-4 + 4 e}\\).</p>",
    "familj": "integral_rutin_3"
  },
  {
    "id": "3.24",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Flödet av läkemedelslösning beskrivs av</p><p>\\[q(t)=5 e^{- \\frac{t}{10}}\\]</p><p>där \\(q\\) mäts i ml/min. Bestäm den totala mängden som passerar under de första 10 minuterna.</p>",
    "s": "<p>Total mängd är integralen av flödeshastigheten:</p><p>\\[V=\\int_0^{10}5 e^{- \\frac{t}{10}}\\,dt=50 - \\frac{50}{e}.\\]</p><p><strong>Svar:</strong> \\(50 - \\frac{50}{e}\\) ml.</p>",
    "familj": "intapp_flode_1"
  },
  {
    "id": "3.25",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/3/0",
    "t": "<p>Figuren visar grafen till \\(f\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"ga1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"ga1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"250.00\" x2=\"450\" y2=\"250.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"227.00\" x2=\"450\" y2=\"227.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"204.00\" x2=\"450\" y2=\"204.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"181.00\" x2=\"450\" y2=\"181.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"158.00\" x2=\"450\" y2=\"158.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"135.00\" x2=\"450\" y2=\"135.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"112.00\" x2=\"450\" y2=\"112.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"89.00\" x2=\"450\" y2=\"89.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"66.00\" x2=\"450\" y2=\"66.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"43.00\" x2=\"450\" y2=\"43.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"158.00\" x2=\"459\" y2=\"158.00\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ga1arr)\"/><line x1=\"48.00\" y1=\"154.00\" x2=\"48.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"154.00\" x2=\"115.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"154.00\" x2=\"182.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"154.00\" x2=\"316.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"154.00\" x2=\"383.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"154.00\" x2=\"450.00\" y2=\"162.00\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"175.00\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"150.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#ga1arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-5</text><line x1=\"245.00\" y1=\"250.00\" x2=\"253.00\" y2=\"250.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"253.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-4</text><line x1=\"245.00\" y1=\"227.00\" x2=\"253.00\" y2=\"227.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"230.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"204.00\" x2=\"253.00\" y2=\"204.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"207.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"181.00\" x2=\"253.00\" y2=\"181.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"184.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"135.00\" x2=\"253.00\" y2=\"135.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"138.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"112.00\" x2=\"253.00\" y2=\"112.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"115.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"89.00\" x2=\"253.00\" y2=\"89.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"92.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"66.00\" x2=\"253.00\" y2=\"66.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"69.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"43.00\" x2=\"253.00\" y2=\"43.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"46.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,106.25 L48.80,110.35 L49.61,114.38 L50.41,118.33 L51.22,122.21 L52.02,126.01 L52.82,129.74 L53.63,133.40 L54.43,136.99 L55.24,140.51 L56.04,143.96 L56.84,147.34 L57.65,150.65 L58.45,153.89 L59.26,157.07 L60.06,160.18 L60.86,163.22 L61.67,166.20 L62.47,169.11 L63.28,171.96 L64.08,174.75 L64.88,177.47 L65.69,180.14 L66.49,182.74 L67.30,185.28 L68.10,187.76 L68.90,190.18 L69.71,192.55 L70.51,194.85 L71.32,197.10 L72.12,199.29 L72.92,201.43 L73.73,203.51 L74.53,205.54 L75.34,207.51 L76.14,209.43 L76.94,211.29 L77.75,213.10 L78.55,214.86 L79.36,216.58 L80.16,218.23 L80.96,219.84 L81.77,221.41 L82.57,222.92 L83.38,224.38 L84.18,225.80 L84.98,227.17 L85.79,228.49 L86.59,229.77 L87.40,231.00 L88.20,232.19 L89.00,233.33 L89.81,234.43 L90.61,235.49 L91.42,236.51 L92.22,237.48 L93.02,238.41 L93.83,239.30 L94.63,240.16 L95.44,240.97 L96.24,241.74 L97.04,242.48 L97.85,243.17 L98.65,243.83 L99.46,244.46 L100.26,245.04 L101.06,245.59 L101.87,246.11 L102.67,246.59 L103.48,247.04 L104.28,247.45 L105.08,247.83 L105.89,248.18 L106.69,248.50 L107.50,248.78 L108.30,249.03 L109.10,249.26 L109.91,249.45 L110.71,249.61 L111.52,249.74 L112.32,249.85 L113.12,249.93 L113.93,249.98 L114.73,250.00 L115.54,249.99 L116.34,249.96 L117.14,249.91 L117.95,249.83 L118.75,249.72 L119.56,249.59 L120.36,249.43 L121.16,249.26 L121.97,249.06 L122.77,248.83 L123.58,248.59 L124.38,248.32 L125.18,248.03 L125.99,247.72 L126.79,247.40 L127.60,247.05 L128.40,246.68 L129.20,246.29 L130.01,245.89 L130.81,245.46 L131.62,245.02 L132.42,244.56 L133.22,244.09 L134.03,243.60 L134.83,243.09 L135.64,242.56 L136.44,242.03 L137.24,241.47 L138.05,240.91 L138.85,240.32 L139.66,239.73 L140.46,239.12 L141.26,238.50 L142.07,237.86 L142.87,237.22 L143.68,236.56 L144.48,235.89 L145.28,235.21 L146.09,234.52 L146.89,233.82 L147.70,233.11 L148.50,232.39 L149.30,231.66 L150.11,230.92 L150.91,230.18 L151.72,229.42 L152.52,228.66 L153.32,227.89 L154.13,227.12 L154.93,226.33 L155.74,225.54 L156.54,224.75 L157.34,223.95 L158.15,223.14 L158.95,222.33 L159.76,221.51 L160.56,220.69 L161.36,219.87 L162.17,219.04 L162.97,218.21 L163.78,217.37 L164.58,216.54 L165.38,215.70 L166.19,214.85 L166.99,214.01 L167.80,213.16 L168.60,212.32 L169.40,211.47 L170.21,210.62 L171.01,209.77 L171.82,208.92 L172.62,208.07 L173.42,207.22 L174.23,206.37 L175.03,205.52 L175.84,204.68 L176.64,203.83 L177.44,202.99 L178.25,202.15 L179.05,201.31 L179.86,200.47 L180.66,199.63 L181.46,198.80 L182.27,197.97 L183.07,197.15 L183.88,196.33 L184.68,195.51 L185.48,194.70 L186.29,193.89 L187.09,193.08 L187.90,192.28 L188.70,191.49 L189.50,190.70 L190.31,189.91 L191.11,189.13 L191.92,188.36 L192.72,187.59 L193.52,186.83 L194.33,186.08 L195.13,185.33 L195.94,184.59 L196.74,183.86 L197.54,183.13 L198.35,182.41 L199.15,181.70 L199.96,181.00 L200.76,180.30 L201.56,179.61 L202.37,178.93 L203.17,178.26 L203.98,177.60 L204.78,176.95 L205.58,176.30 L206.39,175.67 L207.19,175.04 L208.00,174.42 L208.80,173.81 L209.60,173.22 L210.41,172.63 L211.21,172.05 L212.02,171.48 L212.82,170.92 L213.62,170.38 L214.43,169.84 L215.23,169.31 L216.04,168.80 L216.84,168.29 L217.64,167.80 L218.45,167.32 L219.25,166.84 L220.06,166.38 L220.86,165.94 L221.66,165.50 L222.47,165.07 L223.27,164.66 L224.08,164.26 L224.88,163.87 L225.68,163.49 L226.49,163.12 L227.29,162.77 L228.10,162.42 L228.90,162.09 L229.70,161.78 L230.51,161.47 L231.31,161.18 L232.12,160.90 L232.92,160.63 L233.72,160.38 L234.53,160.13 L235.33,159.90 L236.14,159.69 L236.94,159.48 L237.74,159.29 L238.55,159.12 L239.35,158.95 L240.16,158.80 L240.96,158.66 L241.76,158.54 L242.57,158.42 L243.37,158.32 L244.18,158.24 L244.98,158.17 L245.78,158.11 L246.59,158.06 L247.39,158.03 L248.20,158.01 L249.00,158.00 L249.80,158.01 L250.61,158.03 L251.41,158.06 L252.22,158.11 L253.02,158.17 L253.82,158.24 L254.63,158.32 L255.43,158.42 L256.24,158.54 L257.04,158.66 L257.84,158.80 L258.65,158.95 L259.45,159.12 L260.26,159.29 L261.06,159.48 L261.86,159.69 L262.67,159.90 L263.47,160.13 L264.28,160.38 L265.08,160.63 L265.88,160.90 L266.69,161.18 L267.49,161.47 L268.30,161.78 L269.10,162.09 L269.90,162.42 L270.71,162.77 L271.51,163.12 L272.32,163.49 L273.12,163.87 L273.92,164.26 L274.73,164.66 L275.53,165.07 L276.34,165.50 L277.14,165.94 L277.94,166.38 L278.75,166.84 L279.55,167.32 L280.36,167.80 L281.16,168.29 L281.96,168.80 L282.77,169.31 L283.57,169.84 L284.38,170.38 L285.18,170.92 L285.98,171.48 L286.79,172.05 L287.59,172.63 L288.40,173.22 L289.20,173.81 L290.00,174.42 L290.81,175.04 L291.61,175.67 L292.42,176.30 L293.22,176.95 L294.02,177.60 L294.83,178.26 L295.63,178.93 L296.44,179.61 L297.24,180.30 L298.04,181.00 L298.85,181.70 L299.65,182.41 L300.46,183.13 L301.26,183.86 L302.06,184.59 L302.87,185.33 L303.67,186.08 L304.48,186.83 L305.28,187.59 L306.08,188.36 L306.89,189.13 L307.69,189.91 L308.50,190.70 L309.30,191.49 L310.10,192.28 L310.91,193.08 L311.71,193.89 L312.52,194.70 L313.32,195.51 L314.12,196.33 L314.93,197.15 L315.73,197.97 L316.54,198.80 L317.34,199.63 L318.14,200.47 L318.95,201.31 L319.75,202.15 L320.56,202.99 L321.36,203.83 L322.16,204.68 L322.97,205.52 L323.77,206.37 L324.58,207.22 L325.38,208.07 L326.18,208.92 L326.99,209.77 L327.79,210.62 L328.60,211.47 L329.40,212.32 L330.20,213.16 L331.01,214.01 L331.81,214.85 L332.62,215.70 L333.42,216.54 L334.22,217.37 L335.03,218.21 L335.83,219.04 L336.64,219.87 L337.44,220.69 L338.24,221.51 L339.05,222.33 L339.85,223.14 L340.66,223.95 L341.46,224.75 L342.26,225.54 L343.07,226.33 L343.87,227.12 L344.68,227.89 L345.48,228.66 L346.28,229.42 L347.09,230.18 L347.89,230.92 L348.70,231.66 L349.50,232.39 L350.30,233.11 L351.11,233.82 L351.91,234.52 L352.72,235.21 L353.52,235.89 L354.32,236.56 L355.13,237.22 L355.93,237.86 L356.74,238.50 L357.54,239.12 L358.34,239.73 L359.15,240.32 L359.95,240.91 L360.76,241.47 L361.56,242.03 L362.36,242.56 L363.17,243.09 L363.97,243.60 L364.78,244.09 L365.58,244.56 L366.38,245.02 L367.19,245.46 L367.99,245.89 L368.80,246.29 L369.60,246.68 L370.40,247.05 L371.21,247.40 L372.01,247.72 L372.82,248.03 L373.62,248.32 L374.42,248.59 L375.23,248.83 L376.03,249.06 L376.84,249.26 L377.64,249.43 L378.44,249.59 L379.25,249.72 L380.05,249.83 L380.86,249.91 L381.66,249.96 L382.46,249.99 L383.27,250.00 L384.07,249.98 L384.88,249.93 L385.68,249.85 L386.48,249.74 L387.29,249.61 L388.09,249.45 L388.90,249.26 L389.70,249.03 L390.50,248.78 L391.31,248.50 L392.11,248.18 L392.92,247.83 L393.72,247.45 L394.52,247.04 L395.33,246.59 L396.13,246.11 L396.94,245.59 L397.74,245.04 L398.54,244.46 L399.35,243.83 L400.15,243.17 L400.96,242.48 L401.76,241.74 L402.56,240.97 L403.37,240.16 L404.17,239.30 L404.98,238.41 L405.78,237.48 L406.58,236.51 L407.39,235.49 L408.19,234.43 L409.00,233.33 L409.80,232.19 L410.60,231.00 L411.41,229.77 L412.21,228.49 L413.02,227.17 L413.82,225.80 L414.62,224.38 L415.43,222.92 L416.23,221.41 L417.04,219.84 L417.84,218.23 L418.64,216.58 L419.45,214.86 L420.25,213.10 L421.06,211.29 L421.86,209.43 L422.66,207.51 L423.47,205.54 L424.27,203.51 L425.08,201.43 L425.88,199.29 L426.68,197.10 L427.49,194.85 L428.29,192.55 L429.10,190.18 L429.90,187.76 L430.70,185.28 L431.51,182.74 L432.31,180.14 L433.12,177.47 L433.92,174.75 L434.72,171.96 L435.53,169.11 L436.33,166.20 L437.14,163.22 L437.94,160.18 L438.74,157.07 L439.55,153.89 L440.35,150.65 L441.16,147.34 L441.96,143.96 L442.76,140.51 L443.57,136.99 L444.37,133.40 L445.18,129.74 L445.98,126.01 L446.78,122.21 L447.59,118.33 L448.39,114.38 L449.20,110.35 L450.00,106.25\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#ga1clip)\"/><text x=\"403.10\" y=\"47.60\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text></svg></span><p>a) Ungefär för vilka x-värden är \\(f\\,\\!\\prime(x)=0\\)?<br>b) På vilka intervall är \\(f\\,\\!\\prime(x)&lt;0\\)?<br>c) Ange var \\(f\\,\\!\\prime\\prime(x)\\) verkar vara positiv.</p>",
    "s": "<p>Horisontella tangenter syns ungefär vid \\(x=-2,0,2\\).</p><p>Grafen är avtagande på ungefär \\((-\\infty,-2)\\) och \\((0,2)\\).</p><p>Kurvan är konkav uppåt långt till vänster och höger; med den exakta funktionen sker inflexionerna vid \\(x=\\pm\\sqrt{4/3}\\), men här räcker en grafisk bedömning.</p>",
    "familj": "grafanalys_graf_1"
  },
  {
    "id": "3.26",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 52 cm.</p><p>Bestäm rektangelns största möjliga area med hjälp av derivata.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\) cm. Då är den andra sidan \\(26-x\\) eftersom \\(2x+2y=52\\).</p><p>Arean blir</p><p>\\[A(x)=x(26-x)=26x-x^2.\\]</p><p>\\[A\\,\\!\\prime(x)=26-2x.\\]</p><p>Sätt derivatan lika med noll:</p><p>\\[26-2x=0\\Rightarrow x=13.\\]</p><p>Andraderivatan är \\(A\\,\\!\\prime\\prime(x)=-2&lt;0\\), alltså är det ett maximum.</p><p><strong>Svar:</strong> största arean är \\(\\boxed{169\\text{ cm}^2}\\), och rektangeln är en kvadrat.</p>",
    "familj": "extrem_rektangel_1"
  },
  {
    "id": "3.27",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\) och \\(b\\) så att</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;1\\\\x^2-1x+2,&x\\ge1\\end{cases}\\]</p><p>är både kontinuerlig och deriverbar vid \\(x=1\\).</p>",
    "s": "<p><strong>Deriverbarhet:</strong> Vänsterdelens derivata är \\(a\\). Högerdelens derivata är \\(2x-1\\), som vid \\(x=1\\) är \\(1\\). Alltså \\(a=1\\).</p><p><strong>Kontinuitet:</strong> Högerdelens funktionsvärde vid 1 är \\(2\\). Vänsterdelens är \\(a+b=1+b\\). Därför \\(1+b=2\\), så \\(b=1\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=1,\\ b=1}\\).</p>",
    "familj": "deriverbarhet_styckvis_1"
  },
  {
    "id": "3.28",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm den primitiva funktion \\(F\\) till \\(f(x)=2 x + 3\\) som uppfyller \\(F(1)=0\\).</p>",
    "s": "<p>Alla primitiva funktioner har formen</p><p>\\[F(x)=x^{2} + 3 x+C.\\]</p><p>Villkoret ger</p><p>\\[0=4+C\\]</p><p>så \\(C=-4\\).</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=x^{2} + 3 x - 4}\\).</p>",
    "familj": "primitiva_villkor_1"
  },
  {
    "id": "3.29",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna arean av det markerade området.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"int0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"int0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"148.50\" y1=\"20\" x2=\"148.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"349.50\" y1=\"20\" x2=\"349.50\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"459\" y2=\"236.86\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#int0arr)\"/><line x1=\"48.00\" y1=\"232.86\" x2=\"48.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"148.50\" y1=\"232.86\" x2=\"148.50\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"148.50\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"349.50\" y1=\"232.86\" x2=\"349.50\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"349.50\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"450.00\" y1=\"232.86\" x2=\"450.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><text x=\"460\" y=\"228.86\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#int0arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"200.71\" x2=\"253.00\" y2=\"200.71\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"164.57\" x2=\"253.00\" y2=\"164.57\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"128.43\" x2=\"253.00\" y2=\"128.43\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"92.29\" x2=\"253.00\" y2=\"92.29\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"56.14\" x2=\"253.00\" y2=\"56.14\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><polygon points=\"249.00,236.86 249.00,92.29 255.70,92.45 262.40,92.93 269.10,93.73 275.80,94.86 282.50,96.30 289.20,98.07 295.90,100.16 302.60,102.57 309.30,105.30 316.00,108.35 322.70,111.72 329.40,115.42 336.10,119.43 342.80,123.77 349.50,128.43 356.20,133.41 362.90,138.71 369.60,144.33 376.30,150.27 383.00,156.54 389.70,163.13 396.40,170.03 403.10,177.26 409.80,184.81 416.50,192.68 423.20,200.87 429.90,209.39 436.60,218.22 443.30,227.38 450.00,236.86 450.00,236.86\" fill=\"#D9E7F8\" fill-opacity=\"0.65\" stroke=\"none\" clip-path=\"url(#int0clip)\"/><path d=\"M48.00,236.86 L48.80,235.70 L49.61,234.55 L50.41,233.41 L51.22,232.27 L52.02,231.13 L52.82,230.00 L53.63,228.87 L54.43,227.75 L55.24,226.64 L56.04,225.52 L56.84,224.41 L57.65,223.31 L58.45,222.21 L59.26,221.12 L60.06,220.03 L60.86,218.94 L61.67,217.86 L62.47,216.79 L63.28,215.72 L64.08,214.65 L64.88,213.59 L65.69,212.53 L66.49,211.48 L67.30,210.43 L68.10,209.39 L68.90,208.35 L69.71,207.32 L70.51,206.29 L71.32,205.26 L72.12,204.24 L72.92,203.23 L73.73,202.22 L74.53,201.21 L75.34,200.21 L76.14,199.21 L76.94,198.22 L77.75,197.23 L78.55,196.25 L79.36,195.27 L80.16,194.30 L80.96,193.33 L81.77,192.36 L82.57,191.40 L83.38,190.45 L84.18,189.50 L84.98,188.55 L85.79,187.61 L86.59,186.67 L87.40,185.74 L88.20,184.81 L89.00,183.89 L89.81,182.97 L90.61,182.06 L91.42,181.15 L92.22,180.24 L93.02,179.34 L93.83,178.45 L94.63,177.56 L95.44,176.67 L96.24,175.79 L97.04,174.91 L97.85,174.04 L98.65,173.17 L99.46,172.31 L100.26,171.45 L101.06,170.60 L101.87,169.75 L102.67,168.91 L103.48,168.07 L104.28,167.23 L105.08,166.40 L105.89,165.58 L106.69,164.75 L107.50,163.94 L108.30,163.13 L109.10,162.32 L109.91,161.52 L110.71,160.72 L111.52,159.92 L112.32,159.14 L113.12,158.35 L113.93,157.57 L114.73,156.80 L115.54,156.03 L116.34,155.26 L117.14,154.50 L117.95,153.74 L118.75,152.99 L119.56,152.24 L120.36,151.50 L121.16,150.76 L121.97,150.03 L122.77,149.30 L123.58,148.58 L124.38,147.86 L125.18,147.14 L125.99,146.43 L126.79,145.73 L127.60,145.03 L128.40,144.33 L129.20,143.64 L130.01,142.95 L130.81,142.27 L131.62,141.59 L132.42,140.92 L133.22,140.25 L134.03,139.59 L134.83,138.93 L135.64,138.27 L136.44,137.62 L137.24,136.98 L138.05,136.34 L138.85,135.70 L139.66,135.07 L140.46,134.44 L141.26,133.82 L142.07,133.20 L142.87,132.59 L143.68,131.98 L144.48,131.38 L145.28,130.78 L146.09,130.18 L146.89,129.59 L147.70,129.01 L148.50,128.43 L149.30,127.85 L150.11,127.28 L150.91,126.71 L151.72,126.15 L152.52,125.59 L153.32,125.04 L154.13,124.49 L154.93,123.95 L155.74,123.41 L156.54,122.88 L157.34,122.35 L158.15,121.82 L158.95,121.30 L159.76,120.79 L160.56,120.27 L161.36,119.77 L162.17,119.27 L162.97,118.77 L163.78,118.28 L164.58,117.79 L165.38,117.30 L166.19,116.83 L166.99,116.35 L167.80,115.88 L168.60,115.42 L169.40,114.96 L170.21,114.50 L171.01,114.05 L171.82,113.60 L172.62,113.16 L173.42,112.72 L174.23,112.29 L175.03,111.86 L175.84,111.44 L176.64,111.02 L177.44,110.61 L178.25,110.20 L179.05,109.79 L179.86,109.39 L180.66,109.00 L181.46,108.61 L182.27,108.22 L183.07,107.84 L183.88,107.46 L184.68,107.09 L185.48,106.72 L186.29,106.36 L187.09,106.00 L187.90,105.65 L188.70,105.30 L189.50,104.95 L190.31,104.61 L191.11,104.28 L191.92,103.95 L192.72,103.62 L193.52,103.30 L194.33,102.98 L195.13,102.67 L195.94,102.36 L196.74,102.06 L197.54,101.76 L198.35,101.47 L199.15,101.18 L199.96,100.89 L200.76,100.61 L201.56,100.34 L202.37,100.07 L203.17,99.80 L203.98,99.54 L204.78,99.28 L205.58,99.03 L206.39,98.78 L207.19,98.54 L208.00,98.30 L208.80,98.07 L209.60,97.84 L210.41,97.62 L211.21,97.40 L212.02,97.18 L212.82,96.97 L213.62,96.76 L214.43,96.56 L215.23,96.37 L216.04,96.17 L216.84,95.99 L217.64,95.80 L218.45,95.63 L219.25,95.45 L220.06,95.28 L220.86,95.12 L221.66,94.96 L222.47,94.80 L223.27,94.65 L224.08,94.51 L224.88,94.37 L225.68,94.23 L226.49,94.10 L227.29,93.97 L228.10,93.85 L228.90,93.73 L229.70,93.62 L230.51,93.51 L231.31,93.41 L232.12,93.31 L232.92,93.21 L233.72,93.12 L234.53,93.04 L235.33,92.95 L236.14,92.88 L236.94,92.81 L237.74,92.74 L238.55,92.68 L239.35,92.62 L240.16,92.57 L240.96,92.52 L241.76,92.47 L242.57,92.43 L243.37,92.40 L244.18,92.37 L244.98,92.34 L245.78,92.32 L246.59,92.31 L247.39,92.29 L248.20,92.29 L249.00,92.29 L249.80,92.29 L250.61,92.29 L251.41,92.31 L252.22,92.32 L253.02,92.34 L253.82,92.37 L254.63,92.40 L255.43,92.43 L256.24,92.47 L257.04,92.52 L257.84,92.57 L258.65,92.62 L259.45,92.68 L260.26,92.74 L261.06,92.81 L261.86,92.88 L262.67,92.95 L263.47,93.04 L264.28,93.12 L265.08,93.21 L265.88,93.31 L266.69,93.41 L267.49,93.51 L268.30,93.62 L269.10,93.73 L269.90,93.85 L270.71,93.97 L271.51,94.10 L272.32,94.23 L273.12,94.37 L273.92,94.51 L274.73,94.65 L275.53,94.80 L276.34,94.96 L277.14,95.12 L277.94,95.28 L278.75,95.45 L279.55,95.63 L280.36,95.80 L281.16,95.99 L281.96,96.17 L282.77,96.37 L283.57,96.56 L284.38,96.76 L285.18,96.97 L285.98,97.18 L286.79,97.40 L287.59,97.62 L288.40,97.84 L289.20,98.07 L290.00,98.30 L290.81,98.54 L291.61,98.78 L292.42,99.03 L293.22,99.28 L294.02,99.54 L294.83,99.80 L295.63,100.07 L296.44,100.34 L297.24,100.61 L298.04,100.89 L298.85,101.18 L299.65,101.47 L300.46,101.76 L301.26,102.06 L302.06,102.36 L302.87,102.67 L303.67,102.98 L304.48,103.30 L305.28,103.62 L306.08,103.95 L306.89,104.28 L307.69,104.61 L308.50,104.95 L309.30,105.30 L310.10,105.65 L310.91,106.00 L311.71,106.36 L312.52,106.72 L313.32,107.09 L314.12,107.46 L314.93,107.84 L315.73,108.22 L316.54,108.61 L317.34,109.00 L318.14,109.39 L318.95,109.79 L319.75,110.20 L320.56,110.61 L321.36,111.02 L322.16,111.44 L322.97,111.86 L323.77,112.29 L324.58,112.72 L325.38,113.16 L326.18,113.60 L326.99,114.05 L327.79,114.50 L328.60,114.96 L329.40,115.42 L330.20,115.88 L331.01,116.35 L331.81,116.83 L332.62,117.30 L333.42,117.79 L334.22,118.28 L335.03,118.77 L335.83,119.27 L336.64,119.77 L337.44,120.27 L338.24,120.79 L339.05,121.30 L339.85,121.82 L340.66,122.35 L341.46,122.88 L342.26,123.41 L343.07,123.95 L343.87,124.49 L344.68,125.04 L345.48,125.59 L346.28,126.15 L347.09,126.71 L347.89,127.28 L348.70,127.85 L349.50,128.43 L350.30,129.01 L351.11,129.59 L351.91,130.18 L352.72,130.78 L353.52,131.38 L354.32,131.98 L355.13,132.59 L355.93,133.20 L356.74,133.82 L357.54,134.44 L358.34,135.07 L359.15,135.70 L359.95,136.34 L360.76,136.98 L361.56,137.62 L362.36,138.27 L363.17,138.93 L363.97,139.59 L364.78,140.25 L365.58,140.92 L366.38,141.59 L367.19,142.27 L367.99,142.95 L368.80,143.64 L369.60,144.33 L370.40,145.03 L371.21,145.73 L372.01,146.43 L372.82,147.14 L373.62,147.86 L374.42,148.58 L375.23,149.30 L376.03,150.03 L376.84,150.76 L377.64,151.50 L378.44,152.24 L379.25,152.99 L380.05,153.74 L380.86,154.50 L381.66,155.26 L382.46,156.03 L383.27,156.80 L384.07,157.57 L384.88,158.35 L385.68,159.14 L386.48,159.92 L387.29,160.72 L388.09,161.52 L388.90,162.32 L389.70,163.13 L390.50,163.94 L391.31,164.75 L392.11,165.58 L392.92,166.40 L393.72,167.23 L394.52,168.07 L395.33,168.91 L396.13,169.75 L396.94,170.60 L397.74,171.45 L398.54,172.31 L399.35,173.17 L400.15,174.04 L400.96,174.91 L401.76,175.79 L402.56,176.67 L403.37,177.56 L404.17,178.45 L404.98,179.34 L405.78,180.24 L406.58,181.15 L407.39,182.06 L408.19,182.97 L409.00,183.89 L409.80,184.81 L410.60,185.74 L411.41,186.67 L412.21,187.61 L413.02,188.55 L413.82,189.50 L414.62,190.45 L415.43,191.40 L416.23,192.36 L417.04,193.33 L417.84,194.30 L418.64,195.27 L419.45,196.25 L420.25,197.23 L421.06,198.22 L421.86,199.21 L422.66,200.21 L423.47,201.21 L424.27,202.22 L425.08,203.23 L425.88,204.24 L426.68,205.26 L427.49,206.29 L428.29,207.32 L429.10,208.35 L429.90,209.39 L430.70,210.43 L431.51,211.48 L432.31,212.53 L433.12,213.59 L433.92,214.65 L434.72,215.72 L435.53,216.79 L436.33,217.86 L437.14,218.94 L437.94,220.03 L438.74,221.12 L439.55,222.21 L440.35,223.31 L441.16,224.41 L441.96,225.52 L442.76,226.64 L443.57,227.75 L444.37,228.87 L445.18,230.00 L445.98,231.13 L446.78,232.27 L447.59,233.41 L448.39,234.55 L449.20,235.70 L450.00,236.86\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#int0clip)\"/><text x=\"349.50\" y=\"63.37\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><line x1=\"249.00\" y1=\"236.86\" x2=\"249.00\" y2=\"92.29\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"450.00\" y1=\"236.86\" x2=\"450.00\" y2=\"236.86\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><p>Området ligger mellan \\(x=0\\) och \\(x=2\\).</p>",
    "s": "<p>Funktionen är icke-negativ på intervallet, så arean är</p><p>\\[A=\\int_{0}^{2}4 - x^{2}\\,dx.\\]</p><p>En primitiv funktion är \\(- \\frac{x^{3}}{3} + 4 x\\), därför</p><p>\\[A=\\frac{16}{3}.\\]</p><p><strong>Svar:</strong> \\(\\boxed{\\frac{16}{3}}\\) areaenheter.</p>",
    "familj": "integral_area_graf_0"
  },
  {
    "id": "3.30",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En tanks volym \\(V(t)\\) förändras med hastigheten \\(V\\,\\!\\prime(t)=12-0,5t\\) liter/minut. Vid \\(t=0\\) finns 80 liter i tanken.</p><p>Hur mycket finns i tanken efter 10 minuter?</p>",
    "s": "<p>Volymförändringen under de första 10 minuterna är</p><p>\\[\\int_0^{10}(12-0,5t)dt=\\left[12t-0,25t^2\\right]_0^{10}=120-25=95.\\]</p><p>Startvolymen var 80 liter, alltså</p><p>\\[V(10)=80+95=175.\\]</p><p><strong>Svar:</strong> \\(\\boxed{175\\text{ liter}}\\).</p>",
    "familj": "intapp_startvarde"
  },
  {
    "id": "3.31",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Figuren visar grafen till derivatan \\(f\\,\\!\\prime\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"gap0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"gap0clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"244.89\" x2=\"450\" y2=\"244.89\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"216.78\" x2=\"450\" y2=\"216.78\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"160.56\" x2=\"450\" y2=\"160.56\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"132.44\" x2=\"450\" y2=\"132.44\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"76.22\" x2=\"450\" y2=\"76.22\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"48.11\" x2=\"450\" y2=\"48.11\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"459\" y2=\"188.67\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gap0arr)\"/><line x1=\"48.00\" y1=\"184.67\" x2=\"48.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"184.67\" x2=\"115.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"184.67\" x2=\"182.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"184.67\" x2=\"316.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"184.67\" x2=\"383.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"184.67\" x2=\"450.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"180.67\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gap0arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"244.89\" x2=\"253.00\" y2=\"244.89\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"248.39\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"216.78\" x2=\"253.00\" y2=\"216.78\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"220.28\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"160.56\" x2=\"253.00\" y2=\"160.56\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"164.06\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"132.44\" x2=\"253.00\" y2=\"132.44\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"135.94\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"104.33\" x2=\"253.00\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"76.22\" x2=\"253.00\" y2=\"76.22\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"79.72\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"48.11\" x2=\"253.00\" y2=\"48.11\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"51.61\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,-92.44 L48.80,-90.09 L49.61,-87.74 L50.41,-85.40 L51.22,-83.06 L52.02,-80.74 L52.82,-78.42 L53.63,-76.11 L54.43,-73.81 L55.24,-71.52 L56.04,-69.24 L56.84,-66.96 L57.65,-64.69 L58.45,-62.43 L59.26,-60.18 L60.06,-57.94 L60.86,-55.70 L61.67,-53.47 L62.47,-51.25 L63.28,-49.04 L64.08,-46.84 L64.88,-44.64 L65.69,-42.45 L66.49,-40.28 L67.30,-38.10 L68.10,-35.94 L68.90,-33.79 L69.71,-31.64 L70.51,-29.50 L71.32,-27.37 L72.12,-25.25 L72.92,-23.13 L73.73,-21.03 L74.53,-18.93 L75.34,-16.84 L76.14,-14.76 L76.94,-12.68 L77.75,-10.62 L78.55,-8.56 L79.36,-6.51 L80.16,-4.47 L80.96,-2.43 L81.77,-0.41 L82.57,1.61 L83.38,3.62 L84.18,5.62 L84.98,7.61 L85.79,9.60 L86.59,11.57 L87.40,13.54 L88.20,15.50 L89.00,17.45 L89.81,19.40 L90.61,21.34 L91.42,23.26 L92.22,25.18 L93.02,27.10 L93.83,29.00 L94.63,30.90 L95.44,32.78 L96.24,34.66 L97.04,36.53 L97.85,38.40 L98.65,40.25 L99.46,42.10 L100.26,43.94 L101.06,45.77 L101.87,47.59 L102.67,49.41 L103.48,51.22 L104.28,53.01 L105.08,54.80 L105.89,56.59 L106.69,58.36 L107.50,60.13 L108.30,61.89 L109.10,63.64 L109.91,65.38 L110.71,67.11 L111.52,68.84 L112.32,70.56 L113.12,72.26 L113.93,73.97 L114.73,75.66 L115.54,77.34 L116.34,79.02 L117.14,80.69 L117.95,82.35 L118.75,84.01 L119.56,85.65 L120.36,87.29 L121.16,88.92 L121.97,90.54 L122.77,92.15 L123.58,93.75 L124.38,95.35 L125.18,96.94 L125.99,98.52 L126.79,100.09 L127.60,101.65 L128.40,103.21 L129.20,104.76 L130.01,106.30 L130.81,107.83 L131.62,109.35 L132.42,110.87 L133.22,112.37 L134.03,113.87 L134.83,115.36 L135.64,116.85 L136.44,118.32 L137.24,119.79 L138.05,121.25 L138.85,122.70 L139.66,124.14 L140.46,125.57 L141.26,127.00 L142.07,128.42 L142.87,129.83 L143.68,131.23 L144.48,132.62 L145.28,134.01 L146.09,135.39 L146.89,136.76 L147.70,138.12 L148.50,139.47 L149.30,140.82 L150.11,142.15 L150.91,143.48 L151.72,144.80 L152.52,146.12 L153.32,147.42 L154.13,148.72 L154.93,150.01 L155.74,151.29 L156.54,152.56 L157.34,153.83 L158.15,155.08 L158.95,156.33 L159.76,157.57 L160.56,158.80 L161.36,160.03 L162.17,161.24 L162.97,162.45 L163.78,163.65 L164.58,164.84 L165.38,166.02 L166.19,167.20 L166.99,168.37 L167.80,169.52 L168.60,170.68 L169.40,171.82 L170.21,172.95 L171.01,174.08 L171.82,175.20 L172.62,176.31 L173.42,177.41 L174.23,178.51 L175.03,179.59 L175.84,180.67 L176.64,181.74 L177.44,182.80 L178.25,183.86 L179.05,184.90 L179.86,185.94 L180.66,186.97 L181.46,187.99 L182.27,189.00 L183.07,190.01 L183.88,191.01 L184.68,192.00 L185.48,192.98 L186.29,193.95 L187.09,194.91 L187.90,195.87 L188.70,196.82 L189.50,197.76 L190.31,198.69 L191.11,199.62 L191.92,200.53 L192.72,201.44 L193.52,202.34 L194.33,203.23 L195.13,204.12 L195.94,204.99 L196.74,205.86 L197.54,206.72 L198.35,207.57 L199.15,208.41 L199.96,209.25 L200.76,210.08 L201.56,210.90 L202.37,211.71 L203.17,212.51 L203.98,213.30 L204.78,214.09 L205.58,214.87 L206.39,215.64 L207.19,216.40 L208.00,217.16 L208.80,217.90 L209.60,218.64 L210.41,219.37 L211.21,220.09 L212.02,220.81 L212.82,221.51 L213.62,222.21 L214.43,222.90 L215.23,223.58 L216.04,224.25 L216.84,224.92 L217.64,225.58 L218.45,226.22 L219.25,226.87 L220.06,227.50 L220.86,228.12 L221.66,228.74 L222.47,229.35 L223.27,229.95 L224.08,230.54 L224.88,231.13 L225.68,231.70 L226.49,232.27 L227.29,232.83 L228.10,233.38 L228.90,233.93 L229.70,234.46 L230.51,234.99 L231.31,235.51 L232.12,236.02 L232.92,236.52 L233.72,237.02 L234.53,237.51 L235.33,237.98 L236.14,238.46 L236.94,238.92 L237.74,239.37 L238.55,239.82 L239.35,240.26 L240.16,240.69 L240.96,241.11 L241.76,241.53 L242.57,241.93 L243.37,242.33 L244.18,242.72 L244.98,243.10 L245.78,243.47 L246.59,243.84 L247.39,244.20 L248.20,244.55 L249.00,244.89 L249.80,245.22 L250.61,245.55 L251.41,245.86 L252.22,246.17 L253.02,246.47 L253.82,246.77 L254.63,247.05 L255.43,247.33 L256.24,247.60 L257.04,247.86 L257.84,248.11 L258.65,248.35 L259.45,248.59 L260.26,248.82 L261.06,249.04 L261.86,249.25 L262.67,249.45 L263.47,249.65 L264.28,249.84 L265.08,250.02 L265.88,250.19 L266.69,250.35 L267.49,250.51 L268.30,250.65 L269.10,250.79 L269.90,250.92 L270.71,251.05 L271.51,251.16 L272.32,251.27 L273.12,251.37 L273.92,251.46 L274.73,251.54 L275.53,251.61 L276.34,251.68 L277.14,251.74 L277.94,251.79 L278.75,251.83 L279.55,251.86 L280.36,251.89 L281.16,251.91 L281.96,251.91 L282.77,251.92 L283.57,251.91 L284.38,251.89 L285.18,251.87 L285.98,251.84 L286.79,251.80 L287.59,251.75 L288.40,251.70 L289.20,251.64 L290.00,251.56 L290.81,251.48 L291.61,251.40 L292.42,251.30 L293.22,251.20 L294.02,251.09 L294.83,250.96 L295.63,250.84 L296.44,250.70 L297.24,250.56 L298.04,250.40 L298.85,250.24 L299.65,250.07 L300.46,249.90 L301.26,249.71 L302.06,249.52 L302.87,249.32 L303.67,249.11 L304.48,248.89 L305.28,248.67 L306.08,248.43 L306.89,248.19 L307.69,247.94 L308.50,247.68 L309.30,247.42 L310.10,247.14 L310.91,246.86 L311.71,246.57 L312.52,246.27 L313.32,245.97 L314.12,245.65 L314.93,245.33 L315.73,245.00 L316.54,244.66 L317.34,244.32 L318.14,243.96 L318.95,243.60 L319.75,243.23 L320.56,242.85 L321.36,242.46 L322.16,242.06 L322.97,241.66 L323.77,241.25 L324.58,240.83 L325.38,240.40 L326.18,239.97 L326.99,239.52 L327.79,239.07 L328.60,238.61 L329.40,238.14 L330.20,237.67 L331.01,237.18 L331.81,236.69 L332.62,236.19 L333.42,235.68 L334.22,235.16 L335.03,234.64 L335.83,234.11 L336.64,233.56 L337.44,233.01 L338.24,232.46 L339.05,231.89 L339.85,231.32 L340.66,230.74 L341.46,230.15 L342.26,229.55 L343.07,228.94 L343.87,228.33 L344.68,227.71 L345.48,227.08 L346.28,226.44 L347.09,225.79 L347.89,225.14 L348.70,224.48 L349.50,223.81 L350.30,223.13 L351.11,222.44 L351.91,221.75 L352.72,221.04 L353.52,220.33 L354.32,219.61 L355.13,218.88 L355.93,218.15 L356.74,217.41 L357.54,216.65 L358.34,215.89 L359.15,215.13 L359.95,214.35 L360.76,213.57 L361.56,212.77 L362.36,211.97 L363.17,211.17 L363.97,210.35 L364.78,209.53 L365.58,208.69 L366.38,207.85 L367.19,207.00 L367.99,206.15 L368.80,205.28 L369.60,204.41 L370.40,203.53 L371.21,202.64 L372.01,201.74 L372.82,200.84 L373.62,199.92 L374.42,199.00 L375.23,198.07 L376.03,197.13 L376.84,196.19 L377.64,195.23 L378.44,194.27 L379.25,193.30 L380.05,192.32 L380.86,191.34 L381.66,190.34 L382.46,189.34 L383.27,188.33 L384.07,187.31 L384.88,186.28 L385.68,185.25 L386.48,184.21 L387.29,183.15 L388.09,182.09 L388.90,181.03 L389.70,179.95 L390.50,178.87 L391.31,177.78 L392.11,176.68 L392.92,175.57 L393.72,174.45 L394.52,173.33 L395.33,172.20 L396.13,171.06 L396.94,169.91 L397.74,168.75 L398.54,167.59 L399.35,166.42 L400.15,165.24 L400.96,164.05 L401.76,162.85 L402.56,161.64 L403.37,160.43 L404.17,159.21 L404.98,157.98 L405.78,156.74 L406.58,155.50 L407.39,154.24 L408.19,152.98 L409.00,151.71 L409.80,150.44 L410.60,149.15 L411.41,147.86 L412.21,146.55 L413.02,145.24 L413.82,143.93 L414.62,142.60 L415.43,141.26 L416.23,139.92 L417.04,138.57 L417.84,137.21 L418.64,135.85 L419.45,134.47 L420.25,133.09 L421.06,131.70 L421.86,130.30 L422.66,128.89 L423.47,127.47 L424.27,126.05 L425.08,124.62 L425.88,123.18 L426.68,121.73 L427.49,120.28 L428.29,118.81 L429.10,117.34 L429.90,115.86 L430.70,114.37 L431.51,112.87 L432.31,111.37 L433.12,109.86 L433.92,108.34 L434.72,106.81 L435.53,105.27 L436.33,103.73 L437.14,102.17 L437.94,100.61 L438.74,99.04 L439.55,97.46 L440.35,95.88 L441.16,94.29 L441.96,92.68 L442.76,91.07 L443.57,89.46 L444.37,87.83 L445.18,86.20 L445.98,84.55 L446.78,82.90 L447.59,81.25 L448.39,79.58 L449.20,77.90 L450.00,76.22\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#gap0clip)\"/><text x=\"396.40\" y=\"62.17\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f&#x27;(x)</text></svg></span><p>Beskriv hur grafen till \\(f\\) måste se ut: ange var \\(f\\) är växande/avtagande och var den har maximi- eller minimipunkt.</p>",
    "s": "<p>Derivatan är positiv utanför nollställena \\(-1\\) och \\(2\\), och negativ mellan dem.</p><p>Därför är \\(f\\) växande för \\(x&lt;-1\\), avtagande för \\(-1&lt;x&lt;2\\) och växande för \\(x&gt;2\\).</p><p>Vid \\(x=-1\\) ändras derivatan från positiv till negativ: <strong>maximipunkt</strong>. Vid \\(x=2\\) ändras den från negativ till positiv: <strong>minimipunkt</strong>.</p><p>Funktionens absoluta höjdläge kan inte bestämmas enbart från derivatan; olika primitiva funktioner är vertikalt förskjutna.</p>",
    "familj": "grafanalys_derivatagraf_0"
  },
  {
    "id": "3.32",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Från en kvadratisk kartong med sidan 24 cm klipps lika stora kvadrater med sidan \\(x\\) bort i varje hörn. Kanterna viks upp till en öppen låda.</p><p>Bestäm \\(x\\) så att lådans volym blir så stor som möjligt.</p>",
    "s": "<p>Lådans höjd blir \\(x\\) och botten får sidan \\(24-2x\\). Volymen är</p><p>\\[V(x)=x(24-2x)^2.\\]</p><p>Derivera:</p><p>\\[V\\,\\!\\prime(x)=(24-2x)(24-6x).\\]</p><p>I det fysiskt relevanta intervallet \\(0&lt;x&lt;12.0\\) ger \\(24-6x=0\\):</p><p>\\[x=24/6=4.\\]</p><p>Ändpunkterna ger volym 0 och teckenstudium visar att denna punkt ger maximum.</p><p><strong>Svar:</strong> \\(\\boxed{x=4\\text{ cm}}\\).</p>",
    "familj": "extrem_lada_0"
  },
  {
    "id": "3.33",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\) och \\(b\\) så att</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;1\\\\x^2+0x+3,&x\\ge1\\end{cases}\\]</p><p>är både kontinuerlig och deriverbar vid \\(x=1\\).</p>",
    "s": "<p><strong>Deriverbarhet:</strong> Vänsterdelens derivata är \\(a\\). Högerdelens derivata är \\(2x+0\\), som vid \\(x=1\\) är \\(2\\). Alltså \\(a=2\\).</p><p><strong>Kontinuitet:</strong> Högerdelens funktionsvärde vid 1 är \\(4\\). Vänsterdelens är \\(a+b=2+b\\). Därför \\(2+b=4\\), så \\(b=2\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=2,\\ b=2}\\).</p>",
    "familj": "deriverbarhet_styckvis_2"
  },
  {
    "id": "3.34",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm den primitiva funktion \\(F\\) till \\(f(x)=4 e^{2 x}\\) som uppfyller \\(F(0)=7\\).</p>",
    "s": "<p>Alla primitiva funktioner har formen</p><p>\\[F(x)=2 e^{2 x}+C.\\]</p><p>Villkoret ger</p><p>\\[7=2+C\\]</p><p>så \\(C=5\\).</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=2 e^{2 x} + 5}\\).</p>",
    "familj": "primitiva_villkor_2"
  },
  {
    "id": "3.35",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna arean av det markerade området.</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"int1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"int1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"128.40\" y1=\"20\" x2=\"128.40\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"208.80\" y1=\"20\" x2=\"208.80\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"289.20\" y1=\"20\" x2=\"289.20\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"369.60\" y1=\"20\" x2=\"369.60\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"450\" y2=\"236.86\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"200.71\" x2=\"450\" y2=\"200.71\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"164.57\" x2=\"450\" y2=\"164.57\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"128.43\" x2=\"450\" y2=\"128.43\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"92.29\" x2=\"450\" y2=\"92.29\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"56.14\" x2=\"450\" y2=\"56.14\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"236.86\" x2=\"459\" y2=\"236.86\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#int1arr)\"/><line x1=\"48.00\" y1=\"232.86\" x2=\"48.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"128.40\" y1=\"232.86\" x2=\"128.40\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"128.40\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"289.20\" y1=\"232.86\" x2=\"289.20\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"289.20\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"369.60\" y1=\"232.86\" x2=\"369.60\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"369.60\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"232.86\" x2=\"450.00\" y2=\"240.86\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"253.86\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"228.86\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"208.80\" y1=\"273\" x2=\"208.80\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#int1arr)\"/><line x1=\"204.80\" y1=\"273.00\" x2=\"212.80\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"204.80\" y1=\"200.71\" x2=\"212.80\" y2=\"200.71\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"204.21\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"204.80\" y1=\"164.57\" x2=\"212.80\" y2=\"164.57\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"168.07\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"204.80\" y1=\"128.43\" x2=\"212.80\" y2=\"128.43\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"131.93\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"204.80\" y1=\"92.29\" x2=\"212.80\" y2=\"92.29\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"95.79\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"204.80\" y1=\"56.14\" x2=\"212.80\" y2=\"56.14\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"59.64\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"204.80\" y1=\"20.00\" x2=\"212.80\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"199.80\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"220.80\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><polygon points=\"208.80,236.86 208.80,164.57 214.16,162.16 219.52,159.75 224.88,157.34 230.24,154.93 235.60,152.52 240.96,150.11 246.32,147.70 251.68,145.30 257.04,142.89 262.40,140.48 267.76,138.07 273.12,135.66 278.48,133.25 283.84,130.84 289.20,128.43 294.56,126.02 299.92,123.61 305.28,121.20 310.64,118.79 316.00,116.38 321.36,113.97 326.72,111.56 332.08,109.15 337.44,106.74 342.80,104.33 348.16,101.92 353.52,99.51 358.88,97.10 364.24,94.70 369.60,92.29 369.60,236.86\" fill=\"#D9E7F8\" fill-opacity=\"0.65\" stroke=\"none\" clip-path=\"url(#int1clip)\"/><path d=\"M48.00,236.86 L48.80,236.50 L49.61,236.13 L50.41,235.77 L51.22,235.41 L52.02,235.05 L52.82,234.69 L53.63,234.33 L54.43,233.97 L55.24,233.60 L56.04,233.24 L56.84,232.88 L57.65,232.52 L58.45,232.16 L59.26,231.80 L60.06,231.44 L60.86,231.07 L61.67,230.71 L62.47,230.35 L63.28,229.99 L64.08,229.63 L64.88,229.27 L65.69,228.91 L66.49,228.54 L67.30,228.18 L68.10,227.82 L68.90,227.46 L69.71,227.10 L70.51,226.74 L71.32,226.38 L72.12,226.01 L72.92,225.65 L73.73,225.29 L74.53,224.93 L75.34,224.57 L76.14,224.21 L76.94,223.85 L77.75,223.48 L78.55,223.12 L79.36,222.76 L80.16,222.40 L80.96,222.04 L81.77,221.68 L82.57,221.32 L83.38,220.95 L84.18,220.59 L84.98,220.23 L85.79,219.87 L86.59,219.51 L87.40,219.15 L88.20,218.79 L89.00,218.42 L89.81,218.06 L90.61,217.70 L91.42,217.34 L92.22,216.98 L93.02,216.62 L93.83,216.26 L94.63,215.89 L95.44,215.53 L96.24,215.17 L97.04,214.81 L97.85,214.45 L98.65,214.09 L99.46,213.73 L100.26,213.36 L101.06,213.00 L101.87,212.64 L102.67,212.28 L103.48,211.92 L104.28,211.56 L105.08,211.20 L105.89,210.83 L106.69,210.47 L107.50,210.11 L108.30,209.75 L109.10,209.39 L109.91,209.03 L110.71,208.67 L111.52,208.30 L112.32,207.94 L113.12,207.58 L113.93,207.22 L114.73,206.86 L115.54,206.50 L116.34,206.14 L117.14,205.77 L117.95,205.41 L118.75,205.05 L119.56,204.69 L120.36,204.33 L121.16,203.97 L121.97,203.61 L122.77,203.24 L123.58,202.88 L124.38,202.52 L125.18,202.16 L125.99,201.80 L126.79,201.44 L127.60,201.08 L128.40,200.71 L129.20,200.35 L130.01,199.99 L130.81,199.63 L131.62,199.27 L132.42,198.91 L133.22,198.55 L134.03,198.18 L134.83,197.82 L135.64,197.46 L136.44,197.10 L137.24,196.74 L138.05,196.38 L138.85,196.02 L139.66,195.65 L140.46,195.29 L141.26,194.93 L142.07,194.57 L142.87,194.21 L143.68,193.85 L144.48,193.49 L145.28,193.12 L146.09,192.76 L146.89,192.40 L147.70,192.04 L148.50,191.68 L149.30,191.32 L150.11,190.96 L150.91,190.59 L151.72,190.23 L152.52,189.87 L153.32,189.51 L154.13,189.15 L154.93,188.79 L155.74,188.43 L156.54,188.06 L157.34,187.70 L158.15,187.34 L158.95,186.98 L159.76,186.62 L160.56,186.26 L161.36,185.90 L162.17,185.53 L162.97,185.17 L163.78,184.81 L164.58,184.45 L165.38,184.09 L166.19,183.73 L166.99,183.37 L167.80,183.00 L168.60,182.64 L169.40,182.28 L170.21,181.92 L171.01,181.56 L171.82,181.20 L172.62,180.84 L173.42,180.47 L174.23,180.11 L175.03,179.75 L175.84,179.39 L176.64,179.03 L177.44,178.67 L178.25,178.31 L179.05,177.94 L179.86,177.58 L180.66,177.22 L181.46,176.86 L182.27,176.50 L183.07,176.14 L183.88,175.78 L184.68,175.41 L185.48,175.05 L186.29,174.69 L187.09,174.33 L187.90,173.97 L188.70,173.61 L189.50,173.25 L190.31,172.88 L191.11,172.52 L191.92,172.16 L192.72,171.80 L193.52,171.44 L194.33,171.08 L195.13,170.72 L195.94,170.35 L196.74,169.99 L197.54,169.63 L198.35,169.27 L199.15,168.91 L199.96,168.55 L200.76,168.19 L201.56,167.82 L202.37,167.46 L203.17,167.10 L203.98,166.74 L204.78,166.38 L205.58,166.02 L206.39,165.66 L207.19,165.29 L208.00,164.93 L208.80,164.57 L209.60,164.21 L210.41,163.85 L211.21,163.49 L212.02,163.13 L212.82,162.76 L213.62,162.40 L214.43,162.04 L215.23,161.68 L216.04,161.32 L216.84,160.96 L217.64,160.60 L218.45,160.23 L219.25,159.87 L220.06,159.51 L220.86,159.15 L221.66,158.79 L222.47,158.43 L223.27,158.07 L224.08,157.70 L224.88,157.34 L225.68,156.98 L226.49,156.62 L227.29,156.26 L228.10,155.90 L228.90,155.54 L229.70,155.17 L230.51,154.81 L231.31,154.45 L232.12,154.09 L232.92,153.73 L233.72,153.37 L234.53,153.01 L235.33,152.64 L236.14,152.28 L236.94,151.92 L237.74,151.56 L238.55,151.20 L239.35,150.84 L240.16,150.48 L240.96,150.11 L241.76,149.75 L242.57,149.39 L243.37,149.03 L244.18,148.67 L244.98,148.31 L245.78,147.95 L246.59,147.58 L247.39,147.22 L248.20,146.86 L249.00,146.50 L249.80,146.14 L250.61,145.78 L251.41,145.42 L252.22,145.05 L253.02,144.69 L253.82,144.33 L254.63,143.97 L255.43,143.61 L256.24,143.25 L257.04,142.89 L257.84,142.52 L258.65,142.16 L259.45,141.80 L260.26,141.44 L261.06,141.08 L261.86,140.72 L262.67,140.36 L263.47,139.99 L264.28,139.63 L265.08,139.27 L265.88,138.91 L266.69,138.55 L267.49,138.19 L268.30,137.83 L269.10,137.46 L269.90,137.10 L270.71,136.74 L271.51,136.38 L272.32,136.02 L273.12,135.66 L273.92,135.30 L274.73,134.93 L275.53,134.57 L276.34,134.21 L277.14,133.85 L277.94,133.49 L278.75,133.13 L279.55,132.77 L280.36,132.40 L281.16,132.04 L281.96,131.68 L282.77,131.32 L283.57,130.96 L284.38,130.60 L285.18,130.24 L285.98,129.87 L286.79,129.51 L287.59,129.15 L288.40,128.79 L289.20,128.43 L290.00,128.07 L290.81,127.71 L291.61,127.34 L292.42,126.98 L293.22,126.62 L294.02,126.26 L294.83,125.90 L295.63,125.54 L296.44,125.18 L297.24,124.81 L298.04,124.45 L298.85,124.09 L299.65,123.73 L300.46,123.37 L301.26,123.01 L302.06,122.65 L302.87,122.28 L303.67,121.92 L304.48,121.56 L305.28,121.20 L306.08,120.84 L306.89,120.48 L307.69,120.12 L308.50,119.75 L309.30,119.39 L310.10,119.03 L310.91,118.67 L311.71,118.31 L312.52,117.95 L313.32,117.59 L314.12,117.22 L314.93,116.86 L315.73,116.50 L316.54,116.14 L317.34,115.78 L318.14,115.42 L318.95,115.06 L319.75,114.69 L320.56,114.33 L321.36,113.97 L322.16,113.61 L322.97,113.25 L323.77,112.89 L324.58,112.53 L325.38,112.16 L326.18,111.80 L326.99,111.44 L327.79,111.08 L328.60,110.72 L329.40,110.36 L330.20,110.00 L331.01,109.63 L331.81,109.27 L332.62,108.91 L333.42,108.55 L334.22,108.19 L335.03,107.83 L335.83,107.47 L336.64,107.10 L337.44,106.74 L338.24,106.38 L339.05,106.02 L339.85,105.66 L340.66,105.30 L341.46,104.94 L342.26,104.57 L343.07,104.21 L343.87,103.85 L344.68,103.49 L345.48,103.13 L346.28,102.77 L347.09,102.41 L347.89,102.04 L348.70,101.68 L349.50,101.32 L350.30,100.96 L351.11,100.60 L351.91,100.24 L352.72,99.88 L353.52,99.51 L354.32,99.15 L355.13,98.79 L355.93,98.43 L356.74,98.07 L357.54,97.71 L358.34,97.35 L359.15,96.98 L359.95,96.62 L360.76,96.26 L361.56,95.90 L362.36,95.54 L363.17,95.18 L363.97,94.82 L364.78,94.45 L365.58,94.09 L366.38,93.73 L367.19,93.37 L367.99,93.01 L368.80,92.65 L369.60,92.29 L370.40,91.92 L371.21,91.56 L372.01,91.20 L372.82,90.84 L373.62,90.48 L374.42,90.12 L375.23,89.76 L376.03,89.39 L376.84,89.03 L377.64,88.67 L378.44,88.31 L379.25,87.95 L380.05,87.59 L380.86,87.23 L381.66,86.86 L382.46,86.50 L383.27,86.14 L384.07,85.78 L384.88,85.42 L385.68,85.06 L386.48,84.70 L387.29,84.33 L388.09,83.97 L388.90,83.61 L389.70,83.25 L390.50,82.89 L391.31,82.53 L392.11,82.17 L392.92,81.80 L393.72,81.44 L394.52,81.08 L395.33,80.72 L396.13,80.36 L396.94,80.00 L397.74,79.64 L398.54,79.27 L399.35,78.91 L400.15,78.55 L400.96,78.19 L401.76,77.83 L402.56,77.47 L403.37,77.11 L404.17,76.74 L404.98,76.38 L405.78,76.02 L406.58,75.66 L407.39,75.30 L408.19,74.94 L409.00,74.58 L409.80,74.21 L410.60,73.85 L411.41,73.49 L412.21,73.13 L413.02,72.77 L413.82,72.41 L414.62,72.05 L415.43,71.68 L416.23,71.32 L417.04,70.96 L417.84,70.60 L418.64,70.24 L419.45,69.88 L420.25,69.52 L421.06,69.15 L421.86,68.79 L422.66,68.43 L423.47,68.07 L424.27,67.71 L425.08,67.35 L425.88,66.99 L426.68,66.62 L427.49,66.26 L428.29,65.90 L429.10,65.54 L429.90,65.18 L430.70,64.82 L431.51,64.46 L432.31,64.09 L433.12,63.73 L433.92,63.37 L434.72,63.01 L435.53,62.65 L436.33,62.29 L437.14,61.93 L437.94,61.56 L438.74,61.20 L439.55,60.84 L440.35,60.48 L441.16,60.12 L441.96,59.76 L442.76,59.40 L443.57,59.03 L444.37,58.67 L445.18,58.31 L445.98,57.95 L446.78,57.59 L447.59,57.23 L448.39,56.87 L449.20,56.50 L450.00,56.14\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#int1clip)\"/><text x=\"289.20\" y=\"63.37\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f(x)</text><line x1=\"208.80\" y1=\"236.86\" x2=\"208.80\" y2=\"164.57\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"369.60\" y1=\"236.86\" x2=\"369.60\" y2=\"92.29\" stroke=\"#2A5D9E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><p>Området ligger mellan \\(x=0\\) och \\(x=2\\).</p>",
    "s": "<p>Funktionen är icke-negativ på intervallet, så arean är</p><p>\\[A=\\int_{0}^{2}x + 2\\,dx.\\]</p><p>En primitiv funktion är \\(\\frac{x^{2}}{2} + 2 x\\), därför</p><p>\\[A=6.\\]</p><p><strong>Svar:</strong> \\(\\boxed{6}\\) areaenheter.</p>",
    "familj": "integral_area_graf_1"
  },
  {
    "id": "3.36",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En cistern fylls med olja med flödet</p><p>\\[q(t)=0,9-0,05e^{0,12t}\\quad\\text{m}^3/\\text{min}.\\]</p><p>Bestäm hur mycket olja som totalt har fyllts på från \\(t=0\\) tills flödet upphör.</p>",
    "s": "<p>Flödet upphör när \\(q(t)=0\\):</p><p>\\[0,9-0,05e^{0,12t}=0\\Rightarrow e^{0,12t}=18.\\]</p><p>\\[t=\\frac{\\ln18}{0,12}\\approx 24,09\\text{ min}.\\]</p><p>Total volym blir</p><p>\\[V=\\int_0^{24,09}(0,9-0,05e^{0,12t})dt.\\]</p><p>En primitiv funktion är \\(0,9t-\\frac{0,05}{0,12}e^{0,12t}\\). Insättning av gränserna ger ungefär</p><p>\\[V\\approx 14,59\\text{ m}^3.\\]</p><p><strong>Svar:</strong> \\(\\boxed{14,59\\text{ m}^3}\\).</p>",
    "familj": "intapp_flode_tills_stopp"
  },
  {
    "id": "3.37",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Figuren visar grafen till derivatan \\(f\\,\\!\\prime\\).</p><span class=\"fig bred\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Graf\"><defs><marker id=\"gap1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker><clipPath id=\"gap1clip\"><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\"/></clipPath></defs><rect x=\"48\" y=\"20\" width=\"402\" height=\"253\" fill=\"#FFFFFF\" stroke=\"#E4E3E6\"/><line x1=\"48.00\" y1=\"20\" x2=\"48.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"115.00\" y1=\"20\" x2=\"115.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"182.00\" y1=\"20\" x2=\"182.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"249.00\" y1=\"20\" x2=\"249.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"316.00\" y1=\"20\" x2=\"316.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"383.00\" y1=\"20\" x2=\"383.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"450.00\" y1=\"20\" x2=\"450.00\" y2=\"273\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"273.00\" x2=\"450\" y2=\"273.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"244.89\" x2=\"450\" y2=\"244.89\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"216.78\" x2=\"450\" y2=\"216.78\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"450\" y2=\"188.67\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"160.56\" x2=\"450\" y2=\"160.56\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"132.44\" x2=\"450\" y2=\"132.44\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"104.33\" x2=\"450\" y2=\"104.33\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"76.22\" x2=\"450\" y2=\"76.22\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"48.11\" x2=\"450\" y2=\"48.11\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"20.00\" x2=\"450\" y2=\"20.00\" stroke=\"#E9E8EB\"/><line x1=\"48\" y1=\"188.67\" x2=\"459\" y2=\"188.67\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gap1arr)\"/><line x1=\"48.00\" y1=\"184.67\" x2=\"48.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"48.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"115.00\" y1=\"184.67\" x2=\"115.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"115.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"182.00\" y1=\"184.67\" x2=\"182.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"182.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"316.00\" y1=\"184.67\" x2=\"316.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"316.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"383.00\" y1=\"184.67\" x2=\"383.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"383.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"450.00\" y1=\"184.67\" x2=\"450.00\" y2=\"192.67\" stroke=\"#2B2527\"/><text x=\"450.00\" y=\"205.67\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><text x=\"460\" y=\"180.67\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">x</text><line x1=\"249.00\" y1=\"273\" x2=\"249.00\" y2=\"12\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#gap1arr)\"/><line x1=\"245.00\" y1=\"273.00\" x2=\"253.00\" y2=\"273.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"276.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-3</text><line x1=\"245.00\" y1=\"244.89\" x2=\"253.00\" y2=\"244.89\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"248.39\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-2</text><line x1=\"245.00\" y1=\"216.78\" x2=\"253.00\" y2=\"216.78\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"220.28\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">-1</text><line x1=\"245.00\" y1=\"160.56\" x2=\"253.00\" y2=\"160.56\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"164.06\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">1</text><line x1=\"245.00\" y1=\"132.44\" x2=\"253.00\" y2=\"132.44\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"135.94\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">2</text><line x1=\"245.00\" y1=\"104.33\" x2=\"253.00\" y2=\"104.33\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"107.83\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">3</text><line x1=\"245.00\" y1=\"76.22\" x2=\"253.00\" y2=\"76.22\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"79.72\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">4</text><line x1=\"245.00\" y1=\"48.11\" x2=\"253.00\" y2=\"48.11\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"51.61\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">5</text><line x1=\"245.00\" y1=\"20.00\" x2=\"253.00\" y2=\"20.00\" stroke=\"#2B2527\"/><text x=\"240.00\" y=\"23.50\" text-anchor=\"end\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">6</text><text x=\"261.00\" y=\"13\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\" fill=\"#5C575E\">y</text><path d=\"M48.00,76.22 L48.80,77.90 L49.61,79.58 L50.41,81.25 L51.22,82.90 L52.02,84.55 L52.82,86.20 L53.63,87.83 L54.43,89.46 L55.24,91.07 L56.04,92.68 L56.84,94.29 L57.65,95.88 L58.45,97.46 L59.26,99.04 L60.06,100.61 L60.86,102.17 L61.67,103.73 L62.47,105.27 L63.28,106.81 L64.08,108.34 L64.88,109.86 L65.69,111.37 L66.49,112.87 L67.30,114.37 L68.10,115.86 L68.90,117.34 L69.71,118.81 L70.51,120.28 L71.32,121.73 L72.12,123.18 L72.92,124.62 L73.73,126.05 L74.53,127.47 L75.34,128.89 L76.14,130.30 L76.94,131.70 L77.75,133.09 L78.55,134.47 L79.36,135.85 L80.16,137.21 L80.96,138.57 L81.77,139.92 L82.57,141.26 L83.38,142.60 L84.18,143.93 L84.98,145.24 L85.79,146.55 L86.59,147.86 L87.40,149.15 L88.20,150.44 L89.00,151.71 L89.81,152.98 L90.61,154.24 L91.42,155.50 L92.22,156.74 L93.02,157.98 L93.83,159.21 L94.63,160.43 L95.44,161.64 L96.24,162.85 L97.04,164.05 L97.85,165.24 L98.65,166.42 L99.46,167.59 L100.26,168.75 L101.06,169.91 L101.87,171.06 L102.67,172.20 L103.48,173.33 L104.28,174.45 L105.08,175.57 L105.89,176.68 L106.69,177.78 L107.50,178.87 L108.30,179.95 L109.10,181.03 L109.91,182.09 L110.71,183.15 L111.52,184.21 L112.32,185.25 L113.12,186.28 L113.93,187.31 L114.73,188.33 L115.54,189.34 L116.34,190.34 L117.14,191.34 L117.95,192.32 L118.75,193.30 L119.56,194.27 L120.36,195.23 L121.16,196.19 L121.97,197.13 L122.77,198.07 L123.58,199.00 L124.38,199.92 L125.18,200.84 L125.99,201.74 L126.79,202.64 L127.60,203.53 L128.40,204.41 L129.20,205.28 L130.01,206.15 L130.81,207.00 L131.62,207.85 L132.42,208.69 L133.22,209.53 L134.03,210.35 L134.83,211.17 L135.64,211.97 L136.44,212.77 L137.24,213.57 L138.05,214.35 L138.85,215.13 L139.66,215.89 L140.46,216.65 L141.26,217.41 L142.07,218.15 L142.87,218.88 L143.68,219.61 L144.48,220.33 L145.28,221.04 L146.09,221.75 L146.89,222.44 L147.70,223.13 L148.50,223.81 L149.30,224.48 L150.11,225.14 L150.91,225.79 L151.72,226.44 L152.52,227.08 L153.32,227.71 L154.13,228.33 L154.93,228.94 L155.74,229.55 L156.54,230.15 L157.34,230.74 L158.15,231.32 L158.95,231.89 L159.76,232.46 L160.56,233.01 L161.36,233.56 L162.17,234.11 L162.97,234.64 L163.78,235.16 L164.58,235.68 L165.38,236.19 L166.19,236.69 L166.99,237.18 L167.80,237.67 L168.60,238.14 L169.40,238.61 L170.21,239.07 L171.01,239.52 L171.82,239.97 L172.62,240.40 L173.42,240.83 L174.23,241.25 L175.03,241.66 L175.84,242.06 L176.64,242.46 L177.44,242.85 L178.25,243.23 L179.05,243.60 L179.86,243.96 L180.66,244.32 L181.46,244.66 L182.27,245.00 L183.07,245.33 L183.88,245.65 L184.68,245.97 L185.48,246.27 L186.29,246.57 L187.09,246.86 L187.90,247.14 L188.70,247.42 L189.50,247.68 L190.31,247.94 L191.11,248.19 L191.92,248.43 L192.72,248.67 L193.52,248.89 L194.33,249.11 L195.13,249.32 L195.94,249.52 L196.74,249.71 L197.54,249.90 L198.35,250.07 L199.15,250.24 L199.96,250.40 L200.76,250.56 L201.56,250.70 L202.37,250.84 L203.17,250.96 L203.98,251.09 L204.78,251.20 L205.58,251.30 L206.39,251.40 L207.19,251.48 L208.00,251.56 L208.80,251.64 L209.60,251.70 L210.41,251.75 L211.21,251.80 L212.02,251.84 L212.82,251.87 L213.62,251.89 L214.43,251.91 L215.23,251.92 L216.04,251.91 L216.84,251.91 L217.64,251.89 L218.45,251.86 L219.25,251.83 L220.06,251.79 L220.86,251.74 L221.66,251.68 L222.47,251.61 L223.27,251.54 L224.08,251.46 L224.88,251.37 L225.68,251.27 L226.49,251.16 L227.29,251.05 L228.10,250.92 L228.90,250.79 L229.70,250.65 L230.51,250.51 L231.31,250.35 L232.12,250.19 L232.92,250.02 L233.72,249.84 L234.53,249.65 L235.33,249.45 L236.14,249.25 L236.94,249.04 L237.74,248.82 L238.55,248.59 L239.35,248.35 L240.16,248.11 L240.96,247.86 L241.76,247.60 L242.57,247.33 L243.37,247.05 L244.18,246.77 L244.98,246.47 L245.78,246.17 L246.59,245.86 L247.39,245.55 L248.20,245.22 L249.00,244.89 L249.80,244.55 L250.61,244.20 L251.41,243.84 L252.22,243.47 L253.02,243.10 L253.82,242.72 L254.63,242.33 L255.43,241.93 L256.24,241.53 L257.04,241.11 L257.84,240.69 L258.65,240.26 L259.45,239.82 L260.26,239.37 L261.06,238.92 L261.86,238.46 L262.67,237.98 L263.47,237.51 L264.28,237.02 L265.08,236.52 L265.88,236.02 L266.69,235.51 L267.49,234.99 L268.30,234.46 L269.10,233.93 L269.90,233.38 L270.71,232.83 L271.51,232.27 L272.32,231.70 L273.12,231.13 L273.92,230.54 L274.73,229.95 L275.53,229.35 L276.34,228.74 L277.14,228.12 L277.94,227.50 L278.75,226.87 L279.55,226.22 L280.36,225.58 L281.16,224.92 L281.96,224.25 L282.77,223.58 L283.57,222.90 L284.38,222.21 L285.18,221.51 L285.98,220.81 L286.79,220.09 L287.59,219.37 L288.40,218.64 L289.20,217.90 L290.00,217.16 L290.81,216.40 L291.61,215.64 L292.42,214.87 L293.22,214.09 L294.02,213.30 L294.83,212.51 L295.63,211.71 L296.44,210.90 L297.24,210.08 L298.04,209.25 L298.85,208.41 L299.65,207.57 L300.46,206.72 L301.26,205.86 L302.06,204.99 L302.87,204.12 L303.67,203.23 L304.48,202.34 L305.28,201.44 L306.08,200.53 L306.89,199.62 L307.69,198.69 L308.50,197.76 L309.30,196.82 L310.10,195.87 L310.91,194.91 L311.71,193.95 L312.52,192.98 L313.32,192.00 L314.12,191.01 L314.93,190.01 L315.73,189.00 L316.54,187.99 L317.34,186.97 L318.14,185.94 L318.95,184.90 L319.75,183.86 L320.56,182.80 L321.36,181.74 L322.16,180.67 L322.97,179.59 L323.77,178.51 L324.58,177.41 L325.38,176.31 L326.18,175.20 L326.99,174.08 L327.79,172.95 L328.60,171.82 L329.40,170.68 L330.20,169.52 L331.01,168.37 L331.81,167.20 L332.62,166.02 L333.42,164.84 L334.22,163.65 L335.03,162.45 L335.83,161.24 L336.64,160.03 L337.44,158.80 L338.24,157.57 L339.05,156.33 L339.85,155.08 L340.66,153.83 L341.46,152.56 L342.26,151.29 L343.07,150.01 L343.87,148.72 L344.68,147.42 L345.48,146.12 L346.28,144.80 L347.09,143.48 L347.89,142.15 L348.70,140.82 L349.50,139.47 L350.30,138.12 L351.11,136.76 L351.91,135.39 L352.72,134.01 L353.52,132.62 L354.32,131.23 L355.13,129.83 L355.93,128.42 L356.74,127.00 L357.54,125.57 L358.34,124.14 L359.15,122.70 L359.95,121.25 L360.76,119.79 L361.56,118.32 L362.36,116.85 L363.17,115.36 L363.97,113.87 L364.78,112.37 L365.58,110.87 L366.38,109.35 L367.19,107.83 L367.99,106.30 L368.80,104.76 L369.60,103.21 L370.40,101.65 L371.21,100.09 L372.01,98.52 L372.82,96.94 L373.62,95.35 L374.42,93.75 L375.23,92.15 L376.03,90.54 L376.84,88.92 L377.64,87.29 L378.44,85.65 L379.25,84.01 L380.05,82.35 L380.86,80.69 L381.66,79.02 L382.46,77.34 L383.27,75.66 L384.07,73.97 L384.88,72.26 L385.68,70.56 L386.48,68.84 L387.29,67.11 L388.09,65.38 L388.90,63.64 L389.70,61.89 L390.50,60.13 L391.31,58.36 L392.11,56.59 L392.92,54.80 L393.72,53.01 L394.52,51.22 L395.33,49.41 L396.13,47.59 L396.94,45.77 L397.74,43.94 L398.54,42.10 L399.35,40.25 L400.15,38.40 L400.96,36.53 L401.76,34.66 L402.56,32.78 L403.37,30.90 L404.17,29.00 L404.98,27.10 L405.78,25.18 L406.58,23.26 L407.39,21.34 L408.19,19.40 L409.00,17.45 L409.80,15.50 L410.60,13.54 L411.41,11.57 L412.21,9.60 L413.02,7.61 L413.82,5.62 L414.62,3.62 L415.43,1.61 L416.23,-0.41 L417.04,-2.43 L417.84,-4.47 L418.64,-6.51 L419.45,-8.56 L420.25,-10.62 L421.06,-12.68 L421.86,-14.76 L422.66,-16.84 L423.47,-18.93 L424.27,-21.03 L425.08,-23.13 L425.88,-25.25 L426.68,-27.37 L427.49,-29.50 L428.29,-31.64 L429.10,-33.79 L429.90,-35.94 L430.70,-38.10 L431.51,-40.28 L432.31,-42.45 L433.12,-44.64 L433.92,-46.84 L434.72,-49.04 L435.53,-51.25 L436.33,-53.47 L437.14,-55.70 L437.94,-57.94 L438.74,-60.18 L439.55,-62.43 L440.35,-64.69 L441.16,-66.96 L441.96,-69.24 L442.76,-71.52 L443.57,-73.81 L444.37,-76.11 L445.18,-78.42 L445.98,-80.74 L446.78,-83.06 L447.59,-85.40 L448.39,-87.74 L449.20,-90.09 L450.00,-92.44\" fill=\"none\" stroke=\"#B43123\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#gap1clip)\"/><text x=\"396.40\" y=\"62.17\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B43123\">y=f&#x27;(x)</text></svg></span><p>Beskriv hur grafen till \\(f\\) måste se ut: ange var \\(f\\) är växande/avtagande och var den har maximi- eller minimipunkt.</p>",
    "s": "<p>Derivatan är positiv utanför nollställena \\(-2\\) och \\(1\\), och negativ mellan dem.</p><p>Därför är \\(f\\) växande för \\(x&lt;-2\\), avtagande för \\(-2&lt;x&lt;1\\) och växande för \\(x&gt;1\\).</p><p>Vid \\(x=-2\\) ändras derivatan från positiv till negativ: <strong>maximipunkt</strong>. Vid \\(x=1\\) ändras den från negativ till positiv: <strong>minimipunkt</strong>.</p><p>Funktionens absoluta höjdläge kan inte bestämmas enbart från derivatan; olika primitiva funktioner är vertikalt förskjutna.</p>",
    "familj": "grafanalys_derivatagraf_1"
  },
  {
    "id": "3.38",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Från en kvadratisk kartong med sidan 30 cm klipps lika stora kvadrater med sidan \\(x\\) bort i varje hörn. Kanterna viks upp till en öppen låda.</p><p>Bestäm \\(x\\) så att lådans volym blir så stor som möjligt.</p>",
    "s": "<p>Lådans höjd blir \\(x\\) och botten får sidan \\(30-2x\\). Volymen är</p><p>\\[V(x)=x(30-2x)^2.\\]</p><p>Derivera:</p><p>\\[V\\,\\!\\prime(x)=(30-2x)(30-6x).\\]</p><p>I det fysiskt relevanta intervallet \\(0&lt;x&lt;15.0\\) ger \\(30-6x=0\\):</p><p>\\[x=30/6=5.\\]</p><p>Ändpunkterna ger volym 0 och teckenstudium visar att denna punkt ger maximum.</p><p><strong>Svar:</strong> \\(\\boxed{x=5\\text{ cm}}\\).</p>",
    "familj": "extrem_lada_1"
  },
  {
    "id": "3.39",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Avgör om funktionerna är deriverbara i den angivna punkten.</p><p>a) \\(f(x)=x^2\\) vid \\(x=0\\)<br>b) \\(g(x)=|x|\\) vid \\(x=0\\)<br>c) \\(h(x)=\\sqrt[3]{x}\\) vid \\(x=0\\)</p>",
    "s": "<p>a) Funktionen är <strong>deriverbar</strong> eftersom grafen är slät och derivatan finns.</p><p>b) Funktionen är <strong>inte deriverbar</strong> eftersom vänster- och högerlutningen är olika.</p><p>c) Funktionen är <strong>inte deriverbar i vanlig mening</strong> eftersom tangenten är vertikal och derivatan blir inte ett ändligt tal.</p>",
    "familj": "deriverbarhet_klassificera"
  },
  {
    "id": "3.40",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Visa genom derivering att \\(F(x)=x^{4} - 3 x^{2} + 2 x\\) är en primitiv funktion till \\(f(x)=4 x^{3} - 6 x + 2\\).</p>",
    "s": "<p>Derivera \\(F\\):</p><p>\\[F\\,\\!\\prime(x)=4 x^{3} - 6 x + 2.\\]</p><p>Detta är exakt \\(f(x)\\). Alltså är \\(F\\) en primitiv funktion till \\(f\\).</p>",
    "familj": "primitiva_verifiera_0"
  },
  {
    "id": "3.41",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För en funktion \\(f\\) gäller att \\(f(2)=3\\) och \\(f(7)=8\\).</p><p>Bestäm</p><p>\\[\\int_{2}^{7} f\\,\\!\\prime(x)\\,dx.\\]</p>",
    "s": "<p>Analysens huvudsats ger</p><p>\\[\\int_{2}^{7} f\\,\\!\\prime(x)\\,dx=f(7)-f(2).\\]</p><p>\\[=8-3=5.\\]</p><p><strong>Svar:</strong> \\(\\boxed{5}\\).</p>",
    "familj": "integral_derivata_skillnad_0"
  },
  {
    "id": "3.42",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Effekten som en maskin använder under en uppstart kan modelleras som \\(P(t)=2+0,3t\\) kW för \\(0\\le t\\le10\\) minuter.</p><p>Bestäm energianvändningen under uppstarten i kWh.</p>",
    "s": "<p>Energi är integral av effekt över tid. Eftersom tiden är i minuter måste resultatet omvandlas till timmar:</p><p>\\[E=\\frac1{60}\\int_0^{10}(2+0,3t)dt.\\]</p><p>\\[=\\frac1{60}\\left[2t+0,15t^2\\right]_0^{10}=\\frac{35}{60}\\approx 0,583\\text{ kWh}.\\]</p><p><strong>Svar:</strong> ungefär \\(\\boxed{0,583\\text{ kWh}}\\).</p>",
    "familj": "intapp_effekt_energi"
  },
  {
    "id": "3.43",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla extrempunkter för \\(f(x)=x^{3} - 6 x^{2} + 9 x\\) och använd andraderivatan för att avgöra deras karaktär.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=3 \\left(x - 3\\right) \\left(x - 1\\right),\\qquad f\\,\\!\\prime\\prime(x)=6 \\left(x - 2\\right).\\]</p><p>Derivatans nollställen är \\(1, 3\\).</p><p>Vid \\(x=1\\): \\(f(x)=4\\) och \\(f\\,\\!\\prime\\prime(x)=-6\\), alltså maximipunkt.</p><p>Vid \\(x=3\\): \\(f(x)=0\\) och \\(f\\,\\!\\prime\\prime(x)=6\\), alltså minimipunkt.</p>",
    "familj": "grafanalys_andraderivata_0"
  },
  {
    "id": "3.44",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>En cylindrisk burk utan lock ska rymma \\(500\\text{ cm}^3\\). Bestäm radie och höjd så att materialåtgången (botten + mantelyta) blir så liten som möjligt.</p>",
    "s": "<p>Låt radien vara \\(r\\) och höjden \\(h\\).</p><p>Volymvillkoret är</p><p>\\[\\pi r^2h=500\\Rightarrow h=\\frac{500}{\\pi r^2}.\\]</p><p>Materialarean är</p><p>\\[A(r)=\\pi r^2+2\\pi r h=\\pi r^2+\\frac{1000}r.\\]</p><p>\\[A\\,\\!\\prime(r)=2\\pi r-\\frac{1000}{r^2}.\\]</p><p>Sätt derivatan lika med noll:</p><p>\\[2\\pi r^3=1000\\Rightarrow r^3=\\frac{500}\\pi.\\]</p><p>\\[r\\approx 5,42\\text{ cm}.\\]</p><p>Då</p><p>\\[h=\\frac{500}{\\pi r^2}\\approx 5,42\\text{ cm}.\\]</p><p>Andraderivatan är positiv för \\(r&gt;0\\), så detta ger ett minimum.</p><p><strong>Svar:</strong> \\(r\\approx 5,42\\) cm och \\(h\\approx 5,42\\) cm.</p>",
    "familj": "extrem_cylinder_oppen"
  },
  {
    "id": "3.45",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Kan en funktion vara deriverbar i en punkt där den inte är kontinuerlig? Motivera.</p>",
    "s": "<p>Nej. Deriverbarhet i en punkt innebär kontinuitet där. Om derivatan finns kan man skriva</p><p>\\[f(a+h)-f(a)=h\\cdot\\frac{f(a+h)-f(a)}h.\\]</p><p>När \\(h\\to0\\) går den första faktorn \\(h\\) mot 0 och differenskvoten mot det ändliga värdet \\(f\\,\\!\\prime(a)\\). Produkten går därför mot 0, vilket innebär \\(f(a+h)\\to f(a)\\). Alltså är funktionen kontinuerlig.</p>",
    "familj": "deriverbarhet_impl_continuitet"
  },
  {
    "id": "3.46",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Visa genom derivering att \\(F(x)=2 e^{x} + 5\\) är en primitiv funktion till \\(f(x)=2 e^{x}\\).</p>",
    "s": "<p>Derivera \\(F\\):</p><p>\\[F\\,\\!\\prime(x)=2 e^{x}.\\]</p><p>Detta är exakt \\(f(x)\\). Alltså är \\(F\\) en primitiv funktion till \\(f\\).</p>",
    "familj": "primitiva_verifiera_1"
  },
  {
    "id": "3.47",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>För en funktion \\(f\\) gäller att \\(f(-1)=3\\) och \\(f(4)=0\\).</p><p>Bestäm</p><p>\\[\\int_{-1}^{4} f\\,\\!\\prime(x)\\,dx.\\]</p>",
    "s": "<p>Analysens huvudsats ger</p><p>\\[\\int_{-1}^{4} f\\,\\!\\prime(x)\\,dx=f(4)-f(-1).\\]</p><p>\\[=0-3=-3.\\]</p><p><strong>Svar:</strong> \\(\\boxed{-3}\\).</p>",
    "familj": "integral_derivata_skillnad_1"
  },
  {
    "id": "3.48",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Två vägar i en förenklad karta beskrivs av \\(y=4-x^2\\) och \\(y=x\\). Bestäm arean mellan kurvorna mellan deras skärningspunkter.</p>",
    "s": "<p>Skärningspunkternas x-värden fås av</p><p>\\[4-x^2=x\\Rightarrow x^2+x-4=0,\\]</p><p>så</p><p>\\[x_1=\\frac{-1-\\sqrt{17}}2,\\qquad x_2=\\frac{-1+\\sqrt{17}}2.\\]</p><p>Mellan dessa punkter ligger parabeln \\(y=4-x^2\\) ovanför linjen \\(y=x\\). Arean är därför</p><p>\\[A=\\int_{x_1}^{x_2}(4-x^2-x)\\,dx=\\frac{17\\sqrt{17}}6.\\]</p><p><strong>Svar:</strong> \\(\\boxed{\\frac{17\\sqrt{17}}6}\\) areaenheter.</p>",
    "familj": "intapp_area_mellan_kurvor"
  },
  {
    "id": "3.49",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla extrempunkter för \\(f(x)=x^{4} - 8 x^{2}\\) och använd andraderivatan för att avgöra deras karaktär.</p>",
    "s": "<p>\\[f\\,\\!\\prime(x)=4 x \\left(x - 2\\right) \\left(x + 2\\right),\\qquad f\\,\\!\\prime\\prime(x)=4 \\left(3 x^{2} - 4\\right).\\]</p><p>Derivatans nollställen är \\(-2, 0, 2\\).</p><p>Vid \\(x=-2\\): \\(f(x)=-16\\) och \\(f\\,\\!\\prime\\prime(x)=32\\), alltså minimipunkt.</p><p>Vid \\(x=0\\): \\(f(x)=0\\) och \\(f\\,\\!\\prime\\prime(x)=-16\\), alltså maximipunkt.</p><p>Vid \\(x=2\\): \\(f(x)=-16\\) och \\(f\\,\\!\\prime\\prime(x)=32\\), alltså minimipunkt.</p>",
    "familj": "grafanalys_andraderivata_1"
  },
  {
    "id": "3.50",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>På parabeln \\(y=x^2\\) ligger en punkt \\(P=(x,x^2)\\). Bestäm den punkt på parabeln som ligger närmast punkten \\(Q=(0,3)\\).</p>",
    "s": "<p>Minimera kvadraten av avståndet; det ger samma punkt men enklare derivata:</p><p>\\[D(x)=x^2+(x^2-3)^2.\\]</p><p>\\[D\\,\\!\\prime(x)=2x+4x(x^2-3)=2x(2x^2-5).\\]</p><p>Derivatan är noll för \\(x=0\\) eller \\(x=\\pm\\sqrt{5/2}\\).</p><p>Vid \\(x=0\\) är \\(D=9\\). Vid \\(x=\\pm\\sqrt{5/2}\\) är \\(x^2=5/2\\) och</p><p>\\[D=\\frac52+\\left(-\\frac12\\right)^2=\\frac{11}{4}.\\]</p><p>Alltså är de närmaste punkterna</p><p>\\[\\boxed{\\left(\\pm\\sqrt{\\frac52},\\frac52\\right)}.\\]</p>",
    "familj": "extrem_narmaste_punkt"
  },
  {
    "id": "3.51",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Undersök om funktionen \\(f(x)=|x - 3|\\) är deriverbar vid \\(x=3\\).</p>",
    "s": "<p>Uttrycket inuti absolutbeloppet är noll vid \\(x=3\\) och byter tecken där. På de två sidorna beskrivs funktionen därför av två uttryck med motsatta derivator. Eftersom \\((1)\\neq0\\) blir vänster- och högerderivatan olika.</p><p><strong>Slutsats:</strong> funktionen är inte deriverbar vid \\(x=3\\).</p>",
    "familj": "deriverbarhet_abs_poly_0"
  },
  {
    "id": "3.52",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Visa genom derivering att \\(F(x)=\\frac{x^{3}}{3} + \\log{\\left(x \\right)}\\) är en primitiv funktion till \\(f(x)=x^{2} + \\frac{1}{x}\\).</p>",
    "s": "<p>Derivera \\(F\\):</p><p>\\[F\\,\\!\\prime(x)=x^{2} + \\frac{1}{x}.\\]</p><p>Detta är exakt \\(f(x)\\). Alltså är \\(F\\) en primitiv funktion till \\(f\\).</p>",
    "familj": "primitiva_verifiera_2"
  },
  {
    "id": "3.53",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Beräkna både integralen och den geometriska arean mellan grafen till \\(f(x)=x-1\\) och x-axeln på intervallet \\([0,3]\\).</p>",
    "s": "<p>Funktionen byter tecken vid \\(x=1\\).</p><p><strong>Integralen:</strong></p><p>\\[\\int_0^3(x-1)dx=\\left[\\frac{x^2}{2}-x\\right]_0^3=\\frac32.\\]</p><p><strong>Geometrisk area:</strong> Dela vid nollstället.</p><p>\\[A=-\\int_0^1(x-1)dx+\\int_1^3(x-1)dx=\\frac12+2=\\frac52.\\]</p><p><strong>Svar:</strong> integralen är \\(3/2\\), den geometriska arean är \\(5/2\\).</p>",
    "familj": "integral_signerad_area"
  },
  {
    "id": "3.54",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En funktion \\(r(t)\\) mäts i personer/minut och beskriver hur snabbt besökare går in på en arena.</p><p>Förklara vad uttrycket \\(\\int_{15}^{45}r(t)dt\\) betyder och vilken enhet resultatet har.</p>",
    "s": "<p>Integralen summerar inflödet från minut 15 till minut 45. Den beskriver alltså <strong>det totala antalet personer som går in under detta tidsintervall</strong>.</p><p>Enheten blir</p><p>\\[\\frac{personer}{minut}\\cdot minut=personer.\\]</p>",
    "familj": "intapp_tolka_enhet"
  },
  {
    "id": "3.55",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Vid \\(x=4\\) gäller för en funktion att \\(f(4)=7\\), \\(f\\,\\!\\prime(4)=0\\) och \\(f\\,\\!\\prime\\prime(4)=-3\\).</p><p>Vilka slutsatser kan du dra om grafen nära \\(x=4\\)?</p>",
    "s": "<p>Eftersom \\(f\\,\\!\\prime(4)=0\\) är tangenten horisontell. Eftersom \\(f\\,\\!\\prime\\prime(4)=-3&lt;0\\) är kurvan konkav nedåt där, vilket visar att punkten är en lokal maximipunkt.</p><p>Eftersom \\(f(4)=7\\) är punktens koordinater \\((4,7)\\).</p><p><strong>Slutsats:</strong> grafen har en lokal maximipunkt i \\((4,7)\\).</p>",
    "familj": "grafanalys_data_punkt"
  },
  {
    "id": "3.56",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Undersök hur antalet extrempunkter för funktionen</p><p>\\[f(x)=x^3-3ax\\]</p><p>beror på parametern \\(a\\).</p>",
    "s": "<p>Derivatan är</p><p>\\[f\\,\\!\\prime(x)=3x^2-3a=3(x^2-a).\\]</p><p>Stationära punkter kräver \\(x^2=a\\).</p><p>Om \\(a&gt;0\\) finns två stationära punkter \\(x=\\pm\\sqrt a\\). Derivatan byter tecken i båda, så det finns två extrempunkter.</p><p>Om \\(a=0\\) finns bara \\(x=0\\), men derivatan \\(3x^2\\) är positiv på båda sidor. Punkten är en terrasspunkt, inte en extrempunkt.</p><p>Om \\(a&lt;0\\) saknar \\(x^2=a\\) reella lösningar, så inga extrempunkter finns.</p>",
    "familj": "extrem_parameter_antal"
  },
  {
    "id": "3.57",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Undersök om funktionen \\(f(x)=|x^{2} - 4|\\) är deriverbar vid \\(x=2\\).</p>",
    "s": "<p>Uttrycket inuti absolutbeloppet är noll vid \\(x=2\\) och byter tecken där. På de två sidorna beskrivs funktionen därför av två uttryck med motsatta derivator. Eftersom \\((4)\\neq0\\) blir vänster- och högerderivatan olika.</p><p><strong>Slutsats:</strong> funktionen är inte deriverbar vid \\(x=2\\).</p>",
    "familj": "deriverbarhet_abs_poly_1"
  },
  {
    "id": "3.58",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två funktioner \\(F\\) och \\(G\\) är båda primitiva funktioner till samma funktion \\(f\\). Visa att skillnaden \\(F(x)-G(x)\\) måste vara konstant.</p>",
    "s": "<p>Eftersom båda är primitiva funktioner gäller</p><p>\\[F\\,\\!\\prime(x)=f(x)\\quad\\text{och}\\quad G\\,\\!\\prime(x)=f(x).\\]</p><p>Derivera skillnaden:</p><p>\\[(F-G)\\,\\!\\prime(x)=F\\,\\!\\prime(x)-G\\,\\!\\prime(x)=f(x)-f(x)=0.\\]</p><p>En funktion som har derivatan 0 överallt på ett intervall är konstant där. Alltså är \\(F(x)-G(x)=C\\).</p>",
    "familj": "primitiva_skillnad_konstant"
  },
  {
    "id": "3.59",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Använd ett digitalt verktyg för att bestämma</p><p>\\[\\int_0^2 e^{-x^2}\\,dx\\]</p><p>med tre decimaler. Förklara varför en vanlig primitiv funktion inom kursens metoder inte används här.</p>",
    "s": "<p>Ett digitalt integralverktyg ger</p><p>\\[\\int_0^2 e^{-x^2}\\,dx\\approx 0,882.\\]</p><p>Funktionen \\(e^{-x^2}\\) har ingen primitiv funktion som kan uttryckas med de elementära funktioner och integrationsregler som ingår på denna nivå. Därför är numerisk/digital integration lämplig.</p><p><strong>Svar:</strong> \\(\\boxed{0,882}\\).</p>",
    "familj": "integral_digital_gauss"
  },
  {
    "id": "3.60",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 3 sekunder av \\(v(t)=4+1t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^3(4+1t)\\,dt=\\frac{33}{2}\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(\\frac{33}{2}\\) m.</p>",
    "familj": "topup_intapp_0"
  },
  {
    "id": "3.61",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En funktion har derivatan \\(f\\,\\!\\prime(x)=(x-1)^2(x+2)\\).</p><p>Bestäm samtliga stationära punkters x-koordinater och avgör vilka som är extrempunkter och vilka som är terrasspunkter.</p>",
    "s": "<p>Stationära punkter fås av \\(f\\,\\!\\prime(x)=0\\): \\(x=-2\\) och \\(x=1\\).</p><p>Faktorn \\((x-1)^2\\) är alltid icke-negativ och byter inte tecken när x passerar 1. Därför byter derivatan inte tecken vid \\(x=1\\): punkten är en <strong>terrasspunkt</strong>.</p><p>Vid \\(x=-2\\) byter faktorn \\(x+2\\) tecken från negativ till positiv medan kvadratfaktorn är positiv. Därför går derivatan från negativ till positiv: <strong>minimipunkt</strong>.</p>",
    "familj": "grafanalys_terrass_faktorer"
  },
  {
    "id": "3.62",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två cyklister rör sig längs samma sträcka. Deras positioner beskrivs av</p><p>\\[s_1(t)=30 x,\\qquad s_2(t)=x^{3} - 6 x^{2} + 36 x.\\]</p><p>Bestäm när avståndet mellan dem är störst på intervallet \\(0\\le t\\le 3\\).</p>",
    "s": "<p>Bilda skillnaden \\(h(t)=s_1(t)-s_2(t)=- x^{3} + 6 x^{2} - 6 x\\). Avståndet är \\(|h(t)|\\).</p><p>Undersök kritiska punkter från \\(h\\,\\!\\prime(t)=- 3 x^{2} + 12 x - 6=0\\) samt intervallets ändpunkter.</p><p>Relevanta kandidater är \\(0, 3, 2 - \\sqrt{2}\\).</p><p>Största avståndet fås vid \\(t=3\\), då avståndet är ungefär \\(9\\) längdenheter.</p>",
    "familj": "extrem_avstand_0"
  },
  {
    "id": "3.63",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Funktionen \\(f(x)=x|x|\\) har ett uttryck med absolutbelopp. Är den deriverbar vid \\(x=0\\)? Motivera.</p>",
    "s": "<p>Skriv funktionen styckvis:</p><p>\\[f(x)=\\begin{cases}-x^2,&x&lt;0\\\\x^2,&x\\ge0.\\end{cases}\\]</p><p>Vänsterderivatan vid 0 fås från \\(-2x\\) och är 0. Högerderivatan fås från \\(2x\\) och är också 0.</p><p>Funktionen är dessutom kontinuerlig vid 0. Alltså är den <strong>deriverbar</strong> där och \\(f\\,\\!\\prime(0)=0\\).</p>",
    "familj": "deriverbarhet_xabsx"
  },
  {
    "id": "3.64",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En primitiv funktion \\(F\\) till \\(f(x)=2x-4\\) har en tangent som är horisontell vid \\(x=2\\). Ger denna information något nytt villkor som bestämmer integrationskonstanten? Förklara.</p>",
    "s": "<p>Alla primitiva funktioner är \\(F(x)=x^2-4x+C\\). Derivatan är alltid \\(F\\,\\!\\prime(x)=2x-4\\), oberoende av \\(C\\).</p><p>Vid \\(x=2\\) är \\(F\\,\\!\\prime(2)=0\\) för <em>alla</em> värden på \\(C\\). Villkoret om horisontell tangent bestämmer därför inte integrationskonstanten.</p>",
    "familj": "primitiva_tangent_konstant"
  },
  {
    "id": "3.65",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a&gt;0\\) så att arean under grafen till \\(f(x)=x^2\\) från \\(x=0\\) till \\(x=a\\) är 9 areaenheter.</p>",
    "s": "<p>Arean ges av</p><p>\\[\\int_0^a x^2dx=\\left[\\frac{x^3}{3}\\right]_0^a=\\frac{a^3}{3}.\\]</p><p>Sätt arean lika med 9:</p><p>\\[\\frac{a^3}{3}=9\\Rightarrow a^3=27\\Rightarrow a=3.\\]</p><p><strong>Svar:</strong> \\(\\boxed{a=3}\\).</p>",
    "familj": "integral_parameter_grans"
  },
  {
    "id": "3.66",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 4 sekunder av \\(v(t)=5+2t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^4(5+2t)\\,dt=36\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(36\\) m.</p>",
    "familj": "topup_intapp_1"
  },
  {
    "id": "3.67",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>För ett polynom \\(f\\) gäller att \\(f\\,\\!\\prime(x)&gt;0\\) för alla \\(x&lt;1\\) och \\(x&gt;3\\), medan \\(f\\,\\!\\prime(x)&lt;0\\) för \\(1&lt;x&lt;3\\). Dessutom är \\(f(1)=5\\) och \\(f(3)=-2\\).</p><p>Bestäm funktionens lokala extrempunkter och förklara varför uppgifterna inte räcker för att bestämma funktionens globala största och minsta värde på hela \\(\\mathbb R\\).</p>",
    "s": "<p>Vid \\(x=1\\) går derivatan från positiv till negativ, alltså finns en lokal maximipunkt \\((1,5)\\).</p><p>Vid \\(x=3\\) går derivatan från negativ till positiv, alltså finns en lokal minimipunkt \\((3,-2)\\).</p><p>För globala extremvärden på hela reella axeln behöver vi veta hur funktionen beter sig när \\(x\\to\\pm\\infty\\). Teckeninformationen säger att funktionen växer på båda ytterintervallen men inte om den är begränsad uppåt eller nedåt. Därför kan globala extremvärden inte avgöras.</p>",
    "familj": "grafanalys_lokal_global"
  },
  {
    "id": "3.68",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två drönare rör sig längs samma sträcka. Deras positioner beskrivs av</p><p>\\[s_1(t)=20 x + 5,\\qquad s_2(t)=- x^{2} + 24 x.\\]</p><p>Bestäm när avståndet mellan dem är störst på intervallet \\(0\\le t\\le 8\\).</p>",
    "s": "<p>Bilda skillnaden \\(h(t)=s_1(t)-s_2(t)=x^{2} - 4 x + 5\\). Avståndet är \\(|h(t)|\\).</p><p>Undersök kritiska punkter från \\(h\\,\\!\\prime(t)=2 x - 4=0\\) samt intervallets ändpunkter.</p><p>Relevanta kandidater är \\(0, 8, 2\\).</p><p>Största avståndet fås vid \\(t=8\\), då avståndet är ungefär \\(37\\) längdenheter.</p>",
    "familj": "extrem_avstand_1"
  },
  {
    "id": "3.69",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm alla värden på parametern \\(a\\) för vilka funktionen</p><p>\\[f(x)=\\begin{cases}x^2,&x\\le1\\\\ax+2-a,&x&gt;1\\end{cases}\\]</p><p>är deriverbar vid \\(x=1\\).</p>",
    "s": "<p>För deriverbarhet måste funktionen först vara kontinuerlig. Vänsterdelen ger \\(f(1)=1\\). Högergränsvärdet vid 1 är</p><p>\\[a\\cdot1+2-a=2.\\]</p><p>Detta är 2 oavsett \\(a\\), och kan därför aldrig bli lika med 1.</p><p><strong>Svar:</strong> Det finns \\(\\boxed{inget\\ reellt\\ a}\\) som gör funktionen deriverbar vid \\(x=1\\).</p>",
    "familj": "deriverbarhet_parameter_ingen"
  },
  {
    "id": "3.70",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Bestäm alla primitiva funktioner \\(F\\) till \\(f(x)=x^2-4x-5\\) vars graf tangerar linjen \\(y=3\\).</p>",
    "s": "<p>Om \\(F\\) tangerar den horisontella linjen \\(y=3\\), måste tangentlutningen vara 0. Eftersom \\(F\\,\\!\\prime=f\\) krävs</p><p>\\[x^2-4x-5=0\\Rightarrow x=-1\\text{ eller }x=5.\\]</p><p>Alla primitiva funktioner är</p><p>\\[F(x)=\\frac{x^3}{3}-2x^2-5x+C.\\]</p><p>För \\(x=-1\\) kräver \\(F(-1)=3\\), vilket ger \\(C=-\\frac{11}{3}\\).</p><p>För \\(x=5\\) kräver \\(F(5)=3\\), vilket ger \\(C=\\frac{109}{3}\\).</p><p><strong>Svar:</strong> två funktioner, med respektive konstant \\(-11/3\\) och \\(109/3\\).</p>",
    "familj": "primitiva_tangerar_linje"
  },
  {
    "id": "3.71",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Grafen till \\(f(x)=a-x^2\\), där \\(a&gt;0\\), innesluter tillsammans med x-axeln ett begränsat område. Bestäm arean uttryckt i \\(a\\).</p>",
    "s": "<p>Nollställena fås av \\(a-x^2=0\\), alltså \\(x=\\pm\\sqrt a\\).</p><p>Arean är</p><p>\\[A=\\int_{-\\sqrt a}^{\\sqrt a}(a-x^2)dx.\\]</p><p>På grund av symmetri:</p><p>\\[A=2\\int_0^{\\sqrt a}(a-x^2)dx=2\\left[ax-\\frac{x^3}{3}\\right]_0^{\\sqrt a}.\\]</p><p>\\[A=2\\left(a\\sqrt a-\\frac{a\\sqrt a}{3}\\right)=\\frac43a^{3/2}.\\]</p><p><strong>Svar:</strong> \\(\\boxed{A=\\frac43a^{3/2}}\\).</p>",
    "familj": "integral_area_parameter"
  },
  {
    "id": "3.72",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 5 sekunder av \\(v(t)=6+3t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^5(6+3t)\\,dt=\\frac{135}{2}\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(\\frac{135}{2}\\) m.</p>",
    "familj": "topup_intapp_2"
  },
  {
    "id": "3.73",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller \\[f'(x)=x^{2} + x - 2.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera: \\(f'(x)=(x--2)(x-1)\\). Nollställena är \\(x=-2\\) och \\(x=1\\).</p><p>Produkten är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-2\\) och \\(x&gt;1\\), samt avtagande för \\(-2&lt;x&lt;1\\).</p>",
    "familj": "topup_grafanalys_0"
  },
  {
    "id": "3.74",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 24 cm. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\). Den andra blir \\(12-x\\). Då</p><p>\\[A(x)=x(12-x).\\]</p><p>\\[A'(x)=12-2x=0\\Rightarrow x=6.\\]</p><p>Eftersom \\(A''(x)=-2&lt;0\\) är det maximum. Båda sidorna blir \\(6\\) cm.</p>",
    "familj": "topup_extrem_0"
  },
  {
    "id": "3.75",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Funktionen \\(f\\) är kontinuerlig och består av två räta linjestycken som möts i punkten \\((2,3)\\). Vänster linjestycke har lutningen 4 och höger linjestycke lutningen \\(k\\).</p><p>Vilket värde måste \\(k\\) ha för att \\(f\\) ska vara deriverbar vid \\(x=2\\)?</p>",
    "s": "<p>För deriverbarhet måste vänster- och högerderivatan vara lika. På räta linjestycken är derivatan lika med linjens lutning.</p><p>Vänsterderivatan är 4, alltså måste även högerderivatan vara 4.</p><p><strong>Svar:</strong> \\(\\boxed{k=4}\\).</p>",
    "familj": "deriverbarhet_linjestycken"
  },
  {
    "id": "3.76",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=x^{3} - 2 x + 3.\\]</p>",
    "s": "<p>Integrera term för term:</p><p>\\[F(x)=\\frac{x^{4}}{4} - x^{2} + 3 x+C.\\]</p><p>Konstanten \\(C\\) kan anta vilket reellt värde som helst.</p>",
    "familj": "topup_prim_0"
  },
  {
    "id": "3.77",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{0}^{1} x\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(\\frac{x^{2}}{2}\\). Därför</p><p>\\[\\int_{0}^{1}x\\,dx=[\\frac{x^{2}}{2}]_{0}^{1}=\\frac{1}{2}.\\]</p>",
    "familj": "topup_integral_0"
  },
  {
    "id": "3.78",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 6 sekunder av \\(v(t)=7+1t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^6(7+1t)\\,dt=60\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(60\\) m.</p>",
    "familj": "topup_intapp_3"
  },
  {
    "id": "3.79",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller \\[f'(x)=x^{2} - x - 2.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera: \\(f'(x)=(x--1)(x-2)\\). Nollställena är \\(x=-1\\) och \\(x=2\\).</p><p>Produkten är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-1\\) och \\(x&gt;2\\), samt avtagande för \\(-1&lt;x&lt;2\\).</p>",
    "familj": "topup_grafanalys_1"
  },
  {
    "id": "3.80",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 28 cm. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\). Den andra blir \\(14-x\\). Då</p><p>\\[A(x)=x(14-x).\\]</p><p>\\[A'(x)=14-2x=0\\Rightarrow x=7.\\]</p><p>Eftersom \\(A''(x)=-2&lt;0\\) är det maximum. Båda sidorna blir \\(7\\) cm.</p>",
    "familj": "topup_extrem_1"
  },
  {
    "id": "3.81",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;1\\\\1x^2+1,&x\\ge1\\end{cases}\\]</p><p>är deriverbar vid \\(x=1\\).</p>",
    "s": "<p>Deriverbarhet kräver samma derivata från båda håll. Högerdelens derivata är \\(2x\\), så vid 1 måste \\(a=2\\).</p><p>Kontinuitet kräver \\(a+b=2\\), alltså \\(b=0\\).</p><p><strong>Svar:</strong> \\(a=2, b=0\\).</p>",
    "familj": "topup_derivbar_0"
  },
  {
    "id": "3.82",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=2 x^{3} - 2 x + 3.\\]</p>",
    "s": "<p>Integrera term för term:</p><p>\\[F(x)=\\frac{x^{4}}{2} - x^{2} + 3 x+C.\\]</p><p>Konstanten \\(C\\) kan anta vilket reellt värde som helst.</p>",
    "familj": "topup_prim_1"
  },
  {
    "id": "3.83",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{0}^{2} x^{2}\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(\\frac{x^{3}}{3}\\). Därför</p><p>\\[\\int_{0}^{2}x^{2}\\,dx=[\\frac{x^{3}}{3}]_{0}^{2}=\\frac{8}{3}.\\]</p>",
    "familj": "topup_integral_1"
  },
  {
    "id": "3.84",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 3 sekunder av \\(v(t)=4+2t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^3(4+2t)\\,dt=21\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(21\\) m.</p>",
    "familj": "topup_intapp_4"
  },
  {
    "id": "3.85",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller \\[f'(x)=x^{2} - x - 6.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera: \\(f'(x)=(x--2)(x-3)\\). Nollställena är \\(x=-2\\) och \\(x=3\\).</p><p>Produkten är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-2\\) och \\(x&gt;3\\), samt avtagande för \\(-2&lt;x&lt;3\\).</p>",
    "familj": "topup_grafanalys_2"
  },
  {
    "id": "3.86",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 32 cm. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\). Den andra blir \\(16-x\\). Då</p><p>\\[A(x)=x(16-x).\\]</p><p>\\[A'(x)=16-2x=0\\Rightarrow x=8.\\]</p><p>Eftersom \\(A''(x)=-2&lt;0\\) är det maximum. Båda sidorna blir \\(8\\) cm.</p>",
    "familj": "topup_extrem_2"
  },
  {
    "id": "3.87",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;1\\\\2x^2+2,&x\\ge1\\end{cases}\\]</p><p>är deriverbar vid \\(x=1\\).</p>",
    "s": "<p>Deriverbarhet kräver samma derivata från båda håll. Högerdelens derivata är \\(4x\\), så vid 1 måste \\(a=4\\).</p><p>Kontinuitet kräver \\(a+b=4\\), alltså \\(b=0\\).</p><p><strong>Svar:</strong> \\(a=4, b=0\\).</p>",
    "familj": "topup_derivbar_1"
  },
  {
    "id": "3.88",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=3 x^{3} - 2 x + 3.\\]</p>",
    "s": "<p>Integrera term för term:</p><p>\\[F(x)=\\frac{3 x^{4}}{4} - x^{2} + 3 x+C.\\]</p><p>Konstanten \\(C\\) kan anta vilket reellt värde som helst.</p>",
    "familj": "topup_prim_2"
  },
  {
    "id": "3.89",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{0}^{3} x^{3}\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(\\frac{x^{4}}{4}\\). Därför</p><p>\\[\\int_{0}^{3}x^{3}\\,dx=[\\frac{x^{4}}{4}]_{0}^{3}=\\frac{81}{4}.\\]</p>",
    "familj": "topup_integral_2"
  },
  {
    "id": "3.90",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 4 sekunder av \\(v(t)=5+3t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^4(5+3t)\\,dt=44\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(44\\) m.</p>",
    "familj": "topup_intapp_5"
  },
  {
    "id": "3.91",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller \\[f'(x)=x^{2} - 1.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera: \\(f'(x)=(x--1)(x-1)\\). Nollställena är \\(x=-1\\) och \\(x=1\\).</p><p>Produkten är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-1\\) och \\(x&gt;1\\), samt avtagande för \\(-1&lt;x&lt;1\\).</p>",
    "familj": "topup_grafanalys_3"
  },
  {
    "id": "3.92",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 36 cm. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\). Den andra blir \\(18-x\\). Då</p><p>\\[A(x)=x(18-x).\\]</p><p>\\[A'(x)=18-2x=0\\Rightarrow x=9.\\]</p><p>Eftersom \\(A''(x)=-2&lt;0\\) är det maximum. Båda sidorna blir \\(9\\) cm.</p>",
    "familj": "topup_extrem_3"
  },
  {
    "id": "3.93",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;1\\\\3x^2+3,&x\\ge1\\end{cases}\\]</p><p>är deriverbar vid \\(x=1\\).</p>",
    "s": "<p>Deriverbarhet kräver samma derivata från båda håll. Högerdelens derivata är \\(6x\\), så vid 1 måste \\(a=6\\).</p><p>Kontinuitet kräver \\(a+b=6\\), alltså \\(b=0\\).</p><p><strong>Svar:</strong> \\(a=6, b=0\\).</p>",
    "familj": "topup_derivbar_2"
  },
  {
    "id": "3.94",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=4 x^{3} - 2 x + 3.\\]</p>",
    "s": "<p>Integrera term för term:</p><p>\\[F(x)=x^{4} - x^{2} + 3 x+C.\\]</p><p>Konstanten \\(C\\) kan anta vilket reellt värde som helst.</p>",
    "familj": "topup_prim_3"
  },
  {
    "id": "3.95",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{0}^{4} x^{4}\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(\\frac{x^{5}}{5}\\). Därför</p><p>\\[\\int_{0}^{4}x^{4}\\,dx=[\\frac{x^{5}}{5}]_{0}^{4}=\\frac{1024}{5}.\\]</p>",
    "familj": "topup_integral_3"
  },
  {
    "id": "3.96",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 5 sekunder av \\(v(t)=6+1t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^5(6+1t)\\,dt=\\frac{85}{2}\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(\\frac{85}{2}\\) m.</p>",
    "familj": "topup_intapp_6"
  },
  {
    "id": "3.97",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller \\[f'(x)=x^{2} - 4.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera: \\(f'(x)=(x--2)(x-2)\\). Nollställena är \\(x=-2\\) och \\(x=2\\).</p><p>Produkten är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-2\\) och \\(x&gt;2\\), samt avtagande för \\(-2&lt;x&lt;2\\).</p>",
    "familj": "topup_grafanalys_4"
  },
  {
    "id": "3.98",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangel har omkretsen 40 cm. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\). Den andra blir \\(2-x\\). Då</p><p>\\[A(x)=x(2-x).\\]</p><p>\\[A'(x)=2-2x=0\\Rightarrow x=10.\\]</p><p>Eftersom \\(A''(x)=-2&lt;0\\) är det maximum. Båda sidorna blir \\(10\\) cm.</p>",
    "familj": "topup_extrem_4"
  },
  {
    "id": "3.99",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm konstanterna \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;2\\\\x^{2} + 1,&x\\ge 2\\end{cases}\\]</p><p>är deriverbar vid \\(x=2\\).</p>",
    "s": "<p>För deriverbarhet måste både funktionsvärde och derivata passa ihop i skarvpunkten.</p><p><strong>1. Samma lutning:</strong> Högerdelens derivata är \\(2 x\\). Vid \\(x=2\\) är lutningen \\(4\\), så \\(a=4\\).</p><p><strong>2. Kontinuitet:</strong> Högerdelens värde är \\(5\\). Vänsterdelen ger \\(ac+b=8+b\\). Därför \\(b=-3\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=4,\\ b=-3}\\).</p>",
    "familj": "topup_derivbar_3"
  },
  {
    "id": "3.100",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=5 x^{3} - 3 x + 2.\\]</p>",
    "s": "<p>Integrera term för term och kom ihåg integrationskonstanten:</p><p>\\[F(x)=\\frac{5 x^{4}}{4} - \\frac{3 x^{2}}{2} + 2 x+C.\\]</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=\\frac{5 x^{4}}{4} - \\frac{3 x^{2}}{2} + 2 x+C}\\).</p>",
    "familj": "topup_prim_4"
  },
  {
    "id": "3.101",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{0}^{2}(x + 1)\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(\\frac{x^{2}}{2} + x\\). Analysens huvudsats ger</p><p>\\[\\int_{0}^{2}(x + 1)\\,dx=\\left[\\frac{x^{2}}{2} + x\\right]_{0}^{2}=4.\\]</p><p><strong>Svar:</strong> \\(\\boxed{4}\\).</p>",
    "familj": "topup_integral_4"
  },
  {
    "id": "3.102",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 6 sekunder av \\(v(t)=7+2t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^6(7+2t)\\,dt=78\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(78\\) m.</p>",
    "familj": "topup_intapp_7"
  },
  {
    "id": "3.103",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller \\[f'(x)=x^{2} - 2 x - 3.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera: \\(f'(x)=(x--1)(x-3)\\). Nollställena är \\(x=-1\\) och \\(x=3\\).</p><p>Produkten är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-1\\) och \\(x&gt;3\\), samt avtagande för \\(-1&lt;x&lt;3\\).</p>",
    "familj": "topup_grafanalys_5"
  },
  {
    "id": "3.104",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangulär hundrastgård ska omges av totalt 44 m stängsel. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\) meter. Då måste den andra sidan vara \\(22-x\\), eftersom \\(2x+2y=44\\).</p><p>Arean är</p><p>\\[A(x)=x(22-x)=22x-x^2.\\]</p><p>Derivera:</p><p>\\[A\\,\\!\\prime(x)=22-2x.\\]</p><p>\\[22-2x=0\\Rightarrow x=11.\\]</p><p>Andraderivatan är \\(A\\,\\!\\prime\\!\\prime(x)=-2&lt;0\\), så punkten ger ett maximum. Den andra sidan blir också 11 m.</p><p><strong>Svar:</strong> \\(\\boxed{11\\text{ m}\\times 11\\text{ m}}\\).</p>",
    "familj": "topup_extrem_5"
  },
  {
    "id": "3.105",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm konstanterna \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;0\\\\2 x^{2} + 3,&x\\ge 0\\end{cases}\\]</p><p>är deriverbar vid \\(x=0\\).</p>",
    "s": "<p>För deriverbarhet måste både funktionsvärde och derivata passa ihop i skarvpunkten.</p><p><strong>1. Samma lutning:</strong> Högerdelens derivata är \\(4 x\\). Vid \\(x=0\\) är lutningen \\(0\\), så \\(a=0\\).</p><p><strong>2. Kontinuitet:</strong> Högerdelens värde är \\(3\\). Vänsterdelen ger \\(ac+b=0+b\\). Därför \\(b=3\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=0,\\ b=3}\\).</p>",
    "familj": "topup_derivbar_4"
  },
  {
    "id": "3.106",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=6 x^{3} + x^{2} - 4.\\]</p>",
    "s": "<p>Integrera term för term och kom ihåg integrationskonstanten:</p><p>\\[F(x)=\\frac{3 x^{4}}{2} + \\frac{x^{3}}{3} - 4 x+C.\\]</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=\\frac{3 x^{4}}{2} + \\frac{x^{3}}{3} - 4 x+C}\\).</p>",
    "familj": "topup_prim_5"
  },
  {
    "id": "3.107",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{1}^{3}(x^{2})\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(\\frac{x^{3}}{3}\\). Analysens huvudsats ger</p><p>\\[\\int_{1}^{3}(x^{2})\\,dx=\\left[\\frac{x^{3}}{3}\\right]_{1}^{3}=\\frac{26}{3}.\\]</p><p><strong>Svar:</strong> \\(\\boxed{\\frac{26}{3}}\\).</p>",
    "familj": "topup_integral_5"
  },
  {
    "id": "3.108",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 3 sekunder av \\(v(t)=4+3t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^3(4+3t)\\,dt=\\frac{51}{2}\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(\\frac{51}{2}\\) m.</p>",
    "familj": "topup_intapp_8"
  },
  {
    "id": "3.109",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller</p><p>\\[f\\,\\!\\prime(x)=x^{2} + x - 6.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera derivatan:</p><p>\\[f\\,\\!\\prime(x)=\\left(x - 2\\right) \\left(x + 3\\right).\\]</p><p>Nollställena är \\(x=-3\\) och \\(x=2\\).</p><p>Derivatan är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-3\\) och \\(x&gt;2\\), samt avtagande för \\(-3&lt;x&lt;2\\).</p>",
    "familj": "topup_grafanalys_6"
  },
  {
    "id": "3.110",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangulär hundrastgård ska omges av totalt 48 m stängsel. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\) meter. Då måste den andra sidan vara \\(24-x\\), eftersom \\(2x+2y=48\\).</p><p>Arean är</p><p>\\[A(x)=x(24-x)=24x-x^2.\\]</p><p>Derivera:</p><p>\\[A\\,\\!\\prime(x)=24-2x.\\]</p><p>\\[24-2x=0\\Rightarrow x=12.\\]</p><p>Andraderivatan är \\(A\\,\\!\\prime\\!\\prime(x)=-2&lt;0\\), så punkten ger ett maximum. Den andra sidan blir också 12 m.</p><p><strong>Svar:</strong> \\(\\boxed{12\\text{ m}\\times 12\\text{ m}}\\).</p>",
    "familj": "topup_extrem_6"
  },
  {
    "id": "3.111",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm konstanterna \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;-1\\\\3 x^{2} - 2,&x\\ge -1\\end{cases}\\]</p><p>är deriverbar vid \\(x=-1\\).</p>",
    "s": "<p>För deriverbarhet måste både funktionsvärde och derivata passa ihop i skarvpunkten.</p><p><strong>1. Samma lutning:</strong> Högerdelens derivata är \\(6 x\\). Vid \\(x=-1\\) är lutningen \\(-6\\), så \\(a=-6\\).</p><p><strong>2. Kontinuitet:</strong> Högerdelens värde är \\(1\\). Vänsterdelen ger \\(ac+b=6+b\\). Därför \\(b=-5\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=-6,\\ b=-5}\\).</p>",
    "familj": "topup_derivbar_5"
  },
  {
    "id": "3.112",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=7 x^{4} - 2 x + 1.\\]</p>",
    "s": "<p>Integrera term för term och kom ihåg integrationskonstanten:</p><p>\\[F(x)=\\frac{7 x^{5}}{5} - x^{2} + x+C.\\]</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=\\frac{7 x^{5}}{5} - x^{2} + x+C}\\).</p>",
    "familj": "topup_prim_6"
  },
  {
    "id": "3.113",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{-1}^{2}(2 x + 3)\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(x^{2} + 3 x\\). Analysens huvudsats ger</p><p>\\[\\int_{-1}^{2}(2 x + 3)\\,dx=\\left[x^{2} + 3 x\\right]_{-1}^{2}=12.\\]</p><p><strong>Svar:</strong> \\(\\boxed{12}\\).</p>",
    "familj": "topup_integral_6"
  },
  {
    "id": "3.114",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 4 sekunder av \\(v(t)=5+1t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^4(5+1t)\\,dt=28\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(28\\) m.</p>",
    "familj": "topup_intapp_9"
  },
  {
    "id": "3.115",
    "kap": 3,
    "omr": "grafanalys_derivata",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>För en funktion gäller</p><p>\\[f\\,\\!\\prime(x)=x^{2} + 2 x - 8.\\]</p><p>a) Bestäm derivatans nollställen.<br>b) Ange intervall där \\(f\\) är växande respektive avtagande.</p>",
    "s": "<p>Faktorisera derivatan:</p><p>\\[f\\,\\!\\prime(x)=\\left(x - 2\\right) \\left(x + 4\\right).\\]</p><p>Nollställena är \\(x=-4\\) och \\(x=2\\).</p><p>Derivatan är positiv utanför nollställena och negativ mellan dem. Alltså är \\(f\\) växande för \\(x&lt;-4\\) och \\(x&gt;2\\), samt avtagande för \\(-4&lt;x&lt;2\\).</p>",
    "familj": "topup_grafanalys_7"
  },
  {
    "id": "3.116",
    "kap": 3,
    "omr": "extremvardesproblem",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En rektangulär hundrastgård ska omges av totalt 52 m stängsel. Bestäm med hjälp av derivata de sidlängder som ger största möjliga area.</p>",
    "s": "<p>Låt ena sidan vara \\(x\\) meter. Då måste den andra sidan vara \\(26-x\\), eftersom \\(2x+2y=52\\).</p><p>Arean är</p><p>\\[A(x)=x(26-x)=26x-x^2.\\]</p><p>Derivera:</p><p>\\[A\\,\\!\\prime(x)=26-2x.\\]</p><p>\\[26-2x=0\\Rightarrow x=13.\\]</p><p>Andraderivatan är \\(A\\,\\!\\prime\\!\\prime(x)=-2&lt;0\\), så punkten ger ett maximum. Den andra sidan blir också 13 m.</p><p><strong>Svar:</strong> \\(\\boxed{13\\text{ m}\\times 13\\text{ m}}\\).</p>",
    "familj": "topup_extrem_7"
  },
  {
    "id": "3.117",
    "kap": 3,
    "omr": "deriverbarhet",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Bestäm konstanterna \\(a\\) och \\(b\\) så att funktionen</p><p>\\[f(x)=\\begin{cases}ax+b,&x&lt;3\\\\4 x^{2} + 1,&x\\ge 3\\end{cases}\\]</p><p>är deriverbar vid \\(x=3\\).</p>",
    "s": "<p>För deriverbarhet måste både funktionsvärde och derivata passa ihop i skarvpunkten.</p><p><strong>1. Samma lutning:</strong> Högerdelens derivata är \\(8 x\\). Vid \\(x=3\\) är lutningen \\(24\\), så \\(a=24\\).</p><p><strong>2. Kontinuitet:</strong> Högerdelens värde är \\(37\\). Vänsterdelen ger \\(ac+b=72+b\\). Därför \\(b=-35\\).</p><p><strong>Svar:</strong> \\(\\boxed{a=24,\\ b=-35}\\).</p>",
    "familj": "topup_derivbar_6"
  },
  {
    "id": "3.118",
    "kap": 3,
    "omr": "primitiva_funktioner",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Bestäm alla primitiva funktioner till</p><p>\\[f(x)=8 x^{2} + 3 x - 5.\\]</p>",
    "s": "<p>Integrera term för term och kom ihåg integrationskonstanten:</p><p>\\[F(x)=\\frac{8 x^{3}}{3} + \\frac{3 x^{2}}{2} - 5 x+C.\\]</p><p><strong>Svar:</strong> \\(\\boxed{F(x)=\\frac{8 x^{3}}{3} + \\frac{3 x^{2}}{2} - 5 x+C}\\).</p>",
    "familj": "topup_prim_7"
  },
  {
    "id": "3.119",
    "kap": 3,
    "omr": "integraler",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna integralen</p><p>\\[\\int_{0}^{1}(3 x^{2} + 2 x + 1)\\,dx.\\]</p>",
    "s": "<p>En primitiv funktion är \\(x^{3} + x^{2} + x\\). Analysens huvudsats ger</p><p>\\[\\int_{0}^{1}(3 x^{2} + 2 x + 1)\\,dx=\\left[x^{3} + x^{2} + x\\right]_{0}^{1}=3.\\]</p><p><strong>Svar:</strong> \\(\\boxed{3}\\).</p>",
    "familj": "topup_integral_7"
  },
  {
    "id": "3.120",
    "kap": 3,
    "omr": "integraltillampningar",
    "kurs": [
      "1b",
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En cyklists hastighet ges under 5 sekunder av \\(v(t)=6+2t\\) m/s. Hur långt färdas cyklisten under tidsintervallet?</p>",
    "s": "<p>Sträckan är integralen av hastigheten:</p><p>\\[s=\\int_0^5(6+2t)\\,dt=55\\text{ m}.\\]</p><p><strong>Svar:</strong> \\(55\\) m.</p>",
    "familj": "topup_intapp_10"
  },
  {
    "id": "4.01",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "4/0/0",
    "t": "<p>Bestäm exakt. Endast svar krävs.</p><p>a) \\(\\sin30^\\circ\\)<br>b) \\(\\cos60^\\circ\\)<br>c) \\(\\sin45^\\circ\\)<br>d) \\(\\cos135^\\circ\\).</p>",
    "s": "<p><strong>Svar:</strong></p><p>a) \\(1/2\\)</p><p>b) \\(1/2\\)</p><p>c) \\(\\sqrt2/2\\)</p><p>d) \\(-\\sqrt2/2\\)</p>",
    "familj": "trig_exakta_multi"
  },
  {
    "id": "4.02",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>I triangeln är två sidor 7 cm och 9 cm och den mellanliggande vinkeln 48°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"235.0\" y=\"268.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">6.8?</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">7</text><text x=\"140.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">9</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">48°</text></svg></span><p>Bestäm den tredje sidan.</p>",
    "s": "<p>Använd cosinussatsen:</p><p>\\[c^2=7^2+9^2-2\\cdot 7\\cdot 9\\cos 48^\\circ.\\]</p><p>\\[c\\approx 6,76\\text{ cm}.\\]</p><p><strong>Svar:</strong> \\(\\boxed{6,76\\text{ cm}}\\).</p>",
    "familj": "tri_cos_side_0"
  },
  {
    "id": "4.03",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två observationspunkter A och B ligger 120 m från varandra. Från A ses en mast i riktningen som bildar 48° med AB och från B bildar siktriktningen 67° med BA.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Mättriangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"235.0\" y=\"268.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">120 m</text><text x=\"95\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">48°</text><text x=\"352\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">67°</text></svg></span><p>Bestäm avståndet från vardera observationspunkten till objektet.</p>",
    "s": "<p>Den tredje vinkeln är \\(C=180^\\circ-48^\\circ-67^\\circ=65^\\circ\\).</p><p>Sinussatsen ger</p><p>\\[a=120\\frac{\\sin 48^\\circ}{\\sin 65^\\circ}\\approx 98,4\\text{ m}\\]</p><p>och</p><p>\\[b=120\\frac{\\sin 67^\\circ}{\\sin 65^\\circ}\\approx 121,9\\text{ m}.\\]</p>",
    "familj": "trigapp_survey_0"
  },
  {
    "id": "4.04",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Det blå området visar det tillåtna området för variablerna \\(x\\) och \\(y\\).</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"440\" height=\"330\" viewBox=\"0 0 440 330\" role=\"img\" aria-label=\"Tillåtet område för linjär optimering\"><defs><marker id=\"lo0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"438\" height=\"328\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"100.0\" y1=\"25\" x2=\"100.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"145.0\" y1=\"25\" x2=\"145.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"190.0\" y1=\"25\" x2=\"190.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"235.0\" y1=\"25\" x2=\"235.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"280.0\" y1=\"25\" x2=\"280.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"325.0\" y1=\"25\" x2=\"325.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"415.0\" y1=\"25\" x2=\"415.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"285.0\" x2=\"415\" y2=\"285.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"252.5\" x2=\"415\" y2=\"252.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"220.0\" x2=\"415\" y2=\"220.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"187.5\" x2=\"415\" y2=\"187.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"155.0\" x2=\"415\" y2=\"155.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"122.5\" x2=\"415\" y2=\"122.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"90.0\" x2=\"415\" y2=\"90.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"57.5\" x2=\"415\" y2=\"57.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"25.0\" x2=\"415\" y2=\"25.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"285\" x2=\"425\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#lo0arr)\"/><line x1=\"55\" y1=\"285\" x2=\"55\" y2=\"15\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#lo0arr)\"/><polygon points=\"55.0,285.0 55.0,90.0 235.0,155.0 325.0,285.0\" fill=\"#D9E7F8\" fill-opacity=\"0.75\" stroke=\"#2A5D9E\" stroke-width=\"2.2\"/><circle cx=\"55.0\" cy=\"285.0\" r=\"4\" fill=\"#B43123\"/><text x=\"61.0\" y=\"278.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(0,0)</text><circle cx=\"55.0\" cy=\"90.0\" r=\"4\" fill=\"#B43123\"/><text x=\"61.0\" y=\"83.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(0,6)</text><circle cx=\"235.0\" cy=\"155.0\" r=\"4\" fill=\"#B43123\"/><text x=\"241.0\" y=\"148.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(4,4)</text><circle cx=\"325.0\" cy=\"285.0\" r=\"4\" fill=\"#B43123\"/><text x=\"331.0\" y=\"278.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(6,0)</text></svg></span><p>Maximera målfunktionen \\(Z=30x+20y\\).</p>",
    "s": "<p>En linjär målfunktion får sitt största värde i någon hörnpunkt. Beräkna därför:</p><p>\\(Z(0,0)=0\\)</p><p>\\(Z(0,6)=120\\)</p><p>\\(Z(4,4)=200\\)</p><p>\\(Z(6,0)=180\\)</p><p>Största värdet är \\(\\boxed{200}\\) i punkten \\(\\boxed{(4,4)}\\).</p>",
    "familj": "linopt_horn_0"
  },
  {
    "id": "4.05",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna den geometriska summan</p><p>\\[3+6+12+\\cdots\\]</p><p>med totalt 6 termer och kvoten \\(k=2\\).</p>",
    "s": "<p>För en geometrisk summa med första termen \\(a_1=3\\), kvot \\(k=2\\) och 6 termer gäller</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_N=189\\).</p><p><strong>Svar:</strong> \\(\\boxed{189}\\).</p>",
    "familj": "geosum_rutin_0"
  },
  {
    "id": "4.06",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar en punkt \\(P\\) på enhetscirkeln.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"330\" viewBox=\"0 0 400 330\" role=\"img\" aria-label=\"Enhetscirkel med vinkeln 120 grader\"><defs><marker id=\"u0arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"398\" height=\"328\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><circle cx=\"195\" cy=\"165\" r=\"115\" fill=\"#F8FAFC\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"35\" y1=\"165\" x2=\"365\" y2=\"165\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u0arr)\"/><line x1=\"195\" y1=\"300\" x2=\"195\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u0arr)\"/><line x1=\"195\" y1=\"165\" x2=\"137.50\" y2=\"65.41\" stroke=\"#B43123\" stroke-width=\"2.6\"/><path d=\"M 237,165 A 42,42 0 0 0 174.00,128.63\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/><circle cx=\"137.50\" cy=\"65.41\" r=\"4.5\" fill=\"#2A5D9E\"/><text x=\"145.50\" y=\"58.41\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\">P</text><text x=\"225.00\" y=\"113.04\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" fill=\"#2E7D52\">120°</text><text x=\"350\" y=\"157\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">x</text><text x=\"205\" y=\"32\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">y</text></svg></span><p>Bestäm exakt a) \\(\\cos 120^\\circ\\), b) \\(\\sin 120^\\circ\\).</p>",
    "s": "<p>På enhetscirkeln är punktens x-koordinat cosinusvärdet och y-koordinaten sinusvärdet.</p><p><strong>Svar:</strong> a) \\(\\boxed{- \\frac{1}{2}}\\), b) \\(\\boxed{\\frac{\\sqrt{3}}{2}}\\).</p>",
    "familj": "trig_enhetscirkel_120"
  },
  {
    "id": "4.07",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>I triangeln är två sidor 5.5 cm och 8.2 cm och den mellanliggande vinkeln 63°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"235.0\" y=\"268.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">7.5?</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">5.5</text><text x=\"140.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">8.2</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">63°</text></svg></span><p>Bestäm den tredje sidan.</p>",
    "s": "<p>Använd cosinussatsen:</p><p>\\[c^2=5.5^2+8.2^2-2\\cdot 5.5\\cdot 8.2\\cos 63^\\circ.\\]</p><p>\\[c\\approx 7,52\\text{ cm}.\\]</p><p><strong>Svar:</strong> \\(\\boxed{7,52\\text{ cm}}\\).</p>",
    "familj": "tri_cos_side_1"
  },
  {
    "id": "4.08",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Två bryggor ligger 85 m från varandra. En boj ses under vinklarna 55° respektive 72° mot linjen mellan bryggorna.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Mättriangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"235.0\" y=\"268.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">85 m</text><text x=\"95\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">55°</text><text x=\"352\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">72°</text></svg></span><p>Bestäm avståndet från vardera observationspunkten till objektet.</p>",
    "s": "<p>Den tredje vinkeln är \\(C=180^\\circ-55^\\circ-72^\\circ=53^\\circ\\).</p><p>Sinussatsen ger</p><p>\\[a=85\\frac{\\sin 55^\\circ}{\\sin 53^\\circ}\\approx 87,2\\text{ m}\\]</p><p>och</p><p>\\[b=85\\frac{\\sin 72^\\circ}{\\sin 53^\\circ}\\approx 101,2\\text{ m}.\\]</p>",
    "familj": "trigapp_survey_1"
  },
  {
    "id": "4.09",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Det blå området visar det tillåtna området för variablerna \\(x\\) och \\(y\\).</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"440\" height=\"330\" viewBox=\"0 0 440 330\" role=\"img\" aria-label=\"Tillåtet område för linjär optimering\"><defs><marker id=\"lo1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"438\" height=\"328\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"100.0\" y1=\"25\" x2=\"100.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"145.0\" y1=\"25\" x2=\"145.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"190.0\" y1=\"25\" x2=\"190.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"235.0\" y1=\"25\" x2=\"235.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"280.0\" y1=\"25\" x2=\"280.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"325.0\" y1=\"25\" x2=\"325.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"370.0\" y1=\"25\" x2=\"370.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"415.0\" y1=\"25\" x2=\"415.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"285.0\" x2=\"415\" y2=\"285.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"252.5\" x2=\"415\" y2=\"252.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"220.0\" x2=\"415\" y2=\"220.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"187.5\" x2=\"415\" y2=\"187.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"155.0\" x2=\"415\" y2=\"155.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"122.5\" x2=\"415\" y2=\"122.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"90.0\" x2=\"415\" y2=\"90.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"57.5\" x2=\"415\" y2=\"57.5\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"25.0\" x2=\"415\" y2=\"25.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"285\" x2=\"425\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#lo1arr)\"/><line x1=\"55\" y1=\"285\" x2=\"55\" y2=\"15\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#lo1arr)\"/><polygon points=\"55.0,285.0 55.0,122.5 190.0,122.5 370.0,252.5 370.0,285.0\" fill=\"#D9E7F8\" fill-opacity=\"0.75\" stroke=\"#2A5D9E\" stroke-width=\"2.2\"/><circle cx=\"55.0\" cy=\"285.0\" r=\"4\" fill=\"#B43123\"/><text x=\"61.0\" y=\"278.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(0,0)</text><circle cx=\"55.0\" cy=\"122.5\" r=\"4\" fill=\"#B43123\"/><text x=\"61.0\" y=\"115.5\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(0,5)</text><circle cx=\"190.0\" cy=\"122.5\" r=\"4\" fill=\"#B43123\"/><text x=\"196.0\" y=\"115.5\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(3,5)</text><circle cx=\"370.0\" cy=\"252.5\" r=\"4\" fill=\"#B43123\"/><text x=\"376.0\" y=\"245.5\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(7,1)</text><circle cx=\"370.0\" cy=\"285.0\" r=\"4\" fill=\"#B43123\"/><text x=\"376.0\" y=\"278.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(7,0)</text></svg></span><p>Maximera målfunktionen \\(Z=25x+40y\\).</p>",
    "s": "<p>En linjär målfunktion får sitt största värde i någon hörnpunkt. Beräkna därför:</p><p>\\(Z(0,0)=0\\)</p><p>\\(Z(0,5)=200\\)</p><p>\\(Z(3,5)=275\\)</p><p>\\(Z(7,1)=215\\)</p><p>\\(Z(7,0)=175\\)</p><p>Största värdet är \\(\\boxed{275}\\) i punkten \\(\\boxed{(3,5)}\\).</p>",
    "familj": "linopt_horn_1"
  },
  {
    "id": "4.10",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna den geometriska summan</p><p>\\[5+2,5+1,25+\\cdots\\]</p><p>med totalt 5 termer och kvoten \\(k=0,5\\).</p>",
    "s": "<p>För en geometrisk summa med första termen \\(a_1=5\\), kvot \\(k=0,5\\) och 5 termer gäller</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_N=9,688\\).</p><p><strong>Svar:</strong> \\(\\boxed{9,688}\\).</p>",
    "familj": "geosum_rutin_1"
  },
  {
    "id": "4.11",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Figuren visar en punkt \\(P\\) på enhetscirkeln.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"330\" viewBox=\"0 0 400 330\" role=\"img\" aria-label=\"Enhetscirkel med vinkeln 210 grader\"><defs><marker id=\"u1arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"398\" height=\"328\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><circle cx=\"195\" cy=\"165\" r=\"115\" fill=\"#F8FAFC\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"35\" y1=\"165\" x2=\"365\" y2=\"165\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u1arr)\"/><line x1=\"195\" y1=\"300\" x2=\"195\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u1arr)\"/><line x1=\"195\" y1=\"165\" x2=\"95.41\" y2=\"222.50\" stroke=\"#B43123\" stroke-width=\"2.6\"/><path d=\"M 237,165 A 42,42 0 1 0 158.63,186.00\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/><circle cx=\"95.41\" cy=\"222.50\" r=\"4.5\" fill=\"#2A5D9E\"/><text x=\"103.41\" y=\"215.50\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\">P</text><text x=\"179.47\" y=\"107.04\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" fill=\"#2E7D52\">210°</text><text x=\"350\" y=\"157\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">x</text><text x=\"205\" y=\"32\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">y</text></svg></span><p>Bestäm exakt a) \\(\\cos 210^\\circ\\), b) \\(\\sin 210^\\circ\\).</p>",
    "s": "<p>På enhetscirkeln är punktens x-koordinat cosinusvärdet och y-koordinaten sinusvärdet.</p><p><strong>Svar:</strong> a) \\(\\boxed{- \\frac{\\sqrt{3}}{2}}\\), b) \\(\\boxed{- \\frac{1}{2}}\\).</p>",
    "familj": "trig_enhetscirkel_210"
  },
  {
    "id": "4.12",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>I triangeln är två sidor 12 cm och 15 cm och den mellanliggande vinkeln 35°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"235.0\" y=\"268.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">8.6?</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">12</text><text x=\"140.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">15</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">35°</text></svg></span><p>Bestäm den tredje sidan.</p>",
    "s": "<p>Använd cosinussatsen:</p><p>\\[c^2=12^2+15^2-2\\cdot 12\\cdot 15\\cos 35^\\circ.\\]</p><p>\\[c\\approx 8,61\\text{ cm}.\\]</p><p><strong>Svar:</strong> \\(\\boxed{8,61\\text{ cm}}\\).</p>",
    "familj": "tri_cos_side_2"
  },
  {
    "id": "4.13",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En triangelformad del av ett tak har två kantlängder 6 m och 8 m. Vinkeln mellan kanterna är 110°.</p><p>Bestäm takdelens area.</p>",
    "s": "<p>Areasatsen ger</p><p>\\[A=\\frac{6\\cdot 8\\sin 110^\\circ}2\\approx 22,55\\text{ m}^2.\\]</p>",
    "familj": "trigapp_area_0"
  },
  {
    "id": "4.14",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ett bageri gör två produkter, A och B. Varje A kräver 2 kg mjöl och 1 arbetstimme. Varje B kräver 1 kg mjöl och 2 arbetstimmar. Det finns högst 40 kg mjöl och 50 arbetstimmar.</p><p>Vinsten är 60 kr per A och 80 kr per B. Bestäm hur många av varje produkt som bör tillverkas för maximal vinst enligt en kontinuerlig linjär modell.</p>",
    "s": "<p>Låt \\(x\\) vara antal A och \\(y\\) antal B.</p><p>Villkoren är</p><p>\\[2x+y\\le40,\\qquad x+2y\\le50,\\qquad x,y\\ge0.\\]</p><p>Målfunktionen är \\(V=60x+80y\\).</p><p>Hörnpunkterna är \\((0,0),(0,25),(10,20),(20,0)\\). Värden:</p><p>0, 2000, 2200, 1200 kr.</p><p><strong>Svar:</strong> modellen ger maximum vid \\(\\boxed{x=10,y=20}\\), med vinst \\(\\boxed{2200\\text{ kr}}\\).</p>",
    "familj": "linopt_bageri"
  },
  {
    "id": "4.15",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna den geometriska summan</p><p>\\[120+124,8+129,792+\\cdots\\]</p><p>med totalt 8 termer och kvoten \\(k=1,04\\).</p>",
    "s": "<p>För en geometrisk summa med första termen \\(a_1=120\\), kvot \\(k=1,04\\) och 8 termer gäller</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_N=1105,707\\).</p><p><strong>Svar:</strong> \\(\\boxed{1105,707}\\).</p>",
    "familj": "geosum_rutin_2"
  },
  {
    "id": "4.16",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Figuren visar en punkt \\(P\\) på enhetscirkeln.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"330\" viewBox=\"0 0 400 330\" role=\"img\" aria-label=\"Enhetscirkel med vinkeln 300 grader\"><defs><marker id=\"u2arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"398\" height=\"328\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><circle cx=\"195\" cy=\"165\" r=\"115\" fill=\"#F8FAFC\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"35\" y1=\"165\" x2=\"365\" y2=\"165\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u2arr)\"/><line x1=\"195\" y1=\"300\" x2=\"195\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u2arr)\"/><line x1=\"195\" y1=\"165\" x2=\"252.50\" y2=\"264.59\" stroke=\"#B43123\" stroke-width=\"2.6\"/><path d=\"M 237,165 A 42,42 0 1 0 216.00,201.37\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/><circle cx=\"252.50\" cy=\"264.59\" r=\"4.5\" fill=\"#2A5D9E\"/><text x=\"260.50\" y=\"257.59\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\">P</text><text x=\"143.04\" y=\"135.00\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" fill=\"#2E7D52\">300°</text><text x=\"350\" y=\"157\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">x</text><text x=\"205\" y=\"32\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">y</text></svg></span><p>Bestäm exakt a) \\(\\cos 300^\\circ\\), b) \\(\\sin 300^\\circ\\).</p>",
    "s": "<p>På enhetscirkeln är punktens x-koordinat cosinusvärdet och y-koordinaten sinusvärdet.</p><p><strong>Svar:</strong> a) \\(\\boxed{\\frac{1}{2}}\\), b) \\(\\boxed{- \\frac{\\sqrt{3}}{2}}\\).</p>",
    "familj": "trig_enhetscirkel_300"
  },
  {
    "id": "4.17",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Två sidor i en triangel är 8 cm och 11 cm. Vinkeln mellan dem är 42°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">8</text><text x=\"140.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">11</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">42°</text></svg></span><p>Bestäm triangelns area.</p>",
    "s": "<p>Areasatsen:</p><p>\\[A=\\frac{ab\\sin C}2=\\frac{8\\cdot 11\\cdot\\sin 42^\\circ}2\\approx 29,44.\\]</p><p><strong>Svar:</strong> \\(\\boxed{29,44\\text{ cm}^2}\\).</p>",
    "familj": "tri_area_0"
  },
  {
    "id": "4.18",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En triangelformad del av ett tak har två kantlängder 9 m och 12 m. Vinkeln mellan kanterna är 37°.</p><p>Bestäm takdelens area.</p>",
    "s": "<p>Areasatsen ger</p><p>\\[A=\\frac{9\\cdot 12\\sin 37^\\circ}2\\approx 32,5\\text{ m}^2.\\]</p>",
    "familj": "trigapp_area_1"
  },
  {
    "id": "4.19",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ett företag planerar två produkter \\(x\\) och \\(y\\). Begränsningarna är</p><p>\\[3x+1y\\le 60,\\qquad 2x+4y\\le 96,\\qquad x,y\\ge0.\\]</p><p>Intäkten är \\(I=500x+700y\\). Bestäm den optimala lösningen.</p>",
    "s": "<p>Undersök hörnpunkterna till det tillåtna området. De relevanta hörnen är ungefär (0,0), (0,24), (14,4,16,8), (20,0).</p><p>I punkten \\((0,0)\\) är \\(I\\approx 0\\).</p><p>I punkten \\((0,24)\\) är \\(I\\approx 16800\\).</p><p>I punkten \\((14,4,16,8)\\) är \\(I\\approx 18960\\).</p><p>I punkten \\((20,0)\\) är \\(I\\approx 10000\\).</p><p><strong>Maximum:</strong> \\(I\\approx 18960\\) vid \\((x,y)\\approx(14,4,16,8)\\).</p>",
    "familj": "linopt_constraints_0"
  },
  {
    "id": "4.20",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Beräkna den geometriska summan</p><p>\\[2+-1+0,5+\\cdots\\]</p><p>med totalt 6 termer och kvoten \\(k=-0,5\\).</p>",
    "s": "<p>För en geometrisk summa med första termen \\(a_1=2\\), kvot \\(k=-0,5\\) och 6 termer gäller</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_N=1,312\\).</p><p><strong>Svar:</strong> \\(\\boxed{1,312}\\).</p>",
    "familj": "geosum_rutin_3"
  },
  {
    "id": "4.21",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Figuren visar en punkt \\(P\\) på enhetscirkeln.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"330\" viewBox=\"0 0 400 330\" role=\"img\" aria-label=\"Enhetscirkel med vinkeln 135 grader\"><defs><marker id=\"u3arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"398\" height=\"328\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><circle cx=\"195\" cy=\"165\" r=\"115\" fill=\"#F8FAFC\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"35\" y1=\"165\" x2=\"365\" y2=\"165\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u3arr)\"/><line x1=\"195\" y1=\"300\" x2=\"195\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u3arr)\"/><line x1=\"195\" y1=\"165\" x2=\"113.68\" y2=\"83.68\" stroke=\"#B43123\" stroke-width=\"2.6\"/><path d=\"M 237,165 A 42,42 0 0 0 165.30,135.30\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/><circle cx=\"113.68\" cy=\"83.68\" r=\"4.5\" fill=\"#2A5D9E\"/><text x=\"121.68\" y=\"76.68\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\">P</text><text x=\"217.96\" y=\"109.57\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" fill=\"#2E7D52\">135°</text><text x=\"350\" y=\"157\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">x</text><text x=\"205\" y=\"32\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">y</text></svg></span><p>Bestäm exakt a) \\(\\cos 135^\\circ\\), b) \\(\\sin 135^\\circ\\).</p>",
    "s": "<p>På enhetscirkeln är punktens x-koordinat cosinusvärdet och y-koordinaten sinusvärdet.</p><p><strong>Svar:</strong> a) \\(\\boxed{- \\frac{\\sqrt{2}}{2}}\\), b) \\(\\boxed{\\frac{\\sqrt{2}}{2}}\\).</p>",
    "familj": "trig_enhetscirkel_135"
  },
  {
    "id": "4.22",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Två sidor i en triangel är 6.5 cm och 9.2 cm. Vinkeln mellan dem är 75°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">6.5</text><text x=\"140.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">9.2</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">75°</text></svg></span><p>Bestäm triangelns area.</p>",
    "s": "<p>Areasatsen:</p><p>\\[A=\\frac{ab\\sin C}2=\\frac{6.5\\cdot 9.2\\cdot\\sin 75^\\circ}2\\approx 28,88.\\]</p><p><strong>Svar:</strong> \\(\\boxed{28,88\\text{ cm}^2}\\).</p>",
    "familj": "tri_area_1"
  },
  {
    "id": "4.23",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ett fartyg seglar 18 km österut och därefter 25 km i en riktning som ligger 60° norr om öst. Hur långt är fartyget då från startpunkten?</p>",
    "s": "<p>De två förflyttningarna bildar vinkeln 60°. Resultantens längd kan bestämmas med cosinussatsen (med plus eftersom trianglens inre vinkel motsvarande blir 120°):</p><p>\\[d^2=18^2+25^2+2\\cdot18\\cdot25\\cos60^\\circ.\\]</p><p>\\[d\\approx 37,4\\text{ km}.\\]</p>",
    "familj": "trigapp_navigation"
  },
  {
    "id": "4.24",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Ett företag planerar två produkter \\(x\\) och \\(y\\). Begränsningarna är</p><p>\\[2x+1y\\le 40,\\qquad 1x+3y\\le 45,\\qquad x,y\\ge0.\\]</p><p>Intäkten är \\(I=120x+150y\\). Bestäm den optimala lösningen.</p>",
    "s": "<p>Undersök hörnpunkterna till det tillåtna området. De relevanta hörnen är ungefär (0,0), (0,15), (15,10), (20,0).</p><p>I punkten \\((0,0)\\) är \\(I\\approx 0\\).</p><p>I punkten \\((0,15)\\) är \\(I\\approx 2250\\).</p><p>I punkten \\((15,10)\\) är \\(I\\approx 3300\\).</p><p>I punkten \\((20,0)\\) är \\(I\\approx 2400\\).</p><p><strong>Maximum:</strong> \\(I\\approx 3300\\) vid \\((x,y)\\approx(15,10)\\).</p>",
    "familj": "linopt_constraints_1"
  },
  {
    "id": "4.25",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>En geometrisk talföljd börjar \\(4,12,36,108,\\ldots\\). Beräkna summan av de första 7 termerna.</p>",
    "s": "<p>Kvoten är \\(k=3\\). Använd summan</p><p>\\[S_7=4\\frac{1-3^7}{1-3}=4372.\\]</p><p><strong>Svar:</strong> \\(\\boxed{4372}\\).</p>",
    "familj": "geosum_sequence"
  },
  {
    "id": "4.26",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Figuren visar en punkt \\(P\\) på enhetscirkeln.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"330\" viewBox=\"0 0 400 330\" role=\"img\" aria-label=\"Enhetscirkel med vinkeln 240 grader\"><defs><marker id=\"u4arr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"398\" height=\"328\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><circle cx=\"195\" cy=\"165\" r=\"115\" fill=\"#F8FAFC\" stroke=\"#2B2527\" stroke-width=\"2\"/><line x1=\"35\" y1=\"165\" x2=\"365\" y2=\"165\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u4arr)\"/><line x1=\"195\" y1=\"300\" x2=\"195\" y2=\"28\" stroke=\"#2B2527\" stroke-width=\"1.7\" marker-end=\"url(#u4arr)\"/><line x1=\"195\" y1=\"165\" x2=\"137.50\" y2=\"264.59\" stroke=\"#B43123\" stroke-width=\"2.6\"/><path d=\"M 237,165 A 42,42 0 1 0 174.00,201.37\" fill=\"none\" stroke=\"#2E7D52\" stroke-width=\"2\"/><circle cx=\"137.50\" cy=\"264.59\" r=\"4.5\" fill=\"#2A5D9E\"/><text x=\"145.50\" y=\"257.59\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" font-weight=\"600\">P</text><text x=\"165.00\" y=\"113.04\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\" fill=\"#2E7D52\">240°</text><text x=\"350\" y=\"157\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">x</text><text x=\"205\" y=\"32\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11\">y</text></svg></span><p>Bestäm exakt a) \\(\\cos 240^\\circ\\), b) \\(\\sin 240^\\circ\\).</p>",
    "s": "<p>På enhetscirkeln är punktens x-koordinat cosinusvärdet och y-koordinaten sinusvärdet.</p><p><strong>Svar:</strong> a) \\(\\boxed{- \\frac{1}{2}}\\), b) \\(\\boxed{- \\frac{\\sqrt{3}}{2}}\\).</p>",
    "familj": "trig_enhetscirkel_240"
  },
  {
    "id": "4.27",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Två sidor i en triangel är 13 cm och 7 cm. Vinkeln mellan dem är 28°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">13</text><text x=\"140.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">7</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">28°</text></svg></span><p>Bestäm triangelns area.</p>",
    "s": "<p>Areasatsen:</p><p>\\[A=\\frac{ab\\sin C}2=\\frac{13\\cdot 7\\cdot\\sin 28^\\circ}2\\approx 21,36.\\]</p><p><strong>Svar:</strong> \\(\\boxed{21,36\\text{ cm}^2}\\).</p>",
    "familj": "tri_area_2"
  },
  {
    "id": "4.28",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Härled areasatsen \\(A=\\frac12ab\\sin C\\) från formeln \\(A=\\frac12\\cdot bas\\cdot höjd\\).</p>",
    "s": "<p>Välj sidan \\(a\\) som bas. Om sidan \\(b\\) bildar vinkeln \\(C\\) med basen är höjden komponenten av \\(b\\) vinkelrätt mot basen:</p><p>\\[h=b\\sin C.\\]</p><p>Sätt in i triangelns areaformel:</p><p>\\[A=\\frac12ah=\\frac12a(b\\sin C)=\\frac12ab\\sin C.\\]</p>",
    "familj": "trigapp_area_proof"
  },
  {
    "id": "4.29",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Figuren visar det tillåtna området.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"440\" height=\"330\" viewBox=\"0 0 440 330\" role=\"img\" aria-label=\"Tillåtet område för linjär optimering\"><defs><marker id=\"loGarr\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 z\" fill=\"#2B2527\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"438\" height=\"328\" fill=\"#fff\" stroke=\"#E4E3E6\"/><line x1=\"55.0\" y1=\"25\" x2=\"55.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"115.0\" y1=\"25\" x2=\"115.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"175.0\" y1=\"25\" x2=\"175.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"235.0\" y1=\"25\" x2=\"235.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"295.0\" y1=\"25\" x2=\"295.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"355.0\" y1=\"25\" x2=\"355.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"415.0\" y1=\"25\" x2=\"415.0\" y2=\"285\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"285.0\" x2=\"415\" y2=\"285.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"241.7\" x2=\"415\" y2=\"241.7\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"198.3\" x2=\"415\" y2=\"198.3\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"155.0\" x2=\"415\" y2=\"155.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"111.7\" x2=\"415\" y2=\"111.7\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"68.3\" x2=\"415\" y2=\"68.3\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"25.0\" x2=\"415\" y2=\"25.0\" stroke=\"#E9E8EB\"/><line x1=\"55\" y1=\"285\" x2=\"425\" y2=\"285\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#loGarr)\"/><line x1=\"55\" y1=\"285\" x2=\"55\" y2=\"15\" stroke=\"#2B2527\" stroke-width=\"1.8\" marker-end=\"url(#loGarr)\"/><polygon points=\"55.0,285.0 55.0,111.7 175.0,111.7 355.0,241.7 355.0,285.0\" fill=\"#D9E7F8\" fill-opacity=\"0.75\" stroke=\"#2A5D9E\" stroke-width=\"2.2\"/><circle cx=\"55.0\" cy=\"285.0\" r=\"4\" fill=\"#B43123\"/><text x=\"61.0\" y=\"278.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(0,0)</text><circle cx=\"55.0\" cy=\"111.7\" r=\"4\" fill=\"#B43123\"/><text x=\"61.0\" y=\"104.7\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(0,4)</text><circle cx=\"175.0\" cy=\"111.7\" r=\"4\" fill=\"#B43123\"/><text x=\"181.0\" y=\"104.7\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(2,4)</text><circle cx=\"355.0\" cy=\"241.7\" r=\"4\" fill=\"#B43123\"/><text x=\"361.0\" y=\"234.7\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(5,1)</text><circle cx=\"355.0\" cy=\"285.0\" r=\"4\" fill=\"#B43123\"/><text x=\"361.0\" y=\"278.0\" font-family=\"IBM Plex Mono,monospace\" font-size=\"10.5\">(5,0)</text></svg></span><p>Vilken hörnpunkt maximerar \\(Z=3x+2y\\)?</p>",
    "s": "<p>Beräkna målfunktionen i hörnpunkterna:</p><p>\\(Z(0,0)=0\\)</p><p>\\(Z(0,4)=8\\)</p><p>\\(Z(2,4)=14\\)</p><p>\\(Z(5,1)=17\\)</p><p>\\(Z(5,0)=15\\)</p><p><strong>Svar:</strong> maximum är \\(17\\) vid \\((5, 1)\\).</p>",
    "familj": "linopt_grafisk_horn"
  },
  {
    "id": "4.30",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En person sätter in 1000 kr i slutet av varje år på ett konto med 3 % ränta. Hur mycket finns direkt efter den femte insättningen, om varje tidigare insättning har hunnit få ränta?</p>",
    "s": "<p>Beloppen bildar en geometrisk summa med första term \\(1000\\), kvot \\(1,03\\) och 5 termer:</p><p>\\[S=1000\\frac{1-1,03^5}{1-1,03}\\approx 5309,14.\\]</p><p><strong>Svar:</strong> ungefär \\(5309,14\\) kr.</p>",
    "familj": "geosum_context_0"
  },
  {
    "id": "4.31",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\):</p><p>\\[\\sin x=\\frac{1}{2}.\\]</p>",
    "s": "<p>Använd enhetscirkeln och sök de vinklar där sinusvärdet är \\(\\frac{1}{2}\\).</p><p><strong>Svar:</strong> \\(30^\\circ, 150^\\circ\\).</p>",
    "familj": "trig_ekvation_0"
  },
  {
    "id": "4.32",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>I en triangel gäller \\(a=7\\) cm, \\(A=40^\\circ\\) och \\(B=65^\\circ\\). Bestäm sidan \\(b\\).</p>",
    "s": "<p>Sinussatsen ger</p><p>\\[\\frac a{\\sin A}=\\frac b{\\sin B}.\\]</p><p>\\[b=7\\frac{\\sin 65^\\circ}{\\sin 40^\\circ}\\approx 9,87\\text{ cm}.\\]</p>",
    "familj": "tri_sine_side_0"
  },
  {
    "id": "4.33",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Bevisa sinussatsen</p><p>\\[\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\]</p><p>genom att uttrycka triangelns area på flera sätt.</p>",
    "s": "<p>Areasatsen ger</p><p>\\[K=\\frac12bc\\sin A=\\frac12ca\\sin B=\\frac12ab\\sin C.\\]</p><p>Multiplicera alla uttryck med 2 och dividera med \\(abc\\):</p><p>\\[\\frac{2K}{abc}=\\frac{\\sin A}{a}=\\frac{\\sin B}{b}=\\frac{\\sin C}{c}.\\]</p><p>Invertera de positiva kvoterna:</p><p>\\[\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}.\\]</p>",
    "familj": "trigapp_sine_proof"
  },
  {
    "id": "4.34",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Det tillåtna området har ett randsegment mellan punkterna \\((2,6)\\) och \\((6,2)\\), alltså längs linjen \\(x+y=8\\). Målfunktionen är \\(Z=5x+5y\\).</p><p>Hur många optimala lösningar finns om detta randsegment ligger längst i målfunktionens ökningsriktning? Motivera.</p>",
    "s": "<p>Målfunktionen kan skrivas \\(Z=5(x+y)\\). På hela randsegmentet gäller \\(x+y=8\\), så</p><p>\\[Z=5\\cdot8=40.\\]</p><p>Alla punkter på segmentet ger alltså samma målfunktionsvärde. Om inget annat tillåtet område ger större värde finns <strong>oändligt många optimala lösningar</strong>, en för varje punkt på segmentet.</p>",
    "familj": "linopt_flera_optima"
  },
  {
    "id": "4.35",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En förening ökar sitt årliga bidrag från en sponsor med 5 % varje år. Första året är bidraget 20 000 kr. Hur mycket bidrag får föreningen sammanlagt under 8 år?</p>",
    "s": "<p>Beloppen bildar en geometrisk summa med första term \\(20000\\), kvot \\(1,05\\) och 8 termer:</p><p>\\[S=20000\\frac{1-1,05^8}{1-1,05}\\approx 190982,18.\\]</p><p><strong>Svar:</strong> ungefär \\(190982,18\\) kr.</p>",
    "familj": "geosum_context_1"
  },
  {
    "id": "4.36",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\):</p><p>\\[\\cos x=- \\frac{1}{2}.\\]</p>",
    "s": "<p>Använd enhetscirkeln och sök de vinklar där cosusvärdet är \\(- \\frac{1}{2}\\).</p><p><strong>Svar:</strong> \\(120^\\circ, 240^\\circ\\).</p>",
    "familj": "trig_ekvation_1"
  },
  {
    "id": "4.37",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>I en triangel gäller \\(a=9\\) cm, \\(A=52^\\circ\\) och \\(B=73^\\circ\\). Bestäm sidan \\(b\\).</p>",
    "s": "<p>Sinussatsen ger</p><p>\\[\\frac a{\\sin A}=\\frac b{\\sin B}.\\]</p><p>\\[b=9\\frac{\\sin 73^\\circ}{\\sin 52^\\circ}\\approx 10,92\\text{ cm}.\\]</p>",
    "familj": "tri_sine_side_1"
  },
  {
    "id": "4.38",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Från punkt A mäts avståndet till B till 160 m. Ett träd T ligger så att \\(\\angle BAT=35^\\circ\\). Avståndet \\(BT\\) är 100 m.</p><p>Undersök om det finns en eller två möjliga positioner för trädet och bestäm i så fall avståndet \\(AT\\) i varje fall.</p>",
    "s": "<p>Sinussatsen ger</p><p>\\[\\frac{100}{\\sin35^\\circ}=\\frac{160}{\\sin C}\\]</p><p>så \\(\\sin C\\approx 0,9177\\).</p><p>Det ger två möjliga vinklar: \\(C_1\\approx 66,6^\\circ\\) och \\(C_2\\approx 113,4^\\circ\\). Båda ger positiv återstående vinkel.</p><p>Fall 1: \\(B\\approx 78,4^\\circ\\), och sinussatsen ger \\(AT=b\\approx 170,8\\) m.</p><p>Fall 2: \\(B\\approx 31,6^\\circ\\), och sinussatsen ger \\(AT=b\\approx 91,3\\) m.</p><p><strong>Svar:</strong> två möjliga positioner, med \\(AT\\approx 170,8\\) m eller \\(91,3\\) m.</p>",
    "familj": "trigapp_ambiguous_context"
  },
  {
    "id": "4.39",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En linjär optimeringsmodell för antal bussar \\(x\\) och minibussar \\(y\\) ger optimum \\((x,y)=(3,6,\\ 7,2)\\).</p><p>Förklara varför man inte bara kan använda detta som praktiskt svar och hur modellen bör hanteras vidare.</p>",
    "s": "<p>Antalet fordon måste vara heltal. Punkten \\((3,6,7,2)\\) är därför inte genomförbar i verkligheten även om den är optimal i den kontinuerliga modellen.</p><p>Man bör undersöka närliggande <em>heltalspunkter</em> som fortfarande uppfyller alla begränsningar, till exempel kombinationer nära \\((4,7)\\), och jämföra målfunktionen där. Det visar också en begränsning hos en kontinuerlig linjär modell för diskreta beslut.</p>",
    "familj": "linopt_heltal_modell"
  },
  {
    "id": "4.40",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Härled formeln för den geometriska summan</p><p>\\[S_n=a+ak+ak^2+\\cdots+ak^{n-1}\\]</p><p>när \\(k\\neq1\\).</p>",
    "s": "<p>Skriv först</p><p>\\[S_n=a+ak+ak^2+\\cdots+ak^{n-1}.\\]</p><p>Multiplicera med \\(k\\):</p><p>\\[kS_n=ak+ak^2+\\cdots+ak^{n}.\\]</p><p>Subtrahera den andra ekvationen från den första:</p><p>\\[(1-k)S_n=a-ak^n=a(1-k^n).\\]</p><p>Eftersom \\(k\\neq1\\) kan vi dividera med \\(1-k\\):</p><p>\\[\\boxed{S_n=a\\frac{1-k^n}{1-k}}.\\]</p>",
    "familj": "geosum_formula_proof"
  },
  {
    "id": "4.41",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\):</p><p>\\[\\sin x=\\frac{\\sqrt{2}}{2}.\\]</p>",
    "s": "<p>Använd enhetscirkeln och sök de vinklar där sinusvärdet är \\(\\frac{\\sqrt{2}}{2}\\).</p><p><strong>Svar:</strong> \\(45^\\circ, 135^\\circ\\).</p>",
    "familj": "trig_ekvation_2"
  },
  {
    "id": "4.42",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>I en triangel gäller \\(a=12\\) cm, \\(A=35^\\circ\\) och \\(B=81^\\circ\\). Bestäm sidan \\(b\\).</p>",
    "s": "<p>Sinussatsen ger</p><p>\\[\\frac a{\\sin A}=\\frac b{\\sin B}.\\]</p><p>\\[b=12\\frac{\\sin 81^\\circ}{\\sin 35^\\circ}\\approx 20,66\\text{ cm}.\\]</p>",
    "familj": "tri_sine_side_2"
  },
  {
    "id": "4.43",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 20 m från foten av ett torn mäts höjdvinkeln till tornets topp till 25°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 25^\\circ=\\frac h{20}.\\]</p><p>Alltså \\(h=20\\tan 25^\\circ\\approx 9,3\\) m.</p>",
    "familj": "topup_trigapp_0"
  },
  {
    "id": "4.44",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,6), (4,4), (8,0). Målfunktionen är \\(Z=3x+4y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,6)=24\\).</p><p>\\(Z(4,4)=28\\).</p><p>\\(Z(8,0)=24\\).</p><p>Största värdet är \\(28\\) i punkten \\((4, 4)\\).</p>",
    "familj": "topup_linopt_0"
  },
  {
    "id": "4.45",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En geometrisk summa har första termen 50 och kvoten 1,2. Hur många termer behövs minst för att summan ska överstiga 500?</p>",
    "s": "<p>Summan efter \\(n\\) termer är</p><p>\\[S_n=50\\frac{1-1,2^n}{1-1,2}.\\]</p><p>Testa kring gränsen: \\(S_{6}\\approx 496,5\\) och \\(S_{7}\\approx 645,8\\).</p><p><strong>Svar:</strong> minst \\(\\boxed{7}\\) termer.</p>",
    "familj": "geosum_find_n"
  },
  {
    "id": "4.46",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "1/0/0",
    "t": "<p>Lös ekvationen i intervallet \\(0^\\circ\\le x&lt;360^\\circ\\):</p><p>\\[\\cos x=0.\\]</p>",
    "s": "<p>Använd enhetscirkeln och sök de vinklar där cosusvärdet är \\(0\\).</p><p><strong>Svar:</strong> \\(90^\\circ, 270^\\circ\\).</p>",
    "familj": "trig_ekvation_3"
  },
  {
    "id": "4.47",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>I en triangel är \\(A=35^\\circ\\), \\(a=10\\) cm och \\(b=14\\) cm.</p><p>Undersök hur många olika trianglar som är möjliga och bestäm de möjliga värdena på vinkeln \\(B\\).</p>",
    "s": "<p>Sinussatsen ger</p><p>\\[\\sin B=\\frac{b\\sin A}a=\\frac{14\\sin 35^\\circ}{10}\\approx 0,803.\\]</p><p>Första lösningen är \\(B_1\\approx 53,4^\\circ\\). Eftersom sinus har samma värde i andra kvadranten finns också \\(B_2=180^\\circ-B_1\\approx 126,6^\\circ\\).</p><p>Båda ger tillsammans med \\(A\\) en vinkelsumma under 180°.</p><p><strong>Svar:</strong> 2 möjliga trianglar, med \\(B\\approx 53,4^\\circ\\) eller \\(126,6^\\circ\\).</p>",
    "familj": "tri_ambiguous_0"
  },
  {
    "id": "4.48",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 25 m från foten av ett torn mäts höjdvinkeln till tornets topp till 30°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 30^\\circ=\\frac h{25}.\\]</p><p>Alltså \\(h=25\\tan 30^\\circ\\approx 14,4\\) m.</p>",
    "familj": "topup_trigapp_1"
  },
  {
    "id": "4.49",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,7), (5,4), (9,0). Målfunktionen är \\(Z=4x+5y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,7)=35\\).</p><p>\\(Z(5,4)=40\\).</p><p>\\(Z(9,0)=36\\).</p><p>Största värdet är \\(40\\) i punkten \\((5, 4)\\).</p>",
    "familj": "topup_linopt_1"
  },
  {
    "id": "4.50",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>En viral kampanj antas få 2,5 gånger så många nya visningar varje dag som dagen före. Första dagen tillkommer 800 visningar.</p><p>a) Ställ upp en geometrisk summa för totala antalet nya visningar under 6 dagar.<br>b) Beräkna summan.<br>c) Ge en anledning till att modellen sannolikt blir orimlig om den används under mycket lång tid.</p>",
    "s": "<p><strong>a)</strong> \\(800+800\\cdot2,5+\\cdots+800\\cdot2,5^5\\).</p><p><strong>b)</strong></p><p>\\[S_6=800\\frac{1-2,5^6}{1-2,5}=129675.\\]</p><p><strong>c)</strong> Modellen antar oförändrad multiplikativ tillväxt. I verkligheten finns en begränsad publik och spridningstakten brukar avta, så modellen kan snabbt överskatta visningarna.</p>",
    "familj": "geosum_model_limit"
  },
  {
    "id": "4.51",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en rätvinklig triangel är hypotenusan 10 cm och en spetsig vinkel 35°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Rätvinklig triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">10 cm</text><text x=\"95\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">35°</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">90°</text></svg></span><p>Bestäm längden av de båda kateterna.</p>",
    "s": "<p>Kateten mittemot vinkeln:</p><p>\\[a=10\\sin 35^\\circ\\approx 5,74\\text{ cm}.\\]</p><p>Närliggande katet:</p><p>\\[b=10\\cos 35^\\circ\\approx 8,19\\text{ cm}.\\]</p>",
    "familj": "trig_ratvinklig_0"
  },
  {
    "id": "4.52",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>I en triangel är \\(A=42^\\circ\\), \\(a=12\\) cm och \\(b=16\\) cm.</p><p>Undersök hur många olika trianglar som är möjliga och bestäm de möjliga värdena på vinkeln \\(B\\).</p>",
    "s": "<p>Sinussatsen ger</p><p>\\[\\sin B=\\frac{b\\sin A}a=\\frac{16\\sin 42^\\circ}{12}\\approx 0,8922.\\]</p><p>Första lösningen är \\(B_1\\approx 63,1^\\circ\\). Eftersom sinus har samma värde i andra kvadranten finns också \\(B_2=180^\\circ-B_1\\approx 116,9^\\circ\\).</p><p>Båda ger tillsammans med \\(A\\) en vinkelsumma under 180°.</p><p><strong>Svar:</strong> 2 möjliga trianglar, med \\(B\\approx 63,1^\\circ\\) eller \\(116,9^\\circ\\).</p>",
    "familj": "tri_ambiguous_1"
  },
  {
    "id": "4.53",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 30 m från foten av ett torn mäts höjdvinkeln till tornets topp till 35°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 35^\\circ=\\frac h{30}.\\]</p><p>Alltså \\(h=30\\tan 35^\\circ\\approx 21\\) m.</p>",
    "familj": "topup_trigapp_2"
  },
  {
    "id": "4.54",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,8), (4,4), (10,0). Målfunktionen är \\(Z=5x+6y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,8)=48\\).</p><p>\\(Z(4,4)=44\\).</p><p>\\(Z(10,0)=50\\).</p><p>Största värdet är \\(50\\) i punkten \\((10, 0)\\).</p>",
    "familj": "topup_linopt_2"
  },
  {
    "id": "4.55",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 4 termerna i den geometriska talföljden med första termen 2 och kvoten 2.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_4=30\\).</p>",
    "familj": "topup_geosum_0"
  },
  {
    "id": "4.56",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en rätvinklig triangel är hypotenusan 14 cm och en spetsig vinkel 52°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Rätvinklig triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">14 cm</text><text x=\"95\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">52°</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">90°</text></svg></span><p>Bestäm längden av de båda kateterna.</p>",
    "s": "<p>Kateten mittemot vinkeln:</p><p>\\[a=14\\sin 52^\\circ\\approx 11,03\\text{ cm}.\\]</p><p>Närliggande katet:</p><p>\\[b=14\\cos 52^\\circ\\approx 8,62\\text{ cm}.\\]</p>",
    "familj": "trig_ratvinklig_1"
  },
  {
    "id": "4.57",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>I en triangel är sidorna 7,0 cm, 9,0 cm och 12,0 cm. Bestäm triangelns största vinkel och area.</p>",
    "s": "<p>Största vinkeln ligger mot den längsta sidan, 12 cm. Cosinussatsen:</p><p>\\[\\cos C=\\frac{7^2+9^2-12^2}{2\\cdot7\\cdot9}=-\\frac19.\\]</p><p>\\[C\\approx 96,4^\\circ.\\]</p><p>Arean fås med areasatsen:</p><p>\\[A=\\frac{7\\cdot9\\sin C}2\\approx 31,3\\text{ cm}^2.\\]</p>",
    "familj": "tri_fullsolve"
  },
  {
    "id": "4.58",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 35 m från foten av ett torn mäts höjdvinkeln till tornets topp till 40°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 40^\\circ=\\frac h{35}.\\]</p><p>Alltså \\(h=35\\tan 40^\\circ\\approx 29,4\\) m.</p>",
    "familj": "topup_trigapp_3"
  },
  {
    "id": "4.59",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,6), (5,4), (8,0). Målfunktionen är \\(Z=3x+7y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,6)=42\\).</p><p>\\(Z(5,4)=43\\).</p><p>\\(Z(8,0)=24\\).</p><p>Största värdet är \\(43\\) i punkten \\((5, 4)\\).</p>",
    "familj": "topup_linopt_3"
  },
  {
    "id": "4.60",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 5 termerna i den geometriska talföljden med första termen 3 och kvoten 3.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_5=363\\).</p>",
    "familj": "topup_geosum_1"
  },
  {
    "id": "4.61",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en rätvinklig triangel är hypotenusan 8 cm och en spetsig vinkel 27°.</p><span class=\"fig\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"470\" height=\"315\" viewBox=\"0 0 470 315\" role=\"img\" aria-label=\"Rätvinklig triangel\"><rect x=\"1\" y=\"1\" width=\"468\" height=\"313\" rx=\"8\" fill=\"#fff\" stroke=\"#E4E3E6\"/><polygon points=\"70,250 400,250 250,70\" fill=\"#F4F8FC\" stroke=\"#2B2527\" stroke-width=\"2.2\"/><circle cx=\"70\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"52\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">A</text><circle cx=\"400\" cy=\"250\" r=\"3.8\" fill=\"#B43123\"/><text x=\"410\" y=\"268\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">B</text><circle cx=\"250\" cy=\"70\" r=\"3.8\" fill=\"#B43123\"/><text x=\"245\" y=\"58\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" font-weight=\"600\" fill=\"#2B2527\">C</text><text x=\"339.0\" y=\"160.0\" text-anchor=\"middle\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2A5D9E\">8 cm</text><text x=\"95\" y=\"238\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">27°</text><text x=\"260\" y=\"98\" font-family=\"IBM Plex Mono,monospace\" font-size=\"11.5\" fill=\"#2E7D52\">90°</text></svg></span><p>Bestäm längden av de båda kateterna.</p>",
    "s": "<p>Kateten mittemot vinkeln:</p><p>\\[a=8\\sin 27^\\circ\\approx 3,63\\text{ cm}.\\]</p><p>Närliggande katet:</p><p>\\[b=8\\cos 27^\\circ\\approx 7,13\\text{ cm}.\\]</p>",
    "familj": "trig_ratvinklig_2"
  },
  {
    "id": "4.62",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "A",
    "poang": "0/0/3",
    "t": "<p>Bevisa cosinussatsen \\(c^2=a^2+b^2-2ab\\cos C\\) genom att dela en godtycklig triangel med en höjd från ett hörn.</p>",
    "s": "<p>Låt höjden från hörnet \\(B\\) träffa sidan \\(AC\\). Om \\(AB=c\\), \\(AC=b\\) och \\(BC=a\\), blir höjdens längd \\(a\\sin C\\) och den horisontella projektionen \\(a\\cos C\\).</p><p>I den rätvinkliga triangeln med hypotenusan \\(c\\) gäller</p><p>\\[c^2=(b-a\\cos C)^2+(a\\sin C)^2.\\]</p><p>Utveckla:</p><p>\\[c^2=b^2-2ab\\cos C+a^2\\cos^2C+a^2\\sin^2C.\\]</p><p>Använd \\(\\sin^2C+\\cos^2C=1\\):</p><p>\\[c^2=a^2+b^2-2ab\\cos C.\\]</p>",
    "familj": "tri_cosine_proof"
  },
  {
    "id": "4.63",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 40 m från foten av ett torn mäts höjdvinkeln till tornets topp till 45°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 45^\\circ=\\frac h{40}.\\]</p><p>Alltså \\(h=40\\tan 45^\\circ\\approx 40\\) m.</p>",
    "familj": "topup_trigapp_4"
  },
  {
    "id": "4.64",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,7), (4,4), (9,0). Målfunktionen är \\(Z=4x+4y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,7)=28\\).</p><p>\\(Z(4,4)=32\\).</p><p>\\(Z(9,0)=36\\).</p><p>Största värdet är \\(36\\) i punkten \\((9, 0)\\).</p>",
    "familj": "topup_linopt_4"
  },
  {
    "id": "4.65",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 6 termerna i den geometriska talföljden med första termen 4 och kvoten 0,5.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_6=7,875\\).</p>",
    "familj": "topup_geosum_2"
  },
  {
    "id": "4.66",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Punkten \\(P=(-\\frac12,\\frac{\\sqrt3}{2})\\) ligger på enhetscirkeln.</p><p>Bestäm alla vinklar \\(v\\) i intervallet \\(0^\\circ\\le v&lt;360^\\circ\\) som har denna punkt som ändpunkt.</p>",
    "s": "<p>På enhetscirkeln gäller \\(P=(\\cos v,\\sin v)\\). Här är cosinus negativ och sinus positiv, alltså ligger vinkeln i andra kvadranten.</p><p>Referensvinkeln är 60° eftersom \\(\\cos60^\\circ=1/2\\) och \\(\\sin60^\\circ=\\sqrt3/2\\).</p><p>Alltså är \\(v=180^\\circ-60^\\circ=120^\\circ\\).</p><p><strong>Svar:</strong> \\(\\boxed{120^\\circ}\\).</p>",
    "familj": "trig_punkt_till_vinkel"
  },
  {
    "id": "4.67",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 5 cm och 7 cm och vinkeln mellan dem är 35°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=5^2+7^2-2\\cdot5\\cdot7\\cos 35^\\circ.\\]</p><p>\\[c\\approx 4,08\\text{ cm}.\\]</p>",
    "familj": "topup_tri_0"
  },
  {
    "id": "4.68",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 20 m från foten av ett torn mäts höjdvinkeln till tornets topp till 50°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 50^\\circ=\\frac h{20}.\\]</p><p>Alltså \\(h=20\\tan 50^\\circ\\approx 23,8\\) m.</p>",
    "familj": "topup_trigapp_5"
  },
  {
    "id": "4.69",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,8), (5,4), (10,0). Målfunktionen är \\(Z=5x+5y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,8)=40\\).</p><p>\\(Z(5,4)=45\\).</p><p>\\(Z(10,0)=50\\).</p><p>Största värdet är \\(50\\) i punkten \\((10, 0)\\).</p>",
    "familj": "topup_linopt_5"
  },
  {
    "id": "4.70",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 7 termerna i den geometriska talföljden med första termen 5 och kvoten 1,5.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_7=160,859\\).</p>",
    "familj": "topup_geosum_3"
  },
  {
    "id": "4.71",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Lös ekvationen \\(\\sin x=\\frac12\\) för alla reella vinklar \\(x\\), angivna i grader.</p>",
    "s": "<p>I ett varv är lösningarna 30° och 150°. Sinus är periodisk med perioden 360°.</p><p><strong>Svar:</strong></p><p>\\[\\boxed{x=30^\\circ+360^\\circ n\\quad\\text{eller}\\quad x=150^\\circ+360^\\circ n,\\ n\\in\\mathbb Z}.\\]</p>",
    "familj": "trig_ekvation_allmanna"
  },
  {
    "id": "4.72",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 6 cm och 8 cm och vinkeln mellan dem är 40°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=6^2+8^2-2\\cdot6\\cdot8\\cos 40^\\circ.\\]</p><p>\\[c\\approx 5,14\\text{ cm}.\\]</p>",
    "familj": "topup_tri_1"
  },
  {
    "id": "4.73",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 25 m från foten av ett torn mäts höjdvinkeln till tornets topp till 25°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 25^\\circ=\\frac h{25}.\\]</p><p>Alltså \\(h=25\\tan 25^\\circ\\approx 11,7\\) m.</p>",
    "familj": "topup_trigapp_6"
  },
  {
    "id": "4.74",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,6), (4,4), (8,0). Målfunktionen är \\(Z=3x+6y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,6)=36\\).</p><p>\\(Z(4,4)=36\\).</p><p>\\(Z(8,0)=24\\).</p><p>Största värdet är \\(36\\) i punkten \\((0, 6)\\).</p>",
    "familj": "topup_linopt_6"
  },
  {
    "id": "4.75",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 8 termerna i den geometriska talföljden med första termen 6 och kvoten 2.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_8=1530\\).</p>",
    "familj": "topup_geosum_4"
  },
  {
    "id": "4.76",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "C",
    "poang": "0/2/0",
    "t": "<p>Härled de exakta värdena för \\(\\sin45^\\circ\\) och \\(\\cos45^\\circ\\) med hjälp av en likbent rätvinklig triangel.</p>",
    "s": "<p>Välj en likbent rätvinklig triangel med kateterna 1 och 1. Pythagoras sats ger hypotenusan</p><p>\\[c=\\sqrt{1^2+1^2}=\\sqrt2.\\]</p><p>Därför</p><p>\\[\\sin45^\\circ=\\frac1{\\sqrt2}=\\frac{\\sqrt2}{2}\\]</p><p>och på samma sätt</p><p>\\[\\cos45^\\circ=\\frac1{\\sqrt2}=\\frac{\\sqrt2}{2}.\\]</p>",
    "familj": "trig_harled_45"
  },
  {
    "id": "4.77",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 7 cm och 9 cm och vinkeln mellan dem är 45°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=7^2+9^2-2\\cdot7\\cdot9\\cos 45^\\circ.\\]</p><p>\\[c\\approx 6,4\\text{ cm}.\\]</p>",
    "familj": "topup_tri_2"
  },
  {
    "id": "4.78",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 30 m från foten av ett torn mäts höjdvinkeln till tornets topp till 30°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 30^\\circ=\\frac h{30}.\\]</p><p>Alltså \\(h=30\\tan 30^\\circ\\approx 17,3\\) m.</p>",
    "familj": "topup_trigapp_7"
  },
  {
    "id": "4.79",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,7), (5,4), (9,0). Målfunktionen är \\(Z=4x+7y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,7)=49\\).</p><p>\\(Z(5,4)=48\\).</p><p>\\(Z(9,0)=36\\).</p><p>Största värdet är \\(49\\) i punkten \\((0, 7)\\).</p>",
    "familj": "topup_linopt_7"
  },
  {
    "id": "4.80",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 4 termerna i den geometriska talföljden med första termen 2 och kvoten 3.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_4=80\\).</p>",
    "familj": "topup_geosum_5"
  },
  {
    "id": "4.81",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm exakt \\(\\cos 30^\\circ\\) och \\(\\sin 30^\\circ\\) med hjälp av enhetscirkeln.</p>",
    "s": "<p>Vinkeln ligger i rätt kvadrant och har referensvinkel 30°. På enhetscirkeln är x-koordinaten cosinus och y-koordinaten sinus.</p><p><strong>Svar:</strong> \\(\\cos 30^\\circ=\\frac{\\sqrt{3}}{2}\\), \\(\\sin 30^\\circ=\\frac{1}{2}\\).</p>",
    "familj": "topup_unit_0"
  },
  {
    "id": "4.82",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 8 cm och 10 cm och vinkeln mellan dem är 50°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=8^2+10^2-2\\cdot8\\cdot10\\cos 50^\\circ.\\]</p><p>\\[c\\approx 7,82\\text{ cm}.\\]</p>",
    "familj": "topup_tri_3"
  },
  {
    "id": "4.83",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 35 m från foten av ett torn mäts höjdvinkeln till tornets topp till 35°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 35^\\circ=\\frac h{35}.\\]</p><p>Alltså \\(h=35\\tan 35^\\circ\\approx 24,5\\) m.</p>",
    "familj": "topup_trigapp_8"
  },
  {
    "id": "4.84",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,8), (4,4), (10,0). Målfunktionen är \\(Z=5x+4y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,8)=32\\).</p><p>\\(Z(4,4)=36\\).</p><p>\\(Z(10,0)=50\\).</p><p>Största värdet är \\(50\\) i punkten \\((10, 0)\\).</p>",
    "familj": "topup_linopt_8"
  },
  {
    "id": "4.85",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 5 termerna i den geometriska talföljden med första termen 3 och kvoten 0,5.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_5=5,812\\).</p>",
    "familj": "topup_geosum_6"
  },
  {
    "id": "4.86",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm exakt \\(\\cos 45^\\circ\\) och \\(\\sin 45^\\circ\\) med hjälp av enhetscirkeln.</p>",
    "s": "<p>Vinkeln ligger i rätt kvadrant och har referensvinkel 45°. På enhetscirkeln är x-koordinaten cosinus och y-koordinaten sinus.</p><p><strong>Svar:</strong> \\(\\cos 45^\\circ=\\frac{\\sqrt{2}}{2}\\), \\(\\sin 45^\\circ=\\frac{\\sqrt{2}}{2}\\).</p>",
    "familj": "topup_unit_1"
  },
  {
    "id": "4.87",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 9 cm och 7 cm och vinkeln mellan dem är 55°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=9^2+7^2-2\\cdot9\\cdot7\\cos 55^\\circ.\\]</p><p>\\[c\\approx 7,6\\text{ cm}.\\]</p>",
    "familj": "topup_tri_4"
  },
  {
    "id": "4.88",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 40 m från foten av ett torn mäts höjdvinkeln till tornets topp till 40°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 40^\\circ=\\frac h{40}.\\]</p><p>Alltså \\(h=40\\tan 40^\\circ\\approx 33,6\\) m.</p>",
    "familj": "topup_trigapp_9"
  },
  {
    "id": "4.89",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,6), (5,4), (8,0). Målfunktionen är \\(Z=3x+5y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,6)=30\\).</p><p>\\(Z(5,4)=35\\).</p><p>\\(Z(8,0)=24\\).</p><p>Största värdet är \\(35\\) i punkten \\((5, 4)\\).</p>",
    "familj": "topup_linopt_9"
  },
  {
    "id": "4.90",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 6 termerna i den geometriska talföljden med första termen 4 och kvoten 1,5.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_6=83,125\\).</p>",
    "familj": "topup_geosum_7"
  },
  {
    "id": "4.91",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm exakt \\(\\cos 60^\\circ\\) och \\(\\sin 60^\\circ\\) med hjälp av enhetscirkeln.</p>",
    "s": "<p>Vinkeln ligger i rätt kvadrant och har referensvinkel 60°. På enhetscirkeln är x-koordinaten cosinus och y-koordinaten sinus.</p><p><strong>Svar:</strong> \\(\\cos 60^\\circ=\\frac{1}{2}\\), \\(\\sin 60^\\circ=\\frac{\\sqrt{3}}{2}\\).</p>",
    "familj": "topup_unit_2"
  },
  {
    "id": "4.92",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 5 cm och 8 cm och vinkeln mellan dem är 60°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=5^2+8^2-2\\cdot5\\cdot8\\cos 60^\\circ.\\]</p><p>\\[c\\approx 7\\text{ cm}.\\]</p>",
    "familj": "topup_tri_5"
  },
  {
    "id": "4.93",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 20 m från foten av ett torn mäts höjdvinkeln till tornets topp till 45°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 45^\\circ=\\frac h{20}.\\]</p><p>Alltså \\(h=20\\tan 45^\\circ\\approx 20\\) m.</p>",
    "familj": "topup_trigapp_10"
  },
  {
    "id": "4.94",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,7), (4,4), (9,0). Målfunktionen är \\(Z=4x+6y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,7)=42\\).</p><p>\\(Z(4,4)=40\\).</p><p>\\(Z(9,0)=36\\).</p><p>Största värdet är \\(42\\) i punkten \\((0, 7)\\).</p>",
    "familj": "topup_linopt_10"
  },
  {
    "id": "4.95",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 7 termerna i den geometriska talföljden med första termen 5 och kvoten 2.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_7=635\\).</p>",
    "familj": "topup_geosum_8"
  },
  {
    "id": "4.96",
    "kap": 4,
    "omr": "enhetscirkeln_trig",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Bestäm exakt \\(\\cos 120^\\circ\\) och \\(\\sin 120^\\circ\\) med hjälp av enhetscirkeln.</p>",
    "s": "<p>Vinkeln ligger i rätt kvadrant och har referensvinkel 30°. På enhetscirkeln är x-koordinaten cosinus och y-koordinaten sinus.</p><p><strong>Svar:</strong> \\(\\cos 120^\\circ=- \\frac{1}{2}\\), \\(\\sin 120^\\circ=\\frac{\\sqrt{3}}{2}\\).</p>",
    "familj": "topup_unit_3"
  },
  {
    "id": "4.97",
    "kap": 4,
    "omr": "triangelsatser",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>I en triangel är två sidor 6 cm och 9 cm och vinkeln mellan dem är 65°. Bestäm den tredje sidan.</p>",
    "s": "<p>Cosinussatsen ger</p><p>\\[c^2=6^2+9^2-2\\cdot6\\cdot9\\cos 65^\\circ.\\]</p><p>\\[c\\approx 8,45\\text{ cm}.\\]</p>",
    "familj": "topup_tri_6"
  },
  {
    "id": "4.98",
    "kap": 4,
    "omr": "trig_tillampningar_bevis",
    "kurs": [
      "1c"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Från en punkt 25 m från foten av ett torn mäts höjdvinkeln till tornets topp till 50°. Marken antas plan. Bestäm tornets höjd.</p>",
    "s": "<p>Situationen ger en rätvinklig triangel där</p><p>\\[\\tan 50^\\circ=\\frac h{25}.\\]</p><p>Alltså \\(h=25\\tan 50^\\circ\\approx 29,8\\) m.</p>",
    "familj": "topup_trigapp_11"
  },
  {
    "id": "4.99",
    "kap": 4,
    "omr": "linjar_optimering",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "3/0/0",
    "t": "<p>Det tillåtna området i ett linjärt optimeringsproblem har hörnpunkterna (0,0), (0,8), (5,4), (10,0). Målfunktionen är \\(Z=5x+7y\\).</p><p>Bestäm största möjliga värde på \\(Z\\).</p>",
    "s": "<p>En linjär målfunktion får sitt extremvärde i en hörnpunkt. Beräkna:</p><p>\\(Z(0,0)=0\\).</p><p>\\(Z(0,8)=56\\).</p><p>\\(Z(5,4)=53\\).</p><p>\\(Z(10,0)=50\\).</p><p>Största värdet är \\(56\\) i punkten \\((0, 8)\\).</p>",
    "familj": "topup_linopt_11"
  },
  {
    "id": "4.100",
    "kap": 4,
    "omr": "geometriska_summor",
    "kurs": [
      "1b"
    ],
    "niva": "E",
    "poang": "2/0/0",
    "t": "<p>Beräkna summan av de första 8 termerna i den geometriska talföljden med första termen 6 och kvoten 3.</p>",
    "s": "<p>Använd</p><p>\\[S_N=a_1\\frac{1-k^N}{1-k}.\\]</p><p>Insättning ger \\(S_8=19680\\).</p>",
    "familj": "topup_geosum_9"
  }
];
