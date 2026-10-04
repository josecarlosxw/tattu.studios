/* Lightbox: visualizador de trabalhos. */
let LB={l:[],i:0,from:null};
const lb=document.createElement('div');lb.className='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Visualizador de imagem');
lb.innerHTML='<button class="lb-x" aria-label="Fechar">✕</button><button class="lb-p" aria-label="Anterior">‹</button><button class="lb-n" aria-label="Próximo">›</button><div class="lb-img"></div><div class="lb-cap"></div>';
document.body.appendChild(lb);
function lbItem(k){const w=W.find(x=>x.id===k.split(':')[1]);return{art:pic(w.img,wAlt(w)),title:S[w.style].name,meta:`${w.cat} · ${body[w.part]} · ${sizes[w.size]}`,acts:`<a class="btn" href="#/trabalho/${w.id}">Ver detalhes</a><a class="btn solid" href="#/agendar">Agendar algo parecido</a>`}}
function lbShow(i){const n=LB.l.length;LB.i=(i+n)%n;const it=lbItem(LB.l[LB.i]);
lb.querySelector('.lb-img').innerHTML='<div class="art">'+it.art+'</div>';
lb.querySelector('.lb-cap').innerHTML=`<div><b>${it.title}</b><br><span class="mu">${it.meta}</span></div><div class="acts">${it.acts}<span class="mu">${LB.i+1} / ${n}</span></div>`;
lb.querySelector('.lb-p').hidden=lb.querySelector('.lb-n').hidden=n<2}
function lbOpen(el){const g=el.closest('.grid'),l=g?[...g.querySelectorAll('[data-lb]')]:[el];LB.l=l.map(x=>x.dataset.lb);LB.from=el;lbShow(l.indexOf(el));lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('.lb-x').focus()}
function lbClose(){if(lb.hidden)return;lb.hidden=true;document.body.style.overflow='';if(LB.from&&LB.from.isConnected)LB.from.focus()}
let tx=0;lb.addEventListener('touchstart',e=>{tx=e.changedTouches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50&&LB.l.length>1)lbShow(LB.i+(d<0?1:-1))});
