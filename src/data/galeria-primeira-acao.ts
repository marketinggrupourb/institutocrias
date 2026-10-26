import type { FotoGaleria } from "@/components/site/GaleriaFotos";

// Fotos da ação de 29 de agosto de 2026. A primeira foto aparece em destaque (maior).
// Para adicionar ou reordenar: salve a imagem em src/assets/noticias/primeira-acao/,
// importe-a abaixo e inclua um objeto na lista (a ordem da lista é a ordem na galeria).

import foto01 from "@/assets/noticias/primeira-acao/dom05380.jpg";
import foto02 from "@/assets/noticias/primeira-acao/domum1_2666.jpg";
import foto03 from "@/assets/noticias/primeira-acao/domum1_2557.jpg";
import foto04 from "@/assets/noticias/primeira-acao/domum1_2579.jpg";
import foto05 from "@/assets/noticias/primeira-acao/domum1_2643.jpg";
import foto06 from "@/assets/noticias/primeira-acao/domum1_2641.jpg";
import foto07 from "@/assets/noticias/primeira-acao/domum1_2660.jpg";
import foto08 from "@/assets/noticias/primeira-acao/domum1_2610.jpg";
import foto09 from "@/assets/noticias/primeira-acao/dom05363.jpg";
import foto10 from "@/assets/noticias/primeira-acao/domum1_2614.jpg";
import foto11 from "@/assets/noticias/primeira-acao/domum1_2625.jpg";
import foto12 from "@/assets/noticias/primeira-acao/domum1_2552.jpg";
import foto13 from "@/assets/noticias/primeira-acao/domum1_2565.jpg";
import foto14 from "@/assets/noticias/primeira-acao/domum1_2578.jpg";
import foto15 from "@/assets/noticias/primeira-acao/domum1_2583.jpg";
import foto16 from "@/assets/noticias/primeira-acao/domum2_2469.jpg";
import foto17 from "@/assets/noticias/primeira-acao/dom05377.jpg";
import foto18 from "@/assets/noticias/primeira-acao/dom05376.jpg";
import foto19 from "@/assets/noticias/primeira-acao/domum2_2467.jpg";

export const galeriaPrimeiraAcao: FotoGaleria[] = [
  { src: foto01, alt: "Integrantes do Instituto CRIAS segurando as cestas básicas doadas" },
  { src: foto02, alt: "Equipe do Instituto CRIAS durante a entrega das cestas básicas" },
  { src: foto03, alt: "Cestas básicas com a marca do Instituto CRIAS organizadas sobre a mesa" },
  { src: foto04, alt: "Cestas básicas organizadas na caçamba de uma caminhonete" },
  { src: foto05, alt: "Voluntários conversando ao lado da caminhonete carregada de cestas básicas" },
  { src: foto06, alt: "Voluntários ao lado da caminhonete antes da entrega das doações" },
  { src: foto07, alt: "Voluntários da Associação Anjo Rafael e dos Bacuras Solidários durante a distribuição" },
  { src: foto08, alt: "Voluntários servindo macarronada durante o preparo das marmitas" },
  { src: foto09, alt: "Voluntários dos Bacuras Solidários montando as marmitas" },
  { src: foto10, alt: "Marmitas empilhadas e prontas para a distribuição" },
  { src: foto11, alt: "Representante dos Bacuras Solidários concedendo entrevista a uma repórter" },
  { src: foto12, alt: "Integrantes do Instituto CRIAS organizando as cestas básicas" },
  { src: foto13, alt: "Integrante do Instituto CRIAS durante a montagem das cestas" },
  { src: foto14, alt: "Cestas básicas carregadas na caçamba de uma caminhonete" },
  { src: foto15, alt: "Detalhe das cestas básicas com o cartão do Instituto CRIAS" },
  { src: foto16, alt: "Detalhe dos alimentos que compõem as cestas básicas" },
  { src: foto17, alt: "Detalhe da camiseta com a marca do Instituto CRIAS" },
  { src: foto18, alt: "Integrante do Instituto CRIAS durante a ação" },
  { src: foto19, alt: "Cartão do Instituto CRIAS com o lema “Ser luz, agentes de transformação!”" },
];

// Foto de capa da matéria (também aparece na galeria).
export const capaPrimeiraAcao = foto03;
