import { useAppDispatch, useAppSelector } from '../../../app/store';
import { CounterAction } from '../model/counterReducer';
import { CounterSaga } from '../model/counterSaga';
import Loading from '../../../shared/components/custom/Loading';
import { MagicWandIcon, TimerIcon } from '@radix-ui/react-icons';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const loading = useAppSelector((state) => state.counter.loading);
  const dispatch = useAppDispatch();
  return (
    <div className="mb-4 mt-6 flex flex-col items-center rounded-xl bg-white p-6">
      <div className="text-md mb-2 flex flex-row items-center gap-x-2 font-semibold text-slate-500">
        Count:{' '}
        <span className="rounded-xl bg-slate-500 px-1 py-1 text-slate-100">
          {count}
        </span>
      </div>
      <div className="my-2 flex flex-row gap-x-4">
        <button
          className="flex flex-row items-center rounded-2xl bg-pink-500 py-2 pl-3 pr-4 font-semibold text-slate-50 ring-offset-2 transition hover:bg-pink-600 focus:ring-2"
          onClick={() => dispatch(CounterAction.increment(1))}
        >
          <MagicWandIcon className="mr-2 h-4 w-4" /> Sync +1
        </button>
        <button
          className="flex min-w-32 items-center justify-center rounded-2xl bg-violet-500 py-2 font-semibold text-slate-50 ring-offset-2 transition hover:bg-violet-600 focus:ring-2 disabled:bg-violet-600"
          onClick={() => dispatch(CounterSaga.incrementAsync(1))}
          disabled={loading}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              <TimerIcon className="mr-2 h-4 w-4" /> Async + 1
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
