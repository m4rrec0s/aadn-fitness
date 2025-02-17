"use client";
import Link from "next/link";

export default function FaqPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Perguntas Frequentes</h1>
      <p className="text-neutral-400"></p>
      <Link href="/">Voltar para a página inicial</Link>
    </main>
  );
}
