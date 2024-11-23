import React, { useState } from 'react';
import { MaterialPrice } from '../types';
import { TrendingDown, TrendingUp, Minus, Filter } from 'lucide-react';

interface PriceComparisonProps {
  materials: MaterialPrice[];
}

export default function PriceComparison({ materials }: PriceComparisonProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...new Set(materials.map(m => m.category))];

  const getAveragePriceByType = (type: string) => {
    const filtered = materials.filter(m => m.category === type);
    if (filtered.length === 0) return 0;
    return filtered.reduce((acc, curr) => acc + curr.price, 0) / filtered.length;
  };

  const getPriceTrend = (price: number, average: number) => {
    const diff = ((price - average) / average) * 100;
    if (diff < -5) return { icon: <TrendingDown className="w-4 h-4 text-green-400" />, color: 'text-green-400' };
    if (diff > 5) return { icon: <TrendingUp className="w-4 h-4 text-red-400" />, color: 'text-red-400' };
    return { icon: <Minus className="w-4 h-4 text-gray-400" />, color: 'text-gray-400' };
  };

  const filteredMaterials = selectedCategory === 'All' 
    ? materials 
    : materials.filter(m => m.category === selectedCategory);

  return (
    <div className="dark-card rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold gradient-text">Price Comparison</h2>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-700 text-gray-200 rounded-lg px-3 py-1 text-sm border border-gray-600 focus:ring-2 focus:ring-violet-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredMaterials.map((material, index) => {
          const avgPrice = getAveragePriceByType(material.category);
          const trend = getPriceTrend(material.price, avgPrice);
          
          return (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-200">{material.material}</h3>
                  <span className="px-2 py-0.5 bg-gray-600 text-gray-300 rounded-full text-xs">
                    {material.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400">Per {material.unit}</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-200">₹{material.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Avg: ₹{Math.round(avgPrice).toLocaleString()}</p>
                </div>
                <div className={`flex items-center ${trend.color}`}>
                  {trend.icon}
                  <span className="text-sm ml-1">
                    {Math.abs(((material.price - avgPrice) / avgPrice) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}