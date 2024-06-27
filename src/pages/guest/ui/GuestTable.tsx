import DataTable from '@/shared/components/custom/DataTable';
import { Button } from '@/shared/components/ui/button';

import { ColumnDef } from '@tanstack/react-table';
import { RotateCw } from 'lucide-react';
import { useAppSelector } from '@/app/store';
import DropdownContainer, {
  DropdownContent,
} from '@/shared/components/custom/DropdownContainer';
import { Guest } from '..';
import { Badge } from '@/shared/components';

export interface GuestTableProps {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  data: Guest[];
}

export function GuestTable(props: GuestTableProps) {
  const rowLoading = useAppSelector((state) => state.guest.rowLoading);
  const guestColumns: ColumnDef<Guest>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
      cell: ({ row }) => {
        const { gender } = row.original;
        const variantBadge: 'blue' | 'pink' | 'secondary' =
          gender === 'male'
            ? 'blue'
            : gender === 'female'
              ? 'pink'
              : 'secondary';

        return <Badge variant={variantBadge}>{row.original.gender}</Badge>;
      },
    },
    {
      accessorKey: 'city',
      header: 'City',
    },
    {
      accessorKey: 'state',
      header: 'State',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        if (rowLoading === row.original.id)
          return (
            <Button
              variant="ghost"
              className="min-w-9 animate-spin disabled:text-primary"
              size="icon"
              disabled
            >
              <RotateCw className="size-4" />
            </Button>
          );

        const dropdownContent: DropdownContent[] = [
          { type: 'label', text: 'Actions', separator: true },
          {
            type: 'button',
            text: 'Edit',
            onClick: () => props.onEdit(row.original.id),
          },
          {
            type: 'button',
            text: 'Delete',
            onClick: () => props.onDelete(row.original.id),
          },
        ];

        return <DropdownContainer contents={dropdownContent} />;
      },
    },
  ];
  return <DataTable columns={guestColumns} data={props.data} />;
}
