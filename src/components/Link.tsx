import React from 'react';

type LinkProps = React.HTMLProps<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ href, target, rel, children }) => {
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default Link;
