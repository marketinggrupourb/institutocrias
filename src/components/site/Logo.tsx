import logoDark from "../../assets/logo-crias.png.asset.json";
import logoLight from "../../assets/logo-crias-light.png.asset.json";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const src = tone === "light" ? logoLight.url : logoDark.url;
  return (
    <img
      src={src}
      alt="Instituto CRIAS — Instituto de Criação e Ações Sociais"
      className="h-9 w-auto md:h-10"
    />
  );
}
