import React from "react";
import style from "./Home.module.scss";
import { CardData } from "./CardData";
import Card from "./Card";

import dynamic from "next/dynamic";

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
            <Card image={CardData[0].image} subtitle={CardData[0].content} />
            <Card image={CardData[1].image} subtitle={CardData[1].content} />
            <Card image={CardData[2].image} subtitle={CardData[2].content} />
          </div>
        </div>
      </div>
      <div className={style.second_section}>
        <div className={style.Analysis_div}>
          <div className={style.analysis}>
            <div className={style.count}>82+</div>
          </div>
        </div>
      </div>
    </>
  );
}
