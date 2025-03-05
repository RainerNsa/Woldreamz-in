import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, MessageSquare, ChevronDown, Home, Briefcase, FolderOpen, FileText, Users, Mail } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme, isThemeLoaded } = useTheme();

  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAIChat = () => {
    // Dispatch custom event to open chat
    window.dispatchEvent(new Event('toggleAIChat'));
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { name: "About", path: "/about", icon: <Users className="h-4 w-4" /> },
    { name: "Services", path: "/services", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Portfolio", path: "/portfolio", icon: <FolderOpen className="h-4 w-4" /> },
    { name: "Blog", path: "/blog", icon: <FileText className="h-4 w-4" /> },
    { name: "Careers", path: "/careers", icon: <Users className="h-4 w-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-2 glassmorphism-navbar shadow-lg" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl md:text-2xl font-bold text-gradient-blue"
          >
            Woldreamz<span className="text-woldreamz-lightBlue">Inc.</span>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="md:hidden relative z-10 text-gray-600 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center space-x-1"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-lg flex items-center space-x-1 text-sm font-medium transition-all duration-200",
                  location.pathname === item.path
                    ? "glassmorphism-button bg-woldreamz-blue/20 text-woldreamz-blue dark:bg-woldreamz-blue/30 dark:text-woldreamz-lightBlue"
                    : "text-gray-700 dark:text-gray-200 hover:glassmorphism-button hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={toggleAIChat}
              variant="outline"
              size="sm"
              className="ml-2 gap-1 bg-gradient-to-r from-woldreamz-blue to-woldreamz-lightBlue text-white hover:from-woldreamz-darkBlue hover:to-woldreamz-blue dark:from-woldreamz-blue/90 dark:to-woldreamz-lightBlue/90 dark:hover:from-woldreamz-blue dark:hover:to-woldreamz-lightBlue rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat with AI</span>
            </Button>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.1, rotate: theme === 'dark' ? 180 : 0 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={cn(
              "ml-2 p-2 rounded-full transition-all duration-500 focus:outline-none glassmorphism-button",
              theme === 'dark' 
                ? "bg-gray-700/60 text-yellow-300 hover:bg-gray-600/80" 
                : "bg-gray-200/60 text-gray-700 hover:bg-gray-300/80"
            )}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
        </motion.nav>
      </div>

      {/* Mobile Menu (Framer Motion) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full glassmorphism-dropdown shadow-lg overflow-hidden"
          >
            <motion.nav 
              className="flex flex-col p-4 space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 p-3 rounded-lg transition-all duration-200",
                      location.pathname === item.path
                        ? "bg-woldreamz-blue/10 text-woldreamz-blue dark:bg-woldreamz-blue/20 dark:text-woldreamz-lightBlue"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                    )}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <button
                  onClick={toggleAIChat}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-white bg-gradient-to-r from-woldreamz-blue to-woldreamz-lightBlue hover:from-woldreamz-darkBlue hover:to-woldreamz-blue transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat with AI</span>
                </button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex justify-center pt-2">
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={cn(
                    "p-3 rounded-full transition-colors duration-300 focus:outline-none",
                    theme === 'dark' 
                      ? "bg-gray-700/60 text-yellow-300 hover:bg-gray-600/80" 
                      : "bg-gray-200/60 text-gray-700 hover:bg-gray-300/80"
                  )}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? 
                    <Sun className="h-5 w-5" /> : 
                    <Moon className="h-5 w-5" />
                  }
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
