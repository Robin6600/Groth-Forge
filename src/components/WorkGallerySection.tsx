import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  MessageCircle,
  Play,
  X,
} from 'lucide-react';
import {
  WORK_CATEGORIES,
  WORK_PROJECTS,
  type WorkProject,
} from '../data/agencyData';
import {
  SHOWREEL_URL,
  buildProjectInquiryUrl,
  filterProjects,
  type ProjectCategory,
} from '../utils/whatsapp';
import { MotionReveal } from './MotionReveal';
import { SafeImage } from './SafeImage';

export function WorkGallerySection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null,
  );

  const visibleProjects = useMemo(
    () => filterProjects(WORK_PROJECTS, activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="bg-[#0E1116] py-20 text-[#F8F7F4] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header Row + Showreel CTA */}
        <MotionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                02. Selected Productions &amp; Showreel
              </p>
              <h2 className="mt-3 font-bn text-3xl font-bold leading-tight text-[#F8F7F4] sm:text-4xl">
                পাবনার শীর্ষ ব্র্যান্ডগুলোর জন্য নির্মিত আমাদের নির্বাচিত কাজ
              </h2>
              <p className="mt-3 font-bn text-base leading-relaxed text-[#F8F7F4]/75">
                প্রতিটি ফ্রেম, আলো এবং গল্প সাজানো হয় নির্দিষ্ট ব্যবসায়িক লক্ষ্যকে সামনে
                রেখে—ব্র্যান্ড অথরিটি, ক্রেতার আস্থা এবং সরাসরি ইনকোয়ারি।
              </p>
            </div>

            <a
              href={SHOWREEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 self-start rounded-md bg-[#D4AF37] px-5 py-2.5 font-display text-sm font-semibold text-[#0E1116] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#e1be4d] lg:self-end"
            >
              <span>View Full Showreel</span>
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </MotionReveal>

        {/* Interactive Category Filter Controls */}
        <div className="mt-10 flex flex-col gap-4 border-y border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="tablist"
            aria-label="Filter productions by industry"
            className="flex flex-wrap items-center gap-2"
          >
            {WORK_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 font-display text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#0E1116]'
                      : 'bg-[#161B23] text-[#F8F7F4]/75 hover:bg-[#1D2430] hover:text-[#F8F7F4]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p
            data-testid="gallery-count"
            className="font-display text-xs font-medium tabular-nums text-[#F8F7F4]/60"
          >
            Showing {visibleProjects.length} of {WORK_PROJECTS.length} productions
          </p>
        </div>

        {/* 6-Card Project Showcase Grid */}
        <div
          data-testid="gallery-grid"
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#161B23] transition-colors duration-200 hover:border-[#D4AF37]/50"
            >
              {/* Visual Preview Frame */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Inspect project details for ${project.titleEn}`}
                className="relative block w-full overflow-hidden bg-[#0E1116] text-left focus-visible:outline-offset-[-2px]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SafeImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.client}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1116]/85 via-[#0E1116]/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-3">
                  <span className="font-display text-xs font-medium tabular-nums text-[#F8F7F4]/90">
                    {project.duration} · {project.format}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0E1116]/80 text-[#D4AF37] ring-1 ring-[#D4AF37]/40 transition-transform duration-150 group-hover:scale-105">
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  </span>
                </div>
              </button>

              {/* Editorial Card Copy (Unboxed metadata, zero static pills) */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-xs text-[#D4AF37]">
                    <span className="font-semibold">{project.objective}</span>
                    <span className="text-white/30" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[#F8F7F4]/65">{project.category}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-bold leading-snug text-[#F8F7F4]">
                    {project.titleEn}
                  </h3>
                  <p className="mt-1 font-bn text-sm font-semibold text-[#F8F7F4]/85">
                    {project.titleBn}
                  </p>
                  <p className="mt-2.5 font-bn text-sm leading-relaxed text-[#F8F7F4]/65">
                    {project.summaryBn}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="truncate font-display text-xs font-medium text-[#F8F7F4]/75">
                    {project.client}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 font-display text-xs font-semibold text-[#D4AF37] whitespace-nowrap shrink-0 transition-colors hover:text-[#f0d066]"
                  >
                    <span>Case Brief</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Showreel Proof Callout */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-[#161B23] p-6 sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="font-display text-sm font-bold text-[#F8F7F4]">
              Complete Production Archive on Google Drive
            </p>
            <p className="mt-1 font-bn text-sm text-[#F8F7F4]/70">
              আমাদের পূর্ণাঙ্গ কমার্শিয়াল শোরিল, ডকুমেন্টারি কাট ও ক্লায়েন্ট ক্যাম্পেইনগুলো
              সরাসরি দেখুন।
            </p>
          </div>
          <a
            href={SHOWREEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-[#D4AF37]/60 px-5 py-2.5 font-display text-xs font-semibold text-[#D4AF37] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#D4AF37] hover:text-[#0E1116]"
          >
            <span>Open Full Showreel Folder</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Accessible Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/15 bg-[#161B23] text-[#F8F7F4] shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0E1116]">
              <SafeImage
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                fallbackTitle={selectedProject.client}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Close project preview"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0E1116]/85 text-[#F8F7F4] ring-1 ring-white/20 transition-colors hover:bg-[#0E1116] hover:text-[#D4AF37]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-xs text-[#D4AF37]">
                <span className="font-semibold">{selectedProject.client}</span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span>{selectedProject.objective}</span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#F8F7F4]/70">{selectedProject.format}</span>
              </div>

              <h3
                id="project-modal-title"
                className="mt-3 font-display text-2xl font-bold leading-snug text-[#F8F7F4]"
              >
                {selectedProject.titleEn}
              </h3>
              <p className="mt-1 font-bn text-base font-semibold text-[#F8F7F4]/85">
                {selectedProject.titleBn}
              </p>
              <p className="mt-3 font-bn text-sm leading-relaxed text-[#F8F7F4]/75">
                {selectedProject.summaryBn}
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="font-display text-xs font-semibold tracking-wide text-[#F8F7F4]/60">
                  Production Deliverables
                </p>
                <ul className="mt-2.5 space-y-1.5 font-display text-sm text-[#F8F7F4]/90">
                  {selectedProject.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-display text-xs font-semibold text-[#10B981]">
                  Outcome: {selectedProject.impactHighlight}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                <a
                  href={SHOWREEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-5 py-2.5 font-display text-xs font-semibold text-[#0E1116] whitespace-nowrap shrink-0 transition-colors hover:bg-[#e1be4d]"
                >
                  <span>View Full Showreel</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href={buildProjectInquiryUrl(
                    selectedProject.titleEn,
                    selectedProject.category,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#059669] px-5 py-2.5 font-display text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#047857]"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Request Similar Production</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
