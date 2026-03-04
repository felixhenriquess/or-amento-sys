import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const { addToCart } = useCart();

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="bg-gray-50 font-sans min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-8 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Meus Favoritos</h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">Produtos que você marcou como favoritos</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {favoriteProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
            <span className="material-icons text-6xl text-gray-200 mb-4 dark:text-gray-600">favorite_border</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">Sua lista de favoritos está vazia</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Explore nosso catálogo e adicione produtos aos seus favoritos.</p>
            <Link 
              to="/produtos"
              className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-200"
            >
              <span className="material-icons text-sm">store</span>
              Ver Produtos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group dark:bg-gray-800 dark:border-gray-700 flex flex-col"
              >
                <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-700 rounded-xl aspect-square mb-4">
                  <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10`}>
                    {product.tag}
                  </span>
                  <button
                    onClick={() => removeFavorite(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-white transition-colors z-10 shadow-sm"
                    title="Remover dos favoritos"
                  >
                    <span className="material-icons text-sm">favorite</span>
                  </button>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-2 dark:text-white transition-colors duration-300 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto space-y-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1 dark:text-gray-500">Qtd. Mínima: {product.minQty} Unidade(s)</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">A partir de</p>
                      <p className="text-xl font-black text-[#FF6B00]">{product.price} <span className="text-xs font-normal text-gray-400 dark:text-gray-500">(cada)</span></p>
                    </div>
                    
                    <button 
                      onClick={() => {
                        const price = parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: price,
                          image: product.image,
                          minQty: product.minQty
                        });
                      }}
                      className="w-full bg-[#FF6B00] text-white font-bold py-3 rounded-xl hover:bg-[#e56000] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
                    >
                      <span className="material-icons text-sm">shopping_cart</span>
                      ADD AO ORÇAMENTO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
