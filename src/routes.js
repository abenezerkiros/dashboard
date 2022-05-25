import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import BillingInfo from './pages/BillingInfo';
import User from './pages/User';
import Products from './pages/Products';
import GenerateApiKey from './pages/GenerateApiKey';
import DashboardApp from './pages/DashboardApp';
import Login from './pages/Login';
import Register from './pages/Register';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'createApp', element: <Products /> },
        { path: 'billingInfo', element: <BillingInfo /> },
        { path: 'genrateApiKey', element: <GenerateApiKey /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Register /> },
        

      ],
    },
  ]);
}
