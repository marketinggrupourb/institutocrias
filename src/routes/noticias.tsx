import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Notícias | Instituto CRIAS";
const description =
  "Acompanhe as publicações, ações e resultados do Instituto CRIAS — Instituto de Criação e Ações Sociais.";

export const Route = createFileRoute("/noticias")({
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
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Notícias"
        title="O que estamos construindo"
        description="Ações, bastidores e resultados do Instituto CRIAS, publicados de forma aberta e periódica."
      />

      <section className="container-crias py-20 md:py-28">
        <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-border p-10 text-center">
          <h3 className="text-xl font-bold text-muted-foreground">Mais notícias em breve</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Ações, resultados, indicadores de impacto e bastidores dos projetos serão publicados aqui.
          </p>
        </div>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}