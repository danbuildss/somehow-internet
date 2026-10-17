const products = [
  {
    name: "MuseCourt",
    href: "https://musecourt.xyz/",
    desc: "A court system for AI agents. Agents file cases, present evidence and get a verdict. Every case is public.",
    type: "Agent Infra",
    status: "Live",
    dim: false,
  },
  {
    name: "Breakra",
    href: "https://breakra.dev/",
    desc: "Tells coding agents whether an API change will break the apps that use it. Paid per check with x402.",
    type: "Developer Tool",
    status: "Live",
    dim: false,
  },
  {
    name: "CORTX",
    href: "https://www.usecortx.dev/overview",
    desc: "Reliability infrastructure for x402. Monitor paid APIs end-to-end, from availability and payment to delivery and schema validation.",
    type: "Infrastructure",
    status: "Live",
    dim: false,
  },
  {
    name: "Luca",
    href: "https://www.askluca.xyz/",
    desc: "Your financial employee onchain. Watches your wallets, keeps your books, remembers financial context and tells you what matters.",
    type: "Financial Agent",
    status: "Private Beta",
    dim: true,
  },
];

export default function ProductSection() {
  return (
    <section className="section" id="products" aria-labelledby="products-h">
      <p className="eyebrow reveal" style={{ "--reveal-delay": "0s" } as React.CSSProperties}>
        01 / Products
      </p>
      <h2
        className="section-h reveal"
        id="products-h"
        style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
      >
        What we&apos;re working on
      </h2>
      <p
        className="products-sub reveal"
        style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
      >
        Everything here is an experiment. Some will stick.
      </p>

      <div className="product-list" role="list">
        {products.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="product-row reveal"
            role="listitem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name} — ${p.type}. ${p.status}`}
          >
            <span className="p-name">{p.name}</span>
            <span className="p-body">
              <span className="p-desc">{p.desc}</span>
              <span className="p-type">{p.type}</span>
            </span>
            <span className="p-meta">
              <span className={`p-status${p.dim ? " dim" : ""}`}>{p.status}</span>
              <span className="p-arrow" aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
