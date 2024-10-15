import React from "react";
import HeaderList from "../header&list/HeaderList.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../config.js";
import { useLocation } from "react-router-dom";
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
import ContainerPage from "../container-page/ContainerPage.js";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
function ProfileTeacher() {
  const teacher_id = useLocation().state;
  const [TeacherDa, setTeacherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${url}/teacher/${teacher_id}`, {
          headers: {
            authorization: sessionStorage.getItem("Token"),
          },
        })
        .catch((error) => {
          console.log(error);
        });
      const jsonData = response.data;
      console.log(jsonData);
      setTeacherData(jsonData.data); // لتغيير القيمة
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <HeaderList />
      <div className="Teacher">
        <ContainerPage>
          <div className="hero-main">
            <h5 className="hero-title">
              <h4>
                <span>name : </span>
                {TeacherDa.name}
              </h4>
              <img
                className="section-items-image"
                src={url + "/" + TeacherDa.photo}
                alt={TeacherDa}
              />
            </h5>
          </div>
          <SectionWrapper>
            <Seaction></Seaction>
            <div className="Table_Card">
              <div className="Table_Card">
                <table style={{ width: "1000px" }}>
                  <thead>
                    <tr key={"header"}>
                      <th>Title</th>
                      <th>Price</th>
                      <th>AboutCourse</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {TeacherDa.courses ? (
                      TeacherDa.courses.map((course) => (
                        <tr key={course.course_id}>
                          <td>{course.title}</td>
                          <td>{course.course_fee} </td>
                          <td>{course.about_the_course}</td>
                          <td>
                            <Grid item xs={8}>
                              <Link to="/Course" state={course}>
                                <Button
                                  style={{
                                    border: "1px solid black",
                                    color: "white",
                                  }}
                                  className="buttonStyle"
                                >
                                  Open
                                </Button>
                              </Link>
                            </Grid>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>There is no courses for this teacher</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </SectionWrapper>
        </ContainerPage>
      </div>
    </>
  );
}

export default ProfileTeacher;
