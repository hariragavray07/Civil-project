export interface MaterialPrice {
  material: string;
  unit: string;
  price: number;
  supplier?: string;
  location?: string;
  lastUpdated: string;
  category: string;
}

export type MaterialCategory = 'Bricks' | 'Sand' | 'Jalli';

export interface DesignInspiration {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Modern' | 'Traditional' | 'Contemporary' | 'Sustainable';
  specs: {
    area: string;
    floors: number;
    style: string;
  };
}