import { LiquidButton } from "@/components/ui/liquid-glass-button"

export default function DemoOne() {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-xl border border-white/10">
      <img
        src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1400&q=80"
        alt="Abstract background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <LiquidButton className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        Liquid Glass
      </LiquidButton>
    </div>
  )
}

