import { Send, Link2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function QuickActions() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium">Opérations rapides</h2>
          <div className="mt-4 flex gap-4">
            <Button variant="outline" className="flex-1">
              <Send className="mr-2 h-4 w-4" />
              Envoi d&apos;argent
            </Button>
            <Button variant="outline" className="flex-1">
              <Link2 className="mr-2 h-4 w-4" />
              Lien de paiement
            </Button>
            <Button variant="outline" className="flex-1">
              <RefreshCw className="mr-2 h-4 w-4" />
              Rechargement
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Pays opérateur</label>
            <Select defaultValue="ci">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Sélectionner un pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ci">🇨🇮 Côte d'Ivoire</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Numéro de compte</label>
            <Input className="mt-1" placeholder="Entrer le numéro de compte" />
          </div>

          <Button className="w-full">Initier le rechargement</Button>
        </div>
      </CardContent>
    </Card>
  )
}

