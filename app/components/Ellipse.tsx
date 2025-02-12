import { cn } from "@/lib/utils";

interface EllipseFadeProps {
  className?: string;
}

const EllipseFade = ({ className }: EllipseFadeProps) => {
  return (
    <div className={cn("absolute z-0", className)}>
      <div className="w-20 h-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default EllipseFade;
