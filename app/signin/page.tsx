"use client";
import SignFooter from "./SignFooter";
import LoginModal from "./LoginModal";
import SignHeader from "./SignHeader";

export default function SignIn() {
  return (
    <div className="relative flex items-center justify-center px-16 py-10 h-screen w-screen  bg-no-repeat  bg-[url('/images/bg.svg')] bg-cover bg-center bg-[padding-box]">
      <SignHeader />
      <LoginModal />
      <SignFooter />
    </div>
  );
}
