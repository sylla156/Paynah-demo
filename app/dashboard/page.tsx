"use client";

import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useLoader } from "../contexts/LoaderContext";
import { DashboardHeader } from "./DashboardHeader";
import { AccountCard } from "./AccountCard";
import { QuickActions } from "./QuickActions";
import { RecentTransactions } from "./RecentTransactions";
import { PointsOfSale } from "./PointsOfSale";
import { NavigationBar } from "./NavigationBar";

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
    <div className="min-h-screen bg-[#F8F9FB]">
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
