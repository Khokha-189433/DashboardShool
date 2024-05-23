import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { url } from "../../App";
const ClassCard = (props) => {

  async function deleteClass(id) {
    try {
      const response = await axios.delete(`${url}/class/${id}`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      console.log("User deleted successfully:", response.data); // Handle successful deletion
      // Update UI to reflect the deletion (optional)
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle errors (e.g., display an error message to the user)
    }
  }
  return (
    <>
      <div className="section-header-item">
        <div className="card" id={props.id}>
          <img className="section-header-item-images" src={props.image} />
          <div className="section-header-item-content">
            <h4 className="section-header-item-title">
              {props.title} <br />
            </h4>
            
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={8} columns={8}>
                <Grid item xs={8}>
                    <Button onClick={()=>{
                      deleteClass(props.id);}} >Delete</Button> 
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard ;
