"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Send, ChevronDown } from "lucide-react";

export function SerenityHeader() {
  const { t } = useLanguage();

  return (
    <div className="relative py-2">
      <div className="w-full flex items-center justify-between">
        <p className="relative bg-[#F8F9FB] text-md text-[#767676]">
          {t("support_title")}
        </p>

        <div className="relative flex items-center justify-end">
          <div className="group relative flex justify-between min-w-[720px] items-center bg-white px-4 py-1 rounded-md">
            <p className="text-sm w-[40%] " style={{ fontSize: "0.7rem" }} >{t("support_placeholder")}</p>
            <div className="flex items-center w-[60%] gap-x-1">
              <div className="relative w-full">
                <Input
                  type={"text"}
                  placeholder={t("support_message_placeholder")}
                  className={cn(
                    " w-full bg-[#F5F5F5] border-0 rounded-xl h-9",
                    "placeholder:text-[#626262]",
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-[#ECECEC]",
                    "transition-colors duration-200"
                  )}
                  style={{ fontSize: "0.7rem" }}
                />
                <Send className="absolute text-[#D3D3D3] right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-80 transition-all duration-200 ease-in-out transform hover:scale-110 rounded-full" />
              </div>

              <ChevronDown className="h-4 w-4 text-[#989898]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
