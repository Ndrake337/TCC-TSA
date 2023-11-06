import { Button } from "@/components/Button";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <form className="flex flex-col">
        <div className="flex flex-row max-lg:flex-col gap-1">
          <input
            type="Name"
            className="bg-white border-2 border-solid border-gray-300"
            placeholder="Nome do Painel Solar"
          />
        </div>
      </form>
      <Button label="Cadastrar" type="submit" />
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
