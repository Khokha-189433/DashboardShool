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
import DataTeacher from "./DataTeacher.js";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState , useEffect } from "react";
import { TeacherContext } from "../../ContextComponent/TeacherContext.js";
import PhotoTeacher from "../../assets/images/images/pic-1.jpg";




function Teacher() {

      // useEffect(() => {
      //   fetch("https://")
      //     .then((response) => response.json())
      //     .then((data)));
      // }, []);

  const [infoTeacher, setinfoTeacher] = useState([]);

     const Data = infoTeacher.map((event) =>{
        
    }  )

  return (
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
          <Seaction title="Teacher"></Seaction>
          <div className="section-items">
            {/* Data  catd  .    */}

            <div className="section-item">
              <div className="cards">
                <img className="section-items-image" src={PhotoTeacher} />
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
            </div>

            {/*  End Data  catd .    */}
          </div>
        </SectionWrapper>
      </ContainerPage>
    </div>
  );
}

export default Teacher;
