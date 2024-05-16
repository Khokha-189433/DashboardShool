import * as React from 'react';
import "./Courser.css";
import PlayList from './PlayList';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
///////////////////////
import HeaderList from '../header&list/HeaderList';

const Courses = () => {
  return (
    <>
      <HeaderList />
      <div className="container-div">
        <div className="hero-main">
          <div className="hero-text">
            <h5 className="hero-title">
              <em>C</em>ourse{" "}
            </h5>
            <Button variant="outlined" startIcon={<AddIcon />}>
              add Courser
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{ marginLeft: "12px" }}>
              add class
            </Button>
          </div>
        </div>
        <PlayList />
      </div>
    </>
  );
}

export default Courses