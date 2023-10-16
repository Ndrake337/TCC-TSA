import Image from "next/image";
import logo from "../assets/logo.png";
import { MenuLink } from "./Menu-Link";

export function Menu() {
  return (
    <div className="flex flex-col w-1/6 p-12 rounded-r-xl bg-cyan-900 shadow-xl items-center gap-6">
      <Image src={logo} className="w-1/2" alt="Logo" />
      <div className="flex flex-col w-full">
        <MenuLink link="#" title="Home" />
        <MenuLink link="#" title="Dashboard" />
        <MenuLink link="#" title="Posição do Painel" />
        <MenuLink link="#" title="Contato" />
      </div>
    </div>
  );
}
