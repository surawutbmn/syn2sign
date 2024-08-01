import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-start mb-4">
      <h3 className="txt-upper">
        <strong>{title}</strong>
      </h3>
      <span className="txt-grey">{subtitle}</span>
    </div>
  );
};

export default SectionTitle;
