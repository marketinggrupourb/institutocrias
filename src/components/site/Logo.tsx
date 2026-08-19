import logoLight from "../../assets/logo-crias-light.svg";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const src = logoLight;
  void tone;
  return (
    <img
      src={src}
      alt="Instituto CRIAS — Instituto de Criação e Ações Sociais"
      className="h-9 w-auto md:h-10"
    />
  );
}
