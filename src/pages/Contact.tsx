
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Send, PhoneCall, Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, preferredContact: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Form submitted!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    }, 1500);
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
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Contact & Consultation</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Have a project in mind? Need technical consultancy? Or just want to say hello?
              We're here to assist you every step of the way.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-woldreamz-50 rounded-full filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-woldreamz-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-8 rounded-2xl"
              >
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue"
                            placeholder="+1 (123) 456-7890"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue bg-white"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Project Request">Project Request</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership Opportunity">Partnership Opportunity</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-woldreamz-blue/20 focus:border-woldreamz-blue"
                          placeholder="Please describe your project or question..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <p className="block text-sm font-medium text-slate-700 mb-2">Preferred Contact Method</p>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === 'email'}
                              onChange={handleRadioChange}
                              className="form-radio h-4 w-4 text-woldreamz-blue"
                            />
                            <span className="text-sm text-slate-700">Email</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === 'phone'}
                              onChange={handleRadioChange}
                              className="form-radio h-4 w-4 text-woldreamz-blue"
                            />
                            <span className="text-sm text-slate-700">Phone</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="video"
                              checked={formData.preferredContact === 'video'}
                              onChange={handleRadioChange}
                              className="form-radio h-4 w-4 text-woldreamz-blue"
                            />
                            <span className="text-sm text-slate-700">Video Call</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <Button 
                          type="submit" 
                          className="w-full bg-woldreamz-blue hover:bg-woldreamz-darkBlue text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              <span>Send Message</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="flex justify-center mb-6">
                      <CheckCircle size={60} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-slate-600 mb-6">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'General Inquiry',
                          message: '',
                          preferredContact: 'email'
                        });
                      }}
                      className="bg-woldreamz-blue hover:bg-woldreamz-darkBlue text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </motion.div>
              
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="glass-card p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-woldreamz-50 p-3 rounded-lg text-woldreamz-blue">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-slate-600">woldreamzinc@gmail.com</p>
                        <p className="text-slate-600">support@woldreamzinc.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-woldreamz-50 p-3 rounded-lg text-woldreamz-blue">
                        <PhoneCall size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="text-slate-600">+234 (810) 1242-928</p>
                        <p className="text-slate-600">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-woldreamz-50 p-3 rounded-lg text-woldreamz-blue">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Visit Us</h3>
                        <p className="text-slate-600">10 Innovation Drive</p>
                        <p className="text-slate-600">Ada George, PH 500102</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
                  <p className="text-slate-600 mb-6">
                    Prefer to talk directly with our team? Book a free 30-minute consultation to discuss your project needs.
                  </p>
                  <Button 
                    onClick={() => {
                      toast({
                        title: "Scheduling system",
                        description: "Our scheduling system will be available soon!",
                        variant: "default",
                      });
                    }}
                    className="w-full bg-woldreamz-blue hover:bg-woldreamz-darkBlue text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    <span>Book a Meeting</span>
                  </Button>
                </div>
                
                <div className="glass-card p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Our Business Hours</h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-slate-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-600">Saturday:</span>
                      <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default Contact;
