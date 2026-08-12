import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { ShieldCheck, BarChart3, FileCheck, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const title = "Transparência | Instituto CRIAS";
const description =
  "Gestão responsável, prestação de contas e conformidade na aplicação dos recursos: conheça o compromisso de transparência do Instituto CRIAS.";

export const Route = createFileRoute("/transparencia")({
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
  component: Transparencia,
});

function Transparencia() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Contas claras, confiança construída."
        description="A transparência é parte do nosso modelo de trabalho. Cada projeto é acompanhado por indicadores, relatórios e prestação de contas aos parceiros e à sociedade."
      />

      <section className="container-crias grid gap-8 py-20 md:grid-cols-2 md:py-28">
        {[
          ["Gestão responsável", ShieldCheck, "Controles administrativos e financeiros aplicados a todas as etapas dos projetos."],
          ["Monitoramento e avaliação", BarChart3, "Acompanhamento sistemático de indicadores, metas e resultados alcançados."],
          ["Prestação de contas", FileCheck, "Relatórios técnicos e financeiros entregues a financiadores, órgãos públicos e parceiros."],
          ["Conformidade", Scale, "Aderência às regras de editais, convênios, leis de incentivo e demais fontes de recurso."],
        ].map(([name, icon, text]) => {
          const Icon = icon as LucideIcon;
          return (
            <article key={name as string} className="rounded-3xl border border-border bg-card p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-5 text-xl font-bold">{name as string}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text as string}</p>
            </article>
          );
        })}
      </section>

      <section className="border-y border-border bg-secondary/50 py-16">
        <div className="container-crias">
          <h2 className="text-2xl font-extrabold">Documentos institucionais</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Estatuto, relatórios anuais e demonstrativos financeiros serão disponibilizados nesta
            página conforme o encerramento de cada ciclo. Para solicitar documentos, escreva para{" "}
            <a href="mailto:contato@crias.org.br" className="font-semibold text-primary hover:underline">
              contato@crias.org.br
            </a>
            .
          </p>
        </div>
      </section>

      <div className="py-20">
        <CtaBand />
      </div>
    </>
  );
}