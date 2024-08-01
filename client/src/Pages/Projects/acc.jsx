import { useState } from "react";
import "./Accordion.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";



const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-items">
    <div className="accordion-titles" onClick={onClick}>
      <span className="accordion-icon">
        {" "}
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </span>
      <div className="accordion-title-txt ms-2">
        <h3>
          <strong>{title}</strong>
        </h3>
        <span>(แนวคิดของผลงาน)</span>
      </div>
    </div>
    {isOpen && <div className="accordion-contents">{content}</div>}
  </div>
);

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordions">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
