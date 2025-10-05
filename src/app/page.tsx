import Link from "next/link";

const heroHighlights = [
  { label: "Launch-ready RF platforms", value: "30+ OEM deployments" },
  { label: "Reliability proven", value: "98.7% first-pass yield" },
  { label: "Compliance", value: "CE / FCC / SRRC" },
];

const solutionTiles = [
  {
    title: "RF Remote Ecosystems",
    copy:
      "Turnkey transmitter + receiver sets with ultra-low-power firmware, adaptive RF tuning, and encrypted pairing for mission-critical controls.",
    bullets: [
      "315 / 433 / 868 / 915 MHz and 2.4 GHz options",
      "Interference-tolerant, long-range up to 300 m",
      "Configurable enclosures, key layouts, and branding",
    ],
  },
  {
    title: "Automotive & Mobility Key Fobs",
    copy:
      "Ruggedized key fobs engineered for automotive, micromobility, and premium garage systems with tamper-proof authentication.",
    bullets: [
      "Rolling-code + AES security stack",
      "IP65 housings and mechanical endurance testing",
      "Tooling, laser etching, and packaging support",
    ],
  },
  {
    title: "Smart-Home & IoT Modules",
    copy:
      "WiFi / BLE / Zigbee control modules that integrate with leading ecosystems and deliver energy insights out of the box.",
    bullets: [
      "Matter, Tuya, and custom cloud integrations",
      "OTA-ready firmware with diagnostics",
      "Global power options with safety certification",
    ],
  },
];

const proofPoints = [
  {
    title: "RF Lab + Manufacturing Under One Roof",
    copy:
      "From antenna simulation to final assembly, every build stays in our Dongguan facility for tighter tolerances and faster design loops.",
  },
  {
    title: "Concierge Co-Development",
    copy:
      "Senior engineers join your product channel on day one, collaborating on feature trade-offs, range validation, and certification dossiers.",
  },
  {
    title: "Certification-Rich Playbooks",
    copy:
      "Documentation, pre-compliance sweeps, and partner labs in the EU, US, and APAC keep launches on schedule without nasty surprises.",
  },
];

const deliveryProcess = [
  {
    step: "01",
    title: "Discovery Sprint",
    copy: "We map business goals, RF environments, and target certifications to craft a pragmatic technical blueprint in under seven days.",
  },
  {
    step: "02",
    title: "Prototype to Pilot",
    copy: "Our in-house SMT lines ship EV samples with instrumented firmware, letting you validate user flows and range while we tune the stack.",
  },
  {
    step: "03",
    title: "Launch & Sustain",
    copy: "We orchestrate certification, ramp mass production, and provide lifecycle support for firmware updates and regional refreshes.",
  },
];

export default function Page() {
  return (
    <div className="space-y-24 pb-24">
      <section className="container py-16 md:py-24">
        <div className="card relative overflow-hidden">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-12 md:grid-cols-[2fr_1fr]">
            <div>
              <span className="badge mb-6">RF CONTROL EXPERTS</span>
              <h1 className="section-title mb-6">
                RF remote control platforms engineered for forward-thinking OEMs
              </h1>
              <p className="section-copy mb-8">
                Fastfun Remote partners with product leaders to design, certify, and manufacture remote control ecosystems that feel premium and perform flawlessly-whether you ship millions of units or launch niche innovation.
              </p>
              <div className="flex flex-col gap-4 text-sm text-slate-200 sm:flex-row">
                <Link href="/contact" className="btn">
                  Request a proposal
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-white/40"
                >
                  Explore solutions
                </Link>
              </div>
            </div>
            <ul className="grid gap-6 text-sm text-slate-200">
              {heroHighlights.map((item) => (
                <li key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_25px_40px_-35px_rgba(14,165,233,0.6)]">
                  <div className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {item.label}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl">
          <span className="badge">What we build</span>
          <h2 className="section-title mt-6">
            Tailored control systems that blend industrial reliability with brand-defining touchpoints
          </h2>
          <p className="section-copy mt-4">
            Every engagement combines our RF, firmware, and mechanical teams so your product ships with harmonized electronics, enclosures, and user experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {solutionTiles.map((tile) => (
            <article key={tile.title} className="card">
              <h3 className="text-xl font-semibold text-white">{tile.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{tile.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {tile.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="card">
          <div className="grid gap-8 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200/90">{point.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {deliveryProcess.map((item) => (
            <div key={item.title} className="card">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                {item.step}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Let's launch a remote platform your customers can't put down
            </h2>
            <p className="mt-2 text-sm text-slate-200/90">
              Share your roadmap and we will prepare a feasibility snapshot, timeline, and investment outline within one business day.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Talk to an engineer
          </Link>
        </div>
      </section>
    </div>
  );
}





