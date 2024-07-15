import { useState } from "react";
import imgLogo from "/src/assets/images/imgs_perfil/logo.png";
import { Contact } from "lucide-react";

export function Nav() {
  const [active, setActive] = useState("home");

  const handleClick = (page: string) => {
    setActive(page);
  };

  return (
    <div className="max-w-[1300px] mx-auto bg-zinc-900 font-PrimaryFont font-medium uppercase shadow-shape">
      <nav className="h-20 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img className="size-20" src={imgLogo} alt="Image Logo" />
          <h2 className="text-zinc-100 tracking-widest text-2xl">Lucas</h2>
        </div>

        <ul className="h-full flex items-center gap-12">
          <li
            onClick={() => handleClick("home")}
            className={`${
              active == "home"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-zinc-100 border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="/">Home</a>
          </li>
          <li
            onClick={() => handleClick("projetos")}
            className={`${
              active == "projetos"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-zinc-100 border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="#projetos">Projetos</a>
          </li>
          <li
            onClick={() => handleClick("sobre")}
            className={`${
              active == "sobre"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-zinc-100 border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="#sobre">Sobre</a>
          </li>
          <li
            onClick={() => handleClick("contato")}
            className={`${
              active == "contato"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-zinc-100 border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="#contato">Contato</a>
          </li>
        </ul>

        <div className="size-20 flex items-center justify-center bg-colorPrimary">
          <Contact className="size-7 cursor-pointer text-zinc-900 hover:scale-125" />
        </div>
      </nav>
    </div>
  );
}
