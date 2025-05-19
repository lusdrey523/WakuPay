import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ChevronDown, LayoutDashboard } from 'lucide-react';
    import { Link, NavLink } from 'react-router-dom';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";

    const NavItem = ({ to, children, className }) => (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${className} ${
            isActive
              ? 'bg-wakupay-primary/20 dark:bg-wakupay-primary/30 text-wakupay-primary dark:text-wakupay-accent'
              : 'text-wakupay-dark dark:text-wakupay-light hover:bg-wakupay-primary/10 dark:hover:bg-wakupay-primary/20'
          }`
        }
      >
        {children}
      </NavLink>
    );

    const Navbar = () => {
      return (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="sticky top-0 z-50 w-full bg-wakupay-light/80 dark:bg-wakupay-dark/80 backdrop-blur-md shadow-md"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <img-replace src="/images/logo.png" alt="WakuPay Logo" className="h-10 w-auto mr-2"/>
                  <span className="text-3xl font-bold font-poppins gradient-text">
                    WakuPay
                  </span>
                </motion.div>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                <NavItem to="/servicios">Servicios</NavItem>
                <NavItem to="/nosotros">Nosotros</NavItem>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium text-wakupay-dark dark:text-wakupay-light hover:bg-wakupay-primary/10 dark:hover:bg-wakupay-primary/20 px-3 py-2">
                      Únete <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-wakupay-light dark:bg-wakupay-dark border-wakupay-primary/20 dark:border-wakupay-secondary/20">
                    <DropdownMenuItem asChild>
                      <Link to="/colabora" className="text-wakupay-dark dark:text-wakupay-light hover:!bg-wakupay-primary/10 dark:hover:!bg-wakupay-primary/20">Colaboradores</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/inversionistas" className="text-wakupay-dark dark:text-wakupay-light hover:!bg-wakupay-primary/10 dark:hover:!bg-wakupay-primary/20">Inversionistas</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavItem to="/contacto">Contacto</NavItem>
                <NavItem to="/dashboard" className="flex items-center">
                  <LayoutDashboard className="mr-1.5 h-4 w-4" />
                  Dashboard
                </NavItem>
              </div>
              <div className="flex items-center">
                 <Button asChild className="bg-gradient-to-r from-wakupay-primary to-wakupay-accent text-white font-semibold hover:opacity-90 transition-opacity duration-300">
                  <Link to="/colabora">Comenzar</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.nav>
      );
    };

    export default Navbar;