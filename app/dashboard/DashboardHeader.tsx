"use client";

import Image from "next/image";
import { CompanySelector } from "../components/CompanySelector";
import { BalanceDisplay } from "./balanceDisplay";

export function DashboardHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between py-1">
        <Image
          width={44}
          height={44}
          src={"/icons/miniLogo.svg"}
          alt="Paynah"
        />
        <div className="flex justify-end items-center gap-x-7 w-full">
          <BalanceDisplay
            balance="800 300 FCFA"
            availableBalance="750 000 FCFA"
          />
          <CompanySelector />
        </div>
      </div>
    </header>
  );
}
