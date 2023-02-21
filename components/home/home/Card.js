import React from "react";
import style from "./Card.module.scss";
import Image from "next/image";
export default function Card({ image, subtitle, title, pageRoute }) {
  return (
    <>
      <div className={style.cardSection}>
        <div className={style.hr_div}></div>
        <div className={style.sectionInfo}>
          <Image
            src={image}
            alt="NGO"
            className={style.image}
            width={50}
            height={50}
          />
          <div className={style.content}>{subtitle}</div>
          <button className={style.learnMore_Btn}>Learn More</button>
        </div>
      </div>
    </>
  );
}
