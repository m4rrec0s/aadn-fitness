"use client";

interface PlanCardProps {
  title: string;
  value: string;
  secondaryValue?: string;
  description: string;
  features: string[];
  gradientFrom?: string;
  gradientTo?: string;
}

export function PlanCard({
  title,
  value,
  secondaryValue,
  description,
  features,
  gradientFrom = "orange-600",
  gradientTo = "orange-500",
}: PlanCardProps) {
  return (
    <div
      className={`w-full max-w-[400px] h-[500px] rounded-xl mx-auto border 
        border-orange-500 bg-black 
        bg-gradient-to-r from-${gradientFrom} to-${gradientTo} 
        bg-origin-border`}
      style={{ backgroundClip: "padding-box, border-box" }}
    >
      <div className="p-4 rounded-xl h-full flex flex-col justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl font-semibold text-orange-500">
            {value}{" "}
            <span className="text-neutral-600 text-lg">{secondaryValue}</span>
          </p>
          <p className="mt-2 text-neutral-400">{description}</p>
          <ul className="mt-4 list-disc list-inside text-neutral-300">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="mt-4 py-2 px-4 bg-orange-500 text-white font-bold 
          rounded-md hover:bg-orange-700 transition"
        >
          Quero esse!
        </button>
      </div>
    </div>
  );
}
