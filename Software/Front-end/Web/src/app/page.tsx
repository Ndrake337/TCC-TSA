import { InfoCard } from "@/components/InfoCard";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-fit items-center">
      <div className="flex flex-col items-center gap-5">
        <Image src={logo} className="w-1/5" alt="Logo" />
        <strong>Bem Vindo ao SISTEMA DE TRACKER SOLAR AUTOLIMPANTE,</strong>
        <span>Aqui vão as principais Informações do projeto</span>
        <div className="flex flex-row flex-wrap gap-5">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </main>
  );
}
