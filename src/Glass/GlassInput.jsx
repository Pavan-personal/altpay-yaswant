import React from "react";
const combineClassNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  
function GlassInput({ className, blur = "md", opacity = "10", ...props }) {
  return (
    <input
      className={combineClassNames(
        `px-4 py-3 rounded-lg bg-white/[0.${opacity}] backdrop-blur-${blur}
          border border-white/30 shadow-sm focus:outline-none
          focus:ring-2 focus:ring-altpay-500/50 focus:border-transparent
          transition-all duration-300 w-full`,
        className
      )}
      {...props}
    />
  );
}

export default GlassInput;
