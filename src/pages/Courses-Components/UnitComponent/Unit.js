import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../App";

const Unit = ({ id }) => {
  let course_id = id;

  const [UnitData, setUnitData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${url}/course/${id}/unit`, {
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
        <div className="CardUnit">
          {UnitData.map((unit) => (
            <div key={unit.unit_id} style={{ width: "270px", margin: "10px" }}>
              <Card variant="outlined">
                <CardContent>
                  <h2 color="text.secondary"> Unit Title : {unit.title}</h2>
                  <Typography sx={{ mb: 1.0 }} color="text.secondary">
                    Unit Number {unit.unit_number}
                  </Typography>
                </CardContent>
                <CardActions className="ButtonUnit">
                  <Link to="/Unit" state={{unit , course_id} }>
                    <Button
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      style={{ width: "10px" }}
                    >
                      Open
                    </Button>
                  </Link>
                  <Button
                    size="small"
                    startIcon={<DeleteIcon />}
                    style={{ width: "10px" }}
                    onClick={() => {
                      deleteUnit(course_id, unit.unit_id);
                    }}
                  >
                    delete
                  </Button>
                  <Link to="/EditUnit" state={{ unit, course_id }}>
                    <Button
                      size="small"
                      startIcon={<AutoFixNormalOutlinedIcon />}
                      style={{ width: "10px" }}
                    >
                      Edit
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Unit;
