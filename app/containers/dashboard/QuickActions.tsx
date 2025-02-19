import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Smartphone, Building2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function QuickActions() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="py-2 px-4">
        <CardTitle className="text-lg font-medium m-0 p-0">
          Opérations rapides
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-3">
        <Tabs defaultValue="recharge" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-100 p-1 h-8">
            <TabsTrigger style={{ fontSize: "0.6rem" }} value="recharge">
              Envoi d’argent
            </TabsTrigger>
            <TabsTrigger style={{ fontSize: "0.6rem" }} value="envoi">
              Paiement
            </TabsTrigger>
            <TabsTrigger style={{ fontSize: "0.6rem" }} value="paiement">
              Rechargement
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recharge">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span
                  className="text-xs font-medium"
                  style={{ fontSize: "0.6rem" }}
                >
                  Mobile money
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-zinc-400" />
                </div>
                <span
                  className="text-xs text-zinc-400"
                  style={{ fontSize: "0.6rem" }}
                >
                  Virement
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-zinc-400" />
                </div>
                <span
                  className="text-xs text-zinc-400"
                  style={{ fontSize: "0.6rem" }}
                >
                  Versement
                </span>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-medium">Pays opérateur</label>
            <Select defaultValue="ci">
              <SelectTrigger className="w-full h-9">
                <SelectValue placeholder="Sélectionner un pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ci" style={{ fontSize: "0.6rem" }}>
                  🇨🇮 Côte d'Ivoire
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <div className="space-y-1">
              <label
                className="text-xs font-medium"
                style={{ fontSize: "0.6rem" }}
              >
                Opérateur
              </label>
              <Select defaultValue="operator1">
                <SelectTrigger className="h-9">
                  <SelectValue
                    placeholder="Sélectionner un opérateur"
                    style={{ fontSize: "0.6rem" }}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="operator1"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Orange
                  </SelectItem>
                  <SelectItem
                    value="operator2"
                    style={{ fontSize: "0.6rem" }}
                  >
                    MTN
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label
                className="text-xs font-medium"
                style={{ fontSize: "0.6rem" }}
              >
                Numéro de compte
              </label>
              <Input
                placeholder="Entrez le numéro de compte"
                className="h-9"
                style={{ fontSize: "0.6rem" }}
              />
            </div>
          </div>
        </div>

        <Button className="w-full h-9 text-sm font-medium rounded-full bg-black hover:bg-black/90">
          Initier le rechargement
        </Button>
      </CardContent>
    </Card>
  );
}
