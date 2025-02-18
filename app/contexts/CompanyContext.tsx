"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface Company {
  id: string;
  name: string;
  code: string;
  logo: string;
}

export const companies: Company[] = [
  {
    id: "1",
    name: "Total Energie CI",
    code: "Npq487738CI",
    logo: "/icons/totalEnergies.svg",
  },
  {
    id: "2",
    name: "Carrefour",
    code: "CRF293847CI",
    logo: "/icons/carrefour.svg",
  },
  {
    id: "3",
    name: "Leclerc",
    code: "LEC384756CI",
    logo: "/icons/eLeclerc.svg",
  },
];

type CompanyContextType = {
  selectedCompany: Company;
  setSelectedCompany: (company: Company) => void;
  companies: Company[];
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]); // Set Total Energie CI as default

  return (
    <CompanyContext.Provider
      value={{
        selectedCompany,
        setSelectedCompany,
        companies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
}
