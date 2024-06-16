import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GridDeleteIcon } from "@mui/x-data-grid";
import axios from "axios";
import { url } from "../../config";
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
        <div className="card-class" id={props.id}>
          <div className="section-header-item-content">
            <Grid container spacing={2} columns={8}>
              <Grid item xs={8}>
                <h4
                  className="section-item-title1"
                  style={{ marginBottom: "-10px" }}
                >
                  {props.title}
                </h4>
              </Grid>

              <Grid item xs={8}>
                <Button
                  startIcon={<GridDeleteIcon />}
                  style={{ marginTop: "35px", height: "32px" }}
                  onClick={() => {
                    deleteClass(props.id);
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard ;
