"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, error, onBlur, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn(
            "h-12 w-full bg-[#F5F5F5] border-0 rounded-xl px-4 pr-12",
            "placeholder:text-[#626262]",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-[#ECECEC]",
            "transition-colors duration-200",
            error && "border-2 border-[#E95D5D]",
            className
          )}
          ref={ref}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-80 transition-all duration-200 ease-in-out transform hover:scale-110 rounded-full"
        >
          <Image
            src="/icons/key.svg"
            alt="Toggle password visibility"
            width={28}
            height={19}
            className={`opacity-70 transition-transform duration-200 ${
              showPassword ? "rotate-180" : "rotate-0"
            }`}
          />
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
