import * as React from "react";
import "./Styls.css";
//////////////////////////////////
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
///////// Component //////////////
import HeaderList from "../../header&list/HeaderList.js";
import TestTable from "./CoursesTable.js";
import ClassCard from "../../Class-Components/ClassCard.js";
import Seaction from "../../sectionHeader/Seaction.js";
import SectionWrapper from "../../Section-Wrapper/SectionWrapper.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../../config.js";
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
              <em>C</em>ourses
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

            {
              <div className="Class-Course">
                <TestTable
                  data={CoursesData}
                />
              </div>
            }

            {/* =========================== */}
            {/* -------cards ------------- */}
          </div>
        </SectionWrapper>
        <br />
        <SectionWrapper>
          {/* -------class ------------- */}
          <Seaction title="Class"></Seaction>
          <div className="section-Class">
            {
                <ClassCard class={ClassData}/>
            }
          </div>
          {/* -------class ------------- */}
        </SectionWrapper>
      </div>
    </>
  );
};

export default Courses;
