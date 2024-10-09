import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";


/////////////////////////////
const CoursesTable = (props) => {
  return (
    <>
      <div className="section-header-item">
        <div className="Table_Card">
          <table>
            <thead>
              <tr key={"header"}>
                <th>Title</th>
                <th>Price</th>
                <th>Teacher</th>
                <th>AboutCourse</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((course) => (
                <tr key={course.course_id}>
                  <td>{course.title}</td>
                  <td>{course.course_fee} </td>
                  <td>{course.teacher.name}</td>
                  <td>{course.about_the_course}</td>
                  <td>
                    <Grid item xs={8}>
                      <Link to="/Course" state={course}>
                        <Button>Open</Button>
                      </Link>
                    </Grid>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CoursesTable;

