export const metadata = {
  title: "Contact | Fastfun Remote",
  description:
    "Request a proposal or RF consultation with the Fastfun Remote engineering and manufacturing team.",
};

const responseHighlights = [
  "Response within one business day",
  "NDAs available on request",
  "Engineering discovery session included",
];

export default function Page() {
  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-4">
        <span className="badge">Let's collaborate</span>
        <h1 className="section-title">Start your RF control project with Fastfun Remote</h1>
        <p className="section-copy">
          Tell us about your product vision, target markets, annual volume, and any required certifications. We'll assemble the right engineering leads and craft a concrete launch plan.
        </p>
      </header>

      <section className="card grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Share your brief</h2>
          <p className="text-sm text-slate-200/90">
            Email us and include sketches, requirement docs, or performance benchmarks. The more context we have, the sharper our recommendations.
          </p>
          <a className="btn inline-flex" href="mailto:eric@fastfunrc.com">
            eric@fastfunrc.com
          </a>
        </div>
        <ul className="space-y-3 text-sm text-slate-200/90">
          {responseHighlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card space-y-4">
        <h2 className="text-lg font-semibold text-white">Office & Manufacturing</h2>
        <div className="text-sm text-slate-200/90">
          <p>Fastfun Remote · Dongguan, Guangdong, China</p>
          <p className="mt-2">
            We ship globally and partner with accredited testing labs across North America, Europe, and APAC to streamline compliance.
          </p>
        </div>
      </section>
    </div>
  );
}


