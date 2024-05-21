import * as React from "react";
import "./Courser.css";
//////////////////////////////////
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
///////// Component //////////////
import HeaderList from "../../header&list/HeaderList.js";
import CardPl from "./CourseCard.js";
import ClassCard from "../../Class-Components/ClassCard.js";
import Seaction from "../../sectionHeader/Seaction.js";
import SectionWrapper from "../../Section-Wrapper/SectionWrapper.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../../App.js";
//////////////////////////////////

const Courses = () => {
  ///// for Show the class /////////
  const [ClassData, setClassData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/class`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      const jsonData = response.data;
      setClassData(jsonData.data); // لتغيير القيمة
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  /// for Show the teacher ///////
  const [CoursesData, setCoursesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/course`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      const jsonData = response.data;
      console.log(jsonData.data);
      setCoursesData(jsonData.data); // لتغيير القيمة
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
              <em>C</em>ourse{" "}
            </h5>
            <Link to="/AddCourse">
              <Button variant="outlined" startIcon={<AddIcon />}>
                add Course
              </Button>
            </Link>
            <Link to="/AddClass">
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                style={{ marginLeft: "12px" }}
              >
                add class
              </Button>
            </Link>
          </div>
        </div>
        <SectionWrapper>
          <Seaction title="Courses"></Seaction>
          <div className="section-header-items">
            {/* -------cards ------------- */}

            {CoursesData.map((course) => (
              <div key={course.course_id} className="Class-Course">
                <CardPl
                  image={url + "/" + course.photo}
                  title={course.title}
                  price={"Price  :" + course.course_fee}
                  class={"Class" + " : " + course.class.name}
                  teacher={"Teacher" + " : " + course.teacher.name}
                  id={course.course_id}
                />
              </div>
            ))}

            {/* =========================== */}
            {/* -------cards ------------- */}
          </div>
        </SectionWrapper>
        <br />
        <SectionWrapper>
          {/* -------class ------------- */}
          <Seaction title="Class"></Seaction>
          <div className="section-Class">
            {ClassData.map((event) => (
              <div key={event.class_id} C>
                <ClassCard
                  id={event.class_id}
                  title={event.name}
                  NameButtun="Delete"
                />
              </div>
            ))}
          </div>
          {/* -------class ------------- */}
        </SectionWrapper>
      </div>
    </>
  );
};

export default Courses;
