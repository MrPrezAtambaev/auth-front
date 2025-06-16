import { Navigate, type RouteObject } from 'react-router-dom';
import { LoginPage } from './components/Login/LoginPage';
import SoftwareMarketplace from './components/software-marketplace';

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/marketplace',
    element: (
      <ProtectedRoute>
        <SoftwareMarketplace />
      </ProtectedRoute>
    ),
  },
]; 