import { Route, Routes } from "react-router-dom";

import Login from "./pages/Form_Login/Login.js";
import Page from "./pages/DashBourdPages/Page.js";
import Home from "./pages/HOMEComponent/Home.js";
////////////////techer///////////////////////
import Teacher from "./pages/TeacherComponent/Teacher.js";
import EditTeacher from "./pages/TeacherComponent/EditTeacher.js";
import DataTeacher from "./pages/TeacherComponent/DataTeacher.js";
import CardData from "./pages/TeacherComponent/CardData.js";
import AddUnit from "./pages/Courses-Components/UnitComponent/AddUnit.js";
//////////////// course /////////////////////
import Courses from "./pages/Courses-Components/Courses/Courses.js";
import AddClass from "./pages/Class-Components/AddClass.js";
import AddCourse from "./pages/Courses-Components/Course/AddCourse.js";
import Course from "./pages/Courses-Components/Course/Course.js";
import EditUnit from "./pages/Courses-Components/UnitComponent/EditUnit.js";
import UnitD from "./pages/Courses-Components/Lectures/UnitD.js";
import AddLecture from "./pages/Courses-Components/Lectures/AddLecture.js";
import EditLectuer from "./pages/Courses-Components/Lectures/EditLectuer.js";
import Lecture from "./pages/Courses-Components/Lectures/Lecture.js";
//////////////// course /////////////////////
import Start from "./pages/Start/Start.js";
import LogOutPages from "./pages/ContextToken/LogOutComponenet/LogOutPages.js";

export const url = "http://127.0.0.1:3010";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logOut" element={<LogOutPages />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dash" element={<Page />} />
        {/* teacher */}
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/dataTeacher" element={<DataTeacher />} />
        <Route path="/CardData" element={<CardData />} />
        <Route path="/EditTeacher" element={<EditTeacher />} />
        <Route path="/AddUnit" element={<AddUnit />} />
        <Route path="/EditUnit" element={<EditUnit />} />
        <Route path="/Unit" element={<UnitD />} />
        <Route path="/AddLecture" element={<AddLecture />} />
        <Route path="/EditLectuer" element={<EditLectuer />} />
        <Route path="/Lecture" element={<Lecture />} />

        {/*end teacher  */}
        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/AddClass" element={<AddClass />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/Course" element={<Course />} />
        {/*End Courses */}
      </Routes>
    </>
  );
}

export default App;
