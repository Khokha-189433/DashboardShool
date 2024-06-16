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
import SendIcon from "@mui/icons-material/Send";

const AddUnit = () => {
  const course_id = useLocation().state;
  console.log(course_id);

  const [NameUnit, setNameUnit] = useState("");
  const [NumberUnit, setNumberUnit] = useState("");

  const handleTitleChange = (event) => {
    setNameUnit(event.target.value);
  };
  const handleNumberUnitChange = (event) => {
    setNumberUnit(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("title", NameUnit);
    formData.append("unit_number", NumberUnit);

    try {
      const request = await axios.post(
        `${url}/course/${course_id}/unit`,
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
          <CardContent>
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label>
                <input
                  id="standard-textarea"
                  placeholder="Unit Name"
                  value={NameUnit}
                  onChange={handleTitleChange}
                  required
                  style={{ padding: "20px", fontSize: "15px" }}
                />
              </label>

              <label>
                <input
                  id="standard-textarea"
                  type="number"
                  placeholder="Unit Number"
                  value={NumberUnit}
                  onChange={handleNumberUnitChange}
                  required
                  style={{ padding: "20px", fontSize: "15px" }}
                />
              </label>
              {NameUnit && (
                <div className="user-info">
                  <h3>{NameUnit}</h3>
                </div>
              )}
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

export default AddUnit;
