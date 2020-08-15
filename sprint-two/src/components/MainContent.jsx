import React from "react";
// import React, { Component } from "react";
import ViewIcon from "../assets/icons/svg/icon-views.svg";
import LikesIcon from "../assets/icons/svg/icon-likes.svg";

function MainContent() {
  const formattedTime = new Date().toLocaleDateString();
  return (
    <div className="mainContent">
      <section className="mainContent__main-intro">
        <div className="mainContent__headerDiv">
          <h1 className="mainContent__header">BMX Rampage: 2018 Highlights</h1>
        </div>
        <div className="mainContent__author-socials">
          <div className="mainContent__authorDiv">
            <p className="mainContent__channel-author">By Red Cow</p>
            <p className="mainContent__time">{formattedTime}</p>
          </div>
          <div className="mainContent__socials">
            <div className="mainContent__iconsDiv mainContent__iconsDiv--pdright-tab">
              <img className="mainContent__icons" src={ViewIcon} alt="" />
              <p className="mainContent__icon-count">1,001,023</p>
            </div>
            <div className="mainContent__iconsDiv mainContent__iconsDiv--pdright-desk">
              <img
                className="mainContent__icons"
                src={LikesIcon}
                alt="Likes Icon"
              />
              <p className="mainContent__icon-count">110,985</p>
            </div>
          </div>
        </div>
      </section>

      <article className="mainContent__article">
        <p>
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </article>
    </div>
  );
}

export default MainContent;

//====================================================================//
//===================================================================//
// class MovieDescription extends Component {
//   render() {
//     return (
//       <div className="movie__description">
//         <h1 className="movie__heading">
//           {this.props.movieDescription && this.props.movieDescription.title}
//         </h1>
//         <h3 className="movie__heading-two">
//           By{" "}
//           {this.props.movieDescription && this.props.movieDescription.channel}
//         </h3>
//         {/* <h3 className="movie__heading-two-special">
//   			{props.movieDescription && props.movieDescription.timestamp}
//   		</h3> */}
//         <div className="movie__icons-div">
//           <img src={Views} alt="views icon" className="movie__icons" />
//           <h3 className="movie__heading-three">
//             {this.props.movieDescription && this.props.movieDescription.views}
//           </h3>
//         </div>
//         <div className="movie__icons-div">
//           <img src={Likes} alt="likes icon" className="movie__icons" />
//           <h3 className="movie__heading-three">
//             {this.props.movieDescription && this.props.movieDescription.likes}
//           </h3>
//         </div>
//         <div className="movie__paragraph">
//           <p className="movie__paragraph-text">
//             {this.props.movieDescription &&
//               this.props.movieDescription.description}
//           </p>
//         </div>
//       </div>
//     );
//   }
