import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-crias.jpg";

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
        <article className="overflow-hidden rounded-[2rem] border border-border bg-card">
          <img
            src={heroImg}
            alt="Primeira ação social do Instituto CRIAS com a comunidade"
            loading="lazy"
            width={1600}
            height={1104}
            className="aspect-[21/9] w-full object-cover"
          />
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Institucional
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
              Instituto CRIAS realiza sua primeira ação social
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              A primeira mobilização do Instituto reuniu equipe, voluntários e moradores em torno de
              um objetivo comum: escutar o território e desenhar iniciativas que respondam às
              necessidades reais da comunidade. A ação marca o início de uma trajetória dedicada à
              inclusão, à cidadania e à geração de oportunidades.
            </p>
          </div>
        </article>

        <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center">
          <h3 className="text-xl font-bold text-muted-foreground">Mais notícias em breve</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Publicaremos aqui os avanços dos projetos, indicadores de impacto e novidades das
            parcerias do Instituto.
          </p>
        </div>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}