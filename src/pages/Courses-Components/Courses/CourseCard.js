import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const CardPl = (props) => {
  return (
    <>
      <div className="section-header-item">
        <div className="card" id={props.id}>
          <img className="section-header-item-images" src={props.image} />
          <div className="section-header-item-content">
            <h4 className="section-header-item-title">
              {props.title} <br />
            </h4>
            <div className="Paraghraph-data">
              <p>
                <span> {props.price}</span>
              </p>
              <p>
                <span> {props.class}</span>
              </p>
              <p>
                <span> {props.teacher} </span>
              </p>
              <p>{props.aboutCourse}</p>
            </div>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={8} columns={8}>
                <Grid item xs={8}>
                  <Link to="/Course" state={props}>
                    <Button>Open</Button>
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

export default CardPl;
