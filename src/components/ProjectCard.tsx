import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  image: string;
  linkGithub: string;
  linkVercel: string;
  title: string;
  description: string;
  position: string;
}

const ProjectCard = ({
  image,
  linkGithub,
  linkVercel,
  title,
  description,
  position,
}: ProjectCardProps) => {
  return (
    <div className="columns-1 h-[500px] rounded-2xl relative group">
      <img
        className={`w-full h-full object-100-100 object-${position} group-hover:scale-105 rounded-2xl`}
        src={image}
        alt={title}
      />
      <div className="hidden w-full h-full absolute inset-0 rounded-2xl group-hover:bg-color group-hover:block">
        <div className="text-center p-8 text-white space-y-5">
          <h2 className="text-xl font-extrabold font-PrimaryFont">
            Projeto <br />{" "}
            <span className="text-colorPrimary uppercase">{title}</span>
          </h2>
          <p className="text-base font-secondaryFont">{description}</p>

          <div className="flex flex-col gap-5">
            <a href={linkGithub} target="_blank">
              <button className="w-full flex items-center justify-between rounded-lg overflow-hidden bg-cyan-600 hover:scale-105 hover:shadow-boxShadowProjectCard">
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
              <button className="w-full flex items-center justify-between rounded-lg overflow-hidden bg-cyan-600 hover:scale-105 hover:shadow-boxShadowProjectCard">
                <div className="flex items-center gap-6 px-4">
                  <img
                    className="w-8 h-8"
                    src="../../public/svgs/icon_vercel.svg"
                    alt=""
                  />
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
