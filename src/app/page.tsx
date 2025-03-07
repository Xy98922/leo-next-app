"use client";
import React, { useState } from "react";
import { Cover } from "../components/ui/cover";
export default function Home() {
  const [content, setContent] = useState("***");
  return (
    <main className="flex justify-center items-center w-screen h-screen gap-10">
      <video width="320" height="240" autoPlay loop muted controls>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div
        onMouseEnter={() => setContent("🐖")}
        onMouseLeave={() => setContent("***")}
        onClick={() => setContent("🐖")}
        className="flex justify-center items-center"
      >
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          大脸妹是
          <br />
          <br />
          <Cover>{content}</Cover>
        </h1>
      </div>
    </main>
  );
}
