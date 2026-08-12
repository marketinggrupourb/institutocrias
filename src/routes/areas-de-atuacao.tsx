import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Áreas de atuação | Instituto CRIAS";
const description =
  "Desenvolvimento social, educação, cultura, esporte, empregabilidade e desenvolvimento territorial: as frentes de atuação do Instituto CRIAS.";

export const Route = createFileRoute("/areas-de-atuacao")({
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
  component: Areas,
});

const areas: { name: string; items: string[] }[] = [
  {
    name: "Desenvolvimento Social",
    items: ["Inclusão social", "Fortalecimento comunitário", "Proteção e promoção de direitos"],
  },
  { name: "Educação", items: ["Cursos", "Oficinas", "Formação profissional", "Capacitação"] },
  {
    name: "Cultura",
    items: ["Festivais", "Produção cultural", "Economia criativa", "Patrimônio cultural"],
  },
  { name: "Esporte", items: ["Formação esportiva", "Eventos", "Inclusão por meio do esporte"] },
  {
    name: "Empregabilidade",
    items: ["Qualificação profissional", "Empreendedorismo", "Geração de renda"],
  },
  {
    name: "Desenvolvimento Territorial",
    items: ["Projetos comunitários", "Fortalecimento institucional", "Desenvolvimento local"],
  },
];

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        title="Áreas de atuação"
        description="O Instituto desenvolve, apoia e executa projetos voltados ao interesse público, atuando em diferentes áreas estratégicas — de forma própria ou em parceria com organizações públicas e privadas."
      />

      <section className="container-crias grid gap-8 py-20 md:grid-cols-2 md:py-28 lg:grid-cols-3">
        {areas.map((area) => (
          <article key={area.name} className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-xl font-bold">{area.name}</h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {area.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-secondary/50 py-20 md:py-24">
        <div className="container-crias grid gap-10 lg:grid-cols-2">
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Também apoiamos outras organizações
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>Fortalecimento institucional de organizações sociais.</li>
            <li>
              Estruturação e gestão de projetos financiados por editais, convênios e leis de
              incentivo.
            </li>
            <li>
              Articulação entre poder público, empresas, universidades e sociedade civil.
            </li>
          </ul>
        </div>
      </section>

      <div className="py-20">
        <CtaBand />
      </div>
    </>
  );
}