import { useAppDispatch, useAppSelector } from '../../setup/redux/store';
import reactLogo from '../../assets/react.svg';
import { increment } from './redux/counter-reducer';
import viteLogo from '../../assets/vite.svg';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
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
      </div>
      <h1 className="font-bold text-3xl">Hello World,</h1>
      <h2 className="font-semibold text-2xl italic text-slate-500">
        Vite + React
      </h2>
      <div className="flex flex-col items-center bg-slate-100 p-6 rounded-xl mb-4 mt-6">
        <button
          className="bg-sky-500 text-slate-50 rounded-2xl font-semibold px-4 py-2 focus:ring-2 ring-offset-4"
          onClick={() => dispatch(increment(1))}
        >
          count is {count}
        </button>
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
