export type StyleId = 'old-school' | 'realismo' | 'blackwork' | 'cyber-tribal' | 'fine-line' | 'neo-traditional' | 'geometrico' | 'colorido';
export type BodyPart = 'braco' | 'antebraco' | 'ombro' | 'peito' | 'costas' | 'costela' | 'perna' | 'panturrilha' | 'mao' | 'pescoco';
export type TattooSize = 'pequeno' | 'medio' | 'grande';
export type FlashStatus = 'disponivel' | 'reservado' | 'indisponivel';
export type FlashCategory = 'animais' | 'simbolos' | 'floral' | 'abstrato' | 'objetos' | 'lettering';

export interface ImageAsset { src: string; alt: string }
export interface WeekdayHours { label: string; opensAt: string | null; closesAt: string | null }

export interface Studio {
  id: string; isDemo: true; name: string; description: string;
  address: { street: string; number: string; neighborhood: string; city: string; state: string; zipCode: string };
  phone: string; whatsapp: string; instagram: string; email: string;
  openingHours: WeekdayHours[];
  images: { hero: ImageAsset; about: ImageAsset; gallery: ImageAsset[] };
}
export interface Artist {
  id: string; isDemo: true; name: string; bio: string;
  specialties: StyleId[]; instagram: string; avatar: ImageAsset;
}
export interface TattooStyle { id: StyleId; name: string; description: string; cover: ImageAsset }
/** Tatuagens não têm nome: a imagem é o elemento principal. */
export interface TattooWork {
  id: string; isDemo: true; image: ImageAsset; styleId: StyleId; category: string;
  bodyPart: BodyPart; size: TattooSize; artistId: string; featured: boolean;
}
/** `code` é só identificação interna, não exibir como título. */
export interface FlashTattoo {
  id: string; isDemo: true; code: string; image: ImageAsset; styleId: StyleId;
  category: FlashCategory; status: FlashStatus; size: TattooSize; artistId: string;
}
