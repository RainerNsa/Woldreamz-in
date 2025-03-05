import React from 'react';
import { Code, Lightbulb, BarChart, Database, BookOpen, Puzzle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
};

const ServiceCard = ({ icon, title, description, className, style }: ServiceCardProps) => (
  <div 
    className={cn(
      "p-8 rounded-2xl flex flex-col items-start group hover:scale-[1.02] cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10",
      className
    )}
    style={style}
  >
    <div className="p-3 rounded-xl bg-woldreamz-50 bg-opacity-50 text-woldreamz-blue mb-6 group-hover:bg-woldreamz-blue group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-300 text-sm">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and drive growth."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Digital Innovation",
      description: "Transformative digital strategies and cutting-edge solutions to help you stay ahead of the competition."
    },
    {
      icon: <BarChart size={24} />,
      title: "Data Analytics",
      description: "Comprehensive data analysis tools and services to turn your data into actionable business insights."
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services for enhanced performance and reliability."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Ed-Tech Platforms",
      description: "Innovative educational technology solutions that empower learners and transform the learning experience."
    },
    {
      icon: <Puzzle size={24} />,
      title: "AI Integration",
      description: "Seamless AI integration services to enhance your applications with intelligent features and automation."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-woldreamz-50 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services & Solutions</h2>
          <p className="text-slate-300">We offer comprehensive software solutions and educational technology services designed to meet your unique needs, desires and drive success.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="animate-fade-in bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;