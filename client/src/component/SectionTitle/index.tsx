import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className, subtitle }) => {
  const classname = `text-start mb-5 ${className}`;
  return (
    <div className={classname}>
      <h3 className="txt-upper">
        <strong>{title}</strong>
      </h3>
      <span className="txt-grey">{subtitle}</span>
    </div>
  );
};

export default SectionTitle;
