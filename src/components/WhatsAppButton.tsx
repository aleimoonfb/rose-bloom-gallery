import { MessageCircle } from "lucide-react";

const PHONE = "593996841179";
const MESSAGE = encodeURIComponent("Hola, me interesa información sobre sus rosas.");

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 print:hidden"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
