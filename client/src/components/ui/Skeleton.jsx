/**
 * Skeleton — animated shimmer placeholder used while data loads.
 * Replaces blank space or spinners on Dashboard, Messages, Projects, Invoices, Files.
 *
 * Usage:
 *   <Skeleton width="100%" height="120px" rounded="lg" />
 *   <Skeleton className="h-6 w-3/4" />
 */
export default function Skeleton({
  width = '100%',
  height = '1rem',
  rounded = 'md',
  className = '',
  style = {},
}) {
  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={`skeleton ${roundedMap[rounded] ?? 'rounded-md'} ${className}`}
      style={{ width, height, ...style }}
      aria-hidden="true"
      role="presentation"
    />
  );
}

/**
 * SkeletonCard — pre-composed card skeleton (3 rows + header)
 */
export function SkeletonCard({ className = '' }) {
  return (
    <div className={`p-6 rounded-2xl bg-bg-surface border border-border space-y-4 ${className}`}>
      <div className="flex items-center gap-3">
        <Skeleton width="40px" height="40px" rounded="xl" />
        <div className="flex-1 space-y-2">
          <Skeleton height="14px" width="60%" />
          <Skeleton height="12px" width="40%" />
        </div>
      </div>
      <Skeleton height="12px" width="100%" />
      <Skeleton height="12px" width="80%" />
      <Skeleton height="12px" width="90%" />
    </div>
  );
}

/**
 * SkeletonTable — table row skeletons
 */
export function SkeletonTable({ rows = 5, cols = 4 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div key={rowIdx} className="flex gap-4 items-center px-4 py-3 rounded-xl bg-bg-surface border border-border">
          {Array.from({ length: cols }).map((_, colIdx) => (
            <Skeleton
              key={colIdx}
              height="14px"
              width={colIdx === 0 ? '30%' : `${Math.floor(Math.random() * 30) + 15}%`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
