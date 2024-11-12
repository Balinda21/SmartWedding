import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Wedding Venues", href: "/venues" },
    { label: "Wedding Services", href: "/services" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Wedding Packages", href: "/packages" },
    { label: "Gift Registry", href: "/gifts" },
  ];

  const services = [
    { label: "Wedding Planning", href: "/planning" },
    { label: "Decoration Services", href: "/decoration" },
    { label: "Photography & Video", href: "/photography" },
    { label: "Catering Services", href: "/catering" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "Transportation", href: "/transport" },
  ];

  const contact = {
    address: "KG 123 St, Kigali, Rwanda",
    phone: "+250 788 123 456",
    email: "weddings@smartwedding.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get exclusive wedding tips, planning resources, and special offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full bg-white/5 border border-gray-800 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-light text-pink-400 mb-6">Smart Wedding</h4>
            <p className="text-gray-400 mb-6">
              Creating unforgettable wedding experiences. We turn your dream wedding into reality with 
              personalized service and attention to every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <span>{contact.email}</span>
              </li>
              <li className="text-gray-400 mt-4">
                <p className="font-medium text-white">Business Hours:</p>
                <p>{contact.hours}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Smart Wedding. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;