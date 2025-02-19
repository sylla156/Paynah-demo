import React from "react";
import LanguageSelector from "../../components/LanguageSelector";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

const SignFooter = () => {
  const { t } = useLanguage();
  return (
    <>
      {/* Desktop footer  */}
      <footer className="hidden md:block px-16 absolute bottom-1 left-0 right-0 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between">
          <LanguageSelector />
          <div className="text-sm text-gray-500">
            <span>{t("copyRightFirst")}</span>
            <span className="mx-2">|</span>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-600 transition-colors"
            >
              {t("copyRightSecond")}
            </Link>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden bg-[#FBFBFB] absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 text-center backdrop-blur-sm">
        <div className="space-y-2 text-sm text-[#909090]">
          <p>{t("copyRightFirst")}</p>
          <Link href="#" className="hover:text-[#909090]">
            {t("copyRightSecond")}
          </Link>
        </div>
      </footer>
    </>
  );
};

export default SignFooter;
