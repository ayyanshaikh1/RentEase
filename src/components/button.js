import React from "react";

export const Button = ({ children, variant = "primary", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-xl text-sm font-medium transition-all";
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
