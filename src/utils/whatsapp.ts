export const WHATSAPP_NUMBER = '8801764713206';
export const DISPLAY_PHONE = '01764713206';
export const TEL_HREF = `tel:+${WHATSAPP_NUMBER}`;
export const SHOWREEL_URL =
  'https://drive.google.com/drive/folders/1jHfFgxy31bH779-mB2wUd5UalI0r3HBy';

export type ProjectCategory =
  | 'All'
  | 'Corporate & Brand'
  | 'Real Estate'
  | 'Healthcare'
  | 'Retail & Education';

export interface FilterableProject {
  id: string;
  category: Exclude<ProjectCategory, 'All'>;
}

export interface InquiryFormValues {
  businessName: string;
  sector: string;
  packageName: string;
  note?: string;
}

export interface InquiryValidationErrors {
  businessName?: string;
  sector?: string;
  packageName?: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: InquiryValidationErrors;
}

export function buildDirectWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message || !message.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function buildPackageWhatsAppMessage(
  packageName: string,
  priceLabel: string,
): string {
  return [
    'আসসালামু আলাইকুম Groth Forge,',
    `আমি আপনাদের "${packageName}" (${priceLabel}) মান্থলি প্যাকেজটি সম্পর্কে বিস্তারিত জানতে ও বুকিং করতে আগ্রহী।`,
    'আমার প্রতিষ্ঠানের ভিডিও প্রোডাকশন ও গ্রোথ স্ট্র্যাটেজি নিয়ে কথা বলতে চাই।',
  ].join('\n');
}

export function buildPackageWhatsAppUrl(
  packageName: string,
  priceLabel: string,
): string {
  return buildDirectWhatsAppUrl(
    buildPackageWhatsAppMessage(packageName, priceLabel),
  );
}

export function buildProjectInquiryUrl(
  projectTitle: string,
  clientSector: string,
): string {
  const message = [
    'আসসালামু আলাইকুম Groth Forge,',
    `আমি আপনাদের "${projectTitle}" (${clientSector}) প্রজেক্টের মতো আমাদের ব্যবসার জন্য ভিডিও প্রোডাকশন করতে চাই।`,
    'বিস্তারিত আলোচনা করার জন্য সময় জানতে চাচ্ছি।',
  ].join('\n');
  return buildDirectWhatsAppUrl(message);
}

export function validateInquiryForm(
  values: InquiryFormValues,
): InquiryValidationResult {
  const errors: InquiryValidationErrors = {};

  const trimmedName = values.businessName.trim();
  if (!trimmedName) {
    errors.businessName = 'অনুগ্রহ করে আপনার প্রতিষ্ঠান বা ব্যবসার নাম লিখুন।';
  } else if (trimmedName.length < 2) {
    errors.businessName = 'প্রতিষ্ঠানের নাম কমপক্ষে ২ অক্ষরের হতে হবে।';
  }

  if (!values.sector.trim()) {
    errors.sector = 'আপনার ব্যবসার খাত নির্বাচন করুন।';
  }

  if (!values.packageName.trim()) {
    errors.packageName = 'একটি পছন্দের প্যাকেজ নির্বাচন করুন।';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildInquiryMessage(values: InquiryFormValues): string {
  const lines = [
    'আসসালামু আলাইকুম Groth Forge টিম,',
    'আমি আমার ব্যবসার জন্য ভিডিও প্রোডাকশন ও ব্র্যান্ড গ্রোথ নিয়ে কথা বলতে চাই।',
    '',
    `• প্রতিষ্ঠানের নাম: ${values.businessName.trim()}`,
    `• ব্যবসার খাত: ${values.sector.trim()}`,
    `• পছন্দের প্যাকেজ: ${values.packageName.trim()}`,
  ];

  const trimmedNote = values.note?.trim();
  if (trimmedNote) {
    lines.push(`• লক্ষ্য / মন্তব্য: ${trimmedNote}`);
  }

  lines.push('', 'অনুগ্রহ করে পরবর্তী ধাপ ও মিটিং সময় জানাবেন।');
  return lines.join('\n');
}

export function filterProjects<T extends FilterableProject>(
  projects: readonly T[],
  category: ProjectCategory,
): T[] {
  if (category === 'All') {
    return [...projects];
  }
  return projects.filter((project) => project.category === category);
}
