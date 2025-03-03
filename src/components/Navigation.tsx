
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onOpenChat?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChatClick = () => {
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Trigger chat assistant
    if (typeof window !== 'undefined') {
      // Create and dispatch a custom event
      const event = new CustomEvent('toggleAIChat');
      window.dispatchEvent(event);
    }
  };

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-woldreamz-blue">
            Woldreamz<span className="text-black">Inc.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "text-woldreamz-blue" 
                  : "text-foreground/90 hover:text-woldreamz-blue"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            className="btn-primary flex items-center gap-2"
            onClick={handleChatClick}
          >
            <MessageSquare size={16} />
            <span>Chat with AI</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md animate-slide-down py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "py-2 px-4 rounded-md transition-colors",
                    location.pathname === item.path 
                      ? "bg-woldreamz-50 text-woldreamz-blue" 
                      : "text-foreground/90 hover:bg-muted"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="btn-primary flex items-center justify-center gap-2 mt-2"
                onClick={handleChatClick}
              >
                <MessageSquare size={16} />
                <span>Chat with AI</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
