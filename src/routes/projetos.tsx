import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import educacaoImg from "@/assets/educacao.jpg";
import esporteImg from "@/assets/esporte.jpg";
import culturaImg from "@/assets/cultura.jpg";

const title = "Projetos | Instituto CRIAS";
const description =
  "Conheça as frentes de projetos do Instituto CRIAS em educação, esporte, cultura e desenvolvimento territorial, estruturadas com planejamento técnico e gestão transparente.";

export const Route = createFileRoute("/projetos")({
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
  component: Projetos,
});

const projetos = [
  {
    img: educacaoImg,
    tag: "Educação e Capacitação",
    name: "Formação e capacitação profissional",
    text: "Trilhas de qualificação, oficinas e cursos livres voltados a jovens e adultos, conectando formação com oportunidades reais de trabalho.",
  },
  {
    img: esporteImg,
    tag: "Esporte e Inclusão",
    name: "Esporte que inclui",
    text: "Formação esportiva contínua e eventos comunitários que ampliam convivência, disciplina e pertencimento no território.",
  },
  {
    img: culturaImg,
    tag: "Cultura e Economia Criativa",
    name: "Cultura viva no território",
    text: "Festivais, produção cultural e valorização do patrimônio local, com geração de renda para artistas e produtores da comunidade.",
  },
];

function Projetos() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Boas ideias que viram projetos consistentes."
        description="Nossas primeiras frentes de projeto estão em estruturação. Abaixo, as linhas de trabalho que orientam o desenvolvimento das iniciativas do Instituto CRIAS."
      />

      <section className="container-crias space-y-20 py-20 md:py-28">
        {projetos.map((p, i) => (
          <article
            key={p.name}
            className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>img]:order-2" : ""}`}
          >
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {p.tag}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">{p.name}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.text}</p>
              <p className="mt-6 inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Em estruturação
              </p>
            </div>
          </article>
        ))}
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}