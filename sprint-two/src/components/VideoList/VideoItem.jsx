import React from "react";

function VideoItem(props) {
  return (
    <div className="video-list__videolist">
      <div className="video-list__list">
        <div className="video-list__imgDiv">
          <img
            className="video-list__img"
            src={props.videoData.image}
            alt="Images"
          />
        </div>
        <div className="video-list__video-info">
          <p className="video-list__title">{props.videoData.title}</p>
          <p className="video-list__channel">{props.videoData.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
