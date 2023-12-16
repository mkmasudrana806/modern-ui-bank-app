import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card eal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          quibusdam beatae laboriosam tempora tenetur, et repellat natus eum
          quidem odio unde neque veritatis autem consequuntur a culpa officia
          amet temporibus?
        </p>
        <Button style={"mt-10"} content={"Get Started"} />
      </div>
      <div className={layout.sectionImg}>
        <img className="w-[100%] h-[100%]" src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
