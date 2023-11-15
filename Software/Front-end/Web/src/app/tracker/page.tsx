"use client";
import { Button } from "@/components/Button";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useEffect, useState } from "react";
import { iPanel, iPanels } from "@/interfaces/iPanels";
import axios from "axios";

export default function Dashboard() {
  const [apiData, setApiData] = useState<iPanel[]>();
  const fetchPanels = async () => {
    const res = await fetch("https://tcc-tsa-api.onrender.com/panels");
    const data: iPanels = await res.json();

    console.log(data.pannels);

    setApiData(data.pannels);
  };

  useEffect(() => {
    fetchPanels();
  }, []);

  function editPanel(id: string) {
    console.log(`Edit Panel: ${id}`);
  }

  async function deletePanel(id: string) {
    console.log(`Delete Panel: ${id}`);

    await axios.delete(`https://tcc-tsa-api.onrender.com/panels/${id}`);

    fetchPanels();
  }

  async function createPanel(name: string) {
    console.log(`Create Panel: ${name}`);

    await axios.post("https://tcc-tsa-api.onrender.com/panels", {
      name,
    });

    fetchPanels();
  }

  function generateLines() {
    const returnArray = apiData?.map((panel) => {
      return (
        <tr key={panel.id}>
          <td>{panel.name}</td>
          <td>{panel.id}</td>
          <td className="flex flex-row gap-3">
            <EditRoundedIcon
              onClick={() => {
                editPanel(panel.id);
              }}
            />
            <span>|</span>{" "}
            <DeleteRoundedIcon
              onClick={() => {
                deletePanel(panel.id);
              }}
            />
          </td>
        </tr>
      );
    });

    return returnArray;
  }

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <strong>Cadastre e consulte painéis solares no sistema</strong>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={(event) => {
          event.preventDefault();
          createPanel((event.target as any).panelName.value);
        }}
      >
        <div className="flex flex-row max-lg:flex-col gap-1 w-full ">
          <input
            name="panelName"
            type="Name"
            placeholder="Nome do Painel Solar"
          />
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
        <tbody>{generateLines()}</tbody>
      </table>
    </div>
  );
}
