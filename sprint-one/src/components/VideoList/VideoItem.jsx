import React from "react";

function VideoItem(props) {
  return (
    <div className="categories">
      <div className="categories__list">
        <div className="categories__imgDiv">
          <img
            className="categories__img"
            src={props.videoData.image}
            alt="Images"
          />
        </div>
        <div className="categories__video-info">
          <p className="categories__title">{props.videoData.title}</p>
          <p className="categories__channel">{props.videoData.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
