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
import { useState , useEffect } from "react";
import HeaderList from "../header&list/HeaderList.js";


const url = "http://127.0.0.1:3010";
function Teacher() {
      const [userData, setUserData] = useState([]);
      
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${url}/user/teacher`, {
            headers: {
              authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoxLCJpYXQiOjE3MTU1MDc2NjYsImV4cCI6MTcxNTU5NDA2Nn0.B8F7tAi4RC4eWKEwXyouN-DR1GSeg9nlZ1QYXfLKZyc",
            },
          });
          const jsonData = await response.json();
          console.log(jsonData)
           setUserData(jsonData); // لتغيير القيمة 
        };
        fetchData();
      }, []);


  return (
    <>
      <HeaderList />
      <div className="Teacher">
        <ContainerPage>
          <div className="hero-main">
            <h5 className="hero-title">
              <em>T</em>eacher{" "}
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
              {/* Data  catd  .    */}
              {/* <div className="section-item">
              <div className="cards">
                <img className="section-items-image" src={''} />
                <div className="section-item-content">
                  <h4 className="section-item-title1">{''}</h4>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                      <Grid item xs={8}>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                          Delete
                        </Button>
                      </Grid>
                      <Grid item xs={8}>
                        <Button
                          variant="outlined"
                          endIcon={<ModeEditOutlineIcon />}
                        >
                          Edit
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </div>
            </div> */}

              {/*  End Data  catd .    */}
            </div>
          </SectionWrapper>
        </ContainerPage>
      </div>
    </>
  );
}

export default Teacher;
