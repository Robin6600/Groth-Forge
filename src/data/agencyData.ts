import type { ProjectCategory } from '../utils/whatsapp';

export const HERO_MEDIA = {
  src: '/src/assets/images/hero_cinema_studio_1795503638824.jpg',
  alt: 'Groth Forge commercial cinema camera rig inside dark editorial production studio with warm tungsten lighting',
};

export interface ProofMetric {
  value: string;
  labelEn: string;
  labelBn: string;
}

export const HERO_PROOF_METRICS: ProofMetric[] = [
  {
    value: '16+ Years',
    labelEn: 'Cinematography Heritage',
    labelBn: 'সিনেমাটোগ্রাফি ও প্রোডাকশন অভিজ্ঞতা',
  },
  {
    value: '60–90 / mo',
    labelEn: 'Production Capacity',
    labelBn: 'মাসিক কনটেন্ট ও ভিডিও সক্ষমতা',
  },
  {
    value: '5 Core Sectors',
    labelEn: 'Localized Growth Playbooks',
    labelBn: 'পাবনার শীর্ষ ব্যবসায়িক খাতভিত্তিক কৌশল',
  },
  {
    value: 'Pabna Sadar',
    labelEn: 'On-Ground Studio Crew',
    labelBn: 'সরাসরি লোকেশন শুট ও দ্রুত ডেলিভারি',
  },
];

export interface FunnelStage {
  step: string;
  titleEn: string;
  titleBn: string;
  descriptionBn: string;
  deliverables: string;
  outcome: string;
}

export const GROWTH_FUNNEL_STAGES: FunnelStage[] = [
  {
    step: '01',
    titleEn: 'Attention & Authority',
    titleBn: 'মনোযোগ আকর্ষণ ও ব্র্যান্ড অবস্থান',
    descriptionBn:
      'পাবনার স্থানীয় ক্রেতাদের ফিডে সাধারণ পোস্টের ভিড়ে সিনেমাটিক ভিজ্যুয়াল ও শক্তিশালী হুক দিয়ে আপনার প্রতিষ্ঠানকে প্রথম ৩ সেকেন্ডে আলাদা করে তুলে ধরা।',
    deliverables: 'Brand Films · Vertical Reels · Hook Scripting',
    outcome: 'উচ্চমানের ব্র্যান্ড পরিচিতি ও স্থানীয় বাজারে প্রাধান্য',
  },
  {
    step: '02',
    titleEn: 'Trust & Storytelling',
    titleBn: 'গভীর আস্থা ও বাস্তব গল্প',
    descriptionBn:
      'শুধু বিজ্ঞাপন নয়—আপনার সেবার মান, উদ্যোক্তার ভিশন, ডক্টর বা এক্সপার্ট পরিচিতি এবং সন্তুষ্ট গ্রাহকের অভিজ্ঞতা তুলে ধরে দর্শকের মনে স্থায়ী বিশ্বাস তৈরি।',
    deliverables: 'Founder Stories · Documentary Cuts · Client Proof',
    outcome: 'প্রতিযোগীদের তুলনায় উচ্চতর ব্র্যান্ড বিশ্বাসযোগ্যতা',
  },
  {
    step: '03',
    titleEn: 'Lead & Walk-in Conversion',
    titleBn: 'সরাসরি ইনবক্স লিড ও শোরুম ভিজিট',
    descriptionBn:
      'প্রতিটি ভিডিওর শেষে সুস্পষ্ট কল-টু-অ্যাকশন, হোয়াটসঅ্যাপ ফানেল ও লোকাল টার্গেটিংয়ের মাধ্যমে ভিউকে সরাসরি কল, বুকিং ও ফিজিক্যাল ভিজিটে রূপান্তর।',
    deliverables: 'Conversion Ads · WhatsApp Funnels · Offer Reels',
    outcome: 'পরিমাপযোগ্য সেলস ইনকোয়ারি ও নিয়মিত কাস্টমার ফ্লো',
  },
];

export interface ComparisonRow {
  criterion: string;
  inHouse: string;
  grothForge: string;
}

