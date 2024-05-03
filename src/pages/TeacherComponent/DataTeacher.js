import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const DataTeacher = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0])   //   شرط اذا كان العنصر يلي بدي دخله من نوع File 
    {
      setImage(URL.createObjectURL(event.target.files[0]));    
    }
  };

  const VisuallyHiddenInput = styled('input')({
    // clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      image: image,
      title: title,
    };

    // يمكنك هنا حفظ معلومات المستخدم في قاعدة البيانات أو معالجتها بطريقة أخرى
    console.log('معلومات المستخدم:', userInfo);

    // مسح الصورة والعنوان بعد الإرسال
    setImage(null);
    setTitle('');
  };
  return (
    <div  className='Card-Add-User'>
      <Card sx={{ minWidth: 200 }}>
      <Typography  color="text.secondary" className='Typography-name'>
       Add info Teacher
      </Typography>
      <CardContent>
    
      <form onSubmit={handleSubmit} className='Form-add-user' >
        <label>
            <Button
              component="label"
              role={undefined}
              // tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              accept="image/*"
              onChange={handleImageUpload} 
            >
              Add pictures  teacher 
              <VisuallyHiddenInput type="file" />
          </Button>
      </label>
        <label>
            <TextField
            id="standard-textarea"
            label="Teacher Name"
            placeholder="Enter your name "
            multiline
            variant="standard"
            value={title}
            onChange={handleTitleChange} 
          />
        </label>
      {image && (
          <div className="user-info">
            <img src={image} alt="photo Teacher" />
            <h3>{title}</h3>
          </div>
      )}
        <Button type="submit" color="secondary">إضافة</Button>
     </form>
        
    </CardContent>

  </Card>
   
     
    



      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Alert variant="filled" severity="success">
         This is a filled success Alert.
      </Alert> */}
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