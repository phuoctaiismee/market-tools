import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { ArrowRight, Sparkles, Shield, Zap, Wand2, Search, Type, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/shared/bento-grid";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <SiteHeader />

      <main className="flex-grow pt-32 px-4 sm:px-6">
        {/* Flat Hero Section */}
        <section className="text-center py-20 md:py-32 max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Sparkles className="h-4 w-4 text-zinc-900 dark:text-zinc-100" />
            <span>Power up your social presence</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]">
            Biến đổi văn bản, <br />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-400 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">
               định hình phong cách
            </span>
          </h1>
          
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Công cụ chuyển đổi font chữ nghệ thuật chuyên nghiệp cho mạng xã hội. 
            Đơn giản, tinh tế, và hoàn toàn miễn phí cho tất cả mọi người.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-lg font-bold group">
              <Link href="/fancy-text">
                Bắt đầu ngay
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-zinc-200 dark:border-zinc-800 text-lg font-semibold">
               <Link href="#tools">Khám phá công cụ</Link>
            </Button>
          </div>
        </section>

        {/* Discover Tools Bento Grid */}
        <section id="tools" className="py-32 border-t border-zinc-200 dark:border-zinc-800">
           <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
               <h2 className="text-3xl md:text-5xl font-black tracking-tight">Hệ sinh thái công cụ</h2>
               <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                  Mọi thứ bạn cần để tạo dấu ấn riêng trên không gian số.
               </p>
            </div>

            <BentoGrid>
              <Link href="/fancy-text" className="md:col-span-2">
                <BentoGridItem
                  title="Fancy Text Decorator"
                  description="Chuyển đổi văn bản sang các ký tự Unicode nghệ thuật. Hỗ trợ hơn 10 kiểu dáng vả hàng trăm ký tự đặc biệt."
                  header={<div className="h-32 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center">
                    <Wand2 className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                  </div>}
                  icon={<Wand2 className="h-5 w-5 text-indigo-500" />}
                  className="h-full border-zinc-900/10 dark:border-zinc-100/10 hover:border-zinc-900/20 dark:hover:border-zinc-100/20"
                />
              </Link>
              <div className="cursor-not-allowed grayscale">
                <BentoGridItem
                  title={
                    <div className="flex items-center gap-2">
                      Symbol Picker <Badge variant="secondary" className="text-[10px] h-4 px-1 rounded-sm uppercase">Soon</Badge>
                    </div>
                  }
                  description="Thư viện ký tự đặc biệt, emoji and text face phong phú nhất."
                  header={<div className="h-32 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl flex items-center justify-center">
                    <Search className="h-12 w-12 text-zinc-200 dark:text-zinc-800" />
                  </div>}
                  icon={<Search className="h-5 w-5" />}
                />
              </div>
              <div className="cursor-not-allowed grayscale">
                <BentoGridItem
                  title={
                    <div className="flex items-center gap-2">
                      Bio Generator <Badge variant="secondary" className="text-[10px] h-4 px-1 rounded-sm uppercase">Soon</Badge>
                    </div>
                  }
                  description="Tự động tạo tiểu sử ấn tượng cho profile cá nhân của bạn."
                  header={<div className="h-32 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl flex items-center justify-center">
                    <PenTool className="h-12 w-12 text-zinc-200 dark:text-zinc-800" />
                  </div>}
                  icon={<PenTool className="h-5 w-5" />}
                />
              </div>
              <div className="md:col-span-2 cursor-not-allowed grayscale">
                <BentoGridItem
                  title={
                    <div className="flex items-center gap-2">
                      Font Explorer (Local Preview) <Badge variant="secondary" className="text-[10px] h-4 px-1 rounded-sm uppercase">Soon</Badge>
                    </div>
                  }
                  description="Xem trước và kiểm tra các font chữ nội bộ của dự án trước khi sử dụng."
                  header={<div className="h-32 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl flex items-center justify-center">
                    <Type className="h-12 w-12 text-zinc-200 dark:text-zinc-800" />
                  </div>}
                  icon={<Type className="h-5 w-5" />}
                />
              </div>
            </BentoGrid>
           </div>
        </section>

        {/* Standard Info Highlights */}
        <section id="about" className="py-32 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-6">
                <div className="bg-zinc-100 dark:bg-zinc-900 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mx-auto md:mx-0">
                  <Shield className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Chuẩn Unicode</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Tất cả font chữ đều dựa trên chuẩn Unicode, đảm bảo hiển thị đồng nhất trên mội thiết bị và mạng xã hội.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-zinc-100 dark:bg-zinc-900 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mx-auto md:mx-0">
                  <Zap className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Nhanh & Bảo mật</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Quá trình chuyển đổi diễn ra ngay lập tức trên trình duyệt của bạn. Toàn bộ dữ liệu nằm trên thiết bị của bạn.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-zinc-100 dark:bg-zinc-900 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mx-auto md:mx-0">
                  <Sparkles className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Miễn phí 100%</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Market Tools cam kết cung cấp các công cụ miễn phí, không quảng cáo và không yêu cầu đăng ký tài khoản.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
