import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BookOpen,
  Heart,
  // Gem,
  // Gift,
  // PartyPopper,
  // Sparkles,
} from "lucide-react";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      setIsAtTop(scrollTop < 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isAtTop
          ? "bg-black/95"
          : isScrolled
          ? "bg-black/80 backdrop-blur-sm"
          : "bg-black/95"
      }`}
    >
      <div className="relative">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Ring Icon */}
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
                  <span className="text-white text-xs tracking-[0.2em] uppercase font-light">
                    Your Perfect Day
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-white px-6 py-2 text-[13px] font-medium tracking-wider uppercase 
                    transition-all duration-300 hover:text-pink-400 relative after:content-[''] 
                    after:absolute after:w-0 after:h-0.5 after:bg-pink-400 after:left-1/2 
                    after:bottom-1 after:transition-all after:duration-300 hover:after:w-1/2 
                    hover:after:left-1/4`}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="ml-6 bg-white text-black px-6 py-2 text-[13px] 
                font-medium tracking-wider uppercase transition-all duration-300 
                hover:bg-pink-600 flex items-center gap-2 rounded"
              >
                <BookOpen size={16} />
                BOOK NOW
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-pink-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-pink-400/20">
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-pink-400 block py-2 text-[13px] 
                      font-medium tracking-wider uppercase transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  className="w-full bg-pink-500 text-white py-2 text-[13px] 
                  font-medium tracking-wider uppercase mt-4 hover:bg-pink-600 
                  flex items-center justify-center gap-2 rounded transition-colors duration-300"
                >
                  <BookOpen size={16} />
                  BOOK NOW
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
