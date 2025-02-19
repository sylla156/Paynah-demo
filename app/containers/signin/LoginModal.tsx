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
import { useLanguage } from "../../contexts/LanguageContext";
import { PasswordInput } from "../../components/PasswordInput";
import { useAuth } from "../../contexts/AuthContext";
import { useAlert } from "../../contexts/AlertContext";
import { useRouter } from "next/navigation";
import { useLoader } from "../../contexts/LoaderContext";

export function LoginModal() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const { signIn } = useAuth();
  const { showAlert } = useAlert();
  const { setIsLoading } = useLoader();
  const router = useRouter();
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  );
  const [authError, setAuthError] = useState(false);

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
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: LoginFormValues) => {
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred during sign-in");
      }

      signIn(data.user);
      router.push("/dashbaord");
      setIsLoading(true);
    } catch (error) {
      showAlert("An error occurred during sign-in", "error", 5000);
      console.log(error);
      setAuthError(true);
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

      <Card className="bg-[#F9FAFB] rounded-xlg overflow-hidden mb-6 shadow-none px-10 border-[#D0D0D0]">
        <CardContent className="p-8 space-y-6">
          <div className="flex justify-center">
            <Image
              src="/icons/lock.svg"
              alt="Login Icons"
              width={18}
              height={12}
            />
          </div>
          {authError && (
            <div className="text-[#E00000] text-sm text-center font-medium">
              {t("invalidCredentials")}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  {...register("email")}
                  placeholder={t("emailPlaceholder")}
                  className={cn(
                    "h-12 bg-[#F0F0F0] border-0 rounded-xl px-4 placeholder:text-[#626262] focus-visible:ring-0 focus-visible:ring-offset-0",
                    touchedFields.email &&
                      errors.email &&
                      "border-2 border-[#E95D5D]"
                  )}
                  aria-invalid={errors.email ? "true" : "false"}
                  onBlur={() => handleBlur("email")}
                  disabled={loading}
                />
                {touchedFields.email && errors.email && (
                  <p className="mt-1 text-sm text-[#E00000]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <PasswordInput
                  {...register("password")}
                  placeholder={t("passwordPlaceholder")}
                  className={cn(
                    touchedFields.password &&
                      errors.password &&
                      "border-2 border-[#E95D5D]"
                  )}
                  aria-invalid={errors.password ? "true" : "false"}
                  onBlur={() => handleBlur("password")}
                  disabled={loading}
                />
                {touchedFields.password && errors.password && (
                  <p className="mt-1 text-sm text-[#E00000]">
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
                "bg-[#9B9B9B]": !isValid || loading,
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
