"use client";
import { iMenuLinkProps } from "@/interfaces/iMenuLinkProps";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function MenuLink(props: iMenuLinkProps) {
  const router = useRouter();

  return (
    <Link
      key={props.link}
      href={props.link}
      className="max-lg:active:bg-cyan-950 max-lg:rounded-r-full p-3 -ml-12 pl-12"
    >
      {props.title}
    </Link>
  );
}
