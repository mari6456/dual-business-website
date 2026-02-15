import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="dark-section py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <h2
              className="text-3xl lg:text-4xl tracking-[0.3em] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              UNFRAME
            </h2>
            <p className="text-sm text-white/50 max-w-md leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              自分の枠を超えて自由な生き方をデザインする。
              <br />
              美容とAIの力を通じて、不可能を可能にし、自由な生き方を広げる。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h4
                className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-5"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                Services
              </h4>
              <div className="space-y-3">
                <Link href="/cosmetics">
                  <span className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300 cursor-pointer">
                    化粧品事業
                  </span>
                </Link>
                <Link href="/ai-training">
                  <span className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300 cursor-pointer">
                    AI研修
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <h4
                className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-5"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                Company
              </h4>
              <div className="space-y-3">
                <Link href="/profile">
                  <span className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300 cursor-pointer">
                    プロフィール
                  </span>
                </Link>
                <Link href="/news">
                  <span className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300 cursor-pointer">
                    ニュース
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300 cursor-pointer">
                    お問い合わせ
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <h4
                className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-5"
                style={{ fontFamily: "var(--font-sub)", fontWeight: 500 }}
              >
                Connect
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/60 hover:text-rose-gold transition-colors duration-300"
                >
                  LINE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-sub)" }}>
            &copy; {new Date().getFullYear()} UNFRAME / 河原田 茉莉. All rights reserved.
          </p>
          <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-sub)" }}>
            Cosmetics Consultant &middot; Brand Director &middot; AI Instructor
          </p>
        </div>
      </div>
    </footer>
  );
}
