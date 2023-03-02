import React from "react";
import style from "./NgoCard.module.scss";
import Image from "next/image";

export default function NgoCard({ data, viewCard }) {
  return (
    <>
      <div className={style.card}>
        <div className={style.NgoCard}>
          <div className={style.Image}>
            <div className={style.ngoLogo}>
              <Image
                src={data.logo}
                alt="logo"
                height={130}
                className={style.Logo}
              />
            </div>
          </div>
          <div className={style.Detail}>
            <div className={style.ngoDetail_div}>
              <div className={style.ngodetail}>Ngo Name: {data.ngoName}</div>
            </div>
            <div className={style.btn_div}>
              <div className={style.ngodetail}>Founder: {data.ngoFounder}</div>
              <div className={style.viewNgo_div}>
                <button className={style.viewNgo} onClick={viewCard}>
                  View
                </button>
              </div>
            </div>
            <div className={style.ngoDetail_div}>
              <div className={style.ngodetail}>State: {data.ngoState}</div>
            </div>
            <div className={style.ngoDetail_div}>
              <div className={style.ngodetail}>
                Requested Date: {data.requestDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
