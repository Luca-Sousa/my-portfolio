import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData.json";
import Button from "./ButtonDefault";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  return (
    <div
      className="max-w-[1300px] h-full mx-auto space-y-10 py-8"
      id="projetos"
    >
      <h2 className="text-4xl font-semibold font-PrimaryFont text-colorPrimary uppercase underline">
        Projects
      </h2>
      <p className="text-3xl text-colorWhite capitalize">
        projetos desenvolvidos usando os designs da plataforma{" "}
        <a
          className="font-bold text-colorPrimary hover:underline"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>
        .
      </p>

      <div className="grid grid-cols-4 gap-x-10 gap-y-16 px-8 py-20 bg-cyan-800 rounded-3xl">
        {ProjectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            linkGithub={project.linkGithub}
            linkVercel={project.linkVercel}
            title={project.title}
            description={project.description}
            position={project.position}
          />
        ))}
        {visibleProjects < ProjectsData.length && (
          <Button
            onClick={showMoreProjects}
            title="Mostrar Mais"
            icon={faCirclePlus}
            className="col-span-4 mx-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
