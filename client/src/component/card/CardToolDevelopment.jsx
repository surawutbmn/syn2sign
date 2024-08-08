import React from 'react'
import styled from "styled-components";

const CardToolDevelopment = () => {
  return (
    <div className='d-flex row'>
        <div className="col-6 text-start">
            <div className="txt-second txt-head3 txt-upper">Coding Language</div>
            <div className='col-1'>
                <img src='/icon/prj/codingTools/swift.svg'></img>
                Swift
            </div>
            
            <div className="txt-second txt-head3 txt-upper">Database system</div>
            <div className='col-1'>
                <img src='/icon/prj/codingTools/firebase.svg'></img>
                Firebase
            </div>
        </div>
        <div className="col-6 text-start">
        <div className="txt-second txt-head3 txt-upper">CODING PLUGIN / LIBRARY</div>
            <div>QuickPose.ai (v.1.0.0)</div>
            <div className="txt-second txt-head3 txt-upper">CODING TOOLS</div>
            <div>Xcode</div>
        </div>
    </div>
  )
}

export default CardToolDevelopment