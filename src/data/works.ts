import type { BodyPart, StyleId, TattooSize, TattooWork } from './types';

const ARTIST = 'lucas-andrade';

function work(n: number, styleId: StyleId, category: string, bodyPart: BodyPart, size: TattooSize, featured = false): TattooWork {
  const id = `work-${String(n).padStart(2, '0')}`;
  return {
    id,
    isDemo: true,
    image: { src: `/images/demo/works/${id}.jpg`, alt: `Tatuagem demonstrativa no estilo ${styleId} em ${bodyPart}` },
    styleId, category, bodyPart, size,
    artistId: ARTIST,
    featured,
  };
}

export const works: TattooWork[] = [
  work(1, 'old-school', 'Animais', 'braco', 'medio', true),
  work(2, 'realismo', 'Retratos', 'antebraco', 'grande', true),
  work(3, 'blackwork', 'Símbolos', 'costas', 'grande', true),
  work(4, 'cyber-tribal', 'Abstrato', 'ombro', 'medio', true),
  work(5, 'fine-line', 'Floral', 'costela', 'pequeno'),
  work(6, 'neo-traditional', 'Floral', 'perna', 'grande'),
  work(7, 'geometrico', 'Mandalas', 'peito', 'medio'),
  work(8, 'colorido', 'Animais', 'panturrilha', 'medio'),
  work(9, 'old-school', 'Objetos', 'mao', 'pequeno'),
  work(10, 'blackwork', 'Animais', 'antebraco', 'medio'),
  work(11, 'realismo', 'Natureza', 'braco', 'grande'),
  work(12, 'neo-traditional', 'Animais', 'pescoco', 'pequeno'),
];

export const featuredWorks = works.filter((w) => w.featured);
export const getWorkById = (id: string) => works.find((w) => w.id === id);

/** Relacionados: mesmo estilo pesa mais que mesma parte do corpo. */
export function getRelatedWorks(id: string, limit = 4): TattooWork[] {
  const current = getWorkById(id);
  if (!current) return [];
  const score = (w: TattooWork) => (w.styleId === current.styleId ? 2 : 0) + (w.bodyPart === current.bodyPart ? 1 : 0);
  return works.filter((w) => w.id !== id).sort((a, b) => score(b) - score(a)).slice(0, limit);
}
