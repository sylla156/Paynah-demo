import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Transaction = {
  id: string
  description: string
  amount: string
  date: string
  status: "Effectué" | "En cours" | "Échoué" | "Expiré"
  reference: string
}

const transactions: Transaction[] = [
  {
    id: "1",
    description: "Envoi à Ben Ismael Diomande | Visa ****1053",
    amount: "-5.000 FCFA",
    date: "18 Fev 11:00",
    status: "Effectué",
    reference: "Ref TZ09XY263UI",
  },
  {
    id: "2",
    description: "Envoi à Ben Ismael Diomande | Visa ****1053",
    amount: "30.000 FCFA",
    date: "10 Fev 18:00",
    status: "Effectué",
    reference: "Ref TZ09XY263UI",
  },
  // Add more transactions as needed
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Opérations récentes</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Débit
          </Button>
          <Button variant="outline" size="sm">
            Crédit
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-start justify-between border-b pb-4">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.reference}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{transaction.amount}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                      transaction.status === "Effectué"
                        ? "bg-green-100 text-green-700"
                        : transaction.status === "En cours"
                          ? "bg-yellow-100 text-yellow-700"
                          : transaction.status === "Échoué"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

