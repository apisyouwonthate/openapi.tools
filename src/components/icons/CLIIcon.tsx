import React from 'react';

// Source: https://lucide.dev/icons/square-terminal
export const CLIIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      aria-label="CLI icon"
      viewBox="0 0 24 24"
      role="img"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>CLI</title>
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    </svg>
  );
};

export default CLIIcon;
