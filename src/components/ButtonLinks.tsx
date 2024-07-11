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
    <button
      onClick={handleClick}
      className="w-[90%] mx-auto flex items-center justify-between rounded-lg overflow-hidden text-cyan-50 bg-cyan-600 uppercase font-medium hover:scale-105 hover:shadow-boxShadowProjectCard"
    >
      {children}
    </button>
  );
}
