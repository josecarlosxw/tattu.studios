import type { Studio } from './types';

export const studio: Studio = {
  id: 'studio-demo-001',
  isDemo: true,
  name: 'Black Ink Studio',
  description: 'Estúdio especializado em diferentes estilos de tatuagem, com foco em arte autoral, atendimento personalizado e um ambiente confortável para cada cliente.',
  address: { street: 'Rua das Artes', number: '245', neighborhood: 'Vila Madalena', city: 'São Paulo', state: 'SP', zipCode: '05435-000' },
  phone: '(11) 99999-9999',
  whatsapp: '(11) 99999-9999',
  instagram: '@blackinkstudio',
  email: 'contato@blackinkstudio.example',
  openingHours: [
    { label: 'Segunda a sexta', opensAt: '10:00', closesAt: '20:00' },
    { label: 'Sábado', opensAt: '10:00', closesAt: '18:00' },
    { label: 'Domingo', opensAt: null, closesAt: null },
  ],
  images: {
    hero: { src: '/images/demo/studio/hero.jpg', alt: 'Interior escuro de estúdio de tatuagem com iluminação pontual' },
    about: { src: '/images/demo/studio/about.jpg', alt: 'Bancada com máquinas de tatuagem e tintas' },
    gallery: [
      { src: '/images/demo/studio/gallery-01.jpg', alt: 'Recepção do estúdio com decoração dark' },
      { src: '/images/demo/studio/gallery-02.jpg', alt: 'Detalhe de máquinas de tatuagem' },
      { src: '/images/demo/studio/gallery-03.jpg', alt: 'Parede com flash tattoos emolduradas' },
      { src: '/images/demo/studio/gallery-04.jpg', alt: 'Maca de atendimento e iluminação de trabalho' },
    ],
  },
};
