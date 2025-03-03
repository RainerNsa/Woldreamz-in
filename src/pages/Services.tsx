
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import Services from '@/components/Services';
import { motion } from 'framer-motion';
import { Sparkles, Code, Lightbulb, BarChart, Database, BookOpen, Puzzle } from 'lucide-react';

const ServicesPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Services</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              We deliver cutting-edge solutions tailored to your unique challenges. 
              Explore our comprehensive suite of services designed to transform your business.
            </p>
          </motion.div>
          
          <div className="relative mb-24">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-woldreamz-50 rounded-full filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-woldreamz-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            <Services />
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
          >
            <motion.div variants={item} className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="text-woldreamz-blue mr-3" />
                Our Process
              </h2>
              <ol className="space-y-6">
                {[
                  { step: "Discovery", desc: "We learn about your business goals and challenges" },
                  { step: "Design", desc: "We create a tailored solution design" },
                  { step: "Development", desc: "Our experts build your solution with precision" },
                  { step: "Deployment", desc: "We launch and provide ongoing support" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-woldreamz-50 flex items-center justify-center text-woldreamz-blue font-bold mr-4">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg">{item.step}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
            
            <motion.div variants={item} className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                {[
                  { title: "Expertise", desc: "Industry veterans with proven track records" },
                  { title: "Innovation", desc: "Cutting-edge technology and modern solutions" },
                  { title: "Support", desc: "24/7 dedicated customer support" },
                  { title: "Value", desc: "Competitive pricing with exceptional results" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-woldreamz-50 p-2 rounded-lg text-woldreamz-blue mr-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Schedule a Consultation
              </a>
              <a href="/portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default ServicesPage;
