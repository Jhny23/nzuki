import { ReactNode } from "react";
const mk = (d: ReactNode) => function Icon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{d}</svg>;
};
export const Menu = mk(<path d="M4 7h16M4 12h16M4 17h16" />);
export const Back = mk(<path d="M19 12H5M11 6l-6 6 6 6" />);
export const Bag = mk(<><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></>);
export const Home = mk(<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" />);
export const Bee = mk(<><ellipse cx="12" cy="14" rx="4" ry="5.5" /><path d="M8.5 13h7M8.8 16h6.4M10 8.5C8 5 5 5 4 7.5 5 9.5 8 9.5 10 8.5M14 8.5c2-3.5 5-3.5 6-1-1 2-4 2-6 1" /></>);
export const Phone = mk(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />);
export const Trash = mk(<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13" />);
export const Chevron = mk(<path d="M9 6l6 6-6 6" />);
export const Lock = mk(<><path d="M7 11V8a5 5 0 0110 0v3" /><path d="M6 11h12v9H6z" /></>);
export function Branch({ className = "" }: { className?: string }) {
  const leaf = "M0 0C14-14 34-14 46 0 34 14 14 14 0 0z";
  const L: [number, number, number][] = [[78, 200, -40], [80, 170, 215], [86, 140, -50], [92, 112, 205], [100, 84, -55], [108, 56, 200], [116, 30, -60]];
  return (
    <svg className={className} viewBox="0 0 170 230" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M78 226C76 160 90 90 122 8" />
      {L.map(([x, y, a]) => <g key={y} transform={`translate(${x} ${y}) rotate(${a})`}><path d={leaf} /></g>)}
    </svg>
  );
}
