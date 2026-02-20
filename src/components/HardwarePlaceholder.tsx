/**
 * Premium CSS-only hardware placeholders (no external images).
 * Tablet Station, Arcade+Projector, Full Projection — minimal pseudo-3D / silhouette on dark surface.
 */

type Variant = 'tablet' | 'arcade' | 'projection'

type HardwarePlaceholderProps = {
  variant: Variant
  className?: string
}

export function HardwarePlaceholder({ variant, className = '' }: HardwarePlaceholderProps) {
  return (
    <div
      className={`flex items-end justify-center overflow-hidden rounded-2xl ${className}`}
      style={{
        background: 'linear-gradient(180deg, var(--panel) 0%, var(--bg-elevated) 100%)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
      }}
    >
      {variant === 'tablet' && <TabletSilhouette />}
      {variant === 'arcade' && <ArcadeSilhouette />}
      {variant === 'projection' && <ProjectionSilhouette />}
    </div>
  )
}

function TabletSilhouette() {
  return (
    <div className="relative w-full flex justify-center items-end pb-6 pt-8">
      {/* Stand */}
      <div
        className="absolute bottom-0 w-16 h-6 rounded-b-md"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      />
      {/* Tablet device */}
      <div
        className="relative w-24 sm:w-28 aspect-[3/4] rounded-xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(0,0,0,0.1) 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
          border: '1px solid var(--border)',
        }}
      >
        <div
          className="w-[70%] h-[50%] rounded-lg opacity-80"
          style={{
            background: 'linear-gradient(135deg, var(--accent-muted) 0%, transparent 100%)',
            border: '1px solid var(--border)',
          }}
        />
      </div>
    </div>
  )
}

function ArcadeSilhouette() {
  return (
    <div className="relative w-full flex justify-center items-end pb-6 pt-6">
      {/* Base */}
      <div
        className="absolute bottom-0 w-28 h-4 rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
        }}
      />
      {/* Cabinet */}
      <div
        className="relative w-20 sm:w-24 rounded-t-lg flex flex-col items-center pt-4 pb-2"
        style={{
          height: '100px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 60%, rgba(0,0,0,0.15) 100%)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
          border: '1px solid var(--border)',
          borderBottom: 'none',
        }}
      >
        <div
          className="w-14 h-8 rounded border mb-2"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
            borderColor: 'var(--border)',
          }}
        />
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--accent)', opacity: 0.6 }}
            />
          ))}
        </div>
      </div>
      {/* Screen hint */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-10 rounded border opacity-60"
        style={{
          background: 'linear-gradient(135deg, var(--accent-muted) 0%, transparent 100%)',
          borderColor: 'var(--border)',
        }}
      />
    </div>
  )
}

function ProjectionSilhouette() {
  return (
    <div className="relative w-full flex flex-col items-center justify-end pb-6 pt-4">
      {/* Projection beam */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-16 opacity-20"
        style={{
          background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
      />
      {/* Main unit */}
      <div
        className="relative w-28 sm:w-32 h-14 rounded-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.2) 100%)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
          border: '1px solid var(--border)',
        }}
      >
        <div
          className="w-12 h-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.5,
          }}
        />
      </div>
      {/* Stand */}
      <div
        className="w-4 h-8 rounded-b"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  )
}
