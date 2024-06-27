import { Link, useRouteError } from 'react-router-dom';
import { ReactNode } from 'react';
import { Button } from '@/shared/components';
import errorImage from '@/assets/404error.png';
export default function ErrorPage({ children }: { children?: ReactNode }) {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <img src={errorImage} className="h-52 sm:h-72 md:h-96" />
      <p className="text-center text-xl text-slate-600">
        Sorry, an unexpected{' '}
        <span className="font-semibold underline decoration-pink-400 decoration-4">
          error
        </span>{' '}
        has occurred.
      </p>
      {children || (
        <Link to="/admin/dashboard" className="mt-2 px-4 py-2 font-bold">
          <Button>Go Back to Dashboard</Button>
        </Link>
      )}
    </div>
  );
}
