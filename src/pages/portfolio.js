/* Portfólio (#/portfolio): filtros por estilo, parte do corpo e tamanho. */
let Q={style:'',part:'',size:''};
views.portfolio=()=>`<section><h2>Portfólio</h2><div class="flt"><div class="row" role="group" aria-label="Estilo">${chip('style','','Todos')}${SW.map(s=>chip('style',s.id,s.name)).join('')}</div><div class="bar"><select data-f="part" aria-label="Parte do corpo"><option value="">Qualquer parte do corpo</option>${Object.entries(body).map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select><select data-f="size" aria-label="Tamanho"><option value="">Qualquer tamanho</option>${Object.entries(sizes).map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select><button class="link" data-clr id="clr" hidden>Limpar filtros</button><span class="count" id="cnt" aria-live="polite"></span></div></div><div id="res"></div></section>`;
/* filtros: atualizam só a área de resultados (mantêm foco e rolagem) */
function pSync(){const l=W.filter(w=>(!Q.style||w.style===Q.style)&&(!Q.part||w.part===Q.part)&&(!Q.size||w.size===Q.size));
document.querySelectorAll('[data-k=style]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===Q.style)));
document.querySelectorAll('select[data-f]').forEach(s=>s.value=Q[s.dataset.f]);
$('cnt').textContent=l.length+(l.length===1?' trabalho':' trabalhos');$('clr').hidden=!(Q.style||Q.part||Q.size);
$('res').innerHTML=l.length?`<div class="grid">${l.map(wcard).join('')}</div>`:`<div class="empty">Nenhum trabalho com esses filtros.<br><button class="link" data-clr>Limpar filtros</button></div>`;
const p=new URLSearchParams();if(Q.part)p.set('part',Q.part);if(Q.size)p.set('size',Q.size);
history.replaceState(null,'','#/portfolio'+(Q.style?'/'+Q.style:'')+(p.toString()?'?'+p:''))}
