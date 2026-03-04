import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { toggleCart, totalItems } = useCart();
  const { theme, toggleTheme, highContrast, toggleHighContrast } = useTheme();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans dark:bg-gray-900 dark:border-b dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#FF6B00] p-2 rounded-lg text-white group-hover:bg-[#e56000] transition-colors">
             <span className="material-icons text-2xl">shopping_bag</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-gray-900 leading-none tracking-tight dark:text-white">CATÁLOGO</span>
            <span className="text-xs font-medium text-gray-500 tracking-widest uppercase dark:text-gray-400">Virtual</span>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium dark:text-gray-300 dark:hover:text-white">Home</Link>
          <Link to="/produtos" className="text-gray-600 hover:text-gray-900 font-medium dark:text-gray-300 dark:hover:text-white">Produtos</Link>
          <Link to="/favoritos" className="text-gray-600 hover:text-gray-900 font-medium dark:text-gray-300 dark:hover:text-white">Favoritos</Link>
          <Link to="/sobre" className="text-gray-600 hover:text-gray-900 font-medium dark:text-gray-300 dark:hover:text-white">Sobre</Link>
          <Link to="/contato" className="text-gray-600 hover:text-gray-900 font-medium dark:text-gray-300 dark:hover:text-white">Contato</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <div className="flex items-center bg-gray-100 rounded-full p-0.5 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-8">
            <button 
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${theme === 'light' ? 'bg-white text-[#FF6B00] shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
              title="Modo Claro"
            >
              <span className="material-icons text-[16px]">light_mode</span>
            </button>
            <button 
              onClick={() => theme === 'light' && toggleTheme()}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-gray-700 text-[#FF6B00] shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
              title="Modo Escuro"
            >
              <span className="material-icons text-[16px]">dark_mode</span>
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button 
            onClick={toggleHighContrast}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${highContrast ? 'bg-black text-yellow-400' : 'text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200'}`}
            title="Alto Contraste"
          >
             <span className="material-icons text-[20px]">contrast</span>
          </button>
          
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <span className="material-icons text-sm">chat</span>
            WhatsApp
          </a>
          
          <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-white">
            <span className="material-icons">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF6B00] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
