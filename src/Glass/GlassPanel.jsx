import React from "react";
const combineClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function GlassPanel({
  children,
  className,
  blur = "md",
  opacity = "10",
  ...props
}) {
  return (
    <div
      className={combineClassNames(
        `rounded-3xl bg-white/[0.${opacity}] backdrop-blur-${blur}
        border border-white/20 shadow-xl`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlassPanel;
