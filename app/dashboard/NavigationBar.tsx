import { Grid, ArrowRightLeft, Link2, Wallet2, User2, Download, ArrowLeftRight, Settings, Users2 } from "lucide-react"
import Image from "next/image"

export function NavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2020.34.56-eA5z38DQtGuZz6OZ6kwildzIIAF94U.png"
            alt="Logo"
            width={80}
            height={24}
            className="h-6 w-auto"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-gray-900">
            <Grid className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <ArrowRightLeft className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <Link2 className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <Wallet2 className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <User2 className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <Download className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <ArrowLeftRight className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <Settings className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <Users2 className="h-5 w-5" />
          </button>
        </div>
        <button className="rounded-full bg-black px-4 py-1 text-sm font-medium text-white">JV</button>
      </div>
    </div>
  )
}

