"use client";
import React, { useState } from "react";
import { Cover } from "../components/ui/cover";
export default function Home() {
  const [content, setContent] = useState("***");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div
          onMouseEnter={() => setContent("🐖")}
          onMouseLeave={() => setContent("***")}
          onClick={() => setContent("🐖")}
        >
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            大脸妹是
            <br />
            <br />
            <Cover>{content}</Cover>
          </h1>
        </div>
      </main>
    </div>
  );
}
