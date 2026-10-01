import type { FlashCategory, FlashStatus, FlashTattoo, StyleId, TattooSize } from './types';

const ARTIST = 'lucas-andrade';

function flash(n: number, styleId: StyleId, category: FlashCategory, status: FlashStatus, size: TattooSize): FlashTattoo {
  const code = String(n).padStart(3, '0');
  return {
    id: `flash-${code}`,
    isDemo: true,
    code: `Flash ${code}`,
    image: { src: `/images/demo/flash/flash-${code}.jpg`, alt: `Desenho flash demonstrativo no estilo ${styleId}` },
    styleId, category, status, size,
    artistId: ARTIST,
  };
}

export const flashes: FlashTattoo[] = [
  flash(1, 'old-school', 'animais', 'disponivel', 'medio'),
  flash(2, 'blackwork', 'simbolos', 'disponivel', 'pequeno'),
  flash(3, 'neo-traditional', 'floral', 'reservado', 'medio'),
  flash(4, 'cyber-tribal', 'abstrato', 'indisponivel', 'grande'),
  flash(5, 'old-school', 'objetos', 'disponivel', 'pequeno'),
  flash(6, 'fine-line', 'floral', 'disponivel', 'pequeno'),
  flash(7, 'colorido', 'animais', 'reservado', 'medio'),
  flash(8, 'geometrico', 'lettering', 'disponivel', 'pequeno'),
];

export const availableFlashes = flashes.filter((f) => f.status === 'disponivel');

export const flashStatusLabel: Record<FlashStatus, string> = {
  disponivel: 'Disponível',
  reservado: 'Reservado',
  indisponivel: 'Indisponível',
};
