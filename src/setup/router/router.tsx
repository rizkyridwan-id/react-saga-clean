import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ErrorPageCounter from '../../app/layout/ErrorPageCounter';
import ErrorPage from '../../app/layout/ErrorPage';
import DashboardLayout from '../../app/layout/DashboardLayout';
import User from '../../app/pages/user/User';
import Dashboard from '../../app/pages/dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPageCounter />,
  },
  {
    path: '/admin/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: <User />,
      },
    ],
  },
]);
