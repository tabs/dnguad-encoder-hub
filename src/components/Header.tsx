import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "功能介绍", href: "/#features" },
  { label: "工具列表", href: "/#tools" },
  { label: "价格方案", href: "/pricing" },
  { label: "使用帮助", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-glow-secondary p-2">
              <Shield className="w-full h-full text-primary-foreground" />
            </div>
            <div className="font-bold">
              <span className="text-foreground">小螺</span>
              <span className="gradient-text">软件宝</span>
            </div>
          </Link>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
          
          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://xiaoluo.chaego.top/" target="_blank" rel="noopener noreferrer">登录</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="https://xiaoluo.chaego.top/" target="_blank" rel="noopener noreferrer">免费注册</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href="https://xiaoluo.chaego.top/" target="_blank" rel="noopener noreferrer">登录</a>
                </Button>
                <Button variant="hero" size="sm" className="flex-1" asChild>
                  <a href="https://xiaoluo.chaego.top/" target="_blank" rel="noopener noreferrer">免费注册</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
