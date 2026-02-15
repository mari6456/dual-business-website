/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
Contact Page: Clean, accessible form design with elegant styling
*/

import { Button } from "@/components/ui/button";
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
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      toast.error("必須項目を入力してください");
      return;
    }
    
    // Success message
    toast.success("お問い合わせを受け付けました。担当者より折り返しご連絡いたします。");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-normal leading-tight">
              お問い合わせ
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              化粧品開発やAI研修に関するご質問、ご相談など、
              <br />
              どんなことでもお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 lg:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="luxury-card fade-in-up">
                <h2 className="text-3xl font-normal mb-8">
                  お問い合わせフォーム
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        お名前 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="山田太郎"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">会社名</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="株式会社〇〇"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        メールアドレス{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="03-1234-5678"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">
                      お問い合わせ種別{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                      required
                    >
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cosmetics">化粧品事業</SelectItem>
                        <SelectItem value="ai-training">AI研修</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      お問い合わせ内容{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={8}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--color-champagne-gold)] hover:bg-[var(--color-champagne-gold)]/90 text-[var(--color-deep-brown)] font-medium py-6"
                  >
                    送信する
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="luxury-card fade-in-up">
                <h3 className="text-2xl font-normal mb-6">連絡先情報</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">メール</div>
                      <a
                        href="mailto:info@dualbusiness.com"
                        className="text-muted-foreground hover:text-[var(--color-champagne-gold)] transition-colors"
                      >
                        info@dualbusiness.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">電話</div>
                      <a
                        href="tel:03-1234-5678"
                        className="text-muted-foreground hover:text-[var(--color-champagne-gold)] transition-colors"
                      >
                        03-1234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">所在地</div>
                      <div className="text-muted-foreground">
                        〒150-0001
                        <br />
                        東京都渋谷区神宮前1-2-3
                        <br />
                        ビューティービル5F
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[var(--color-champagne-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">営業時間</div>
                      <div className="text-muted-foreground">
                        平日 9:00 - 18:00
                        <br />
                        (土日祝日休業)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card fade-in-up">
                <h3 className="text-2xl font-normal mb-4">
                  よくある質問
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">
                      Q. 見積もりは無料ですか?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      A. はい、お見積もりは無料です。お気軽にお問い合わせください。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Q. 小ロットでも対応可能ですか?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      A. はい、小ロットから対応可能です。詳細はご相談ください。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Q. 研修のカスタマイズは可能ですか?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      A. はい、貴社のニーズに合わせたカスタマイズが可能です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
