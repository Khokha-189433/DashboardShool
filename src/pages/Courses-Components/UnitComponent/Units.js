import React, { useState, useEffect } from "react";
import { Button  , Grid} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../config";

const Units = ({course}) => {
  const course_id = course.course_id;
  const [UnitData, setUnitData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${url}/course/${course_id}/unit`, {
          headers: {
            authorization: sessionStorage.getItem("Token"),
          },
        })
        .catch((error) => {
          console.log(error);
        });
      const jsonData = response.data;
      setUnitData(jsonData.data); // لتغيير القيمة
      console.log(jsonData.data);
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  async function deleteUnit(IdCourse, IdUnit) {
    try {
      const response = await axios.delete(
        `${url}/course/${IdCourse}/unit/${IdUnit}`,
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
        <Link to="/AddUnit" state={course_id}>
          <CardActions className="ButtonAdd">
            <Button startIcon={<AddOutlinedIcon />}>Add</Button>
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
              {UnitData.map((unit) => (
                <tr key={unit.unit_id}>
                  <td>{unit.unit_number}</td>
                  <td>{unit.title}</td>
                  <td>
                  
                      <Link to="/Unit" state={{ unit, course_id }}>
                        <Button startIcon={<OpenInNewOutlinedIcon />}>
                          Open
                        </Button>
                      </Link>
                      <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          deleteUnit(course_id, unit.unit_id);
                        }}
                      >
                        delete
                      </Button>
                      <Link to="/EditUnit" state={{ unit, course_id }}>
                        <Button startIcon={<AutoFixNormalOutlinedIcon />}>
                          Edit
                        </Button>
                      </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Units;
