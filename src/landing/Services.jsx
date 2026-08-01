"use client";
import React from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserShield01Icon,
  Calendar02Icon,
  HotelBellIcon,
  File02Icon,
  HealtcareIcon,
  ArrowUpRight03Icon,
  LinkForwardIcon,
} from "@hugeicons/core-free-icons/index";
import Badge from "@/components/Badge";

const servicesData = [
  {
    title: "Medical Consultation",
    icon: UserShield01Icon,
    desc: "We connect you with trusted medical experts who review your case and recommend suitable treatment options.",
  },
  {
    title: "Trip Planning",
    icon: Calendar02Icon,
    desc: "Our team organizes every travel detail to ensure a smooth and stress free medical journey.",
  },
  {
    title: "Travel & Accommodation",
    icon: HotelBellIcon,
    desc: "We arrange flights and comfortable stays near your hospital for a convenient experience.",
  },
  {
    title: "Local Transport & Pickup",
    icon: File02Icon,
    desc: "Reliable transport and airport pickup services keep your entire medical trip safe and easy.",
  },
  {
    title: "Language Assistance",
    icon: HealtcareIcon,
    desc: "Professional translators help you communicate clearly with doctors and hospital staff during treatment.",
  },
  {
    title: "Post Treatment Follow-up",
    icon: LinkForwardIcon,
    desc: "We stay connected after your procedure to support your recovery and ensure proper care.",
  },
];

const Services = () => {
  return (
    <section className="px-6 mx-auto max-w-7xl sm:px-10 lg:px-16 mt-32 flex flex-col">
      
      <div>
        <Badge text="SERVICES" />

        <h1 className="mt-4 text-2xl font-medium sm:text-3xl font-bruno leading-snug">
          OUR SERVICES FOR PATIENTS
        </h1>

        <p className="mt-4 text-sm sm:text-base text-description max-w-lg">
          SGHC has special deals with hospitals, so you can save money on medical care.
          We are compensated by hospitals for the care we provide to patients.
        </p>
      </div>

      {/* Dynamic Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group border border-outline rounded-2xl flex flex-col gap-4 p-8"
          >
            <HugeiconsIcon
              className="group-hover:text-primary transition-colors"
              icon={service.icon}
              size={32}
            />

            <h2 className="font-bruno text-base font-medium uppercase">{service.title}</h2>

            <p className="text-sm text-description max-w-64">{service.desc}</p>

            <button className="w-fit transition-opacity  opacity-0 text-description font-bruno text-xs flex gap-2 items-center">
              <p>Explore more</p>
              <HugeiconsIcon
                color="#0F62FE"
                icon={ArrowUpRight03Icon}
                size={20}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
