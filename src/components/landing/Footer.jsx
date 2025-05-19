import React from 'react';
    import { Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

    const Footer = ({ logoUrl }) => {
      const currentYear = new Date().getFullYear();
      const socialLinks = [
        { icon: <Facebook size={20} />, href: "#", label: "Facebook de WakuPay" },
        { icon: <Instagram size={20} />, href: "#", label: "Instagram de WakuPay" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter de WakuPay" },
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn de WakuPay" },
        { icon: <Mail size={20} />, href: "mailto:info@wakupay.com", label: "Correo de WakuPay" },
      ];

      return (
        <footer className="py-10 sm:py-12 bg-slate-900 text-slate-400 border-t border-slate-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center md:items-start">
                 <a href="#hero" aria-label="WakuPay Home" className="flex items-center mb-3">
                    <img src={logoUrl} alt="WakuPay Logo" className="h-10 w-auto mr-2"/>
                    <span className="text-3xl font-bold">
                    <span className="text-primary">Waku</span><span className="text-secondary">Pay</span>
                    </span>
                </a>
                <p className="text-sm text-center md:text-left">
                  Finanzas sin fronteras. Tecnología con corazón.
                </p>
              </div>

              <div className="flex justify-center space-x-5 sm:space-x-6">
                {socialLinks.map(link => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    aria-label={link.label} 
                    className="text-slate-500 hover:text-primary transition-colors duration-300 transform hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              
              <div className="text-center md:text-right text-xs space-y-1">
                <p>&copy; {currentYear} WakuPay. Todos los derechos reservados.</p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-1 sm:space-y-0 sm:space-x-3">
                  <a href="#" className="hover:text-primary transition-colors"><p>Política de Privacidad</p></a>
                  <a href="#" className="hover:text-primary transition-colors"><p>Términos de Servicio</p></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;