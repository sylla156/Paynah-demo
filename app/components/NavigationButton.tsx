"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface NavigationButtonProps extends NavigationItem {
  className?: string;
}

export function NavigationButton({
  icon: Icon,
  label,
  isActive,
  onClick,
  className,
}: NavigationButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all",
        "bg-gray-100 active:scale-95",
        isActive && "bg-black text-white hover:bg-black/90",
        className
      )}
      variant={"ghost"}
      aria-label={label}
    >
      <Icon className="h-5 w-5" color={isActive ? "white" : "black"} />
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </Button>
  );
}
