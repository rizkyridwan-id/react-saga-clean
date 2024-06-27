import './ScreenLoading.css';

export interface ScreenLoadingProps {
  isLoading: boolean;
}
export default function ScreenLoading({ isLoading }: ScreenLoadingProps) {
  return (
    <>
      {isLoading && (
        <div className="absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-black/40">
          <div className="rounded-2xl bg-white p-8">
            <div className="loader z-50" />
          </div>
        </div>
      )}
    </>
  );
}
