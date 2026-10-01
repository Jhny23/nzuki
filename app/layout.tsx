import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { CartProvider } from "@/components/Cart";
import { Header, TabBar } from "@/components/Chrome";
import { Branch } from "@/components/Icons";
import "./globals.css";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--display" });
const sans = Jost({ subsets: ["latin"], variable: "--font" });
export const metadata: Metadata = { title: "Nzuki | 100% pure raw & unprocessed honey", description: "100% pure raw and unprocessed honey, delivered in Nairobi." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#3C250F" };
const seen = `try{if(sessionStorage.getItem("nz"))document.documentElement.className+=" seen";else setTimeout(function(){sessionStorage.setItem("nz","1")},2800)}catch(e){}`;
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: seen }} /></head>
      <body>
        <div className="splash" aria-hidden>
          <div className="sp-in"><b>NZUKI</b><small>RAW HONEY</small></div>
          <Branch className="sp-branch" />
          <p className="sp-tag">100% PURE.<br />EXTRACTED SPECIFICALLY FOR YOU.</p>
          <p className="sp-load">LOADING...</p>
          <div className="sp-bar"><i /></div>
        </div>
        <CartProvider>
          <div className="app">
            <Header />
            <main>{children}</main>
            <TabBar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
