import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from '@/hooks/use-theme';
import { Helmet } from 'react-helmet-async';
import { QuickReply } from '@/components/QuickReply';

const ProjectDetailsModal = lazy(() => import('@/components/ProjectDetailsModal'));

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { theme } = useTheme();
  
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
      year: "2022",
      url: "https://example.com/learnhub"
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
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    console.log('Project viewed:', project.title);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const handleProjectLinkClick = (url, projectTitle) => {
    toast({
      title: "Opening project",
      description: `Redirecting to ${projectTitle}`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickFilterClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Helmet>
        <title>Our Portfolio | WolDreamz - Software Solutions</title>
        <meta name="description" content="Explore our showcase of innovative projects that demonstrate our expertise in software development and educational technology." />
        <meta property="og:title" content="Portfolio | WolDreamz" />
        <meta property="og:description" content="Innovative software development projects by WolDreamz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://woldreamz.com/portfolio" />
        <link rel="canonical" href="https://woldreamz.com/portfolio" />
      </Helmet>

      <Navigation />
      
      <main className="pt-24 pb-16" id="main-content">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text" aria-label="Our Portfolio">Our Portfolio</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg">
              Explore our showcase of innovative projects that demonstrate our expertise in software development and educational technology.
            </p>
          </motion.div>
          
          <div className="mb-6 flex justify-center flex-wrap gap-2">
            <p className="text-slate-600 dark:text-slate-300 w-full text-center mb-2">Quick filters:</p>
            {categories.map((category) => (
              <QuickReply
                key={category.id}
                text={category.name}
                onClick={() => handleQuickFilterClick(category.id)}
                darkMode={theme === 'dark'}
              />
            ))}
          </div>
          
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
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                }`}
                aria-pressed={selectedCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {isLoading ? (
                Array(6).fill(0).map((_, index) => (
                  <div key={index} className="glass-card rounded-2xl overflow-hidden">
                    <Skeleton className="h-56 w-full" />
                    <div className="p-6">
                      <Skeleton className="h-4 w-20 mb-3" />
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))
              ) : (
                filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-2xl overflow-hidden group"
                    onClick={() => openProjectDetails(project)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openProjectDetails(project)}
                    role="button"
                    aria-label={`View ${project.title} project details`}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} - Project preview`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-woldreamz-blue/0 group-hover:bg-woldreamz-blue/70 transition-colors duration-300 flex items-center justify-center">
                        <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue dark:text-woldreamz-lightBlue bg-woldreamz-50 dark:bg-slate-700/40 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                      <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
          
          <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"><p className="text-white">Loading...</p></div>}>
            {selectedProject && (
              <ProjectDetailsModal 
                project={selectedProject}
                categories={categories}
                onClose={closeProjectDetails}
                onLinkClick={handleProjectLinkClick}
              />
            )}
          </Suspense>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Ready to Start Your Project?</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
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
