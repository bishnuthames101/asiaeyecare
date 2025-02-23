import React, { useState } from 'react';
import ProductFilters, { FilterState } from '../components/ProductFilters';
import SizeGuide from '../components/SizeGuide';
import { Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Sunglasses() {
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    faceShape: '',
    material: '',
    priceRange: '',
    color: '',
    brand: ''
  });

  const { addToCart } = useCart();

  const products = [
    {
      id: 'aviator-classic',
      name: "Aviator Classic",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600",
      features: ["100% UV protection", "Polarized lenses", "Metal frame"],
      material: "metal",
      color: "gold",
      brand: "rayban"
    },
    {
      id: 'wayfarer',
      name: "Wayfarer",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600",
      features: ["Classic design", "Lightweight", "Scratch-resistant"],
      material: "acetate",
      color: "black",
      brand: "rayban"
    },
    {
      id: 'sport-pro',
      name: "Sport Pro",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1604785846291-944966cb5209?auto=format&fit=crop&w=600",
      features: ["Impact resistant", "Anti-fog coating", "Flexible frame"],
      material: "plastic",
      color: "black",
      brand: "oakley"
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
          <h1 className="text-4xl font-bold">Sunglasses Collection</h1>
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
              {filteredProducts.map((sunglasses) => (
                <div key={sunglasses.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={sunglasses.image} alt={sunglasses.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{sunglasses.name}</h2>
                    <p className="text-blue-600 font-semibold mb-4">{sunglasses.price}</p>
                    <ul className="space-y-2">
                      {sunglasses.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => addToCart({
                        id: sunglasses.id,
                        name: sunglasses.name,
                        price: sunglasses.price,
                        image: sunglasses.image
                      })}
                      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
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