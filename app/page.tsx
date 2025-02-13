import Image from "next/image";
import EllipseFade from "./components/Ellipse";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full fixed top-0 z-50">
        <Header />
      </div>

      <section className="w-full h-screen px-5 pb-52">
        <div className="h-full w-full flex flex-col items-center justify-center relative">
          <div className="flex items-center justify-center relative">
            <h1 className="w-fit bg-clip-text text-transparent text-center left-14 bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Transforme seu{" "}
              <strong className="text-orange-500 bg-clip-text text-transparent bg-gradient-to-b from-orange-900 to-orange-500">
                corpo
              </strong>
              ,
              <br />
              Supere seus{" "}
              <strong className="text-orange-500 bg-clip-text text-transparent bg-gradient-to-b from-orange-900 to-orange-500">
                limites
              </strong>
            </h1>
            <div className="relative">
              <Image
                src="/personal.png"
                width={600}
                height={600}
                alt="Hero"
                quality={100}
                className="relative z-10 opacity-65"
              />
              <div className="z-30 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent"></div>
              {/* <EllipseFade className="bottom-0 left-1/2 transform -translate-x-1/2" /> */}
            </div>
          </div>
          <div className="flex ml-10 items-center sm:items-start gap-6">
            <Link
              href="#contact"
              className="px-5 py-3 bg-orange-500 text-white rounded-full border border-orange-900 text-xs font-bold hover:bg-orange-600 transition-colors duration-300"
            >
              Fale Conosco
            </Link>
            <Link
              href="#contact"
              className="px-5 py-3 text-white rounded-full border border-orange-500 text-xs font-bold hover:bg-orange-600 transition-colors duration-300"
            >
              Consulte Nossos Planos
            </Link>
          </div>
        </div>
      </section>

      <EllipseFade className="top-0 right-2" />
      <EllipseFade className="top-[340px] -left-10" size={100} />
    </main>
  );
}
