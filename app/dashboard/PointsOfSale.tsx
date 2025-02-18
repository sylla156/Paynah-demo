import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, Globe } from "lucide-react"

type PointOfSale = {
  id: string
  name: string
  reference: string
  status: "Actif" | "Inactif"
  icon: "link" | "globe"
}

const pointsOfSale: PointOfSale[] = [
  {
    id: "1",
    name: "Point de vente par défaut",
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
    reference: "ID CN14593",
    status: "Inactif",
    icon: "globe",
  },
  // Add more points of sale as needed
]

export function PointsOfSale() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Points de vente</CardTitle>
        <button className="text-sm text-gray-500 hover:text-gray-700">Voir tout</button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pointsOfSale.map((point) => (
            <div key={point.id} className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  point.icon === "link" ? "bg-purple-100" : "bg-yellow-100"
                }`}
              >
                {point.icon === "link" ? (
                  <Link2 className="h-5 w-5 text-purple-600" />
                ) : (
                  <Globe className="h-5 w-5 text-yellow-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{point.name}</p>
                <p className="text-xs text-gray-500">{point.reference}</p>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  point.status === "Actif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                }`}
              >
                {point.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