export const OUTSOURCING_COMPARISON: ComparisonRow[] = [
  {
    criterion: 'মাসিক বেতন ও টিম খরচ',
    inHouse: '৳৮০,০০০ – ৳১,৫০,০০০+ (শুটার, এডিটর, স্ক্রিপ্টরাইটার)',
    grothForge: '৳১৫,০০০ – ৳৪০,০০০ ফিক্সড মান্থলি প্যাকেজ',
  },
  {
    criterion: 'ক্যামেরা, লাইট ও অডিও ইনভেস্টমেন্ট',
    inHouse: '৳৫,০০,০০০+ এককালীন যন্ত্রপাতি ও মেইনটেন্যান্স খরচ',
    grothForge: 'শূন্য বিনিয়োগ — প্রফেশনাল সিনেমা গিয়ার অন্তর্ভুক্ত',
  },
  {
    criterion: 'সৃজনশীল অভিজ্ঞতা ও ডিরেকশন',
    inHouse: 'জুনিয়র স্টাফ ও ঘনঘন কর্মী বদলের ঝুঁকি',
    grothForge: '১৬+ বছরের সিনেমাটোগ্রাফি ও ব্র্যান্ড স্ট্র্যাটেজি নেতৃত্ব',
  },
  {
    criterion: 'মাসিক ধারাবাহিকতা ও আউটপুট',
    inHouse: 'অনিয়মিত পোস্ট ও স্ট্র্যাটেজিবিহীন কনটেন্ট',
    grothForge: 'মাসে ৬০–৯০টি ভিডিও প্রোডাকশন সক্ষমতাসহ নিশ্চিত ক্যালেন্ডার',
  },
  {
    criterion: 'ব্যবসায়িক ফলাফল ও ফোকাস',
    inHouse: 'মালিকের নিজস্ব সময় নষ্ট হয় তদারকিতে',
    grothForge: 'সম্পূর্ণ ডান-ফর-ইউ সিস্টেম — আপনি থাকবেন ব্যবসার মূল কাজে',
  },
];

export interface SectorPlaybook {
  id: string;
  index: string;
  sectorEn: string;
  sectorBn: string;
  strategyBn: string;
  focusLine: string;
}

export const SECTOR_PLAYBOOKS: SectorPlaybook[] = [
  {
    id: 'real-estate',
    index: '01',
    sectorEn: 'Real Estate',
    sectorBn: 'আবাসন ও ডেভেলপার',
    strategyBn:
      'ড্রোন ও আর্কিটেকচারাল ওয়াকথ্রু, নির্মাণ অগ্রগতি আপডেট এবং প্লট-ফ্ল্যাট হ্যান্ডওভার স্টোরির মাধ্যমে প্রবাসী ও স্থানীয় ক্রেতাদের আস্থা অর্জন ও বুকিং বৃদ্ধি।',
    focusLine: 'Site Walkthroughs · Progress Films · Buyer Trust',
  },
  {
    id: 'healthcare',
    index: '02',
    sectorEn: 'Healthcare & Doctors Chambers',
    sectorBn: 'হাসপাতাল, ডায়াগনস্টিক ও ডক্টর চেম্বার',
    strategyBn:
      'বিশেষজ্ঞ চিকিৎসকদের স্বাস্থ্য সচেতনতা রিলস, আধুনিক ল্যাব ও সেবার স্বচ্ছ উপস্থাপনা দিয়ে রোগী ও পরিবারের ভয় দূর করে সরাসরি অ্যাপয়েন্টমেন্ট নিশ্চিত করা।',
    focusLine: 'Specialist Reels · Lab Transparency · Patient Bookings',
  },
  {
    id: 'hospitality',
    index: '03',
    sectorEn: 'Restaurants & Hospitality',
    sectorBn: 'রেস্তোরাঁ ও রিসোর্ট',
    strategyBn:
      'পরিবেশের উষ্ণ আলো, ফুড সিনেমাটোগ্রাফি ও ফ্যামিলি ডাইনিং এক্সপেরিয়েন্স তুলে ধরে সপ্তাহান্তের ভিড় ও কর্পোরেট ইভেন্ট বুকিং বহুগুণ বাড়ানো।',
    focusLine: 'Culinary Visuals · Ambience Films · Table Bookings',
  },
  {
    id: 'retail',
    index: '04',
    sectorEn: 'Showrooms & Retail',
    sectorBn: 'শোরুম ও ফার্নিচার রিটেইল',
    strategyBn:
      'পণ্যের নিখুঁত ফিনিশিং, ডিজাইন ডিটেইল এবং মৌসুমি ক্যাম্পেইন ভিডিওর মাধ্যমে ক্রেতাদের অনলাইনে দেখার পর সরাসরি শোরুমে আসতে উদ্বুদ্ধ করা।',
    focusLine: 'Product Craft · Showroom Tours · Walk-in Campaigns',
  },
  {
    id: 'education',
    index: '05',
    sectorEn: 'Coaching & Education',
    sectorBn: 'স্কুল, কলেজ ও কোচিং সেন্টার',
    strategyBn:
      'ক্যাম্পাস শৃঙ্খলা, শিক্ষকদের দিকনির্দেশনা ও কৃতী শিক্ষার্থীদের সাফল্যের গল্পের মাধ্যমে ভর্তি মৌসুমে অভিভাবকদের প্রথম পছন্দে পরিণত হওয়া।',
    focusLine: 'Campus Documentaries · Alumni Proof · Admission Drives',
  },
];

