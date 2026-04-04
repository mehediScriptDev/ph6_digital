import React from "react";

const Stats = () => {
  return (
    <section
      className="mt-8 w-full"
      style={{
        background:
          "linear-gradient(90deg, var(--color-primary), var(--color-another))",
      }}
    >
      <div className="w-11/12 mx-auto py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="flex flex-col items-center lg:items-start py-6 lg:py-0 w-full lg:w-1/3">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              50K+
            </div>
            <div className="mt-2 text-sm text-white/90">Active Users</div>
          </div>

          <div className="hidden lg:block h-12 w-px bg-white/30" />

          <div className="flex flex-col items-center py-6 lg:py-0 w-full lg:w-1/3">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              200+
            </div>
            <div className="mt-2 text-sm text-white/90">Premium Tools</div>
          </div>

          <div className="hidden lg:block h-12 w-px bg-white/30" />

          <div className="flex flex-col items-center lg:items-end py-6 lg:py-0 w-full lg:w-1/3">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              4.9
            </div>
            <div className="mt-2 text-sm text-white/90">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
