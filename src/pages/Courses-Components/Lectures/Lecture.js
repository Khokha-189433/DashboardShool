import React, { useEffect, useState } from "react";
import Seaction from "../../sectionHeader/Seaction.js";
import SectionWrapper from "../../Section-Wrapper/SectionWrapper.js";
import HeaderList from "../../header&list/HeaderList.js";
import { useLocation } from "react-router-dom";
import Videos from "./Videos/Videos.js";
import PDFLecture from "./PDFComponent/PDFLecture.js";
import axios from "axios";
import { url } from "../../../App.js";

const Lecture = () => {
  const { lecture, unit_id, course_id } = useLocation().state;
  const { lecture_id, title, lecture_desc, lecture_number } = lecture;
  const [Video, setVideo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}`,
          {
            headers: {
              authorization: sessionStorage.getItem("Token"),
            },
          }
        )
        .catch((error) => {
          console.log(error);
        });
      setVideo(response.data.data.videos);
      console.log(Video);
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <HeaderList />
      <div className="container-div">
        <div className="hero-main">
          <div className="hero-text">
            <h5 className="hero-title">
              <em>L</em>ecture
            </h5>
            <div className="showDataCourse" key={""}>
              <h4>
                <span>Title : </span>
                {title}
              </h4>
              <h4>
                <span> Lecture number : </span>
                {lecture_number}
              </h4>
              <h4>
                <span> lecture Description : </span>
                {lecture_desc}
              </h4>
            </div>
          </div>
        </div>
        <SectionWrapper>
          <Seaction title="Videos"> </Seaction>
          <Videos id={{ lecture, unit_id, course_id }}></Videos>
        </SectionWrapper>
        <SectionWrapper>
          <Seaction title="PDF"> </Seaction>
          <PDFLecture id={{ lecture, unit_id, course_id }}></PDFLecture>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Lecture;
