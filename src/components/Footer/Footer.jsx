import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import Location from "../../assets/location.png";

import { AiFillInstagram, AiFillYoutube, AiFillGithub,AiFillFacebook } from "react-icons/ai";

import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
//mport css from "./Footer.module.css";

const Footer = () => {
  return (

    
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Coshopsmetic Queens</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              {/* <LocationMarkerIcon className={css.icon} /> */}
              <img src={Location} className="{css.icon}"/>
              <span>188 kotla mubarakpur,new delhi</span>

              <aside>
        <h4 >Follow Us</h4>

        <a href="https://www.youtube.com/channel/UCxY3-LNpPUET4v6NlbjTVWg">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/harshraj2097">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Harshraj843112">
          <AiFillGithub />
        </a>

        <a href="https://facaebook.com/Hâŕšh-Řàj">
          <AiFillFacebook/>
        </a>
      </aside>

            </span>
          </div>
        </div>
      </div>
    </div>
 


  );
};

export default Footer;
