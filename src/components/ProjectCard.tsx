import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconVercel from "/src/assets/svgs/icon_vercel.svg";

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
    <div className="columns-1 max-h-[780px] rounded-2xl overflow-hidden bg-color">
      <div className="w-full overflow-hidden">
        <img
          className="object-100-100 hover:object-cover hover:scale-110"
          src={image}
          alt={title}
        />
      </div>

      <div className="w-full">
        <div className="text-center p-8 text-white">
          <div className="space-y-3 mb-4">
            <h2 className="text-xl font-extrabold font-PrimaryFont">Projeto</h2>
            <a
              href={tagLink}
              target="_blank"
              className={`${tagProj == "Danki Code" && `bg-red-500`} ${
                tagProj == "Pessoal" && `bg-lime-500`
              } ${tagProj == "Frontend Mentor" && `bg-blue-500`} ${
                tagLink !== undefined && `hover:scale-110 cursor-pointer`
              } w-3/5 mx-auto h-8 flex items-center justify-center gap-3 rounded-2xl shadow-swTags`}
            >
              <FontAwesomeIcon icon={faTag} />
              <p className="text-sm font-PrimaryFont font-semibold">
                {tagProj}
              </p>
            </a>
          </div>
          <h2 className="min-h-16 text-xl font-extrabold font-PrimaryFont text-colorPrimary uppercase">
            {title}
          </h2>
          <p className="min-h-36 text-base font-secondaryFont">{description}</p>

          <div className="flex flex-col gap-5">
            <a href={linkGithub} target="_blank">
              <button className="w-[90%] mx-auto flex items-center justify-between rounded-lg overflow-hidden bg-cyan-600 hover:scale-105 hover:shadow-boxShadowProjectCard">
                <div className="flex items-center gap-6 px-4">
                  <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
                  <p className="uppercase font-medium">Github</p>
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-colorRating">
                  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-7" />
                </div>
              </button>
            </a>

            <a href={linkVercel} target="_blank">
              <button className="w-[90%] mx-auto flex items-center justify-between rounded-lg overflow-hidden bg-cyan-600 hover:scale-105 hover:shadow-boxShadowProjectCard">
                <div className="flex items-center gap-6 px-4">
                  <img className="w-8 h-8" src={iconVercel} alt="" />
                  <p className="uppercase font-medium">Vercel</p>
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-colorRating">
                  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-7" />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
