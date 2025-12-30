import React from 'react';

export const WebsiteIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      aria-label="Website icon"
      viewBox="0 0 16 16"
      role="img"
      fill="currentColor"
      {...props}
    >
      <title>Website</title>
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 0 1 12.13-3h-1.67a5 5 0 0 0-1.46-2.05l.94-.93A6.47 6.47 0 0 1 14.5 8a6.47 6.47 0 0 1-3.06 5.48l-.94-.93A5 5 0 0 0 11.96 11h1.67A6.5 6.5 0 0 1 1.5 8Zm6.5 4.5c-.46 0-1.73-1.62-2-4.5h4c-.27 2.88-1.54 4.5-2 4.5ZM6 7.5c.27-2.88 1.54-4.5 2-4.5.46 0 1.73 1.62 2 4.5H6Zm-1.5 0H2.04a5 5 0 0 0 1.46 3.55l.94-.93a5.52 5.52 0 0 1-.94-2.62Zm0-1c.1-.92.38-1.78.94-2.62l-.94-.93a5 5 0 0 0-1.46 3.55h1.46Zm5.46 3.55.94.93a5 5 0 0 0 1.46-3.55h-1.46c-.1.92-.38 1.78-.94 2.62Zm.94-6.17-.94.93c.56.84.84 1.7.94 2.62h1.46a5 5 0 0 0-1.46-3.55Z" />
    </svg>
  );
};

export default WebsiteIcon;
