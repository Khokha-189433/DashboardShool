import React, { useState, useEffect } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useLocation } from "react-router-dom";

const QuestionLecture = (props) => {
  const { lecture_id, unit_id, course_id ,questions} = props.id;
  const [selectedOption, setSelectedOption] = useState(); // State for selected radio button
  const location = useLocation();

  useEffect(() => {
    console.log(questions)
    if (location.state?.newQuestionAdded) {
      // Optionally, fetch latest questions data or trigger a local state update
      console.log("A new question was added. Update the component accordingly.");
      // Reset the navigation state to prevent repeated triggers
      location.state.newQuestionAdded = false;
    }
  }, [questions,location.state]);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="section-header-iteml">
        <Link to="/AddQuestion" state={{ course_id, unit_id, lecture_id }}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add Question</Button>
          </CardActions>
        </Link>
        {questions.map((question , index) => (
          <div key={question.question_id} className="show-Question">
            <FormControl component="fieldset">
              <h1 component="legend"> {}{question.question}</h1>
              <RadioGroup
                row
                aria-label="quiz"
                name="quiz"
                value={selectedOption}
                onChange={handleRadioChange}
              >
                {question.choices.map((choice) => (
                  <h2 
                    key={choice.choice_id} 
                    style={{ fontWeight: choice.is_correct ? 'bold' : 'normal', color: choice.is_correct ? 'green' : 'black' }}
                    className="answer-style"
                  >
                    {choice.choice}
                  </h2>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionLecture;