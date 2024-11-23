import React from 'react';
import { MaterialPrice, MaterialCategory } from '../types';
import PriceCard from './PriceCard';

interface MaterialsGridProps {
  materials: MaterialPrice[];
  category: MaterialCategory | 'All';
}

export default function MaterialsGrid({ materials, category }: MaterialsGridProps) {
  const filteredMaterials = category === 'All' 
    ? materials
    : materials.filter(m => m.material.toLowerCase().includes(category.toLowerCase()));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMaterials.map((material, index) => (
        <PriceCard key={index} data={material} />
      ))}
    </div>
  );
}