import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import img from "@/public/avni-img.jpeg";

export const metadata: Metadata = {
  title: "Avni Bhardwaj",
};

export default function Page() {
  return (
    <div className="my-20 grid grid-rows-[auto_1fr_auto]">
      <main className="flex flex-col lg:flex-row justify-center items-center py-8 px-4 gap-8">
        <Image
          src={img || "/placeholder.svg"}
          width={200}
          height={200}
          alt="avni-bhardwaj-img"
          className="rounded-full w-48 h-48 lg:w-64 lg:h-64"
        />
        <div className="w-full lg:w-1/2 xl:w-1/3 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left">
            Avni Bhardwaj <span className="font-semibold block lg:inline">(Co-Founder / Executive Director)</span>
          </h2>
          <p className="text-sm md:text-base text-center lg:text-left">
            Avni Bhardwaj, a middle schooler from Challenger, is an accomplished second-degree black belt in Taekwondo
            and a passionate advocate for child nutrition and well-being. Her deep understanding of healthy food&#39;s
            vital role in early childhood inspired her to join the transformative initiative, Hunger to Hope. Through
            this endeavor, Avni is making a meaningful impact by supporting underprivileged children in Anganwadis,
            embodying a spirit of compassion, resilience, and leadership.
          </p>
        </div>
      </main>
    </div>
  );
}
