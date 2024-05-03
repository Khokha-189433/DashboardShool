import './LoGin.css' ;
import Profile from "../Imags/profile.png" ;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login()
{
    // useState input //
    const[Email1 , setEmail]= useState('');
    const[password1 , setPassword]= useState('');
    // End useState input //
    const Navigate = useNavigate();
    const handelEmailchange = (e)=>{
        setEmail(e.target.value)
    }
    const handelpasswordchange = (e)=>{
        setPassword(e.target.value)
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
    }
    function handeleLogin()
    {
      if(Email1 && password1 == '' )
      {
        alert("welcome")
        Navigate('/home')
      }
     
    }
    return(
        <> 
            <div className="Main">
              <form onSubmit={handelSubmit}> 
                 <div className="sub-main">
                    <div>
                       <div className="Imgs">
                         <div className="container-image">
                            <img src={Profile} className="profile" ></img>
                         </div>
                       </div> 

                       <div>
                            <h1> Login </h1>
                            {/* /////////////////// */}
                            <div>
                              
                              <input type="text" placeholder="Email"  className="name"  value={Email1} onChange={handelEmailchange}></input>
                            </div>
                            <div className="second-input">
                             
                              <input type="password" placeholder="Password" className="name" value={password1} onChange={handelpasswordchange} ></input>
                            </div>
                            <div className="login-button" >
                              <button onClick={handeleLogin} type="submit"  className='Butt-login'>Login</button> 
                             </div>
                            <p className="link"  >
                             <a href='#' target="_blank">Forget Password ? </a>
                            </p>
                          
                       
                       </div>

                    </div>
                 </div> 
            </form>
        </div> 

        </>
    )
}