import React from 'react';
import PageHeader from '../components/PageHeader';
import { Check, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-gray-50 flex-1 pb-24">
      <PageHeader 
        title="Simple, Transparent Pricing" 
        subtitle="Start totally free and optionally upgrade as your recycling needs grow."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Free Tier */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex-1 bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 flex flex-col transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 to-gray-400"></div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Basic Household</h3>
            <p className="text-gray-500 mb-6 border-b border-gray-100 pb-6">Best for residential users casually recycling goods.</p>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-500 font-medium">/forever</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-4 h-4" strokeWidth={3} /></div>
                <span>Unlimited basic scrap listings</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-4 h-4" strokeWidth={3} /></div>
                <span>Connect with 3 local buyers/month</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-4 h-4" strokeWidth={3} /></div>
                <span>Standard chat support</span>
              </li>
            </ul>

            <Link to="/register" className="w-full block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-colors">
              Start For Free
            </Link>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex-1 bg-gradient-to-br from-green-900 to-emerald-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-800 flex flex-col transition-all relative overflow-hidden transform md:scale-105 z-10"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-black uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Most Popular
              </div>
            </div>

            <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Zap className="text-green-300 w-6 h-6" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">Pro Business</h3>
            <p className="text-green-100/70 mb-6 border-b border-green-800 pb-6 shadow-sm">For commercial scrap yards hitting high volume.</p>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$49</span>
              <span className="text-green-200 font-medium">/month</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/30 p-1 rounded-full"><Check className="text-green-300 w-4 h-4" strokeWidth={3} /></div>
                <span>Infinite buyer connection limits</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/30 p-1 rounded-full"><Check className="text-green-300 w-4 h-4" strokeWidth={3} /></div>
                <span>Prioritized top-of-page listings</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/30 p-1 rounded-full"><Check className="text-green-300 w-4 h-4" strokeWidth={3} /></div>
                <span>Advanced pricing analytics</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/30 p-1 rounded-full"><Check className="text-green-300 w-4 h-4" strokeWidth={3} /></div>
                <span>24/7 Priority Phone Support</span>
              </li>
            </ul>

            <Link to="/register" className="w-full block text-center bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-300 hover:to-emerald-300 text-green-900 font-black py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              Upgrade to Premium
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
