import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-crias.jpg";

const title = "Quem somos | Instituto CRIAS";
const description =
  "Conheça o Instituto CRIAS: organização da sociedade civil sem fins lucrativos dedicada à transformação social, inclusão, cidadania e geração de oportunidades.";

export const Route = createFileRoute("/quem-somos")({
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
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Ser luz, agentes de transformação."
        description="O Instituto CRIAS – Instituto de Criação e Ações Sociais é uma organização da sociedade civil, sem fins lucrativos, dedicada ao desenvolvimento de iniciativas que promovam transformação social, inclusão, cidadania e geração de oportunidades."
      />

      <section className="container-crias grid gap-14 py-20 md:py-28 lg:grid-cols-2">
        <img
          src={heroImg}
          alt="Equipe e comunidade reunidas em uma atividade do Instituto CRIAS"
          loading="lazy"
          width={1600}
          height={1104}
          className="aspect-[4/3] w-full rounded-[2rem] object-cover"
        />
        <div>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">Nossa missão</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Conectar pessoas, instituições e parceiros para construir soluções sustentáveis que
            gerem impacto positivo e contribuam para o desenvolvimento das comunidades.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Atuamos na concepção, estruturação e execução de projetos que fortalecem pessoas,
            organizações e comunidades, por meio de ações nas áreas de desenvolvimento social,
            educação, cultura, esporte, qualificação profissional e desenvolvimento territorial.
          </p>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-crias">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Propósito</p>
          <blockquote className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.2] text-accent md:text-5xl">
            Ser luz, agentes de transformação, doadores de conhecimento, servidores de coração,
            propagadores da esperança e do amor, ponte que conecta criatura e criador.
          </blockquote>
        </div>
      </section>

      <section className="container-crias py-20 md:py-28">
        <p className="eyebrow">Como trabalhamos</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
          Um modelo estruturado de desenvolvimento de projetos
        </h2>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {[
            ["Diagnóstico", "Identificação das necessidades e oportunidades."],
            ["Planejamento", "Estruturação técnica, financeira e operacional."],
            ["Execução", "Gestão técnica, administrativa e financeira dos projetos."],
            ["Monitoramento", "Acompanhamento de indicadores e resultados."],
            ["Prestação de contas", "Transparência e conformidade na aplicação dos recursos."],
          ].map(([name, text], i) => (
            <li key={name} className="bg-card p-8">
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}