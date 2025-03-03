
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Filter, ChevronDown, ChevronUp, X, Check } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [expandedJob, setExpandedJob] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'education', name: 'Education' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ];
  
  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'newyork', name: 'New York' },
    { id: 'sanfrancisco', name: 'San Francisco' },
    { id: 'london', name: 'London' },
    { id: 'bangalore', name: 'Bangalore' }
  ];
  
  const jobTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'fulltime', name: 'Full-time' },
    { id: 'parttime', name: 'Part-time' },
    { id: 'contract', name: 'Contract' },
    { id: 'internship', name: 'Internship' }
  ];
  
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "engineering",
      location: "remote",
      type: "fulltime",
      posted: "2 days ago",
      description: "We are seeking an experienced React developer to join our team and help build innovative web applications for our clients. You will be responsible for developing and implementing user interface components using React.js concepts and workflows.",
      responsibilities: [
        "Build efficient, reusable frontend components and libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance across devices and browsers",
        "Coordinate with the rest of the team to ensure seamless integration with backend APIs"
      ],
      requirements: [
        "5+ years of professional software development experience",
        "3+ years of experience with React.js and modern JavaScript features",
        "Proficiency in CSS, HTML, and responsive design",
        "Experience with state management libraries (Redux, MobX, etc.)",
        "Strong understanding of RESTful APIs and GraphQL",
        "Bachelor's degree in Computer Science or related field"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible vacation policy",
        "Remote work options",
        "Professional development budget"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "sanfrancisco",
      type: "fulltime",
      posted: "1 week ago",
      description: "We are looking for a talented UX/UI Designer to create amazing user experiences for our educational technology products. The ideal candidate should have a keen eye for design, a passion for solving complex user problems, and experience with user research and usability testing.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements, user feedback, and application insights",
        "Design user flows, wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing to validate design decisions",
        "Collaborate with product managers and developers to ensure design implementation"
      ],
      requirements: [
        "3+ years of UX/UI design experience for web and mobile applications",
        "Strong portfolio showcasing design thinking and execution",
        "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
        "Experience with user research methodologies",
        "Bachelor's degree in Design, HCI, or related field"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible vacation policy",
        "Modern office in downtown San Francisco",
        "Professional development budget"
      ]
    },
    {
      id: 3,
      title: "Educational Content Developer",
      department: "education",
      location: "newyork",
      type: "fulltime",
      posted: "3 days ago",
      description: "We are seeking an Educational Content Developer to create engaging and effective learning materials for our educational technology platforms. The ideal candidate will have experience in curriculum development, instructional design, and a passion for education.",
      responsibilities: [
        "Develop educational content for various subjects and grade levels",
        "Create interactive learning materials and assessments",
        "Work with subject matter experts to ensure content accuracy",
        "Align content with educational standards and learning objectives"
      ],
      requirements: [
        "3+ years of experience in curriculum development or instructional design",
        "Strong writing and editing skills",
        "Knowledge of educational standards and assessment methods",
        "Experience with e-learning platforms and authoring tools",
        "Bachelor's degree in Education, Instructional Design, or related field"
      ],
      benefits: [
        "Competitive salary and benefits package",
        "Health, dental, and vision insurance",
        "Flexible vacation policy",
        "Modern office in Midtown Manhattan",
        "Professional development opportunities"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "product",
      location: "london",
      type: "fulltime",
      posted: "5 days ago",
      description: "We are looking for a Data Scientist to analyze educational data and develop machine learning models to enhance our adaptive learning platforms. The ideal candidate will have experience with statistical analysis, machine learning, and a passion for improving educational outcomes.",
      responsibilities: [
        "Analyze large datasets to extract insights and patterns",
        "Develop machine learning models to personalize learning experiences",
        "Create visualizations and reports to communicate findings",
        "Collaborate with product teams to implement data-driven features"
      ],
      requirements: [
        "3+ years of experience in data science or machine learning",
        "Proficiency in Python, R, or similar programming languages",
        "Experience with data visualization and machine learning libraries",
        "Knowledge of statistical methods and experimental design",
        "Master's or PhD in Computer Science, Statistics, or related field"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health insurance and pension plan",
        "Flexible working arrangements",
        "Modern office in central London",
        "Continuous learning opportunities"
      ]
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "marketing",
      location: "remote",
      type: "fulltime",
      posted: "1 week ago",
      description: "We are seeking a Marketing Manager to develop and implement marketing strategies for our educational technology products. The ideal candidate will have experience in digital marketing, product marketing, and a passion for education.",
      responsibilities: [
        "Develop and execute marketing strategies and campaigns",
        "Manage digital marketing channels and social media presence",
        "Create compelling content for various marketing channels",
        "Analyze marketing metrics and optimize campaigns for performance"
      ],
      requirements: [
        "5+ years of experience in marketing, preferably in tech or education",
        "Strong understanding of digital marketing channels and tactics",
        "Experience with marketing automation and analytics tools",
        "Excellent communication and project management skills",
        "Bachelor's degree in Marketing, Business, or related field"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health, dental, and vision insurance",
        "Flexible remote work policy",
        "Professional development budget",
        "Team retreats and events"
      ]
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "engineering",
      location: "bangalore",
      type: "fulltime",
      posted: "4 days ago",
      description: "We are looking for a DevOps Engineer to help build and maintain our infrastructure and deployment pipelines. The ideal candidate will have experience with cloud platforms, containerization, and CI/CD pipelines.",
      responsibilities: [
        "Design and implement CI/CD pipelines for application deployment",
        "Manage cloud infrastructure on AWS, GCP, or Azure",
        "Implement monitoring, logging, and alerting solutions",
        "Collaborate with development teams to improve deployment processes"
      ],
      requirements: [
        "3+ years of experience in DevOps or similar role",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Experience with CI/CD tools (Jenkins, GitLab CI, etc.)",
        "Bachelor's degree in Computer Science or related field"
      ],
      benefits: [
        "Competitive salary and stock options",
        "Health insurance and retirement benefits",
        "Flexible working hours",
        "Modern office in Bangalore tech park",
        "Professional growth opportunities"
      ]
    },
    {
      id: 7,
      title: "Customer Success Manager",
      department: "operations",
      location: "remote",
      type: "fulltime",
      posted: "6 days ago",
      description: "We are seeking a Customer Success Manager to ensure our clients achieve their goals with our educational technology solutions. The ideal candidate will have experience in customer success, account management, and a passion for education.",
      responsibilities: [
        "Build and maintain strong relationships with clients",
        "Develop customer success plans and strategies",
        "Monitor customer health and identify opportunities for expansion",
        "Collaborate with product and support teams to improve customer experience"
      ],
      requirements: [
        "3+ years of experience in customer success or account management",
        "Strong communication and interpersonal skills",
        "Experience with CRM and customer success tools",
        "Knowledge of SaaS business models and customer lifecycle",
        "Bachelor's degree in Business, Education, or related field"
      ],
      benefits: [
        "Competitive salary and commission structure",
        "Health, dental, and vision insurance",
        "Flexible remote work policy",
        "Professional development opportunities",
        "Team events and celebrations"
      ]
    },
    {
      id: 8,
      title: "Product Manager",
      department: "product",
      location: "sanfrancisco",
      type: "fulltime",
      posted: "2 weeks ago",
      description: "We are looking for a Product Manager to help define and execute the product vision for our educational technology platforms. The ideal candidate will have experience in product management, a passion for education, and strong analytical skills.",
      responsibilities: [
        "Define product strategy and roadmap based on user needs and business goals",
        "Gather and prioritize product requirements",
        "Work closely with engineering, design, and marketing teams",
        "Analyze product metrics and make data-driven decisions"
      ],
      requirements: [
        "4+ years of experience in product management, preferably in tech or education",
        "Strong analytical and problem-solving skills",
        "Experience with agile development methodologies",
        "Excellent communication and leadership skills",
        "Bachelor's degree in Business, Computer Science, or related field"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible vacation policy",
        "Modern office in downtown San Francisco",
        "Professional development budget"
      ]
    }
  ];
  
  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => 
    (selectedDepartment === 'all' || job.department === selectedDepartment) &&
    (selectedLocation === 'all' || job.location === selectedLocation) &&
    (selectedType === 'all' || job.type === selectedType)
  );
  
  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };
  
  const openApplication = (job) => {
    setCurrentJob(job);
    setApplicationOpen(true);
  };
  
  const closeApplication = () => {
    setApplicationOpen(false);
    setCurrentJob(null);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Careers & Talent Hub</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Join our team of passionate innovators and be part of transforming education through technology.
            </p>
          </motion.div>
          
          {/* Work Culture Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Work Culture</h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    At Woldreamz Inc., we believe in fostering a culture of innovation, collaboration, and growth. We are committed to creating an inclusive environment where diverse perspectives are valued and respected.
                  </p>
                  <p>
                    Our team members are passionate about using technology to improve education and create meaningful impact. We encourage continuous learning, creative problem-solving, and work-life balance.
                  </p>
                  <p>
                    Whether you're working remotely or in one of our offices, you'll be part of a supportive community that celebrates achievements and learns from challenges together.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-woldreamz-blue/20 blur-2xl transform -rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1633886897663-44c707d71904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Benefits Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                We offer a comprehensive benefits package and a supportive work environment that values your growth and well-being.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌍",
                  title: "Flexible Work Environment",
                  description: "Remote-friendly policies and flexible scheduling to support work-life balance."
                },
                {
                  icon: "🚀",
                  title: "Career Growth",
                  description: "Professional development opportunities, mentorship, and clear career progression paths."
                },
                {
                  icon: "💪",
                  title: "Comprehensive Benefits",
                  description: "Health, dental, and vision insurance, retirement plans, and generous PTO."
                },
                {
                  icon: "🧠",
                  title: "Learning & Development",
                  description: "Dedicated budget for courses, conferences, and continuous learning."
                },
                {
                  icon: "🎯",
                  title: "Meaningful Work",
                  description: "Make a real impact by creating educational technology that transforms lives."
                },
                {
                  icon: "🌟",
                  title: "Inclusive Culture",
                  description: "Diverse and inclusive environment where all perspectives are valued."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Open Positions Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Explore our current opportunities and find the perfect role to match your skills and interests.
              </p>
            </div>
            
            {/* Filters */}
            <div className="mb-8">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 mb-4"
              >
                <div className="flex items-center">
                  <Filter size={20} className="mr-2 text-woldreamz-blue" />
                  <span>Filter Jobs</span>
                </div>
                {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              <div className={`md:flex gap-4 ${showFilters ? 'block' : 'hidden md:flex'}`}>
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block text-sm font-medium mb-2">Department</label>
                  <select 
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg"
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <select 
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg"
                  >
                    {locations.map(loc => (
                      <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Job Type</label>
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg"
                  >
                    {jobTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-slate-600">No open positions matching your criteria at the moment.</p>
                <button 
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                    setSelectedType('all');
                  }}
                  className="mt-4 text-woldreamz-blue font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleJobExpansion(job.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                          <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue bg-woldreamz-50 px-2 py-1 rounded-full">
                            {departments.find(d => d.id === job.department)?.name}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-1 rounded-full flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {locations.find(l => l.id === job.location)?.name}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-1 rounded-full flex items-center">
                            <Clock size={12} className="mr-1" />
                            {jobTypes.find(t => t.id === job.type)?.name}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{job.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">Posted {job.posted}</span>
                        <div className="flex items-center text-woldreamz-blue">
                          {expandedJob === job.id ? 'Show less' : 'Show more'}
                          {expandedJob === job.id ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                        </div>
                      </div>
                    </div>
                    
                    {expandedJob === job.id && (
                      <div className="border-t border-slate-100 p-6 bg-white/50">
                        <div className="mb-6">
                          <h4 className="font-bold mb-3">Responsibilities</h4>
                          <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            {job.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-bold mb-3">Requirements</h4>
                          <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            {job.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-bold mb-3">Benefits</h4>
                          <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            {job.benefits.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <button 
                          onClick={() => openApplication(job)}
                          className="btn-primary w-full"
                        >
                          Apply for this position
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
          
          {/* Talent Network Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-woldreamz-blue to-woldreamz-400 text-white p-8 md:p-12 rounded-2xl shadow-xl mb-16"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Talent Network</h2>
                <p className="text-white/80">
                  Don't see a role that matches your skills? Join our talent network to be notified about future opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-slate-800"
                />
                <button className="bg-white text-woldreamz-blue font-medium py-3 px-8 rounded-full hover:bg-white/90 transition-colors shadow-md">
                  Stay Connected
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Refer a Friend Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Refer a Friend</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Know someone who would be a great fit for Woldreamz? Refer them and receive a bonus if they're hired!
            </p>
            <a href="/contact" className="btn-primary">
              Send a Referral
            </a>
          </motion.div>
        </div>
      </main>
      
      {/* Job Application Modal */}
      {applicationOpen && currentJob && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeApplication}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Apply for {currentJob.title}</h2>
                <button 
                  onClick={closeApplication}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input type="text" className="w-full p-3 border border-slate-200 rounded-lg" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input type="text" className="w-full p-3 border border-slate-200 rounded-lg" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" className="w-full p-3 border border-slate-200 rounded-lg" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input type="tel" className="w-full p-3 border border-slate-200 rounded-lg" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Resume/CV *</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center">
                    <p className="text-slate-600 mb-2">Drag and drop your file here, or click to browse</p>
                    <p className="text-xs text-slate-500">Supported formats: PDF, DOCX, RTF (Max size: 5MB)</p>
                    <input type="file" className="hidden" id="resume-upload" />
                    <label htmlFor="resume-upload" className="mt-3 inline-block px-4 py-2 bg-slate-100 rounded-lg text-slate-700 cursor-pointer hover:bg-slate-200 transition-colors">
                      Browse Files
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                  <input type="url" className="w-full p-3 border border-slate-200 rounded-lg" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio/Website</label>
                  <input type="url" className="w-full p-3 border border-slate-200 rounded-lg" placeholder="https://yourwebsite.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Why are you interested in this position? *</label>
                  <textarea className="w-full p-3 border border-slate-200 rounded-lg min-h-32" required></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" className="w-4 h-4" required />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-sm text-slate-600">
                    I agree to the processing of my personal data according to the Privacy Policy
                  </label>
                </div>
                
                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default Careers;
