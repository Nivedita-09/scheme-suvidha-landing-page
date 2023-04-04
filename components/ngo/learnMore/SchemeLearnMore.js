import React from "react";
import style from "./SchemeLearnMore.module.scss";
import Image from "next/image";
import { SchemeCardData } from "../data/SchemeCardData";
import SchemeCard from "../data/SchemeCard";
import Scheme from "../../../assets/icons/Scheme.svg";
import Router from "next/router";

export default function SchemeLearnMore() {
  // function handleClick() {
  //   Router.push("/View_Scheme");
  // }
  return (
    <>
      <div className={style.SchemeLearnMore}>
        <div className={style.first_section}>
          <div className={style.section_title}>
            <div>
              <Image
                src={Scheme}
                width={60}
                height={60}
                className={style.icons}
              />
            </div>
            <div className={style.Title}>Scheme Suvidha’s - Schemes</div>
          </div>
          <div className={style.SchemeContent}>
            The Schemes under Scheme Suvidha is added by Admin only. We give the
            best benefits to all our users of this Scheme. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </div>
        </div>
        <div className={style.second_section}>
          <div className={style.SchemeListTitle}>Our Top SCHEMES List</div>
          <div className={style.SchemeCardGrid}>
            {SchemeCardData.map((data, index) => (
              <SchemeCard data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
