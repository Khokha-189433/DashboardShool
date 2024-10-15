import React from "react";
import "./Teacherpage.css";
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
import ContainerPage from "../container-page/ContainerPage.js";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderList from "../header&list/HeaderList.js";
import axios from "axios";
import { url } from "../../config.js";

function Teacher() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/teacher`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      const jsonData = await response.json();
      setUserData(jsonData.data); // لتغيير القيمة
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  //////// Delete Techer   /////////

  async function deleteTeacher(id) {
    try {
      const response = await axios.delete(`${url}/teacher/${id}`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      console.log("User deleted successfully:", response.data); // Handle successful deletion
      // Update UI to reflect the deletion (optional)
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle errors (e.g., display an error message to the user)
    }
  }

  //////// End Delete Techer   /////////

  return (
    <>
      <HeaderList />
      <div className="Teacher">
        <ContainerPage>
          <div className="hero-main">
            <h5 className="hero-title">
              <em>T</em>eachers
            </h5>

            <Link to="/AddTeacher">
              <Button
                variant="outlined"
                startIcon={<GroupAddIcon />}
                className="Button-add-Teacher"
              >
                add Teacher
              </Button>
            </Link>
          </div>
          <SectionWrapper>
            <Seaction></Seaction>
            <div className="Table_Card">
              <table>
                <thead> 
                  <tr key={"header"}>
                    <th>Title</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {userData ? (
                    userData.map((teachers) => (
                      <tr key={teachers.class_id}>
                       <td>{teachers.name}</td>
                        <td>
                          <Grid item xs={8}>
                            <Link
                              to="/ProfileTeacher"
                              state={teachers.teacher_id}
                            >
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

                          <Grid item xs={8}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid black",
                                color: "white",
                              }}
                              className="buttonStyle"
                              onClick={() => {
                                deleteTeacher(teachers.teacher_id);
                              }}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>there is no teachers</p>
                  )}
                </tbody>
              </table>
            </div>
            {/* <div className="section-items">
              {userData ? (
                userData.map((teacher) => (
                  <div className="section-item" key={teacher.teacher_id}>
                    <div className="cards">
                      <img
                        className="section-items-image"
                        src={url + "/" + teacher.photo}
                        alt={teacher.name}
                      />
                      <div className="section-item-content">
                        <h4 className="section-item-title1">{teacher.name}</h4>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>there is no teachers</p>
              )}
            </div> */}
          </SectionWrapper>
        </ContainerPage>
      </div>
    </>
  );
}

export default Teacher;
