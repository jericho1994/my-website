/**
 * Spacecraft.tsx
 * Hand-drawn SVG spacecraft used as parallax backgrounds.
 * All ships are drawn top-down with the nose pointing left, so they read
 * correctly when they drift horizontally across a section.
 */

export type CraftType = "xwing" | "tiefighter" | "millennium-falcon" | "star-destroyer";

/** Rendered size at scale = 1, matching each drawing's viewBox aspect ratio */
export const CRAFT_SIZES: Record<CraftType, { w: number; h: number }> = {
  xwing:               { w: 330, h: 198 },
  tiefighter:          { w: 220, h: 220 },
  "millennium-falcon": { w: 340, h: 261 },
  "star-destroyer":    { w: 540, h: 258 },
};

/* Shared palette */
const HULL_LINE = "#66737f";
const HULL_DARK = "#4b5661";

/* ===================== X-WING ===================== */

/** Degrees -> radians helper for the few places we rotate markings. */
const deg = (d: number) => `rotate(${d})`;

export function XWing() {
  return (
    <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="xw-hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1f4f7" />
          <stop offset="50%" stopColor="#cfd8e1" />
          <stop offset="100%" stopColor="#97a4b1" />
        </linearGradient>
        <linearGradient id="xw-wing" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#dde4eb" />
          <stop offset="100%" stopColor="#a0adba" />
        </linearGradient>
        <linearGradient id="xw-canopy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fb0e0" />
          <stop offset="100%" stopColor="#15273c" />
        </linearGradient>
        <radialGradient id="xw-engine">
          <stop offset="0%" stopColor="#fff4f4" />
          <stop offset="35%" stopColor="#ff9090" />
          <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Port S-foils + engines (top half); starboard mirrored across the centre line */}
      {[0, 1].map((half) => (
        <g key={half} transform={half ? "translate(0,180) scale(1,-1)" : undefined}>
          {/* Laser cannons: long barrel, segmented flash suppressor, red emitter tip */}
          <g strokeLinecap="round">
            <line x1="104" y1="13" x2="206" y2="13" stroke="#7d8a98" strokeWidth="3" />
            <rect x="104" y="10" width="12" height="6" rx="1" fill="#5d6a77" />
            <rect x="122" y="10.5" width="8" height="5" rx="1" fill="#5d6a77" />
            <line x1="96" y1="13" x2="104" y2="13" stroke="#ff5252" strokeWidth="3" />
            <line x1="144" y1="21" x2="246" y2="21" stroke="#7d8a98" strokeWidth="3" />
            <rect x="144" y="18" width="12" height="6" rx="1" fill="#5d6a77" />
            <rect x="162" y="18.5" width="8" height="5" rx="1" fill="#5d6a77" />
            <line x1="136" y1="21" x2="144" y2="21" stroke="#ff5252" strokeWidth="3" />
          </g>

          {/* Rear-splayed wing (drawn first so the front wing overlaps it) */}
          <polygon points="208,78 234,78 268,24 246,24" fill="url(#xw-wing)" stroke={HULL_LINE} strokeWidth="1" />
          <g stroke={HULL_DARK} strokeWidth="0.8" opacity="0.5">
            <line x1="221" y1="78" x2="257" y2="24" />
            <line x1="214" y1="60" x2="240" y2="60" />
            <line x1="226" y1="42" x2="252" y2="42" />
          </g>
          <rect x="-7" y="-2.5" width="14" height="5" fill="#d23c3c" transform={`translate(249,34) ${deg(-58)}`} />
          <circle cx="258" cy="26" r="2.5" fill="#5d6a77" />

          {/* Front-splayed wing */}
          <polygon points="196,78 222,78 232,16 208,16" fill="url(#xw-wing)" stroke={HULL_LINE} strokeWidth="1" />
          <g stroke={HULL_DARK} strokeWidth="0.8" opacity="0.5">
            <line x1="209" y1="78" x2="220" y2="16" />
            <line x1="201" y1="58" x2="226" y2="58" />
            <line x1="205" y1="38" x2="230" y2="38" />
          </g>
          <rect x="-7" y="-2.5" width="14" height="5" fill="#d23c3c" transform={`translate(215,26) ${deg(-81)}`} />
          <circle cx="220" cy="18" r="2.5" fill="#5d6a77" />

          {/* Engines: rear-wing engine sits higher and behind the front-wing engine */}
          <rect x="214" y="50" width="48" height="12" rx="6" fill="#8e9cab" stroke="#5f6f80" strokeWidth="1" />
          <ellipse cx="214" cy="56" rx="3" ry="6" fill="#4b5661" />
          <circle cx="262" cy="56" r="11" fill="url(#xw-engine)" />
          <rect x="202" y="62" width="50" height="14" rx="7" fill="url(#xw-hull)" stroke="#5f6f80" strokeWidth="1" />
          <ellipse cx="202" cy="69" rx="3.5" ry="7" fill="#4b5661" />
          <line x1="212" y1="62" x2="212" y2="76" stroke={HULL_DARK} strokeWidth="0.8" opacity="0.6" />
          <line x1="240" y1="62" x2="240" y2="76" stroke={HULL_DARK} strokeWidth="0.8" opacity="0.6" />
          <circle cx="252" cy="69" r="12" fill="url(#xw-engine)" />
        </g>
      ))}

      {/* Fuselage */}
      <path
        d="M 6 90 L 44 80 L 124 76 L 206 78 L 258 82 L 262 90 L 258 98 L 206 102 L 124 104 L 44 100 Z"
        fill="url(#xw-hull)"
        stroke={HULL_LINE}
        strokeWidth="1"
      />
      {/* Nose cone */}
      <polygon points="6,90 44,80 44,100" fill="#b6c1cc" stroke={HULL_LINE} strokeWidth="1" />
      <line x1="6" y1="90" x2="44" y2="90" stroke={HULL_DARK} strokeWidth="0.8" opacity="0.5" />
      {/* Panel seams + dorsal spine */}
      <g stroke={HULL_DARK} strokeWidth="0.8" opacity="0.5">
        <line x1="84" y1="78" x2="84" y2="102" />
        <line x1="124" y1="76" x2="124" y2="104" />
        <line x1="190" y1="78" x2="190" y2="102" />
        <line x1="232" y1="80" x2="232" y2="100" />
        <line x1="44" y1="90" x2="258" y2="90" />
      </g>
      {/* Red Squadron nose markings */}
      <rect x="58" y="79" width="6" height="22" fill="#d23c3c" opacity="0.9" />
      <rect x="70" y="78" width="6" height="24" fill="#d23c3c" opacity="0.9" />
      {/* Cockpit canopy with frame */}
      <path d="M 128 80 L 170 80 L 180 90 L 170 100 L 128 100 L 120 90 Z" fill="url(#xw-canopy)" stroke="#44617f" strokeWidth="1" />
      <g stroke="#9cc3e6" strokeWidth="0.8" opacity="0.6">
        <line x1="142" y1="80" x2="142" y2="100" />
        <line x1="158" y1="80" x2="158" y2="100" />
      </g>
      <path d="M 130 82 L 168 82 L 174 86 L 130 86 Z" fill="#bfe0ff" opacity="0.25" />
      {/* Astromech droid */}
      <circle cx="194" cy="90" r="6.5" fill="#4e86c8" stroke="#2c4e7c" strokeWidth="1" />
      <path d="M 189 87 A 6.5 6.5 0 0 1 199 87" stroke="#bfe0ff" strokeWidth="1.2" fill="none" opacity="0.7" />
      <rect x="192" y="89" width="4" height="2.5" fill="#102033" />
    </svg>
  );
}

