import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { MenuLink } from "./Menu-Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
export function Menu() {
  return (
    <div className="flex">
      <div className="flex flex-col w-52 p-8 bg-cyan-900 items-center gap-6 shadow-2xl max-lg:hidden">
        <Image src={logo} className="w-1/2" alt="Logo" />
        <nav className="flex flex-col w-full gap-2">
          <MenuLink link="/" title="Home" />
          <MenuLink link="/dashboard" title="Dashboard" />
          <MenuLink link="/tracker" title="Tracker" />
          <MenuLink link="/contato" title="Contato" />
        </nav>
      </div>

      <div className="w-full fixed bottom-0 text-black shadow-[rgba(0,0,0,0.92)_-1px_-3px_17px_-6px] bg-white py-4 text-xs flex flex-row items-center justify-center gap-8 lg:hidden">
        <div></div>
        <Link href="/" className="flex flex-col items-center p-0">
          <HomeRoundedIcon />
          <span>Home</span>
        </Link>

        <Link href="/dashboard" className="flex flex-col items-center p-0">
          <DashboardRoundedIcon />
          <span>Dashboard</span>
        </Link>

        <Link href="/tracker" className="flex flex-col items-center p-0">
          <RadarRoundedIcon />
          <span>Tracker</span>
        </Link>

        <Link href="/contato" className="flex flex-col items-center p-0">
          <ChatRoundedIcon />
          <span>Contato</span>
        </Link>
      </div>
    </div>
  );
}
