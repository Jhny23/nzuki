import Buy from "@/components/Buy";
export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="kicker">100% pure &middot; raw &amp; unprocessed</p>
        <h1 className="mark">NZUKI</h1>
        <img className="jar" src="/nzuki-jar.webp" alt="A jar of Nzuki raw and unprocessed honey" />
        <p className="cl">Pure. Natural. Organic.<br />Extracted specifically for you.</p>
        <div className="cr">
          <p>Half a kilo, KES 1,000.<br />One kilo, KES 1,900.</p>
          <a className="order" href="#honey">ORDER</a>
        </div>
      </section>
      <section id="honey" className="buy">
        <h2>Our honey</h2>
        <div>
          <p>One honey, nothing added and nothing taken out. Choose a jar, send your order on WhatsApp, and pay by M-Pesa when it reaches you.</p>
          <Buy />
        </div>
      </section>
      <section id="jar" className="jarsec">
        <img src="/nzuki-jars.webp" alt="Two jars of Nzuki honey beside a honey dipper and fresh honeycomb" />
        <div>
          <h2>Crafted straight from the hives</h2>
          <p>100% pure, natural and unprocessed. Just as the bees made it.</p>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Order</h2>
        <p>Message us on WhatsApp and we will confirm your order.</p>
        <a href="https://wa.me/254712122293" className="order">0712 122 293</a>
      </section>
    </>
  );
}
