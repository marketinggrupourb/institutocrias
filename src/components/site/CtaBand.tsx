import { Link } from "@tanstack/react-router";

export function CtaBand() {
  return (
    <section className="container-crias">
      <div className="rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Vamos construir juntos
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Transformamos boas ideias em projetos consistentes e sustentáveis.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/seja-parceiro"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Seja um parceiro
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}