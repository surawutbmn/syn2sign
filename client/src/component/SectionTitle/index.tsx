import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className: string;
  h_txt: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className, subtitle,h_txt }) => {
  const classname = `text-start mb-5 ${className}`;
  const hTxt = `text-upper ${h_txt}`;
  return (
    <div className={classname}>
      <h3 className={hTxt}>
        <strong>{title}</strong>
      </h3>
      <span className="txt-grey">{subtitle}</span>
    </div>
  );
};

export default SectionTitle;
