"use client";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations"],
  Solutions: ["Risk Intelligence", "Supplier Network", "Market Access"],
  Company: ["About", "Blog", "Careers"],
  Legal: ["Privacy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-[15px] font-medium tracking-tight block mb-4">
              NexaFlow
            </a>
            <p className="text-[13px] text-muted leading-[1.7] max-w-xs">
              Supply chain intelligence for businesses that cannot afford to be surprised.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-muted mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} NexaFlow Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
