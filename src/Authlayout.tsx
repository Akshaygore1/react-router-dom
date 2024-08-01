import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  // Replace this with your actual authentication check
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;