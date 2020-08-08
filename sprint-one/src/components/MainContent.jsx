// import React from "react";
import React, { Component } from "react";
import ViewIcon from "../assets/icons/svg/icon-views.svg";
import LikesIcon from "../assets/icons/svg/icon-likes.svg";

class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <h1>BMX Rampage: 2018 Highlights</h1>
        </div>
        <div>
          <p>By Red Cow</p>
          <p>timestamp: new Date().getTime(),</p>
        </div>
        <div>
          <div>
            <img src={ViewIcon} alt="" />
            <p>1,001,023</p>
          </div>
          <div>
            <img src={LikesIcon} alt="Likes Icon" />
            <p>110,985</p>
          </div>
        </div>
      </div>
    );
  }
}
export default MainContent;
