import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Unit = () => {
  return (
    <>
      <div className="section-header-item">
        <div className="ButtonAddUnit">
          <Button> add Unit </Button>
        </div>

        <div className="card">
          <div className="section-header-item-content">
            <Box sx={{ flexGrow: 2 }}>
              <h2 className="section-header-item-title">
                Title <br />
              </h2>
              <h4 className="section-header-item-title">Number Unit</h4>
              <Grid container style={{ margin: "10" }}>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <Link>
                    <Button> open </Button>
                  </Link>
                  <Link>
                    <Button> open </Button>
                  </Link>
                  <Link>
                    <Button> open </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div className="card">
          <div className="section-header-item-content">
            <Box sx={{ flexGrow: 2 }}>
              <h2 className="section-header-item-title">
                Title <br />
              </h2>
              <h4 className="section-header-item-title">Number Unit</h4>
              <Grid container style={{ margin: "10" }}>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <Link>
                    <Button> open </Button>
                  </Link>
                  <Link>
                    <Button> open </Button>
                  </Link>
                  <Link>
                    <Button> open </Button>
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

export default Unit;
