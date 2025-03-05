
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  year: string;
  url?: string;
}

interface Category {
  id: string;
  name: string;
}

interface ProjectDetailsModalProps {
  project: Project;
  categories: Category[];
  onClose: () => void;
  onLinkClick: (url: string, projectTitle: string) => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ 
  project, 
  categories, 
  onClose, 
  onLinkClick 
}) => {
  // Handle click on the backdrop (outside modal content)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white dark:bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue dark:text-woldreamz-lightBlue bg-woldreamz-50 dark:bg-slate-700/40 px-2 py-1 rounded-full">
              {categories.find(c => c.id === project.category)?.name}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
              {project.year}
            </span>
          </div>
          <h2 id="modal-title" className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2 dark:text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2 dark:text-white">Client</h3>
            <p className="text-slate-600 dark:text-slate-300">{project.client}</p>
          </div>
          
          <div className="flex justify-end">
            {project.url ? (
              <button 
                className="btn-primary flex items-center gap-2"
                onClick={() => onLinkClick(project.url!, project.title)}
                aria-label={`View ${project.title} live project`}
              >
                <ExternalLink size={16} />
                View Live Project
              </button>
            ) : (
              <button className="btn-secondary flex items-center gap-2" disabled>
                <ExternalLink size={16} />
                Project Not Live
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsModal;
