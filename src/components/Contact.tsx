import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-[#FAF3E0] to-[#E8F4F8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5A4A3A] mb-4">
            Encuéntranos más allá de lo ordinario
          </h2>
          <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
            Estamos aquí para hacer realidad la belleza que mereces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between">
              <h3 className="text-2xl font-medium text-[#5A4A3A] mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE5E5] to-[#FFD6D6] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-[#C4A57B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#5A4A3A] mb-1">
                      Ubicación
                    </h4>
                    <p className="text-[#8A7A6A]">
                      Calle Luna 123, Colonia Estrella
                    </p>
                    <p className="text-[#8A7A6A]">Cuba, 01234</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F7] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-[#C4A57B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#5A4A3A] mb-1">
                      Teléfono
                    </h4>
                    <a
                      href="tel:+525512345678"
                      className="text-[#C4A57B] hover:underline"
                    >
                      +53 55 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-[#C4A57B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#5A4A3A] mb-1">Email</h4>
                    <a
                      href="mailto:hola@beyondthemoon.com"
                      className="text-[#C4A57B] hover:underline"
                    >
                      hola@beyondthemoon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE5E5] to-[#FFD6D6] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-6 h-6 text-[#C4A57B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#5A4A3A] mb-1">
                      Horarios
                    </h4>
                    <p className="text-[#8A7A6A]">
                      Lunes - Sábado: 10:00 AM - 8:00 PM
                    </p>
                    <p className="text-[#8A7A6A]">
                      Domingo: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#C4A57B]/20">
                <h4 className="font-medium text-[#5A4A3A] mb-4">Síguenos</h4>
                <div className="flex space-x-4">
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
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 pt-8 pb-4 shadow-lg">
            <h3 className="text-2xl font-medium text-[#5A4A3A] mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#5A4A3A] font-medium mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#C4A57B]/30 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 outline-none transition-all bg-white/50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#5A4A3A] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#C4A57B]/30 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 outline-none transition-all bg-white/50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-[#5A4A3A] font-medium mb-2"
                >
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#C4A57B]/30 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 outline-none transition-all bg-white/50"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="acrilicas">Uñas Acrílicas</option>
                  <option value="poligel">Poli Gel</option>
                  <option value="softgel">Soft Gel System</option>
                  <option value="buildergel">Builder Gel + Base Rubber</option>
                  <option value="maquillaje-boda">Maquillaje de Bodas</option>
                  <option value="maquillaje-15">Maquillaje de 15 Años</option>
                  <option value="maquillaje-fiesta">
                    Maquillaje de Fiesta
                  </option>
                  <option value="maquillaje-artistico">
                    Maquillaje Artístico
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#5A4A3A] font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#C4A57B]/30 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 outline-none transition-all bg-white/50 resize-none"
                  placeholder="Cuéntanos sobre tu evento o lo que necesitas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C4A57B] to-[#B89968] text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar consulta
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1117.4882663683265!2d-81.55335579575132!3d23.034176426551966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d2fd005ea6c645%3A0xdbb507723aa23424!2sBeyond%20the%20moon!5e0!3m2!1ses!2sus!4v1765609024291!5m2!1ses!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="grayscale-[30%] sepia-[10%]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
