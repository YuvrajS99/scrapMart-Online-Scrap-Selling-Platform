import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

/* eslint-disable react-refresh/only-export-components */


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Load user from local storage on initial mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      
      // We assume standard response structure: { token: '...', user: {...} }
      // This might be response.data.data depending on backend structure,
      // but response.data is safest standard.
      const data = response.data.data || response.data;
      
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
      }
      
      return { success: true, user: data.user };
    } catch (error) {
      console.error("Login Error: ", error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed, server error.' 
      };
    }
  };

  const register = async (name, email, password, role) => {
    try {
      const response = await api.post('/auth/register', { name, email, password, role });
      
      const data = response.data.data || response.data;

      // Handle auto-login on register if token provided
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
      }
      
      return { success: true };
    } catch (error) {
      console.error("Register Error: ", error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed.' 
      };
    }
  };

  // logout was moved above useEffect

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
