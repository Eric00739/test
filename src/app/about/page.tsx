export const metadata = { title: "关于我们 | 东莞创江电子" };

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">我们是谁</h1>
      <p className="text-slate-300 mb-6">
        东莞创江电子（Donguang Chuangjiang Electronics）是一家**工厂**，
        聚焦射频遥控器与控制器方案，提供从硬件设计、固件开发、天线调试到认证支持的一站式服务。
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800/60 p-6">
          <div className="font-medium mb-1">工厂产能</div>
          <p className="text-sm text-slate-400">贴片/组装/测试线齐备，支持小批量与大批量订单。</p>
        </div>
        <div className="rounded-2xl border border-slate-800/60 p-6">
          <div className="font-medium mb-1">研发能力</div>
          <p className="text-sm text-slate-400">RF、MCU、功耗优化、EMC 调试与天线匹配经验丰富。</p>
        </div>
        <div className="rounded-2xl border border-slate-800/60 p-6">
          <div className="font-medium mb-1">质量与合规</div>
          <p className="text-sm text-slate-400">ESD/跌落/高低温/盐雾等验证，CE/FCC/SRRC 认证协助。</p>
        </div>
      </div>
    </div>
  );
}
