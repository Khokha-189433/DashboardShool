import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import { url } from "../../../config.js";
import HeaderList from "../../header&list/HeaderList.js";
import { useLocation } from "react-router-dom";

const EditUnit = () => {
    
  const unit_id = useLocation().state.unit.unit_id;

  const course_id = useLocation().state.course_id;
  const [editNameUnit, seteditNameUnit] = useState("");
  const [editNumberUnit, seteditNumberUnit] = useState("");

  const handleEditTitleChange = (event) => {
    seteditNameUnit(event.target.value);
  };
  const handleEditNumberUnitChange = (event) => {
    seteditNumberUnit(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("title", editNameUnit);
    formData.append("unit_number", editNumberUnit);

    try {
      const request = await axios.put(
        `${url}/course/${course_id}/unit/${unit_id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
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
          <CardContent>z
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label>
                <input
                  id="standard-textarea"
                  placeholder="Unit Name"
                  value={editNameUnit}
                  onChange={handleEditTitleChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>

              <label>
                <input
                  id="standard-textarea"
                  type="number"
                  placeholder="Unit Number"
                  value={editNumberUnit}
                  onChange={handleEditNumberUnitChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              {editNameUnit && (
                <div className="user-info">
                  <h3>{editNameUnit}</h3>
                </div>
              )}
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

export default EditUnit;
