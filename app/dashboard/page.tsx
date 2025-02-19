"use client";

import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useLoader } from "../contexts/LoaderContext";
import { DashboardHeader } from "../containers/dashboard/DashboardHeader";
import { RecentTransactions } from "../containers/dashboard/RecentTransactions";
import { PointsOfSale } from "../containers/dashboard/PointsOfSale";
import { NavigationBar } from "../containers/dashboard/NavigationBar";
import { SerenityHeader } from "../containers/dashboard/SerenityHeader";
import { AccountCard } from "../containers/dashboard/AccountCard";
import { QuickActions } from "../containers/dashboard/QuickActions";
import { AccountCards } from "../containers/dashboard/AccountCards";

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
  }, [user, router, setIsLoading]);

  return (
    <div className="bg-[#F8F9FB] flex flex-col w-full justify-between items-center" style={{ minHeight: 'calc(100vh - 5vh)' }}>
      <DashboardHeader />
      <main className="container">
        <SerenityHeader />
        <div className="flex flex-col lg:flex-row gap-x-3">
          <div className="flex w-full lg:w-[22.5%] flex-col gap-y-3 justify-start items-center">
            <AccountCard />
            <QuickActions />
          </div>
          <div className="flex w-full lg:w-[55%] flex-col gap-4">
            <AccountCards />
            <RecentTransactions />
          </div>
          <div className="flex w-full lg:w-[22.5%]">
            <PointsOfSale />
          </div>
        </div>
      </main>
      <NavigationBar />
    </div>
  );
};

export default Dashbaord;
