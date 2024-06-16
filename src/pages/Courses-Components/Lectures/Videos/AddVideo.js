import React, { useState } from "react";
import HeaderList from "../../../header&list/HeaderList";
import axios from "axios";
import { url } from "../../../../config";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SendIcon from "@mui/icons-material/Send";

const AddVideo = () => {
  
  const { course_id, unit_id, lecture_id } = useLocation().state;
  const [Title, setTitle] = useState("");
  const [Video, setVideo] = useState(null);

  const handleTitleVideoChange = (event) => {
    setTitle(event.target.value);
  };
  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("title", Title);
    formData.append("video", Video);
    try {
      const request = await axios.post(
        `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}/video`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: sessionStorage.getItem("Token"),
          },
        }
      );
      console.log(request.data)
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <HeaderList />
      <div className="Card-Add-User">
        <Card sx={{ minWidth: 200 }}>
          <Typography color="text.secondary" className="Typography-name">
            Add Info Unit
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label>
                <input
                  placeholder="Video Title"
                  value={Title}
                  onChange={handleTitleVideoChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              <label>
                <input
                  id="vidue"
                  type="file"
                  accept="video/"
                  // value={VideoLecture}
                  onChange={handleVideoChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              {/* {VideoLecture && (
                <div className="user-info">
                  <video width="320" height="240" controls src={VideoLecture}>
                    <source src={VideoLecture} type="video/mp4" />
                  </video>
                </div>
              )} */}

              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
                endIcon={<SendIcon />}
              >
                Add
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddVideo;
