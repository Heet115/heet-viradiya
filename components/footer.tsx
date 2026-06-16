export function Footer() {
  return (
    <div className="pointer-events-none mt-24 flex items-center justify-center pb-2 select-none">
      <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase">
        © {new Date().getFullYear()} Heet Viradiya
      </span>
    </div>
  )
}
