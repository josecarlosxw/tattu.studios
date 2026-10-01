import type { StyleId, TattooStyle } from './types';

const cover = (id: StyleId, alt: string) => ({ src: `/images/demo/styles/${id}.jpg`, alt });

export const styles: TattooStyle[] = [
  { id: 'old-school', name: 'Old School', description: 'Contornos grossos, paleta clássica e símbolos tradicionais.', cover: cover('old-school', 'Tatuagem old school com contorno grosso') },
  { id: 'realismo', name: 'Realismo', description: 'Sombras suaves e detalhes que reproduzem a realidade.', cover: cover('realismo', 'Tatuagem realista em preto e cinza') },
  { id: 'blackwork', name: 'Blackwork', description: 'Preenchimentos sólidos em preto e alto contraste.', cover: cover('blackwork', 'Tatuagem blackwork com grandes áreas pretas') },
  { id: 'cyber-tribal', name: 'Cyber Tribal', description: 'Formas afiadas e simétricas com estética futurista.', cover: cover('cyber-tribal', 'Tatuagem cyber tribal com linhas afiadas') },
  { id: 'fine-line', name: 'Fine Line', description: 'Traços finos e delicados, composição minimalista.', cover: cover('fine-line', 'Tatuagem fine line de traço fino') },
  { id: 'neo-traditional', name: 'Neo Traditional', description: 'Base tradicional com cores ricas e mais ilustração.', cover: cover('neo-traditional', 'Tatuagem neo traditional colorida') },
  { id: 'geometrico', name: 'Geométrico', description: 'Padrões, simetria e formas precisas.', cover: cover('geometrico', 'Tatuagem geométrica com padrões simétricos') },
  { id: 'colorido', name: 'Colorido', description: 'Paletas vibrantes e trabalhos cheios de cor.', cover: cover('colorido', 'Tatuagem colorida com tons vibrantes') },
];

export const stylesById = Object.fromEntries(styles.map((s) => [s.id, s])) as Record<StyleId, TattooStyle>;
