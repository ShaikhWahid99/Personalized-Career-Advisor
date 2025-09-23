import { Navigate } from 'react-router-dom';
import { useAppContext } from '../state/AppContext';

const ProtectedRoute = ({ children }) => {
  const { profile } = useAppContext();
  
  // If user is not logged in, redirect to login page
  if (!profile) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
