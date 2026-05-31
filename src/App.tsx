import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe, Share2, Palette, Printer, Building2, Megaphone,
  Zap, Award, Rocket, Sparkles,
  MessageCircle, Instagram, Mail, ArrowRight, Phone, ExternalLink, Play,
} from "lucide-react";
import logo from "@/assets/logo.png";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import workManutencao from "@/assets/work-manutencao.jpg";
import workRaspadinha from "@/assets/work-raspadinha.jpg";
import workHot from "@/assets/work-hot.jpg";
import workShopboxQualidade from "@/assets/work-shopbox-qualidade.jpg";
import workShopboxControle from "@/assets/work-shopbox-controle.jpg";
import workShopboxLoja from "@/assets/work-shopbox-loja.jpg";
import impressosVinny from "@/assets/impressos-vinny.jpg";
import siteHolo from "@/assets/site-holo.png";
import siteSono from "@/assets/site-sono.png";
import siteIzabela from "@/assets/site-izabela.png";
import { CursorLight } from "@/components/CursorLight";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Lightbox, type LightboxItem } from "@/components/Lightbox";

const WHATSAPP_URL = "https://wa.me/5594991022124?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20com%20a%20Vinny%20Arts";
const INSTAGRAM_URL = "https://instagram.com/vinny.art";
const EMAIL = "vinnyfpamz@gmail.com";
const PHONE_DISPLAY = "(94) 99102-2124";

const services = [
  { icon: Globe, title: "Desenvolvimento de Sites", desc: "Sites rápidos, modernos e otimizados para conversão." },
  { icon: Share2, title: "Gestão de Redes Sociais", desc: "Estratégia, conteúdo e engajamento que faz sua marca crescer." },
  { icon: Palette, title: "Design Gráfico", desc: "Identidade visual sofisticada e materiais que comunicam." },
  { icon: Printer, title: "Impressão Digital", desc: "Banners, cartões, panfletos e materiais com alta qualidade." },
  { icon: Building2, title: "Fachadas", desc: "Fachadas em ACM, letras caixa e projetos personalizados." },
  { icon: Megaphone, title: "Comunicação Visual", desc: "Adesivagem, plotagem e sinalização de alto impacto." },
];

const differentials = [
  { icon: Zap, title: "Atendimento Rápido", desc: "Resposta ágil e proximidade real com o cliente." },
  { icon: Award, title: "Qualidade Profissional", desc: "Padrão premium em cada detalhe entregue." },
  { icon: Rocket, title: "Entrega Ágil", desc: "Prazos respeitados sem abrir mão da qualidade." },
  { icon: Sparkles, title: "Projetos Personalizados", desc: "Cada cliente recebe uma solução sob medida." },
];

const works: LightboxItem[] = [
  { type: "image", src: workManutencao, label: "Shopbox — Manutenção Preventiva" },
  { type: "image", src: workShopboxQualidade, label: "Shopbox — Qualidade" },
  { type: "video", src: "/videos/reel-3.mp4", label: "Reel — Motion" },
  { type: "image", src: workRaspadinha, label: "Raspadinha — Afiliados" },
  { type: "image", src: workShopboxControle, label: "Shopbox — Controle Xbox" },
  { type: "video", src: "/videos/reel-4.mp4", label: "Reel — Animação" },
  { type: "image", src: workHot, label: "Nicho Hot Network" },
  { type: "image", src: workShopboxLoja, label: "Shopbox — Loja" },
  { type: "image", src: work1, label: "Social Media — Shopbox" },
  { type: "image", src: work4, label: "Manutenção Preventiva" },
  { type: "video", src: "/videos/reel-1.mp4", label: "Reel — Motion" },
  { type: "image", src: work2, label: "Controle Xbox" },
  { type: "image", src: work3, label: "Loja Shopbox" },
  { type: "video", src: "/videos/reel-2.mp4", label: "Reel — Animação" },
  { type: "image", src: work5, label: "Raspadinha — Afiliados" },
  { type: "image", src: work6, label: "Nicho Hot Network" },
];

const impressosItems: LightboxItem[] = [
  { type: "image", src: impressosVinny, label: "Vinny Art — Comunicação Visual e Impressos" },
];

const sites = [
  { name: "Holo Builder Suite", url: "https://holo-builder-suite.vercel.app", img: siteHolo, tag: "Tech / Futurista" },
  { name: "Sono Profundo", url: "https://sono-profundo-magic.vercel.app", img: siteSono, tag: "Landing Page" },
  { name: "Izabela Beauty", url: "https://izabela-beauty.vercel.app", img: siteIzabela, tag: "Consultora" },
];

