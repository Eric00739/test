import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <section className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              射频遥控器与控制器方案<br/>让你的产品更可靠、更省电
            </h1>
            <p className="text-slate-300 mb-8">
              我们是一家**工厂**，专注 315/433MHz、2.4GHz 等 RF 遥控与控制器方案，
              提供硬件设计、固件开发、天线调试与认证支持。辅以 Car Remote、WiFi Switch、WiFi Socket 系列满足多场景应用。
            </p>
            <div className="flex gap-4">
              <Link className="btn" href="\1">获取报价</Link>
              <Link className="btn" href="\1">查看产品</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800/60 p-8 text-slate-300">
            <ul className="space-y-3 list-disc pl-6">
              <li>工厂直供：成本更优、交期更稳</li>
              <li>可定制：按项目做 PCB/外观/协议/配对</li>
              <li>可靠性：过 ESD/跌落/高低温/盐雾等验证</li>
              <li>资质支持：CE/FCC/SRRC 协助测试与出证</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-6">
        <h2 className="text-2xl font-semibold mb-6">产品方向</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "RF 遥控器 & 控制器（主打）", desc: "遥控器+接收板+控制板整套方案，支持滚码/固定码，自主配对。"},
            { title: "Car Remote（辅）", desc: "汽车遥控钥匙、车库门遥控器，支持学习码与加密协议。"},
            { title: "WiFi Switch / Socket（辅）", desc: "支持 APP/语音控制，与主流物联网平台对接。"},
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-800/60 p-6">
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="rounded-2xl border border-slate-800/60 p-8">
          <h2 className="text-2xl font-semibold mb-3">为什么选择我们？</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div>
              <div className="text-lg font-semibold mb-1">我们是真工厂</div>
              <p className="text-sm text-slate-400">贴片/组装/测试工序齐全，支持来图打样与小批量快速交付。</p>
            </div>
            <div>
              <div className="text-lg font-semibold mb-1">研发支撑</div>
              <p className="text-sm text-slate-400">硬件、固件、射频与天线团队，快速适配你的协议与电源架构。</p>
            </div>
            <div>
              <div className="text-lg font-semibold mb-1">质量与认证</div>
              <p className="text-sm text-slate-400">完善的可靠性验证与第三方实验室合作，助力全球出货。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