export interface WorkProject {
  id: string;
  titleEn: string;
  titleBn: string;
  client: string;
  category: Exclude<ProjectCategory, 'All'>;
  objective: string;
  format: string;
  duration: string;
  summaryBn: string;
  deliverables: string[];
  impactHighlight: string;
  image: string;
  imageAlt: string;
}

export const WORK_CATEGORIES: ProjectCategory[] = [
  'All',
  'Corporate & Brand',
  'Real Estate',
  'Healthcare',
  'Retail & Education',
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'prince-corporate-film',
    titleEn: 'Executive Brand Documentary & Authority Series',
    titleBn: 'কর্পোরেট ব্র্যান্ড ডকুমেন্টারি ও লিডারশিপ সিরিজ',
    client: 'Prince International',
    category: 'Corporate & Brand',
    objective: 'Brand Authority',
    format: '4K Brand Film + 12 Reels',
    duration: '02:45 Main Cut',
    summaryBn:
      'প্রতিষ্ঠানের দীর্ঘদিনের ব্যবসায়িক ঐতিহ্য, ব্যবস্থাপনা দক্ষতা ও গ্রাহক প্রতিশ্রুতিকে সিনেমাটিক ডকুমেন্টারি আঙ্গিকে উপস্থাপন করে কর্পোরেট আস্থা সুদৃঢ় করা।',
    deliverables: [
      'Cinema-grade boardroom & leadership interviews',
      '12 vertical authority cuts for Facebook & Reels',
      'Color-graded corporate archive footage',
    ],
    impactHighlight: 'Strengthened regional B2B credibility & partner inquiries',
    image: '/src/assets/images/work_corporate_brand_1795503638533.jpg',
    imageAlt: 'Commercial film shoot inside a corporate boardroom with warm golden lighting',
  },
  {
    id: 'barendra-housing-launch',
    titleEn: 'Twilight Architectural Walkthrough & Project Launch',
    titleBn: 'আর্কিটেকচারাল ওয়াকথ্রু ও আবাসন প্রজেক্ট লঞ্চ',
    client: 'Barendra Housing Ltd.',
    category: 'Real Estate',
    objective: 'Lead Generation',
    format: 'Architectural Film + Ad Cuts',
    duration: '01:55 Feature',
    summaryBn:
      'আধুনিক আবাসনের নান্দনিক স্থাপত্য, লোকেশন সুবিধা এবং নিরাপদ বিনিয়োগের নিশ্চয়তাকে গোধূলির আলোয় ফুটিয়ে তুলে প্রবাসী ও স্থানীয় ক্রেতাদের সরাসরি ইনকোয়ারি তৈরি।',
    deliverables: [
      'Golden-hour architectural cinematography',
      'Buyer-focused plot & apartment walkthrough series',
      'Direct WhatsApp lead-capture ad variations',
    ],
    impactHighlight: 'Consistent qualified site-visit bookings from local & NRB buyers',
    image: '/src/assets/images/work_real_estate_1795503638108.jpg',
    imageAlt: 'Golden hour architectural view of a modern residential housing complex with warm interior lights',
  },
  {
    id: 'fair-hospital-trust',
    titleEn: 'Patient Trust & Specialist Awareness Campaign',
    titleBn: 'রোগীর আস্থা ও বিশেষজ্ঞ চিকিৎসক সচেতনতা সিরিজ',
    client: 'Fair Hospital & Diagnostic Center',
    category: 'Healthcare',
    objective: 'Patient Trust & Bookings',
    format: 'Monthly Doctor Series',
    duration: '01:10 Episodic',
    summaryBn:
      'আধুনিক ডায়াগনস্টিক প্রযুক্তি, পরিচ্ছন্ন পরিবেশ ও অভিজ্ঞ চিকিৎসকদের সহজবোধ্য স্বাস্থ্য পরামর্শের মাধ্যমে রোগী ও অভিভাবকদের মধ্যে দীর্ঘমেয়াদী নির্ভরতা তৈরি।',
    deliverables: [
      'Specialist Q&A health awareness short films',
      'Diagnostic facility & hygiene walkthrough',
      'Clear hotline & chamber booking end-cards',
    ],
    impactHighlight: 'Higher direct appointment calls & repeat family visits',
    image: '/src/assets/images/work_healthcare_film_1795503638399.jpg',
    imageAlt: 'Bright modern hospital and diagnostic center lobby with calm natural architectural daylight',
  },
  {
    id: 'hatil-pabna-showroom',
    titleEn: 'Flagship Furniture Craft & Showroom Campaign',
    titleBn: 'ফ্ল্যাগশিপ ফার্নিচার ক্রাফট ও শোরুম ক্যাম্পেইন',
    client: 'HATIL Furniture Pabna',
    category: 'Retail & Education',
    objective: 'Showroom Footfall',
    format: 'Product Reels + Seasonal Ads',
    duration: '00:45 Commercial',
    summaryBn:
      'ফার্নিচারের সূক্ষ্ম কাঠের কাজ, প্রিমিয়াম ফিনিশিং ও শোরুমের আধুনিক ইন্টেরিয়রকে হাই-কন্ট্রাস্ট লাইটিংয়ে ধারণ করে সরাসরি শোরুম ভিজিট বাড়ানো।',
    deliverables: [
      'Macro craftsmanship & texture spotlight reels',
      'Wedding & festive showroom offer campaigns',
      'Vertical & widescreen showroom display loops',
    ],
    impactHighlight: 'Elevated showroom walk-ins during festive & wedding seasons',
    image: '/src/assets/images/work_retail_showroom_1795503638874.jpg',
    imageAlt: 'Editorial photograph of a contemporary teakwood and leather furniture flagship showroom',
  },
  {
    id: 'riverview-resort-experience',
    titleEn: 'Riverside Dining & Evening Ambience Film',
    titleBn: 'রিভারভিউ ডাইনিং ও রিসোর্ট এক্সপেরিয়েন্স ফিল্ম',
    client: 'Pabna Riverview Restaurant & Resort',
    category: 'Corporate & Brand',
    objective: 'Walk-in & Event Bookings',
    format: 'Ambience Film + Culinary Reels',
    duration: '01:30 Mood Piece',
    summaryBn:
      'নদীর তীরের সান্ধ্যকালীন পরিবেশ, উষ্ণ আলোকসজ্জা ও সিগনেচার খাবারের শৈল্পিক উপস্থাপনায় পরিবার ও কর্পোরেট অতিথিদের আকর্ষণ।',
    deliverables: [
      'Twilight hospitality atmosphere film',
      'Signature dish & chef craft vertical reels',
      'Family gathering & banquet booking promos',
    ],
    impactHighlight: 'Boosted weekend table reservations & private event inquiries',
    image: '/src/assets/images/work_hospitality_resort_1795503639117.jpg',
    imageAlt: 'Warm twilight view of a riverside restaurant terrace with glowing golden lanterns over calm water',
  },
  {
    id: 'north-point-admission',
    titleEn: 'Institutional Heritage & Admission Documentary',
    titleBn: 'প্রতিষ্ঠানের শৃঙ্খলা ও ভর্তি মৌসুম ডকুমেন্টারি',
    client: 'North Point School & College',
    category: 'Retail & Education',
    objective: 'Admission Conversion',
    format: 'Campus Film + Parent Stories',
    duration: '02:15 Institutional',
    summaryBn:
      'নিরাপদ ক্যাম্পাস, সুশৃঙ্খল পাঠদান ও শিক্ষার্থীদের সার্বিক বিকাশের বাস্তব চিত্র তুলে ধরে ভর্তি মৌসুমে অভিভাবকদের আস্থা ও আবেদন সংখ্যা বৃদ্ধি।',
    deliverables: [
      'Morning campus life & academic showcase film',
      'Principal vision & guardian testimonial reels',
      'Admission deadline reminder campaign cuts',
    ],
    impactHighlight: 'Stronger parent confidence & seasonal admission inquiries',
    image: '/src/assets/images/work_education_campus_1795503639931.jpg',
    imageAlt: 'Sunlit modern brick and glass school and college campus courtyard in Bangladesh at morning golden hour',
  },
];

