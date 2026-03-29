import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Clock, MapPin, Send, Loader2 } from 'lucide-react';
import api from '../services/api';
import { toast } from 'react-toastify';

const Support = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.post('/support/contact', formData);
      toast.success(response.data.message || 'Message sent successfully');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Support message error:', error);
      toast.error(error.response?.data?.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 flex-1">
      <PageHeader 
        title="24/7 Dedicated Support" 
        subtitle="Need help navigating ScrapMart or have a concern about a recent transaction? Let us know."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Get in touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our support team is currently handling high volumes of requests, but we typically reply within 2 hours.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us Directly</h3>
                <p className="text-gray-600 text-sm mb-1">For general inquiries and technical support:</p>
                <a href="mailto:support@scrapmart.com" className="text-green-600 font-bold hover:text-green-700 transition-colors">support@scrapmart.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Operating Hours</h3>
                <p className="text-gray-600 text-sm mb-1">Monday - Friday</p>
                <p className="text-gray-600 text-sm font-medium">9:00 AM - 6:00 PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-amber-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">ScrapMart HQ</h3>
                <p className="text-gray-600 text-sm mb-1">100 Green Planet Avenue</p>
                <p className="text-gray-600 text-sm">Suite 400, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 opacity-70"></div>
              
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Send us a secure message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white" placeholder="Jane" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white" placeholder="Appleseed" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white" placeholder="you@company.com" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How can we help? *</label>
                  <textarea rows="5" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none bg-gray-50 focus:bg-white" placeholder="Please describe your issue..." required></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Support Message
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">By sending this message you agree to our privacy policy regarding data collection.</p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Support;
