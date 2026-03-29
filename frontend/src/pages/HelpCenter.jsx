import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-2xl mb-4 bg-white overflow-hidden shadow-sm hover:border-green-300 transition-colors">
      <button
        className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-gray-900 text-left">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="bg-green-50 p-2 rounded-full shrink-0 ml-4"
        >
          <ChevronDown className="text-green-600 w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 mx-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I register as a Buyer?",
      answer: "During registration, simply select 'Buyer' from the role dropdown menu. You will instantly get access to the Buyer Dashboard where you can browse available scrap listings in your area and accept tradeoffs."
    },
    {
      question: "Is it completely free to list my scrap?",
      answer: "Yes! Creating an account and listing your household or business scrap on ScrapMart is 100% free. We believe in removing all barriers to proper recycling."
    },
    {
      question: "How do I get paid?",
      answer: "Once a buyer accepts your listing, you will arrange the pickup or drop-off directly. Payment is handled physically or via digital transfer securely between you and the verified buyer at the point of exchange."
    },
    {
      question: "What types of scrap can I sell?",
      answer: "You can list almost any recyclable material including metals (copper, iron, aluminum), plastics, cardboard, e-waste, and glass. Ensure you select the correct category when creating your listing."
    },
    {
      question: "How do you verify buyers?",
      answer: "All buyers undergo a strict verification process including identity checks and business license verification to ensure the safety and compliance of our marketplace."
    },
    {
      question: "Can I edit or delete a listing?",
      answer: "Absolutely. Simply navigate to your Seller Dashboard, where you can safely delete or modify any pending listings before a buyer accepts them."
    }
  ];

  return (
    <div className="bg-gray-50 flex-1 pb-24">
      <PageHeader 
        title="Help Center" 
        subtitle="Find quick answers to common questions about using ScrapMart."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="text-green-600 w-8 h-8" />
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-16 bg-gradient-to-r from-green-900 to-emerald-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-extrabold text-white mb-2">Still need help?</h3>
            <p className="text-green-100">Our dedicated support team is available 24/7 to assist you.</p>
          </div>
          <Link 
            to="/support" 
            className="flex items-center gap-2 bg-white hover:bg-green-50 text-green-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-colors shrink-0"
          >
            <PhoneCall className="w-5 h-5" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
