import { Button } from "@/components/Button";

export default function Dashboard() {
  return (
    <form className="flex flex-col gap-3 w-full">
      <input type="text" placeholder="Digite seu Nome" />
      <input type="email" placeholder="Digite seu e-mail" />
      <input type="textarea" placeholder="Mensagem" />
      <Button type="submit" label="Enviar" />
    </form>
  );
}
