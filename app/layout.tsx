import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import type React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html lang="fr" className={montserrat.variable}>
      <body className="font-sans">
        <AuthProvider>
          <LanguageProvider>
            <AlertProvider>
              <main className="container mx-auto px-4 py-8">{children}</main>
            </AlertProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
