import React from "react";
import style from "./SchemeCard.module.scss";
import Image from "next/image";
export default function SchemeCard({ data, viewCard }) {
  return (
    <>
      <div className={style.scheme}>
        <div className={style.schemeCard}>
          <div className={style.Image_div}>
            <div className={style.schemeLogo}>
              <Image
                src={data.logo}
                alt="logo"
                height={130}
                className={style.Logo}
              />
            </div>
          </div>
          <div className={style.Detail}>
            <div className={style.schemeDetail_div}>
              <div className={style.schemedetail}>
                Scheme Name: {data.schemeName}
              </div>
            </div>
            <div className={style.schemebtn_div}>
              <div className={style.schemedetail}>
                Organization Name: {data.schemeOrganization}
              </div>
              <div className={style.viewScheme_div}>
                <button className={style.viewScheme} onClick={viewCard}>
                  View
                </button>
              </div>
            </div>
            <div className={style.schemeDetail_div}>
              <div className={style.schemedetail}>
                Type Of Disability: {data.typeOfDisability}
              </div>
            </div>
            <div className={style.schemeDate_div}>
              <div className={style.schemeDetail_div}>
                <div className={style.schemedetail}>
                  Date of Creation: {data.dateCreation}
                </div>
              </div>
              <div className={style.schemeDetail_div}>
                <div className={style.schemedetail}>
                  Validated Date: {data.validationDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
