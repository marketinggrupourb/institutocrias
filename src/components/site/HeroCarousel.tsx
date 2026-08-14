import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  img: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryLink: { to: string; label: string };
  secondaryLink?: { to: string; label: string };
}

const slides: Slide[] = [
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&auto=format&fit=crop&q=80",
    eyebrow: "Instituto de Criação e Ações Sociais",
    title: (
      <>
        Conectar pessoas para{" "}
        <span className="text-accent">transformar comunidades</span>.
      </>
    ),
    description:
      "Somos uma organização da sociedade civil sem fins lucrativos que concebe, estrutura e executa projetos de impacto social — com gestão transparente e orientada a resultados.",
    primaryLink: { to: "/quem-somos", label: "Conheça o Instituto" },
    secondaryLink: { to: "/seja-parceiro", label: "Seja um parceiro" },
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop&q=80",
    eyebrow: "Educação",
    title: (
      <>
        Formação que abre{" "}
        <span className="text-accent">portas e futuros</span>.
      </>
    ),
    description:
      "Cursos, oficinas e trilhas de qualificação profissional para jovens e adultos em territórios vulneráveis.",
    primaryLink: { to: "/areas-de-atuacao", label: "Áreas de atuação" },
    secondaryLink: { to: "/projetos", label: "Ver projetos" },
  },
  {
    img: "https://images.unsplash.com/photo-1461896836934- voices?w=1600&auto=format&fit=crop&q=80",
    eyebrow: "Esporte",
    title: (
      <>
        Esporte que inclui e{" "}
        <span className="text-accent">transforma vidas</span>.
      </>
    ),
    description:
      "Formação esportiva e eventos comunitários como caminho de convivência, cidadania e desenvolvimento integral.",
    primaryLink: { to: "/areas-de-atuacao", label: "Áreas de atuação" },
    secondaryLink: { to: "/projetos", label: "Ver projetos" },
  },
  {
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a92?w=1600&auto=format&fit=crop&q=80",
    eyebrow: "Cultura",
    title: (
      <>
        Cultura e economia{" "}
        <span className="text-accent">criativa</span>.
      </>
    ),
    description:
      "Festivais, produção cultural e valorização do patrimônio das comunidades como motor de identidade e renda.",
    primaryLink: { to: "/areas-de-atuacao", label: "Áreas de atuação" },
    secondaryLink: { to: "/projetos", label: "Ver projetos" },
  },
];

const AUTOPLAY_DELAY = 6000;

export function HeroCarousel() {
  const [active, setActive] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  const goTo = React.useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  const next = React.useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = React.useCallback(() => goTo(active - 1), [active, goTo]);

  React.useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.screenX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0]?.screenX ?? null;
    if (startX == null || endX == null) return;
    const delta = endX - startX;
    if (delta < -40) next();
    if (delta > 40) prev();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-[600px] overflow-hidden md:h-[720px] lg:h-[800px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carrossel"
      aria-label="Destaques do Instituto CRIAS"
    >
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === active ? 1 : 0 }}
          aria-hidden={index !== active}
        >
          <img
            src={slide.img}
            alt=""
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
        </div>
      ))}

      {/* Content */}
      <div className="container-crias relative z-10 flex h-full items-center">
        <div className="max-w-3xl text-primary-foreground">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                index === active
                  ? "visible translate-y-0 opacity-100"
                  : "invisible absolute translate-y-4 opacity-0"
              }`}
              aria-hidden={index !== active}
            >
              <p className="eyebrow text-accent">{slide.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                {slide.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to={slide.primaryLink.to}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  {slide.primaryLink.label} <ArrowRight className="h-4 w-4" />
                </Link>
                {slide.secondaryLink && (
                  <Link
                    to={slide.secondaryLink.to}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
                  >
                    {slide.secondaryLink.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:left-8"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:right-8"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              index === active
                ? "w-8 bg-accent"
                : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
