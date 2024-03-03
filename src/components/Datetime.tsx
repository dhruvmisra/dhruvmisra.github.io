import { LOCALE } from "@config";

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "xs" | "lg";
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  size = "xs",
  className,
}: Props) {
  const myDatetime = new Date(modDatetime ? modDatetime : pubDatetime);

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <span className={`italic ${size === "xs" ? "text-xs" : "text-base"}`}>
        <time dateTime={myDatetime.toISOString()}>{date}</time>
        <span className="sr-only">&nbsp;at&nbsp;</span>
      </span>
    </div>
  );
}
