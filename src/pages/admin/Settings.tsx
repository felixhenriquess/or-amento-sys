import React from 'react';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Configurações Globais</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-100">
          <nav className="flex">
            <button className="px-6 py-4 text-indigo-600 font-bold border-b-2 border-indigo-600 bg-indigo-50">Geral</button>
            <button className="px-6 py-4 text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50">Pagamentos</button>
            <button className="px-6 py-4 text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50">Envio</button>
            <button className="px-6 py-4 text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50">Notificações</button>
          </nav>
        </div>

        <div className="p-8 space-y-8">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="material-icons text-gray-400">store</span>
              Informações da Loja
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Loja</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="Catálogo Virtual" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail de Contato</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="contato@catalogovirtual.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Endereço Completo</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="Av. Paulista, 1000 - São Paulo, SP" />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* SEO */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="material-icons text-gray-400">search</span>
              SEO e Metadados
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título da Página Inicial</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="Catálogo Virtual - Brindes e Produtos Personalizados" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição Meta</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="Encontre os melhores brindes corporativos e produtos personalizados para sua empresa. Qualidade premium e entrega rápida."></textarea>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Preferences */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="material-icons text-gray-400">tune</span>
              Preferências
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Modo Manutenção</p>
                  <p className="text-xs text-gray-500">Desativar o acesso público à loja temporariamente</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                  <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Notificações por E-mail</p>
                  <p className="text-xs text-gray-500">Receber alertas de novos pedidos</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle2" id="toggle2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked/>
                  <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
