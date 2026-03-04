import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        <Link to="/admin/produtos/novo" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <span className="material-icons text-sm">add</span>
          Novo Produto
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <span className="material-icons absolute left-3 top-2.5 text-gray-400 text-sm">search</span>
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
            <option>Todas as Categorias</option>
            <option>Escritório</option>
            <option>Tecnologia</option>
            <option>Bebidas</option>
          </select>
        </div>

        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900 font-semibold uppercase text-xs">
            <tr>
              <th className="px-6 py-4 w-16">Img</th>
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Categoria</th>
              <th className="px-6 py-4">Preço</th>
              <th className="px-6 py-4">Estoque</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1602143407151-11115cd4e69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80`} alt="Product" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">Garrafa Aço Inox Premium</td>
                <td className="px-6 py-4"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">Bebidas</span></td>
                <td className="px-6 py-4 font-bold text-gray-900">R$ 45,90</td>
                <td className="px-6 py-4 text-green-600 font-medium">150 un.</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors" title="Editar">
                      <span className="material-icons text-sm">edit</span>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Excluir">
                      <span className="material-icons text-sm">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span>Mostrando 1-10 de 45 produtos</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
