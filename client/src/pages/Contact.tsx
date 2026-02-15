import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      toast.error("必須項目を入力してください");
      return;
    }
    toast.success("お問い合わせを受け付けました。担当者より折り返しご連絡いたします。");
    setFormData({ name: "", company: "", email: "", phone: "", inquiryType: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <p className="section-label mb-6">Get in Touch</p>
          <h1 className="text-4xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>お問い合わせ</h1>
          <p className="text-base text-foreground/50 max-w-xl leading-relaxed">
            化粧品開発やAI研修に関するご質問、ご相談など、どんなことでもお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="pb-24 lg:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2 fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-sub)" }}>
                      お名前 <span className="text-rose-gold">*</span>
                    </Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="河原田 茉莉" required className="border-foreground/10 focus:border-rose-gold rounded-none py-3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-sub)" }}>会社名</Label>
                    <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="株式会社〇〇" className="border-foreground/10 focus:border-rose-gold rounded-none py-3" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-sub)" }}>
                      メールアドレス <span className="text-rose-gold">*</span>
                    </Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@email.com" required className="border-foreground/10 focus:border-rose-gold rounded-none py-3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-sub)" }}>電話番号</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="090-1234-5678" className="border-foreground/10 focus:border-rose-gold rounded-none py-3" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-sub)" }}>
                    お問い合わせ種別 <span className="text-rose-gold">*</span>
                  </Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                    <SelectTrigger id="inquiryType" className="border-foreground/10 focus:border-rose-gold rounded-none py-3">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cosmetics-brand">化粧品ブランド開発・商品企画</SelectItem>
                      <SelectItem value="cosmetics-oem">OEM連動・製造管理</SelectItem>
                      <SelectItem value="ai-consulting">AI顧問サービス</SelectItem>
                      <SelectItem value="ai-training">法人向けAI研修</SelectItem>
                      <SelectItem value="online-secretary">オンライン秘書サービス</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-sub)" }}>
                    お問い合わせ内容 <span className="text-rose-gold">*</span>
                  </Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="お問い合わせ内容をご記入ください" rows={8} required className="border-foreground/10 focus:border-rose-gold rounded-none py-3 resize-none" />
                </div>

                <button type="submit" className="w-full py-4 bg-charcoal text-white text-sm tracking-[0.15em] uppercase hover:bg-charcoal/90 transition-colors duration-300" style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}>
                  送信する
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-10 fade-in-up">
              <div>
                <p className="section-label mb-4">Information</p>
                <h3 className="text-xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>連絡先</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-rose-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-foreground/40 tracking-wider mb-1" style={{ fontFamily: "var(--font-sub)" }}>Email</p>
                      <a href="mailto:info@unframe.jp" className="text-sm text-foreground/70 hover:text-rose-gold transition-colors duration-300">info@unframe.jp</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-rose-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-foreground/40 tracking-wider mb-1" style={{ fontFamily: "var(--font-sub)" }}>Hours</p>
                      <p className="text-sm text-foreground/70">平日 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="editorial-line" />

              <div>
                <p className="section-label mb-4">FAQ</p>
                <h3 className="text-xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>よくある質問</h3>
                <div className="space-y-6">
                  {[
                    { q: "お見積もりは無料ですか？", a: "はい、お見積もりは無料です。お気軽にお問い合わせください。" },
                    { q: "小ロットでも対応可能ですか？", a: "はい、小ロットから対応可能です。詳細はご相談ください。" },
                    { q: "AI研修のカスタマイズは可能ですか？", a: "はい、貴社のニーズに合わせたカスタマイズが可能です。" },
                  ].map((faq) => (
                    <div key={faq.q}>
                      <p className="text-sm text-foreground/80 mb-1" style={{ fontFamily: "var(--font-heading)" }}>Q. {faq.q}</p>
                      <p className="text-xs text-foreground/40 leading-relaxed">A. {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
