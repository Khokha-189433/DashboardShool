import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import AddLecture from "./AddLecture";
import axios from "axios";
import { url } from "../../../config";

const Lectures = (props) => {
  const unit_id = props.unit_id;
  const course_id = props.course_id;
  console.log(unit_id);
  console.log(course_id);
  const [LectuerData, setLectuerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${url}/course/${course_id}/unit/${unit_id}/Lecture`, {
          headers: {
            authorization: sessionStorage.getItem("Token"),
          },
        })
        .catch((error) => {
          console.log(error);
        });
      const jsonData = response.data;
      setLectuerData(jsonData.data); // لتغيير القيمة
      console.log(jsonData.data);
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);



    ///////////////Delete Lecture//////////////////////
    async function deleteLectuer(lecture, course_id, unit_id) {
      try {
        const response = await axios.delete(
          `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture}`,
          {
            headers: {
              authorization: sessionStorage.getItem("Token"),
            },
          }
        );
        console.log("User deleted successfully:", response.data); // Handle successful deletion
        // Update UI to reflect the deletion (optional)
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle errors (e.g., display an error message to the user)
      }
    }

  return (
    <>
      <div className="section-header-iteml">
        <Link to="/AddLecture" state={{ course_id, unit_id }}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add </Button>
          </CardActions>
        </Link>
        <div className="Table_Card">
          <table>
            <thead>
              <tr key={"header"}>
                <th>Number </th>
                <th>Title </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {LectuerData.map((lecture) => (
                <tr key={lecture.lecture_id}>
                  <td>{lecture.lecture_number}</td>
                  <td>{lecture.title}</td>
                  <td>
                    <Link
                      to="/Lecture"
                      state={{
                        lecture_id: lecture.lecture_id,
                        unit_id,
                        course_id,
                      }}
                    >
                      <Button
                        style={{ border: "1px solid black", color: "white" }}
                        className="buttonStyle"
                      >
                        Open
                      </Button>
                    </Link>

                    <Button
                      style={{ border: "1px solid black", color: "white" }}
                      className="buttonStyle"
                      onClick={() => {
                        deleteLectuer(lecture.lecture_id, course_id, unit_id);
                      }}
                    >
                      delete
                    </Button>
                    <Link
                      to="/EditLectuer"
                      state={{ course_id, unit_id, lecture }}
                    >
                      <Button style={{border:"1px solid black" , color:"white"}}
                               className="buttonStyle">
                        Edit
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="Cards-Lecture">
          {LectuerData.map((lecture) => (
            <div key={lecture.lecture_id}>
              <div variant="outlined" className="Card_Lecture">
                <CardContent className="style-H-Lecture">
                  <h2
                    color="text.secondary"
                  >
                    Title :{lecture.title}
                  </h2>
                  <h4
                    sx={{ mb: 1.0 }}
                    color="text.secondary"
                  >
                    Number :{lecture.lecture_number}
                  </h4>
                  <h6
                    sx={{ mb: 1.0 }}
                    color="text.secondary"
                  
                  >
                    lecture_desc :{lecture.lecture_desc}
                  </h6>
                </CardContent>
      
                <CardActions className="ButtonLecture">

                  <Link to="/Lecture" state={{ lecture_id:lecture.lecture_id, unit_id, course_id }}>
                    <Button startIcon={<OpenInNewOutlinedIcon />}>Open</Button>
                  </Link>

                  <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                     deleteLectuer(
                      lecture.lecture_id,
                       course_id,
                       unit_id
                     );
                    }}
                  >
                    delete
                  </Button>
                  <Link
                    to="/EditLectuer"
                    state={{ course_id, unit_id, lecture }}
                  >
                    <Button startIcon={<AutoFixNormalOutlinedIcon />}>
                      Edit
                    </Button>
                  </Link>
                </CardActions>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Lectures;
