import { Sparkles } from 'lucide-react';

export default function NailServices() {
  const services = [
    {
      name: 'Uñas Acrílicas',
      icon: '💅',
      description: 'Duraderas y moldeables, perfectas para extensiones largas y diseños personalizados que resisten el paso del tiempo.',
      prices: {
        manosCortas: '$45',
        manosLargas: '$55',
        piesCortas: '$40',
        piesLargas: '$50',
      },
    },
    {
      name: 'Poli Gel',
      icon: '✨',
      description: 'La evolución del acrílico y el gel. Más flexible, ligero y natural sin sacrificar resistencia.',
      prices: {
        manosCortas: '$50',
        manosLargas: '$60',
        piesCortas: '$45',
        piesLargas: '$55',
      },
    },
    {
      name: 'Soft Gel System',
      icon: '🌙',
      description: 'Gel pre-diseñado de curado rápido. Resultados impecables en menos tiempo para tu comodidad.',
      prices: {
        manosCortas: '$55',
        manosLargas: '$65',
        piesCortas: '$50',
        piesLargas: '$60',
      },
    },
    {
      name: 'Builder Gel + Base Rubber',
      icon: '💎',
      description: 'Combinación profesional para máxima adherencia y durabilidad. La técnica más resistente y flexible.',
      prices: {
        manosCortas: '$60',
        manosLargas: '$70',
        piesCortas: '$55',
        piesLargas: '$65',
      },
    },
  ];

  return (
    <section id="nail-services" className="py-20 px-4 bg-gradient-to-b from-[#FAF3E0] to-[#FFE5E5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-[#C4A57B] mr-2" />
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5A4A3A]">
              Servicios de Uñas
            </h2>
            <Sparkles className="w-6 h-6 text-[#C4A57B] ml-2" />
          </div>
          <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
            Técnicas de vanguardia para uñas perfectas que reflejan tu estilo único
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-2xl font-medium text-[#5A4A3A]">{service.name}</h3>
              </div>
              <p className="text-[#8A7A6A] mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FAF3E0] p-4 rounded-xl">
                  <p className="text-sm text-[#8A7A6A] mb-2">Manos</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-[#9A8A7A]">Cortas</span>
                    <span className="text-lg font-medium text-[#C4A57B]">{service.prices.manosCortas}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#9A8A7A]">Largas</span>
                    <span className="text-lg font-medium text-[#C4A57B]">{service.prices.manosLargas}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#FFE5E5] to-[#FFD6D6] p-4 rounded-xl">
                  <p className="text-sm text-[#8A7A6A] mb-2">Pies</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-[#9A8A7A]">Cortas</span>
                    <span className="text-lg font-medium text-[#C4A57B]">{service.prices.piesCortas}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#9A8A7A]">Largas</span>
                    <span className="text-lg font-medium text-[#C4A57B]">{service.prices.piesLargas}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-medium text-[#5A4A3A] mb-4 text-center">Servicios Adicionales</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-[#C4A57B] font-medium mb-2">Decoraciones Especiales</p>
              <p className="text-sm text-[#8A7A6A]">Desde $5 adicionales</p>
            </div>
            <div>
              <p className="text-[#C4A57B] font-medium mb-2">Mantenimiento</p>
              <p className="text-sm text-[#8A7A6A]">$30 - $40</p>
            </div>
            <div>
              <p className="text-[#C4A57B] font-medium mb-2">Removedor</p>
              <p className="text-sm text-[#8A7A6A]">$15 - $20</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
