import { Shield, Zap, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Shield className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Lock className="w-12 h-12 text-primary" />
      </div>
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">在线加密 · 即时保护</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">小螺</span>
            <span className="gradient-text">软件宝</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            一站式 .NET 代码保护平台
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            将 DNGuard、Eazfuscator、VMProtect 等主流加密工具 Web 化
            <br />
            <span className="text-primary">无需下载 · 在线操作 · 即刻加密</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              <Globe className="w-5 h-5" />
              立即体验
            </Button>
            <Button variant="glow" size="xl">
              <Shield className="w-5 h-5" />
              了解更多
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {[
              { value: "10万+", label: "加密文件" },
              { value: "5000+", label: "活跃用户" },
              { value: "99.9%", label: "成功率" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
