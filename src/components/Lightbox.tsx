import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  type: "image" | "video";
  src: string;
  label?: string;
};

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full glass-strong hover:scale-110 transition-transform"
      >
        <X className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + items.length) % items.length); }}
            aria-label="Anterior"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full glass-strong hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % items.length); }}
            aria-label="Próximo"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full glass-strong hover:scale-110 transition-transform"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.label ?? ""}
            className="max-w-full max-h-[calc(100vh-6rem)] object-contain rounded-2xl shadow-glow"
          />
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[calc(100vh-6rem)] object-contain rounded-2xl shadow-glow bg-black"
          />
        )}
        {item.label && (
          <p className="mt-4 text-sm text-muted-foreground text-center">{item.label}</p>
        )}
      </div>
    </div>
  );
}
