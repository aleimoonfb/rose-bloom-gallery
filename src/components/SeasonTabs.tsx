import { seasons } from "@/data/seasons";

interface SeasonTabsProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const SeasonTabs = ({ activeId, onSelect }: SeasonTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {seasons.map((season) => (
        <button
          key={season.id}
          onClick={() => onSelect(season.id)}
          className={`rounded-full border px-5 py-2 font-sans text-sm transition-all duration-200 ${
            activeId === season.id
              ? "border-primary bg-primary text-primary-foreground shadow-sm"
              : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          {season.name}
        </button>
      ))}
    </div>
  );
};

export default SeasonTabs;
