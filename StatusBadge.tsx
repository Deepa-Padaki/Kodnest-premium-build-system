import type { StatusBadgeProps } from '../../types';

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    'not-started': {
      label: 'Not Started',
      className: 'bg-gray-200 text-gray-700',
    },
    'in-progress': {
      label: 'In Progress',
      className: 'bg-amber-100 text-amber-800',
    },
    'shipped': {
      label: 'Shipped',
      className: 'bg-green-100 text-green-800',
    },
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
