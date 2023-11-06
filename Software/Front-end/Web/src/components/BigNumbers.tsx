import { iBigNumbersProps } from "@/interfaces/iBigNumbersProps";

export function BigNumbers(props: iBigNumbersProps) {
  return (
    <div className="flex flex-col items-center py-4 px-24 shadow-lg rounded-lg grow ">
      <strong className="text-xl">{props.title}</strong>
      <strong>
        {props.value} {props.units}
      </strong>
    </div>
  );
}
