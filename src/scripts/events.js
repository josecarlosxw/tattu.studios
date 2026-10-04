/* Eventos globais delegados: filtros, lightbox, teclado e parallax do hero. */
document.addEventListener('change',e=>{const f=e.target.dataset.f;if(f){Q[f]=e.target.value;pSync()}});
document.addEventListener('click',e=>{const t=e.target;
if(t.closest('.lb-x')||t===lb)return lbClose();
if(t.closest('.lb-p'))return lbShow(LB.i-1);if(t.closest('.lb-n'))return lbShow(LB.i+1);
if(t.closest('.lb a')){return}
const c=t.closest('[data-k]');if(c){Q.style=c.dataset.v;pSync();return}
if(t.closest('[data-clr]')){Q={style:'',part:'',size:''};return pSync()}
if(t.closest('#cp')){const b=$('cp');(navigator.clipboard?navigator.clipboard.writeText(views._msg):Promise.reject()).then(()=>b.textContent='Copiado',()=>b.textContent='Copie manualmente acima');return}
const l=t.closest('[data-lb]');if(l&&!(t.closest('a')&&!l.matches('a'))&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();lbOpen(l)}});
document.addEventListener('keydown',e=>{
if(!lb.hidden){if(e.key==='Escape')lbClose();else if(e.key==='ArrowLeft')lbShow(LB.i-1);else if(e.key==='ArrowRight')lbShow(LB.i+1);
else if(e.key==='Tab'){const f=[...lb.querySelectorAll('button:not([hidden]),a[href]')],i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}return}
if(e.key==='Escape'&&document.body.classList.contains('menu')){setMenu(false);$('burger').focus()}
const c=e.target.closest&&e.target.closest('[data-lb][role=button]');if(c&&(e.key==='Enter'||e.key===' ')&&e.target===c){e.preventDefault();lbOpen(c)}});
/* parallax leve no hero (só mouse, respeita reduced-motion) */
if(matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)').matches){let raf=0;
addEventListener('pointermove',e=>{if(raf||document.body.dataset.r!=='home')return;raf=requestAnimationFrame(()=>{raf=0;const h=document.querySelector('.hx');if(!h)return;h.style.setProperty('--px',(e.clientX/innerWidth-.5).toFixed(3));h.style.setProperty('--py',(e.clientY/innerHeight-.5).toFixed(3))})},{passive:true})}
