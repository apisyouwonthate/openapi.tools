import React from 'react';

export const gradients = {
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: '.527' },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
  emerald: [
    { stopColor: '#34D399', offset: '.08' },
    { stopColor: '#10B981', offset: '.837' },
  ],
  green: [
    { stopColor: '#6EE7B7', offset: '.08' },
    { stopColor: '#10B981', offset: '.837' },
  ],
};

export function Gradient({
  color = 'blue',
  ...props
}: {
  color?: keyof typeof gradients;
} & Omit<React.ComponentPropsWithoutRef<'radialGradient'>, 'color'>) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  );
}
