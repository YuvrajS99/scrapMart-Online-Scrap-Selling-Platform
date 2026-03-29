import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Spinner from './Spinner';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Spinner size={48} />
      </div>
    );
  }

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Logged in but not authorized for this route
    // Could redirect to a 'Not Authorized' page or their specific dashboard
    if (user.role === 'admin') return <Navigate to="/dashboard/admin" replace />;
    if (user.role === 'buyer') return <Navigate to="/dashboard/buyer" replace />;
    return <Navigate to="/dashboard/user" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
