import { Lock } from "lucide-react";
import Image from "next/image";

export function AccountCard() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-3xl from-black to-gray-800 p-4 text-white   bg-no-repeat  bg-[url('/images/card.png')] bg-cover bg-center bg-[padding-box]">
      <div className="space-y-10">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-x-2">
            <div>
              <div className="text-sm font-medium">Compte principal</div>
              <div className="text-xs text-[#AFAFAF]">PA48391CI</div>
            </div>
            <div
              className="flex items-start gap-1 rounded-full bg-[#2E2E2E] px-2 py-1 text-sm text-[#D0D0D0] backdrop-blur-sm"
              style={{ fontSize: "0.7rem" }}
            >
              <span>Franc CFA</span>
              <span>▼</span>
            </div>
          </div>
          <Lock color="white" className="h-4 w-4" />
        </div>
        <div>
            <div className="text-sm text-[#AFAFAF]">Solde</div>
          <div className="text-md font-semibold">7 873 456 XOF</div>
            <div className="text-sm text-[#AFAFAF]">Solde disponible</div>
          <div className="text-md font-semibold">6 873 456 XOF</div>
        </div>
      </div>
    </div>
  );
}
