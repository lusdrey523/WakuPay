import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, ScanLine, History, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: "/dashboard", icon: Home, label: "Inicio" },
  { path: "/nosotros", icon: Info, label: "Info" },
  { path: "/dashboard#scan", icon: ScanLine, label: "Lector QR" }, // Placeholder action
  { path: "/dashboard#history", icon: History, label: "Historial" }, // Placeholder action
  { path: "/dashboard#profile", icon: UserCircle, label: "Perfil" }, // Placeholder action
];

const BottomNav = () => {
  const location = useLocation();

  const handlePlaceholderClick = (e, label) => {
    if (label === "Lector QR" || label === "Historial" || label === "Perfil") {
      e.preventDefault();
      // In a real app, you might use a toast or modal here.
      // For now, we'll just log it or use a simple alert.
      alert(`Funcionalidad "${label}" estará disponible pronto.`);
    }
  };

  return (
    <motion.footer 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 w-full bg-white dark:bg-wakupay-dark shadow-top-md z-50 md:hidden border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-5 gap-1 py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path && !item.path.includes("#");
            return (
              <Link
                key={item.label}
                to={item.path.includes("#") ? "#" : item.path}
                onClick={(e) => handlePlaceholderClick(e, item.label)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'text-wakupay-primary dark:text-wakupay-accent scale-110' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-wakupay-primary dark:hover:text-wakupay-accent'
                  }`}
              >
                <item.icon className={`h-6 w-6 mb-0.5 ${isActive ? '' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
};

export default BottomNav;