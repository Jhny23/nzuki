import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import AddPanel from "@/components/AddPanel";
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = products.find((p) => p.slug === slug);
  if (!h) notFound();
  return (
    <article className="detail">
      <div className="bigcell" style={{ ["--h" as string]: h.color }} aria-hidden />
      <div>
        <Link href="/" className="back">Back to the comb</Link>
        <h1>{h.name}</h1>
        <p className="src">{h.source}</p>
        <p>{h.notes}</p>
        <AddPanel h={h} />
      </div>
    </article>
  );
}
