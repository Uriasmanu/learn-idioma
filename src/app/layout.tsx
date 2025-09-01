import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Idiomas",
  description: "Aprenda e pratique idiomas de forma interativa usando flash cards digitais. Explore palavras e expressões com traduções, revele significados e teste seu aprendizado com um design simples e responsivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className=" h-screen w-[100vw]">
            <SidebarTrigger />
            <section className="flex justify-center items-center w-[100vw]">
              {children}
            </section>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}