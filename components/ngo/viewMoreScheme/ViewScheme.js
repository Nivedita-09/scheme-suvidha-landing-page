import React from "react";
import style from "./ViewScheme.module.scss";
import Image from "next/image";
import Link from "next/link";
import SchemeLogo from "../../../assets/images/ADIP.png";

export default function ViewNgo() {
  return (
    <>
      <div className={style.ViewScheme}>
        <div className={style.Heading}>SCHEME DETAILS</div>
        <div className={style.viewscheme_div}>
          <Image
            src={SchemeLogo}
            alt="logo"
            width={200}
            height={200}
            className={style.SchemeLogo}
          />
        </div>
        <div className={style.SchemeName}>
          <h1>ADIP ( Assistance to Disabled Persons )</h1>
          <h2>Indian Ministry Of Health</h2>
        </div>
        <div className={style.SchemeInformation}>
          <div>
            <h2 className={style.subheading}>Scheme Description</h2>
            <div className={style.content}>
              The main objective of the Assistance to Disabled persons for
              purchasing / fitting of aids / appliances (ADIP) scheme is to
              assist the needy disabled persons in procuring durable,
              sophisticated and scientifically manufactured, modern, standard
              aids and appliances that can promote their physical, social and
              psychological rehabilitation, by reducing the effects of
              disabilities and enhance their economic potential. The aids and
              assistive devices supplied under the Scheme must have due
              certification. The scheme is implemented through implementing
              agencies such as the NGOs, National Institutes under this Ministry
              and ALIMCO (a PSU).
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>Eligibility Criteria</h2>
            <div className={style.content}>Above 40% Disabled Person</div>
            <div className={style.content}>All Indian Citizen All Age</div>
            <div className={style.content}>Valid upto 3 Months</div>
            <div className={style.content}>
              Annual Income less than Rs. 30,000/- per month
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>Benefits</h2>
            <div className={style.content}>
              1. The aim is to improve interpersonal and vocational skills.{" "}
              <br />
              2. Care-giving support offered to disabled person at the centers.
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>Disability Type</h2>
            <div className={style.content}>
              1.locomotor disability,
              <br /> 2.visual disabilities including deaf, <br /> 3.blind and
              other disabilities, <br /> 4.hearing disability, <br />{" "}
              5.Intellectual and Developmental Disabilities, <br /> 6.Multiple
              disability, <br />
              7.Leprosy cured persons
            </div>
          </div>

          <div>
            <h2 className={style.subheading}>Website Link</h2>
            <div className={style.content}>
              <Link href="https://disabilityaffairs.gov.in/content/page/adip.php">
                https://disabilityaffairs.gov.in/content/page/adip.php
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
