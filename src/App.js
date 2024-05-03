import './App.css';
// import Login from "./pages/Form_Login/Login.js"
import Home from "./pages/HOMEComponent/Home.js"
import Teacher from './pages/TeacherComponent/Teacher.js';
import Courses from './pages/Courses-Components/Courses.js';
import {Route , Routes , BrowserRouter as Router} from "react-router-dom"
import HeaderList from './pages/header&list/HeaderList.js';
import DataTeacher from './pages/TeacherComponent/DataTeacher.js'

function App() {

  return (
    <>
   
 <Router>
  <HeaderList />
    <Routes>
           <Route path="/home"    element={<Home />}   /> 
           <Route path="/hataTeacher"    element={<DataTeacher />}  /> 
           <Route path="/teacher" element={<Teacher />} />
           <Route path="/courses" element={<Courses />} />
    </Routes>
  </Router> 
  
    </>
  );
}

export default App;
