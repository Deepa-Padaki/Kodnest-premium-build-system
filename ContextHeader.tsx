import type { ContextHeaderProps } from '../../types';

export function ContextHeader({ title, subtitle }: ContextHeaderProps) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-serif font-semibold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-lg text-muted max-w-text">
        {subtitle}
      </p>
    </div>
  );
}
