import React from "react";
import style from "./ViewNgo.module.scss";
import Image from "next/image";
import Link from "next/link";
import NgoLogo from "../../../assets/images/Narayan_seva_sanstha.webp";

export default function ViewNgo() {
  return (
    <>
      <div className={style.ViewNgo}>
        <div className={style.Heading}>NGO DETAILS</div>
        <div className={style.ngoLogo_div}>
          <Image
            src={NgoLogo}
            alt="logo"
            width={200}
            height={200}
            className={style.NgoLogo}
          />
        </div>
        <div className={style.ngoName}>
          <h1>Narayan Seva Sansthan</h1>
        </div>
        <div className={style.ngoInformation}>
          <div className={style.founderInfo}>
            <div>
              <h2 className={style.subheading}>Founder Name</h2>
              <div className={style.content}>Kailash Chandra Agrawal</div>
            </div>
            <div>
              <h2 className={style.subheading}>Founder Contact No.</h2>
              <div className={style.content}>8308295272</div>
            </div>
            <div>
              <h2 className={style.subheading}>Founded In</h2>
              <div className={style.content}>1985</div>
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Address</h2>
            <div className={style.content}>
              Narayan Seva Sansthan Seva Dham Seva Nagar, Hiran Magri, Sector
              -4, Udaipur (Rajasthan) - 313001 INDIA
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Email Id</h2>
            <div className={style.content}>info@narayanseva.org</div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Contact No.</h2>
            <div className={style.content}>7023509999</div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Details</h2>
            <div className={style.content}>
              Narayan Seva Sansthan is a Non-profit Organization based in
              Udaipur, Rajasthan which has been providing its service for more
              than 35 years. It aims to help specially-abled children and adults
              to develop essential skills. This organization helps those
              belonging to the economically disadvantaged sections of society by
              providing free-of-cost surgeries to patients suffering from polio
              and other congenital disabilities.The NGO provides
              differently-abled people with various free-of-cost services which
              include conduction of regular polio diagnostic and treatment for
              selection and corrective surgery camps, distribution of artificial
              limbs, crutches, calipers, sweaters, tricycles, wheelchairs,
              hearing aids, blind sticks, clothes, school uniforms, blankets,
              sewing machines, etc. among the poor and needy. It facilitates
              daily diagnosis of 300-400 patients and has successfully conducted
              80 to 90 corrective surgeries of patients suffering from polio and
              similar disabilities.
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Facebook Link</h2>
            <div className={style.content}>
              <Link href="https://www.facebook.com/narayansevasansthan">
                https://www.facebook.com/narayansevasansthan
              </Link>
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Instagram Link</h2>
            <div className={style.content}>
              <Link href="https://www.instagram.com/narayansevasansthan/">
                https://www.instagram.com/narayansevasansthan/
              </Link>
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Twitter Link</h2>
            <div className={style.content}>
              <Link href="https://twitter.com/narayanseva_">
                https://twitter.com/narayanseva_
              </Link>
            </div>
          </div>
          <div>
            <h2 className={style.subheading}>NGO Website Link</h2>
            <div className={style.content}>
              <Link href="https://www.narayanseva.org/">
                https://www.narayanseva.org/
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
