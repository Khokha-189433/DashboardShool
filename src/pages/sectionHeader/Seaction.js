import React from 'react'
import './Seaction.css'
const Seaction = (props) => {
  return (
    <>
        <div className='section-header'>
           <h3> {props.title} </h3>
        </div>
    </>
  )
}

export default Seaction