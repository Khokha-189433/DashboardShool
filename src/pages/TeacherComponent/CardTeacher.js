import React from 'react'
import { Button } from '@mui/material'
import { useState , useContext } from 'react'

import './Teacherpage.css'
///////////////////////////////////
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const CardTeacher = (props) => {
   return (
          <>
        
            {/* <div className='section-item'>
                    <div className='cards'>
                        <img  className='section-items-image'  />  
                        <div  className='section-item-content'>
                            <h4 className='section-item-title1'>
                                {props.title}
                            </h4>                                                 
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2} columns={16}>
                                <Grid item xs={8}>
                                <Button variant="outlined" startIcon={<DeleteIcon />}>
                                   Delete
                                </Button>
                                </Grid>
                                <Grid item xs={8}>
                                <Button  variant="outlined" endIcon={<ModeEditOutlineIcon />}>
                                  Edit
                               </Button>
                                </Grid>
                              </Grid>
                           </Box>    
                      </div>
                        
                    </div>   
                    
            </div>   */}
          </>
         )
}

export default CardTeacher