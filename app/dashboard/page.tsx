"use client";

import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useLoader } from "../contexts/LoaderContext";
import { DashboardHeader } from "../containers/dashboard/DashboardHeader";
import { QuickActions } from "../containers/dashboard/QuickActions";
import { RecentTransactions } from "../containers/dashboard/RecentTransactions";
import { PointsOfSale } from "../containers/dashboard/PointsOfSale";
import { NavigationBar } from "../containers/dashboard/NavigationBar";
import { SerenityHeader } from "../containers/dashboard/SerenityHeader";
import { AccountCard } from "../containers/dashboard/AccountCard";

const Dashbaord = () => {
  const { user } = useAuth();
  const { setIsLoading } = useLoader();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  return (
    <div
      style={{ minHeight: "calc(100dvh - 2rem)" }}
      className="bg-[#F8F9FB] pb-2"
    >
      <DashboardHeader />
      <main className="container">
        <SerenityHeader />
        <div className="flex">
          {/* First Col 20% */}
          <div className="flex w-[22.5%] flex-col justify-between items-center bg-red-400">
            {/* Card Section */}
            <AccountCard />
            {/* Quick Actions */}
            {/* <QuickActions /> */}
          </div>
          {/* Middle Col 60% */}
          <div className="flex w-[55%] flex-col gap-4 bg-blue-400 ">world </div>
          {/* Last Col 20% */}
          <div className="flex w-[22.5%] ">
            <PointsOfSale />
          </div>
        </div>
      </main>
      <NavigationBar />
    </div>
  );
};

export default Dashbaord;
