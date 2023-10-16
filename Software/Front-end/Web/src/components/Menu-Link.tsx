import { iMenuLinkProps } from "@/interfaces/iMenuLinkProps";

export function MenuLink(props: iMenuLinkProps) {
  return (
    <a href={props.link}>
      <div className="bg-cyan-950 rounded-r-full p-3 -ml-12 -mr-8">
        <span className="p-12">{props.title}</span>
      </div>
    </a>
  );
}
