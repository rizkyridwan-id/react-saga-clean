import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/404-error.svg';
import { ReactNode } from 'react';
export default function ErrorPage({ children }: { children?: ReactNode }) {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex w-full py-32 flex-col items-center justify-center"
    >
      <img src={errorImage} className="h-96" />
      <p className="text-xl text-slate-600">
        Sorry, an unexpected{' '}
        <span className="decoration-green-400 underline decoration-4 font-semibold">
          error
        </span>{' '}
        has occurred.
      </p>
      {children || (
        <Link
          to="/admin/dashboard"
          className="rounded-2xl bg-green-400 px-4 py-2 font-bold mt-4"
        >
          Go Back to Dashboard
        </Link>
      )}
    </div>
  );
}
