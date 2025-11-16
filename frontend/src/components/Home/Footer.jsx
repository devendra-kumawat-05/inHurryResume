import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full mt-32 bg-gradient-to-r from-white via-[#1A73E8]/90 to-white">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-900/30">
          <div className="max-w-96">
            <a href="#">
              <img src="/logo.svg" className="h-24" alt="logo" />
            </a>

            <div className="flex items-center justify-between mt-3">
              <a
                href="https://x.com/devendra__5"
                target="_blank"
                className="text-[#1F1F1F] hover:text-[#1A73E8] transition"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.instagram.com/devendrakumawatt/"
                target="_blank"
                className="text-[#1F1F1F] hover:text-[#1A73E8] transition"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/devendra-kumawat-081676164/"
                target="_blank"
                className="text-[#1F1F1F] hover:text-[#1A73E8] transition"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/devendra-kumawat-05"
                target="_blank"
                className="text-[#1F1F1F] hover:text-[#1A73E8] transition"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#1F1F1F]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>

          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold text-black mb-5">Product</h2>
              <ul className="text-sm text-[#1F1F1F] space-y-2 list-none">
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    A
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-black mb-5">COMPANY</h2>
              <div className="text-sm text-[#1F1F1F] space-y-2 list-none">
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#1A73E8] transition">
                    Terms
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-[#1F1F1F]">
          Copyright 2025 © <a href="#">inHurryResume</a>. All Right Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
