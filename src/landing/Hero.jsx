import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* mobile = full viewport height; desktop keeps original spacing */}
      <section className="px-6 max-w-7xl mx-auto sm:px-10 lg:px-16 mt-32 sm:mt-24 md:mt-16 flex lg:mt-16">
        {/* On mobile → text first, image after; On desktop → image right */}
        <div className=" w-full flex flex-col lg:flex-row items-center gap-8 py-8 lg:py-0">
          
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1">
            <h1 className="text-2xl sm:text-3xl font-bruno leading-snug">
              Access
              <span className="text-primary"> World-Class Healthcare </span>
              Through a Trusted {" "}
              <span className="text-primary">Global Network</span>
            </h1>

            <p className="text-sm sm:text-base text-description max-w-xl">
              Sultan Global Health Care connects you with trusted international hospitals and 
              specialists for cosmetic, elective, and life-saving treatments all at transparent and
                affordable costs. We ensure safe, seamless medical travel with care you can rely on.
            </p>

            <div>
              {/* BUTTON - unchanged */}
              <Link
                href={"/enquiry"}
                className="bg-primary active:blur-[1px] active:scale-95 transition-all w-fit font-bruno group shadow-xl shadow-blue-600/20 flex items-center pr-1 py-1 pl-4 gap-2
                    border-[1px] border-primary/30 rounded-full"
              >
                <p className="text-white">Get Started</p>

                <div
                  className="relative w-10 h-10 flex items-center justify-center 
                        rounded-full bg-white overflow-hidden"
                >
                  <img
                    className="w-8
                            group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform
                            duration-300"
                    src="/arrow-up-right-01-sharp.svg"
                    alt="arrow"
                  />
                  <img
                    className="w-8 absolute -translate-x-10 translate-y-10
                            group-hover:translate-x-0 group-hover:translate-y-0 transition-transform
                            duration-300"
                    src="/arrow-up-right-01-sharp.svg"
                    alt="arrow"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src="/doctor-explaining.jpg"
                
                alt="Finbotix hero"
                width={800}
                height={800}
                className="w-full h-auto object-contain rounded-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      
    </>
  );
};

export default Hero;
