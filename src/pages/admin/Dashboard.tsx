import React from 'react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Vendas Hoje</p>
            <h3 className="text-2xl font-bold text-gray-900">R$ 1.250,00</h3>
            <span className="text-xs text-green-600 font-bold flex items-center gap-1 mt-2">
              <span className="material-icons text-xs">trending_up</span> +15%
            </span>
          </div>
          <div className="bg-green-100 p-3 rounded-lg text-green-600">
            <span className="material-icons text-2xl">attach_money</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Pedidos Pendentes</p>
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
            <span className="text-xs text-orange-600 font-bold flex items-center gap-1 mt-2">
              Aguardando envio
            </span>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
            <span className="material-icons text-2xl">local_shipping</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Novos Clientes</p>
            <h3 className="text-2xl font-bold text-gray-900">5</h3>
            <span className="text-xs text-blue-600 font-bold flex items-center gap-1 mt-2">
              <span className="material-icons text-xs">trending_up</span> +2%
            </span>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
            <span className="material-icons text-2xl">person_add</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Produtos Ativos</p>
            <h3 className="text-2xl font-bold text-gray-900">145</h3>
            <span className="text-xs text-gray-400 font-bold flex items-center gap-1 mt-2">
              Em estoque
            </span>
          </div>
          <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
            <span className="material-icons text-2xl">inventory_2</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900 text-lg">Pedidos Recentes</h3>
          <button className="text-indigo-600 text-sm font-medium hover:underline">Ver Todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-900 font-semibold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Data</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-mono font-medium text-gray-900">#ORD-001</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">JS</div>
                  João Silva
                </td>
                <td className="px-6 py-4">Hoje, 14:30</td>
                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">Pendente</span></td>
                <td className="px-6 py-4 text-right font-bold text-gray-900">R$ 450,00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-mono font-medium text-gray-900">#ORD-002</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">MA</div>
                  Maria Almeida
                </td>
                <td className="px-6 py-4">Ontem, 09:15</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">Enviado</span></td>
                <td className="px-6 py-4 text-right font-bold text-gray-900">R$ 1.200,00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-mono font-medium text-gray-900">#ORD-003</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">TC</div>
                  Tech Corp
                </td>
                <td className="px-6 py-4">22/05/2024</td>
                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">Entregue</span></td>
                <td className="px-6 py-4 text-right font-bold text-gray-900">R$ 3.500,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
