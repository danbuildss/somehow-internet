const products = [
  {
    name: "WhyBase",
    desc: "Media and conversations documenting the people, products and ideas shaping the next internet.",
    type: "Media",
    status: "In development",
    dim: true,
  },
  {
    name: "DropIN",
    desc: "A platform that let creators and brands reward their audience instantly",
    type: "Product",
    status: "Building",
    dim: false,
  },
  {
    name: "Zetta",
    desc: "Financial Intelligence infrastructure for the agent economy.",
    type: "Product",
    status: "Building",
    dim: false,
  },
  {
    name: "CORTX",
    desc: "Monitoring and reliability for x402 endpoints.",
    type: "Infrastructure",
    status: "Private beta",
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
        Things we&apos;re building
      </h2>

      <div className="product-list" role="list">
        {products.map((p) => (
          <a
            key={p.name}
            href="#"
            className="product-row reveal"
            role="listitem"
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
