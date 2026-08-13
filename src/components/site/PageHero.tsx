import { GrafismoEstrela, GrafismoCoracao } from "@/components/site/Grafismos";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/60">
      <GrafismoEstrela className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-primary/10" />
      <GrafismoCoracao className="pointer-events-none absolute -bottom-8 right-40 hidden h-28 w-28 text-accent/30 md:block" />
      <div className="container-crias relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}