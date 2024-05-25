import React, { useState, useEffect } from "react";
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

const Videos = (props) => {
  const { lecture, unit_id, course_id } = props.id;
  const { lecture_id } = lecture;

  const [video, setVideo] = useState("");
  const [TitleVideo, setTitleVideo] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}/video`,
        {
          headers: {
            authorization: sessionStorage.getItem("Token"),
            Accept: "video/mp4;charset=UTF-8",
          },
        }
      );
      const { size, url: video_url, title } = response.data.data;
      const finalVideoUrl = new URL(video_url, url).href;
      console.log("Video URL:", finalVideoUrl); // Debugging output
      setVideo(finalVideoUrl);
      setTitleVideo(title); // لتغيير القيمة
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className="section-header-iteml">
        <Link to="/AddVideio" state={{ course_id, unit_id, lecture_id }}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add </Button>
          </CardActions>
        </Link>
        <div className="Cards-Lecture">
          <div key={lecture.lecture_id}>
            <div variant="outlined" className="Card_Lecture">
              <CardContent className="style-H-Lecture">
                <h1 color="text.secondary">Title: {TitleVideo}</h1>
                <video key={video} controls autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                </video>
              </CardContent>

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

export default Videos;
