import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';

export default function Home() {
  const [priceRange, setPriceRange] = useState(200);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 6;
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const filteredProducts = products.filter(product => {
    const price = parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.id.toString().includes(searchTerm);
    const matchesPrice = price <= priceRange;
    
    // AND logic: Product must have ALL selected categories
    const matchesCategory = selectedCategories.length === 0 || 
                            selectedCategories.every(cat => product.categories.includes(cat));

    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Pagination Logic
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, priceRange, selectedCategories]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const getCategoryCount = (category: string) => {
    return products.filter(p => p.categories.includes(category)).length;
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="bg-gray-50 font-sans dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-[#FF6B00] rounded-3xl overflow-hidden relative min-h-[400px] flex items-center">
          {/* Background Pattern (Simulated with dots) */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '20px 20px'
          }}></div>
          
          <div className="container mx-auto px-8 md:px-16 py-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/30">
                <span className="material-icons text-sm">local_offer</span>
                OFERTAS EXCLUSIVAS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                TEMOS AS MELHORES <br/>
                OFERTAS E <br/>
                PROMOÇÕES DO <br/>
                SEGMENTO
              </h1>
              <Link to="/produtos" className="inline-block bg-white text-[#FF6B00] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                CONHEÇA NOSSO CATÁLOGO
              </Link>
            </div>
            
            <div className="relative hidden md:flex h-full min-h-[300px] items-center justify-center">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF8533] rounded-full blur-3xl opacity-50"></div>
              
              {/* Product Card */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm">
                <div className="absolute -top-4 -right-4 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white uppercase tracking-wider">
                  Destaque
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1602143407151-11115cd4e69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Garrafa Squeeze" 
                  className="w-64 h-64 object-cover rounded-2xl mb-4 shadow-lg"
                />
                
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Garrafa Squeeze 500ml</h3>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">A partir de</p>
                      <p className="text-2xl font-black text-[#FF6B00]">R$ 2,90</p>
                    </div>
                    <span className="text-xs font-medium text-gray-400 mb-1">a unidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 dark:text-white dark:border-gray-700">
                <span className="material-icons text-[#FF6B00]">filter_list</span>
                Filtro de Produtos
              </h3>
              
              {/* Search */}
              <div className="mb-8">
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block dark:text-gray-400">Buscar</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="SKU, Nome ou Descrição" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-3 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
                  />
                  <span className="material-icons absolute right-3 top-2.5 text-gray-400 text-lg dark:text-gray-500">search</span>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">Valor</label>
                  <span className="text-sm font-bold text-[#FF6B00]">R$ 0 — R$ {priceRange}</span>
                </div>
                <div className="relative w-full h-6 flex items-center">
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    step="1"
                    value={priceRange} 
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00] z-20 dark:bg-gray-700"
                    style={{
                      background: `linear-gradient(to right, #FF6B00 0%, #FF6B00 ${(priceRange / 200) * 100}%, #e5e7eb ${(priceRange / 200) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div 
                    className="absolute w-4 h-4 bg-[#FF6B00] rounded-full pointer-events-none z-30 shadow-md transform -translate-x-1/2 top-1/2 -translate-y-1/2"
                    style={{ left: `${(priceRange / 200) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-4 block dark:text-gray-400">Filtro de Categoria</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border-2 ${selectedCategories.length === 0 ? 'border-[#FF6B00] bg-[#FF6B00]' : 'border-gray-300 dark:border-gray-600'} flex items-center justify-center transition-colors duration-300`}>
                      {selectedCategories.length === 0 && <span className="material-icons text-white text-xs">check</span>}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedCategories.length === 0} 
                      onChange={() => setSelectedCategories([])} 
                    />
                    <span className={`text-sm font-medium ${selectedCategories.length === 0 ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-300`}>Todos</span>
                  </label>
                  
                  <div className="pl-2 space-y-3 border-l-2 border-gray-100 ml-2.5 dark:border-gray-700 transition-colors duration-300">
                    {['Brindes', 'Escritório', 'Informática', 'Linha Eco'].map(category => {
                      const isSelected = selectedCategories.includes(category);
                      return (
                        <label key={category} className="flex items-center gap-3 cursor-pointer group pl-4">
                          <div className={`w-4 h-4 rounded border ${isSelected ? 'border-[#FF6B00] bg-[#FF6B00]' : 'border-gray-300 dark:border-gray-600'} flex items-center justify-center transition-colors duration-300`}>
                            {isSelected && <span className="material-icons text-white text-[10px]">check</span>}
                          </div>
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={isSelected} 
                            onChange={() => toggleCategory(category)} 
                          />
                          <span className={`text-sm ${isSelected ? 'text-[#FF6B00] font-medium' : 'text-gray-600 dark:text-gray-400'} group-hover:text-[#FF6B00] transition-colors duration-300`}>
                            {category} ({getCategoryCount(category)})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Nossos Produtos</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <span>Exibindo {filteredProducts.length > 0 ? indexOfFirstItem + 1 : 0}-{Math.min(indexOfLastItem, filteredProducts.length)} de {filteredProducts.length} produtos</span>
                
                <div className="flex items-center gap-2 border-l border-gray-200 pl-4 dark:border-gray-700">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-gray-100 text-[#FF6B00] dark:bg-gray-700' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                    title="Visualização em Grade"
                  >
                    <span className="material-icons">grid_view</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-gray-100 text-[#FF6B00] dark:bg-gray-700' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                    title="Visualização em Lista"
                  >
                    <span className="material-icons">view_list</span>
                  </button>
                </div>

                <select className="border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00] dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-colors duration-300">
                  <option>Ordenar Por: Relevância</option>
                  <option>Menor Preço</option>
                  <option>Maior Preço</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
                <span className="material-icons text-6xl text-gray-200 mb-4 dark:text-gray-600">search_off</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">Nenhum produto encontrado</h3>
                <p className="text-gray-500 dark:text-gray-400">Tente ajustar seus filtros ou buscar por outro termo.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setPriceRange(200);
                    setSelectedCategories([]);
                  }}
                  className="mt-6 text-[#FF6B00] font-bold hover:underline"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'} gap-6 mb-12`}>
                {currentProducts.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}
                  className={`bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group dark:bg-gray-800 dark:border-gray-700 cursor-pointer ${viewMode === 'list' ? 'flex flex-row gap-6 items-center' : 'flex flex-col'}`}
                >
                  <div className={`relative overflow-hidden bg-gray-50 dark:bg-gray-700 rounded-xl ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square mb-4'}`}>
                    <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10`}>
                      {product.tag}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-colors z-10 shadow-sm ${isFavorite(product.id) ? 'bg-white text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-500'}`}
                      title={isFavorite(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    >
                      <span className="material-icons text-sm">{isFavorite(product.id) ? 'favorite' : 'favorite_border'}</span>
                    </button>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className={`font-bold text-gray-900 mb-2 dark:text-white transition-colors duration-300 ${viewMode === 'list' ? 'text-xl' : 'line-clamp-2 min-h-[3rem]'}`}>
                      {product.name}
                    </h3>
                    
                    {viewMode === 'list' && (
                       <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-medium mr-2">
                             {product.categories.join(', ')}
                          </span>
                          <span>SKU: {product.id.toString().padStart(6, '0')}</span>
                       </div>
                    )}

                    <div className={`mt-auto ${viewMode === 'list' ? 'flex items-center justify-between gap-6' : 'space-y-4'}`}>
                      <div className={viewMode === 'list' ? 'text-left' : 'text-center'}>
                        <p className="text-xs text-gray-400 mb-1 dark:text-gray-500">Qtd. Mínima: {product.minQty} Unidade(s)</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">A partir de</p>
                        <p className="text-xl font-black text-[#FF6B00]">{product.price} <span className="text-xs font-normal text-gray-400 dark:text-gray-500">(cada)</span></p>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent opening modal when clicking add to cart
                          const price = parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: price,
                            image: product.image,
                            minQty: product.minQty
                          });
                        }}
                        className={`${viewMode === 'list' ? 'w-auto px-8' : 'w-full'} bg-[#FF6B00] text-white font-bold py-3 rounded-xl hover:bg-[#e56000] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200`}
                      >
                        <span className="material-icons text-sm">shopping_cart</span>
                        {viewMode === 'list' ? 'ADICIONAR' : 'ADD AO ORÇAMENTO'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 h-10 rounded-lg font-bold border border-gray-200 transition-colors duration-300 ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600' : 'bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                >
                  Anterior
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`w-10 h-10 rounded-lg font-bold shadow-lg transition-colors duration-300 ${currentPage === number ? 'bg-[#FF6B00] text-white shadow-orange-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                  >
                    {number}
                  </button>
                ))}

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 h-10 rounded-lg font-bold border border-gray-200 transition-colors duration-300 ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600' : 'bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                >
                  Próximo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
    </div>
  );
}
