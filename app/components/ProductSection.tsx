import ProductRow from "./ProductRow";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "WhyBase",
    description:
      "Media and conversations documenting the people, products and ideas shaping the next internet.",
    type: "Media",
    status: "In development",
  },
  {
    name: "DropIN",
    description:
      "A platform that let creators and brands reward their audience instantly.",
    type: "Product",
    status: "Building",
  },
  {
    name: "Zetta",
    description:
      "Financial Intelligence infrastructure for the agent economy.",
    type: "Product",
    status: "Building",
  },
  {
    name: "CORTX",
    description: "Monitoring and reliability for x402 endpoints.",
    type: "Infrastructure",
    status: "Private beta",
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--text-2)" }}
          >
            01 / Products
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 md:mb-20"
            style={{ color: "var(--text)" }}
          >
            Things we&apos;re building
          </h2>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {products.map((product, i) => (
            <ProductRow
              key={product.name}
              name={product.name}
              description={product.description}
              type={product.type}
              status={product.status}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
