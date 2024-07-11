import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonSMIconsProps {
  link: string;
  icon: IconDefinition;
}

export function ButtonSMIcons({ link, icon }: ButtonSMIconsProps) {
  return (
    <button
      className="size-10 cursor-pointer rounded-full ring-colorPrimary hover:ring-2 hover:scale-125"
      onClick={() => window.open(link, "_blank", "noopener noreferrer")}
    >
      <div className="size-full flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="size-7" />
      </div>
    </button>
  );
}
