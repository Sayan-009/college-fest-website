"use client";
import React from "react";
import img from "@/public/images/img.png";
import Image from "next/image";
import { TimelineComponent } from "@/components/TimelineComponent";
import { FlowingMenuComponent } from "@/components/FlowingMenuComponent";
import { AuroraText } from "@/components/magicui/aurora-text";
import RollingGallery from "@/components/reactBits/RollingGallary";
import StickyScrollComponenet from "@/components/StickyScrollComponenet";
import BentoGridComponent from "@/components/BentoGridComponent";
import SplashCursor from "@/components/ui/splash-cursor";

export default function Home() {
  return (

    
    <div className="min-h-screen bg-stone-950 flex flex-col items-center w-full">
      <SplashCursor/>
      <div className="h-screen w-full m-0 p-0 border border-red-800">
        <Image src={img} className="cover" alt="no image found"></Image>
      </div>

      <TimelineComponent />
      <StickyScrollComponenet />
      <FlowingMenuComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <BentoGridComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <BentoGridComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <BentoGridComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white pt-8">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  );
}
