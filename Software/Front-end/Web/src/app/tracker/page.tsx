import { Button } from "@/components/Button";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <strong>Cadastre e consulte painéis solares no sistema</strong>
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-row max-lg:flex-col gap-1 w-full ">
          <input type="Name" placeholder="Nome do Painel Solar" />
        </div>
        <Button label="Cadastrar" type="submit" />
      </form>

      <div className="w-full h-[1px] bg-black rounded-3xl" />
      <table>
        <thead>
          <tr>
            <th>Nome Do Painel</th>
            <th>ID do Painel</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
