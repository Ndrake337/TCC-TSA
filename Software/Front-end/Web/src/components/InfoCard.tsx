"use client";
import Image from "next/image";
import tracker from "../assets/tracker.jpg";
import * as Dialog from "@radix-ui/react-dialog";

export function InfoCard() {
  return (
    <div className="flex flex-col shadow-lg p-5 rounded-lg">
      <Image src={tracker} className="w-fit" alt="Logo" />
      <strong>title</strong>
      <span>Short text here</span>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="mt-3 rounded-lg border-solid border-2 border-cyan-500">
            Leia Mais
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black opacity-20 fixed inset-0 ease-in-out duration-300" />
          <Dialog.Content className="text-black bg-white rounded-md shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center self-center center w-3/4 p-6 h-3/4 overflow-auto">
            <Dialog.Title>
              <strong>Resumo</strong>
            </Dialog.Title>
            <div className="px-28">
              <p>
                Deve-se ater que o concomitante crescimento da sociedade
                brasileira ocorre devido ao aumento da necessidade de energia
                elétrica. Vale enfatizar que a energia elétrica produzida em
                grande parcela é proveniente das usinas hidrelétricas, fonte
                limpa e renovável. De acordo com (ABSOLAR, 2023), o Brasil tem
                como sua segunda matriz energética mais produtiva os sistemas de
                energia solar, que assim como sistemas hidrelétricos é limpa e
                renovável. Explorando a informação acima, este trabalho de
                pesquisa foi desenvolvido para produção e testes de um protótipo
                de tracker solar, um sistema que movimenta o painel ao longo do
                dia, visando extrair a máxima eficiência em geração de energia.
                Este sistema será integrado por meio de ferramentas IoT à nuvem,
                permitindo o monitoramento dos dados em tempo real para o
                usuário e por fim automatizando o sistema de limpeza periódica
                do sistema usando um sistema de captação de água da chuva para
                realizar a limpeza do painel quando notada queda de eficiência
                do mesmo. Visando este objetivo a pesquisa apresenta toda a
                teoria por trás do funcionamento do sistema, assim como
                conceituação teórica e descritiva para construção de um
                protótipo. Este utilizará uma microcontroladora ESP32 que
                integrada com a rede de internet sem fio do usuário irá coletar
                e armazenar dados para posteriormente a serem disponibilizados
                em uma interface gráfica compatível com computadores e
                dispositivos móveis.
              </p>
            </div>

            <Dialog.Close asChild>
              <button>Fechar</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
