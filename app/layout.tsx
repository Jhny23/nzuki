import type { Metadata } from "next";
import Link from "next/link";
import { Jost, Fraunces } from "next/font/google";
import { CartProvider, CartButton } from "@/components/Cart";
import Bee from "@/components/Bee";
import Drips from "@/components/Drips";
import "./globals.css";
const jost = Jost({ subsets: ["latin"], variable: "--font" });
const display = Fraunces({ subsets: ["latin"], variable: "--display", style: ["normal", "italic"] });
export const metadata: Metadata = { title: "Nzuki | 100% pure raw & unprocessed honey", description: "100% pure raw and unprocessed honey, delivered in Nairobi." };
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${display.variable}`}>
      <body>
        <CartProvider>
          <Drips />
          <header className="top">
            <Link href="/" className="logo"><Bee />NZUKI</Link>
            <nav aria-label="Main"><a href="/#honey">Our honey</a><a href="/#jar">The jar</a><a href="/#contact">Contact</a></nav>
            <div className="right"><a className="phone" href="tel:+254712122293">0712 122 293</a><CartButton /></div>
          </header>
          <main>{children}</main>
          <footer className="foot">Nzuki &middot; Asali safi &middot; 100% pure raw &amp; unprocessed honey &middot; Nairobi, Kenya</footer>
        </CartProvider>
      </body>
    </html>
  );
}
