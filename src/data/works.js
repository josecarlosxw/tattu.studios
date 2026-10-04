/* Trabalhos do portfólio. [id, estilo, categoria, parte do corpo, tamanho, destaque] */
const WI={12:'public/images/works/work-12.webp',6:'public/images/works/work-06.webp',7:'public/images/works/work-07.webp',8:'public/images/works/work-08.webp',5:'public/images/works/work-05.webp',1:'public/images/works/work-01.webp',2:'public/images/works/work-02.webp',4:'public/images/works/work-04.webp'};
const W=[[1,'realismo','Objetos','antebraco','grande',1],[2,'fine-line','Floral','braco','grande',1],[4,'blackwork','Símbolos','antebraco','medio',1],[5,'fine-line','Personagens','antebraco','grande'],[6,'blackwork','Máscaras','costas','grande'],[7,'neo-traditional','Lettering','braco','grande',1],[8,'realismo','Religioso','costas','grande'],[12,'blackwork','Abstrato','perna','grande']]
.map(([n,style,cat,part,size,f])=>({id:'work-'+n,n,style,cat,part,size,featured:!!f,img:WI[n]}));
/* estilos que possuem ao menos um trabalho */
const hasW=id=>W.some(w=>w.style===id),SW=styles.filter(s=>hasW(s.id));
