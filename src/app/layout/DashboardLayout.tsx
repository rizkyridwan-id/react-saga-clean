import { Bell, Radar } from 'lucide-react';
import { Button, BreadcrumbRouter } from '@/shared/components';
import { Link, Outlet } from 'react-router-dom';
import SideMenuFragment from './SideMenuFragment';
import SheetMenuFragment from './SheetMenuFragment';

export default function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full bg-muted/40 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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
          <SideMenuFragment />
        </div>
      </div>
      <div className="flex flex-col">
        <SheetMenuFragment />
        <main className="relative flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-4 lg:gap-6">
          <div className="z-30 hidden items-center gap-4 border-b bg-background sm:static sm:h-6 sm:border-0 sm:bg-transparent md:flex">
            <BreadcrumbRouter className="hidden md:flex" />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
