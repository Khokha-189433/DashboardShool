import * as React from "react";
import "./Courser.css";
//////////////////////////////////
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import photo from "../../assets/images/photo.jpg";
///////// Component //////////////
import HeaderList from "../header&list/HeaderList";
import CardPl from "./CardPl";
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//////////////////////////////////

const Courses = () => {
  const url = "http://127.0.0.1:3010";
  ///// for Show the class
  const [ClassData, setClassData] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(`${url}/class`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      console.log(response.data);
      const jsonData = response.data;
      setClassData(jsonData.data); // لتغيير القيمة
    };
        fetchData().catch((error) => {
          console.log(error);
        });
   
  }, []);



 /// for Show the class
 const [CoursesData, setCoursesData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(`${url}/course`, {
       headers: {
         authorization: sessionStorage.getItem("Token")
       },
     });
     console.log(response.data);
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
          <Seaction title="play List"></Seaction>
          <div className="section-header-items">
            {/* -------cards ------------- */}
            {CoursesData.map((course) => (
              <CardPl image={photo} title="title framework" NameButtun="Open" />
            ))}

            {/* ===================================== */}
            {/* -------cards ------------- */}
          </div>
        </SectionWrapper>
        <br />
        <SectionWrapper>
          <Seaction title="Class"></Seaction>
          <div className="section-Class">
            {ClassData.map((event) => (
              <div key={event.class_id} className="Class-Course">
                <CardPl
                  id={event.class_id}
                  title={event.name}
                  NameButtun="Delete"
                />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Courses;
