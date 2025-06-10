// proxima-centuri/src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin, signup as apiSignup, logout as apiLogout } from '../api/auth'; // Import your API functions

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Track initial loading for auth check

  // Check for stored user/token on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false); // Finished initial auth check
  }, []);

  const login = async (credentials) => {
    const result = await apiLogin(credentials);
    if (result.success) {
      setUser(result.user);
      setIsAuthenticated(true);
      // If you're using JWTs, you'd also store the token here
      // localStorage.setItem('token', result.token);
    }
    return result;
  };

  const signup = async (userData) => {
    const result = await apiSignup(userData);
    return result;
  };

  const logout = () => {
    apiLogout(); // Call API logout (if implemented) and clear local storage
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    loading, // Provide loading state
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};