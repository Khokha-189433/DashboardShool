import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../config";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const PDFLecture = (props) => {
  const { lecture_id, unit_id, course_id, pdf } = props.id;

  const [PDFData, setPDFData] = useState(pdf);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}/pdf`,
          {
            headers: {
              authorization: sessionStorage.getItem("Token"),
            },
          }
        )
        .then((response) => {
          setPDFData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="section-header-iteml">
        {!PDFData ? (
          <div>
            <Link
              to="/AddPDFLecture"
              state={{ course_id, unit_id, lecture_id }}
            >
              <CardActions className="ButtonAdd">
                <Button startIcon={<AddOutlinedIcon />}>Add </Button>
              </CardActions>
            </Link>
          </div>
        ) : (
          <div key={PDFData.pdf_id}>
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
                      <Button startIcon={<CloudUploadIcon />}>
                        {" "}
                        dwonload{" "}
                      </Button>
                    </a>
                  </CardActions>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PDFLecture;
