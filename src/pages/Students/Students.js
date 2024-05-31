import React from 'react'
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HeaderList from '../header&list/HeaderList.js';
import Seaction from "../sectionHeader/Seaction.js";
import SectionWrapper from "../Section-Wrapper/SectionWrapper.js";
import { Link } from "react-router-dom";
import './Styles.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../App.js";
const Students = () => {
  return (
    <>
      <HeaderList />
      <div className="container-div">
        <div className="hero-main">
          <div className="hero-text">
            <h5 className="hero-title">
              <em>S</em>tudents
            </h5>

            <Link to="/AddStudents">
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                style={{ marginLeft: "12px" }}
              >
                add Student
              </Button>
            </Link>
          </div>
        </div>
        <SectionWrapper>
          <Seaction title="Student"></Seaction>

          <div className="section-header-items">
            <div className="Table_Card">
              <table>
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Email </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> nazer </td>
                    <td> nazer123@gmail.com </td>
                  </tr>
                  <tr>
                    <td> nazer </td>
                    <td> nazer123@gmail.com </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionWrapper>
        <br />
      </div>
    </>
  );
}

export default Students
