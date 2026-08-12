import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import parceirosImg from "@/assets/parceiros.jpg";

const title = "Seja um parceiro | Instituto CRIAS";
const description =
  "Empresas, poder público, fundações e organizações do terceiro setor: construa projetos de impacto social com o Instituto CRIAS.";

export const Route = createFileRoute("/seja-parceiro")({
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
  component: SejaParceiro,
});

const compromissos = [
  "Gestão responsável e transparente",
  "Planejamento técnico e estratégico",
  "Projetos alinhados às necessidades locais",
  "Captação de recursos em diferentes fontes de financiamento",
  "Articulação entre poder público, empresas, universidades e sociedade civil",
  "Execução orientada por resultados e impacto social",
];

function SejaParceiro() {
  return (
    <>
      <PageHero
        eyebrow="Parcerias"
        title="Os melhores resultados são construídos em cooperação."
        description="Ao desenvolver projetos em parceria com o CRIAS, organizações públicas e privadas contam com uma instituição comprometida com técnica, transparência e impacto real."
      />

      <section className="container-crias grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
        <img
          src={parceirosImg}
          alt="Reunião entre representantes de empresas e a equipe do Instituto CRIAS"
          loading="lazy"
          width={1400}
          height={900}
          className="aspect-[4/3] w-full rounded-[2rem] object-cover"
        />
        <div>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Por que vale a pena ser parceiro do CRIAS?
          </h2>
          <ul className="mt-8 space-y-4">
            {compromissos.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Quero conversar com o Instituto
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="container-crias">
          <p className="eyebrow">Formas de apoiar</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {[
              ["Patrocínio de projetos", "Apoio direto a iniciativas em execução ou em estruturação."],
              ["Leis de incentivo", "Direcionamento de recursos incentivados para projetos aprovados."],
              ["Voluntariado corporativo", "Engajamento de equipes em ações junto às comunidades."],
            ].map(([name, text]) => (
              <div key={name} className="bg-card p-8">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-20" />
    </>
  );
}