import React from "react";
import { Button } from "@mui/material";

import Grid from "@mui/material/Grid";
import { GridDeleteIcon } from "@mui/x-data-grid";
import axios from "axios";
import { url } from "../../config";
const ClassCard = (props) => {
  console.log(props);
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
        <div>
          <div className="Table_Card">
            <table>
              <thead>
                <tr key={"header"}>
                  <th>Title</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.class.map((Class) => (
                  <tr key={Class.class_id}>
                    <td>
                      {Class.name}
                    </td>
                    <td>
                      <Grid item xs={8}>
                        <Button
                          startIcon={<GridDeleteIcon />}
                          style={{ marginTop: "35px", height: "32px" }}
                          onClick={() => {
                            deleteClass(Class.class_id);
                          }}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard ;
