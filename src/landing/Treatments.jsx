import React from "react";

import {
  AiBrain01Icon,
  Bone02Icon,
  DentalCareIcon,
  HeartCheckIcon,
  LiverIcon,
  MicroscopeIcon,
  Plant01Icon,
  SpermIcon,
  UserAiIcon,
} from "@hugeicons/core-free-icons/index";
import { HugeiconsIcon } from "@hugeicons/react";
import Badge from "@/components/Badge";

const Treatments = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-32">
        <Badge text="TREATMENTS"/>
        <h1 className="mt-4 text-2xl font-medium sm:text-3xl font-bruno leading-snug">
          OUR TREATMENT SPECIALITIES
        </h1>

        <p className="mt-4 text-sm sm:text-base text-description max-w-lg">
          We connect patients to advanced, reliable, and accredited medical
          treatments across the world’s top healthcare destinations. From life
          saving surgeries to restorative therapies, every treatment is
          delivered with expertise, safety, and compassionate care.
        </p>

        {/* FIXED GRID */}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* CARDIOLOGY */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={HeartCheckIcon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium ">CARDIOLOGY</h2>

      <p className="text-sm text-description">
        Cardiac Bypass 
        <span className="text-black "> | </span>
        Angioplasty 
        <span className="text-black "> | </span>
        Pacemaker Implantation 
        <span className="text-black "> | </span>
        Heart Valve Replacement 
        <span className="text-black "> | </span>
        Pediatric Heart Surgery 
        <span className="text-black "> | </span>
        Robotic Heart Surgery
      </p>
    </div>
  </div>

  {/* ORTHOPEDICS */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={Bone02Icon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">ORTHOPEDICS</h2>

      <p className="text-sm text-description">
        Shoulder Replacement
        <span className="text-black "> | </span>
        Hip Replacement
        <span className="text-black "> | </span>
        Knee Replacement
        <span className="text-black "> | </span>
        Ankle Replacement
        <span className="text-black "> | </span>
        ACL Reconstruction
        <span className="text-black "> | </span>
        Spine Surgery
      </p>
    </div>
  </div>

  {/* ONCOLOGY */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={MicroscopeIcon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">ONCOLOGY</h2>

      <p className="text-sm text-description">
        Brain Tumors
        <span className="text-black "> | </span>
        Breast Cancer
        <span className="text-black "> | </span>
        Lung Cancer
        <span className="text-black "> | </span>
        Liver Cancer
        <span className="text-black "> | </span>
        Cyberknife Radiotherapy
        <span className="text-black "> | </span>
        Chemotherapy
      </p>
    </div>
  </div>

  {/* NEUROLOGY & NEUROSURGERY */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={AiBrain01Icon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">NEUROLOGY & NEUROSURGERY</h2>
      <p className="text-sm text-description">
        Migraine
        <span className="text-black "> | </span>
        Stroke
        <span className="text-black "> | </span>
        Epilepsy
        <span className="text-black "> | </span>
        Seizures
        <span className="text-black "> | </span>
        Nerve Injuries
        <span className="text-black "> | </span>
        Brain Tumors
      </p>
    </div>
  </div>

  {/* TRANSPLANTS */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={LiverIcon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">TRANSPLANT</h2>

      <p className="text-sm text-description">
        Heart Transplant
        <span className="text-black "> | </span>
        Kidney Transplant
        <span className="text-black "> | </span>
        Liver Transplant
        <span className="text-black "> | </span>
        Bone Marrow Transplant
        <span className="text-black "> | </span>
        Hair Transplant
      </p>
    </div>
  </div>

  {/* COSMETICS & PLASTIC SURGERY */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={UserAiIcon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">COSMETICS & PLASTIC SURGERY</h2>

      <p className="text-sm text-description">
        Body Contouring
        <span className="text-black "> | </span>
        Facial Upliftment
        <span className="text-black "> | </span>
        Breast Upliftment
        <span className="text-black "> | </span>
        Liposuction
      </p>
    </div>
  </div>

  {/* FERTILITY TREATMENTS */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={SpermIcon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">FERTILITY TREATMENTS</h2>

      <p className="text-sm text-description">
        IVF
        <span className="text-black "> | </span>
        IVF with Donor Eggs
        <span className="text-black "> | </span>
        IUI
        <span className="text-black "> | </span>
        ICSI
        <span className="text-black "> | </span>
        Surrogacy
        <span className="text-black "> | </span>
        Egg Freezing
      </p>
    </div>
  </div>

  {/* DENTAL CARE */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={DentalCareIcon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">DENTAL CARE</h2>

      <p className="text-sm text-description">
        Smile Makeover
        <span className="text-black "> | </span>
        Teeth Whitening
        <span className="text-black "> | </span>
        Painless Root Canal
        <span className="text-black "> | </span>
        Orthodontics
        <span className="text-black "> | </span>
        Dental Implants
        <span className="text-black "> | </span>
        Cosmetic Dentistry
      </p>
    </div>
  </div>

  {/* WELLNESS & AYURVEDA */}
  <div>
    <div className="flex flex-col bg-primary/5 p-8 justify-between mt-3">
      <HugeiconsIcon icon={Plant01Icon} className="text-primary" />
      <h2 className="text-base mt-2 font-medium">WELLNESS & AYURVEDA</h2>
      <p className="text-sm text-description">
        Herbal Medicine
        <span className="text-black "> | </span>
        Nasal Therapy
        <span className="text-black "> | </span>
        Detoxifying Clay
        <span className="text-black "> | </span>
        Herbal Steam Therapy
        
      </p>
    </div>
  </div>
</div>


      </section>
    </>
  );
};

export default Treatments;
