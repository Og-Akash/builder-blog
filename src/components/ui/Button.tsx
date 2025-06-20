import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "solid",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "px-5 py-4 rounded-md font-medium transition";
  const variants = {
    solid: "bg-mint text-background",
    outline: "bg-transparent border-2 border-mint text-foreground",
  };

  return (
    <button className={cn(className, variants[variant], baseStyles)} {...props}>
      {children}
    </button>
  );
};

export default Button;
