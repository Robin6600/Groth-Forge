import { Check, MessageCircle } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/agencyData';
import { buildPackageWhatsAppUrl } from '../utils/whatsapp';
import { MotionReveal } from './MotionReveal';

interface PackagesSectionProps {
  onSelectPackage: (packageOptionValue: string) => void;
}

export function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  return (
    <section
      id="packages"
      className="bg-[#F8F7F4] py-20 text-[#0E1116] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#967611]">
              04. Monthly Growth &amp; Production Packages
            </p>
            <h2 className="mt-3 font-bn text-3xl font-bold leading-tight text-[#0E1116] sm:text-4xl">
              স্বচ্ছ মাসিক প্যাকেজ — আপনার ব্যবসার পর্যায় অনুযায়ী সঠিক পরিকল্পনা বেছে নিন
            </h2>
            <p className="mt-4 font-bn text-base leading-relaxed text-[#0E1116]/75">
              কোনো লুকানো খরচ নেই। প্রতিটি প্যাকেজে থাকছে স্ট্র্যাটেজি, স্ক্রিপ্টিং,
              পাবনা সদরে অন-লোকেশন সিনেমা শুট এবং প্রফেশনাল পোস্ট-প্রোডাকশন।
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            const whatsappUrl = buildPackageWhatsAppUrl(
              pkg.name,
              pkg.priceLabel,
            );
            const optionValue = `${pkg.name} (${pkg.priceLabel})`;
            const isPopular = Boolean(pkg.popular);

            return (
              <MotionReveal key={pkg.id} delay={idx * 0.06} className="flex">
                <article
                  className={`flex w-full flex-col justify-between overflow-hidden rounded-xl border ${
                    isPopular
                      ? 'border-[#0E1116] bg-[#0E1116] text-[#F8F7F4]'
                      : 'border-[#0E1116]/12 bg-white text-[#0E1116]'
                  }`}
                >
                  <div>
                    {/* Editorial Popularity Header Strip (No floating pill) */}
                    {isPopular ? (
                      <div className="flex items-center justify-between bg-[#D4AF37] px-6 py-2.5 text-[#0E1116]">
                        <span className="font-display text-xs font-bold tracking-wide">
                          Most Popular Choice
                        </span>
                        <span className="font-bn text-xs font-semibold">
                          সর্বাধিক নির্বাচিত
                        </span>
                      </div>
                    ) : (
                      <div className="h-1.5 bg-[#0E1116]/10" aria-hidden="true" />
                    )}

                    <div className="p-6 sm:p-7">
                      <p
                        className={`font-display text-xs font-semibold ${
                          isPopular ? 'text-[#D4AF37]' : 'text-[#967611]'
                        }`}
                      >
                        {pkg.videoQuota}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                        {pkg.name}
                      </h3>
                      <p
                        className={`mt-1.5 font-bn text-sm leading-relaxed ${
                          isPopular ? 'text-[#F8F7F4]/75' : 'text-[#0E1116]/70'
                        }`}
                      >
                        {pkg.subtitleBn}
                      </p>

                      {/* Price Display with Tabular Numerals */}
                      <div
                        className={`mt-6 border-y py-5 ${
                          isPopular ? 'border-white/12' : 'border-[#0E1116]/10'
                        }`}
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-4xl font-extrabold tracking-tight tabular-nums">
                            ৳{pkg.priceBdt}
                          </span>
                          <span
                            className={`font-display text-xs font-semibold ${
                              isPopular
                                ? 'text-[#F8F7F4]/65'
                                : 'text-[#0E1116]/60'
                            }`}
                          >
                            {pkg.cadenceEn}
                          </span>
                        </div>
                        <p
                          className={`mt-2 font-bn text-xs ${
                            isPopular
                              ? 'text-[#F8F7F4]/70'
                              : 'text-[#0E1116]/65'
                          }`}
                        >
                          উপযুক্ত: {pkg.idealForBn}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <ul className="mt-6 space-y-3">
                        {pkg.featuresBn.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 font-bn text-sm leading-relaxed"
                          >
                            <Check
                              className={`mt-1 h-4 w-4 shrink-0 ${
                                isPopular ? 'text-[#D4AF37]' : 'text-[#047857]'
                              }`}
                              aria-hidden="true"
                            />
                            <span
                              className={
                                isPopular
                                  ? 'text-[#F8F7F4]/90'
                                  : 'text-[#0E1116]/85'
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="space-y-2.5 px-6 pb-7 pt-2 sm:px-7">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-display text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
                        isPopular
                          ? 'bg-[#D4AF37] text-[#0E1116] hover:bg-[#e1be4d]'
                          : 'bg-[#059669] text-white hover:bg-[#047857]'
                      }`}
                    >
                      <MessageCircle
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>Book via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectPackage(optionValue)}
                      className={`inline-flex min-h-[42px] w-full items-center justify-center rounded-md border px-4 py-2 font-display text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                        isPopular
                          ? 'border-white/15 text-[#F8F7F4]/80 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                          : 'border-[#0E1116]/15 text-[#0E1116]/75 hover:border-[#0E1116]/40 hover:text-[#0E1116]'
                      }`}
                    >
                      Customize in Inquiry Form
                    </button>
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
