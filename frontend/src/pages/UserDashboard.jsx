import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { toast } from 'react-toastify';
import { PlusCircle, Package, Clock, CheckCircle } from 'lucide-react';
import Spinner from '../components/Spinner';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [scraps, setScraps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'metal',
    quantity: '',
  });

  useEffect(() => {
    fetchMyScraps();
  }, []);

  const fetchMyScraps = async () => {
    try {
      // Assuming a GET route to fetch the user's scraps
      // Or if it's GET /scrap and the backend filters by user when user is logged in
      const res = await api.get('/scrap');
      const data = res.data.data || res.data;
      // Filter if necessary or assume backend does it
      setScraps(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch your scrap listings');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post('/scrap', formData);
      toast.success('Scrap listed successfully!');
      setFormData({ title: '', description: '', category: 'metal', quantity: '' });
      fetchMyScraps();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add listing');
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'accepted' || status === 'completed') return <CheckCircle className="text-green-500 h-5 w-5" />;
    return <Clock className="text-amber-500 h-5 w-5" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your listings and track their status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Add Listing Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <PlusCircle className="text-green-600" />
              Add New Listing
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g. Old Iron Pipes"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="metal">Metal</option>
                  <option value="paper">Paper & Cardboard</option>
                  <option value="plastic">Plastic</option>
                  <option value="ewaste">E-Waste</option>
                  <option value="glass">Glass</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity / Weight</label>
                <input
                  type="text"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g. 50 kg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  required
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 resize-none"
                  placeholder="Describe the condition..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center transition-colors shadow-sm"
              >
                {submitting ? <Spinner size={20} className="text-white" /> : 'Publish Listing'}
              </button>
            </form>
          </div>
        </div>

        {/* Listings view */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[500px]">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Package className="text-green-600" />
              Your Submitted Scrap
            </h2>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Spinner size={40} />
              </div>
            ) : scraps.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <Package className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">No listings yet</h3>
                <p className="text-gray-500 max-w-sm mx-auto mt-1">
                  You haven't added any scrap to sell. Use the form to create your first listing!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {scraps.map((item) => (
                  <div key={item._id || item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-gray-50/50">
                    <div className="mb-3 sm:mb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2 py-1 rounded">
                          {item.category || 'Item'}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-sm font-medium text-gray-700">
                        Quantity: <span className="font-normal">{item.quantity}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
                        {getStatusIcon(item.status)}
                        <span className="text-sm font-medium capitalize text-gray-700">
                          {item.status || 'Pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
