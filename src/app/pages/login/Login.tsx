import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import App from '@/app/App';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { AccessibilityIcon } from '@radix-ui/react-icons';
import { ChangeEvent, FormEvent, useState } from 'react';
import clsx from 'clsx';
import { redirect, useNavigate } from 'react-router-dom';

export function loginLoader() {
  if (localStorage.getItem('token') === 'passed') {
    return redirect('/admin/dashboard');
  }

  return null;
}

export default function Login() {
  const [isAlertShow, setAlertShow] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email !== 'test@gmail.com' || form.password !== 'test') {
      setError('Oops! Your username or password is incorrect');
      return;
    }
    localStorage.setItem('token', 'passed');
    navigate('/admin/dashboard');
  };

  return (
    <div className="w-full lg:h-screen lg:grid lg:grid-cols-3">
      <div className="flex items-center justify-center py-12 col-span-1">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2 mb-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  name="password"
                  onChange={handleChange}
                  id="password"
                  type="password"
                  required
                />
              </div>
              <p className="text-pink-400">{error}</p>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setAlertShow(!isAlertShow)}
              >
                {!isAlertShow ? 'Show' : 'Hide'} Test Account!
              </Button>
              <Alert className={clsx({ 'opacity-0': !isAlertShow })}>
                <AccessibilityIcon className="w-4 h-4" />
                <AlertTitle>Test Account</AlertTitle>
                <AlertDescription>
                  <p className="text-slate-500 mt-2">
                    Email: <strong>test@gmail.com</strong>
                  </p>
                  <p className="text-slate-500">
                    Password: <strong>test</strong>
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block col-span-2">
        <App />
      </div>
    </div>
  );
}
