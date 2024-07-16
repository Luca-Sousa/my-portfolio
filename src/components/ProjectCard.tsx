import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconVercel from "/src/assets/svgs/icon_vercel.svg";
import { ButtonTags } from "./ButtonTags";
import { ButtonLinks } from "./ButtonLinks";
import { useState } from "react";
import { ArrowRight, Tag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

  // Variante para animação do modal
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.4,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col columns-1 max-h-[780px] rounded-2xl overflow-hidden bg-colorBg">
      <div className="overflow-hidden relative group" onClick={handleOpenModal}>
        <motion.img
          className="object-100-100 group-hover:cursor-pointer"
          src={image}
          alt={title}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-zinc-950/15 flex items-center justify-center group-hover:hidden"></div>

        <AnimatePresence>
          {isOpenModal && (
            <div className="fixed inset-0 bg-zinc-950/70 flex items-center justify-center z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                className="max-w-fit relative rounded-3xl bg-zinc-700 overflow-hidden shadow-boxShadowProjectCard"
                exit="hidden"
                variants={modalVariants}
              >
                <button
                  className="absolute top-4 right-4 w-full flex justify-end"
                  onClick={handleCloseModal}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                    }}
                  >
                    <X className="size-8 rounded-full text-white bg-emerald-500 hover:bg-emerald-600" />
                  </motion.div>
                </button>

                <img
                  className="max-h-[500px] lg:max-h-[400px] sm:max-h-80 2xs:max-h-60"
                  src={image}
                  alt={title}
                />

                <div className="p-4 space-y-4 max-w-xl mx-auto text-center lg:max-w-lg sm:max-w-sm 2xs:max-w-80">
                  <h2 className="text-xl font-extrabold font-PrimaryFont text-colorPrimary uppercase">
                    {title}
                  </h2>

                  <p className="text-zinc-200 font-secondaryFont">
                    {description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
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
