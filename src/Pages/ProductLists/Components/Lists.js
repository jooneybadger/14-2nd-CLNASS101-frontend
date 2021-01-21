import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Bookmark from "./Bookmark";

const Lists = (props) => {
  const list = props.list;
  const [likes, setLikes] = useState(false);
  const [likesNum, setLikesNum] = useState(0);

  useEffect(() => {
    setLikesNum(list.likes);
  }, []);

  console.log(likesNum);

  const handleChangeHeart = () => {
    setLikes(!likes);
    likes ? setLikesNum(likesNum - 1) : setLikesNum(likesNum + 1);
  };

  const goToDetail = () => {
    props.history.push(`/ProductDetail/${list.id}`);
  };

  const finalPrice = (list.Price * (100 - list.discountPer)) / 100;

  return (
    <WrapList>
      <ListInfo>
        <ProductImages>
          <img className="mainImage" src={list.imageUrl} alt="mainImage" onClick={goToDetail} />
          <Bookmark likes={likes} handleChangeHeart={handleChangeHeart} />
        </ProductImages>
        <Intro>
          <div className="category">
            {list.category}•{list.creator}
          </div>
          <div className="title">{list.title}</div>
          <Likes>
            <i className="fa fa-heart" />
            <span className="likesNum">{likesNum}</span>
          </Likes>
        </Intro>
        <Discount>
          <span className="originalPrice">{list.Price}원</span>
          <span className="discountPer">{list.discountPer}%</span>
        </Discount>
        <Price>
          <span className="monthlyPay">{finalPrice}원</span>
        </Price>
        <State>
          <span className="present">{list.present}</span>
          <span className="attendTerm">{list.availableTerm}</span>
        </State>
      </ListInfo>
    </WrapList>
  );
};

export default withRouter(Lists);

const WrapList = styled.div`
  display: flex;
`;

const ListInfo = styled.div`
  width: 276px;
  height: 384px;
  margin: 24px 24px 0 0;

  .commentState {
    margin-top: 10px;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;

    .comment {
      margin-right: 5px;
    }

    .commentTime {
      color: rgb(243, 51, 64);
    }
  }
`;

const ProductImages = styled.div`
  position: relative;
  overflow: hidden;

  .mainImage {
    width: 276px;
    height: 204px;

    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
      cursor: pointer;
    }
  }
  i {
    position: absolute;
    top: 12px;
    right: 14px;
  }
`;

const Intro = styled.div`
  .category {
    margin: 0px;
    color: rgb(27, 28, 29);
    font-weight: bold;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: normal;
  }
  .title {
    height: 40px;
    margin: 0px 0px 6px;
    color: rgb(27, 28, 29);
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;

    &:hover {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Likes = styled.div`
    display: flex;
    margin: 0px 8px 0px 0px;
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
    
    i {
      margin-right: 2px;
      color: rgb(133, 138, 141);
    }

    .likesNum {
      margin: 0px 8px 0px 0px;
      color: rgb(133, 138, 141);
      font-size: 11px;
      font-weight: normal;
      line-height: 16px;
      letter-spacing: normal;
    }

    .likesPer {
      margin: 0px 8px 0px 0px;
      color: rgb(133, 138, 141);
      font-size: 11px;
      font-weight: normal;
      line-height: 16px;
      letter-spacing: normal;
    }
  }
`;

const Discount = styled.div`
  margin-top: 10px;

  .originalPrice {
    margin-right: 5px;
    color: #8d8d93;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: -0.15px;
    text-decoration: line-through;
  }
  .discountPer {
    color: rgb(243, 51, 64);
    font-size: 11px;
    line-height: 16px;
    letter-spacing: normal;
    font-weight: bold;
  }
`;

const Price = styled.div`
  .monthlyPay {
    margin-right: 2px;
    color: rgb(27, 28, 29);
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    font-weight: bold;
  }
  .installment {
    color: rgb(27, 28, 29);
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
  }
`;

const State = styled.div`
  font-weight: bold;
  opacity: 0.7;
  .present {
    margin-right: 3px;
    padding: 2px;
    border-radius: 5px;
    color: rgb(243, 51, 64);
    background-color: #e9eaee;
    font-size: 9px;
    line-height: 12px;
    letter-spacing: normal;
  }
  .attendTerm {
    padding: 2px;
    border-radius: 5px;
    color: rgb(133, 138, 141);
    background-color: #e9eaee;
    font-size: 9px;
    line-height: 12px;
    letter-spacing: normal;
  }

  .availableTerm {
    padding: 2px;
    border-radius: 5px;
    color: rgb(243, 51, 64);
    background-color: #e9eaee;
    font-size: 9px;
    font-weight: bold;
  }
`;
