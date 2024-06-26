'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-blue-50 dark:bg-gray-900");

  const handleBlueButtonClick = () => {
    setBgColor("bg-blue-500 dark:bg-blue-900");
  };

  const handleYellowButtonClick = () => {
    setBgColor("bg-yellow-200 dark:bg-yellow-600");
  };

  return (
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${bgColor}`}>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-blue-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-gray-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-blue-200 lg:p-4 lg:dark:bg-gray-800/30">
            Wassup

          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                target="_blank"
                rel="noopener noreferrer"
            >

              <Image
                  src="/cat.svg.webp"
                  alt=""
                  className="dark:invert"
                  width={100}
                  height={100}
                  priority
              />
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
          />
        </div>

        <h1 className="text-6xl font-bold text-center mt-24">
          Ihor Shashuba nr. 119786
        </h1>

        <div className="mt-8 flex space-x-4">
          <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleBlueButtonClick}
          >
            Color1
          </button>
          <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              onClick={handleYellowButtonClick}
          >
            Color2
          </button>
        </div>
      </main>
  );
}


