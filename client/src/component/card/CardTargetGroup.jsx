import React from 'react'
import styled from "styled-components";

const CardTargetGroup = () => {
  return (
    <div className='d-flex row text-start txt-body1 ' style={{ marginTop: "-50px" }}>
        <div className="Demography"><span className='txt-second txt-sbold'>Demography: </span><span className='txt-body2'>อายุ 58-67 ปี (ทุกเพศ)</span></div>
        <div className="Group"><span className='txt-second txt-sbold'>Group: </span><span  className='txt-body2'>ผู้สูงอายุุตอนต้น</span></div>
        <div className="Personality"><span className='txt-second txt-sbold'>Personality: </span><span  className='txt-body2'>กลุ่มวัยเกษียณหรือกำลังเกษียณ สามารถช่วยเหลือ ตัวเองได้ มีเวลาว่าง และรักที่จะเรียนรู้สิ่งใหม่ ๆ</span></div>
        <div className="Behavior"><span className='txt-second txt-sbold'>Behavior: </span><span  className='txt-body2'>มีพฤติกรรมชอบออกกำลังกายแบบเบาๆ มีความสนใจในการทำกิจกรรมที่เกี่ยวกับการดูแลสุขภาพ และใช้เทคโนโลยีเป็นประจำ</span></div>
    </div>
  )
}

export default CardTargetGroup