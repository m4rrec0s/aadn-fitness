import { cn } from "@/lib/utils";

interface EllipseFadeProps {
  className?: string;
  size?: number;
  color?: string;
}

const EllipseFade = ({
  className,
  size = 80,
  color = "orange-500",
}: EllipseFadeProps) => {
  return (
    <div className={cn("absolute z-0", className)}>
      <div
        className={`bg-gradient-to-r from-transparent via-${color} to-transparent rounded-full blur-3xl`}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default EllipseFade;
