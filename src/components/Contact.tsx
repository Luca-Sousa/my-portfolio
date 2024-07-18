import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import emailjs from "emailjs-com";
import { MessageEmailSend } from "./MessageEmailSend";
import { AnimatePresence, motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await emailjs.send(
        "service_5894apa", // Service ID
        "template_acmy4nx", // Template ID
        formData,
        "vGQ35hBLrqA9E8JZU" // ID
      );
      if (response.status === 200) {
        setSuccessMessage("Mensagem enviada com sucesso!");
        setTimeout(() => {
          setSuccessMessage("");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        alert("Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Falha ao enviar mensagem");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[1300px] h-fit mx-auto space-y-10 pt-8" id="contato">
      <div className="space-y-10 xl:px-6">
        <h2 className="text-4xl font-semibold font-PrimaryFont text-colorPrimary uppercase underline lg:text-3xl sm:text-2xl">
          Contato
        </h2>
        <p className="text-xl text-zinc-100">
          Entre em contato ou envie-me um e-mail diretamente para{" "}
          <a
            className="font-bold text-colorPrimary hover:underline"
            href="mailto:luke.sousa.dev@gmail.com"
          >
            luke.sousa.dev@gmail.com
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-bgContact bg-cover bg-right-top rounded-xl xl:rounded-none"
      >
        <div className="bg-zinc-800/50 xl:bg-zinc-800/70 md:bg-zinc-800/90">
          <div className="pl-8 py-16 max-w-xl flex flex-col gap-6 md:mx-auto md:items-center md:px-6">
            <input
              className="w-full p-4 rounded-xl outline-none border-none bg-zinc-300 placeholder:text-zinc-800 text-lg font-medium focus:placeholder:text-zinc-950"
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              className="w-full p-4 rounded-xl outline-none border-none bg-zinc-300 placeholder:text-zinc-800 text-lg font-medium focus:placeholder:text-zinc-950"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              className="w-full  p-4 h-40 rounded-xl outline-none border-none resize-none bg-zinc-300 placeholder:text-zinc-800 text-lg font-medium focus:placeholder:text-zinc-950"
              placeholder="Mensagem"
              name="mensagem"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>

            <Button
              type="submit"
              className={`w-1/2 rounded-2xl mt-6 2xs:w-full ${
                isLoading ? "cursor-wait" : ""
              }`}
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
              <MessageCircle className="size-6 group-hover:text-colorPrimary" />
            </Button>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-x-0 top-4 mx-auto max-w-md xs:max-w-72 z-50"
          >
            <MessageEmailSend message={successMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
