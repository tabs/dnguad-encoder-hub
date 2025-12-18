import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-glow-secondary p-2">
              <Shield className="w-full h-full text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-foreground">小螺</span>
              <span className="font-bold gradient-text">软件宝</span>
            </div>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-6">
            {["关于我们", "使用帮助", "价格方案", "联系我们"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 小螺软件宝. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
