import React, { useState , useEffect} from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { url } from "../../../../config";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import axios from "axios";

const QuestionLecture = (props) => {
  const { lecture, unit_id, course_id } = props.id;
  const { lecture_id } = lecture;
  const [selectedOption, setSelectedOption] = useState(); // State for selected radio button
  const [data, setData] = useState([]); // State to store API data
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Fetch data from API on component mount


 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(
       `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}/question`,
       {
         headers: {
           authorization: sessionStorage.getItem("Token"),
         },
       }
     );
     
    setData(response.data);
    console.log(response.data);
   };
   fetchData().catch((error) => {
     console.log(error);
   });
 }, []);

  return (
    <>
      <div className="section-header-iteml">
        <Link to="/AddQuestion" state={{ course_id, unit_id, lecture_id ,}}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add </Button>
          </CardActions>
        </Link>
        <div className="redio-style">
          <FormLabel id="demo-row-radio-buttons-group-label">
            {''}
          </FormLabel>
          {/* {data.map((item) => (
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              style={{ background: "black" }}
            >
              <FormControlLabel
                control={<Radio />}
                label={"dfioad"}
                value={item.id}
                checked={selectedOption === item.id} // Set checked based on selected option
                onChange={handleRadioChange}
              />
              <FormControlLabel
                value={item.id}
                checked={selectedOption === item.id} // Set checked based on selected option
                onChange={handleRadioChange}
                control={<Radio />}
                label={""}
              />
              <FormControlLabel
                value={item.id}
                checked={selectedOption === item.id} // Set checked based on selected option
                onChange={handleRadioChange}
                control={<Radio />}
                label={""}
              />
            </RadioGroup>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default QuestionLecture;
