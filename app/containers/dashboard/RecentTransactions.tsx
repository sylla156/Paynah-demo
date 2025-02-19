"use client";

import { MoreVertical, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TransactionStatus = "Effectué" | "En cours" | "Echoué" | "Expiré";

interface Transaction {
  id: string;
  description: string;
  reference: string;
  amount: string;
  date: string;
  status: TransactionStatus;
}

const transactions: Transaction[] = [
  {
    id: "1",
    description: "Envoi à Ben Ismael",
    reference: "Visa ****1093 l Ref TZ09XY26",
    amount: "-5 000 FCFA",
    date: "18 Fev 11:00",
    status: "Effectué",
  },
  {
    id: "3",
    description: "Envoi à Ben Ismael",
    reference: "Visa ****1093 l Ref TZ09XY26",
    amount: "50 000 FCFA",
    date: "20 Jan 18:00",
    status: "En cours",
  },
  {
    id: "4",
    description: "Envoi à Ben Ismael",
    reference: "Visa ****1093 l Ref TZ09XY26",
    amount: "-50 000 FCFA",
    date: "20 Jan 18:00",
    status: "Echoué",
  },
  {
    id: "5",
    description: "Envoi à Ben Ismael",
    reference: "Visa ****1093 l Ref TZ09XY26",
    amount: "-10 000 FCFA",
    date: "20 Jan 18:00",
    status: "Expiré",
  },
  {
    id: "6",
    description: "Envoi à Ben Ismael",
    reference: "Visa ****1093 l Ref TZ09XY26",
    amount: "50 000 FCFA",
    date: "20 Jan 18:00",
    status: "Effectué",
  },
  {
    id: "8",
    description: "Envoi à Ben Ismael",
    reference: "Visa ****1093 l Ref TZ09XY26",
    amount: "50 000 FCFA",
    date: "20 Jan 18:00",
    status: "En cours",
  },
];

function StatusBadge({ status }: { status: TransactionStatus }) {
  const styles = {
    Effectué: "bg-[#ECFDF5] text-[#059669]",
    "En cours": "bg-[#FFF7ED] text-[#D97706]",
    Echoué: "bg-[#FEF2F2] text-[#DC2626]",
    Expiré: "bg-[#F3F4F6] text-[#6B7280]",
  };

  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        styles[status]
      )}
      style={{ fontSize: "0.7rem" }}
    >
      {status}
    </span>
  );
}

export function RecentTransactions() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">
          Opérations récentes
        </CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex rounded-full bg-black p-1">
            <button
              className="rounded-full px-6 py-1 text-xs font-medium text-white"
              style={{ fontSize: "0.7rem" }}
            >
              Débit
            </button>
            <button
              className="rounded-full bg-white px-6 py-1 text-xs font-medium"
              style={{ fontSize: "0.7rem" }}
            >
              Crédit
            </button>
          </div>
          <button
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            style={{ fontSize: "0.7rem" }}
          >
            Voir tout
            <span className="text-lg">›</span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="rounded-xl bg-[#F0F0F0]">
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 px-4 py-3 text-xs font-medium text-[#AFAFAF]">
            <div>Description</div>
            <div>Montant</div>
            <div>Date</div>
            <div>Statut</div>
            <div></div>
          </div>
        </div>
        <div className="space-y-1 pt-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] items-center gap-2 rounded-xl px-1 py-1 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF6FF]">
                  <Send className="h-4 w-4 text-[#3B82F6]" />
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {transaction.description}
                  </div>
                  <div
                    className="text-xs text-gray-500"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {transaction.reference}
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  "text-sm font-medium",
                  transaction.amount.startsWith("-")
                    ? "text-red-500"
                    : "text-emerald-500"
                )}
                style={{ fontSize: "0.7rem" }}
              >
                {transaction.amount}
              </div>
              <div className="text-sm" style={{ fontSize: "0.7rem" }}>
                {transaction.date}
              </div>
              <div>
                <StatusBadge status={transaction.status} />
              </div>
              <button className="rounded-full p-1 hover:bg-gray-100">
                <MoreVertical
                  className="h-4 w-4 text-gray-400"
                  style={{ fontSize: "0.7rem" }}
                />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
