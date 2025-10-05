import Link from 'next/link';
import "./globals.css";
export const metadata = {
  title: "东莞创江电子 | 射频遥控器与控制器方案",
  description: "Donguang Chuangjiang Electronics — 专注射频遥控器/控制器方案，兼顾 Car Remote、WiFi Switch、WiFi Socket。工厂直供，支持OEM/ODM。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        <header className="border-b border-slate-800/60">
          <nav className="container flex items-center justify-between py-4">
            <Link href="\1" className="text-xl font-semibold tracking-tight">东莞创江电子</Link>
            <div className="flex gap-6 text-sm text-slate-300">
              <Link href="\1" >产品</Link>
              <Link href="\1" >关于我们</Link>
              <Link href="\1" className="btn">获取报价</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-800/60 mt-16">
          <div className="container py-10 text-sm text-slate-400">
            © {new Date().getFullYear()} Donguang Chuangjiang Electronics. 工厂直供 · 支持OEM/ODM
          </div>
        </footer>
      </body>
    </html>
  );
}