/* ===================== TIE FIGHTER ===================== */

export function TieFighter() {
  // Solar-cell grid lines, clipped to the hexagonal panel
  const gridX = Array.from({ length: 12 }, (_, i) => 8 + i * 6);
  const gridY = Array.from({ length: 20 }, (_, i) => 14 + i * 10);

  return (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="tie-panel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f1823" />
          <stop offset="100%" stopColor="#1f2e3e" />
        </linearGradient>
        <radialGradient id="tie-sphere" cx="0.38" cy="0.35" r="0.75">
          <stop offset="0%" stopColor="#5b6f85" />
          <stop offset="60%" stopColor="#2b3b4d" />
          <stop offset="100%" stopColor="#141f2b" />
        </radialGradient>
        <clipPath id="tie-panel-clip">
          <polygon points="24,8 56,8 78,110 56,212 24,212 2,110" />
        </clipPath>
      </defs>

      {/* Port panel + pylon; starboard mirrored */}
      {[0, 1].map((half) => (
        <g key={half} transform={half ? "translate(220,0) scale(-1,1)" : undefined}>
          <polygon points="24,8 56,8 78,110 56,212 24,212 2,110" fill="url(#tie-panel)" stroke="#3f5775" strokeWidth="2" />
          <g clipPath="url(#tie-panel-clip)" stroke="#2a3d53" strokeWidth="0.6" opacity="0.8">
            {gridX.map((x) => <line key={`x${x}`} x1={x} y1="0" x2={x} y2="220" />)}
            {gridY.map((y) => <line key={`y${y}`} x1="0" y1={y} x2="80" y2={y} />)}
          </g>
          {/* Structural spokes radiating from the hub */}
          <g stroke="#4a6382" strokeWidth="1.4">
            <line x1="40" y1="8" x2="40" y2="212" />
            <line x1="2" y1="110" x2="78" y2="110" />
            <line x1="24" y1="8" x2="40" y2="110" />
            <line x1="56" y1="8" x2="40" y2="110" />
            <line x1="24" y1="212" x2="40" y2="110" />
            <line x1="56" y1="212" x2="40" y2="110" />
          </g>
          <circle cx="40" cy="110" r="7" fill="#2b3b4d" stroke="#5b7390" strokeWidth="1.5" />
          <circle cx="40" cy="110" r="2.5" fill="#6d87a6" />
          {/* Pylon with ribs and mounting bracket */}
          <rect x="72" y="100" width="12" height="20" rx="2" fill="#4a5c6e" stroke="#5f768d" strokeWidth="1" />
          <rect x="82" y="103" width="30" height="14" rx="3" fill="#3a4a5b" stroke="#55687c" strokeWidth="1" />
          <g stroke="#55687c" strokeWidth="1">
            <line x1="90" y1="103" x2="90" y2="117" />
            <line x1="97" y1="103" x2="97" y2="117" />
            <line x1="104" y1="103" x2="104" y2="117" />
          </g>
        </g>
      ))}

      {/* Cockpit sphere */}
      <circle cx="110" cy="110" r="40" fill="url(#tie-sphere)" stroke="#5b7390" strokeWidth="2" />
      <path d="M 78 92 A 40 40 0 0 1 142 92" stroke="#6d87a6" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M 76 128 A 40 40 0 0 0 144 128" stroke="#0f1823" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Top hatch */}
      <rect x="101" y="66" width="18" height="8" rx="2" fill="#3a4a5b" stroke="#5f768d" strokeWidth="1" />
      {/* Viewport with 8-spoke frame */}
      <circle cx="110" cy="110" r="25" fill="#0a1522" stroke="#76bde8" strokeWidth="2" />
      <g stroke="#76bde8" strokeWidth="1" opacity="0.85">
        <line x1="110" y1="85" x2="110" y2="135" />
        <line x1="85" y1="110" x2="135" y2="110" />
        <line x1="92.3" y1="92.3" x2="127.7" y2="127.7" />
        <line x1="127.7" y1="92.3" x2="92.3" y2="127.7" />
      </g>
      <circle cx="110" cy="110" r="9" fill="#0a1522" stroke="#76bde8" strokeWidth="1.5" />
      <circle cx="110" cy="110" r="3.5" fill="#8fd3ff" opacity="0.75" />
      {/* Chin-mounted twin laser cannons */}
      <rect x="100" y="146" width="5" height="12" rx="1" fill="#3a4a5b" stroke="#55687c" strokeWidth="0.8" />
      <rect x="115" y="146" width="5" height="12" rx="1" fill="#3a4a5b" stroke="#55687c" strokeWidth="0.8" />
      <rect x="100" y="156" width="5" height="3" fill="#ff5252" />
      <rect x="115" y="156" width="5" height="3" fill="#ff5252" />
    </svg>
  );
}

