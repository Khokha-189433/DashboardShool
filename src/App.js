import './App.css';
// import Login from "./pages/Form_Login/Login.js"
import Home from "./pages/HOMEComponent/Home.js"
import Teacher from './pages/TeacherComponent/Teacher.js';
import Courses from './pages/Courses-Components/Courses.js';
import {Route , Routes , BrowserRouter as Router} from "react-router-dom"
import HeaderList from './pages/header&list/HeaderList.js';
import DataTeacher from './pages/TeacherComponent/DataTeacher.js'
import CardData from './pages/TeacherComponent/CardData.js';
import Login from './pages/Form_Login/Login.js';

function App() {

  return (
    <>
   
   {/* <Login></Login> */}
 <Router>
  <HeaderList />
    <Routes>
           <Route path="/home"    element={<Home />}   /> 
           <Route path="/dataTeacher"    element={<DataTeacher />}  /> 
           <Route path="/CardData"    element={<CardData />}  /> 
          <Route path="/teacher" element={<Teacher />} />
           <Route path="/courses" element={<Courses />} />
           <Route path="/Login" element={<Login />} />
    </Routes>
  </Router> 
  
    </>
  );
}

export default App;
