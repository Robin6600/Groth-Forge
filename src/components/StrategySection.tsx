import { ArrowRight, Check, Minus } from 'lucide-react';
import {
  GROWTH_FUNNEL_STAGES,
  OUTSOURCING_COMPARISON,
  SECTOR_PLAYBOOKS,
} from '../data/agencyData';
import { MotionReveal } from './MotionReveal';

export function StrategySection() {
  return (
    <section
      id="strategy"
      className="bg-[#F8F7F4] py-20 text-[#0E1116] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#967611]">
              01. Marketing &amp; Growth Architecture
            </p>
            <h2 className="mt-3 font-bn text-3xl font-bold leading-tight text-[#0E1116] sm:text-4xl">
              ভিডিও শুধু দেখানোর জন্য নয়—প্রতিটি কনটেন্ট কাজ করে একটি পরিপূর্ণ সেলস
              ফানেল হিসেবে
            </h2>
            <p className="mt-4 font-bn text-base leading-relaxed text-[#0E1116]/75 sm:text-lg">
              অপরিকল্পিত পোস্ট বা এলোমেলো বুস্টিংয়ে বাজেট নষ্ট না করে, আমরা আপনার
              ব্যবসার জন্য তৈরি করি ৩-ধাপের ধারাবাহিক ভিডিও গ্রোথ সিস্টেম।
            </p>
          </div>
        </MotionReveal>

        {/* Visual 3-Stage Growth Funnel */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {GROWTH_FUNNEL_STAGES.map((stage, idx) => (
            <MotionReveal key={stage.step} delay={idx * 0.06}>
              <article className="relative flex h-full flex-col justify-between rounded-xl border border-[#0E1116]/10 bg-white p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#0E1116]/8 pb-4">
                    <span className="font-display text-sm font-bold tabular-nums text-[#967611]">
                      Stage {stage.step}
                    </span>
                    {idx < GROWTH_FUNNEL_STAGES.length - 1 ? (
                      <span className="inline-flex items-center gap-1 font-display text-xs font-medium text-[#0E1116]/45">
                        <span>Next Stage</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    ) : (
                      <span className="font-display text-xs font-semibold text-[#047857]">
                        Revenue Outcome
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-[#0E1116]">
                    {stage.titleEn}
                  </h3>
                  <p className="mt-1 font-bn text-base font-semibold text-[#0E1116]/85">
                    {stage.titleBn}
                  </p>
                  <p className="mt-3 font-bn text-sm leading-relaxed text-[#0E1116]/70">
                    {stage.descriptionBn}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#0E1116]/8 pt-4">
                  <p className="font-display text-xs font-medium text-[#0E1116]/55">
                    {stage.deliverables}
                  </p>
                  <p className="mt-2 font-bn text-xs font-semibold text-[#047857]">
                    ফলাফল: {stage.outcome}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        {/* Outsourcing vs In-House Team Comparison */}
        <MotionReveal className="mt-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#967611]">
                Cost &amp; Execution Advantage
              </p>
              <h3 className="mt-2 font-bn text-2xl font-bold leading-snug text-[#0E1116] sm:text-3xl">
                ব্যয়বহুল ইন-হাউস টিমের বদলে কেন Groth Forge আপনার সেরা সিদ্ধান্ত?
              </h3>
            </div>
            <p className="max-w-md font-bn text-sm leading-relaxed text-[#0E1116]/70">
              একজন সাধারণ ইন-হাউস টিমের বেতন ও গিয়ার খরচের এক-চতুর্থাংশ বাজেটে পাচ্ছেন
              ১৬+ বছরের অভিজ্ঞ ডিরেকশন ও পূর্ণাঙ্গ স্টুডিও সাপোর্ট।
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#0E1116]/12 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#0E1116]/10 bg-[#F2F0EA]">
                    <th
                      scope="col"
                      className="px-6 py-4 font-bn text-sm font-bold text-[#0E1116]"
                    >
                      তুলনার বিষয়
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-display text-xs font-semibold tracking-wide text-[#0E1116]/65"
                    >
                      In-House Team (নিজস্ব কর্মী ও গিয়ার)
                    </th>
                    <th
                      scope="col"
                      className="bg-[#0E1116] px-6 py-4 font-display text-xs font-semibold tracking-wide text-[#D4AF37]"
                    >
                      Groth Forge Monthly Partner
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0E1116]/8">
                  {OUTSOURCING_COMPARISON.map((row) => (
                    <tr key={row.criterion}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-bn text-sm font-semibold text-[#0E1116]"
                      >
                        {row.criterion}
                      </th>
                      <td className="px-6 py-4 font-bn text-sm tabular-nums text-[#0E1116]/65">
                        <span className="inline-flex items-start gap-2">
                          <Minus
                            className="mt-1 h-4 w-4 shrink-0 text-[#0E1116]/35"
                            aria-hidden="true"
                          />
                          <span>{row.inHouse}</span>
                        </span>
                      </td>
                      <td className="bg-[#0E1116]/[0.03] px-6 py-4 font-bn text-sm font-semibold tabular-nums text-[#0E1116]">
                        <span className="inline-flex items-start gap-2">
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-[#047857]"
                            aria-hidden="true"
                          />
                          <span>{row.grothForge}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </MotionReveal>

        {/* Sector-Specific Growth Playbooks (Balanced 6-Col Asymmetric Bento) */}
        <div className="mt-20">
          <MotionReveal>
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#967611]">
                Sector-Specific Growth Playbooks
              </p>
              <h3 className="mt-2 font-bn text-2xl font-bold leading-snug text-[#0E1116] sm:text-3xl">
                পাবনার প্রতিটি প্রধান ব্যবসায়িক খাতের জন্য আলাদা কনটেন্ট ও কনভার্সন ফর্মুলা
              </h3>
            </div>
          </MotionReveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-6">
            {SECTOR_PLAYBOOKS.map((item, idx) => {
              const spanClass = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
              return (
                <MotionReveal
                  key={item.id}
                  delay={idx * 0.05}
                  className={spanClass}
                >
                  <article className="flex h-full flex-col justify-between rounded-xl border border-[#0E1116]/10 bg-white p-6 transition-colors duration-200 hover:border-[#967611]/50">
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-display text-lg font-bold tracking-tight text-[#0E1116]">
                          {item.sectorEn}
                        </h4>
                        <span className="font-display text-xs font-semibold tabular-nums text-[#967611]">
                          {item.index}
                        </span>
                      </div>
                      <p className="mt-1 font-bn text-sm font-semibold text-[#0E1116]/80">
                        {item.sectorBn}
                      </p>
                      <p className="mt-3 font-bn text-sm leading-relaxed text-[#0E1116]/70">
                        {item.strategyBn}
                      </p>
                    </div>
                    <p className="mt-5 border-t border-[#0E1116]/8 pt-3.5 font-display text-xs font-medium text-[#0E1116]/55">
                      {item.focusLine}
                    </p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
