import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  title: string;
  icon: IconDefinition;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 p-4 bg-colorPrimary text-black font-PrimaryFont shadow-boxShadowNav hover:ring-white hover:ring-2 hover:bg-transparent hover: hover:text-white ${className}`}
    >
      <p className="text-lg font-medium">{title}</p>
      <FontAwesomeIcon className="w-6 h-6" icon={icon} />
    </button>
  );
};

export default Button;
