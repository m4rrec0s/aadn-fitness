"use client";

import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import EllipseFade from "./components/Ellipse";
import { ServiceCard } from "./components/ui/ServiceCard";
import { PlanCard } from "./components/ui/PlanCard";
import { List, Dumbbell, Heart, Star, Instagram, Facebook } from "lucide-react";
import InstructorCard from "./components/ui/InstructorCard";
import { useState } from "react";

export default function Home() {
  const [selectedPlanType, setSelectedPlanType] = useState("individual");

  const features = [
    {
      title: "Treinamento Orientado",
      description: "Acompanhamento personalizado para cada aluno.",
      icon: (
        <List className="absolute bottom-[-15px] right-[-20px] w-20 h-20 text-white opacity-10" />
      ),
    },
    {
      title: "Equipamentos Modernos",
      description: "Aparelhos de última geração para seu treino.",
      icon: (
        <Dumbbell className="absolute bottom-[-15px] right-[-20px] w-20 h-20 text-white opacity-10" />
      ),
    },
    {
      title: "Ambiente Saudável",
      description: "Espaço limpo e acolhedor para todos.",
      icon: (
        <Heart className="absolute bottom-[-15px] right-[-20px] w-20 h-20 text-white opacity-10" />
      ),
    },
    {
      title: "Alta Satisfação",
      description: "Clientes satisfeitos com nossos serviços.",
      icon: (
        <Star className="absolute bottom-[-15px] right-[-20px] w-20 h-20 text-white opacity-10" />
      ),
    },
  ];

  return (
    <main className="relative w-screen h-screen bg-black text-white overflow-x-hidden">
      <div className="w-full fixed top-0 z-50">
        <Header />
      </div>

      <section
        className="w-full h-screen flex flex-col items-center justify-center relative px-5 sm:pb-[5vh] xl:px-20"
        id="home"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
              Transforme seu{" "}
              <span className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
                corpo,
              </span>
              <br /> Supere seus{" "}
              <span className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
                limites
              </span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-lg">
              Nossa academia oferece estrutura completa e treinadores
              especializados para você atingir seus resultados com eficiência.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-800 transition"
              >
                Comece Agora
              </Link>
              <Link
                href="#plans"
                className="px-6 py-3 border border-orange-500 text-white rounded-full font-bold hover:bg-orange-800 transition"
              >
                Consulte Planos
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex max-sm:justify-center justify-end w-full">
            <Image
              src="/personal.png"
              width={500}
              height={500}
              alt="Personal Trainer"
              quality={100}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 sm:left-[15%] lg:left-[20%] max-sm:hidden border bg-gray-700 border-gray-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold">
              +200 Membros Ativos
            </div>
            <div className="absolute -bottom-4 sm:-right-[10%] 2xl:-right-[20%] max-sm:hidden border bg-gray-700 border-gray-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold">
              +90% de Satisfação
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative px-5 lg:px-20 -top-10">
        <ul className="max-sm:space-y-8 w-full flex max-sm:flex-col items-center z-20">
          <li className="flex flex-col items-center text-center space-y-2">
            <div className="w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-orange-500">
                96% de clientes satisfeitos
              </h2>
              <p className="text-neutral-400">
                Nossos membros amam seus resultados e experiência
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <div className="w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-orange-500">
                Treinadores Especializados
              </h2>
              <p className="text-neutral-400">
                Nossa equipe é composta por profissionais qualificados
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <div className="w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-orange-500">
                Estrutura Completa
              </h2>
              <p className="text-neutral-400">
                Equipamentos modernos e ambiente acolhedor
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <div className="w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-orange-500">
                Resultados Garantidos
              </h2>
              <p className="text-neutral-400">
                Acompanhamento contínuo para você atingir seus objetivos
              </p>
            </div>
          </li>
        </ul>
        <div className="absolute w-full flex justify-center items-center z-0">
          <EllipseFade className="top-1/4 -left-20" size={80} />
          <EllipseFade className="top-1 -right-10" size={80} />
          <EllipseFade className="z-0 opacity-20" size={200} />
        </div>
        <div className="border border-gray-500"></div>
      </section>

      <section className="w-full py-5 relative px-5 lg:px-20" id="services">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 font-bold tracking-tight">
            Nossos{" "}
            <span className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
              Serviços
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl text-center">
            Oferecemos uma variedade de serviços para atender todas as suas
            necessidades.
          </p>
        </div>

        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full flex flex-row max-sm:flex-col gap-6 overflow-x-auto snap-mandatory snap-x mt-10 px-4 py-6 no-scrollbar [&::-webkit-scrollbar]:hidden 2xl:overflow-x-visible 2xl:justify-center">
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xB5t1j6cQdV7xfrowZajygGJIS9ilU238kNcH"
                title="Musculação"
                description="Aqui na aadn-fitness você encontra os melhores equipamentos da região para fazer o melhor treino possível."
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://i.pinimg.com/736x/2a/55/91/2a559155eeb18b18f2fc5eab6a6087e8.jpg"
                title="Aula de step"
                description="Passos dinâmicos e coreografias para trabalhar o corpo inteiro de forma divertida."
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7x433cfUBeWJLw7qAUs3VtycdgD2Yrx8z6QpZn"
                title="Funcional de glúteo"
                description="Exercícios intensos para fortalecer e definir glúteos, promovendo resultados visíveis."
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xx7ySiLFVZISVH8AvknwOma42eWLrPitoMNfz"
                title="Funcional coletivo"
                description="Treinos em grupo focados em diferentes capacidades físicas, trazendo motivação extra."
              />
            </div>
          </div>
        </div>

        <EllipseFade className="top-1/2 -right-20" size={150} />
      </section>

      <section
        className="w-full py-6 relative px-5 lg:px-20 -top-10"
        id="plans"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 font-bold tracking-tight">
            Nossos{" "}
            <span className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
              Planos
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl text-center">
            Escolha o plano que melhor se encaixa em sua rotina e objetivos.
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 mt-10 w-full">
          <button
            type="button"
            className={`px-6 py-3 rounded-full font-bold transition ${
              selectedPlanType === "individual"
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-neutral-400"
            }`}
            onClick={() => setSelectedPlanType("individual")}
          >
            Individual
          </button>
          <button
            type="button"
            className={`px-6 py-3 rounded-full font-bold transition ${
              selectedPlanType === "family"
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-neutral-400"
            }`}
            onClick={() => setSelectedPlanType("family")}
          >
            Família
          </button>
        </div>

        <div className="flex justify-center items-center max-sm:flex-col gap-10 mt-10 w-full">
          {selectedPlanType === "individual" ? (
            <>
              <PlanCard
                color="blue"
                title="Individual"
                value="R$ 85/mês"
                description="Plano ideal para quem está começando"
                features={[
                  "Acesso à musculação",
                  "Aulas de step",
                  "Acompanhamento de treino",
                ]}
              />
              <PlanCard
                color="green"
                title="Trimestral"
                value="R$ 70/mês"
                secondaryValue="- R$ 210,00"
                description="3 meses de treino com desconto especial"
                features={[
                  "Acesso à musculação",
                  "Aulas de step",
                  "Acompanhamento de treino",
                ]}
              />
              <PlanCard
                title="Anual"
                value="R$ 60/mês"
                secondaryValue="- R$ 720,00"
                description="Plano completo para um ano de treino"
                features={[
                  "Acesso à musculação",
                  "Aulas de step",
                  "Acompanhamento de treino",
                ]}
              />
            </>
          ) : (
            <>
              <PlanCard
                title="Dupla Mensal"
                value="R$ 80/mês por pessoa"
                secondaryValue="- R$ 160,00"
                description="Nesse plano, você e um amigo treinam juntos"
                features={[
                  "Acesso à musculação",
                  "Aulas de step",
                  "Acompanhamento de treino",
                  "Acesso para até 2 pessoas",
                ]}
              />
              <PlanCard
                title="Trio Mensal"
                value="R$ 75/mês por pessoa"
                secondaryValue="- R$ 225,00"
                description="O plano ideal para treinar com 3 amigos ou familiares"
                features={[
                  "Acesso à musculação",
                  "Aulas de step",
                  "Acompanhamento de treino",
                  "Acesso para até 3 pessoas",
                ]}
              />
            </>
          )}
        </div>
      </section>

      <section className="w-full my-6 relative px-5 lg:px-20" id="explore">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 font-bold tracking-tight">
            Aqui Você{" "}
            <span className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
              Encontra
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl text-center">
            Conheça um pouco mais sobre nossa estrutura
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-800/40 backdrop-blur-sm rounded-lg shadow-lg overflow-x-hidden overflow-y-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-orange-500">
                {feature.title}
              </h3>
              <p className="text-neutral-400">{feature.description}</p>
              {feature.icon}
            </div>
          ))}
        </div>

        <EllipseFade className="top-1/4 -left-10" size={80} />
        <EllipseFade className="top-1 -right-10" size={80} />
        <EllipseFade className="bottom-1 right-56" size={80} />
      </section>

      {/* Coaches Section */}
      <section className="w-full py-5 relative px-5 lg:px-20" id="coaches">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 font-bold tracking-tight">
            Nossos{" "}
            <span className="bg-clip-text text-transparent max-sm:text-center bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
              Treinadores
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl text-center">
            Conheça nossos treinadores especializados
          </p>
        </div>

        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full flex flex-row max-sm:flex-col max-sm:items-center gap-6 overflow-x-auto snap-mandatory snap-x mt-10 no-scrollbar [&::-webkit-scrollbar]:hidden 2xl:overflow-x-visible 2xl:justify-center">
            <InstructorCard
              name="Alison Sousa"
              position="Instrutor de Musculação"
              imageUrl=""
            />
            <InstructorCard
              name="Jefferson Santos"
              position="Instrutor de Musculação"
              imageUrl=""
            />
            <InstructorCard
              name="Lais Minelli"
              position="Instrutora de Musculação"
              imageUrl="https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7x0t4ZGGQRmWT6HUGOv8iP0NnVLKt7oMhrDEYq"
            />
            <InstructorCard
              name="Júlio Henrique"
              position="Instrutor do Funcional"
              imageUrl=""
            />
            <InstructorCard
              name="Riquelme Santos"
              position="Estagiário"
              imageUrl=""
            />
            <InstructorCard
              name="Djonathan Oliveira"
              position="Estagiário"
              imageUrl="https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xUxea9t0jdvzHrbsFYR3xufnQTX4im9PZwUWA"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full py-10 sm:py-20 flex items-center justify-center p-10"
        id="map"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Texto e Redes Sociais */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 bg-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
              Onde nos{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-900 to-orange-700 dark:from-orange-600 dark:to-orange-500">
                Achar
              </span>
            </h2>
            <p className="text-lg text-neutral-400">
              Estamos localizados na Rua José Domingos dos Santos, 31, Puxinanã
              - PB, 58115-000.
            </p>
            <p className="text-lg text-neutral-400">
              Venha nos visitar e conhecer nossa estrutura de ponta, com
              equipamentos modernos e um ambiente preparado para atender todas
              as suas necessidades fitness.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-800 transition"
              >
                Contato
              </Link>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-700 text-2xl transition"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-700 text-2xl transition"
              >
                <Facebook />
              </Link>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6608410329019!2d-35.91253026314139!3d-7.167161436158122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac210016ba0c4d%3A0xd1e8bcd1cbe015f2!2sA%C2%B2DN%20FITNESS!5e0!3m2!1spt-BR!2sbr&controls=0&theme=dark"
              aria-hidden="false"
              allowFullScreen
              title="A²DN FITNESS Location"
              className="w-full h-[370px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="w-full py-16 flex items-center justify-center relative"
        id="contact"
      >
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/aa/44/1a/aa441a830b06187280a2f71756093441.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative w-full max-w-4xl flex flex-col items-center text-center text-white p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl lg:text-5xl font-bold">Entre em Contato</h2>
          <p className="text-lg max-w-2xl mt-4">
            Tire suas dúvidas e marque seu horário de treino agora mesmo pelo
            WhatsApp.
          </p>
          <Link
            href="https://wa.me/558399014654"
            className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-700 transition"
          >
            Iniciar Chat no WhatsApp
          </Link>
          <div className="flex space-x-6 mt-6">
            <Link
              href="#"
              className="text-white text-2xl hover:text-gray-200 transition"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              className="text-white text-2xl hover:text-gray-200 transition"
            >
              <Facebook />
            </Link>
            {/* <a href="#" className="text-white text-2xl hover:text-gray-200 transition">
              <FaWhatsapp />
            </a> */}
          </div>
        </div>
      </section>

      <footer className="w-full bg-black text-neutral-400 px-5 lg:px-20 py-11 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/aadnfitness.svg"
            alt="Logo A²DN Fitness"
            width={40}
            height={40}
          />
          <span className="font-bold text-white">A²DN Fitness</span>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mt-4 md:mt-0">
          <Link href="/faq">Perguntas Frequentes</Link>
          <Link href="/terms-of-use">Termos de Uso</Link>
          <Link href="/privacy-policy">Política de Privacidade</Link>
        </div>
        <div className="mt-4 md:mt-0 text-center">
          <p>
            © {new Date().getFullYear()} A²DN Fitness. Todos os direitos
            reservados.
          </p>
          <p>
            Desenvolvedor:{" "}
            <Link
              href="https://github.com/m4rrec0s"
              target="_blank"
              className="text-white font-bold hover:underline"
            >
              Marcos Henrique
            </Link>
          </p>
        </div>
      </footer>

      {/* EllipseFades */}
      <EllipseFade className="top-1/4 -left-10" size={80} />
      <EllipseFade className="top-1 -right-10" size={80} />
      <EllipseFade className="bottom-10 -right-5 hidden sm:block" size={100} />
    </main>
  );
}
