import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, className }: Props) {
  return (
    <div className={`flex items-center opacity-80 ${className}`}>
      <span className="sr-only">Posted on:</span>
      <span className={`font-sans text-xs font-bold uppercase tracking-wide`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <>{date}</>;
};
