import imgAbout from "../assets/about/About.svg";
import AboutSection1 from "../assets/about/About-Section-1.png";
import AboutSection2 from "../assets/about/About-Section-2.png";
import AboutSection3 from "../assets/about/About-Section-3.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export function About() {
  const slides = [
    {
      image: AboutSection1,
      text: "Atualmente sou graduando de Ciências da Computação, no Instituto Federal do Ceará (IFCE) e estou me aprofundando em fundamentos de computação e programação. Paralelamente aos estudos acadêmicos, tenho procurado expandir meus conhecimentos online nas plataformas Danki Code, RocketSeat e canais de programação e tecnologias no YouTube, dentre outras.",
    },
    {
      image: AboutSection2,
      text: "Na minha jornada de aprendizado na área Front-End, desenvolvi habilidades nas linguagens e nas tecnologias HTML, CSS, JavaScript e TypeScript. Eu também faço uso de frameworks como TailwindCSS e ReactJS, que proporcionam um visual agradável e reativo. Estou sempre à procura de mais desafios para entregar a melhor e mais inovadora solução que puder.",
    },
    {
      image: AboutSection3,
      text: "Tenho desenvolvido muitas aplicações práticas, principalmente com a plataforma online Frontend Mentor, o que tem solidificado os meus conhecimentos ainda mais, principalmente por conta dos designs profissionais que a plataforma possui, o que tem elevado a minha prática.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      className="max-w-[1300px] mx-auto space-y-10 py-8 bg-colorBodyBg xl:px-6"
      id="sobre"
    >
      <h2 className="text-4xl font-semibold font-PrimaryFont text-colorPrimary uppercase underline lg:text-3xl sm:text-2xl">
        Sobre
      </h2>

      <div className="text-center flex items-center gap-10 lg:flex-col">
        <img
          className="w-2/5 h-auto mx-auto mb-8 lg:w-1/2 md:hidden"
          src={imgAbout}
          alt="Image About"
        />

        <div className="w-3/5 flex flex-col items-center lg:w-full">
          <div className="flex items-center lg:gap-4">
            <button onClick={prevSlide} className="xs:hidden">
              <ArrowLeftCircle className="size-8 text-zinc-600 hover:text-colorPrimary hover:scale-125 focus:outline-none" />
            </button>

            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center"
                style={{ display: currentSlide === index ? "block" : "none" }}
              >
                <img
                  className="w-96 h-64 mx-auto mb-8 xs:w-80 xs:h-56"
                  src={slide.image}
                  alt={`About Section ${index + 1}`}
                />
                <p className="flex-1 min-h-48 h-full text-zinc-400 text-lg font-medium font-secondaryFont max-w-2xl xl:max-w-xl xl:min-h-52 sm:text-base">
                  {slide.text}
                </p>
              </motion.div>
            ))}

            <button onClick={nextSlide} className="xs:hidden">
              <ArrowRightCircle className="size-8 text-zinc-600 hover:text-colorPrimary hover:scale-125 focus:outline-none" />
            </button>
          </div>

          <div className="flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mt-2 size-4 rounded-full focus:outline-none xs:mt-4 ${
                  currentSlide === index
                    ? "bg-colorPrimary scale-125"
                    : "bg-zinc-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
