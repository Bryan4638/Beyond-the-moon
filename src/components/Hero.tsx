import { Moon, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/95 via-[#FFE5E5]/90 to-[#E8F4F8]/95"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#FFD6D6]/30 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-[#D4E9F7]/30 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 rounded-full bg-[#FAF3E0]/30 blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 animate-fade-in">
          <Moon
            className="w-16 h-16 text-[#C4A57B] sm:mr-3 mb-3 sm:mb-0"
            strokeWidth={1.5}
          />
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#5A4A3A] tracking-wide text-center">
            Beyond the Moon
          </h1>
        </div>

        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-6 h-6 text-[#C4A57B] mr-2" />
          <Sparkles className="w-4 h-4 text-[#C4A57B]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-light text-[#7A6A5A] mb-6 animate-fade-in-delay-1">
          Eleva tu belleza Beyond the Moon
        </h2>

        <p className="text-lg md:text-xl text-[#8A7A6A] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
          Especialistas en uñas de alta gama y maquillaje artístico para
          momentos únicos
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-[#C4A57B] to-[#B89968] text-white px-10 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-delay-3"
        >
          Reserva tu cita
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-[#C4A57B] rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#C4A57B] rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
