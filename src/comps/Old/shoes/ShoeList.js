import React, { Component, useState } from "react";
import Styles from "../../scss/shoes.module.scss";
import ShoeDetail from "./ShoeDetail.js";
import ShoeData from "../../../shoedata/fgdata.json";
import FGLogo from "../../../Icons/Flogo.png";
import NLogo from "../../Icons/tag.png";
import TLogo from "../../Icons/Tekkie.png";
import MLogo from "../../Icons/MLogo.png";
import FLogo from "../../Icons/FLogo.png";
import KMLogo from "../../Icons/KidM.png";
import KFLogo from "../../Icons/KidF.png";
import SexLogo from "../../Icons/MLogo.png";

const ShoeList = ({ shoeData }) => {
  return (
    <div className={Styles.ShoeCon}>
      {shoeData.map((item, index) => {
        let Logo;
        let SexLogo;
        let Sex;

        // Shoe Provider Logo
        if (item.ShoeProvider.includes("FG")) {
          Logo = FGLogo;
        } else if (item.ShoeProvider.includes("T")) {
          Logo = TLogo;
        } else {
          Logo = NLogo;
        }

        // Shoe Sex Icon
        if (item.ShoeSex.includes("Male")) {
          Sex = Styles.SexMale;
          SexLogo = MLogo;
        } else if (item.ShoeSex.includes("Female")) {
          Sex = Styles.SexFemale;
          SexLogo = FLogo;
        } else if (item.ShoeSex.includes("KidM")) {
          Sex = Styles.SexKidM;
          SexLogo = KMLogo;
        } else if (item.ShoeSex.includes("KidM")) {
          Sex = Styles.KidF;
          SexLogo = KFLogo;
        }

        return (
          <ShoeDetail
            card={item}
            Logo={Logo}
            Sex={Sex}
            SexLogo={SexLogo}
            key={`shoe-list-key ${index}`}
          />
        );
      })}
    </div>
  );
};

export default ShoeList;
