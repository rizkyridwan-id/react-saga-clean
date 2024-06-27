import { File, ListFilter, PlusCircle } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/store';
import ScreenLoading from '@/shared/components/custom/ScreenLoading';
import { useAlertDialog } from '@/shared/components/custom/AlertDialogProvider';
import { GuestAction, GuestTable } from '..';

export function GuestPage() {
  const dispatch = useDispatch();

  const guests = useAppSelector((state) => state.guest.data);
  const screenLoading = useAppSelector((state) => state.guest.loading);
  const alertDialog = useAlertDialog();

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('modify');
  };

  const handleDeleteClick = (id: string) => {
    const guest = guests.find((it) => it.id === id)!;
    alertDialog.showAlertDialog({
      title: 'Are you sure?',
      message: `Deleting user: "${guest.name}" cannot be undone.`,
      onClick: () => {
        dispatch(GuestAction.deleteGuestRequest(id));
      },
    });
  };

  const handleEditClick = (id: string) => {
    navigate('modify/' + id);
  };

  useEffect(() => {
    dispatch(GuestAction.getGuestRequest());
  }, [dispatch]);

  return (
    <div className="flex h-full w-full flex-col">
      <ScreenLoading isLoading={screenLoading} />
      <div className="flex flex-col sm:gap-4">
        <main className="grid flex-1 items-start gap-4 py-4 sm:py-0">
          <div className="flex items-center">
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-7 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button size="sm" className="h-7 gap-1" onClick={handleAddClick}>
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Guest
                </span>
              </Button>
            </div>
          </div>
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Guests</CardTitle>
              <CardDescription>Manage Guest Registration</CardDescription>
            </CardHeader>
            <CardContent>
              <GuestTable
                data={guests}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
              />
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>0-{guests.length}</strong> of{' '}
                <strong>{guests.length}</strong> Guests
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
