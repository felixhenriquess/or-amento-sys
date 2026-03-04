import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white';
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-indigo-800">
          <span className="material-icons text-indigo-400 text-3xl">admin_panel_settings</span>
          <span className="text-xl font-bold tracking-tight">Admin Panel</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
          <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin')}`}>
            <span className="material-icons">dashboard</span>
            <span className="font-medium">Visão Geral</span>
          </Link>
          <Link to="/admin/produtos" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/produtos')}`}>
            <span className="material-icons">inventory_2</span>
            <span className="font-medium">Produtos</span>
          </Link>
          <Link to="/admin/produtos/novo" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/produtos/novo')}`}>
            <span className="material-icons">add_circle</span>
            <span className="font-medium">Novo Produto</span>
          </Link>
          <Link to="/admin/pedidos" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/pedidos')}`}>
            <span className="material-icons">shopping_bag</span>
            <span className="font-medium">Pedidos</span>
            <span className="ml-auto bg-indigo-600 text-xs font-bold px-2 py-1 rounded-full">3</span>
          </Link>
          <Link to="/admin/clientes" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/clientes')}`}>
            <span className="material-icons">people</span>
            <span className="font-medium">Clientes</span>
          </Link>
          <div className="pt-4 mt-4 border-t border-indigo-800">
            <Link to="/admin/configuracoes" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/configuracoes')}`}>
              <span className="material-icons">settings</span>
              <span className="font-medium">Configurações</span>
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-indigo-800">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-800 transition-colors cursor-pointer">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="User" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-indigo-300">admin@loja.com</p>
            </div>
            <span className="material-icons ml-auto text-indigo-400">logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm sticky top-0 z-10 px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {location.pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors relative">
              <span className="material-icons">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <Link to="/" className="text-sm text-indigo-600 font-medium hover:underline flex items-center gap-1">
              Ver Loja <span className="material-icons text-sm">open_in_new</span>
            </Link>
          </div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
