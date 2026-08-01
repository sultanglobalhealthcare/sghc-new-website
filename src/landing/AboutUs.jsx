import React from "react";
import Image from "next/image";
import Badge from "@/components/Badge";

const AboutUs = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mt-32 flex flex-col items-start md:flex-row lg:mt-32 gap-16">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src="/doctor-consulting.jpg"
            alt="Finbotix hero"
            width={800}
            height={800}
            className="w-full rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>


        <div className="space-y-8">

          <Badge text="ABOUT US" />

          <h1 className="text-2xl sm:text-3xl font-bruno leading-snug">
            Sultan Global Health Care, a Medical Tourism Facilitator
          </h1>

          <p className=" text-sm sm:text-base text-description max-w-xl">
            Sultan Global Health Care (SGHC) connects patients to trusted, world-class medical care across leading international destinations. We simplify the entire healthcare journey from choosing the right specialist to managing travel, accommodation, and recovery ensuring a seamless, safe, and personalized experience.
          </p>

          <p className=" text-sm sm:text-base text-description max-w-xl">
            With a strong network of accredited hospitals and expert partners, SGHC delivers reliable guidance, compassionate support, and access to the highest standards of global healthcare.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
