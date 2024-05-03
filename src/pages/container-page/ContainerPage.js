import React from 'react'
import './containerPage.css'
const ContainerPage = (props) => {
  return (
    <>
    <div className='container-div'> 
    
           {props.children}
  
  </div>
    </>
  )
}

export default ContainerPage