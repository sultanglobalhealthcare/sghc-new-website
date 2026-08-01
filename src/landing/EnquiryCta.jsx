
import Link from "next/link";
import React from "react";

const EnquiryCta = () => {
  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 mt-32 flex justify-center items-center">
        <div className="max-w-3xl w-full bg-primary/5 rounded-3xl p-10 text-center flex flex-col items-center gap-8">
          <h1 className="text-2xl sm:text-3xl font-semibold font-bruno leading-snug">
            Ready to take the step <br/> for your health?
          </h1>

          <Link
            href={"/enquiry"}
            className="bg-primary active:blur-[1px] active:scale-95 transition-all w-fit font-bruno group shadow-xl shadow-blue-600/20 flex items-center pr-1 py-1 pl-4 gap-2
                              border-[1px] border-primary/30 rounded-full"
          >
            <p className="text-white">Make an enquiry</p>

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
      </section>
    </>
  );
};

export default EnquiryCta;
