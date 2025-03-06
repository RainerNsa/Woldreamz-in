
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleConsultRequest = () => {
    toast({
      title: "Consultation Request",
      description: "Thank you! We'll contact you soon to schedule a consultation.",
      duration: 3000,
    });
  };

  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-woldreamz-100 rounded-full filter blur-3xl opacity-40 animate-float dark:bg-woldreamz-600 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-woldreamz-50 rounded-full filter blur-3xl opacity-30 dark:bg-woldreamz-700 dark:opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className={`inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm mb-6 transition-all duration-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <span className="flex h-2 w-2 rounded-full bg-woldreamz-blue"></span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-200">Leading Software Solutions Provider</span>
          </div>
          
          {/* Main Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-200 text-slate-800 dark:text-slate-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <span className="block">Ingenious Solutions.</span>
            <span className="gradient-text">Limitless Possibilities.</span>
          </h1>
          
          {/* Subheading */}
          <p 
            className={`text-lg md:text-xl text-slate-600 max-w-3xl mb-8 transition-all duration-700 delay-300 dark:text-slate-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            We create innovative software solutions and educational technology platforms that transform businesses and empower learners in the digital age.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <Button asChild className="btn-primary">
              <Link to="/services">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button onClick={handleConsultRequest} className="btn-secondary">
              Consult With Us
            </Button>
          </div>
          
          {/* Stats/Social Proof */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <div className="glass-card p-6">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-amber-500 mr-1" fill="#f59e0b" />
                <Star className="h-5 w-5 text-amber-500 mr-1" fill="#f59e0b" />
                <Star className="h-5 w-5 text-amber-500 mr-1" fill="#f59e0b" />
                <Star className="h-5 w-5 text-amber-500 mr-1" fill="#f59e0b" />
                <Star className="h-5 w-5 text-amber-500" fill="#f59e0b" />
              </div>
              <p className="text-sm text-slate-600 italic dark:text-slate-300">"Woldreamz transformed our operations with innovative software solutions."</p>
              <p className="text-xs font-medium text-woldreamz-blue mt-2">— TechCorp CEO</p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-3xl font-bold text-woldreamz-blue mb-1">300+</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Projects Delivered Successfully</p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-3xl font-bold text-woldreamz-blue mb-1">98%</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
