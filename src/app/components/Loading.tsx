export default function Loading() {
  return (
    <div className="relative">
      <div className="h-4 w-4 rounded-full border-t-2 border-b-2 border-violet-300"></div>
      <div className="absolute top-0 left-0 h-4 w-4 rounded-full border-t-2 border-b-2 border-violet-100 animate-spin"></div>
    </div>
  );
}
