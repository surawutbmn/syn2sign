import React, { useState, useEffect } from "react";
import "./Accordion.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import SectionTitle from "../../../component/SectionTitle";

interface AccordionItemProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  content,
  isOpen,
  onClick,
}) => (
  <div className="accordion-items">
    <div className="accordion-titles" onClick={onClick}>
      <span className="accordion-icon me-2">
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </span>
      <SectionTitle title={title} subtitle={subtitle} className={``} h_txt=" "/>
    </div>
    {isOpen && <div className="accordion-contents">{content}</div>}
  </div>
);

interface AccordionProps {
  items: {
    title: string;
    subtitle: string;
    content: React.ReactNode;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    items.map(() => true)  // Initialize all items as open
  );

  const handleItemClick = (index: number) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index];
    setOpenIndexes(newOpenIndexes);
  };

  useEffect(() => {
    // Optionally, you can perform any additional side effects here when items change
  }, [items]);

  return (
    <div className="accordions mt-5">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
          isOpen={openIndexes[index]}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
