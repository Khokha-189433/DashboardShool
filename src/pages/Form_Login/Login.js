import "./LoGin.css";
import Profile from "../Imags/profile.png";
import { useState } from "react";
// import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const url = "http://127.0.0.1:3010";
export default function Login() {
  // useState input //
  const [Email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [accept, setaccept] = useState(false); /// بعد اول ضغطة ع ال submit  اذا كان الشرط مو محقق بيطلع الغلط

  // End useState input //

  const handelEmailchange = (e) => {
    setEmail(e.target.value);
  };
  const handelpasswordchange = (e) => {
    setPassword(e.target.value);
  };
  ////////////////////////////////////
  async function handelSubmit(e) {
    e.preventDefault();
    setaccept(true); // بحال الشرط محقق اعرض ال error
    let flags = true; // من اجل ارسال البيالنات بحال كانت القيمة true
    if (password1.length < 8 || !Email1.includes === "@wekrow.com") {
      flags = false;
    } else flags = true;
      try {
      if (flags) {
        const request = await axios.post(`${url}/admin/login`, {
          email: Email1,
          password: password1,
        });
       
         if(request.status === 200)
          {
             window.localStorage.setItem(
              "email",
               Email1
             );
            //  window.location.pathname = "/";  /// للانتقال الى الصفحة التالية 
           
          }
           console.log(request);
      }
     
        
      } catch (error) {
        console.log(error);
      
    }
    setEmail('');
    setPassword('');
    setaccept('')
  }
  //////////////////////////////////
  return (
    <>
      <div className="Main">
        <form onSubmit={handelSubmit}>
          <div className="sub-main">
            <div>
              <div className="Imgs">
                <div className="container-image">
                  <img src={Profile} className="profile"></img>
                </div>
              </div>
              <div>
                <h1> Login </h1>
                {/* /////////////////// */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="name"
                    value={Email1}
                    onChange={handelEmailchange}
                  ></input>
                  {accept && !Email1.includes === "@wekrow.com" && (
                    <p className="error">Please enter a valid email address </p>
                  )}
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="Password"
                    className="name"
                    value={password1}
                    onChange={handelpasswordchange}
                  ></input>
                  {password1.length < 8 && accept && (
                    <p className="error">Password Most be more than 8 char </p>
                  )}
                </div>
                <div className="login-button">
                  <button type="submit" className="Butt-login">
                    Login
                  </button>
                </div>
                <p className="link">
                  <a href="#" target="_blank">
                    Forget Password ?{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
