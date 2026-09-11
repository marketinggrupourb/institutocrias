import anjoRafaelLogo from "@/assets/parceiros/anjo-rafael.png";
import bacurasSolidariosLogo from "@/assets/parceiros/bacuras-solidarios.png";

export interface InstituicaoParceira {
  nome: string;
  logo: string;
  link: string;
}

// Para adicionar uma nova instituição parceira:
// 1. Salve o logo em src/assets/parceiros/
// 2. Importe o arquivo acima
// 3. Adicione um novo objeto ao array abaixo
export const instituicoesParceiras: InstituicaoParceira[] = [
  {
    nome: "Associação Anjo Rafael",
    logo: anjoRafaelLogo,
    link: "https://www.instagram.com/associacaoanjorafael/",
  },
  {
    nome: "Bacuras Solidários",
    logo: bacurasSolidariosLogo,
    link: "https://www.instagram.com/bacuras_solidarios/",
  },
];
