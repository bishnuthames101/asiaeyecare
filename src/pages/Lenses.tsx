import React from 'react';

export default function Lenses() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Lenses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Daily Disposable",
              price: "$30/box",
              image: "https://images.unsplash.com/photo-1587400988341-0263a5d37a6f?auto=format&fit=crop&w=600",
              features: ["Fresh lens every day", "No cleaning required", "Perfect for occasional wear"]
            },
            {
              name: "Monthly Disposable",
              price: "$45/box",
              image: "https://images.unsplash.com/photo-1591375275624-c2f9daafadb9?auto=format&fit=crop&w=600",
              features: ["Durable material", "Cost-effective", "Includes cleaning kit"]
            },
            {
              name: "Color Lenses",
              price: "$35/box",
              image: "https://images.unsplash.com/photo-1586944176523-c86976b42432?auto=format&fit=crop&w=600",
              features: ["Natural colors", "UV protection", "Breathable material"]
            }
          ].map((lens, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={lens.image} alt={lens.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{lens.name}</h2>
                <p className="text-blue-600 font-semibold mb-4">{lens.price}</p>
                <ul className="space-y-2">
                  {lens.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}