export default function App() {
  const [worksIndex, setWorksIndex] = useState<number | null>(null);
  const [impressosOpen, setImpressosOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorLight />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between glass-strong rounded-b-2xl">
          <a href="#hero" className="flex items-center gap-2.5">
            <img src={logo} alt="Vinny Arts" className="h-9 w-auto drop-shadow-[0_0_12px_oklch(0.72_0.21_45/0.6)]" />
            <span className="font-display text-lg font-bold tracking-tight hidden sm:inline">Vinny Arts</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#trabalhos" className="hover:text-foreground transition-colors">Trabalhos</a>
            <a href="#impressos" className="hover:text-foreground transition-colors">Impressos</a>
            <a href="#sites" className="hover:text-foreground transition-colors">Sites</a>
            <a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-hero pt-28 pb-16">
        <div className="absolute inset-0 grid-bg" />
        <div className="glow-orb top-[8%] left-[12%] h-[420px] w-[420px] bg-primary/40 animate-pulse-glow" />
        <div className="glow-orb bottom-[8%] right-[8%] h-[520px] w-[520px] bg-accent/30 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-50 rounded-full" />
              <img src={logo} alt="Vinny Arts" className="relative h-24 md:h-32 w-auto drop-shadow-[0_0_30px_oklch(0.72_0.21_45/0.8)]" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95]"
          >
            Sua marca <span className="text-gradient">brilhando além</span> do esperado.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Do digital ao impresso — sites, identidade visual, redes sociais, impressos e fachadas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#trabalhos"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Ver trabalhos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-medium hover:border-primary/50 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative py-24 overflow-hidden">
        <div className="glow-orb top-[20%] right-[5%] h-[400px] w-[400px] bg-primary/20" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — Serviços</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Tudo que sua marca <span className="text-gradient">precisa</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard className="p-8 h-full">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary shadow-glow-sm mb-6">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRABALHOS */}
      <section id="trabalhos" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="glow-orb top-1/3 left-[5%] h-[400px] w-[400px] bg-accent/15" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">02 — Trabalhos</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Designs e vídeos que <span className="text-gradient">convertem</span>.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">Clique em qualquer projeto para ver em tela cheia.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {works.map((w, i) => (
              <motion.button
                key={i}
                type="button"
                onClick={() => setWorksIndex(i)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.04 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass shadow-card hover-lift text-left focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Abrir ${w.label}`}
              >
                {w.type === "image" ? (
                  <img
                    src={w.src}
                    alt={w.label ?? ""}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <>
                    <video
                      src={w.src}
                      className="absolute inset-0 h-full w-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />
                    <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-1 text-[10px] font-semibold uppercase text-primary-foreground shadow-glow-sm">
                      <Play className="h-3 w-3" /> Vídeo
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-medium text-foreground/90">{w.label}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* IMPRESSOS */}
      <section id="impressos" className="relative py-24 overflow-hidden">
        <div className="glow-orb top-[10%] left-[10%] h-[420px] w-[420px] bg-primary/25" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">03 — Impressos</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Comunicação visual <span className="text-gradient">completa</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cavaletes, banners, placas 3D, adesivos perfurados, canecas, wind banners, cartões de visita, camisas e muito mais.
            </p>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setImpressosOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block w-full group relative overflow-hidden rounded-3xl glass shadow-card hover-lift focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Ver imagem de impressos em tela cheia"
          >
            <img
              src={impressosVinny}
              alt="Vinny Art — Comunicação Visual e Impressos"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </motion.button>
        </div>
      </section>

      {/* SITES */}
      <section id="sites" className="relative py-24 overflow-hidden">
        <div className="glow-orb bottom-[20%] right-[10%] h-[450px] w-[450px] bg-primary/25" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Sites</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Sites <span className="text-gradient">criados</span> pela Vinny Arts.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sites.map((s, i) => (
              <motion.a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass shadow-card hover-lift"
              >
                <div className="aspect-video overflow-hidden border-b border-border">
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">{s.tag}</p>
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-primary shadow-glow-sm transition-transform group-hover:rotate-12">
                    <ExternalLink className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-accent/15" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">05 — Diferenciais</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Por que escolher a <span className="text-gradient">Vinny Arts</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl glass p-8 text-center hover-lift"
              >
                <div className="relative mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-primary shadow-glow-sm flex items-center justify-center">
                  <d.icon className="h-7 w-7 text-primary-foreground" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative py-24 overflow-hidden">
        <div className="glow-orb top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-primary/30" />

        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl glass-strong p-10 md:p-16 text-center overflow-hidden shadow-card"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-primary blur-3xl opacity-30" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl opacity-30" />

            <p className="relative text-xs uppercase tracking-[0.3em] text-primary mb-4">06 — Contato</p>
            <h2 className="relative text-4xl md:text-6xl font-bold leading-tight mb-6">
              Vamos criar algo <span className="text-gradient">extraordinário</span>?
            </h2>
            <p className="relative text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Solicite um orçamento agora. Atendimento rápido e personalizado.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-3 rounded-full bg-gradient-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 rounded-xl glass p-4 hover-lift">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">{PHONE_DISPLAY}</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 rounded-xl glass p-4 hover-lift">
                <Instagram className="h-5 w-5 text-primary" />
                <span className="text-sm">@vinny.art</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="group flex items-center justify-center gap-3 rounded-xl glass p-4 hover-lift">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm break-all">{EMAIL}</span>
              </a>
            </div>
          </motion.div>

          <footer className="mt-16 text-center text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Vinny Arts. Todos os direitos reservados.
          </footer>
        </div>
      </section>

      {worksIndex !== null && (
        <Lightbox
          items={works}
          index={worksIndex}
          onClose={() => setWorksIndex(null)}
          onNavigate={setWorksIndex}
        />
      )}

      {impressosOpen && (
        <Lightbox
          items={impressosItems}
          index={0}
          onClose={() => setImpressosOpen(false)}
          onNavigate={() => {}}
        />
      )}
    </div>
  );
}
