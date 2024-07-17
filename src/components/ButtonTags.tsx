import React, { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import ProjectsData from "./ProjectsData";

const generateTagVariants = () => {
  const tags = ProjectsData.map((project) => project.tagProj);
  const uniqueTags = Array.from(new Set(tags));

  const tagColors: { [key: string]: string } = {
    "Danki Code": "bg-red-500",
    Pessoal: "bg-lime-500",
    "Frontend Mentor": "bg-blue-500",
  };

  const variants = uniqueTags.reduce((acc, tag) => {
    acc[tag] = tagColors[tag] || "bg-gray-500";
    return acc;
  }, {} as { [key: string]: string });

  return variants;
};

const tagVariants = tv({
  base: "px-4 mx-auto h-8 flex items-center justify-center gap-3 rounded-2xl shadow-swTags text-zinc-900 font-semibold",

  variants: {
    tagProj: generateTagVariants(),
    hoverEffect: {
      true: "hover:scale-105 cursor-pointer transition duration-300 ease-in-out",
    },
  },

  defaultVariants: {
    hoverEffect: false,
  },
  
});

interface TagProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof tagVariants> {
  tagLink?: string;
  tagProj?: string;
  children: ReactNode;
}

export function ButtonTags({ tagLink, tagProj, children}: TagProps) {
  const handleClick = () => {
    if (tagLink) {
      window.open(tagLink, "_blank", "noopener noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        tagLink
          ? tagVariants({ tagProj, hoverEffect: true })
          : tagVariants({ tagProj })
      }
      disabled={!tagLink}
    >
      {children}
    </button>
  );
}
