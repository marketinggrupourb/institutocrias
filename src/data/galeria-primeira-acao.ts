import type { FotoGaleria } from "@/components/site/GaleriaFotos";

// Fotos da ação de 29 de agosto de 2026, na ordem em que aparecem na galeria.
// A primeira foto da lista aparece em destaque (maior).
// Para adicionar ou reordenar: salve a imagem em src/assets/noticias/primeira-acao/,
// importe-a abaixo e inclua um objeto na lista.

import foto01 from "@/assets/noticias/primeira-acao/domum2_2467.jpg";
import foto02 from "@/assets/noticias/primeira-acao/domum2_2469.jpg";
import foto03 from "@/assets/noticias/primeira-acao/domum1_2552.jpg";
import foto04 from "@/assets/noticias/primeira-acao/domum1_2565.jpg";
import foto05 from "@/assets/noticias/primeira-acao/domum1_2557.jpg";
import foto06 from "@/assets/noticias/primeira-acao/domum1_2583.jpg";
import foto07 from "@/assets/noticias/primeira-acao/domum1_2641.jpg";
import foto08 from "@/assets/noticias/primeira-acao/domum1_2643.jpg";
import foto09 from "@/assets/noticias/primeira-acao/domum1_2666.jpg";
import foto10 from "@/assets/noticias/primeira-acao/dom05380.jpg";
import foto11 from "@/assets/noticias/primeira-acao/dom05377.jpg";
import foto12 from "@/assets/noticias/primeira-acao/dom05376.jpg";
import foto13 from "@/assets/noticias/primeira-acao/dom05363.jpg";
import foto14 from "@/assets/noticias/primeira-acao/domum1_2610.jpg";
import foto15 from "@/assets/noticias/primeira-acao/domum1_2614.jpg";
import foto16 from "@/assets/noticias/primeira-acao/domum1_2625.jpg";
import foto17 from "@/assets/noticias/primeira-acao/domum1_2660.jpg";

export const galeriaPrimeiraAcao: FotoGaleria[] = [
  { src: foto01, alt: "Cartão do Instituto CRIAS com o lema “Ser luz, agentes de transformação!”" },
  { src: foto02, alt: "Detalhe dos alimentos que compõem as cestas básicas" },
  { src: foto03, alt: "Integrantes do Instituto CRIAS organizando as cestas básicas" },
  { src: foto04, alt: "Integrante do Instituto CRIAS durante a montagem das cestas" },
  { src: foto05, alt: "Cestas básicas com a marca do Instituto CRIAS organizadas sobre a mesa" },
  { src: foto06, alt: "Detalhe das cestas básicas com o cartão do Instituto CRIAS" },
  { src: foto07, alt: "Voluntários ao lado da caminhonete antes da entrega das doações" },
  {
    src: foto08,
    alt: "Voluntários conversando ao lado da caminhonete carregada de cestas básicas",
  },
  { src: foto09, alt: "Equipe do Instituto CRIAS durante a entrega das cestas básicas" },
  { src: foto10, alt: "Integrantes do Instituto CRIAS segurando as cestas básicas doadas" },
  { src: foto11, alt: "Detalhe da camiseta com a marca do Instituto CRIAS" },
  { src: foto12, alt: "Integrante do Instituto CRIAS durante a ação" },
  { src: foto13, alt: "Voluntários dos Bacuras Solidários montando as marmitas" },
  { src: foto14, alt: "Voluntários servindo macarronada durante o preparo das marmitas" },
  { src: foto15, alt: "Marmitas empilhadas e prontas para a distribuição" },
  { src: foto16, alt: "Representante dos Bacuras Solidários concedendo entrevista a uma repórter" },
  {
    src: foto17,
    alt: "Voluntários da Associação Anjo Rafael e dos Bacuras Solidários durante a distribuição",
  },
];

// Foto de capa da matéria: aparece no topo da página /noticias e na prévia da home
// (também está na galeria). Para trocar, aponte para outra das fotos importadas acima.
export const capaPrimeiraAcao = foto06;
export const capaPrimeiraAcaoAlt = "Detalhe das cestas básicas com o cartão do Instituto CRIAS";
