import React from "react";

const Text = ({
  className,
  href = "#",
  target = "_blank",
  children,
  ...props
}) => {
  return (
    <a className={className} target={target} {...props}>
      {children}
    </a>
  );
};

export default Text;
