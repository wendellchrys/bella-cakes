import React, { forwardRef } from 'react';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      size = 'medium',
      fullWidth = false,
      minimal = false,
      icon,
      as,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center border-0 rounded focus:outline-none transition-colors';
    const sizeClasses = {
      small: 'h-12 text-sm',
      medium: 'h-16 px-4 text-base',
      large: 'h-20 px-6 text-lg',
    };
    const sizeIcon = {
      small: 'text-base',
      medium: 'text-lg',
      large: 'text-xl',
    };
    const fullwidthClass = fullWidth ? 'w-full' : '';
    const minimalClass = minimal
      ? 'bg-transparent hover:bg-gray-100 text-primary hover:text-primary-dark'
      : 'w-auto p-4 bg-green-500 hover:bg-green-700 text-white';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const iconClass = icon ? 'flex-shrink-0' : '';

    // Juntando as classes com base nas propriedades
    const classes = [
      baseClasses,
      sizeClasses[size],
      sizeIcon[size],
      fullwidthClass,
      minimalClass,
      iconClass,
      disabledClass,
    ]
      .filter(Boolean)
      .join(' ');

    const Component: React.ElementType = as || 'button';

    return (
      <Component ref={ref} className={classes} disabled={disabled} {...props}>
        {icon && <span className="icon-container pr-2">{icon}</span>}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
