import React from "react";
// import React, { Component } from "react";

function VideoItem(props) {
  return (
    // <li>
    //   <img src={props.videoData.image} alt="Images" />
    //   <h3>{props.videoData.title}</h3>
    //   <p>{props.videoData.channel}</p>
    // </li>

    <div className="categories">
      <h4 className="catogeries__header">Next Video</h4>
      <div className="categories__list">
        <div className="categories__imgDiv">
          <img
            className="categories__img"
            src={props.videoData.image}
            alt="Images"
          />
        </div>
        <div className="categories__video-info">
          <h3 className="categories__title">{props.videoData.title}</h3>
          <p className="categories__channel">{props.videoData.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
