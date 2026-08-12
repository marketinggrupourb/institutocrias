import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const title = "Contato | Instituto CRIAS";
const description =
  "Fale com o Instituto CRIAS: parcerias, projetos, voluntariado e imprensa. contato@crias.org.br";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale conosco"
        description="Quer propor uma parceria, conhecer nossos projetos ou ser voluntário? Escreva para o Instituto CRIAS."
      />

      <section className="container-crias grid gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <h2 className="text-2xl font-extrabold">Canais oficiais</h2>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-semibold">E-mail</p>
                <a
                  href="mailto:contato@crias.org.br"
                  className="text-muted-foreground hover:text-primary"
                >
                  contato@crias.org.br
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Globe className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-semibold">Site</p>
                <p className="text-muted-foreground">crias.org.br</p>
              </div>
            </li>
          </ul>
          <a
            href="mailto:contato@crias.org.br?subject=Contato%20pelo%20site%20do%20Instituto%20CRIAS"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Enviar e-mail
          </a>
        </div>

        <div className="rounded-3xl bg-primary-deep p-8 text-primary-foreground md:p-10">
          <h2 className="text-2xl font-extrabold">Como podemos ajudar?</h2>
          <ul className="mt-8 space-y-5 text-primary-foreground/80">
            <li>
              <span className="font-semibold text-accent">Empresas e investidores sociais:</span>{" "}
              estruturação e execução de projetos com impacto mensurável.
            </li>
            <li>
              <span className="font-semibold text-accent">Poder público e fundações:</span>{" "}
              parcerias, convênios e projetos financiados por editais.
            </li>
            <li>
              <span className="font-semibold text-accent">Organizações sociais:</span>{" "}
              fortalecimento institucional e apoio na captação de recursos.
            </li>
            <li>
              <span className="font-semibold text-accent">Voluntários e comunidade:</span>{" "}
              participação nas ações e frentes de trabalho do Instituto.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}