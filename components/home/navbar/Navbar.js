import React from "react";
import style from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "../../../assets/icons/Logo.svg";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className={style.navigationBar}>
        <div className={style.logo_Div}>
          <Image className={style.logo} src={Logo} alt="Logo" />
          <div className={style.logoTitle}>Scheme Suvidha</div>
        </div>
        <div className={style.nav_links}>
          <ul className={style.menu}>
            <li className={style.li}>
              <Link className={style.a} href="/">
                Home
              </Link>
            </li>
            <li className={style.li}>
              <Link href="/Scheme_Learn_More" className={style.a}>
                Schemes
              </Link>
            </li>
            <li className={style.li}>
              <Link className={style.a} href="/Ngo_Learn_More">
                Ngos
              </Link>
            </li>
            <li className={style.li}>
              <Link className={style.a} href="/AboutUs">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
