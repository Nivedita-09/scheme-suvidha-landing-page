import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import schemeSuvidha from "../../assets/icons/schemeSuvidha.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import PlayStore from "../../assets/icons/PlayStore.svg";
import AppStore from "../../assets/icons/AppStore.svg";
import AgentLogin from "../../assets/icons/AgentLogin.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={style.Footer}>
        <div className={style.Footer_Sec_1}>
          <div className={style.col_1}>
            <Image
              src={schemeSuvidha}
              width={225}
              height={225}
              className={style.footer_logo}
            />
          </div>
          <div className={style.col_2}>
            <div className={style.col_title}>Contact Us</div>
            <div className={style.col2_email}>Email: abc@abc.com </div>
            <div className={style.col2_phoneNo}>Phone No: 98766552134</div>
          </div>
          <div className={style.col_3}>
            <div className={style.col_title}>Social Accounts</div>
            <div className={style.col3_icons}>
              <Image src={Twitter} alt="Twitter" width={50} height={50} />
              <Image src={Instagram} alt="Instagram" width={50} height={50} />
              <Image src={Facebook} alt="Facebook" width={50} height={50} />
            </div>
          </div>
          <div className={style.col_4}>
            <div className={style.col4Btn}>
              <Link href="/" className={style.linkBtn}>
                <button>
                  <Image src={PlayStore} />
                  Play Store
                </button>
              </Link>
            </div>
            <div className={style.col4Btn}>
              <Link href="/" className={style.linkBtn}>
                <button>
                  <Image src={AppStore} />
                  App Store
                </button>
              </Link>
            </div>
            <div className={style.col4Btn}>
              <Link href="/" className={style.linkBtn}>
                <button>
                  <Image src={AgentLogin} />
                  Agent Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.Footer_Sec_2}></div>
      </div>
    </>
  );
}
