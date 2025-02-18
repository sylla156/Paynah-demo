"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Globe, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PasswordInput } from "./passwordInput";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="relative flex items-center justify-center px-16 py-10 h-screen w-screen  bg-no-repeat  bg-[url('/images/bg.svg')] bg-cover bg-center bg-[padding-box]">
      <div className="absolute top-0 left-0 px-16 py-10">
        <Image
          width={61}
          height={171}
          src={"/icons/logo.svg"}
          alt="Paynah"
          className="w-[8.5rem]"
        />
      </div>

      <div className="w-full max-w-[31rem]">
        <h2 className="text-2xl font-semibold text-center mb-10">Bonjour,</h2>

        <Card className="bg-white rounded-xlg overflow-hidden mb-6 shadow-none px-10">
          <CardContent className="p-8 space-y-6">
            <div className="flex justify-center">
              <Image
                src="/icons/lock.svg"
                alt="Login Icons"
                width={18}
                height={12}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Identifiant"
                  required
                  className="h-12 bg-[#F5F5F5] border-0 rounded-xl px-4 placeholder:text-[#626262] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <div>
                  <PasswordInput required placeholder="Clé d'accès" />
                  <div className="mt-1">
                    <Link
                      href="#"
                      className="text-sm text-[#000] hover:underline animate-spin"
                    >
                      J&apos;ai perdu ma clé
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                className="w-full h-12 bg-[#9D9D9D] rounded-full font-normal"
                type="submit"
                disabled={true}
              >
                {loading ? "Chargement..." : "Deverrouiller"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link
            href="#"
            className="text-sm text-[#000] hover:text-blue-600 font-medium"
          >
            Ouvrir mon compte
          </Link>
        </div>
      </div>

      <footer className="px-16 absolute bottom-1 left-0 right-0 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between">
          <Select defaultValue="fr">
            <SelectTrigger className="w-[110px] border-0 bg-transparent p-0 hover:bg-transparent focus:ring-0">
              <Globe className="mr-2 h-4 w-4 text-[#626262]" />
              <SelectValue
                placeholder="Language"
                className="text-[#626262] text-sm"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-sm text-gray-500">
            <span>Copyright © 2023 Paynah. Tous droits réservés</span>
            <span className="mx-2">|</span>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-600 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
