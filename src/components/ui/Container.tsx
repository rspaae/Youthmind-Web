import React from "react";
import { ContainerProps } from "@/types";
import { clsx } from "clsx";

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "medium",
  children,
}) => {
  const sizeClasses = {
    small: "max-w-4xl",
    medium: "max-w-7xl",
    large: "max-w-[90rem]",
    full: "max-w-full",
  };

  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
