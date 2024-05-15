import "./App.css";
import { Route, Routes} from "react-router-dom";
import DataTeacher from "./pages/TeacherComponent/DataTeacher.js";
import CardData from "./pages/TeacherComponent/CardData.js";
import Login from "./pages/Form_Login/Login.js";
import Page from "./pages/DashBourdPages/Page.js";
import Home from "./pages/HOMEComponent/Home.js";
import Teacher from "./pages/TeacherComponent/Teacher.js";
import Courses from "./pages/Courses-Components/Courses.js";
import TokenProvider from "./pages/ContextToken/ContextToken.js";

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dash" element={<Page />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/dataTeacher" element={<DataTeacher />} />
            <Route path="/CardData" element={<CardData />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
  </>
  );
}

export default App;
