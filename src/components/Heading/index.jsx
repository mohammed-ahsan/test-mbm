import React from "react";

const sizes = {
  xl: "text-4xl font-bold leading-[43px] md:text-[34px] sm:text-[32px]",
  s: "text-lg font-bold leading-[22px]",
  md: "text-2xl font-bold leading-[29px] md:text-[22px]",
  xs: "text-[17px] font-bold leading-[241.19%]",
  lg: "text-[32px] font-bold leading-[38px] md:text-3xl sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
