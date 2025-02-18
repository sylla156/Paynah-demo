"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLanguage } from "../contexts/LanguageContext";
import { PasswordInput } from "../components/PasswordInput";

export function LoginModal() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  );

  const loginSchema = z.object({
    email: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    password: z
      .string()
      .min(1, t("passwordRequired"))
      .min(8, t("passwordMinLength", { length: "8" })),
  });

  type LoginFormValues = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setLoading(true);
      // Add your API call here
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = (fieldName: keyof LoginFormValues) => {
    setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
    trigger(fieldName);
  };

  // Effect to trigger validation on change, but only if the field has been touched
  useEffect(() => {
    Object.keys(touchedFields).forEach((field) => {
      if (touchedFields[field]) {
        trigger(field as keyof LoginFormValues);
      }
    });
  }, [touchedFields, trigger, t]); // Removed unnecessary watchFields dependency

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  {...register("email")}
                  placeholder={t("emailPlaceholder")}
                  className="h-12 bg-[#F5F5F5] border-0 rounded-xl px-4 placeholder:text-[#626262] focus-visible:ring-0 focus-visible:ring-offset-0"
                  aria-invalid={errors.email ? "true" : "false"}
                  onBlur={() => handleBlur("email")}
                  disabled={loading}
                />
                {touchedFields.email && errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <PasswordInput
                  {...register("password")}
                  placeholder={t("passwordPlaceholder")}
                  aria-invalid={errors.password ? "true" : "false"}
                  onBlur={() => handleBlur("password")}
                  disabled={loading}
                />
                {touchedFields.password && errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
                <div className="mt-1">
                  <Link
                    href="#"
                    className="text-sm text-[#000] hover:underline"
                  >
                    {t("resetPasswordText")}
                  </Link>
                </div>
              </div>
            </div>

            <Button
              className={cn("w-full h-12 rounded-full font-normal", {
                "bg-[#000]": isValid && !loading,
                "bg-[#9D9D9D]": !isValid || loading,
              })}
              type="submit"
              disabled={!isValid || loading}
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
}

export default LoginModal;
