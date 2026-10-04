/* Estilos de tatuagem, partes do corpo e tamanhos. */
const styles=[
['old-school','Old School','Contornos grossos, paleta clássica e símbolos tradicionais.','#c0392b','#efe4d0'],
['realismo','Realismo','Sombras suaves e detalhes que reproduzem a realidade.','#3b3536','#bfb5a5'],
['blackwork','Blackwork','Preenchimentos sólidos em preto e alto contraste.','#0d0a0b','#efe4d0'],
['cyber-tribal','Cyber Tribal','Formas afiadas e simétricas com estética futurista.','#1d2f3a','#5fd0c8'],
['fine-line','Fine Line','Traços finos e delicados, composição minimalista.','#efe4d0','#1b1214'],
['neo-traditional','Neo Traditional','Base tradicional com cores ricas e mais ilustração.','#2f6b66','#e0a63a'],
['colorido','Colorido','Paletas vibrantes e trabalhos cheios de cor.','#e0a63a','#c0392b']].map(([id,name,desc,bg,fg])=>({id,name,desc,bg,fg}));
const S=Object.fromEntries(styles.map(s=>[s.id,s]));
const body={braco:'Braço',antebraco:'Antebraço',ombro:'Ombro',peito:'Peito',costas:'Costas',costela:'Costela',perna:'Perna',panturrilha:'Panturrilha',mao:'Mão',pescoco:'Pescoço'};
const sizes={pequeno:'Pequeno',medio:'Médio',grande:'Grande'};
