import Head from "next/head";
import Image from "next/image";
import Highlight from "@/components/highlight";
import clsx from "clsx";
import SocmedList from "@/components/socmed-list";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-zinc-900 w-full box-pixel h-[2000px] relative">
        {/* <div className="absolute w-full h-full bg-red-400 z-50 backdrop-blur-md bg-opacity-25">
          loader
        </div> */}
        <div className="relative w-full bg-zinc-900 h-[450px] xs:h-[550px] sm:h-[650px] overflow-hidden dust">
          <div className="backlight digital relative overflow-hidden">
            <div className="bg-orange-600 absolute left-[55%] top-0 z-10 h-full rounded-full w-2"></div>
            <div className="bg-orange-600 absolute left-[60%] rotate-[25deg] top-0 z-10 h-full rounded-full w-2"></div>
            <div className="bg-orange-600 absolute left-[1%] -rotate-[35deg] top-0 z-10 h-full rounded-full w-2"></div>
          </div>
          <div>
            <Highlight />
          </div>
          <Image
            src="/images/me.png"
            height={550}
            width={580}
            alt="me"
            className="absolute right-0 md:right-[15%] lg:right-[0%] xl:right-[10%] -top-10 animate-loop z-10"
          />
        </div>
        <nav
          className={clsx(
            "h-[80px] backdrop-blur-sm bg-zinc-300 rotate-[2deg] w-[105%] relative -left-4 top-[-32px] mosaic",
            "border-t-8 border-orange-600 z-10",
          )}
        >
          <div className="absolute lg:hidden z-20 left-8 sm:left-12 md:left-24 -top-[100%] bg-zinc-900 rounded-full p-2 shadow shadow-orange-600">
            <SocmedList index={1} />
          </div>
          <div className="absolute right-16 -top-[100%] lg:hidden bg-zinc-900 p-2 rounded-lg">
            <h1
              data-text="Kukuh Baiquni;"
              className={clsx(
                "text-4xl font-rajdhani text-gray-700 name-effect-shorted",
                "font-semibold",
              )}
            >
              Kukuh Baiquni;
            </h1>
          </div>
          <ul className="flex gap-40 text-zinc-900 text-opacity-100 justify-center items-center h-full anchor-nav text-xl font-semibold">
            <li>About Me</li>
            <li>Skills</li>
            <li>Experiences</li>
            <li>Portfolios</li>
          </ul>
          <div className="bg-zinc-900 flex text-orange-600 py-1">
            <p className="marquee">
              Web Development - Mobile Apps Development - Data Visualization - Web Development -
              Mobile Apps Development - Data Visualization - Web Development - Mobile Apps
              Development - Data Visualization - Web Development - Mobile Apps Development - Data
              Visualization -
            </p>
            <p className="marquee">
              - Web Development - Mobile Apps Development - Data Visualization - Web Development -
              Mobile Apps Development - Data Visualization - Web Development - Mobile Apps
              Development - Data Visualization - Web Development - Mobile Apps Development - Data
              Visualization -
            </p>
          </div>
        </nav>
        <div className="pl-36 mt-12 text-gray-400">
          <h4 className="font-semibold text-lg font-rajdhani">
            Available for working on your project as freelancer
          </h4>
          <p className="font-mono">
            response time: <span className="text-green-500">ASAP</span>
          </p>
          <a
            className="bg-green-700 w-[180px] justify-center text-white flex items-center px-4 py-1 mt-4 rounded-full gap-2"
            href="https://wa.me/+6282119030614"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with me
            <i className="bx bxl-whatsapp text-xl"></i>
          </a>
        </div>
        <footer className="absolute bottom-0 text-center text-gray-400 w-full">
          © Kukuh Baiquni
        </footer>
      </main>
    </>
  );
}
