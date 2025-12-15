import { Moon } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#2a231b] to-[#5A4A3A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Moon className="w-10 h-10 mr-3" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif font-light">
                Beyond the Moon
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Tu santuario de belleza donde cada detalle está pensado para que
              te sientas especial. Elevamos tu belleza más allá de las
              estrellas.
            </p>
            <p className="text-[#C4A57B] italic font-light">
              Tu belleza, nuestra misión. Beyond the Moon.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("nail-services")}
                  className="text-white/80 hover:text-[#C4A57B] transition-colors"
                >
                  Servicios de Uñas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("makeup-services")}
                  className="text-white/80 hover:text-[#C4A57B] transition-colors"
                >
                  Maquillaje
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-[#C4A57B] transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#C4A57B] transition-colors"
                >
                  Portafolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Calle Luna 123</li>
              <li>Cuba</li>
              <li className="pt-2">
                <a
                  href="tel:+525512345678"
                  className="hover:text-[#C4A57B] transition-colors"
                >
                  +53 55 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@beyondthemoon.com"
                  className="hover:text-[#C4A57B] transition-colors"
                >
                  hola@beyondthemoon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Beyond the Moon. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-[#C4A57B] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-[#C4A57B] transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
