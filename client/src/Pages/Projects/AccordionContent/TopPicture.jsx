import React from "react";
import styled from "styled-components";

const CardThreePictureProject = () => {
  // Extract the project identifier from the URL
  const url = window.location.href;
  const projectIdentifier = url.match(/cpl0\d+/)
    ? url.match(/cpl0\d+/)[0]
    : "cpl01"; // Default to cpl01 if no match is found

  return (
    <div className="d-flex row mt-5 mb-5">
      <CardBox className="col-4">
        <CardImage
          src={`${import.meta.env.VITE_BASE_URL}showcase/Project/${projectIdentifier}/preview-${projectIdentifier}-1.png`}
        />
      </CardBox>
      <CardBox className="col-4">
        <CardImage
          src={`${import.meta.env.VITE_BASE_URL}showcase/Project/${projectIdentifier}/preview-${projectIdentifier}-2.png`}
        />
      </CardBox>
      <CardBox className="col-4">
        <CardImage
          src={`${import.meta.env.VITE_BASE_URL}showcase/Project/${projectIdentifier}/preview-${projectIdentifier}-3.png`}
        />
      </CardBox>
    </div>
  );
};

export default CardThreePictureProject;

const CardBox = styled.div`
  width: 33.33%;
  height: auto;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
