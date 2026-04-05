import React from "react";
import banner from "/assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <>
    <section className="bg-white">
      <div className="w-11/12 mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          <div className="pt-10 md:pt-0">
            <span className="inline-flex items-center gap-3 bg-purple-50 text-purple-700 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full inline-block" />
              New: AI-Powered Tools Available
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              Supercharge Your
             
              Digital Workflow
            </h1>

            <p className="mt-6 text-lg text-slate-500 max-w-xl">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>

            <div className="mt-8 flex items-center gap-4">
         
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-primary to-another text-white shadow-lg text-sm font-medium"
              >
                Explore Products
              </a>

              <div className="rounded-full p-0.5 bg-linear-to-r from-another to-primary">
                <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-primary text-sm font-medium">
                  <CiPlay1 />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/*  image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-xl">
              <img src={banner} alt="banner" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    </>
  );
};

export default Hero;