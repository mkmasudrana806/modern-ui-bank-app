import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex md:flex-row flex-col     w-full ">
        {/* footer logo part  */}
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              className="w-[266px] h-[72px] object-contain"
              src={logo}
              alt="hoobank"
            />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              et.
            </p>
          </div>
        </div>

        {/* footer links part  */}
        <div className="flex w-full flex-wrap  flex-row justify-between  md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              key={footerLink.key}
            >
              <h4 className="font-poppins text-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4">
                {footerLink.links.map((link) => (
                  <li
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3`}
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* footer social media part  */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2023 Hoobank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              src={social.icon}
              key={social.id}
              alt={social.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
