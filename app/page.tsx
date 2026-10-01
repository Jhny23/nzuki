import Link from "next/link";
import { products, kes } from "@/lib/products";
export default function Home() {
  const rows = [products.slice(0, 3), products.slice(3)];
  return (
    <>
      <section className="hero">
        <h1>Honey from the hive, not the factory.</h1>
        <p>Five honeys from small apiaries across Kenya. Raw, unheated, strained once through cloth. Pay by M-Pesa on delivery in Nairobi.</p>
      </section>
      <section aria-label="Honeys" className="comb">
        {rows.map((r, ri) => (
          <div className="row" key={ri}>
            {r.map((p, i) => (
              <Link key={p.slug} href={`/honey/${p.slug}`} className="cell" style={{ ["--h" as string]: p.color, animationDelay: `${(ri * 3 + i) * 0.35}s` }}>
                <span className="cin"><strong>{p.name}</strong><small>from {kes(p.sizes[0].price)}</small></span>
              </Link>
            ))}
          </div>
        ))}
      </section>
      <section className="note">
        <h2>How a jar gets to you</h2>
        <p>We harvest when the frames are capped, never before. The honey is spun, strained and jarred within the week. You order here, we confirm on WhatsApp, and a rider brings it to your door. You pay when it arrives.</p>
      </section>
    </>
  );
}
