import React from 'react';
import { Filter } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  filters: FilterState;
}

export interface FilterState {
  faceShape: string;
  material: string;
  priceRange: string;
  color: string;
  brand: string;
}

export default function ProductFilters({ onFilterChange, filters }: FilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Face Shape</label>
          <select
            value={filters.faceShape}
            onChange={(e) => onFilterChange({ ...filters, faceShape: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Shapes</option>
            <option value="round">Round</option>
            <option value="oval">Oval</option>
            <option value="square">Square</option>
            <option value="heart">Heart</option>
            <option value="diamond">Diamond</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
          <select
            value={filters.material}
            onChange={(e) => onFilterChange({ ...filters, material: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Materials</option>
            <option value="metal">Metal</option>
            <option value="acetate">Acetate</option>
            <option value="titanium">Titanium</option>
            <option value="plastic">Plastic</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <select
            value={filters.priceRange}
            onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Prices</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-300">$200 - $300</option>
            <option value="300+">$300+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
          <select
            value={filters.color}
            onChange={(e) => onFilterChange({ ...filters, color: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Colors</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="tortoise">Tortoise</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
          <select
            value={filters.brand}
            onChange={(e) => onFilterChange({ ...filters, brand: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Brands</option>
            <option value="rayban">Ray-Ban</option>
            <option value="oakley">Oakley</option>
            <option value="gucci">Gucci</option>
            <option value="prada">Prada</option>
            <option value="tomford">Tom Ford</option>
          </select>
        </div>
      </div>
    </div>
  );
}