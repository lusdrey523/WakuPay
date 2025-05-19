import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings2, CheckSquare, XSquare, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch'; 
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -50 },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const CookiePreferencesPage = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    essential: true, // Siempre habilitadas y no modificables por el usuario
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    const savedAnalytics = localStorage.getItem('wakupay_cookies_analytics_consent');
    const savedMarketing = localStorage.getItem('wakupay_cookies_marketing_consent');
    const savedPersonalization = localStorage.getItem('wakupay_cookies_personalization_consent');

    setPreferences(prev => ({
      ...prev,
      analytics: savedAnalytics === 'true',
      marketing: savedMarketing === 'true',
      personalization: savedPersonalization === 'true',
    }));
  }, []);

  const handlePreferenceChange = (category) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('wakupay_cookies_analytics_consent', preferences.analytics.toString());
    localStorage.setItem('wakupay_cookies_marketing_consent', preferences.marketing.toString());
    localStorage.setItem('wakupay_cookies_personalization_consent', preferences.personalization.toString());
    // Marcar el consentimiento general como gestionado
    localStorage.setItem('wakupay_cookie_consent', 'managed'); 

    toast({
      title: "Preferencias Guardadas",
      description: "Tus preferencias de cookies han sido actualizadas.",
      className: "bg-wakupay-primary text-white",
    });
  };

  const acceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true, personalization: true });
    localStorage.setItem('wakupay_cookies_analytics_consent', 'true');
    localStorage.setItem('wakupay_cookies_marketing_consent', 'true');
    localStorage.setItem('wakupay_cookies_personalization_consent', 'true');
    localStorage.setItem('wakupay_cookie_consent', 'accepted_all');
    toast({ title: "Todas las Cookies Aceptadas", description: "Has aceptado todas las categorías de cookies.", className: "bg-wakupay-primary text-white" });
  };

  const rejectNonEssential = () => {
    setPreferences({ essential: true, analytics: false, marketing: false, personalization: false });
    localStorage.setItem('wakupay_cookies_analytics_consent', 'false');
    localStorage.setItem('wakupay_cookies_marketing_consent', 'false');
    localStorage.setItem('wakupay_cookies_personalization_consent', 'false');
    localStorage.setItem('wakupay_cookie_consent', 'rejected_non_essential');
    toast({ title: "Cookies No Esenciales Rechazadas", description: "Solo se utilizarán cookies esenciales.", className: "bg-wakupay-primary text-white" });
  };

  const cookieCategories = [
    { id: 'essential', label: 'Cookies Esenciales', description: 'Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Generalmente solo se configuran en respuesta a acciones realizadas por ti que equivalen a una solicitud de servicios, como establecer tus preferencias de privacidad, iniciar sesión o completar formularios.', icon: <CheckSquare className="text-green-500" />, disabled: true },
    { id: 'analytics', label: 'Cookies Analíticas (Próximamente)', description: 'Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los visitantes se mueven por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima.', icon: <Info className="text-blue-500" /> },
    { id: 'marketing', label: 'Cookies de Marketing (Próximamente)', description: 'Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios. No almacenan directamente información personal, sino que se basan en la identificación única de tu navegador y dispositivo de internet.', icon: <Info className="text-purple-500" /> },
    { id: 'personalization', label: 'Cookies de Personalización (Próximamente)', description: 'Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas. Si no permites estas cookies, es posible que algunos o todos estos servicios no funcionen correctamente.', icon: <Info className="text-orange-500" /> },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-16 md:py-24 bg-wakupay-light dark:bg-wakupay-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <Settings2 className="h-20 w-20 gradient-text mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Preferencias de <span className="gradient-text">Cookies</span>
          </h1>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-3xl mx-auto">
            Gestiona tus preferencias de cookies para este sitio web. WakuPay es un proyecto con lanzamiento futuro (2030), por lo que actualmente solo se utilizan cookies esenciales. Las opciones para cookies analíticas, de marketing y personalización se habilitarán a medida que desarrollemos estas funcionalidades.
          </p>
        </header>

        <Card className="max-w-3xl mx-auto shadow-2xl glassmorphism border-wakupay-primary/20 dark:border-wakupay-secondary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-wakupay-dark dark:text-wakupay-light">Administra tu Consentimiento</CardTitle>
            <CardDescription className="text-wakupay-dark/70 dark:text-wakupay-light/70">
              Puedes aceptar todas las cookies, rechazar las no esenciales o personalizar tus preferencias a continuación. Tus elecciones se guardarán para futuras visitas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {cookieCategories.map(category => (
              <div key={category.id} className={`p-4 rounded-lg flex items-start space-x-4 ${category.disabled ? 'bg-gray-100 dark:bg-gray-800 opacity-70' : 'bg-white/50 dark:bg-wakupay-dark/30'}`}>
                <div className="flex-shrink-0 pt-1">{category.icon}</div>
                <div className="flex-grow">
                  <Label htmlFor={category.id} className="text-lg font-semibold text-wakupay-dark dark:text-wakupay-light">{category.label}</Label>
                  <p className="text-sm text-wakupay-dark/70 dark:text-wakupay-light/70 mt-1">{category.description}</p>
                </div>
                <Switch
                  id={category.id}
                  checked={preferences[category.id]}
                  onCheckedChange={() => handlePreferenceChange(category.id)}
                  disabled={category.disabled || (category.id !== 'essential' && true)} 
                  aria-label={`Activar/Desactivar ${category.label}`}
                  className="data-[state=checked]:bg-wakupay-primary data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600 mt-1"
                />
              </div>
            ))}
             <p className="text-xs text-center text-wakupay-dark/60 dark:text-wakupay-light/60 pt-4">
                Nota: Las cookies analíticas, de marketing y de personalización están actualmente deshabilitadas ya que WakuPay es un proyecto en desarrollo (lanzamiento 2030). Sus controles se activarán cuando estas funcionalidades se implementen.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 pt-6 border-t border-wakupay-primary/10 dark:border-wakupay-secondary/10">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={acceptAll} className="bg-green-500 hover:bg-green-600 text-white">
                <CheckSquare className="mr-2 h-4 w-4" /> Aceptar Todas
              </Button>
              <Button onClick={rejectNonEssential} variant="destructive" className="bg-red-500 hover:bg-red-600 text-white">
                <XSquare className="mr-2 h-4 w-4" /> Rechazar No Esenciales
              </Button>
            </div>
            <Button onClick={savePreferences} className="bg-wakupay-primary hover:bg-wakupay-primary/90 text-white">
              Guardar Mis Preferencias
            </Button>
          </CardFooter>
        </Card>
        <div className="text-center mt-8">
            <Link to="/politica-de-cookies" className="text-sm text-wakupay-primary hover:underline dark:text-wakupay-accent">
                Más información sobre nuestra Política de Cookies
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePreferencesPage;