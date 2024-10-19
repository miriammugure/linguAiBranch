import PropTypes from 'prop-types';
import { useAuth } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth(); 
  const location = useLocation(); // Get the current location

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Redirect based on user role (provider or patient)
  if (user?.user_type === 'provider' && !location.pathname.startsWith('/doctorsDashboard')) {
    return <Navigate to="/doctorsDashboard/" replace />;
  }

  if (user?.user_type === 'patient' && !location.pathname.startsWith('/patientsDashboard')) {
    return <Navigate to="/patientsDashboard/" replace />;
  }

  return children; // If user is at the correct dashboard, render children
};

// Validate the `children` prop
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
