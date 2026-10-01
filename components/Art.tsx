export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" aria-hidden>
      <defs><linearGradient id="lf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8DBE66" /><stop offset="1" stopColor="#3E7D3A" /></linearGradient></defs>
      <path d="M6 94C10 40 54 4 114 8c2 54-30 90-108 86z" fill="url(#lf)" />
      <path d="M10 92C42 60 72 36 108 14" stroke="#D5EBC0" strokeWidth="2" fill="none" opacity=".7" />
    </svg>
  );
}
export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden>
      <g transform="translate(40 40)">
        {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} rx="11" ry="20" cy="-17" transform={`rotate(${a})`} fill="#FFFDF4" stroke="#E9E1C8" />)}
        <circle r="8" fill="#F3C13A" />
      </g>
    </svg>
  );
}
export function Ribbon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 300" aria-hidden>
      <defs><linearGradient id="rb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F9CF55" /><stop offset="1" stopColor="#D9921A" /></linearGradient></defs>
      <path d="M40 10C170 0 210 70 150 115S40 170 120 225s70 60 40 70" fill="none" stroke="url(#rb)" strokeWidth="26" strokeLinecap="round" />
      <path d="M44 10C168 2 204 68 150 112S46 168 120 222" fill="none" stroke="#FFE8A3" strokeWidth="5" strokeLinecap="round" opacity=".75" />
    </svg>
  );
}
export const Seed = ({ x, y, s }: { x: string; y: string; s: number }) => <i className="seed" style={{ left: x, top: y, width: s, height: s }} />;
