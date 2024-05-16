import React from "react";
import CardPl from "./CardPl";
import photo from "../../assets/images/photo.jpg";
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
const PlayList = () => {
  return (
    <>
      <SectionWrapper>
        <Seaction title="play List"></Seaction>
        <div className="section-header-items">
          {/* -------cards ------------- */}
          <CardPl image={photo} title="title framework" />
          <CardPl image={photo} title="title framework" />
          <CardPl image={photo} title="title framework" />
          <CardPl image={photo} title="title framework" />
          {/* ===================================== */}
          {/* -------cards ------------- */}
        </div>
      </SectionWrapper>
      <br />
      <SectionWrapper>
        <Seaction title="play List"></Seaction>
        <div className="section-header-items"></div>
      </SectionWrapper>
    </>
  );
};

export default PlayList;
