/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, DollarSign, ShieldCheck, LogIn } from 'lucide-react';

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-center pt-32 pb-40 lg:pt-40 lg:pb-56">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
            alt="Sustainability and Recycling" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <motion.div 
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 backdrop-blur-sm border border-green-500/30 mb-8">
            <Leaf size={16} />
            <span className="text-sm font-semibold tracking-wide uppercase">Towards a greener future</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto drop-shadow-lg">
            Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Scrap</span> Into Value.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="mt-4 max-w-xl text-base md:text-lg text-gray-300 mx-auto leading-relaxed mb-8">
            Join thousands of households and businesses recycling smartly. List your scrap materials, connect with trusted buyers, and earn while saving the planet.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto px-4">
            <Link 
              to="/register" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 border border-green-400/20"
            >
              Start Selling Scrap
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link 
              to="/login" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all shadow-xl hover:shadow-white/10 transform hover:-translate-y-1"
            >
              Log in to Account
              <LogIn className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Custom shape divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C89.71,114.62,185.92,86.2,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose ScrapMart?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We provide the easiest, most rewarding way to dispose of your recyclable waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with verified wholesale buyers offering the most competitive rates for your scrap materials.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure your waste doesn't end up in landfills. Contribute directly to a circular and sustainable economy.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Buyers</h3>
              <p className="text-gray-600 leading-relaxed">
                Platform safety is our priority. Deal only with KYC-verified, trusted local scrap buyers and recycling plants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-green-900 m-4 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2070&auto=format&fit=crop" 
            alt="Metal scrap" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Ready to make an impact?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Create your account today. List your first batch of recyclables in under two minutes and await offers from buyers near you.
          </p>
          <Link 
            to="/register" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-green-900 bg-white hover:bg-green-50 transition-all shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
