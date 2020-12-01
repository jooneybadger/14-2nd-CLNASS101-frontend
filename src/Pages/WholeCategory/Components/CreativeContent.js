import React, { Component } from "react";
import styled from "styled-components";
import { API_WC } from "../../../config";

class CreativeContent extends Component {
  constructor() {
    super();
    this.state = {
      creativeArr: [],
    };
  }

  componentDidMount() {
    fetch(API_WC)
      .then((res) => res.json())
      .then((res) => this.setState({ creativeArr: res.CreativeContent }));
  }

  render() {
    const { creativeArr } = this.state;
    return (
      <Creative>
        <div className="wrapSubHeader">
          <h2>크리에이티브</h2>
          <i class="fa fa-caret-right" />
        </div>
        <div className="contents">
          {creativeArr.map((content) => {
            return (
              <div key={content.id} className="content">
                {content.content}
              </div>
            );
          })}
        </div>
      </Creative>
    );
  }
}

export default CreativeContent;

const Creative = styled.div`
  width: 240px;

  &:hover {
    cursor: pointer;
  }

  .wrapSubHeader {
    display: flex;
    i {
      color: lightgray;
      font-size: 21px;
    }
    h2 {
      margin: 0px 11px 8px;
      color: rgb(27, 28, 29);
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      letter-spacing: -0.3px;
    }
  }

  .content {
    padding: 8px 12px;
    color: rgb(27, 28, 29);
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;

    &:hover {
      background-color: rgb(248, 248, 249);
      opacity: 0.9;
      border-radius: 3px;
    }
  }
`;
