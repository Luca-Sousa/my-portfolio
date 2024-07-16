import { useState } from "react";
import { Filter, FilterX, Tag, X } from "lucide-react";
import { motion } from "framer-motion";

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

  // Variante para animação dos itens da esquerda para a direita
  const itemVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative inline-block text-left z-10 ml-auto">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={toggleDropdown}
        className="flex gap-2 items-center px-4 py-3 rounded-md shadow-shape bg-cyan-400 font-medium text-cyan-900 hover:ring-2 hover:ring-cyan-400 hover:text-cyan-200 hover:bg-transparent"
      >
        {selectedTag ? selectedTag : "Filtrar Projetos"}
        {isOpen ? (
          <FilterX className="size-5" />
        ) : (
          <Filter className="size-5" />
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md overflow-hidden shadow-shape bg-cyan-600 ring-1 ring-cyan-800 ring-opacity-5"
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {tags.map((tag, index) => (
              <motion.button
                key={tag}
                onClick={() => handleSelectTag(tag)}
                className="flex items-center gap-2 w-full px-4 py-2 text-left font-semibold text-cyan-100 hover:bg-cyan-500 hover:scale-x-105 hover:text-cyan-50"
                variants={itemVariant}
                custom={index}
              >
                <Tag className="size-4" />
                {tag}
              </motion.button>
            ))}
            <div className="w-full h-px bg-cyan-700"></div>
            <motion.button
              onClick={handleClearSelection}
              className="flex items-center gap-2 w-full px-4 py-2 text-left font-semibold text-cyan-100 hover:bg-cyan-500 hover:scale-x-105 hover:text-cyan-50"
              variants={itemVariant}
            >
              <X className="size-5" />
              Limpar Filtro
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