/* ===================== MILLENNIUM FALCON ===================== */

const FALCON_CX = 172;
const FALCON_CY = 115;
const FALCON_RX = 100;
const FALCON_RY = 92;

/** Points on the saucer rim at the given angle (degrees). */
const rim = (angle: number, scale = 1) => {
  const a = (angle * Math.PI) / 180;
  return { x: FALCON_CX + Math.cos(a) * FALCON_RX * scale, y: FALCON_CY + Math.sin(a) * FALCON_RY * scale };
};

const FALCON_GREEBLES: [number, number, number, number][] = [
  [128, 84, 10, 6], [206, 76, 8, 8], [226, 100, 6, 10], [150, 150, 12, 5],
  [198, 142, 8, 6], [238, 130, 7, 7], [118, 124, 6, 8], [182, 46, 10, 5],
  [160, 176, 8, 5], [214, 164, 6, 6], [252, 96, 5, 12], [136, 158, 7, 7],
];

export function MillenniumFalcon() {
  const seams = Array.from({ length: 12 }, (_, i) => i * 30 + 15);

  return (
    <svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="mf-hull" cx="0.42" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#ccd4dc" />
          <stop offset="70%" stopColor="#a3aeb9" />
          <stop offset="100%" stopColor="#7f8b97" />
        </radialGradient>
        <linearGradient id="mf-engine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bfe0ff" />
          <stop offset="100%" stopColor="#3b7bff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sublight engine strip across the stern */}
      <rect x="262" y="48" width="10" height="134" rx="3" fill="#4f5a66" stroke={HULL_DARK} strokeWidth="1" />
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x="264" y={56 + i * 14} width="6" height="8" fill="#2b3440" />
      ))}
      <rect x="270" y="52" width="26" height="126" fill="url(#mf-engine)" opacity="0.9" />
      <rect x="270" y="52" width="6" height="126" fill="#dff0ff" opacity="0.9" />

      {/* Forward mandibles */}
      {[0, 1].map((half) => (
        <g key={half} transform={half ? `translate(0,${FALCON_CY * 2}) scale(1,-1)` : undefined}>
          <polygon points="18,60 100,52 118,96 18,96" fill="url(#mf-hull)" stroke={HULL_LINE} strokeWidth="1.2" />
          {/* Outer plating ridge + inner jaw details */}
          <polygon points="22,66 96,59 100,70 22,70" fill="#8d98a4" opacity="0.6" />
          <line x1="18" y1="84" x2="112" y2="84" stroke={HULL_DARK} strokeWidth="0.8" opacity="0.6" />
          {[28, 44, 60, 76, 92].map((x) => (
            <rect key={x} x={x} y="88" width="8" height="8" fill="#6f7b88" stroke={HULL_DARK} strokeWidth="0.6" />
          ))}
          {/* Escape pod bump */}
          <ellipse cx="60" cy="76" rx="9" ry="5" fill="#b8c2cc" stroke={HULL_LINE} strokeWidth="0.8" />
          {/* Front "tooth" */}
          <polygon points="18,60 18,96 10,92 10,64" fill="#6f7b88" stroke={HULL_LINE} strokeWidth="0.8" />
        </g>
      ))}

      {/* Main saucer */}
      <ellipse cx={FALCON_CX} cy={FALCON_CY} rx={FALCON_RX} ry={FALCON_RY} fill="url(#mf-hull)" stroke={HULL_LINE} strokeWidth="1.5" />
      <ellipse cx={FALCON_CX} cy={FALCON_CY} rx={FALCON_RX - 10} ry={FALCON_RY - 9} fill="none" stroke={HULL_DARK} strokeWidth="0.8" opacity="0.6" />
      <ellipse cx={FALCON_CX} cy={FALCON_CY} rx="58" ry="52" fill="none" stroke={HULL_DARK} strokeWidth="0.8" opacity="0.6" />
      {/* Radial plating seams */}
      <g stroke={HULL_DARK} strokeWidth="0.7" opacity="0.45">
        {seams.map((a) => {
          const o = rim(a, 0.58);
          const p = rim(a, 0.98);
          return <line key={a} x1={o.x} y1={o.y} x2={p.x} y2={p.y} />;
        })}
      </g>
      {/* Raised panel plates */}
      <path d={`M ${rim(200, 0.9).x} ${rim(200, 0.9).y} A 90 83 0 0 1 ${rim(250, 0.9).x} ${rim(250, 0.9).y} L ${rim(250, 0.7).x} ${rim(250, 0.7).y} A 70 64 0 0 0 ${rim(200, 0.7).x} ${rim(200, 0.7).y} Z`} fill="#b4bec8" stroke={HULL_DARK} strokeWidth="0.6" opacity="0.8" />
      <path d={`M ${rim(300, 0.9).x} ${rim(300, 0.9).y} A 90 83 0 0 1 ${rim(340, 0.9).x} ${rim(340, 0.9).y} L ${rim(340, 0.7).x} ${rim(340, 0.7).y} A 70 64 0 0 0 ${rim(300, 0.7).x} ${rim(300, 0.7).y} Z`} fill="#98a3ae" stroke={HULL_DARK} strokeWidth="0.6" opacity="0.8" />
      <path d={`M ${rim(40, 0.9).x} ${rim(40, 0.9).y} A 90 83 0 0 1 ${rim(80, 0.9).x} ${rim(80, 0.9).y} L ${rim(80, 0.7).x} ${rim(80, 0.7).y} A 70 64 0 0 0 ${rim(40, 0.7).x} ${rim(40, 0.7).y} Z`} fill="#b4bec8" stroke={HULL_DARK} strokeWidth="0.6" opacity="0.8" />
      {/* Greebles */}
      {FALCON_GREEBLES.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill="#7f8b97" stroke={HULL_DARK} strokeWidth="0.5" />
      ))}
      {/* Docking rings (port / starboard) */}
      <circle cx={FALCON_CX} cy="30" r="14" fill="#8d98a4" stroke={HULL_LINE} strokeWidth="1" />
      <circle cx={FALCON_CX} cy="30" r="8" fill="#5f6b78" />
      <circle cx={FALCON_CX} cy="200" r="14" fill="#8d98a4" stroke={HULL_LINE} strokeWidth="1" />
      <circle cx={FALCON_CX} cy="200" r="8" fill="#5f6b78" />
      {/* Quad laser turret */}
      <circle cx={FALCON_CX} cy={FALCON_CY} r="13" fill="#6f7b88" stroke={HULL_DARK} strokeWidth="1" />
      <g stroke="#3f4954" strokeWidth="2.5" strokeLinecap="round">
        <line x1={FALCON_CX - 20} y1={FALCON_CY - 3} x2={FALCON_CX + 20} y2={FALCON_CY - 3} />
        <line x1={FALCON_CX - 20} y1={FALCON_CY + 3} x2={FALCON_CX + 20} y2={FALCON_CY + 3} />
      </g>
      <circle cx={FALCON_CX} cy={FALCON_CY} r="5" fill="#4f5a66" />
      {/* Sensor dish on a stem */}
      <line x1="146" y1="70" x2="146" y2="58" stroke={HULL_DARK} strokeWidth="2" />
      <circle cx="146" cy="56" r="16" fill="#8a95a2" stroke="#5f6b78" strokeWidth="1" />
      <circle cx="146" cy="56" r="10" fill="#6b7784" />
      <circle cx="146" cy="56" r="4" fill="#9ea9b5" />
      <circle cx="146" cy="56" r="1.5" fill="#dfe6ec" />
      {/* Starboard cockpit tube */}
      <rect x="100" y="176" width="104" height="28" rx="14" fill="url(#mf-hull)" stroke={HULL_LINE} strokeWidth="1.2" />
      <g stroke={HULL_DARK} strokeWidth="0.8" opacity="0.6">
        <line x1="150" y1="176" x2="150" y2="204" />
        <line x1="176" y1="176" x2="176" y2="204" />
      </g>
      <path d="M 102 190 A 12 12 0 0 1 126 190 L 126 190 A 12 12 0 0 1 102 190 Z" fill="#1c2f45" stroke="#44617f" strokeWidth="1" />
      <g stroke="#7fb0e0" strokeWidth="0.8" opacity="0.7">
        <line x1="114" y1="178" x2="114" y2="202" />
        <line x1="106" y1="182" x2="122" y2="182" />
        <line x1="104" y1="190" x2="124" y2="190" />
        <line x1="106" y1="198" x2="122" y2="198" />
      </g>
    </svg>
  );
}

