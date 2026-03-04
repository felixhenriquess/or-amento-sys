import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, totalValue, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 flex items-center justify-center dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <span className="material-icons text-6xl text-gray-300 mb-4 dark:text-gray-600">shopping_cart</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">Seu carrinho está vazio</h2>
          <p className="text-gray-500 mb-6 dark:text-gray-400">Adicione produtos para solicitar um orçamento.</p>
          <Link to="/" className="inline-block bg-[#FF6B00] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-200">
            Voltar para a Loja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3 dark:text-white">
          <span className="material-icons text-[#FF6B00]">shopping_cart</span>
          Seu Carrinho de Orçamento
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-6 dark:bg-gray-800 transition-colors duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-gray-900 text-lg dark:text-white">{item.name}</h3>
                  <p className="text-gray-500 text-sm dark:text-gray-400">Quantidade Mínima: {item.minQty}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg dark:border-gray-600">
                    <button className="px-3 py-1 hover:bg-gray-50 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">-</button>
                    <input 
                      type="number" 
                      value={item.quantity} 
                      className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                      readOnly
                    />
                    <button className="px-3 py-1 hover:bg-gray-50 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">+</button>
                  </div>
                  <div className="text-right min-w-[100px]">
                    <p className="font-bold text-[#FF6B00]">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)} un.
                    </p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-sm sticky top-24 dark:bg-gray-800 transition-colors duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-6 dark:text-white">Resumo do Pedido</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Subtotal ({totalItems} itens)</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Personalização</span>
                  <span>A calcular</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center dark:border-gray-700">
                  <span className="font-bold text-gray-900 text-lg dark:text-white">Total Estimado</span>
                  <span className="font-bold text-[#FF6B00] text-2xl">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
                  </span>
                </div>
              </div>

              <Link to="/sucesso" className="block w-full bg-[#FF6B00] text-white text-center py-4 rounded-xl font-bold hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-200 mb-4">
                Finalizar Orçamento
              </Link>
              
              <Link to="/" className="block w-full text-center text-gray-500 hover:text-[#FF6B00] font-medium dark:text-gray-400 dark:hover:text-[#FF6B00]">
                Continuar Comprando
              </Link>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                <span className="material-icons text-sm">lock</span>
                Ambiente 100% Seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
