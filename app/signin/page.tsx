"use client";
import SignFooter from "../containers/signin/SignFooter";
import LoginModal from "../containers/signin/LoginModal";
import SignHeader from "../containers/signin/SignHeader";
import { useLoader } from "../contexts/LoaderContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { setIsLoading } = useLoader();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  return (
    <div className="relative flex items-center justify-center px-16 py-10 h-screen w-screen  bg-no-repeat  bg-[url('/images/bg.svg')] bg-cover bg-center bg-[padding-box]">
      <SignHeader />
      <LoginModal />
      <SignFooter />
    </div>
  );
}
