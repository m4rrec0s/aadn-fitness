"use client";

interface ServiceCardProps {
  title?: string;
  description?: string;
  firstImgUrl?: string;
}

export function ServiceCard({
  description = "Adicione sua descrição aqui",
  firstImgUrl,
  title = "Adicione seu título aqui",
}: ServiceCardProps) {
  return (
    <div
      className="max-w-xs w-full h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 relative group cursor-pointer overflow-hidden transition-all duration-700 z-10"
      style={{
        backgroundImage: `url(${firstImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "rgba(0, 0, 0, 0.8) 16px -9px 20px 10px inset",
        transition: "transform 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div className="text relative z-50">
        <h1
          className="font-bold text-xl md:text-3xl text-gray-50 relative"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
        >
          {title}
        </h1>
        <p
          className="font-normal text-base text-gray-50 relative my-4"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
