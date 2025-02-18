import Image from "next/image";
import React from "react";

const SignHeader = () => {
  return (
    <div className="absolute top-0 left-0 px-16 py-10">
      <Image
        width={61}
        height={171}
        src={"/icons/logo.svg"}
        alt="Paynah"
        className="w-[8.5rem]"
      />
    </div>
  );
};

export default SignHeader;
