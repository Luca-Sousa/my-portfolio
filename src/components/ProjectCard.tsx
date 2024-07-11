import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconVercel from "/src/assets/svgs/icon_vercel.svg";
import { ArrowRight, Tag } from "lucide-react";
import { ButtonTags } from "./ButtonTags";
import { ButtonLinks } from "./ButtonLinks";

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
  return (
    <div className="columns-1 max-h-[780px] rounded-2xl overflow-hidden bg-colorBg">
      <div className="overflow-hidden relative group">
        <img
          className="object-100-100 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-zinc-950/15 group-hover:hidden"></div>
      </div>

      <div className="text-center p-6">
        <div className="space-y-3 mb-4">
          <h2 className="text-zinc-100 text-xl font-extrabold font-PrimaryFont">
            Projeto
          </h2>
          <ButtonTags
            tagLink={tagLink}
            tagProj={tagProj}
          >
            <Tag className="size-5" />
            <p className="text-sm font-PrimaryFont">{tagProj}</p>
          </ButtonTags>
        </div>

        <h2 className="min-h-16 text-xl font-extrabold font-PrimaryFont text-colorPrimary uppercase">
          {title}
        </h2>

        <p className="min-h-36 text-zinc-400 font-secondaryFont">
          {description}
        </p>

        <div className="flex flex-col gap-3">
          <ButtonLinks link={linkGithub}>
            <div className="flex items-center gap-6 px-4">
              <FontAwesomeIcon icon={faGithub} className="size-8" />
              Github
            </div>
            <div className="size-14 flex items-center justify-center bg-orange-400">
              <ArrowRight />
            </div>
          </ButtonLinks>

          <ButtonLinks link={linkVercel}>
            <div className="flex items-center gap-6 px-4">
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
