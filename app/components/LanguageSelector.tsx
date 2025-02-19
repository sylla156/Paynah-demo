import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { cn } from "@/lib/utils";
const LanguageSelector = ({ mode = "lg" }: { mode?: "sm" | "lg" }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Select
      defaultValue="fr"
      value={language}
      onValueChange={(value: "en" | "fr") => setLanguage(value)}
    >
      <SelectTrigger
        className={cn(
          "border-0 bg-transparent p-0 hover:bg-transparent focus:ring-0",
          mode === "lg" ? "w-[110px]" : "w-[40px]"
        )}
      >
        {mode === "lg" && <Globe className="mr-2 h-4 w-4 text-[#626262]" />}
        <SelectValue
          placeholder={t("language")}
          className="text-[#626262] text-sm"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">{mode === "lg" ? "Français" : "Fr"}</SelectItem>
        <SelectItem value="en">{mode === "lg" ? "English" : "En"}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
