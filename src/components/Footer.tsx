import {
  DISPLAY_PHONE,
  SHOWREEL_URL,
  TEL_HREF,
  buildDirectWhatsAppUrl,
} from '../utils/whatsapp';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E1116] py-12 text-[#F8F7F4]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-xl font-bold tracking-tight text-[#F8F7F4]"
            >
              Groth Forge
            </a>
            <p className="mt-2.5 font-bn text-sm leading-relaxed text-[#F8F7F4]/65">
              পাবনা সদরের ব্যবসায়িক প্রবৃদ্ধি ও প্রফেশনাল ভিডিও প্রোডাকশন পার্টনার —
              দীর্ঘমেয়াদী ব্র্যান্ড বিশ্বাস ও পরিমাপযোগ্য ফলাফলের নিশ্চয়তা।
            </p>
            <p className="mt-3 font-display text-xs text-[#F8F7F4]/55">
              Pabna Sadar, Bangladesh ·{' '}
              <a
                href={TEL_HREF}
                className="tabular-nums text-[#F8F7F4]/85 hover:text-[#D4AF37]"
              >
                {DISPLAY_PHONE}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 font-display text-sm">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#D4AF37]">
                Navigation
              </p>
              <ul className="mt-3 space-y-2 text-[#F8F7F4]/70">
                <li>
                  <a href="#strategy" className="hover:text-[#F8F7F4]">
                    Strategy
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-[#F8F7F4]">
                    Work Gallery
                  </a>
                </li>
                <li>
                  <a href="#clients" className="hover:text-[#F8F7F4]">
                    Top Clients
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-[#F8F7F4]">
                    Packages
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wide text-[#D4AF37]">
                Direct Links
              </p>
              <ul className="mt-3 space-y-2 text-[#F8F7F4]/70">
                <li>
                  <a
                    href={SHOWREEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F8F7F4]"
                  >
                    Full Showreel Drive
                  </a>
                </li>
                <li>
                  <a
                    href={buildDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F8F7F4]"
                  >
                    WhatsApp Consultation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F8F7F4]">
                    Quick Inquiry Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 font-display text-xs text-[#F8F7F4]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Groth Forge. All rights reserved.</p>
          <p>Video Production &amp; Business Growth Agency · Pabna Sadar</p>
        </div>
      </div>
    </footer>
  );
}
