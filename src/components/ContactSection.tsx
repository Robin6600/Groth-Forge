import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { PACKAGE_SELECT_OPTIONS, SECTOR_OPTIONS } from '../data/agencyData';
import {
  DISPLAY_PHONE,
  TEL_HREF,
  buildDirectWhatsAppUrl,
  buildInquiryMessage,
  validateInquiryForm,
  type InquiryValidationErrors,
} from '../utils/whatsapp';
import { MotionReveal } from './MotionReveal';

interface ContactSectionProps {
  selectedPackage: string;
  onSelectedPackageChange: (value: string) => void;
}

export function ContactSection({
  selectedPackage,
  onSelectedPackageChange,
}: ContactSectionProps) {
  const [businessName, setBusinessName] = useState('');
  const [sector, setSector] = useState(SECTOR_OPTIONS[0]);
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<InquiryValidationErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<string>('');

  useEffect(() => {
    if (selectedPackage) {
      setSubmittedUrl(null);
    }
  }, [selectedPackage]);

  const previewMessage = useMemo(() => {
    return buildInquiryMessage({
      businessName: businessName.trim() || '[আপনার প্রতিষ্ঠানের নাম]',
      sector,
      packageName: selectedPackage,
      note,
    });
  }, [businessName, sector, selectedPackage, note]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateInquiryForm({
      businessName,
      sector,
      packageName: selectedPackage,
      note,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedUrl(null);
      return;
    }

    setErrors({});
    const formattedMessage = buildInquiryMessage({
      businessName,
      sector,
      packageName: selectedPackage,
      note,
    });
    const whatsappUrl = buildDirectWhatsAppUrl(formattedMessage);

    setSubmittedMessage(formattedMessage);
    setSubmittedUrl(whatsappUrl);

    // Trigger direct WhatsApp launch without window.open
    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <section
      id="contact"
      className="bg-[#0E1116] py-20 text-[#F8F7F4] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Studio Contact & Pabna Presence */}
          <MotionReveal className="lg:col-span-5">
            <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
              05. Direct WhatsApp Consultation
            </p>
            <h2 className="mt-3 font-bn text-3xl font-bold leading-tight text-[#F8F7F4] sm:text-4xl">
              আপনার ব্র্যান্ডের পরবর্তী অধ্যায় শুরু করুন আজই
            </h2>
            <p className="mt-4 font-bn text-base leading-relaxed text-[#F8F7F4]/75">
              ফর্মটি পূরণ করে সাবমিট করলেই আপনার ব্যবসার তথ্যসহ সাজানো মেসেজ সরাসরি
              আমাদের হোয়াটসঅ্যাপে চলে যাবে। চাইলে এখনই ফোন বা মেসেজ করতে পারেন।
            </p>

            <div className="mt-8 space-y-5 border-t border-white/10 pt-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#161B23] text-[#D4AF37] ring-1 ring-white/10">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xs font-medium text-[#F8F7F4]/55">
                    Direct Hotline &amp; WhatsApp
                  </p>
                  <a
                    href={TEL_HREF}
                    className="mt-0.5 block font-display text-xl font-bold tabular-nums text-[#F8F7F4] transition-colors hover:text-[#D4AF37]"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#161B23] text-[#D4AF37] ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xs font-medium text-[#F8F7F4]/55">
                    Production Base
                  </p>
                  <p className="mt-0.5 font-display text-base font-semibold text-[#F8F7F4]">
                    Pabna Sadar, Bangladesh
                  </p>
                  <p className="font-bn text-sm text-[#F8F7F4]/70">
                    পাবনা সদর ও আশেপাশের এলাকায় সরাসরি অন-সাইট শুট সুবিধা
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#161B23] text-[#D4AF37] ring-1 ring-white/10">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xs font-medium text-[#F8F7F4]/55">
                    Response &amp; Shoot Scheduling
                  </p>
                  <p className="mt-0.5 font-bn text-sm text-[#F8F7F4]/80">
                    শনিবার – বৃহস্পতিবার, সকাল ১০টা থেকে রাত ৯টা (দ্রুত হোয়াটসঅ্যাপ
                    রিপ্লাই)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-[#10B981]/50 bg-[#059669]/15 px-5 py-2.5 font-display text-sm font-semibold text-[#6EE7B7] whitespace-nowrap transition-colors hover:bg-[#059669] hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </MotionReveal>

          {/* Right Column: Interactive Quick-Inquiry WhatsApp Form */}
          <MotionReveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-xl border border-white/12 bg-[#161B23] p-6 sm:p-8">
              <div className="border-b border-white/10 pb-5">
                <h3 className="font-display text-xl font-bold text-[#F8F7F4]">
                  Quick WhatsApp Inquiry Form
                </h3>
                <p className="mt-1 font-bn text-sm text-[#F8F7F4]/70">
                  আপনার প্রতিষ্ঠানের নাম, খাত ও প্যাকেজ নির্বাচন করুন — মুহূর্তেই
                  হোয়াটসঅ্যাপ মেসেজ তৈরি হয়ে যাবে।
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* Business Name */}
                <div>
                  <label
                    htmlFor="inquiry-business-name"
                    className="block font-bn text-sm font-semibold text-[#F8F7F4]"
                  >
                    প্রতিষ্ঠান বা ব্যবসার নাম{' '}
                    <span className="font-display text-xs font-normal text-[#F8F7F4]/55">
                      (Business Name) *
                    </span>
                  </label>
                  <input
                    id="inquiry-business-name"
                    name="businessName"
                    type="text"
                    required
                    value={businessName}
                    onChange={(event) => {
                      setBusinessName(event.target.value);
                      if (errors.businessName) {
                        setErrors((prev) => ({ ...prev, businessName: undefined }));
                      }
                    }}
                    placeholder="যেমন: পাবনা মডার্ন ডায়াগনস্টিক / আলফা হাউজিং লিঃ"
                    aria-invalid={Boolean(errors.businessName)}
                    aria-describedby={
                      errors.businessName ? 'business-name-error' : undefined
                    }
                    className="mt-2 block min-h-[46px] w-full rounded-md border border-white/15 bg-[#0E1116] px-4 py-2.5 font-bn text-sm text-[#F8F7F4] placeholder:text-[#F8F7F4]/40 focus:border-[#D4AF37] focus:outline-none"
                  />
                  {errors.businessName && (
                    <p
                      id="business-name-error"
                      role="alert"
                      className="mt-1.5 font-bn text-xs font-medium text-amber-300"
                    >
                      {errors.businessName}
                    </p>
                  )}
                </div>

                {/* Sector + Package Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="inquiry-sector"
                      className="block font-bn text-sm font-semibold text-[#F8F7F4]"
                    >
                      ব্যবসার খাত{' '}
                      <span className="font-display text-xs font-normal text-[#F8F7F4]/55">
                        (Sector) *
                      </span>
                    </label>
                    <select
                      id="inquiry-sector"
                      name="sector"
                      value={sector}
                      onChange={(event) => setSector(event.target.value)}
                      className="mt-2 block min-h-[46px] w-full rounded-md border border-white/15 bg-[#0E1116] px-3.5 py-2.5 font-display text-sm text-[#F8F7F4] focus:border-[#D4AF37] focus:outline-none"
                    >
                      {SECTOR_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-package"
                      className="block font-bn text-sm font-semibold text-[#F8F7F4]"
                    >
                      পছন্দের প্যাকেজ{' '}
                      <span className="font-display text-xs font-normal text-[#F8F7F4]/55">
                        (Package) *
                      </span>
                    </label>
                    <select
                      id="inquiry-package"
                      name="packageName"
                      value={selectedPackage}
                      onChange={(event) =>
                        onSelectedPackageChange(event.target.value)
                      }
                      className="mt-2 block min-h-[46px] w-full rounded-md border border-white/15 bg-[#0E1116] px-3.5 py-2.5 font-display text-sm text-[#F8F7F4] focus:border-[#D4AF37] focus:outline-none"
                    >
                      {PACKAGE_SELECT_OPTIONS.map((pkgOption) => (
                        <option key={pkgOption} value={pkgOption}>
                          {pkgOption}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Campaign Note */}
                <div>
                  <label
                    htmlFor="inquiry-note"
                    className="block font-bn text-sm font-semibold text-[#F8F7F4]"
                  >
                    আপনার লক্ষ্য বা সংক্ষিপ্ত নোট{' '}
                    <span className="font-display text-xs font-normal text-[#F8F7F4]/55">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id="inquiry-note"
                    name="note"
                    rows={2}
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    placeholder="যেমন: নতুন শোরুম লঞ্চ, ভর্তি ক্যাম্পেইন বা নিয়মিত মাসিক রিলস"
                    className="mt-2 block w-full rounded-md border border-white/15 bg-[#0E1116] px-4 py-2.5 font-bn text-sm text-[#F8F7F4] placeholder:text-[#F8F7F4]/40 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                {/* Live WhatsApp Message Preview */}
                <div className="rounded-lg border border-white/10 bg-[#0E1116] p-4">
                  <p className="font-display text-xs font-semibold text-[#D4AF37]">
                    Formatted WhatsApp Message Preview
                  </p>
                  <pre
                    data-testid="whatsapp-preview"
                    className="mt-2 whitespace-pre-wrap font-bn text-xs leading-relaxed text-[#F8F7F4]/80"
                  >
                    {previewMessage}
                  </pre>
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-md bg-[#059669] px-6 py-3 font-display text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#047857]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>

              {/* Accessible Confirmation State after Form Submit */}
              {submittedUrl && (
                <div
                  role="status"
                  aria-live="polite"
                  data-testid="inquiry-confirmation"
                  className="mt-6 rounded-lg border border-[#10B981]/40 bg-[#059669]/15 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#6EE7B7]"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-bn text-sm font-semibold text-[#F8F7F4]">
                        আপনার হোয়াটসঅ্যাপ ইনকোয়ারি প্রস্তুত হয়েছে!
                      </p>
                      <p className="mt-1 font-bn text-xs text-[#F8F7F4]/80">
                        নতুন ট্যাবে WhatsApp না খুললে নিচের বাটনে ক্লিক করে সরাসরি মেসেজ
                        পাঠান:
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <a
                          href={submittedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-md bg-[#059669] px-4 py-2 font-display text-xs font-semibold text-white transition-colors hover:bg-[#047857]"
                        >
                          <span>Open WhatsApp Chat</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setBusinessName('');
                            setNote('');
                            setSubmittedUrl(null);
                            setSubmittedMessage('');
                          }}
                          className="min-h-[40px] rounded-md border border-white/15 px-3.5 py-2 font-display text-xs font-medium text-[#F8F7F4]/80 hover:border-white/35 hover:text-white"
                        >
                          Reset Form
                        </button>
                      </div>
                      <span className="sr-only">{submittedMessage}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
