import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import AddLecture from "./AddLecture";
import axios from "axios";
import { url } from "../../../App";

const Lectures = (props) => {
  const unit_id = props.unit_id;
  const course_id = props.course_id;
  console.log(unit_id);
  console.log(course_id);
  const [LectuerData, setLectuerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${url}/course/${course_id}/unit/${unit_id}/Lecture`, {
          headers: {
            authorization: sessionStorage.getItem("Token"),
          },
        })
        .catch((error) => {
          console.log(error);
        });
      const jsonData = response.data;
      setLectuerData(jsonData.data); // لتغيير القيمة
      console.log(jsonData.data);
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className="section-header-iteml">
        <Link to="/AddLecture" state={{ course_id, unit_id }}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add </Button>
          </CardActions>
        </Link>

        <div className="Cards-Lecture">
          {LectuerData.map((lecture) => (
            <div key={lecture.lecture_id}>
              <div variant="outlined" className="Card_Lecture">
                <CardContent className="style-H-Lecture">
                  <h2
                    color="text.secondary"
                  >
                    Title :{lecture.title}
                  </h2>
                  <h4
                    sx={{ mb: 1.0 }}
                    color="text.secondary"
                  >
                    Number :{lecture.lecture_number}
                  </h4>
                  <h6
                    sx={{ mb: 1.0 }}
                    color="text.secondary"
                  
                  >
                    lecture_desc :{lecture.lecture_desc}
                  </h6>
                </CardContent>
      
                <CardActions className="ButtonLecture">
                  <Link to="/Lecture" state={{ lecture, unit_id, course_id }}>
                    <Button startIcon={<OpenInNewOutlinedIcon />}>Open</Button>
                  </Link>
                  <Button
                    startIcon={<DeleteIcon />}
                    // onClick={() => {
                    //   deleteUnit(course_id, unit.unit_id);
                    // }}
                  >
                    delete
                  </Button>
                  <Link
                    to="/EditLectuer"
                    state={{ course_id, unit_id, lecture }}
                  >
                    <Button startIcon={<AutoFixNormalOutlinedIcon />}>
                      Edit
                    </Button>
                  </Link>
                </CardActions>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lectures;
