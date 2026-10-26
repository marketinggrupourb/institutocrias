import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-crias.jpg";
import { GaleriaFotos } from "@/components/site/GaleriaFotos";
import { galeriaPrimeiraAcao } from "@/data/galeria-primeira-acao";

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
            alt="Ação social do Instituto CRIAS com a comunidade"
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
              Instituto CRIAS doa 50 cestas básicas à Associação Anjo Rafael em parceria com os
              Bacuras Solidários
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              <time dateTime="2026-08-29">29 de agosto de 2026</time> · Fortaleza (CE)
            </p>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                O Instituto CRIAS doou 50 cestas básicas à Associação Anjo Rafael, em uma ação
                realizada no dia 29 de agosto de 2026, no restaurante Pagode da Diretoria, no
                bairro Meireles, em Fortaleza. A iniciativa contou com a intermediação do
                movimento Bacuras Solidários, responsável por conectar o Instituto à instituição
                beneficiada.
              </p>
              <p>
                A parceria surgiu a partir da aproximação do CRIAS com os Bacuras Solidários, com o
                objetivo de contribuir para uma ação de combate à fome já programada pelo
                movimento. A partir dessa mobilização, a Associação Anjo Rafael foi indicada para
                receber as doações, destinadas ao apoio de famílias em situação de vulnerabilidade
                social.
              </p>
              <p>
                Além da entrega das 50 cestas básicas, o Instituto CRIAS também participou do
                preparo e da montagem de 1.800 marmitas, somando esforços com os voluntários dos
                Bacuras Solidários e ampliando o alcance da ação.
              </p>
              <blockquote className="border-l-4 border-accent pl-5 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">
                “Temos o sentimento de obrigação de fazer o bem, de tentar transformar pra melhor
                muitas vidas na nossa sociedade”
                <footer className="mt-3 text-sm font-medium text-muted-foreground">
                  Raphael Loureiro, presidente do Instituto CRIAS
                </footer>
              </blockquote>
              <p>
                O Instituto CRIAS nasceu com o propósito de levar luz e esperança aos mais
                necessitados, transformando boas intenções em ações concretas. A instituição
                seguirá trabalhando para desenvolver projetos sociais, fortalecer parcerias e
                mobilizar pessoas em torno de uma causa essencial: fazer a diferença na vida de
                quem mais precisa.
              </p>
            </div>
          </div>
          {galeriaPrimeiraAcao.length > 0 ? (
            <div className="border-t border-border p-8 md:p-12">
              <GaleriaFotos fotos={galeriaPrimeiraAcao} titulo="Registros da ação" />
            </div>
          ) : null}
        </article>

        <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center">
          <h3 className="text-xl font-bold text-muted-foreground">Mais notícias em breve</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Ações, resultados, indicadores de impacto e bastidores dos projetos serão publicados
            aqui.
          </p>
        </div>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}