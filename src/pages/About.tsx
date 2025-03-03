
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChatAssistant from '@/components/AIChatAssistant';
import { motion } from 'framer-motion';
import { Users, Award, Trophy, Target, Clock, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Visionary entrepreneur with 15+ years in software development and EdTech innovation."
    },
    {
      name: "Samantha Lee",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Tech genius with a passion for creating scalable, elegant solutions to complex problems."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Award-winning designer focused on creating intuitive, beautiful user experiences."
    },
    {
      name: "Priya Patel",
      role: "Head of EdTech",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Education innovator with a mission to transform learning through technology."
    }
  ];

  const milestones = [
    { year: "2015", title: "Founded", description: "Woldreamz Inc. was established with a vision to transform education through technology." },
    { year: "2017", title: "First Major Client", description: "Partnered with a Fortune 500 company to develop custom EdTech solutions." },
    { year: "2019", title: "International Expansion", description: "Opened offices in Europe and Asia to serve global clients." },
    { year: "2021", title: "AI Integration", description: "Pioneered integration of AI technologies in our educational platforms." },
    { year: "2023", title: "Award Winner", description: "Recognized as one of the top EdTech innovators globally." }
  ];

  const values = [
    { icon: <Target size={24} />, title: "Innovation", description: "We constantly push boundaries to create cutting-edge solutions." },
    { icon: <Users size={24} />, title: "Collaboration", description: "We believe in the power of teamwork and partnership." },
    { icon: <Award size={24} />, title: "Excellence", description: "We strive for excellence in everything we do." },
    { icon: <Clock size={24} />, title: "Efficiency", description: "We value time and deliver solutions efficiently." },
    { icon: <Heart size={24} />, title: "Passion", description: "We are passionate about technology and education." },
    { icon: <Trophy size={24} />, title: "Success", description: "We measure our success by our clients' achievements." }
  ];

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
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Woldreamz Inc.</h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-woldreamz-blue rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              We're on a mission to transform the digital landscape through innovative software solutions and educational technology.
            </p>
          </motion.div>
          
          {/* Story Section */}
          <div className="mb-32 relative">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-woldreamz-50 rounded-full filter blur-3xl opacity-30 animate-float"></div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Founded in 2015, Woldreamz Inc. began with a simple yet powerful vision: to bridge the gap between cutting-edge technology and educational excellence.
                  </p>
                  <p>
                    Our journey started with a small team of passionate developers and educators who believed in the transformative power of technology in education. Today, we've grown into a global team of over 100 experts, serving clients across 25 countries.
                  </p>
                  <p>
                    We take pride in our innovative approach to software development and our commitment to creating solutions that not only meet but exceed our clients' expectations.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-woldreamz-blue/20 blur-2xl transform rotate-6"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="rounded-2xl shadow-xl relative z-10 w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Values Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="p-3 rounded-xl bg-woldreamz-50 text-woldreamz-blue mb-6 inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Leadership</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our diverse team of experts is passionate about creating innovative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center group"
                >
                  <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-woldreamz-blue font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Timeline Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                A timeline of key milestones in our growth and evolution.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-woldreamz-100"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-1/2"></div>
                    <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-woldreamz-blue text-white flex items-center justify-center font-bold mx-4">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="w-1/2">
                      <div className="glass-card p-6 rounded-2xl">
                        <div className="font-bold text-woldreamz-blue mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers" className="btn-primary">
                Explore Careers
              </a>
              <a href="/contact" className="btn-secondary">
                Get in Touch
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

export default About;
