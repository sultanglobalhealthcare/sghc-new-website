"use client";
import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "@/components/Badge";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    number: "01",
    title: (
      <>
        THE <br /> CONNECTION
      </>
    ),
    text: `You reach out. We listen. It starts with a simple conversation. You
    fill out our inquiry form, send a WhatsApp message, or request a
    call back.`,
  },
  {
    number: "02",
    title: (
      <>
        EXPERT REVIEW <br /> & TREATMENT PLAN
      </>
    ),
    text: `Top specialists review your case. We present your medical records 
    to the leading specialists at world’s top-accredited hospitals (JCI/NABH and 
    Joint Commission (JCAHO)).`,
  },
  {
    number: "03",
    title: (
      <>
        LOGISTICS & <br /> VISA SUPPORT
      </>
    ),
    text: `We pave the way. Once you approve the plan, we activate the logistics engine.`,
  },
  {
    number: "04",
    title: (
      <>
        ARRIVAL & <br /> WARM WELCOME
      </>
    ),
    text: `You land in US, India or Turkiye. We are there waiting. From the moment your 
    flight touches down, you are under our care.`,
  },
  {
    number: "05",
    title: (
      <>
        TREATMENT <br /> & CARE
      </>
    ),
    text: `World-class medical execution. The next day, your medical journey officially begins.`,
  },
  {
    number: "06",
    title: (
      <>
        SAFE RETURN <br /> & FOLLOW-UP
      </>
    ),
    text: `Going home healthy. When the doctor gives the "Fit to Fly" certificate, 
    we manage your departure.`,
  },
];

const HowItWorks = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".mission-card");
    let lastActive = null;

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => activate(index),
        onEnterBack: () => activate(index),
      });
    });

    function activate(activeIndex) {
      if (lastActive === activeIndex) return;
      lastActive = activeIndex;

      cards.forEach((c, i) => {
        if (i === activeIndex) {
          gsap.to(c, {
            backgroundColor: "#4568DC",
            color: "#fff",
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(c, {
            backgroundColor: "#4568DC0D",
            color: "#000",
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    }
  });

  return (
    <section className="w-full mx-auto max-w-7xl mt-16 lg:mt-32 px-6 sm:px-10 lg:px-16">
      <Badge text="HOW IT WORKS" />
      <h1 className="mt-4 text-2xl font-medium sm:text-3xl font-bruno leading-snug">
        HOW YOUR TREATMENT JOURNEY WORKS
      </h1>

      <p className="mt-4 text-sm sm:text-base text-description max-w-lg">
        We simplify the process of receiving treatment abroad by connecting
        you with trusted specialists, coordinating healthcare services, and assisting
        with travel and accommodation arrangements. Our dedicated team Ensures
        a smooth and comfortable experience from consultation to recovery.
      </p>

      <div className="flex flex-col justify-center items-center gap-8 mt-8">
        {steps.map((step, index) => (
          <Link
            href={`/how-it-works/#${step.number}`}
            key={index}
            className="bg-primary/5 hover:bg-primary hover:text-white  w-full flex flex-col gap-4 sm:flex-row rounded-2xl px-12 py-8 sm:px-16 sm:py-8"
          >
            <div className="flex flex-1 gap-4">
              
              <p className="text-xl sm:text-2xl uppercase font-medium">{step.title}</p>
            </div>

            <p className="flex-1">{step.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
