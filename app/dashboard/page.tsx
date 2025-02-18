"use client";

import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useLoader } from "../contexts/LoaderContext";
import { DashboardHeader } from "../containers/dashboard/DashboardHeader";
import { AccountCard } from "../containers/dashboard/AccountCard";
import { QuickActions } from "../containers/dashboard/QuickActions";
import { RecentTransactions } from "../containers/dashboard/RecentTransactions";
import { PointsOfSale } from "../containers/dashboard/PointsOfSale";
import { NavigationBar } from "../containers/dashboard/NavigationBar";

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
    <div style={{ minHeight: "calc(100dvh - 2rem)" }} className="bg-[#F8F9FB] pb-2">
      <DashboardHeader />
      {/* <main className="container px-4 py-6">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <h1 className="text-xl font-medium text-gray-800">
              Serenity space
            </h1>
            <div className="grid gap-6">
              <AccountCard />
              <QuickActions />
              <RecentTransactions />
            </div>
          </div>
          <div className="space-y-6">
            <PointsOfSale />
          </div>
        </div>
      </main> */}
      <NavigationBar />
    </div>
  );
};

export default Dashbaord;
