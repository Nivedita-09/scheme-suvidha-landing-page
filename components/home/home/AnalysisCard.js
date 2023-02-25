import React from "react";
import style from "./AnalysisCard.module.scss";

export default function AnalysisCard({ count, titleOfAnalysis }) {
  return (
    <>
      <div className={style.AnalysisCard}>
        <div className={style.count}>{count}</div>
        <div className={style.titleOfAnalysis}>{titleOfAnalysis}</div>
      </div>
    </>
  );
}
