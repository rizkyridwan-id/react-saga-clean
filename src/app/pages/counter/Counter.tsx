import { useAppDispatch, useAppSelector } from '../../../setup/redux/store';
import { CounterAction } from './redux/counter-reducer';
import { CounterSaga } from './redux/counter-saga';
import Loading from '../../components/Loading';
import { MagicWandIcon, TimerIcon } from '@radix-ui/react-icons';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const loading = useAppSelector((state) => state.counter.loading);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl mb-4 mt-6">
      <div className="text-md font-semibold text-slate-500 mb-2 flex flex-row items-center gap-x-2">
        Count:{' '}
        <span className="py-1 px-1 bg-slate-500 rounded-xl text-slate-100">
          {count}
        </span>
      </div>
      <div className="flex flex-row gap-x-4 my-2">
        <button
          className="bg-pink-500 hover:bg-pink-600 transition text-slate-50 rounded-2xl font-semibold pl-3 pr-4 py-2 focus:ring-2 ring-offset-2 flex flex-row items-center"
          onClick={() => dispatch(CounterAction.increment(1))}
        >
          <MagicWandIcon className="mr-2 w-4 h-4" /> Sync +1
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 transition disabled:bg-violet-600 text-slate-50 rounded-2xl font-semibold min-w-32 py-2 focus:ring-2 ring-offset-2 flex justify-center items-center"
          onClick={() => dispatch(CounterSaga.incrementAsync(1))}
          disabled={loading}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              <TimerIcon className="mr-2 w-4 h-4" /> Async + 1
            </>
          )}
        </button>
      </div>
      <p className="mt-2">
        See <code>./Counter.tsx</code> to observe the flow.
      </p>
    </div>
  );
}
