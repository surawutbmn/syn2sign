import React from 'react'
import styled from "styled-components";
import DesignProcessSlider from '../Slider/DesignProcessSlider';
// import DesignProcessSlider from '../Slider/DesignProcessSlider';

const CardDesignProcess = () => {
  return (
    <div className='d-flex row' style={{marginTop: "-50px"}}>
        
<DesignProcessSlider/>
    </div>
  )
}

export default CardDesignProcess

const DesignProcess = styled.img`
    width: 180px;
    height: auto;
`