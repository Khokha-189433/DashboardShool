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
import Checkbox from "@mui/material/Checkbox";
import { collapseClasses } from "@mui/material";

const AddQuestion = () => {
  const { course_id, unit_id, lecture_id } = useLocation().state;
  //   console.log({ course_id, unit_id, lecture_id });

  const [Question, setQuestion] = useState("");
  const [Choices, setChoices] = useState([]);
  const [Checked, setChecked] = useState(null);
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  //  اضافة حقل جديد الى النص
  const handleAddAnswerChange = () => {
    setChoices([...Choices, { text: "", checked: false }]);
  };
  //
  const handleAnswerChange = (event, index) => {
    // لتحديث القيمة في الحقل النصي المحدد
    const newtextinput = [...Choices];
    newtextinput[index].text = event.target.value;
    setChoices(newtextinput);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    try {
      const request = await axios.post(
        `${url}/course/${course_id}/unit/${unit_id}/Lecture/${lecture_id}/question`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: sessionStorage.getItem("Token"),
          },
        }
      );
      setChoices(request.data);
      console.log(setChoices);

      window.history.back();
    } catch (error) {
      console.log(error);
    }
  }

  ///// to delete text answer
  function handelDelete(i) {
    const deleteinput = [...Choices];
    deleteinput.splice(i, 1);
    setChoices(deleteinput);
  }
  function handlechechedChange(event, index) {
    const newchecedinput = [...Choices];
    newchecedinput[index] = event.target.checked;
    setChecked(newchecedinput);
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
                  placeholder=" Questiones"
                  value={Question}
                  onChange={handleQuestionChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
                onClick={handleAddAnswerChange}
              >
                Add Answer
              </Button>
              {Choices.map((value, index) => (
                <div>
                  <label>
                    <input
                      key={index}
                      placeholder="answer"
                      onChange={(event) => {
                        handleAnswerChange(event, index);
                      }}
                      required
                      style={{ padding: "20px", fontSize: "20px" }}
                    />
                    <Checkbox
                      {...label}
                      key={index}
                      checked={Checked}
                      onChange={(event) => {
                        handlechechedChange(event, index);
                      }}
                      defaultChecked
                    />
                    <Button
                      onClick={() => {
                        handelDelete(index);
                      }}
                    >
                      Delete
                    </Button>
                  </label>
                </div>
              ))}

              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
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

export default AddQuestion;
