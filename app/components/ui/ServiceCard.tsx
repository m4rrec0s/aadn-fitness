"use client";

interface ServiceCardProps {
  title?: string;
  description?: string;
  firstImgUrl?: string;
  secondImgUrl?: string;
}

export function ServiceCard({
  description = "Adicione sua descrição aqui",
  firstImgUrl,
  secondImgUrl,
  title = "Adicione seu título aqui",
}: ServiceCardProps) {
  return (
    <div
      className="max-w-xs w-full h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 relative group cursor-pointer overflow-hidden bg-opacity-50 transition-all duration-300"
      style={{
        backgroundImage: `url(${firstImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "rgba(0, 0, 0, 0.8) 16px -9px 20px 10px inset",
      }}
      onMouseEnter={(e) => {
        if (secondImgUrl) {
          e.currentTarget.style.backgroundImage = `url(${secondImgUrl})`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = `url(${firstImgUrl})`;
      }}
    >
      <div className="text relative z-50">
        <h1 className="font-bold text-xl md:text-3xl text-gray-50 shadow-sm relative">
          {title}
        </h1>
        <p className="font-normal text-base text-gray-50 shadow-sm relative my-4">
          {description}
        </p>
      </div>
    </div>
  );
}
