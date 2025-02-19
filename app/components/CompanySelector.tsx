"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Company, useCompany } from "../contexts/CompanyContext";

export function CompanySelector() {
  const { selectedCompany, setSelectedCompany, companies } = useCompany();

  return (
    <Select
      value={selectedCompany.id}
      onValueChange={(value) => {
        const company = companies.find((c) => c.id === value);
        if (company) {
          setSelectedCompany(company);
        }
      }}
    >
      <SelectTrigger className="flex w-auto items-center justify-between gap-3 rounded-xl py-7 bg-gray-100 border-[#e4e1e1]">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className=" flex justify-center items-center bg-white min-w-[53px] min-h-[45px] rounded-xl border-[#e4e1e1]">
            <Image
              src={selectedCompany.logo}
              alt={selectedCompany.name}
              width={43}
              height={35}
            />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium">{selectedCompany.name}</div>
            <div className="text-xs text-gray-500">{selectedCompany.code}</div>
          </div>
        </div>
      </SelectTrigger>
      <SelectContent align="end" className="w-[240px]">
        {companies.map((company: Company) => (
          <SelectItem key={company.id} value={company.id}>
            <div className="flex items-center gap-3 py-1">
              <Image
                src={company.logo}
                alt={company.name}
                width={43}
                height={35}
              />
              <div className="text-left">
                <div className="text-sm font-medium">{company.name}</div>
                <div className="text-xs text-gray-500">{company.code}</div>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
