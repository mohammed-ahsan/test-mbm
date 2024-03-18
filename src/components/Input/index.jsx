import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  outline: {
    gray_500: "border-gray-500 border border-solid text-gray-800",
  },
};
const sizes = {
  xs: "h-[74px] pl-6 pr-[35px] text-2xl",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "gray_500",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-2xl border-gray-500 border border-solid rounded-lg  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray_500"]),
};

export { Input };
