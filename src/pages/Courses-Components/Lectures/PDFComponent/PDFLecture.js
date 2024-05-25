import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../App";

const PDFLecture = (props) => {
  const { lecture, unit_id, course_id } = props.id;
  const { lecture_id } = lecture;
  const [PDFData, setPDFData] = useState(lecture.pdf);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}/pdf`,
        {
          headers: {
            authorization: sessionStorage.getItem("Token"),
            "Content-Type": "application/pdf",
          },
        }
      );
      setPDFData(response.data.data);
      console.log(PDFData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div key={PDFData.pdf_id} className="section-header-iteml">
        <Link to="/AddPDFLecture" state={{ course_id, unit_id, lecture_id }}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add </Button>
          </CardActions>
        </Link>

        <div className="Cards-pdf">
          <div key={"lecture.lecture_id"}>
            <div variant="outlined">
              <div>
                <div className="Style-video-lectuer"></div>
                <div className="Text-Video">
                  <h2>Title: {PDFData.title}</h2>
                  <h2>Size: {PDFData.size}</h2>
                  <a href={url + "/" + PDFData.url}> Dummy</a>{" "}
                </div>
              </div>
              <CardActions className="ButtonLecture">
                <Button
                  startIcon={<DeleteIcon />}
                  // onClick={() => {
                  //   deleteLectuer(lecture.lecture_id, course_id, unit_id);
                  // }}
                >
                  delete
                </Button>
              </CardActions>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFLecture;
