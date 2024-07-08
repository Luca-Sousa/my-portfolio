import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import Button from "./ButtonDefault";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [searchProj, setSearchProj] = useState("");

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProj(event.target.value);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.title.toLowerCase().includes(searchProj.toLowerCase())
  );

  return (
    <div
      className="max-w-[1300px] h-full mx-auto space-y-10 py-8"
      id="projetos"
    >
      <h2 className="text-4xl font-semibold font-PrimaryFont text-colorPrimary uppercase underline">
        Projects
      </h2>
      <p className="text-2xl text-colorWhite">
        Aqui você encontrará uma coleção diversificada dos meus projetos
        de Desenvolvimento Frontend. Esta seleção inclui tanto trabalhos
        pessoais quanto projetos realizados em plataformas como{" "}
        <a
          className="font-bold text-colorPrimary hover:underline"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>
        , onde desenvolvi aplicações web a partir dos designs disponibilizados,
        e{" "}
        <a
          className="font-bold text-colorPrimary hover:underline"
          href="https://cursos.dankicode.com/"
          target="_blank"
        >
          Danki Code
        </a>
        , onde apliquei ferramentas avançadas para aprimorar ainda mais cada
        projeto.
      </p>

      <div className="px-8 pt-5 pb-20 bg-cyan-800 rounded-3xl space-y-6">
        <div className="flex items-center gap-3 py-4">
          <input
            className="w-3/5 h-10 rounded-2xl outline-none px-8"
            type="text"
            placeholder="Pesquisar Projetos..."
            value={searchProj}
            onChange={handleSearchChange}
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="h-[780px] text-white">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCircleXmark} />
              <h2 className="uppercase">Nenhum Projeto encontrado!</h2>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-x-10 gap-y-16">
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  linkGithub={project.linkGithub}
                  linkVercel={project.linkVercel}
                  title={project.title}
                  description={project.description}
                  tagProj={project.tagProj}
                  tagLink={project.tagLink}
                />
              ))}
            {visibleProjects < filteredProjects.length && (
              <Button
                onClick={showMoreProjects}
                title="Mostrar Mais"
                icon={faCirclePlus}
                className="col-span-3 mx-auto rounded-lg"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
