import {
  Bell,
  Home,
  Menu,
  Package2,
  Newspaper,
  Users,
  Radar,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ExitIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import BreadcrumbRouter from '../components/BreadcrumbRouter';
export default function DashboardLayout() {
  const navigate = useNavigate();
  const [sheetOpen, setSheetOpen] = useState(false);
  const handleSubmit = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-muted/40">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <Radar className="h-6 w-6 text-primary" />
              <span className="text-sm lg:text-base">Saga Dashboard</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
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

              {/* <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
               */}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Button size="sm" className="w-full" onClick={handleSubmit}>
              <ExitIcon className="w-4 h-4 mr-2" />
              Logout
            </Button>
            {/* <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
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
                  to="/registration-report"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSheetOpen(false)}
                >
                  <Newspaper className="h-5 w-5" />
                  Registration Reports
                </Link>
                {/* <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                */}
              </nav>
              <div className="mt-auto">
                <Button size="sm" className="w-full" onClick={handleSubmit}>
                  <ExitIcon className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <header className="hidden sticky top-0 z-30 md:flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <BreadcrumbRouter className="hidden md:flex mt-4" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
