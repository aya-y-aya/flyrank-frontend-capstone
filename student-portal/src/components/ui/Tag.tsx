import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'secondary' | 'neutral';
  className?: string;
}

export default function Tag({
  children,
  variant = 'secondary',
  className = '',
  ...props
}: TagProps) {
  const variantStyles =
    variant === 'secondary'
      ? 'bg-secondary-light text-secondary border border-secondary-border'
      : 'bg-stone-100 text-foreground/80 border border-stone-200';

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full font-normal small-label ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

