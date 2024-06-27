import { Middleware, createAction } from '@reduxjs/toolkit';
import { router } from '../router/router';

export const navigateTo = createAction<string>('navigation/navigateTo');

export const createNavigationMiddleware = () => {
  const navigationMiddleware: Middleware = () => (next) => (action) => {
    if (navigateTo.match(action)) {
      router.navigate(action.payload);
    }
    return next(action);
  };

  return navigationMiddleware;
};
