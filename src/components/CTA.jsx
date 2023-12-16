import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row md:justify-between  flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything yoiu need to accept card payments and grow yoiur business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button content={"Get Started"} />
      </div>
    </section>
  );
};

export default CTA;
