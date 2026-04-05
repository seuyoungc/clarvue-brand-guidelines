import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Palette, 
  Type, 
  Component, 
  Image as ImageIcon, 
  Info,
  ChevronRight,
  Sun,
  Moon,
  History,
  Settings,
  Eye,
  ArrowUpRight
} from 'lucide-react';

type Section = 'Home' | 'Color' | 'Name' | 'Typography' | 'UI Component' | 'Visual Imagery';

const SECTIONS: { id: Section; icon: any }[] = [
  { id: 'Home', icon: Home },
  { id: 'Color', icon: Palette },
  { id: 'Name', icon: Info },
  { id: 'Typography', icon: Type },
  { id: 'UI Component', icon: Component },
  { id: 'Visual Imagery', icon: ImageIcon },
];

const Logo = () => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="340" cy="172" r="172" fill="#C8D4C0" />
    <path d="M120 420L220 320" stroke="#1A2E1A" strokeWidth="48" />
    <path d="M170 470L270 370" stroke="#1A2E1A" strokeWidth="48" />
    <path d="M70 370L170 270" stroke="#1A2E1A" strokeWidth="48" />
    <path d="M20 320L120 220" stroke="#1A2E1A" strokeWidth="48" />
    <circle cx="210" cy="302" r="140" fill="#1A2E1A" />
  </svg>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('Color');

  return (
    <div className="flex min-h-screen bg-surface text-cipher-green selection:bg-signal-green selection:text-white font-sans">
      {/* Sidebar Navigation - Glassmorphism applied */}
      <nav className="w-64 flex flex-col h-screen sticky top-0 bg-surface/80 backdrop-blur-md z-10 ghost-border border-r-0">
        <div className="p-8 flex items-center gap-3">
          <Logo />
          <span className="font-display font-bold tracking-tighter text-2xl text-forest-signal">CLARVUE</span>
        </div>

        <div className="flex-1 px-4 space-y-2 mt-4">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                activeSection === section.id 
                  ? 'bg-forest-signal text-chrome-white shadow-lg' 
                  : 'hover:bg-surface-container-low text-cipher-green/60 hover:text-cipher-green'
              }`}
            >
              <section.icon className={`w-5 h-5 transition-transform duration-300 ${activeSection === section.id ? '' : 'group-hover:scale-110'}`} />
              <span className="font-display font-medium text-sm tracking-tight">{section.id}</span>
            </button>
          ))}
        </div>

        <div className="p-8 bg-surface-container-low/50">
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-cipher-green/40 font-bold">
            April 2026
          </div>
        </div>
      </nav>

      {/* Main Content Area - Asymmetrical Margins */}
      <main className="flex-1 pl-16 pr-8 py-12 overflow-y-auto">
        <header className="flex justify-between items-start mb-20">
          <div className="font-display text-[10px] uppercase tracking-[0.4em] text-cipher-green/40 font-bold">
            Documentation
          </div>
          <div className="flex gap-12 font-display text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="text-cipher-green">Brand Guidelines</span>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeSection === 'Home' && <HomeSection />}
            {activeSection === 'Color' && <ColorSection />}
            {activeSection === 'Name' && <NameSection />}
            {activeSection === 'Typography' && <TypographySection />}
            {activeSection === 'UI Component' && <UIComponentSection />}
            {activeSection === 'Visual Imagery' && <VisualImagerySection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function HomeSection() {
  return (
    <div className="max-w-5xl">
      <h1 className="font-display text-9xl font-normal tracking-tighter mb-12 leading-[0.85] text-gradient-signal">
        CLARVUE
      </h1>
      <p className="text-2xl leading-relaxed text-graphite max-w-3xl mb-16 font-light">
        CLARVUE is a synthesis of botanical warmth and clinical precision. 
        We define the "Digital Herbarium" aesthetic—where organic growth 
        meets structured analysis.
      </p>
      <div className="grid grid-cols-2 gap-12">
        <div className="p-10 bg-surface-container-low rounded-[12px] group hover:bg-surface-container-high transition-colors duration-500">
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.3em] mb-6 text-signal-green">Vision</h3>
          <p className="text-cipher-green/80 text-lg leading-relaxed">To bridge the gap between human intuition and data-driven clarity through natural metaphors.</p>
        </div>
        <div className="p-10 bg-cipher-green text-chrome-white rounded-[12px] shadow-2xl">
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.3em] mb-6 text-silver-mist">Mission</h3>
          <p className="text-chrome-white/80 text-lg leading-relaxed">Providing a welcoming, expansive canvas that prioritizes breathability and gallery-like presentation.</p>
        </div>
      </div>
    </div>
  );
}

function ColorSection() {
  return (
    <div className="space-y-16">
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

        {/* Secondary Colors */}
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

      {/* Tonal Architecture - Background Shift */}
      <div className="p-16 bg-surface-container-low rounded-[12px] grid grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-5xl font-bold tracking-tight mb-8">Tonal Architecture</h2>
          <p className="text-graphite text-lg mb-12 leading-relaxed font-light">
            The interaction between <span className="text-signal-green font-bold italic">Chrome White</span> and <span className="text-cipher-green font-bold italic">Cipher Green</span> creates a rhythmic breathing pattern in the user experience.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm">
                <Sun className="w-6 h-6 text-signal-green" />
              </div>
              <div>
                <div className="font-display text-[11px] uppercase tracking-[0.3em] font-bold mb-2 text-signal-green">Active State</div>
                <p className="text-sm text-cipher-green/60 leading-relaxed">Chrome White provides a welcoming, accessible environment for high-frequency interaction.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cipher-green flex items-center justify-center shadow-lg">
                <Moon className="w-6 h-6 text-silver-mist" />
              </div>
              <div>
                <div className="font-display text-[11px] uppercase tracking-[0.3em] font-bold mb-2 text-silver-mist">Dormancy State</div>
                <p className="text-sm text-cipher-green/60 leading-relaxed">Cipher Green is utilized for focus modes, immersive analysis, and system-level backgrounds.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-[12px] flex flex-col items-center justify-center p-12 relative overflow-hidden group shadow-sm">
          <div className="flex gap-16 mb-12 relative z-10">
            <div className="flex flex-col items-center gap-3">
              <History className="w-8 h-8 text-cipher-green/20" />
              <span className="font-display text-[9px] uppercase font-bold tracking-[0.3em] text-cipher-green/30">History</span>
            </div>
            <div className="flex flex-col items-center gap-3 bg-surface p-6 rounded-xl shadow-sm">
              <Settings className="w-8 h-8 text-signal-green" />
              <span className="font-display text-[9px] uppercase font-bold tracking-[0.3em] text-signal-green">Settings</span>
            </div>
          </div>
          <div className="bg-cipher-green text-chrome-white px-8 py-4 rounded-[12px] font-mono text-xs tracking-[0.2em] uppercase shadow-2xl group-hover:scale-105 transition-transform duration-700 relative z-10">
            Precision meets NATURE
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-signal-green/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function NameSection() {
  return (
    <div className="max-w-5xl">
      <h1 className="font-display text-9xl font-normal tracking-tighter mb-16 leading-none">
        The <span className="text-signal-green">Name</span>
      </h1>
      <div className="grid grid-cols-2 gap-24 items-center">
        <div>
          <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-signal-green mb-6">Etymology</div>
          <h2 className="font-display text-6xl font-normal tracking-tight mb-8">CLARVUE</h2>
          <p className="text-2xl text-graphite leading-relaxed mb-12 font-light">
            A portmanteau of <span className="font-bold text-cipher-green">Clarity</span> and <span className="font-bold text-cipher-green">Vue</span> (Vision). 
            The name embodies our commitment to transparent analysis and organic visualization.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-5 p-6 bg-surface-container-low rounded-[12px] group hover:bg-surface-container-high transition-colors">
              <div className="w-3 h-3 rounded-full bg-signal-green" />
              <span className="font-display text-sm font-bold tracking-tight">ALWAYS UPPERCASE IN LOGOTYPE</span>
            </div>
            <div className="flex items-center gap-5 p-6 bg-surface-container-low rounded-[12px] group hover:bg-surface-container-high transition-colors">
              <div className="w-3 h-3 rounded-full bg-signal-green" />
              <span className="font-display text-sm font-bold tracking-tight">Sentence case in body copy</span>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-cipher-green rounded-[12px] flex items-center justify-center p-16 shadow-2xl relative overflow-hidden">
          <div className="text-white text-7xl font-display font-bold tracking-tighter border-b-8 border-signal-green pb-4 relative z-10">
            CLARVUE
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function TypographySection() {
  return (
    <div className="space-y-20">
      <h1 className="font-display text-9xl font-normal tracking-tighter leading-none">
        Typo<span className="text-signal-green">graphy</span>
      </h1>
      
      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-4">
          <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-signal-green mb-6">Primary Font</div>
          <h2 className="font-display text-7xl font-normal mb-6 tracking-tighter">Space Grotesk</h2>
          <p className="text-graphite leading-relaxed text-lg font-light">
            A brutalist, wide, and authoritative sans-serif. We use it for headings and technical metadata to evoke a sense of clinical precision.
          </p>
          
          <div className="mt-12 pt-12 border-t border-cipher-green/5">
             <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-cipher-green/40 mb-6">Secondary Font</div>
             <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Manrope</h2>
             <p className="text-graphite leading-relaxed text-sm font-light">
               Warm, geometric, and highly legible. Reserved for body copy and titles to provide organic balance.
             </p>
          </div>
        </div>
        <div className="col-span-8 space-y-12">
          <div className="bg-surface-container-low p-12 rounded-[12px]">
            <div className="font-display text-[10px] uppercase tracking-[0.3em] font-bold text-cipher-green/30 mb-8">Display Bold // Space Grotesk</div>
            <div className="font-display text-8xl font-bold tracking-tighter leading-[0.9]">The quick brown fox</div>
          </div>
          <div className="bg-surface-container-low p-12 rounded-[12px]">
            <div className="font-display text-[10px] uppercase tracking-[0.3em] font-bold text-cipher-green/30 mb-8">Headline Medium // Space Grotesk</div>
            <div className="font-display text-6xl font-medium tracking-tight text-signal-green italic">Jumps over the lazy dog</div>
          </div>
          <div className="p-12">
            <div className="font-display text-[10px] uppercase tracking-[0.3em] font-bold text-cipher-green/30 mb-8">Body Regular // Manrope</div>
            <div className="text-2xl leading-relaxed text-graphite font-light">
              Our typography system prioritizes legibility while maintaining a sophisticated, editorial feel. 
              By combining bold display weights with airy body copy, we create a rhythmic reading experience 
              that mirrors the structure of a botanical herbarium.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UIComponentSection() {
  return (
    <div className="space-y-20">
      <h1 className="font-display text-9xl font-normal tracking-tighter leading-none">
        UI <span className="text-signal-green">Components</span>
      </h1>

      <div className="grid grid-cols-2 gap-12">
        <div className="p-16 bg-surface-container-lowest rounded-[12px] ghost-border space-y-12">
          <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-signal-green">Buttons // The 12px Rule</div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
               <button className="px-10 py-4 bg-signal-green text-chrome-white rounded-[12px] font-display font-bold text-sm hover:opacity-90 transition-all shadow-lg flex items-center gap-2">
                Primary Action <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="px-10 py-4 bg-surface-container-high text-forest-signal rounded-[12px] font-display font-bold text-sm hover:bg-surface-container-high/80 transition-all">
                Secondary
              </button>
            </div>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-4 bg-silver-mist text-cipher-green rounded-[12px] font-display font-bold text-sm hover:opacity-90 transition-all shadow-inner border border-white/20">
                AI Intelligence
              </button>
              <button className="px-10 py-4 ghost-border text-cipher-green rounded-[12px] font-display font-bold text-sm hover:bg-cipher-green hover:text-white transition-all">
                Ghost State
              </button>
            </div>
          </div>
        </div>

        <div className="p-16 bg-cipher-green rounded-[12px] space-y-12 shadow-2xl">
          <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-silver-mist">Cards // Ambient Depth</div>
          <div className="bg-white/5 p-10 rounded-[12px] border border-white/5 backdrop-blur-md group hover:bg-white/10 transition-all">
            <div className="w-10 h-10 bg-signal-green rounded-lg mb-8 shadow-lg" />
            <h4 className="text-white font-display text-3xl font-normal mb-4 tracking-tight">Analysis Module</h4>
            <p className="text-white/40 text-sm leading-relaxed font-light">Real-time botanical data processing and visualization with clinical precision.</p>
          </div>
        </div>

        <div className="col-span-2 p-16 bg-surface-container-low rounded-[12px]">
          <div className="font-display text-[11px] uppercase tracking-[0.4em] font-bold text-signal-green mb-12">Form Elements // Space Mono</div>
          <div className="max-w-xl space-y-10">
            <div className="space-y-4">
              <label className="font-display text-[11px] uppercase font-bold tracking-[0.3em] text-cipher-green/40">Search Database</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ENTER BOTANICAL ID..." 
                  className="w-full bg-surface-container-lowest ghost-border rounded-[12px] px-6 py-4 font-mono text-sm focus:outline-none focus:border-signal-green/40 transition-all placeholder:text-cipher-green/20"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-silver-mist rounded text-[9px] font-mono font-bold text-cipher-green/60">
                  CMD + K
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 rounded-lg bg-signal-green flex items-center justify-center shadow-lg">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <span className="font-display text-sm font-bold tracking-tight">ENABLE REAL-TIME TRACKING</span>
              
              <div className="ml-auto flex gap-2">
                <span className="px-3 py-1 bg-silver-mist rounded font-display text-[10px] font-bold text-cipher-green/60">AI ASSISTED</span>
                <span className="px-3 py-1 bg-cipher-green text-chrome-white rounded font-display text-[10px] font-bold">STAMPED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualImagerySection() {
  return (
    <div className="space-y-20">
      <h1 className="font-display text-9xl font-normal tracking-tighter leading-none">
        Visual <span className="text-signal-green">Imagery</span>
      </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="aspect-[3/4] bg-surface-container-low rounded-[12px] overflow-hidden relative group shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000" 
            alt="Botanical" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-cipher-green/20 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute bottom-8 left-8 text-white font-display font-bold text-[11px] uppercase tracking-[0.3em] drop-shadow-md">Organic Texture</div>
        </div>
        <div className="aspect-[3/4] bg-surface-container-low rounded-[12px] overflow-hidden relative group shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1000" 
            alt="Minimalist" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-cipher-green/20 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute bottom-8 left-8 text-white font-display font-bold text-[11px] uppercase tracking-[0.3em] drop-shadow-md">Clinical Space</div>
        </div>
        <div className="aspect-[3/4] bg-surface-container-low rounded-[12px] overflow-hidden relative group shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=1000" 
            alt="Growth" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-cipher-green/20 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute bottom-8 left-8 text-white font-display font-bold text-[11px] uppercase tracking-[0.3em] drop-shadow-md">Structured Growth</div>
        </div>
      </div>

      <div className="p-16 bg-cipher-green text-chrome-white rounded-[12px] shadow-2xl relative overflow-hidden">
        <h3 className="font-display text-[11px] font-normal uppercase tracking-[0.4em] mb-10 text-silver-mist relative z-10">Photography Principles</h3>
        <ul className="grid grid-cols-2 gap-12 relative z-10">
          <li className="flex gap-6">
            <span className="text-signal-green font-mono text-lg font-bold">01</span>
            <p className="text-chrome-white/60 text-base leading-relaxed font-light">High contrast with deep shadows and bright highlights to mirror our tonal architecture.</p>
          </li>
          <li className="flex gap-6">
            <span className="text-signal-green font-mono text-lg font-bold">02</span>
            <p className="text-chrome-white/60 text-base leading-relaxed font-light">Macro focus on organic textures (leaves, bark, water) to emphasize the "Herbarium" theme.</p>
          </li>
          <li className="flex gap-6">
            <span className="text-signal-green font-mono text-lg font-bold">03</span>
            <p className="text-chrome-white/60 text-base leading-relaxed font-light">Desaturated or monochromatic palettes with single-point green accents.</p>
          </li>
          <li className="flex gap-6">
            <span className="text-signal-green font-mono text-lg font-bold">04</span>
            <p className="text-chrome-white/60 text-base leading-relaxed font-light">Symmetrical compositions that evoke a sense of clinical analysis and order.</p>
          </li>
        </ul>
        <div className="absolute top-0 right-0 w-96 h-96 bg-signal-green/10 blur-[120px] -mr-48 -mt-48" />
      </div>
    </div>
  );
}
