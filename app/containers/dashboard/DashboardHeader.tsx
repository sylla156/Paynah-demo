"use client";

import Image from "next/image";
import { CompanySelector } from "../../components/CompanySelector";
import { BalanceDisplay } from "../../components/balanceDisplay";

export function DashboardHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-between py-1">
        <Image
          width={44}
          height={44}
          src={"/icons/miniLogo.svg"}
          alt="Paynah"
        />
        <div className="flex justify-end items-center gap-x-7 w-full mt-2 md:mt-0">
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
