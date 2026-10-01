const why = [["raw", "Raw", "Nothing taken out"], ["pure", "Pure", "Nothing added"], ["natural", "Natural", "Just as the bees made it"], ["organic", "Organic", "Pure organic honey, nothing else"]];
export default function Hives() {
  return (
    <section className="ph">
      <h1>THE HIVES</h1>
      <p>Crafted straight from the hives. Pure, natural and unprocessed, every jar extracted specifically for you.</p>
      <img className="story" src="/nzuki-jars.webp" alt="Two jars of Nzuki honey beside a honey dipper and fresh honeycomb" />
      <div className="wgrid">
        {why.map(([k, t, c]) => <div key={k}><span className="circ big"><img className="ph" src={`/t-${k}.webp`} alt="" /></span><h3>{t}</h3><small>{c}</small></div>)}
      </div>
    </section>
  );
}
