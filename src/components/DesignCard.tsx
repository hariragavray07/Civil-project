import React from 'react';
import { DesignInspiration } from '../types';
import { Home, Ruler, Building, Palette } from 'lucide-react';

interface DesignCardProps {
  design: DesignInspiration;
}

export default function DesignCard({ design }: DesignCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={design.imageUrl} 
          alt={design.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-violet-800 rounded-full text-sm font-medium">
            {design.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold gradient-text mb-2">{design.title}</h3>
        <p className="text-gray-600 mb-4">{design.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Ruler className="w-4 h-4 mr-2 text-violet-500" />
            <span>{design.specs.area}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Building className="w-4 h-4 mr-2 text-violet-500" />
            <span>{design.specs.floors} Floor(s)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Palette className="w-4 h-4 mr-2 text-violet-500" />
            <span>{design.specs.style}</span>
          </div>
        </div>
      </div>
    </div>
  );
}