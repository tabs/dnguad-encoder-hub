import { Upload, Settings, Download, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "上传文件",
    description: "选择需要加密的 .NET 程序文件",
  },
  {
    icon: Settings,
    step: "02",
    title: "配置选项",
    description: "选择加密工具和保护级别",
  },
  {
    icon: Download,
    step: "03",
    title: "下载成品",
    description: "获取加密后的安全程序",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "完成保护",
    description: "您的代码已获得专业保护",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">简单</span>
            <span className="gradient-text"> 四步</span>
            <span className="text-foreground"> 完成加密</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            告别繁琐的安装配置，几分钟内完成专业级代码保护
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.step}
                </div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
