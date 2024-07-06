import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonSMIconsProps {
  link: string;
  icon: IconDefinition;
}

const ButtonSMIcons: React.FC<ButtonSMIconsProps> = ({ link, icon }) => {
  return (
    <div className="h-10 w-10 cursor-pointer rounded-full ring-colorPrimary hover:ring-2 hover:scale-125">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
        <FontAwesomeIcon icon={icon} className="w-7 h-7" />
      </a>
    </div>
  );
};

export default ButtonSMIcons;