import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { HERO_MEDIA, HERO_PROOF_METRICS } from '../data/agencyData';
import {
  DISPLAY_PHONE,
  TEL_HREF,
  buildDirectWhatsAppUrl,
} from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function HeroSection() {
  const heroWhatsAppUrl = buildDirectWhatsAppUrl(
    'আসসালামু আলাইকুম Groth Forge, আমি আমার ব্যবসার ভিডিও প্রোডাকশন ও দীর্ঘমেয়াদী ব্র্যান্ড গ্রোথ স্ট্র্যাটেজি নিয়ে কথা বলতে চাই।',
  );

  return (
    <section
      id="top"
      className="bg-[#0E1116] text-[#F8F7F4] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                Pabna Sadar, Bangladesh · Video Production &amp; Growth Partner
              </p>

              <h1 className="mt-5 font-bn text-[clamp(2.2rem,4.1vw,3.55rem)] font-bold leading-[1.18] tracking-[-0.01em] text-[#F8F7F4]">
                একদিনের ভাইরাল নয়—আমরা গড়ি{' '}
                <span className="text-[#D4AF37]">দীর্ঘমেয়াদী ব্র্যান্ড বিশ্বাস</span>{' '}
                ও স্থায়ী ব্যবসায়িক প্রবৃদ্ধি
              </h1>

              <p className="mt-6 max-w-2xl font-bn text-base leading-relaxed text-[#F8F7F4]/80 sm:text-lg">
                ১৬+ বছরের প্রফেশনাল সিনেমাটোগ্রাফি ও প্রোডাকশন অভিজ্ঞতা এবং মাসে
                ৬০–৯০টি ভিডিও তৈরির সক্ষমতা নিয়ে{' '}
                <span className="font-display font-semibold text-[#F8F7F4]">
                  Groth Forge
                </span>{' '}
                পাবনার শীর্ষ ব্যবসা ও প্রতিষ্ঠানগুলোর জন্য তৈরি করে বিশ্বাসযোগ্য ব্র্যান্ড
                ইমেজ, নিয়মিত গ্রাহক ও পরিমাপযোগ্য বিক্রয় প্রবৃদ্ধি।
              </p>

              {/* Primary + Secondary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-md bg-[#059669] px-6 py-3 font-display text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#047857]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Book Strategy via WhatsApp</span>
                </a>

                <a
                  href="#packages"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 font-display text-sm font-semibold text-[#F8F7F4] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <span>View Monthly Packages</span>
                  <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 text-xs text-[#F8F7F4]/65 sm:text-sm">
              <span className="font-bn">
                সরাসরি কথা বলুন:{' '}
                <a
                  href={TEL_HREF}
                  className="font-display font-semibold tabular-nums text-[#F8F7F4] underline decoration-[#D4AF37]/60 underline-offset-4 hover:text-[#D4AF37]"
                >
                  {DISPLAY_PHONE}
                </a>
              </span>
              <span className="mx-2.5 text-white/25" aria-hidden="true">
                ·
              </span>
              <span className="font-bn">
                অবস্থান: পাবনা সদর, বাংলাদেশ
              </span>
            </div>
          </div>

          {/* Right Cinema Production Frame */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-white/12 bg-[#161B23]">
              <SafeImage
                src={HERO_MEDIA.src}
                alt={HERO_MEDIA.alt}
                fallbackTitle="Groth Forge Production Studio"
                loading="eager"
                className="h-full w-full object-cover aspect-[16/10] lg:aspect-auto"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1116]/90 via-[#0E1116]/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-display text-xs font-medium text-[#D4AF37]">
                  Cinema Production Unit · Pabna Sadar
                </p>
                <p className="mt-1.5 font-bn text-sm font-medium leading-snug text-[#F8F7F4] sm:text-base">
                  স্ক্রিপ্ট থেকে শুট, এডিট ও কনভার্সন ফানেল — সম্পূর্ণ প্রোডাকশন এক ছাদের নিচে।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {HERO_PROOF_METRICS.map((metric) => (
            <div
              key={metric.labelEn}
              className="bg-[#161B23] px-5 py-5 sm:px-6 sm:py-6"
            >
              <p className="font-display text-2xl font-bold tracking-tight tabular-nums text-[#D4AF37]">
                {metric.value}
              </p>
              <p className="mt-1.5 font-display text-xs font-semibold text-[#F8F7F4]">
                {metric.labelEn}
              </p>
              <p className="mt-1 font-bn text-xs leading-relaxed text-[#F8F7F4]/70">
                {metric.labelBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
