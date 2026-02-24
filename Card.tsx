import type { CardProps } from '../../types';

export function Card({
  children,
  className = '',
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-10',
  };

  return (
    <div className={`bg-white border border-border rounded ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
