import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export interface FotoGaleria {
  src: string;
  alt: string;
  legenda?: string;
}

export function GaleriaFotos({ fotos, titulo }: { fotos: FotoGaleria[]; titulo?: string }) {
  const [indice, setIndice] = useState<number | null>(null);
  const aberta = indice !== null;

  const anterior = useCallback(
    () => setIndice((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length)),
    [fotos.length],
  );
  const proxima = useCallback(
    () => setIndice((i) => (i === null ? i : (i + 1) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (!aberta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proxima();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberta, anterior, proxima]);

  if (fotos.length === 0) return null;
  const atual = indice !== null ? fotos[indice] : null;

  return (
    <div>
      <p className="eyebrow">Galeria</p>
      {titulo ? (
        <h3 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">{titulo}</h3>
      ) : null}

      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {fotos.map((foto, i) => (
          <li key={foto.src} className={i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setIndice(i)}
              aria-label={`Ampliar foto ${i + 1} de ${fotos.length}: ${foto.alt}`}
              className="group block h-full w-full overflow-hidden rounded-2xl bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "aspect-[16/10] md:h-full md:aspect-auto" : "aspect-[4/3]"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={aberta} onOpenChange={(o) => !o && setIndice(null)}>
        <DialogContent className="max-w-5xl border-0 bg-black/95 p-3 text-white sm:rounded-2xl md:p-5 [&>button]:text-white">
          <DialogTitle className="sr-only">{titulo ?? "Galeria de fotos"}</DialogTitle>
          <DialogDescription className="sr-only">
            Use as setas do teclado ou os botões para navegar entre as fotos.
          </DialogDescription>
          {atual ? (
            <figure className="relative">
              <img
                src={atual.src}
                alt={atual.alt}
                className="mx-auto max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
              />
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
                <span>{atual.legenda ?? atual.alt}</span>
                <span className="shrink-0 tabular-nums">
                  {(indice ?? 0) + 1} / {fotos.length}
                </span>
              </figcaption>
              {fotos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={anterior}
                    aria-label="Foto anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 transition hover:bg-black/80"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={proxima}
                    aria-label="Próxima foto"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 transition hover:bg-black/80"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              ) : null}
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
