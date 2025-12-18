import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Crown, Coins, ExternalLink } from "lucide-react";

const subscriptionPlans = [
  { name: "VIP-年卡", price: 999, stock: "库存一般", popular: true },
  { name: "半年卡", price: 569, stock: "库存一般" },
  { name: "季卡", price: 319, stock: "库存一般" },
  { name: "月卡", price: 119, stock: "库存一般" },
];

const coinPlans = [
  { coins: 2000, price: 120, stock: "库存一般" },
  { coins: 1000, price: 70, stock: "库存少量" },
  { coins: 500, price: 40, stock: "库存一般" },
  { coins: 200, price: 17, stock: "库存很多" },
  { coins: 100, price: 9.9, stock: "库存一般" },
];

const getStockColor = (stock: string) => {
  if (stock.includes("很多")) return "text-green-400";
  if (stock.includes("少量")) return "text-yellow-400";
  return "text-muted-foreground";
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              选择您的<span className="text-gradient">方案</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              灵活的订阅方案和加密币套餐，满足不同规模的加密需求
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
              <Crown className="w-6 h-6 text-primary" />
              订阅方案
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subscriptionPlans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow ${
                    plan.popular ? "border-primary/50 shadow-glow" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      最受欢迎
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl font-display">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gradient">￥{plan.price}</span>
                      <span className="text-muted-foreground">.00</span>
                    </div>
                    <p className={`text-sm ${getStockColor(plan.stock)}`}>{plan.stock}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coin Plans */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
              <Coins className="w-6 h-6 text-primary" />
              加密币套餐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coinPlans.map((plan) => (
                <Card 
                  key={plan.coins} 
                  className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg font-display">{plan.coins}加密币</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gradient">￥{plan.price}</span>
                    </div>
                    <p className={`text-sm ${getStockColor(plan.stock)}`}>{plan.stock}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-xl px-12 py-8 h-auto"
              asChild
            >
              <a 
                href="https://shop.yangdi.tech/links/82BA8CFC" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                立即前往购买
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="mt-4 text-muted-foreground text-sm">
              点击跳转至小螺软件宝的小店 - 炀帝科技
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
