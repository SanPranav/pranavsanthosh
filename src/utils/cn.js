import clsx from 'clsx';

/**
 * Utility for merging class names with CVA-like pattern support.
 * Provides a foundation for consistent component styling.
 * Reference: shadcn/ui composition pattern
 */
export function cn(...classes) {
  return clsx(...classes);
}
