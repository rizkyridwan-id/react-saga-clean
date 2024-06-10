import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export default function ErrorPageCounter() {
  return (
    <ErrorPage>
      <Link
        to="/"
        className="rounded-2xl bg-green-400 px-4 py-2 font-bold mt-4"
      >
        Go Back to Counter
      </Link>
    </ErrorPage>
  );
}
