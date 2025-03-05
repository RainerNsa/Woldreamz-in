import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'technology', name: 'Technology' },
    { id: 'education', name: 'Education' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'development', name: 'Development' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Education: Transforming Learning Experiences",
      excerpt: "Explore how artificial intelligence is revolutionizing education and creating personalized learning experiences for students worldwide.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "ai",
      author: "Alex Johnson",
      date: "June 15, 2023",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Learn best practices for developing scalable, high-performance web applications using the latest frameworks and tools.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "development",
      author: "Samantha Lee",
      date: "May 22, 2023",
      readTime: "11 min read",
      featured: false
    },
    {
      id: 3,
      title: "EdTech Trends That Will Shape the Future of Learning",
      excerpt: "Discover the emerging educational technology trends that are transforming how we teach and learn in the digital age.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "education",
      author: "Michael Chen",
      date: "April 10, 2023",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 4,
      title: "The Role of Machine Learning in Personalized Education",
      excerpt: "How machine learning algorithms are being used to create adaptive learning systems that cater to individual student needs.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "ai",
      author: "Priya Patel",
      date: "March 5, 2023",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Web3 and Its Implications for Educational Technology",
      excerpt: "An exploration of how Web3 technologies like blockchain are creating new possibilities for educational platforms and content.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "technology",
      author: "David Wilson",
      date: "February 18, 2023",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 6,
      title: "Optimizing React Applications for Performance",
      excerpt: "Technical tips and best practices for improving the performance of your React applications in production environments.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "development",
      author: "Emma Rodriguez",
      date: "January 30, 2023",
      readTime: "12 min read",
      featured: false
    }
  ];
  
  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  const featuredPost = blogPosts.find(post => post.featured);
  
  return (
    <div className="min-h-screen page-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Blog & Insights</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Explore our latest articles, insights, and thought leadership on software development, EdTech, and innovation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-woldreamz-blue"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedCategory === category.id
                        ? 'bg-woldreamz-blue text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue bg-woldreamz-50 px-2 py-1 rounded-full">
                          {categories.find(c => c.id === featuredPost.category)?.name}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                      <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-woldreamz-50 flex items-center justify-center text-woldreamz-blue mr-3">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="font-medium">{featuredPost.author}</p>
                          <p className="text-xs text-slate-500">{featuredPost.date}</p>
                        </div>
                      </div>
                      <Link to={`/blog/${featuredPost.id}`} className="text-woldreamz-blue font-medium flex items-center hover:text-woldreamz-darkBlue transition-colors">
                        Read more <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-slate-600">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-2xl overflow-hidden group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-woldreamz-blue bg-woldreamz-50 px-2 py-1 rounded-full">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-slate-500 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                        <Link to={`/blog/${post.id}`} className="text-woldreamz-blue font-medium text-sm flex items-center hover:text-woldreamz-darkBlue transition-colors">
                          Read more <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-woldreamz-blue to-woldreamz-400 text-white p-8 md:p-12 rounded-2xl shadow-xl mb-16"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-white/80">
                  Get the latest insights, articles, and updates delivered straight to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-slate-800"
                />
                <button className="bg-white text-woldreamz-blue font-medium py-3 px-8 rounded-full hover:bg-white/90 transition-colors shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Explore Topics</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.filter(c => c.id !== 'all').map((category) => (
                <a
                  key={category.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(category.id);
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-woldreamz-blue hover:bg-woldreamz-50 transition-colors"
                >
                  <Tag size={18} className="text-woldreamz-blue" />
                  <span>{category.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default Blog;
