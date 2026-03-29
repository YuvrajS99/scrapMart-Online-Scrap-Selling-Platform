import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { toast } from 'react-toastify';
import { PackageSearch, Handshake, Info } from 'lucide-react';
import Spinner from '../components/Spinner';

const BuyerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [scraps, setScraps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    fetchAvailableScraps();
  }, []);

  const fetchAvailableScraps = async () => {
    try {
      const res = await api.get('/scrap');
      const data = res.data.data || res.data;
      
      // If the backend doesn't filter, we'll try to sort and filter locally for visual clarity
      // We want items that are not completed (e.g. pending ones)
      const availableListings = Array.isArray(data) ? data : [];
      setScraps(availableListings);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load available scrap listings');
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptScrap = async (id) => {
    setActionLoading(id);
    try {
      // Assuming a PUT request to update status or accept the listing
      // Could be /scrap/:id or /scrap/:id/accept based on standard APIs
      await api.put(`/scrap/${id}`, { status: 'accepted', buyerId: user._id || user.id });
      toast.success('Successfully accepted the scrap request!');
      fetchAvailableScraps();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to accept listing');
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Buyer Dashboard</h1>
        <p className="text-gray-600 mt-2">Browse available scrap listings from users nearby and make your offers.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[500px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <PackageSearch className="text-green-600" />
            Marketplace Listings
          </h2>
          <button 
            onClick={fetchAvailableScraps}
            className="text-sm font-medium text-green-600 hover:text-green-700 bg-green-50 px-3 py-1.5 rounded-lg"
          >
            Refresh List
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size={40} />
          </div>
        ) : scraps.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <Info className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">No available listings</h3>
            <p className="text-gray-500 max-w-sm mx-auto mt-1">
              There are currently no scrap listings available in the marketplace. Check back later periodically.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scraps.map((item) => (
              <div key={item._id || item.id} className="flex flex-col h-full justify-between p-6 border border-gray-100 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all bg-white relative overflow-hidden group">
                {/* Decorative background element on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 transition-transform transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 opacity-50"></div>
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full shadow-sm">
                      {item.category || 'General'}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.status === 'accepted' ? 'bg-amber-100 text-amber-800' : 
                      item.status === 'completed' ? 'bg-gray-100 text-gray-800' : 
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.status || 'Pending'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-700 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase font-semibold">Quantity</span>
                      <span className="font-medium text-gray-900">{item.quantity}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleAcceptScrap(item._id || item.id)}
                  disabled={actionLoading === (item._id || item.id) || item.status === 'accepted' || item.status === 'completed'}
                  className={`w-full py-3 rounded-xl flex items-center justify-center font-bold text-sm transition-all shadow-sm ${
                    item.status === 'accepted' || item.status === 'completed'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-md'
                  }`}
                >
                  {actionLoading === (item._id || item.id) ? (
                    <Spinner size={18} className="text-white" />
                  ) : item.status === 'accepted' || item.status === 'completed' ? (
                    'Not Available'
                  ) : (
                    <>
                      <Handshake className="w-4 h-4 mr-2" />
                      Accept Listing
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard;
