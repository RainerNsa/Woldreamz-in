
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';

const Index = () => {
  return (
    <div className="min-h-screen page-background">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Stats />
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default Index;
