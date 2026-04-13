import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import fullLogoLight from './assets/full-logo-light.svg';
import fullLogoDark from './assets/full-logo-dark.svg';
import logoMark from './assets/logo.svg';
import {
  Home,
  Palette,
  Type,
  Component,
  ChevronRight,
  Sun,
  Moon,
  Sunrise,
  Info,
  Aperture,
} from 'lucide-react';

type Section = 'Home' | 'Name' | 'Logo' | 'Color' | 'Typography' | 'Components';

const SECTIONS: { id: Section; icon: any; label: string }[] = [
  { id: 'Home', icon: Home, label: 'Brand Story' },
  { id: 'Name', icon: Info, label: 'The Name' },
  { id: 'Logo', icon: Aperture, label: 'Logo' },
  { id: 'Color', icon: Palette, label: 'Color System' },
  { id: 'Typography', icon: Type, label: 'Typography' },
  { id: 'Components', icon: Component, label: 'UI Components' },
];


export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('Home');

  return (
    <div className="flex min-h-screen bg-surface text-cipher-green selection:bg-signal-green selection:text-white font-sans">
      {/* Sidebar */}
      <nav className="w-64 flex flex-col h-screen sticky top-0 bg-surface/80 backdrop-blur-md z-10 ghost-border border-r">
        <div className="p-8">
          <img src={fullLogoLight} alt="CLARVUE" className="h-8" />
        </div>

        <div className="flex-1 px-4 space-y-1 mt-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeSection === section.id
                  ? 'bg-forest-signal text-chrome-white shadow-sm'
                  : 'hover:bg-surface-container-low text-cipher-green/50 hover:text-cipher-green'
              }`}
            >
              <section.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display font-medium text-sm tracking-tight">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] text-cipher-green/30 font-bold">
            CLARVUE Brand Guidelines · April 2026
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pl-16 pr-8 py-12 overflow-y-auto">
        <header className="flex justify-between items-start mb-20">
          <div className="font-display text-[9px] uppercase tracking-[0.4em] text-cipher-green/30 font-bold">
            Brand Guidelines
          </div>
          <div className="font-mono text-[9px] text-cipher-green/30 tracking-[0.2em]">
            v2.1 · {SECTIONS.find(s => s.id === activeSection)?.label}
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSection === 'Home' && <HomeSection />}
            {activeSection === 'Name' && <NameSection />}
            {activeSection === 'Logo' && <LogoSection />}
            {activeSection === 'Color' && <ColorSection />}
            {activeSection === 'Typography' && <TypographySection />}
            {activeSection === 'Components' && <ComponentsSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME — Brand Story
// ─────────────────────────────────────────────────────────────────────────────
function HomeSection() {
  return (
    <div className="max-w-5xl space-y-24">

      {/* Hero */}
      <div>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-8">
          Clarity before the disruption.
        </div>
        <h1 className="font-display text-9xl font-normal tracking-tighter leading-[0.85] text-gradient-signal mb-6">
          CLARVUE
        </h1>
        <p className="font-sans text-xl leading-relaxed text-cipher-green/70 font-light mt-8 max-w-lg">
          An AI system that sees your most difficult week coming — and engineers it before you feel anything.
        </p>
      </div>

      {/* What it is */}
      <section>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-5">
          What it is
        </div>
        <h2 className="font-sans text-4xl font-bold text-cipher-green leading-tight mb-6">
          Seven days.<br />Two decisions. Already done.
        </h2>
        <div className="grid grid-cols-2 gap-12 items-start mt-10">
          <div>
            <p className="font-sans text-base leading-relaxed text-cipher-green/80 mb-8">
              CLARVUE is a precision micro-decision system built for the luteal phase — the 7 days before menstruation
              when PMS symptoms peak. During that window, it makes exactly two decisions per day, automatically, without being asked.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-[12px]">
                <div className="w-1 min-h-[3rem] bg-silver-mist rounded-full shrink-0 mt-0.5" />
                <div>
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] font-bold text-silver-mist mb-2">THE TUNNEL</div>
                  <p className="font-sans text-sm leading-relaxed text-cipher-green/80">
                    One hormone-calibrated meal recommendation per day. Not a suggestion — a decision, already made and ready.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-[12px]">
                <div className="w-1 min-h-[3rem] bg-cipher-green/20 rounded-full shrink-0 mt-0.5" />
                <div>
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] font-bold text-cipher-green/35 mb-2">THE PROTOCOL — Phase 2</div>
                  <p className="font-sans text-sm leading-relaxed text-cipher-green/55">
                    AI-driven calendar adjustment that reschedules high-intensity tasks before she feels the disruption. Coming next.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cipher-green rounded-[12px] p-10 space-y-6">
            <div className="font-display text-[9px] uppercase tracking-[0.4em] text-silver-mist font-bold">Origin</div>
            <p className="font-sans text-base leading-relaxed text-chrome-white/82">
              One week a month, the carefully calibrated system breaks down. Not from lack of discipline — from hormones
              that arrive on schedule, every cycle. Every tool explains this. None of them acted on it.
            </p>
            <div className="pt-5 border-t border-white/10">
              <p className="font-sans text-lg font-bold text-chrome-white leading-snug">
                "CLARVUE sees it before you feel it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-5">
          The problem
        </div>
        <h2 className="font-sans text-4xl font-bold text-cipher-green leading-tight mb-10">
          One week a month breaks the system.
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              heading: 'Life derails on schedule',
              body: 'PMS and PMDD cause measurable drops in productivity, attention, and daily functioning — every cycle, predictably.',
            },
            {
              heading: 'She manages it alone',
              body: 'Cognitive load is highest exactly when mental capacity is lowest. The luteal phase impairs working memory and attention — yet this is when she\'s expected to manage meals, deadlines, and decisions.',
            },
            {
              heading: 'Tools track. None act.',
              body: 'Existing cycle apps log, educate, and explain. Not one of them pre-engineers the week ahead.',
            },
          ].map((item) => (
            <div key={item.heading} className="p-7 bg-surface-container-low rounded-[12px] space-y-3">
              <h3 className="font-sans text-base font-bold text-cipher-green leading-snug">{item.heading}</h3>
              <p className="font-sans text-sm leading-relaxed text-cipher-green/75">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Positioning — what CLARVUE is not */}
      <section>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-5">
          Positioning
        </div>
        <h2 className="font-sans text-4xl font-bold text-cipher-green leading-tight mb-10">
          From tracking to acting.
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              not: 'A period tracker',
              instead: 'A precision micro-decision system',
              body: 'CLARVUE does not log or visualize cycle data. It uses biological timing to deliver one action — decided, not presented as an option.',
            },
            {
              not: 'A wellness suggestion engine',
              instead: 'A performance instrument',
              body: 'The register is data-driven and precise — not soft, not educational, not comfort-coded. It belongs alongside the tools serious performers already use.',
            },
          ].map((item) => (
            <div key={item.not} className="p-7 bg-surface-container-low rounded-[12px] space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-px bg-cipher-green/20" />
                  <span className="font-sans text-xs text-cipher-green/40 line-through">{item.not}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-px bg-signal-green" />
                  <span className="font-sans text-xs font-bold text-cipher-green">{item.instead}</span>
                </div>
              </div>
              <p className="font-sans text-sm leading-relaxed text-cipher-green/75">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-5">
          Audience
        </div>
        <h2 className="font-sans text-4xl font-bold text-cipher-green leading-tight mb-10">
          Built for women who already invest in performance.
        </h2>
        <div className="grid grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <p className="font-sans text-base leading-relaxed text-cipher-green/80">
              She tracks macros, wears a precision health device, reads ingredient labels, and follows longevity science.
              She views her body as a system worth optimizing — not a burden to manage. She is not new to wellness.
              She is upgrading it.
            </p>
            <p className="font-sans text-base leading-relaxed text-cipher-green/80">
              She doesn't want softness or reassurance. She wants one less decision at the exact moment
              decision-making is hardest.
            </p>
          </div>
          <div className="p-8 bg-surface-container-low rounded-[12px] space-y-4">
            <h3 className="font-sans text-sm font-bold text-cipher-green">Her core identity</h3>
            <p className="font-sans text-base leading-relaxed text-cipher-green/80 italic border-l-2 border-signal-green pl-5">
              "I am a successful woman who is aware of her health and has the agency to use tools that make my life better."
            </p>
            <p className="font-sans text-sm leading-relaxed text-cipher-green/60 mt-2">
              CLARVUE must confirm this identity — not challenge it, not comfort it. Just act on it.
            </p>
          </div>
        </div>
      </section>

      {/* Archetype */}
      <section>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-5">
          Brand archetype
        </div>
        <h2 className="font-sans text-4xl font-bold text-cipher-green leading-tight mb-10">
          Not a caregiver. A system.
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 bg-cipher-green text-chrome-white rounded-[12px]">
            <div className="font-display text-5xl font-bold tracking-tighter leading-none mb-8">
              Ruler<br /><span className="text-signal-green">× Sage</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-chrome-white/80">
              CLARVUE optimizes and equips. It does not nurture, comfort, or encourage.
              Every design and copy decision should feel <em>decided</em>, not suggested.
              The brand speaks with authority because it has already done the work.
            </p>
          </div>
          <div className="p-7 bg-surface-container-low rounded-[12px]">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-signal-green mb-3">In this register</h3>
            <p className="font-sans text-sm leading-relaxed text-cipher-green/80">
              Precision health instruments. Performance wearables. Science-backed nutrition.
              Minimalist, intentional, data-driven — built for people who treat their body as an asset worth investing in.
            </p>
          </div>
        </div>
      </section>

      {/* Tone of Voice */}
      <section>
        <div className="font-display text-[9px] uppercase tracking-[0.4em] text-signal-green font-bold mb-5">
          Brand voice
        </div>
        <h2 className="font-sans text-4xl font-bold text-cipher-green leading-tight mb-3">
          Precise. Brief. Already done.
        </h2>
        <p className="font-sans text-base leading-relaxed text-cipher-green/70 mb-10 max-w-xl">
          CLARVUE speaks in four modes. Each has one job. None encourage, reassure, or ask how she's feeling.
        </p>
        <div className="space-y-3">
          {[
            { mode: 'The Intel', usage: 'Push notifications, daily open', example: "Day 3 of your window. Cortisol is elevated. Today's fuel: dark chocolate walnut bowl. 8 min." },
            { mode: 'The Protocol', usage: 'Calendar moves, workout modifications', example: "Thursday's HIIT moved to zone 2 walk. Your energy window peaks Friday — we saved it for then." },
            { mode: 'The Confirmation', usage: 'Task complete, window close', example: "Window closed. You held the protocol. That's the edge." },
            { mode: 'The Signal', usage: 'Educational cards, feature explanations', example: "Progesterone drops. Cortisol spikes. High-magnesium foods buffer the stress response. That's why today's bowl works." },
          ].map((tone, i) => (
            <div key={tone.mode} className="p-6 bg-surface-container-lowest rounded-[12px] ghost-border grid grid-cols-12 gap-6 items-start">
              <div className="col-span-1">
                <span className="font-mono text-sm text-cipher-green/20">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="col-span-3">
                <div className="font-sans text-sm font-bold text-cipher-green mb-1">{tone.mode}</div>
                <div className="font-display text-[9px] uppercase tracking-[0.2em] text-cipher-green/40">{tone.usage}</div>
              </div>
              <div className="col-span-8">
                <div className="p-4 bg-cipher-green rounded-[8px]">
                  <p className="font-mono text-xs text-chrome-white/85 leading-relaxed">"{tone.example}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Never Say */}
      <section className="p-12 bg-cipher-green text-chrome-white rounded-[12px]">
        <div className="font-display text-[9px] uppercase tracking-[0.4em] font-bold text-silver-mist mb-4">Language rules</div>
        <h2 className="font-sans text-3xl font-bold text-chrome-white leading-tight mb-10">
          CLARVUE never says this.
        </h2>
        <div className="space-y-4">
          {[
            { phrase: '"Listen to your body"', reason: 'Places the burden back on her' },
            { phrase: '"You\'ve got this!"', reason: 'Hollow, beneath her register' },
            { phrase: '"Be gentle with yourself"', reason: 'She wants results, not gentleness' },
            { phrase: '"Track your symptoms"', reason: 'CLARVUE is not a tracker' },
            { phrase: '"Feeling a bit off?"', reason: 'She knows. CLARVUE already acted.' },
          ].map((item) => (
            <div key={item.phrase} className="flex items-start gap-8 py-4 border-b border-white/5 last:border-0">
              <span className="font-mono text-sm text-chrome-white/40 line-through shrink-0 w-56">{item.phrase}</span>
              <span className="font-sans text-sm leading-relaxed text-chrome-white/75">{item.reason}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAME — The Name + Logo
// ─────────────────────────────────────────────────────────────────────────────
function NameSection() {
  return (
    <div className="max-w-5xl space-y-20">
      <h1 className="font-display text-9xl font-normal tracking-tighter mb-16 leading-none">
        The <span className="text-signal-green">Name</span>
      </h1>

      {/* Two-column intro */}
      <div className="grid grid-cols-2 gap-24 items-center">
        <div>
          <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-signal-green mb-6">
            Etymology · Pronounced KLAR-vyoo
          </div>
          <h2 className="font-display text-6xl font-normal tracking-tight mb-8">CLARVUE</h2>
          <p className="text-2xl text-graphite leading-relaxed mb-12 font-light">
            From the French <span className="font-bold text-cipher-green">clair</span> (clear, bright) +{' '}
            <span className="font-bold text-cipher-green">vue</span> (view, vision).
            A name built to embody predictive sight — seeing the week before it arrives.
          </p>
          <div className="space-y-3">
            {[
              { rule: 'Always written in ALL CAPS', note: 'CLARVUE — never Clarvue or clarvue' },
              { rule: 'No articles in standalone usage', note: '"CLARVUE acts." not "The CLARVUE app"' },
              { rule: 'Feature names ALL CAPS', note: 'THE TUNNEL, THE PROTOCOL, DAILY RESET' },
              { rule: 'No emoji in UI copy', note: 'Signal through typography and color, not icons' },
            ].map((item) => (
              <div key={item.rule} className="flex items-start gap-5 p-5 bg-surface-container-low rounded-[12px] hover:bg-surface-container-high transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-signal-green shrink-0 mt-1.5" />
                <div>
                  <div className="font-display text-sm font-bold tracking-tight">{item.rule}</div>
                  <div className="font-mono text-[10px] text-cipher-green/40 mt-0.5">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-square bg-cipher-green rounded-[12px] flex items-center justify-center p-16 shadow-2xl relative overflow-hidden">
          <div className="text-chrome-white text-7xl font-display font-bold tracking-tighter border-b-8 border-signal-green pb-4 relative z-10">
            CLARVUE
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO — The Eye Mark
// ─────────────────────────────────────────────────────────────────────────────
function LogoSection() {
  return (
    <div className="max-w-5xl space-y-20">
      <div>
        <div className="font-display text-[10px] uppercase tracking-[0.4em] text-signal-green font-bold mb-8">
          The Eye Mark
        </div>
        <h1 className="font-display text-9xl font-normal tracking-tighter mb-4 leading-none">
          Logo
        </h1>
        <p className="text-xl text-graphite font-light leading-relaxed max-w-xl">
          An eye in silver and deep forest green. The mark is the visual language of prediction —
          CLARVUE sees the window before it arrives.
        </p>
      </div>

      {/* Full logo lockups */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-12 bg-chrome-white rounded-[12px] ghost-border flex flex-col items-center justify-center gap-8 min-h-48">
          <img src={fullLogoLight} alt="CLARVUE full logo — light version" className="h-10" />
          <div className="font-mono text-[9px] text-cipher-green/40 text-center tracking-[0.15em]">LIGHT VERSION · On white / light surfaces</div>
        </div>
        <div className="p-12 bg-cipher-green rounded-[12px] shadow-2xl flex flex-col items-center justify-center gap-8 min-h-48">
          <img src={fullLogoDark} alt="CLARVUE full logo — dark version" className="h-10" />
          <div className="font-mono text-[9px] text-chrome-white/30 text-center tracking-[0.15em]">DARK VERSION · On dark surfaces</div>
        </div>
      </div>

      {/* Mark alone + anatomy */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 p-12 bg-surface-container-low rounded-[12px] flex flex-col items-center justify-center gap-6">
          <img src={logoMark} alt="CLARVUE eye mark" className="w-24 h-24" />
          <div className="font-mono text-[9px] text-cipher-green/40 text-center tracking-[0.1em]">MARK ONLY · Min 24px</div>
        </div>
        <div className="col-span-2 p-10 bg-surface-container-low rounded-[12px] space-y-6">
          <div className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-cipher-green/60 mb-6">Anatomy</div>
          <div className="space-y-4">
            {[
              { label: 'Eye contour', value: 'Silver Mist · #C8D4C0', note: 'Upper and lower arcs — the shape of sight' },
              { label: 'Iris fill', value: 'Forest Signal · #1A2E1A', note: 'Deep green center — precision, depth, reading' },
              { label: 'Line work', value: 'Diagonal precision strokes', note: 'Data in motion — signals CLARVUE is reading' },
              { label: 'Form', value: 'Lens / eye silhouette', note: 'Directly embodies "CLARVUE sees it before you feel it"' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-6 py-3 border-b border-cipher-green/8 last:border-0">
                <div className="w-36 shrink-0">
                  <div className="font-display text-[9px] uppercase tracking-[0.15em] font-bold text-cipher-green/60">{item.label}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-cipher-green mb-0.5">{item.value}</div>
                  <div className="font-sans text-[10px] text-cipher-green/60">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UI states */}
      <div>
        <div className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-cipher-green/60 mb-8">Logo States in the UI</div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 bg-cipher-green rounded-[12px] shadow-xl flex items-center gap-8">
            <div className="shrink-0">
              <img src={logoMark} alt="CLARVUE mark — active" className="w-14 h-14" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-chrome-white mb-2">Active Window</div>
              <p className="font-sans text-xs text-chrome-white/80 leading-relaxed">The eye is watching. CLARVUE's 7-day window is live. Full opacity, full presence.</p>
            </div>
          </div>
          <div className="p-10 bg-cipher-green rounded-[12px] shadow-xl flex items-center gap-8">
            <div className="shrink-0" style={{ opacity: 0.25 }}>
              <img src={logoMark} alt="CLARVUE mark — dormant" className="w-14 h-14" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-chrome-white/60 mb-2">Dormant</div>
              <p className="font-sans text-xs text-chrome-white/60 leading-relaxed">Mark at ~25% opacity. CLARVUE is quiet — monitoring, not active.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="p-12 bg-cipher-green text-chrome-white rounded-[12px]">
        <div className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-silver-mist mb-8">Usage Rules</div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          {[
            { rule: 'Never distort the eye', note: 'Maintain aspect ratio at all sizes' },
            { rule: 'Never recolor the arcs', note: 'Silver Mist only — never custom colors' },
            { rule: 'Never add external shadow or glow', note: 'Depth through color only' },
            { rule: 'Minimum size: 24px (mark), 80px (with wordmark)', note: 'Below this, line work becomes illegible' },
            { rule: 'Wordmark lockup: mark left, CLARVUE right', note: 'Space Grotesk 700, ALL CAPS' },
            { rule: 'Background watermark at ~5% opacity only', note: 'On dark surfaces — never on light' },
          ].map((item) => (
            <div key={item.rule} className="py-3 border-b border-white/10">
              <div className="font-display text-xs font-bold text-chrome-white mb-1">{item.rule}</div>
              <div className="font-sans text-[10px] text-chrome-white/60">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COLOR — System
// ─────────────────────────────────────────────────────────────────────────────
function ColorSection() {
  return (
    <div className="max-w-5xl space-y-16">
      <div className="flex justify-between items-end">
        <h1 className="font-display text-8xl font-normal tracking-tighter leading-none">
          Color <span className="text-signal-green">System</span>
        </h1>
        <p className="max-w-xs text-sm text-cipher-green/60 leading-relaxed font-medium">
          Our palette is a synthesis of botanical warmth and clinical precision,
          defining the "Digital Herbarium" aesthetic.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Primary Gradient */}
        <div className="col-span-12 bg-surface-container-lowest p-12 rounded-[12px] group relative overflow-hidden ghost-border">
          <div className="flex justify-between mb-12 relative z-10">
            <span className="px-4 py-1.5 bg-surface-container-low rounded-full font-display text-[10px] font-bold uppercase tracking-[0.2em] text-signal-green">Primary Gradient</span>
            <span className="font-mono text-[10px] text-cipher-green/30">THE SIGNAL</span>
          </div>
          <div className="grid grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-display text-5xl font-normal tracking-tight mb-6">The Signal</h2>
              <p className="text-graphite max-w-md mb-8 leading-relaxed">
                The app is quiet (deep Cipher Green) most of the cycle. When the 7-day window activates, the Signal gradient appears. Silver is the visual language of clairvoyance in action.
              </p>
              <div className="flex items-center gap-4 font-mono text-xs text-cipher-green/40">
                <span>#1A2E1A</span>
                <ChevronRight className="w-3 h-3" />
                <span>#3D7A3D</span>
                <ChevronRight className="w-3 h-3" />
                <span>#C8D4C0</span>
              </div>
            </div>
            <div className="h-32 w-full bg-gradient-signal rounded-lg shadow-lg group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
        </div>

        {/* Primary Surface */}
        <div className="col-span-7 bg-surface-container-lowest p-12 rounded-[12px] group relative overflow-hidden">
          <div className="flex justify-between mb-20 relative z-10">
            <span className="px-4 py-1.5 bg-surface-container-low rounded-full font-display text-[10px] font-bold uppercase tracking-[0.2em] text-signal-green">Primary Surface</span>
            <span className="font-mono text-[10px] text-cipher-green/30">01 / 05</span>
          </div>
          <h2 className="font-display text-6xl font-normal tracking-tight mb-6 relative z-10">Chrome White</h2>
          <p className="text-graphite max-w-md mb-16 relative z-10 leading-relaxed">
            The "welcoming" active state. An expansive, airy canvas that prioritizes breathability and gallery-like presentation.
          </p>
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-chrome-white rounded-lg ghost-border shadow-inner group-hover:scale-110 transition-transform duration-700" />
            <div>
              <div className="font-mono text-base font-bold">#E8EDE4</div>
              <div className="font-display text-[10px] uppercase tracking-[0.2em] text-cipher-green/40 font-bold mt-1">Surface Base</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-chrome-white/20 blur-[100px] -mr-32 -mt-32" />
        </div>

        {/* Dormant State */}
        <div className="col-span-5 bg-cipher-green p-12 rounded-[12px] text-chrome-white group shadow-2xl">
          <div className="flex justify-between mb-20">
            <span className="px-4 py-1.5 bg-white/5 rounded-full font-display text-[10px] font-bold uppercase tracking-[0.2em] text-silver-mist">Dormant State</span>
            <span className="font-mono text-[10px] text-white/20">02 / 05</span>
          </div>
          <h2 className="font-display text-6xl font-normal tracking-tight mb-6">Cipher Green</h2>
          <p className="text-chrome-white/60 mb-16 leading-relaxed">
            Reserved for dormancy and deep focus. A tonal void that provides extreme contrast to our primary surfaces.
          </p>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-cipher-green rounded-lg border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-700" />
            <div>
              <div className="font-mono text-base font-bold">#0A140A</div>
              <div className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-1">Inverse Base</div>
            </div>
          </div>
        </div>

        {/* Forest Signal */}
        <div className="col-span-4 bg-surface-container-low p-10 rounded-[12px] group">
          <div className="flex justify-between mb-16">
            <span className="font-mono text-[10px] text-cipher-green/30">03</span>
            <span className="font-display text-[9px] uppercase tracking-widest font-bold text-cipher-green/40">Accent</span>
          </div>
          <h3 className="font-display text-4xl font-normal tracking-tight mb-10">Forest Signal</h3>
          <div className="w-full h-32 bg-forest-signal rounded-lg mb-8 group-hover:scale-[1.03] transition-transform duration-700 shadow-sm" />
          <div className="font-mono text-base font-bold">#1A2E1A</div>
          <div className="font-display text-[10px] uppercase tracking-[0.2em] text-cipher-green/40 font-bold mt-1">Accent Deep</div>
        </div>

        {/* Signal Green */}
        <div className="col-span-4 bg-surface-container-low p-10 rounded-[12px] group">
          <div className="flex justify-between mb-16">
            <span className="font-mono text-[10px] text-cipher-green/30">04</span>
            <span className="font-display text-[9px] uppercase tracking-widest font-bold text-cipher-green/40">Action</span>
          </div>
          <h3 className="font-display text-4xl font-normal tracking-tight mb-10 text-signal-green">Signal Green</h3>
          <div className="w-full h-32 bg-signal-green rounded-lg mb-8 group-hover:scale-[1.03] transition-transform duration-700 shadow-sm" />
          <div className="font-mono text-base font-bold">#3D7A3D</div>
          <div className="font-display text-[10px] uppercase tracking-[0.2em] text-cipher-green/40 font-bold mt-1">Action Primary</div>
        </div>

        {/* Silver Mist */}
        <div className="col-span-4 bg-surface-container-low p-10 rounded-[12px] group">
          <div className="flex justify-between mb-16">
            <span className="font-mono text-[10px] text-cipher-green/30">05</span>
            <span className="font-display text-[9px] uppercase tracking-widest font-bold text-cipher-green/40">Intelligence</span>
          </div>
          <h3 className="font-display text-4xl font-normal tracking-tight mb-10">Silver Mist</h3>
          <div className="w-full h-32 bg-silver-mist rounded-lg mb-8 group-hover:scale-[1.03] transition-transform duration-700 shadow-sm" />
          <div className="font-mono text-base font-bold">#C8D4C0</div>
          <div className="font-display text-[10px] uppercase tracking-[0.2em] text-cipher-green/40 font-bold mt-1">Intelligence / AI</div>
        </div>
      </div>

      {/* Three-State Theme */}
      <div>
        <div className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-cipher-green/40 mb-2">Three-State Theme</div>
        <p className="font-sans text-sm text-cipher-green/50 mb-10">The app has three distinct visual states. Do not mix them.</p>
        <div className="grid grid-cols-3 gap-6">
          {/* Onboarding */}
          <div className="rounded-[12px] overflow-hidden shadow-2xl">
            <div
              className="p-10 h-72 flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, #1A2E1A 0%, #3D7A3D 60%, #C8D4C0 100%)' }}
            >
              <div className="flex items-center gap-2">
                <Sunrise className="w-4 h-4 text-chrome-white/60" />
                <span className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-chrome-white/60">Onboarding</span>
              </div>
              <div
                className="rounded-[12px] p-5"
                style={{ background: 'rgba(10, 20, 10, 0.35)', backdropFilter: 'blur(20px)', border: '1px solid rgba(232, 237, 228, 0.12)' }}
              >
                <div className="font-display text-[9px] uppercase tracking-[0.2em] font-bold text-chrome-white/40 mb-2">Last period start</div>
                <div className="font-mono text-sm text-chrome-white/80">March 28, 2026</div>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low">
              <div className="font-display text-sm font-bold mb-2">Onboarding</div>
              <div className="font-mono text-[9px] text-cipher-green/40 space-y-1">
                <div>bg: 135° · #1A2E1A → #3D7A3D → #C8D4C0</div>
                <div>card: glassmorphism on gradient</div>
              </div>
            </div>
          </div>

          {/* Active Window */}
          <div className="rounded-[12px] overflow-hidden shadow-lg ghost-border">
            <div className="p-10 h-72 flex flex-col justify-between bg-chrome-white">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-signal-green" />
                <span className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-signal-green">Active Window</span>
              </div>
              <div
                className="rounded-[12px] p-5"
                style={{ background: 'rgba(26, 46, 26, 0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(200, 212, 192, 0.12)', borderLeft: '3px solid #C8D4C0' }}
              >
                <div className="font-display text-[9px] uppercase tracking-[0.2em] font-bold text-signal-green mb-2">THE TUNNEL</div>
                <div className="font-display text-sm font-bold text-forest-signal">Dark Chocolate Walnut Bowl</div>
                <div className="font-mono text-[9px] text-silver-mist mt-1">8 MIN</div>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low">
              <div className="font-display text-sm font-bold mb-2">Active Window</div>
              <div className="font-mono text-[9px] text-cipher-green/40 space-y-1">
                <div>bg: Chrome White #E8EDE4</div>
                <div>text: Forest Signal #1A2E1A</div>
              </div>
            </div>
          </div>

          {/* Dormant */}
          <div className="rounded-[12px] overflow-hidden shadow-2xl">
            <div className="p-10 h-72 flex flex-col justify-between" style={{ background: '#0A140A' }}>
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-silver-mist/40" />
                <span className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-silver-mist/40">Dormant</span>
              </div>
              <div className="text-center">
                <div className="font-mono text-[11px] text-chrome-white/30 tracking-[0.12em] mb-2">WINDOW OPENS IN</div>
                <div className="font-mono text-5xl font-bold text-chrome-white/30">14</div>
                <div className="font-mono text-xs text-chrome-white/20 mt-1 tracking-[0.08em]">DAYS</div>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low">
              <div className="font-display text-sm font-bold mb-2">Dormant</div>
              <div className="font-mono text-[9px] text-cipher-green/40 space-y-1">
                <div>bg: Cipher Green #0A140A</div>
                <div>text: Chrome White dimmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────────────────────────────────────
function TypographySection() {
  return (
    <div className="max-w-4xl space-y-20">
      <h1 className="font-display text-9xl font-normal tracking-tighter leading-none">
        Typo<span className="text-signal-green">graphy</span>
      </h1>

      {/* Font cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-10 bg-cipher-green text-chrome-white rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] text-silver-mist font-bold mb-6">Primary Font</div>
          <div className="font-display text-5xl font-bold tracking-tighter mb-5 leading-none">Space Grotesk</div>
          <p className="font-sans text-sm leading-relaxed text-chrome-white/70">
            A brutalist, wide, and authoritative sans-serif. Used for the wordmark, feature labels, and system metadata to evoke a sense of clinical precision.
          </p>
        </div>
        <div className="p-10 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] text-signal-green font-bold mb-6">Secondary Font</div>
          <div className="font-sans text-5xl font-bold tracking-tight mb-5 leading-none">Manrope</div>
          <p className="font-sans text-sm leading-relaxed text-cipher-green/75">
            Warm, geometric, and highly legible. Reserved for all body copy, headings, buttons, and UI text to provide organic balance.
          </p>
        </div>
      </div>

      {/* Type specimens */}
      <div className="space-y-0">
        <div className="py-10 border-b border-cipher-green/8 grid grid-cols-12 gap-8 items-baseline">
          <div className="col-span-3">
            <div className="font-display text-[9px] uppercase tracking-[0.25em] text-cipher-green/40 font-bold">Display Bold</div>
            <div className="font-mono text-[9px] text-cipher-green/25 mt-1">Space Grotesk · 700</div>
          </div>
          <div className="col-span-9">
            <span className="font-display text-6xl font-bold tracking-tighter leading-none">The quick brown fox</span>
          </div>
        </div>

        <div className="py-10 border-b border-cipher-green/8 grid grid-cols-12 gap-8 items-baseline">
          <div className="col-span-3">
            <div className="font-display text-[9px] uppercase tracking-[0.25em] text-cipher-green/40 font-bold">Headline Medium</div>
            <div className="font-mono text-[9px] text-cipher-green/25 mt-1">Space Grotesk · 500</div>
          </div>
          <div className="col-span-9">
            <span className="font-display text-4xl font-medium tracking-tight leading-none">Jumps over the lazy dog</span>
          </div>
        </div>

        <div className="py-10 border-b border-cipher-green/8 grid grid-cols-12 gap-8 items-baseline">
          <div className="col-span-3">
            <div className="font-display text-[9px] uppercase tracking-[0.25em] text-cipher-green/40 font-bold">Body Regular</div>
            <div className="font-mono text-[9px] text-cipher-green/25 mt-1">Manrope · 400</div>
          </div>
          <div className="col-span-9">
            <span className="font-sans text-lg leading-relaxed text-cipher-green/80">
              Our typography system prioritizes legibility while maintaining a sophisticated, editorial feel.
              By combining bold display weights with airy body copy, we create a rhythmic reading experience
              that mirrors the structure of a botanical herbarium.
            </span>
          </div>
        </div>

        <div className="py-10 grid grid-cols-12 gap-8 items-baseline">
          <div className="col-span-3">
            <div className="font-display text-[9px] uppercase tracking-[0.25em] text-cipher-green/40 font-bold">Data Mono</div>
            <div className="font-mono text-[9px] text-cipher-green/25 mt-1">Space Mono · 400</div>
          </div>
          <div className="col-span-9">
            <span className="font-mono text-2xl tracking-tight text-cipher-green/70">DAY 3 OF 7 · 8 MIN · 14 DAYS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS — Real CLARVUE Components
// ─────────────────────────────────────────────────────────────────────────────
function ComponentsSection() {
  return (
    <div className="max-w-5xl space-y-20">
      <h1 className="font-display text-9xl font-normal tracking-tighter leading-none">
        Compo<span className="text-signal-green">nents</span>
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Meal Card */}
        <div className="p-10 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-cipher-green/60 mb-8">THE TUNNEL — Meal Card</div>
          <div className="mb-4"
            style={{
              background: 'rgba(15, 26, 15, 0.75)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(200, 212, 192, 0.06)',
              borderLeft: '3px solid #C8D4C0',
              borderRadius: '12px',
              padding: '14px 16px',
            }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-display text-[10px] uppercase tracking-[0.15em] font-bold mb-1" style={{ color: '#C8D4C0' }}>THE TUNNEL</div>
                <div className="font-display text-base font-bold" style={{ color: '#E8EDE4' }}>Dark Chocolate Walnut Bowl</div>
              </div>
              <div style={{ background: 'rgba(200, 212, 192, 0.10)', borderRadius: '4px', padding: '3px 8px' }}>
                <span className="font-mono text-[10px]" style={{ color: '#C8D4C0' }}>8 MIN</span>
              </div>
            </div>
            <p style={{ color: '#6B9B6B', fontSize: '12px' }}>Magnesium + dark cacao buffer cortisol response.</p>
          </div>
          <div className="font-mono text-[9px] text-cipher-green/55 space-y-1 mt-4">
            <div>left-border: 3px solid #C8D4C0 — the only permitted opaque border</div>
            <div>prep chip: Space Mono, rgba(200,212,192,0.10) bg</div>
            <div>silver border = CLARVUE decided this</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-10 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-cipher-green/60 mb-8">Buttons — The 12px Rule</div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                style={{
                  background: '#3D7A3D',
                  color: '#E8EDE4',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Primary CTA
              </button>
              <div className="font-mono text-[9px] text-cipher-green/60">radius 12px · Signal Green</div>
            </div>
            <div className="flex items-center gap-4">
              <button
                style={{
                  background: '#152015',
                  color: '#3A4A3A',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '9px',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Secondary
              </button>
              <div className="font-mono text-[9px] text-cipher-green/60">radius 8px · bgElevated</div>
            </div>
            <div className="flex items-center gap-4">
              <button
                style={{
                  background: 'transparent',
                  color: 'rgba(232, 237, 228, 0.20)',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '9px',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Ghost / Reset
              </button>
              <div className="font-mono text-[9px] text-cipher-green/60">opacity 20% → 60% hover · Reset only</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-surface-container-lowest rounded-[8px]">
            <div className="font-display text-[9px] uppercase tracking-[0.2em] font-bold text-cipher-green/60 mb-1">Rule</div>
            <p className="font-sans text-[11px] text-cipher-green/70">No pill-shaped buttons. 12px outer, 8px inner. No rounded-full except the logo signal dot.</p>
          </div>
        </div>

        {/* Feature Labels */}
        <div className="p-10 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-cipher-green/60 mb-8">Feature Labels</div>
          <div className="space-y-6">
            {[
              { label: 'THE TUNNEL', color: '#C8D4C0', note: 'silverMist — CLARVUE acted' },
              { label: 'DAILY RESET', color: '#3A4A3A', note: 'textDim — quieter, secondary' },
              { label: 'THE PROTOCOL', color: '#C8D4C0', note: 'silverMist — Phase 2, reserved' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span
                  className="font-display font-bold"
                  style={{ fontSize: '10px', letterSpacing: '0.15em', color: item.color }}
                >
                  {item.label}
                </span>
                <span className="font-mono text-[9px] text-cipher-green/55">{item.note}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 font-mono text-[9px] text-cipher-green/55">Space Grotesk · 10px · 600 · +0.15em · always uppercase</div>
        </div>

        {/* AI Intelligence Chip */}
        <div className="p-10 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-cipher-green/60 mb-8">AI Intelligence Chips</div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(200, 212, 192, 0.10)', borderRadius: '4px', padding: '3px 8px' }}>
                <span className="font-mono text-[10px]" style={{ color: '#C8D4C0' }}>8 MIN</span>
              </div>
              <span className="font-mono text-[9px] text-cipher-green/60">prep time chip</span>
            </div>
            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(200, 212, 192, 0.10)', borderRadius: '4px', padding: '3px 8px' }}>
                <span className="font-mono text-[10px]" style={{ color: '#C8D4C0' }}>WINDOW ACTIVE</span>
              </div>
              <span className="font-mono text-[9px] text-cipher-green/60">system status chip</span>
            </div>
          </div>
          <div className="mt-8 p-4 bg-surface-container-lowest rounded-[8px] space-y-1">
            <div className="font-mono text-[9px] text-cipher-green/60">Space Mono · 10–11px</div>
            <div className="font-mono text-[9px] text-cipher-green/60">bg: rgba(200, 212, 192, 0.10)</div>
            <div className="font-mono text-[9px] text-cipher-green/60">text: #C8D4C0 Silver Mist</div>
            <div className="font-mono text-[9px] text-cipher-green/60">radius: 4px · pad: 3px 8px</div>
            <div className="font-sans text-[10px] text-cipher-green/70 mt-2 italic">"Stamped metal tags, not soft buttons."</div>
          </div>
        </div>

        {/* Input */}
        <div className="col-span-2 p-10 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[9px] uppercase tracking-[0.3em] font-bold text-cipher-green/60 mb-8">Inputs — Space Mono for Precision</div>
          <div className="max-w-md space-y-6">
            <div>
              <label className="font-display text-[10px] uppercase font-bold tracking-[0.3em] text-cipher-green/60 block mb-3">
                Last period start date
              </label>
              <input
                type="text"
                defaultValue="March 28, 2026"
                className="w-full rounded-[10px] px-4 py-3 font-mono text-sm focus:outline-none transition-all"
                style={{
                  background: '#0F1A0F',
                  color: '#E8EDE4',
                  border: '1.5px solid rgba(107, 155, 107, 0.20)',
                }}
                readOnly
              />
            </div>
            <div className="grid grid-cols-3 gap-4 font-mono text-[9px] text-cipher-green/60">
              <div>bg: #0F1A0F (bgSurface)</div>
              <div>border: rgba(107,155,107,0.20)</div>
              <div>focus: rgba(107,155,107,0.50)</div>
              <div>font: Space Mono</div>
              <div>radius: 10px</div>
              <div>pad: 12px 16px</div>
            </div>
          </div>
        </div>

        {/* Copy Rules */}
        <div className="col-span-2 p-10 bg-cipher-green text-chrome-white rounded-[12px] shadow-2xl">
          <div className="font-display text-[9px] uppercase tracking-[0.4em] font-bold text-silver-mist mb-10">Copy Rules — Do / Don't</div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            {[
              { do: '"Your window is active."', dont: '"You\'re in your luteal phase!"' },
              { do: '"Today\'s fuel. Decided."', dont: '"We recommend:"' },
              { do: '"Good. That\'s enough for today."', dont: '"Good job! Keep it up!"' },
              { do: '"CLARVUE is monitoring."', dont: '"Come back soon!"' },
              { do: '"DAY 3 OF 7"', dont: '"Day 3 of your window"' },
              { do: '"WINDOW OPENS IN / 14 DAYS"', dont: '"14 days to go!"' },
            ].map((item) => (
              <div key={item.do} className="grid grid-cols-2 gap-4 items-start py-3 border-b border-white/10">
                <div>
                  <div className="font-display text-[8px] uppercase tracking-[0.2em] font-bold text-signal-green mb-1">Do</div>
                  <div className="font-mono text-xs text-chrome-white/90">{item.do}</div>
                </div>
                <div>
                  <div className="font-display text-[8px] uppercase tracking-[0.2em] font-bold text-chrome-white/50 mb-1">Don't</div>
                  <div className="font-mono text-xs text-chrome-white/50 line-through">{item.dont}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
