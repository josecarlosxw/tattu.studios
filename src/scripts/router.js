/* Router por hash, transição entre páginas e efeitos de entrada. */
function render(){lbClose();setMenu(false);
const [path,qs]=location.hash.slice(2).split('?'),[r='',a]=path.split('/'),p=new URLSearchParams(qs||''),k0=has(views,r||'home')?(r||'home'):'home',k=k0==='trabalho'&&!W.some(x=>x.id===a)?'portfolio':k0;
if(k==='portfolio'){const g=(v,o)=>has(o,v)?v:'';Q={style:g(a,S),part:g(p.get('part'),body),size:g(p.get('size'),sizes)}}
document.body.dataset.r=k;$('app').innerHTML=views[k](a);
if(k==='portfolio')pSync();
$('nav').innerHTML=links.map(([h,l,c])=>`<a href="${h}" ${c?`class="${c}"`:''} ${(h==='#/'&&k==='home')||h==='#/'+k||(k==='trabalho'&&h==='#/portfolio')?'aria-current="page"':''}>${l}</a>`).join('');
document.title=studio.name+' — MVP';scrollTo(0,0);onScroll();fx()}
/* transição suave entre páginas (View Transitions quando houver; senão só o fade de entrada) */
function route(){const ok=matchMedia('(prefers-reduced-motion:no-preference)').matches;
if(ok&&document.startViewTransition&&$('app').innerHTML)document.startViewTransition(render);else render()}
/* entrada gradual das seções e das imagens */
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'}):null;
function fx(){document.querySelectorAll('#app section').forEach(x=>{if(io){x.classList.add('rv');io.observe(x)}})}
function imgs(){document.querySelectorAll('img:not(.ld)').forEach(i=>{if(i.complete)i.classList.add('ld')})}
document.addEventListener('load',e=>{if(e.target.tagName==='IMG')e.target.classList.add('ld')},true);
new MutationObserver(imgs).observe(document.body,{childList:true,subtree:true});
setTimeout(()=>document.querySelectorAll('img').forEach(i=>i.classList.add('ld')),4000);
addEventListener('hashchange',route);route();
$('foot').innerHTML=`<b>${studio.name}</b> · ${studio.addr} · ${studio.whatsapp} · ${studio.instagram}<br>Conteúdo e imagens demonstrativos. Dados fictícios.`;
