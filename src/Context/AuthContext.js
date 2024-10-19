import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of next/navigation
import { signUpUser, loginUser, logoutUser, getUserDetails } from '../Handlers/Api.js';
import PropTypes from 'prop-types';
const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const logout = useCallback(async () => {
    try {
      await logoutUser(); // Call API to handle logout on the server
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      navigate('/books'); // Redirect to home page after logout
    }
  }, [navigate]);

  const login = async (email, password) => {
    try {
      const { access, refresh} = await loginUser(email, password);
  
      // Store tokens in local storage
      await localStorage.setItem('accessToken', access);
      await localStorage.setItem('refreshToken', refresh);
  
      // Fetch and set user details
      await fetchUserDetails();

      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      handleAuthError(error, "Login failed");
    }
  };

  const signUp = async (email, username, password1, password2, user_type) => {
    try {
      const { access, refresh } = await signUpUser(email, username, password1, password2, user_type);
  
      // Store tokens in local storage
      await localStorage.setItem('accessToken', access);
      await localStorage.setItem('refreshToken', refresh);
  
      // Fetch and set user details
      await fetchUserDetails();

      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after signup
    } catch (error) {
      handleAuthError(error, "Signup failed");
    }
  };

  const fetchUserDetails = async () => {
    try {
      const userDetails = await getUserDetails();
      setUser(userDetails);
    } catch (error) {
      console.error('Failed to fetch user details:', error);
      logout(); // If fetching user details fails, force a logout
    }
  };

  const getUserDetailsOnInit = useCallback(async () => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
    if (accessToken && username) {
      try {
        const userDetails = await getUserDetails();
        setUser(userDetails);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error fetching user details on init:', error);
        logout(); // Force a logout if fetching user details fails
      }
    }
  }, [logout]);

  const handleAuthError = (error, message) => {
    if (error && typeof error === 'object') {
      for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(error, key)) {
          console.log(`${message}: ${error[key]}`);
        }
        throw new Error(error[key]);
      }
    } else {
      console.error(`${message}. Error:`, error);
      throw new Error(`${message}. Please try again.`);
    }
  };

  useEffect(() => {
    getUserDetailsOnInit(); // Fetch user details on app init if tokens exist
  }, [getUserDetailsOnInit]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signUp, getUserDetails: fetchUserDetails }}>
      {children}
    </AuthContext.Provider>
  );

};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };