import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const ClassCard = (props) => {
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
                  <Link >
                    <Button>{props.NameButtun}</Button>{" "}
                  </Link>
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
