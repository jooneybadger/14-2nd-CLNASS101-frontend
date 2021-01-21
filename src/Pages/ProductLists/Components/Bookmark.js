import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Bookmark = ({ likes, handleChangeHeart }) => {
  return (
    <>
      <Image changeLikes={!likes}>
        <i className="fa fa-heart" onClick={handleChangeHeart} />
      </Image>
    </>
  );
};
export default Bookmark;

const Image = styled.div`
  i {
    color: ${(props) => (props.changeLikes ? "rgba(240 , 240 ,240 , 0.7)" : "red")};
    font-size: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;
