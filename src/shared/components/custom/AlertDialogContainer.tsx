import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '..';

interface AlertDialogProps {
  message?: string;
  title?: string;
  isOpen: boolean;
  onClick: (...args: any[]) => void;
  onOpenChange: (v: boolean) => void;
}

export default function AlertDialogContainer(props: AlertDialogProps) {
  const { isOpen, title, message, onClick, onOpenChange } = props;

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title || 'Are you sure?'}</AlertDialogTitle>
          <AlertDialogDescription>
            {message || 'This action cannot be undone.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
