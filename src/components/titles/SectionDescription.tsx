import { interSemiboldFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function SectionDescription({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2
      className={tw(
        "text-[40px] text-color-text-3 capitalize max-2xl:text-3xl",
        interSemiboldFont.className,
        className
      )}
    >
      {text}
    </h2>
  );
}
