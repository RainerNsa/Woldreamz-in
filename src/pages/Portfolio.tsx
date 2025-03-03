
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'edtech', name: 'EdTech Solutions' },
    { id: 'ai', name: 'AI Integration' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "LearnHub Platform",
      category: "edtech",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive learning management system for educational institutions.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      client: "International Education Group",
      year: "2022"
    },
    {
      id: 2,
      title: "FinTrack Mobile App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "A financial tracking application for personal and business expense management.",
      technologies: ["React Native", "Firebase", "Redux", "Stripe"],
      client: "FinTech Innovations",
      year: "2021"
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "ai",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "An AI-powered platform for generating educational content and assessments.",
      technologies: ["Python", "TensorFlow", "GPT-3", "Django"],
      client: "EduContent Publishers",
      year: "2023"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive e-commerce solution with integrated payment processing.",
      technologies: ["Next.js", "GraphQL", "Postgres", "Stripe"],
      client: "Global Retail Solutions",
      year: "2022"
    },
    {
      id: 5,
      title: "Virtual Classroom",
      category: "edtech",
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "An interactive virtual classroom with real-time collaboration tools.",
      technologies: ["WebRTC", "Socket.io", "React", "Node.js"],
      client: "Online Learning Institute",
      year: "2023"
    },
    {
      id: 6,
      title: "Health Monitoring App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "A mobile application for monitoring health metrics and fitness goals.",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      client: "HealthTech Solutions",
      year: "2021"
    },
    {
      id: 7,
      title: "Smart Course Recommender",
      category: "ai",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "An AI system that recommends courses based on student profiles and goals.",
      technologies: ["Python", "Machine Learning", "FastAPI", "PostgreSQL"],
      client: "Global University Network",
      year: "2022"
    },
    {
      id: 8,
      title: "Corporate Website Redesign",
      category: "web",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "A complete redesign of a corporate website with improved UX and performance.",
      technologies: ["Gatsby", "Tailwind CSS", "Contentful", "Netlify"],
      client: "Enterprise Solutions Inc.",
      year: "2023"
    }
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Portfolio</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Explore our showcase of innovative projects that demonstrate our expertise in software development and educational technology.
            </p>
          </motion.div>
          
          {/* Project Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-woldreamz-blue text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-woldreamz-blue/0 group-hover:bg-woldreamz-blue/70 transition-colors duration-300 flex items-center justify-center">
                    <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue bg-woldreamz-50 px-2 py-1 rounded-full">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                  <p className="text-slate-600 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeProjectDetails}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={closeProjectDetails}
                    className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue bg-woldreamz-50 px-2 py-1 rounded-full">
                      {categories.find(c => c.id === selectedProject.category)?.name}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-1 rounded-full">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-slate-600 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Client</h3>
                    <p className="text-slate-600">{selectedProject.client}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn-primary flex items-center gap-2">
                      <ExternalLink size={16} />
                      View Live Project
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise in software development and educational technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/services" className="btn-secondary">
                Explore Our Services
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

export default Portfolio;
