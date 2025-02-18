export function AccountCard() {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-black to-gray-800 p-6 text-white">
        <div className="absolute right-4 top-4">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
            <span>800 CFA</span>
            <span>▼</span>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <div className="text-sm text-gray-300">Compte principal</div>
            <div className="text-xs text-gray-400">PA48391CI</div>
          </div>
          <div>
            <div className="text-2xl font-bold">7 873 456 XOF</div>
            <div className="text-sm text-gray-300">Solde disponible</div>
            <div className="text-lg">6 873 456 XOF</div>
          </div>
        </div>
      </div>
    )
  }
  
  