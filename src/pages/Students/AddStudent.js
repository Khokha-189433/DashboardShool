import React, { useState, useEffect } from "react";
// import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
///////////////////////////////
import HeaderList from "../header&list/HeaderList.js";
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
//////////////////////////////
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../App.js";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const AddStudent = () => {
  // const Student_id = useLocation().state;
  // console.log(Student_id );
   const [Name, setName] = useState("");
   const [Email, setemail] = useState("");

     const handlenameChange = (event) => {
       setName(event.target.value);
     };
     const handleemailChange = (event) => {
       setemail(event.target.value);
     };

       async function handleSubmit(event) {
         event.preventDefault();

         const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
         formData.append("name", Name);
         formData.append("email", Email);

         try {
           const request = await axios.post(
             `${url}/Student`,
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
                  placeholder="Name"
                  value={Name}
                  onChange={handlenameChange}
                  required
                  style={{ padding: "20px", fontSize: "15px" }}
                />
              </label>

              <label>
                <input
                  id="standard-textarea"
                  type="email"
                  placeholder="Email"
                    value={Email}
                    onChange={handleemailChange}
                  required
                  style={{ padding: "20px", fontSize: "15px" }}
                />
              </label>
              {Name && (
                <div className="user-info">
                  <h3>{Name}</h3>
                  <h3> {Email}</h3>
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

export default AddStudent;
