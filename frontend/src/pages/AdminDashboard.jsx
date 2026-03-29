import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { Users, Package, Trash2, ShieldAlert, MessageSquare } from 'lucide-react';
import Spinner from '../components/Spinner';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [scraps, setScraps] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingScraps, setLoadingScraps] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    fetchUsers();
    fetchScraps();
    fetchMessages();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/users');
      const data = res.data.data || res.data;
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load users (Verify API endpoint)');
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchScraps = async () => {
    try {
      const res = await api.get('/scrap');
      const data = res.data.data || res.data;
      setScraps(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load scraps (Verify API endpoint)');
    } finally {
      setLoadingScraps(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await api.get('/support');
      const data = res.data.data || res.data;
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load support messages');
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await api.delete(`/users/${id}`);
      toast.success('User deleted successfully');
      setUsers(users.filter((u) => (u._id || u.id) !== id));
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete user');
    }
  };

  const handleDeleteScrap = async (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    try {
      await api.delete(`/scrap/${id}`);
      toast.success('Listing deleted successfully');
      setScraps(scraps.filter((s) => (s._id || s.id) !== id));
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete scrap');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-8 flex items-center gap-3">
        <ShieldAlert className="text-green-700 h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Control Panel</h1>
          <p className="text-gray-600 mt-1">Manage platform users and marketplace listings.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('users')}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${
                activeTab === 'users'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users size={18} />
              Users ({users.length})
            </button>
            <button
              onClick={() => setActiveTab('scraps')}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${
                activeTab === 'scraps'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Package size={18} />
              Scraps ({scraps.length})
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2 ${
                activeTab === 'messages'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageSquare size={18} />
              Tickets ({messages.length})
            </button>
          </nav>
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === 'users' && (
            <div>
              {loadingUsers ? (
                <div className="flex justify-center items-center h-48"><Spinner /></div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.length === 0 && (
                        <tr><td colSpan="3" className="px-6 py-4 text-center text-gray-500">No users found</td></tr>
                      )}
                      {users.map((user) => (
                        <tr key={user._id || user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0 bg-green-100 rounded-full flex justify-center items-center text-green-700 font-bold">
                                {user.name?.charAt(0) || 'U'}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                              user.role === 'buyer' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleDeleteUser(user._id || user.id)}
                              className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors"
                              title="Delete User"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'scraps' && (
            <div>
              {loadingScraps ? (
                <div className="flex justify-center items-center h-48"><Spinner /></div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Listing Details</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {scraps.length === 0 && (
                        <tr><td colSpan="3" className="px-6 py-4 text-center text-gray-500">No scraps found</td></tr>
                      )}
                      {scraps.map((scrap) => (
                        <tr key={scrap._id || scrap.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{scrap.title}</span>
                              <span className="text-xs text-gray-500">Category: {scrap.category} | Qty: {scrap.quantity}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 capitalize">
                              {scrap.status || 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleDeleteScrap(scrap._id || scrap.id)}
                              className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors"
                              title="Delete Listing"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              {loadingMessages ? (
                <div className="flex justify-center items-center h-48"><Spinner /></div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sender</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Message Content</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {messages.length === 0 && (
                        <tr><td colSpan="3" className="px-6 py-4 text-center text-gray-500">No support tickets found</td></tr>
                      )}
                      {messages.map((msg) => (
                        <tr key={msg._id || msg.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{msg.firstName} {msg.lastName}</span>
                              <span className="text-xs text-gray-500">{msg.email}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 whitespace-pre-wrap">{msg.message}</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-xs text-gray-500">
                            {new Date(msg.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
