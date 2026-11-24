import { TOP_CLIENTS } from '../data/agencyData';
import { MotionReveal } from './MotionReveal';

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="border-b border-[#0E1116]/10 bg-[#F8F7F4] py-20 text-[#0E1116] sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#967611]">
                03. Trusted Institutional &amp; Business Roster
              </p>
              <h2 className="mt-3 font-bn text-3xl font-bold leading-tight text-[#0E1116] sm:text-4xl">
                পাবনার স্বনামধন্য প্রতিষ্ঠান ও ব্যবসায়িক নেতৃত্বের আস্থার অংশীদার
              </h2>
            </div>
            <p className="max-w-md font-bn text-sm leading-relaxed text-[#0E1116]/70">
              শিক্ষা, আবাসন, স্বাস্থ্যসেবা, ফার্নিচার শোরুম ও হসপিটালিটি খাতে দীর্ঘমেয়াদী
              ব্র্যান্ড পজিশনিংয়ের প্রমাণিত অভিজ্ঞতা।
            </p>
          </div>
        </MotionReveal>

        {/* Prestigious 4-Column Architectural Client Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#0E1116]/12 bg-[#0E1116]/10 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_CLIENTS.map((client) => (
            <article
              key={client.name}
              className="flex flex-col justify-between bg-white p-6 transition-colors duration-200 hover:bg-[#FCFBF8]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-xs font-semibold text-[#967611]">
                    {client.sector}
                  </span>
                  <span className="font-display text-xs font-medium tabular-nums text-[#0E1116]/35">
                    {client.index}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold leading-snug tracking-tight text-[#0E1116]">
                  {client.name}
                </h3>
              </div>

              <p className="mt-5 border-t border-[#0E1116]/8 pt-3.5 font-bn text-xs leading-relaxed text-[#0E1116]/65">
                {client.productionFocusBn}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
