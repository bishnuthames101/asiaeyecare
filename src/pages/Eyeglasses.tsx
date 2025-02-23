import React, { useState } from 'react';
import ProductFilters, { FilterState } from '../components/ProductFilters';
import SizeGuide from '../components/SizeGuide';
import { Ruler } from 'lucide-react';

export default function Eyeglasses() {
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    faceShape: '',
    material: '',
    priceRange: '',
    color: '',
    brand: ''
  });

  const products = [
    {
      name: "Modern Rectangle",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600",
      features: ["Lightweight titanium", "Anti-reflective coating", "Spring hinges"],
      material: "titanium",
      color: "silver",
      brand: "rayban"
    },
    {
      name: "Round Classic",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600",
      features: ["Acetate frame", "Blue light filter", "Adjustable nose pads"],
      material: "acetate",
      color: "tortoise",
      brand: "gucci"
    },
    {
      name: "Cat Eye",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?auto=format&fit=crop&w=600",
      features: ["Premium acetate", "Progressive ready", "Scratch-resistant coating"],
      material: "acetate",
      color: "black",
      brand: "prada"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filters.material && product.material !== filters.material) return false;
    if (filters.color && product.color !== filters.color) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    return true;
  });

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Eyeglasses Collection</h1>
          <button
            onClick={() => setShowSizeGuide(!showSizeGuide)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Ruler className="w-5 h-5" />
            Size Guide
          </button>
        </div>

        {showSizeGuide && (
          <div className="mb-8">
            <SizeGuide />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProducts.map((glasses, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={glasses.image} alt={glasses.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{glasses.name}</h2>
                    <p className="text-blue-600 font-semibold mb-4">{glasses.price}</p>
                    <ul className="space-y-2">
                      {glasses.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}