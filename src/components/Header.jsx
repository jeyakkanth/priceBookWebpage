import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#Home' },
    { name: 'Products', href: "#ProductListPage" },
    { name: 'Contact', href: "#Contact" },
  ];

  return (
    <header className="primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 text-xl font-bold text-white cursor-pointer">
            Price Book Calculator
          </div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-white  hover:text-gray-600 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 flex flex-col justify-center items-center">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
