import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Technique {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export default function Techniques() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const techniques: Technique[] = [
    {
      title: 'Uñas Acrílicas',
      description:
        'Las uñas acrílicas son una mezcla de polímero líquido y monómero en polvo que se endurece al contacto con el aire. Esta técnica es ideal para crear extensiones duraderas y resistentes.',
      benefits: [
        'Extremadamente duraderas (3-4 semanas)',
        'Perfectas para uñas largas y diseños elaborados',
        'Muy resistentes a golpes y actividades diarias',
        'Amplia gama de formas y estilos',
      ],
      image: 'https://images.pexels.com/photos/1470853/pexels-photo-1470853.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Poli Gel',
      description:
        'El Poli Gel combina lo mejor del acrílico y el gel tradicional. Es más ligero, flexible y fácil de aplicar, sin el olor fuerte del acrílico. Se cura bajo lámpara UV/LED.',
      benefits: [
        'Más ligero y natural que el acrílico',
        'Sin olor fuerte durante la aplicación',
        'Mayor flexibilidad y comodidad',
        'Resistencia duradera con aspecto delicado',
      ],
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Soft Gel System',
      description:
        'Sistema de gel suave pre-diseñado que se cura rápidamente bajo lámpara. Ofrece un acabado brillante y profesional con menos tiempo de aplicación. Ideal para quienes buscan eficiencia sin sacrificar calidad.',
      benefits: [
        'Curado rápido y eficiente',
        'Acabado ultra brillante sin necesidad de pulir',
        'Menor tiempo de aplicación',
        'Perfectos para mantenimientos rápidos',
      ],
      image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Builder Gel y Base Rubber',
      description:
        'La base de goma proporciona una adherencia superior y flexibilidad, mientras que el builder gel construye una estructura fuerte. Esta combinación profesional ofrece la máxima durabilidad.',
      benefits: [
        'Máxima adherencia a la uña natural',
        'Durabilidad extrema (hasta 5 semanas)',
        'Flexibilidad que previene quiebres',
        'Técnica profesional de última generación',
      ],
      image: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFE5E5] to-[#E8F4F8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5A4A3A] mb-4">
            ¿En qué consisten nuestras técnicas?
          </h2>
          <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
            Conoce los detalles de cada técnica y elige la que mejor se adapte a tu estilo de vida
          </p>
        </div>

        <div className="space-y-4">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-medium text-[#5A4A3A]">{technique.title}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#C4A57B]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C4A57B]" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src={technique.image}
                        alt={technique.title}
                        className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
                      />
                    </div>
                    <div>
                      <p className="text-[#7A6A5A] leading-relaxed mb-6">{technique.description}</p>
                      <h4 className="text-lg font-medium text-[#5A4A3A] mb-3">Beneficios:</h4>
                      <ul className="space-y-2">
                        {technique.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#C4A57B] mr-2">✦</span>
                            <span className="text-[#8A7A6A]">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
