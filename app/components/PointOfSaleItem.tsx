import { cn } from "@/lib/utils";
import Image from "next/image";

interface PointOfSaleItemProps {
  name: string;
  reference: string;
  status: "Actif" | "Inactif";
  icon: "link" | "globe" | "tpe";
}

export function PointOfSaleItem({
  name,
  reference,
  status,
  icon,
}: PointOfSaleItemProps) {
  return (
    <div className="flex items-center gap-3 px-1 py-2 hover:cursor-pointer hover:bg-gray-50 rounded-xl">
      <Image
        src={`/icons/${icon}.svg`}
        alt={icon}
        width={40}
        height={40}
        className="h-8 w-8"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-900">{name}</p>
        <p className="text-xs text-[#BABABA]">{reference}</p>
      </div>
      <span
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium",
          status === "Actif"
            ? "bg-[#E6FFF6] text-[#00C66F]"
            : "bg-[#EBEBEB] text-[#707070]"
        )}
      >
        {status}
      </span>
    </div>
  );
}
