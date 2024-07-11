import { useState } from "react";
import { Filter, FilterX, Tag, X } from "lucide-react";

interface ButtonFilterDropdownProps {
  tags: string[];
  onSelectTag: (tag: string | null) => void;
}

export function DropdownButton({
  tags,
  onSelectTag,
}: ButtonFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    onSelectTag(tag);
    setIsOpen(false);
  };

  const handleClearSelection = () => {
    setSelectedTag(null);
    onSelectTag(null);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10 ml-auto">
      <button
        onClick={toggleDropdown}
        className="flex gap-2 items-center px-4 py-3 rounded-md shadow-shape bg-cyan-400 font-medium text-cyan-900 hover:ring-2 hover:ring-cyan-400 hover:text-cyan-200 hover:bg-transparent"
      >
        {selectedTag ? selectedTag : "Filtrar Projetos"}
        {isOpen ? (
          <FilterX className="size-5" />
        ) : (
          <Filter className="size-5" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md overflow-hidden shadow-shape bg-cyan-600 ring-1 ring-cyan-800 ring-opacity-5">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleSelectTag(tag)}
                className="flex items-center gap-2 w-full px-4 py-2 text-left font-semibold text-cyan-100 hover:bg-cyan-500 hover:scale-x-105 hover:text-cyan-50"
              >
                <Tag className="size-4" />
                {tag}
              </button>
            ))}
            <div className="w-full h-px bg-cyan-700"></div>
            <button
              onClick={handleClearSelection}
              className="flex items-center gap-2 w-full px-4 py-2 text-left font-semibold text-cyan-100 hover:bg-cyan-500 hover:scale-x-105 hover:text-cyan-50"
            >
              <X className="size-5" />
              Limpar Filtro
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
