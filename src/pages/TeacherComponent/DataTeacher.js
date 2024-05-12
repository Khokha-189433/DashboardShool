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
let teacher_photo = null;

const DataTeacher = (props) => {
  const url = "http://127.0.0.1:3010";
  const [image, setImage] = useState(null);
  const [Name, setName] = useState("");
  const [accept, setaccept] = useState(false); /// بعد اول ضغطة ع ال submit  اذا كان الشرط محقق طلع الغلط

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      //    شرط اذا كان العنصر يلي بدي دخله من نوع File صورة
      setImage(URL.createObjectURL(event.target.files[0]));
      teacher_photo = event.target.files[0];
    }
  };
  const VisuallyHiddenInput = styled("input")({
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleTitleChange = (event) => {
    setName(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setaccept(true);
    let flags = true; // من اجل ارسال البيالنات بحال كانت القيمة true
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("name", Name);
    formData.append("photo", teacher_photo);
    if (teacher_photo === null || Name.length.toString < 3) {
      flags = false;
    } else flags = true;
      
        try {
          if (flags) {
                const request = await axios.post(
                  `${url}/user/teacher`,
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                      authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoxLCJpYXQiOjE3MTU1MDc2NjYsImV4cCI6MTcxNTU5NDA2Nn0.B8F7tAi4RC4eWKEwXyouN-DR1GSeg9nlZ1QYXfLKZyc",
                    },
                  }
                );
                console.log(request.data);
          }
        } catch (error) {
          console.log(error);
        }
    setImage("");
    setName("");
     setaccept("")
  }

  return (
    <div className="Card-Add-User">
      <Card sx={{ minWidth: 200 }}>
        <Typography color="text.secondary" className="Typography-name">
          Add Info Teacher
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit} className="Form-add-user">
            <label>
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                accept="image/*"
                onChange={handleImageUpload}
              >
                Add pictures teacher
                <VisuallyHiddenInput type="file" />
              </Button>
            </label>

            <label>
              <TextField
                id="standard-textarea"
                label="Teacher Name"
                multiline
                variant="standard"
                value={Name}
                onChange={handleTitleChange}
                required={true}
              />
  
            </label>
            {image && (
              <div className="user-info">
                <img src={image} alt="photoTeacher" />
                <h3>{Name}</h3>
              </div>
            )}
            <Button type="submit" color="secondary">
              إضافة
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
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
