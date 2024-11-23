import React, { useState } from 'react';
import { MaterialCategory } from './types';
import MaterialsGrid from './components/MaterialsGrid';
import { materialsData } from './data/materials';
import { designInspirations } from './data/designs';
import DesignCard from './components/DesignCard';
import PriceComparison from './components/PriceComparison';
import { Building, TrendingUp, Home, Ruler, BarChart3 } from 'lucide-react';

function App() {
  const [category, setCategory] = useState<MaterialCategory | 'All'>('All');
  const [activeTab, setActiveTab] = useState<'prices' | 'designs' | 'comparison'>('prices');

  const categories: (MaterialCategory | 'All')[] = ['All', 'Bricks', 'Sand', 'Jalli'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <header className="dark-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-violet-400" />
              <h1 className="ml-3 text-2xl font-bold gradient-text">
                Chennai Construction Hub
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-violet-400" />
              <span className="text-sm text-gray-400">Live Updates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('prices')}
            className={`pb-4 px-4 flex items-center space-x-2 border-b-2 transition-colors ${
              activeTab === 'prices'
                ? 'border-violet-400 text-violet-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <Ruler className="h-5 w-5" />
            <span>Material Prices</span>
          </button>
          <button
            onClick={() => setActiveTab('designs')}
            className={`pb-4 px-4 flex items-center space-x-2 border-b-2 transition-colors ${
              activeTab === 'designs'
                ? 'border-violet-400 text-violet-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Design Inspirations</span>
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`pb-4 px-4 flex items-center space-x-2 border-b-2 transition-colors ${
              activeTab === 'comparison'
                ? 'border-violet-400 text-violet-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <BarChart3 className="h-5 w-5" />
            <span>Price Comparison</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'prices' && (
          <>
            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${category === cat
                        ? 'bg-violet-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      } shadow-sm`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Materials Grid */}
            <MaterialsGrid materials={materialsData} category={category} />
          </>
        )}

        {activeTab === 'designs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designInspirations.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        )}

        {activeTab === 'comparison' && (
          <PriceComparison materials={materialsData} />
        )}
      </main>

      {/* Footer */}
      <footer className="dark-header mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            Prices and designs are indicative. Contact suppliers for current rates. Last updated March 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;