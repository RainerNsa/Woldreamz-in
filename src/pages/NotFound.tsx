
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Helmet>
        <title>Page Not Found | WolDreamz</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist or has been moved." />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <p className="text-2xl text-slate-600 dark:text-slate-300 mb-8">Oops! Page not found</p>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <a href="/">Return to Home</a>
            </Button>
            <Button asChild variant="outline" className="border-woldreamz-blue text-woldreamz-blue dark:border-woldreamz-lightBlue dark:text-woldreamz-lightBlue">
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
