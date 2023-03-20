import React from "react";
import style from "./SchemeLearnMore.module.scss";
import Image from "next/image";
import { SchemeCardData } from "../data/SchemeCardData";
import SchemeCard from "../data/SchemeCard";
import Scheme from "../../../assets/icons/Scheme.svg";
import Router from "next/router";

export default function SchemeLearnMore() {
  function handleClick() {
    Router.push("/View_Scheme");
  }
  return (
    <>
      <div></div>
    </>
  );
}
