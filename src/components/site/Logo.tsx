export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={`font-display text-2xl font-extrabold tracking-tight ${
        tone === "light" ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      CR<span className="text-accent">i</span>AS
    </span>
  );
}