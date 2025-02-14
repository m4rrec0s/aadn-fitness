import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import EllipseFade from "./components/Ellipse";
import { ServiceCard } from "./components/ui/ServiceCard";
import { PlanCard } from "./components/ui/PlanCard";

export default function Home() {
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

      <section className="w-full relative px-5 lg:px-20 -top-10 mb-20">
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
      </section>

      <section
        className="w-full py-5 relative px-5 lg:px-20 mb-20"
        id="services"
      >
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
                firstImgUrl="https://i.pinimg.com/736x/7a/1f/02/7a1f0261de4715fd78874ac0d42d55b1.jpg"
                secondImgUrl="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
                title="Musculação"
                description="Aqui na aadn-fitness você encontra os melhores equipamentos da região para fazer o melhor treino possível."
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://i.pinimg.com/736x/72/1c/2c/721c2c2e6a598447efe47fdc98903eb2.jpg"
                secondImgUrl="https://media.giphy.com/media/bfyaKzR4fj9C3s/giphy.gif"
                title="Aula de step"
                description="Passos dinâmicos e coreografias para trabalhar o corpo inteiro de forma divertida."
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://i.pinimg.com/736x/da/77/6f/da776f3aa046866ad2329ecca5e84868.jpg"
                secondImgUrl="https://media.giphy.com/media/l1KtXmfi5H1Yb2hyQ/giphy.gif"
                title="Funcional de glúteo"
                description="Exercícios intensos para fortalecer e definir glúteos, promovendo resultados visíveis."
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ServiceCard
                firstImgUrl="https://i.pinimg.com/736x/df/29/d7/df29d754317e7bcef8a77031076ce70d.jpg"
                secondImgUrl="https://media.giphy.com/media/xT9KVHFtfbJ4Ku6yc4/giphy.gif"
                title="Funcional coletivo"
                description="Treinos em grupo focados em diferentes capacidades físicas, trazendo motivação extra."
              />
            </div>
          </div>
        </div>

        <EllipseFade className="top-1/2 -right-20" size={150} />
      </section>

      <section
        className="w-full min-h-screen relative px-5 lg:px-20 -top-10"
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

        <div className="flex justify-center items-center max-sm:flex-col gap-3 mt-10 w-full">
          <PlanCard
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
            title="Trimestral"
            value="R$ 70/mês"
            secondaryValue="- R$ 210,00"
            description="Plano ideal para quem está começando"
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
            description="Plano ideal para quem está começando"
            features={[
              "Acesso à musculação",
              "Aulas de step",
              "Acompanhamento de treino",
            ]}
          />
        </div>
      </section>

      {/* EllipseFades */}
      <EllipseFade className="top-1/4 -left-10" size={80} />
      <EllipseFade className="top-1 -right-10" size={80} />
      <EllipseFade className="bottom-10 -right-5 hidden sm:block" size={100} />
    </main>
  );
}
