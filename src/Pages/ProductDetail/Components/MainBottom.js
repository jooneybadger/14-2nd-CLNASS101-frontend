import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainBottom = ({ mainImageBottom }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mainImageBottom);
  });

  return (
    <WrapMainBottom>
      {data?.map((image) => {
        return <img key={image.id} src={image.imageUrl} alt="bottomImages" />;
      })}
    </WrapMainBottom>
  );
};

export default MainBottom;

const WrapMainBottom = styled.div`
  display: flex;
  width: 50%;
  height: 304px;

  img {
    width: 341px;
    height: 100%;

    &:first-child {
      width: 376px;
    }

    &:last-child {
      margin-left: 8px;
    }
  }
`;
