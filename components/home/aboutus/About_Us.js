import React from "react";
import style from "./About_Us.module.scss";
import Image from "next/image";
import Banner from "../../../assets/images/Banner.png";
import HomePage_Screen from "../../../assets/images/HomePage_Screen.png";
import MoreApp from "../../../assets/images/MoreApp.png";
import Feature1 from "../../../assets/icons/Feature1.png";
import Feature2 from "../../../assets/icons/Feature2.png";
import Feature3 from "../../../assets/icons/Feature3.png";
import Feature4 from "../../../assets/icons/Feature4.png";

export default function About_Us() {
  return (
    <>
      <div className={style.BannerImg}>
        <Image
          className={style.Banner}
          src={Banner}
          alt="Banner Image"
          height={700}
          fill={false}
        />
        <div className={style.bannerText}>
          <div className={style.Text}>
            <h1>
              “Scheme Suvidha” <br />
            </h1>
            <div>
              This app allows you to avail benefits of Disability Schemes, lets
              you know more about Latest Campaigns and Ngo helping disability
              people.
            </div>
          </div>
          <div className={style.PhoneScreen}>
            <Image
              src={HomePage_Screen}
              alt="Phone Screen"
              height={600}
              fill={false}
            />
          </div>
        </div>
      </div>
      <div className={style.About_Us}>
        <div className={style.headingDiv}>
          <h1 className={style.heading}>What’s More in The App?</h1>
          <div className={style.subheading}>
            Let’s Describe More Included Features in Scheme Suvidha
          </div>
        </div>
        <div className={style.features_section}>
          <div>
            <Image
              className={style.features}
              src={MoreApp}
              alt="Features"
              height={600}
              fill={false}
            />
          </div>
          <div className={style.Features_List}>
            <div className={style.Feature}>
              <Image
                src={Feature1}
                alt="Feature 1"
                width={100}
                height={100}
                fill={false}
              />
              <div className={style.FeatureInfo}>
                <h2>Paperless Registration</h2>
                <div>
                  This app is for disabled people to easily register themselves
                  to apply for various schemes provided by Government.
                </div>
              </div>
            </div>
            <div className={style.Feature}>
              <Image
                src={Feature2}
                alt="Feature 2"
                width={100}
                height={100}
                fill={false}
              />
              <div className={style.FeatureInfo}>
                <h2>Scheme Details with Filter</h2>
                <div>
                  To know more about schemes one can filter on basis of
                  different categories like pension, education, business,
                  transport, marriage, health, etc.
                </div>
              </div>
            </div>
            <div className={style.Feature}>
              <Image
                src={Feature3}
                alt="Feature 3"
                width={100}
                height={100}
                fill={false}
              />
              <div className={style.FeatureInfo}>
                <h2>NGO & Camp Details</h2>
                <div>
                  You can find various NGO helping disabled people. Latest camps
                  organized details to avail benefits.
                </div>
              </div>
            </div>
            <div className={style.Feature}>
              <Image
                src={Feature4}
                alt="Feature 4"
                width={100}
                height={100}
                fill={false}
              />
              <div className={style.FeatureInfo}>
                <h2>Agent Registration</h2>
                <div>
                  If a user is unable to register on themself. They can go to
                  the government officials to help users to register.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.AgentInfo}>
          <h1>Know More About Agents!</h1>
          <div>
            Agents are our Government Officials. They are first verified and
            then allowed to work. Agents verifies the applications filled by our
            app users. Also if a user is unable to do self registration Agents
            fill their application for them. The applications filled by agents
            are self verified.
          </div>
        </div>
      </div>
    </>
  );
}
