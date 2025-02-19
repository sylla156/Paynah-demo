import LanguageSelector from "@/app/components/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignHeader = () => {
  return (
    <>
      {/* Desktop header */}
      <div className="hidden md:block absolute top-0 left-0 px-16 py-10">
        <Link href="/" className="flex flex-col items-start">
          <Image
            width={61}
            height={171}
            src={"/icons/logo.svg"}
            alt="Paynah"
            className="w-[8.5rem]"
          />
        </Link>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-[#F4F4F4] absolute left-0 top-0 w-full flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col items-start">
          <Image
            width={61}
            height={171}
            src={"/icons/logo.svg"}
            alt="Paynah"
            className="w-[5.5rem]"
          />
        </Link>
        <LanguageSelector mode={"sm"} />
        {/* <button className="rounded-full bg-[#F0F0F0] px-4 py-2 text-sm font-medium">
          Fr
        </button> */}
      </div>
    </>
  );
};

export default SignHeader;
