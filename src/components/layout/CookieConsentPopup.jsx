import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, ShieldCheck, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsentPopup = ({ onAccept, onDecline }) => {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-[200] bg-wakupay-dark/90 dark:bg-black/90 backdrop-blur-md shadow-t-2xl p-4 md:p-6 text-wakupay-light"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <Cookie className="h-10 w-10 text-wakupay-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold font-poppins">Tu Privacidad es Importante</h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Algunas son esenciales para el funcionamiento, mientras que otras (que planeamos implementar para nuestro lanzamiento en 2030) nos ayudarán a analizar el tráfico y personalizar contenido. Puedes aceptar todas, rechazar las no esenciales o configurar tus preferencias.
              Consulta nuestra <Link to="/politica-de-cookies" className="underline hover:text-wakupay-accent">Política de Cookies</Link>.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
          <Button
            onClick={onAccept}
            className="w-full sm:w-auto bg-wakupay-primary hover:bg-wakupay-primary/80 text-white font-semibold"
            size="lg"
          >
            <ShieldCheck className="mr-2 h-5 w-5" /> Aceptar Todas
          </Button>
          <Button
            onClick={onDecline}
            variant="outline"
            className="w-full sm:w-auto border-wakupay-secondary text-wakupay-secondary hover:bg-wakupay-secondary/10 hover:text-wakupay-secondary font-semibold"
            size="lg"
          >
            Rechazar No Esenciales
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full sm:w-auto text-gray-300 hover:bg-gray-700/50 hover:text-white font-semibold"
            size="lg"
          >
            <Link to="/preferencias-de-cookies">
              <Settings className="mr-2 h-5 w-5" /> Preferencias
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsentPopup;