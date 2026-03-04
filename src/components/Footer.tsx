import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FF6B00] p-2 rounded-lg text-white">
                <span className="material-icons text-xl">shopping_bag</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black leading-none tracking-tight">CATÁLOGO</span>
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Virtual</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Os melhores brindes e produtos personalizados para sua empresa. Qualidade, preço justo e entrega rápida.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin'].map(icon => (
                <a key={icon} href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                  <span className="material-icons text-sm text-white">{icon === 'instagram' ? 'camera_alt' : icon === 'linkedin' ? 'work' : 'facebook'}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#FF6B00] transition-colors">Home</Link></li>
              <li><Link to="/produtos" className="hover:text-[#FF6B00] transition-colors">Produtos</Link></li>
              <li><Link to="/favoritos" className="hover:text-[#FF6B00] transition-colors">Favoritos</Link></li>
              <li><Link to="/sobre" className="hover:text-[#FF6B00] transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-[#FF6B00] transition-colors">Contato</Link></li>
              <li><Link to="/politica" className="hover:text-[#FF6B00] transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 text-gray-400">
                <span className="material-icons text-[#FF6B00] mt-1">phone</span>
                <div>
                  <p className="text-white font-medium mb-1">(19) 9 98021956</p>
                  <p className="text-xs">Seg-Sex 9h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <span className="material-icons text-[#FF6B00] mt-1">description</span>
                <div>
                  <p className="text-white font-medium mb-1">00.000.000/0000-00</p>
                  <p className="text-xs">CNPJ</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400 md:col-span-2">
                <span className="material-icons text-[#FF6B00] mt-1">location_on</span>
                <div>
                  <p className="text-white font-medium mb-1">Rua de exemplo, 123 - São Paulo/SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="bg-gray-800 px-2 py-1 rounded">v1.9</span>
            <span>&copy; 2023 - Todos os Direitos Reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
