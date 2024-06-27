import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import AlertDialogContainer from './AlertDialogContainer';

interface ShowAlertDialogProps {
  title?: string;
  message?: string;
  onClick: () => void;
}

interface AlertDialogContext {
  showAlertDialog: (option: ShowAlertDialogProps) => void;
}
const AlertDialogContext = createContext<AlertDialogContext | null>(null);

const AlertDialogProvider = ({ children }: any) => {
  const initialState = useMemo<ShowAlertDialogProps>(
    () => ({
      title: '',
      message: '',
      onClick: () => {},
    }),
    []
  );

  const [alertDialogProps, setAlertDialogProps] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const showAlertDialog = useCallback(
    (option: ShowAlertDialogProps) => {
      setAlertDialogProps({
        title: option.title || '',
        message: option.message || '',
        onClick: option.onClick,
      });
      setIsOpen(true);
    },
    [setAlertDialogProps, setIsOpen]
  );

  const closeAlertDialog = useCallback(
    (value: boolean) => {
      setAlertDialogProps(initialState);
      setIsOpen(value);
    },
    [initialState, setAlertDialogProps, setIsOpen]
  );

  return (
    <AlertDialogContext.Provider value={{ showAlertDialog }}>
      <AlertDialogContainer
        isOpen={isOpen}
        onOpenChange={closeAlertDialog}
        message={alertDialogProps.message}
        onClick={alertDialogProps.onClick}
        title={alertDialogProps.title}
      />
      {children}
    </AlertDialogContext.Provider>
  );
};

const useAlertDialog = () => useContext(AlertDialogContext)!;

export { useAlertDialog };
export default AlertDialogProvider;
