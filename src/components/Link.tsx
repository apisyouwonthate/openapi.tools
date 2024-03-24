import React from 'react';

type LinkProps = React.HTMLProps<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({
  href,
  target,
  rel,
  children,
  ...rest
}) => {
  return (
    <a href={href} target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
};

export default Link;
