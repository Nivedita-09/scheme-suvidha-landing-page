import React from "react";
import style from "./Home.module.scss";
import { CardData, NgaoInfo, schemeInfo, UpdateInfo } from "./CardData";
import Card from "./Card";
import {
  AnalysisCardData,
  BenefitsAnalysisCardData,
  NGOAnalysisCardData,
  RegistrationAnalysisCardData,
} from "./AnalysisCardData";
import AnalysisCard from "./AnalysisCard";
import AnalysisInfo from "./AnalysisInfo";
import dynamic from "next/dynamic";
import {
  AddCardData,
  CampaignsAddCardData,
  NgoAddCardData,
} from "./AddCardData";
import AddCard from "./AddCard";
import Router from "next/router";

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
              image={NgaoInfo.image}
              subtitle={NgaoInfo.content}
              title={NgaoInfo.title}
              pageRoute={() =>  Router.push("/Ngo_Learn_More")}
            />
            <Card
              image={UpdateInfo.image}
              subtitle={UpdateInfo.content}
              title={UpdateInfo.title}
              // pageRoute={() =>  Router.push("/Ngo_Learn_More")}
            />
            <Card
              image={schemeInfo.image}
              subtitle={schemeInfo.content}
              title={schemeInfo.title}
              pageRoute={() =>  Router.push("/Scheme_Learn_More")}
            />
          </div>
        </div>
      </div>
      <div className={style.second_section}>
        <AnalysisCard
          count={BenefitsAnalysisCardData.count}
          titleOfAnalysis={BenefitsAnalysisCardData.titleOfAnalysis}
        />
        <AnalysisCard
          count={NGOAnalysisCardData.count}
          titleOfAnalysis={NGOAnalysisCardData.titleOfAnalysis}
        />
        <AnalysisCard
          count={RegistrationAnalysisCardData.count}
          titleOfAnalysis={RegistrationAnalysisCardData.titleOfAnalysis}
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
          image={NgoAddCardData.image}
          title={NgoAddCardData.title}
          content={NgoAddCardData.content}
          btnName={NgoAddCardData.btnName}
          register={() => Router.push("/Register_Ngo")}
        />
        <AddCard
          image={CampaignsAddCardData.image}
          title={CampaignsAddCardData.title}
          content={CampaignsAddCardData.content}
          btnName={CampaignsAddCardData.btnName}
          register={()=>  Router.push("/Register_Camps")}
        />
      </div>
    </>
  );
}
