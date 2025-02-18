import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import type React from "react";
import { LoaderProvider } from "./contexts/LoaderContext";
import { Loader } from "./components/Loader";
import { CompanyProvider } from "./contexts/CompanyContext";
import { Modal } from "./components/Modal";
import { ModalProvider } from "./contexts/ModalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Paynah",
  description: "Paynah Web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="font-sans">
        <AuthProvider>
          <LanguageProvider>
            <ModalProvider>
              <CompanyProvider>
                <AlertProvider>
                  <LoaderProvider>
                    <Loader />
                    <Modal />
                    {children}
                  </LoaderProvider>
                </AlertProvider>
              </CompanyProvider>
            </ModalProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