/* ===================== STAR DESTROYER ===================== */

export function StarDestroyer() {
  // Turbolaser batteries spaced along the two trench edges of the first tier
  const turrets = [150, 180, 210, 240, 270, 300, 330];

  return (
    <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="sd-hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b9c3cd" />
          <stop offset="50%" stopColor="#9ca8b4" />
          <stop offset="100%" stopColor="#7a8795" />
        </linearGradient>
        <linearGradient id="sd-tier" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d2dae2" />
          <stop offset="100%" stopColor="#aab5c0" />
        </linearGradient>
        <radialGradient id="sd-engine">
          <stop offset="0%" stopColor="#eaf4ff" />
          <stop offset="40%" stopColor="#7fb3ff" />
          <stop offset="100%" stopColor="#3b7bff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Engine glow halos (behind the hull) */}
      <circle cx="434" cy="78" r="22" fill="url(#sd-engine)" />
      <circle cx="434" cy="110" r="28" fill="url(#sd-engine)" />
      <circle cx="434" cy="142" r="22" fill="url(#sd-engine)" />

      {/* Main wedge hull */}
      <polygon points="0,110 430,30 430,190" fill="url(#sd-hull)" stroke={HULL_LINE} strokeWidth="1.5" />
      <polygon points="0,110 430,30 430,38 16,110" fill="#dfe6ec" opacity="0.55" />
      <polygon points="0,110 430,190 430,182 16,110" fill="#5f6b78" opacity="0.4" />
      {/* Hull plating lines following the edges */}
      <g stroke={HULL_DARK} strokeWidth="0.8" opacity="0.4">
        <line x1="40" y1="106" x2="430" y2="48" />
        <line x1="40" y1="114" x2="430" y2="172" />
        <line x1="90" y1="110" x2="430" y2="110" />
      </g>
      {/* Stepped superstructure tiers */}
      <polygon points="120,110 426,64 426,156" fill="url(#sd-tier)" stroke="#7e8a96" strokeWidth="1" />
      <polygon points="190,110 422,80 422,140" fill="#c9d2db" stroke="#8a97a3" strokeWidth="1" />
      <polygon points="250,110 418,94 418,126" fill="#d9e0e7" stroke="#8a97a3" strokeWidth="1" />
      {/* Notched tier edges ("city" blocks) */}
      {[160, 200, 240, 280, 320, 360].map((x) => {
        const yTop = 110 - (x - 120) * (46 / 306) - 1;
        const yBot = 110 + (x - 120) * (46 / 306) + 1;
        return (
          <g key={x} fill="#aab5c0" stroke="#7e8a96" strokeWidth="0.6">
            <rect x={x} y={yTop - 5} width="10" height="6" />
            <rect x={x} y={yBot - 1} width="10" height="6" />
          </g>
        );
      })}
      {/* Turbolaser batteries along the trench */}
      {turrets.map((x) => {
        const off = (x - 120) * (46 / 306) + 8;
        return (
          <g key={x} fill="#5f6b78" stroke={HULL_DARK} strokeWidth="0.5">
            <circle cx={x} cy={110 - off} r="3.2" />
            <circle cx={x} cy={110 + off} r="3.2" />
          </g>
        );
      })}
      {/* Command tower: neck, stepped base, bridge bar, deflector globes */}
      <rect x="340" y="103" width="46" height="14" rx="2" fill="#8d99a5" stroke={HULL_LINE} strokeWidth="1" />
      <rect x="382" y="84" width="22" height="52" rx="2" fill="#b5c0cb" stroke={HULL_LINE} strokeWidth="1" />
      <rect x="400" y="70" width="22" height="80" rx="3" fill="#c9d2db" stroke={HULL_LINE} strokeWidth="1" />
      <rect x="404" y="96" width="14" height="28" rx="2" fill="#dfe6ec" stroke="#7e8a96" strokeWidth="0.8" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect key={i} x="406" y={74 + i * 13} width="10" height="2" fill="#5f6b78" />
      ))}
      <circle cx="411" cy="62" r="8" fill="#d9e0e7" stroke={HULL_LINE} strokeWidth="1" />
      <circle cx="409" cy="60" r="3" fill="#f3f6f9" opacity="0.8" />
      <circle cx="411" cy="158" r="8" fill="#d9e0e7" stroke={HULL_LINE} strokeWidth="1" />
      <circle cx="409" cy="156" r="3" fill="#f3f6f9" opacity="0.8" />
      {/* Ion engine nozzles: three main, four auxiliary */}
      <circle cx="432" cy="78" r="11" fill="#8fbcff" stroke="#2f5fcc" strokeWidth="1" />
      <circle cx="432" cy="110" r="14" fill="#8fbcff" stroke="#2f5fcc" strokeWidth="1" />
      <circle cx="432" cy="142" r="11" fill="#8fbcff" stroke="#2f5fcc" strokeWidth="1" />
      {[60, 94, 126, 160].map((y) => (
        <circle key={y} cx="431" cy={y} r="4" fill="#bfdcff" stroke="#2f5fcc" strokeWidth="0.8" />
      ))}
    </svg>
  );
}

export const CRAFT_COMPONENTS: Record<CraftType, () => React.JSX.Element> = {
  xwing: XWing,
  tiefighter: TieFighter,
  "millennium-falcon": MillenniumFalcon,
  "star-destroyer": StarDestroyer,
};
