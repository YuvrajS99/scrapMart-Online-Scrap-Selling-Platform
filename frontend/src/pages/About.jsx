import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Eye, Leaf, ShieldCheck, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-50 flex-1">
      <PageHeader 
        title="About ScrapMart" 
        subtitle="Empowering communities to recycle smartly and build a greener, cleaner future."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-md border border-gray-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To drastically reduce landfill waste by creating an accessible, rewarding, and deeply transparent marketplace connecting households and businesses directly with trusted recycling facilities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-md border border-gray-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-blue-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A 100% circular economy where every piece of scrap material is viewed not as waste, but as a valuable resource fueling the sustainable products of tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose ScrapMart?</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">We're built completely differently from traditional scrap yards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <Leaf className="text-green-500 w-10 h-10 mb-5" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-First Approach</h3>
            <p className="text-gray-600">
              We ensure every registered buyer strictly adheres to environmental and safety compliance policies before handling your scrap.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <ShieldCheck className="text-green-500 w-10 h-10 mb-5" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Trusted</h3>
            <p className="text-gray-600">
              Our background-checked marketplace eliminates price-gouging, ensuring you are operating in a safe and secure ecosystem.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <DollarSign className="text-green-500 w-10 h-10 mb-5" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Rates</h3>
            <p className="text-gray-600">
              By cutting out multiple middle-men, ScrapMart allows you to deal directly with wholesale facilities for true market value.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
