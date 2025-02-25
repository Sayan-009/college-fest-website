
"use client";
import React from "react";
import Image from "next/image";
import image from "@/public/images/images.jpeg"
import img from "@/public/images/img.png";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { ThreeDCardComponent } from "./ThreeDCardImageComponent";

function StickyScrollComponenet() {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
            <ThreeDCardComponent img={img}/>
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <ThreeDCardComponent img={image}/>
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <ThreeDCardComponent img={img}/>
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <ThreeDCardComponent img={image}/>
        </div>
      ),
    },
  ];
  return (
    <div className="p-10 w-full">
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollComponenet;
