import Link from "next/link";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";

export function MenuMobile() {
  return (
    <div className="w-full fixed bottom-0 text-black shadow-[rgba(0,0,0,0.92)_-1px_-3px_17px_-6px] bg-white py-4 text-xs flex flex-row items-center justify-center gap-8 lg:hidden ">
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
  );
}
