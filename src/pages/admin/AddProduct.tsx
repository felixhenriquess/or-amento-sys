import React, { useState } from 'react';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    promotionalPrice: '',
    stock: '',
    sku: '',
    category: '',
    status: 'Ativo'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'O nome do produto é obrigatório';
    }

    const price = parseFloat(formData.price.replace(',', '.'));
    if (!formData.price) {
      newErrors.price = 'O preço é obrigatório';
    } else if (isNaN(price) || price <= 0) {
      newErrors.price = 'O preço deve ser um valor positivo';
    }

    if (formData.promotionalPrice) {
      const promoPrice = parseFloat(formData.promotionalPrice.replace(',', '.'));
      if (isNaN(promoPrice) || promoPrice < 0) {
        newErrors.promotionalPrice = 'Preço promocional inválido';
      } else if (!isNaN(price) && promoPrice >= price) {
        newErrors.promotionalPrice = 'O preço promocional deve ser menor que o preço original';
      }
    }

    const stock = parseInt(formData.stock);
    if (!formData.stock) {
      newErrors.stock = 'O estoque é obrigatório';
    } else if (isNaN(stock) || stock < 0) {
      newErrors.stock = 'O estoque não pode ser negativo';
    }

    if (!formData.category || formData.category === '') {
      newErrors.category = 'Selecione uma categoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      // Aqui seria a chamada para a API
      console.log('Produto válido:', formData);
      alert('Produto salvo com sucesso!');
    } else {
      alert('Por favor, corrija os erros no formulário.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Adicionar Novo Produto</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium">
            Cancelar
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-bold shadow-lg shadow-indigo-200"
          >
            Salvar Produto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Informações Básicas</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="Ex: Garrafa Térmica Premium" 
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição Completa</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Descreva os detalhes do produto..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Preço e Estoque</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preço Unitário (R$) *</label>
                <input 
                  type="number" 
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className={`w-full px-4 py-2 border ${errors.price ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="0,00" 
                />
                {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preço Promocional (R$)</label>
                <input 
                  type="number" 
                  name="promotionalPrice"
                  value={formData.promotionalPrice}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className={`w-full px-4 py-2 border ${errors.promotionalPrice ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="0,00" 
                />
                {errors.promotionalPrice && <p className="mt-1 text-sm text-red-500">{errors.promotionalPrice}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estoque Atual *</label>
                <input 
                  type="number" 
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-4 py-2 border ${errors.stock ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                  placeholder="0" 
                />
                {errors.stock && <p className="mt-1 text-sm text-red-500">{errors.stock}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                <input 
                  type="text" 
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" 
                  placeholder="COD-123" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Mídia</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="material-icons text-gray-400 text-4xl mb-2">cloud_upload</span>
              <p className="text-sm text-gray-500 font-medium">Arraste imagens ou clique para upload</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG até 5MB</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
                 <img src="https://images.unsplash.com/photo-1602143407151-11115cd4e69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Preview" className="w-full h-full object-cover" />
                 <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="material-icons text-xs block">close</span>
                 </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Organização</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoria *</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.category ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white transition-all`}
                >
                  <option value="">Selecione...</option>
                  <option value="Escritório">Escritório</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white transition-all"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Rascunho">Rascunho</option>
                  <option value="Sem Estoque">Sem Estoque</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
