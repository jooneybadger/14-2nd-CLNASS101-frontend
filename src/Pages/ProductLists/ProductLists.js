import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { API_List, API_YJ, API_YJ2 } from "../../config";
import MainNav from "./Components/MainNav";
import CategoryItems from "./Components/CategoryItems";
import Lists from "./Components/Lists";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductLists = () => {
  const [listHot, setListHot] = useState([]);
  const [listBest, setListBest] = useState([]);
  const [listAll, setListAll] = useState([]);
  const [slide, setSlide] = useState([]);
  const [productList, setProductList] = useState([]);
  const [items, setItems] = useState(8);
  const [preItems, setPreItems] = useState(0);

  useEffect(() => {
    fetch(API_YJ)
      .then((res) => res.json())
      .then((res) => {
        setListHot(res.ListHot);
        setListBest(res.ListBest);
        setSlide(res.SliderContent);
        setListAll(res.ListAll);
      });
  }, []);

  // const getData = () => {
  //   fetch(API_YJ2)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const result = res.data.slice(preItems, items);
  //       setProductList([...productList, ...result]);
  //     });
  // };

  // const infiniteScroll = () => {
  //   let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  //   let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  //   let clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setPreItems(items);
  //     setItems(items + 8);
  //     getData();
  //   }
  // };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SliderBtn />,
    prevArrow: <SliderButton />,
    color: "#000",
  };

  let slidesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    color: "#000",
  };

  return (
    <>
      <Nav />
      <ProductListsWrapper>
        <Wrapper>
          <MainNav />
          <WrapMainAd>
            <AdText>
              <h2>
                준비물까지 챙겨주는 <br />
                온라인 클래스
              </h2>
              <p>취미를 시작하는데 필요한 모든 것을 준비해드려요.</p>
            </AdText>
            <AdImage>
              <img
                src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2020/04/WeWork_CommonArea_Kitchen-1440x810.jpg"
                alt="creative"
              />
            </AdImage>
          </WrapMainAd>
          <CategoryItems />
          <WrapLists>
            <WrapHeader>
              <header>🔥 지금, 인기 TOP10</header>
            </WrapHeader>
            <WrapArrList>
              {listHot.map((list) => {
                return <Lists list={list} />;
              })}
            </WrapArrList>
          </WrapLists>
          <WrapLists>
            <WrapHeader>
              <header>🎁 실시간 BEST 클래스</header>
            </WrapHeader>
            <WrapArrList>
              {listBest.map((list) => {
                return <Lists list={list} />;
              })}
            </WrapArrList>
          </WrapLists>
          <Slide>
            <Slider {...settings}>
              {slide.map((slide) => {
                return (
                  <WrapSlide>
                    <Container>
                      <Blank />
                      <WrapText color={slide.color}>
                        <TextBox>
                          <h1>{slide.title}</h1>
                          <p>{slide.text}</p>
                          <button>더 알아보기</button>
                        </TextBox>
                      </WrapText>
                    </Container>
                    <Img src={slide.imgUrl} />
                  </WrapSlide>
                );
              })}
            </Slider>
          </Slide>
          <WrapLists>
            <WrapHeader>
              <header>🏁 전체 클래스</header>
            </WrapHeader>
            <WrapArrListAll>
              {listAll.map((list) => {
                return <Lists list={list} />;
              })}
            </WrapArrListAll>
          </WrapLists>
        </Wrapper>
      </ProductListsWrapper>
      <Footer />
    </>
  );
};

export default ProductLists;

const AlignCenter = css`
  display: flex;
  align-items: center;
`;

const JustifyCenter = css`
  display: flex;
  justify-content: center;
`;

const ProductListsWrapper = styled.div`
  ${AlignCenter}
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  width: 1176px;
  margin: 0 308px;
`;

const WrapMainAd = styled.section`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #222222;
  .adImg {
  }
`;

const AdText = styled.div`
  position: absolute;
  top: 46px;
  left: 48px;
  width: 330px;
  height: 126px;
  color: #fff;
  h2 {
    font-size: 2rem;
    letter-spacing: -0.6px;
  }
  p {
    margin-top: 12px;
    opacity: 0.55;
    font-size: 1rem;
    letter-spacing: -0.3px;
  }
`;

const AdImage = styled.div`
  img {
    position: absolute;
    left: 600px;
    width: 576px;
    height: 320px;
  }
`;

const WrapHeader = styled.div`
  position: relative;

  header {
    color: rgb(27, 28, 29);
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    letter-spacing: -0.4px;
  }
`;

const WrapLists = styled.section`
  margin-top: 48px;
`;

const WrapArrList = styled.div`
  display: flex;
`;

const WrapArrListAll = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Slide = styled.section`
  margin: 30px 0 100px 0;
  .slick-prev:before {
    opacity: 0.5; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    font-size: 28px;
  }
  .slick-next:before {
    opacity: 0.5;
    color: black;
    font-size: 28px;
  }
`;

const SliderBtn = styled.button`
  top: 175px;
  margin: 0 -7px;
`;

const SliderButton = styled.button`
  top: 175px;
  margin: 0 0 0 -11px;
`;

const WrapSlide = styled.section`
  position: relative;
  height: 300px;
`;

const Container = styled.div`
  width: 100%;
`;

const Blank = styled.div`
  height: 50px;
`;

const WrapText = styled.div`
  position: relative;
  background-color: ${(props) => (props.color === "pink" ? "#8E7A6A" : "black")};
  height: 250px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  color: white;
  font-weight: bold;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    font-weight: normal;
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
  }
`;

const Img = styled.img`
  position: absolute;
  right: 30px;
  bottom: 0px;
  height: 280px;
`;
