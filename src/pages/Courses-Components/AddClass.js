import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import HeaderList from "../header&list/HeaderList";
import SendIcon from "@mui/icons-material/Send";
//////////////////


const AddClass = () => {
  const [NameC, setName] = useState("");
  const url = "http://127.0.0.1:3010";
  const handleTitleChange = (event) => {
    setName(event.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("name", NameC);
    try {
      const request = await axios.post(`${url}/class`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: sessionStorage.getItem("Token"),
        },
      });
      console.log(request.data);
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <>
        <HeaderList />
        <div className="Card-Add-User">
          <Card sx={{ minWidth: 200 }}>
            <Typography color="text.secondary" className="Typography-name">
              Add Info Class
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit} className="Form-add-user">
                <label>
                  <TextField
                    id="standard-textarea"
                    label="Class Name"
                    multiline
                    variant="standard"
                    value={NameC}
                    onChange={handleTitleChange}
                    helperText={
                      NameC.length < 3 ? "Most be more than 3 char" : ""
                    }
                    required
                  />
                </label>
                {NameC && (
                  <div className="user-info">
                    <h3>{NameC}</h3>
                  </div>
                )}
                <Button
                 
                  type="submit"
                  color="secondary"
                  className="ButtonAdd-teacher"
                >
                  إضافة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </>
    </>
  );
};

export default AddClass;
