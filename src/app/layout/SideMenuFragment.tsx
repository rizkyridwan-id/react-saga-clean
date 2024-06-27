import { Button } from '@/shared/components';
import { ExitIcon } from '@radix-ui/react-icons';
import { Home, Newspaper, Users } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SideMenuFragment() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <NavLink
            to="dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-[current=page]:bg-rose-50 aria-[current=page]:text-rose-700"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>
          <hr className="my-2" />
          <NavLink
            to="guests"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-[current=page]:bg-rose-50 aria-[current=page]:text-rose-700"
          >
            <Users className="h-4 w-4" />
            Guests
          </NavLink>
          <NavLink
            to="registration-report"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-[current=page]:bg-rose-50 aria-[current=page]:text-rose-700"
          >
            <Newspaper className="h-4 w-4" />
            Registration Report
          </NavLink>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button size="sm" className="w-full" onClick={handleSubmit}>
          <ExitIcon className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </>
  );
}
