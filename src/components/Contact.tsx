import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Falha ao enviar mensagem");
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
            />
            <input
              className="w-full p-4 rounded-xl outline-none border-none bg-zinc-300 placeholder:text-zinc-800 text-lg font-medium focus:placeholder:text-zinc-950"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              className="w-full  p-4 h-40 rounded-xl outline-none border-none resize-none bg-zinc-300 placeholder:text-zinc-800 text-lg font-medium focus:placeholder:text-zinc-950"
              placeholder="Mensagem"
              name="mensagem"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>

            <Button className="w-1/2 rounded-2xl mt-6 2xs:w-full">
              Enviar Mensagem
              <MessageCircle className="size-6 group-hover:text-colorPrimary" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
