import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Uñas con diseño elegante",
    },
    {
      url: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Manicura profesional",
    },
    {
      url: "https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Uñas artísticas",
    },
    {
      url: "https://images.pexels.com/photos/1470853/pexels-photo-1470853.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Nail art detallado",
    },
    {
      url: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Diseño de uñas moderno",
    },
    {
      url: "https://images.pexels.com/photos/3997399/pexels-photo-3997399.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Manicura de lujo",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8F0] to-[#FAF3E0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5A4A3A] mb-4">
            Nuestro trabajo habla por sí mismo
          </h2>
          <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
            Una muestra de la belleza y perfección que creamos cada día
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-square group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#C4A57B]/80 via-[#FAF3E0]/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#8A7A6A] mb-6">
            Síguenos en redes sociales para ver más de nuestro trabajo diario
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-[#FFE5E5] to-[#FFD6D6] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
            >
              <span className="text-xl">
                <Instagram />
              </span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F7] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
            >
              <span className="text-xl">
                <Facebook />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
