import React, { Component } from "react";
import ViewIcon from "../assets/icons/svg/icon-views.svg";
import LikesIcon from "../assets/icons/svg/icon-likes.svg";

class MainContent extends Component {
  render() {
    return (
      <div>
        <section className="main__main-intro">
          <div className="main__bmx-header">
            <h1>BMX Rampage: 2018 Highlights</h1>
          </div>
          <div className="main__channel-author">
            <p>By Red Cow</p>
            <p>timestamp: new Date().getTime(),</p>
          </div>
          <div>
            <div className="main__social-icons">
              <img src={ViewIcon} alt="" />
              <p>1,001,023</p>
            </div>
            <div className="main__social-icons">
              <img src={LikesIcon} alt="Likes Icon" />
              <p>110,985</p>
            </div>
          </div>
        </section>
        <section>
          <article className="post">
            <p>
              On a gusty day in Southern Utah, a group of 25 daring mountain
              bikers blew the doors off what is possible on two wheels,
              unleashing some of the biggest moments the sport has ever seen.
              While mother nature only allowed for one full run before the
              conditions made it impossible to ride, that was all that was
              needed for event veteran Kyle Strait, who won the event for the
              second time -- eight years after his first Red Cow Rampage title
            </p>
          </article>
        </section>
      </div>
    );
  }
}
export default MainContent;
