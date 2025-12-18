import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-glow-secondary p-5 mb-8 animate-pulse-glow">
            <Shield className="w-full h-full text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">立即保护您的</span>
            <br />
            <span className="gradient-text">软件资产</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            加入数千名开发者的行列，使用小螺软件宝为您的 .NET 应用程序提供专业级保护
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              免费开始使用
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="xl">
              查看价格方案
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">受信任的安全保障</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["SSL 加密传输", "隐私保护", "文件自动清理", "专业技术支持"].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
