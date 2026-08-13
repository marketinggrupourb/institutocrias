import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/areas-de-atuacao", label: "Áreas de atuação" },
  { to: "/projetos", label: "Projetos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/transparencia", label: "Transparência" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-sm shadow-primary-deep/20">
      <div className="container-crias flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Instituto CRIAS — página inicial">
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground [&.active]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/seja-parceiro"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Seja um parceiro
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/15 bg-primary lg:hidden">
          <nav className="container-crias flex flex-col gap-1 py-4" aria-label="Navegação mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-deep/30"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/seja-parceiro"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              Seja um parceiro
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}