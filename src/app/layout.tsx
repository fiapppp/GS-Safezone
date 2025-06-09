import React from "react";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import type { Metadata } from "next";
import { Abel, DM_Sans } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeZone",
  description: "Encontre o seu abrigo seguro",
  icons: {
    icon: "/logo.ico",
  },
};

import { UserProvider } from "./context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen mx-auto">
          <UserProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </UserProvider>
      </body>
    </html>
  );
}
