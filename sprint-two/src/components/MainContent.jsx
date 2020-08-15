import React from "react";
import Views from "../assets/icons/svg/icon-views.svg";
import Likes from "../assets/icons/svg/icon-likes.svg";

function MainContent(props) {
  const formattedTime = new Date().toLocaleDateString();
  return (
    <div className="mainContent">
      <section className="mainContent__main-intro">
        <div className="mainContent__headerDiv">
          <h1 className="mainContent__header">
            {" "}
            {props.mainContent && props.mainContent.title}
          </h1>
        </div>
        <div className="mainContent__author-socials">
          <div className="mainContent__authorDiv">
            <p className="mainContent__channel-author">
              {" "}
              {props.mainContent && props.mainContent.channel}
            </p>
            <p className="mainContent__time">{formattedTime}</p>
          </div>
          <div className="mainContent__socials">
            <div className="mainContent__iconsDiv mainContent__iconsDiv--pdright-tab">
              <img className="mainContent__icons" src={Views} alt="" />
              {props.mainContent && props.mainContent.views}
            </div>
            <div className="mainContent__iconsDiv mainContent__iconsDiv--pdright-desk">
              <img
                className="mainContent__icons"
                src={Likes}
                alt="Likes Icon"
              />
              {props.mainContent && props.mainContent.likes}
            </div>
          </div>
        </div>
      </section>

      <article className="mainContent__article">
        <p>{props.mainContent && props.mainContent.description}</p>
      </article>
    </div>
  );
}

export default MainContent;

//====================================================================//
//===================================================================//
