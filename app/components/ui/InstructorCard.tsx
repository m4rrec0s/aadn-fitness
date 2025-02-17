import { Card, CardContent } from "@/app/components/ui/card";
import { Dumbbell } from "lucide-react";
import Image from "next/image";

interface InstructorCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function InstructorCard({
  name,
  position,
  imageUrl,
}: InstructorCardProps) {
  return (
    <Card className="relative w-64 h-64 flex-shrink-0 bg-transparent overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardContent className="p-0 h-full w-full relative">
        <Image
          src={
            imageUrl ||
            "https://i.pinimg.com/736x/94/3d/aa/943daa247d8aedb75846c6fe5f328722.jpg"
          }
          alt={`${name}, ${position}`}
          className="object-cover -z-10"
          fill
          sizes="(max-width: 256px) 100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-lg">
            {name}
          </h3>
          <p className="text-orange-200 text-sm font-semibold drop-shadow-md flex items-center">
            <Dumbbell className="w-4 h-4 mr-2" />
            {position}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
