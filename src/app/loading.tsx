export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Pulsating logo placeholder */}
        <div className="h-16 w-16 animate-pulse rounded-full bg-muted" />
        <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />
      </div>
    </div>
  );
}
