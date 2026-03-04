import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Fale Conosco</h1>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Estamos prontos para atender sua empresa. Entre em contato para cotações especiais, dúvidas sobre produtos ou parcerias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm dark:bg-gray-800 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-50 p-3 rounded-lg text-[#FF6B00] dark:bg-gray-700">
                  <span className="material-icons">phone</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 dark:text-white">Telefone</h3>
                  <p className="text-gray-600 dark:text-gray-300">(11) 99999-9999</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">Seg a Sex, 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-50 p-3 rounded-lg text-[#FF6B00] dark:bg-gray-700">
                  <span className="material-icons">email</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 dark:text-white">E-mail</h3>
                  <p className="text-gray-600 dark:text-gray-300">contato@catalogovirtual.com</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-lg text-[#FF6B00] dark:bg-gray-700">
                  <span className="material-icons">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 dark:text-white">Endereço</h3>
                  <p className="text-gray-600 dark:text-gray-300">Av. Paulista, 1000 - Bela Vista</p>
                  <p className="text-gray-600 dark:text-gray-300">São Paulo - SP, 01310-100</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] text-white p-8 rounded-xl shadow-sm relative overflow-hidden dark:bg-black">
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-4">Dúvidas Frequentes?</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Confira nossa central de ajuda para respostas rápidas sobre prazos, entregas e personalização.
                </p>
                <button className="bg-white text-[#1A1A1A] px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                  Acessar FAQ
                </button>
              </div>
              <span className="material-icons absolute -bottom-8 -right-8 text-9xl text-[#FF6B00] opacity-50">help_outline</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-8 rounded-xl shadow-sm dark:bg-gray-800 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Envie sua Mensagem</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">E-mail Corporativo</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="nome@empresa.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Assunto</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option>Orçamento</option>
                    <option>Dúvida sobre Produto</option>
                    <option>Parceria</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Mensagem</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
                <span className="material-icons">send</span>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
