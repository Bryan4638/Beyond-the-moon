import {
  Heart,
  PartyPopper,
  Palette,
  Sparkles,
  Camera,
  Star,
} from "lucide-react";

export default function MakeupServices() {
  const services = [
    {
      icon: Heart,
      title: "Bodas",
      description: "Maquillaje de ensueño para tu día especial",
      styles: [
        "Natural y romántico",
        "Glamuroso y elegante",
        "Totalmente personalizado",
      ],
      color: "from-[#FFE5E5] to-[#FFD6D6]",
    },
    {
      icon: Sparkles,
      title: "Fiestas de 15 Años",
      description: "Radiante y juvenil para tu celebración",
      styles: [
        "Fresco y luminoso",
        "Moderno y vibrante",
        "Dulce y sofisticado",
      ],
      color: "from-[#E8F4F8] to-[#D4E9F7]",
    },
    {
      icon: PartyPopper,
      title: "Fiestas Casuales",
      description: "Looks versátiles para cualquier ocasión",
      styles: ["Casual pero impecable", "Noche de gala", "Eventos sociales"],
      color: "from-[#FAF3E0] to-[#F5E6D3]",
    },
    {
      icon: Palette,
      title: "Maquillaje Artístico",
      description: "Creatividad sin límites para eventos especiales",
      styles: [
        "Diseños temáticos",
        "Editorial y fashion",
        "Efectos especiales",
      ],
      color: "from-[#FFF8F0] to-[#FAF3E0]",
    },
  ];

  return (
    <section
      id="makeup-services"
      className="py-20 px-4 bg-gradient-to-b from-[#E8F4F8] to-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5A4A3A] mb-4">
            Maquillaje para iluminar tu momento especial
          </h2>
          <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
            Transformamos tu belleza natural en una obra maestra que refleja tu
            esencia única
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-10 h-10 text-[#C4A57B]" />
                </div>
                <h3 className="text-2xl font-medium text-[#5A4A3A] mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-[#8A7A6A] mb-4 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.styles.map((style, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-[#7A6A5A]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C4A57B] rounded-full mr-2"></span>
                      {style}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#C4A57B] to-[#B89968] rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-serif font-light text-white mb-4">
            ¿Lista para brillar?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cada look es diseñado exclusivamente para ti, considerando tu
            estilo, tono de piel y la ocasión especial. Usamos productos de alta
            gama para resultados duraderos y fotografía perfecta.
          </p>
          <button className="bg-white text-[#C4A57B] px-8 py-4 rounded-full font-medium hover:bg-[#FFF8F0] transition-all duration-300 hover:scale-105 shadow-lg">
            Ver portafolio
          </button>
        </div>

        <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-medium text-[#5A4A3A] mb-6 text-center">
            Servicios incluidos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <Star className="w-10 h-10 text-[#C4A57B]" />
              </div>
              <h4 className="font-medium text-[#5A4A3A] mb-2">
                Preparación de piel
              </h4>
              <p className="text-sm text-[#8A7A6A]">
                Limpieza profunda e hidratación pre-maquillaje
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chess-queen-icon lucide-chess-queen w-10 h-10 text-[#C4A57B]"
                >
                  <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                  <path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" />
                  <path d="m20 9-3 9" />
                  <path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" />
                  <path d="M7 18 4 9" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="20" cy="7" r="2" />
                  <circle cx="4" cy="7" r="2" />
                </svg>
              </div>
              <h4 className="font-medium text-[#5A4A3A] mb-2">
                Productos premium
              </h4>
              <p className="text-sm text-[#8A7A6A]">
                Marcas de lujo para acabado profesional
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#C4A57B]" />
              </div>
              <h4 className="font-medium text-[#5A4A3A] mb-2">Photo-ready</h4>
              <p className="text-sm text-[#8A7A6A]">
                Duración de hasta 12 horas, perfecto para fotos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
