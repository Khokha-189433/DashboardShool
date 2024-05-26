import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../App";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const PDFLecture = (props) => {
  const { lecture, unit_id, course_id } = props.id;
  const { lecture_id } = lecture;
  const [PDFData, setPDFData] = useState("");

  useEffect(() => {
    if (lecture.pdf) setPDFData(lecture.pdf);
  }, []);

  return (
    <>
      <div key={PDFData.pdf_id} className="section-header-iteml">
        {!PDFData ? (
          <Link to="/AddPDFLecture" state={{ course_id, unit_id, lecture_id }}>
            <CardActions className="ButtonAdd">
              <Button startIcon={<AddOutlinedIcon />}>Add </Button>
            </CardActions>
          </Link>
        ) : (
          <div className="Cards-pdf">
            <div key={"lecture.lecture_id"}>
              <div variant="outlined">
                <div>
                  <div className="Style-video-lectuer"></div>
                  <div className="Text-Video">
                    <h2> Title: {PDFData.title} </h2>
                    <h2> Size : {PDFData.size} </h2>
                  </div>
                </div>
                <CardActions className="ButtonLecture">
                  <a href={url + "/" + PDFData.url}>
                    <Button startIcon={<CloudUploadIcon />}> dwonload </Button>
                  </a>
                </CardActions>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PDFLecture;
