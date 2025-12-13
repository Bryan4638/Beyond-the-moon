import { Star, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8F0] to-[#FAF3E0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-[#C4A57B] mr-2" />
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5A4A3A]">
              Bienvenida a tu santuario de belleza
            </h2>
            <Star className="w-6 h-6 text-[#C4A57B] ml-2" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE5E5] to-[#FFD6D6] rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#C4A57B]" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#5A4A3A] mb-3 text-center">Experiencia Excepcional</h3>
            <p className="text-[#8A7A6A] text-center leading-relaxed">
              Años de experiencia en técnicas avanzadas de uñas y maquillaje profesional que transforman tu look.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F7] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#C4A57B]" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#5A4A3A] mb-3 text-center">Higiene Impecable</h3>
            <p className="text-[#8A7A6A] text-center leading-relaxed">
              Estándares de esterilización y limpieza de nivel profesional para tu seguridad y tranquilidad.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3] rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-[#C4A57B]" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#5A4A3A] mb-3 text-center">Personalización Total</h3>
            <p className="text-[#8A7A6A] text-center leading-relaxed">
              Cada servicio es único y adaptado a tu estilo personal, porque tu belleza es única.
            </p>
          </div>
        </div>

        <p className="text-center text-lg text-[#7A6A5A] max-w-3xl mx-auto leading-relaxed">
          En <span className="font-medium text-[#C4A57B]">Beyond the Moon</span>, creamos una experiencia fuera de este mundo.
          Nuestro compromiso es ofrecerte un ambiente relajante donde tu belleza natural se eleva a nuevas alturas.
          Cada detalle está pensado para que te sientas especial, mimada y radiante.
        </p>
      </div>
    </section>
  );
}
