import React from 'react';
import { Link } from 'react-router-dom';
import { Glasses, Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Glasses className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Asia Eye Care</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/sunglasses" className="text-gray-600 hover:text-blue-600">Sunglasses</Link>
            <Link to="/eyeglasses" className="text-gray-600 hover:text-blue-600">Eyeglasses</Link>
            <Link to="/lenses" className="text-gray-600 hover:text-blue-600">Lenses</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            
            <button 
              onClick={onCartClick}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-1">Cart ({totalItems})</span>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/sunglasses" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Sunglasses</Link>
            <Link to="/eyeglasses" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Eyeglasses</Link>
            <Link to="/lenses" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Lenses</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
            <button 
              onClick={onCartClick}
              className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-1">Cart ({totalItems})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}