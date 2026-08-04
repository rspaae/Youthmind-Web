import React from "react";
import { ButtonProps } from "@/types";
import { clsx } from "clsx";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  href,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-[0.98] select-none min-h-[44px]";

  const variants = {
    primary:
      "bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 border border-teal-500/20",
    secondary:
      "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 font-bold",
    outline:
      "border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/50 text-slate-800 active:bg-teal-100/50",
    ghost:
      "text-slate-600 hover:text-teal-700 hover:bg-slate-100/70 active:bg-slate-200/70",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-6 sm:px-7 py-3 sm:py-3.5 text-base sm:text-lg gap-2.5",
  };

  const combinedClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