export interface ClientRecord {
  name: string;
  sector: string;
  productionFocusBn: string;
  index: string;
}

export const TOP_CLIENTS: ClientRecord[] = [
  {
    index: '01',
    name: 'North Point School & College',
    sector: 'Education',
    productionFocusBn: 'ক্যাম্পাস ডকুমেন্টারি ও ভর্তি ক্যাম্পেইন',
  },
  {
    index: '02',
    name: 'Palash Cadet',
    sector: 'Education & Coaching',
    productionFocusBn: 'অভিভাবক আস্থা ও সাফল্যের গল্প সিরিজ',
  },
  {
    index: '03',
    name: 'Prince International',
    sector: 'Corporate & Brand',
    productionFocusBn: 'কর্পোরেট প্রোফাইল ও ব্র্যান্ড পজিশনিং',
  },
  {
    index: '04',
    name: 'HATIL Furniture Pabna',
    sector: 'Showroom & Retail',
    productionFocusBn: 'প্রিমিয়াম প্রোডাক্ট রিলস ও শোরুম ফুটফল',
  },
  {
    index: '05',
    name: 'Barendra Housing Ltd.',
    sector: 'Real Estate',
    productionFocusBn: 'প্রজেক্ট লঞ্চ ও আর্কিটেকচারাল ফিল্ম',
  },
  {
    index: '06',
    name: 'Latif Real Estate Ltd.',
    sector: 'Real Estate',
    productionFocusBn: 'প্রোপার্টি ওয়াকথ্রু ও লিড জেনারেশন',
  },
  {
    index: '07',
    name: 'Fair Hospital & Diagnostic Center',
    sector: 'Healthcare',
    productionFocusBn: 'ডক্টর অ্যাওয়ারনেস ও পেশেন্ট ট্রাস্ট ভিডিও',
  },
  {
    index: '08',
    name: 'Pabna Riverview Restaurant & Resort',
    sector: 'Hospitality & Resort',
    productionFocusBn: 'অ্যাম্বিয়েন্স ফিল্ম ও ইভেন্ট বুকিং ক্যাম্পেইন',
  },
];

