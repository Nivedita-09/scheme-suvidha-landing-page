import React from "react";
import style from "./NgoLearnMore.module.scss";
import Image from "next/image";
import { NgoCardData } from "../data/NgoCardData";
import NgoCard from "../data/NgoCard";
import Ngo from "../../../assets/icons/Ngo.svg";
import Router from "next/router";

export default function NgoLearnMore() {
  function handleClick() {
    Router.push("/View_Ngo");
  }
  return (
    <>
      <div className={style.NgoLearnMore}>
        <div className={style.first_section}>
          <div className={style.section_title}>
            <div>
              <Image src={Ngo} width={60} height={60} className={style.icons} />
            </div>
            <div className={style.Title}>Scheme Suvidha’s NGO</div>
          </div>
          <div className={style.NgoContent}>
            The Scheme Suvidha registered NGO help all the disable people with
            there daily needs. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </div>
        </div>
        <div className={style.second_section}>
          <div className={style.NgoListTitle}>Our Top NGO List</div>
          <div className={style.NgoCardGrid}>
            {NgoCardData.map((data, index) => (
              <NgoCard data={data} key={index} viewCard={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
