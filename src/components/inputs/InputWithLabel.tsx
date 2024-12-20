import { IInputWithLabel } from "@/shared/types";
import { twMerge as tw } from "tailwind-merge";

export default function InputWithLabel({
  inputProps,
  label,
  labelSpan,
  className,
  error,
}: IInputWithLabel) {
  return (
    <div className="flex flex-col items-start gap-2 text-lg text-color-text-2">
      <label htmlFor={inputProps.id} className="text-base max-2xl:text-sm">
        {label}
        <span className="text-color-secondary-2">{labelSpan}</span>
      </label>
      <input
        {...inputProps}
        className={tw(
          `bg-color-secondary p-3 px-5 w-full text-color-text-3 duration-300 transition-all
           ease-in-out outline-0 focus-within:outline-color-secondary-2 focus-within:outline-2
           outline-transparent text-base
           max-2xl:text-sm`,
          className
        )}
      />
    </div>
  );
}
