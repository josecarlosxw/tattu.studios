import type { Artist } from './types';

export const artists: Artist[] = [
  {
    id: 'lucas-andrade',
    isDemo: true,
    name: 'Lucas Andrade',
    bio: 'Tatuador especializado em diferentes estilos, com foco em composição, acabamento e desenvolvimento de trabalhos personalizados.',
    specialties: ['old-school', 'blackwork', 'realismo', 'neo-traditional'],
    instagram: '@lucasandrade.tattoo',
    avatar: { src: '/images/demo/artists/lucas-andrade.jpg', alt: 'Retrato demonstrativo do tatuador Lucas Andrade' },
  },
];

export const defaultArtist = artists[0];
