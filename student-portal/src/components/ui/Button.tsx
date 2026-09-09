import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'secondary-outline' | 'secondary-soft';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'min-h-9 px-3 py-1.5 text-xs',
    md: 'min-h-11 px-5 py-2.5 text-sm sm:text-base',
    lg: 'min-h-12 px-6 py-3 text-base',
  }[size];

  const variantStyles = {
    // Primary: Deep Magenta (#BE185D)
    primary:
      'bg-primary text-white hover:bg-primary-hover active:bg-primary-active active:scale-[0.99] focus-visible:ring-primary/50 shadow-xs',
    // Secondary solid: Soft Lavender (#A855F7), Active (#7E22CE)
    secondary:
      'bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active active:scale-[0.99] focus-visible:ring-secondary/50 shadow-xs',
    // Secondary outline
    'secondary-outline':
      'border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white active:bg-secondary-active active:border-secondary-active active:text-white active:scale-[0.99] focus-visible:ring-secondary/50',
    // Secondary soft
    'secondary-soft':
      'bg-secondary-light text-secondary border border-secondary-border hover:bg-secondary hover:text-white active:bg-secondary-active active:border-secondary-active active:text-white active:scale-[0.99] focus-visible:ring-secondary/50',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

