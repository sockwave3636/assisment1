/**
 * Skeleton loader for content-heavy pages.
 * Use instead of full-page spinners to reduce perceived wait time.
 */

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
}

export default function SkeletonLoader({ className = "", lines = 4 }: SkeletonLoaderProps) {
  return (
    <div className={`animate-pulse space-y-4 ${className}`} role="status" aria-label="Loading content">
      <div className="h-8 bg-gray-200 rounded-lg w-3/4" />
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-4 bg-gray-200 rounded ${i === lines - 1 ? "w-3/5" : "w-full"}`} />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
