import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "default" | "icon";
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "solid",
  size = "default",
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-md font-medium transition cursor-pointer";

  const variants = {
    solid: "bg-mint text-background",
    outline: "bg-transparent border-2 border-mint text-foreground",
  };

  const sizes = {
    default: "px-5 py-4",
    icon: "p-2 w-8 h-8 flex items-center justify-center",
  };

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
