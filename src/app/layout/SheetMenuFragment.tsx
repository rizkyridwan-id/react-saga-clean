import { Button, Sheet, SheetContent, SheetTrigger } from '@/shared/components';
import { ExitIcon } from '@radix-ui/react-icons';
import { Home, Menu, Newspaper, Package2, Users } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SheetMenuFragment() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-2 text-lg font-semibold text-rose-500"
              onClick={() => setSheetOpen(false)}
            >
              <Package2 className="h-6 w-6" />
              <span className="text-black">Saga Dashboard</span>
            </Link>
            <hr className="my-2" />
            <Link
              to="/admin/dashboard"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setSheetOpen(false)}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="guests"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setSheetOpen(false)}
            >
              <Users className="h-5 w-5" />
              Guests
            </Link>
            <Link
              to="registration-report"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setSheetOpen(false)}
            >
              <Newspaper className="h-5 w-5" />
              Registration Reports
            </Link>
          </nav>
          <div className="mt-auto">
            <Button size="sm" className="w-full" onClick={handleSubmit}>
              <ExitIcon className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
