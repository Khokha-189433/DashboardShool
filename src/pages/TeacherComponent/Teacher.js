import * as React from 'react';
import './Teacherpage.css' ;
import CardData from './CardData.js';
import Seaction from '../sectionHeader/Seaction.js';
import SectionWrapper from '../Section-Wrapper/SectionWrapper.js';
import ContainerPage from '../container-page/ContainerPage.js';
import { Button } from '@mui/material';
import DataTeacher from './DataTeacher.js';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from   "react-router-dom"
function Teacher() {
   return (
<div className='Teacher'>
  <ContainerPage >
  <div className='hero-main'>
    <h5 className='hero-title'><em>T</em>eacher </h5>
   
   <Link to="/hataTeacher">
      <Button variant="outlined" startIcon={<GroupAddIcon />} className="Button-add-Teacher">
          add Teacher
      </Button>   
   </Link>
   
  </div>
     <SectionWrapper>
            <Seaction title='Teacher'> 
            </Seaction>
            <div className='section-items'>
               <CardData></CardData>
               <CardData></CardData>
               <CardData></CardData>
               <CardData></CardData>
               <CardData></CardData>
               <CardData></CardData>
               <CardData></CardData>
               <CardData></CardData>
            </div>
     </SectionWrapper>
 </ContainerPage>


 
</div>



  )
}

export default Teacher