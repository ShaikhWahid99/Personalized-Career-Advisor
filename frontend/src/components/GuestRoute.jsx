import { Navigate } from 'react-router-dom';
import { useAppContext } from '../state/AppContext';

const GuestRoute = ({ children }) => {
  const { profile } = useAppContext();
  
  // If user is logged in, redirect them away from guest-only pages
  if (profile) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestRoute;
