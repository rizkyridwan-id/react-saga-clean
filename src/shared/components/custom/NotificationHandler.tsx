import { useAppSelector } from '@/app/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearToast } from '@/shared/store';
import { toast } from '..';

export default function NotificationHandler() {
  const dispatch = useDispatch();
  const { toast: toastState } = useAppSelector((state) => state.utils);

  useEffect(() => {
    if (toastState.message) {
      if (toastState.type === 'success')
        toast({ description: toastState.message });
      else if (toastState.type === 'error')
        toast({ description: toastState.message, variant: 'destructive' });
      dispatch(clearToast());
    }
  }, [toastState, dispatch]);

  return null;
}
