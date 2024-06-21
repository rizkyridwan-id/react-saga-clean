import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/setup/redux/store';
import { GuestSaga } from './redux/guest-saga';
import clsx from 'clsx';
export default function Guest() {
  const dispatch = useDispatch();
  const guests = useAppSelector((state) => state.guest.data);

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('modify');
  };

  useEffect(() => {
    dispatch(GuestSaga.getData());
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:py-0">
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead className="hidden lg:table-cell">
                      Origin
                    </TableHead>
                    <TableHead className="hidden lg:table-cell">
                      Created At
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {guests.map((guest) => (
                    <TableRow key={guest.id}>
                      <TableCell className="font-medium" width={150}>
                        {guest.name}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell" width={150}>
                        {guest.email}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell" width={95}>
                        <Badge
                          className={clsx({
                            'bg-sky-500': true,
                            'bg-rose-400': guest.gender === 'Female',
                          })}
                        >
                          {guest.gender}
                        </Badge>
                      </TableCell>
                      <TableCell>{`${guest.state}, ${guest.city}`}</TableCell>
                      <TableCell className="">
                        {new Date(guest.createdAt).toDateString()}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
