import { FileDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const DownloadPdfButton = () => {
  const { t } = useLanguage();

  return (
    <button
      onClick={() => window.print()}
      className="print:hidden group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-6 py-2.5 font-serif text-sm tracking-wide text-primary shadow-sm transition-all duration-300 hover:border-primary/60 hover:from-primary/20 hover:via-primary/10 hover:to-primary/5 hover:shadow-md active:scale-[0.97]"
      aria-label={t("catalog.downloadPdf")}
    >
      {/* Subtle animated glow on hover */}
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/5 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

      <FileDown
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
        strokeWidth={1.8}
      />
      <span>{t("catalog.downloadPdf")}</span>
    </button>
  );
};

export default DownloadPdfButton;
