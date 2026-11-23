// Dashboard-style preview art drawn with SVG, so there are no image files to break.
export default function ProjectPreview({ type }) {
  const gid = `p-${type}`;
  return (
    <div className="preview" aria-hidden="true">
      <svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {type === "dashboard" && (<>
          {[0, 1, 2].map((i) => <rect key={i} x={14 + i * 100} y="12" width="90" height="30" rx="6" fill="rgba(255,255,255,.08)" />)}
          {[40, 70, 55, 90, 75].map((h, i) => <rect key={i} x={20 + i * 22} y={140 - h} width="14" height={h} rx="3" fill={`url(#${gid})`} />)}
          <circle cx="230" cy="95" r="38" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="16" />
          <circle cx="230" cy="95" r="38" fill="none" stroke="#a78bfa" strokeWidth="16" strokeDasharray="110 240" transform="rotate(-90 230 95)" />
          <circle cx="230" cy="95" r="38" fill="none" stroke="#22d3ee" strokeWidth="16" strokeDasharray="55 240" strokeDashoffset="-110" transform="rotate(-90 230 95)" />
        </>)}
        {type === "bars" && (<>
          {[0, 1, 2, 3].map((i) => <rect key={i} x={14 + i * 76} y="12" width="68" height="26" rx="6" fill="rgba(255,255,255,.08)" />)}
          {[60, 95, 50, 110, 80, 100, 70, 120].map((h, i) => <rect key={i} x={20 + i * 37} y={142 - h * 0.85} width="22" height={h * 0.85} rx="4" fill={`url(#${gid})`} />)}
          <polyline points="30,100 67,75 104,95 141,55 178,70 215,45 252,60 289,35" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        </>)}
        {type === "scatter" && (<>
          {[30, 70, 110].map((y) => <line key={y} x1="14" x2="306" y1={y} y2={y} stroke="rgba(255,255,255,.07)" />)}
          {[[30,120],[50,110],[70,100],[88,92],[110,80],[130,76],[150,62],[175,55],[200,44],[225,36],[250,28],[60,95],[120,95],[180,70],[240,45]].map(([x, y], i) => <circle key={i} cx={x + 10} cy={y} r="4" fill={i % 2 ? "#22d3ee" : "#a78bfa"} opacity=".85" />)}
          <line x1="30" y1="125" x2="280" y2="22" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeDasharray="5 5" />
        </>)}
        {type === "clusters" && (<>
          {[[70, 50, "#22d3ee"], [210, 45, "#a78bfa"], [150, 110, "#60a5fa"]].map(([cx, cy, c]) => (
            <g key={c}>
              <circle cx={cx} cy={cy} r="34" fill={c} opacity=".12" />
              {[[-15,-8],[10,-14],[-4,12],[16,8],[-20,10],[4,-2],[22,-6]].map(([dx, dy], i) => <circle key={i} cx={cx + dx} cy={cy + dy} r="4" fill={c} />)}
              <circle cx={cx} cy={cy} r="6" fill="none" stroke="#fff" strokeWidth="2" />
            </g>
          ))}
        </>)}
        {type === "terminal" && (<>
          <rect x="14" y="14" width="292" height="122" rx="8" fill="rgba(0,0,0,.35)" />
          {["#f87171", "#fbbf24", "#34d399"].map((c, i) => <circle key={c} cx={30 + i * 14} cy="28" r="4" fill={c} />)}
          {[[28,56,120],[28,74,170],[28,92,90],[28,110,140]].map(([x, y, w], i) => <rect key={i} x={x} y={y} width={w} height="7" rx="3" fill={i % 2 ? "#a78bfa" : "#22d3ee"} opacity=".75" />)}
        </>)}
      </svg>
    </div>
  );
}
