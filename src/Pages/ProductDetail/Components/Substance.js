import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_YJ_DETAIL } from "../../../config";

const Substance = ({ data }) => {
  return (
    <>
      <Wrapper>
        <SubstanceImage>
          <img src={data.imageUrl} alt="curriculumImage" />
        </SubstanceImage>
        <Text>
          <h3>{data.title}</h3>
          <Explain>
            <WrapExplain>
              <Number>{data && data.number}</Number>
              <Content>{data && data.content}</Content>
            </WrapExplain>
          </Explain>
        </Text>
      </Wrapper>
    </>
  );
};

export default Substance;

const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
  padding-top: 24px;
`;

const SubstanceImage = styled.div`
  margin-right: 25px;
  img {
    width: 220px;
    height: 123.75px;
  }
`;

const Text = styled.div`
  h3 {
    font-size: 20px;
    line-height: 28px;
    color: rgb(133, 138, 141);
    font-weight: normal;
  }
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const WrapExplain = styled.div`
  display: flex;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 10px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  font-size: 11px;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
`;
