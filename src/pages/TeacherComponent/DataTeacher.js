import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderList from "../header&list/HeaderList";

let teacher_photo = null;
const DataTeacher = (props) => {
  const url = "http://127.0.0.1:3010";
  const [image, setImage] = useState(null);
  const [Name, setName] = useState("");

  const handleTitleChange = (event) => {
    setName(event.target.value);
  };
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      //    شرط اذا كان العنصر يلي بدي دخله من نوع File صورة
      setImage(URL.createObjectURL(event.target.files[0]));
      teacher_photo = event.target.files[0];
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("name", Name);
    formData.append("photo", teacher_photo);

    try {
      const request = await axios.post(`${url}/user/teacher`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(request.data);
    } catch (error) {
      console.log(error);
    }
    setImage("");
    setName("");
  }
  return (
    <>
      <HeaderList />
      <div className="Card-Add-User">
        <Card sx={{ minWidth: 200 }}>
          <Typography color="text.secondary" className="Typography-name">
            Add Info Teacher
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label className="add-Photo">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="addPhoto"
                  required
                />
                {<CloudUploadIcon />}
                Add pictures teacher
              </label>

              <label>
                <TextField
                  id="standard-textarea"
                  label="Teacher Name"
                  multiline
                  variant="standard"
                  value={Name}
                  onChange={handleTitleChange}
                  helperText={Name.length < 3 ? "Most be more than 3 char" : ""}
                  required
                />
              </label>
              {image && (
                <div className="user-info">
                  <img src={image} alt="photoTeacher" />
                  <h3>{Name}</h3>
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
  );
};

export default DataTeacher;

// const [users, setUsers] = useState([]); // تخزين قائمة المستخدمين

// const handleAddUser = (event) => {
//   event.preventDefault(); // منع إعادة تحميل الصفحة

//   const name = event.target.elements.name.value; // الحصول على اسم المستخدم
//   const image = event.target.elements.image.files[0]; // الحصول على صورة المستخدم

//   const newUser = {
//     name: name,
//     image: URL.createObjectURL(image), // تحويل الصورة إلى رابط URL
//   };

//   setUsers([...users, newUser]); // إضافة المستخدم الجديد إلى قائمة المستخدمين

//   event.target.elements.name.value = ''; // تنظيف حقل اسم المستخدم
//   event.target.elements.image.value = ''; // تنظيف حقل صورة المستخدم
// };

// return (
//   <div>
//     <h1>إضافة مستخدم</h1>
//     <form onSubmit={handleAddUser}>
//       <label>الاسم:</label>
//       <input type="text" name="name" required />
//       <br />
//       <label>الصورة:</label>
//       <input type="file" name="image" accept="image/*" required />
//       <br />
//       <button type="submit">إضافة</button>
//     </form>

//     <h2>قائمة المستخدمين</h2>
//     <div className="users">
//       {users.map((user) => (
//         <div key={user.name}>
//           <img src={user.image} alt={user.name} />
//           <p>{user.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );
