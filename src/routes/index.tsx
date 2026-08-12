import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Heart, GraduationCap, Palette, Trophy, Briefcase, MapPin } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-crias.jpg";
import type { LucideIcon } from "lucide-react";
import educacaoImg from "@/assets/educacao.jpg";
import esporteImg from "@/assets/esporte.jpg";
import culturaImg from "@/assets/cultura.jpg";

const title = "Instituto CRIAS — Criação e Ações Sociais";
const description =
  "O Instituto CRIAS desenvolve projetos de desenvolvimento social, educação, cultura, esporte, empregabilidade e desenvolvimento territorial em parceria com empresas e poder público.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const areas: { name: string; icon: LucideIcon; text: string }[] = [
  {
    name: "Desenvolvimento Social",
    icon: Heart,
    text: "Inclusão social, fortalecimento comunitário e promoção de direitos.",
  },
  { name: "Educação", icon: GraduationCap, text: "Cursos, oficinas, formação profissional e capacitação." },
  { name: "Cultura", icon: Palette, text: "Festivais, produção cultural, economia criativa e patrimônio." },
  { name: "Esporte", icon: Trophy, text: "Formação esportiva, eventos e inclusão por meio do esporte." },
  { name: "Empregabilidade", icon: Briefcase, text: "Qualificação profissional, empreendedorismo e renda." },
  {
    name: "Desenvolvimento Territorial",
    icon: MapPin,
    text: "Projetos comunitários, desenvolvimento local e fortalecimento institucional.",
  },
];

function Index() {
  return (
    <>
      <section className="border-b border-border bg-secondary/50">
        <div className="container-crias grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Instituto de Criação e Ações Sociais</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] md:text-6xl">
              Conectar pessoas para{" "}
              <span className="text-primary">transformar comunidades</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Somos uma organização da sociedade civil sem fins lucrativos que concebe, estrutura e
              executa projetos de impacto social — com gestão transparente e orientada a resultados.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/quem-somos"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Conheça o Instituto <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/seja-parceiro"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Seja um parceiro
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-accent md:block" />
            <img
              src={heroImg}
              alt="Grupo de pessoas de diferentes idades em uma oficina comunitária do Instituto CRIAS"
              width={1600}
              height={1104}
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="container-crias py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Uma instituição feita de planejamento, técnica e afeto.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Atuamos na concepção, estruturação e execução de projetos que fortalecem pessoas,
              organizações e comunidades. Nossa missão é conectar pessoas, instituições e parceiros
              para construir soluções sustentáveis que gerem impacto positivo e contribuam para o
              desenvolvimento das comunidades.
            </p>
            <Link
              to="/quem-somos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Conheça nossa história <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
        <div className="container-crias">
          <p className="eyebrow">Áreas de atuação</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
            Seis frentes que estruturam nosso trabalho
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.name} className="bg-card p-8">
                <h3 className="text-lg font-bold">{area.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/areas-de-atuacao"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Ver todas as áreas <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-crias py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Projetos em destaque
            </h2>
          </div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Ver todos os projetos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              img: educacaoImg,
              tag: "Educação",
              name: "Formação e capacitação",
              text: "Trilhas de qualificação profissional para jovens e adultos em territórios vulneráveis.",
            },
            {
              img: esporteImg,
              tag: "Esporte",
              name: "Esporte que inclui",
              text: "Formação esportiva e eventos comunitários como caminho de convivência e cidadania.",
            },
            {
              img: culturaImg,
              tag: "Cultura",
              name: "Cultura e economia criativa",
              text: "Festivais, produção cultural e valorização do patrimônio das comunidades.",
            },
          ].map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <Link
                  to="/projetos"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Frentes em estruturação — em breve novos projetos serão publicados nesta área.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
        <div className="container-crias flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Notícias</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Últimas publicações
            </h2>
          </div>
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Todas as notícias <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="container-crias mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Institucional
            </p>
            <h3 className="mt-3 text-xl font-bold">
              Instituto CRIAS realiza sua primeira ação social
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A primeira mobilização do Instituto marca o início de uma trajetória dedicada à
              inclusão, à cidadania e à geração de oportunidades.
            </p>
            <Link
              to="/noticias"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Ler notícia <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <article className="rounded-3xl border border-dashed border-border p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Em breve
            </p>
            <h3 className="mt-3 text-xl font-bold text-muted-foreground">
              Novos conteúdos institucionais
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Resultados, indicadores de impacto e bastidores dos projetos serão publicados aqui.
            </p>
          </article>
        </div>
      </section>

      <div className="py-20 md:py-24">
        <CtaBand />
      </div>
    </>
  );
}
