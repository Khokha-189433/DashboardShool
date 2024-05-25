import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import { url } from "../../../../config.js";
import HeaderList from "../../../header&list/HeaderList.js";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const AddPDFLecture = () => {
  const { course_id, unit_id, lecture_id } = useLocation().state;
  console.log({ course_id, unit_id, lecture_id });

  const [PDF, setPDF] = useState(null);
  const [TitlePDFLectuer, setTitlePDFLectuere] = useState("");

  const handleTitleLectureChange = (event) => {
    setTitlePDFLectuere(event.target.value);
  };
  const handlePDFectureChange = (event) => {
    setPDF(event.target.files[0]);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("title", TitlePDFLectuer);
    formData.append("pdf",PDF)
    try {
      const request = await axios.post(
        `${url}/course/${course_id}/unit/${unit_id}/Lecture/${lecture_id}/pdf`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: sessionStorage.getItem("Token"),
          },
        }
      );
      console.log(request.data);

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
                  id="standard-textarea"
                  type="text"
                  placeholder=" title"
                  value={TitlePDFLectuer}
                  onChange={handleTitleLectureChange}
                  required
                  style={{ padding: "20px", fontSize: "15px" }}
                />
              </label>
              <label>
                <input type="file" onChange={handlePDFectureChange} />
              </label>
              {TitlePDFLectuer && (
                <div className="user-info">
                  <h3>{TitlePDFLectuer}</h3>
                </div>
              )}
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

export default AddPDFLecture;
