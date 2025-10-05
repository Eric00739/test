export const metadata = {
  title: "About Fastfun Remote",
  description:
    "Meet the RF engineers, manufacturing specialists, and quality strategists behind Fastfun Remote's award-winning control systems.",
};

const pillars = [
  {
    title: "Integrated RF Campus",
    copy:
      "Our Dongguan headquarters brings RF simulation labs, EMC chambers, SMT lines, and final assembly into a single workflow for rapid iteration.",
  },
  {
    title: "Veteran Engineering Core",
    copy:
      "Each program is led by senior RF, firmware, mechanical, and compliance leads-average 12+ years shipping consumer, industrial, and automotive controls.",
  },
  {
    title: "Quality Without Compromise",
    copy:
      "100% functional testing, climate stress screening, and PPAP-grade reporting keep your brand promise intact from pilot to mass production.",
  },
];

const leadership = [
  {
    role: "RF Systems",
    focus: "Antenna design, low-noise amplification, and interference mitigation that hold range even in dense urban deployments.",
  },
  {
    role: "Firmware & Cloud",
    focus: "Secure pairing flows, power-aware firmware, and integrations with cloud ecosystems including Matter, Tuya, and proprietary stacks.",
  },
  {
    role: "Manufacturing Excellence",
    focus: "Lean operations with traceability, in-line AOI/X-ray, and configurable test rigs for every remote and receiver that leaves the line.",
  },
];

export default function Page() {
  return (
    <div className="container space-y-16 py-16">
      <header className="max-w-3xl space-y-4">
        <span className="badge">Who we are</span>
        <h1 className="section-title">
          Fastfun Remote is the strategic partner behind high-impact RF control launches
        </h1>
        <p className="section-copy">
          We founded Fastfun Remote to close the gap between bold product ideas and the specialised RF engineering needed to ship them globally. Today we build bespoke remote ecosystems for appliance innovators, mobility disruptors, and smart-home leaders across 30+ countries.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="card">
            <h2 className="text-xl font-semibold text-white">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{pillar.copy}</p>
          </div>
        ))}
      </section>

      <section className="card space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Leadership Pods</h2>
          <p className="text-sm text-slate-200/90">
            Every engagement is championed by a multi-disciplinary pod that owns requirements, reviews, and launch success metrics with you.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map((item) => (
            <div key={item.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">{item.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{item.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-6">
        <h2 className="text-2xl font-semibold text-white">Sustainability & Responsibility</h2>
        <p className="text-sm leading-relaxed text-slate-200/90">
          Fastfun Remote operates with audited suppliers, RoHS-compliant materials, and responsible disposal of soldering waste. Our workforce programs emphasise continual up-skilling, inclusive leadership, and safe working conditions across every production cell.
        </p>
      </section>
    </div>
  );
}



