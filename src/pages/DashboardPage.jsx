import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, MessageCircle, ArrowUpCircle, Wallet, Send, Users, Shield, QrCode, Bitcoin, Zap, Gift, Gamepad2, Briefcase, MoreHorizontal } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const ActionButton = ({ icon: Icon, label, iconColorClass, actionFn }) => (
  <motion.div 
    whileHover={{ scale: 1.03, y: -2 }} 
    whileTap={{ scale: 0.97 }}
    className="h-full"
  >
    <Button
      variant="outline"
      className={`flex flex-col items-center justify-center h-full w-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 
                 bg-white/70 dark:bg-wakupay-dark/70 backdrop-blur-sm border-gray-200 dark:border-gray-700 
                 hover:border-wakupay-primary dark:hover:border-wakupay-primary rounded-xl`}
      onClick={actionFn}
    >
      <Icon className={`h-10 w-10 mb-2 ${iconColorClass}`} />
      <span className="text-xs sm:text-sm font-medium text-center text-wakupay-dark dark:text-wakupay-light">{label}</span>
    </Button>
  </motion.div>
);

const ServiceButton = ({ icon: Icon, label, iconColorClass, actionFn }) => (
  <motion.div 
    whileHover={{ scale: 1.03, y: -2 }} 
    whileTap={{ scale: 0.97 }}
    className="h-full"
  >
    <Button
      variant="outline"
      className={`flex flex-col items-center justify-center h-full w-full p-3 shadow-md hover:shadow-lg transition-all duration-300 
                 bg-white/70 dark:bg-wakupay-dark/70 backdrop-blur-sm border-gray-200 dark:border-gray-700 
                 hover:border-${iconColorClass}/50 dark:hover:border-${iconColorClass}/50 rounded-xl`}
      onClick={actionFn}
    >
      <Icon className={`h-8 w-8 mb-1.5 text-${iconColorClass} dark:text-${iconColorClass}`} />
      <span className="text-xs font-medium text-center text-wakupay-dark dark:text-wakupay-light">{label}</span>
    </Button>
  </motion.div>
);


const DashboardPage = () => {
  const { toast } = useToast();

  const showPlaceholderToast = (actionText) => {
    toast({
      title: "Acción Simulada",
      description: `Has interactuado con "${actionText}". Esta funcionalidad está en desarrollo.`,
      className: "bg-wakupay-primary text-white dark:bg-wakupay-accent dark:text-wakupay-dark font-poppins",
      duration: 3000,
    });
  };

  const mainActions = [
    { icon: ArrowUpCircle, label: "Recargar Saldo", iconColorClass: "text-wakupay-primary", action: () => showPlaceholderToast("Recargar Saldo") },
    { icon: Wallet, label: "Mi Billetera", iconColorClass: "text-wakupay-secondary", action: () => showPlaceholderToast("Mi Billetera") },
    { icon: Send, label: "Transferir", iconColorClass: "text-wakupay-accent", action: () => showPlaceholderToast("Transferir") },
  ];

  const primaryServices = [
    { icon: Users, label: "P2P", iconColorClass: "blue-500", action: () => showPlaceholderToast("Pagos P2P") },
    { icon: Send, label: "Remesas", iconColorClass: "green-500", action: () => showPlaceholderToast("Enviar Remesas") },
    { icon: QrCode, label: "QR Comercios", iconColorClass: "red-500", action: () => showPlaceholderToast("Pagos con QR") },
    { icon: Bitcoin, label: "Criptomonedas", iconColorClass: "yellow-600", action: () => showPlaceholderToast("Gestión de Criptomonedas") },
    { icon: Shield, label: "Seguridad", iconColorClass: "gray-600", action: () => showPlaceholderToast("Centro de Seguridad") },
  ];

  const otherServices = [
    { icon: Gift, label: "Tokens", iconColorClass: "indigo-500", action: () => showPlaceholderToast("Comprar Tokens") },
    { icon: Zap, label: "eMoney", iconColorClass: "teal-500", action: () => showPlaceholderToast("Servicios eMoney") },
    { icon: Gamepad2, label: "Juegos", iconColorClass: "orange-500", action: () => showPlaceholderToast("Plataforma de Juegos") },
    { icon: Briefcase, label: "Finanzas+", iconColorClass: "pink-500", action: () => showPlaceholderToast("Herramientas Financieras Avanzadas") },
    { icon: MoreHorizontal, label: "Ver Más", iconColorClass: "gray-500", action: () => showPlaceholderToast("Más Servicios") },
  ];


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-gradient-to-br from-wakupay-light via-slate-50 to-wakupay-secondary/10 dark:from-wakupay-dark dark:via-slate-900 dark:to-wakupay-primary/10 min-h-screen"
    >
      <header className="fixed top-0 left-0 right-0 md:relative bg-white/80 dark:bg-wakupay-dark/80 backdrop-blur-lg shadow-sm z-40 flex items-center justify-between p-4 h-20 border-b border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center space-x-3">
          <img-replace src="/images/logo.png" alt="WakuPay Logo" className="h-10 w-10 rounded-full shadow-md"/>
          <div>
            <h1 className="text-xl font-bold gradient-text font-poppins">WakuPay</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-roboto">Tu ecosistema financiero inclusivo</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-wakupay-primary/10 dark:hover:bg-wakupay-primary/20" onClick={() => showPlaceholderToast("Notificaciones")}>
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-wakupay-primary/10 dark:hover:bg-wakupay-primary/20" onClick={() => showPlaceholderToast("Mensajes")}>
            <MessageCircle className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
      </header>

      <main className="pt-24 md:pt-8 pb-28 container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="shadow-xl bg-white/80 dark:bg-wakupay-dark/70 backdrop-blur-md border-transparent hover:border-wakupay-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 font-poppins">Saldo Disponible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl md:text-4xl font-bold gradient-text text-center font-roboto">Bs. 1,234,567.89</p>
            </CardContent>
          </Card>
          <Card className="shadow-xl bg-white/80 dark:bg-wakupay-dark/70 backdrop-blur-md border-transparent hover:border-wakupay-secondary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 font-poppins">Puntos Waku</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl md:text-4xl font-bold gradient-text-alt text-center font-roboto">5,432,100</p>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {mainActions.map(action => (
            <ActionButton key={action.label} icon={action.icon} label={action.label} iconColorClass={action.iconColorClass} actionFn={action.action} />
          ))}
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center font-poppins">Servicios Principales</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {primaryServices.map(service => (
              <ServiceButton key={service.label} icon={service.icon} label={service.label} iconColorClass={service.iconColorClass} actionFn={service.action} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center font-poppins">Explora Más</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {otherServices.map(service => (
              <ServiceButton key={service.label} icon={service.icon} label={service.label} iconColorClass={service.iconColorClass} actionFn={service.action} />
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default DashboardPage;