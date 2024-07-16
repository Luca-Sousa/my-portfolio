import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonLinksPros extends React.ComponentProps<"button"> {
  children: ReactNode;
  link: string;
}

export function ButtonLinks({ children, link }: ButtonLinksPros) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
      className="w-[90%] mx-auto flex items-center justify-between rounded-lg overflow-hidden text-cyan-50 bg-cyan-600 uppercase font-medium hover:shadow-boxShadowProjectCard"
    >
      {children}
    </motion.button>
  );
}
