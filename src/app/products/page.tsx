export const metadata = { title: "产品 | 东莞创江电子" };

type Item = { title: string; bullets: string[]; };

const groups: { name: string; items: Item[] }[] = [
  {
    name: "RF 遥控器 & 控制器（主打）",
    items: [
      { title: "315/433MHz 遥控器",
        bullets: ["固定码/滚码(Keeloq)", "2~6键可选", "远距离低功耗"] },
      { title: "接收板/控制板",
        bullets: ["继电器/三极管驱动", "学习/配对", "DC/AC 供电可选"] },
    ],
  },
  {
    name: "Car Remote（辅）",
    items: [
      { title: "汽车遥控钥匙/车库门遥控器",
        bullets: ["学习码/滚码协议", "耐用外壳结构", "个性化外观定制"] },
    ],
  },
  {
    name: "WiFi Switch / WiFi Socket（辅）",
    items: [
      { title: "面板/墙壁开关", bullets: ["APP/语音控制", "OTA 升级", "接入主流 IoT 平台"] },
      { title: "智能插座", bullets: ["定时/功耗统计", "多地区插头", "CE/FCC 协助认证"] },
    ],
  },
];

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">产品与能力</h1>
      <div className="space-y-10">
        {groups.map((g, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-semibold mb-4">{g.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {g.items.map((it, i) => (
                <div key={i} className="rounded-2xl border border-slate-800/60 p-6">
                  <div className="font-medium mb-2">{it.title}</div>
                  <ul className="list-disc pl-6 text-sm text-slate-400 space-y-1">
                    {it.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
