import { RouteObject, createBrowserRouter, redirect } from 'react-router-dom';
import ErrorPageCounter from '../layout/ErrorPageCounter';
import ErrorPage from '../layout/ErrorPage';
import DashboardLayout from '@/app/layout/DashboardLayout';
import { LoginPage } from '@/pages/login';
import { DashboardPage } from '@/pages/dashboard';
import { GuestEditPage } from '@/pages/guest-edit';
import { GuestPage } from '@/pages/guest';

export interface CustomRouteObject extends Omit<RouteObject, 'children'> {
  breadcrumb?: string;
  children?: CustomRouteObject[];
}

export const protectedRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/login');

  return null;
};

export const routes: CustomRouteObject[] = [
  {
    path: '*',
    loader: () => redirect('/admin'),
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPageCounter />,
    loader: LoginPage.loader,
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
        element: <DashboardPage />,
        breadcrumb: 'Dashboard',
      },
      {
        path: 'guests',
        children: [
          {
            index: true,
            element: <GuestPage />,
          },
          {
            path: 'modify',
            element: <GuestEditPage />,
            breadcrumb: 'Modify',
          },
          {
            path: 'modify/:id',
            element: <GuestEditPage />,
            breadcrumb: 'Modify',
          },
        ],
        breadcrumb: 'Guests',
      },
    ],
  },
];

export const router = createBrowserRouter(routes as RouteObject[]);
