/* Ritbibliotek. Används vid framtagning av nya uppgifter för att generera
   SVG-koden, som sedan fryses in i uppgifter.js. Laddas inte av verktyget. */
/* ═══════════ ritbibliotek ═══════════ */
const nn=x=>String(parseFloat(x.toFixed(4))).replace('.',',');
const SV=(w,h,c)=>`<span class="fig" style="max-width:${w}px"><svg viewBox="0 0 ${w} ${h}">${c}</svg></span>`;
const L=(a,b,c,d,s='#2B2527',w=2)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${s}" stroke-width="${w}" stroke-linecap="square"/>`;
const T=(x,y,t,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" font-family="IBM Plex Mono" font-size="${o.s||11.5}" font-weight="${o.w||400}" fill="${o.c||'#5C575E'}">${t}</text>`;
const PIL=(a,b,c,d)=>{const v=Math.atan2(d-b,c-a),h=10,br=4.6;
 const x=c-h*Math.cos(v), y=d-h*Math.sin(v), px=-Math.sin(v)*br, py=Math.cos(v)*br;
 return `<line x1="${a}" y1="${b}" x2="${x}" y2="${y}" stroke="#B43123" stroke-width="2.3"/>`+
  `<polygon points="${c},${d} ${x+px},${y+py} ${x-px},${y-py}" fill="#B43123"/>`;};

/* diagram. o = {xl,yl,xmax,ymax,ymin,xs,ys}; serier = [{p:[[x,y]..],n:namn,pk:punkter,f:färg}] */
function DIA(serier,o){
  const W=500,H=286,ml=54,mr=14,mt=26,mb=40, ymin=o.ymin||0;
  const X=v=>ml+v/o.xmax*(W-ml-mr), Y=v=>H-mb-(v-ymin)/(o.ymax-ymin)*(H-mb-mt);
  let s=`<rect x="${ml}" y="${mt}" width="${W-ml-mr}" height="${H-mt-mb}" fill="#fff"/>`;
  for(let i=ymin;i<=o.ymax+1e-9;i+=o.ys) s+=L(ml,Y(i),W-mr,Y(i),'#E4E3E6',1)+T(ml-8,Y(i)+4,nn(i),{a:'end',s:10.5});
  for(let i=0;i<=o.xmax+1e-9;i+=o.xs) s+=L(X(i),mt,X(i),H-mb,'#E4E3E6',1)+T(X(i),H-mb+16,nn(i),{s:10.5});
  const y0=Y(Math.max(ymin,0));
  s+=L(ml,mt,ml,H-mb)+L(ml,y0,W-mr,y0);
  s+=T(ml-38,14,o.yl,{a:'start',w:600,c:'#2B2527'})+T(W-mr,H-4,o.xl,{a:'end',w:600,c:'#2B2527'});
  serier.forEach(se=>{
    const f=se.f||'#B43123';
    s+=`<polyline points="${se.p.map(q=>X(q[0])+','+Y(q[1])).join(' ')}" fill="none" stroke="${f}" stroke-width="2.4" stroke-linejoin="round"/>`;
    if(se.pk) se.p.forEach(q=>s+=`<circle cx="${X(q[0])}" cy="${Y(q[1])}" r="3.3" fill="${f}"/>`);
    if(se.n){const q=se.p[se.p.length-1];s+=T(X(q[0])-5,Y(q[1])-9,se.n,{a:'end',w:600,c:f});}
  });
  return SV(W,H,s);
}
/* kraftfigur. kr = [{v:vinkel°,t:etikett,l:längdfaktor}] */
function KRAFT(kr,o={}){
  const bw=76,bh=48,W=400,cx=195;
  const upp=kr.some(k=>k.v>10&&k.v<170), ner=kr.some(k=>k.v>190&&k.v<350);
  const övre=upp?92:(o.tak?58:32), undre=ner?92:32, cy=övre+bh/2, H=övre+bh+undre;
  let s='';
  if(o.golv) s+=`<rect x="15" y="${cy+bh/2}" width="370" height="9" fill="#EDEEF1"/>`+L(15,cy+bh/2,385,cy+bh/2);
  if(o.tak) s+=`<rect x="15" y="${cy-bh/2-44}" width="370" height="9" fill="#EDEEF1"/>`+L(15,cy-bh/2-35,385,cy-bh/2-35);
  s+=`<rect x="${cx-bw/2}" y="${cy-bh/2}" width="${bw}" height="${bh}" rx="3" fill="#fff" stroke="#2B2527" stroke-width="2"/>`;
  /* p = angreppspunkt: c mitt (tyngdpunkt), b underkant, t överkant, v/h sida */
  kr.forEach(k=>{
    const r=k.v*Math.PI/180, c=Math.cos(r), si=Math.sin(r);
    const pt=k.p||(k.v===270?'c':k.v===90?'b':c>0?'h':'v');
    let x0=cx, y0=cy;
    if(pt==='b'){y0=cy+bh/2; x0=cx+(c?Math.sign(c)*bw*0.34:-20);}
    else if(pt==='t'){y0=cy-bh/2; x0=cx+(c?Math.sign(c)*bw*0.34:-20);}
    else if(pt==='v'){x0=cx-bw/2;}
    else if(pt==='h'){x0=cx+bw/2;}
    let d=52*(k.l||1);
    if(o.tak&&pt==='t'&&si>0){                       /* snöret upp mot taket */
      const takY=cy-bh/2-35, full=(y0-takY)/si;
      s+=L(x0,y0,x0+full*c,takY,'#2B2527',1.4);
      d=Math.min(d,full-11);
    }
    s+=PIL(x0,y0,x0+d*c,y0-d*si);
    s+= (o.tak&&pt==='t')
      ? T(x0+d*0.5*c+22*Math.sign(c||1),y0-d*0.5*si+4,k.t,{w:600,c:'#B43123'})
      : T(x0+(d+20)*c,y0-(d+20)*si+4,k.t,{w:600,c:'#B43123'});
  });
  if(kr.some(k=>(k.p||(k.v===270?'c':''))==='c')) s+=`<circle cx="${cx}" cy="${cy}" r="3" fill="#2B2527"/>`;
  if(o.m) s+= o.tak ? T(cx+bw/2+8,cy+4,o.m,{a:'start',s:11.5,w:600,c:'#2B2527'})
                    : T(cx+bw/2+6,cy-bh/2-7,o.m,{a:'start',s:11.5,w:600,c:'#2B2527'});
  return SV(W,H,s);
}
/* lutande plan */
function PLAN(th,txt,o={}){
  const W=440,H=210,x0=25,y0=170,Ln=390,r=th*Math.PI/180;
  const xt=x0+Ln, yt=y0-Ln*Math.tan(r);
  let s=`<polygon points="${x0},${y0} ${xt},${y0} ${xt},${yt}" fill="#EDEEF1" stroke="#2B2527" stroke-width="2"/>`;
  const px=x0+Ln*0.52, py=y0-Ln*0.52*Math.tan(r);
  s+=`<g transform="translate(${px},${py}) rotate(${-th})"><rect x="-26" y="-30" width="52" height="30" rx="3" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+
     `<text x="0" y="-11" text-anchor="middle" font-family="IBM Plex Mono" font-size="11.5" font-weight="600" fill="#2B2527">${txt}</text></g>`;
  s+=`<path d="M ${xt-70} ${y0} A 70 70 0 0 0 ${xt-70*Math.cos(r)} ${y0-70*Math.sin(r)}" fill="none" stroke="#B43123" stroke-width="2"/>`;
  s+=T(xt-95,y0-12,th+'°',{s:13,w:600,c:'#B43123'});
  if(o.drag) s+=PIL(px+22,py-40,px+70,py-40-70*Math.tan(r))+T(px+96,py-46-70*Math.tan(r),o.drag,{w:600,c:'#B43123'});
  return SV(W,H,s);
}
/* kopplingsschema. typ: serie|parallell|kombo|ampere */
function KRETS(typ,lbl,U){
  const Lx=120,Rx=430,Ty=48,By=210,M=300;
  const R=(x,y,d,t,si)=>{const l=56,b=20;
    return d==='h'?`<rect x="${x-l/2}" y="${y-b/2}" width="${l}" height="${b}" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T(x,y-b/2-8,t,{w:600,c:'#2B2527'})
    :`<rect x="${x-b/2}" y="${y-l/2}" width="${b}" height="${l}" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T(si==='v'?x-b/2-7:x+b/2+7,y+4,t,{a:si==='v'?'end':'start',w:600,c:'#2B2527'});};
  const B=(x,y,t)=>L(x-15,y-8,x+15,y-8,'#2B2527',2.6)+L(x-6,y+8,x+6,y+8,'#2B2527',4.5)+T(x-22,y+5,t,{a:'end',w:600,c:'#B43123'});
  const nod=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.6" fill="#2B2527"/>`;
  let s=L(Lx,Ty,Lx,113)+L(Lx,147,Lx,By)+B(Lx,130,U);
  if(typ==='serie') s+=L(Lx,Ty,Rx,Ty)+L(Rx,Ty,Rx,By)+L(Rx,By,Lx,By)+R(225,Ty,'h',lbl[0])+R(355,Ty,'h',lbl[1]);
  else if(typ==='parallell') s+=L(Lx,Ty,Rx,Ty)+L(Rx,By,Lx,By)+L(M,Ty,M,By)+L(Rx,Ty,Rx,By)+R(M,129,'v',lbl[0],'v')+R(Rx,129,'v',lbl[1],'h')+nod(M,Ty)+nod(M,By);
  else if(typ==='ampere') s+=L(Lx,Ty,Rx,Ty)+L(Rx,Ty,Rx,By)+L(Rx,By,Lx,By)+R(340,Ty,'h',lbl[0])+
    `<circle cx="225" cy="${Ty}" r="17" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T(225,Ty+5,lbl[1]||'A',{s:13,w:600,c:'#2B2527'});
  else s+=L(Lx,Ty,Rx,Ty)+L(Rx,By,Lx,By)+L(M,Ty,M,By)+L(Rx,Ty,Rx,By)+R(215,Ty,'h',lbl[0])+R(M,132,'v',lbl[1],'v')+R(Rx,132,'v',lbl[2],'h')+nod(M,Ty)+nod(M,By);
  return SV(500,250,s);
}
/* kloss på bord med snöre över trissa */
function TRISSA(m1,m2){
  let s=`<rect x="30" y="120" width="270" height="10" fill="#EDEEF1"/>`+L(30,120,300,120);
  s+=`<rect x="90" y="88" width="66" height="32" rx="3" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T(123,109,m1,{w:600,c:'#2B2527'});
  s+=L(156,96,300,96)+`<circle cx="300" cy="112" r="16" fill="#fff" stroke="#2B2527" stroke-width="2"/>`;
  s+=L(316,112,316,180)+`<rect x="292" y="180" width="48" height="30" rx="3" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T(316,200,m2,{w:600,c:'#2B2527'});
  return SV(400,235,s);
}
/* u-rör */
function UROR(h1,h2,n1,n2){
  const xa=70,xb=210,br=34,yb=215,sk=3.6,ytop=30;
  const yA=yb-h1*sk, yB=yb-h2*sk;
  let s='';
  /* vätska */
  s+=`<rect x="${xa}" y="${yA}" width="${br}" height="${yb-yA}" fill="#DCE6F2"/>`;
  s+=`<rect x="${xb}" y="${yB}" width="${br}" height="${yb-yB}" fill="#DCE6F2"/>`;
  s+=`<rect x="${xa}" y="${yb-br}" width="${xb+br-xa}" height="${br}" fill="#DCE6F2"/>`;
  /* väggar */
  const v=(x1,y1,x2,y2)=>L(x1,y1,x2,y2,'#2B2527',2.5);
  s+=v(xa,ytop,xa,yb)+v(xa+br,ytop,xa+br,yb-br)+v(xb,ytop,xb,yb-br)+v(xb+br,ytop,xb+br,yb);
  s+=v(xa,yb,xb+br,yb)+v(xa+br,yb-br,xb,yb-br);
  /* ytor och mått */
  s+=L(xa,yA,xa+br,yA,'#B43123',2.4)+L(xb,yB,xb+br,yB,'#B43123',2.4);
  s+=L(xa-16,yA,xa-16,yb,'#5C575E',1.3)+T(xa-22,(yA+yb)/2,n1,{a:'end',w:600,c:'#B43123'});
  s+=L(xb+br+16,yB,xb+br+16,yb,'#5C575E',1.3)+T(xb+br+22,(yB+yb)/2,n2,{a:'start',w:600,c:'#B43123'});
  return SV(330,240,s);
}
/* punktladdningar på en linje. list=[{q:'+5 nC',neg:bool}], avst=['4,0 cm',..] */
function LADD(list,avst){
  const W=460,y=95, steg=W/(list.length+1);
  let s='';
  list.forEach((k,i)=>{const x=steg*(i+1);
    s+=`<circle cx="${x}" cy="${y}" r="20" fill="${k.neg?'#EAF0F8':'#FBF0EE'}" stroke="${k.neg?'#2A5D9E':'#B43123'}" stroke-width="2"/>`;
    s+=T(x,y+5,k.neg?'–':'+',{s:17,w:600,c:k.neg?'#2A5D9E':'#B43123'})+T(x,y-30,k.q,{w:600,c:'#2B2527'});
    if(i<list.length-1){const x2=steg*(i+2);
      s+=L(x+22,y+42,x2-22,y+42,'#5C575E',1.4)+T((x+x2)/2,y+38,avst[i]||'',{s:10.5});}
  });
  return SV(W,160,s);
}
/* hävstång/balk med två laster */
function HAV(la,lb,ta,tb,o={}){
  const W=470,cx=235,y=44;
  const sk=Math.min(140,168/Math.max(la,lb));
  const xa=cx-la*sk, xb=cx+lb*sk;
  let s=L(xa-26,y,xb+26,y,'#2B2527',3);
  s+=`<polygon points="${cx},${y+5} ${cx-17},${y+42} ${cx+17},${y+42}" fill="#EDEEF1" stroke="#2B2527" stroke-width="2"/>`;
  s+=PIL(xa,y,xa,y+52)+PIL(xb,y,xb,y+52);       /* lasterna drar nedåt */
  s+=T(xa,y+70,ta,{w:600,c:'#B43123'})+T(xb,y+70,tb,{w:600,c:'#B43123'});
  const mått=(x1,x2,txt)=>L(x1,y+92,x2,y+92,'#9A959C',1.2)+L(x1,y+87,x1,y+97,'#9A959C',1.2)+
    L(x2,y+87,x2,y+97,'#9A959C',1.2)+T((x1+x2)/2,y+110,txt,{s:10.5});
  s+=mått(xa,cx,o.a||nn(la)+' m')+mått(cx,xb,o.b||nn(lb)+' m');
  return SV(W,y+124,s);
}
/* två vagnar före/efter */
function VAGN(rader){
  let s='',y=40;
  rader.forEach(r=>{
    s+=T(14,y+22,r.n,{a:'start',w:600,c:'#5C575E'});
    r.v.forEach(v=>{
      s+=`<rect x="${v.x}" y="${y}" width="76" height="34" rx="4" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T(v.x+38,y+22,v.m,{w:600,c:'#2B2527'});
      s+=`<circle cx="${v.x+18}" cy="${y+40}" r="6" fill="#2B2527"/><circle cx="${v.x+58}" cy="${y+40}" r="6" fill="#2B2527"/>`;
      if(v.p) s+=PIL(v.x+38,y-12,v.x+38+(v.h?42:-42),y-12)+T(v.x+38+(v.h?50:-50),y-8,v.p,{a:v.h?'start':'end',w:600,c:'#B43123'});
      else if(v.s) s+=T(v.x+38,y-8,v.s,{w:600,c:'#5C575E'});
    });
    y+=100;
  });
  return SV(430,y-30,`<line x1="10" y1="${y-52}" x2="420" y2="${y-52}" stroke="#EDEEF1" stroke-width="0"/>`+s);
}
/* höjdprofil för bana */
function BANA(pkt,etiketter){
  const W=470,H=210,ml=40,y0=175,sk=(y0-30)/Math.max(...pkt.map(p=>p[1]));
  const X=v=>ml+v/Math.max(...pkt.map(p=>p[0]))*(W-ml-30), Y=v=>y0-v*sk;
  let s=`<path d="M${X(pkt[0][0])} ${y0} `+pkt.map(p=>`L${X(p[0])} ${Y(p[1])}`).join(' ')+` L${X(pkt[pkt.length-1][0])} ${y0} Z" fill="#EDEEF1" stroke="#2B2527" stroke-width="2"/>`;
  s+=L(ml-15,y0,W-15,y0,'#2B2527',2);
  (etiketter||[]).forEach(e=>{
    s+=`<circle cx="${X(e.x)}" cy="${Y(e.y)}" r="5.5" fill="#B43123"/>`+T(X(e.x),Y(e.y)-12,e.t,{w:600,c:'#B43123'});
    if(e.h) s+=L(X(e.x),Y(e.y),X(e.x),y0,'#5C575E',1.2)+T(X(e.x)+22,(Y(e.y)+y0)/2,e.h,{s:10.5,a:'start'});
  });
  return SV(W,H,s);
}
/* parallella plattor med fältlinjer */
function PLATTOR(U,d,o={}){
  const W=420,x1=70,x2=350,yt=45,yb=185;
  let s=`<rect x="${x1}" y="${yt-9}" width="${x2-x1}" height="9" fill="#2B2527"/><rect x="${x1}" y="${yb}" width="${x2-x1}" height="9" fill="#2B2527"/>`;
  for(let i=0;i<8;i++){const x=x1+22+i*((x2-x1-44)/7); s+=PIL(x,yt+4,x,yb-4);}
  s+=T(x1-12,yt+5,'+',{a:'end',s:17,w:600,c:'#B43123'})+T(x1-12,yb+8,'–',{a:'end',s:17,w:600,c:'#2A5D9E'});
  s+=T((x1+x2)/2,yt-18,U,{w:600,c:'#2B2527'})+T(x2+16,(yt+yb)/2+4,d,{a:'start',w:600,c:'#5C575E'});
  if(o.p) s+=`<circle cx="${(x1+x2)/2}" cy="${(yt+yb)/2}" r="11" fill="#fff" stroke="#2B2527" stroke-width="2"/>`+T((x1+x2)/2,(yt+yb)/2+4,o.p,{s:11,w:600,c:'#2B2527'});
  return SV(W,220,s);
}
/* behållare med vätska och flytande kropp */
function KARL(o){
  const W=380,x1=60,x2=320,yt=40,yb=200, yv=yt+(yb-yt)*(1-(o.niva||0.75));
  let s=`<path d="M${x1} ${yt} L${x1} ${yb} L${x2} ${yb} L${x2} ${yt}" fill="none" stroke="#2B2527" stroke-width="2.5"/>`;
  s+=`<rect x="${x1+2}" y="${yv}" width="${x2-x1-4}" height="${yb-yv-2}" fill="#DCE6F2"/>`;
  s+=L(x1+2,yv,x2-2,yv,'#2A5D9E',2);
  if(o.kropp){const b=o.kropp, kh=54, ner=kh*b.andel;
    s+=`<rect x="${(x1+x2)/2-40}" y="${yv-kh+ner}" width="80" height="${kh}" rx="3" fill="#fff" stroke="#2B2527" stroke-width="2"/>`;
    s+=T((x1+x2)/2,yv-kh+ner+kh/2+4,b.t,{w:600,c:'#2B2527'});}
  if(o.djup) s+=L(x2+14,yv,x2+14,yb,'#5C575E',1.3)+T(x2+22,(yv+yb)/2,o.djup,{a:'start',s:10.5});
  return SV(W,225,s);
}

if(typeof module!=="undefined") module.exports={DIA,KRAFT,PLAN,KRETS,TRISSA,UROR,LADD,HAV,VAGN,BANA,PLATTOR,KARL};
