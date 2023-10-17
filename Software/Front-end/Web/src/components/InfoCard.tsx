import Image from "next/image";
import tracker from "../assets/tracker.jpg";

export function InfoCard() {
  return (
    <div className="flex flex-col shadow-lg p-5 rounded-lg">
      <Image src={tracker} className="w-fit" alt="Logo" />
      <strong>title</strong>
      <span>Short text here</span>
    </div>
  );
}
