const d = [[20,26,34],[85,18,58],[140,30,26],[210,22,70],[270,28,40],[340,18,30],[400,30,62],[470,22,36],[540,26,78],[610,18,44],[670,30,30],[740,24,66],[810,20,38],[880,30,52],[950,22,28],[1010,26,72],[1080,18,42],[1140,30,32]];
export default function Drips() {
  return (
    <svg className="drips" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden>
      <defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F3B73C" /><stop offset="1" stopColor="#DE8E14" /></linearGradient></defs>
      <rect width="1200" height="28" fill="url(#hg)" />
      {d.map(([x, w, h]) => <rect key={x} x={x} y="0" width={w} height={h + 28} rx={w / 2} fill="url(#hg)" />)}
    </svg>
  );
}
