import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { PasswordInput } from "../components/PasswordInput";
import { useLanguage } from "../contexts/LanguageContext";

const LoginModal = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="w-full max-w-[31rem]">
      <h2 className="text-2xl font-semibold text-center mb-10">
        {t("greeting")}
      </h2>

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
                placeholder={t("emailPlaceholder")}
                required
                className="h-12 bg-[#F5F5F5] border-0 rounded-xl px-4 placeholder:text-[#626262] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <div>
                <PasswordInput
                  required
                  placeholder={t("passwordPlaceholder")}
                />
                <div className="mt-1">
                  <Link
                    href="#"
                    className="text-sm text-[#000] hover:underline animate-spin"
                  >
                    {t("resetPasswordText")}
                  </Link>
                </div>
              </div>
            </div>

            <Button
              className="w-full h-12 bg-[#9D9D9D] rounded-full font-normal"
              type="submit"
              disabled={true}
            >
              {loading ? t("loadingText") : t("submitButtonText")}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="text-center">
        <Link
          href="#"
          className="text-sm text-paynah-link hover:text-blue-600 font-medium"
        >
          {t("openAccountText")}
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
