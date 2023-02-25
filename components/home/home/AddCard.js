import React from "react";
import style from "./AddCard.module.scss";
import Image from "next/image";

export default function AddCard({ image, title, content, btnName }) {
  return (
    <div className={style.AddCardSection}>
      <div className={style.AddCardInfo}>
        <Image
          src={image}
          alt="logo"
          width={50}
          height={50}
          className={style.AddCardImage}
        />
      </div>
      <div className={style.AddCardTitle}>{title}</div>
      <div className={style.AddCardContent}>{content}</div>
      <div className={style.AddCardBtn_Sec}>
        <button className={style.AddCardBtn}>{btnName}</button>
      </div>
    </div>
  );
}
