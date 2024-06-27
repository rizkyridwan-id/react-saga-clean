import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store/index.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/router.tsx';
import { Toaster } from './shared/components/ui/toaster.tsx';
import NotificationHandler from './shared/components/custom/NotificationHandler.tsx';
import AlertDialogProvider from './shared/components/custom/AlertDialogProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertDialogProvider>
        <RouterProvider router={router} />
        <NotificationHandler />
      </AlertDialogProvider>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
