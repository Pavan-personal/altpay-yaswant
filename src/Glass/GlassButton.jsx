import React from "react";
const combineClassNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  
function GlassButton({
  children,
  className,
  blur = "md",
  opacity = "20",
  ...props
}) {
  return (
    <button
      className={combineClassNames(
        `px-6 py-3 rounded-full bg-white/[0.${opacity}] backdrop-blur-${blur} 
          border border-white/30 shadow-md hover:shadow-lg transition-all
          duration-300 hover:bg-white/30 active:scale-95`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default GlassButton;
