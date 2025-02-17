"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";

interface PlanCardProps {
  title: string;
  value: string;
  secondaryValue?: string;
  description: string;
  features: string[];
  color?: "orange" | "blue" | "green";
}

export function PlanCard({
  title,
  value,
  secondaryValue,
  description,
  features,
  color = "orange",
}: PlanCardProps) {
  return (
    <div className="w-[400px] h-[500px] rounded-xl bg-black neon-border">
      <div
        className={cn(
          "m-1 bg-black p-4 rounded-xl h-full flex flex-col justify-between border",
          color === "orange"
            ? "border-orange-500"
            : color === "blue"
            ? "border-blue-500"
            : "border-green-500"
        )}
      >
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p
            className={cn(
              "text-xl font-semibold",
              color === "orange"
                ? "text-orange-500"
                : color === "blue"
                ? "text-blue-500"
                : "text-green-500"
            )}
          >
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
        <Link
          href={`https://wa.me/558399014654?text=Olá,%20estou%20interessado%20no%20plano%20${encodeURIComponent(
            title
          )}%20-%20${encodeURIComponent(value)}`}
          type="button"
          target="_blank"
          className="mt-4 py-2 px-4 bg-orange-500 text-white font-bold text-center
          rounded-md hover:bg-orange-700 transition"
        >
          Quero esse!
        </Link>
      </div>
    </div>
  );
}
