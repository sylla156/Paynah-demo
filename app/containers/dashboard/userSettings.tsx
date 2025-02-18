"use client"

import { Settings, User, Bell, Shield, CreditCard, HelpCircle, LogOut } from "lucide-react"

const settingsItems = [
  {
    icon: User,
    label: "Profile",
    description: "Gérer vos informations personnelles",
  },
  {
    icon: Bell,
    label: "Notifications",
    description: "Gérer vos préférences de notification",
  },
  {
    icon: Shield,
    label: "Sécurité",
    description: "Gérer vos paramètres de sécurité",
  },
  {
    icon: CreditCard,
    label: "Paiement",
    description: "Gérer vos méthodes de paiement",
  },
  {
    icon: HelpCircle,
    label: "Aide",
    description: "Centre d'aide et support",
  },
]

export function UserSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Paramètres</h2>
      </div>
      <div className="space-y-4">
        {settingsItems.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-start gap-4 rounded-lg p-3 text-left transition-colors hover:bg-gray-50"
          >
            <item.icon className="h-6 w-6 text-gray-500" />
            <div>
              <div className="font-medium">{item.label}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </button>
        ))}
        <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left text-red-600 transition-colors hover:bg-red-50">
          <LogOut className="h-6 w-6" />
          <div className="font-medium">Déconnexion</div>
        </button>
      </div>
    </div>
  )
}

