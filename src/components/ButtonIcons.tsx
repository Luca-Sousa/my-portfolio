import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface ButtonSMIconsProps {
  link: string;
  icon: IconDefinition;
}

export function ButtonSMIcons({ link, icon }: ButtonSMIconsProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{
        scale: 0.8,
        rotate: -360,
        borderRadius: "100%",
      }}
      className="size-10 cursor-pointer rounded-full ring-colorPrimary hover:ring-2 hover:scale-125"
      onClick={() => window.open(link, "_blank", "noopener noreferrer")}
    >
      <div className="size-full flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="size-7" />
      </div>
    </motion.button>
  );
}
