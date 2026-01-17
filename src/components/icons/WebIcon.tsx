import React from 'react';

// Source: https://lucide.dev/icons/globe
export const WebIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      aria-label="Web icon"
      viewBox="0 0 24 24"
      role="img"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Web</title>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
};

export default WebIcon;
