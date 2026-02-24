import type { ButtonProps } from '../../types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out rounded';
  
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-opacity-90 disabled:bg-opacity-50',
    secondary: 'bg-transparent border border-accent text-accent hover:bg-accent hover:bg-opacity-5 disabled:opacity-50',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
