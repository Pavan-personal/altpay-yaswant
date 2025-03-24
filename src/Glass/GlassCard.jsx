import React from 'react';

// Simple className utility function to replace cn from utils
const combineClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const GlassCard = ({
  children,
  className,
  blur = "md",
  opacity = "20",
  ...props
}) => {
  return (
    <div
      className={combineClassNames(
        `rounded-2xl bg-white/[0.${opacity}] backdrop-blur-${blur} border border-white/30 shadow-lg transition-all duration-300`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
