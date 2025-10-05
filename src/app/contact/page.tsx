export const metadata = { title: "联系我们 | 东莞创江电子" };

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">联系我们</h1>
      <div className="rounded-2xl border border-slate-800/60 p-6">
        <p className="text-slate-300 mb-3">告诉我们你的项目需求（功能、尺寸、供电、认证地区等），我们会在 1 个工作日内回复。</p>
        <div className="text-slate-400 text-sm space-y-1">
          <div>Email：<a className="underline" href="mailto:sales@example.com">sales@example.com</a></div>
          <div>WhatsApp/WeChat：请邮件留下联系方式，我们主动添加</div>
          <div>地址：东莞 · 中国</div>
        </div>
      </div>
    </div>
  );
}
