import { DesignInspiration } from '../types';

export const designInspirations: DesignInspiration[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    description: 'Contemporary design with clean lines and open spaces, perfect for urban living.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    category: 'Modern',
    specs: {
      area: '3500 sq ft',
      floors: 2,
      style: 'Minimalist'
    }
  },
  {
    id: '2',
    title: 'Traditional Chennai Courtyard Home',
    description: 'Classic South Indian architecture with modern amenities and natural ventilation.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    category: 'Traditional',
    specs: {
      area: '4200 sq ft',
      floors: 2,
      style: 'Indo-Colonial'
    }
  },
  {
    id: '3',
    title: 'Eco-Friendly Green Home',
    description: 'Sustainable design with solar panels and rainwater harvesting systems.',
    imageUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    category: 'Sustainable',
    specs: {
      area: '2800 sq ft',
      floors: 1,
      style: 'Green Architecture'
    }
  }
];