export interface ServicePackage {
  id: string;
  name: string;
  subtitleBn: string;
  priceBdt: string;
  priceLabel: string;
  cadenceEn: string;
  popular?: boolean;
  idealForBn: string;
  videoQuota: string;
  featuresBn: string[];
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'foundation',
    name: 'Foundation Growth',
    subtitleBn: 'নিয়মিত ব্র্যান্ড উপস্থিতি ও আস্থা তৈরির সূচনা',
    priceBdt: '15,000',
    priceLabel: '15,000 BDT/month',
    cadenceEn: 'BDT / month',
    idealForBn: 'স্থানীয় শোরুম, চেম্বার, রেস্তোরাঁ ও উদীয়মান ব্যবসা',
    videoQuota: '8–10 Monthly Videos',
    featuresBn: [
      'মাসে ৮–১০টি প্রফেশনাল শর্ট ভিডিও ও রিলস প্রোডাকশন',
      'মাসিক কনটেন্ট ক্যালেন্ডার ও বাংলা স্ক্রিপ্ট ডিরেকশন',
      'পাবনা সদরে অন-লোকেশন সিনেমা ক্যামেরা ও লাইটিং শুট',
      'কালার গ্রেডিং, ক্লিন অডিও মিক্সিং ও ব্র্যান্ডেড ক্যাপশন',
      'ফেসবুক ও হোয়াটসঅ্যাপ লিড কনভার্সন গাইডলাইন',
    ],
  },
  {
    id: 'accelerator',
    name: 'Growth Accelerator',
    subtitleBn: 'ধারাবাহিক লিড, ব্র্যান্ড অথরিটি ও বিক্রয় প্রবৃদ্ধি',
    priceBdt: '25,000',
    priceLabel: '25,000 BDT/month',
    cadenceEn: 'BDT / month',
    popular: true,
    idealForBn: 'হাসপাতাল, ফার্নিচার শোরুম, শিক্ষা প্রতিষ্ঠান ও আবাসন কোম্পানি',
    videoQuota: '16–20 Monthly Videos + 1 Brand Film',
    featuresBn: [
      'মাসে ১৬–২০টি হাই-রিটেনশন রিলস + ১টি প্রধান ব্র্যান্ড/ডকুমেন্টারি ফিল্ম',
      '৩-ধাপের পূর্ণাঙ্গ গ্রোথ ফানেল (Attention → Trust → Conversion)',
      'ফাউন্ডার, ডক্টর বা এক্সপার্ট ইন্টারভিউ ও স্টোরিটেলিং সেশন',
      'প্রতি মাসে ২–৩ দিন ডেডিকেটেড অন-সাইট শুট ও ডিরেকশন',
      'অ্যাড-রেডি ভার্সন ও হোয়াটসঅ্যাপ ইনকোয়ারি ফানেল অপ্টিমাইজেশন',
      'মাসিক পারফরম্যান্স রিভিউ ও পরবর্তী মাসের স্ট্র্যাটেজি আপডেট',
    ],
  },
  {
    id: 'dominance',
    name: 'Market Dominance',
    subtitleBn: 'নিজস্ব খাতে একচ্ছত্র ব্র্যান্ড নেতৃত্ব ও সর্বোচ্চ আউটপুট',
    priceBdt: '40,000',
    priceLabel: '40,000 BDT/month',
    cadenceEn: 'BDT / month',
    idealForBn: 'বৃহৎ রিয়েল এস্টেট, মাল্টি-স্পেশালিটি হাসপাতাল ও ফ্ল্যাগশিপ গ্রুপ',
    videoQuota: '30+ Monthly Videos + Priority Crew',
    featuresBn: [
      'মাসে ৩০+ প্রিমিয়াম ভিডিও (রিলস, ক্যাম্পেইন ফিল্ম ও ডকুমেন্টারি)',
      'সিনিয়র সিনেমাটোগ্রাফি ডিরেকশন (১৬+ বছরের অভিজ্ঞতা)',
      'মাল্টি-লোকেশন শুট, ড্রোন শট (প্রযোজ্য ক্ষেত্রে) ও কাস্টম সাউন্ড ডিজাইন',
      'পূর্ণাঙ্গ ইন-হাউস টিমের বিকল্প হিসেবে ডেডিকেটেড প্রোডাকশন পার্টনার',
      'সিজোনাল ও অফার ক্যাম্পেইনের জন্য প্রায়োরিটি ৪৮-ঘণ্টা এডিট সাপোর্ট',
      'সরাসরি স্ট্র্যাটেজি কনসালটেশন ও প্রতিযোগী বাজার বিশ্লেষণ',
    ],
  },
];

export const SECTOR_OPTIONS: string[] = [
  'Real Estate & Housing',
  'Healthcare & Doctors Chambers',
  'Restaurants & Hospitality',
  'Showrooms & Retail',
  'Coaching & Education',
  'Corporate & Other Business',
];

export const PACKAGE_SELECT_OPTIONS: string[] = SERVICE_PACKAGES.map(
  (pkg) => `${pkg.name} (${pkg.priceLabel})`,
);
