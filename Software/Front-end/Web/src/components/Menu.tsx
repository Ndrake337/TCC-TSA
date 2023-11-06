import Image from "next/image";
import logo from "../assets/logo.png";
import { MenuLink } from "./Menu-Link";

export function Menu() {
  return (
    <div className="flex">
      <div className="flex flex-col w-52 p-8 h-full bg-cyan-900 items-center gap-6 shadow-2xl max-lg:hidden">
        <Image src={logo} className="w-1/2" alt="Logo" />
        <nav className="flex flex-col w-full gap-2">
          <MenuLink link="/" title="Home" />
          <MenuLink link="/dashboard" title="Dashboard" />
          <MenuLink link="/tracker" title="Tracker" />
          <MenuLink link="/contato" title="Contato" />
        </nav>
      </div>
    </div>
  );
}
