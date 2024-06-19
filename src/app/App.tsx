import Counter from './pages/counter/Counter';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import reduxSagaLogo from '@/assets/redux-saga.svg';
import './App.css';
function App() {
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
        <span className="underline decoration-pink-400 decoration-4">
          World
        </span>
      </h1>
      <h2 className="font-semibold text-2xl italic text-slate-500">
        Redux Saga Demo
      </h2>
      <Counter />
      <p className="text-slate-400 italic">
        Note: Click on the Vite and React logos to learn more
      </p>
      {/* <p className="text-slate-600 underline decoration-indigo-400 decoration-4 font-bold mt-2">
        <Link to={`admin/dashboard`}>Go to Dashboard</Link>
      </p> */}
    </div>
  );
}

export default App;
