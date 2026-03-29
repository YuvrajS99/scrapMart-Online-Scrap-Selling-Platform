import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Globe, Share2, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <Recycle className="h-6 w-6 text-green-500" />
              <span className="font-bold text-xl text-white">ScrapMart</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Turn your scrap into value. A sustainable platform connecting households with trusted buyers for a greener future.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3 pb-8 md:pb-0">
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm">How it Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3 pb-8 md:pb-0">
              <li><Link to="/help" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Help Center</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <ul className="flex space-x-4 mb-6">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><Globe className="h-5 w-5" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><MessageCircle className="h-5 w-5" /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><Share2 className="h-5 w-5" /></a></li>
            </ul>
            <a href="mailto:hello@scrapmart.com" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>hello@scrapmart.com</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm xl:text-center">
            &copy; {new Date().getFullYear()} ScrapMart Inc. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center gap-1">
            Built for a greener future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
