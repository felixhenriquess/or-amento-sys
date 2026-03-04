import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { products } from '../data/products';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<'specs' | 'care' | 'customization'>('specs');
  const [promoPrice, setPromoPrice] = useState('');
  const [promoError, setPromoError] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Produto não encontrado</h2>
          <Link to="/" className="text-[#FF6B00] hover:underline">Voltar para o início</Link>
        </div>
      </div>
    );
  }

  const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPromoPrice(value);

    if (!value) {
      setPromoError('');
      return;
    }

    const numericPromo = parseFloat(value);
    const currentPrice = parseFloat(product.price.replace('R$', '').replace(',', '.').trim());

    if (isNaN(numericPromo) || numericPromo <= 0) {
      setPromoError('O preço deve ser um valor positivo.');
    } else if (numericPromo >= currentPrice) {
      setPromoError('O preço promocional deve ser menor que o preço original.');
    } else {
      setPromoError('');
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('R$', '').replace(',', '.').trim()),
      image: product.image,
      minQty: product.minQty
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Confira este produto: ${product.name}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (err) {
      // Ignore AbortError (user cancelled share)
      if (err instanceof Error && err.name === 'AbortError') return;

      // Fallback to clipboard for other errors or if Web Share API is not supported
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (clipboardErr) {
        console.error('Failed to copy:', clipboardErr);
      }
    }
  };

  const isProductFavorite = isFavorite(product.id);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 dark:text-gray-400">
          <Link to="/" className="hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors">Início</Link>
          <span className="material-icons text-xs">chevron_right</span>
          <Link to="/catalogo" className="hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors">Catálogo</Link>
          <span className="material-icons text-xs">chevron_right</span>
          <span className="text-gray-900 font-medium dark:text-white truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group dark:bg-gray-800">
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-bold">
                {product.tag}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#FF6B00] transition-colors dark:bg-gray-800">
                  <img 
                    src={product.image} 
                    alt={`View ${i}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#FF6B00]">{product.price}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Pedido mínimo: {product.minQty} unidades</span>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              Produto de alta qualidade, ideal para brindes corporativos e uso pessoal. 
              Personalize com sua marca e surpreenda seus clientes e parceiros.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Cor</label>
                <div className="flex gap-3">
                  {['bg-gray-800', 'bg-gray-400', 'bg-blue-600', 'bg-red-600'].map((color, i) => (
                    <button 
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} ring-2 ring-offset-2 ring-transparent hover:ring-[#FF6B00] transition-all focus:outline-none focus:ring-[#FF6B00] dark:ring-offset-gray-900`}
                      aria-label="Select color"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Quantidade</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg dark:border-gray-600">
                    <button className="px-4 py-2 hover:bg-gray-50 text-gray-600 transition-colors dark:text-gray-300 dark:hover:bg-gray-800">-</button>
                    <input 
                      type="number" 
                      value={product.minQty} 
                      className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                      readOnly
                    />
                    <button className="px-4 py-2 hover:bg-gray-50 text-gray-600 transition-colors dark:text-gray-300 dark:hover:bg-gray-800">+</button>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Disponível em estoque</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
              >
                <span className="material-icons">add_shopping_cart</span>
                Adicionar ao Orçamento
              </button>
              <button 
                onClick={() => toggleFavorite(product.id)}
                className={`px-6 py-4 border rounded-xl font-bold transition-all flex items-center gap-2 ${
                  isProductFavorite 
                    ? 'border-red-200 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <span className={`material-icons ${isProductFavorite ? 'animate-pulse' : ''}`}>
                  {isProductFavorite ? 'favorite' : 'favorite_border'}
                </span>
                Favoritar
              </button>
              <button 
                onClick={handleShare}
                className={`px-6 py-4 border rounded-xl font-bold transition-all flex items-center gap-2 ${
                  showCopied 
                    ? 'border-green-500 text-green-600 bg-green-50 dark:bg-green-900/20 dark:border-green-500 dark:text-green-400' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <span className="material-icons">
                  {showCopied ? 'check' : 'share'}
                </span>
                {showCopied ? 'Link Copiado!' : 'Compartilhar'}
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4 dark:border-gray-800">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-icons text-[#FF6B00]">verified_user</span>
                Garantia de 1 ano
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-icons text-[#FF6B00]">local_shipping</span>
                Frete Grátis acima de R$ 1000
              </div>
            </div>
          </div>
        </div>

        {/* Tabs / Details Section */}
        <div className="border-t border-gray-200 pt-16 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 dark:text-white">Detalhes do Produto</h2>
          
          {/* Promotional Price Section */}
          <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 max-w-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4 dark:text-white">Preço Promocional</h3>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
              Definir novo preço promocional
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">R$</span>
              </div>
              <input
                type="number"
                value={promoPrice}
                onChange={handlePromoChange}
                className={`pl-10 block w-full px-4 py-3 rounded-lg border ${
                  promoError 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-[#FF6B00] focus:border-[#FF6B00] dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                } shadow-sm focus:outline-none transition-colors sm:text-sm`}
                placeholder="0.00"
                step="0.01"
              />
            </div>
            
            <AnimatePresence>
              {promoError ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                  <span className="material-icons text-sm">error</span>
                  {promoError}
                </motion.div>
              ) : promoPrice && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-sm text-green-600 dark:text-green-400 flex items-center gap-1"
                >
                  <span className="material-icons text-sm">check_circle</span>
                  Preço válido! Economia de R$ {(parseFloat(product.price.replace('R$', '').replace(',', '.').trim()) - parseFloat(promoPrice)).toFixed(2).replace('.', ',')}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-4 px-6 font-medium text-sm transition-colors relative whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'specs' 
                    ? 'text-[#FF6B00]' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <span className="material-icons text-lg">description</span>
                Especificações
                {activeTab === 'specs' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`pb-4 px-6 font-medium text-sm transition-colors relative whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'care' 
                    ? 'text-[#FF6B00]' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <span className="material-icons text-lg">clean_hands</span>
                Instruções de Cuidado
                {activeTab === 'care' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('customization')}
                className={`pb-4 px-6 font-medium text-sm transition-colors relative whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'customization' 
                    ? 'text-[#FF6B00]' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <span className="material-icons text-lg">palette</span>
                Personalização
                {activeTab === 'customization' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00]"
                  />
                )}
              </button>
            </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeTab === 'specs' && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4 dark:text-white flex items-center gap-2">
                      <span className="material-icons text-[#FF6B00] text-sm">straighten</span>
                      Dimensões e Peso
                    </h3>
                    <dl className="space-y-4">
                      <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <dt className="text-gray-500 dark:text-gray-400">Dimensões</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">{product.dimensions || 'N/A'}</dd>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <dt className="text-gray-500 dark:text-gray-400">Peso</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">{product.weight || 'N/A'}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4 dark:text-white flex items-center gap-2">
                      <span className="material-icons text-[#FF6B00] text-sm">layers</span>
                      Material
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {product.material || 'Informação de material não disponível.'}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'care' && (
                <motion.div
                  key="care"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
                >
                  <h3 className="font-bold text-gray-900 mb-6 dark:text-white flex items-center gap-2">
                    <span className="material-icons text-[#FF6B00]">info</span>
                    Recomendações de Uso e Conservação
                  </h3>
                  {product.careInstructions && product.careInstructions.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.careInstructions.map((instruction, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-2 flex-shrink-0" />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">Nenhuma instrução específica disponível.</p>
                  )}
                </motion.div>
              )}

              {activeTab === 'customization' && (
                <motion.div
                  key="customization"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  <div className="bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 text-[#FF6B00] rounded-full flex items-center justify-center mb-4 dark:bg-orange-900/30">
                      <span className="material-icons">print</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 dark:text-white">Silk Screen</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ideal para cores sólidas e logotipos simples. Alta durabilidade.</p>
                  </div>
                  <div className="bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 dark:bg-blue-900/30">
                      <span className="material-icons">qr_code_2</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 dark:text-white">Laser</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Gravação permanente e elegante. Ideal para metal e madeira.</p>
                  </div>
                  <div className="bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 dark:bg-purple-900/30">
                      <span className="material-icons">palette</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 dark:text-white">UV Digital</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Impressão colorida de alta resolução. Sem limite de cores.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
