/* Utilidades e registro de páginas. */
const $=id=>document.getElementById(id);
const has=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const esc=s=>String(s).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const views={}; /* cada arquivo de src/pages registra sua página aqui */
