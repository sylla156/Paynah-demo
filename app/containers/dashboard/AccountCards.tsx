import { MoreVertical, Plus, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AccountCardProps {
  title: string;
  balance: string;
}

function AccountCard({ title, balance }: AccountCardProps) {
  return (
    <Card className="relative rounded-3xl p-4 border-0 shadow-none">
      <button className="absolute right-4 top-4 rounded-full p-1.5 hover:bg-gray-50">
        <MoreVertical className="h-5 w-5 text-gray-400" />
      </button>
      <div className="mb-5">
        <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#F0F0F0]">
          <Wallet className="h-4 w-5 text-[#767676]" fill="#767676" />
        </div>
        <h3
          className="text-base font-medium text-[#626262]"
          style={{ fontSize: "0.8rem" }}
        >
          {title}
        </h3>
      </div>
      <div>
        <p className="text-sm text-[#AFAFAF]" style={{ fontSize: "0.6rem" }}>
          Solde disponible
        </p>
        <p className="text-xl font-semibold">{balance} XOF</p>
      </div>
    </Card>
  );
}

function NewAccountCard() {
  return (
    <Card className="flex  flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-transparent p-4">
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full">
        <Plus className="h-4 w-5 text-[#767676]" />
      </div>
      <p
        className="text-center text-sm text-[#767676]"
        style={{ fontSize: "0.8rem" }}
      >
        Créer un nouveau
        <br />
        compte
      </p>
    </Card>
  );
}

const accounts = [
  {
    title: "Salaire Corporate",
    balance: "2.873.456",
  },
  {
    title: "Salaire pompiste",
    balance: "1.873.456",
  },
];

export function AccountCards() {
  return (
    <div className="grid grid-cols-1 mt-3 lg:mt-0 md:grid-cols-3 gap-4">
      <NewAccountCard />
      {accounts.map((account, index) => (
        <AccountCard key={index} title={account.title} balance={account.balance} />
      ))}
    </div>
  );
}
