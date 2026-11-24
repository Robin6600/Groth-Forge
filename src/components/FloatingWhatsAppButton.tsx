import { MessageCircle } from 'lucide-react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

export function FloatingWhatsAppButton() {
  const url = buildDirectWhatsAppUrl(
    'আসসালামু আলাইকুম Groth Forge, আমি আমার ব্যবসার ভিডিও প্রোডাকশন ও প্যাকেজ সম্পর্কে জানতে চাই।',
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Groth Forge on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#059669] text-white shadow-lg ring-1 ring-white/20 transition-transform duration-150 hover:scale-105 hover:bg-[#047857] sm:bottom-6 sm:right-6 sm:h-14 sm:w-auto sm:gap-2.5 sm:px-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden font-display text-xs font-semibold whitespace-nowrap sm:inline">
        WhatsApp Us
      </span>
    </a>
  );
}
