import React from "react";
import "./Teacherpage.css";
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
import ContainerPage from "../container-page/ContainerPage.js";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderList from "../header&list/HeaderList.js";
import axios from "axios";
import { url } from "../../App.js";

function Teacher() {
  // const [isDeleting, setIsDeleting] = useState(false);
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

            <Link to="/dataTeacher">
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
            <div className="section-items">
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
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                              <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                  deleteTeacher(teacher.teacher_id);
                                }}
                              >
                                Delete
                              </Button>
                            </Grid>

                            <Grid item xs={8}>
                              <Link to="/EditTeacher" state={{ teacher }}>
                                <Button
                                  variant="outlined"
                                  endIcon={<ModeEditOutlineIcon />}
                                >
                                  Edit
                                </Button>
                              </Link>
                            </Grid>
                          </Grid>
                        </Box>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>there is no teachers</p>
              )}
            </div>
          </SectionWrapper>
        </ContainerPage>
      </div>
    </>
  );
}

export default Teacher;
