import React from 'react';

const StepCard = ({ num, imgSrc, title, desc }) => (
  <div className="card rounded-xl shadow-sm bg-white relative">
    <div className="p-8 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#f3e8fe] shadow-inner">
        <img src={imgSrc} alt={title} className="w-10 h-10" />
      </div>
      <h4 className="mt-6 text-lg font-semibold text-slate-900">{title}</h4>
      <p className="mt-3 text-sm text-slate-500 max-w-xs">{desc}</p>
    </div>

    <div className="absolute top-3 right-4">
      <div className="w-8 h-8 rounded-full bg-linear-to-r from-primary to-another text-white flex items-center justify-center text-xs font-medium">{num}</div>
    </div>
  </div>
);

const Steps = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Get Started In 3 Steps</h2>
        <p className="mt-2 text-sm text-slate-500">Start using premium digital tools in minutes, not hours.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            num="01"
            imgSrc="/assets/user.png"
            title="Create Account"
            desc="Sign up for free in seconds. No credit card required to get started."
          />

          <StepCard
            num="02"
            imgSrc="/assets/package.png"
            title="Choose Products"
            desc="Browse our catalog and select the tools that fit your needs."
          />

          <StepCard
            num="03"
            imgSrc="/assets/rocket.png"
            title="Start Creating"
            desc="Download and start using your premium tools immediately."
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
