import type { FotoGaleria } from "@/components/site/GaleriaFotos";

// FOTOS DE EXEMPLO (provisórias): substitua pelas fotos reais da primeira ação.
// Para trocar: salve as imagens em src/assets/noticias/, importe-as aqui e
// atualize a lista abaixo. A primeira foto aparece em destaque (maior).
import foto1 from "@/assets/hero-crias.jpg";
import foto2 from "@/assets/educacao.jpg";
import foto3 from "@/assets/esporte.jpg";
import foto4 from "@/assets/cultura.jpg";
import foto5 from "@/assets/parceiros.jpg";

export const galeriaPrimeiraAcao: FotoGaleria[] = [
  { src: foto1, alt: "Equipe e comunidade reunidas durante a primeira ação social" },
  { src: foto2, alt: "Momento da atividade com a comunidade" },
  { src: foto3, alt: "Participantes durante a ação" },
  { src: foto4, alt: "Voluntários e moradores em atividade" },
  { src: foto5, alt: "Equipe do Instituto CRIAS e parceiros" },
];
