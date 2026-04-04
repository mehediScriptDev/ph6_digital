import React from 'react';
import { CiInstagram, CiTwitter } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 mt-12">
          <div className="w-11/12 mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="col-span-1">
                <h3 className="text-2xl font-semibold text-white">DigiTools</h3>
                <p className="mt-4 text-sm text-slate-400 max-w-xs">
                  Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                </p>
              </div>

              <div>
                <h4 className="text-sm text-white font-medium">Product</h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Templates</li>
                  <li>Integrations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-white font-medium">Company</h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  <li>About</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Press</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-white font-medium">Resources</h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  <li>Documentation</li>
                  <li>Help Center</li>
                  <li>Community</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-white font-medium">Social Links</h4>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
                   <CiInstagram/>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
                    <CiTwitter />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
              <div>© 2026 Digitools. All rights reserved.</div>
              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;