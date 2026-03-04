import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white p-12 rounded-2xl shadow-lg max-w-lg w-full text-center dark:bg-gray-800 transition-colors duration-300">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 dark:bg-green-900/30">
          <span className="material-icons text-5xl text-green-600 dark:text-green-400">check_circle</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Orçamento Enviado!</h1>
        <p className="text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
          Recebemos sua solicitação com sucesso. Nossa equipe comercial entrará em contato em até 24 horas com a proposta detalhada.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left dark:bg-gray-700/50">
          <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 dark:text-white dark:border-gray-600">Resumo da Solicitação</h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Número do Pedido:</span>
              <span className="font-mono font-bold text-gray-900 dark:text-white">#ORD-2024-892</span>
            </div>
            <div className="flex justify-between">
              <span>Data:</span>
              <span className="text-gray-900 dark:text-white">24/05/2024</span>
            </div>
            <div className="flex justify-between">
              <span>Total de Itens:</span>
              <span className="text-gray-900 dark:text-white">100</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/" className="w-full bg-[#FF6B00] text-white py-3 rounded-lg font-bold hover:bg-[#e56000] transition-colors">
            Voltar ao Início
          </Link>
          <Link to="/catalogo" className="w-full text-gray-500 py-3 hover:text-[#FF6B00] font-medium transition-colors dark:text-gray-400 dark:hover:text-[#FF6B00]">
            Ver Mais Produtos
          </Link>
        </div>
      </div>
    </div>
  );
}
