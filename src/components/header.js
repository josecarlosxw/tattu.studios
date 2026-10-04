/* Cabeçalho: links, menu mobile e estado de rolagem. */
const links=[['#/','Início'],['#/portfolio','Portfólio'],['#/estudio','Estúdio'],['#/agendar','Agendar','m']];
function setMenu(o){document.body.classList.toggle('menu',o);const b=$('burger');b.setAttribute('aria-expanded',String(o));b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')}
function onScroll(){$('top').classList.toggle('solid',scrollY>40)}
addEventListener('scroll',onScroll,{passive:true});
$('burger').addEventListener('click',()=>setMenu(!document.body.classList.contains('menu')));
$('nav').addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
