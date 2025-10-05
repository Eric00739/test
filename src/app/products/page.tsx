export const metadata = {
  title: "Solutions | Fastfun Remote",
  description:
    "Explore Fastfun Remote's portfolio of RF remote control solutions spanning OEM control kits, automotive fobs, and IoT modules.",
};

type Feature = {
  title: string;
  bullets: string[];
  description: string;
};

type ProductGroup = {
  name: string;
  headline: string;
  features: Feature[];
};

const groups: ProductGroup[] = [
  {
    name: "RF Remote Ecosystems",
    headline:
      "Complete transmitter and receiver kits engineered for doors, lighting, lifting systems, and instrumentation.",
    features: [
      {
        title: "Transmitter Range",
        description:
          "Handheld and wall-mount remotes with ergonomic industrial design, haptic feedback, and backlit interfaces.",
        bullets: [
          "Multi-frequency support: 315 / 433 / 868 / 915 MHz, 2.4 GHz",
          "Up to 24 inputs with configurable switch feel",
          "Ultra-low power with smart wake-on-motion",
        ],
      },
      {
        title: "Receiver Control Units",
        description:
          "DIN-rail, PCB, and potted enclosures with flexible IO options and secure commissioning routines.",
        bullets: [
          "Relay, MOSFET, triac, and CAN / RS485 variants",
          "Secure pairing with rolling code + AES",
          "Self-diagnostics with event logging",
        ],
      },
    ],
  },
  {
    name: "Automotive & Mobility",
    headline:
      "Key fobs and access controllers built to automotive-grade requirements for EV, micromobility, and premium garage platforms.",
    features: [
      {
        title: "Key Fob Platforms",
        description:
          "Custom tooling, IP-rated materials, and tactile button assemblies that make your brand instantly recognisable.",
        bullets: [
          "Immobiliser integration and passive entry",
          "Metal, leather, and soft-touch finishing",
          "Lifecycle testing: drop, vibration, UV, salt fog",
        ],
      },
      {
        title: "Vehicle Control Modules",
        description:
          "Secure receivers for locks, lifts, and smart garages with telematics-ready firmware hooks.",
        bullets: [
          "CAN / LIN / BLE interfaces",
          "Encrypted OTA and secure boot options",
          "Compliance with ISO 21434 cybersecurity guidance",
        ],
      },
    ],
  },
  {
    name: "Smart-Home & IoT",
    headline:
      "WiFi, BLE, and multi-protocol modules that connect seamlessly with global ecosystems and energy management platforms.",
    features: [
      {
        title: "Connected Modules",
        description:
          "Compact control boards for switches, sockets, blinds, HVAC, and appliance retrofits.",
        bullets: [
          "Matter, HomeKit, Google, and Alexa certifications",
          "Modular sensors for power, temperature, and occupancy",
          "OTA-ready firmware with diagnostics dashboards",
        ],
      },
      {
        title: "Industrial IoT Gateways",
        description:
          "Robust enclosures and redundant connectivity for factories, warehousing, and smart agriculture.",
        bullets: [
          "Edge processing with secure MQTT / HTTPS",
          "-30°C to 70°C operation with conformal coating",
          "Support for LoRa, NB-IoT, and private LTE",
        ],
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="container space-y-14 py-16">
      <header className="max-w-3xl space-y-4">
        <span className="badge">Solutions</span>
        <h1 className="section-title">Built-to-order control systems engineered to scale</h1>
        <p className="section-copy">
          The Fastfun Remote portfolio covers the full stack-from human interface to cloud integration-so your teams can focus on market differentiation while we deliver compliant hardware and software foundations.
        </p>
      </header>

      <div className="space-y-12">
        {groups.map((group) => (
          <section key={group.name} className="card space-y-8">
            <header className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">{group.name}</div>
              <h2 className="text-2xl font-semibold text-white">{group.headline}</h2>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
              {group.features.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{feature.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
                    {feature.bullets.map((bullet) => (
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
        ))}
      </div>
    </div>
  );
}



