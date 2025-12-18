import { Cloud, Lock, Zap, Shield, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "云端处理",
    description: "无需本地安装，所有加密操作在云端完成，节省存储空间",
  },
  {
    icon: Zap,
    title: "快速高效",
    description: "高性能服务器集群，大文件也能秒级完成加密",
  },
  {
    icon: Lock,
    title: "安全可靠",
    description: "文件加密传输，处理完成后自动删除，保护您的隐私",
  },
  {
    icon: Shield,
    title: "专业保护",
    description: "业界领先的加密算法，有效防止逆向和破解",
  },
  {
    icon: Clock,
    title: "24/7 可用",
    description: "全天候服务，随时随地保护您的软件资产",
  },
  {
    icon: Headphones,
    title: "技术支持",
    description: "专业团队在线支持，解决您的任何疑问",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">为什么选择</span>
            <span className="gradient-text"> 小螺软件宝</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            我们致力于为开发者提供最便捷、最安全的代码保护服务
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
