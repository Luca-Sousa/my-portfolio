import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./ButtonDefault";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ButtonSMIcons from "./ButtonSMIBanner";

const Banner = () => {
  return (
    <div className="max-w-[1300px] h-full mx-auto text-white flex items-center justify-center">
      <div className="h-full flex flex-col justify-center gap-12 basis-3/5">
        <h2 className="text-5xl font-bold leading-tight uppercase font-PrimaryFont">
          Hi, Eu Sou Lucas Sousa! <br /> Desenvolvedor{" "}
          <span className="text-colorPrimary">Front-End</span>
        </h2>
        <p className="max-w-2xl text-lg text-colorBody font-medium font-secondaryFont">
          I'm a passionate UI/UX designer with a mission to create delightful
          and intuitive digital experiences. With a strong foundation in design
          principles and a keen eye for detail, I specialize in translating
          complex ideas into user-friendly interfaces that captivate and engage.
        </p>
        <div className="flex items-center gap-20 mt-6 ">
          <Button title="Download Cv" icon={faCloudArrowDown} />

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
      <div className="h-full flex items-center justify-center basis-2/5">
        <img
          className="h-4/6 rounded-full ring-8 ring-colorPrimary"
          src="../../public/images/imgs_perfil/perfil-lucas.png"
          alt="Banner Image Perfil"
        />
      </div>
    </div>
  );
};

export default Banner;
