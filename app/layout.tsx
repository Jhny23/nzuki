import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { CartProvider, CartButton } from "@/components/Cart";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font" });
export const metadata: Metadata = { title: "Nzuki | 100% pure raw & unprocessed honey", description: "100% pure raw and unprocessed honey, delivered in Nairobi." };
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <CartProvider>
          <CartButton />
          <main>{children}</main>
          <footer className="foot">Nzuki &middot; 100% pure raw &amp; unprocessed honey &middot; Nairobi, Kenya</footer>
        </CartProvider>
      </body>
    </html>
  );
}
