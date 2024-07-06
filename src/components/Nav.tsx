import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("home");

  const handleClick = (page: string) => {
    setActive(page);
  };

  return (
    <div className="max-w-[1300px] mx-auto text-lg text-white bg-colorBlack font-PrimaryFont uppercase shadow-boxShadowNav">
      <nav className="h-20 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img
            className="w-20 h-20"
            src="../../public/images/imgs_perfil/logo.png"
            alt=""
          />
          <h2 className="font-medium tracking-widest text-2xl">Lucas</h2>
        </div>
        <ul className="h-full flex gap-10 mr-24 items-center group text-base font-medium">
          <li
            onClick={() => handleClick("home")}
            className={`${
              active == "home"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-colorWhite border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="/">Home</a>
          </li>
          <li
            onClick={() => handleClick("projetos")}
            className={`${
              active == "projetos"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-colorWhite border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="#projetos">Projetos</a>
          </li>
          <li
            onClick={() => handleClick("sobre")}
            className={`${
              active == "sobre"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-colorWhite border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="#sobre">Sobre</a>
          </li>
          <li
            onClick={() => handleClick("contato")}
            className={`${
              active == "contato"
                ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                : "text-colorWhite border-b-0"
            } hover:text-colorPrimary flex items-center`}
          >
            <a href="#sobre">Contato</a>
          </li>
        </ul>
        <div className="h-20 w-20 flex items-center justify-center bg-colorPrimary">
          <FontAwesomeIcon
            icon={faUserTie}
            className="w-8 h-8 hover:scale-125 text-colorBlack"
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
