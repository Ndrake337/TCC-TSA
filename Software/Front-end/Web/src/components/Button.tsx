interface iButtonProps {
  label: string;
  type?: string;
}

export function Button(props: iButtonProps) {
  return (
    <button className="rounded-lg border-solid border-2 px-3 border-cyan-900">
      {props.label}
    </button>
  );
}
