"use client";
import React from "react";

import Image from "next/image";
import Badge from "@/components/Badge";


const teamData = [
  {
    name: "Nasar A. Sultan, MD",
    role: "Founder and Medical Director | Clinical Research & Patient Care Lead",
    image: "/team/dr-nasar.jpeg",
    points: [
      "Extensive experience in clinical medicine, research, and patient care",
      "Former Research Physician at leading US institutions",
      "Expertise in pulmonary & critical care medicine, radiology, neurology, gynecology, hematology oncology, peripheral atherectomy, and complex case coordination",
      "Oversees patient care planning, treatment quality, and international case coordination",
    ],
  },
  {
    name: "Dr. Mohammad Musa Ali, MBBS, MD, MRCP, MRCPS, FRCP (Dublin)",
    role: "Senior Consultant Physician & Diabetologist",
    image: "/team/dr-musa-2.jpeg",
    points: [
      "30+ years of expertise in internal medicine, diabetes management, and preventive care",
      "Former Consultant Physician, Internal Medicine at King Fahad Hospital, Kingdom of Saudi Arabia",
      "Currently based at Cribs Hospital, Bihar, India",
      "Post Graduate of Aligarh Muslim University",
      "Holds prestigious international credentials including MRCP and FRCP (Dublin)",
    ],
  },
  {
    name: "Dr. Sumbul Naim, MD (OBGYN)",
    role: "Gold Medalist | Fertility & Women's Health Specialist",
    image: "/team/dr-sumbul.jpeg",
    points: [
      "25+ years of clinical experience since 1999",
      "MD trained at Aligarh Muslim University",
      "Specialist in infertility and high-risk pregnancy care",
      "Leads fertility treatment planning, IVF case coordination, and counseling",
    ],
  },
  {
    name: "Dr. Abdurahiman Elikkottil, MD, MRCPCH (UK)",
    role: "Senior Pediatrician & Neonatologist | NICU & PICU Specialist",
    image: "/team/dr-abdurahiman.jpeg",
    points: [
      "30+ years of international experience across India, Qatar, and UAE",
      "Post Graduate of Aligarh Muslim University and UK-certified pediatric specialist",
      "Expert in neonatal ICU and pediatric critical care",
      "Manages general pediatric and neonatal cases, including critical care",
    ],
  },
  {
    name: "Dr. Vishnu Girish, MD, DM",
    role: "Consultant Hepatologist | Liver Disease & Transplant Specialist",
    image: "/team/dr-vishnu.jpeg",
    points: [
      "Advanced hepatology and transplant expertise",
      "Performed 1000+ procedures",
      "Specialist in cirrhosis, liver failure, and liver cancer",
      "Reviews liver disease cases and transplant planning",
    ],
  },
  {
    name: "Dr. Fawaz Shamim Siddiqui, BDS, MPH, MDS",
    role: "Pediatric Dentist | Child Dental Specialist",
    image: "/team/dr-fawaz-siddiqui.jpeg",
    points: [
      "18+ years of clinical and academic experience across Saudi Arabia, India, and Malaysia",
      "Specializes in child-friendly dental care and preventive dentistry",
      "Expert in advanced pediatric dental treatments",
      "Affiliated with the Royal College of Surgeons of Edinburgh and FAIMER Fellow",
    ],
  },
  {
    name: "Dr. A.D. Khan, MD (Hom), PG Diploma Guidance & Counseling",
    role: "Patient Care Specialist | Counselor",
    image: "/team/dr-ad-khan-2.jpeg",
    points: [
      "30+ years of clinical and surgical experience",
      "Principal & Professor at Bhabha Homoeopathic Medical College, Bhopal, India",
      "Expertise in ICU, surgical coordination, counseling, and hospital management",
      "Oversees surgical planning and complex case management",
    ],
  },
  {
    name: "Dr. Shereen Khan, BHMS, MPH",
    role: "Patient Care Specialist | Public Health Expert",
    image: "/team/dr-shereen-2.jpg",
    points: [
      "Experience at leading institutions including AIIMS Bhopal, India",
      "Background in clinical care, research, and healthcare management",
      "Expertise in patient coordination and public health strategies",
      "Ensures smooth patient experience and care coordination",
    ],
  },
];



const Team = () => {
  return (
    <section className="px-6 mx-auto max-w-7xl sm:px-10 lg:px-16 mt-32">
      {/* Header */}
      <div className="max-w-2xl">
        <Badge text="OUR TEAM" />

        <h1 className="mt-4 text-2xl sm:text-3xl font-medium font-bruno leading-snug uppercase">
          Meet Our Medical Experts
        </h1>

        <p className="mt-4 text-sm sm:text-base text-description">
          Our experienced healthcare professionals and patient care specialists
          work together to provide safe, reliable, and personalized medical
          tourism services for international patients.
        </p>
      </div>

      {/* Team Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="border border-outline rounded-3xl overflow-hidden bg-background"
          >
            {/* Image */}
            <div className="relative w-full h-[280px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-xl sm:text-2xl font-semibold font-bruno uppercase">
                {member.name}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-primary font-medium">
                {member.role}
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {member.points.map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-2 min-w-2 h-2 rounded-full bg-primary" />

                    <p className="text-sm sm:text-base text-description leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;