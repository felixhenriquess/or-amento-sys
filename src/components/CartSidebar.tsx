import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartSidebar = () => {
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity, totalValue } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col dark:bg-gray-900 transition-colors duration-300"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                <span className="material-icons text-[#FF6B00]">shopping_cart</span>
                Seu Orçamento
              </h2>
              <button onClick={toggleCart} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <span className="material-icons">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <span className="material-icons text-6xl text-gray-200 mb-4 dark:text-gray-700">shopping_basket</span>
                  <p className="text-gray-500 dark:text-gray-400">Seu carrinho está vazio</p>
                  <button 
                    onClick={toggleCart}
                    className="mt-4 text-[#FF6B00] font-bold hover:underline"
                  >
                    Começar a comprar
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-4 last:border-0 dark:border-gray-800">
                      <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 dark:bg-gray-800">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 line-clamp-2 dark:text-white">{item.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center border border-gray-200 rounded-lg dark:border-gray-700">
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="px-2 py-1 hover:bg-gray-50 text-gray-600 transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
                                >-</button>
                                <span className="px-2 text-sm text-gray-900 font-medium min-w-[2rem] text-center dark:text-white">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-2 py-1 hover:bg-gray-50 text-gray-600 transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
                                >+</button>
                            </div>
                            <span className="font-bold text-[#FF6B00]">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
                            </span>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 mt-2 ml-auto"
                        >
                            <span className="material-icons text-xs">delete</span>
                            Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium dark:text-gray-300">Total Estimado</span>
                  <span className="text-2xl font-bold text-[#FF6B00]">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <Link 
                    to="/carrinho" 
                    onClick={toggleCart}
                    className="block w-full bg-[#FF6B00] text-white text-center py-3 rounded-lg font-bold hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-200"
                  >
                    Finalizar Orçamento
                  </Link>
                  <button 
                    onClick={toggleCart}
                    className="block w-full bg-white text-gray-700 border border-gray-200 text-center py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                  >
                    Continuar Navegando
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
