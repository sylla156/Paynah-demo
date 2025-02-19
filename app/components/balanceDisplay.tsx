"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BalanceDisplayProps {
  balance: string;
  availableBalance: string;
}

export function BalanceDisplay({
  balance,
  availableBalance,
}: BalanceDisplayProps) {
  const [showBalance, setShowBalance] = useState(true);
  const [showAvailableBalance, setShowAvailableBalance] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleBalance = () => {
    setIsAnimating(true);
    setShowBalance(!showBalance);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 820);
  };

  const toggleAvailableBalance = () => {
    setIsAnimating(true);
    setShowAvailableBalance(!showAvailableBalance);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 820);
  };

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="text-sm text-[#909090] font-light">Solde :</div>
        <div className={`mt-${showBalance ? 0 : 2} font-medium`}>
          {showBalance ? balance : "***********"}
        </div>
        <button
          onClick={toggleBalance}
          className="rounded-full hover:bg-gray-100 transition-colors"
          aria-label={showBalance ? "Hide balance" : "Show balance"}
        >
          <Image
            src="/icons/lock.svg"
            alt="Toggle visibility"
            width={14}
            height={8}
            className={cn(
              "transition-transform",
              isAnimating && showBalance && "animate-wiggle",
              showBalance && "opacity-50"
            )}
          />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm text-[#909090] font-light">Solde disponible :</div>
        <div className="mt-2 font-medium">
          {showAvailableBalance ? availableBalance : "***********"}
        </div>
        <button
          onClick={toggleAvailableBalance}
          className="rounded-full hover:bg-gray-100 transition-colors"
          aria-label={
            showAvailableBalance
              ? "Hide available balance"
              : "Show available balance"
          }
        >
          <Image
            src="/icons/lock.svg"
            alt="Toggle visibility"
            width={14}
            height={8}
            className={cn(
              "transition-transform",
              isAnimating && showAvailableBalance && "animate-wiggle",
              showAvailableBalance && "opacity-50"
            )}
          />
        </button>
      </div>
    </div>
  );
}
