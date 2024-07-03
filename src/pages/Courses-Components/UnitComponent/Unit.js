import React, { useEffect, useState } from "react";
import Seaction from "../../sectionHeader/Seaction.js";
import SectionWrapper from "../../Section-Wrapper/SectionWrapper.js";
import HeaderList from "../../header&list/HeaderList.js";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { url } from "../../../config.js";
import LectureComponent from "../Lectures/Lectures.js";

const Unit = () => {
  const course_id = useLocation().state.course_id;
  const unit_id = useLocation().state.unit.unit_id;
  const [showUnitData, setshowUnitData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${url}/course/${course_id}/unit/${unit_id}`, {
          headers: {
            authorization: sessionStorage.getItem("Token"),
          },
        })
        .catch((error) => {
          console.log(error);
        });
      const jsonData = response.data;
      setshowUnitData(jsonData.data); // لتغيير القيمة
      console.log(jsonData);
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
              <em>U</em>nit
            </h5>
            <div className="showDataCourse" key={""}>
              <h4>
                <span>Title : </span>
                {showUnitData.title}
              </h4>
              <h4>
                <span>  number : </span>
                {showUnitData.unit_number}
              </h4>
            </div>
          </div>
        </div>
        <SectionWrapper>
          <Seaction title="Lectures"></Seaction>
          <LectureComponent
            unit_id={unit_id}
            course_id={course_id}
          ></LectureComponent>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Unit;
