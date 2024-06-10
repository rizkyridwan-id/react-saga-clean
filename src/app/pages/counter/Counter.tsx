import { useAppDispatch, useAppSelector } from '../../../setup/redux/store';
import { CounterAction } from './redux/counter-reducer';
import { CounterSaga } from './redux/counter-saga';
import Loading from '../../components/Loading';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const loading = useAppSelector((state) => state.counter.loading);
  const dispatch = useAppDispatch();
  return (
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
  );
}
