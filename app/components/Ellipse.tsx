import { cn } from "@/lib/utils";

interface EllipseFadeProps {
  className?: string;
  size?: number;
  color?: string;
}

const EllipseFade = ({
  className,
  size = 80,
}: // color = "",
EllipseFadeProps) => {
  return (
    <div className={cn("absolute z-0", className)}>
      <div
        className={`bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full blur-3xl`}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default EllipseFade;
