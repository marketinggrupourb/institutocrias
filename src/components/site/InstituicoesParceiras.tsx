import { Instagram } from "lucide-react";
import { instituicoesParceiras } from "@/data/instituicoes-parceiras";

export function InstituicoesParceiras() {
  return (
    <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
      <div className="container-crias">
        <p className="eyebrow">Instituições parceiras</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
          Quem caminha ao nosso lado
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Organizações que somam esforços com o Instituto CRIAS em projetos e ações pelo
          território. Essa lista cresce à medida que novas parcerias se concretizam.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instituicoesParceiras.map((instituicao) => (
            <div
              key={instituicao.nome}
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center"
            >
              <img
                src={instituicao.logo}
                alt={instituicao.nome}
                loading="lazy"
                className="h-28 w-auto max-w-[180px] object-contain"
              />
              <h3 className="mt-6 text-base font-bold">{instituicao.nome}</h3>
              {instituicao.link ? (
                <a
                  href={instituicao.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <Instagram className="h-4 w-4" />
                  Seguir no Instagram
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
