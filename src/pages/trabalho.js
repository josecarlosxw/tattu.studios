/* Detalhe de um trabalho (#/trabalho/:id). */
views.trabalho=(id)=>{const w=W.find(x=>x.id===id);if(!w)return views.portfolio();
const rel=W.filter(x=>x.id!==id).map(x=>({x,s:(x.style===w.style?2:0)+(x.part===w.part?1:0)})).sort((a,b)=>b.s-a.s).slice(0,4).map(o=>o.x);
return `<section class="split"><div class="card" data-lb="w:${w.id}" tabindex="0" role="button" aria-label="Ampliar imagem"><div class="art">${pic(w.img,wAlt(w))}</div></div><div><h2>${S[w.style].name}</h2><ul class="list"><li><span>Categoria</span><b>${w.cat}</b></li><li><span>Parte do corpo</span><b>${body[w.part]}</b></li><li><span>Tamanho</span><b>${sizes[w.size]}</b></li><li><span>Artista</span><b>${artist.name}</b></li></ul><p><a class="btn solid" href="#/agendar">Agendar algo parecido</a></p></div></section>
<section><h2>Trabalhos relacionados</h2><div class="grid">${rel.map(wcard).join('')}</div></section>`};
