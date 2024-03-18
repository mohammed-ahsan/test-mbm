import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    deep_orange_A200: "bg-deep_orange-A200 text-white-A700",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  md: "h-[56px] px-[21px] text-lg",
  lg: "h-[65px] px-[35px] text-lg",
  sm: "h-[45px] px-[35px] text-2xl",
  xs: "h-[38px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "deep_orange_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_orange_A200", "white_A700"]),
};

export { Button };
