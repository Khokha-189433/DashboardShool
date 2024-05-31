import { Route, Routes } from "react-router-dom";

import Login from "./pages/Form_Login/Login.js";
import Page from "./pages/DashBourdPages/Page.js";
import Home from "./pages/HOMEComponent/Home.js";
////////////////techer///////////////////////
import Teacher from "./pages/TeacherComponent/Teacher.js";
import EditTeacher from "./pages/TeacherComponent/EditTeacher.js";
import AddTeacher from "./pages/TeacherComponent/AddTeacher.js";
import CardData from "./pages/TeacherComponent/CardTeacher.js";
import AddUnit from "./pages/Courses-Components/UnitComponent/AddUnit.js";
//////////////// course /////////////////////
import Courses from "./pages/Courses-Components/Courses/Courses.js";
import AddClass from "./pages/Class-Components/AddClass.js";
import AddCourse from "./pages/Courses-Components/Course/AddCourse.js";
import Course from "./pages/Courses-Components/Course/Course.js";
import EditUnit from "./pages/Courses-Components/UnitComponent/EditUnit.js";
import Unit from "./pages/Courses-Components/UnitComponent/Unit.js";
import AddLecture from "./pages/Courses-Components/Lectures/AddLecture.js";
import EditLectuer from "./pages/Courses-Components/Lectures/EditLectuer.js";
import Lecture from "./pages/Courses-Components/Lectures/Lecture.js";
import AddVideo from "./pages/Courses-Components/Lectures/Videos/AddVideo.js";
import AddPDFLecture from "./pages/Courses-Components/Lectures/PDFComponent/AddPDFLecture.js";
import AddQuestion from "./pages/Courses-Components/Lectures/Question/AddQuestion.js";
////////////////Students////////////////////
import Students from "./pages/Students/Students.js";
import AddStudent from "./pages/Students/AddStudent.js";
//////////////// add Students////////////////////

//////////////// course /////////////////////
import Start from "./pages/Start/Start.js";
import LogOutPages from "./pages/ContextToken/LogOutComponenet/LogOutPages.js";
import CardTeacher from "./pages/TeacherComponent/CardTeacher.js";

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
        <Route path="/AddTeacher" element={<AddTeacher />} />
        <Route path="/CardData" element={<CardTeacher />} />
        <Route path="/EditTeacher" element={<EditTeacher />} />
        {/*end teacher  */}
        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/AddClass" element={<AddClass />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/Course" element={<Course />} />{" "}
        <Route path="/AddUnit" element={<AddUnit />} />
        <Route path="/EditUnit" element={<EditUnit />} />
        <Route path="/Unit" element={<Unit />} />
        <Route path="/AddLecture" element={<AddLecture />} />
        <Route path="/EditLectuer" element={<EditLectuer />} />
        <Route path="/Lecture" element={<Lecture />} />
        <Route path="/AddVideio" element={<AddVideo />} />
        <Route path="/AddPDFLecture" element={<AddPDFLecture />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
        {/*  students  */}
        <Route path="/Students" element={<Students />} />
        <Route path="/AddStudents" element={<AddStudent />} />
        {/*  end students  */}
      </Routes>
    </>
  );
}

export default App;
