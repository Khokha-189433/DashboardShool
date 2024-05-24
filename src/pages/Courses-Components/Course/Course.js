import React from "react";
import HeaderList from "../../header&list/HeaderList.js";
/////////////////////////
import Seaction from "../../sectionHeader/Seaction.js";
import SectionWrapper from "../../Section-Wrapper/SectionWrapper.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { url } from "../../../App.js";
import Unit from "../UnitComponent/Units.js";
//////////////////////////////

const Course = () => {
  const [CourseData, setCourseData] = useState({});
  const [ClassData, setClassData] = useState({});
  const [TeacherData, setTeacherData] = useState({});

  const course_id = useLocation().state.id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/course/${course_id}`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      const jsonData = response.data;
      setCourseData(jsonData.data); // لتغيير القيمة
      setTeacherData(jsonData.data.teacher);
      setClassData(jsonData.data.class);
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
              <em>C</em>ourse
            </h5>
            <div className="showDataCourse" key={CourseData.course_id}>
              <h4>
                <span>name : </span>
                {CourseData.title}
              </h4>
              <h4>
                <span>Price : </span>
                {CourseData.course_fee}
              </h4>
              <h4>
                <span>About Course : </span>
                {CourseData.about_the_course}
              </h4>
              <h4>
                <span>Class : </span>
                {ClassData.name}
              </h4>
              <h4>
                <span> Teacher : </span>
                {TeacherData.name}
              </h4>
            </div>
          </div>
        </div>
        <SectionWrapper>
          <Seaction title="Units"></Seaction>
          <Unit id={course_id} />
        </SectionWrapper>
      </div>
    </>
  );
};

export default Course;
