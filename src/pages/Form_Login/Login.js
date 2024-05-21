import "./LoGin.css";
import Profile from "../Imags/profile.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import url from "../../App.js";


let token = null;

export default function Login() {
  const Navigate = useNavigate();
  // useState input //
  const [Email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [state, setState] = useState(false);

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
      const userData = {
        email: Email1,
        password: password1,
      };

    try {
      const { data } = await axios.post(`${url}/admin/login`, userData);
      
      sessionStorage.setItem("Token", data.data.accessToken);  
      //  localStorage.setItem("token", data.data.accessToken);
      setState(true) 
    }
    
    catch (error) {
      console.log(error);
    }
  }
   useEffect(() => {
     if (state) {
       Navigate("/dash", { replace: true });
     }
   }, [state, Navigate]);
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
                    required
                  ></input>
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="Password"
                    className="name"
                    value={password1}
                    onChange={handelpasswordchange}
                    required
                  ></input>
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
