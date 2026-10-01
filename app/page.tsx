import Link from "next/link";
import Buy from "@/components/Buy";
import Bee from "@/components/Bee";
import { Leaf, Flower, Ribbon, Seed } from "@/components/Art";
const why = [["raw", "Raw", "Nothing taken out"], ["pure", "Pure", "Nothing added"], ["natural", "Natural", "Just as the bees made it"], ["organic", "Organic", "Pure organic honey, nothing else"]];
export default function Home() {
  return (
    <div className="stage">
      <div className="card">
        <aside className="side">
          <Link href="/" className="logo"><Bee />Nzuki</Link>
          <nav aria-label="Main"><a href="#honey">Honey</a><a href="#why">Why Nzuki</a><a href="#how">How to order</a><a href="#story">The hives</a></nav>
          <div className="stat"><span>Purity</span><b>100%</b><div className="bar"><i style={{ width: "100%" }} /></div></div>
          <div className="stat"><span>Processing</span><b>None</b><div className="bar"><i style={{ width: "0%" }} /></div></div>
          <div className="stat"><span>Ingredients</span><b>1</b><small>100% pure organic honey</small></div>
          <div className="stat"><span>Jar sizes</span><b>500 g &middot; 1 kg</b></div>
          <a className="wa" href="https://wa.me/254712122293">WhatsApp 0712 122 293</a>
        </aside>
        <div className="body">
          <section id="honey" className="intro">
            <div className="txt">
              <p className="eyebrow">100% pure &middot; raw &amp; unprocessed</p>
              <h1>Nzuki Raw Honey</h1>
              <p className="lead">Crafted straight from the hives. Pure, natural and unprocessed, extracted specifically for you.</p>
              <Buy />
              <p className="fine">Order on WhatsApp and pay by M-Pesa when it reaches your door.</p>
            </div>
            <div className="fig">
              <Ribbon className="ribbon" />
              <div className="disc" />
              <img className="jar" src="/nzuki-jar.webp" alt="A jar of Nzuki raw and unprocessed honey" />
              <Leaf className="leaf l1" />
              <Leaf className="leaf l2" />
              <Seed x="8%" y="62%" s={12} /><Seed x="14%" y="78%" s={8} /><Seed x="88%" y="58%" s={10} /><Seed x="80%" y="82%" s={14} /><Seed x="94%" y="70%" s={7} />
            </div>
          </section>
          <section id="why" className="thumbs">
            {why.map(([k, t, c]) => (
              <div className="thumb" key={k}><img src={`/t-${k}.webp`} alt="" /><h3>{t}</h3><p>{c}</p></div>
            ))}
          </section>
          <section id="how" className="steps">
            <div><span>1</span><h3>Pick your jar</h3><p>Half a kilo or one kilo.</p></div>
            <div><span>2</span><h3>Send it on WhatsApp</h3><p>We confirm your order with you.</p></div>
            <div><span>3</span><h3>Pay on delivery</h3><p>M-Pesa when it reaches your door.</p></div>
          </section>
        </div>
        <Flower className="deco f1" /><Leaf className="deco d1" /><Flower className="deco f2" /><Seed x="100.4%" y="40%" s={10} /><Seed x="100.6%" y="46%" s={7} /><Seed x="100.2%" y="53%" s={12} />
      </div>
      <div id="story" className="card story">
        <img src="/nzuki-jars.webp" alt="Two jars of Nzuki honey beside a honey dipper and fresh honeycomb" />
        <div>
          <p className="eyebrow">The hives</p>
          <h2>Crafted straight from the hives</h2>
          <p className="lead">Pure. Natural. Organic. Every jar is extracted specifically for you.</p>
          <a className="add inline" href="https://wa.me/254712122293">Order on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
