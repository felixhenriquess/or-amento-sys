/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartSidebar } from './components/CartSidebar';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import About from './pages/About';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Dashboard from './pages/admin/Dashboard';
import ProductList from './pages/admin/ProductList';
import AddProduct from './pages/admin/AddProduct';
import Settings from './pages/admin/Settings';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <CartSidebar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="catalogo" element={<Home />} />
                <Route path="produtos" element={<Products />} />
                <Route path="favoritos" element={<Favorites />} />
                <Route path="produto/:id" element={<ProductDetail />} />
                <Route path="carrinho" element={<Cart />} />
                <Route path="contato" element={<Contact />} />
                <Route path="sobre" element={<About />} />
                <Route path="sucesso" element={<Success />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="produtos" element={<ProductList />} />
                <Route path="produtos/novo" element={<AddProduct />} />
                <Route path="configuracoes" element={<Settings />} />
                {/* Placeholders for other admin links */}
                <Route path="pedidos" element={<Dashboard />} />
                <Route path="clientes" element={<Dashboard />} />
              </Route>

              {/* Catch all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

