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

const LectureComponent = (props) => {
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
        {LectuerData.map((lecture) => (
          <div className="CardUnit" key={lecture.lecture_id}>
            <div style={{ width: "270px", margin: "10px" }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    <span>Unit Title :</span> {lecture.title}
                  </Typography>
                  <Typography sx={{ mb: 1.0 }} color="text.secondary">
                    <span style={{}}>Lecture Number :</span>
                    {lecture.lecture_number}
                  </Typography>
                  <Typography sx={{ mb: 1.0 }} color="text.secondary">
                    <span>lecture_desc :</span> {lecture.lecture_desc}
                  </Typography>
                </CardContent>
                <CardActions className="ButtonUnit">
                  <Link to="/" state={{}}>
                    <Button
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      style={{ width: "10px" }}
                    >
                      Open
                    </Button>
                  </Link>
                  <Button
                    size="small"
                    startIcon={<DeleteIcon />}
                    style={{ width: "10px" }}
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
                    <Button
                      size="small"
                      startIcon={<AutoFixNormalOutlinedIcon />}
                      style={{ width: "10px" }}
                    >
                      Edit
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LectureComponent;
