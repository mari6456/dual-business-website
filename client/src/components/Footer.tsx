/*
Design Philosophy: Minimal Luxe × Asymmetric Dynamism
Footer: Clean, organized footer with champagne gold accents
*/

import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-deep-brown)] text-[var(--color-ivory)] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-champagne-gold)] flex items-center justify-center">
                <span className="text-[var(--color-deep-brown)] font-bold text-lg">
                  DB
                </span>
              </div>
              <span className="text-xl font-semibold">Dual Business</span>
            </div>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
              美とテクノロジーで、未来を創造する。化粧品開発からAI研修まで、革新的なソリューションを提供します。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--color-champagne-gold)]">
              クイックリンク
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-champagne-gold)] transition-colors duration-300 cursor-pointer">
                    ホーム
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cosmetics">
                  <span className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-champagne-gold)] transition-colors duration-300 cursor-pointer">
                    化粧品事業
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ai-training">
                  <span className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-champagne-gold)] transition-colors duration-300 cursor-pointer">
                    AI研修
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-champagne-gold)] transition-colors duration-300 cursor-pointer">
                    会社情報
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--color-champagne-gold)]">
              サービス
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-[var(--color-warm-gray)]">
                化粧品開発・企画
              </li>
              <li className="text-sm text-[var(--color-warm-gray)]">
                ブランディング
              </li>
              <li className="text-sm text-[var(--color-warm-gray)]">
                OEM連動サービス
              </li>
              <li className="text-sm text-[var(--color-warm-gray)]">
                AI企業研修プログラム
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--color-champagne-gold)]">
              お問い合わせ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[var(--color-champagne-gold)] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--color-warm-gray)]">
                  info@dualbusiness.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[var(--color-champagne-gold)] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--color-warm-gray)]">
                  03-1234-5678
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--color-champagne-gold)] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--color-warm-gray)]">
                  東京都渋谷区〇〇1-2-3
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-warm-gray)]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--color-warm-gray)]">
              © {currentYear} Dual Business. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy">
                <span className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-champagne-gold)] transition-colors duration-300 cursor-pointer">
                  プライバシーポリシー
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-champagne-gold)] transition-colors duration-300 cursor-pointer">
                  利用規約
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
