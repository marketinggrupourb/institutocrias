import { Link } from "@tanstack/react-router";
import { Mail, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { GrafismosConjunto } from "./Grafismos";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-black text-primary-foreground">
      <GrafismosConjunto className="pointer-events-none absolute -bottom-10 right-0 hidden w-[420px] text-primary-foreground/[0.06] lg:block" />
      <div className="container-crias relative grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Organização da sociedade civil sem fins lucrativos dedicada à transformação social,
            inclusão e cidadania.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Navegue</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/quem-somos" className="hover:text-accent">Quem somos</Link></li>
            <li><Link to="/areas-de-atuacao" className="hover:text-accent">Áreas de atuação</Link></li>
            <li><Link to="/projetos" className="hover:text-accent">Projetos</Link></li>
            <li><Link to="/transparencia" className="hover:text-accent">Transparência</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:contato@crias.org.br" className="hover:text-accent">
                contato@crias.org.br
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-accent" />
              <a
                href="https://www.instagram.com/instituto.crias/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                instituto.crias
              </a>
            </li>
          </ul>
          <Link
            to="/seja-parceiro"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Seja um parceiro
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-crias flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Instituto CRIAS — Instituto de Criação e Ações Sociais.</p>
          <p>Ser luz, agentes de transformação!</p>
        </div>
      </div>
    </footer>
  );
}