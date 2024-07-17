import { useState } from "react";
import imgLogo from "/src/assets/images/imgs_perfil/logo.png";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

export function Nav() {
  const [active, setActive] = useState("home");

  const handleClick = (page: string) => {
    setActive(page);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const letterAnimation = {
    hover: {
      y: [0, -5, 5, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    initial: {
      y: 0,
    },
  };

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  return (
    <div className="max-w-[1300px] mx-auto bg-zinc-900 font-PrimaryFont font-medium uppercase shadow-shape xl:max-w-full xl:mx-6 md:mx-0">
      <nav className="h-20 flex justify-between items-center sm:flex-col sm:h-36 sm:py-2">
        <div className="flex items-center gap-8">
          <img
            className="size-20 sm:rounded-full sm:size-14 pointer-events-none"
            src={imgLogo}
            alt="Image Logo"
          />
          <h2 className="text-zinc-100 tracking-widest text-2xl">Lucas</h2>
        </div>

        <ul className="h-full flex items-center gap-12 lg:gap-6 md:mr-8 sm:mr-0">
          {menuItems.map((item) => (
            <motion.li
              key={item.label}
              onClick={() => handleClick(item.label.toLowerCase())}
              className={`${
                active === item.label.toLowerCase()
                  ? "h-full text-colorPrimary border-b-4 border-colorPrimary"
                  : "text-zinc-100 border-b-0"
              } hover:text-colorPrimary flex items-center`}
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
            >
              <a href={item.href}>
                {item.label.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="size-20 flex items-center justify-center bg-colorPrimary md:hidden">
          <motion.div
            className="box"
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <BriefcaseBusiness className="size-7 text-zinc-900" />
          </motion.div>
        </div>
      </nav>
    </div>
  );
}
