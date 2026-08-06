import ScrollReveal from "./ScrollReveal";

const focusAreas = [
  {
    title: "Onchain economy",
    description: "Building for the next financial internet.",
  },
  {
    title: "Open source",
    description: "Everything we build is public by default.",
  },
  {
    title: "Developer tools",
    description: "Infrastructure that makes building easier.",
  },
  {
    title: "Media & docs",
    description: "Documenting the journey as we go.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--text-2)" }}
          >
            03 / About
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-2">
          {/* Left: text */}
          <div>
            <ScrollReveal delay={0.05}>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-8"
                style={{ color: "var(--text)" }}
              >
                The long game
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-2)" }}
              >
                Somehow Internet exists to prove that a small, focused team can
                build meaningful internet infrastructure. We&apos;re not chasing
                trends — we&apos;re building the tools we wish existed.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                We focus on three layers: media that documents the builder&apos;s
                journey, financial tooling for the new economy, and developer
                infrastructure for the decentralized web.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: focus areas */}
          <div className="grid grid-cols-2 gap-px" style={{ alignContent: "start" }}>
            <div
              className="col-span-2 h-px"
              style={{ backgroundColor: "var(--border)" }}
            />
            {focusAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={0.1 + i * 0.05}>
                <div
                  className="py-5 pr-4"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    borderRight:
                      i % 2 === 0 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <p
                    className="text-sm font-medium mb-1.5"
                    style={{ color: "var(--text)" }}
                  >
                    {area.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-2)" }}
                  >
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
