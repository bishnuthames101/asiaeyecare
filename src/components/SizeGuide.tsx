import React from 'react';
import { Ruler } from 'lucide-react';

export default function SizeGuide() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Ruler className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold">Frame Size Guide</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">How to Measure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=400&h=300" 
                alt="Lens Width" 
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="font-medium">Lens Width</p>
              <p className="text-sm text-gray-600">The horizontal width of each lens</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=400&h=300" 
                alt="Bridge Width" 
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="font-medium">Bridge Width</p>
              <p className="text-sm text-gray-600">Distance between lenses</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=400&h=300" 
                alt="Temple Length" 
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="font-medium">Temple Length</p>
              <p className="text-sm text-gray-600">Length of the arms</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Size Chart</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Size</th>
                  <th className="px-4 py-2 text-left">Lens Width</th>
                  <th className="px-4 py-2 text-left">Bridge Width</th>
                  <th className="px-4 py-2 text-left">Temple Length</th>
                  <th className="px-4 py-2 text-left">Recommended For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Small</td>
                  <td className="px-4 py-2">47-50mm</td>
                  <td className="px-4 py-2">14-16mm</td>
                  <td className="px-4 py-2">135-140mm</td>
                  <td className="px-4 py-2">Narrow faces</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Medium</td>
                  <td className="px-4 py-2">51-54mm</td>
                  <td className="px-4 py-2">16-18mm</td>
                  <td className="px-4 py-2">140-145mm</td>
                  <td className="px-4 py-2">Average faces</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Large</td>
                  <td className="px-4 py-2">55-58mm</td>
                  <td className="px-4 py-2">18-20mm</td>
                  <td className="px-4 py-2">145-150mm</td>
                  <td className="px-4 py-2">Wide faces</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Tips for Finding Your Size</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Check your current glasses for size numbers</li>
            <li>Measure your face width at the temples</li>
            <li>Consider your face shape when choosing frame size</li>
            <li>Frames should align with your eyebrows</li>
            <li>The width of the frame should match your face width</li>
          </ul>
        </div>
      </div>
    </div>
  );
}