import { Shield, Code, Cpu, Layers } from "lucide-react";

const tools = [
  {
    icon: Shield,
    name: "DNGuard",
    description: ".NET 程序强力加密",
    features: ["代码混淆", "反调试保护", "许可证管理"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code,
    name: "Eazfuscator",
    description: "高级代码混淆器",
    features: ["字符串加密", "控制流混淆", "资源保护"],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Cpu,
    name: "VMProtect",
    description: "虚拟机级别保护",
    features: ["代码虚拟化", "反篡改检测", "打包压缩"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    name: "更多工具",
    description: "持续更新中...",
    features: ["Dotfuscator", "ConfuserEx", "自定义方案"],
    color: "from-pink-500 to-orange-500",
  },
];

const ToolsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">主流加密工具</span>
            <span className="text-foreground"> 一站集成</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            无需安装复杂软件，在浏览器中即可使用业界领先的加密保护方案
          </p>
        </div>
        
        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative gradient-border rounded-2xl p-6 bg-card hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)]"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className="w-full h-full text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">{tool.name}</h3>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              
              {/* Features */}
              <ul className="space-y-2">
                {tool.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
