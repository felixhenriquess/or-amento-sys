import React from 'react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { motion, AnimatePresence } from 'motion/react';

interface Product {
  id: number;
  name: string;
  price: string;
  minQty: number;
  image: string;
  tag: string;
  tagColor: string;
  categories: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!isOpen || !product) return null;

  const isProductFavorite = isFavorite(product.id);
  
  // Parse price string to number for cart
  const priceNumber = parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.'));

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image,
      minQty: product.minQty
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="material-icons text-gray-500 dark:text-gray-400">close</span>
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className={`absolute top-4 left-4 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                  {product.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {product.categories.map((cat) => (
                      <span key={cat} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">SKU: {product.id.toString().padStart(6, '0')}</p>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-black text-[#FF6B00] mb-1">{product.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Pedido mínimo: <span className="font-bold text-gray-900 dark:text-white">{product.minQty} unidades</span>
                  </p>
                </div>

                <div className="prose prose-sm text-gray-600 dark:text-gray-300 mb-8">
                  <p>
                    Este produto é ideal para brindes corporativos e eventos. 
                    Fabricado com materiais de alta qualidade, oferece durabilidade e excelente acabamento.
                    Personalize com sua marca e surpreenda seus clientes e colaboradores.
                  </p>
                  <ul className="mt-4 space-y-1 list-disc list-inside">
                    <li>Alta durabilidade</li>
                    <li>Acabamento premium</li>
                    <li>Ideal para personalização</li>
                    <li>Garantia de qualidade</li>
                  </ul>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#FF6B00] text-white font-bold py-4 rounded-xl hover:bg-[#e56000] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200/50"
                  >
                    <span className="material-icons">add_shopping_cart</span>
                    ADICIONAR AO ORÇAMENTO
                  </button>
                  
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`w-full py-3 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 ${
                      isProductFavorite
                        ? 'border-red-200 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className={`material-icons ${isProductFavorite ? 'animate-pulse' : ''}`}>
                      {isProductFavorite ? 'favorite' : 'favorite_border'}
                    </span>
                    {isProductFavorite ? 'REMOVER DOS FAVORITOS' : 'ADICIONAR AOS FAVORITOS'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
