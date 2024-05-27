import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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
  }, [location.state]);

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
        {questions.map((question) => (
          <div key={question.question_id} className="radio-style">
            <FormControl component="fieldset">
              <FormLabel component="legend">{question.question}</FormLabel>
              <RadioGroup
                row
                aria-label="quiz"
                name="quiz"
                value={selectedOption}
                onChange={handleRadioChange}
              >
                {question.choices.map((choice) => (
                  <FormControlLabel
                    key={choice.choice_id}
                    value={choice.choice_id}
                    control={<Radio />}
                    label={`${choice.choice} ${choice.is_correct ? "(Correct)" : ""}`}
                  />
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
