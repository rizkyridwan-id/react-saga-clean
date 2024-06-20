import { createBrowserRouter, redirect } from 'react-router-dom';
import ErrorPageCounter from '../../app/layout/ErrorPageCounter';
import ErrorPage from '../../app/layout/ErrorPage';
import User from '../../app/pages/guest/Guest';
import Dashboard from '../../app/pages/dashboard/Dashboard';
import Login, { loginLoader } from '@/app/pages/login/Login';
import DashboardLayout from '@/app/layout/DashboardLayout';

export const protectedRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/login');

  return null;
};
export const router = createBrowserRouter([
  {
    path: '*',
    loader: () => redirect('/admin'),
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPageCounter />,
    loader: loginLoader,
  },
  {
    path: '/admin',
    element: <DashboardLayout />,
    loader: protectedRoute,
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
        path: 'guests',
        element: <User />,
      },
    ],
  },
]);
