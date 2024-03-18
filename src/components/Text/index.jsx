import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  lg: "text-[17px] font-normal",
  s: "text-sm font-normal",
  "2xl": "text-2xl font-normal leading-[29px] md:text-[22px]",
  xl: "text-lg font-normal leading-[22px]",
  md: "text-base font-normal leading-[19px]",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
