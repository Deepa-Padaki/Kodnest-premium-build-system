import type { InputProps } from '../../types';

export function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  className = '',
  type = 'text',
}: InputProps) {
  const baseInputStyles = 'w-full px-4 py-3 bg-white border border-border rounded text-foreground placeholder-muted transition-all duration-150 ease-in-out focus:border-accent';
  const errorStyles = error ? 'border-accent' : '';
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

  const inputElement = type === 'textarea' ? (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseInputStyles} ${errorStyles} ${disabledStyles} min-h-[120px] resize-vertical ${className}`}
    />
  ) : (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseInputStyles} ${errorStyles} ${disabledStyles} ${className}`}
    />
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      {inputElement}
      {error && (
        <p className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
