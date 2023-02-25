import React from "react";
import style from "./Home.module.scss";
import { CardData } from "./CardData";
import Card from "./Card";
import { AnalysisCardData } from "./AnalysisCardData";
import AnalysisCard from "./AnalysisCard";
import AnalysisInfo from "./AnalysisInfo";
import dynamic from "next/dynamic";
import { AddCardData } from "./AddCardData";
import AddCard from "./AddCard";

const TerminalComponent = dynamic(() => import("./Homecs"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <div className={style.first_section}>
        <div className={style.subsection1}>
          <TerminalComponent />
        </div>
        <div className={style.subsection2}>
          <div className={style.CardGrid}>
            <Card
              image={CardData[0].image}
              subtitle={CardData[0].content}
              title={CardData[0].title}
            />
            <Card
              image={CardData[1].image}
              subtitle={CardData[1].content}
              title={CardData[1].title}
            />
            <Card
              image={CardData[2].image}
              subtitle={CardData[2].content}
              title={CardData[2].title}
            />
          </div>
        </div>
      </div>
      <div className={style.second_section}>
        <AnalysisCard
          count={AnalysisCardData[0].count}
          titleOfAnalysis={AnalysisCardData[0].titleOfAnalysis}
        />
        <AnalysisCard
          count={AnalysisCardData[1].count}
          titleOfAnalysis={AnalysisCardData[1].titleOfAnalysis}
        />
        <AnalysisCard
          count={AnalysisCardData[2].count}
          titleOfAnalysis={AnalysisCardData[2].titleOfAnalysis}
        />
      </div>
      <div className={style.Analysis}>
        <div className={style.AnalysisCard}>
          <div className={style.AnalysisInfo}>
            <AnalysisInfo />
          </div>
          <div className={style.AnalysisContent_Div}>
            <div className={style.line1}>The Analysis</div>
            <div className={style.line2}>The World is Going Ahead </div>
            <div className={style.line3}>
              Why to Stay behind let’s get Register and grow ahead with Everyone
            </div>
          </div>
        </div>
      </div>
      <div className={style.AddCard_Div}>
        <AddCard
          image={AddCardData[0].image}
          title={AddCardData[0].title}
          content={AddCardData[0].content}
          btnName={AddCardData[0].btnName}
        />
        <AddCard
          image={AddCardData[1].image}
          title={AddCardData[1].title}
          content={AddCardData[1].content}
          btnName={AddCardData[1].btnName}
        />
      </div>
    </>
  );
}
