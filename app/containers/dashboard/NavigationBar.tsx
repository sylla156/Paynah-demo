import {
  NavigationButton,
  NavigationItem,
} from "@/app/components/NavigationButton";
import { useModal } from "@/app/contexts/ModalContext";
import {
  Link2,
  Download,
  ArrowLeftRight,
  Users2,
  LayoutGrid,
  Wallet,
  RefreshCw,
  MapPin,
  Code2,
  MessageCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { UserSettings } from "./userSettings";
import { Button } from "@/components/ui/button";

export function NavigationBar() {
  const { openModal } = useModal();
  const [activeId, setActiveId] = useState("transfer");
  const navigationItems: NavigationItem[] = [
    {
      id: "apps",
      icon: LayoutGrid,
      label: "Applications",
    },
    {
      id: "transfer",
      icon: ArrowLeftRight,
      label: "Transfert",
      isActive: true,
    },
    {
      id: "link",
      icon: Link2,
      label: "Liens",
    },
    {
      id: "wallet",
      icon: Wallet,
      label: "Portefeuille",
    },
    {
      id: "sync",
      icon: RefreshCw,
      label: "Synchroniser",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Localisation",
    },
    {
      id: "download",
      icon: Download,
      label: "Télécharger",
    },
    {
      id: "api",
      icon: Code2,
      label: "API",
    },
    {
      id: "messages",
      icon: MessageCircle,
      label: "Messages",
    },
    {
      id: "users",
      icon: Users2,
      label: "Utilisateurs",
    },
  ];

  const handleSettingsClick = () => {
    openModal(<UserSettings />);
  };

  return (
    <div className="container fixed bottom-10 left-0 right-0  bg-[#F8F9FB]">
      <div className="flex h-16 items-center justify-between px-4 bg-white rounded-xl">
        <div className="flex items-center gap-2">
          <Image
            width={135}
            height={48}
            src={"/icons/logo.svg"}
            alt="Paynah"
            className="w-[5.5rem]"
          />
        </div>
        <div className="flex items-center gap-4">
          {navigationItems.map((item) => (
            <NavigationButton
              key={item.id}
              {...item}
              isActive={item.id === activeId}
              onClick={() => setActiveId(item.id)}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleSettingsClick}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            variant={'ghost'}
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button className="h-12 w-12 rounded-xl bg-[#FFD7CC] px-4 py-1 text-sm font-medium text-[#FF6934] hover:bg-[#FFD7CC]/90 transition-colors">
            JV
          </Button>
        </div>
      </div>
    </div>
  );
}
