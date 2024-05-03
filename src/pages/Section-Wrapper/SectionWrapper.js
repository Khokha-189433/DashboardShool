import React from 'react'
import './SectionWrapper.css'
const SectionWrapper = (props) => {
  return (
    <>
    <div className='Section-Wrapper'>
       {props.children}
    </div>
    
    </>
  )
}

export default SectionWrapper