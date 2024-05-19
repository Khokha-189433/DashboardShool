import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
 
const LogOutPages = () => {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.removeItem("Token");
    navigate("/login");
  }, []);
  return (
    <div>
      <p> LogOut..... </p>
    </div>
  );
};

export default LogOutPages;