import React from 'react'
import styled from "styled-components";
// import DesignProcessSlider from '../Slider/DesignProcessSlider';

const CardDesignProcess = () => {
  return (
    <div className='d-flex row' style={{marginTop: "-50px"}}>
        
        <div className="col">
           <DesignProcess src="/showcase/Project/cpl01/designProcess/Flow_01.png"/>
        </div>
        <div className="col">
           <DesignProcess src="/showcase/Project/cpl01/designProcess/Flow_02.png"/>
        </div>
        <div className="col">
           <DesignProcess src="/showcase/Project/cpl01/designProcess/Flow_03.png"/>
        </div>
        <div className="col">
           <DesignProcess src="/showcase/Project/cpl01/designProcess/Flow_04.png"/>
        </div>
        <div className="col">
           <DesignProcess src="/showcase/Project/cpl01/designProcess/Flow_05.png"/>
        </div>

   {/* <DesignProcess/> */}
    </div>
  )
}

export default CardDesignProcess

const DesignProcess = styled.img`
    width: 180px;
    height: auto;
`