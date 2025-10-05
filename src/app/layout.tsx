import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fastfun Remote | RF Remote Control Platforms for Forward-Thinking OEMs",
  description:
    "Fastfun Remote engineers turnkey RF remote control systems, automotive fobs, and smart-home controllers with certification-ready reliability and concierge-level support.",
};

const navLinks = [
  { href: "/products", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-base antialiased">
        <div className="background-gradient" />
        <header className="border-b border-white/10 backdrop-blur">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-semibold tracking-tight text-white">
              Fastfun Remote
            </Link>
            <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn">Request a Proposal</Link>
            </div>
            <Link href="/contact" className="btn md:hidden">
              Let's Talk
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10">
          <div className="container flex flex-col gap-3 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
            <div>Copyright {new Date().getFullYear()} Fastfun Remote. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="transition hover:text-white" href="mailto:eric@fastfunrc.com">
                eric@fastfunrc.com
              </a>
              <span className="text-white/40">|</span>
              <span>Precision RF control systems for global brands.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
