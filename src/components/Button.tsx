import React from 'react';
import clsx from 'clsx';

import Link from './Link';

const variantStyles = {
  primary:
    'rounded-full bg-green-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-green-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300/50 active:bg-green-500',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
);

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(variantStyles[variant], className);

  return typeof props.href === 'undefined' ? (
    <button
      className={className}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  ) : (
    <Link className={className} {...props} />
  );
}
