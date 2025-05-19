
import React from 'react';
    import { Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const FooterLink = ({ to, children }) => (
      <li>
        <Link to={to} className="text-gray-400 hover:text-wakupay-primary transition-colors text-sm">
          {children}
        </Link>
      </li>
    );
    
    const SocialLink = ({ href, icon: Icon, label }) => (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={label}
        className="text-gray-400 hover:text-wakupay-primary transition-colors"
      >
        <Icon size={24} />
      </a>
    );

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-wakupay-dark text-wakupay-light py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
              <div>
                <Link to="/" className="flex items-center mb-4">
                  <img-replace src="/images/logo-footer.png" alt="WakuPay Footer Logo" className="h-8 w-auto mr-2"/>
                  <span className="text-2xl font-bold font-poppins text-white">WakuPay</span>
                </Link>
                <p className="text-xs text-gray-400">
                  Empoderando a migrantes, emprendedores y comunidades en América Latina y el Caribe. <br />
                  Lanzamiento previsto: 2030.
                </p>
              </div>
              <div>
                <p className="text-md font-semibold text-white mb-4 font-poppins">WakuPay</p>
                <ul className="space-y-2">
                  <FooterLink to="/nosotros">Sobre Nosotros</FooterLink>
                  <FooterLink to="/servicios">Servicios</FooterLink>
                  <FooterLink to="/contacto">Contacto</FooterLink>
                </ul>
              </div>
              <div>
                <p className="text-md font-semibold text-white mb-4 font-poppins">Participa</p>
                <ul className="space-y-2">
                  <FooterLink to="/colabora">Colaboradores</FooterLink>
                  <FooterLink to="/inversionistas">Inversionistas</FooterLink>
                </ul>
              </div>
              <div>
                <p className="text-md font-semibold text-white mb-4 font-poppins">Desarrolladores</p>
                <ul className="space-y-2">
                  <FooterLink to="/portal-desarrolladores">Portal de Devs</FooterLink>
                  <FooterLink to="/licencias">Licencias</FooterLink>
                </ul>
              </div>
              <div>
                <p className="text-md font-semibold text-white mb-4 font-poppins">Legal</p>
                <ul className="space-y-2">
                  <FooterLink to="/terminos-y-condiciones">Términos y Condiciones</FooterLink>
                  <FooterLink to="/politica-de-privacidad">Política de Privacidad</FooterLink>
                  <FooterLink to="/politica-de-cookies">Política de Cookies</FooterLink>
                  <FooterLink to="/centro-de-privacidad">Centro de Privacidad</FooterLink>
                </ul>
              </div>
            </div>
             <div className="flex justify-center space-x-6 mb-8">
                <SocialLink href="https://www.facebook.com/profile.php?id=61576079590989" icon={Facebook} label="Facebook de WakuPay" />
                <SocialLink href="https://www.instagram.com/wakupaylatam/" icon={Instagram} label="Instagram de WakuPay" />
                <SocialLink href="https://www.threads.net/@wakupaylatam" icon={MessageSquare} label="Threads de WakuPay" />
                <SocialLink href="https://x.com/WakuPayLatam" icon={Twitter} label="X (Twitter) de WakuPay" />
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} WakuPay. Todos los derechos reservados. Un proyecto con visión de futuro.
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
