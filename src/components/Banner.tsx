import { Button } from "./Button";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ButtonSMIcons } from "./ButtonIcons";
import imgPerfil from "/src/assets/images/imgs_perfil/perfil-lucas.png";
import { Download } from "lucide-react";

export function Banner() {
  return (
    <div className="max-w-[1300px] h-full mx-auto text-zinc-100 flex items-center justify-center">
      <div className="flex flex-col justify-center gap-12 flex-1">
        <h2 className="text-5xl font-bold leading-tight uppercase font-PrimaryFont">
          Hi, Eu Sou Lucas Sousa! <br /> Desenvolvedor{" "}
          <span className="text-colorPrimary">Front-End</span>
        </h2>

        <p className="max-w-2xl text-lg text-zinc-400 font-medium font-secondaryFont">
          I'm a passionate UI/UX designer with a mission to create delightful
          and intuitive digital experiences. With a strong foundation in design
          principles and a keen eye for detail, I specialize in translating
          complex ideas into user-friendly interfaces that captivate and engage.
        </p>

        <div className="flex items-center gap-20 mt-6">
          <Button>
            Download Cv
            <Download className="size-6" />
          </Button>

          <ul className="h-full flex items-center gap-4">
            <ButtonSMIcons
              link="https://github.com/Luca-Sousa"
              icon={faGithub}
            />
            <ButtonSMIcons
              link="https://www.linkedin.com/in/lucas-silva-0b79a72a7/"
              icon={faLinkedin}
            />
            <ButtonSMIcons
              link="https://www.facebook.com/LukeSousa21/"
              icon={faFacebook}
            />
            <ButtonSMIcons
              link="https://www.instagram.com/lk._dev/"
              icon={faInstagram}
            />
          </ul>
        </div>
      </div>

      <div className="h-full flex items-center justify-center">
        <img
          className="h-4/6 rounded-full ring-8 ring-colorPrimary"
          src={imgPerfil}
          alt="Banner Image Perfil"
        />
      </div>
    </div>
  );
}
