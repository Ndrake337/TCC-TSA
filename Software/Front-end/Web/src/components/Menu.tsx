import Image from "next/image";
import logo from "../assets/logo.png";
import { MenuLink } from "./Menu-Link";

export function Menu() {
  return (
    <div className="flex flex-col w-1/6 p-8 bg-cyan-900 items-center gap-6 shadow-2xl ">
      <Image src={logo} className="w-1/2" alt="Logo" />
      <div className="flex flex-col w-full gap-2">
        <MenuLink link="/" title="Home" />
        <MenuLink link="/dashboard" title="Dashboard" />
        <MenuLink link="/position" title="Posição do Painel" />
        <MenuLink link="/contato" title="Contato" />
      </div>
    </div>
  );
}
