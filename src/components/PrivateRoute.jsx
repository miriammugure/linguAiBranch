import PropTypes from 'prop-types';
import { useAuth } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth(); 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.userType === 'doctor') {
    return <Navigate to="/doctorsDashboard" replace />;
  }

  if (user?.userType === 'patient') {
    return <Navigate to="/patientsDashboard" replace />;
  }

  return children;
};

// Validate the `children` prop
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
