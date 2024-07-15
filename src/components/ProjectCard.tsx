import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconVercel from "/src/assets/svgs/icon_vercel.svg";
import { ButtonTags } from "./ButtonTags";
import { ButtonLinks } from "./ButtonLinks";
import { useState } from "react";
import { ArrowRight, Tag, X } from "lucide-react";

interface ProjectCardProps {
  image: string;
  linkGithub: string;
  linkVercel: string;
  title: string;
  description: string;
  tagProj: string;
  tagLink?: string;
}

const ProjectCard = ({
  image,
  linkGithub,
  linkVercel,
  title,
  description,
  tagProj,
  tagLink,
}: ProjectCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setIsOpenModal(false);
  };

  return (
    <div className="flex flex-col columns-1 max-h-[780px] rounded-2xl overflow-hidden bg-colorBg">
      <div className="overflow-hidden relative group" onClick={handleOpenModal}>
        <img
          className="object-100-100 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-zinc-950/15 flex items-center justify-center group-hover:hidden"></div>

        {isOpenModal && (
          <div className="fixed inset-0 bg-zinc-700/60 flex items-center justify-center z-50">
            <div className="max-w-4xl relative rounded-xl overflow-hidden">
              <button
                className="absolute top-4 right-4 w-full flex justify-end"
                onClick={handleCloseModal}
              >
                <X className="size-10 rounded-full text-white bg-emerald-500 hover:scale-125" />
              </button>
              <img src={image} alt={title} />
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 text-center p-6 space-y-4 md:max-w-md md:mx-auto">
        <div className="space-y-3 mb-4">
          <h2 className="text-zinc-100 text-xl font-extrabold font-PrimaryFont">
            Projeto
          </h2>
          <ButtonTags tagLink={tagLink} tagProj={tagProj}>
            <Tag className="size-5" />
            <p className="text-sm font-PrimaryFont">{tagProj}</p>
          </ButtonTags>
        </div>

        <h2 className="min-h-14 text-xl font-extrabold font-PrimaryFont text-colorPrimary uppercase line-clamp-2">
          {title}
        </h2>

        <p className="min-h-24 text-zinc-400 font-secondaryFont line-clamp-4">
          {description}
        </p>

        <div className="flex flex-col gap-3 md:max-w-xs md:mx-auto">
          <ButtonLinks link={linkGithub}>
            <div className="flex items-center gap-6 px-4 flex-1">
              <FontAwesomeIcon icon={faGithub} className="size-8" />
              Github
            </div>
            <div className="size-14 flex items-center justify-center bg-orange-400">
              <ArrowRight />
            </div>
          </ButtonLinks>

          <ButtonLinks link={linkVercel}>
            <div className="flex items-center gap-6 px-4 flex-1">
              <img className="size-8" src={iconVercel} alt="Icon Vercel" />
              Vercel
            </div>
            <div className="size-14 flex items-center justify-center bg-orange-400">
              <ArrowRight />
            </div>
          </ButtonLinks>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
