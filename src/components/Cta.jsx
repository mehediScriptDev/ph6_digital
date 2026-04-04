import React from 'react';

const Cta = () => {
    return (
        <section
          className="w-full mt-12"
          style={{
            background: "linear-gradient(90deg, var(--color-primary), var(--color-another))",
          }}
        >
          <div className="w-11/12 mx-auto py-20 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Ready To Transform Your Workflow?
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto text-white/90">
              Join thousands of professionals who are already using Digitools to work smarter.
              Start your free trial today.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-purple-700 font-medium shadow-sm"
              >
                Explore Products
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white text-white font-medium"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-6 text-xs text-white/80">
              14-day free trial • No credit card required • Cancel anytime
            </div>
          </div>
        </section>
    );
};

export default Cta;