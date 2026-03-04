import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 dark:text-white">
            Nossa História
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Há mais de 10 anos transformando ideias em brindes corporativos que marcam presença e fortalecem marcas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "10+", label: "Anos de Mercado" },
            { number: "5k+", label: "Clientes Atendidos" },
            { number: "1M+", label: "Produtos Entregues" },
            { number: "98%", label: "Satisfação" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors">
              <div className="text-4xl font-black text-[#FF6B00] mb-2">{stat.number}</div>
              <div className="text-gray-500 font-medium dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6B00] rounded-full opacity-20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe trabalhando" 
                  className="rounded-2xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Nossa Missão</h2>
              <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                Acreditamos que um brinde não é apenas um objeto, mas uma ferramenta poderosa de conexão entre empresas e pessoas. Nossa missão é fornecer soluções criativas e de alta qualidade que representem fielmente a identidade de nossos clientes.
              </p>
              <ul className="space-y-4">
                {[
                  "Qualidade garantida em todos os produtos",
                  "Atendimento personalizado e consultivo",
                  "Compromisso com prazos de entrega",
                  "Sustentabilidade e responsabilidade social"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-[#FF6B00] text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Reunião de negócios" 
                  className="rounded-2xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Por que nos escolher?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                Diferente de outras empresas do mercado, nós não apenas vendemos produtos. Nós oferecemos uma consultoria completa para entender qual o melhor item para sua campanha, evento ou ação de endomarketing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                  <span className="material-icons text-[#FF6B00] mb-2">inventory_2</span>
                  <h3 className="font-bold text-gray-900 dark:text-white">Variedade</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mais de 2.000 itens no catálogo</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                  <span className="material-icons text-[#FF6B00] mb-2">local_shipping</span>
                  <h3 className="font-bold text-gray-900 dark:text-white">Logística</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Entrega para todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#1A1A1A] rounded-3xl p-12 text-center relative overflow-hidden dark:bg-black">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para impulsionar sua marca?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Fale com nossos especialistas e descubra como podemos ajudar sua empresa a se destacar.
            </p>
            <a href="/contato" className="inline-block bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-900/20">
              Solicitar Orçamento
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
