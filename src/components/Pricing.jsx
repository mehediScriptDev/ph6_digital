import React from 'react';
import { MdDone } from 'react-icons/md';

const Pricing = () => {
    return (
        <section className="py-20 bg-white">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">Simple, Transparent Pricing</h2>
                <p className="mt-3 text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className="mt-10 flex flex-col lg:flex-row gap-6 items-stretch">
                    
                    <div className="card flex-1 rounded-xl! shadow-md  bg-base-100">
                        <div className="p-6 h-full flex flex-col items-start border border-gray-200 rounded-xl bg-[#F9FAFC] justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-left text-slate-900">Starter</h3>
                                <p className="mt-2 text-sm text-slate-500">Perfect for getting started</p>

                                <div className="mt-6 text-3xl text-left font-extrabold text-slate-900">$0<span className="text-base font-medium text-slate-500">/Month</span></div>

                                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Access to 10 free tools</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Basic templates</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Community support</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />1 project per month</li>
                                </ul>
                            </div>

                            <div className="mt-6 w-full">
                                <button style={{background: 'linear-gradient(90deg, var(--color-primary), var(--color-another))'}} className="w-full text-white py-3 rounded-full text-sm font-medium">Get Started Free</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative  rounded-xl! overflow-visible shadow-lg">
                        <div className="p-6 h-full bg-linear-to-r from-primary to-another text-white flex flex-col justify-between relative rounded-xl">
                            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 mx-auto rounded-full text-xs font-medium -mt-9">Most Popular</div>
                            <div>
                                
                                <h3 className="mt-4 text-2xl text-left font-semibold">Pro</h3>
                                <p className="mt-2 text-sm text-white/90 text-left">Best for professionals</p>

                                <div className="mt-6 text-4xl font-extrabold text-left">$29<span className="text-base font-medium text-white/90">/Month</span></div>

                                <ul className="mt-6 space-y-3 text-sm text-white/90">
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-white mt-1" />Access to all premium tools</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-white mt-1" />Unlimited templates</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-white mt-1" />Priority support</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-white mt-1" />Unlimited projects</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-white mt-1" />Cloud sync</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-white mt-1" />Advanced analytics</li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-white text-purple-700 py-3 rounded-full text-sm font-medium">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="card flex-1 rounded-xl shadow-md border border-gray-200 bg-[#F9FAFC]">
                        <div className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 text-left">Enterprise</h3>
                                <p className="mt-2 text-sm text-slate-500 text-left">For teams and businesses</p>

                                <div className="mt-6 text-3xl font-extrabold text-slate-900 text-left">$99<span className="text-base font-medium text-slate-500">/Month</span></div>

                                <ul className="mt-6 space-y-3 text-sm text-slate-600 text-left">
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Everything in Pro</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Team collaboration</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Custom integrations</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Dedicated support</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />SLA guarantee</li>
                                    <li className="flex items-start gap-3"><MdDone className="w-4 h-4 text-emerald-500 mt-1" />Custom branding</li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <button style={{background: 'linear-gradient(90deg, var(--color-primary), var(--color-another))'}} className="w-full text-white py-3 rounded-full text-sm font-medium">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;