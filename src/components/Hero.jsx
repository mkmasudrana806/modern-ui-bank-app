import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img className="w-[32px] h-[32px]" src={discount} alt="discount" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month </span>
            Account
          </p>
        </div>
        <div
          className="flex flex-row justify-between items-center
         w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-r mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method
        </h1>
        <p className={`${styles.paragraph}`}>
          Our team of experts users a methodlogy to indentity the credit cards
          most likely to fit your needs . we examine annual percentage rates,
          annual fees
        </p>
      </div>

      <div>
        <img className="w-[100%] relative z-[5]" src={robot} alt="billing" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>

        <div className="absolute z-[1] w-[80%] h-[80%] top-0 white__gradient rounded-full bottom-40 "></div>

        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
