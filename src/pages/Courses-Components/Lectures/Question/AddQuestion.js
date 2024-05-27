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
  const [Choices, setChoices] = useState([{ choice: "", is_correct: false }]);

  const handleQuestionChange = (event) => {
    // اضافة سؤال
    setQuestion(event.target.value);
  };

  //  اضافة حقل جديد الى النص
  const handleAddAnswerChange = () => {
    setChoices([...Choices, { choice: "", is_correct: false }]);
  };

  function handleanswercheng(index, event) {
    const newChoices = [...Choices];
    newChoices[index] = { ...newChoices[index], choice: event.target.value };
    setChoices(newChoices);
  }
  //
  const handleCheckedChange = (event, id) => {
    const newChoices = Choices.map((choice, index) => ({
      ...choice,
      is_correct: index === id ? event.target.checked : false,
    }));

    setChoices(newChoices);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const request = await axios.post(
        `${url}/course/${course_id}/unit/${unit_id}/Lecture/${lecture_id}/question`,
        {
          choices: Choices,
          question: Question,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: sessionStorage.getItem("Token"),
          },
        }
      );
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
                <div>
                  <label>
                    answer {index + 1}
                    <input
                      key={index}
                      type="text"
                      value={value.choice}
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
                    checked={value.is_correct}
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

export default AddQuestion;
