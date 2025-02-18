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
const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Select
      defaultValue="fr"
      value={language}
      onValueChange={(value: "en" | "fr") => setLanguage(value)}
    >
      <SelectTrigger className="w-[110px] border-0 bg-transparent p-0 hover:bg-transparent focus:ring-0">
        <Globe className="mr-2 h-4 w-4 text-[#626262]" />
        <SelectValue
          placeholder={t("language")}
          className="text-[#626262] text-sm"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
