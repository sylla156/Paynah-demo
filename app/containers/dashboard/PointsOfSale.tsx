import { PointOfSaleItem } from "@/app/components/PointOfSaleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

type PointOfSale = {
  id: string;
  name: string;
  reference: string;
  status: "Actif" | "Inactif";
  icon: "link" | "globe" | "tpe";
};

const pointsOfSale: PointOfSale[] = [
  {
    id: "1",
    name: "Point de vente",
    reference: "Lien de paiement",
    status: "Actif",
    icon: "link",
  },
  {
    id: "2",
    name: "TPE Vallon 1",
    reference: "ID 23840349",
    status: "Actif",
    icon: "link",
  },
  {
    id: "3",
    name: "Timbre ONECI",
    reference: "ID ONL4593",
    status: "Inactif",
    icon: "globe",
  },
  {
    id: "4",
    name: "TPE Vallon 1",
    reference: "ID 23840349",
    status: "Actif",
    icon: "tpe",
  },
  {
    id: "5",
    name: "TPE Vallon 1",
    reference: "ID 23840349",
    status: "Actif",
    icon: "link",
  },
  {
    id: "6",
    name: "Timbre ONECI",
    reference: "ID ONL4593",
    status: "Inactif",
    icon: "globe",
  },
  {
    id: "7",
    name: "TPE Vallon 1",
    reference: "ID 23840349",
    status: "Actif",
    icon: "tpe",
  },
  {
    id: "8",
    name: "TPE Vallon 1",
    reference: "ID 23840349",
    status: "Actif",
    icon: "tpe",
  },
];

export function PointsOfSale() {
  return (
    <Card className="border-0 shadow-none w-full mt-3 lg:mt-0">
      <CardHeader className="flex flex-row items-center justify-between pb-6">
        <CardTitle className="text-lg font-medium">Points de vente</CardTitle>
        <button
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          style={{ fontSize: "0.7rem" }}
        >
          Voir tout
          <ChevronRight className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-2">
          {pointsOfSale.map((point) => (
            <PointOfSaleItem
              key={point.id}
              name={point.name}
              reference={point.reference}
              status={point.status}
              icon={point.icon}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
