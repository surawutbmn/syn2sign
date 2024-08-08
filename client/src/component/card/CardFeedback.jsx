import React from "react";
import styled from "styled-components";

const CardFeedback = () => {
    return (
      <div className="d-flex row" style={{ marginTop: "-50px" }}>
        {/* <div className="col-4 text-start">img</div> */}
        <div className="col-7 text-start">
          <div className="txt-second txt-head2 txt-upper">Testing</div>
          <div className="txt-body2 mb-4">
            การทำ Usability Testing กับกลุ่มเป้าหมาย ช่วงอายุ 58-67 ปี
            ที่มีความสนใจ ในการทำกิจกรรมดูแลสุขภาพ • ทดสอบ เมื่อวันที่ 25
            กุมภาพันธ์ 2567
          </div>
          <div className="txt-body2 txt-grey mb-5">
            Usability testing with a target group aged 58-67 years who are interested in health care activities • Tested on February 25, 2024
          </div>
        </div>
        <div className="col-3"></div>
        <CircleContainer>
          <BoxCircle>
            <div className="txt-head3">ด้านการออกแบบ</div>
            <div className="txt-body3">ค่าเฉลี่ย</div>
            <div className="txt-second txt-bold" style={{fontSize: "5.5rem"}}>4.48</div>
          </BoxCircle>
  
          <BoxCircle>
            <div className="txt-head3">ด้านการใช้งาน</div>
            <div className="txt-body3">ค่าเฉลี่ย</div>
            <div className="txt-second txt-bold" style={{fontSize: "5.5rem"}}>4.37</div>
          </BoxCircle>
  
          <BoxCircle>
            <div className="txt-head3">ด้านภาพรวม</div>
            <div className="txt-body3">ค่าเฉลี่ย</div>
            <div className="txt-second txt-bold" style={{fontSize: "5.5rem"}}>4.39</div>
          </BoxCircle>
        </CircleContainer>

        <div className="col-12 text-start mt-4 mb-4 txt-head2 txt-sbold">
            ความคิดเห็นจากผู้ใช้งาน
        </div>
        
        <div className="col-4 text-start">
            <div className="txt-second txt-sbold txt-head3 mb-3">ด้านการออกแบบ</div>
            <div>แอปใช้งานง่าย, สีที่ใช้มีความสบายตา </div>
        </div>
        <div className="col-4 text-start">
        <div className="txt-second txt-sbold txt-head3 mb-3">ด้านการใช้งาน</div>
            <div>ชอบที่มีเสียงช่วยอ่าน และนับจำนวน ครั้งให้ เพราะบางประโยคมองไม่ค่อยชัด</div>
        </div>
        <div className="col-4 text-start">
        <div className="txt-second txt-sbold txt-head3 mb-3">ด้านภาพรวม</div>
            <div>ประโยคที่มีข้อความเยอะ ๆ จะอ่านยาก อยากให้ลดทอนข้อความลง</div>
        </div>
      </div>
    );
  };
  
  export default CardFeedback;

const BoxCircle = styled.div`
  width: 345px;
  height: 345px;
  border-radius: 50%;
  border: 1px solid #8e8e8e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Ensures text is centered within each div */
`;
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;