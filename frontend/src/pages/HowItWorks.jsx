import React from 'react';
import PageHeader from '../components/PageHeader';
import { UserPlus, PlusSquare, Users, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      name: 'Create an Account',
      description: 'Sign up for free in seconds. Tell us whether you are a householder looking to sell scrap or a registered buyer.',
      icon: UserPlus,
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    {
      id: 2,
      name: 'Add a Scrap Listing',
      description: 'Take a quick photo, describe your recyclable goods, state the quantity, and post it to the marketplace.',
      icon: PlusSquare,
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    },
    {
      id: 3,
      name: 'Connect with Buyers',
      description: 'Local verified buyers will browse listings on their dashboard and accept your items directly based on your requirements.',
      icon: Users,
      color: 'bg-amber-100 text-amber-600 border-amber-200'
    },
    {
      id: 4,
      name: 'Earn Money & Save the Planet',
      description: 'Complete the trade-off safely and get paid upfront. You just successfully diverted waste from landfills.',
      icon: Coins,
      color: 'bg-green-100 text-green-600 border-green-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gray-50 flex-1 min-h-screen">
      <PageHeader 
        title="How It Works" 
        subtitle="Transforming your scrap into cash has literally never been easier."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical Timeline Line (Hidden on very small screens) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-200 to-green-600 rounded-full opacity-50"></div>

          <div className="space-y-16 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 !== 0;

              return (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative z-10">
                      <span className="text-sm font-extrabold tracking-widest text-green-500 uppercase mb-2 block">
                        Step 0{step.id}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.name}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon Indicator */}
                  <div className="mx-auto my-6 md:my-0 relative z-10 hidden md:flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-xl ${step.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Spacer for empty side */}
                  <div className="hidden md:block w-5/12"></div>

                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HowItWorks;
