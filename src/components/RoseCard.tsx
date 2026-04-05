import type { Rose } from "@/data/roses";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

interface RoseCardProps {
  rose: Rose;
}

const RoseCard = ({ rose }: RoseCardProps) => {
  const { t } = useLanguage();
  return (
    <article className="card-product group flex flex-col items-center text-center">
      <div className="mb-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-secondary/40 p-6">
        <img
          src={rose.image}
          alt={rose.name}
          loading="lazy"
          width={512}
          height={512}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-serif text-lg font-medium text-foreground">
        <span className="text-muted-foreground">{rose.number}</span>{" "}
        {rose.name}
      </h3>

      {(rose.method || rose.type) && (
        <p className="mt-1 font-sans text-xs tracking-widest uppercase text-muted-foreground">
          {rose.method ? `${t("catalog.method")}: ${t(`method.${rose.method}` as TranslationKey)}` : `${t("catalog.type")}: ${t(`method.${rose.type}` as TranslationKey)}`}
        </p>
      )}
    </article>
  );
};

export default RoseCard;
