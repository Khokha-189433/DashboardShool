import { Route, Routes } from "react-router-dom";
import DataTeacher from "./pages/TeacherComponent/DataTeacher.js";
import CardData from "./pages/TeacherComponent/CardData.js";
import Login from "./pages/Form_Login/Login.js";
import Page from "./pages/DashBourdPages/Page.js";
import Home from "./pages/HOMEComponent/Home.js";
import Teacher from "./pages/TeacherComponent/Teacher.js";
import EditTeacher from "./pages/TeacherComponent/EditTeacher.js";
//////////////// course /////////////////////
import Courses from "./pages/Courses-Components/Courses.js";
//////////////// course /////////////////////
import Start from "./pages/Start/Start.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dash" element={<Page />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/dataTeacher" element={<DataTeacher />} />
        <Route path="/CardData" element={<CardData />} />
        <Route path="/EditTeacher" element={<EditTeacher />} />
        <Route path="/courses" element={<Courses />}>
          <></>
        </Route>
      </Routes>
    </>
  );
}

export default App;
