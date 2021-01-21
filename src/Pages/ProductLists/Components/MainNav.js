import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { API_YJ } from "../../../config";

const MainNav = (props) => {
  const [NavContents, setNavContents] = useState([]);

  useEffect(() => {
    fetch(API_YJ, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setNavContents(res.NavContents));
  }, []);

  const goToCategory = () => {
    props.history.push("/WholeCategory");
  };

  return (
    <WrapMainNav>
      <NavContent>
        <img
          onClick={() => goToCategory()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="menu tab"
        />
      </NavContent>
      {NavContents.length > 0 &&
        NavContents.map((navContent) => {
          return (
            <Link to="" className="navTexts" key={navContent.id}>
              <div key={navContent.id} className="navContents">
                {navContent.content}
              </div>
            </Link>
          );
        })}
    </WrapMainNav>
  );
};

export default withRouter(MainNav);

const AlignCenter = css`
  display: flex;
  align-items: center;
`;

const JustifyCenter = css`
  display: flex;
  justify-content: center;
`;

const WrapMainNav = styled.section`
  ${AlignCenter};
  justify-content: flex-start;
  height: 50px;
  background-color: #ffffff;

  .navTexts {
    margin: 0 28px;
    font-size: 16px;
    text-decoration: none;
    color: black;

    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
      text-decoration: underline;
    }
  }
`;

const NavContent = styled.div`
  &:first-child {
    margin: 0 28px 0 0;
  }
  img {
    width: 24px;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      transition: 0.2s;
    }
  }
`;
