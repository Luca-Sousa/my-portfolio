import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
  downloadLink?: string;
}

export function Button({
  children,
  className,
  downloadLink,
  ...rest
}: ButtonProps) {
  return (
    <a href={downloadLink} download>
      <button
        {...rest}
        className={`flex items-center justify-center gap-3 p-4 bg-colorPrimary text-lg text-zinc-900 font-PrimaryFont font-medium shadow-shape hover:ring-2 hover:ring-zinc-100 hover:bg-transparent hover:text-zinc-100 transition duration-500 ease-in-out group ${className}`}
      >
        {children}
      </button>
    </a>
  );
}
