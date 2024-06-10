import { useAppDispatch, useAppSelector } from '../../../setup/redux/store';
import reactLogo from '../../../assets/react.svg';
import viteLogo from '../../../assets/vite.svg';
import reduxSagaLogo from '../../../assets/redux-saga.svg';
import { CounterAction } from './redux/counter-reducer';
import { CounterSaga } from './redux/counter-saga';
import Loading from '../../components/Loading';
import './Counter.css';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const loading = useAppSelector((state) => state.counter.loading);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row mb-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://redux-saga.js.org/" target="_blank">
          <img
            src={reduxSagaLogo}
            className="logo saga bg-cover"
            alt="Saga logo"
          />
        </a>
      </div>
      <h1 className="font-bold text-3xl">
        Hello{' '}
        <span className="underline decoration-green-400 decoration-4">
          World
        </span>
      </h1>
      <h2 className="font-semibold text-2xl italic text-slate-500">
        Vite + React + R Saga
      </h2>
      <div className="flex flex-col items-center bg-slate-100 p-6 rounded-xl mb-4 mt-6">
        <div className="text-md font-semibold text-slate-500 mb-2 flex flex-row items-center gap-x-2">
          Count:{' '}
          <span className="py-1 px-1 bg-slate-500 rounded-xl text-slate-100">
            {count}
          </span>
        </div>
        <div className="flex flex-row gap-x-4 my-2">
          <button
            className="bg-sky-500 text-slate-50 rounded-2xl font-semibold px-4 py-2 focus:ring-2 ring-offset-2"
            onClick={() => dispatch(CounterAction.increment(1))}
          >
            Sync +1
          </button>
          <button
            className="bg-violet-500 disabled:bg-violet-600 text-slate-50 rounded-2xl font-semibold min-w-24 py-2 focus:ring-2 ring-offset-2 flex justify-center items-center"
            onClick={() => dispatch(CounterSaga.incrementAsync(1))}
            disabled={loading}
          >
            {loading ? <Loading /> : 'Async + 1'}
          </button>
        </div>
        <p className="mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-slate-400 italic">
        Note: Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
