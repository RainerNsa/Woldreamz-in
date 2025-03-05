
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-woldreamz-blue">
              Woldreamz<span className="text-white">Inc.</span>
            </h3>
            <p className="text-slate-300 mb-6">
              Innovative software solutions and educational technology platforms that transform businesses and empower learners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-woldreamz-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-woldreamz-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-woldreamz-blue transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-woldreamz-blue transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-300 hover:text-woldreamz-blue transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-woldreamz-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/software-development" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/edtech" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  Educational Technology
                </Link>
              </li>
              <li>
                <Link to="/services/ai-integration" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail size={20} className="text-woldreamz-blue mr-3 flex-shrink-0" />
                <a href="mailto:woldreamzinc@gmail.com" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  woldreamzinc@gmail.com
                </a>
              </li>
              <li className="flex">
                <Phone size={20} className="text-woldreamz-blue mr-3 flex-shrink-0" />
                <a href="tel:+2348101242928" className="text-slate-300 hover:text-woldreamz-blue transition-colors">
                  +234 (810) 1242-928
                </a>
              </li>
              <li className="flex">
                <MapPin size={20} className="text-woldreamz-blue mr-3 flex-shrink-0 mt-1" />
                <address className="text-slate-300 not-italic">
                  10 Innovation Drive, <br />
                  Ada George, PH 500102
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Woldreamz Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-slate-400 hover:text-woldreamz-blue text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-woldreamz-blue text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-slate-400 hover:text-woldreamz-blue text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
