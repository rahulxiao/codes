import type { Metadata } from "next";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";

export const metadata: Metadata = {
  title: "Social E-commerce - Your Social Shopping Destination",
  description: "A social e-commerce platform for buyers and sellers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        <main className="min-h-screen py-8">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
