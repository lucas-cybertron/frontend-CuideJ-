import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLink = [
    { label: "Início", to: "/" },
    { label: "Sobre", to: "/about" },
    { label: "Entrar", to: "/login" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Portal Turismo"
              className="w-20 h-20 object-contain"
            />
            <h1 className="text-2xl font-bold text-accent">CuideJá</h1>            
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center space-x-4">
            {navLink.slice(0, -1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors text-sm md:text-base ${
                  isActive(link.to)
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-dark/70 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link to="/login">
              <button className="bg-gradient-to-r from-light to-accent text-white px-3 py-2 md:px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                Entrar
              </button>
            </Link>
          </div>

          {/* BOTÃO HAMBÚRGUER - MOBILE */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark/70 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-md p-2"
              aria-label="Abrir menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLink.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-accent/10 text-accent"
                    : "text-dark/70 hover:bg-light/20 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
