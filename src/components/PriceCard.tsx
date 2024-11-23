import React from 'react';
import { MaterialPrice } from '../types';
import { Building2, MapPin, Calendar } from 'lucide-react';

interface PriceCardProps {
  data: MaterialPrice;
}

export default function PriceCard({ data }: PriceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold gradient-text">{data.material}</h3>
        <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-800 rounded-full text-sm font-medium">
          ₹{data.price.toLocaleString()}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">Per {data.unit}</p>
      
      <div className="space-y-2">
        {data.supplier && (
          <div className="flex items-center text-gray-600">
            <Building2 className="w-4 h-4 mr-2 text-violet-500" />
            <span>{data.supplier}</span>
          </div>
        )}
        
        {data.location && (
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-violet-500" />
            <span>{data.location}</span>
          </div>
        )}
        
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-2 text-violet-500" />
          <span>Updated: {data.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}