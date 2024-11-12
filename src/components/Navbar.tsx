import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, Heart, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "VENUES", href: "/venues" },
  { label: "SERVICES", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "PACKAGES", href: "/packages" },
  { label: "GIFTS", href: "/gifts" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95" : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-3 group">
                <Heart
                  size={24}
                  className="text-pink-400 transform group-hover:scale-110 transition-transform duration-300 fill-current"
                />
                <div className="flex flex-col items-start">
                  <span className="font-['Great_Vibes'] text-3xl text-pink-400 leading-tight group-hover:text-pink-300 transition-colors duration-300">
                    Smart Wedding
                  </span>
                  <span className="font-['Playfair_Display'] text-white text-[10px] tracking-[0.25em] uppercase">
                    Create Your Story
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-white px-6 py-2 text-[13px] font-medium tracking-wider uppercase 
                    transition-all duration-300 hover:text-pink-400 relative
                    ${location.pathname === item.href ? "text-pink-400" : ""}
                    after:content-[''] after:absolute after:w-0 after:h-0.5 
                    after:bg-pink-400 after:left-1/2 after:bottom-1 
                    after:transition-all after:duration-300 
                    hover:after:w-1/2 hover:after:left-1/4`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="ml-6 bg-white text-black px-6 py-2 text-[13px] 
                font-medium tracking-wider uppercase transition-all duration-300 
                hover:bg-white/90 flex items-center gap-2 rounded"
              >
                <BookOpen size={16} />
                BOOK NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-white hover:text-pink-500 
                transition-colors duration-200"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-great-vibes text-2xl text-pink-500">
              Smart Wedding
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 
                transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-6 py-4 
                  ${
                    location.pathname === item.href
                      ? "bg-pink-50 text-pink-500"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                  transition-colors duration-200`}
              >
                <span className="font-medium tracking-wide">{item.label}</span>
                <ChevronRight
                  size={20}
                  className={`transform transition-transform duration-200
                    ${location.pathname === item.href ? "translate-x-1" : ""}`}
                />
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
            <button
              className="w-full bg-white border-2 border-black text-black py-3 rounded-full 
              font-medium tracking-wider hover:bg-black hover:text-white
              transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BookOpen size={20} />
              <span className="uppercase text-[13px]">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
