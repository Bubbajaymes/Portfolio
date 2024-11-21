import React from "react";
import theme from "../assets/theme_pattern.svg";
import mywork_Data from "../assets/mywork_data";
import {  ArrowRightOutlined } from '@ant-design/icons';

export default function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_Data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <ArrowRightOutlined className="arrow"/>
      </div>
    </div>
  );
}
