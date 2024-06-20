import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/404-error.png';
import { ReactNode } from 'react';
import { Button } from '../components/ui/button';
export default function ErrorPage({ children }: { children?: ReactNode }) {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="flex w-full h-full flex-col items-center justify-center"
    >
      <img src={errorImage} className="h-52 sm:h-72 md:h-96" />
      <p className="text-xl text-slate-600 text-center">
        Sorry, an unexpected{' '}
        <span className="decoration-pink-400 underline decoration-4 font-semibold">
          error
        </span>{' '}
        has occurred.
      </p>
      {children || (
        <Link to="/admin/dashboard" className="px-4 py-2 font-bold mt-2">
          <Button>Go Back to Dashboard</Button>
        </Link>
      )}
    </div>
  );
}
