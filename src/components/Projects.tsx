import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import { Button } from "./Button";
import { CirclePlus } from "lucide-react";
import { DropdownButton } from "./ButtonFilterDropdown";

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
  };

  const filteredProjects = selectedTag
    ? ProjectsData.filter((project) =>
        project.tagProj.toLowerCase().includes(selectedTag.toLowerCase())
      )
    : ProjectsData;

  const uniqueTags = Array.from(
    new Set(ProjectsData.map((project) => project.tagProj))
  );

  return (
    <div
      className="max-w-[1300px] h-full mx-auto space-y-10 py-8 bg-colorBodyBg"
      id="projetos"
    >
      <h2 className="text-4xl font-semibold font-PrimaryFont text-colorPrimary uppercase underline">
        Projects
      </h2>

      <p className="text-2xl text-zinc-100">
        Aqui você encontrará uma coleção diversificada dos meus projetos de
        Desenvolvimento Frontend. Esta seleção inclui tanto trabalhos pessoais
        quanto projetos realizados em plataformas como{" "}
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

      <div className="px-8 pt-5 pb-20 bg-cyan-900 rounded-3xl space-y-6">
        <div className="flex items-center gap-3 py-4">
          <DropdownButton tags={uniqueTags} onSelectTag={handleSelectTag} />
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-16">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
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
              className="col-span-3 mx-auto rounded-lg"
            >
              Mostrar Mais
              <CirclePlus className="size-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
