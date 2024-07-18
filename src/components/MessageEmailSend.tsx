import { MailCheck } from "lucide-react";

interface MessageEmailSendProps {
  message: string;
}

export function MessageEmailSend({ message }: MessageEmailSendProps) {
  return (
    <div className="texte-center bg-colorPrimary text-zinc-950 font-secondaryFont font-bold uppercase flex justify-center items-center gap-4 px-8 py-5  rounded-2xl shadow-shape xs:px-4">
      {message}
      <MailCheck className="size-8" />
    </div>
  );
}
