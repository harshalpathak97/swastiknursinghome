// Hero signature: a rangoli/kolam rosette that draws itself on load (CSS only, see .kolam-art in site.css).
// Every stroke is a <path pathLength="1"> so one dash animation works for all shapes.
const TAU = Math.PI * 2
const at = (r, a) => [r * Math.cos(a), r * Math.sin(a)].map((n) => n.toFixed(2))
const circle = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`

// Scalloped ring: radius wobbles `lobes` times around the circle.
const ring = (r, amp, lobes) =>
  Array.from({ length: 241 }, (_, i) => {
    const t = (i / 240) * TAU
    const [x, y] = at(r + amp * Math.sin(lobes * t), t)
    return `${i ? 'L' : 'M'}${x} ${y}`
  }).join('') + 'Z'

const petals = Array.from({ length: 8 }, (_, k) => k * 45)
const outer = Array.from({ length: 12 }, (_, k) => (k / 12) * TAU)

const strokes = [
  ...petals.map((deg) => ({ d: 'M0 0C18 -22 52 -20 64 0C52 20 18 22 0 0Z', rot: deg })),
  ...petals.map((deg) => ({ d: 'M0 0C10 -10 26 -10 32 0C26 10 10 10 0 0Z', rot: deg + 22.5 })),
  { d: ring(78, 2.2, 36) },
  { d: circle(0, 0, 88) },
  ...outer.map((a) => {
    const [x, y] = at(97, a)
    return { d: circle(+x, +y, 5) }
  }),
]

export default function Kolam() {
  return (
    <svg className="kolam-art" viewBox="-110 -110 220 220" aria-hidden="true" focusable="false">
      <g className="kolam-spin">
        {strokes.map((s, i) => (
          <path key={i} d={s.d} pathLength="1" transform={s.rot ? `rotate(${s.rot})` : undefined} style={{ '--i': i }} />
        ))}
        {outer.map((a, i) => {
          const [x, y] = at(97, a)
          return <circle key={`d${i}`} className="dot" cx={x} cy={y} r="1.3" style={{ '--i': i }} />
        })}
        {petals.map((deg, i) => {
          const [x, y] = at(46, (deg * Math.PI) / 180 + Math.PI / 8)
          return <circle key={`c${i}`} className="dot" cx={x} cy={y} r="1.2" style={{ '--i': i + 6 }} />
        })}
        <circle className="dot" r="2" style={{ '--i': 0 }} />
      </g>
    </svg>
  )
}
