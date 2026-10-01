export default function Bee({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 34 34" aria-hidden>
      <g className="wing"><ellipse cx="11" cy="9" rx="7" ry="4" fill="#FFFBEA" stroke="#34200F" strokeWidth="1.4" transform="rotate(-25 11 9)" /></g>
      <g className="wing"><ellipse cx="22" cy="8" rx="7" ry="4" fill="#FFFBEA" stroke="#34200F" strokeWidth="1.4" transform="rotate(20 22 8)" /></g>
      <ellipse cx="17" cy="21" rx="10" ry="8" fill="#F2B632" stroke="#34200F" strokeWidth="1.6" />
      <path d="M13 14v14M18 13v16M23 14v14" stroke="#34200F" strokeWidth="3" />
    </svg>
  );
}
export function Badge() {
  return (
    <svg className="badge" viewBox="0 0 150 150" aria-hidden>
      <circle cx="75" cy="75" r="73" fill="#E39A1B" />
      <circle cx="75" cy="75" r="42" fill="none" stroke="#34200F" strokeWidth="1.2" strokeDasharray="2 4" />
      <g className="ring">
        <path id="ring" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" fill="none" />
        <text fontSize="12.5" fontWeight="600" fill="#34200F"><textPath href="#ring" textLength="360" lengthAdjust="spacing">PURE · NATURAL · ORGANIC · RAW HONEY ·</textPath></text>
      </g>
      <g transform="translate(58 58) scale(1)"><Bee size={34} /></g>
    </svg>
  );
}
