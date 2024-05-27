import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import { url } from "../../../../config.js";
import HeaderList from "../../../header&list/HeaderList.js";
import { json, useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Checkbox from "@mui/material/Checkbox";

const AddQuestion = () => {
  const { course_id, unit_id, lecture_id } = useLocation().state;

  const [Question, setQuestion] = useState("");
  const [Choices, setChoices] = useState([{ Choice: "", isCorrect: false }]);

  const handleQuestionChange = (event) => {
    // اضافة سؤال
    setQuestion(event.target.value);
  };

  //  اضافة حقل جديد الى النص
  const handleAddAnswerChange = () => {
    setChoices([...Choices, { Choice: "", isCorrect: false }]);
  };

  function handleanswercheng(index, event) {
    const newchecedinput = [...Choices];
    newchecedinput[index] = event.target.value;
    setChoices(newchecedinput);
    console.log(newchecedinput);
  }
  //
  const handleCheckedChange = (event, id) => {
    const newtextinput = Choices.map((choice, index) => ({
      choice,
      is_correct: index === id ? event.target.checked : false,
    }));

    setChoices(newtextinput);
    console.log(newtextinput);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const choicesarray = [];
    Choices.forEach((i) => {
      choicesarray.push(i);
    });
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("question", Question);
    formData.append("choices", choicesarray);

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
      console.log(setChoices(request.data));
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
  ////////////////////////

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <HeaderList />
      <div className="Card-Add-User">
        <Card sx={{ minWidth: 200 }}>
          <Typography color="text.secondary" className="Typography-name">
            Add Question
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label>
                Question
                <input
                  placeholder=" Questiones"
                  value={Question}
                  onChange={handleQuestionChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>

              {/*  add answer */}
              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
                onClick={handleAddAnswerChange}
              >
                Add Answer
              </Button>

              {Choices.map((value, index) => (
                <div key={index}>
                  <label>
                    answer {index + 1}
                    <input
                      key={index}
                      type="text"
                      value={value.Choice}
                      placeholder="answer"
                      onChange={(event) => {
                        handleanswercheng(index, event);
                      }}
                      required
                      style={{ padding: "20px", fontSize: "20px" }}
                    />
                  </label>

                  <label></label>
                  <Checkbox
                    {...label}
                    key={index}
                    value={value.isCorrect}
                    onChange={(event) => {
                      handleCheckedChange(event, index);
                    }}
                  />
                  <Button
                    onClick={() => {
                      handelDelete(index);
                    }}
                  >
                    Delete
                  </Button>
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
