/* Blocos reutilizáveis: imagem, card de trabalho, chip de filtro e bloco do artista. */
const pic=(img,alt,pos)=>`<img src="${img}" alt="${alt}" loading="lazy" style="object-position:${pos||'center'}">`;
const wAlt=w=>'Tatuagem '+S[w.style].name+' em '+body[w.part];
const wcard=w=>`<a class="card wc" href="#/trabalho/${w.id}" data-lb="w:${w.id}"><div class="art">${pic(w.img,wAlt(w))}</div><div class="meta"><b>${S[w.style].name}</b>${w.cat} · ${body[w.part]} · ${sizes[w.size]}</div></a>`;
const chip=(k,v,l)=>`<button class="chip" data-k="${k}" data-v="${v}" aria-pressed="false">${l}</button>`;
const artistBlock=()=>`<div class="ph"><div class="art" style="aspect-ratio:4/5">${pic(IMG.artist,'Tatuador trabalhando sob uma luminária','45% 70%')}</div></div><h3 style="font-size:26px;margin-bottom:8px">${artist.name}</h3><p class="mu">${artist.bio}</p><p class="tags">${artist.spec.filter(hasW).map(s=>`<a class="tag" href="#/portfolio/${s}">${S[s].name}</a>`).join('')}</p>`;
