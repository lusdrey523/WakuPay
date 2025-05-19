import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X } from 'lucide-react';

    const Header = ({ navLinks, logoUrl }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); 
      };

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 120,
          },
        }),
      };
      
      const mobileMenuVariants = {
        closed: { opacity: 0, y: "-100%" },
        open: { opacity: 1, y: "0%" , transition: { type: "tween", ease: "circOut", duration: 0.4 } },
      };

      return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-slate-900/90 backdrop-blur-lg shadow-xl' : 'py-4 sm:py-5 bg-transparent'}`}>
          <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero');}} aria-label="WakuPay Home" className="flex items-center">
                <img src={logoUrl} alt="WakuPay Logo" className="h-8 sm:h-10 w-auto mr-2"/>
                <span className="text-2xl sm:text-3xl font-bold">
                  <span className="text-primary">Waku</span><span className="text-secondary">Pay</span>
                </span>
              </a>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
              {navLinks.map((link, index) => (
                <motion.custom
                  key={link.id}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  component={Button}
                  variant="ghost"
                  className="text-sm lg:text-base text-slate-300 hover:text-primary px-3 py-2"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </motion.custom>
              ))}
               <motion.custom
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={navLinks.length}
                  component={Button} className="text-xs sm:text-sm bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity px-3 py-1 sm:px-4 sm:py-2 rounded-full ml-2">
                  Registrarse
                </motion.custom>
            </nav>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-slate-200 hover:text-primary">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-xl pb-4"
              >
                <nav className="flex flex-col items-center space-y-3 pt-4">
                  {navLinks.map((link) => (
                    <Button
                      key={link.id}
                      variant="ghost"
                      className="text-slate-200 hover:text-primary w-full py-3 text-lg"
                      onClick={() => scrollToSection(link.id)}
                    >
                      {link.label}
                    </Button>
                  ))}
                  <Button className="w-3/4 text-md bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity py-3 rounded-full mt-2">
                    Registrarse
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      );
    };

    export default Header;