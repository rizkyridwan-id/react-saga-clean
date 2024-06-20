import { RouteObject, createBrowserRouter, redirect } from 'react-router-dom';
import ErrorPageCounter from '../../app/layout/ErrorPageCounter';
import ErrorPage from '../../app/layout/ErrorPage';
import Guest from '../../app/pages/guest/Guest';
import Dashboard from '../../app/pages/dashboard/Dashboard';
import Login, { loginLoader } from '@/app/pages/login/Login';
import DashboardLayout from '@/app/layout/DashboardLayout';
import ModifyGuest from '@/app/pages/guest/modify/ModifyGuest';

export const protectedRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/login');

  return null;
};

export interface CustomRouteObject extends Omit<RouteObject, 'children'> {
  breadcrumb?: string;
  children?: CustomRouteObject[];
}
export const routes: CustomRouteObject[] = [
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
    breadcrumb: 'Admin',
    children: [
      {
        index: true,
        loader: () => redirect('dashboard'),
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        breadcrumb: 'Dashboard',
      },
      {
        path: 'guests',
        element: <Guest />,
        breadcrumb: 'Guests',
      },
      {
        path: 'guests/modify',
        element: <ModifyGuest />,
        breadcrumb: 'Guests',
      },
    ],
  },
];

export const router = createBrowserRouter(routes as RouteObject[]);
