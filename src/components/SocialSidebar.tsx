import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <div 
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-[calc(-100%+2rem)]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors"
        aria-label={isOpen ? 'Close social sidebar' : 'Open social sidebar'}
      >
        {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>

      <div className="bg-white shadow-lg rounded-r-lg p-4">
        <div className="space-y-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
              aria-label={`Visit our ${label} page`}
            >
              <Icon className="h-6 w-6" />
              <span className={`font-medium ${isOpen ? 'block' : 'hidden'}`}>
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}