
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-woldreamz-blue mb-4">404</h1>
          <p className="text-2xl text-slate-600 mb-8">Oops! Page not found</p>
          <Button asChild className="btn-primary">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
