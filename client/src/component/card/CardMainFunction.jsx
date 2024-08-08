import React from "react";
import styled from "styled-components";
const CardMainFunction = () => {
  return (
    <div className="d-flex row justify-content-evenly" style={{marginTop: "-50px"}}>
      <Card className="col-4 text-center">
        <Icon src="/icon/prj/1Function.svg" className="mt-5" />
        <div className="txt-head3 txt-bold mt-4 mb-3">
          ตรวจสอบและประเมิน ความถูกต้องของท่าทาง
        </div>
        <div>
          <LineHr className=""></LineHr>
        </div>
        <div className="mt-3">
          สามารถตรวจสมรรถภาพทางกายของ ตนเองได้ว่ามีความเสี่ยงในการหกล้มหรือไม่
          โดยสามารถประเมินก่อนออกกำลังกาย และหลังออกกำลังกายได้
        </div>
      </Card>

      <Card className="col-4 text-center">
        <Icon src="/icon/prj/2Function.svg" className="mt-5" />
        <div className="txt-head3 txt-bold mt-4 mb-3">
          ตรวจจับท่าทาง การออกกำลังกายแบบเรียลไทม์
        </div>
        <div>
          <LineHr className=""></LineHr>
        </div>
        <div className="mt-3">
          มีฟังก์ชันในการตรวจจับท่าทางแบบเรียลไทม์ เพื่อตรวจสอบความถูกต้อง
          ว่าผู้ใช้งาน ทำท่าทางถูกต้องตามตัวอย่างหรือไม่
        </div>
      </Card>

      <Card className="col-4 text-center">
        <Icon src="/icon/prj/3Function.svg" className="mt-5" />
        <div className="txt-head3 txt-bold mt-4 mb-3">
          ติดตามผล ดูประวัติย้อนหลังแบบรายวัน
        </div>
        <div>
          <LineHr className=""></LineHr>
        </div>
        <div className="mt-3">
          เพื่อให้ผู้ใช้งานสามารถติดตามผล การออกกำลังกายได้จึงมีการเก็บข้อมูล
          ส่วนนี้ในรูปแบบของการสรุปผล
        </div>
      </Card>
      {/* <Card className="col-4">2</Card>
        <Card className="col-4">3</Card> */}
    </div>
  );
};

export default CardMainFunction;

const Card = styled.div`
  position: relative;
  width: 340px;
  height: 415px;
  border: 2px solid #8e8e8e;
  border-radius: 20px;
`;
const Icon = styled.img`
  width: 107px;
  height: 107px;
`;
const LineHr = styled.hr`
  border: 1px solid #fff;
  margin-top: 15px;
  margin-bottom: 50px;
  width: 100px;
  margin: 0 auto;
`;
