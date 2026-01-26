import React from 'react';

// Source: https://lucide.dev/icons/cloud
export const SaaSIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      aria-label="SaaS icon"
      viewBox="0 0 24 24"
      role="img"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>SaaS</title>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
};

export default SaaSIcon;
